import { AppBar, Box, Button, CssBaseline, Toolbar, Typography } from "@mui/material";


const Navbar = () => {
  
  return (
    <div >
        <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav" sx={{backgroundColor: 'gray'}}>
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            MUI
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            <Button sx={{ color: '#fff' }}>
                0
              </Button>
            
          </Box>
        </Toolbar>
      </AppBar>
      </Box>
    </div>
  );
};

export default Navbar;
