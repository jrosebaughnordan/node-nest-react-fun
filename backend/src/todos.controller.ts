// src/todos.controller.ts
import { Body, Controller, Get, Param, Patch, Post } from "@nestjs/common";

type Todo = { id: string; title: string; done: boolean };

const db: Todo[] = [
  { id: "1", title: "Learn React basics", done: false },
  { id: "2", title: "Wire up Axios client", done: false },
];

@Controller("api/todos")
export class TodosController {
  @Get()
  list(): Todo[] {
    return db;
  }

  @Post()
  create(@Body() body: { title: string }): Todo {
    const todo = { id: String(Date.now()), title: body.title, done: false };
    db.unshift(todo);
    return todo;
  }

  @Patch(":id")
  toggle(@Param("id") id: string): Todo {
    const i = db.findIndex((t) => t.id === id);
    if (i === -1) throw new Error("Not found");
    db[i] = { ...db[i], done: !db[i].done };
    return db[i];
  }
}
