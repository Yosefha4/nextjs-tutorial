"use client";

import Link from "next/link";
import React from "react";

const HomePage = () => {
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
