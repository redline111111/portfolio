export interface PlanItemProps {
    select: number,
}

export const Plan = ({select}:PlanItemProps) => {
    if (select !== 3) return <></>
    return(
        <>
       
            <div>
            <span className="font-bold">Сейчас: </span> <span className="text-indigo-700">Next.js</span>, <span className="text-rose-500">NestJS</span>
            </div>
            <br />
            <div>
                <span className="font-bold">В ближайшем будущем:</span> <span className="text-purple-500">Turbopack/Vite</span>, <span className="text-pink-500">GraphQL</span>, <span className="text-purple-700">ASP .NET Core</span>, Мобильная разработка на <span className="text-cyan-400">Flutter</span>, <span className="text-blue-500">Docker + Ansible</span>. 
            </div>
        </>
    )
};
