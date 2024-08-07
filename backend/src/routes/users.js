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
users.get("/:uuid", userController.findByUuid);
users.post("/", userController.create);
users.put("/:uuid", userController.update);
users.delete("/:uuid", userController.deleteByUuid);

module.exports = users;
