import styles from './ProfilePageEdit.module.scss';
import { IProfilePageEditInterface } from './ProfilePageEdit.interface';
import { SubmitHandler, useForm } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';
import { profileSchema } from './resolver/resolver';
import { useAppDispatch } from '@client/store';
import { Button, Card, Input } from '@client/components';
import { useUpdateProfileMutation } from '@client/services';
import { IProfileUser } from '@social-network/interfaces';

export const ProfilePageEdit = ({
  className,
  ...props
}: IProfilePageEditInterface) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IProfileUser>({ resolver: joiResolver(profileSchema) });
  const user = '123';

  const [updateProfile, result] = useUpdateProfileMutation();

  const onSubmit: SubmitHandler<IProfileUser> = async (data: IProfileUser) => {
    await updateProfile({ id: user, dto: data });
  };

  return (
    <Card
      className={styles.profilePageEdit}
      tag="form"
      onSubmit={handleSubmit(onSubmit)}
      {...props}
    >
      <Input
        titleText="Name"
        placeholder="Enter your name"
        error={errors.name ? errors.name.message : ''}
        {...register('name')}
      />
      <Input
        titleText="Surname"
        placeholder="Enter your surname"
        error={errors.surname ? errors.surname.message : ''}
        {...register('surname')}
      />
      <Input
        titleText="Sex"
        placeholder="Enter your sex"
        error={errors.sex ? errors.sex.message : ''}
        {...register('sex')}
      />
      <Input
        titleText="Birth date"
        placeholder="Enter your Birth date"
        error={errors.bdate ? errors.bdate.message : ''}
        {...register('bdate')}
      />
      <Input
        titleText="Location City"
        placeholder="Enter your city"
        error={errors.location ? errors.location.message : ''}
        {...register('location.city')}
      />
      <Input
        titleText="Location Country"
        placeholder="Enter your country"
        error={errors.location ? errors.location.message : ''}
        {...register('location.country')}
      />
      <Input
        titleText="Status"
        placeholder="Enter your status"
        error={errors.status ? errors.status.message : ''}
        {...register('status')}
      />
      <Input
        titleText="Phone"
        placeholder="Enter your phone"
        error={errors.phone ? errors.phone.message : ''}
        {...register('phone')}
      />
      <Button onClick={() => console.log(errors)}>Save</Button>
    </Card>
  );
};
