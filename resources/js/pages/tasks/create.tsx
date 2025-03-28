import AppLayout from '@/layouts/app-layout';

import type { BreadcrumbItem } from '@/types';
import { Head, useForm } from '@inertiajs/react';
import HeadingSmall from '@/components/heading-small';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Transition } from '@headlessui/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
    },
    {
        title: 'Create',
        href: '/tasks/create',
    },
];

export default function CreateTask() {
    const { data, setData, errors, post, processing} = useForm({
        description: ''
    });

    const createTask = (e) => {
        e.preventDefault();

        post(route('tasks.store'), {
            onError: (errors) => {
                console.log(errors)
            }
        })
    }

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Create" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <HeadingSmall title="Create Task" description="Enter small descriptive title for your task." />

                <form onSubmit={createTask} className={"max-w-md space-y-4"}>
                    <div className="grid gap-2">
                        <Label htmlFor="description">Description</Label>

                        <Input
                            id="description"
                            value={data.description}
                            onChange={(e) => setData('description', e.target.value)}
                            type="text"
                            className="mt-1 block w-full"
                            placeholder="Description"
                        />

                        <InputError message={errors.description} />
                    </div>

                    <div className="flex justify-end gap-4">
                        <Button disabled={processing}>Create Task</Button>
                    </div>
                </form>
            </div>
        </AppLayout>
    );
}