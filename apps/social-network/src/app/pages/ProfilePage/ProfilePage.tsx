import styles from './ProfilePage.module.scss';
import { IProfilePageInterface } from './ProfilePage.interface';
import { Header, Loader, Menu } from '@client/components';
import {
  useGetProfileQuery,
  useLazyFindTweetQuery,
  useLazyGetFriendsQuery,
} from '@client/services';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

export const ProfilePage = ({ className, ...props }: IProfilePageInterface) => {
  const id = useParams().id as string;
  const {
    data: profileData,
    isError: profileIsError,
    isLoading: profileIsLoading,
  } = useGetProfileQuery({ id });
  const [friendsTrigger, friendsResult] = useLazyGetFriendsQuery();
  const [tweetsTrigger, tweetsResult] = useLazyFindTweetQuery();

  useEffect(() => {
    const requester = async () => {
      await tweetsTrigger({ user: id });
      await friendsTrigger({ id });
    };
    requester();
  }, []);

  return profileIsLoading ? (
    <Loader />
  ) : (
    <section className={styles.profilePage} {...props}>
      <Header />
      {profileIsError ? (
        <></>
      ) : (
        <>
          <div>
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
                  {profileData?.sex ? (
                    profileData?.sex.toString()
                  ) : (
                    <>Не задано</>
                  )}
                </span>
              </li>
              <li>
                <span>Дата рождения: </span>
                <span>
                  {profileData?.bdate ? (
                    profileData?.bdate.toString()
                  ) : (
                    <>Не задано</>
                  )}
                </span>
              </li>
              <li>
                <span>Местонахождение: </span>
                <span>
                  {profileData?.location ? (
                    profileData?.location.toString()
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
                  {friendsResult?.data?.following ? (
                    friendsResult?.data?.following.length
                  ) : (
                    <>Не задано</>
                  )}
                </span>
              </li>

              <li>
                <span>Подписчиков: </span>
                <span>
                  {friendsResult?.data?.followers ? (
                    friendsResult?.data?.followers.length
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
          </div>
          <ul>
            {profileData?.photos?.map((item) => (
              <li>
                <img src={item} />
              </li>
            ))}
          </ul>
          {tweetsResult.isSuccess ? (
            <ul>
              {tweetsResult.data?.tweets.map((item) => (
                <li>{item.user}</li>
              ))}
            </ul>
          ) : (
            <></>
          )}
        </>
      )}
      <Menu className={styles.menu} />
    </section>
  );
};
