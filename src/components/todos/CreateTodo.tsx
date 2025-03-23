"use client";
import todoAtom from "@/lib/atom/todoAtom";
import { useAtom } from "jotai";
import {} from "lucide-react";
import { useState } from "react";
import { Button } from "../ui/button";
import { Card, CardHeader, CardTitle } from "../ui/card";
import { Input } from "../ui/input";

const CreateTodo = () => {
  const [todo_text, setTodo_text] = useState("");

  const [todos, setTodos] = useAtom(todoAtom);

  const todoHandlerFun = () => {
    if (todo_text.trim() !== "") {
      setTodos([
        ...todos,
        { id: Date.now().toString(), todo_text, complet: false },
      ]);

      setTodo_text("");
    } else {
      console.log("Enter Your Task");
    }
  };

  return (
    <>
      <div className="fixed bottom-8 sm:right-72">
        <Card className="w-[320px]">
          <CardHeader className="space-y-4">
            <CardTitle className="text-center text-2xl">Create Todo</CardTitle>

            <Input
              type="text"
              value={todo_text}
              placeholder="Todo add to your collection"
              onChange={(e) => setTodo_text(e.target.value)}
            />
            <Button className="cursor-pointer" onClick={todoHandlerFun}>
              Add Todo
            </Button>
          </CardHeader>
        </Card>
      </div>
    </>
  );
};

export default CreateTodo;
