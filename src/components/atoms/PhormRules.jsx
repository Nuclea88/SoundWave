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
    errorMsg: 'invalid password'
}
}
export default PhormRules;