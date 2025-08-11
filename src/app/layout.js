import "./../styles/globals.scss";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Tatilsepeti Otel Listeleme</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
