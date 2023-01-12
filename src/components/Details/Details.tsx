import { useState } from "react";
import { About } from "./About";
import { Expect } from "./Expect";
import { Plan } from "./Plan";
import { Way } from "./Way";
export const Details = () => {
  const [select, setSelect] = useState<number>(0);
  const headers: string[] = ["О себе","Мой путь","Ожидания", "Планы"]; 

  return(
    <>
      <h2 className="text-white mt-36 text-5xl text-center mb-16 ">Подробнее</h2>
    
      <div className="my-0 mx-auto w-9/12 text-white text-2xl">
          <div className="flex w-full justify-between mb-12 max-[1200px]:flex-col ">
            {headers.map((item, index)=>(
              index === select ?
                <div className="bg-indigo-400 w-2/12 rounded-3xl border-lime-200 border-2 text-lime-200 p-3 text-center font-semibold text-3xl cursor-pointer max-[1200px]:w-full">
                  {item}
                </div> : <div className="w-2/12 p-3 text-center text-3xl cursor-pointer rounded-3xl hover:border-lime-100 hover:border-2 hover:p-auto hover:bg-indigo-100 hover:text-black max-[1200px]:w-full" onClick={()=>setSelect(index)}>
                  {item}
                </div>
            ))}
          </div>
          <div>
              <About select={select}/>
              <Way select={select}/>
              <Expect select={select}/>
              <Plan select={select}/>
          </div>
      
      </div>
    </>
  )
};
