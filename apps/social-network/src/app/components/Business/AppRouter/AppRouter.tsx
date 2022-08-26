import { Navigate, Route, Routes } from 'react-router-dom';
import { authRoutes, publicRoutes, IRoute } from '@client/utils/routes';
import { FC } from 'react';

export const AppRouter: FC = () => {
  return (
    <Routes>
      {authRoutes.map(({ element, path }: IRoute) => (
        <Route key={path} path={path} element={element} />
      ))}
      {publicRoutes.map(({ element, path }: IRoute) => (
        <Route key={path} path={path} element={element} />
      ))}
      <Route
        path="*"
        key={'route-ended'}
        element={<Navigate to="/" replace />}
      />
    </Routes>
  );
};
