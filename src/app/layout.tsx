export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head>
        <link rel="icon" href="/Photos/uzanGroup.jpg" type="image/jpeg" />
        <title>UZAN GROUP</title>
        <meta
          name="description"
          content="A&S Uzan Group - Engineering, Architecture and Construction"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
