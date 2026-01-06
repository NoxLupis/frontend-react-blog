import './BlogPostDetails.css';
import posts from '../constants/data.json';
import {Link, useParams} from "react-router-dom";
import {formatDate} from "../assets/helpers/dateFormatter.js";

function BlogPostDetails() {
    const {blogId} = useParams();
    const id = Number(blogId);
    const post = posts.find(p => p.id === id);

    return (
        <>
            <article className="blog">
                <h1>{post.title}</h1>
                <h2>{post.subtitle}</h2>
                <p>Geschreven door {post.author} op {formatDate(post.created, {variant: "long"})}</p>
                <p>⏲ {post.readTime} minuten lezen</p>
                <p>{post.content}</p>
                <p>{post.comments} reacties ・ {post.shares} keer gedeeld</p>
                <Link to="/blogs">Terug naar de overzichtspagina</Link>
            </article>
        </>
    );
}

export default BlogPostDetails;