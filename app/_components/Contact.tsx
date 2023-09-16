"use client";

import { Typography, Divider, Button, Box, TextField } from "@mui/material";
import Image from "next/image";
import { useRef } from "react";

const Contact = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

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
        <Typography variant="h3" fontWeight={500}>
          CONTACT
        </Typography>
        <Divider flexItem className="self-center" />
        <Typography variant="h6" fontWeight={300}>
          You can contact me by filling the contact form below.
          <br />
          Looking forward to your message!
        </Typography>
      </div>
      <div className="absolute top-[30%] h-[40rem] w-[40rem] bg-white rounded-md shadow-md">
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <div className="flex flex-col mx-8">
            <Typography className="mt-4 self-start" variant="subtitle1">
              Name
            </Typography>
            <TextField
              className="mt-0"
              inputRef={nameRef}
              margin="normal"
              required
              fullWidth
              id="name"
              label="Enter your name"
              name="name"
              autoComplete="name"
            />
            <Typography className="mt-4 self-start" variant="subtitle1">
              Email
            </Typography>
            <TextField
              className="mt-0"
              inputRef={emailRef}
              margin="normal"
              required
              fullWidth
              id="email"
              label="Enter your email"
              name="email"
              autoComplete="email"
            />
            <Typography className="mt-4 self-start" variant="subtitle1">
              Message
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
              label="Enter your message"
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
