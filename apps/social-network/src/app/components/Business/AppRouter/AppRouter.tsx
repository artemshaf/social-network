import { Navigate, Route, Routes } from 'react-router-dom';
import { authRoutes, publicRoutes, IRoute } from '@client/utils/routes';
import { FC } from 'react';
import { selectUser, useAppSelector } from '@client/store';

export const AppRouter: FC = () => {
  const user = useAppSelector(selectUser);

  return (
    <Routes>
      {localStorage.getItem('accessToken') &&
        user._id &&
        authRoutes.map(({ element, path }: IRoute) => (
          <Route key={path} path={path} element={element} />
        ))}
      {publicRoutes.map(({ element, path }: IRoute) => (
        <Route key={path} path={path} element={element} />
      ))}
      <Route
        path="*"
        key={'route-ended'}
        element={<Navigate to="/auth" replace />}
      />
    </Routes>
  );
};
