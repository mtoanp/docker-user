// USER : /api/users
// ----------------------------------------------------

const express = require("express");
const users = express.Router();
const userController = require("../controllers/UserController"); // instantiate
// const {
//   auth,
//   isAdmin,
//   isRightUser,
//   isRightUserOrAdmin,
// } = require("../middlewares/authJWT");

users.get("/", userController.findAll);
// users.get("/:uuid", auth, isRightUserOrAdmin, userController.findOne);
// users.post("/", auth, isAdmin, userController.create);
// users.put("/:uuid", auth, isAdmin, userController.update);
// users.delete("/:uuid", auth, isAdmin, userController.delete);

module.exports = users;
