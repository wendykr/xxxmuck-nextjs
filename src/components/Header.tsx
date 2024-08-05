import Link from "next/link";

export default function Header() {
  return (
    <header className="mx-auto my-0 bg-[#ccc]">
      <div className="max-w-7xl px-[120px] py-[20px]">
        <Link href="/" className="inline-block">
          <h1 className="text-black text-[32px] transform transition duration-500 hover:scale-110">
            XXXMuck
          </h1>
        </Link>
      </div>
    </header>
  );
}
