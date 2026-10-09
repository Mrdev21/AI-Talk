import { useState } from "react";
import "./App.css";
import VoiceInput from "./components/VoiceInput";

function App() {
  const [userSpeech, setUserSpeech] = useState("");

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-5 border-b border-white/10">
        <div className="flex items-center gap-3">
          <img
            src="/ai-talk-logo.svg"
            alt="AI-Talk"
            className="w-10 h-10"
          />

          <h1 className="text-xl font-bold">
            AI<span className="text-cyan-400">-Talk</span>
          </h1>
        </div>

        <button className="px-5 py-2 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition">
          Start Practice
        </button>
      </nav>

      {/* Main */}
      <main className="flex flex-col items-center justify-center text-center px-6 pt-8 pb-12">

        {/* AI Logo */}
        <div className="mb-3">
          <img
            src="/ai-talk-logo.svg"
            alt="AI-Talk AI"
            className="w-52 h-52 drop-shadow-[0_0_40px_rgba(34,211,238,0.25)]"
          />
        </div>

        {/* Subtitle */}
        <p className="mb-3 text-cyan-400 font-medium">
          AI-powered speaking partner
        </p>

        {/* Heading */}
        <h2 className="text-4xl font-bold tracking-tight">
          Speak.
          <span className="text-cyan-400"> Learn </span>
          & Improve.
        </h2>

        {/* Description */}
        <p className="mt-4 max-w-xl text-gray-400 text-lg">
          Practice English conversations with AI, improve your fluency, and get
          instant feedback on your speaking.
        </p>

        {/* Voice Input */}
        <VoiceInput onSpeech={setUserSpeech} />

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-20 max-w-4xl w-full">
          <Feature
            icon="🎙️"
            title="Speak Naturally"
            description="Talk with AI just like a real conversation."
          />

          <Feature
            icon="🤖"
            title="AI Conversation"
            description="Get intelligent responses instantly."
          />

          <Feature
            icon="📝"
            title="Get Feedback"
            description="Understand mistakes and improve your English."
          />
        </div>
      </main>
    </div>
  );
}

function Feature({ icon, title, description }) {
  return (
    <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-400/30 transition">
      <div className="text-3xl mb-4">{icon}</div>

      <h3 className="text-lg font-semibold mb-2">
        {title}
      </h3>

      <p className="text-sm text-gray-400">
        {description}
      </p>
    </div>
  );
}

export default App;