import { Typography } from "@material-tailwind/react";

const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="mt-10 px-8 pt-20">
      <div className="container mx-auto">
        <div className="mt-16 flex items-center justify-center border-t border-gray-200 py-6">
          <Typography className="text-center font-normal !text-gray-700">
            &copy; {CURRENT_YEAR} Sarmad Allawi. All rights reserved.
          </Typography>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
