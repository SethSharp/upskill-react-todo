import { TaskData } from '@/types'
import { Circle } from 'lucide-react'

export default function Task({
    task,
    draggable = false,
    onDragStart,
}: {
    task: TaskData,
    onToggle: () => void,
    draggable?: boolean,
    onDragStart?: (event: React.DragEvent<HTMLDivElement>) => void,
}) {
    const classes = `fill-current ${task.completed ? "text-green-500" : "text-red-500"}`

    return (
        <div
            className="p-2 rounded-md bg-slate-800 flex items-center justify-between px-4"
            draggable={draggable}
            onDragStart={onDragStart}
        >
            <p>{task.description}</p>
            <Circle className={classes} />
        </div>
    )
}
