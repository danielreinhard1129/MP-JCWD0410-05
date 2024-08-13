import LayoutWrapper from "@/components/LayoutWrapper";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <LayoutWrapper>{children}</LayoutWrapper>
    </section>
  );
}
