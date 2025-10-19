import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { TodosController } from "./todos.controller";

@Module({
  controllers: [AppController, TodosController],
})
export class AppModule {}
