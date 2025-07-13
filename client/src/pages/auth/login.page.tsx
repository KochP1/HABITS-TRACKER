import { zodResolver } from "@hookform/resolvers/zod";
import { type SubmitHandler, useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import { type LoginFormValue, loginSchema } from "../../models";
import './auth.css';
import { SignInForm } from '../../components/auth/SignInForm';
import { useAuth } from "../../hooks";

const url = 'http://localhost:3000/api/auth/';
export const LoginPage = () => {
    const { control, handleSubmit } = useForm<LoginFormValue>({
        resolver: zodResolver(loginSchema),
        mode: 'onBlur'
    });

    const { login, loading, error} = useAuth();

    const onSubmit: SubmitHandler<LoginFormValue> = async (data) => {
        try {
            await login(url, data.email, data.password);
        } catch(err) {
            console.error(err);
        }
    }

    return (
        <div className='auth-form__wrapper'>
            <form className="auth-signIn__form" onSubmit={handleSubmit(onSubmit)}>
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