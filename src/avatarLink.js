import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";

const useAvatarLinkStyles = makeStyles({
  root: {
    margin: 10,
    color: "#fff",
    width: "4.375rem",
    height: "4.375rem"
  }
});

export const AvatarLink = ({ href, children, style }) => {
  const classes = useAvatarLinkStyles();

  return (
    <div>
      <a href={href}>
        <Avatar className={classes.root} style={style}>
          {children}
        </Avatar>
      </a>
    </div>
  );
};
