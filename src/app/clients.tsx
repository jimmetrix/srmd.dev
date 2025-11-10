"use client";

import Image from "next/image";
import { Typography } from "@material-tailwind/react";

const CLIENTS = [
  {
    name: "alghassaq",
    logo: "/logos/logo-alghassaq.svg",
  },
  {
    name: "unitedspa",
    logo: "/logos/logo-unitedspa.png",
  },
];

export function Clients() {
  return (
    <section id="clients" className="px-8 py-16">
      <div className="container mx-auto text-center">
        <Typography variant="h6" color="blue-gray" className="mb-8">
          MY CLIENTS
        </Typography>
        <div className="flex flex-wrap items-center justify-center gap-6">
          {CLIENTS.map((client, key) => (
            <Image
              key={key}
              alt={client.name}
              width={768}
              height={768}
              className="w-40"
              src={client.logo}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Clients;
