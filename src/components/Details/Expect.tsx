export interface ExpectItemProps {
    select: number,
}

export const Expect = ({select}:ExpectItemProps) => {
    if (select !== 2) return <></>
    return(
        <>
            <div>
                Я хотел бы работать <span className="text-blue-400">React</span>/<span className="text-indigo-700">Next</span> frontend-разработчиком, либо full-stack на <span className="text-green-500">Node.js</span>/<span className="text-rose-500">NestJS</span>.
                
                <br />
                Больше всего мне интересно работать над новыми для себя задачами. Я не боюсь браться за что-то сложное и необычное. 
            </div>
        </>
    )
};
