import { AppBar as MUIAppBar, Icon, Toolbar, Typography } from "@mui/material";
import CelebrationIcon from '@mui/icons-material/CelebrationRounded';

function AppBar() {
    return <MUIAppBar position="fixed">
        <Toolbar>
            
            <Icon fontSize="large" sx={{mr: 2}}>
                <CelebrationIcon fontSize="inherit" />
            </Icon>

            <Typography variant="h6" fontSize={27}>
                Cake Day
            </Typography>

        </Toolbar>
    </MUIAppBar>
}

export default AppBar;