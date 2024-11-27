import { Box } from "@mui/material";
import footerSvg from "../../assets/footer.svg";

const Footer = () => {
  return (
    <Box component="img" src={footerSvg} alt="Footer" sx={{ width: "100%" }} />
  );
};

export default Footer;
