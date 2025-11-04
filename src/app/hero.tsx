"use client";

import Image from "next/image";
import { Input, Button, Typography } from "@material-tailwind/react";
import { getImagePrefix } from "../../utils/utils";

function Hero() {
  return (
    <header className="bg-white p-8">
      <div className="container mx-auto grid h-full gap-10 min-h-[60vh] w-full grid-cols-1 items-center lg:grid-cols-2">
        <div className="row-start-2 lg:row-auto">
          <Typography
            variant="h1"
            color="blue-gray"
            className="mb-4 lg:text-5xl !leading-tight text-3xl"
          >
            Hi, I&apos;m Sarmad Allawi
          </Typography>
          <Typography
            variant="lead"
            className="mb-4 !text-gray-500 md:pr-16 xl:pr-28"
          >
            A passionate web developer based in Baghdad, Iraq. Here,
            you&apos;ll get a glimpse of my work in the world of web
            development and design, where creativity meets functionality.
          </Typography>
          <div className="grid">
            <Typography
              variant="small"
              className="mb-2 text-gray-900 font-medium"
            >
              Your email
            </Typography>
            <div className="mb-2 flex w-full flex-col gap-4 md:w-10/12 md:flex-row">
              {/* @ts-ignore */}
              <Input color="gray" label="Enter your email" size="lg" />
              <Button color="gray" className="w-full px-4 md:w-[12rem]">
                CONTACT ME
              </Button>
            </div>
          </div>
          <Typography variant="small" className="font-normal !text-gray-500">
            or{" "}
            <a
              href="https://wa.me/9647822522014"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-medium text-green-600 hover:text-green-700 underline transition-colors"
            >
              <i className="fa-brands fa-whatsapp text-base" />
              message me on WhatsApp!
            </a>
          </Typography>
        </div>
        <Image
          width={1024}
          height={1024}
          alt="team work"
          src={`${getImagePrefix()}image/webtech_placeholder.png`}
          className="h-[36rem] w-full rounded-xl object-cover"
        />
      </div>
    </header>
  );
}

export default Hero;
