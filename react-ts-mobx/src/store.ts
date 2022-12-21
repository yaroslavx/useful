import { makeAutoObservable } from 'mobx';

export interface Task {
  id: number;
  text: string;
  done: boolean;
}

const removeTask = (tasks: Task[], id: number): Task[] =>
  tasks.filter((task) => task.id !== id);

const addTask = (tasks: Task[], text: string): Task[] => [
  ...tasks,
  {
    id: Math.max(0, Math.max(...tasks.map(({ id }) => id))) + 1,
    text,
    done: false,
  },
];

// Mobx implementation

class Store {
  tasks: Task[] = [];
  newTask: string = '';

  constructor() {
    makeAutoObservable(this);
  }

  addTask() {
    this.tasks = addTask(this.tasks, this.newTask);
    this.newTask = '';
  }

  removeTask(id: number) {
    this.tasks = removeTask(this.tasks, id);
  }
}

const store = new Store();
export default store;
