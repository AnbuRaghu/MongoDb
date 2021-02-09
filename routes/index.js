const express = require("express");

const blogController = require("../controllers/blogs");

const router = express.Router();
                  //   classname.function name
router.get("/getblogs", blogController.getBlogs);

router.get("/getblogsbyid/:blogid", blogController.getBlogById);
router.post("/addblog", blogController.addBlog);
router.get("/getblogbyuser/:user", blogController.getBlogbyUser);

module.exports = router;
