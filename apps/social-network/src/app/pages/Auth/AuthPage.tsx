import { IAuthPageInterface } from './AuthPage.interface';
import './AuthPage.scss';
import { Button, Card, Input, Logo } from '@client/components/index';
import { SubmitHandler, useForm } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';
import { useEffect, useState } from 'react';
import { authSchema } from './resolver';
import AuthImg from '@client/../assets/auth/people.png';
import { HOME_ROUTE } from '@client/utils/consts';
import { Navigate, useNavigate } from 'react-router-dom';
import {
  selectError,
  useAppSelector,
  AuthLogin,
  useAppDispatch,
  selectUser,
} from '@client/store';
import { AuthService } from '@client/services';
import { AccountAuthLogin } from '@social-network/contracts';

export interface Inputs {
  email: string;
  password: string;
}

export const AuthPage = (props: IAuthPageInterface) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({ resolver: joiResolver(authSchema) });

  const authError = useAppSelector(selectError);
  const userData = useAppSelector(selectUser);

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<Inputs> = async (data: Inputs) => {
    await dispatch(
      AuthLogin({
        email: data.email,
        password: data.password,
      })
    );
  };

  useEffect(() => {
    if (
      localStorage.getItem('accessToken') &&
      localStorage.getItem('refreshToken')
    ) {
      navigate(HOME_ROUTE);
    }
  }, [userData]);

  return (
    <section className="auth-page">
      <Card
        wrapper
        className="auth-page__form"
        tag="form"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="auth-page__form__info">
          <h1>Welcome!</h1>
          <Logo />
        </div>
        <h2>Sign Up</h2>
        <Input
          titleText="Email"
          placeholder="Enter your email"
          error={errors.email ? errors.email.message : ''}
          {...register('email')}
        />
        <Input
          titleText="Password"
          placeholder="Enter your Password"
          error={errors.password ? errors.password.message : ''}
          {...register('password')}
        />
        <Button onClick={() => console.log(errors)}>Sign Up</Button>
        {authError ? authError : <></>}
      </Card>
      <img className="auth-page__img" src={AuthImg} />
    </section>
  );
};
