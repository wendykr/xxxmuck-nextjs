import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mx-auto my-0 bg-[#ccc] w-full">
      <div className="mx-auto max-w-7xl py-[12px]">
        <p className="text-center text-[14px]">
          © 2024{" "}
          <Link
            href="https://github.com/wendykr/"
            className="underline hover:no-underline"
          >
            Vendula Krajíčková
          </Link>
        </p>
        <p className="text-center text-[14px]">
          Next.js verze projektu{" "}
          <Link
            href="https://github.com/wendykr/xxxmuck-ts"
            className="underline hover:no-underline"
          >
            XXXMuck
          </Link>
        </p>
      </div>
    </footer>
  );
}
