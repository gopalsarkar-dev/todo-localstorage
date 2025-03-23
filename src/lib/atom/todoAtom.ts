import { atomWithStorage } from "jotai/utils";
import { TodoTypeProps } from "../type";

const todoAtom = atomWithStorage<TodoTypeProps[]>("todo", []);

export default todoAtom;
