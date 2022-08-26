import cn from 'classnames';
import { Card } from '@client/components/index';
import { IChatInterface } from './Chat.interface';

export const Chat = ({ className, ...props }: IChatInterface) => {
  return <Card tag="section" className={cn(className)} {...props}></Card>;
};
