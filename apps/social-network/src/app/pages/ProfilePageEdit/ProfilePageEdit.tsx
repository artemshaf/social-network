import styles from './ProfilePageEdit.module.scss';
import { IProfilePageEditInterface } from './ProfilePageEdit.interface';
import { SubmitHandler, useForm } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';
import { profileSchema } from './resolver/resolver';
import { selectUserId, useAppDispatch, useAppSelector } from '@client/store';
import { Button, Card, Input, Loader } from '@client/components';
import { IProfileUser } from '@social-network/interfaces';
import { useNavigate } from 'react-router-dom';
import { PROFILE_ROUTE } from '@client/utils/consts';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { ProfileService } from '@client/services';
import { AccountUserProfile } from '@social-network/contracts';
import { formatDateInput } from '@client/utils/hooks';

export const ProfilePageEdit = ({
  className,
  ...props
}: IProfilePageEditInterface) => {
  const [profileData, setProfileData] = useState<AccountUserProfile.Response>(
    {} as AccountUserProfile.Response
  );
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IProfileUser>({
    resolver: joiResolver(profileSchema),
    defaultValues: {
      name: profileData?.name,
    },
  });
  const id = useAppSelector(selectUserId);
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<IProfileUser> = async (data: IProfileUser) => {
    const res = await ProfileService.update({ id, dto: data });
    if (res.status === 200) {
      navigate(PROFILE_ROUTE + id, { replace: true });
    }
  };

  useEffect(() => {
    async function setProfile() {
      return await ProfileService.get({ id });
    }
    setProfile().then((res) => {
      console.log(res);
      setProfileData(res.data);
      reset({
        ...res.data,
        bdate: formatDateInput(res.data?.bdate as Date),
      });
    });
  }, []);

  return (
    <Card
      wrapper
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
      <h1>Sex</h1>
      <select {...register('sex')}>
        <option>Men</option>
        <option>Women</option>
      </select>
      <h1>Birth date</h1>
      <input type={'date'} {...register('bdate')} />
      <Input
        titleText="Location City"
        placeholder="Enter your city"
        error={errors.location?.city ? errors.location.city?.message : ''}
        {...register('location.city')}
      />
      <Input
        titleText="Location Country"
        placeholder="Enter your country"
        error={errors.location?.country ? errors.location?.country.message : ''}
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
