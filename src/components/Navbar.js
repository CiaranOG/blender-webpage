import React, {useState} from 'react';
import {Link} from 'react-router-dom';
export default function Navbar() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick()
    return (
        <>
            <nav className="navBar">
               <div className="navbar-container">
                   <Link to="/" className="navbar-logo">
                       Ciaráns Models <i className='fab fa-typo3' />
                   </Link>
                   <div className='menu-icon' onClick= {handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
                   </div>
               </div>    

            </nav>
        </>
    )
}
