"use client";
import { createTaskCustom } from "@/utils/action";
import { useFormStatus } from "react-dom";

const SubmitBtn = () => {
  const { pending } = useFormStatus();
  return (
    <button type="submit" className="btn btn-accent join-item" disabled={pending}>
      {pending ? "Please wait..." : "create Task"}
    </button>
  );
};

const TaskFormCustom = () => {
  return (
    <form action={createTaskCustom}>
      <div className="join w-full">
        <input type="text" className="input input-bordered join-item w-full" placeholder="type here" name="content" required />
        <SubmitBtn />
      </div>
    </form>
  );
};

export default TaskFormCustom;
