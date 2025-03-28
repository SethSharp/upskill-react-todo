import { type TaskData } from '@/types';
import { Circle } from 'lucide-react';
import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { useForm } from '@inertiajs/react';
import { Button } from '@/components/ui/button';

export default function Task({
    task,
    draggable = false,
    onDragStart,
}: {
    task: TaskData,
    draggable?: boolean,
    onDragStart?: (event: React.DragEvent<HTMLDivElement>) => void,
}) {
    const classes = `fill-current ${task.status === 'completed' ? "text-green-500" : "text-red-500"}`

    const [showInput, setShowInput] = useState<boolean>(false)

    const { data, setData, errors, put, processing} = useForm({
        description: task.description
    });

    const updateTask = (e) => {
        e.preventDefault();

        put(route('tasks.update', {
            task: task.id,
        }), {
            onSuccess: () => {
              setShowInput(false)
            },
            onError: (errors) => {
                console.log(errors)
            }
        })
    }

    return (
        <div>
            {! showInput ?
                <div
                    onClick={() => setShowInput(true)}
                    className="p-2 rounded-md bg-slate-800 flex items-center justify-between px-4"
                    draggable={draggable}
                    onDragStart={onDragStart}
                >
                    <p>{task.description}</p>
                    <Circle className={classes} />
                </div>
                :
                <div>
                    <form onSubmit={updateTask}>
                        <Input
                            id="description"
                            value={data.description}
                            onChange={(e) => setData('description', e.target.value)}
                            type="text"
                            className="mt-1 block w-full"
                            placeholder="Description"
                        />
                        <div className={"w-full flex justify-end gap-2 mt-4"}>
                            <Button onClick={() => setShowInput(false)} size="sm" variant="secondary">Cancel</Button>
                            <Button size="sm" disabled={processing}>Update</Button>
                        </div>
                    </form>
                </div>
            }
        </div>
    )
}
