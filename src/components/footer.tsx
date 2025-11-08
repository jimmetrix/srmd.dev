import { Typography } from "@material-tailwind/react";

const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="mt-10 px-8 pt-20">
      <div className="container mx-auto">
        <div className="mt-16 flex items-center justify-center gap-4 border-t border-gray-200 py-6">
          <Typography className="text-center font-normal !text-gray-700">
            &copy; {CURRENT_YEAR} Sarmad Allawi. All rights reserved.
          </Typography>
          <a
            href="https://github.com/jimmetrix"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-gray-900 transition-colors"
            aria-label="GitHub"
          >
            <i className="fa-brands fa-github text-xl" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
