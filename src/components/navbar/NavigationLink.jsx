import Link from "next/link";

const NavigationLink = ({ children, name, path }) => {
  return (
    <Link
      href={`${path}`}
      className="flex p-1 rounded cursor-pointer stroke-[0.75] hover:stroke-neutral-100 stroke-neutral-200 text-neutral-100 hover:text-[#74bf43] place-items-center gap-3  transition-colors duration-100 text-right font-bold"
    >
      {children}
      <p className="text-inherit font-poppins overflow-clip whitespace-nowrap tracking-wide ">
        {name}
      </p>
    </Link>
  );
};

export default NavigationLink;
