import { useState, Suspense, useEffect, useRef} from 'react'
import {Canvas } from '@react-three/fiber'
import Loader from '../components/Loader'
import Island from '../models/island'
import Sky  from '../models/Sky'
import Bird from '../models/Bird'
import Plane from '../models/Plane'
import HomeInfo from '../components/HomeInfo'

import sakura from '../assets/sakura.mp3'
import { soundoff, soundon } from '../assets/icons'
import { socialLinks } from '../constants'
import { Link } from 'react-router-dom'


const Home = () => {
  const audioRef = useRef(new Audio(sakura));
  audioRef.current.volume = 0.4;
  audioRef.current.loop = true;
  // const {isRotating, setIsRotating} = useState(false);
  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);
  useEffect(() =>{
    if(isPlayingMusic){
      audioRef.current.play();
    }

    return () =>{
      audioRef.current.pause();
    }
  }, [isPlayingMusic])

    const adjustIslandForScreenSize = () => {
        let screenScale, screenPosition, rotation;
    
        if (window.innerWidth < 768) {
          screenScale = [0.9, 0.9, 0.9];
          screenPosition = [0, -6.5, -43.4];
          rotation = [0.1, 4.7, 0];
        } else {
          screenScale = [1, 1, 1];
          screenPosition = [1, -7.5, -39];
        }

        return [screenScale, screenPosition, rotation];
      };

      const adjustPlaneForScreenSize = () => {
        let screenScale, screenPosition;
    
        if (window.innerWidth < 768) {
          screenScale = [1.5, 1.5, 1.5];
          screenPosition = [0, -1.5, 0];
        } else {
          screenScale = [3.1, 3.1, 3.1];
          screenPosition = [0, -0.5, 1];
        }

        return [screenScale, screenPosition];
      };
      const [islandScale, islandPosition, islandRotation] = adjustIslandForScreenSize();
      const [planeScale, planePosition] = adjustPlaneForScreenSize();
  return (
    <section className='w-full h-screen relative'>
        <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
            {currentStage && <HomeInfo currentStage ={currentStage} />}
        </div>


        <Canvas  className= {`w-full h-screen bg-transparent ${ 
          isRotating ? 'cursor-grabbing': 'cursor-grab'}`}
         camera={{near:0.1, far: 1000}}>
            <Suspense fallback={ <Loader /> }>
                <directionalLight position={[1, 1, 1]} intensity={1.5}/>
                <ambientLight intensity={0.5} />
                <hemisphereLight skyColor="#b1e1ff" groundColor='#000000' intensity={1} />
                <Bird />

                <Sky 
                  isRotating = {isRotating}
                />
                <Island 
                    isRotating={isRotating}
                    setIsRotating={setIsRotating}
                    setCurrentStage={setCurrentStage}
                    position = {islandPosition}
                    scale = {islandScale}
                    rotation = {islandRotation}

                 />
                 <Plane
                 isRotating = {isRotating}
                 setIsPlayingMusiccale = {planeScale}
                 position = {planePosition}
                 rotation = {[0, 20.3, 0]}
                  />
            </Suspense>
        </Canvas>
        <div className='absolute bottom-3 left-3 flex justify-between items-center'>
          <img 
            src={!isPlayingMusic? soundoff : soundon}
            alt='sound'
            className='w-10 h-10 cursor-pointer object-contain'
            onClick={() => setIsPlayingMusic(!isPlayingMusic)}
          />
        </div>
        {/* <div className='absolute bottom-5 right-5 flex  justify-between items-center gap-4 '>
        <div className='font-bold text-xl '>Social Links: </div>
            {socialLinks.map((link)=>(
              <div className='flex flex-row justify-between' >
              <Link target='_blank' to={link.link} className='flex flex-row justify-start' >
                <img src={link.iconUrl} className="w-8 h-8 "/>
              </Link>
              </div>
            ))}
          </div> */}
    </section>
  )
}

export default Home