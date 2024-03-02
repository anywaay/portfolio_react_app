import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { skills, experiences} from '../constants'
import CTA from '../components/CTA';
const About = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text'>
      Hello, I'm <span className='blue-gradient_text font-semibold drop-shadow '>Ayush Tripathi</span> 
      </h1>
      <div className='mt-5 flex flex-col gap-3 text-slate-500'>
        <p>A second-year BTech CSE student, based in INDIA, specializing in web development with expertise in both front-end and back-end using MERN stack. Eager to contribute to the tech industry through hands-on learning and building web applications.</p>
      </div>


      <div className='py-10 flex flex-col'>
       <h3 className='subhead-text'>My Skills</h3>
        <div className='mt-20 flex flex-wrap gap-12 '>
          {skills.map((skill) => (
          <div className='block-container w-20 h-20 relative'>
            <div className='btn-back rounded-xl' />
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img 
                  src={skill.imageUrl}
                  alt={skill.name}
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>

              <div className='skill-info tooltip absolute rounded-md transition-opacity duration-500 bottom-full left-1/2 transform -translate-x-1/2 -translate-y-0'>
                <span className='skill-info-one blue-gradient_text font-semibold ' > {skill.name} </span>
                <span className='skill-info-two font-semibold ' > {skill.type}</span>
              </div>

            </div>
          ))}
        </div>
      </div>


      {/* Work Experience */}
      <div className='py-16 '>
          <h3 className='subhead-text'>Achivements, Certifications and Experiences</h3>
          <div className='mt-5 flex flex-col gap-3 text-slate-500'>
           <p>
           In the realm of technological innovation and development, I have garnered a collection of notable achievements,
            certifications, and experiences. These include clinching the prestigious title of winner in SIH-2023,
            contributing as a Technical Team Executive in my college's student chapter. Here's the rundown:
           </p>
          </div>
          <div className='mt-12 flex'>
            <VerticalTimeline>
              {experiences.map((experience) =>(
                <VerticalTimelineElement 
                key={experience.company_name} date={experience.date}
                icon={<div className='flex justify-center items-center w-full h-full'>
                  <img src = {experience.icon} alt={experience.company_name} 
                  className='w-[60%] h-[60%] object-contain' />
                </div>}
                iconStyle={{
                  background: experience.iconBg
                }}
                contentStyle={{
                  borderBottom: '8px',
                  borderStyle: 'solid',
                  borderBottomColor: experience.iconBg,
                  boxShadow: 'none',
                }}
                >
                  <div>
                    <h3 className='text-black text-xl font-poppins font-semibold'>
                      {experience.title}
                    </h3>
                    <p className='text-black-500 font-medium font-base'
                    style={{margin:0}}>
                      {experience.company_name}
                    </p>
                  </div>
                  <ul className='my-5 list-disc ml-5 space-y-2'>
                    {experience.points.map((point, index)=>(
                      <li key={`experience-point-${index}`} className='text-black-500/50 font-normal pl-1 text-small'>
                      {point}
                      </li>
                    ))}
                  </ul>
                </VerticalTimelineElement>
              ))}
            </VerticalTimeline>
          </div>
      </div>
      <hr className='border-slate-200' />
      <CTA />
    </section>
  )
}

export default About