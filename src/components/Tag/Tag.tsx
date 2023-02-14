import { TagProps } from "./Tag.interface"
import cn from 'classnames'
export const Tag = ({skill, type, className}: TagProps): JSX.Element => {
    return (
        <div className={cn(skill.color, 
        {
            'shadow-button text-black text-1xl rounded-md p-3 h-12': type === 'card',
            'text-black text-2xl rounded-md p-3 inline-block m-2': type === 'primary',
        })}>
            {skill.name}
        </div>
    )
}