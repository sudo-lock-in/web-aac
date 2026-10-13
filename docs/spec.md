<!--
  Product 1 Spec Template
  Paste this into any document you can save (Google Docs, Word, Notes, a text
  editor). On Wednesday it becomes the README.md of your Product 1 repository.
  Walkthrough, examples, and AI prompts are in the guide:
  https://github.com/464squad/IEL/blob/main/projects/product-1/product-spec-guide.md
  Delete these instructions and the italic hints as you fill each section in.
-->

# Web AAC

> One line: what this is and who it's for (hint: it's for you).

**Author:** AJ Thompson · **Course:** CMP 464/343 Product 1 · **Last updated:** 10/13/26

---

## 1. About Me (the User)

*Who am I in the context of this problem? What roles am I playing (student, employee, parent, athlete, gamer…)?*

I am the sibling of a non-verbal child.

**The last 3 times this happened:**
*Real, recent moments. For each: when and where, what went wrong, what it cost, what you did.*

1. 
2. 
3. 

**What it costs me:**
*Be specific. How often, how much?*

- ⏱️ Time: Wasted on setup
- 💸 Money: The cost of an iPad & the AAC application
- 🔋 Energy: Requires understanding the UI
- 🙂 Joy: Can be stressful and limits communication

---

## 2. Problem Statement

**Gut check:**

> I need **an AAC web application** because **it makes communication accessible for those who rely on them**.

**Five Whys:**
1. Why?
2. Why?
3. Why?
4. Why?
5. Why?

**Problem statement:**

> **When** [a specific moment that keeps happening],
> **I struggle to** [what goes wrong],
> **which costs me** [time / money / energy / joy, with numbers if you can].
> **This happens because** [root cause].
> **Right now I** [what I do today], **but** [why it falls short].

**I'll know this is solved when:** [something I could observe changing]

*Check: none of these words appear: app, website, platform, dashboard, tool, AI, track, automate, notify, feature.*

---

## 3. Existing Solutions

| What I use or tried | What it does well | Why it falls short *for me* |
|---|---|---|
| | | |
| | | |
| | | |

**The gap:** *In one sentence, what's still missing for me?*

[Your answer]

---

## 4. Features & Benefits

*Every feature should move me toward my "solved when" line.*

| Feature (what it does) | Benefit (how my life gets better) | MVP or Later? |
|---|---|---|
| | | |
| | | |
| | | |
| | | |

**MVP (2–3 features):** *The skateboard: the smallest version I'd actually use.*
- Buttons with images representing common conversational words
- Audio output of the words when those buttons are pressed

**Later:**
- 

**Not doing:** *Things I'm deliberately leaving out.*
- 

---

## 5. Tech Stack

### Front end
- **Surface:** Web
- **Tools:** TypeScript, React, Next.js, Tailwind CSS
- **Why:** Responsive web applications can be used from any device 

### Back end
| Piece | Choice | Why |
|---|---|---|
| Server / API | Node.js | |
| Data storage | PostgreSQL / Supabase | |
| Outside services (optional) | N/A | N/A |
| Hosting / deploy | Vercel | |

### Architecture sketch

```mermaid
flowchart LR
  U["Me"] --> FE["Front end: ..."]
  FE --> API["Back end / API: ..."]
  API --> DB[("Data: ...")]
```

---

## 6. Open Questions

*What am I still unsure about? What do I need to figure out or test first?*

- How should I expand to provide access to hundreds or thousands of words, especially as it will hard to do manually on my own?
- What default word options give users enough to work with without being overwhelming?