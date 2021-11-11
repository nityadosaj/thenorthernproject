import React from 'react';
import admc from '../admc.jpg';

function Header()
{
    return(
      <div className="header">
        <img src={admc} alt="admc logo"/>
        <nav>
          <ul className="lists">
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">How It Works</a>
            </li>
            <li>
              <a href="#">Discover</a>
            </li>
          </ul>
        </nav>
      </div>
    );
}

export default Header;