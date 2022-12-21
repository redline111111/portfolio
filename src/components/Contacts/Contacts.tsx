
export const Contacts = () => (
    <>
      <h2 id="contacts" className="text-white mt-36 text-5xl text-center mb-16 ">Контакты</h2>

      <div className="mt-0 mb-10 mx-auto w-9/12 text-white text-2xl flex gap-10 max-[600px]:flex-col">
        <div className="w-3/12  h-60 rounded-3xl relative max-[600px]:w-full">
          <a href="https://github.com/redline111111">
            <div className="bg-gray-500 w-full rounded-3xl h-full bg-no-repeat bg-center cursor-pointer absolute hover:bottom-5 hover:right-5 " style={{backgroundImage: `url("github.png")`, backgroundSize: "cover"}}></div>
          </a>
        </div>
        <div className="w-3/12  h-60 rounded-3xl relative max-[600px]:w-full">
          <a href="https://vk.com/id220620469">
            <div className="bg-blue-500 w-full rounded-3xl h-full bg-no-repeat bg-center cursor-pointer absolute hover:bottom-5 hover:right-5" style={{backgroundImage: `url("vk3.png")`, backgroundSize: "cover"}}></div>
          </a>
        </div>
        <div className="w-3/12  h-60 rounded-3xl relative max-[600px]:w-full">
          <a href="https://hh.ru/resume/4b9d2466ff09b246460039ed1f374550446576">
            <div className="w-full bg-red-500 rounded-3xl h-full bg-no-repeat bg-center cursor-pointer absolute hover:bottom-5 hover:right-5" style={{backgroundImage: `url("hh2.png")`, backgroundSize: "cover"}}></div>
          </a>
        </div>
        <div className="w-3/12 h-60 rounded-3xl relative max-[600px]:w-full">
          <a href="https://t.me/redline111111">
            <div className="w-full bg-blue-300 rounded-3xl h-full bg-no-repeat bg-center cursor-pointer absolute hover:bottom-5 hover:right-5" style={{backgroundImage: `url("tg2.png")`, backgroundSize: "cover"}}></div>
          </a>
        </div>
      </div>
    
    </>
  
);
