import { Inter } from "next/font/google";
import VideoCard from "@/components/VideoCard";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
   <div>
    <VideoCard 
    thumbnail={"quantum.jpg"}
    authorImage={"newmind.jpg"}
    title={"Quantum Programming - Part 1"}
    author={"New Mind"}
    views={"477K views"}
    timestamp={"1 year ago"}
    />
   </div> 
  )
}
