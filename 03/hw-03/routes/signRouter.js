const {Router} = require('express');
const signRouter = Router();
const signControllers = require('../controllers/signControllers');
const signMiddleware = require('../middleware/isUserValid');

signRouter.get('/', signControllers.renderSignInPage);

signRouter.post('/', signMiddleware, signControllers.signInUser);

module.exports = signRouter;