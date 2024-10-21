"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

export const HeroSection = () => {
  const words = [
        "Trusted OEM", 
        1000,
        "Optimize your production with AI",
        1000,
        "Source premium ingredients",
        1000,
    ]

  return (
    <section className="container">
      <div className="grid place-items-center lg:max-w-screen-xl gap-8 mx-auto py-20 md:py-32">
        <div className="text-center space-y-8">
          <Badge variant="outline" className="text-sm py-2">
            <span className="mr-2 text-primary ">
              <Badge className="bg-customPurple-300">New</Badge>
            </span>
            <span> One-stop-service </span>
          </Badge>

          <div className="max-w-screen-md mx-auto text-center text-4xl md:text-5xl font-bold leading-tight md:leading-snug">
            <h1>
              Creating a Future Where
              <span className="text-transparent px-2 bg-gradient-to-r from-customPurple-300 to-customPurple-100 bg-clip-text">
                Beauty
              </span>
              Meets Innovation
            </h1>
          </div>

          <p className="max-w-screen-sm mx-auto text-xl text-muted-foreground">
            {`Revolutionizing the cosmetics industry with a smarter, greener, and faster approach, blending innovation with 
            beauty to redefine industry standards.`}
          </p>

          <div className="space-y-4 md:space-y-0 md:space-x-4">
            <Button className="font-bold group/arrow bg-customPurple-300 hover:bg-customPurple-200 w-[200px] h-[40px]">
                Get Started
                <ArrowRight className="size-5 ml-2 group-hover/arrow:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>

        <div className="mt-10 md:mt-2 mx-12 px-12 w-[80%] bg-customPurple-100 grid grid-cols-1 sm:grid-cols-12">
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
            >
                <h1 className="mb-4 text-2xl lg:text-4xl lg:leading-normal font-semibold max-w-lg">
                    <TypeAnimation
                        sequence={words}
                        wrapper="span"
                        speed={50}
                        repeat={Infinity}
                    />
                </h1>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="col-span-4 place-self-center mt-4 lg:mt-0 flex justify-center items-center"
            >
                <Image
                    src="/square.png"
                    alt="hero image"
                    className="w-[250px] h-auto lg:w-[400px]"
                    width={250}
                    height={250}
                />
            </motion.div>
        </div>
      </div>
    </section>
  );
};
