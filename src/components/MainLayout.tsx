
import { Outlet } from "react-router-dom";
import { TopNavigation } from "./TopNavigation";
import { Footer } from "./Footer";

export function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <TopNavigation />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
