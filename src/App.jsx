import './App.css'
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home.jsx";
import NewPost from "./pages/NewPost.jsx";
import BlogPostOverview from "./pages/BlogPostOverview.jsx";
import PageNotFound from "./pages/PageNotFound.jsx";
import BlogPostDetails from "./pages/BlogPostDetails.jsx";
import Navbar from "./components/NavBar.jsx";
import Footer from "./components/Footer.jsx";

function App() {
    return (
        <div className="app-layout">
            <Navbar />

            <div className="page-container">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/create-post" element={<NewPost />} />
                    <Route path="/blogs" element={<BlogPostOverview />} />
                    <Route path="/blogs/:blogId" element={<BlogPostDetails />} />
                    <Route path="*" element={<PageNotFound />} />
                </Routes>
            </div>

            <Footer />
        </div>
    );
}


export default App
