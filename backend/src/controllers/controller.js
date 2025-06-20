import authService from "../services/service.js";
import userRepo from "../repositories/repository.js";

export const getAllUsers = async (req, res, next) => {
  try {
    const users = await userRepo.findAll(); // implement this
    res.json(users);
  } catch (err) {
    next(err);
  }
};
export const register = async (req, res, next) => {
  try {
    const { name, dob, email, password } = req.body;
    const data = await authService.register({ name, dob, email, password });
    res.status(201).json(data);
  } catch (err) {
    next(err);
  }
};

export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const data = await authService.login({ email, password });
    res.json(data);
  } catch (err) {
    next(err);
  }
};
