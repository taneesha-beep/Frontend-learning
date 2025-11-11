import { Outlet, Link, NavLink } from "react-router-dom";
import Nav from "./components/Nav";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Nav />
      <main className="flex-1 container mx-auto px-4 py-6">
        <Outlet />
      </main>
      <footer className="container mx-auto px-4 pb-8 opacity-80 text-sm">
        <div className="card p-4">
          <p>
            <span className="font-semibold">Investos</span>
            <span className="mx-2">•</span>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "underline" : "")}
            >
              About
            </NavLink>
          </p>
        </div>
      </footer>
    </div>
  );
}
