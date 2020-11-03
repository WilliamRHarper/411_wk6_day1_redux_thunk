import React from "react";
import {
  Button,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from "@material-ui/core";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import { MoreVert } from "@material-ui/icons";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const Import = (props) => {
  // fill out this component
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [indexToRemove, setIndexToRemove] = React.useState(null);
  const handleClick = (idx) => (event) => {
    setAnchorEl(event.currentTarget);
    setIndexToRemove(idx);
  };

  const handleClose = () => {
    props.deleteMake(indexToRemove);
    setAnchorEl(null);
  };

  return (
    <>
      <Button variant="contained" color="primary" onClick={props.fetchMakes}>
        IMPORT
      </Button>
      <Container component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Make</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.makes.map((row, idx) => (
              <TableRow key={row.name}>
                <TableCell>{row.MakeId}</TableCell>
                <TableCell>{row.MakeName}</TableCell>
                <TableCell>
                  <MoreVert
                    aria-controls="simple-menu"
                    aria-haspopup="true"
                    onClick={() => handleClick(idx)}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>Delete</MenuItem>
          {/* <MenuItem onClick={handleClose}>My account</MenuItem>
                    <MenuItem onClick={handleClose}>Logout</MenuItem> */}
        </Menu>
      </Container>
    </>
  );
};

export default Import;
