import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";
import React, { useEffect } from "react";
import mobileWallpaper from "../../../assets/images/mobileWallpaper.jpeg";
import { Dock, Header, Page } from "../";
const useStyles = makeStyles({
  root: {
    backgroundImage: `url(${mobileWallpaper})`,
    height: "100vh",
    width: "100vw",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    maxHeight: "100vh",
    overflowY: "hidden",
  },
  pages: {
    display: "flex",
    flexWrap: "nowrap",
    overflow: "auto",
    "scroll-snap-type": "x mandatory",
    "&::-webkit-scrollbar": {
      display: "none" /* Safari and Chrome */,
    },
  },
  pageItem: {
    flex: "0 0 auto",
    "scroll-snap-align": "start",
    paddingLeft: 30,
    paddingRight: 30,
    "&:first-of-type": {
      paddingLeft: 35,
    },
    "&:last-of-type": {
      paddingRight: 35,
    },
  },
});
const Screen = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Header />
      <Box className={classes.pages}>
        <Box className={classes.pageItem}>
          <Page />
        </Box>
        <Box className={classes.pageItem}>
          <Page />
        </Box>
        <Box className={classes.pageItem}>
          <Page />
        </Box>
      </Box>
      <Dock></Dock>
    </Box>
  );
};

export default Screen;
