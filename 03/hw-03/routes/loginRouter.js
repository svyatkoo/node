const {Router} = require('express');
const loginRouter = Router();
const loginController = require('../controllers/loginControllers');
const loginFullData = require('../middleware/loginFullData');

loginRouter.get('/', loginController.renderLoginPage);

loginRouter.post('/', loginFullData, loginController.checkEmailAndLoginUser);

module.exports = loginRouter;