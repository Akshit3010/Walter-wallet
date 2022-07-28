import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

const MainRoutes = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Navbar />} />
            </Routes>
        </>
    );
};

export default MainRoutes;
