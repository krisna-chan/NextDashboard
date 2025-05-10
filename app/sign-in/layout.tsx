export default function SignInLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main >
      <div>{children}</div>
    </main>
  );
}
