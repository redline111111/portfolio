import { Tag } from "components/Tag/Tag";
import { skills } from "components/Tag/Tag.interface";

export const Greetings = () => (
    <div className="flex w-9/12 my-0 mx-auto max-[900px]:flex-col max-[900px]:w-full max-[1200px]:w-full">
    <div className="mr-10 mt-10 w-7/12 relative my-0 mx-auto max-[900px]:w-full max-[900px]:h-128 max-[900px]:mt-0" >
      <div className="w-full h-full bg-no-repeat bg-center shadow-blur" style={{backgroundImage: `url("me2.png")`, backgroundSize: "cover"}}></div> 
    </div>
    <div className="w-5/12 max-[900px]:flex max-[900px]:w-full max-[900px]:flex-col max-[900px]:justify-center max-[900px]:items-center ">
      <h3 className="text-white mt-36 text-4xl max-[900px]:text-center max-[900px]:mt-16">Меня зовут Илья</h3>
      <h4 className="text-white mt-12 text-2xl max-[900px]:text-center">Мне 20 лет<p/>Я frontend разработчик</h4>
      <a href="#contacts" className="text-black mt-12 text-2xl border-2 bg-orange-500 rounded-3xl p-3 text-center inline-block max-[900px]:w-1/2 max-[425px]:w-full hover:bg-orange-700" >Связаться со мной</a>
      <div className="mt-12 max-[900px]:mx-auto">
          <Tag skill={skills.html} type='primary'/>
          <Tag skill={skills.scss} type='primary'/>
          <Tag skill={skills.js} type='primary'/>
          <Tag skill={skills.ts} type='primary'/>
          <Tag skill={skills.react} type='primary'/>
          <Tag skill={skills.redux} type='primary'/>
          <Tag skill={skills.next} type='primary'/>
          <Tag skill={skills.nest} type='primary'/>
          <Tag skill={skills.node} type='primary'/>
          <Tag skill={skills.git} type='primary'/>
          <Tag skill={skills.webpack} type='primary'/>
      </div>
    </div>
  </div>
  
);
