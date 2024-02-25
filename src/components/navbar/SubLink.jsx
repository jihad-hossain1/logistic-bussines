import { ChevronRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const SubLink = ({ children, name, setSelectedSubLink, path }) => {
  const handleClick = () => {
    setSelectedSubLink(null);
    setTimeout(() => {
      setSelectedSubLink(name);
    }, 250);
  };
  return (
    <Link
      href={`${path}`}
      onClick={handleClick}
      className="flex p-1 rounded cursor-pointer stroke-[0.75] hover:stroke-neutral-100 stroke-neutral-400 text-neutral-400 hover:text-neutral-100 place-items-center gap-3 hover:bg-neutral-700/30 transition-colors duration-100"
    >
      {children}
      <div className="flex overflow-clip place-items-center justify-between w-full">
        <p className="text-inherit truncate whitespace-nowrap tracking-wide">
          {name}
        </p>
        <ChevronRightIcon className="stroke-inherit stroke-[0.75] min-w-8 w-8" />
      </div>
    </Link>
  );
};

export default SubLink;
