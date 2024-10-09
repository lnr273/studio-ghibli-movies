import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Movie from "./pages/Movie";
import Favorites from "./pages/Favorites";
import Page404 from "./pages/Page404";
import Search from "./pages/Search";
import About from "./pages/About";
import MyAccount from "./pages/MyAccount";
import EmailRecovery from "./pages/EmailRecovery";
import ResetPassword from "./pages/ResetPassword";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} ></Route>
                <Route path="/movies" element={<Movies />} ></Route>
                <Route path="/movies/:id" element={<Movie />} ></Route>
                <Route path="/favorites" element={<Favorites />} ></Route>
                <Route path="/about" element={<About />} ></Route>
                <Route path="/search/:s" element={<Search />} ></Route>
                <Route path="/myaccount" element={<MyAccount />} ></Route>
                <Route path="/myaccount/change-password" element={<EmailRecovery />} ></Route>
                <Route path="/myaccount/reset-password/:token" element={<ResetPassword />} ></Route>
                <Route path="*" element={<Page404 />} ></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes
