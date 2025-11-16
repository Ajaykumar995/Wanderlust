const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const Listing = require('../models/listing.js');
const { isLoggedIn } = require("../middleware.js");
const { isOwner, validateListing } = require("../middleware.js");
const controller = require("../controllers/listings.js");
// console.log(controller); // Remove this log after debugging is complete
const multer = require('multer');
const { storage } = require("../cloudConfig.js");
const upload = multer({ storage });

router
    .route("/")
    .get(wrapAsync(controller.index))
    .post(isLoggedIn, upload.single('listing[image][url]'),validateListing, wrapAsync(controller.create))

// NEW Route (MUST be placed before the /:id route to prevent "Cast to ObjectId" error)
router.get("/new", isLoggedIn, controller.newlisting);

router
    .route("/:id")
    .get(wrapAsync(controller.show))
    .put(isLoggedIn, isOwner,upload.single('listing[image][url]'), validateListing, wrapAsync(controller.update))
    .delete(isLoggedIn, isOwner, wrapAsync(controller.deletelisting))


// Edit route
router.get("/:id/edit", isLoggedIn, isOwner, wrapAsync(controller.edit));


module.exports = router;