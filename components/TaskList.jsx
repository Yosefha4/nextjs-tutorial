import Link from "next/link";
import React from "react";
import DeleteForm from "./DeleteForm";
import { getAllTasks } from "@/utils/action";

const TaskList = async () => {
  const tasks = await getAllTasks();
  if (tasks.length === 0) return <p className="mt-8 font-medium text-lg ">No tasks found.</p>;

  return (
    <ul className="mt-8">
      {tasks.map((task) => (
        <li
          key={task.id}
          className="flex justify-between items-center px-6 py-4 mb-4 border border-base-300 rounded-lg shadow-lg"
        >
          <h2 className={`text-lg capitalize ${task.completed ? "line-through" : null}`}>{task.content}</h2>

          <div className="flex gap-6 items-center">
            <Link href={`/tasks/${task.id}`} className="btn btn-accent btn-xs border border-black">
              edit
            </Link>

            <DeleteForm id={task.id} />
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
