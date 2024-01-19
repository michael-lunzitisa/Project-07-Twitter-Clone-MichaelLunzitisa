import Home from "./pages/home.jsx";
import Layout from "./components/layout.jsx";
import("./style/reset.css");
import("./style/App.css");
import Sidebar from "./components/sidebar/Sidebar.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Trends from "./components/trends/trends.jsx";
import Profile from "./pages/profile.jsx";

export default function App() {
    return (
        <BrowserRouter>
            <Sidebar />

            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/:author" element={<Profile />} />
                </Routes>
                <Trends />
            </Layout>
        </BrowserRouter>
    );
}
