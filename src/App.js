import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  deepOrange,
  deepPurple,
  blueGrey,
  teal,
  amber
} from "@material-ui/core/colors";
import Grid from "@material-ui/core/Grid";
import { AvatarLink } from "./avatarLink";
import { linkGenerator } from "./utils";
import { globeKeywords, globeNumber } from "./constants";

const useStyles = makeStyles({
  root: {
    minHeight: "100vh",
    alignContent: "center",
    "& a": {
      textDecoration: "none"
    }
  }
});

function App() {
  const classes = useStyles();

  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      className={classes.root}
    >
      <AvatarLink
        href={linkGenerator(globeNumber, globeKeywords.FIFTEEN_DAYS_DATA)}
        style={{
          backgroundColor: teal[500]
        }}
      >
        15D
      </AvatarLink>

      <AvatarLink
        href={linkGenerator(globeNumber, globeKeywords.ONE_GB_DATA)}
        style={{
          backgroundColor: deepOrange[500]
        }}
      >
        1GB
      </AvatarLink>

      <AvatarLink
        href={linkGenerator(globeNumber, globeKeywords.GO_QUARANTINE_EDITION_5GB)}
        style={{
          backgroundColor: deepOrange[400]
        }}
      >
        5GB
      </AvatarLink>

      <AvatarLink
        href={linkGenerator(globeNumber, globeKeywords.GO_QUARANTINE_EDITION_8GB)}
        style={{
          backgroundColor: deepOrange[300]
        }}
      >
        8GB
      </AvatarLink>

      <AvatarLink
        href={linkGenerator(globeNumber, globeKeywords.GO_SAKTO_STATUS)}
        style={{
          backgroundColor: deepPurple[500]
        }}
      >
        GBL
      </AvatarLink>

      <AvatarLink
        href={linkGenerator(222, globeKeywords.BALANCE)}
        style={{
          backgroundColor: blueGrey[500]
        }}
      >
        BL
      </AvatarLink>

      <AvatarLink
        href={linkGenerator(globeNumber, globeKeywords.REWARD_STATUS)}
        style={{
          backgroundColor: amber[500]
        }}
      >
        RS
      </AvatarLink>
    </Grid>
  );
}

export default App;
