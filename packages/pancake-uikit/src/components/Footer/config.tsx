import { Language } from "../LangSelector/types";
import { FooterLinkType } from "./types";

export const footerLinks: FooterLinkType[] = [
  {
    label: "About",
    items: [
      {
        label: "Contact",
        href: "https://t.me/tooofficial2",
      },
      {
        label: "Blog",
        href: "https://tootoken.vip/",
      },
      {
        label: "Community",
        href: "https://t.me/tooofficial2",
      },
      {
        label: "TOO",
        href: "https://docs.tooswap.io/tokenomics/too",
      },
      {
        label: "—",
      },
      {
        label: "Online Store",
        href: "https://tooswap.io/",
        isHighlighted: true,
      },
    ],
  },
  {
    label: "Help",
    items: [
      {
        label: "Customer",
        href: "https://t.me/tooofficial2",
      },
      {
        label: "Troubleshooting",
        href: "https://t.me/tooofficial2",
      },
      {
        label: "Guides",
        href: "https://t.me/tooofficial2",
      },
    ],
  },
  {
    label: "Developers",
    items: [
      {
        label: "Github",
        href: "https://github.com/too-token/too-frontend",
      },
      {
        label: "Documentation",
        href: "https://docs.tooswap.io",
      },
      {
        label: "Bug Bounty",
        href: "https://t.me/tooofficial2",
      },
      {
        label: "Audits",
        href: "https://t.me/tooofficial2",
      },
      {
        label: "Careers",
        href: "https://t.me/tooofficial2",
      },
    ],
  },
];

export const socials = [
  {
    label: "Twitter",
    icon: "Twitter",
    href: "https://twitter.com/too_token",
  },
  {
    label: "Telegram",
    icon: "Telegram",
    items: [
      {
        label: "English",
        href: "https://t.me/TooOfficialEN",
      },
      {
        label: "Bahasa Indonesia",
        href: "https://t.me/TooOfficialEN",
      },
      {
        label: "中文",
        href: "https://t.me/tooofficial2",
      },
      {
        label: "Tiếng Việt",
        href: "https://t.me/TooOfficialEN",
      },
      {
        label: "Italiano",
        href: "https://t.me/TooOfficialEN",
      },
      {
        label: "русский",
        href: "https://t.me/TooOfficialEN",
      },
      {
        label: "Türkiye",
        href: "https://t.me/TooOfficialEN",
      },
      {
        label: "Português",
        href: "https://t.me/TooOfficialEN",
      },
      {
        label: "Español",
        href: "https://t.me/TooOfficialEN",
      },
      {
        label: "日本語",
        href: "https://t.me/TooOfficialEN",
      },
      {
        label: "Français",
        href: "https://t.me/TooOfficialEN",
      },
      {
        label: "Announcements",
        href: "https://t.me/TooOfficialEN",
      },
      {
        label: "Whale Alert",
        href: "https://t.me/TooOfficialEN",
      },
    ],
  },
  {
    label: "Reddit",
    icon: "Reddit",
    href: "https://t.me/TooOfficialEN",
  },
  {
    label: "Instagram",
    icon: "Instagram",
    href: "https://t.me/TooOfficialEN",
  },
  {
    label: "Github",
    icon: "Github",
    href: "https://github.com/too-token/too-frontend",
  },
];

export const langs: Language[] = [...Array(20)].map((_, i) => ({
  code: `en${i}`,
  language: `English${i}`,
  locale: `Locale${i}`,
}));
