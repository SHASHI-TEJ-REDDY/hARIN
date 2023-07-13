// import React from "react";

// function App() {
//   return (
//     <div>
//       <p>Welcome34455</p>
//       hvbjvhbjnk
//     </div>
//   );
// }

// export default App;
// import React, { useState } from "react";
// // import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";
// import { BrowserRouter as Router, Routes, Route, Link,useParams, Navigate } from "react-router-dom";
// // import Web3 from "web3";
// import About from "./about";
// import Admin from "./admin";
// import Contact from "./contact";
// import Home from "./home";
// import Enduser from "./enduser";
// import Verifier from "./verifier";
// import Verifying from "./verifying";
// import Verified from "./verified";
// import Labeller from "./labeller";
// import Connect from "./connect";
// import Report from './report';
// import Getrpt from "./getrpt";
// import Developer from "./developer";
// import History from "./history";
// import MyComponent from "./preqs";
// import Login from "./login";
// import SetPatchComponent from "./register";
// import Patchrequest from "./patchrequest";
// import Deployment from "./Deployment";
// import Labeller2 from "./lab2";
// import User from "./user";
// import Signup from "./signup";
// import Upatch from "./upatch";
// // import MyComponent from './getrpt';

// function App() {
//     return (
//         <>
//             <Router>
//                 <nav className="navbar navbar-expand-md bg-secondary">
//                     <div className="container-fluid">
//                         <button className="navbar-toggler text-bg-light" type="button" data-bs-toggle="collapse"
//                             data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false"
//                             aria-label="Toggle navigation">
//                             <span className="navbar-toggler-icon"></span>
//                         </button>
//                         <div className="ms-2 collapse navbar-collapse d-flex justify-content-md-end" id="navbarTogglerDemo03">
//                             <ul className="navbar-nav">
//                                 <li className="nav-item mx-2">

//                                 </li>
//                                 <li className="nav-item mx-2">
//                                     <Link className="nav-link text-light" to="/about">about</Link>
//                                 </li>
//                                 <li className="nav-item mx-2">
//                                     <Link className="nav-link text-light" to="/contact">contact</Link>
//                                 </li>
//                                 <li className="nav-item mx-2">
//                                     <Link className="nav-link text-light" to="/signup">Signup</Link>
//                                 </li>
//                                 <li className="nav-item mx-2">
//                                     <Link className="nav-link text-light" to="/login">Login</Link>
//                                 </li>
//                             </ul>
//                         </div>
//                     </div>
//                 </nav>
//                 <div class="container my-5">
//                     <nav class="navbar navbar-expand-sm bg-secondary">
//                         <div class="container-fluid">
//                             <ul class="navbar-nav w-100">
//                                 <li class="nav-item col-sm text-center">
//                                     <Link className="nav-link text-light" to="/enduser">end user</Link>
//                                 </li>
//                                 <li class="nav-item col-sm text-center active">
//                                     <Link className="nav-link text-light" to="/labeller">labeller</Link>
//                                 </li>
//                                 <li class="nav-item col-sm text-center active">
//                                     <Link className="nav-link text-light" to="/admin">admin</Link>
//                                 </li>
//                                 <li class="nav-item col-sm text-center active">
//                                     <Link className="nav-link text-light" to="/developer">developer</Link>
//                                 </li>
//                                 <li class="nav-item col-sm text-center active">
//                                     <Link className="nav-link text-light" to="/verifier">verifier</Link>
//                                 </li>
//                                 <li class="nav-item col-sm text-center active">
//                                     <Link className="nav-link text-light" to="/user">user</Link>
//                                 </li>
//                             </ul>
//                         </div>
//                     </nav>
//                 </div>
//                 <Routes>
//                     <Route path="/" element={<Home />} >
//                         <Route path="/enduser" element={<Enduser/>}>
//                             <Route path="Connect" element={<Connect />} />
//                             <Route path="report" element={<Report />} />
//                         </Route>
//                         <Route path="/labeller" element={<Labeller/>}>
//                             <Route path="grpt" element={<Getrpt />} />
//                             <Route path="lab2" element={<Labeller2 />} />
//                         </Route>
//                         <Route path="/admin" element={<Admin/>}>
//                             <Route path="prequest" element={<Patchrequest />} />
//                             <Route path="deploy" element={<Deployment />} />
//                             <Route path="history" element={<History />} />
//                         </Route>
//                         <Route path="/developer" element={<Developer/>}>
//                             <Route path="preqs" element={<MyComponent />} />
//                             <Route path="register/:id" element={<SetPatchComponent />} />
//                         </Route>
//                         <Route path="/verifier" element={<Verifier/>}>
//                             <Route path="verifying" element={<Verifying />} />
//                             <Route path="verified" element={<Verified />} />
//                         </Route>
//                         <Route path="/user" element={<User/>}>
//                             <Route path="upatch" element={<Upatch />} />
//                             {/* <Route path="verified" element={<Verified />} /> */}
//                         </Route>
//                         {/* <Route path="/admin" element={<Labeller/>}>
//                             <Route path="setprior" element={<Getrpt />} />
//                             <Route path="patches" element={<Getrpt />} />
//                             <Route path="deploy" element={<Getrpt />} />
//                         </Route> */}
//                     </Route>
//                     <Route path="/about" element={<About />} />
//                     <Route path="/contact" element={<Contact />} />
//                     <Route path="/signup" element={<Signup />} />
//                     <Route path="/login" element={<Login />} />
//                 </Routes>
//                 {/* </Router> */}
//             </Router>
//         </>
//     );
// }

