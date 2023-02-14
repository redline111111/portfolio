import { DetailedHTMLProps, HTMLAttributes } from "react";

export const skills = {
    html: {
        name: 'HTML/CSS',
        color: 'bg-zinc-400'
    },
    scss: {
        name: 'SCSS/Tailwind',
        color: 'bg-cyan-200'
    },
    js: {
        name: 'JavaScript',
        color: 'bg-yellow-200'
    },
    ts: {
        name: 'TypeScript',
        color: 'bg-indigo-400'
    },
    next:{
        name: 'Next.js',
        color: 'bg-sky-500'
    },
    react: {
        name: 'React',
        color: 'bg-blue-400'
    },
    redux: {
        name: 'Redux/Redux Toolkit',
        color: 'bg-violet-400'
    },
    node: {
        name: 'Node.js/Express',
        color: 'bg-green-500'
    },
    nest: {
        name: 'Nest',
        color: 'bg-rose-500'
    },
    typeorm: {
        name: 'TypeORM',
        color: 'bg-blue-500'
    },
    git: {
        name: 'Git',
        color: 'bg-amber-600'
    },
    webpack: {
        name: 'Webpack',
        color: 'bg-indigo-300'
    }
}

export interface TagProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    skill:{
        name: string,
        color: string
    },
    type: 'card' | 'primary',
}