import Tasks from "@/domains/Tasks";
import Task from '@/domains/Task';

describe('Tasks', () => {
    describe('add', () => {
        test('Taskの集合の一番最後に新しいTaskを追加したものを返す', () => {
            const tasks = new Tasks([])
            const task = new Task("id", false, "task-name")
            const expected = new Tasks([task])
            expect(tasks.add(task)).toEqual(expected)
        });
    });

    describe('remove', () => {
        test('Taskの集合から指定したインデックスのtaskを削除したものを返す', () => {
            const task1 = new Task("id1", false, "task-name")
            const task2 = new Task("id2", false, "task-name")
            const tasks = new Tasks([task1, task2])
            const expected = new Tasks([task2])
            expect(tasks.remove(0)).toEqual(expected)
        });
        test('Taskの集合から指定したインデックスのtaskを削除したものを返す', () => {
            const task1 = new Task("id1", false, "task-name")
            const task2 = new Task("id2", false, "task-name")
            const tasks = new Tasks([task1, task2])
            const expected = new Tasks([task1])
            expect(tasks.remove(1)).toEqual(expected)
        });
    });
});