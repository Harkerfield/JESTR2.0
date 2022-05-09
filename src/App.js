import './App.css';
import React from 'react';
import { Routes, Route, Outlet, Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import DateRangeIcon from '@mui/icons-material/DateRange';

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

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function App() {
  return (
    <div>
      {/*
      <h1>354 RANS - JPARC Emitter Status and Training Request (JESTR) 2</h1>

      <p>
        This site will be used to view the JPARC emitters. New features include
        bombable target Rrgistration.
      </p>
      */}

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
  const menuLinks = [
    {
      to: '/',
      name: 'Home',
    },
    {
      to: '/scheduler',
      name: 'Scheduler',
    },
    {
      to: '/checker',
      name: 'Checker',
    },
    {
      to: '/dashboard',
      name: 'Dashboard',
    },
    {
      to: '/siteMaps',
      name: 'Site Maps',
    },
    {
      to: '/contact',
      name: 'Contact',
    },
    {
      to: '/About',
      name: 'About',
    },
    {
      to: '/admin',
      name: 'Admin',
    },
  ];

  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Persistent drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {menuLinks.map((link) => (
            <ListItem button key={link.to}>
              <ListItemIcon>
                {2 % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={link.name} />
            </ListItem>
          ))}
        </List>
        <Divider />
       
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        //content
      </Main>
    </Box>
  );
}

function NoMatch() {
  return /*#__PURE__*/ React.createElement(
    'div',
    null,
    /*#__PURE__*/ React.createElement('h2', null, 'Nothing to see here!'),
    /*#__PURE__*/ React.createElement(
      'p',
      null,
      /*#__PURE__*/ React.createElement(
        Link,
        {
          to: '/sites/354RANS/JESTR2/Script%20Files/Testing%20React/html/index.html',
        },
        'Go to the home page'
      )
    )
  );
}
