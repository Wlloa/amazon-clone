import React from 'react';
import {Link} from 'react-router-dom';
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import './Header.css';

const Header = ()=>{
    return(
        <nav className="header">
            {/* Logo on the left */}
            <Link to="/">
                <img 
                className="header__logo" 
                src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" 
                alt=""
                />
            </Link> 
            
            {/* Search box */}
            <div className="header__search">
                <input type="text" className="header__searchInput"/>
                <SearchIcon className="header__searchIcon" />
            </div>
            
            {/* 3 Links*/}
            <div className='header__nav'>
                {/* 1st link */}
                <Link to="/login" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Hello, Guess</span>
                        <span className="header__optionLineTwo">Sing in
                        </span>
                    </div>
                    
                </Link>
                {/* 2nd link */}
                <Link to="/" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Returns</span>
                        <span className="header__optionLineTwo">& Orders</span>
                    </div>
                    
                </Link>
                {/* 3rd link */}
                <Link to="/" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Your</span>
                        <span className="header__optionLineTwo">Prime</span>
                    </div>
                    
                </Link>
            </div> 

            {/* Basket icon with numbers */}
            <Link to="/checkout" className="header__link">
                <div className="header__optionBasket">
                    {/* shopping basktet icon */}
                    <ShoppingBasketIcon/>
                    {/* number of items in the basket */}
                    <span className="header__optionLineTwo header__basketCounter">0</span>
                </div>
            </Link>
        </nav>
    )
};

export default Header;