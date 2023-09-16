import { Typography, IconButton, Divider } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const Bottom = () => {
  return (
    <div className="h-[40vh] bg-black flex flex-col justify-around">
      <div className="flex justify-around">
        <div className="h-24 flex flex-col items-center justify-around">
          <Typography className="text-white" variant="h5">
            Takuya Nemoto
          </Typography>
          <Typography className="text-white" variant="subtitle1">
            A full stack developer who loves to code and learn new things.
            <br />
            Looking for a new opportunity to contribute to other projects.
          </Typography>
        </div>
        <div className="h-24 flex flex-col items-center justify-around">
          <Typography className="text-white" variant="h6">
            SOCIAL
          </Typography>
          <div className="flex items-center justify-center">
            <a
              target="_blank"
              href="https://www.linkedin.com/in/takuya-nemoto-4855501a8"
              rel="noopener noreferrer"
            >
              <IconButton className="bg-white hover:bg-gray-200 mr-2">
                <LinkedInIcon className="text-blue-400" />
              </IconButton>
            </a>
            <a
              target="_blank"
              href="https://github.com/Takuyawe"
              rel="noopener noreferrer"
            >
              <IconButton className="bg-white hover:bg-gray-200">
                <GitHubIcon className="text-gray-600" />
              </IconButton>
            </a>
          </div>
        </div>
      </div>
      <div className="h-1/3 flex flex-col items-center justify-around">
        <Divider className="bg-white h-1 w-2/3" />
        <Typography className="text-white" variant="subtitle1">
          © Copyright 2023. Made by Takuya Nemoto
        </Typography>
      </div>
    </div>
  );
};

export default Bottom;
