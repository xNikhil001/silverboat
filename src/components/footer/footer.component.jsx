import React from "react";

export default function Footer() {
  return (
    <footer>
      <p>Copyright@silverboat.com <span>{new Date().getFullYear()}</span></p>
    </footer>
  );
}
