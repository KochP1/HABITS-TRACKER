import { Controller, type Control, type FieldError } from "react-hook-form";
import { type RegistFormValues } from "../../models";

interface Props {
    name: keyof RegistFormValues
    control: Control<RegistFormValues>
    label: string
    type?: string
    error?: FieldError
}

export const SignUpForm = ({name, control, label, type, error}: Props) => {
    return (
        <div className="input-form__container">
            <label htmlFor={name}>{label}</label>
            <Controller name={name} control={control} render={({field}) => <input id={name} type={type} {...field} className={`form-control ${error ? "is-invalid": ""}`}></input>}/>
            {error && (
                <p className="error-notification">{error.message}</p>
            )}
        </div>
    )
}