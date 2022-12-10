
export const Greetings = () => (
    <div className="flex w-9/12 my-0 mx-auto max-[600px]:flex-col max-[600px]:w-full ">
    <div className="mr-10 mt-10 w-7/12 relative my-0 mx-auto max-[600px]:w-full max-[600px]:h-128" >
      <div className="w-full h-full bg-no-repeat bg-center shadow-blur" style={{backgroundImage: `url("me2.png")`, backgroundSize: "cover"}}></div> 
    </div>
    <div className="w-5/12 max-[600px]:w-full ">
      <h3 className="text-white mt-36 text-4xl max-[600px]:text-center">Меня зовут Илья</h3>
      <h4 className="text-white mt-12 text-2xl max-[600px]:text-center">Мне 20 лет<p/>Я начинающий frontend разработчик</h4>
      <button className="text-black mt-12 text-2xl bg-orange-700 rounded-3xl p-3 inline-block max-[600px]:w-full">Связаться со мной</button>
      <div className="mt-12">
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
{/* <div className="flex my-0 mx-auto flex-col">
<div className="mt-10 w-full h-96 relative my-0 mx-auto"> */}