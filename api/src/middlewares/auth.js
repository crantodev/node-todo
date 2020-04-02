const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  // Get the authorization header
  const authHeader = req.headers["authorization"];
  if (!authHeader) {
    return res.status(403).json({ error: "Forbidden Access" });
  }

  // Remove the bearer word when is present
  const token = authHeader.replace("Bearer ", "");
  if (!token) {
    return res.status(403).json({ error: "Forbidden Access" });
  }

  try {
    // Verify if the JWT token is valid
    const auth = jwt.verify(token, "my_secret_word");
    req.user = auth.user;
    next();
  } catch (error) {
    return res.status(401).json(error);
  }
};
