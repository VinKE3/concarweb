"use client";

import Link from "next/link";
import { use, useCallback, useEffect, useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import MenuItem from "./MenuItem";
import Avatar from "./Avatar";
import BackDrop from "../BackDrop";
import { signOut } from "next-auth/react";
import { SafeUser } from "@/types";
import { useRouter } from "next/navigation";

interface UserMenuProps {
  currentUser: SafeUser | null;
}

const UserMenu: React.FC<UserMenuProps> = ({ currentUser }) => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const toggleOpen = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  useEffect(() => {
    if (!currentUser) router.push("/");
  }, [currentUser]);

  return (
    <>
      <div className="relative z-30">
        <div
          onClick={toggleOpen}
          className="
        p-2
        border-[1px]
        border-slate-400
        flex
        flex-row
        items-center
        gap-1
        rounded-full
        cursor-pointer
        hover:shadow-md
        transition
        text-slate-700
        "
        >
          <Avatar src={currentUser?.image} />
          <span>{currentUser?.name}</span>
          <AiFillCaretDown />
        </div>

        {isOpen && (
          <div
            className="
        absolute
        rounded-md
        shadow-md
        w-[170px]
        bg-white
        overflow-hidden
        right-0
        top-12
        text-sm
        flex
        flex-col
        cursor-pointer
        "
          >
            {currentUser ? (
              <div>
                {/* {currentUser.role === "ADMIN" && (
                  <Link href="/admin">
                    <MenuItem onClick={toggleOpen}>Admin Dashboard</MenuItem>
                  </Link>
                )} */}
                <hr />
                <MenuItem
                  onClick={async () => {
                    toggleOpen();
                    await signOut();
                  }}
                >
                  Salir
                </MenuItem>
              </div>
            ) : (
              <div>
                <Link href="/login">
                  <MenuItem onClick={toggleOpen}>Iniciar Sesión</MenuItem>
                </Link>
                <Link href="/register">
                  <MenuItem onClick={toggleOpen}>Registrar</MenuItem>
                </Link>
              </div>
            )}
          </div>
        )}
      </div>
      {isOpen ? <BackDrop onClick={toggleOpen} /> : null}
    </>
  );
};

export default UserMenu;
