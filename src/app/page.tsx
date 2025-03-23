import { Metadata } from "next";

export const generateMetadata = (): Metadata => ({
  title: "Todo || All Todos",
  description: "",
});

const page = () => {
  return (
    <>
      <div className="">Todos Page</div>
    </>
  );
};

export default page;
