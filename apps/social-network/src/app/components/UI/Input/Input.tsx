import { IInputInterface } from './Input.interface';

export const Input = ({
  className,
  children,
  placeholder = 'Search...',
  type,
  ...props
}: IInputInterface) => {
  return <input type={type} placeholder={placeholder} {...props}></input>;
};
