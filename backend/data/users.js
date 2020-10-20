import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },

  {
    name: "saif ",
    email: "saif@example.com",
    password: bcrypt.hashSync("123456", 10),
  },

  {
    name: "misbah",
    email: "misbah@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
];
export default users;
