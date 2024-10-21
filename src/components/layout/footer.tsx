import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import Image from "next/image";
import GithubIcon from "../icons/github-icon";

export const Footer = () => {
  return (
    <footer id="footer" className="container py-24 sm:py-32">
      <div className="p-10 bg-card border border-secondary rounded-2xl">
        <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8">
          <div className="col-span-full xl:col-span-2">
            <Link href="/" className="flex flex-col items-start">
                <Image src="/logo-text.svg" alt="logo" width="200" height="88"/>
            </Link>
            <div className="w-[50%] sm:w-[40%] md:w-[30%] lg:w-[20%] xl:w-[50%] px-6 flex items-center justify-between">
                <Link
                    href="https://www.linkedin.com"
                    target="_blank"
                    className="hover:opacity-80 transition-all"
                >
                    <GithubIcon/>
                </Link>
                <Link
                    href="https://www.instagram.com"
                    target="_blank"
                    className="hover:opacity-80 transition-all"
                >
                    <GithubIcon/>
                </Link>
                <Link
                    href="https://www.instagram.com"
                    target="_blank"
                    className="hover:opacity-80 transition-all"
                >
                    <GithubIcon/>
                </Link>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">Products</h3>
            <div>
              <Link href="#" className="opacity-60 hover:opacity-100">
                E-Commerce
              </Link>
            </div>

            <div>
              <Link href="#" className="opacity-60 hover:opacity-100">
                Formulation
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">Legal</h3>
            <div>
              <Link href="#" className="opacity-60 hover:opacity-100">
                Privacy Policy
              </Link>
            </div>

            <div>
              <Link href="#" className="opacity-60 hover:opacity-100">
                Terms of Use
              </Link>
            </div>

            <div>
              <Link href="#" className="opacity-60 hover:opacity-100">
                Sales and Refunds
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">Help</h3>
            <div>
              <Link href="#" className="opacity-60 hover:opacity-100">
                Contact Us
              </Link>
            </div>

            <div>
              <Link href="#" className="opacity-60 hover:opacity-100">
                FAQ
              </Link>
            </div>

            <div>
              <Link href="#" className="opacity-60 hover:opacity-100">
                Feedback
              </Link>
            </div>
          </div>
        </div>

        <Separator className="my-6" />
        {/* To be updated */}
        <section className="">
          <h3 className="">
            &copy; 2024 Designed and developed by
            <Link
              target="_blank"
              href="https://github.com/leoMirandaa"
              className="text-primary transition-all border-primary hover:border-b-2 ml-1"
            >
              Skinzync
            </Link>
          </h3>
        </section>
      </div>
    </footer>
  );
};
