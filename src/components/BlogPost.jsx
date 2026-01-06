import './BlogPost.css';
import {Link} from "react-router-dom";

function BlogPost({post}) {
    return (
        <article>
            <div className="article-header">
                <h3><Link to={`/blogs/${post.id}`}> {post.title} </Link></h3>
                <cite>{post.author}</cite>
            </div>
            <p>{post.comments} reacties ・ {post.shares} keer gedeeld</p>
        </article>
    );
}

export default BlogPost;