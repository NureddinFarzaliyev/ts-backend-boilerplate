import { Request, Response } from "express";

export const getAllUsers = async (_: Request, res: Response) => {
  try {
    const users = [
      { id: 1, name: "John" },
      { id: 2, name: "Doe" },
    ];
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: "Error fetching users" });
  }
};
