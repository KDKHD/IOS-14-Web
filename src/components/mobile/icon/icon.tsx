import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  iconContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  appName: {
    fontSize: 13,
    paddingTop: 5,
    color: "white",
  },
  icon: {
    height: 60,
    width: 60,
    backgroundColor: "white",
    borderRadius: "20%",
    placeSelf: "center",
  },
}));

const Icon = () => {
  const classes = useStyles();

  return (
    <Box className={classes.iconContainer}>
      <Box className={classes.icon}></Box>
      <Box className={classes.appName}>{"test"}</Box>
    </Box>
  );
};

export default Icon;
