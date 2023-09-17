import express from 'express';
import UserController from '../controllers/UserController';

const router = express.Router();

router.post('/user', UserController.createUser);
router.delete('/user/:id', UserController.deleteUser);
router.get('/user/:id', UserController.getUserById);
router.put('/user/:id', UserController.updateUser);

export default router;