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
    <div style={{ backgroundColor: "rgb(255, 240, 240)" }}>
      <Box>
        <nav
          style={{
            padding: "10px",
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <div className="title">MHA Blogs</div>
          <div style={{ display: "flex", justifyContent: "space-evenly" }}>
            <Link to="/" className="links" style={{ textDecoration: "none" }}>
              Home
            </Link>

            {/* <Link
              to="/admin"
              className="links"
              style={{ textDecoration: "none" }}
            >
              Admin
            </Link> */}

            <Link
              to="/addnew"
              className="links"
              style={{ textDecoration: "none" }}
            >
              Add New
            </Link>
          </div>
        </nav>
      </Box>
    </div>
  );
};

export default Navbar;
