import { Icons } from "@/components/common/icons";

interface SocialInterface {
  name: string;
  username: string;
  icon: any;
  link: string;
}

export const SocialLinks: SocialInterface[] = [
  {
    name: "Github",
    username: "fonroot01",
    icon: Icons.gitHub,
    link: "https://github.com/fonroot01",
  },
  {
    name: "LinkedIn",
    username: "Alfonso Ángel Mosquera A.",
    icon: Icons.linkedin,
    link: "https://www.linkedin.com/in/alfonso-%C3%A1ngel-mosquera-a-4a919b341/",
  },
  {
    name: "Gmail",
    username: "alfomosque22",
    icon: Icons.gmail,
    link: "alfomosque22@gmail.com",
  },
];
