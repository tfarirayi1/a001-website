import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import Shell from 'shell';

const MountPoint=document.getElementById('root');
const Application=(
    <BrowserRouter>
        <Shell/>
    </BrowserRouter>
);

ReactDOM.render(Application,MountPoint);