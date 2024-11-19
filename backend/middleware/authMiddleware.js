import jwt from 'jsonwebtoken';
import express from 'express';
import cookieParser from 'cookie-parser';
import asyncHandler from './asyncHandler.js';
import User from '../models/userModel.js';

const app = express();
app.use(cookieParser());

// Protect routes

const protect = asyncHandler(async (req, res, next) => {

    let token;

    //Read the JWT from the cookie
    token = req.cookies.jwt;

    // Make sure token exists
    if (token) {
        try {
            // Verify token
            const decoded = jwt.verify(token, process.env.JWT_SECRET);

            // console.log(decoded);

            req.user = await User.findById(decoded.userId).select('-password');

            next();
        } catch (error) {
            // console.log(error);
            res.status(401);
            throw new Error('Not authorized, token failed');
        }
    }
    else{
        res.status(401);
        throw new Error('Not authorized to access this route');
    }
});

//Admin Middleware
const admin = (req, res, next) => {
    if(req.user && req.user.isAdmin){
        next();
    } else {
        res.status(401);
        throw new Error('Not authorized as an admin');
    }
};  


export { protect, admin };