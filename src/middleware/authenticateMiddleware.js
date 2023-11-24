import jwt from 'jsonwebtoken';
const config = require('../config'); // Assuming you have a config.js file

const authenticateMiddleware = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  try {
    const decoded = jwt.verify(token, config.secretKey);
    req.user = decoded; // Attach user information to the request
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Unauthorized' });
  }
};

module.exports = authenticateMiddleware;
