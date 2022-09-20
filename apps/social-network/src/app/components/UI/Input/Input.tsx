import cn from 'classnames';
import { ForwardedRef, forwardRef } from 'react';
import { IInputInterface } from './Input.interface';
import './Input.scss';

export const Input = forwardRef(
  (
    {
      width,
      error,
      icons,
      titleText,
      className,
      children,
      placeholder = 'Search...',
      type,
      ...props
    }: IInputInterface,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <label className={cn(width === 'full' ? 'w-full' : '')}>
        {titleText ? <p>{titleText}</p> : <></>}
        <div
          className={cn(className, 'input__block', {
            input__block_error: error,
          })}
        >
          <input
            type={type}
            placeholder={placeholder}
            className={cn('input')}
            ref={ref}
            {...props}
          />
          {icons}
        </div>
        {error ? <p className="input_error">{error}</p> : <></>}
      </label>
    );
  }
);
