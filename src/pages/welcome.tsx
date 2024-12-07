import { Box, Button, Typography } from "@mui/material";
import { createStyles } from "@mui/styles";
import lightsSvg from "../assets/lights.svg";
import HeroSection from "../components/heroSection";
import Footer from "../components/footer";
import tickPng from "../assets/checkmark.png";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUpdateUserMutation } from "../services/api";
import { RootState, useAppDispatch, useAppSelector } from "../redux/store";
import { setUser } from "../redux/reducers/userReducer";
import { toast } from "react-toastify";

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
    checkBoxContainer: {
      width: "100%",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      gap: "10px",
      padding: "0 20px",
    },
    checkboxContainer: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      padding: "0",
      border: "none",
      background: "none",
      cursor: "pointer",
      minWidth: 0,
    },
    checkbox: {
      width: "30px",
      height: "30px",
      borderRadius: "20px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#D9D9D9",
    },
    checked: {
      backgroundColor: "#D9D9D9",
    },
    icon: {
      width: "38px",
      height: "38px",
      objectFit: "contain",
    },
    text: {
      flex: 1,
      flexShrink: 1,
      color: "#fff",
      fontFamily: "Inter, sans-serif",
      fontSize: "13px",
      lineHeight: "15px",
      fontWeight: "400",
    },
  });

const Welcome = () => {
  const styles = useStyle();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [checked, setChecked] = useState(false);

  const handlePress = () => {
    setChecked(!checked);
  };

  const [makeActive] = useUpdateUserMutation();
  const { user } = useAppSelector((state: RootState) => state.user);

  const handleActive = async () => {
    try {
      const res = await makeActive({
        userId: user?._id ?? "",
        active: true,
        payment: user?.payment,
        scratchCards: user?.scratchCards,
      }).unwrap();
      dispatch(setUser({ user: res.data }));
      navigate("/");
    } catch (err) {
      const error = err as ErrorResponse;
      const message =
        error?.message === "Validation error!"
          ? error.data?.errors[0].msg ?? "Something went wrong"
          : error?.message ?? "Something went wrong";
      toast.error(message);
    }
  };

  useEffect(() => {
    if (user?.active) {
      navigate("/");
    }
  }, []);

  return (
    <Box sx={styles.container}>
      <Box component="img" src={lightsSvg} alt="Lights" sx={styles.lights} />

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
          padding: "0 10px",
          gap: 5,
          overflowY: "auto",
          marginBottom: "210px",
        }}
      >
        <HeroSection title="Welcome" hasSubTitle={false} daysRemaining={0} />
        <Typography
          px={"20px"}
          fontFamily={"Inter"}
          fontWeight={400}
          fontSize={"16px"}
          lineHeight={"19.36px"}
          color="white"
          marginBottom={"20px"}
        >
          We wish you a lot of fun with this 'Sexmas Calendar' and many great
          adventures and experiences. Dare and have fun, but only participate in
          what you really feel comfortable with.
        </Typography>
        <Typography
          px={"20px"}
          fontFamily={"Inter"}
          fontWeight={400}
          fontSize={"16px"}
          lineHeight={"19.36px"}
          color="white"
          marginBottom={"20px"}
        >
          Disclaimer: As great as all these games and tasks are and will bring a
          lot of inspiration to your love life, always be careful and sensible,
          there is always a risk of injury. By playing this game, you play at
          your own risk and accept that we are not responsible for any legal
          consequences it may cause. We assume no liability for your actions
          resulting from suggestions made in this app. We are not responsible
          for any injury, physical or psychological, or for any costs incurred.
        </Typography>

        <Box sx={styles.checkBoxContainer}>
          <Button onClick={handlePress} sx={styles.checkboxContainer}>
            <Box
              sx={{ ...styles.checkbox, ...(checked ? styles.checked : {}) }}
            >
              {checked && (
                <Box
                  component="img"
                  src={tickPng}
                  alt="Checkmark"
                  sx={styles.icon}
                />
              )}
            </Box>
          </Button>
          <Typography sx={styles.text}>
            We confirm that we have read and accept the Terms and Conditions,
            Privacy Policy, and Disclaimer.
          </Typography>
        </Box>
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
            position: "absolute",
            bottom: "-4px",
            width: "100%",
            zIndex: 10,
          }}
        >
          <Footer />
        </Box>

        <Box
          sx={{
            position: "absolute",
            bottom: 15,
            width: "100%",
            zIndex: 10,
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <Button
            fullWidth
            sx={{
              height: 56,
              borderRadius: "11px",
              color: "white",
              fontWeight: 700,
              fontSize: "18px",
              textTransform: "none",
              background: "linear-gradient(360deg, #8939FE 0%, #C1A0FD 100%)",
              marginTop: "15px",
              width: "90%",
            }}
            disabled={!checked}
            onClick={handleActive}
          >
            Let's Go
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Welcome;
