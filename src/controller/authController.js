const { registerUser, loginUser } = require("../service/authService");
const { generateToken } = require("../util/tokenUtils");

const register = async (req, res) => {
  try {
    await registerUser(req, res);
  } catch (error) {
    console.error("Error registering user", error);
    res.status(500).json({ message: "Error registering user", error });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await loginUser(email, password);

    const token = generateToken(user);

    res.status(200).json({ message: "Login successful", token });
  } catch (error) {
    console.error({ message: "Error logging in", error });
    res.status(401).json({
      message: "Invalid email or password",
      error,
    });
  }
};

const logout = (req, res) => {
  res.status(200).json({ mesagge: "Logout Successful" });
};

module.exports = { register, login, logout };
