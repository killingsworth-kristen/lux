import React, {useState, useEffect}  from 'react';
import {Pagination} from '@mui/material'

// import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIos';
// import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import './../style/Parameters.css'

export default function Parameters () {

    const [activeSourceTab, setActiveSourceTab] = useState("source-1")

    useEffect(()=>{
        document.getElementById(activeSourceTab).setAttribute("class","active")
    })

    function handleSourceChange (e) {
        if (e.target.id === "source-1") {
            e.target.setAttribute("class","active")
            document.getElementById("source-2").setAttribute("class","inactive")
            document.getElementById("source-3").setAttribute("class","inactive")
            document.getElementById("all-sources-search").setAttribute("class","inactive")
            document.getElementById("search-all-sources").setAttribute("class","inactive")
            document.getElementById("search-all-sources-label").setAttribute("class","inactive")
            setActiveSourceTab("source-1")
        } else if (e.target.id === "source-2") {
            e.target.setAttribute("class","active")
            document.getElementById("source-1").setAttribute("class","inactive")
            document.getElementById("source-3").setAttribute("class","inactive")
            document.getElementById("all-sources-search").setAttribute("class","inactive")
            document.getElementById("search-all-sources").setAttribute("class","inactive")
            document.getElementById("search-all-sources-label").setAttribute("class","inactive")
            setActiveSourceTab("source-2")
        } else if (e.target.id === "source-3") {
            e.target.setAttribute("class","active")
            document.getElementById("source-1").setAttribute("class","inactive")
            document.getElementById("source-2").setAttribute("class","inactive")
            document.getElementById("all-sources-search").setAttribute("class","inactive")
            document.getElementById("search-all-sources").setAttribute("class","inactive")
            document.getElementById("search-all-sources-label").setAttribute("class","inactive")
            setActiveSourceTab("source-3")
        } else {
            document.getElementById("all-sources-search").setAttribute("class","active")
            document.getElementById("search-all-sources-label").setAttribute("class","active")
            document.getElementById("search-all-sources").setAttribute("class","inactive")
            document.getElementById("source-1").setAttribute("class","inactive")
            document.getElementById("source-2").setAttribute("class","inactive")
            document.getElementById("source-3").setAttribute("class","inactive")
            setActiveSourceTab("search-all-sources")
        }
    }

    return (
        <div>
            
            <div className='time-parameters'>
                <h4>Time Parameters:</h4>
                <form>
                    <ul className='flex-outer'>
                        <li>
                            <label for="start-time">Start:</label>
                            <input type="text" id="start-time" name="start-time"/>
                        </li>
                        <li>
                            <label for="end-time">  End:</label>
                            <input type="text" id="end-time" name="end-time"/>
                        </li>
                        <li>
                            <label for="real-time-check">Real Time</label>
                            <input type="checkbox" id="real-time-check" name="real-time-check"/>
                        </li>
                        <li>
                            <label for="delta-time">Delta</label>
                            <input type="text" id="delta-time" name="delta-time"/>
                        </li>
                    </ul>
                </form>
            </div>
            <div className='parameters-tabs'>
                <h3 id="source-1" onClick={handleSourceChange}>Source 1</h3>
                <h3 id="source-2" onClick={handleSourceChange}>Source 2</h3>
                <h3 id="source-3" onClick={handleSourceChange}>Source 3</h3>
                <form id="all-sources-search"onClick={handleSourceChange}>
                    <label id="search-all-sources-label"for="search-all-sources">Search All: </label>
                    <input type="text" id="search-all-sources" name="search-all-sources" style={{fontSize: "18pt", margin: "0 0 .5rem 0"}}/>
                </form>
            </div>
            <div className='parameters-list'>
                <div className='sort-parameters'>
                    <h4>Sort: </h4>
                    <form>
                        <label for="alphabetical-sort">A-Z</label>
                        <input type="checkbox" id="alphabetical-sort" name="alphabetical-sort"/>
                        <label for="id-sort">By ID</label>
                        <input type="checkbox" id="id-sort" name="id-sort"/>
                        <label>Search :</label>
                        <input type="search-sort" id="search-sort" name="search-sort"/>
                        <label for="display-num-results">Show results: </label>
                        <select id="display-num-results" name="display-num-results">
                            <option value="10">10 Results Per Page</option>
                            <option value="15">15 Results Per Page</option>
                            <option value="20">20 Results Per Page</option>
                            <option value="25">25 Results Per Page</option>
                        </select>
                    </form>
                </div>
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
                <div className='page-change-buttons'>
                    <Pagination count={10} shape="rounded" color="primary"/>
                </div>
                
            </div>
        </div>
    )
}