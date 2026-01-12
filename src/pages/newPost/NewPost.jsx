import './NewPost.css';
import { useForm } from 'react-hook-form';
import { calculateReadTime } from "../../assets/helpers/calculateReadTime.js";
import FormField from "../../components/FormField.jsx";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

function NewPost() {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [isLoading, setIsLoading] = useState(false);
    const [apiError, setApiError] = useState(null);
    const [successPostId, setSuccessPostId] = useState(null);

    const onSubmit = async (data) => {
        const enrichedData = {
            ...data,
            shares: 0,
            comments: 0,
            createdAt: new Date().toISOString(),
            readTime: calculateReadTime(data.Blogpost)
        };

        setIsLoading(true);
        setApiError(null);
        setSuccessPostId(null);

        try {
            const response = await axios.post(
                'https://novi-backend-api-wgsgz.ondigitalocean.app/api/blogposts',
                enrichedData,
                {
                    headers: {
                        'novi-education-project-id': 'db48330c-5a2a-4718-930a-479161edeb37',
                        'Content-Type': 'application/json'
                    }
                }
            );

            const createdPost = response.data;
            setSuccessPostId(createdPost.id);
            reset();

        } catch (error) {
            console.error(error);
            setApiError('Er is iets misgegaan bij het aanmaken van de blog.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <h1>Post toevoegen</h1>
            {apiError && <p className="error">{apiError}</p>}

            {successPostId && (
                <p className="success">
                    De blogpost is succesvol toegevoegd. Je kunt deze{" "}
                    <Link to={`/blogs/${successPostId}`}>hier bekijken</Link>.
                </p>
            )}

            <div className="form-wrapper">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <FormField
                        id="title"
                        label="Titel"
                        register={register}
                        validation={{ required: "Titel is verplicht", maxLength: { value: 50, message: "Max 50 tekens" } }}
                        errors={errors}
                    />

                    <FormField
                        id="subtitle"
                        label="Subtitel"
                        register={register}
                        validation={{ required: "Subtitel is verplicht", maxLength: { value: 100, message: "Max 100 tekens" } }}
                        errors={errors}
                    />

                    <FormField
                        id="author"
                        label="Naam en achternaam"
                        register={register}
                        validation={{ required: "Auteur is verplicht" }}
                        errors={errors}
                    />

                    <FormField
                        id="content"
                        label="Blogpost"
                        register={register}
                        validation={{
                            required: "Blogpost is verplicht",
                            minLength: { value: 300, message: "Minimaal 300 tekens" },
                            maxLength: { value: 2000, message: "Maximaal 2000 tekens" }
                        }}
                        errors={errors}
                        textarea={true}
                        rows={10}
                    />

                    <button className="form-button" type="submit" disabled={isLoading}>
                        {isLoading ? 'Bezig...' : 'Plaats blog'}
                    </button>
                </form>
            </div>
        </>
    );
}

export default NewPost;
