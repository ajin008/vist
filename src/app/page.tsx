import Hero from "../components/sections/home/Hero";
import Invite from "../components/sections/home/Invite";
import Solution from "../components/sections/home/Solution";
import Tension from "../components/sections/home/Tension";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Tension />
      <Solution />
      <Invite />
    </>
  );
}
