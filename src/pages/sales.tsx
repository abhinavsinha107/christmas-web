import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import { createStyles } from "@mui/styles";
import { FaCheckCircle } from "react-icons/fa";
import lightsSvg from "../assets/lights.svg";
import crossSvg from "../assets/cross.svg";
import salesImage1 from "../assets/salesgif1.gif";
import salesImage2 from "../assets/salesgif2.gif";
import leftLeaf from "../assets/leftLeaf.png";
import rightLeaf from "../assets/rightLeaf.png";
import testimonialsSvg from "../assets/testimonials.svg";
import starRatingsSvg from "../assets/starRatings.svg";
import { useCreatePaymentSessionMutation } from "../services/api";
import { RootState, useAppSelector } from "../redux/store";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import menuSvg from "../assets/menu.svg";

const benefitsArray = [
  "Daily Sex Position Challenges",
  "Sex Coach approved",
  "Elevate intimacy & connection",
];

const useStyle = () =>
  createStyles({
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      width: "100%",
      height: "100vh",
      position: "relative",
      overflow: "hidden",
      maxWidth: "430px",
    },
    lights: {
      width: "100%",
    },
    cross: {
      position: "absolute",
      top: "5%",
      right: "5%",
      minWidth: 0,
      p: 0,
    },
    image1: {
      width: "257px",
      height: "214px",
      marginTop: "20px",
    },
    image2: {
      width: "253px",
      height: "285px",
      margin: "20px 0",
    },
    heading: {
      fontFamily: "Teko",
      fontSize: "50px",
      fontWeight: "700",
      lineHeight: "60px",
      textAlign: "center",
      color: "#FFFFFF",
      marginTop: "30px",
    },
    benefitItem: {
      display: "flex",
      //   flexDirection: "row",
      alignItems: "center",
      gap: "10px",
      marginBottom: "10px",
      padding: "0 20px",
    },
    loopText: {
      color: "#fff",
      fontFamily: "Inter",
      fontWeight: 400,
      fontSize: "16px",
      lineHeight: "20px",
    },
    leafContainer: {
      display: "flex",
      margin: "0 0 15px 0",
    },
    leafImage: {
      width: "56px",
      height: "114px",
    },
    testimonialContainer: {
      width: "90%",
      margin: "15% auto",
      textAlign: "center",
      position: "relative",
    },
    button: {
      backgroundColor: "#FF0080",
      color: "#fff",
      padding: "10px 20px",
      borderRadius: "11px",
      textAlign: "center",
      height: 56,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
    },
    buttonUpperText: {
      fontFamily: "Poppins",
      fontSize: 19,
      fontWeight: "700",
      color: "#fff",
    },
    buttonLowerText: {
      fontFamily: "Poppins",
      fontSize: 9,
      fontWeight: "400",
      color: "#fff",
    },
    rating: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "10px",
    },
    menu: {
      position: "absolute",
      top: "5%",
      left: "5%",
      minWidth: 0,
      p: 0,
    },
  });

