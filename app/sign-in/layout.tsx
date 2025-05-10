export default function SignInLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main >
      <div className="bg-zinc-950">{children}</div>
    </main>
  );
}