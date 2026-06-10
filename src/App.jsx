import { Routes, Route } from "react-router-dom";
import Menu from "./component/Menu";
import { routes } from "./routes/route";

function App() {
  return (
    <div className="min-h-screen bg-(--bg-primary) text-(--text-primary)">
      <Menu />

      <main
        className="
        transition-all duration-300
        lg:ml-20
      "
      >
        <Routes>
          {routes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        </Routes>
      </main>
    </div>
  );
}

export default App;