const Sales = () => {
  const styles = useStyle();
  const navigate = useNavigate();

  const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

  const [deposit, { data, isSuccess }] = useCreatePaymentSessionMutation();

  const handleDeposit = async () => {
    try {
      await deposit({ amount: 6.99 });
    } catch (err) {
      toast.error("Failed to make a payment");
      console.error("Failed to create deposit session:", err);
    }
  };

  useEffect(() => {
    const redirectToStripeCheckout = async () => {
      if (isSuccess) {
        const stripe = await stripePromise;
        const sessionId = data?.data?.id || "";

        if (stripe && sessionId) {
          const { error } = await stripe.redirectToCheckout({ sessionId });
          if (error) {
            console.log(error.message);
          }
        }
      }
    };
    redirectToStripeCheckout();
  }, [isSuccess, data, stripePromise]);

  const { user } = useAppSelector((state: RootState) => state.user);

  useEffect(() => {
    if (!user?.active) {
      navigate("/welcome");
    } else if (user?.payment) {
      navigate("/");
    }
  }, []);

  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = (open: boolean) => {
    setSidebarOpen(open);
  };

  return (
    <Box sx={styles.container}>
      <Box component="img" src={lightsSvg} alt="Lights" sx={styles.lights} />
      <Button sx={styles.cross} onClick={() => navigate("/")}>
        <Box component="img" src={crossSvg} alt="Close" />
      </Button>

      <IconButton sx={styles.menu} onClick={() => toggleSidebar(true)}>
        <Box component="img" src={menuSvg} alt="Menu" />
      </IconButton>

      <Drawer
        anchor="left"
        open={isSidebarOpen}
        onClose={() => toggleSidebar(false)}
        PaperProps={{
          sx: {
            width: "100vw",
            height: "100vh",
            backgroundColor: "#000",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            height: "100%",
            maxWidth: "430px",
            width: "100%",
            backgroundColor: "#000",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              padding: "16px",
            }}
          >
            <IconButton
              onClick={() => toggleSidebar(false)}
              sx={{
                textTransform: "none",
                color: "#000",
                fontWeight: "bold",
              }}
            >
              <Box component="img" src={crossSvg} alt="Menu" />
            </IconButton>
          </Box>

          <Typography
            sx={{
              fontFamily: "Teko",
              color: "white",
              paddingLeft: "16px",
              fontWeight: 700,
              fontSize: "50px",
            }}
          >
            Sexmas
          </Typography>

          {/* Sidebar Content */}
          <List sx={{ flex: 1, padding: "16px" }}>
            <ListItem
              sx={{
                backgroundColor: "#D9D9D9",
                marginBottom: "20px",
                cursor: "pointer",
                borderRadius: "8px",
              }}
              onClick={() => {
                window.open("https://scratchadventure.com/pages/legal-notice");
              }}
            >
              <ListItemText
                primary={"Legal Notice"}
                sx={{
                  backgroundColor: "#D9D9D9",
                  fontWeight: "400",
                  fontSize: "16px",
                }}
              />
            </ListItem>
            <ListItem
              sx={{
                backgroundColor: "#D9D9D9",
                marginBottom: "20px",
                cursor: "pointer",
                borderRadius: "8px",
              }}
              onClick={() => {
                window.open(
                  "https://scratchadventure.com/pages/privacy-policy"
                );
              }}
            >
              <ListItemText
                primary={"Privacy Policy"}
                sx={{
                  backgroundColor: "#D9D9D9",
                  fontWeight: "400",
                  fontSize: "16px",
                }}
              />
            </ListItem>
            <ListItem
              sx={{
                backgroundColor: "#D9D9D9",
                marginBottom: "20px",
                cursor: "pointer",
                borderRadius: "8px",
              }}
              onClick={() => {
                window.open(
                  "https://scratchadventure.com/pages/app-terms-and-conditions"
                );
              }}
            >
              <ListItemText
                primary={"Terms and Conditions"}
                sx={{
                  backgroundColor: "#D9D9D9",
                  fontWeight: "400",
                  fontSize: "16px",
                }}
              />
            </ListItem>
            <ListItem
              sx={{
                backgroundColor: "#D9D9D9",
                marginBottom: "20px",
                cursor: "pointer",
                borderRadius: "8px",
              }}
              onClick={() => {
                window.open("https://scratchadventure.com/pages/disclaimer");
              }}
            >
              <ListItemText
                primary={"Disclaimer"}
                sx={{
                  backgroundColor: "#D9D9D9",
                  fontWeight: "400",
                  fontSize: "16px",
                }}
              />
            </ListItem>
          </List>
        </Box>
      </Drawer>

      <div
        style={{
          overflowY: "scroll",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "0 20px 20px",
          marginBottom: "100px",
        }}
      >
        <Box
          component="img"
          src={salesImage1}
          alt="Sales Image 1"
          sx={styles.image1}
        />

        <Typography variant="h1" sx={styles.heading}>
          Heat Up the Holidays
        </Typography>

        <Box marginY={"10%"}>
          {benefitsArray.map((benefit, i) => (
            <Box key={i} sx={styles.benefitItem}>
              <FaCheckCircle size={22} color="#FF89DB" />
              <Typography sx={styles.loopText}>{benefit}</Typography>
            </Box>
          ))}
        </Box>

        <Box sx={styles.leafContainer}>
          <Box
            component="img"
            src={leftLeaf}
            alt="Left Leaf"
            sx={styles.leafImage}
          />
          <Box sx={{ textAlign: "center", flex: 1 }}>
            <Typography
              variant="h3"
              sx={{
                fontWeight: 700,
                fontFamily: "Poppins",
                color: "white",
                fontSize: "32px",
                textAlign: "center",
                lineHeight: "48px",
              }}
            >
              2 Million
            </Typography>
            <Typography
              sx={{
                fontFamily: "Poppins",
                color: "#E2DFDF",
                fontSize: "14px",
                fontWeight: 400,
                textAlign: "center",
                lineHeight: "21px",
              }}
            >
              Couples played our Sex Calendar in December 2022 & 2023
            </Typography>
          </Box>
          <Box
            component="img"
            src={rightLeaf}
            alt="Right Leaf"
            sx={styles.leafImage}
          />
        </Box>

        <Box sx={styles.testimonialContainer}>
          <Box
            component="img"
            src={testimonialsSvg}
            alt="Testimonials"
            sx={{ position: "absolute", top: "-30%", left: 0 }}
          />
          <Typography
            sx={{
              color: "#E2DFDF",
              fontSize: "14px",
              fontWeight: 700,
              lineHeight: "21px",
              textAlign: "center",
              fontFamily: "Poppins",
            }}
          >
            "I already played this Calendar Game last year and I cannot wait to
            scratch the first Challenge this year. My boyfriend and I are
            excited"
          </Typography>
        </Box>

        <Box
          component="img"
          src={salesImage2}
          alt="Sales Image 2"
          sx={styles.image2}
        />
      </div>
      <Box
        position={"fixed"}
        left={0}
        right={0}
        bottom={0}
        zIndex={999}
        maxWidth={"430px"}
        marginX={"auto"}
      >
        <Box
          sx={{
            width: "100%",
            zIndex: 10,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box width={"90%"}>
            <Button onClick={handleDeposit} sx={styles.button}>
              <Typography sx={styles.buttonUpperText}>
                <span
                  style={{ textDecoration: "line-through", color: "#D6D6D6" }}
                >
                  29.99$
                </span>{" "}
                6.99$ One time
              </Typography>
              <Typography sx={styles.buttonLowerText}>
                No monthly costs !
              </Typography>
            </Button>
          </Box>
          <Box sx={styles.rating}>
            <Box component="img" src={starRatingsSvg} alt="Star Ratings" />
            <Typography
              sx={{
                fontFamily: "Poppins",
                color: "#E2DFDF",
                fontWeight: "700",
                fontSize: "12px",
                marginTop: "5px",
              }}
            >
              Rated 4.5/5 based on 47.842 reviews
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Sales;
