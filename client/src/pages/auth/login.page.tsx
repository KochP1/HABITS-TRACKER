import { zodResolver } from "@hookform/resolvers/zod";
import { type SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';
import { type LoginFormValue, loginSchema } from "../../models";
import './auth.css';
import { SignInForm } from '../../components/auth/SignInForm';

export const LoginPage = () => {
    const { control, handleSubmit, formState: { errors } } = useForm<LoginFormValue>({
        resolver: zodResolver(loginSchema),
        mode: 'onBlur'
    });

    return (
        <div className='auth-form__wrapper'>
            <form className="auth-signIn__form">
                <SignInForm name='email' type='email' label='Email' control={control} />
                <SignInForm name='password' type='password' label='Password' control={control} />

                <button className="auth-form__btn">
                    Sign in
                </button>

                <div className="auth-form-links__container">
                    <Link to={'/regist'}>Don't have an account?</Link>
                </div>
            </form>
        </div>
    )
}