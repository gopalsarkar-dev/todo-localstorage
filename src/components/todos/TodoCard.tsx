"use client";

import todoAtom from "@/lib/atom/todoAtom";
import { useAtom } from "jotai";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { Checkbox } from "../ui/checkbox";

const TodoCard = () => {
  const [todos, setTodos] = useAtom(todoAtom);

  console.log(todos);

  const checkToggle = (id: string) => {
    const updateCheck = todos.map((item) =>
      item.id === id ? { ...item, complet: !item.complet } : item,
    );
    setTodos(updateCheck);
  };

  const delFun = (id: string) => {
    setTodos(todos.filter((fid) => fid.id !== id));
  };

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
      <div className="space-y-4">
        {todos.map((info, index) => {
          return (
            <Card key={index} className="">
              <CardContent className="flex items-center justify-between gap-6">
                <div className="flex items-center space-x-5">
                  <Checkbox
                    className="h-6 w-6 cursor-pointer"
                    checked={info.complet}
                    onCheckedChange={() => checkToggle(info.id)}
                  />
                  <label
                    className={`text-lg ${
                      info.complet ? "line-through decoration-2" : ""
                    }`}
                  >
                    {info.todo_text}
                  </label>
                </div>

                <div className="">
                  <Button
                    variant={"destructive"}
                    className="cursor-pointer"
                    onClick={() => delFun(info.id)}
                  >
                    Delete
                  </Button>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </>
  );
};

export default TodoCard;
