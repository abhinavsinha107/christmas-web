import React from "react";
import { Box, Typography, useTheme } from "@mui/material";

interface HeroSectionProps {
  title: string;
  hasSubTitle: boolean;
  daysRemaining: number;
  welcome?: boolean;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  hasSubTitle,
  daysRemaining,
  welcome,
}) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: theme.spacing(4),
        paddingY: welcome ? theme.spacing(0) : theme.spacing(4),
      }}
    >
      <Typography
        variant="h3"
        sx={{
          color: "white",
          fontFamily: "Mountains of Christmas, cursive",
          fontWeight: 400,
          fontSize: "2.5rem",
          textAlign: "center",
          mb: theme.spacing(2),
        }}
      >
        {title}
      </Typography>

      {hasSubTitle && (
        <Typography
          variant="subtitle1"
          sx={{
            color: "white",
            fontFamily: "Inter, sans-serif",
            fontWeight: 400,
            fontSize: "1rem",
            textAlign: "center",
          }}
        >
          {daysRemaining > 0
            ? `In ${daysRemaining} days it starts`
            : "It already started!"}
        </Typography>
      )}
    </Box>
  );
};

export default HeroSection;
