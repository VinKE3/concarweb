interface HeadingProps {
  title: string;
  subtitle?: string;
  center?: boolean;
  bg?: boolean;
}

const Heading: React.FC<HeadingProps> = ({ title, subtitle, center }) => {
  return (
    <div className={center ? "text-center" : "text-start"}>
      <h1 className="text-2xl font-bold text-sky-700">{title}</h1>
      <h2 className="font-light text-gray-700 mt-2">{subtitle}</h2>
    </div>
  );
};

export default Heading;
