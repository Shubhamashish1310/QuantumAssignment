import User from "../models/User.js";

export default {
  async create(userDTO) {
    return User.create(userDTO);
  },

  async findByEmail(email, { withPassword = false } = {}) {
    // `select("+password")` only when caller explicitly needs the hash
    const query = User.findOne({ email: email.toLowerCase() });
    return withPassword ? query.select("+password") : query;
  }
};
