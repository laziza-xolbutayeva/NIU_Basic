import { Box } from "@mui/material";
import React from "react";

const MaxContainer = ({ children }) => {
  return (
    <Box width={"100%"} display="flex" justifyContent={"center"}>
      <Box width={"100%"} maxWidth="1440px">
        {children}
      </Box>
    </Box>
  );
};

export default MaxContainer;