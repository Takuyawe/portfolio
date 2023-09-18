import { Typography, Divider, Grid, Button } from "@mui/material";
import Image from "next/image";
import { useTranslations } from "next-intl";

const About = () => {
  const t = useTranslations("About");

  return (
    <div className="h-screen w-full bg-gray-100">
      <div className="h-64 pt-12 flex flex-col items-center justify-around">
        <Typography variant="h3" fontWeight={500}>
          ABOUT ME
        </Typography>
        <Divider flexItem className="self-center" />
        <Typography variant="h6" fontWeight={300}>
          {t.rich("subtitle", {
            br: () => <br />,
          })}
        </Typography>
      </div>
      <div className="h-2/3 flex items-center">
        <Grid container>
          <Grid
            item
            sm={6}
            className="h-96 flex flex-col items-center justify-around"
          >
            <Typography variant="h4" fontWeight={600}>
              My Introduction
            </Typography>
            <div className="w-3/4">
              <Typography variant="subtitle1" fontWeight={300}>
                {t.rich("introduction", {
                  br: () => <br />,
                })}
              </Typography>
            </div>
            <a href="#contact">
              <Button
                className="bg-blue-600 hover:bg-blue-500"
                variant="contained"
              >
                Contact
              </Button>
            </a>
          </Grid>
          <Grid
            item
            sm={6}
            className="flex flex-col items-center justify-around"
          >
            <Typography variant="h4" fontWeight={600}>
              My Skills
            </Typography>
            <div className="flex flex-col items-center">
              <div className="shadow-md bg-blue-100 py-2 px-4 rounded-2xl mb-4">
                <Typography variant="h6" fontWeight={400}>
                  {t("nav1")}
                </Typography>
              </div>

              <div className="flex">
                <Image
                  src="/about/html5.svg"
                  alt="html5"
                  height={60}
                  width={60}
                />
                <Image src="/about/css.svg" alt="css" height={60} width={60} />
                <Image src="/about/js.svg" alt="js" height={60} width={60} />
                <Image
                  src="/about/typescript.svg"
                  alt="typescript"
                  height={60}
                  width={60}
                />
                <Image
                  src="/about/python.svg"
                  alt="python"
                  height={60}
                  width={60}
                />
                <Image
                  src="/about/nodejs.svg"
                  alt="nodejs"
                  height={60}
                  width={60}
                />
                <Image
                  src="/about/reactjs.svg"
                  alt="reactjs"
                  height={60}
                  width={60}
                />
                <Image
                  src="/about/nextjs.svg"
                  alt="nextjs"
                  height={60}
                  width={60}
                />
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="shadow-md bg-blue-100 py-2 px-4 rounded-2xl mb-4">
                <Typography variant="h6" fontWeight={400}>
                  {t("nav2")}
                </Typography>
              </div>
              <div className="flex">
                <Image src="/about/aws.svg" alt="aws" height={60} width={60} />
                <Image src="/about/git.svg" alt="git" height={60} width={60} />
                <Image
                  src="/about/docker.svg"
                  alt="docker"
                  height={60}
                  width={60}
                />
                <Image
                  src="/about/google-cloud.svg"
                  alt="google-cloud"
                  height={60}
                  width={60}
                />
                <Image
                  src="/about/linux.svg"
                  alt="linux"
                  height={60}
                  width={60}
                />
                <Image
                  src="/about/mongodb.svg"
                  alt="mongodb"
                  height={60}
                  width={60}
                />
                <Image
                  src="/about/postgresql.svg"
                  alt="postgresql"
                  height={60}
                  width={60}
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
