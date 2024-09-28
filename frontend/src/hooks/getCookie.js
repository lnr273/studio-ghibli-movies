import Cookies from "js-cookie";

const getCookie = (cookieName) =>  {
    return Cookies.get(cookieName)
}

export default getCookie
