import React from "react";
import {
  Navbar as MTNavbar,
  Collapse,
  Button,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import {
  XMarkIcon,
  Bars3Icon,
} from "@heroicons/react/24/solid";

const NAV_MENU = [
  {
    name: "Home",
    href: "#home",
    icon: "fa-solid fa-house",
  },
  {
    name: "Skills",
    href: "#skills",
    icon: "fa-solid fa-code",
  },
  {
    name: "Projects",
    href: "#projects",
    icon: "fa-solid fa-folder-open",
  },
];

interface NavItemProps {
  children: React.ReactNode;
  href?: string;
  onNavClick?: () => void;
}

function NavItem({ children, href, onNavClick }: NavItemProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (href === "#home") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    if (onNavClick) {
      onNavClick();
    }
  };

  return (
    <li>
      <Typography
        as="a"
        href={href || "#"}
        onClick={handleClick}
        variant="paragraph"
        color="gray"
        className="flex items-center gap-2 font-medium text-gray-900 hover:text-gray-700 transition-colors"
      >
        {children}
      </Typography>
    </li>
  );
}

export function Navbar() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen((cur) => !cur);
  const handleNavClick = () => setOpen(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false)
    );
  }, []);

  return (
    <MTNavbar shadow={false} fullWidth className="border-0 sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
        <Typography color="blue-gray" className="text-lg font-bold">
        Sarmad Designs
        </Typography>
        <ul className="ml-10 hidden items-center gap-8 lg:flex">
          {NAV_MENU.map(({ name, icon, href }) => (
            <NavItem key={name} href={href}>
              <i className={`${icon} text-base`} />
              {name}
            </NavItem>
          ))}
        </ul>
        <div className="hidden items-center gap-2 lg:flex">
          <a href="#contact">
            <Button color="gray" className="flex items-center gap-2">
              <i className="fa-solid fa-envelope text-sm" />
              Contact Me
            </Button>
          </a>
        </div>
        <IconButton
          variant="text"
          color="gray"
          onClick={handleOpen}
          className="ml-auto inline-block lg:hidden"
        >
          {open ? (
            <XMarkIcon strokeWidth={2} className="h-6 w-6" />
          ) : (
            <Bars3Icon strokeWidth={2} className="h-6 w-6" />
          )}
        </IconButton>
      </div>
      <Collapse open={open}>
        <div className="container mx-auto mt-3 border-t border-gray-200 px-2 pt-4">
          <ul className="flex flex-col gap-4">
            {NAV_MENU.map(({ name, icon, href }) => (
              <NavItem key={name} href={href} onNavClick={handleNavClick}>
                <i className={`${icon} text-base`} />
                {name}
              </NavItem>
            ))}
          </ul>
          <div className="mt-6 mb-4 flex items-center gap-2">
            <a href="#contact" className="w-full" onClick={handleNavClick}>
              <Button color="gray" className="w-full flex items-center justify-center gap-2">
                <i className="fa-solid fa-envelope text-sm" />
                Contact Me
              </Button>
            </a>
          </div>
        </div>
      </Collapse>
    </MTNavbar>
  );
}

export default Navbar;
