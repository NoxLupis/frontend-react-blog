import './App.css'
import {Route, Routes} from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import NewPost from "./pages/newPost/NewPost.jsx";
import BlogPostOverview from "./pages/blogPostOverview/BlogPostOverview.jsx";
import PageNotFound from "./pages/pageNotFound/PageNotFound.jsx";
import BlogPostDetails from "./pages/blogPostDetails/BlogPostDetails.jsx";
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
