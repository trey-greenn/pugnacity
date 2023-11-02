import dynamic from 'next/dynamic'
import Image from 'next/image'
const Header = dynamic(() => import("../component/header"))


export default function Home() {
  return (
    <>
    
    <Header/>
    
    <main className="">
      <div className="grid grid-cols-11 mt-24 gap-2">
        <div className="col-start-2 col-end-4 bg-zinc-800/30 border-white  rounded">
          <h2 className="border-b p-4 flex justify-center">UPCOMING FIGHTS</h2>
          <p className="text-center p-2"> 11/2/2024</p>
        </div>
        <div className="col-start-4 col-end-9 bg-zinc-800/30 border-white  rounded">
          <h2 className="flex justify-center p-2"> WHATS HAPPENING</h2>

        </div>
        <div className="col-start-9 col-end-11 bg-zinc-800/30 border-white  rounded ">
          <h2 className="p-2 flex justify-center"> HEDGER </h2>
          <p className="text-center p-2"> ML: -700</p>
        </div>

      </div>
      <div className="mx-24 bg-zinc-800/30 border-white  rounded mt-6">
          <h2 className="flex justify-center p-2">FIGHTER COMPARISON</h2>

        </div>
    </main></>
  )
}
