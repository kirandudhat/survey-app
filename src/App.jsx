import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import "./styles.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
} from "react-router-dom";

import Store from "./Store";
import _ from "lodash";
import { MenuList } from "./menu";
import CustomizedListItem from "./CustomizedListItem";

// import Typography from "@mui/material/Typography";
// import Breadcrumbs from "@mui/material/Breadcrumbs";
// import Link from "@mui/material/Link";
// import HomeIcon from "@mui/icons-material/Home";
// import WhatshotIcon from "@mui/icons-material/Whatshot";
// import GrainIcon from "@mui/icons-material/Grain";

import Breadcs from "./components/breadcrumbs/Breadcs";

import { NotificationsNone, Language, Settings } from "@material-ui/icons";
import styled from "styled-components";
import Dashboard from "../src/pages/dashboard/Dashboard.js";
import Survay from "../src/pages/survey/Survay";

const drawerWidth = 220;

const styles = (theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 36,
  },
  menuButtonIconClosed: {
    transition: theme.transitions.create(["transform"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    transform: "rotate(0deg)",
  },
  menuButtonIconOpen: {
    transition: theme.transitions.create(["transform"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    transform: "rotate(180deg)",
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing.unit * 7 + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing.unit * 9 + 1,
    },
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    marginTop: theme.spacing.unit,
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
  },
  grow: {
    flexGrow: 1,
  },
});

export const TopIconBadge = styled.span`
  position: absolute;
  top: -5px;
  right: 1px;
  background-color: red;
  color: white;
  border-radius: 50%;
  width: 15px;
  height: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
`;
export const IconContainer = styled.div`
  position: relative;
  cursor: pointer;
  margin-right: 10px;
  color: #eee;
`;

export const TopRight = styled.div`
  display: flex;
  align-items: center;
`;

class App extends React.Component {
  state = {
    open: false,
    anchorEl: null,
  };

  handleDrawerOpen = () => {
    this.setState({ open: !this.state.open });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  handleMenu = (event) => {
    this.setState({ anchorEl: event.currentTarget });
  };
  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  handleText = () => {
    console.log("handleText");
  };

  render() {
    const { classes, theme } = this.props;
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);
    return (
      <Router>
        <Store>
          <div className={classes.root}>
            <CssBaseline />
            <AppBar
              position="fixed"
              className={classes.appBar}
              fooJon={classNames(classes.appBar, {
                [classes.appBarShift]: this.state.open,
              })}
            >
              <Toolbar disableGutters={true}>
                <IconButton
                  color="inherit"
                  aria-label="Open drawer"
                  onClick={this.handleDrawerOpen}
                  className={classes.menuButton}
                >
                  <MenuIcon
                    classes={{
                      root: this.state.open
                        ? classes.menuButtonIconOpen
                        : classes.menuButtonIconClosed,
                    }}
                  />
                </IconButton>
                <Typography
                  variant="h6"
                  color="inherit"
                  className={classes.grow}
                  noWrap
                >
                  SURVEY
                </Typography>
                <TopRight>
                  <IconContainer>
                    <NotificationsNone />
                    <TopIconBadge>2</TopIconBadge>
                  </IconContainer>
                  <IconContainer>
                    <Language />
                    <TopIconBadge>2</TopIconBadge>
                  </IconContainer>
                  <IconContainer>
                    <IconButton
                      aria-owns={open ? "menu-appbar" : undefined}
                      aria-haspopup="true"
                      onClick={this.handleMenu}
                      color="inherit"
                    >
                      <AccountCircle />
                    </IconButton>
                  </IconContainer>
                  <Menu
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    open={open}
                    onClose={this.handleClose}
                  >
                    <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                    <MenuItem onClick={this.handleClose}>My account</MenuItem>
                  </Menu>
                </TopRight>
              </Toolbar>
            </AppBar>
            <Drawer
              variant="permanent"
              className={classNames(classes.drawer, {
                [classes.drawerOpen]: this.state.open,
                [classes.drawerClose]: !this.state.open,
              })}
              classes={{
                paper: classNames({
                  [classes.drawerOpen]: this.state.open,
                  [classes.drawerClose]: !this.state.open,
                }),
              }}
              open={this.state.open}
            >
              <div className={classes.toolbar} />

              <List>
                {MenuList.map((doc) => {
                  return <CustomizedListItem key={doc.id} doc={doc} />;
                })}
              </List>
            </Drawer>
            <main className={classes.content}>
              <div className={classes.toolbar} />
              <Breadcs title={""} />

              {/* <Typography paragraph>foo</Typography>  */}
              <div className="container con-style">
                {/* <Sidebar /> */}
                <Switch>
                  <Route path="/" exact>
                    <Dashboard />
                    {/* <Home handleText={this.handleText} /> */}
                  </Route>
                  <Route path="/survey">
                    <Survay />
                    {/* <Home handleText={this.handleText} /> */}
                  </Route>
                  {/* <Route path="/" exact>
                  </Route>
                  <Route path="/users">
                    <UserList />
                  </Route>
                  <Route path="/user/:id/:mode">
                    <User />
                  </Route>
                  <Route path="/user/:mode">
                    <User />
                  </Route> */}

                  {/* <Route path="/products">
                    <ProductList />
                  </Route>
                  <Route path="/product/:id">
                    <Product />
                  </Route>
                  <Route path="/newProduct">
                    <NewProduct />
                  </Route> */}

                  {/* <Route path="/posts">
                    <PostList />
                  </Route>
                  <Route path="/post/:mode">
                    <Post />
                  </Route>
                  <Route path="/post/:id/:mode">
                    <Post />
                  </Route> */}

                  {/* comments */}
                  {/* <Route path="/comments">
                    <CommentList />
                  </Route>
                  <Route path="/comment/:id/:mode">
                    <Comment />
                  </Route>
                  <Route path="/comment/:mode">
                    <Comment />
                  </Route> */}

                  {/* sockets */}
                  {/* <Route path="/sockets">
                    <SocketList />
                  </Route>
                  <Route path="/socket/:id">
                    <Socket />
                  </Route> */}
                  {/* <Route path="/newSocket">
                    <NewSocket />
                  </Route> */}

                  {/* devel */}
                  {/* <Route path="/devel">
                    <Devel />
                  </Route> */}

                  {/* roles */}
                  {/* <Route path="/roles">
                    <RoleList />
                  </Route>
                  <Route path="/role/:id/:mode">
                    <Role />
                  </Route>
                  <Route path="/role/:mode">
                    <Role />
                  </Route> */}

                  {/* banks */}
                  {/* <Route path="/banks">
                    <BankList />
                  </Route>
                  <Route path="/bank/:id/:mode">
                    <Bank />
                  </Route>
                  <Route path="/bank/:mode">
                    <Bank />
                  </Route> */}

                  {/* theme mail */}
                  {/* <Route path="/theme-mails">
                    <ThemeMailList />
                  </Route>
                  <Route path="/theme-mail/:id/:mode">
                    <ThemeMail />
                  </Route>
                  <Route path="/theme-mail/:mode">
                    <ThemeMail />
                  </Route> */}
                </Switch>
              </div>
            </main>
          </div>
        </Store>
      </Router>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(App);
