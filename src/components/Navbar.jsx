import {
  AppBar,
  Box,
  Button,
  Card,
  CssBaseline,
  Toolbar,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div style={{backgroundColor: 'rgb(255, 230, 230)'}}>
      <Box>
        <nav
          style={{
            padding: "10px",
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <Typography variant="h4" component="div" sx={{ fontWeight: "700" }}>
            MHA Blogs
          </Typography>
          <div style={{ display: "flex", justifyContent: "space-evenly" }}>
            <Button
              variant="plain"
              size="small"
              color="danger"
              sx={{ padding: "unset", marginX: "10px" }}
            >
              <Link to="/" className="links" style={{ textDecoration: "none" }}>
                Home
              </Link>
            </Button>
            <Button
              variant="plain"
              size="small"
              color="danger"
              sx={{ padding: "unset", marginX: "10px" }}
            >
              <Link
                to="/admin"
                className="links"
                style={{ textDecoration: "none" }}
              >
                Admin
              </Link>
            </Button>
            <Button
              variant="plain"
              size="small"
              color="danger"
              sx={{ padding: "unset", marginX: "10px" }}
            >
              <Link
                to="/addnew"
                className="links"
                style={{ textDecoration: "none" }}
              >
                Add New
              </Link>
            </Button>
            
          </div>
        </nav>
      </Box>
    </div>
  );
};

export default Navbar;
