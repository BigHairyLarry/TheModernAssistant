export const metadata = { title: "The Modern Assistant", description: "Automation • AI Agents • Growth" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
