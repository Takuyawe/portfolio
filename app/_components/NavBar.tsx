import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  IconButton,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link"

const NavBar = () => {
  return (
    <Box>
      <AppBar className="bg-white" position="fixed">
        <Toolbar className="flex justify-between">
          <div className="flex">
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography className="text-gray-950" variant="h6">
              Takuya Nemoto
            </Typography>
          </div>
          <div className="flex w-1/3 justify-around">
            <Link href="#profile">
              <Button className="text-gray-950 font-bold text-xl" variant="text">
                Home
              </Button>
            </Link>
            <Link href="#about">
              <Button className="text-gray-950 font-bold text-xl" variant="text">
                About
              </Button>
            </Link>
            <Link href="#projects">
              <Button className="text-gray-950 font-bold text-xl" variant="text">
                Projects
              </Button>
            </Link>
            <Link href="#contact">
              <Button className="text-gray-950 font-bold text-xl" variant="text">
                Contact
              </Button>
            </Link>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
