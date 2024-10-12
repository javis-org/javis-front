import { Typography } from "@mui/material";

export const PageTitle = ({ title }) => {
  return (
    <Typography variant={"h5"} sx={{ fontWeight: "600" }}>
      {title}
    </Typography>
  );
};
