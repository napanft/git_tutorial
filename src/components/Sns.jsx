import React from 'react';
import DropsImage from '../images/drops.png';
import { motion } from 'framer-motion';
import BlackBoxTransition from '../utils/BlackBoxTransition.tsx';

const Sns = () => {
  return (
    <BlackBoxTransition>
      <motion.div 
      className='container bg-gray'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ 
        duration: 0.6,
        delay: 0.5 
      }}
      >
        <div className='title flex justify-center column'>
          <h1 className='margin-bottom'>Profile</h1>
          <h3 className='text-muted'>Lorem ipsum dolor adipisicing elit. </h3>
        </div>
        <div className='profile flex'>
          <div className='image'>
            <img src={DropsImage} className='DropsImage' alt=''/>
          </div>
          <div className='text-box text'>
            <h2 className=''><span className='jp'>なぱ</span> / <span className='en'>Napa</span></h2>
            <h3 className='text-muted'>Front-end Engineer</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
          <div className='social-media flex justify-center'>
            <a href="https://twitter.com/navalley_crypto" className='circle' target='_blank'>
              <i class="fa-brands fa-twitter"></i>
            </a>
            <a href="https://stand.fm/channels/5ebf731af654bbcab459b063" className='circle' target='_blank'>
              <i class="fa-solid fa-microphone"></i>
            </a>
            <a href="https://thebattle.jp/" className='circle' target='_blank'>
              <img src="" className='logo' />
            </a>
            <a href="https://opensea.io/Napa-nft" className='circle' target='_blank'>
              <i class="fa-solid fa-sailboat"></i>
            </a>
          </div>
        <div className='text-center text-muted '>
          <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis quae delectus sint? Placeat ullam corrupti, optio repudiandae accusamus dolores praesentium id ipsam fugiat. Cupiditate totam magnam, aliquam autem tempora officia!
          </p>
        </div>
      </motion.div>
    </BlackBoxTransition>
  )
}

export default Sns;