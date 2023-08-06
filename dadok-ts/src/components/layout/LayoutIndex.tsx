import { Outlet } from 'react-router-dom';
import Header from './Header';

export default function LayoutIndex() {
    return (
        <div>
            <Header />
            <Outlet />
        </div>
    );
}