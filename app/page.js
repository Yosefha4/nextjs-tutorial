import Link from "next/link";
import React from "react";

const HomePage = () => {
  // console.log("server comp"); //Note: This will be logged on the server side
  return (
    <div>
      <h1 className="text-5xl font-bold mb-8">Next.js Tutorial</h1>
      <Link href="/client" className="btn btn-accent">
        GET STARTED
      </Link>
    </div>
  );
};

export default HomePage;
