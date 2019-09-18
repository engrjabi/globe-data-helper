import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import { deepOrange, deepPurple } from "@material-ui/core/colors";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
  avatar: {
    margin: 10
  },
  orangeAvatar: {
    margin: 10,
    color: "#fff",
    backgroundColor: deepOrange[500]
  },
  purpleAvatar: {
    margin: 10,
    color: "#fff",
    backgroundColor: deepPurple[500]
  }
});

const globeNumber = 8080;
const globeKeywords = {
  FIFTEEN_DAYS_DATA: "GOSURFBE34",
  ONE_GB_DATA: "GOTSCOMBOKEA37",
  GO_SAKTO_STATUS: "GoSAKTO STATUS",
  BALANCE: "BAL"
};

const linkGenerator = (number, body) => `sms:${number}?body=${body}`;

function App() {
  const classes = useStyles();

  return (
    <Grid container justify="center" alignItems="center">
      <div>
        <a href={linkGenerator(globeNumber, globeKeywords.GO_SAKTO_STATUS)}>
          <Avatar className={classes.avatar}>GOBAL</Avatar>
        </a>
      </div>

      <div>
        <a href={linkGenerator(globeNumber, globeKeywords.GOSURFBE34)}>
          <Avatar className={classes.orangeAvatar}>15D</Avatar>
        </a>
      </div>

      <div>
        <a href={linkGenerator(globeNumber, globeKeywords.ONE_GB_DATA)}>
          <Avatar className={classes.purpleAvatar}>1GB</Avatar>
        </a>
      </div>

      <div>
        <a href={linkGenerator(222, globeKeywords.BALANCE)}>
          <Avatar className={classes.purpleAvatar}>BAL</Avatar>
        </a>
      </div>
    </Grid>
  );
}

export default App;
