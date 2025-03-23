import CreateTodo from "@/components/todos/CreateTodo";
import TodoCard from "@/components/todos/TodoCard";
import { Metadata } from "next";

export const generateMetadata = (): Metadata => ({
  title: "Todo || All Todos",
  description: "",
});

const page = () => {
  return (
    <>
      <TodoCard />

      <CreateTodo />
    </>
  );
};

export default page;
