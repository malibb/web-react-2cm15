import React from 'react';
import NavigateBtn from './NavigateBtn';
import { ArrowLeftIcon, RefreshIcon } from '@heroicons/react/solid'

const Sidebar = () => {
    return (
        <div className="flex flex-col items-end">
            <NavigateBtn path="/">
                <ArrowLeftIcon className="h-10 w-10 text-gray-900"></ArrowLeftIcon>
            </NavigateBtn>
            <NavigateBtn path="/">
            <RefreshIcon className="h-10 w-10 text-gray-900"></RefreshIcon>
            </NavigateBtn>
        </div>
    );
};

export default Sidebar;