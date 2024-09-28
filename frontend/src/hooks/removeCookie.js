import Cookies from "js-cookie";

const removeCookie = (cookieName) =>  {
    return Cookies.remove(cookieName)
}

export default removeCookie
