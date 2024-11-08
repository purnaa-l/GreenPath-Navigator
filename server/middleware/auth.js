// middleware/auth.js
import jwt from 'jsonwebtoken';

// Middleware to authenticate token
export const authenticateToken = (req, res, next) => {
  const token = req.header('Authorization')?.split(' ')[1]; // Extract token from Authorization header

  if (!token) {
    return res.status(401).json({ message: 'Access denied, no token provided' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET); // Verify token with secret key
    req.userId = decoded.userId;  // Attach userId to the request object
    req.role = decoded.role;  // Attach role to the request object
    next();  // Proceed to the next middleware or route handler
  } catch (error) {
    res.status(400).json({ message: 'Invalid token' });
  }
};

// Middleware to check if the user is an admin
export const isAdmin = (req, res, next) => {
  if (req.role !== 'admin') {
    return res.status(403).json({ message: 'Access denied, admin role required' });
  }
  next();  // Proceed if the user is an admin
};
