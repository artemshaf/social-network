import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { ReactComponent as ArrowTop } from './svgs/arrow-top.svg';
import { ReactComponent as Bag } from './svgs/bag.svg';
import { ReactComponent as book } from './svgs/book.svg';
import { ReactComponent as burger } from './svgs/burger.svg';
import { ReactComponent as camera } from './svgs/camera.svg';
import { ReactComponent as cardPeople } from './svgs/card-people.svg';
import { ReactComponent as checkMark } from './svgs/check-mark.svg';
import { ReactComponent as close } from './svgs/close.svg';
import { ReactComponent as document } from './svgs/document.svg';
import { ReactComponent as dots } from './svgs/dots.svg';
import { ReactComponent as eye } from './svgs/eye.svg';
import { ReactComponent as fixedClip } from './svgs/fixed-clip.svg';
import { ReactComponent as gif } from './svgs/gif.svg';
import { ReactComponent as hashtag } from './svgs/hashtag.svg';
import { ReactComponent as heart } from './svgs/heart.svg';
import { ReactComponent as home } from './svgs/home.svg';
import { ReactComponent as image } from './svgs/image.svg';
import { ReactComponent as info } from './svgs/info.svg';
import { ReactComponent as mapDrawer } from './svgs/map-drawer.svg';
import { ReactComponent as message } from './svgs/message.svg';
import { ReactComponent as messageTwo } from './svgs/message-2.svg';
import { ReactComponent as more } from './svgs/more.svg';
import { ReactComponent as moreRect } from './svgs/more-rect.svg';
import { ReactComponent as notification } from './svgs/notification.svg';
import { ReactComponent as people } from './svgs/people.svg';
import { ReactComponent as peopleCloud } from './svgs/people-cloud.svg';
import { ReactComponent as peopleMore } from './svgs/people-more.svg';
import { ReactComponent as peoples } from './svgs/peoples.svg';
import { ReactComponent as phone } from './svgs/phone.svg';
import { ReactComponent as plus } from './svgs/plus.svg';
import { ReactComponent as screens } from './svgs/screens.svg';
import { ReactComponent as search } from './svgs/search.svg';
import { ReactComponent as settings } from './svgs/settings.svg';
import { ReactComponent as share } from './svgs/share.svg';
import { ReactComponent as shareTwo } from './svgs/share-2.svg';
import { ReactComponent as smile } from './svgs/smile.svg';
import { ReactComponent as tweet } from './svgs/tweet.svg';
import { ReactComponent as video } from './svgs/video.svg';
import { ReactComponent as logo } from './svgs/logo.svg';
import { ReactComponent as closeEye } from './svgs/close-eye.svg';

export const icons = {
  closeEye,
  logo,
  ArrowTop,
  Bag,
  book,
  burger,
  camera,
  cardPeople,
  checkMark,
  close,
  document,
  dots,
  eye,
  fixedClip,
  gif,
  hashtag,
  heart,
  home,
  image,
  info,
  mapDrawer,
  message,
  messageTwo,
  more,
  moreRect,
  notification,
  people,
  peopleCloud,
  peopleMore,
  peoples,
  phone,
  plus,
  screens,
  search,
  settings,
  share,
  shareTwo,
  smile,
  tweet,
  video,
};

export type IconNames = keyof typeof icons;

export interface IIconInterface
  extends DetailedHTMLProps<HTMLAttributes<SVGSVGElement>, SVGSVGElement> {
  icon: IconNames;
  width?: string;
  height?: string;
}
