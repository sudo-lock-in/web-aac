"use client";

import { useState } from "react";

type Word = {
  label: string;
  icon: string;
  color: string;
};

const categories: Record<string, Word[]> = {
  Essentials: [
    { label: "I want", icon: "☝", color: "coral" },
    { label: "I need", icon: "💛", color: "sun" },
    { label: "More", icon: "＋", color: "mint" },
    { label: "All done", icon: "✓", color: "sky" },
    { label: "Help", icon: "👐", color: "lavender" },
    { label: "Please", icon: "🤲", color: "peach" },
  ],
  People: [
    { label: "Mom", icon: "👩", color: "coral" },
    { label: "Dad", icon: "👨", color: "sky" },
    { label: "Brother", icon: "🧑", color: "mint" },
    { label: "Friend", icon: "🫶", color: "sun" },
    { label: "Teacher", icon: "🧑‍🏫", color: "lavender" },
    { label: "Me", icon: "🙂", color: "peach" },
  ],
  Feelings: [
    { label: "Happy", icon: "😊", color: "sun" },
    { label: "Sad", icon: "😔", color: "sky" },
    { label: "Tired", icon: "😴", color: "lavender" },
    { label: "Excited", icon: "🤩", color: "coral" },
    { label: "Sick", icon: "🤒", color: "mint" },
    { label: "Scared", icon: "😟", color: "peach" },
  ],
  Activities: [
    { label: "Eat", icon: "🍎", color: "coral" },
    { label: "Drink", icon: "🥤", color: "sky" },
    { label: "Play", icon: "🎨", color: "sun" },
    { label: "Outside", icon: "🌳", color: "mint" },
    { label: "Music", icon: "🎵", color: "lavender" },
    { label: "Sleep", icon: "🛏", color: "peach" },
  ],
};

const categoryNames = Object.keys(categories);

export default function Home() {
  const [activeCategory, setActiveCategory] = useState(categoryNames[0]);
  const [phrase, setPhrase] = useState<Word[]>([]);
  const [lastSpoken, setLastSpoken] = useState("Ready to speak");

  function speak(text: string) {
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      window.speechSynthesis.cancel();
      window.speechSynthesis.speak(new SpeechSynthesisUtterance(text));
    }
    setLastSpoken(text);
  }

  function addWord(word: Word) {
    setPhrase((current) => [...current, word]);
    speak(word.label);
  }

  function speakPhrase() {
    if (phrase.length === 0) return;
    speak(phrase.map((word) => word.label).join(" "));
  }

  return (
    <main className="shell">
      <header className="topbar">
        <a className="brand" href="#top" aria-label="Web AAC home">
          <span className="brand-mark">✦</span>
          <span>web <span className="brand-accent">aac</span></span>
        </a>
        <div className="topbar-actions">
          <span className="offline-pill"><span className="status-dot" /> Works offline</span>
          <button className="icon-button" aria-label="Open settings">⚙</button>
        </div>
      </header>

      <section className="intro" id="top">
        <div>
          <p className="eyebrow">MY COMMUNICATION BOARD</p>
          <h1>What would you like to say?</h1>
          <p className="intro-copy">Tap a word to hear it out loud. Build a phrase one idea at a time.</p>
        </div>
        <div className="today-note"><span>☀</span><strong>Good morning</strong><small>Let&apos;s find your voice.</small></div>
      </section>

      <section className="phrase-panel" aria-label="Your phrase">
        <div className="phrase-heading"><span>Your phrase</span><span className="phrase-count">{phrase.length} {phrase.length === 1 ? "word" : "words"}</span></div>
        <div className="phrase-tray">
          {phrase.length === 0 ? <span className="phrase-placeholder">Your words will appear here...</span> : phrase.map((word, index) => <span className="phrase-word" key={`${word.label}-${index}`}>{word.label}</span>)}
        </div>
        <div className="phrase-actions">
          <span className="spoken-status"><span className="sound-wave">)))</span> {lastSpoken}</span>
          <div className="action-buttons">
            <button className="secondary-button" onClick={() => setPhrase([])} disabled={phrase.length === 0}>Clear</button>
            <button className="speak-button" onClick={speakPhrase} disabled={phrase.length === 0}><span>▶</span> Speak phrase</button>
          </div>
        </div>
      </section>

      <section className="board-section" aria-label="Word categories">
        <nav className="category-tabs" aria-label="Word categories">
          {categoryNames.map((category) => <button className={activeCategory === category ? "category-tab active" : "category-tab"} key={category} onClick={() => setActiveCategory(category)}>{category}</button>)}
        </nav>
        <div className="word-grid">
          {categories[activeCategory].map((word) => <button className={`word-card ${word.color}`} key={word.label} onClick={() => addWord(word)}><span className="word-icon">{word.icon}</span><span>{word.label}</span><span className="card-sound">)))</span></button>)}
        </div>
      </section>

      <footer><span>Web AAC</span> is a free, open-source communication board.</footer>
    </main>
  );
}
