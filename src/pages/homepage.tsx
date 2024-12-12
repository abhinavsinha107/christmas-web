import {
  Box,
  Button,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { createStyles } from "@mui/styles";
import lightsSvg from "../assets/lights.svg";
import HeroSection from "../components/heroSection";
import Footer from "../components/footer";
import dateCircle from "../assets/dateCircle.png";
import lockIcon from "../assets/lockIcon.png";
import { useEffect, useRef, useState } from "react";
import ScratchCard from "react-scratchcard-v2";
import straightPng from "../assets/straight.png";
import gayPng from "../assets/gay.png";
import lesbianPng from "../assets/lesbian.png";
import loginPng from "../assets/login.png";
import { useNavigate } from "react-router-dom";
import { RootState, useAppDispatch, useAppSelector } from "../redux/store";
import { setGender } from "../redux/reducers/genderReducer";
import { resetUser, setUser } from "../redux/reducers/userReducer";
import { toast } from "react-toastify";
import { useGetUserByIdQuery, useUpdateUserMutation } from "../services/api";
import { notifyError } from "../toast";
import { motion } from "framer-motion";
import salesImage1 from "../assets/salesgif1.gif";
import menuSvg from "../assets/menu.svg";
import crossSvg from "../assets/cross.svg";

import ff1 from "../assets/PositionsSexmas/f+f Positions/Christmas f+f Position 1.jpg";
import ff2 from "../assets/PositionsSexmas/f+f Positions/Christmas f+f Position 2.jpg";
import ff3 from "../assets/PositionsSexmas/f+f Positions/Christmas f+f Position 3.jpg";
import ff4 from "../assets/PositionsSexmas/f+f Positions/Christmas f+f Position 4.jpg";
import ff5 from "../assets/PositionsSexmas/f+f Positions/Christmas f+f Position 5.jpg";
import ff6 from "../assets/PositionsSexmas/f+f Positions/Christmas f+f Position 6.jpg";
import ff7 from "../assets/PositionsSexmas/f+f Positions/Christmas f+f Position 7.jpg";
import ff8 from "../assets/PositionsSexmas/f+f Positions/Christmas f+f Position 8.jpg";
import ff9 from "../assets/PositionsSexmas/f+f Positions/Christmas f+f Position 9.jpg";
import ff10 from "../assets/PositionsSexmas/f+f Positions/Christmas f+f Position 10.jpg";
import ff11 from "../assets/PositionsSexmas/f+f Positions/Christmas f+f Position 11.jpg";
import ff12 from "../assets/PositionsSexmas/f+f Positions/Christmas f+f Position 12.jpg";
import ff13 from "../assets/PositionsSexmas/f+f Positions/Christmas f+f Position 13.jpg";
import ff14 from "../assets/PositionsSexmas/f+f Positions/Christmas f+f Position 14.jpg";
import ff15 from "../assets/PositionsSexmas/f+f Positions/Christmas f+f Position 15.jpg";
import ff16 from "../assets/PositionsSexmas/f+f Positions/Christmas f+f Position 16.jpg";
import ff17 from "../assets/PositionsSexmas/f+f Positions/Christmas f+f Position 17.jpg";
import ff18 from "../assets/PositionsSexmas/f+f Positions/Christmas f+f Position 18.jpg";
import ff19 from "../assets/PositionsSexmas/f+f Positions/Christmas f+f Position 19.jpg";
import ff20 from "../assets/PositionsSexmas/f+f Positions/Christmas f+f Position 20.jpg";
import ff21 from "../assets/PositionsSexmas/f+f Positions/Christmas f+f Position 21.jpg";
import ff22 from "../assets/PositionsSexmas/f+f Positions/Christmas f+f Position 22.jpg";
import ff23 from "../assets/PositionsSexmas/f+f Positions/Christmas f+f Position 23.jpg";
import ff24 from "../assets/PositionsSexmas/f+f Positions/Christmas f+f Position 24.jpg";
import ff25 from "../assets/PositionsSexmas/f+f Positions/Christmas f+f Position 25.jpg";

import mf1 from "../assets/PositionsSexmas/m+f Positions/Christmas m+f Position 1.jpg";
import mf2 from "../assets/PositionsSexmas/m+f Positions/Christmas m+f Position 2.jpg";
import mf3 from "../assets/PositionsSexmas/m+f Positions/Christmas m+f Position 3.jpg";
import mf4 from "../assets/PositionsSexmas/m+f Positions/Christmas m+f Position 4.jpg";
import mf5 from "../assets/PositionsSexmas/m+f Positions/Christmas m+f Position 5.jpg";
import mf6 from "../assets/PositionsSexmas/m+f Positions/Christmas m+f Position 6.jpg";
import mf7 from "../assets/PositionsSexmas/m+f Positions/Christmas m+f Position 7.jpg";
import mf8 from "../assets/PositionsSexmas/m+f Positions/Christmas m+f Position 8.jpg";
import mf9 from "../assets/PositionsSexmas/m+f Positions/Christmas m+f Position 9.jpg";
import mf10 from "../assets/PositionsSexmas/m+f Positions/Christmas m+f Position 10.jpg";
import mf11 from "../assets/PositionsSexmas/m+f Positions/Christmas m+f Position 11.jpg";
import mf12 from "../assets/PositionsSexmas/m+f Positions/Christmas m+f Position 12.jpg";
import mf13 from "../assets/PositionsSexmas/m+f Positions/Christmas m+f Position 13.jpg";
import mf14 from "../assets/PositionsSexmas/m+f Positions/Christmas m+f Position 14.jpg";
import mf15 from "../assets/PositionsSexmas/m+f Positions/Christmas m+f Position 15.jpg";
import mf16 from "../assets/PositionsSexmas/m+f Positions/Christmas m+f Position 16.jpg";
import mf17 from "../assets/PositionsSexmas/m+f Positions/Christmas m+f Position 17.jpg";
import mf18 from "../assets/PositionsSexmas/m+f Positions/Christmas m+f Position 18.jpg";
import mf19 from "../assets/PositionsSexmas/m+f Positions/Christmas m+f Position 19.jpg";
import mf20 from "../assets/PositionsSexmas/m+f Positions/Christmas m+f Position 20.jpg";
import mf21 from "../assets/PositionsSexmas/m+f Positions/Christmas m+f Position 21.jpg";
import mf22 from "../assets/PositionsSexmas/m+f Positions/Christmas m+f Position 22.jpg";
import mf23 from "../assets/PositionsSexmas/m+f Positions/Christmas m+f Position 23.jpg";
import mf24 from "../assets/PositionsSexmas/m+f Positions/Christmas m+f Position 24.jpg";
import mf25 from "../assets/PositionsSexmas/m+f Positions/Christmas m+f Position 25.jpg";

import mm1 from "../assets/PositionsSexmas/m+m Positions/Christmas m+m Position 1.jpg";
import mm2 from "../assets/PositionsSexmas/m+m Positions/Christmas m+m Position 2.jpg";
import mm3 from "../assets/PositionsSexmas/m+m Positions/Christmas m+m Position 3.jpg";
import mm4 from "../assets/PositionsSexmas/m+m Positions/Christmas m+m Position 4.jpg";
import mm5 from "../assets/PositionsSexmas/m+m Positions/Christmas m+m Position 5.jpg";
import mm6 from "../assets/PositionsSexmas/m+m Positions/Christmas m+m Position 6.jpg";
import mm7 from "../assets/PositionsSexmas/m+m Positions/Christmas m+m Position 7.jpg";
import mm8 from "../assets/PositionsSexmas/m+m Positions/Christmas m+m Position 8.jpg";
import mm9 from "../assets/PositionsSexmas/m+m Positions/Christmas m+m Position 9.jpg";
import mm10 from "../assets/PositionsSexmas/m+m Positions/Christmas m+m Position 10.jpg";
import mm11 from "../assets/PositionsSexmas/m+m Positions/Christmas m+m Position 11.jpg";
import mm12 from "../assets/PositionsSexmas/m+m Positions/Christmas m+m Position 12.jpg";
import mm13 from "../assets/PositionsSexmas/m+m Positions/Christmas m+m Position 13.jpg";
import mm14 from "../assets/PositionsSexmas/m+m Positions/Christmas m+m Position 14.jpg";
import mm15 from "../assets/PositionsSexmas/m+m Positions/Christmas m+m Position 15.jpg";
import mm16 from "../assets/PositionsSexmas/m+m Positions/Christmas m+m Position 16.jpg";
import mm17 from "../assets/PositionsSexmas/m+m Positions/Christmas m+m Position 17.jpg";
import mm18 from "../assets/PositionsSexmas/m+m Positions/Christmas m+m Position 18.jpg";
import mm19 from "../assets/PositionsSexmas/m+m Positions/Christmas m+m Position 19.jpg";
import mm20 from "../assets/PositionsSexmas/m+m Positions/Christmas m+m Position 20.jpg";
import mm21 from "../assets/PositionsSexmas/m+m Positions/Christmas m+m Position 21.jpg";
import mm22 from "../assets/PositionsSexmas/m+m Positions/Christmas m+m Position 22.jpg";
import mm23 from "../assets/PositionsSexmas/m+m Positions/Christmas m+m Position 23.jpg";
import mm24 from "../assets/PositionsSexmas/m+m Positions/Christmas m+m Position 24.jpg";
import mm25 from "../assets/PositionsSexmas/m+m Positions/Christmas m+m Position 25.jpg";

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
    menu: {
      position: "absolute",
      top: "5%",
      left: "5%",
      minWidth: 0,
      p: 0,
    },
    backgroundImage: {
      width: "174px",
      height: "174px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundSize: "cover",
      position: "relative",
      transition: "all 1s ease-in-out",
      borderRadius: "50%",
    },
    lockIcon: {
      width: "39px",
      height: "55px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundSize: "cover",
      position: "relative",
    },
    circleText: {
      color: "black",
      fontSize: "28px",
      fontWeight: "400",
      fontFamily: "Inter",
      zIndex: 2,
      marginTop: 2,
    },
    scratchCard: {
      width: "100%",
      height: "100%",
    },
    selectedText: {
      marginTop: "180px",
      fontSize: "26px",
      color: "white",
      fontWeight: "400",
      textAlign: "center",
      fontFamily: "Inter",
    },
    footerButtonsBig: {
      position: "absolute",
      bottom: "50px",
      zIndex: 100,
      width: "100%",
      backgroundColor: "inherit",
      display: "flex",
      flexDirection: "column",
      gap: "20px",
      alignItems: "center",
    },
  });

