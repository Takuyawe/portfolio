import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  IconButton,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import Image from "next/image";

const NavBar = () => {
  return (
    <Box>
      <AppBar className="bg-white" position="fixed">
        <Toolbar className="flex justify-between">
          <div className="flex items-center justify-center">
            <div className="flex items-center justify-center h-12 w-12 bg-blue-500 rounded-full mr-4 overflow-hidden">
              <Image src="/selfie4.png" alt="selfie" height={40} width={40} />
            </div>
            <Typography className="text-gray-950" variant="h6">
              Takuya Nemoto
            </Typography>
          </div>
          <div className="flex w-1/3 justify-around">
            <Link href="#profile">
              <Button
                className="text-gray-950 font-bold text-xl"
                variant="text"
              >
                Home
              </Button>
            </Link>
            <Link href="#about">
              <Button
                className="text-gray-950 font-bold text-xl"
                variant="text"
              >
                About
              </Button>
            </Link>
            <Link href="#projects">
              <Button
                className="text-gray-950 font-bold text-xl"
                variant="text"
              >
                Projects
              </Button>
            </Link>
            <Link href="#contact">
              <Button
                className="text-gray-950 font-bold text-xl"
                variant="text"
              >
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
