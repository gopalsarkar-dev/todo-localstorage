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
      <div className="pb-28 sm:pb-6">
        {todos.map((item, index) => {
          return (
            <div className="space-y-4" key={index}>
              <TodoCard info={item} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default TodoDisplay;
