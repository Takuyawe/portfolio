import { Typography, Button } from "@mui/material";
import Image from "next/image";

const Profile = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden flex justify-center">
      <div className="absolute inset-0">
        <Image
          src="/background-white.jpg"
          alt="Profile"
          fill
          objectFit="cover"
        />
      </div>
      <div className="absolute z-10 top-1/3 h-72 flex flex-col items-center justify-around">
        <Typography variant="h2" fontWeight={900}>
          Hey, I&apos;m Takuya Nemoto
        </Typography>
        <Typography variant="h5" fontWeight={400}>
          A full stack developer who loves to code and learn new things.
          <br />
          Looking for a new opportunity to contribute to other projects.
        </Typography>
        <a href="#projects">
          <Button
            className="bg-blue-600 hover:bg-blue-500"
            size="large"
            variant="contained"
          >
            Projects
          </Button>
        </a>
      </div>
    </div>
  );
};

export default Profile;
