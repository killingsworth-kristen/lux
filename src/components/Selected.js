import React from 'react';
import { Button } from '@mui/material'

import './../style/Selected.css'

export default function Selected () {
    return (
        <div>
            <div className='selections-header'>
                <Button>Render</Button>
                <form>
                    <input></input>
                </form>
                <Button>Add Graph</Button>
            </div>
            <div className='graph-selections'>
                <h3>Graph</h3>
                <p>This is a selection</p>
                <p>This is a selection</p>
                <p>This is a selection</p>
            </div>
            <div className='graph-selections'>
                <h3>Graph</h3>
                <p>This is a selection</p>
                <p>This is a selection</p>
                <p>This is a selection</p>
            </div>
        </div>
    )
}