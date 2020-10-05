const { Router } = require("express");
const router = Router();
const {
  createUser,
  getAllUsers,
  getAUser,
  deleteAUser,
  updateAUser,
} = require("../controllers/userControllers");

router.post("/user", createUser);
router.get("/users", getAllUsers);
router.get("/user/:id", getAUser);
router.put("/user/:id", updateAUser);
router.delete("/user/:id", deleteAUser);

module.exports = router;
