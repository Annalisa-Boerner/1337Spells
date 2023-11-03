import { useEffect } from "react";
import { logout } from "../fetching";
import { useNavigate } from "react-router-dom";

export default function Logout({ token, setToken }) {
    const nav = useNavigate();

    useEffect(() => {
        logout();
        localStorage.removeItem("token");
        localStorage.removeItem("charName");
        localStorage.removeItem("charId");
        setToken(null);
        nav("/");
    });
}
