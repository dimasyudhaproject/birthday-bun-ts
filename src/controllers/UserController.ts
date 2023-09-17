import { Request, Response } from 'express';
import UserRepository from '../repositories/UserRepository';

class UserController {
    public async createUser(req: Request, res: Response): Promise<Response> {
        try {
            const userData = req.body;
            const newUser = await UserRepository.createUser(userData);
            return res.status(201).json(newUser);
        } catch (error) {
            return res.status(400).json({ message: (error as Error).message });
        }
    }

    public async deleteUser(req: Request, res: Response): Promise<Response> {
        try {
            const userId = req.params.id;
            await UserRepository.deleteUser(userId);
            return res.status(204).send();
        } catch (error) {
            return res.status(400).json({ message: (error as Error).message });
        }
    }

    public async getUserById(req: Request, res: Response): Promise<Response> {
        try {
            const userId = req.params.id;
            const user = await UserRepository.getUserById(userId);
            if (user) {
                return res.status(200).json(user);
            }
            return res.status(404).json({ message: 'User not found' });
        } catch (error) {
            return res.status(400).json({ message: (error as Error).message });
        }
    }

    public async updateUser(req: Request, res: Response): Promise<Response> {
        try {
            const userId = req.params.id;
            const updates = req.body;
            const updatedUser = await UserRepository.updateUser(userId, updates);
            return res.status(200).json(updatedUser);
        } catch (error) {
            return res.status(400).json({ message: (error as Error).message });
        }
    }
}

export default new UserController();