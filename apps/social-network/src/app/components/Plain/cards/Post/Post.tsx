import { Card, UserAvatar } from '@client/components/Plain';
import { Button, Icon } from '@client/components/UI';
import cn from 'classnames';
import { IPostInterface } from './Post.interface';
import './Post.scss';

export const Post = ({ post, className, ...props }: IPostInterface) => {
  return (
    <Card tag="li" className={cn(className, 'post-item')} {...props}>
      <div className={'post-item__info'}>
        <UserAvatar className={'post-item__info__avatar'} size="lg" />
        <div className={'post-item__info__descr'}>
          <div className={'post-item__info__descr__list'}>
            <span className={'post-item__info__descr__list__name'}>
              Appservice Agency
            </span>
            <span className={'post-item__info__descr__list__time'}>
              20 hours ago
            </span>
          </div>
          <p className={'post-item__info__descr__company'}>Company / IT</p>
        </div>
        <Icon icon="more" />
      </div>
      <div className={'post-item__text__container'}>
        <p className={'post-item__text'}>
          Maecenas hendrerit porttitor integer viverra lorem metus et in eu.
          Rhoncus dignissim in et id arcu amet, aliquam vivamus. Mauris eget at
          risus quis. Viverra integer platea leo, mauris. Proin diam sit ut ac
          eget sed egestas congue. Dictum at aliquam felis id enim feugiat donec
          purus. Amet, bibendum nibh scelerisque et in nisl. Pretium posuere eu
          molestie non eget nisl quisque nibh vulputate. Neque odio mauris
          tortor eu aliquet morbi. Posuere porttitor cursus risus, viverra
          faucibus leo in egestas. Pharetra, cursus pellente...
        </p>
        <Button className={'post-item__btn'}>See more</Button>
      </div>
      <img className={'post-item__img'} />
      <ul className={'post-item__actions__list'}>
        <li className={'post-item__actions__list-item'}>
          <Icon icon="heart" />
          <span>...</span>
        </li>
        <li className={'post-item__actions__list-item'}>
          <Icon icon="message" />
          <span>...</span>
        </li>
        <li className={'post-item__actions__list-item'}>
          <Icon icon="shareTwo" />
        </li>
        <li className={'post-item__actions__list-item'}>
          <Icon icon="mapDrawer" />
        </li>
        <li className={'post-item__actions__list-item'}>
          <Icon icon="eye" />
          <span>...</span>
        </li>
      </ul>
    </Card>
  );
};
