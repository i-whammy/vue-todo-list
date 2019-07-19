import Task from "@/domains/Task";

describe('Task', () => {
    describe('toggleDone', () => {
        test('make task done when the task is undone', () => {
            const task = new Task(false, "task1", new Date())
            const expected = new Task(true, "task1", new Date())
            expect(task.toggleDone()).toEqual(expected)
        });
        test('make task undone when the task is done', () => {
            const task = new Task(true, "task1", new Date())
            const expected = new Task(false, "task1", new Date())
            expect(task.toggleDone()).toEqual(expected)
        });
    });

    describe('done', () => {
        test('make task done when the task is undone', () => {
            const task = new Task(false, "task1", new Date())
            const expected = new Task(true, "task1", new Date())
            expect(task.done()).toEqual(expected)
        });
        test('make task done when the task is done', () => {
            const task = new Task(true, "task2", new Date())
            const expected = new Task(true, "task2", new Date())
            expect(task.done()).toEqual(expected)
        })
    });

    describe('undone', () => {
        test('make task done when the task is done', () => {
            const task = new Task(true, "task1", new Date())
            const expected = new Task(false, "task1", new Date())
            expect(task.undone()).toEqual(expected)
        });
        test('make task done when the task is undone', () => {
            const task = new Task(false, "task2", new Date())
            const expected = new Task(false, "task2", new Date())
            expect(task.undone()).toEqual(expected)
        })
    });
});