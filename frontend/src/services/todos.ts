// src/services/todos.ts
import { api, isAxiosError } from "../lib/api";

export type Todo = { id: string; title: string; done: boolean };
export type CreateTodoDto = { title: string };

export async function listTodos(): Promise<Todo[]> {
  const { data } = await api.get<Todo[]>("/todos");
  return data;
}

export async function createTodo(input: CreateTodoDto): Promise<Todo> {
  const { data } = await api.post<Todo>("/todos", input);
  return data;
}

export async function toggleDone(id: string): Promise<Todo> {
  const { data } = await api.patch<Todo>(`/todos/${id}`, {});
  return data;
}

// Cancellation + retry example
export async function getTodoWithCancelAndRetry(id: string): Promise<Todo> {
  const abort = new AbortController();
  const t = setTimeout(() => abort.abort(), 5000);

  let lastError: unknown;

  for (let attempt = 1; attempt <= 2; attempt++) {
    try {
      const { data } = await api.get<Todo>(`/todos/${id}`, {
        signal: abort.signal,
      });
      clearTimeout(t);
      return data;
    } catch (err) {
      lastError = err;
      if (isAxiosError(err) && err.code === "ECONNABORTED" && attempt === 1) {
        continue; // one retry on timeout
      }
      clearTimeout(t);
      throw err;
    }
  }
  throw lastError;
}
