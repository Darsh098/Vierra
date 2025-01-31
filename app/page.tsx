import { Bricolage_Grotesque, Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const bricolage = Bricolage_Grotesque({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="min-h-screen bg-[#18042A] text-white relative overflow-hidden z-0">
      {/* Vertical Lines */}
      {/* {[128, 318, 498, 678, 858, 1038, 1218, 1398].map((left, index) => ( */}
      {[178, 358, 538, 718, 898, 1078, 1258].map((left, index) => (
        <div
          key={index}
          className="absolute top-0 h-full border-l  border-white opacity-5"
          style={{ left: `${left}px` }}
        />
      ))}

      {/* Ecllipse Purple gradient effects */}
      <div className="absolute top-[157px] left-[200] w-[470px] h-[470px] opacity-80 blur-[50px] rotate-[60deg] rounded-full bg-gradient-to-br from-[#701CC0CC] to-[#18042A] -z-10" />
      <div className="absolute top-[300px] left-[825px] w-[589px] h-[589px] opacity-80 blur-[50px] rotate-[60deg] rounded-full bg-gradient-to-br from-[#701CC0CC] to-[#18042A] -z-10" />

      {/* Header */}
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
              href="/about"
              className=" hover:text-[#8F42FF] transition-colors"
            >
              About us
            </Link>
            <Link
              href="/services"
              className=" hover:text-[#8F42FF] transition-colors"
            >
              Services
            </Link>
            <Link
              href="/solutions"
              className=" hover:text-[#8F42FF] transition-colors"
            >
              Solutions
            </Link>
            <Link
              href="/cases"
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

      {/* Hero Section */}
      <main className="relative z-10 px-6 pt-28 max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-10">
        <div className="max-w-2xl">
          <h1
            className={`text-5xl md:text-6xl font-bold leading-tight mb-6 text-[#EFF3FF] ${bricolage.className}`}
          >
            We boost your brand to thrive in the digital world.
          </h1>
          <p className={`text-[#9BAFC3] text-lg mb-10 ${inter.className}`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt.
          </p>
          <div
            className={`flex flex-col sm:flex-row items-center gap-4 ${inter.className}`}
          >
            <Button
              variant="secondary"
              className="flex items-center gap-2 border-2 border-[#7A13D0] bg-transparent hover:bg-[#8F42FF] text-white rounded-full px-8 py-7"
            >
              Book a meeting
              <ArrowUpRight className="w-4 h-4" />
            </Button>
            <Button
              variant="link"
              className="text-white hover:text-[#8F42FF] pl-2"
            >
              Our Solutions
            </Button>
          </div>
        </div>
        {/* Image */}

        <div className="flex-shrink-0">
          <Image src="/Mck1-Vierra.png" alt="Vierra" width={671} height={685} />
        </div>
      </main>

      {/* Partners Section */}
      <section className="w-full py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <h2
              className={`text-white text-xl font-medium whitespace-nowrap ${bricolage.className}`}
            >
              Trusted by our partners
            </h2>
            <div className="flex flex-wrap md:flex-nowrap justify-center items-center gap-12 md:gap-24 w-full">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center gap-9">
                  <Image
                    src="/logoipsum.svg"
                    alt="Partner Logo"
                    width={184}
                    height={44}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
