export function regexValidation(obj) {
    const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
    const regexUsername = /[a-z]/

    if (!regexEmail.test(obj.email)) {
        return {regexMessage: "E-mail is not valid. Here is an example: 'user@gmail.com'"}
    }
    if(!regexUsername.test(obj.username)) {
        return {regexMessage: "Username is not valid. You can use taltaltal"}
    }
    return obj
}

export async function validateUser(obj) {
    if (!obj.username || obj.username > 30) {
        return { isValid: false, alertMessage: `Please provide a valid username. Maximum length is 30, yours ${obj.username.length}`}
    }
    if (!obj.email || obj.email > 70) {
        return { isValid: false, alertMessage: `Please provide a valid email. Maximum length is 70, yours ${obj.email.length}`}
    }

    const getData = async () => {
        const response = await fetch("http://localhost:4000/users")
        const data = await response.json()
        return data
    }
    const users = await getData()
    for (const user of users) {
        if (user.username === obj.username) {
            return { isValid: false, alertMessage: `Username ${obj.username} is already being used.`}
        }
        if (user.email === obj.email) {
            return { isValid: false, alertMessage: `The e-mail ${obj.email} is already being used.`}
        }
    }

    return {isValid: true, alertMessage: "User registered sucessfully"}
}
