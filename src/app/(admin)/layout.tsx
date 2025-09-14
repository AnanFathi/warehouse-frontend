import { AdminSidebar } from "@/components/AdminSidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import Navbar from "@/components/Navbar";
import PageLayout from "@/components/PageLayout";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider defaultOpen>
      <div className="flex w-full max-w-full h-screen">
        <AdminSidebar />
        <main className="w-full min-w-0">
          <Navbar />
          <PageLayout>{children}</PageLayout>
        </main>
      </div>
    </SidebarProvider>
  );
}
