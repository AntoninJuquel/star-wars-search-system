export function SectionTitle({ children }: { children: string }) {
  return (
    <h2 className="text-lg font-semibold bg-primary text-primary-foreground rounded-xl text-center px-2">
      {children}
    </h2>
  );
}
