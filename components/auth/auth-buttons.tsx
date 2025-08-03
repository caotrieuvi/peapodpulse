import { auth, signIn, signOut } from "@/auth"
import { Button } from "@/components/ui/button"

export async function AuthButtons() {
  const session = await auth()

  if (session?.user) {
    return (
      <div className="flex items-center gap-4">
        <span className="text-sm text-gray-600">
          Welcome, {session.user.name}
        </span>
        <form
          action={async () => {
            "use server"
            await signOut()
          }}
        >
          <Button type="submit" variant="outline">
            Sign Out
          </Button>
        </form>
      </div>
    )
  }

  return (
    <div className="flex items-center gap-2">
      <form
        action={async () => {
          "use server"
          await signIn("google")
        }}
      >
        <Button type="submit" variant="outline">
          Log In
        </Button>
      </form>
      <form
        action={async () => {
          "use server"
          await signIn("google")
        }}
      >
        <Button type="submit">
          Register for Free
        </Button>
      </form>
    </div>
  )
}