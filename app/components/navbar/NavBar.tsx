import { Redressed } from "next/font/google";
import Container from "../Container";
import UserMenu from "./UserMenu";
import { SafeUser } from "@/types";
import Image from "next/image";
import Link from "next/link";

interface NavBarProps {
  currentUser: SafeUser | null;
}

const redressed = Redressed({ subsets: ["latin"], weight: ["400"] });

const NavBar: React.FC<NavBarProps> = ({ currentUser }) => {
  return (
    <div
      className="
    sticky
    w-full
    bg-slate-200
    z-30
    shadow-sm
    top-0
    "
    >
      <div className="py-4 border-b-[1px]">
        <Container>
          <div
            className="
          flex
          flex-row
          items-center
          justify-between
          gap-3
          md:gap-0
          "
          >
            <Link href="/">
              <Image
                src="/miconcar.png"
                alt="logo"
                width={200}
                height={50}
                className="cursor-pointer"
              />
            </Link>
            <div className="flex items-center gap-8 md:gap-12">
              <Image
                src="/realsystem.png"
                alt="logo"
                width={200}
                height={50}
                className="cursor-pointer"
              />
              <UserMenu currentUser={currentUser} />
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default NavBar;
