"use client";
import { ArrowDown, Book, List } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

interface AcordionData {
  id: string;
  title: string;
  description: {
    id: string;
    title: string;
    description: string;
    href: string;
  }[];
}

const Acordion = ({ id, title, description }: AcordionData) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section className="py-2">
      <div className="mx-auto space-y-4">
        <div className="transition-all duration-200 bg-white border border-gray-200 shadow-lg cursor-pointer hover:bg-gray-50">
          <button
            type="button"
            id={id}
            data-state={isOpen ? "open" : "closed"}
            onClick={toggleOpen}
            className="flex items-center justify-between w-full px-4 py-5 sm:p-6"
          >
            <div className="flex gap-2">
              <List className=" text-gray-600" />
              <span className="text-lg font-semibold text-sky-700">
                {title}
              </span>
            </div>
            <ArrowDown
              id="arrow1"
              className={`w-5 h-5 text-gray-400 transform ${
                isOpen ? "rotate-180" : ""
              }`}
            />
          </button>
          {isOpen && (
            <div id="answer1" className="px-4 pb-5 sm:px-6 sm:pb-6">
              {description.map((item) => (
                <div key={item.id} className="py-2 flex gap-2">
                  <Book className="text-gray-600 size-5" />
                  <Link
                    className="text-sm text-sky-500 hover:text-sky-700"
                    href={item.href}
                  >
                    {item.title}
                  </Link>
                  <span>{item.description}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Acordion;
