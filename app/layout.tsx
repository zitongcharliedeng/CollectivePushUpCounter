import Link from "next/link"


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head />
      <body>
        <nav>
          <Link href="/">
            Home
          </Link>
          <Link href="/counters">
            Counters
          </Link>
        </nav>
          {children}
      </body>
    </html>
  )
}
