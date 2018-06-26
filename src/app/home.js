import React from 'react';
import {Link} from 'react-router-dom';
import 'styles/home.scss';

export default class Home extends React.Component {
    render() {
        return (
            <div id="home">
                <Link to="/about">/about</Link>
            </div>
        );
    }
}