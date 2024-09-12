import prisma from "@/utils/db";

const prismaHanlder = async () => {
  await prisma.task.create({
    data: {
      centent: "Task 1 Content",
    },
  });

  const allTasks = await prisma.task.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return allTasks;
};

const PrismaExample = async () => {
  const tasks = await prismaHanlder();
  return (
    <div>
      <h1 className="text-2xl">PrismaExample Page </h1>
      <div>
        {tasks.map((task) => (
          <div key={task.id} className="flex items-center justify-between">
            <h2 className="text-xl py-2">😃{task.centent}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PrismaExample;
