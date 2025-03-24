"use client";

import todoAtom from "@/lib/atom/todoAtom";
import { useAtom } from "jotai";
import { Card, CardContent } from "../ui/card";
import TodoCard from "./TodoCard";

const TodoDisplay = () => {
  const [todos, setTodos] = useAtom(todoAtom);

  if (todos.length === 0) {
    return (
      <Card>
        <CardContent>
          <div className="text-center text-3xl font-bold">
            No Todo List Available😍😍
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <>
      <div className="grid gap-4">
        {todos.map((items, index) => (
          <TodoCard info={items} key={index} />
        ))}
      </div>
    </>
  );
};

export default TodoDisplay;
