import { ClerkProvider, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs"
import { auth } from "@clerk/nextjs/server"

export default async function AppLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { userId } = await auth()

  return (
    <ClerkProvider>
      <header className="flex justify-between items-center px-6 py-4 border-b">
        <span className="font-bold text-lg">next-stair</span>
        <div className="flex gap-3 items-center">
          {!userId ? (
            <>
              <SignInButton />
              <SignUpButton />
            </>
          ) : (
            <UserButton />
          )}
        </div>
      </header>
      <main>{children}</main>
    </ClerkProvider>
  )
}
