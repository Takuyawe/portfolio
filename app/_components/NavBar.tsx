import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  IconButton,
  Button,
} from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useMediaQuery } from "react-responsive";
import { useState, useEffect } from "react";
import MenuIcon from "@mui/icons-material/Menu";

const NavBar = () => {
  const t = useTranslations("NavBar");
  const [selfieSize, setSelfieSize] = useState({ width: 0, height: 0 });

  const isDesktopScreen = useMediaQuery({
    query: "(min-width: 1189px)",
  });

  useEffect(() => {
    const changeImgSize = () => {
      switch (true) {
        case window.innerWidth < 768:
          setSelfieSize({ width: 30, height: 30 });
          break;
        case window.innerWidth < 1024:
          setSelfieSize({ width: 30, height: 30 });
          break;
        default:
          setSelfieSize({ width: 40, height: 40 });
          break;
      }
    };

    changeImgSize();

    window.addEventListener("resize", () => {
      changeImgSize();
    });
  }, []);

  return (
    <Box>
      <AppBar className="bg-white" position="fixed">
        <Toolbar className="flex justify-between">
          <div className="flex items-center justify-center">
            <div className="flex items-center justify-center h-8 w-8 lg:h-12 lg:w-12 bg-blue-500 rounded-full mr-4 overflow-hidden">
              <Image
                src="/selfie4.png"
                alt="selfie"
                height={selfieSize.height}
                width={selfieSize.height}
              />
            </div>
            <Typography
              className="text-gray-950 text-xs md:text-sm lg:text-xl"
              fontWeight={700}
            >
              {t("name")}
            </Typography>
          </div>
          {isDesktopScreen ? (
            <div className="flex w-1/3 items-start lg:justify-around">
              <Link href="#profile">
                <Button
                  className="text-gray-950 font-bold text-xs lg:text-xl"
                  variant="text"
                >
                  Home
                </Button>
              </Link>
              <Link href="#about">
                <Button
                  className="text-gray-950 font-bold text-xs lg:text-xl"
                  variant="text"
                >
                  About
                </Button>
              </Link>
              <Link href="#projects">
                <Button
                  className="text-gray-950 font-bold text-xs lg:text-xl"
                  variant="text"
                >
                  Projects
                </Button>
              </Link>
              <Link href="#contact">
                <Button
                  className="text-gray-950 font-bold text-xs lg:text-xl"
                  variant="text"
                >
                  Contact
                </Button>
              </Link>
            </div>
          ) : (
            <div>
              <IconButton>
                <MenuIcon />
              </IconButton>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
