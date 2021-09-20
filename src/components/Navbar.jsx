import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { logoutCall } from "../apiCalls";
import { AuthContext } from "../context/AuthContext/AuthContext";

import "./css/Navbar.css";

const Navbar = (props) => {
  const { user, dispatchAuthState } = useContext(AuthContext);

  const handleLogout = () => {
    logoutCall(user, dispatchAuthState);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src="/img/icons/logo.png" alt="logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/">
                <span className="hover-anim">Home</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/upload">
                <span className="hover-anim">Upload</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/donation">
                <span className="hover-anim">Donation</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/public-awareness">
                <span className="hover-anim">Awareness</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/report">
                <span className="hover-anim">Report</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                <span className="hover-anim">About</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/developers">
                <span className="hover-anim">Developers</span>
              </Link>
            </li>
            {user && (
              <Link id="profile" to="/profile">
                <div className="user-img">
                  <img
                    src={
                      user.profileImg ? user.profileImg : "/img/icons/user.png"
                    }
                    alt={user.username}
                  />
                </div>
                <div className="user-details">
                  <p>{user.username}</p>
                </div>
              </Link>
            )}
            <li className="nav-item" id="nav-btns">
              {!user ? (
                <>
                  <Link to="/login">Log In</Link>
                  <Link to="/signup">Sign Up</Link>
                </>
              ) : (
                <Link onClick={handleLogout} to="/logout">
                  Logout
                </Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>

    // <nav class="navbar navbar-expand-lg navbar-light bg-light">
    //   <div class="container-fluid">
    //     <a class="navbar-brand" href="#">
    //       Navbar
    //     </a>
    //     <button
    //       class="navbar-toggler"
    //       type="button"
    //       data-bs-toggle="collapse"
    //       data-bs-target="#navbarSupportedContent"
    //       aria-controls="navbarSupportedContent"
    //       aria-expanded="false"
    //       aria-label="Toggle navigation"
    //     >
    //       <span class="navbar-toggler-icon"></span>
    //     </button>
    //     <div class="collapse navbar-collapse" id="navbarSupportedContent">
    //       <ul class="navbar-nav me-auto mb-2 mb-lg-0">
    //         <li class="nav-item">
    //           <a class="nav-link active" aria-current="page" href="#">
    //             Home
    //           </a>
    //         </li>
    //         <li class="nav-item">
    //           <a class="nav-link" href="#">
    //             Link
    //           </a>
    //         </li>
    //         <li class="nav-item dropdown">
    //           <a
    //             class="nav-link dropdown-toggle"
    //             href="#"
    //             id="navbarDropdown"
    //             role="button"
    //             data-bs-toggle="dropdown"
    //             aria-expanded="false"
    //           >
    //             Dropdown
    //           </a>
    //           <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
    //             <li>
    //               <a class="dropdown-item" href="#">
    //                 Action
    //               </a>
    //             </li>
    //             <li>
    //               <a class="dropdown-item" href="#">
    //                 Another action
    //               </a>
    //             </li>
    //             <li>
    //               <hr class="dropdown-divider" />
    //             </li>
    //             <li>
    //               <a class="dropdown-item" href="#">
    //                 Something else here
    //               </a>
    //             </li>
    //           </ul>
    //         </li>
    //         <li class="nav-item">
    //           <a
    //             class="nav-link disabled"
    //             href="#"
    //             tabindex="-1"
    //             aria-disabled="true"
    //           >
    //             Disabled
    //           </a>
    //         </li>
    //       </ul>
    //       <form class="d-flex">
    //         <input
    //           class="form-control me-2"
    //           type="search"
    //           placeholder="Search"
    //           aria-label="Search"
    //         />
    //         <button class="btn btn-outline-success" type="submit">
    //           Search
    //         </button>
    //       </form>
    //     </div>
    //   </div>
    // </nav>
  );
};

export default Navbar;
