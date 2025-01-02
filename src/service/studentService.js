const prisma = require("../config/prisma");

const addPoints = async (value, userId) => {
  try {
    const point = await prisma.point.create({
      data: {
        value,
        userId,
      },
    });
    return point;
  } catch (error) {
    console.error("Error adding points:", error);
    throw error;
  }
};

const deductPoints = async (req, res) => {
  const { id, activity, points } = req.body;
  try {
    const updatedStudent = await prisma.student.update({
      where: { id },
      data: {
        points: { decrement: points },
        history: {
          create: { activity, points: -points },
        },
      },
    });

    res.json({
      message: "Points deducted successfully",
      student: updatedStudent,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

const getHistory = async (req, res) => {
  const { id } = req.params;
  try {
    const history = await prisma.history.findMany({
      where: { studentId: parseInt(id) },
      orderBy: { createdAt: "desc" },
    });

    res.json({ message: "History retrieved successfully", history });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

const getStudents = async (req, res) => {
  try {
    const students = await prisma.student.findMany({
      include: {
        points: true,
        history: true,
      },
    });

    return res.json({
      message: "Students retrieved successfully",
      data: students,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error", error });
  }
};

const getStudent = async (req, res) => {
  const { id } = req.params;
  try {
    const student = await prisma.student.findUnique({
      where: { id: Number(id) },
    });

    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }

    res.json({ student });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

const addStudentToUser = async (req, res) => {
  const { userId, nim, college, name, major } = req.body;

  try {
    const student = await prisma.student.create({
      data: {
        nim: nim,
        name: name,
        userId: userId,
        college: college,
        major: major,
      },
    });

    return res
      .status(201)
      .json({ message: "Student added successfully", student });
  } catch (error) {
    console.error("Error adding student:", error);
    return res.status(500).json({ message: "Error adding student", error });
  }
};

module.exports = {
  getStudent,
  addStudentToUser,
  getStudents,
  addPoints,
  deductPoints,
  getHistory,
};
