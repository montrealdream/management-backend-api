// package
const express = require('express');

// controller
const accountController = require('../../controllers/admin/account.controller');

// helper
const asyncHandler = require('../../helpers/asyncHandler.helper');

// Tạo instance route
const router = express.Router();

// [GET]


// [POST]
router.post('/create', asyncHandler(accountController.createAccount));


// [PATCH]



// exports
module.exports = router;