import React from "react";

export default () => (
  <footer className="mt-2">
    <div className="text-center py-4 bg-primary text-white">
      Copyright &copy; {new Date().getFullYear()}{" "}
      <a href="https://github.com/matbocz" className="text-white">
        Mateusz Boczarski
      </a>
    </div>
  </footer>
);
