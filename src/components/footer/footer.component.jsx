import React from "react";

export default function Footer() {
  return (
    <footer className="h-12 w-full bg-gray-100 flex justify-center items-center">
      <p>
        Copyright@silverboat.com <span>{new Date().getFullYear()}</span>
      </p>
    </footer>
  );
}
