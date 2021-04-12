import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";
import React, { useState } from "react";
const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    height: 20,
    width: 100,
    margin: 10,
  },
  page: {
    height: 7,
    width: 7,
    borderRadius: "50%",
    backgroundColor: "white",
    opacity: 0.5,
    margin: "0 5px 0 5px",
  },
  selected: {
    opacity: 1,
  },
});

const BottomNav = () => {
  const classes = useStyles();
  const [page, setPage] = useState<number>(0);
  const pages = 5;
  return (
    <Box className={classes.container}>
      {[...Array(pages)].map((_, i) => (
        <Box className={[classes.page, i == page && classes.selected].join(" ")} />
      ))}
    </Box>
  );
};

export default BottomNav;
