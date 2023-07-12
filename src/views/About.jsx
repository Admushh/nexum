import PX5 from '../Picture/Adimas.jpg'
import PX6 from '../Picture/Zakirio.jpg'
const About = () => {
    return(
        <div>
            <div className='pt-20 '>
      <div className='group cursor-default text-center text-8xl flex justify-center relative'>
        <div className='text-green-400 text-neon-green absolute inline-block min-w-min transform mr-64 mt-2 z-20 
        transition-transform duration-1000 group-hover:scale-125'>
          「 」
        </div>
        <div className='absolute shadow-lg  justify-center'>
          <span className='text-red-400 text-neon-red'>n</span>
          <span className='text-blue-400 text-neon-blue'>&nbsp;exum</span>
          <p className="text-2xl pt-[50px] justify-center text-neon-blue">Hi! meet Nexum, your reliable chatting website.<br></br> this website allows you to messages,video calls,and also sharing files with <br></br>your friend, your beloved and
          of course anyone in this world as long u know their ID!<br></br></p>
          <p className="text-2xl pt-[50px] text-neon-green">Also, meet our developer!</p>
          <span class="flex justify-center space-x-[200px] pt-5">
       <a href='https://www.instagram.com/admsfrhn/' target='_blank'><span><img src={PX5}className="pt-5 rounded w-[350px] transition duration-300 ease-in-out hover:opacity-50 "></img><p className='text-2xl text-neon-red pt-5'>Adimas Farhan Putranto</p></span></a>
       <a href='https://www.instagram.com/zakirio_wasis/' target='_blank'><span><img src={PX6}className="pt-5 rounded w-[350px] transition duration-300 ease-in-out hover:opacity-50"></img><p className='text-2xl text-neon-red pt-5'>Zakirio Hugoraazaq Wasis</p></span></a>
          </span>
        </div>
        <div>
        </div>
      </div>
    </div>
  
        </div>

    )
}
export default About