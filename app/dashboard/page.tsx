import { auth } from "@/auth"
import { redirect } from "next/navigation"

export default async function DashboardPage() {
  const session = await auth()

  if (!session?.user) {
    redirect("/auth/signin")
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Welcome to Your Dashboard
        </h1>
        <p className="text-gray-600">
          Hello {session.user.name}! This is your personalized parenting journey hub.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow p-6 border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Your Journey
          </h3>
          <p className="text-gray-600 text-sm">
            Set up your profile to get personalized content and tracking tools.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow p-6 border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Trackers
          </h3>
          <p className="text-gray-600 text-sm">
            Track your progress with our suite of parenting tools.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow p-6 border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Articles & Tips
          </h3>
          <p className="text-gray-600 text-sm">
            Discover expert advice tailored to your current stage.
          </p>
        </div>
      </div>

      <div className="mt-8 bg-blue-50 rounded-lg p-6">
        <h2 className="text-xl font-semibold text-blue-900 mb-2">
          🎉 Authentication is working!
        </h2>
        <p className="text-blue-800">
          You are successfully logged in as {session.user.email}. 
          Role: {session.user.role || 'USER'}
        </p>
      </div>
    </div>
  )
}