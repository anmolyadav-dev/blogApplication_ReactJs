import { useState, useEffect } from "react";

import "./App.css";
import { useDispatch } from "react-redux";
import authService from "./appwrite/auth";
import { login } from "./store/authSlice";
import { logout } from "./store/authSlice";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import { Outlet } from "react-router-dom";

function App() {
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();

    useEffect(() => {
        authService
            .getCurrentUser()
            .then((user) => {
                if (user) {
                    dispatch(login({ userData: user }));
                } else {
                    dispatch(logout());
                }
            })
            .finally(() => setLoading(false));
    }, []);

    return !loading ? (
        <>
            <div>
                <Header />
                TODO:
                <Outlet />
                <Footer />
            </div>
        </>
    ) : null;
}

export default App;
