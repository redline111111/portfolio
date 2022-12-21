export interface WayItemProps {
    select: number,
}

export const Way = ({select}:WayItemProps) => {
    if (select !== 1) return <></>
    return(
        <>
                <div className="text-3xl mb-2">2018 — 2021</div>
                <div>
                    Я разрабатывал десктопные и игровые приложения на C# + Unity, а так же изучал алгоритмы и стурктуры данных на C++. 
                </div>

                <br />
                <div className="text-3xl mb-2">2021 — 2022, Май</div>
                <div>
                    Занимался внеурочной деятельностью в ДВФУ в качестве Full-stack специалиста.
                    <br /> 
                    В мои обязанности входило следующее: 
                    <li> Доработка существующего функционала на <span className="text-purple-800">PHP</span> + <span className="text-yellow-200">JavaScript</span> </li>
                    <li> Верстка страниц на HTML/CSS </li>
                    <li> Участие в проектах, улучшающих жизнь кампуса </li>
                </div>
                
                <br />
                <div className="text-3xl mb-2">
                    2022, Май — текущее время
                </div>
                <div>
                    Начал увлекаться web-разработкой более подробно.
                    <br />
                    Первым делом изучил <span className="text-yellow-200">JavaScript</span>, <span className="text-blue-400">React</span> и <span className="text-violet-400">Redux</span> по платным курсам. Мне было мало поверхностной информации по <span className="text-yellow-200">JS</span>, поэтому прочитал книгу "JavaScript. Подробное руководство", Д. Флэнган.
                    <br />
                    Следующим этапом для меня стала разработка серверной части приложения. Я стал изучать <span className="text-green-500">Node.js + Express + MongoDB</span> по платным курсам, но в основном пользовался документациями
                    <br />
                    После всего, я решил отточить навыки верстки на <span className="text-cyan-200">SCSS/Tailwind</span> и изучить <span className="text-indigo-500">TypeScript</span>.
                </div>
        </>
    )
};
