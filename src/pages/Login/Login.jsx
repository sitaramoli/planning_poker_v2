import React, { useContext, useReducer } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import ThemeSwitch from '../../components/ThemeSwitch/ThemeSwitch';
import { UserContext } from '../../context/UserContext';
import InputField from './../../components/InputField/InputField';
import LoadingSpinner from './../../components/LoadingSpinner/LoadingSpinner';
import axios from './../../config/axios';

const LoginPage = () => {

    const { user, updateUser } = useContext(UserContext);
    const navigate = useNavigate();
    const onSignupClick = () => {
        navigate('/signup', { replace: true });
    }

    const initialState = {
        formData: {
            email: '',
            password: ''
        },
        formErrors: {
            email: '',
            password: ''
        },
        loading: false,
    };

    const reducer = (state, action) => {
        switch (action.type) {
            case 'UPDATE_FIELD':
                return {
                    ...state,
                    formData: {
                        ...state.formData,
                        [action.field]: action.value
                    }
                };
            case 'UPDATE_ERROR':
                return {
                    ...state,
                    formErrors: {
                        ...state.formErrors,
                        [action.field]: action.error
                    }
                };
            case 'UPDATE_LOADING':
                return { ...state, loading: action.loading };
            case 'RESET_FORM':
                return initialState;
            default:
                return state;
        }
    };

    const [state, dispatch] = useReducer(reducer, initialState);
    const { formData, formErrors, loading } = state;

    const onInputChange = (e) => {
        const { name, value } = e.target;
        dispatch({ type: 'UPDATE_FIELD', field: name, value: value });
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        // validate form fields and update errors
        const { email, password } = formData;
        let errors = {};
        if (!email) {
            errors.email = 'Email is required';
        }
        if (!password) {
            errors.password = 'Password is required';
        }
        Object.keys(errors).forEach(key => {
            dispatch({ type: 'UPDATE_ERROR', field: key, error: errors[key] });
        });

        // handle form submission if there are no errors
        if (Object.keys(errors).length === 0) {
            try {
                dispatch({ type: 'UPDATE_LOADING', loading: true });
                const { data } = await axios.post('/users/login', formData);
                toast.success(data.message);
                updateUser({ id: data.data.id, name: data.data.name, email: data.data.email, token: data.data.token });
                navigate('/', { replace: true });

            } catch (error) {
                toast.error(error.response.data.message);
            }
            finally {
                dispatch({ type: 'UPDATE_LOADING', loading: false });
            }
        }
    };

    return (
        <>
            {user?.token ? <Navigate to={'/'} replace={true} />
                :
                <div className='login-page'>
                    <div className='login'>
                        <ThemeSwitch />
                        <div className='login__header'>
                            <h2 className="login__header__title">Welcome Back!</h2>
                            <p className="login__header__subtitle">Enter your email and password below</p>
                        </div>
                        <form onSubmit={handleFormSubmit} className="login__form">
                            <InputField label={'Email'} type={'email'} name={'email'} value={formData.email} onChange={onInputChange} placeholder={'Email address'} error={formErrors.email} required={true} />
                            <InputField label={'Password'} type={'password'} name={'password'} value={formData.password} onChange={onInputChange} placeholder={'Password'} error={formErrors.password} required={true} />
                            {loading ? <LoadingSpinner /> : <button className='button button--auth' type='submit' >Log In</button>}
                        </form>
                        <div className="login__footer">
                            <span>Don’t have an account?</span>
                            <span className='login__footer__signup' onClick={onSignupClick} >Sign up</span>
                        </div>
                    </div>
                </div>
            }
        </>
    )

}

export default LoginPage;
