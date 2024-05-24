"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.offeredCourseRoutes = void 0;
const express_1 = __importDefault(require("express"));
const auth_1 = __importDefault(require("../../middlewares/auth"));
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const user_constant_1 = require("../User/user.constant");
const OfferedCourse_controller_1 = require("./OfferedCourse.controller");
const OfferedCourse_validation_1 = require("./OfferedCourse.validation");
const router = express_1.default.Router();
router.get('/', (0, auth_1.default)(user_constant_1.USER_ROLE.superAdmin, user_constant_1.USER_ROLE.admin, user_constant_1.USER_ROLE.faculty), OfferedCourse_controller_1.OfferedCourseControllers.getAllOfferedCourses);
router.get('/my-offered-courses', (0, auth_1.default)(user_constant_1.USER_ROLE.student), OfferedCourse_controller_1.OfferedCourseControllers.getMyOfferedCourses);
router.get('/:id', (0, auth_1.default)(user_constant_1.USER_ROLE.superAdmin, user_constant_1.USER_ROLE.admin, user_constant_1.USER_ROLE.faculty, user_constant_1.USER_ROLE.student), OfferedCourse_controller_1.OfferedCourseControllers.getSingleOfferedCourses);
router.post('/create-offered-course', (0, auth_1.default)(user_constant_1.USER_ROLE.superAdmin, user_constant_1.USER_ROLE.admin), (0, validateRequest_1.default)(OfferedCourse_validation_1.OfferedCourseValidations.createOfferedCourseValidationSchema), OfferedCourse_controller_1.OfferedCourseControllers.createOfferedCourse);
router.patch('/:id', (0, auth_1.default)(user_constant_1.USER_ROLE.superAdmin, user_constant_1.USER_ROLE.admin), (0, validateRequest_1.default)(OfferedCourse_validation_1.OfferedCourseValidations.updateOfferedCourseValidationSchema), OfferedCourse_controller_1.OfferedCourseControllers.updateOfferedCourse);
router.delete('/:id', (0, auth_1.default)(user_constant_1.USER_ROLE.superAdmin, user_constant_1.USER_ROLE.admin), OfferedCourse_controller_1.OfferedCourseControllers.deleteOfferedCourseFromDB);
exports.offeredCourseRoutes = router;
