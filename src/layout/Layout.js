import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
  },
  wrapper: {
    width: "1080px",
    margin: "0 auto",
  },
}));

function Layout({ children, ...props }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container className={classes.wrapper} spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>{children}</Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default Layout;
