import { Route } from 'react-router';
import { Routes } from 'react-router';
import { PAGE_COMPONENTS, RoutePath } from '@/routes/path';
import Layout from '@/components/Layout';
import NotFoundPage from '@/pages/NotFound';

const Router = () => {
    return (
        <Routes>
            <Route element={<Layout />}>
                {Object.entries(RoutePath).map(([key, path]) => {
                    const PageComponent =
                        PAGE_COMPONENTS[key as keyof typeof PAGE_COMPONENTS];
                    return (
                        <Route
                            key={key}
                            path={path}
                            element={<PageComponent />}
                        />
                    );
                })}
                <Route path='*' element={<NotFoundPage />} />
            </Route>
        </Routes>
    );
};

export default Router;
