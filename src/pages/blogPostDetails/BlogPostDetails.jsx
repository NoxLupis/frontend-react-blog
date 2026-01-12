import './BlogPostDetails.css';
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { formatDate } from "../../assets/helpers/dateFormatter.js";

function BlogPostDetails() {
    const { blogId } = useParams();
    const [post, setPost] = useState(null);

    useEffect(() => {
        async function fetchBlogPost() {
            try {
                const response = await axios.get(
                    `https://novi-backend-api-wgsgz.ondigitalocean.app/api/blogposts/${blogId}`,
                    {
                        headers: {
                            'novi-education-project-id': 'db48330c-5a2a-4718-930a-479161edeb37'
                        }
                    }
                );
                setPost(response.data);
            } catch (error) {
                console.log(error);
            }
        }

        void fetchBlogPost();
    }, [blogId]);

    if (!post) {
        return <p>Pagina wordt geladen...</p>;
    }

    return (
        <article className="blog">
            <h1>{post.title}</h1>
            <h2>{post.subtitle}</h2>
            <p>
                Geschreven door {post.author} op{" "}
                {formatDate(post.created, { variant: "long" })}
            </p>
            <p>⏲ {post.readTime} minuten lezen</p>
            <p>{post.content}</p>
            <p>{post.comments} reacties ・ {post.shares} keer gedeeld</p>
            <Link to="/blogs">Terug naar de overzichtspagina</Link>
        </article>
    );
}

export default BlogPostDetails;
