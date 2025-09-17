import { routesConfig } from "@/config/routes";
import FloatingNav from "./common/floating-nav";

export default function Navbar() {
  return (
    <nav className="w-full flex justify-center py-4">
      <FloatingNav />
    </nav>
  );
}