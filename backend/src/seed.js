require("dotenv").config();
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const User = require("./models/User");
const Category = require("./models/Category");
const SubCategory = require("./models/SubCategory");

const categoriesData = [
  {
    name: "Computer Science",
    subCategories: ["React", "Python", "Algorithms", "Operating Systems", "Databases"],
  },
  {
    name: "Mathematics",
    subCategories: ["Linear Algebra", "Calculus", "Probability", "Statistics"],
  },
  {
    name: "Physics",
    subCategories: ["Mechanics", "Electricity", "Waves", "Quantum Physics"],
  },
  {
    name: "Chemistry",
    subCategories: ["Atoms & Molecules", "Organic Chemistry", "Biochemistry"],
  },
  {
    name: "Life Sciences",
    subCategories: ["Genetics", "Cell Biology", "Human Body", "Ecology"],
  },
  {
    name: "Earth & Space Science",
    subCategories: ["Astronomy", "Planets", "Climate", "Geology"],
  },
  {
    name: "Psychology",
    subCategories: ["Learning", "Memory", "Motivation", "Cognitive Psychology"],
  },
  {
    name: "Data Science",
    subCategories: ["Machine Learning", "Data Visualization", "NLP", "Data Analysis"],
  },
];

const seed = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB connected");

    await User.deleteMany({});
    await Category.deleteMany({});
    await SubCategory.deleteMany({});

    const hashedPassword = await bcrypt.hash("Admin1234", 10);

    await User.create({
      name: "System Admin",
      phone: "0500000000",
      email: "admin@scimentor.com",
      password: hashedPassword,
      role: "admin",
    });

    for (const categoryItem of categoriesData) {
      const category = await Category.create({
        name: categoryItem.name,
      });

      const subCategories = categoryItem.subCategories.map((subName) => ({
        name: subName,
        category: category._id,
      }));

      await SubCategory.insertMany(subCategories);
    }

    console.log("Seed completed successfully");
    process.exit();
  } catch (error) {
    console.error("Seed failed:", error);
    process.exit(1);
  }
};

seed();