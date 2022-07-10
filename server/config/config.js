require("dotenv").config();

module.exports = {
  development: {
    username: process.env.DB_USERNAME_DEV || "m",
    password: process.env.DB_PASSWORD_DEV || "",
    database: process.env.DB_DEV || "chapter_8_development",
    host: "127.0.0.1",
    dialect: "postgres",
  },
  test: {
    username: process.env.DB_USERNAME_TEST || "m",
    password: process.env.DB_PASSWORD_TEST || "",
    database: process.env.DB_TEST || "ch8-chapter_8_test",
    host: "127.0.0.1",
    dialect: "postgres",
  },
  production: {
    username: process.env.DB_USERNAME_PROD || "postgres",
    password: process.env.DB_PASSWORD_PROD || "postgres",
    database: process.env.DB_PROD || "ch8-chapter_8_production",
    host: "127.0.0.1",
    dialect: "postgres",
  },
};
