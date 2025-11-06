export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col items-center justify-center py-12 md:py-20 lg:py-28 bg-gray-50">
      <div className="w-full max-w-7xl px-6 md:px-12 lg:px-24">
        <div className="mx-auto text-center lg:text-left">{children}</div>
      </div>
    </section>
  );
}
