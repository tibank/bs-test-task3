const { Router } = require('express');
const UserService = require('../services/userService');
const { createUserValid, updateUserValid } = require('../middlewares/user.validation.middleware');
const { responseMiddleware } = require('../middlewares/response.middleware');

const router = Router();

// TODO: Implement route controllers for user
router.get('/', UserService.getAll, responseMiddleware);
router.get('/:id', UserService.search, responseMiddleware);
router.post('/', UserService.create, responseMiddleware);
router.put('/:id', UserService.update, responseMiddleware);
router.delete('/:id', UserService.delete, responseMiddleware);

module.exports = router;
