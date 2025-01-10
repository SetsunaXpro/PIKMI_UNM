const prisma = require("../config/prisma");

const assignRole = async (req, res) => {
  const { userId, role, name, college, major, code, email, nim } = req.body;

  // Memastikan data yang diperlukan ada sesuai dengan role yang dipilih
  if (!userId || !role || !name || !college || !major || !email) {
    return res.status(400).json({
      message:
        "Semua data (userId, role, name, college, major, email) harus diberikan",
    });
  }

  // Validasi data berdasarkan role
  if (role === "STUDENT" && !nim) {
    return res.status(400).json({
      message: "Data nim harus diberikan untuk role 'STUDENT'",
    });
  }

  if (role === "MODERATOR" && !code) {
    return res.status(400).json({
      message: "Data code harus diberikan untuk role 'MODERATOR'",
    });
  }

  try {
    // Mencari user berdasarkan userId
    const user = await prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      return res.status(404).json({ message: "User tidak ditemukan" });
    }

    // Menangani role "STUDENT"
    if (role === "STUDENT") {
      const studentExist = await prisma.student.findUnique({
        where: { userId },
      });

      if (studentExist) {
        return res
          .status(400)
          .json({ message: "User sudah memiliki peran sebagai mahasiswa" });
      }

      const student = await prisma.student.create({
        data: {
          userId: userId,
          name: name,
          nim: nim, // Menambahkan nim untuk role student
          college: college,
          major: major,
          email: email,
        },
      });

      return res.status(201).json({
        message: "Peran mahasiswa berhasil ditambahkan",
        data: student,
      });
    }

    // Menangani role "MODERATOR"
    if (role === "MODERATOR") {
      const moderatorExist = await prisma.moderator.findUnique({
        where: { userId },
      });

      if (moderatorExist) {
        return res
          .status(400)
          .json({ message: "User sudah memiliki peran sebagai moderator" });
      }

      const moderator = await prisma.moderator.create({
        data: {
          userId: userId,
          name: name,
          college: college,
          major: major,
          code: code, // Menambahkan code untuk role moderator
          email: email,
        },
      });

      return res.status(201).json({
        message: "Peran moderator berhasil ditambahkan",
        data: moderator,
      });
    }

    return res.status(400).json({ message: "Role tidak valid" });
  } catch (error) {
    // Menangani error jika terjadi
    console.error("Error assigning role:", error);
    if (error.code === "P2002") {
      return res.status(400).json({ message: "User sudah memiliki peran ini" });
    }
    res.status(500).json({ message: "Terjadi kesalahan pada server" });
  }
};

module.exports = { assignRole };
