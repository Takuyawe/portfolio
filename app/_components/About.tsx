import { Typography, Divider, Grid, Button } from "@mui/material";
import Image from "next/image";

const About = () => {
  return (
    <div className="h-screen w-full bg-gray-100">
      <div className="h-1/3 flex flex-col items-center justify-center">
        <Typography variant="h3" fontWeight={500}>
          ABOUT ME
        </Typography>
        <Divider flexItem className="self-center" />
        <Typography variant="h6" fontWeight={300}>
          Here you will find more information about me, what I do, and my <br />
          current skills mostly in terms of programming and technology
        </Typography>
      </div>
      <div className="h-2/3 flex items-center">
        <Grid container>
          <Grid item sm={6} className="flex flex-col items-center">
            <Typography variant="h4" fontWeight={600}>
              Get to know me!
            </Typography>
            <Typography variant="subtitle1" fontWeight={300}>
              I&apos;m a Frontend Web Developer building the Front-end of
              Websites and <br /> Web Applications that leads to the success of
              the overall product. <br /> Check out some of my work in the
              Projects section. <br /> I also like sharing content related to
              the stuff that I have learned over the years <br /> in Web
              Development so it can help other people of the Dev Community.{" "}
              <br /> Feel free to Connect or Follow me on my Linkedin where I
              post useful content <br /> related to Web Development and
              Programming. I&apos;m open to Job opportunities <br /> where I can
              contribute, learn and grow. If you have a good opportunity that
              matches <br /> my skills and experience then don&apos;t hesitate
              to contact me.
            </Typography>
            <Button variant="contained">Contact</Button>
          </Grid>
          <Grid item sm={6} className="flex flex-col items-center">
            <Typography variant="h4" fontWeight={600}>
              My Skills
            </Typography>
            <div className="flex">
              <Typography variant="h6" fontWeight={400}>
                Languages & Frameworks:{" "}
              </Typography>
              <Image
                src="/about/html5.svg"
                alt="html5"
                height={75}
                width={75}
              />
              <Image src="/about/css.svg" alt="css" height={75} width={75} />
              <Image src="/about/js.svg" alt="js" height={75} width={75} />
              <Image
                src="/about/typescript.svg"
                alt="typescript"
                height={75}
                width={75}
              />
              <Image
                src="/about/python.svg"
                alt="python"
                height={75}
                width={75}
              />
              <Image
                src="/about/nodejs.svg"
                alt="nodejs"
                height={75}
                width={75}
              />
              <Image
                src="/about/reactjs.svg"
                alt="reactjs"
                height={75}
                width={75}
              />
              <Image
                src="/about/nextjs.svg"
                alt="nextjs"
                height={75}
                width={75}
              />
            </div>
            <div className="flex">
              <Typography variant="h6" fontWeight={400}>
                Development Tools:{" "}
              </Typography>
              <Image src="/about/aws.svg" alt="aws" height={75} width={75} />
              <Image src="/about/git.svg" alt="git" height={75} width={75} />
              <Image
                src="/about/docker.svg"
                alt="docker"
                height={75}
                width={75}
              />
              <Image
                src="/about/google-cloud.svg"
                alt="google-cloud"
                height={75}
                width={75}
              />
              <Image
                src="/about/linux.svg"
                alt="linux"
                height={75}
                width={75}
              />
              <Image
                src="/about/mongodb.svg"
                alt="mongodb"
                height={75}
                width={75}
              />
              <Image
                src="/about/postgresql.svg"
                alt="postgresql"
                height={75}
                width={75}
              />
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default About;
