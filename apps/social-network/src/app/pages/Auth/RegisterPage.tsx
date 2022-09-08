import { IAuthPageInterface } from './AuthPage.interface';
import './AuthPage.scss';
import { Button, Card, Icon, Input, Logo } from '@client/components/index';
import { SubmitHandler, useForm } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';
import { useEffect, useState } from 'react';
import { registerSchema } from './resolver';
import AuthImg from '@client/../assets/auth/people.png';
import { useLazyRegisterUserQuery } from '@client/services/auth';
import { Navigate, useNavigate } from 'react-router-dom';
import { AUTH_ROUTE } from '@client/utils/consts';

export interface Inputs {
  email: string;
  password: string;
  confirmPassword: string;
  agree: boolean;
}

export const RegisterPage = (props: IAuthPageInterface) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({ resolver: joiResolver(registerSchema) });
  const [confirmType, setConfirmType] = useState<string>('password');
  const [passwordType, setPasswordType] = useState<string>('password');
  const [trigger, result] = useLazyRegisterUserQuery();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<Inputs> = async (data: Inputs) => {
    await trigger({ email: data.email, password: data.password });
  };

  useEffect(() => {
    if (result.isSuccess) {
      navigate(AUTH_ROUTE);
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
        <h2>Register</h2>
        <Input
          titleText="Email"
          placeholder="Enter your email"
          error={errors.email ? errors.email.message : ''}
          {...register('email')}
        />
        <Input
          type={passwordType}
          titleText="Password"
          placeholder="Enter your Password"
          error={errors.password ? errors.password.message : ''}
          {...register('password')}
          icons={
            passwordType === 'password' ? (
              <Icon
                icon="closeEye"
                height="19px"
                className="cursor-pointer mx-2"
                onClick={() => setPasswordType('text')}
              />
            ) : (
              <Icon
                icon="eye"
                className="cursor-pointer mx-2"
                onClick={() => setPasswordType('password')}
              />
            )
          }
        />
        <Input
          titleText="Confrim Password"
          placeholder="Confrim your Password"
          error={errors.confirmPassword ? errors.confirmPassword.message : ''}
          type={confirmType}
          {...register('confirmPassword')}
          icons={
            confirmType === 'password' ? (
              <Icon
                icon="closeEye"
                height="19px"
                className="cursor-pointer mx-2"
                onClick={() => setConfirmType('text')}
              />
            ) : (
              <Icon
                icon="eye"
                className="cursor-pointer mx-2"
                onClick={() => setConfirmType('password')}
              />
            )
          }
        />
        <div>
          <input type={'checkbox'} {...register('agree')} className="mr-3" />
          <span style={{ color: errors.agree ? 'red' : 'black' }}>
            Accept the agreement
          </span>
        </div>
        <Button onClick={() => console.log(errors)}>Register</Button>
        {result.isError && <>Ошибка регистрации</>}
        {result.isSuccess && <>Регистрация прошла успешно</>}
      </Card>
      <img className="auth-page__img" src={AuthImg} />
    </section>
  );
};
