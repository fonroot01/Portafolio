import { routesConfig } from "@/config/routes";
import { MainNav } from "./common/main-nav";

export default function Navbar() {
  return (
    <nav className="w-full flex justify-center py-4">
      <MainNav items={routesConfig.mainNav} />
    </nav>
  );
}