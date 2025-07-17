import { Controller, type Control, type FieldError } from "react-hook-form";
import { type HabitFormValue } from "../../../models";

interface Props {
    name: keyof HabitFormValue
    control: Control<HabitFormValue>
    label: string
    type?: string
    error?: FieldError
}

export const HabitInputForm = ({name, control, label, type, error}: Props) => {
    return (
        <div className="input-habit-form__container">
            <label htmlFor={name}>{label}</label>
            <Controller name={name} control={control} render={({field}) => <input id={name} type={type} {...field} className={`form-control ${error ? "is-invalid": ""}`}></input>}/>
            {error && (
                <p className="error-notification">{error.message}</p>
            )}
        </div>
    )
}