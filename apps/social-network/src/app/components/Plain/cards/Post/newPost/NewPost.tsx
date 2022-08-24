import cn from 'classnames';
import { FC } from 'react';
import { INewPostIntreface } from './NewPost.intreface';

import { Card } from '@client/components/Plain/cards/index';
import { Input } from '@client/components/UI/Input';
import { Icon } from '../../../../UI';

export const NewPost: FC = ({ className, ...props }: INewPostIntreface) => {
  return (
    <Card {...props} className={cn(className)}>
      <Input placeholder="Create new post..." />
      <div>
        <Icon icon="document" />
        <Icon icon="video" />
        <Icon icon="camera" />
      </div>
    </Card>
  );
};
