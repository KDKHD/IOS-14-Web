import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";
import classes from "*.module.css";
import WifiIcon from "@material-ui/icons/Wifi";
const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    height: 30,
    padding: "15px 20px 15px 20px",
    fontWeight: 500,
    color: "white",
  },
  icon: {
    width: 20,
    height: 20,
  },
});

const Header = () => {
  const classes = useStyles();
  const date = new Date();
  const hour = date.getHours().toString();
  const timeString = `${
    hour.length == 1 ? `0${hour}` : hour
  }:${date.getMinutes()}`;
  return (
    <Box className={classes.container}>
      <Box>{timeString}</Box>
      <Box>
        <WifiIcon className={classes.icon} />
      </Box>
    </Box>
  );
};

export default Header;
