import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import userRepo from "../repositories/repository.js";

const SALT_ROUNDS = 10;
const { JWT_SECRET, JWT_EXPIRES_IN = "1h" } = process.env;

function signToken(payload) {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });
}

export default {
  async register({ name, dob, email, password }) {
    if (await userRepo.findByEmail(email)) {
      throw new Error("Email already registered");
    }

    const hash = await bcrypt.hash(password, SALT_ROUNDS);
    const user = await userRepo.create({ name, dob, email, password: hash });

    const token = signToken({ id: user.id });
    return { token, user };
  },

  async login({ email, password }) {
    const user = await userRepo.findByEmail(email, { withPassword: true });
    if (!user) throw new Error("Invalid credentials");

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) throw new Error("Invalid credentials");

    user.password = undefined;            // scrub hash before returning
    const token = signToken({ id: user.id });
    return { token, user };
  }
};
