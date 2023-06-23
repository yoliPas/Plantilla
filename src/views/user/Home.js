import React from "react";
import {  Link } from 'react-router-dom';

function Home() {

    return(
        <div>
        <nav>
          {/* Links de navegación */}
          <ul>
            <li>
              <Link to="/">Inicio</Link>
            </li>
          </ul>
        </nav>
        </div>
    )
}

export default Home;