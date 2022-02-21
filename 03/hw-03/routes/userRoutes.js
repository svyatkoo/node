const {Router} = require('express');
const userRouter = Router();
const userController = require('../controllers/userControllers');

userRouter.get('/', userController.renderUsers);

userRouter.get('/:userId', userController.renderUserById);

userRouter.post('/:userId', userController.deleteUser);


module.exports = userRouter;