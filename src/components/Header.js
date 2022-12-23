import React from 'react';
import './style/Header.css'

import {Button} from '@mui/material'

export default function Header () {
    return (
        <div className='header'>
            <h1 className='title-h1'>Lux</h1>
            <Button id='home-btn'>Home</Button>
            <Button id='import-btn'>Import</Button>
            <Button id='export-btn' className='hidden'>Export</Button>
        </div>
    )
}