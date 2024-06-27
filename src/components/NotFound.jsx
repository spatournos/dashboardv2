import { Link } from "react-router-dom";
import { Box, Typography, useTheme } from "@mui/material";
import Header from "./Header";
import { tokens } from '../theme';

function NotFound() {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
  
    return (
    <div>
      <Header title={"Page Not Found"} subtitle={"Pick from Sidebar"} />
      <Box textAlign="center">
        <Typography
            variant="h2"
            color={colors.grey[100]}
            fontWeight="bold"
            sx={{ m: "10px 0 0 0" }}
        >
            Get Back to Safety
        </Typography>
        <Typography variant="h3" color={colors.greenAccent[500]}>
            <Link to='/'>Home</Link>
        </Typography>
        </Box>
    </div>
  )
}

export default NotFound