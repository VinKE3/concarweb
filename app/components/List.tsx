import Link from "next/link";
import React from "react";

interface ListProps {
  id?: number;
  title?: string;
  href?: string;
  items: { id: number; title: string; href: string }[];
}

const List = ({ id, title, href = "", items }: ListProps) => {
  return (
    <>
      <div className="py-2">
        <Link id={id ? id.toString() : undefined} href={href}>
          <h1 className="text-sky-600 hover:text-sky-700 font-bold mb-2">
            {title}
          </h1>
        </Link>
        <div>
          {items.map(({ id, title, href }) => (
            <Link className="flex gap-2" key={id} href={href}>
              <span>{id}.</span>
              <h1 className="text-sky-600 hover:text-sky-700">{title}</h1>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default List;
