"use client";
import { createTaskCustom } from "@/utils/action";
import { useEffect } from "react";
import { useFormStatus, useFormState } from "react-dom";
import toast from "react-hot-toast";

const SubmitBtn = () => {
  const { pending } = useFormStatus();
  return (
    <button type="submit" className="btn btn-accent join-item" disabled={pending}>
      {pending ? "Please wait..." : "create Task"}
    </button>
  );
};

const initialState = {
  message: null,
};

const TaskFormCustom = () => {
  const [state, formAction] = useFormState(createTaskCustom, initialState);

  useEffect(() => {
    if (state.message === "error") {
      toast.error("There was an error");
    }
    if (state.message === "success") {
      toast.success("Task created successfully");
    }
  }, [state]);

  return (
    <form action={formAction}>
      {/* {state.message ? <p className="mb-2 text-green-500">{state.message}</p> : null} */}
      <div className="join w-full">
        <input type="text" className="input input-bordered join-item w-full" placeholder="type here" name="content" required />
        <SubmitBtn />
      </div>
    </form>
  );
};

export default TaskFormCustom;
