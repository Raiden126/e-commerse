"use client";
import React from "react";
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  Divider,
  IconButton,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import GoogleIcon from "@mui/icons-material/Google";
import HttpsIcon from "@mui/icons-material/Https";
import Link from "next/link";
import { useRouter } from "next-nprogress-bar";

const Register = () => {
  const router = useRouter();
  
  const handleRegisterClick = () => {
    router.push("/login");
  };

  return (
    <Box
      sx={{
        height: "auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Container
        sx={{
          backgroundColor: "#f3f4f6",
          padding: "2rem",
          borderRadius: "8px",
          width: "30%",
        }}
        className="shadow-xl"
      >
        <Box sx={{ textAlign: "center", marginBottom: "1.5rem" }}>
          <IconButton
            sx={{
              background: "linear-gradient(90deg, #3b82f6 0%, #2563eb 100%)",
              padding: "12px",
              borderRadius: "50%",
              marginBottom: "1rem",
            }}
            disabled
          >
            <HttpsIcon sx={{ color: "white", fontSize: 32 }} />
          </IconButton>
          <Typography
            variant="h4"
            sx={{ fontWeight: "bold", color: "#1f2937" }}
          >
            Sign up
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "#6b7280", marginTop: "0.5rem" }}
          >
            Welcome user, please register to our site
          </Typography>
        </Box>

        <Button
          fullWidth
          variant="contained"
          startIcon={<GitHubIcon />}
          sx={{
            backgroundColor: "#333",
            color: "white",
            textTransform: "none",
            marginBottom: "1rem",
            "&:hover": { backgroundColor: "#24292e" },
          }}
        >
          Sign up with GitHub
        </Button>

        <Button
          fullWidth
          variant="contained"
          startIcon={<GoogleIcon />}
          sx={{
            backgroundColor: "#ea4335",
            color: "white",
            textTransform: "none",
            marginBottom: "1rem",
            "&:hover": { backgroundColor: "#d93025" },
          }}
        >
          Sign up with Google
        </Button>

        <Divider sx={{ marginY: "1.5rem", color: "#9ca3af" }}>or</Divider>

        <Box className="flex justify-center items-center w-full">
        <TextField
            label="Username"
            variant="outlined"
            fullWidth
            required
            sx={{
              marginBottom: "1rem",
              "& .MuiOutlinedInput-root": {
                backgroundColor: "#f9fafb",
                borderRadius: "8px",
                padding: "1px 1px",
                fontSize: "0.822rem",
              },
            }}
          />
          <TextField
            label="Email Address"
            variant="outlined"
            fullWidth
            required
            sx={{
              marginBottom: "1rem",
              "& .MuiOutlinedInput-root": {
                backgroundColor: "#f9fafb",
                borderRadius: "8px",
                padding: "1px 1px",
                fontSize: "0.822rem",
              },
            }}
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            required
            sx={{
              marginBottom: "1rem",
              "& .MuiOutlinedInput-root": {
                backgroundColor: "#f9fafb",
                borderRadius: "8px",
                padding: "1px 1px",
                fontSize: "0.822rem",
              },
            }}
          />
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "1.5rem",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <input
              type="checkbox"
              id="remember"
              style={{
                height: "20px",
                width: "20px",
                color: "#3b82f6",
                borderColor: "#d1d5db",
                marginRight: "0.5rem",
              }}
            />
            <label htmlFor="remember" style={{ color: "#4b5563" }}>
              Remember me
            </label>
          </Box>
        </Box>

        <Button
          fullWidth
          variant="contained"
          sx={{
            backgroundColor: "#3b82f6",
            color: "white",
            textTransform: "none",
            "&:hover": { backgroundColor: "#2563eb" },
          }}
        >
          Sign up
        </Button>
        
        <Box sx={{ display: "flex", justifyContent: "center", marginTop: "1.5rem" }}>
          <Typography variant="body2" sx={{ color: "#4b5563" }}>
            Already have an account?{" "}
            <Button
              onClick={handleRegisterClick}
              sx={{
                color: "#3b82f6",
                textDecoration: "none",
                padding: 0,
                fontSize: "14px",
                textTransform: "capitalize",
                minWidth: "auto",
                "&:hover": {
                  textDecoration: "underline",
                  backgroundColor: "transparent",
                },
              }}
            >
              login
            </Button>
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Register;
