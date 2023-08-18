import { FC, LegacyRef, Ref, forwardRef } from "react";
import { CaretDownIcon } from "@radix-ui/react-icons";
import { Text, Heading, Box, Flex } from "@radix-ui/themes";
import { ThemeSwitcher } from "../ThemeSwitcher";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import Link from "next/link";
import classNames from "classnames";
import F1Logo from "./f1";
import GithubIcon from "./Github";
import "../../app/styles.css";
import { Url } from "next/dist/shared/lib/router/router";

const Navbar: FC = () => {
  return (
    <NavigationMenu.Root className="NavigationMenuRoot w-[100%] [&>div]:flex-1 flex items-center justify-between my-6 px-6">
      <NavigationMenu.Item className="flex flex-1 text-red-500 font-semibold list-none">
        <Link className="flex items-center" href="/">
          <F1Logo />
          <Text>Stats</Text>
        </Link>
      </NavigationMenu.Item>
      <NavigationMenu.List className="NavigationMenuList">
        <NavigationMenu.Item className="px-2">
          <NavigationMenu.Trigger className="NavigationMenuTrigger dark:text-white hover:cursor-pointer hover:bg-mauve7 dark:hover:bg-red11">
            General <CaretDownIcon className="CaretDown" aria-hidden />
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className="NavigationMenuContent">
            <ul className="List one">
              <li className="row-span-3">
                <NavigationMenu.Link asChild>
                  <Link className="CalloutF1" href="/">
                    <F1Logo />
                    <Heading className="CalloutHeading">F1 Statistics</Heading>
                    <Text className="dark:text-white">
                      Statistics, analysis and conclusions for Formula 1.
                    </Text>
                  </Link>
                </NavigationMenu.Link>
              </li>

              <ListItem href="/drivers" title="Drivers">
                Drivers points, race wins, championship statistics etc.
              </ListItem>
              <ListItem href="/constructors" title="Constructors">
                Team championship titles, all time drivers list, points scored
                in particular season etc.
              </ListItem>
              <ListItem href="/" title="Races">
                Races stats including most winning drivers, biggest points
                scorers and most driven races.
              </ListItem>
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        <NavigationMenu.Item className="px-2">
          <NavigationMenu.Trigger className="NavigationMenuTrigger dark:text-white hover:cursor-pointer hover:bg-maube7 dark:hover:bg-red11">
            Statistics <CaretDownIcon className="CaretDown" aria-hidden />
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className="NavigationMenuContent">
            <ul className="List two">
              <ListItem href="/">To be added</ListItem>
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        <NavigationMenu.Item className="px-2">
          <NavigationMenu.Trigger className="NavigationMenuTrigger dark:text-white hover:cursor-pointer hover:bg-mauve7 dark:hover:bg-red11">
            Github <CaretDownIcon className="CaretDown" aria-hidden />
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className="NavigationMenuContent">
            <ul className="List three">
              <Box>
                <ListItem
                  title="Frontend"
                  target="_blank"
                  href="https://github.com/BartoszBrodowski/f1-statistics-frontend"
                  className="whitespace-pre-line"
                >
                  <Flex direction="column" gap="1">
                    <Text size="3" weight="bold">
                      NextJS, TailwindCSS, Typescript, RadixUI.
                    </Text>
                    <Text size="3" weight="regular">
                      Frontend repository to present stats in an approachable
                      way.
                    </Text>
                  </Flex>
                </ListItem>
                <ListItem
                  title="Backend"
                  target="_blank"
                  href="https://github.com/BartoszBrodowski/f1-statistics-backend"
                >
                  <Flex direction="column" gap="1">
                    <Text size="3" weight="bold">
                      Python, PostgreSQL, Flask, SQLAlchemy, Docker
                    </Text>
                    <Text size="3" weight="regular">
                      Backend repository consisting of a scraper, db injector
                      class and API.
                    </Text>
                  </Flex>
                </ListItem>
              </Box>
              <li>
                <NavigationMenu.Link asChild>
                  <Link
                    className="CalloutGithub bg-gradient-to-br from-white to-slate-900"
                    target="_blank"
                    href="https://github.com/BartoszBrodowski"
                  >
                    <GithubIcon />
                    <Heading className="CalloutHeading">Github</Heading>
                    <Text as="p" className="text-mauve4 text-sm leading-5">
                      Checkout my Github for more projects!
                    </Text>
                  </Link>
                </NavigationMenu.Link>
              </li>
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        <NavigationMenu.Indicator className="NavigationMenuIndicator">
          <Box className="Arrow dark:bg-secondary-black" />
        </NavigationMenu.Indicator>
      </NavigationMenu.List>

      <Box className="ViewportPosition">
        <NavigationMenu.Viewport className="NavigationMenuViewport dark:shadow-dark dark:bg-secondary-black" />
      </Box>
      <Box className="flex flex-1 justify-end">
        <ThemeSwitcher />
      </Box>
    </NavigationMenu.Root>
  );
};

interface ListItemProps {
  title: string;
  className?: string;
  children?: React.ReactNode;
  href: Url;
  [key: string]: any;
}

const ListItem = forwardRef(
  (
    { className, children, title, href, ...props }: ListItemProps,
    forwardedRef: Ref<HTMLAnchorElement> | undefined
  ) => (
    <li>
      <NavigationMenu.Link asChild>
        <Link
          className={classNames(
            "ListItemLink dark:hover:bg-[#1c1c1c]",
            className
          )}
          {...props}
          ref={forwardedRef}
          href={href}
        >
          <Heading size="4" className="ListItemHeading dark:text-mauve8">
            {title}
          </Heading>
          <Text as="p" className="ListItemText">
            {children}
          </Text>
        </Link>
      </NavigationMenu.Link>
    </li>
  )
);

export default Navbar;
