import React from 'react';
import { Outlet } from 'react-router-dom';

export default function LayoutIndex() {
    return (
        <div>
            LayoutIndex
            <Outlet />
        </div>
    );
}