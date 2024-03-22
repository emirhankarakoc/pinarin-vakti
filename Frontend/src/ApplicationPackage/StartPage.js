import React from "react";
import background from './assets/image1.png'
import { Button, Dropdown,Menu } from 'semantic-ui-react'
import { Link, NavLink } from "react-router-dom";


export default function StartPage() {
  
  return (
    <div style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover', height: '100vh', fontFamily: 'Inter, Arial, sans-serif', fontWeight: '600' }}>


<div>
  <div className="container">
    <div className="center margin-top-30px"> 
    <div><Menu vertical >
       <Menu.Item as={NavLink} to="/denizli" name="Denizli" />        
       <Menu.Item as={NavLink} to="/baku" name="Baku" />
       <Menu.Item as={NavLink} to="/ankara" name="Ankara" />

       <Menu.Item as={NavLink} to="/istanbul" name="İstanbul" />
      </Menu></div>
    </div>
  </div>
</div>

</div>
  );
}
