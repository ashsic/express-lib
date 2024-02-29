const bookInstance = require("../models/bookInstance");
const asyncHandler = require("express-async-handler");

// Display list of all bookInstances.
exports.bookInstance_list = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: bookInstance list");
});

// Display detail page for a specific bookInstance.
exports.bookInstance_detail = asyncHandler(async (req, res, next) => {
  res.send(`NOT IMPLEMENTED: bookInstance detail: ${req.params.id}`);
});

// Display bookInstance create form on GET.
exports.bookInstance_create_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: bookInstance create GET");
});

// Handle bookInstance create on POST.
exports.bookInstance_create_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: bookInstance create POST");
});

// Display bookInstance delete form on GET.
exports.bookInstance_delete_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: bookInstance delete GET");
});

// Handle bookInstance delete on POST.
exports.bookInstance_delete_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: bookInstance delete POST");
});

// Display bookInstance update form on GET.
exports.bookInstance_update_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: bookInstance update GET");
});

// Handle bookInstance update on POST.
exports.bookInstance_update_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: bookInstance update POST");
});
