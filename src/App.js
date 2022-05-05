import React from 'react';
import { Routes, Route, Outlet, Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import Home from './home/Home.js';
import Scheduler from './scheduler/Scheduler.js';
import Checker from './checker/Checker.js';
import Contact from './contact/Contact.js';
import Dashboard from './dashboard/Dashboard.js';
import SiteMaps from './siteMaps/SiteMaps.js';
import Admin from './admin/Admin.js';
import About from './about/About.js';

/*
import * as React from 'react';
import { Routes, Route, Outlet, Link } from 'react-router-dom';
*/

export default function App() {
  return (
    <div>
      <h1>354 RANS - JPARC Emitter Status and Training Request (JESTR) 2</h1>

      <p>
        This site will be used to view the JPARC emitters. New features include
        bombable target Rrgistration.
      </p>

      {/* Routes nest inside one another. Nested route paths build upon
            parent route paths, and nested route elements render inside
     parent route elements. See the note about <Outlet> below. */}

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

          {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}

          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
}

function Layout() {
  return (
    <div>
      {/* A "layout route" is a good place to put markup you want to
          share across all the pages on your site, like navigation. */}
      <nav>
      <Box sx={{ flexGrow: 1 }}>
<AppBar position="static">
  <Toolbar variant="dense">
    <IconButton
      edge="start"
      color="inherit"
      aria-label="menu"
      sx={{ mr: 2 }}
    >
      <MenuIcon />
    </IconButton>
    <Typography variant="h6" color="inherit" component="div">
    <Link to="/">Home</Link>
    </Typography>
    <Typography variant="h6" color="inherit" component="div">
    <Link to="/scheduler">Scheduler</Link>
    </Typography>
    <Typography variant="h6" color="inherit" component="div">
    <Link to="/checker">Checker</Link>
    </Typography>
    <Typography variant="h6" color="inherit" component="div">
    <Link to="/dashboard">Dashboard</Link>
    </Typography>
    <Typography variant="h6" color="inherit" component="div">
    <Link to="/siteMaps">Site Maps</Link>
    </Typography>
    <Typography variant="h6" color="inherit" component="div">
    <Link to="/contact">Contact</Link>
    </Typography>
    <Typography variant="h6" color="inherit" component="div">
    <Link to="/about">About</Link>
    </Typography>
    <Typography variant="h6" color="inherit" component="div">
    <Link to="/admin">Admin</Link>
    </Typography>
  </Toolbar>
</AppBar>
</Box>
      </nav>
      <hr />
      {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
      <Outlet />
    </div>
  );
}

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
  return /*#__PURE__*/ React.createElement(
    'div',
    null,
    /*#__PURE__*/ React.createElement('h2', null, 'Nothing to see here!'),
    /*#__PURE__*/ React.createElement(
      'p',
      null,
      /*#__PURE__*/ React.createElement(
        ReactRouterDOM.Link,
        {
          to: '/sites/354RANS/JESTR2/Script%20Files/Testing%20React/html/index.html',
        },
        'Go to the home page'
      )
    )
  );
}
