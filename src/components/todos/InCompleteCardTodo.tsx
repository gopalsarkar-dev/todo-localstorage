"use client";

import todoAtom from "@/lib/atom/todoAtom";
import { useAtom } from "jotai";
import TodoCard from "./TodoCard";
import { Card, CardContent } from "../ui/card";

const InCompleteCardTodo = () => {
  const [todos, setTodos] = useAtom(todoAtom);

  if (todos.filter((ids) => !ids.complet).length === 0) {
    return (
      <Card>
        <CardContent>
          <div className="text-center text-3xl font-bold">
            No InComplete Todo List Available😍😍
          </div>
        </CardContent>
      </Card>
    );
  }
  return (
    <>
      <div className="grid gap-4">
        {todos
          .filter((items) => !items.complet)
          .map((items, index) => {
            return (
              <div className="" key={index}>
                <TodoCard info={items} />
              </div>
            );
          })}
      </div>
    </>
  );
};

export default InCompleteCardTodo;
