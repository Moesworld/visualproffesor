import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import pic1 from '../public/images/img1.jpeg'
import pic2 from '../public/images/img2.jpeg'
import pic3 from '../public/images/img3.jpeg'
import pic4 from '../public/images/img4.jpg'
import pic5 from '../public/images/img5.jpeg'
import pic6 from '../public/images/img6.jpeg'

export default function Home() {
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
          <div className="grid grid-cols-3 gap-4">
              <div>
                <Image src={pic1} width={1080} height={1080}/>
              </div>
              <div>
                <Image src={pic2} width={1080} height={1080}/>
              </div>
              <div>
                <Image src={pic3} width={1080} height={1080}/>
              </div>
              <div>
                <Image src={pic4} width={1080} height={1080}/>
              </div>
              <div>
                <Image src={pic5} width={1080} height={1080}/>
              </div>
              <div>
                <Image src={pic6} width={1080} height={1080}/>
              </div>
            </div>
              
            </div>
        </div>

      </main>

      
    </div>
  )
}
