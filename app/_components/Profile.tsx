import { Typography, Button } from "@mui/material";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import { useTranslations } from "next-intl";

const Profile = () => {
  const t = useTranslations("Profile");

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
          {t("title")}
        </Typography>
        <Typography variant="h5" fontWeight={400}>
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
