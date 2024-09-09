'use client';
import {useState} from 'react';

export default function Nav(){

    const [someCount, setSomeCount] = useState(10);
    return(<div>
        {someCount}
        <button onClick={() =>{
            setSomeCount(someCount + 1);
        }}>
            Increment count
            </button>
        <ul>
            <li>Home</li>
            <li>Profile</li>
            <li>Settings</li>
            <li>Trending</li>
        </ul>
    </div>)
}