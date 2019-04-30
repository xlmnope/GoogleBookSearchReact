const path = require("path");
const router = require("express").Router();
const booksRoutes = require("./books");

// Books routes match /api/books
router.use("/books", booksRoutes);


module.exports = router;