const prisma = require("../config/prisma");

const registerUser = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const newUser = await prisma.user.create({
      data: {
        username: username,
        email: email,
        password: password,
      },
    });

    res
      .status(201)
      .json({ message: "User registered successfully", user: newUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error", error });
  }
};

const loginUser = async (email, password) => {
  const user = await prisma.user.findUnique({
    where: { email: email },
  });

  if (!user) throw new Error("User not found");

  if (user.password !== password) {
    throw new Error("Invalid password");
  }

  return user;
};

module.exports = { registerUser, loginUser };
