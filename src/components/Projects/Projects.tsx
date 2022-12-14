export const Projects = () => (
    <>
      <h2 className="text-white mt-36 text-5xl text-center mb-16 ">Мои проекты</h2>

      <div className="my-0 mx-auto flex flex-col w-9/12 justify-center items-center gap-5">
        <div className="flex w-full justify-between max-[600px]:flex-col max-[600px]:gap-5">
          <div className="w-card bg-white h-80 rounded-2xl border-amber-300 border-2 flex max-[600px]:w-full max-[600px]:h-128">
            <div className="w-1/3 rounded-l-2xl overflow-hidden relative" >
              <a href="https://github.com/redline111111/dbd-helper-site ">
                <img src="gh-icon.png" alt="" className="cursor-pointer absolute z-10 left-3/4 w-3/12 mt-1 mr-1"/>
              </a>
              
              <div className="z-0 w-full rounded-l-2xl h-full bg-no-repeat bg-center cursor-pointer duration-300 hover:scale-125" style={{backgroundImage: `url("dbd.jpg")`, backgroundSize: "cover"}}></div>
            </div>
            <div className="w-2/3 rounded-r-2xl p-4 relative">
              <h3 className="font-semibold text-xl text-center">
                DBD-HELPER
              </h3>
              <div className="mt-3">
                Проект создавался с целью помочь игрокам в 
                компьютерной онлайн игре Dead by Daylight. 
              </div>
              <div className="mt-10 mb-3 flex
              w-full h-30 flex-wrap bottom-0 absolute gap-3 justify-start ">
                <div className="shadow-button text-black text-1xl bg-zinc-400 rounded-md p-3 h-12">HTML/CSS</div>
                <div className="shadow-button text-black text-1xl bg-yellow-200 rounded-md p-3 h-12">JavaScript</div>
                <div className="shadow-button text-black text-1xl bg-blue-400 rounded-md p-3 h-12">React</div>
                <div className="shadow-button text-black text-1xl bg-violet-400 rounded-md p-3 h-12">Redux/Redux Toolkit</div>
                <div className="shadow-button text-black text-1xl bg-green-500 rounded-md p-3 h-12">Node.js/Express</div></div>
            </div>
          </div>
          <div className="w-card bg-white h-80 rounded-2xl border-amber-300 border-2 flex max-[600px]:w-full max-[600px]:h-128">
          <div className="w-1/3 rounded-l-2xl overflow-hidden relative" >
              <a href="https://github.com/redline111111/WorkFlow-platform-client">
                <img src="gh-icon.png" alt="" className="cursor-pointer absolute z-10 left-3/4 w-3/12 mt-1 mr-1"/>
              </a>
              <div className="w-full rounded-l-2xl h-full bg-no-repeat bg-center cursor-pointer duration-300 hover:scale-125 " style={{backgroundImage: `url("workflow.png")`, backgroundSize: "cover"}}></div>
            </div>
            <div className="w-2/3 rounded-r-2xl p-4 relative">
              <h3 className="font-semibold text-xl text-center">
                Workflow-project
              </h3>
              <div className="mt-3">
                Проект разработан для Хакатона. Сайт реализует бота-автоответчика на популярные и не очень вопросы, а так же интерактивную карту.
              </div>
              <div className="mt-10 mb-3 flex
              w-full h-30 flex-wrap bottom-0 absolute gap-3 justify-start ">
                <div className="shadow-button text-black text-1xl bg-zinc-400 rounded-md p-3 h-12">HTML/CSS</div>
                <div className="shadow-button text-black text-1xl bg-yellow-200 rounded-md p-3 h-12">JavaScript</div>
                <div className="shadow-button text-black text-1xl bg-blue-400 rounded-md p-3 h-12">React</div>
                <div className="shadow-button text-black text-1xl bg-violet-400 rounded-md p-3 h-12">Redux/Redux Toolkit</div>
                <div className="shadow-button text-black text-1xl bg-green-500 rounded-md p-3 h-12">Node.js/Express</div></div>
            </div>
          </div>
        </div>
        <div className="flex w-full justify-between max-[600px]:flex-col max-[600px]:gap-5">
          <div className="w-card bg-white h-80 rounded-2xl border-amber-300 border-2 flex max-[600px]:w-full max-[600px]:h-128" >
          <div className="w-1/3 rounded-l-2xl overflow-hidden relative" >
              <a href="https://github.com/redline111111/gh-user-finder">
                <img src="gh-icon.png" alt="" className="cursor-pointer absolute z-10 left-3/4 w-3/12 mt-1 mr-1"/>
              </a>
              <a href="https://redline111111.github.io/gh-user-finder/">
                <div className="w-full rounded-l-2xl h-full bg-no-repeat bg-center cursor-pointer duration-300 hover:scale-125" style={{backgroundImage: `url("github.png")`, backgroundSize: "cover"}}></div>
              </a>
              
            </div>
            <div className="w-2/3 rounded-r-2xl p-4 relative">
              <h3 className="font-semibold text-xl text-center">
                GitHub User finder
              </h3>
              <div className="mt-3">
                Релизует поиск пользоваталей GitHub с удобным выводом статистики
              </div>
              <div className="mt-10 mb-3 flex
              w-full h-30 flex-wrap bottom-0 absolute gap-3 justify-start ">
                <div className="shadow-button text-black text-1xl bg-zinc-400 rounded-md p-3 h-12">HTML/CSS</div>
                <div className="shadow-button text-black text-1xl bg-indigo-500 rounded-md p-3 h-12">TypeScript</div>
                <div className="shadow-button text-black text-1xl bg-blue-400 rounded-md p-3 h-12">React</div>
                <div className="shadow-button text-black text-1xl bg-violet-400 rounded-md p-3 h-12">Redux/Redux Toolkit</div>
                <div className="shadow-button text-black text-1xl bg-green-500 rounded-md p-3 h-12">Node.js/Express</div></div>
            </div>
          </div>
          <div className="w-card bg-white h-80 rounded-2xl border-amber-300 border-2 flex max-[600px]:w-full max-[600px]:h-128">
          <div className="w-1/3 rounded-l-2xl overflow-hidden relative" >
              <a href="https://github.com/redline111111/react-food">
                <img src="gh-icon.png" alt="" className="cursor-pointer absolute z-10 left-3/4 w-3/12 mt-1 mr-1"/>
              </a>
              <a href="https://redline111111.github.io/react-food/">
                <div className="w-full rounded-l-2xl h-full bg-no-repeat bg-center cursor-pointer duration-300 hover:scale-125" style={{backgroundImage: `url("food.jpg")`, backgroundSize: "cover"}}></div>
              </a>

            </div>
            <div className="w-2/3 rounded-r-2xl p-4 relative">
              <h3 className="font-semibold text-xl text-center">
                Food menu
              </h3>
              <div className="mt-3">
                Небольшой проект, выводящий информацию по рецепту из выбранной категории
              </div>
              <div className="mt-10 mb-3 flex
              w-full h-30 flex-wrap bottom-0 absolute gap-3 justify-start ">
                <div className="shadow-button text-black text-1xl bg-zinc-400 rounded-md p-3 h-12">HTML/CSS</div>
                <div className="shadow-button text-black text-1xl bg-yellow-200 rounded-md p-3 h-12">JavaScript</div>
                <div className="shadow-button text-black text-1xl bg-blue-400 rounded-md p-3 h-12">React</div>
                <div className="shadow-button text-black text-1xl bg-violet-400 rounded-md p-3 h-12">Redux/Redux Toolkit</div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full justify-between max-[600px]:flex-col max-[600px]:gap-5">
          <div className="w-card bg-white h-80 rounded-2xl border-amber-300 border-2 flex max-[600px]:w-full max-[600px]:h-128">
          <div className="w-1/3 rounded-l-2xl overflow-hidden relative" >
              <a href="https://github.com/redline111111/movies">
               <img src="gh-icon.png" alt="" className="cursor-pointer absolute z-10 left-3/4 w-3/12 mt-1 mr-1"/>
              </a>
              <a href="https://redline111111.github.io/movies/">
                <div className="w-full rounded-l-2xl h-full bg-no-repeat bg-center cursor-pointer duration-300 hover:scale-125" style={{backgroundImage: `url("movies.jpg")`, backgroundSize: "cover"}}></div>
              </a>
              
            </div>
            <div className="w-2/3 rounded-r-2xl p-4 relative">
              <h3 className="font-semibold text-xl text-center">
                Movie`s list
              </h3>
              <div className="mt-3">
                Маленький проект, который выводит список фильмов и поиск по ним
              </div>
              <div className="mt-10 mb-3 flex
              w-full h-30 flex-wrap bottom-0 absolute gap-3 justify-start ">
                <div className="shadow-button text-black text-1xl bg-zinc-400 rounded-md p-3 h-12">HTML/CSS</div>
                <div className="shadow-button text-black text-1xl bg-yellow-200 rounded-md p-3 h-12">JavaScript</div>
                <div className="shadow-button text-black text-1xl bg-blue-400 rounded-md p-3 h-12">React</div>
              </div>
            </div>
          </div>
          <div className="w-card bg-white h-80 rounded-2xl border-amber-300 border-2 flex max-[600px]:w-full max-[600px]:h-128">
          <div className="w-1/3 rounded-l-2xl overflow-hidden relative" >
              <a href="https://github.com/redline111111/shop-project">
                <img src="gh-icon.png" alt="" className="cursor-pointer absolute z-10 left-3/4 w-3/12 mt-1 mr-1"/>
              </a>
              
              <a href="https://redline111111.github.io/shop-project/">
                <div className="w-full rounded-l-2xl h-full bg-no-repeat bg-center cursor-pointer duration-300 hover:scale-125" style={{backgroundImage: `url("ecommerce.jpg")`, backgroundSize: "cover"}}></div>
              </a>
              
          </div>
          <div className="w-2/3 rounded-r-2xl p-4 relative">
            <h3 className="font-semibold text-xl text-center">
              E-commerce shop
            </h3>
            <div className="mt-3">
              Маленький проект, выводящий товары интернет-магазина с корзиной
            </div>
            <div className="mt-10 mb-3 flex
            w-full h-30 flex-wrap bottom-0 absolute gap-3 justify-start ">
<div className="shadow-button text-black text-1xl bg-zinc-400 rounded-md p-3 h-12">HTML/CSS</div>
              <div className="shadow-button text-black text-1xl bg-yellow-200 rounded-md p-3 h-12">JavaScript</div>
              <div className="shadow-button text-black text-1xl bg-blue-400 rounded-md p-3 h-12">React</div>
            </div>
          </div>
          </div>
        </div>
      </div>
    
    </>
  
);
