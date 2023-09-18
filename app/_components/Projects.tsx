import { Typography, Divider, Grid } from "@mui/material";
import Image from "next/image";
import { useTranslations } from "next-intl";

const Projects = () => {
  const t = useTranslations("Projects");

  return (
    <div className="min-h-screen w-full bg-white pb-24">
      <div className="h-64 pt-12 flex flex-col items-center justify-around mb-12">
        <Typography variant="h3" fontWeight={500}>
          Projects
        </Typography>
        <Divider flexItem className="self-center" />
        <Typography variant="h6" fontWeight={300}>
          {t.rich("subtitle", {
            br: () => <br />,
          })}
        </Typography>
      </div>
      <div className="flex items-center ml-8 mb-20">
        <Grid container>
          <Grid item xs={6}>
            <div className="self-center">
              <Image
                src="/projects/project-1.svg"
                alt="project-1"
                height={400}
                width={600}
              />
            </div>
          </Grid>
          <Grid
            item
            xs={5}
            className="flex flex-col items-center justify-around mr-4"
          >
            <Typography variant="h3" fontWeight={600}>
              Food WebGIS
            </Typography>
            <Typography variant="h5" fontWeight={300}>
              {t.rich("project1", {
                br: () => <br />,
              })}
            </Typography>
          </Grid>
        </Grid>
      </div>
      <div className="flex items-center ml-8">
        <Grid container>
          <Grid item xs={6}>
            <div className="self-center">
              <Image
                src="/projects/project-2.svg"
                alt="project-1"
                height={400}
                width={600}
              />
            </div>
          </Grid>
          <Grid
            item
            xs={5}
            className="flex flex-col items-center justify-around mr-4"
          >
            <Typography variant="h3" fontWeight={600}>
              Card Deck
            </Typography>
            <Typography variant="h5" fontWeight={300}>
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
