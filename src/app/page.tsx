import CreateTodo from "@/components/todos/CreateTodo";
import TodoCard from "@/components/todos/TodoCard";
import TodoDisplay from "@/components/todos/TodoDisplay";
import { Metadata } from "next";

export const generateMetadata = (): Metadata => ({
  title: "Todo || All Todos",
  description: "",
});

const page = () => {
  return (
    <>
      <TodoDisplay />

      <CreateTodo />
    </>
  );
};

export default page;
