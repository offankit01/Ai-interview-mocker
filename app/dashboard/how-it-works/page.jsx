export default function HowItWorks() {
  const steps = [
    {
      title: "Create a New Interview",
      description:
        "Click the '+ Add New' card on your Dashboard and enter your Job Role, Tech Stack, and Years of Experience.",
    },
    {
      title: "AI Generates Questions",
      description:
        "Our AI creates interview questions based on your job role and experience. This usually takes only a few seconds.",
    },
    {
      title: "Start the Interview",
      description:
        "Click the 'Start' button from your Dashboard to begin your AI mock interview.",
    },
    {
      title: "Enable Camera & Microphone",
      description:
        "Allow camera and microphone permissions for the best interview experience. Your video is never stored.",
    },
    {
      title: "Answer Each Question",
      description:
        "Read or listen to each question and record your answer using the Record Answer button.",
    },
    {
      title: "Navigate Through Questions",
      description:
        "Use the Previous and Next buttons to move between interview questions.",
    },
    {
      title: "Finish & Get Feedback",
      description:
        "After completing the interview, click 'End Interview' to receive AI-generated feedback, ratings, and suggestions.",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-6 py-10">
      {/* Heading */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold">How It Works</h1>
        <p className="text-gray-600 mt-3">
          Welcome to AI Interview Mocker. Follow these simple steps to practice
          your interview and improve your confidence.
        </p>
      </div>

      {/* Steps */}
      <div className="space-y-6">
        {steps.map((step, index) => (
          <div
            key={index}
            className="border rounded-xl p-6 shadow-sm hover:shadow-md transition-all"
          >
            <div className="flex items-start gap-5">
              <div className="h-12 w-12 rounded-full bg-indigo-600 text-white flex items-center justify-center text-xl font-bold">
                {index + 1}
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-2">{step.title}</h2>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Tips */}
      <div className="mt-12 border rounded-xl bg-yellow-50 p-6">
        <h2 className="text-2xl font-semibold mb-4">💡 Tips for Best Results</h2>

        <ul className="list-disc ml-6 space-y-2 text-gray-700">
          <li>Practice in a quiet environment.</li>
          <li>Allow camera and microphone permissions.</li>
          <li>Speak clearly and confidently.</li>
          <li>Answer every question in complete sentences.</li>
          <li>Practice multiple job roles to improve your interview skills.</li>
        </ul>
      </div>

      {/* FAQ */}
      <div className="mt-12">
        <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>

        <div className="space-y-5">
          <div className="border rounded-lg p-5">
            <h3 className="font-semibold text-lg">
              Is my camera recording saved?
            </h3>
            <p className="text-gray-600 mt-2">
              No. Your webcam is only used during the interview session. Your
              video is never stored by the application.
            </p>
          </div>

          <div className="border rounded-lg p-5">
            <h3 className="font-semibold text-lg">
              Can I take multiple interviews?
            </h3>
            <p className="text-gray-600 mt-2">
              Yes. You can create unlimited mock interviews for different job
              roles and technologies.
            </p>
          </div>

          <div className="border rounded-lg p-5">
            <h3 className="font-semibold text-lg">
              Can I practice the same role again?
            </h3>
            <p className="text-gray-600 mt-2">
              Yes. Simply create another interview from your Dashboard and start
              practicing again.
            </p>
          </div>

          <div className="border rounded-lg p-5">
            <h3 className="font-semibold text-lg">
              What will I get after completing the interview?
            </h3>
            <p className="text-gray-600 mt-2">
              You'll receive AI-generated feedback, suggested answers, ratings,
              and improvement tips for every interview.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="mt-16 text-center border rounded-xl bg-indigo-600 text-white p-10">
        <h2 className="text-3xl font-bold">
          Ready to Practice Your Interview?
        </h2>

        <p className="mt-3 text-indigo-100">
          Head back to the Dashboard, create a new interview, and start
          improving your interview skills with AI.
        </p>

        <a
          href="/dashboard"
          className="inline-block mt-6 bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
        >
          Go to Dashboard
        </a>
      </div>
    </div>
  );
}