import { Controller, type Control } from "react-hook-form";
import { type LoginFormValue } from "../../models";

interface Props {
    name: keyof LoginFormValue
    control: Control<LoginFormValue>
    label: string
    type?: string
}

export const SignInForm = ({name, control, label, type}: Props) => {
    return (
        <div className="input-auth-form__container">
            <label htmlFor={name}>{label}</label>
            <Controller name={name} control={control} render={({field}) => <input id={name} type={type} {...field} className={`form-control`}></input>}/>
        </div>
    )
}