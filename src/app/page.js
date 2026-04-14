import Banner from "@/homepage/Banner";
import FriendSection from "@/homepage/FriendSection";
import Navbar from "@/Navbar/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="container mx-auto my-10">
      <Banner></Banner>
      <FriendSection></FriendSection>
    </div>
  );
}
