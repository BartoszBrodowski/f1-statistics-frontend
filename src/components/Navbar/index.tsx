import React from "react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import classNames from "classnames";
import { CaretDownIcon } from "@radix-ui/react-icons";
import "../../app/styles.css";
import F1Logo from "./f1";
import Link from "next/link";
import GithubIcon from "./Github";

const Navbar = () => {
  return (
    <NavigationMenu.Root className="NavigationMenuRoot w-[100%] flex items-center">
      <Link
        className="flex items-center text-red-500 font-semibold absolute left-6"
        href="/"
      >
        <F1Logo /> Stats
      </Link>
      <NavigationMenu.List className="NavigationMenuList">
        <NavigationMenu.Item className="px-2">
          <NavigationMenu.Trigger className="NavigationMenuTrigger">
            General <CaretDownIcon className="CaretDown" aria-hidden />
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className="NavigationMenuContent">
            <ul className="List one">
              <li style={{ gridRow: "span 3" }}>
                <NavigationMenu.Link asChild>
                  <a className="CalloutF1" href="/">
                    <F1Logo />
                    <div className="CalloutHeading">F1 Statistics</div>
                    <p className="CalloutText">
                      Statistics, analysis and conclusions for Formula 1.
                    </p>
                  </a>
                </NavigationMenu.Link>
              </li>

              <ListItem href="" title="Drivers">
                Drivers points, race wins, championship statistics etc.
              </ListItem>
              <ListItem href="" title="Constructors">
                Team championship titles, all time drivers list, points scored
                in particular season etc.
              </ListItem>
              <ListItem href="" title="Races">
                Races stats including most winning drivers, biggest points
                scorers and most driven races.
              </ListItem>
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        <NavigationMenu.Item className="px-2">
          <NavigationMenu.Trigger className="NavigationMenuTrigger">
            Statistics <CaretDownIcon className="CaretDown" aria-hidden />
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className="NavigationMenuContent">
            <ul className="List two">
              <ListItem>To be added</ListItem>
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        <NavigationMenu.Item className="px-2">
          <NavigationMenu.Trigger className="NavigationMenuTrigger">
            Github <CaretDownIcon className="CaretDown" aria-hidden />
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className="NavigationMenuContent">
            <ul className="List three">
              <div>
                <ListItem
                  title="Frontend"
                  target="_blank"
                  href="https://github.com/BartoszBrodowski/f1-statistics-frontend"
                  className="whitespace-pre-line"
                >
                  <p className="flex flex-col gap-2">
                    <span className="font-semibold">
                      NextJS, TailwindCSS, Typescript, RadixUI.
                    </span>
                    Frontend repository to present stats in an approachable way.
                  </p>
                </ListItem>
                <ListItem
                  title="Backend"
                  target="_blank"
                  href="https://github.com/BartoszBrodowski/f1-statistics-backend"
                >
                  <p className="flex flex-col gap-2">
                    <span className="font-semibold">
                      Python, PostgreSQL, Flask, SQLAlchemy, Docker
                    </span>
                    Backend repository consisting of a scraper, db injector
                    class and API.
                  </p>
                </ListItem>
              </div>
              <li>
                <NavigationMenu.Link asChild>
                  <a
                    className="CalloutGithub bg-gradient-to-br from-white to-slate-900"
                    target="_blank"
                    href="https://github.com/BartoszBrodowski"
                  >
                    <GithubIcon />
                    <div className="CalloutHeading">Github</div>
                    <p className="CalloutText">
                      Checkout my Github for more projects!
                    </p>
                  </a>
                </NavigationMenu.Link>
              </li>
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        <NavigationMenu.Indicator className="NavigationMenuIndicator">
          <div className="Arrow" />
        </NavigationMenu.Indicator>
      </NavigationMenu.List>

      <div className="ViewportPosition">
        <NavigationMenu.Viewport className="NavigationMenuViewport" />
      </div>
    </NavigationMenu.Root>
  );
};

const ListItem = React.forwardRef(
  ({ className, children, title, ...props }: any, forwardedRef) => (
    <li>
      <NavigationMenu.Link asChild>
        <a
          className={classNames("ListItemLink", className)}
          {...props}
          ref={forwardedRef}
        >
          <div className="ListItemHeading">{title}</div>
          <p className="ListItemText">{children}</p>
        </a>
      </NavigationMenu.Link>
    </li>
  )
);

export default Navbar;