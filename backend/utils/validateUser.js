export function validateUser(obj) {
    const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
    const regexUsername = /^[\w-\._-]+$/

    if (!regexEmail.test(obj.email)) {
        return { isValid: false, alertMessage: "E-mail is not valid. Here is an example: 'user@gmail.com'"}
    }
    if(!regexUsername.test(obj.username)) {
        return { isValid: false, alertMessage: "Username is not valid. Special characters accepted are: . - _"}
    }
    if (!obj.username || obj.username > 30) {
        return { isValid: false, alertMessage: `Please provide a valid username. Maximum length is 30, yours ${obj.username.length}`}
    }
    if (!obj.email || obj.email > 100) {
        return { isValid: false, alertMessage: `Please provide a valid email. Maximum length is 100, yours ${obj.email.length}`}
    }

    return {isValid: true, alertMessage: "User registered sucessfully"}
}
