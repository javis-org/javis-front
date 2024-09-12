import {
  Box,
  Typography,
  Button,
  Card,
  CardContent,

} from "@mui/material";

import {LeftContainer} from "./LeftContainer.jsx";
import {MidContainer} from "./MidContainer.jsx";


// MUI Styles using `sx` prop
const Base = () => {

  return (
    <Box
      sx={{
        display: "flex",
        height : "100%",
        // width: "100%",
        padding: "10px",

      }}
    >
      <LeftContainer/>

      <MidContainer/>

      {/* Right Sidebar */}
      {/*<Box*/}
      {/*  sx={{*/}
      {/*    width: "20%",*/}
      {/*    padding: "20px",*/}
      {/*    backgroundColor: "#f7f6fa",*/}
      {/*  }}*/}
      {/*>*/}
      {/*  <Card variant="outlined" sx={{ mb: 2 }}>*/}
      {/*    <CardContent>*/}
      {/*      <Typography variant="h6">title</Typography>*/}
      {/*      <Typography variant="body2" color="textSecondary">*/}
      {/*        글*/}
      {/*      </Typography>*/}
      {/*    </CardContent>*/}
      {/*  </Card>*/}
      {/*</Box>*/}
    </Box>
  );
};

export default Base;
