import { Typography, Divider, Grid } from "@mui/material";
import Image from "next/image";

const Projects = () => {
  return (
    <div className="h-screen w-full bg-white">
      <div className="h-1/3 flex flex-col items-center justify-center">
        <Typography variant="h3" fontWeight={500}>
          Projects
        </Typography>
        <Divider flexItem className="self-center" />
        <Typography variant="h6" fontWeight={300}>
          Here you will find some of the personal and clients projects <br />{" "}
          that I created with each project containing its own case study
        </Typography>
      </div>
      <div className="flex items-center">
        <Grid container>
          <Grid item xs={6}>
            <div className="self-center">
              <Image
                src="/projects/project-1.svg"
                alt="project-1"
                height={400}
                width={700}
              />
            </div>
          </Grid>
          <Grid
            item
            xs={6}
            className="flex flex-col items-center justify-center"
          >
            <Typography variant="h3" fontWeight={600}>
              Food WebGIS
            </Typography>
            <Typography variant="subtitle1" fontWeight={300}>
              Dopefolio is a successful Open-Source project that I created which
              have been featured on some of the biggest tech sites like
              CSS-Tricks, Hostinger, etc & used by thousands of developers
              globally
            </Typography>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Projects;
