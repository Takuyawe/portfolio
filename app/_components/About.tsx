import { Typography, Divider, Grid, Button } from "@mui/material";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useMediaQuery } from "react-responsive";
import { useState, useEffect } from "react";

const About = () => {
  const t = useTranslations("About");
  const [toolIconSize, setToolIconSize] = useState({ width: 0, height: 0 });

  const isDesktopScreen = useMediaQuery({
    query: "(min-width: 1024px)",
  });

  useEffect(() => {
    const changeImgSize = () => {
      switch (true) {
        case window.innerWidth < 768:
          setToolIconSize({ width: 40, height: 40 });
          break;
        case window.innerWidth < 1024:
          setToolIconSize({ width: 50, height: 50 });
          break;
        default:
          setToolIconSize({ width: 60, height: 60 });
          break;
      }
    };

    changeImgSize();

    window.addEventListener("resize", () => {
      changeImgSize();
    });
  }, []);

  return (
    <div className="min-h-screen w-full bg-gray-100">
      <div className="h-48 lg:h-64 pt-6 lg:pt-12 flex flex-col items-center justify-around">
        <Typography className="text-3xl lg:text-5xl" fontWeight={500}>
          ABOUT ME
        </Typography>
        <Divider flexItem className="self-center" />
        <Typography
          className="w-2/3 text-center text-sm lg:text-xl"
          fontWeight={300}
        >
          {t.rich("subtitle", {
            br: () => <br />,
          })}
        </Typography>
      </div>
      <div className="h-2/3 flex items-center">
        <Grid container>
          <Grid
            item
            md={6}
            className="h-72 lg:h-96 mt-12 lg:mt-6 flex flex-col items-center justify-around"
          >
            <Typography className="text-2xl lg:text-4xl" fontWeight={600}>
              My Introduction
            </Typography>
            <div className="w-3/4">
              <Typography className="text-xs lg:text-base" fontWeight={300}>
                {t.rich("introduction", {
                  br: () => <br />,
                })}
              </Typography>
            </div>
            <a href="#contact">
              <Button
                className="bg-blue-600 hover:bg-blue-500"
                variant="contained"
                size={`${isDesktopScreen ? "medium" : "small"}`}
              >
                Contact
              </Button>
            </a>
          </Grid>
          <Grid
            item
            md={6}
            className="w-full h-72 lg:h-96 mt-12 lg:mt-6 flex flex-col items-center justify-around"
          >
            <Typography className="text-2xl lg:text-4xl" fontWeight={600}>
              My Skills
            </Typography>
            <div className="flex flex-col items-center">
              <div className="shadow-md bg-blue-100 py-2 px-4 rounded-2xl mb-4">
                <Typography className="text-xs lg:text-lg" fontWeight={400}>
                  {t("nav1")}
                </Typography>
              </div>

              <div className="flex">
                <Image
                  src="/about/html5.svg"
                  alt="html5"
                  height={toolIconSize.height}
                  width={toolIconSize.width}
                />
                <Image
                  src="/about/css.svg"
                  alt="css"
                  height={toolIconSize.height}
                  width={toolIconSize.width}
                />
                <Image
                  src="/about/js.svg"
                  alt="js"
                  height={toolIconSize.height}
                  width={toolIconSize.width}
                />
                <Image
                  src="/about/typescript.svg"
                  alt="typescript"
                  height={toolIconSize.height}
                  width={toolIconSize.width}
                />
                <Image
                  src="/about/python.svg"
                  alt="python"
                  height={toolIconSize.height}
                  width={toolIconSize.width}
                />
                <Image
                  src="/about/nodejs.svg"
                  alt="nodejs"
                  height={toolIconSize.height}
                  width={toolIconSize.width}
                />
                <Image
                  src="/about/reactjs.svg"
                  alt="reactjs"
                  height={toolIconSize.height}
                  width={toolIconSize.width}
                />
                <Image
                  src="/about/nextjs.svg"
                  alt="nextjs"
                  height={toolIconSize.height}
                  width={toolIconSize.width}
                />
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="shadow-md bg-blue-100 py-2 px-4 rounded-2xl mb-4">
                <Typography className="text-xs lg:text-lg" fontWeight={400}>
                  {t("nav2")}
                </Typography>
              </div>
              <div className="flex">
                <Image
                  src="/about/aws.svg"
                  alt="aws"
                  height={toolIconSize.height}
                  width={toolIconSize.width}
                />
                <Image
                  src="/about/git.svg"
                  alt="git"
                  height={toolIconSize.height}
                  width={toolIconSize.width}
                />
                <Image
                  src="/about/docker.svg"
                  alt="docker"
                  height={toolIconSize.height}
                  width={toolIconSize.width}
                />
                <Image
                  src="/about/google-cloud.svg"
                  alt="google-cloud"
                  height={toolIconSize.height}
                  width={toolIconSize.width}
                />
                <Image
                  src="/about/linux.svg"
                  alt="linux"
                  height={toolIconSize.height}
                  width={toolIconSize.width}
                />
                <Image
                  src="/about/mongodb.svg"
                  alt="mongodb"
                  height={toolIconSize.height}
                  width={toolIconSize.width}
                />
                <Image
                  src="/about/postgresql.svg"
                  alt="postgresql"
                  height={toolIconSize.height}
                  width={toolIconSize.width}
                />
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default About;
