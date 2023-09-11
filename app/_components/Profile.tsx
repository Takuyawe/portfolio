import { Typography, Button } from "@mui/material";
import Image from "next/image";

const Profile = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden flex justify-center">
      <div className="absolute inset-0">
        <Image
        src="/background-profile.jpg"
        alt="Profile"
        fill
        objectFit="cover"
      />
      </div>
      <div className="absolute z-10 top-1/2 flex flex-col items-center">
        <Typography variant="h2" fontWeight={900}>
          Hey, I&apos;m Takuya Nemoto
        </Typography>
        <Typography variant="h5" fontWeight={400}>
          A Frontend focused Web Developer building the Frontend of Websites and
          Web Applications that leads to the success of the overall product
        </Typography>
        <Button variant="contained">Projects</Button>
      </div>
    </div>
  );
};

export default Profile;
