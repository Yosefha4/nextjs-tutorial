"use client";
const error = (error) => {
  console.log(error);
  return (
    <div className="flex flex-col">
      <p className="text-4xl font text-center">{error.error.message}</p>
    </div>
  );
};

export default error;
