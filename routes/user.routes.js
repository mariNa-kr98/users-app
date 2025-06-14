const express = require('express');
const router = express.Router();

const userController = require('../controllers/user.controller');
const verifyToken = require('../middlewares/auth.middleware').verifyToken;
const verifyRoles = require('../middlewares/auth.middleware').verifyRoles;

router.get('/', userController.findAll);
router.get('/:username', userController.findOne);
router.post('/', userController.create);
router.post('/', verifyToken, verifyRoles('ADMIN'), userController.create);
router.patch('/:username', verifyToken, verifyRoles, userController.update);
router.delete('/:username', verifyToken, verifyRoles, userController.deleteByUsername);
router.delete('/:username/email/:email', verifyToken, verifyRoles, userController.deleteByEmail)
router.get('/check_duplicate_email/:email', userController.checkDuplicateEmail);

module.exports = router;