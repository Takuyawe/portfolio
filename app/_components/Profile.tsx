import { Typography, Button } from "@mui/material";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useMediaQuery } from "react-responsive";

const Profile = () => {
  const t = useTranslations("Profile");

  const isDesktopScreen = useMediaQuery({
    query: "(min-width: 1024px)",
  });

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
        <Typography className="text-4xl lg:text-6xl" fontWeight={900}>
          {t("title")}
        </Typography>
        <Typography className="text-xl lg:text-3xl" fontWeight={400}>
          {t.rich("description", {
            br: () => <br />,
          })}
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
