import { IAuthPageInterface } from './AuthPage.interface';
import './AuthPage.scss';
import { Button, Card, Icon, Input, Logo } from '@client/components/index';
import { SubmitHandler, useForm } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';
import { useEffect, useState } from 'react';
import { authSchema } from './resolver';
import AuthImg from '@client/../assets/auth/people.png';
import { useLazyLoginUserQuery } from '@client/services/auth';
import { HOME_ROUTE } from '@client/utils/consts';
import { useNavigate } from 'react-router-dom';
import { authStorage } from '../../store/auth/storage/auth.storage';
import { useAppDispatch, setAuth, setUser } from '@client/store';
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

  const [trigger, result] = useLazyLoginUserQuery();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<Inputs> = async (data: Inputs) => {
    await trigger(data);
  };

  useEffect(() => {
    if (result.isSuccess) {
      const { accessToken, refreshToken, user } = result.data!;
      dispatch(setAuth(true));
      dispatch(setUser(user));
      authStorage(accessToken, refreshToken);
      navigate(HOME_ROUTE);
    }
  }, [result.isSuccess]);

  return (
    <section className="auth-page">
      <Card
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
      </Card>
      <img className="auth-page__img" src={AuthImg} />
    </section>
  );
};
