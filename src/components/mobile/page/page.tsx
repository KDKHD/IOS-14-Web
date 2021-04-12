import { makeStyles } from "@material-ui/core/styles";
import { Grid, Box } from "@material-ui/core";
import { Icon } from "..";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  iconContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  appName: {
    fontSize: 13,
    padding: 5,
    color: "white",
  },
  icon: {
    height: 60,
    width: 60,
    backgroundColor: "white",
    borderRadius: "20%",
    placeSelf: "center",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
  },
  grid: {
    display: "grid",
    gridGap: 10,
    gridColumnGap: 20,
    height: "600px",
  },
}));

const Page = () => {
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <Box className={classes.grid}>
        {[...Array(6)].map((_, row) =>
          [...Array(4)].map((_, col) => (
            <Box
              style={{
                gridColumnStart: col,
                gridColumnEnd: col + 1,
                gridRowStart: row,
                gridRowEnd: row + 1,
              }}
            >
              <Icon />
            </Box>
          ))
        )}
      </Box>
    </Box>
  );
};

export default Page;
