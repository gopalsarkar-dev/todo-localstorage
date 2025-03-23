"use client";

import todoAtom from "@/lib/atom/todoAtom";
import { useAtom } from "jotai";
import TodoCard from "./TodoCard";
import { Card, CardContent } from "../ui/card";

const CompletCardTodo = () => {
  const [todos, setTodos] = useAtom(todoAtom);

  if (todos.filter((id) => id.complet).length === 0) {
    return (
      <Card>
        <CardContent>
          <div className="text-center text-3xl font-bold">
            No Complete Todo List Available😍😍
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <>
      {todos
        .filter((items) => items.complet)
        .map((items, index) => {
          return (
            <div className="pb-28 sm:pb-6" key={index}>
              <TodoCard info={items} />;
            </div>
          );
        })}
    </>
  );
};

export default CompletCardTodo;
