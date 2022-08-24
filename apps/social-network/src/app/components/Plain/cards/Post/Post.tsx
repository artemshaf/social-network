import { Card, UserAvatar } from '@client/components/Plain';
import { Button, Icon } from '@client/components/UI';
import { IPostInterface } from './Post.interface';

export const Post = ({ className, ...props }: IPostInterface) => {
  return (
    <Card tag="li" className={className} {...props}>
      <div>
        <UserAvatar />
        <div>
          <div>
            <span>Appservice Agency</span>
            <span>20 hours ago</span>
          </div>
          <p>Company / IT</p>
        </div>
        <Icon icon="more" />
      </div>
      <div>
        <p>
          Maecenas hendrerit porttitor integer viverra lorem metus et in eu.
          Rhoncus dignissim in et id arcu amet, aliquam vivamus. Mauris eget at
          risus quis. Viverra integer platea leo, mauris. Proin diam sit ut ac
          eget sed egestas congue. Dictum at aliquam felis id enim feugiat donec
          purus. Amet, bibendum nibh scelerisque et in nisl. Pretium posuere eu
          molestie non eget nisl quisque nibh vulputate. Neque odio mauris
          tortor eu aliquet morbi. Posuere porttitor cursus risus, viverra
          faucibus leo in egestas. Pharetra, cursus pellente...
        </p>
        <Button>See more</Button>
      </div>
      <img />
      <ul>
        <li>
          <Icon icon="heart" />
          <span>...</span>
        </li>
        <li>
          <Icon icon="message" />
          <span>...</span>
        </li>
        <li>
          <Icon icon="shareTwo" />
        </li>
        <li>
          <Icon icon="mapDrawer" />
        </li>
        <li>
          <Icon icon="eye" />
          <span>...</span>
        </li>
      </ul>
    </Card>
  );
};
