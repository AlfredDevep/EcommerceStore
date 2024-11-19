import express from 'express';
const Router = express.Router();
import { 
    authUser,
    registerUser,
    logoutUser,
    getUserProfile,
    updateUserProfile,
    getUsers,
    deleteUsers,
    getUserById,
    updateUser
} from '../controllers/userController.js';
import { protect, admin } from '../middleware/authMiddleware.js';

Router.route('/').post(registerUser).get(protect, admin, getUsers);
Router.post('/logout', logoutUser);
Router.post('/auth', authUser);
Router.route('/profile').get(protect, getUserProfile).put(protect, updateUserProfile);
Router.route('/:id').delete(protect, admin, deleteUsers).get(protect, admin, getUserById).put(protect, admin, updateUser);

export default Router;





