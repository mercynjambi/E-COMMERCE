import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
         <Title text1={'ABOUT'} text2={'US'}/>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px] ' src={assets.about_img} alt=""/>
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
           <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet cupiditate laudantium nam esse nemo quae aspernatur nihil corporis, a dicta obcaecati enim modi sunt tenetur numquam beatae molestias adipisci dolore.</p>
           <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis commodi optio quibusdam maxime, provident, voluptatum, possimus sit est deserunt vero voluptates magni quis? Cum enim a quia maiores hic dolore!</p>
           <b className='text-gray-800'>Our Mission</b>
           <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus quo necessitatibus ipsa magnam sequi repudiandae sunt illum ratione error laborum, nihil corrupti iste provident tempora fugiat impedit corporis aperiam placeat?</p>
        </div>
      </div>

      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
         <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Quality Assurance</b>
             <p className='text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, natus. Blanditiis, voluptas esse quos culpa in distinctio earum explicabo quam commodi. Impedit amet dolores, suscipit consequuntur quos sapiente officiis? Autem.</p>
         </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Convenience</b>
             <p className='text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, natus. Blanditiis, voluptas esse quos culpa in distinctio earum explicabo quam commodi. Impedit amet dolores, suscipit consequuntur quos sapiente officiis? Autem.</p>
         </div>
         <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Exceptional Customer Service</b>
             <p className='text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, natus. Blanditiis, voluptas esse quos culpa in distinctio earum explicabo quam commodi. Impedit amet dolores, suscipit consequuntur quos sapiente officiis? Autem.</p>
         </div>
      </div>

      <NewsletterBox/>
    </div>
  )
}

export default About