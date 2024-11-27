import { Box, Theme, useTheme } from "@mui/material";
import { Outlet } from "react-router-dom";
import { createStyles } from "@mui/styles";
import backgroundSvg from "../assets/background.svg";

const useStyle = (theme: Theme) =>
  createStyles({
    root: {
      backgroundImage: `url(${backgroundSvg})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "center",
      height: "100vh",
      width: "100%",
      [theme.breakpoints.up("md")]: {
        backgroundColor: "lightblue",
        backgroundImage: `url(${backgroundSvg})`,
      },
      display: "flex",
      justifyContent: "center",
    },
  });

const Basic = () => {
  const theme = useTheme();
  const styles = useStyle(theme);
  return (
    <Box sx={styles.root}>
      <Outlet />
    </Box>
  );
};

export default Basic;
