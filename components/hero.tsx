import { Suspense } from "react";
import AnimatedGridPattern from "@/components/ui/animated-grid-pattern";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CircleArrowDown, Zap } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center px-6 pt-6 overflow-hidden">
      <Suspense fallback={null}>
        <AnimatedGridPattern
          numSquares={30}
          maxOpacity={0.1}
          duration={3}
          className={cn(
            "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
            "inset-x-0 h-full skew-y-12"
          )}
        />
      </Suspense>
      <div className="relative z-[1] text-center max-w-screen-md">
        <Badge className="rounded-full border-none">
          <Zap className="fill-current" />
          Fullstack Web Developer
        </Badge>
        <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-bold !leading-[1.2] tracking-tight">
          Building Scalable & Engaging Web Experiences
        </h1>
        <p className="mt-6 text-[17px] md:text-lg">
          Hi, I'm Robert Tamosa, a fourth-year BSIT student who builds full-stack web apps with Next.js, 
          TypeScript and PostgreSQL. Currently looking for a Full Stack Developer internship.
        </p>
        <div className="mt-12 flex items-center justify-center gap-4">
          <a href="#projects">
            <Button size="lg" className="rounded-full text-base">
              See What I Do <CircleArrowDown className="ml-2 !h-5.5 !w-5.5" />
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;