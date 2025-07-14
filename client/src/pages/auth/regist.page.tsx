import { zodResolver } from "@hookform/resolvers/zod";
import { type SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';
import { type RegistFormValues, registSchema } from "../../models";
import './auth.css';
import { SignUpForm } from "../../components/auth/SignUpForm";
import { useAuth } from "../../hooks";

const url = 'http://localhost:3000/api/users/';
export const RegistPage = () => {
    const { control, handleSubmit, formState: { errors } } = useForm<RegistFormValues>({
        resolver: zodResolver(registSchema),
        mode: 'onBlur'
    });

    const { regist, loading, error } = useAuth();
    const onSubmit: SubmitHandler<RegistFormValues> = async (data) => {
        try {
            regist(url, data.names, data.last_names, data.email, data.password);
        } catch(err) {
            console.error(err);
        }
    }

    return (
        <div className='auth-form__wrapper'>
            <form className="auth__form" onSubmit={handleSubmit(onSubmit)}>
                <SignUpForm name='names' type='text' label='Names' control={control} error={errors.names}/>
                <SignUpForm name='last_names' type='text' label='Last names' control={control} error={errors.last_names} />
                <SignUpForm name='email' type='email' label='Email' control={control} error={errors.email} />
                <SignUpForm name='password' type='password' label='Password' control={control} error={errors.password} />

                <button className="auth-form__btn">
                    Sign up
                </button>
                
                <div className="auth-form-links__container">
                    <Link to={'/'}>Already have an account?</Link>
                </div>
            </form>
        </div>
    )
}