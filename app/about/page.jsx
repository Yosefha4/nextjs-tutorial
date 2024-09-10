import Link from "next/link";
import React from "react";

const About = () => {
  return (
    <div>
      <h1 className="text-7xl">AboutPage</h1>
      <Link href="/" className="text-2xl">
        Home Page
      </Link>
    </div>
  );
};

export default About;
