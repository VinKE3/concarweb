"use client";
import { ArrowLeft, ArrowRight, Book, List } from "lucide-react";
import Link from "next/link";

interface HeaderProps {
  title: string;
  href: string;
  subtitle?: string;
  text?: string;
  center?: boolean;
  className?: string;
}

const Header: React.FC<HeaderProps> = ({
  title,
  href,
  subtitle,
  text,
  center,
  className,
}) => {
  return (
    <div
      className={`{
      ${center ? "text-center" : ""} bg-gray-200 p-4 mt-2 ${className}
    }`}
    >
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div>
          <Link href={href}>
            <h1 className="text-2xl font-bold text-sky-700">{title}</h1>
          </Link>
          <h2 className="font-light text-gray-700 mt-2">{subtitle}</h2>
          <p className="font-light text-gray-700 mt-2">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
