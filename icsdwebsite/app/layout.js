import "../styles/globals.css"

export const metadata = {
  title: "ICSD Club - VIT Chennai",
  description: "Integrated Circuit and System Design Club of VIT Chennai",
  generator: 'v0.dev'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/images/icsd-logo.png" />
      </head>
      <body>
        <div className="min-h-screen w-full">{children}</div>
      </body>
    </html>
  )
}
