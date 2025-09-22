import { FC, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AppRouteProps, routeConfig } from './routeConfig';
import { RequireAuth } from './RequireAuth';
import { PageLoader } from '@/components/PageLoader';

export const AppRouter: FC = () => {
    const renderWithWrapper = ({ path, element, authOnly }: AppRouteProps) => (
        <Route
            key={path}
            path={path}
            element={authOnly ? <RequireAuth>{element}</RequireAuth> : element}
        ></Route>
    );

    return (
        <Suspense fallback={<PageLoader />}>
            <Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>
        </Suspense>
    );
};