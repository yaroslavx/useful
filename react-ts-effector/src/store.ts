import { createEvent, createStore } from 'effector';

export const createTask = createEvent<string>();

export const $tasks = createStore<string[]>([]);

const updateStore = (state: string[], data: string) => {
  if (state.includes(data)) {
    return;
  }
  state.push(data);

  return [...state];
};

$tasks.on(createTask, updateStore);
