import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout';
import Home from '../pages/Home';
import About from '../pages/About';
import Services from '../pages/Services';
import Contact from '../pages/Contact';
import Industries from '../pages/Industries';
import Projects from '../pages/Projects';
import RequestInspection from '../pages/RequestInspection';
import NotFound from '../pages/NotFound';
import FireSprinklers from '../pages/services/FireSprinklers';
import FireHydrant from '../pages/services/FireHydrant';
import FireAlarm from '../pages/services/FireAlarm';

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: 'about',
                element: <About />,
            },
            {
                path: 'services',
                element: <Services />,
            },
            {
                path: 'contact',
                element: <Contact />,
            },
            {
                path: 'industries',
                element: <Industries />,
            },
            {
                path: 'projects',
                element: <Projects />,
            },
            {
                path: 'request-inspection',
                element: <RequestInspection />,
            },
            {
                path: 'services/fire-sprinklers',
                element: <FireSprinklers />,
            },
            {
                path: 'services/fire-hydrant',
                element: <FireHydrant />,
            },
            {
                path: 'services/fire-alarm',
                element: <FireAlarm />,
            },
            // Add more routes here, e.g., { path: 'about', element: <About /> }
            {
                path: '*',
                element: <NotFound />,
            },
        ],
    },
]);

export default router;
