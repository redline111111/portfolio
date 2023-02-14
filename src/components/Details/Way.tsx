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
                Сентябрь 2021 — декабрь 2021
            </div>
            <div>
                <span className="font-bold">Fullstack-разработчик в стартап проекте.</span>
                <br />
                <li> Верстка макета по дизайну на <span className="text-blue-400">React</span> </li>
                <li> Добавление и обновление функционала </li>
                <li> Создание backend-архитектуры, с легкой масштабируемостью на <span className="text-green-500">Node.js + Express + MongoDB</span></li>
                <li> Участие в планировании бизнес-модели и стратегии развития </li>
            </div>

            <br />

            <div className="text-3xl mb-2">
                Декабрь 2021 — май 2022
            </div>
            <div>
                <span className="font-bold">Фриланс</span>
                <br/>
                Разработка сайтов, в основном доработка существующего функционала.
                Чаще всего приходилось накидывать оплату, авторизацию с разных сервисов, систему заказов, а также исправлять баги,
            </div>

            <br />
            
            <div className="text-3xl mb-2">
                Май 2022 — июнь 2022
            </div>
            <div>
                <span className="font-bold">Frontend-разработчик в Университет 2035.</span>
                <br/>
                <li> Работа с интерактивными картами</li>
                <li> Алгоритмы поиска </li>
                <li> Небольшой опыт с CDN и Google Analytics </li>
            </div>

            <br />

            <div className="text-3xl mb-2">
                Июль 2022 — октябрь 2022
            </div>
            <div>
                <span className="font-bold">Frontend-разработчик в морском стартапе Entity.</span>
                <br/>
                Работа в региональном стартап-проекте. В мои обязанности входила разработка:
                <li>Микросервисов для автоматизации поиска маршрутов на море,</li>
                <li> Веб-приложения с выводом данных в виде дэшборда,</li>
                <li>Решений, для оптимизации существующего контента на стороне клиента.</li>

                Работал с PWA, D3.js, Splunk
                <br />
            </div> 

            <br />
 
            <div className="text-3xl mb-2">
                Октябрь 2022 — по настоящее время
            </div>
            <div>
                <span className="font-bold">Фриланс</span>
                <br/>Разработка и доработка сайтов на заказ всех видов:
                <ol type="1">
                    <li>1. E-commerce,</li>
                    <li>2. Заказы пищевой продукции,</li>
                    <li>3. Доставка цветов,</li>
                    <li>4. Визитки,</li>
                    <li>5. Для небольших мероприятий.</li>
                </ol>
                    
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
