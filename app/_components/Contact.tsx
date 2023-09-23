"use client";

import { Typography, Divider, Button, Box, TextField } from "@mui/material";
import Image from "next/image";
import { useRef } from "react";
import { useTranslations } from "next-intl";
import { useMediaQuery } from "react-responsive";

const Contact = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  const t = useTranslations("Contact");

  const isDesktopScreen = useMediaQuery({
    query: "(min-width: 1024px)",
  });

  const handleSubmit = () => {};

  return (
    <div className="relative h-[70rem] w-full overflow-hidden flex justify-center">
      <div className="absolute inset-0">
        <Image
          src="/background-white.jpg"
          alt="Profile"
          fill
          objectFit="cover"
        />
      </div>
      <div className="absolute z-10 pt-12 h-64 flex flex-col items-center justify-around">
        <Typography className="text-3xl lg:text-5xl" fontWeight={500}>
          CONTACT
        </Typography>
        <Divider flexItem className="self-center" />
        <Typography
          className="w-3/4 lg:w-full text-center text-sm lg:text-xl"
          fontWeight={300}
        >
          {t.rich("subtitle", {
            br: () => <br />,
          })}
        </Typography>
      </div>
      <div className="absolute top-[30%] w-96 h-[40rem] lg:w-[40rem] bg-white rounded-md shadow-md">
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <div className="flex flex-col mx-8">
            <Typography className="mt-4 mb-2 self-start text-xs lg:text-base">
              {t("name")}
            </Typography>
            <TextField
              className="mt-0"
              inputRef={nameRef}
              margin="normal"
              required
              fullWidth
              id="name"
              label={t("placeholder1")}
              name="name"
              autoComplete="name"
            />
            <Typography className="mt-4 mb-2 self-start text-xs lg:text-base">
              {t("email")}
            </Typography>
            <TextField
              className="mt-0"
              inputRef={emailRef}
              margin="normal"
              required
              fullWidth
              id="email"
              label={t("placeholder2")}
              name="email"
              autoComplete="email"
            />
            <Typography className="mt-4 mb-2 self-start text-xs lg:text-base">
              {t("message")}
            </Typography>
            <TextField
              className="mt-0"
              inputRef={messageRef}
              margin="normal"
              required
              fullWidth
              multiline
              rows={10}
              id="message"
              label={t("placeholder3")}
              name="message"
              autoComplete="message"
            />
            <Button
              className="self-end mt-4 w-24 bg-blue-600 hover:bg-blue-500"
              type="submit"
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Submit
            </Button>
          </div>
        </Box>
      </div>
    </div>
  );
};

export default Contact;
