// import React from 'react';
// import Img from "./ama.png";
// import './Header.css';
// import SearchIcon from "@material-ui/icons/Search"
// import  ShoppingBasket  from '@material-ui/icons/ShoppingBasket';
// import {Link} from "react-router-dom";
// import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
// import { useStateValue } from "./StateProvider";


// function Header() {
//     const [{ basket, dispatch }] = useStateValue();
//     return (
//         <div className='header'>
//           <Link to="/">
//                 <img 
//                     className="header__logo"
//                     src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" 
//                     alt="Amazon Logo" 
//                 />
//             </Link>
           
          

//           <div className='header__search'>
//               <input
//               className="header__searchInput"
//               type="text" />
//               <SearchIcon
//                 className="header__searchIcon" />
             
//           </div>

//           <div className='header__nav'>
//               <Link to="/login">
//               <div className="header__option">
//                    <span className="header__optionLineOne">
//                        Hello {!user ? 'Guest' : user.email}
//                    </span>
//                    <span className="header__optionLineTwo">
//                        sign in
//                    </span>
//                </div>
//                </Link>
               
//                <div className="header__option">
//                    <span className="header__optionLineOne">
//                        Returns
//                    </span>
//                    <span className="header__optionLineTwo">
//                      & Orders
//                    </span>
//                </div>

//                <div className="header__option">
//                    <span className="header__optionLineOne">
//                        Your
//                    </span>
//                    <span className="header__optionLineTwo">
//                       Prime
//                    </span>
//                </div>
//                {/* <Link to="/checkout">
//                 <div className ="header__optionBasket">
//                     <ShoppingBasket />
//                     <span className ="header__optionLineTwo header__basketCount">basket?.length
//                     </span>
//                   </div>  
//                 </Link> */}
//                 <Link to="/checkout" className="header__link">
//                     <div className="header__optionBasket"></div>
//                         {/* Shopping Basket Icon */}
//                         <ShoppingBasket />
//                         {/* Number of items in the basket */}
//                         <span className="header__basketCount">{basket?.length}</span>
//                 </Link>


//             </div>


//         </div>

        
         
        
//     )
// }

// export default Header


// import React from 'react'
// import "./Header.css";
// import { Link } from "react-router-dom";
// import SearchIcon from "@material-ui/icons/Search";
// import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
// import { useStateValue } from "./StateProvider";
// import { auth } from "./firebase";

// function Header() {
//     const [{ basket, user }] = useStateValue();
//     const login = () => {
//         if (user) {
//             auth.signOut();
//         }
//     };
//     return (
//         <nav className="header">
            
//             <Link to="/">
//                 <img 
//                     className="header__logo"
//                     src="https://assets.pharmeasy.in/web-assets/dist/fca22bc9.png"
//                     //src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" 
//                     alt="Amazon Logo" 
//                 />
//             </Link>
           
//             <div className="header__search">
//                 <input type="text" className="header__searchInput" />
//                 <SearchIcon className="header__searchIcon" />
//             </div>
           
//             <div className="header__nav">
                
//                 <Link to={!user && "/login"} className="header__link">
//                     <div onClick={login} className="header__option">
//                         <span className="header__optionLineOne"> Hello {!user ? 'Guest' : user.email}</span>
//                         <span className="header__optionLineTwo">{user ? 'Sign Out' : 'Sign in'}</span>
//                     </div>
//                 </Link>
//                 {/* 2nd link */}
//                 <Link to="/" className="header__link">
//                     <div className="header__option">
//                         <span className="header__optionLineOne">Returns</span>
//                         <span className="header__optionLineTwo">& Orders</span>
//                     </div>
//                 </Link>
//                 {/* 3rd link */}
//                 <Link to="/" className="header__link">
//                     <div className="header__option">
//                         <span  className="header__optionLineOne">Your</span>
//                         <span className="header__optionLineTwo">Prime</span>
//                     </div>
//                 </Link>
//                 {/* 4th link */}
//                 <Link to="/checkout" className="header__link">
//                     <div className="header__optionBasket"></div>
//                         {/* Shopping Basket Icon */}
//                         <ShoppingBasketIcon />
//                         {/* Number of items in the basket */}
//                         <span className="header__basketCount">{basket?.length}</span>
//                 </Link>
//             </div>
//             {/* basket icon with number */}
//         </nav>
//     );
// }

// export default Header;



import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthenticaton = () => {
    if (user) {
      auth.signOut();
    }
  }

  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="https://assets.pharmeasy.in/web-assets/dist/fca22bc9.png"
        />
      </Link>

      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <Link to={!user && '/login'}>
          <div onClick={handleAuthenticaton} className="header__option">
            <span className="header__optionLineOne">Hello {!user ? 'Guest' : user.email}</span>
            <span className="header__optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
          </div>
        </Link>

        <Link to='/orders'>
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        </Link>
        

       

        <Link to="/checkout">
          <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <span className="header__optionLineTwo header__basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;