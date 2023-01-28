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

            <div className="text-3xl mb-2">
                    2021, Декабрь — 2022, Июнь
            </div>
            <div>
                Fullstack-разработчик в стартап проекте.
                <br />
                Работал вместе с командой над стартапом, который довели с идеи до MVP и первых инвестиций. В одиночку разрабатывал прототип веб-приложения. В мои обязанности входило:
                <li> Верстка макета по дизайну на <span className="text-blue-400">React</span> </li>
                <li> Добавление и обновление функционала </li>
                <li> Создание backend-архитектуры, с легкой масштабируемостью на <span className="text-green-500">Node.js + Express + MongoDB</span></li>
                <li> Участие в планировании бизнес-модели и стратегии развития </li>
            </div>
            
            <br />
            <div className="text-3xl mb-2">
                2022, Июль — 2022, Октябрь
            </div>
            <div>
                Frontend-разработчик в Университет 2035.
                <br/>
                В основном фиксил баги и дорабатывал страницы сайтов, изредка работал с Tilda. Также доводилось разрабатывать новый функционал.
                Самые интересные задачи были:
                <li> Работа с интерактивными картами</li>
                <li> Алгоритмы поиска </li>
                <li> Небольшой опыт с CDN и Google Analytics </li>
                <br />
            </div>
            <br />
            <div className="text-3xl mb-2">
                2022, Октябрь — 2023, Январь
            </div>
            <div>
                Frontend-разработчик в морском стартапе Entity.
                <br/>
                Работа в региональном стартап-проекте. В мои обязанности входила разработка:
                <li>Микросервисов для автоматизации поиска маршрутов на море,</li>
                <li> Веб-приложения с выводом данных в виде дэшборда,</li>
                <li>Решений, для оптимизации существующего контента на стороне клиента.</li>

                Работал с PWA, D3.js, Splunk
                <br />
            </div>   
                {/* <span className="text-yellow-200">JavaScript</span>, 
                    <span className="text-blue-400">React</span> 
                    <span className="text-violet-400">Redux</span>
                    <span className="text-green-500">Node.js + Express + MongoDB</span>
                    <span className="text-cyan-200">SCSS/Tailwind</span>
                    <span className="text-indigo-500">TypeScript</span>.
                </div> */}
        </>
    )
};