// export default App;
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import jwt_decode from 'jwt-decode';
import About from './about';
import Admin from './admin';
import Contact from './contact';
import Home from './home';
import Enduser from './enduser';
import Verifier from './verifier';
import Verifying from './verifying';
import Verified from './verified';
import Labeller from './labeller';
import Connect from './connect';
import Report from './report';
import Getrpt from './getrpt';
import Developer from './developer';
import History from './history';
import MyComponent from './preqs';
import Login from './login';
import SetPatchComponent from './register';
import Patchrequest from './patchrequest';
import Deployment from './Deployment';
import Labeller2 from './lab2';
import Signup from './signup';
import Upatch from './upatch';
import Apt from './athistory';
import Lpt from './lthistory';
import Dpt from './dpt';
import Vpt from './vpt';
import Reupload from './reupload';
const App = () => {
  const [role, setRole] = useState('');
  const [user, setUser] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('isLoggedIn') === 'true');
  const t=process.env.Address

  useEffect(() => {
    const storedRole = localStorage.getItem('role');
    const storedUser = localStorage.getItem('uname');
    if (storedRole && storedUser) {
      setRole(storedRole);
      setUser(storedUser);
    }
    console.log(process.env);
  }, []);
  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('role');
    localStorage.removeItem('uname');
    // sessionStorage.removeItem('isLoggedIn');
    // sessionStorage.removeItem('role');
    // sessionStorage.removeItem('uname');
    setIsLoggedIn(false);
    setRole('');
    setUser('');
    window.location.href = '/login';
    // window.location.reload();
  };

  return (
    <>
      <Router>
        <nav className="navbar navbar-expand-md bg-secondary">
          <div className="container-fluid">
            <button
              className="navbar-toggler text-bg-light"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarTogglerDemo03"
              aria-controls="navbarTogglerDemo03"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="ms-2 collapse navbar-collapse d-flex justify-content-md-end" id="navbarTogglerDemo03">
              <ul className="navbar-nav">
                <li className="nav-item mx-2">
                  <Link className="nav-link text-light" to="/about">
                    about
                  </Link>
                </li>
                <li className="nav-item mx-2">
                  <Link className="nav-link text-light" to="/contact">
                    contact
                  </Link>
                </li>
                {isLoggedIn ? (
                  <li className="nav-item mx-2">
                    <button className="nav-link btn btn-link text-light" onClick={handleLogout}>
                      Logout
                    </button>
                  </li>
                ) : (
                  <>
                    <li className="nav-item mx-2">
                      <Link className="nav-link text-light" to="/signup">
                        Signup
                      </Link>
                    </li>
                    <li className="nav-item mx-2">
                      <Link className="nav-link text-light" to="/login">
                        Login
                      </Link>
                    </li>
                  </>
                )}
                {role === 'enduser' && (
                  <>
                    <li className="nav-item col-sm text-center">
                      <Link className="nav-link text-light" to="/enduser">
                        end user
                      </Link>
                    </li>
                    {/* Additional end user links */}
                  </>
                )}
                {role === 'labeller' && (
                  <>
                    <li className="nav-item col-sm text-center active">
                      <Link className="nav-link text-light" to="/labeller">
                        labeller
                      </Link>
                    </li>
                    {/* Additional labeller links */}
                  </>
                )}
                {role === 'admin' && (
                  <>
                    <li className="nav-item col-sm text-center active">
                      <Link className="nav-link text-light" to="/admin">
                        admin
                      </Link>
                    </li>
                    {/* Additional admin links */}
                  </>
                )}
                {role === 'developer' && (
                  <>
                    <li className="nav-item col-sm text-center active">
                      <Link className="nav-link text-light" to="/developer">
                        developer
                      </Link>
                    </li>
                    {/* Additional developer links */}
                  </>
                )}
                {role === 'verifier' && (
                  <>
                    <li className="nav-item col-sm text-center active">
                      <Link className="nav-link text-light" to="/verifier">
                        verifier
                      </Link>
                    </li>
                    {/* Additional verifier links */}
                  </>
                )}
                {role === 'user' && (
                  <>
                    <li className="nav-item col-sm text-center active">
                      <Link className="nav-link text-light" to="/user">
                        user
                      </Link>
                    </li>
                    {/* Additional user links */}
                  </>
                )}
              </ul>
              
            </div>
          </div>
        </nav>
        {/* <nav className="navbar navbar-expand-md bg-secondary">
          {/* Navigation Links */}
        {/* </nav> */}
        {/* <div className="container my-5">
          <nav className="navbar navbar-expand-sm bg-secondary">
            <div className="container-fluid">
              <ul className="navbar-nav w-100">
                {role === 'enduser' && (
                  <>
                    <li className="nav-item col-sm text-center">
                      <Link className="nav-link text-light" to="/enduser">
                        end user
                      </Link>
                    </li>
                  </>
                )}
                {role === 'labeller' && (
                  <>
                    <li className="nav-item col-sm text-center active">
                      <Link className="nav-link text-light" to="/labeller">
                        labeller
                      </Link>
                    </li>
                  </>
                )}
                {role === 'admin' && (
                  <>
                    <li className="nav-item col-sm text-center active">
                      <Link className="nav-link text-light" to="/admin">
                        admin
                      </Link>
                    </li>
                  </>
                )}
                {role === 'developer' && (
                  <>
                    <li className="nav-item col-sm text-center active">
                      <Link className="nav-link text-light" to="/developer">
                        developer
                      </Link>
                    </li>
                  </>
                )}
                {role === 'verifier' && (
                  <>
                    <li className="nav-item col-sm text-center active">
                      <Link className="nav-link text-light" to="/verifier">
                        verifier
                      </Link>
                    </li>
                  </>
                )}
                {role === 'user' && (
                  <>
                    <li className="nav-item col-sm text-center active">
                      <Link className="nav-link text-light" to="/user">
                        user
                      </Link>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </nav>  */}
        <Routes>
          <Route path="/" element={<Home />}>
            {/* Add role-specific routes and components based on the user's role */}
            {role === 'enduser' && (
              <>
                <Route path="/enduser" element={<Enduser />}>
                  <Route path="Connect" element={<Connect />} />
                  <Route path="report" element={<Report />} />
                  <Route path="upatch" element={<Upatch />} />
                </Route>
                {/* Additional end user routes */}
              </>
            )}
            {role === 'labeller' && (
              <>
                <Route path="/labeller" element={<Labeller />}>
                  <Route path="grpt" element={<Getrpt />} />
                  <Route path="lab2" element={<Labeller2 />} />
                  <Route path="lpt" element={<Lpt />} />
                </Route>
                {/* Additional labeller routes */}
              </>
            )}
            {role === 'admin' && (
              <>
                <Route path="/admin" element={<Admin />}>
                  <Route path="prequest" element={<Patchrequest />} />
                  <Route path="deploy" element={<Deployment />} />
                  <Route path="history" element={<History />} />
                  <Route path="apt" element={<Apt />} />
                </Route>
                {/* Additional admin routes */}
              </>
            )}
            {role === 'developer' && (
              <>
                <Route path="/developer" element={<Developer />}>
                  <Route path="preqs" element={<MyComponent />} />
                  <Route path="register/:id" element={<SetPatchComponent />} />
                  <Route path="reupload/:id" element={<Reupload />} />
                  <Route path="dpt" element={<Dpt />} />
                </Route>
                {/* Additional developer routes */}
              </>
            )}
            {role === 'verifier' && (
              <>
                <Route path="/verifier" element={<Verifier />}>
                  <Route path="verifying" element={<Verifying />} />
                  <Route path="verified" element={<Verified />} />
                  <Route path="vpt" element={<Vpt />} />
                </Route>
                {/* Additional verifier routes */}
              </>
            )}
          </Route>
          {/* Other routes */}
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        {isLoggedIn}
      </Router>
    </>
  );
};

export default App;



