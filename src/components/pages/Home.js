import React from 'react';
import { Button } from '@mui/material'
import ClearIcon from '@mui/icons-material/Clear';

import './../style/Home.css'

export default function Home () {
    return (
        <div className='home-container'>
            <aside className='applied-filters'>
                <div className='filters-title'>
                    <Button className='render-graph-btn'>Render Graph</Button>
                    <h3>Applied Filters:</h3>
                </div>
                <div className='filter-list'>
                    <div className='individual-filter'>
                        <p>this is a filter</p>
                        <ClearIcon className='delete-btn'/>
                    </div>
                    <div className='individual-filter'>
                        <p>this is a filter</p>
                        <ClearIcon className='delete-btn'/>
                    </div>
                    <div className='individual-filter'>
                        <p>this is a filter</p>
                        <ClearIcon className='delete-btn'/>
                    </div>
                </div>
                
            </aside>
            <section className='filter-selection'>
                <p>search</p>
            </section>
        </div>
    )
}