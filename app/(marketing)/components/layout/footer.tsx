import { Icons } from "@/components/icons";
import { siteConfig } from "@/lib/config";
import { InstagramLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";

interface Icon {
  icon: React.ReactNode;
  url: string;
}

const getSocialIcons = (): Icon[] => {
  const icons: Icon[] = [];

  if (siteConfig.links.twitter) {
    icons.push({ icon: <TwitterLogoIcon />, url: siteConfig.links.twitter });
  }
  if (siteConfig.links.instagram) {
    icons.push({
      icon: <InstagramLogoIcon />,
      url: siteConfig.links.instagram,
    });
  }
  if (siteConfig.links.github) {
    icons.push({
      icon: (
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.5 0C3.36 0 0 3.36 0 7.5C0 10.605 2.16 13.215 5.04 14.19C5.4 14.265 5.55 14.01 5.55 13.785C5.55 13.575 5.535 12.975 5.535 12.36C3.6 12.75 3.15 11.79 3 11.25C2.85 10.89 2.505 10.23 2.25 9.99C2.07 9.84 1.65 9.33 2.25 9.315C2.82 9.3 3.27 9.84 3.45 10.05C4.05 10.95 5.1 10.68 5.58 10.5C5.67 9.975 5.88 9.615 6.12 9.42C4.455 9.195 2.73 8.445 2.73 6.015C2.73 5.325 2.97 4.755 3.48 4.32C3.39 4.095 3.135 3.45 3.54 2.595C3.54 2.595 4.08 2.43 5.55 3.24C6.135 3.075 6.75 2.9925 7.365 2.9925C7.98 2.9925 8.595 3.075 9.18 3.24C10.65 2.415 11.19 2.595 11.19 2.595C11.595 3.45 11.34 4.095 11.25 4.32C11.76 4.755 12 5.325 12 6.015C12 8.46 10.26 9.195 8.595 9.42C8.88 9.66 9.135 10.125 9.21 10.74C9.495 10.98 10.05 11.475 9.21 12.36C9.21 13.14 9.195 13.755 9.195 13.785C9.195 14.01 9.345 14.28 9.705 14.19C12.585 13.215 14.745 10.605 14.745 7.5C14.745 3.36 11.385 0 7.245 0H7.5Z"
            fill="currentColor"
          />
        </svg>
      ),
      url: siteConfig.links.github,
    });
  }
  if (siteConfig.links.discord) {
    icons.push({
      icon: (
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.5 2.5C11.4 1.9 10.2 1.4 9 1.1L8.7 1.6C9.8 1.9 10.8 2.3 11.7 2.8C9.1 1.9 6.4 1.9 3.8 2.8C4.7 2.3 5.7 1.9 6.8 1.6L6.5 1.1C5.3 1.4 4.1 1.9 3 2.5C0.4 6.1 -0.2 9.5 0.1 12.9C1.5 13.8 2.8 14.4 4.1 14.9L4.5 14.4C3.6 13.9 2.8 13.3 2.1 12.6C2.3 12.5 2.5 12.4 2.7 12.3C3.4 12.7 4.1 13 4.8 13.2C4.3 13.4 3.8 13.5 3.3 13.7C4.1 14.1 4.9 14.4 5.7 14.6C7.8 15.1 9.9 15.1 12 14.6C12.8 14.4 13.6 14.1 14.4 13.7C13.9 13.5 13.4 13.4 12.9 13.2C13.6 13 14.3 12.7 15 12.3C15.2 12.4 15.4 12.5 15.6 12.6C14.9 13.3 14.1 13.9 13.2 14.4L13.6 14.9C14.9 14.4 16.2 13.8 17.6 12.9C18 9.5 17.3 6.1 14.7 2.5H12.5ZM5.5 10.5C4.5 10.5 3.7 9.7 3.7 8.7C3.7 7.7 4.5 6.9 5.5 6.9C6.5 6.9 7.3 7.7 7.3 8.7C7.3 9.7 6.5 10.5 5.5 10.5ZM9.5 10.5C8.5 10.5 7.7 9.7 7.7 8.7C7.7 7.7 8.5 6.9 9.5 6.9C10.5 6.9 11.3 7.7 11.3 8.7C11.3 9.7 10.5 10.5 9.5 10.5Z"
            fill="currentColor"
          />
        </svg>
      ),
      url: siteConfig.links.discord,
    });
  }

  return icons;
};

export function Footer() {
  const socialIcons = getSocialIcons();

  return (
    <footer className="footer">
      <div className="flex w-full flex-col px-7 py-10 md:flex-row md:items-center md:justify-between md:px-10">
        <div className="flex w-full items-center justify-between gap-x-3 lg:pl-10">
          {siteConfig.footerLinks.map((column, columnIndex) => (
            <ul key={columnIndex} className="flex flex-col gap-y-2">
              <li className="text-[15px]/normal font-semibold text-neutral-900 dark:text-white mb-1">
                {column.title}
              </li>
              {column.links.map((link) => (
                <a href={link.url} key={link.id}>
                  <li className="text-[15px]/normal font-medium text-neutral-400 transition-all duration-100 ease-linear hover:text-neutral-900 hover:underline hover:underline-offset-4 dark:font-medium dark:text-neutral-400 hover:dark:text-neutral-100">
                    {link.title}
                  </li>
                </a>
              ))}
            </ul>
          ))}
        </div>
      </div>
      <div className="flex flex-col justify-between gap-y-5 border-t border-neutral-500/20 bg-neutral-100 px-7 py-10 md:flex-row md:items-center md:px-10 dark:border-neutral-700/50 dark:bg-neutral-900">
        <div className="flex flex-col items-start justify-start gap-y-3.5">
          <a href={siteConfig.url} className="flex items-center gap-x-2.5">
            <div className="h-10 w-10 flex items-center justify-center">
              <Icons.logo className="h-10 w-10" />
            </div>
            <h1 className="text-xl font-bold text-neutral-900 dark:text-white">
              {siteConfig.name}
            </h1>
          </a>
          <p className="text-neutral-900 dark:text-white">
            {siteConfig.description}
          </p>
        </div>

        <div className="flex flex-col gap-y-5">
          <div className="flex items-center gap-x-4">
            {socialIcons.map((icon, index) => (
              <a
                key={index}
                href={icon.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-6 w-6 items-center justify-center text-neutral-400 transition-all duration-100 ease-linear hover:text-neutral-900 hover:underline hover:underline-offset-4 dark:font-medium dark:text-neutral-500 hover:dark:text-neutral-100"
              >
                {icon.icon}
              </a>
            ))}
          </div>
          <p className="text-sm text-neutral-900 dark:text-white">
            Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
