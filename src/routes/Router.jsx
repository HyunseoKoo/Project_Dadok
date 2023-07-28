import {createBrowserRouter} from 'react-router-dom';
import MainPage from '../pages/MainPage';
import BookDetailPage from '../pages/BookDetailPage';
import LayoutIndex from '../components/layout/LayoutIndex';
import LandingPage from '../pages/LandingPage';

export const router = createBrowserRouter([
    {
        path: '',
        element: <LayoutIndex />,
        children: [
            {path: '', element: <LandingPage />},
            {path: 'main', element: <MainPage />},
            {path: 'book/:keyword', element: <BookDetailPage />}
        ]
    }
])