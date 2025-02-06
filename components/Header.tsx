import { Bricolage_Grotesque, Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const bricolage = Bricolage_Grotesque({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

export function Header() {
  return (
    <header className="relative z-10 flex items-center justify-between px-2 py-6 max-w-7xl mx-auto">
      <div className="flex items-center gap-12">
        <Link href="/" className="flex items-center">
          <Image
            src="/vierra-logo.png"
            alt="Vierra Logo"
            width={120}
            height={40}
            className="w-auto h-8"
          />
        </Link>
        <nav
          className={`hidden md:flex items-center gap-8 text-[16px] ${bricolage.className}`}
        >
          <Link
            href="#about"
            className=" hover:text-[#8F42FF] transition-colors"
          >
            About us
          </Link>
          <Link
            href="#services"
            className=" hover:text-[#8F42FF] transition-colors"
          >
            Services
          </Link>
          <Link
            href="#solutions"
            className=" hover:text-[#8F42FF] transition-colors"
          >
            Solutions
          </Link>
          <Link
            href="#cases"
            className=" hover:text-[#8F42FF] transition-colors"
          >
            Cases
          </Link>
        </nav>
      </div>
      <Button
        variant="secondary"
        className={`hidden md:flex items-center gap-2 bg-[#701CC0] hover:bg-[#8F42FF] text-white rounded-full px-8 py-7 ${inter.className} `}
      >
        Book a meeting
        <ArrowUpRight className="w-4 h-4" />
      </Button>
    </header>
  );
}
