const router = require("express").Router();
const {
  createUser,
  getAllUsers,
  getUserById,
  updateUserById,
  deleteUserById,
  login,
  loginStatus,
  logout,
} = require("../../../controllers/userController");

router.route("/").get(getAllUsers).post(createUser);

router.post("/register", createUser);

router.get("/logout", logout);

router.route("/login").post(login).get(loginStatus);

router
  .route("/:userId")
  .get(getUserById)
  .put(updateUserById)
  .delete(deleteUserById);

module.exports = router;
