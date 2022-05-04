import React from "react";


import Home from "../home/Home.js";
import Scheduler from "../scheduler/Scheduler.js";
import Checker from "../checker/Checker.js";
import Contact from "../contact/Contact.js";
import Dashboard from "../dashboard/Dashboard.js";
import SiteMaps from "../siteMaps/SiteMaps.js";
import Admin from "../admin/Admin.js";
import About from "../about/About.js";

/*
import * as React from 'react';
import { Routes, Route, Outlet, Link } from 'react-router-dom';

export default function App() {
  return (
    <div>
      <h1>354 RANS - JPARC Emitter Status and Training Request (JESTR) 2</h1>

      <p>
        This site will be used to view the JPARC emitters. New features include
        bombable target Rrgistration.
      </p>
*/

      /* Routes nest inside one another. Nested route paths build upon
            parent route paths, and nested route elements render inside
            parent route elements. See the note about <Outlet> below. */
 
/*
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="scheduler" element={<Scheduler />} />
          <Route path="checker" element={<Checker />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="siteMaps" element={<SiteMaps />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
          <Route path="admin" element={<Admin />} />

*/

          /* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */

/*
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
}
*/


//function Layout() {
//  return (
//    <div>
//      /* A "layout route" is a good place to put markup you want to
//          share across all the pages on your site, like navigation. */
//      <nav>
//        <ul>
//          <li>
//            <Link to="/">Home</Link>
//          </li>
//          <li>
//            <Link to="/scheduler">Scheduler</Link>
//          </li>
//          <li>
//            <Link to="/checker">Checker</Link>
//          </li>
//          <li>
//            <Link to="/dashboard">Dashboard</Link>
//          </li>
//          <li>
//            <Link to="/siteMaps">Site Maps</Link>
//          </li>
//          <li>
//            <Link to="/contact">Contact</Link>
//          </li>
//          <li>
//            <Link to="/about">About</Link>
//          </li>
//          <li>
//            <Link to="/admin">Admin</Link>
//          </li>
//        </ul>
//      </nav>
//      <hr />
//      {/* An <Outlet> renders whatever child route is currently active,
//          so you can think about this <Outlet> as a placeholder for
//          the child routes we defined above. */}
//      <Outlet />
//    </div>
//  );
//}

/*
function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function Scheduler() {
  return (
    <div>
      <h2>Scheduler</h2>
    </div>
  );
}

function Checker() {
  return (
    <div>
      <h2>Checker</h2>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}

function SiteMaps() {
  return (
    <div>
      <h2>Site Maps</h2>
    </div>
  );
}

function Contact() {
  return (
    <div>
      <h2>Contact</h2>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function Admin() {
  return (
    <div>
      <h2>Admin</h2>
    </div>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}
*/

//import * as React from 'react';
//import { Routes, Route, Outlet, Link } from 'react-router-dom';

export default function App() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "354 RANS - JPARC Emitter Status and Training Request (JESTR) 2"), /*#__PURE__*/React.createElement("p", null, "This site will be used to view the JPARC emitters. New features include bombable target Rrgistration."), /*#__PURE__*/React.createElement(ReactRouterDOM.Routes, null, /*#__PURE__*/React.createElement(ReactRouterDOM.Route, {
    path: "/sites/354RANS/JESTR2/Script%20Files/Testing%20React/html/index.html",
    element: /*#__PURE__*/React.createElement(Layout, null)
  }, /*#__PURE__*/React.createElement(ReactRouterDOM.Route, {
    index: true,
    element: /*#__PURE__*/React.createElement(Home, null)
  }), /*#__PURE__*/React.createElement(ReactRouterDOM.Route, {
    path: "scheduler",
    element: /*#__PURE__*/React.createElement(Scheduler, null)
  }), /*#__PURE__*/React.createElement(ReactRouterDOM.Route, {
    path: "checker",
    element: /*#__PURE__*/React.createElement(Checker, null)
  }), /*#__PURE__*/React.createElement(ReactRouterDOM.Route, {
    path: "dashboard",
    element: /*#__PURE__*/React.createElement(Dashboard, null)
  }), /*#__PURE__*/React.createElement(ReactRouterDOM.Route, {
    path: "siteMaps",
    element: /*#__PURE__*/React.createElement(SiteMaps, null)
  }), /*#__PURE__*/React.createElement(ReactRouterDOM.Route, {
    path: "contact",
    element: /*#__PURE__*/React.createElement(Contact, null)
  }), /*#__PURE__*/React.createElement(ReactRouterDOM.Route, {
    path: "about",
    element: /*#__PURE__*/React.createElement(About, null)
  }), /*#__PURE__*/React.createElement(ReactRouterDOM.Route, {
    path: "admin",
    element: /*#__PURE__*/React.createElement(Admin, null)
  }), /*#__PURE__*/React.createElement(ReactRouterDOM.Route, {
    path: "*",
    element: /*#__PURE__*/React.createElement(NoMatch, null)
  }))));
}

function Layout() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("nav", null, /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(ReactRouterDOM.Link, {
    to: "/sites/354RANS/JESTR2/Script%20Files/Testing%20React/html/index.html"
  }, "Home")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(ReactRouterDOM.Link, {
    to: "scheduler"
  }, "Scheduler")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(ReactRouterDOM.Link, {
    to: "checker"
  }, "Checker")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(ReactRouterDOM.Link, {
    to: "dashboard"
  }, "Dashboard")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(ReactRouterDOM.Link, {
    to: "siteMaps"
  }, "Site Maps")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(ReactRouterDOM.Link, {
    to: "contact"
  }, "Contact")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(ReactRouterDOM.Link, {
    to: "about"
  }, "About")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(ReactRouterDOM.Link, {
    to: "admin"
  }, "Admin")))), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement(ReactRouterDOM.Outlet, null));
}

//function Home() {
//  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", null, "Home"));
//}

//function Scheduler() {
//  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", null, "Scheduler"));
//}

//function Checker() {
//  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", null, "Checker"));
//}

//function Dashboard() {
//  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", null, "Dashboard"));
//}

//function SiteMaps() {
//  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", null, "Site Maps"));
//}

//function Contact() {
//  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", null, "Contact"));
//}

//function About() {
//  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", null, "About"));
//}

//function Admin() {
//  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", null, "Admin"));
//}

function NoMatch() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", null, "Nothing to see here!"), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement(ReactRouterDOM.Link, {
    to: "/sites/354RANS/JESTR2/Script%20Files/Testing%20React/html/index.html"
  }, "Go to the home page")));
}
