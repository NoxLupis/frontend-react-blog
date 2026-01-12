import './FormField.css';

function FormField({ id, label, register, validation, errors, type = "text", textarea = false, rows = 5 }) {
    return (
        <div className="form-field">
            <label htmlFor={id}>{label}</label>

            {textarea ? (
                <textarea
                    id={id}
                    rows={rows}
                    {...register(id, validation)}
                ></textarea>
            ) : (
                <input
                    id={id}
                    type={type}
                    {...register(id, validation)}
                />
            )}

            {errors[id] && <p className="error">{errors[id].message}</p>}
        </div>
    );
}

export default FormField;