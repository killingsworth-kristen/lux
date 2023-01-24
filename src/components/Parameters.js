import React from 'react';
import {Checkbox, Button} from '@mui/material'

import './../style/Parameters.css'

export default function Parameters () {
    return (
        <div>
            <div className='time-parameters'>
                <form>
                    <input></input>
                    <input></input>
                </form>
                <form>
                    <Checkbox></Checkbox>
                    <input></input>
                </form>
            </div>
            <div className='parameters-tabs'>
                <h3>Source 1</h3>
                <h3>Source 2</h3>
                <h3>Source 3</h3>
                <form>
                    <input></input>
                </form>
            </div>
            <div className='parameters-list'>
                <ul>
                    <li>List</li>
                    <li>List</li>
                    <li>List</li>
                    <li>List</li>
                    <li>List</li>
                    <li>List</li>
                    <li>List</li>
                    <li>List</li>
                    <li>List</li>
                    <li>List</li>
                </ul>
                <Button>Back</Button>
                <Button>Forward</Button>
            </div>
        </div>
    )
}