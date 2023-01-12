
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
          <div className="text-black text-2xl bg-zinc-400 rounded-md p-3 inline-block m-2">HTML/CSS</div>
          <div className="text-black text-2xl bg-cyan-200 rounded-md p-3 inline-block m-2">SCSS/Tailwind</div>
          <div className="text-black text-2xl bg-yellow-200 rounded-md p-3 inline-block m-2">JavaScript</div>
          <div className="text-black text-2xl bg-indigo-500 rounded-md p-3 inline-block m-2">TypeScript</div>
          <div className="text-black text-2xl bg-blue-400 rounded-md p-3 inline-block m-2">React</div>
          <div className="text-black text-2xl bg-violet-400 rounded-md p-3 inline-block m-2">Redux/Redux Toolkit</div>
          <div className="text-black text-2xl bg-green-500 rounded-md p-3 inline-block m-2">Node.js/Express</div>
          <div className="text-black text-2xl bg-amber-600 rounded-md p-3 inline-block m-2">Git</div>
          <div className="text-black text-2xl bg-indigo-300 rounded-md p-3 inline-block m-2">Webpack</div>
      </div>
    </div>
  </div>
  
);
