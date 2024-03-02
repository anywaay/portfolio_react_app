import React from 'react'
import { projects } from '../constants'
import { Link } from 'react-router-dom'
import { arrow } from '../assets/icons'
import CTA from '../components/CTA'
const Projects = () => {
  return (
    <section className='max-container '>
      <h1 className='head-text'>
      My <span className='blue-gradient_text font-semibold drop-shadow '>Projects</span> 
      </h1>
      <div className='mt-5 flex flex-col gap-3 text-slate-500'>
        <p>I'm deeply passionate about web development and have crafted numerous projects reflecting this 
        enthusiasm. Notably, SavvyShopper, a prize-winning price comparison website from the SIH Hackathon-2023,
         showcases my dedication. Continuously engaged in creating innovative projects. Here, you'll find a curated selection of projects that
          reflect the culmination of my dedication and hard work.</p>

      </div>
      <div className='flex flex-wrap my-20 gap-16'>
        {projects.map((project) =>(
          <div className='lg:w-[400x] w-full' key={project.name}>
            <div className='block-container w-12 h-12 '>
              <div className={`btn-backk rounded-xl ${project.theme}`} />
              <div className='btn-front rounded-xl flex justify-center items-center'>
            <a href={project.repo} target='_blank' style={{textDecoration: 'none', display: 'flex', justifyContent:'center'}}>
                <img 
                to={project.repo}
                  src={project.iconUrl}
                  alt='Project Icon'
                  className='w-3/4 h-3/4 object-contain'
                />
            </a>
              </div>
            </div>
            
            <div className='mt-5 flex flex-col'>
              <h4 className='text-2xl font-poppins font-semibold'>
                {project.name}
              </h4>
              <p className='mt-2 text-slate-500'>
                {/* {project.description} */}
                {project.description.includes('Smart India Hackathon 2023') ? (
                <>
                SavvyShopper is a web application developed as a solution for the problem statement titled
                 "Price comparison website for products on GeM portal with other e-marketplaces" in 
                 the <strong> Smart India Hackathon 2023 </strong>.The project won the competition and
                  aims to provide a convenient platform for users to compare prices and specifications of 
                  products listed on the Government e-Marketplace (GeM) with those available on other popular 
                  e-marketplaces such as Flipkart, eBay, Amazon, Alibaba, etc
                </>) : ( project.description )}
              </p>
              <div  className='mt-5 flex items-center font-poppins'>
                  <Link
                    to={project.link}
                    target='_blank'
                    rel="noopener noreferrer"
                    className={`font-semibold ${project.theme} cssbuttons-io-button`}
                  >
                    {(project.gitProject === true) ? 'Project Repo': 'Live Link'}

                    <div class="icon">
                      <svg
                      color={`${project.color}`}
                        height="24"
                        width="24"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M0 0h24v24H0z" fill="none"></path>
                        <path
                          d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                  </Link>
                  {/* <img
                  src={arrow}
                  alt="arrow"
                  className='w-4 h-4 object-contain' 
                  /> */}
              </div>
            </div>
          </div>
        ))}
      </div>
      <hr className='border-slate-200' />
      <CTA />
      </section>
  )
}

export default Projects