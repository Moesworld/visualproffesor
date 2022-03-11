import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import ReactPlayer from 'react-player'
import styles from '../styles/Home.module.css'
import pic1 from '../public/images/Drop.png'
import pic2 from '../public/images/Ambition.png'
import pic3 from '../public/images/Day2.png'
import pic4 from '../public/images/Day4.png'
import pic5 from '../public/images/Day5.png'
import pic6 from '../public/images/Glaze.png'
import pic7 from '../public/images/blaze.png'
import pic8 from '../public/images/hoppinout.png'
import pic9 from '../public/images/eee.png'
import pic10 from '../public/images/minute.png'
import pic11 from '../public/images/Kobe.png'
import { useState } from 'react';


export default function Home() {
  const [videoFilePath, setVideoFilePath] = useState(null);
  const handleVideoUpload = (event) => {
    const [file] = event.target.files;
    console.log(videoFilePath)
    setVideoFilePath(URL.createObjectURL(file));
  };
  return (
    <div className="w-full h-auto">
      <Head>
        <title>Visualproffesor</title>
        <meta name="description" content="Art created by visualproffesor" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center pt-10 ">
        <div className='flex-1 '>
        <h1 className="text-3xl md:text-5xl font-semibold">
          Welcome to my <Link href="/world"><a className='text-blue-500 hover:text-white'>World</a></Link>
        </h1>
        </div>
        <div className='flex-1  pt-10'>
          <div className='w-full p-5'>
          <div className='flex flex-col md:flex-row gap-4'>
            <div className="flex flex-col gap-2">
                <div className=''>
                  <Image src={pic1} width={500} height={500}/>
                </div>
                <div>
                  <Image src={pic2} width={500} height={500}/>
                </div>
                <div>
                  <Image src={pic3} width={500} height={500}/>
                </div>
            </div>
            <div className="flex flex-col gap-2">
                <div className=''>
                  <Image src={pic4} width={500} height={500}/>
                </div>
                <div>
                  <Image src={pic5} width={500} height={500}/>
                </div>
                <div>
                  <Image src={pic6} width={500} height={500}/>
                </div>
            </div>
            <div className="flex flex-col gap-2">
                <div className=''>
                  <Image src={pic7} width={500} height={500}/>
                </div>
                <div>
                  <Image src={pic8} width={500} height={500}/>
                </div>
                <div>
                  <Image src={pic9} width={500} height={500}/>
                </div>
            </div>
            <div className="flex flex-col gap-2">
                <div className=''>
                  <Image src={pic10} width={500} height={500}/>
                </div>
                <div>
                  <Image src={pic11} width={500} height={500}/>
                </div>
            </div>
          </div>
       
              
            </div>
        </div>
        <div className='flex-1 '>
        <h1 className="text-3xl md:text-5xl font-semibold">
          VIDEOS
        </h1>
        </div>
        <div className='flex-1  pt-10'>
          <div className='w-full p-5'>
            <div className='flex flex-col md:flex-row gap-4'>
              <div className="flex flex-col gap-2">
                  <div className=''>
                    <video  src={"videos/CALLME.mp4"} style={{ width: "500px", height:"500px" }} autoPlay loop muted/>
                  </div>
                  <div>
                    <video  src={"videos/123.mp4"} style={{ width: "500px", height:"500px" }} autoPlay loop muted/>
                  </div>
                  <div>
                    <video  src={"videos/Ambience.mp4"} style={{ width: "500px", height:"500px" }} autoPlay loop muted/>
                  </div>
              </div>
              <div className="flex flex-col gap-2">
                  <div className=''>
                    <video  src={"videos/BACktobasics.mp4"} style={{ width: "500px", height:"500px" }} autoPlay loop muted/>
                  </div>
                  <div>
                    <video  src={"videos/GoBestFriend.mp4"} style={{ width: "500px", height:"500px" }} autoPlay loop muted/>
                  </div>
                  <div>
                    <video  src={"videos/Boss.mp4"} style={{ width: "500px", height:"500px" }} autoPlay loop muted/>
                  </div>
              </div>
              <div className="flex flex-col gap-2">
                  <div className=''>
                    <video  src={"videos/CityShine.mp4"} style={{ width: "500px", height:"500px" }} autoPlay loop muted/>
                  </div>
                  <div>
                    <video  src={"videos/LOVE_2.mp4"} style={{ width: "500px", height:"500px" }} autoPlay loop muted/>
                  </div>
                  <div>
                    <video  src={"videos/pan2.mp4"} style={{ width: "500px", height:"500px" }} autoPlay loop muted/>
                  </div>
              </div>
              <div className="flex flex-col gap-2">
                  <div className=''>
                    <video  src={"videos/strtham.mp4"} style={{ width: "500px", height:"500px" }} autoPlay loop muted/>
                  </div>
                  <div>
                    <video  src={"videos/DANCEBATTLE.mp4"} style={{ width: "500px", height:"500px" }} autoPlay loop muted/>
                  </div>
                  <div>
                    <video  src={"videos/fin.mp4"} style={{ width: "500px", height:"500px" }} autoPlay loop muted/>
                  </div>
              </div>
            </div>
          </div>
          </div>
        
      </main>


      
    </div>
  )
}
