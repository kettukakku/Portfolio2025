import { getRoutes } from "../utils/getRoutes";

const routes = getRoutes();

export default function Home() {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <ul className="grid gap-2">
        {routes.map((route) => (
          <li
            key={route}
            className="p-2 border border-[var(--color-border)] rounded"
          >
            <code className="text-[var(--color-primary)]">{route}</code>
          </li>
        ))}
      </ul>
    </div>
  );
}
