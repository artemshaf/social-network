import styles from './ProfilePage.module.scss';
import { IProfilePageInterface } from './ProfilePage.interface';
import { Card, Header, Icon, Menu } from '@client/components';
import { ProfileService } from '@client/services';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { PROFILE_EDIT_ROUTE } from '@client/utils/consts';
import { selectUserId, useAppSelector } from '@client/store';
import {
  AccountUserProfile,
  FriendFriends,
  TweetFind,
} from '@social-network/contracts';
import { FriendService, TweetService } from '@client/services';
import { formatDate } from '../../utils/hooks';

export const ProfilePage = ({
  className,
  userId,
  ...props
}: IProfilePageInterface) => {
  const userOwnerId = useAppSelector(selectUserId);
  const id = useParams().id as string;
  const [profileData, setProfileData] = useState<AccountUserProfile.Response>(
    {} as AccountUserProfile.Response
  );
  const [friendsData, setFriendsData] = useState<FriendFriends.Response>(
    {} as FriendFriends.Response
  );
  const [tweetsData, setTweetsData] = useState<TweetFind.Response>(
    {} as TweetFind.Response
  );

  const navigate = useNavigate();

  useEffect(() => {
    const setData = async () => {
      const profile = await (await ProfileService.get({ id })).data;
      const friends = await (await FriendService.getFriends({ id })).data;
      const tweets = await (await TweetService.get({ user: id })).data;
      return await { profile, friends, tweets };
    };
    setData()
      .then((res) => {
        setProfileData(res.profile);
        setFriendsData(res.friends);
        setTweetsData(res.tweets);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <section className={styles.profilePage} {...props}>
      <Header />
      <Card tag="section" className={styles.profile__card}>
        <ul>
          <li>
            <span>Имя: </span>
            <span>
              {profileData?.name ? (
                profileData?.name.toString()
              ) : (
                <>Не задано</>
              )}
            </span>
          </li>
          <li>
            <span>Фамилия: </span>
            <span>
              {profileData?.surname ? (
                profileData?.surname.toString()
              ) : (
                <>Не задано</>
              )}
            </span>
          </li>
          <li>
            <span>Статус: </span>
            <span>
              {profileData?.status ? (
                profileData?.status.toString()
              ) : (
                <>Не задано</>
              )}
            </span>
          </li>
          <li>
            <span>Пол: </span>
            <span>
              {profileData?.sex ? profileData?.sex.toString() : <>Не задано</>}
            </span>
          </li>
          <li>
            <span>Дата рождения: </span>
            <span>
              {profileData?.bdate ? (
                formatDate(profileData?.bdate)
              ) : (
                <>Не задано</>
              )}
            </span>
          </li>
          <li>
            <span>Местонахождение: </span>
            <span>
              {profileData?.location ? (
                `${profileData?.location.country.toString()} ${profileData?.location.city.toString()}`
              ) : (
                <>Не задано</>
              )}
            </span>
          </li>
          <li>
            <span>Телефон: </span>
            <span>
              {profileData?.phone ? (
                profileData?.phone.toString()
              ) : (
                <>Не задано</>
              )}
            </span>
          </li>
        </ul>
        <ul>
          <li>
            <span>Друзей: </span>
            <span>
              {friendsData?.following ? (
                friendsData?.following.length > 0
              ) : (
                <>Не задано</>
              )}
            </span>
          </li>

          <li>
            <span>Подписчиков: </span>
            <span>
              {friendsData?.followers ? (
                friendsData?.followers.length > 0
              ) : (
                <>Не задано</>
              )}
            </span>
          </li>
          <li>
            <span>Всего фото: </span>
            <span>
              {profileData?.name ? (
                profileData?.name.toString()
              ) : (
                <>Не задано</>
              )}
            </span>
          </li>
          <li>
            <span>Всего записей: </span>
            <span>
              {profileData?.name ? (
                profileData?.name.toString()
              ) : (
                <>Не задано</>
              )}
            </span>
          </li>
          <li>
            <span>Музыка: </span>
            <span>
              {profileData?.name ? (
                profileData?.name.toString()
              ) : (
                <>Не задано</>
              )}
            </span>
          </li>
        </ul>
        {id === userOwnerId && (
          <Icon
            icon="settings"
            className={styles.settings__icon}
            onClick={() => navigate(PROFILE_EDIT_ROUTE, { replace: true })}
          />
        )}
      </Card>
      <ul>
        {profileData?.photos?.map((item) => (
          <li>
            <img src={item} />
          </li>
        ))}
      </ul>
      {tweetsData.tweets && tweetsData.tweets.length > 0 && (
        <ul>
          {tweetsData.tweets.map((item) => (
            <li>{item.user}</li>
          ))}
        </ul>
      )}
      <Menu className={styles.menu} />
    </section>
  );
};
