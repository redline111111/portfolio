import { useState } from "react";

export const Details = () => {
  const [select, setSelect] = useState<number>(0);
  const headers: string[] = ["О себе","Мой путь","Ожидания", "Планы"]; 
  const text: string[] = ["",
  'Я 3 года разрабатывал десктопные и игровые приложения на C# + Unity, а так же изучал алгоритмы и стурктуры данных на C++. Полгода назад открыл для себя web-разработку. Все технологии я учил по платным курсам, статьям и документациям.', 
  "Хотел бы работать React/Vue frontend-разработчиком, либо backend на Node.js/NestJS. Я не против работы с однотипными задачами, но также хотел бы решать сложные, алгоритмические задания для повышения квалификации.", 
  "Что я учу сейчас: Next, Nest. В ближайшем будущем: Turbopack или Vite, GraphQL, ASP .NET Core, Мобильная разработка на Flutter, Docker + Ansible"]; 

  return(
    <>
      <h2 className="text-white mt-36 text-5xl text-center mb-16 ">Подробнее</h2>
    
      <div className="my-0 mx-auto w-9/12 text-white text-2xl">
          <div className="flex w-full justify-between mb-12">
            {headers.map((item, index)=>(
              index === select ?
                <div className="bg-indigo-400 w-2/12 rounded-3xl border-lime-200 border-2 text-lime-200 p-3 text-center font-semibold text-3xl cursor-pointer ">
                  {item}
                </div> : <div className="w-2/12 p-3 text-center text-3xl cursor-pointer rounded-3xl hover:border-lime-100 hover:border-2 hover:p-auto hover:bg-indigo-100 hover:text-black" onClick={()=>setSelect(index)}>
                  {item}
                </div>
            ))}
          </div>
          <div>
          {text[select]}
           
          </div>
      
      </div>
    </>
  )
};
