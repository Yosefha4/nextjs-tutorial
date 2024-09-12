import { deleteTask } from "@/utils/action";

const DeleteForm = ({ id }) => {
  return (
    <form action={deleteTask}>
      <input type="hidden" name="id" value={id} />
      <button className="btn btn-xs btn-error  border border-black">Delete</button>
    </form>
  );
};

export default DeleteForm;
