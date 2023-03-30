import React from 'react';
import DropsImage from '../images/drops.png';
import BgImage from '../images/blue-gradient.png';

import { motion } from 'framer-motion';
import BlackBoxTransition from '../utils/BlackBoxTransition.tsx';

const Home = () => {
  return (
    <BlackBoxTransition>
      <motion.div 
      className="container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ 
        duration: 0.6,
        delay: 0.5 
      }}
      >
        <div className='background'>
          <img src={BgImage} alt="" />
        </div>
        <h1>なぱ&nbsp;/&nbsp;Napa</h1>
        <img src={DropsImage} className="profileImage" alt=''/>
        <p>
          ShinCodeです。普段は個人でWeb系の情報発信をYoutubeやTwitterにて行っています。主にHTML/CSS/Javascript/Reactメインに取り扱っています。趣味は個人でプログラミングの撮影を行うことです。
          ShinCodeです。普段は個人でWeb系の情報発信をYoutubeやTwitterにて行っています。主にHTML/CSS/Javascript/Reactメインに取り扱っています。趣味は個人でプログラミングの撮影を行うことです。
        </p>

        <section class="page-section" id="services">
          <div className="service">
            <div class="text-center">
              <h2 class="section-heading text-uppercase">PORTFOLIO</h2>
              <h3 class="section-subheading text-muted mb-5">
                私が作った作品一覧です
              </h3>
            </div>
            <div class="row text-center">
              <div class="col-md-4">
                <span class="fa-stack fa-4x">
                  <i class="fas fa-circle fa-stack-2x text-primary"></i>
                  <i class="fas fa-shopping-cart fa-stack-1x fa-inverse"></i>
                </span>
                <h4 class="my-3">ECサイト</h4>
                <p class="text-muted">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
                  maxime quam architecto quo inventore harum ex magni, dicta
                  impedit.
                </p>
              </div>
              <div class="col-md-4">
                <span class="fa-stack fa-4x">
                  <i class="fas fa-circle fa-stack-2x text-primary"></i>
                  <i class="fas fa-laptop fa-stack-1x fa-inverse"></i>
                </span>
                <h4 class="my-3">レスポンシブサイト</h4>
                <p class="text-muted">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
                  maxime quam architecto quo inventore harum ex magni, dicta
                  impedit.
                </p>
              </div>
              <div class="col-md-4">
                <span class="fa-stack fa-4x">
                  <i class="fas fa-circle fa-stack-2x text-primary"></i>
                  <i class="fas fa-lock fa-stack-1x fa-inverse"></i>
                </span>
                <h4 class="my-3">ウェブセキュリティ</h4>
                <p class="text-muted">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
                  maxime quam architecto quo inventore harum ex magni, dicta
                  impedit.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="skill">
          <div class="text-center">
            <h1 class="title">スキル</h1>
            <div class="row text-center">
              <div class="col-md-4 services">
                <h4>React</h4>
                <p>Reactがつかえます</p>
              </div>
              <div class="col-md-4 services">
                <h4>HTML/CSS</h4>
                <p>HTML/CSSがつかえます</p>
              </div>
              <div class="col-md-4 services">
                <h4>Firebase</h4>
                <p>Firebaseがつかえます</p>
              </div>
            </div>
            <button type="button" class="btn btn-primary">
              スキル一覧
            </button>
          </div>
        </section>
      </motion.div>
    </BlackBoxTransition>
  )
}

export default Home;