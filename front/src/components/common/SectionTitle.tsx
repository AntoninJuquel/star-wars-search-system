export function SectionTitle({ children }: { children: string }) {
  return (
    <div className="flex bg-primary rounded-xl justify-between items-center space-x-2">
      <img src="/rebel_alliance_logo.svg" alt="section-title" className="h-8" />
      <h2 className="text-lg font-semibold text-primary-foreground text-center">
        {children}
      </h2>
      <img src="/rebel_alliance_logo.svg" alt="section-title" className="h-8" />
    </div>
  );
}
