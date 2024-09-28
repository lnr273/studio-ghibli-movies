import Cookies from "js-cookie";

const setCookie = (cookieName, user) =>  {
    Cookies.set(cookieName, user, {
        expires: 1,
        secure: true,
        sameSite: "strict",
        path: "/"
    })
}

export default setCookie
