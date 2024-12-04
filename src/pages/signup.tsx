import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  TextField,
  Typography,
  useTheme,
  Theme,
} from "@mui/material";
import { createStyles } from "@mui/styles";
import lightsSvg from "../assets/lights.svg";
import crossSvg from "../assets/cross.svg";
import logoPng from "../assets/logo.svg";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "../yup";
import { useRegisterMutation } from "../services/api";
import { notifyError, notifySuccess } from "../toast";
import { useAppDispatch } from "../redux/store";
import { setUser } from "../redux/reducers/userReducer";
import { useEffect } from "react";

const useStyle = (theme: Theme) =>
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
      position: "absolute",
      top: 0,
      width: "100%",
    },
    cross: {
      position: "absolute",
      top: "5%",
      right: "5%",
      minWidth: 0,
      p: 0,
    },
    logo: {
      marginTop: theme.spacing(10),
      borderRadius: "30px",
      width: "139px",
      height: "139px",
    },
    title: {
      color: "white",
      fontFamily: "Mountains of Christmas",
      fontWeight: 400,
      fontSize: 40,
      mt: theme.spacing(4),
      mb: theme.spacing(4),
    },
    input: {
      width: "90%",
      maxWidth: "400px",
      paddingX: theme.spacing(2),
    },
    inputTitle: {
      color: "white",
      fontWeight: 700,
      fontSize: "12px",
      fontFamily: "Inter",
      marginLeft: "7px",
    },
    inputBox: {
      backgroundColor: "white",
      borderRadius: "8px",
      marginTop: "3px",
      marginBottom: "15px",
    },
    submit: {
      height: 56,
      borderRadius: "11px",
      color: "white",
      fontWeight: 700,
      fontSize: "18px",
      textTransform: "none",
      background: "linear-gradient(180deg, #C1A0FD 0%, #8939FE 100%)",
      marginTop: "15px",
    },
  });

const Signup = () => {
  const theme = useTheme();
  const styles = useStyle(theme);

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [createAccount] = useRegisterMutation();

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
  });

  const onSubmit = async (data: any) => {
    try {
      const res = await createAccount({ ...data, active: false }).unwrap();
      dispatch(setUser({ user: res?.data?.user }));
      localStorage.setItem("token", res?.data?.accessToken);
      notifySuccess(res?.message);
      reset();
      navigate("/welcome");
    } catch (err) {
      const error = err as ErrorResponse;
      const message =
        error?.message === "Validation error!"
          ? error.data?.errors[0].msg ?? "Something went wrong"
          : error?.message ?? "Something went wrong";
      notifyError(message);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/");
    }
  }, []);

  return (
    <Box sx={styles.container}>
      <Box component="img" src={lightsSvg} alt="Lights" sx={styles.lights} />

      <Button sx={styles.cross} onClick={() => navigate(-1)}>
        <Box component="img" src={crossSvg} alt="Close" />
      </Button>

      <Box component="img" src={logoPng} alt="Logo" sx={styles.logo} />

      <Typography variant="h3" sx={styles.title}>
        Create Account
      </Typography>

      <Box sx={styles.input}>
        <Typography variant="subtitle2" sx={styles.inputTitle}>
          Full Name
        </Typography>
        <Controller
          name="name"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField
              {...field}
              fullWidth
              placeholder="First and last name"
              variant="outlined"
              size="small"
              sx={styles.inputBox}
              error={!!errors.name}
              helperText={errors.name?.message}
            />
          )}
        />

        <Typography variant="subtitle2" sx={styles.inputTitle}>
          E-Mail
        </Typography>
        <Controller
          name="email"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField
              {...field}
              fullWidth
              placeholder="Your E-Mail"
              variant="outlined"
              size="small"
              sx={styles.inputBox}
              error={!!errors.email}
              helperText={errors.email?.message}
            />
          )}
        />

        <Typography variant="subtitle2" sx={styles.inputTitle}>
          Password
        </Typography>
        <Controller
          name="password"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField
              {...field}
              fullWidth
              placeholder="Password"
              variant="outlined"
              size="small"
              type="password"
              sx={styles.inputBox}
              error={!!errors.password}
              helperText={errors.password?.message}
            />
          )}
        />

        <Button fullWidth sx={styles.submit} onClick={handleSubmit(onSubmit)}>
          Let's Go
        </Button>
      </Box>
    </Box>
  );
};

export default Signup;
