import Link from "next/link";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";

export default function Header() {
  return (
    <header className="mx-auto my-0 bg-[#ccc] w-full dark:bg-stone-950">
      <div className="mx-auto sm:w-[640px] md:w-[768px] lg:w-[1024px] xl:w-[1280px] p-[20px] text-center sm:text-left flex flex-row items-center justify-between">
        <Link href="/" className="inline-block">
          <h1 className="text-[32px] transform transition duration-500 hover:scale-110 dark:text-[#ebebeb]">
            XXXMuck
          </h1>
        </Link>
        <ThemeSwitcher />
      </div>
    </header>
  );
}
