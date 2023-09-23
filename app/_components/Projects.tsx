import { Typography, Divider, Grid } from "@mui/material";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useMediaQuery } from "react-responsive";
import { useState, useEffect } from "react";

const Projects = () => {
  const t = useTranslations("Projects");
  const [projectImgSize, setProjectImgSize] = useState({ width: 0, height: 0 });

  const isDesktopScreen = useMediaQuery({
    query: "(min-width: 1024px)",
  });

  const isMobileScreen = useMediaQuery({
    query: "(max-width: 900px)",
  });

  useEffect(() => {
    const changeImgSize = () => {
      switch (true) {
        case window.innerWidth < 768:
          setProjectImgSize({ width: 400, height: 200 });
          break;
        case window.innerWidth < 1024:
          setProjectImgSize({ width: 500, height: 300 });
          break;
        default:
          setProjectImgSize({ width: 600, height: 400 });
          break;
      }
    };

    changeImgSize();

    window.addEventListener("resize", () => {
      changeImgSize();
    });
  }, []);

  return (
    <div className="min-h-screen w-full bg-white pb-24">
      <div className="h-48 lg:h-64 pt-6 lg:pt-12 flex flex-col items-center justify-around mb-12">
        <Typography className="text-3xl lg:text-5xl" fontWeight={500}>
          Projects
        </Typography>
        <Divider flexItem className="self-center" />
        <Typography
          className="w-3/4 lg:w-full text-center text-sm lg:text-xl"
          fontWeight={300}
        >
          {t.rich("subtitle", {
            br: () => <br />,
          })}
        </Typography>
      </div>
      <div className="flex items-center ml-8 mb-20">
        <Grid container>
          {isMobileScreen && (
            <Typography
              className="text-3xl lg:text-5xl w-full text-center"
              fontWeight={600}
            >
              Food WebGIS
            </Typography>
          )}
          <Grid item sm={12} md={6}>
            <div className="self-center">
              <Image
                src="/projects/project-1.svg"
                alt="project-1"
                height={projectImgSize.height}
                width={projectImgSize.width}
              />
            </div>
          </Grid>
          <Grid
            item
            sm={12}
            md={5}
            className="flex flex-col items-center justify-around mr-4"
          >
            {!isMobileScreen && (
              <Typography className="text-3xl lg:text-5xl" fontWeight={600}>
                Food WebGIS
              </Typography>
            )}

            <Typography
              className="mt-8 lg:mt-0 text-base lg:text-2xl"
              fontWeight={300}
            >
              {t.rich("project1", {
                br: () => <br />,
              })}
            </Typography>
          </Grid>
        </Grid>
      </div>
      <div className="flex items-center ml-8">
        <Grid container>
          {isMobileScreen && (
            <Typography
              className="text-3xl lg:text-5xl w-full text-center"
              fontWeight={600}
            >
              Card Deck
            </Typography>
          )}
          <Grid item sm={10} md={6}>
            <div className="self-center">
              <Image
                src="/projects/project-2.svg"
                alt="project-1"
                height={projectImgSize.height}
                width={projectImgSize.width}
              />
            </div>
          </Grid>
          <Grid
            item
            sm={10}
            md={5}
            className="flex flex-col items-center justify-around lg:mr-4"
          >
            {!isMobileScreen && (
              <Typography className="text-3xl lg:text-5xl" fontWeight={600}>
                Card Deck
              </Typography>
            )}
            <Typography
              className="mt-8 lg:mt-0 text-base lg:text-2xl"
              fontWeight={300}
            >
              {t.rich("project2", {
                br: () => <br />,
              })}
            </Typography>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Projects;
