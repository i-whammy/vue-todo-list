import Tasks from "@/domains/Tasks";
import Task from '@/domains/Task';

describe('Tasks', () => {
    describe('add', () => {
        test('Taskの集合に新しいTaskを追加したものを返す', () => {
            const tasks = new Tasks([])
            const task = new Task("id", false, "task-name")
            const expected = new Tasks([task])
            expect(tasks.add(task)).toEqual(expected)
        });
    });
});