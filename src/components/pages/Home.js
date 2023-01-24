import React from 'react';

import './../../style/Home.css'

import Parameters from '../Parameters';
import Selected from '../Selected';

export default function Home () {
    return (
        <div className='home-container'>
            <div className='selected-container'>
                <Selected/>
            </div>
            <div className='parameters-container'>
                <Parameters/>
            </div>
        </div>
    )
}