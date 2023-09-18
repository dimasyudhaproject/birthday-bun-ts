import { Router } from 'express';
import UserController from '../controllers/UserController';

const router = Router();

/**
 * @swagger
 * /user:
 *   post:
 *     tags:
 *       - Users
 *     description: Creates a new user
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: user
 *         description: User object
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/User'
 *     responses:
 *       200:
 *         description: Successfully created
 *       400:
 *         description: Invalid user input
 */
router.post('/user', UserController.createUser);

/**
 * @swagger
 * /user/{userId}:
 *   delete:
 *     tags:
 *       - Users
 *     description: Deletes a user
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: userId
 *         description: User's id
 *         in: path
 *         required: true
 *         type: integer
 *     responses:
 *       200:
 *         description: Successfully deleted
 *       400:
 *         description: Invalid user id
 */
router.delete('/user/:userId', UserController.deleteUser);

/**
 * @swagger
 * /user/{userId}:
 *   put:
 *     tags:
 *       - Users
 *     description: Updates a single user
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: userId
 *         description: User's id
 *         in: path
 *         required: true
 *         type: integer
 *       - name: user
 *         description: User object
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/User'
 *     responses:
 *       200:
 *         description: Successfully updated
 *       400:
 *         description: Invalid user id
 *       404:
 *         description: User not found
 */
router.put('/user/:userId', UserController.updateUser);

/**
 * @swagger
 * definitions:
 *   User:
 *     properties:
 *       id:
 *         type: integer
 *       firstName:
 *         type: string
 *       lastName:
 *         type: string
 *       email:
 *         type: string
 *       birthday:
 *         type: string
 *         format: date-time
 *       location:
 *         type: string
 */

export default router;