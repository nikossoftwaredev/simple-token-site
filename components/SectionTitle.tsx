import { twMerge } from "tailwind-merge";

export const SectionTitle = ({
  title,
  className = "",
}: {
  title: string;
  className?: string;
}) => {
  return (
    <div className="w-full flex justify-center">
      <span className="bg-gradient-to-r from-primary to-accent text-transparent text-4xl font-extrabold text-center bg-clip-text uppercase my-4">
        {title}
      </span>
    </div>
  );
};
