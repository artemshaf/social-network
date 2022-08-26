import { IAuthPageInterface } from './AuthPage.interface';
import './AuthPage.scss';
import { Button, Card, Icon, Input, Logo } from '@client/components/index';
import { SubmitHandler, useForm } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';
import { useState } from 'react';
import { authSchema } from './resolver';
import AuthImg from '@client/../assets/auth/people.png';
import { useLazyLoginUserQuery } from '../../services/auth';

export interface Inputs {
  email: string;
  password: string;
}

export const AuthPage = (props: IAuthPageInterface) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setError,
  } = useForm<Inputs>({ resolver: joiResolver(authSchema) });

  const [trigger, result] = useLazyLoginUserQuery();

  const onSubmit: SubmitHandler<Inputs> = async (data: Inputs) => {
    await trigger(data);
    // console.log(result.data);
  };

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
        <Button onClick={() => console.log(errors)}>Register</Button>
      </Card>
      <img className="auth-page__img" src={AuthImg} />
    </section>
  );
};
