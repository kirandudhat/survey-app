import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import SearchBar from "material-ui-search-bar";
import { FaEdit } from "react-icons/fa";
import web from "../../images/Web.png";
import Switch from "@mui/material/Switch";
import Button from '@mui/material/Button';
const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const originalRows = [
  { name: "Pizza", calories: 200, fat: 6.0, carbs: 24, protein: 4.0 },
  { name: "Hot Dog", calories: 300, fat: 6.0, carbs: 24, protein: 4.0 },
  { name: "Burger", calories: 400, fat: 6.0, carbs: 24, protein: 4.0 },
  { name: "Hamburger", calories: 500, fat: 6.0, carbs: 24, protein: 4.0 },
  { name: "Fries", calories: 600, fat: 6.0, carbs: 24, protein: 4.0 },
  { name: "Ice Cream", calories: 700, fat: 6.0, carbs: 24, protein: 4.0 },
];
const Survay = (props) => {
  const [rows, setRows] = useState(originalRows);
  const [searched, setSearched] = useState("");
  const [checked, setChecked] = React.useState(true);
  const classes = useStyles();

  const requestSearch = (searchedVal) => {
    const filteredRows = originalRows.filter((row) => {
      return row.name.toLowerCase().includes(searchedVal.toLowerCase());
    });
    setRows(filteredRows);
  };

  const cancelSearch = () => {
    setSearched("");
    requestSearch(searched);
  };

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  return (
    <Paper>
      <div className="search-header">
      <div className="search">
      <SearchBar
        value={searched}
        onChange={(searchVal) => requestSearch(searchVal)}
        onCancelSearch={() => cancelSearch()}
      />
      </div>
      <div className="create-button">
      <Button variant="contained">Create Survey</Button>
      </div>
      </div>
      <TableContainer>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">Questionnaire</TableCell>
              <TableCell align="right">Web URL</TableCell>
              <TableCell align="right">Responses</TableCell>
              <TableCell align="right">Status</TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {/* {rows.map((row) => ( */}
            <TableRow key={1}>
              <TableCell component="th" scope="row">
                {1}
              </TableCell>
              <TableCell align="right">{"Demo-Pre Election"}</TableCell>
              <TableCell align="right">
                <FaEdit />
              </TableCell>
              <TableCell align="right">
                <img src={web} height="20px" width="20px"></img>
              </TableCell>
              <TableCell align="right">0</TableCell>
              <TableCell align="right">
                <Switch
                  checked={checked}
                  onChange={handleChange}
                  inputProps={{ "aria-label": "controlled" }}
                />
              </TableCell>
            </TableRow>
            {/* ))} */}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default Survay;
