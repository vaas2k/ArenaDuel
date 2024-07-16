import dynamic from "next/dynamic";
const ClientHome = dynamic(() => import("../../components/ClientHome/page"), { ssr: false })

export default function Home() {
  
  return (<ClientHome />) ;
}