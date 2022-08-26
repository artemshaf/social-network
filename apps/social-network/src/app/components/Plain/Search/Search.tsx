import cn from 'classnames';
import { Icon, Input } from '@client/components/UI';
import { ISearchInterface } from './Search.interface';
import './Search.scss';

export const Search = ({
  className,
  placeholder,
  children,
  ...props
}: ISearchInterface) => {
  return (
    <label className={cn(className, 'search')} {...props}>
      <Input placeholder={placeholder} />
      <Icon icon="search" />
    </label>
  );
};
