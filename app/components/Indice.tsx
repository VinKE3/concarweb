"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

interface IndiceProps {
  id: string;
  title: string;
  description: string;
  href: string;
  subtittle?: {
    id: string;
    title: string;
    description: string;
    href: string;
    subtitle2?: {
      id: string;
      title: string;
      description: string;
      href: string;
      subtitle3?: {
        id: string;
        title: string;
        description: string;
        href: string;
      }[];
    }[];
  }[];
}

const Indice = ({ id, title, description, href, subtittle }: IndiceProps) => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [isContentLarge, setIsContentLarge] = useState(false);
  useEffect(() => {
    if (sectionRef.current) {
      if (sectionRef.current.scrollHeight > window.innerHeight) {
        setIsContentLarge(true);
      } else {
        setIsContentLarge(false);
      }
    }
  }, [sectionRef]);
  return (
    <div className="">
      <section
        ref={sectionRef}
        className={`mb-1 ${
          isContentLarge ? "block overflow-auto h-screen" : ""
        }`}
      >
        <ul className="divide-y divide-gray-300 bg-gray-300 px-4 border">
          <li className="py-2">
            <Link
              href={href}
              className="flex flex-col space-x-4 rounded-lg cursor-pointer hover:bg-gray-400 p-1"
            >
              <h1 className="text-md font-medium space-x-2">
                <span>{id}</span>
                <span className="text-sky-700 font-bold">{title}</span>
              </h1>
              <p>{description}</p>
            </Link>
            {subtittle?.map(({ id, title, description, href, subtitle2 }) => {
              return (
                <ul
                  key={id}
                  className="divide-y divide-gray-300 bg-gray-200 rounded-md px-4 py-2 mt-2"
                >
                  <li className="py-2">
                    <Link
                      href={href}
                      className="flex flex-col space-x-4 p-1 rounded-lg cursor-pointer hover:bg-gray-300 md:pl-5"
                    >
                      <h1 className="text-md font-medium space-x-2">
                        <span>{id}</span>
                        <span className="text-sky-700 font-bold">{title}</span>
                      </h1>
                      <p>{description}</p>
                    </Link>
                    {subtitle2?.map(
                      ({ id, title, description, href, subtitle3 }) => {
                        return (
                          <ul
                            key={id}
                            className="divide-y divide-gray-300 bg-gray-100 rounded-md px-4 py-2 mt-2"
                          >
                            <li key={id} className="py-2">
                              <Link
                                href={href}
                                className="flex flex-col space-x-4 p-1 rounded-lg cursor-pointer hover:bg-gray-200 md:pl-5"
                              >
                                <h1 className="text-md font-medium space-x-2">
                                  <span>{id}</span>
                                  <span className="text-sky-700 font-bold">
                                    {title}
                                  </span>
                                </h1>
                                <p>{description}</p>
                              </Link>
                              {subtitle3?.map(
                                ({ id, title, description, href }) => {
                                  return (
                                    <ul
                                      key={id}
                                      className="divide-y divide-gray-300 bg-gray-50 rounded-md px-4 py-2 mt-2"
                                    >
                                      <li key={id} className="py-2">
                                        <Link
                                          href={href}
                                          className="flex flex-col space-x-4 p-1 rounded-lg cursor-pointer hover:bg-gray-100 md:pl-5"
                                        >
                                          <h1 className="text-md font-medium space-x-2">
                                            <span>{id}</span>
                                            <span className="text-sky-700 font-bold">
                                              {title}
                                            </span>
                                          </h1>
                                          <p>{description}</p>
                                        </Link>
                                      </li>
                                    </ul>
                                  );
                                }
                              )}
                            </li>
                          </ul>
                        );
                      }
                    )}
                  </li>
                </ul>
              );
            })}
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Indice;
