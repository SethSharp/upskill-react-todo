import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem, TaskData } from '@/types';
import { Head, router } from '@inertiajs/react';
import Task from '@/components/tasks/task';
import { useState } from 'react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
    },
];

/**
 * todo:
 * 1. Do no show dragging task if in the same state
 * 2. Change endpooint to update state (change column name to state)
 * 3. Create / Update endpoint (the description
 */

export default function Dashboard({ completedTasks, incompleteTasks }: {completedTasks: TaskData[], incompleteTasks: TaskData[]}) {
    const [draggingTask, setDraggingTask] = useState<TaskData | null>(null);
    const [currentState, setCurrentState] = useState<string | null>(null);

    const onDragStart = (task: TaskData, state: string) => {
        setDraggingTask(task);
    }

    const onCompleteDragOver = (event: React.DragEvent) => {
        event.preventDefault();
        setCurrentState('complete');
    }

    const onIncompleteDragOver = (event: React.DragEvent) => {
        event.preventDefault();
        setCurrentState('incomplete');
    }

    const onIncompleteDrop = (event: React.DragEvent) => {
        event.preventDefault()
        router.put(route('tasks.update', {
            task: draggingTask?.id,
            completed: false,
        }), {}, {
            onFinish: () => {
                setDraggingTask(null)
            }
        })
    }

    const onCompleteDrop = (event: React.DragEvent) => {
        event.preventDefault()
        router.put(route('tasks.update', {
            task: draggingTask?.id,
            completed: true,
        }), {}, {
            onFinish: () => {
                console.log('finished')
                setDraggingTask(null)
            }
        })
    }

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <div className={"flex gap-2 w-full"}>
                    <div onDrop={onCompleteDrop} onDragOver={onCompleteDragOver} className={"bg-slate-800 rounded-md w-1/2 p-2"}>
                        <h2 className={"font-bold text-lg"}>
                            Completed
                        </h2>
                        <ul className={'list-decimal list-inside space-y-2 mt-4'}>
                            {completedTasks.map(task => (
                                <Task
                                    draggable={true}
                                    onDragStart={ () => onDragStart(task, 'complete') }
                                    task={task}
                                    key={task.id}
                                />
                            ))}

                            {
                                draggingTask && currentState === 'complete'
                                    ? <Task task={draggingTask} />
                                    : ''
                            }
                        </ul>
                    </div>

                    <div onDrop={onIncompleteDrop} onDragOver={onIncompleteDragOver} className={'bg-slate-800 rounded-md w-1/2 p-2'}>
                        <h2 className={"font-bold text-lg"}>
                            In-complete
                        </h2>
                        <ul className={'list-decimal list-inside space-y-2 mt-4'}>
                            {incompleteTasks.map(task => (
                                <Task
                                    draggable={true}
                                    onDragStart={ () => onDragStart(task, 'incomplete') }
                                    task={task}
                                    key={task.id}
                                />
                            ))}
                            {
                                draggingTask && currentState === 'incomplete'
                                    ? <Task task={draggingTask} />
                                    : ''
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
