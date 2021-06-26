const { check, validationResult} = require('express-validator');

exports.registerValidator = [
    check('email')
    .isEmail()
    .withMessage("Proper email is required")
    .notEmpty()
    .withMessage("Please enter email"),
    check('name')
    .notEmpty()
    .isLength({max:20})
    .withMessage('Name is not Proper'),
    check('password')
    .notEmpty()
    .withMessage('Require password')
    .isLength({min: 8})
    .withMessage("Minimum lenght required is 8")
    
];
exports.loginValidator =[
    check('email')
    .isEmail()
    .withMessage("Proper email is required")
    .notEmpty()
    .withMessage("Please enter email"),
    check('password')
    .notEmpty()
    .withMessage('Require password')
    .isLength({min: 8})
    .withMessage("Minimum lenght required is 8")
    
];

exports.resultValidator = (req, res, next) => {
    const errors = validationResult(req);
    if(errors.array().length > 0){
        return res.status(400).json({error: errors.array()[0].msg});
    }
    next();
}