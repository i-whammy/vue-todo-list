import Task from "@/domains/Task";

describe('Task', () => {
    describe('toggleDone', () => {
        test('make task done when the task is undone', () => {
            const task = new Task("id1", false, "task1", new Date())
            const expected = new Task("id1", true, "task1", new Date())
            expect(task.toggleDone()).toEqual(expected)
        });
        test('make task undone when the task is done', () => {
            const task = new Task("id1", true, "task1", new Date())
            const expected = new Task("id1", false, "task1", new Date())
            expect(task.toggleDone()).toEqual(expected)
        });
    });

    describe('done', () => {
        test('make task done when the task is undone', () => {
            const task = new Task("id1", false, "task1", new Date())
            const expected = new Task("id1", true, "task1", new Date())
            expect(task.done()).toEqual(expected)
        });
        test('make task done when the task is done', () => {
            const task = new Task("id1", true, "task2", new Date())
            const expected = new Task("id1", true, "task2", new Date())
            expect(task.done()).toEqual(expected)
        })
    });

    describe('isExpired', () => {
        test('return true when the duedate is before today', () => {
            const task = new Task('id1', false, "task-expired", new Date("2019-01-01"))
            expect(task.isExpired()).toBeTruthy()
        });
        test('return false when the duedate is after today', () => {
            const task = new Task('id1', false, "task-of-further-future", new Date("2099-01-01"))
            expect(task.isExpired()).toBeFalsy()
        });
        test('return false when the duedate is today', () => {
            const task = new Task('id1', false, "task-of-due-today", new Date())
            expect(task.isExpired()).toBeFalsy()            
        });
        test('return false when the duedate is undefined', () => {
            const task = new Task('id1', false, "task-of-no-due-date")
            expect(task.isExpired()).toBeFalsy()                        
        });
    });

    describe('undone', () => {
        test('make task done when the task is done', () => {
            const task = new Task("id1", true, "task1", new Date())
            const expected = new Task("id1", false, "task1", new Date())
            expect(task.undone()).toEqual(expected)
        });
        test('make task done when the task is undone', () => {
            const task = new Task("id1", false, "task2", new Date())
            const expected = new Task("id1", false, "task2", new Date())
            expect(task.undone()).toEqual(expected)
        })
    });
});