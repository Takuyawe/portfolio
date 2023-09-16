import { Typography, Divider, Grid } from "@mui/material";
import Image from "next/image";

const Projects = () => {
  return (
    <div className="min-h-screen w-full bg-white pb-24">
      <div className="h-64 pt-12 flex flex-col items-center justify-around mb-12">
        <Typography variant="h3" fontWeight={500}>
          Projects
        </Typography>
        <Divider flexItem className="self-center" />
        <Typography variant="h6" fontWeight={300}>
          These are my projects that I have worked on.
          <br />
          Currently I am working on another project which will appear here soon.
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
              Food WebGIS is a web application that allows users to search for
              restaurants in any area of the world.
              <br />
              Users can also check the weather around the searched location.
              <br />
              It is built using Next.js and different kinds of APIs, such as
              Google Maps API, OpenWeather API, and Yelp API.
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
              Card Deck is a simple card deck that allows users to control each
              card on the board.
              <br />
              Users can create a room and invite other players to join the room.
              <br />
              The room state can be stored in a database, and can be accessed
              with crendentials.
              <br />
              It is built using Next.js, MongoDB, WebSocket, and so on.
            </Typography>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Projects;
