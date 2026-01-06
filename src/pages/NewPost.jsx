import './NewPost.css';
import {useForm} from 'react-hook-form';
import {calculateReadTime} from "../helpers/calculateReadTime.js";
import {useNavigate} from 'react-router-dom';
import FormField from "../components/FormField.jsx";

function NewPost() {
    const {register, handleSubmit, formState: {errors}} = useForm();
    const navigate = useNavigate();
    const onSubmit = (data) => {
        const enrichedData = {
            ...data,
            shares: 0,
            comments: 0,
            createdAt: new Date().toISOString(),
            readTime: calculateReadTime(data.Blogpost)
        };

        console.log(enrichedData);
        console.log(errors);

        navigate('/blogs')
    };

    return (
        <>
            <h1>Post toevoegen</h1>
            <div className="form-wrapper">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <FormField
                        id="Titel"
                        label="Titel"
                        register={register}
                        validation={{required: "Titel is verplicht", maxLength: {value: 50, message: "Max 50 tekens"}}}
                        errors={errors}
                    />

                    <FormField
                        id="Subtitel"
                        label="Subtitel"
                        register={register}
                        validation={{
                            required: "Subtitel is verplicht",
                            maxLength: {value: 100, message: "Max 100 tekens"}
                        }}
                        errors={errors}
                    />

                    <FormField
                        id="Auteur"
                        label="Naam en achternaam"
                        register={register}
                        validation={{required: "Auteur is verplicht"}}
                        errors={errors}
                    />

                    <FormField
                        id="Blogpost"
                        label="Blogpost"
                        register={register}
                        validation={{
                            required: "Blogpost is verplicht",
                            minLength: {value: 300, message: "Minimaal 300 tekens"},
                            maxLength: {value: 2000, message: "Maximaal 2000 tekens"}
                        }}
                        errors={errors}
                        textarea={true}
                        rows={10}
                    />

                    <input className="form-button" type="submit"/>
                </form>
            </div>
        </>
    );
}

export default NewPost;