import './BlogPostOverview.css';
import posts from '../constants/data.json'
import BlogPost from "../components/BlogPost.jsx";

function BlogPostOverview() {
    return (
        <>
            <h1>Bekijk alle {posts.length} posts op het platform</h1>
            <div className="article-wrapper">
            {posts.map(post => (
                <BlogPost key={post.id} post={post} />
            ))}
            </div>
        </>
    );
}

export default BlogPostOverview;