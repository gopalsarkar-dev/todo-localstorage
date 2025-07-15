import CompletCardTodo from "@/components/todos/CompletCardTodo";
import { Metadata } from "next";

export const generateMetadata = (): Metadata => ({
  title: "Todo || Complete Todos",
  description: "",
});

const page = () => {
  return (
    <>
      <CompletCardTodo />
    </>
  );
};

export default page;
