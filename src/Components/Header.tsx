import React from "react";
import { AppBar, Typography, Button, Box } from "@mui/material";
import { motion } from "framer-motion";

const Header: React.FC = () => {
  return (
    <AppBar position="sticky" color="transparent" elevation={0}>
      <Box
        display="flex"
        justifyContent="space-between"
        alignContent={"center"}
        marginX={9}
        marginY={2}
      >
        <Typography
          variant="body1"
          component={motion.div}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          style={{ flexGrow: 1 }}
        >
          Akira Na Thalang
        </Typography>

        <Box
          component={motion.div}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Button color="inherit">Menu 1</Button>
          <Button color="inherit">Menu 2</Button>
        </Box>
      </Box>
    </AppBar>
  );
};

export default Header;
