import React from 'react';
import { Link } from 'react-router-dom'
import './Categories.css';
import img from './img/Profile.jpg'


class Categories extends React.Component {
    render() {
       return <><nav class="menu" tabindex="0">
        <div class="smartphone-menu-trigger"></div>
      <header class="avatar">
            <img src= {img}/>
            <h3>My Profile</h3>
        <h3>Siwat Saowaros</h3>
      </header>
        <ul>
        <li tabindex="0" class="icon-dashboard"><span>Dashboard</span></li>
        <li tabindex="0" class="icon-customers"><span>Customers</span></li>
        <li tabindex="0" class="icon-users"><span>Users</span></li>
        <li tabindex="0" class="icon-settings"><span>Settings</span></li>
      </ul>
    </nav>
    
    <main>
      <div class="helper">
        RESIZE THE WINDOW
            <span>Breakpoints on 900px and 400px</span>
      </div>
    </main>
    </>
    }
}

export default Categories;