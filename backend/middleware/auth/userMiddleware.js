const jwt=require('jsonwebtoken');
const userModel = require('../../model/auth/userModel');

const checkToken = async (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const accessToken = authHeader && authHeader.split(' ')[1];

  if (!accessToken) {
    return res.status(401).json({ message: 'Access token missing' });
  }

  jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET, async (err, decoded) => {
    if (err) {
      const refreshToken = req.cookies.refreshToken;
      if (!refreshToken) {
        return res.status(403).json({ message: 'Refresh token missing' });
      }

      try {
        const decodedRefresh = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);
        const user = await userModel.findOne({ _id: decodedRefresh.id, refreshToken });

        if (!user) {
          return res.status(403).json({ message: 'Invalid refresh token' });
        }

        const newAccessToken = jwt.sign(
          { id: user._id, email: user.email },
          process.env.ACCESS_TOKEN_SECRET,
          { expiresIn: '15m' }
        );

        return res.status(200).json({ accessToken: newAccessToken }); 
      } catch {
        return res.status(403).json({ message: 'Invalid refresh token' });
      }
    } else {
      req.user = decoded; 
      next();
    }
  });
};

module.exports = checkToken;


