import InCompleteCardTodo from "@/components/todos/InCompleteCardTodo";
import { Metadata } from "next";

export const generateMetadata = (): Metadata => ({
  title: "Todo || InCpmplete Todos",
  description: "",
});

const page = () => {
  return (
    <>
      <InCompleteCardTodo />
    </>
  );
};

export default page;
