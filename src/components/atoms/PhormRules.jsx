const PhormRules = {
name: {
    pattern: /^[a-zA-Z\s]+$/,
    errorMsg: 'invalid name'
},
email: {
    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    errorMsg: 'invalid email'
},
password: {
    pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/,
    errorMsg: 'invalid password: needs 8-15 characters, at least one uppercase letter, one lowercase letter, one number and one special character'
}
}
export default PhormRules;