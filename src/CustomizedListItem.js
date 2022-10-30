import React, { useState } from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import List from "@material-ui/core/List";
import Collapse from "@material-ui/core/Collapse";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
} from "react-router-dom";

const CustomizedListItem = (props) => {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     open: false
  //   };
  //   this.handleClick = this.handleClick.bind(this);
  // }

  let history = useHistory();
  let [state, setState] = useState(false);

  const handleClick = (path) => {
    console.log("Handle Clicked....", path);
    // this.setState((prevState) => ({
    //   open: !prevState.open
    // }));
    setState(!state);

    history.push(path);
  };

  // render() {
  const { doc } = props;

  return (
    <div style={{ fontSize: "21px" }}>
      <ListItem
        button
        key={doc.Id}
        onClick={() => {
          handleClick(doc.Path);
        }}
      >
        {/* <Link to={doc.Path}> */}
        <ListItemIcon>
          {/* <Timeline className="icon" /> */}
          {doc.Icon}
        </ListItemIcon>
        <ListItemText primary={doc.Name} />
        {/* </Link> */}
      </ListItem>

      {/* <Divider /> */}
    </div>
  );
  // }
};

export default CustomizedListItem;
