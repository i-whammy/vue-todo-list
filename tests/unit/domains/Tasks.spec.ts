import Tasks from "@/domains/Tasks";
import Task from '@/domains/Task';

describe('Tasks', () => {
    describe('add', () => {
        test('add given task at the last of Tasks and return it', () => {
            const tasks = new Tasks([])
            const task = new Task("id", false, "task-name")
            const expected = new Tasks([task])
            expect(tasks.add(task)).toEqual(expected)
        });
    });

    describe('remove', () => {
        test('remove task of given index from Tasks and return it', () => {
            const task1 = new Task("id1", false, "task-name")
            const task2 = new Task("id2", false, "task-name")
            const tasks = new Tasks([task1, task2])
            const expected = new Tasks([task1])
            expect(tasks.remove(1)).toEqual(expected)
        });
    });
});