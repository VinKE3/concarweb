import Link from "next/link";

interface HeadingProps {
  title: string;
  subtitle?: string;
  center?: boolean;
  className?: string;
  button?: boolean;
  buttonTitle?: string;
  buttonHref?: string;
}

const Heading: React.FC<HeadingProps> = ({
  title,
  subtitle,
  center,
  className,
  button,
  buttonTitle,
  buttonHref,
}) => {
  return (
    <div
      className={`{
      ${center ? "text-center" : ""}
      ${className}
    
    }`}
    >
      <h1 className="text-2xl font-bold text-sky-700">{title}</h1>
      <h2 className="font-light text-gray-700 mt-2">{subtitle}</h2>
      {button && (
        <Link href={buttonHref || ""}>
          <button className="bg-sky-600 hover:bg-sky-700 text-white px-4 py-2 mt-4 rounded-md">
            {buttonTitle}
          </button>
        </Link>
      )}
    </div>
  );
};

export default Heading;
