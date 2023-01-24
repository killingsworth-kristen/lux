import React from 'react';
import ClearIcon from '@mui/icons-material/Clear';

import './../style/Tabs.css'

export default function Tabs () {
    return (
        <div className='tabs-container'>
            <div className='tab'>
                <p>This is a tab</p>
                <ClearIcon />
            </div>
            <div className='tab'>
                <p>This is a tab</p>
                <ClearIcon />
            </div>
            <div className='tab'>
                <p>This is a tab</p>
                <ClearIcon />
            </div>
            <div className='tab'>
                <p>This is a tab</p>
                <ClearIcon />
            </div>
            <div className='tab'>
                <p>This is a tab</p>
                <ClearIcon />
            </div>
        </div>
    )
}