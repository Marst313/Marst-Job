import React from 'react';
import Wrapper from '../assets/wrappers/Navbar';
import { FaAlignLeft, FaUserCircle, FaCaretDown } from 'react-icons/fa';
import Logo from './Logo';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleSidebar, clearStore } from '../features/user/userSlice';

const Navbar = () => {
  const { user } = useSelector((store) => store.user);
  const [showLogout, setShowLogout] = useState(false);
  const dispatch = useDispatch();

  const toggle = () => {
    dispatch(toggleSidebar());
  };

  return (
    <Wrapper>
      <div className="nav-center">
        <label htmlFor="check" className="menuButton">
          <input id="check" type="checkbox" onClick={toggle} />
          <span className="top"></span>
          <span className="mid"></span>
          <span className="bot"></span>
        </label>

        <div>
          <Logo />
          <h3 className="logo-text">dashboard</h3>
        </div>
        <div className="btn-container">
          <button type="button" className="btn" onClick={() => setShowLogout(!showLogout)}>
            <FaUserCircle />
            {user?.name}
            <FaCaretDown />
          </button>
          <div className={`${showLogout ? 'show-dropdown' : ''} dropdown `}>
            <button type="button" className="dropdown-btn" onClick={() => dispatch(clearStore('Logging Out...'))}>
              logout
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Navbar;
