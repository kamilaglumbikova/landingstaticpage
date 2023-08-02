import About from "@/components/About";
import Blog from "@/components/Blog";
import Hero from "@/components/Hero";
import MoreService from "@/components/MoreService";
import Ref from "@/components/Ref";
import Service from "@/components/Service";
import Subscribe from "@/components/Subscribe";
import Team from "@/components/Team";

export default function Home() {
  return (
    <div className="">
       <Hero />
       <Service />
       <Ref />
       <Team />
       <MoreService />
       <About />
       <Blog />
       <Subscribe />
    </div>
  )
}
