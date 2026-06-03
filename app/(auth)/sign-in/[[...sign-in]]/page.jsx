import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <section className="bg-white min-h-screen flex">
      
      {/* Left Side - Branding */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-indigo-700 to-blue-500 flex-col items-center justify-center p-12 text-white">
        <div className="max-w-md text-center">
          <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mb-6 mx-auto">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          </div>
          <h1 className="text-4xl font-bold mb-4">AI Interview Mocker</h1>
          <p className="text-blue-100 text-lg mb-8">
            Practice smarter. Prepare better. Land your dream job.
          </p>
          <div className="space-y-3 text-left">
            {[
              "AI-powered mock interviews",
              "Real-time feedback & scoring",
              "Track your improvement",
              "1000+ interview questions",
            ].map((feature) => (
              <div key={feature} className="flex items-center gap-3 bg-white/10 rounded-xl px-4 py-3">
                <svg className="w-5 h-5 text-green-300 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-white text-sm font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Side - Clerk SignIn */}
      <div className="w-full lg:w-1/2 flex flex-col items-center justify-center px-6 py-12">
        <div className="w-full max-w-md mb-6 lg:hidden text-center">
          <h1 className="text-2xl font-bold text-gray-800">AI Interview Mocker</h1>
          <p className="text-gray-500 text-sm">Practice smarter. Land your dream job.</p>
        </div>
        <SignIn />
      </div>

    </section>
  );
}
