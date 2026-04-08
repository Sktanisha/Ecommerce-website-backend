const otpGenerator = require('otp-generator')
exports.otpGeneratorFn= ()=>{
    return otpGenerator.generate(6, { 
        digits: true,
        upperCaseAlphabets: false, 
        specialChars: false 
    });
}

module.exports = otp;