import Link from "next/link";

export default function Header() {
  return (
    <header className="mx-auto my-0 bg-[#ccc] w-full">
      <div className="mx-auto sm:w-[640px] md:w-[768px] lg:w-[1024px] xl:w-[1280px] p-[20px] text-center sm:text-left">
        <Link href="/" className="inline-block">
          <h1 className="text-[32px] transform transition duration-500 hover:scale-110">
            XXXMuck
          </h1>
        </Link>
      </div>
    </header>
  );
}
