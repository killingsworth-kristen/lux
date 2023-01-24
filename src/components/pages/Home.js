import React from 'react';

import Parameters from '../Parameters';
import Selected from '../Selected';

import './../../style/Home.css'

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