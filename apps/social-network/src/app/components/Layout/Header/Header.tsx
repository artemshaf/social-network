import cn from 'classnames';
import { Card, Search } from '@client/components/index';
import { IHeaderInterface } from './Header.interface';
import { Logo } from '@client/components/UI';
import './Header.scss';
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Box,
} from '@mui/material';
import {
  selectUserName,
  setAuth,
  setUser,
  useAppDispatch,
  useAppSelector,
} from '@client/store';
import { authStorage } from '@client/store';
import { useNavigate } from 'react-router-dom';
import { AUTH_ROUTE, PROFILE_ROUTE } from '@client/utils/consts';
import { IUser } from '@social-network/interfaces';
import { useState } from 'react';

const selectItems = [
  {
    value: 'Profile',
    label: 'Профиль',
  },
  {
    value: 'Exit',
    label: 'Выйти',
  },
];

export const Header = ({ className, children, ...props }: IHeaderInterface) => {
  const { _id } = useAppSelector(selectUserName);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [selectValue, setSelectValue] = useState('');

  const handleSelect = (event: SelectChangeEvent) => {
    const { value } = event.target;
    setSelectValue(value);
    if (value === 'Exit') {
      handleExit();
    }
    if (value === 'Profile') {
      navigate(PROFILE_ROUTE + _id);
    }
  };

  const handleExit = () => {
    authStorage('', '');
    dispatch(setUser({} as IUser));
    dispatch(setAuth(false));
    navigate(AUTH_ROUTE);
  };

  return (
    <Card tag="section" className={cn(className, 'header')} {...props}>
      <FormControl fullWidth sx={{ maxWidth: 200 }} variant="standard">
        <Select
          value={selectValue}
          label={selectValue}
          onChange={handleSelect}
          id="header-select"
        >
          {selectItems.map((item) => (
            <MenuItem value={item.value}>{item.label}</MenuItem>
          ))}
        </Select>
      </FormControl>
      <Logo className="header__logo" />
      <Search className="header__search" />
    </Card>
  );
};
