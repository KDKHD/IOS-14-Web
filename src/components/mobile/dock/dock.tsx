import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";
import {BottomNav} from '../'

const useStyles = makeStyles({
  root: {
    width: "20rem",
    height: "5.5rem",
    backgroundColor: "white",
    borderRadius: "2.4rem",
    opacity: 0.7,
  },
  container: {
    position: "absolute",
    bottom: 15,
    left: "50%",
    transform: "translate(-50%,0)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
});

const Dock = () => {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <BottomNav />
      <Box className={classes.root}></Box>
    </Box>
  );
};

export default Dock;
