"use client";
const error = (error) => {
  console.log(error.message);
  return (
    <div className="flex flex-col">
      {/* <p className="text-4xl font text-center bg-red-500">Failed to fetch drinks.</p> */}
      <p className="text-4xl font text-center">{error.error.message}</p>
    </div>
  );
};

export default error;
