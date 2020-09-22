import React, { useState } from 'react';
import { MenuItems } from './MenuItems';
import { Link } from 'react-router-dom';
import './Dropdown.css';

function Dropdown() {
   const [click, setClick] = useState(false)

   const handleClick = () => setClick(!click)

   return (
      <div>
         <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
         </ul>
      </div>
   );
}

export default Dropdown




