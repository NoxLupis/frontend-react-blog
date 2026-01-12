import './BlogPostOverview.css';
import BlogPost from "../../components/BlogPost.jsx";
import axios from "axios";
import {useEffect, useState} from "react";

function BlogPostOverview() {
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    async function fetchBlogPosts() {
        try {
            const response = await axios.get('https://novi-backend-api-wgsgz.ondigitalocean.app/api/blogposts', {
                headers: {'novi-education-project-id':'db48330c-5a2a-4718-930a-479161edeb37',},
                params: {},
            })
            setPosts(response.data)
        } catch(error) {
            console.log(error);
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        void fetchBlogPosts();
    }, []);

    if (isLoading) {
        return <p>Pagina wordt geladen...</p>;
    }


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