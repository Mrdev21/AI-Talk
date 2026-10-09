import { useState } from "react";

function VoiceInput({ onSpeech }) {
  const [isListening, setIsListening] = useState(false);
  const [text, setText] = useState("");

  const startListening = () => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert("Speech recognition is not supported in this browser.");
      return;
    }

    const recognition = new SpeechRecognition();

    recognition.lang = "en-US";
    recognition.continuous = false;
    recognition.interimResults = false;

    recognition.onstart = () => {
      setIsListening(true);
    };

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;

      setText(transcript);

      // Send speech text to App.jsx
      onSpeech(transcript);
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    recognition.onerror = (event) => {
      console.error("Speech recognition error:", event.error);
      setIsListening(false);
    };

    recognition.start();
  };

  return (
    <div className="w-full max-w-2xl mt-6">
      <button
        onClick={startListening}
        className="px-8 py-4 rounded-full bg-cyan-400 text-slate-950 font-bold text-lg hover:bg-cyan-300 hover:scale-105 transition"
      >
        {isListening ? "🎙️ Listening..." : "🎙️ Start Talking"}
      </button>

      <textarea
        value={text}
        readOnly
        placeholder="Your speech will appear here..."
        className="mt-6 w-full h-32 px-5 py-4 rounded-2xl
                   bg-white/5 border border-white/10
                   text-white placeholder-gray-500
                   resize-none outline-none
                   focus:border-cyan-400/50
                   transition"
      />
    </div>
  );
}

export default VoiceInput;