import Image from "next/image";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";

interface ProjectCardProps {
  img: string;
  title: string;
  desc: string;
  url?: string;
}

export function ProjectCard({ img, title, desc, url }: ProjectCardProps) {
  return (
    <Card color="transparent" shadow={false}>
      {url ? (
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="block cursor-pointer transition-transform hover:scale-105"
        >
          <CardHeader floated={false} className="mx-0 mt-0 mb-6 h-48 overflow-hidden rounded-lg">
            <Image
              src={img}
              alt={title}
              width={768}
              height={768}
              className="h-full w-full object-contain p-4"
            />
          </CardHeader>
        </a>
        ) : (
          <CardHeader floated={false} className="mx-0 mt-0 mb-6 h-48 overflow-hidden rounded-lg">
            <Image
              src={img}
              alt={title}
              width={768}
              height={768}
              className="h-full w-full object-contain p-4"
            />
          </CardHeader>
        )}
      
      <CardBody className="p-0 text-center">
        <Typography variant="h5" className="mb-2 text-blue-gray-900">
          {title}
        </Typography>
        <Typography className="mb-6 font-normal !text-gray-500">
          {desc}
        </Typography>
      </CardBody>
    </Card>
  );
}

export default ProjectCard;
