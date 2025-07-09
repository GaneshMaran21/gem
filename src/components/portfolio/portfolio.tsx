import React from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion';
import Header from '../../../assets/svg/portfolio/portfolio_header.svg';
// import closeIcon from '../../../assets/svg/close2.svg'
import closeIcon from '../../assets/svg/close2.svg'
import img1 from '../../assets/png/ass1.png';
import img2 from '../../assets/png/ass2.png';
import img3 from '../../assets/png/ass3.png';
import img4 from '../../assets/png/ass4.png';
import img5 from '../../assets/png/ass5.png';
import img6 from '../../assets/png/ass6.png';
import img7 from '../../assets/png/ass7.png';


import './portfolio.scss'

const projects = [
  { title: 'Landing + About Section', image: img1 },
  { title: 'Skills Section', image: img2 },
  { title: 'Portfolio Banner', image: img3 },
  { title: 'Portfolio Page', image: img7 },
];
const project2=[
   { title: 'Layouts', image: img4 },
  { title: 'Work In Progress', image: img5 },
  { title: 'Find Trending Movies', image: img6 },
]

const Portfolio = ({isWeb}) => {
  const navigate=useNavigate();
  return (<>
  {isWeb && 
  <div className='navigateBar' onClick={()=>navigate(-1)}>
     <img className='icons' src={closeIcon}/>
  </div>
}
    <section className="portfolio-section">
      <h2 className="portfolio-title">My portfolio</h2>
      <div className="portfolio-grid">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="portfolio-card"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <img src={project.image} alt={project.title} className="portfolio-image" />
            <div className="overlay">
              <p className="overlay-text">{project.title}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
    <section className="portfolio-section">
      <h2 className="portfolio-title">Movie Application</h2>
      <div className="portfolio-grid">
        {project2.map((project, index) => (
          <motion.div
            key={index}
            className="portfolio-card2"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: index * 0.4 }}
          >
            <img src={project.image} alt={project.title} className="portfolio-image" />
            <div className="overlay">
              <p className="overlay-text">{project.title}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
 </> );
};

export default Portfolio;