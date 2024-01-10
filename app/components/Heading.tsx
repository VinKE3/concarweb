interface HeadingProps {
  title: string;
  subtitle?: string;
  center?: boolean;
  className?: string;
}

const Heading: React.FC<HeadingProps> = ({
  title,
  subtitle,
  center,
  className,
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
    </div>
  );
};

export default Heading;