const Home = () => {
  const styles = useStyle();
  const [selectedDay, setSelectedDay] = useState<number | null>(null);
  const [openModal, setOpenModal] = useState(false);

  const [lastClickedButton, setLastClickedButton] = useState<number | null>(
    null
  );

  // Explicitly type the ref to be an array of HTMLButtonElements
  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { user } = useAppSelector((state: RootState) => state.user);
  const { gender } = useAppSelector((state: RootState) => state.gender);

  const [scratchingAllowed, setScratchingAllowed] = useState(false);
  const today = new Date();
  const targetDate = new Date(today.getFullYear(), 11, 1);

  const [scratched] = useUpdateUserMutation();

  const handleScratch = async () => {
    try {
      if (selectedDay) {
        const res = await scratched({
          userId: user?._id ?? "",
          payment: user?.payment,
          active: user?.active,
          scratchCards: user?.scratchCards.map((card, i) =>
            i === selectedDay - 1 ? true : card
          ),
        }).unwrap();
        dispatch(setUser({ user: res.data }));
      }
    } catch (err) {
      const error = err as ErrorResponse;
      const message =
        error?.message === "Validation error!"
          ? error.data?.errors[0].msg ?? "Something went wrong"
          : error?.message ?? "Something went wrong";
      setSelectedDay(null);
      notifyError(message);
    }
  };

  useEffect(() => {
    if (today > targetDate) {
      setScratchingAllowed(true);
    }

    if (lastClickedButton !== null && buttonRefs.current[lastClickedButton]) {
      buttonRefs.current[lastClickedButton].scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, [today, targetDate, setScratchingAllowed, lastClickedButton]);

  const daysRemaining = Math.ceil(
    (targetDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24)
  );

  const handlePress = (day: number, index: number) => {
    if (!user) {
      navigate("/login");
    } else if (!user.active) {
      navigate("/welcome");
    } else if (!user.payment) {
      navigate("/sales");
    } else if (scratchingAllowed && selectedDay === null) {
      setLastClickedButton(index);
      setSelectedDay(day);
    }
  };

  const handlePreferenceSelect = (preference: string) => {
    dispatch(setGender({ gender: preference }));
    setOpenModal(false);
  };

  const scratchImagesff = [
    ff1,
    ff2,
    ff3,
    ff4,
    ff5,
    ff6,
    ff7,
    ff8,
    ff9,
    ff10,
    ff11,
    ff12,
    ff13,
    ff14,
    ff15,
    ff16,
    ff17,
    ff18,
    ff19,
    ff20,
    ff21,
    ff22,
    ff23,
    ff24,
    ff25,
  ];

  const scratchImagesmf = [
    mf1,
    mf2,
    mf3,
    mf4,
    mf5,
    mf6,
    mf7,
    mf8,
    mf9,
    mf10,
    mf11,
    mf12,
    mf13,
    mf14,
    mf15,
    mf16,
    mf17,
    mf18,
    mf19,
    mf20,
    mf21,
    mf22,
    mf23,
    mf24,
    mf25,
  ];

  const scratchImagesmm = [
    mm1,
    mm2,
    mm3,
    mm4,
    mm5,
    mm6,
    mm7,
    mm8,
    mm9,
    mm10,
    mm11,
    mm12,
    mm13,
    mm14,
    mm15,
    mm16,
    mm17,
    mm18,
    mm19,
    mm20,
    mm21,
    mm22,
    mm23,
    mm24,
    mm25,
  ];

  const { data: userData, refetch } = useGetUserByIdQuery(user?._id ?? "", {
    skip: !user,
  });

  useEffect(() => {
    if (userData) {
      dispatch(setUser({ user: userData.data }));
    }
  }, [userData, refetch]);

  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = (open: boolean) => {
    setSidebarOpen(open);
  };

  return (
    <Box sx={styles.container}>
      <Box component="img" src={lightsSvg} alt="Lights" sx={styles.lights} />
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
            {!user?.payment && (
              <ListItem
                sx={{
                  backgroundColor: "#D9D9D9",
                  marginBottom: "20px",
                  cursor: "pointer",
                  borderRadius: "8px",
                }}
                onClick={() => {
                  if (!user) {
                    navigate("/login");
                  } else {
                    navigate("/sales");
                  }
                }}
              >
                <ListItemText
                  primary={"Upgrade your Sex Live 😈"}
                  sx={{
                    backgroundColor: "#D9D9D9",
                    fontWeight: "400",
                    fontSize: "16px",
                  }}
                />
              </ListItem>
            )}
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
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
          padding: "0 10px",
          gap: 5,
          overflowY: "auto",
          paddingBottom: "150px",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          width: "100%",
        }}
      >
        <HeroSection
          title={
            selectedDay
              ? "Scratch the field with your finger"
              : "Scratch a new field every day"
          }
          hasSubTitle={selectedDay ? false : true}
          daysRemaining={daysRemaining}
        />
        {Array.from({ length: 25 }, (_, i) => {
          const buttonDate = new Date(
            targetDate.getFullYear(),
            targetDate.getMonth(),
            targetDate.getDate() + i
          );

          const isEnabled = buttonDate <= today;
          const isSelected = selectedDay === i + 1;
          const isHidden = selectedDay !== null && !isSelected;

          return (
            <Button
              key={i}
              onClick={() => isEnabled && handlePress(i + 1, i)}
              disabled={!user ? false : !isEnabled}
              style={{
                all: "unset",
                cursor: "pointer",
                position: isSelected ? "fixed" : "static",
                top: isSelected ? "50%" : "auto",
                left: isSelected ? "50%" : "auto",
                transform: isSelected ? "translate(-50%, -50%)" : "none",
                zIndex: isSelected ? 1000 : isHidden ? 0 : 1,
                display: isHidden ? "none" : "block",
                pointerEvents: isHidden ? "none" : "auto",
                width: isSelected ? "250px" : "45%",
              }}
              ref={(el) => (buttonRefs.current[i] = el)}
            >
              <motion.div
                style={{
                  position: "relative",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                animate={{
                  scale: isSelected ? 1 : 0.9,
                  opacity: isHidden ? 0 : 1,
                }}
                transition={{
                  type: "spring",
                  stiffness: 150,
                  damping: 25,
                }}
              >
                {selectedDay ? (
                  user?.scratchCards[i] ? (
                    <Box
                      component="img"
                      src={
                        gender === "Lesbian"
                          ? scratchImagesff[i]
                          : gender === "Straight"
                          ? scratchImagesmf[i]
                          : scratchImagesmm[i]
                      }
                      alt="Footer"
                      sx={{ width: "250px", borderRadius: "50%" }}
                    />
                  ) : (
                    <ScratchCard
                      width={250}
                      height={250}
                      image={dateCircle}
                      brushSize={20}
                      finishPercent={60}
                      onComplete={handleScratch}
                    >
                      <Box
                        component="img"
                        src={
                          gender === "Lesbian"
                            ? scratchImagesff[i]
                            : gender === "Straight"
                            ? scratchImagesmf[i]
                            : scratchImagesmm[i]
                        }
                        alt="Footer"
                        sx={{
                          width: "250px",
                          // maxWidth: "250px",
                          height: "auto",
                          borderRadius: "50%",
                        }}
                      />
                    </ScratchCard>
                  )
                ) : (
                  <Box
                    sx={{
                      ...styles.backgroundImage,
                      // width: selectedDay ? "250px" : "45vw",
                      height: selectedDay ? "250px" : "174px",
                      backgroundImage:
                        user?.scratchCards[i] && gender === "Lesbian"
                          ? `url(${scratchImagesff[i]})`
                          : user?.scratchCards[i] && gender === "Straight"
                          ? `url(${scratchImagesmf[i]})`
                          : user?.scratchCards[i] && gender === "Gay"
                          ? `url(${scratchImagesmm[i]})`
                          : `url(${dateCircle})`,
                    }}
                  >
                    {!selectedDay && (
                      <Box
                        sx={{
                          ...styles.lockIcon,
                          background:
                            !user || !user.active || !user.payment
                              ? `url(${lockIcon})`
                              : !isEnabled
                              ? `url(${lockIcon})`
                              : "",
                        }}
                      >
                        {!user?.scratchCards[i] && (
                          <Typography sx={styles.circleText}>
                            {i + 1}
                          </Typography>
                        )}
                      </Box>
                    )}
                  </Box>
                )}
              </motion.div>
            </Button>
          );
        })}
      </div>

      {selectedDay && (
        <Typography sx={styles.selectedText}>Door {selectedDay}</Typography>
      )}

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
            marginBottom: "-4px",
          }}
        >
          <Footer />
        </Box>

        {!selectedDay && (
          <Box
            sx={{
              position: "absolute",
              bottom: 20,
              width: "100%",
              zIndex: 100,
              display: "flex",
              justifyContent: user?.payment ? "center" : "space-around",
              alignItems: "center",
              gap: user?.payment ? "30px" : 0,
            }}
          >
            <Button
              sx={{
                width: "112px",
                height: "40px",
                background: "linear-gradient(360deg, #8939FE 0%, #C1A0FD 100%)",
                borderRadius: "10px",
                gap: "5px",
              }}
              onClick={() => setOpenModal(true)}
            >
              <Box
                component={"img"}
                src={
                  gender === "Straight"
                    ? straightPng
                    : gender === "Gay"
                    ? gayPng
                    : lesbianPng
                }
                width={"16px"}
              />
              <Typography
                sx={{
                  fontFamily: "Poppins",
                  fontWeight: 700,
                  fontSize: "15px",
                  color: "white",
                  textTransform: "capitalize",
                }}
              >
                {gender}
              </Typography>
            </Button>
            {!user?.payment && (
              <Button
                sx={{
                  width: "112px",
                  height: "40px",
                  background:
                    "linear-gradient(360deg, #8939FE 0%, #C1A0FD 100%)",
                  borderRadius: "10px",
                  gap: "5px",
                }}
                onClick={() => {
                  user && !user?.active
                    ? navigate("/welcome")
                    : user
                    ? navigate("/sales")
                    : navigate("/login");
                }}
              >
                <Box component={"img"} src={salesImage1} width={"16px"} />
                <Typography
                  sx={{
                    fontFamily: "Poppins",
                    fontWeight: 700,
                    fontSize: "15px",
                    color: "white",
                    textTransform: "capitalize",
                  }}
                >
                  Upgrade
                </Typography>
              </Button>
            )}
            {!user && (
              <Button
                sx={{
                  width: "112px",
                  height: "40px",
                  background:
                    "linear-gradient(360deg, #8939FE 0%, #C1A0FD 100%)",
                  borderRadius: "10px",
                  gap: "5px",
                }}
                onClick={() => navigate("/login")}
              >
                <Box component={"img"} src={loginPng} width={"16px"} />
                <Typography
                  sx={{
                    fontFamily: "Poppins",
                    fontWeight: 700,
                    fontSize: "15px",
                    color: "white",
                    textTransform: "capitalize",
                  }}
                >
                  Login
                </Typography>
              </Button>
            )}
            {user && (
              <Button
                sx={{
                  width: "112px",
                  height: "40px",
                  background:
                    "linear-gradient(360deg, #8939FE 0%, #C1A0FD 100%)",
                  borderRadius: "10px",
                  gap: "5px",
                }}
                onClick={() => {
                  localStorage.clear();
                  dispatch(resetUser());
                  toast.success("Logout Successful");
                  navigate("/login");
                }}
              >
                <Box component={"img"} src={loginPng} width={"16px"} />
                <Typography
                  sx={{
                    fontFamily: "Poppins",
                    fontWeight: 700,
                    fontSize: "15px",
                    color: "white",
                    textTransform: "capitalize",
                  }}
                >
                  Logout
                </Typography>
              </Button>
            )}
          </Box>
        )}

        {selectedDay && (
          <Box
            sx={{
              ...styles.footerButtonsBig,
              height: "11%",
            }}
          >
            <Button
              onClick={() => setSelectedDay(null)}
              style={{
                width: "90%",
                background: "linear-gradient(360deg, #D3C9FF 0%, #FFFFFF 100%)",
                height: "56px",
                borderRadius: "11px",
                justifyContent: "center",
                alignItems: "center",
                fontFamily: "Poppins",
                fontWeight: 400,
                fontSize: "18px",
                color: "#000000",
              }}
            >
              Back
            </Button>
          </Box>
        )}
      </Box>
      <Dialog open={openModal} onClose={() => setOpenModal(false)}>
        <DialogTitle>Select Your Preference</DialogTitle>
        <DialogContent sx={{ paddingBottom: 0 }}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
            <Button
              variant="contained"
              onClick={() => handlePreferenceSelect("Straight")}
              style={{
                background: "linear-gradient(360deg, #8939FE 0%, #C1A0FD 100%)",
                borderRadius: "8px",
              }}
            >
              Straight
            </Button>
            <Button
              variant="contained"
              onClick={() => handlePreferenceSelect("Gay")}
              style={{
                background: "linear-gradient(360deg, #8939FE 0%, #C1A0FD 100%)",
                borderRadius: "8px",
              }}
            >
              Gay
            </Button>
            <Button
              variant="contained"
              onClick={() => handlePreferenceSelect("Lesbian")}
              style={{
                background: "linear-gradient(360deg, #8939FE 0%, #C1A0FD 100%)",
                borderRadius: "8px",
              }}
            >
              Lesbian
            </Button>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => setOpenModal(false)}
            sx={{
              color: "#8939FE",
              borderRadius: "8px",
              marginBottom: "10px",
            }}
          >
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Home;
