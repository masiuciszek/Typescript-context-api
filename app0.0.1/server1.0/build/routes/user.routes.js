"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var userController = __importStar(require("../controllers/user.controller"));
var express_1 = require("express");
var authHandler_1 = __importDefault(require("../middleware/authHandler"));
var imgUpload_1 = require("../utils/imgUpload");
var router = express_1.Router();
exports.router = router;
router.route("/me").get(authHandler_1.default, userController.getMe);
router.route("/me/update").put(authHandler_1.default, userController.updateMe);
router
    .route("/me/update_password")
    .post(authHandler_1.default, userController.updatePassword);
router.route("/me/forgot_password").post(userController.forgotPassword);
router
    .route("/me/resetpassword/:resettoken")
    .post(userController.resetPassword);
router
    .route("/me/avatar")
    .post(imgUpload_1.upload.single("avatar"), authHandler_1.default, userController.uploadAvatar);
router.route("/me/get_avatar").get(authHandler_1.default, userController.getAvatar);
router
    .route("/me/remove_avatar")
    .delete(authHandler_1.default, userController.deleteAvatar);
router.route("/me/remove").delete(authHandler_1.default, userController.removeMe);
router.route("/register").post(userController.registerUser);
//# sourceMappingURL=user.routes.js.map