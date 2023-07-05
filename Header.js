// Contains complete header code
import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from 'react-router-dom';
import { UseStateValue } from './StateProvider';
import { auth } from './Firebase';

function Header() {
    const[{cart,user}] = UseStateValue();

    const handleAuthentication = () => {
        if(user){
            auth.signOut();
        }
    }

    return (
        <div className = "header">
            <Link to = "/">
                <img 
                    className = "header__logo" 
                    src = "http://pngimg.com/uploads/amazon/amazon_PNG11.png"
                    alt=""
                />
            </Link>
            <div 
                className = "header__search">
                <input 
                    className = "header__searchInput" 
                    type = "text" 
                />
                <SearchIcon className = "header__searchIcon"/>
            </div>

            <div 
                className = "header__nav">
                <Link to = {!user && '/login'}>
                    <div onClick={handleAuthentication} className = 'header__option'>
                        <span 
                            className = "header__optionLineone">Hello {user?user.email:'Guest'}</span>
                        <span 
                            className = "header__optionLinetwo">{user?'Sign Out':'Sign In'}</span>
                    </div>
                </Link>
                <div className = 'header__option'>
                    <span
                        className = "header__optionLineone">Returns</span>
                    <span 
                        className = "header__optionLinetwo">Orders</span>
                </div>
                <div className = 'header__option'>
                    <span 
                        className = "header__optionLineone">Your</span>
                    <span 
                        className = "header__optionLinetwo">Prime</span>
                </div>
                <Link to = /* {(user && '/checkout') || ('/login')}*/ '/checkout'>
                    <div className = "header__cart">
                        <span className = "header__optionLinetwo header__cartcount"> {/* //Here there is a space so It comes under the two classes */}
                        {cart.length}
                        </span>
                        <ShoppingCartIcon className = " header__optioncart"/>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Header
