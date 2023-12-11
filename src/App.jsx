import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./components/profile.jsx";
import Home from "./pages/home.jsx";
import Layout from "./components/layout.jsx";
import Sidebar from "./pages/sidebar.jsx";
import Trends from "./pages/trends.jsx";
import("./style/reset.css");
import("./style/App.css");

export default function App() {
    return (
        <BrowserRouter>
            <Layout>
                <Sidebar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/profile" element={<Profile />} />
                </Routes>
                <Trends />
            </Layout>
        </BrowserRouter>
    );
}
