# Build a Second Brain with Hermes Agent

### A beginner-friendly guide to an "AI Fluency" knowledge base using the built-in `llm-wiki` skill

**Works on Windows, macOS, and Linux.** No prior agent experience needed.

> 🗺️ **Prefer to explore visually?** This guide has an interactive companion — `hermes2ndbrain-mindmap.html` — an expandable mind map where you pick your OS, install method, and model type (cloud or local), and only the relevant steps light up. It also has numbered steps with icons, a progress tracker you can tick off, and copy-buttons on every command. The two are kept in sync: same content, two formats. *(Last synced: 2026-06-16h.)*

> ⚡ **Read this first — a note on a fast-moving field.** Treat everything below as a *snapshot*. Specific models, prices, and free-tier limits change monthly and go stale fast; some tools named here may be renamed or replaced by the time you read this. What lasts are the **fundamentals** — how context windows, quantization, memory bandwidth, and the privacy/speed/quality trade-off actually work. Learn those deeply and the specifics become easy to slot in.
>
> Bring a **lifelong-learning, learn-by-doing** mindset: be ready to *learn, unlearn, and relearn* as the ground shifts. Get your hands dirty — a working setup teaches more than any guide. And learn a little **every day**: small, consistent steps compound, and an AI second brain is the perfect place to capture and connect what you learn so you're not starting from scratch each time. The thing you're building here is itself the antidote to the churn.

---

## What you're building, in one paragraph

You'll set up [Hermes Agent](https://hermes-agent.nousresearch.com/) — a free, open-source AI agent that runs on your own machine — and use its built-in **`llm-wiki`** skill to grow a personal, interlinked knowledge base on the topic of **AI fluency** (understanding how to use AI well: prompting, agents, evaluation, ethics, the practical skills). You drop in sources (articles, your own notes, papers); the agent reads them, writes encyclopedia-style markdown pages, and cross-links everything. Over time it *compounds* — it answers questions your individual sources never stated outright. This is Andrej Karpathy's "LLM wiki" pattern, and Hermes ships it as a ready-made skill.

> **The guiding idea:** this is a tool to *deepen* your own understanding, not replace it. Use the wiki to revisit and connect what you've engaged with — "after the struggle, not instead of it."

**The journey has five phases** (the colored dots on each step show where you are): 🔵 **Set up** (Steps 1–2) → 🟢 **Build** (3–5) → 🟠 **Use** (6–7) → 🟣 **Extend** (8–9, optional) → ⚪ **Sharpen** (maintenance & tips) → 🌱 **Go** (put it to work). The interactive mind map color-codes these so you can see your position at a glance.

---

## Before you start (5-minute orientation)

You'll interact with Hermes in two ways:

- **The desktop app** — a normal window, easiest for beginners.
- **The CLI** (`hermes` in a terminal) — a few steps need this. Don't worry, every command is given in full.

A few terms you'll meet:

| Term | Plain meaning |
|------|---------------|
| **Skill** | A set of instructions that teaches the agent a procedure. `llm-wiki` is one. |
| **Model** | The AI brain doing the thinking. Can be cloud (easiest) or local (private). |
| **Gateway** | The background service that keeps the agent reachable (e.g. from Telegram). |
| **Wiki** | Your knowledge base — a folder of linked markdown files. |

---

## 🔵 Step 1 — Install Hermes Agent

**First, choose how you want to install.** This is the first big fork in the road:

| | **Desktop app (GUI)** | **Terminal (CLI)** |
|---|---|---|
| Best for | Beginners; people who prefer clicking | Comfortable in a terminal; full control |
| You configure via | Settings panes (point and click) | Commands + a config file |
| Installs | The GUI app **+** the `hermes` command | The `hermes` command only |
| Get it from | The website installer | A one-line script |

Both end up with the same underlying agent and the same wiki — pick whichever you'll enjoy more. You can always use the terminal later even if you start with the app.

---

### Path 1 — Desktop app (graphical, beginner-friendly)

The desktop app installs everything and walks you through setup with a real interface. After install you'll do **almost everything by clicking** — you only touch the terminal to set the wiki folder (Step 4) and to troubleshoot.

**Install it:**

- **Windows:** Go to **https://hermes-agent.nousresearch.com/** → **Download** under Windows (`Hermes-Setup.exe`). Run it. SmartScreen warns (it's unsigned, open-source) → *More info → Run anyway*. Launch from the Start menu.
- **macOS:** Download **Mac OS** (`Hermes-Setup.dmg`). Open it, drag Hermes to **Applications**. First launch: right-click → **Open** (clears the unsigned-app warning once).
- **Linux:** There's no prebuilt GUI installer — install via the script (Path 2 below), then launch the graphical app with `hermes desktop`, or the browser-based dashboard with `hermes dashboard`. Same panes, same experience.

**First-run setup (the onboarding overlay):**

On first launch, Hermes asks you to **pick a provider and model**. Choose a cloud provider and sign in / paste a key, or pick a local preset (Ollama, LM Studio, vLLM, llama.cpp — the local server must already be running). You can also click **Choose provider later** to get into the app first. That's Step 2, done in the GUI.

**Configure everything from the settings panes:**

The desktop app surfaces the whole management surface so you rarely need a terminal. The later steps in this guide map directly to panes:

| This guide's step | In the desktop app |
|---|---|
| Step 2 — connect a model | **Providers** / **Model** panes |
| Step 3 — confirm `llm-wiki` skill | **Skills** pane (browse, enable) |
| Step 8 — Telegram gateway | **Gateway** pane (toggle Telegram) |
| Step 9 — automation | **Cron** pane (view/manage jobs) |

So if you're on the desktop path, when a later step shows a `hermes …` command, look for the **"Desktop app:"** note — it tells you the pane to use instead.

**The one terminal step (Step 4 — wiki folder):**

Setting *where* your wiki lives isn't a GUI field yet. You'll set it once via the terminal or the browser dashboard — see Step 4. This is the "some troubleshooting via terminal" part; it's a single edit.

**Troubleshooting the desktop app (when you do need the terminal):**

- **App won't launch / acts stuck:** quit fully and reopen first.
- **Check the underlying agent is healthy:** open a terminal and run `hermes doctor` (the app and CLI share one install at `~/.hermes`).
- **Gateway/bot not responding:** `hermes gateway status`, then `hermes gateway restart`.
- **Prefer a lighter GUI:** `hermes dashboard` opens a browser-based control panel for settings, sessions, skills, and the gateway.

Now skip ahead — but read the **"Desktop app:"** notes in Steps 2, 3, 8, and 9, and do Step 4 when you reach it.

---

### Path 2 — Terminal (command-line, full control)

One script installs the `hermes` command and all dependencies (Python, Node.js, ripgrep). Works the same on every OS.

- **macOS / Linux** — in a terminal:
  ```bash
  curl -fsSL https://hermes-agent.nousresearch.com/install.sh | bash
  ```
- **Windows** — in **PowerShell** (needs WSL or Git Bash):
  ```bash
  curl -fsSL https://hermes-agent.nousresearch.com/install.sh | bash
  ```
  *(On Windows, the desktop app is usually smoother — consider Path 1 if unsure.)*

Follow the prompts. When it finishes, confirm:
```bash
hermes --version
```

### Confirm the install (both paths)

Open a terminal and run:
```bash
hermes doctor
```
Green checks for **Python Environment**, **Required Packages**, and **Configuration Files** = good. "Not logged in" provider warnings are normal at this stage.

---

## 🔵 Step 2 — Connect a model (the AI brain)

The agent needs a model to think with. Two paths — **pick one**:

> 🖥️ **Desktop app:** do this in the **Providers** / **Model** settings pane instead — pick a provider, sign in or paste a key, choose a model. The GUI lists the same providers and models as the commands below.

### Choosing a model — suitability, speed, and cost

Before you connect anything, a quick decision aid. **For a beginner, the priority is: get it working free and fast, then optimise.** Don't agonise over the "best" model — pick something free that runs today, learn the workflow, and switch later (it's one `hermes model` command, no lock-in).

**The one hard rule:** Hermes needs a model with at least **64,000 tokens of context**. Most cloud models clear this easily; for local models you must raise the context window (Step 2, Path B). Tiny models below this are rejected at startup.

#### Start here — free cloud (works on any computer)

If you're not sure, **start with a free cloud model.** No hardware worries, nothing to install, and they comfortably meet the 64K rule. No credit card needed:

| Provider | Free model | Free limit | Why pick it |
|---|---|---|---|
| **Google AI Studio** | Gemini 2.5 Flash | ~1,500 requests/day, 1M context | Best first stop — capable, huge context, no card, no expiry |
| **OpenRouter** | 28+ `:free` models (DeepSeek, Llama 3.3 70B, Qwen3, Gemini Flash) | 20 req/min, 50–1,000/day | One key, easiest to **swap models** while you experiment |
| **Groq** | Llama 3.3 70B, Qwen, DeepSeek | ~30 req/min, 1,000/day | Fastest free option (hundreds of tokens/sec) |

> ⚠️ **Privacy trade-off:** free cloud tiers are usually funded by using your prompts to train models. Fine for learning and general notes — but keep genuinely private material out of a free-tier wiki. If privacy matters, go local (below).

#### Can you run a model locally? — hardware check

Local models are **free forever, fully private, and work offline** — but they need enough memory. Fit follows your VRAM (or unified memory on a Mac), assuming the standard Q4_K_M 4-bit quantization. Rough rule: *(billions of parameters × 4) ÷ 8 ≈ GB of VRAM*, plus headroom for context.

| Your hardware | Model size that fits | Examples | Realistic speed |
|---|---|---|---|
| CPU only / 8 GB RAM | 1–3B | Llama 3.2 3B, Phi-4-mini | 3–8 tok/s (slow; testing only) |
| 8 GB VRAM / 16 GB Mac | 7–9B | Llama 3.1 8B, Qwen3 8B | ~40 tok/s |
| 12–16 GB VRAM | 12–14B | Gemma 3 12B, Qwen3 14B, Phi-4 | 30–60 tok/s — the **sweet spot** |
| 24 GB VRAM (RTX 3090/4090/5090) | 27–32B | Gemma 3 27B, Qwen3 32B | interactive; quality nears cloud |
| 48 GB+ / dual 24 GB / M3 Max 64 GB | 70B | Llama 3.3 70B | slower, highest quality |

> **The 64K-context catch for local:** a big context window eats extra memory (the KV cache), so a model that "fits" at the default 4K may *not* fit at 64K. For a comfortable local Hermes setup, aim for a **7–14B model on 12–16 GB of VRAM** — that's the realistic floor for smooth agentic use. Below ~8B, models technically run but often stumble on multi-step tool calls.

#### CPU vs GPU — why the GPU matters so much

Here's the fundamental why, and it's worth understanding once because it explains everything else. Generating text is **memory-bandwidth-bound, not compute-bound**: to produce each token, the machine must read the model's *entire* set of weights from memory. The maths is trivial; the bottleneck is how fast memory can feed the chip.

- A **GPU** has very high-bandwidth memory (VRAM) — many times faster than your computer's main RAM. That's why a GPU streams those weights quickly and generates tokens fast.
- A **CPU** uses ordinary system RAM, which is much slower to read. CPU-only inference *works* (Ollama runs on any machine), but a 7B model crawls at 3–8 tokens/sec — fine for learning, painful for real work.
- **Apple Silicon** is the special case: its *unified memory* has high bandwidth, so M-series Macs run models well above what a typical CPU+RAM setup manages — no discrete GPU needed.

The practical upshot: a GPU (or Apple Silicon) is what makes local feel responsive. No GPU and only system RAM? Use a small model — or just start on free cloud, where someone else's GPU does the work.

#### Quantization — smaller, faster, and usually good enough

**Quantization** shrinks a model by storing its weights at lower numerical precision — 4 bits instead of the original 16, say. This is how big models fit on consumer hardware.

- **Q4_K_M** (4-bit) is the standard for local use: roughly **75% smaller** than full precision while keeping most of the quality. An 8B model drops from ~16 GB to ~5 GB.
- Because there's less weight data to stream per token, quantized models are also **faster** — they attack the same memory-bandwidth bottleneck from the other side.
- Quality vs size, simply: **Q8** ≈ near-original but ~2× the size of Q4; **Q4_K_M** = the sweet spot; **Q2/Q3** = noticeably degraded. The rule of thumb that saves you grief: *a well-trained smaller model at Q4 almost always beats a bigger model crushed to Q2/Q3.* Don't over-compress to force a big model in — drop to a smaller model at Q4 instead.
- Ollama picks a sensible quantization automatically, so you rarely set this by hand — but knowing what the suffixes mean helps you choose a model tag.

#### The privacy–speed–quality triangle (the core trade-off)

Three things pull against each other; you can't max all three, so choose based on *what your wiki holds*:

| Option | Privacy & control | Speed | Quality | Cost |
|---|---|---|---|---|
| **Local model** | 🟢 Highest — data never leaves your machine, works offline | 🟡 Limited by your hardware | 🟡 Capped by what fits | 🟢 $0 after hardware |
| **Free cloud** | 🔴 Lowest — usually trains on your prompts | 🟢 Fast | 🟢 Good–frontier | 🟢 $0 (rate-limited) |
| **Paid frontier cloud** | 🟡 Provider sees prompts, but no training (typically) | 🟢 Fast | 🟢 Best | 🔴 Per-token cost |

For an AI **second brain** specifically — which accumulates your personal knowledge over months — the privacy weight rises with how sensitive the content is. General learning notes? Free cloud is fine to start. Work-confidential or personal material? Lean local. A reasonable pattern: **free cloud to learn the workflow, then move the wiki to a local model** once it holds things you'd rather keep on your own machine.

> **Security, briefly:** an agent runs tools and can read files, so be deliberate about what it can access. Local keeps all of that on your hardware. Whatever the provider, never paste secrets (API keys, passwords) into prompts, and be cautious ingesting untrusted content — an agent can be misled by instructions hidden inside a document it reads.

#### Other things that matter (when you're ready to optimise)

- **Tool-calling ability** — Hermes is an *agent*, so it needs a model that reliably does function-calling and multi-step tool use. Some small models "narrate" ("I would now create the file…") instead of acting. Favour models known for tool use (most frontier models; Qwen, Llama 3.x, DeepSeek; the Hermes models are tuned for exactly this).
- **Reasoning vs speed** — "reasoning" models think step-by-step before answering: better on hard synthesis, but slower and they burn more tokens. For quick capture, a fast plain model is fine; reserve reasoning for analysis.
- **Open-weight vs proprietary** — open-weight models (Llama, Qwen, Gemma, DeepSeek) run anywhere with no lock-in and are free to self-host (portability + privacy). Proprietary models (GPT, Claude, Gemini) are often higher quality but API-only and paid (peak quality + convenience).
- **Reliability & rate limits** — free tiers throttle (requests/day); fine for a personal wiki, frustrating if you hit the cap mid-task. Local has no limits but ties up your machine while it thinks.
- **Context beyond the floor** — more than the 64K minimum lets the agent hold bigger sources or more wiki state at once, at the cost of memory (local) or money (cloud).

#### Speed — what "tokens per second" means for you

You read at roughly 5–10 tokens/sec, so anything above that *feels* responsive. Cloud providers like Groq and Cerebras are extremely fast (hundreds to ~2,000 tok/s); Gemini Flash is quick too. Local 12–14B models on a mid-range GPU land at 30–60 tok/s (snappy). A CPU-only tiny model at 3–8 tok/s works for learning but feels sluggish for real use.

#### Cost — keeping it at $0

- **Free cloud:** $0 within the daily rate limits — plenty for a personal wiki and learning.
- **Local:** $0 forever after hardware you already own (just electricity), fully private and offline.
- **When you outgrow free:** the cheapest paid step is usually DeepSeek's API; or rent a cloud GPU (~$0.40–1.20/hr) for occasional big-model runs rather than buying one.

#### The beginner playbook (do this)

1. **Today:** connect a **free cloud model** (Gemini Flash via Google AI Studio, or an OpenRouter `:free` model). Get your wiki working and learn the loop — Path A below.
2. **If you want privacy / offline / free-forever** and have a 16 GB+ GPU or Mac: switch to a **local 8–14B model** with Ollama — Path B below.
3. **Optimise later:** once it works, move up to a bigger or local model for more quality or privacy. Switching is one `hermes model` away.

---

### Path A — Cloud model (easiest, recommended for beginners)

Run:
```bash
hermes model
```
Choose a provider from the list (e.g. **Nous Portal**, **OpenRouter**, **Anthropic**, **OpenAI**). The wizard walks you through signing in or pasting an API key. Cloud models are fast, capable, and need no powerful hardware. Most have a free tier or low pay-per-use cost.

> **Why beginners start here:** the wiki's quality depends on the model's ability to *follow instructions and synthesise*. A strong cloud model gets you a great wiki on day one with zero tuning.

### Path B — Local model (private, free, runs on your machine)

If you'd rather keep everything on your own computer:

1. Install **[Ollama](https://ollama.com)** (separate free app).
2. Pull a capable model. For a 16GB+ machine, a good instruction-follower:
   ```bash
   ollama pull gemma4:26b
   ```
   (Smaller machine? Try `gemma4:e4b` or `gemma4:12b`.)
3. In `hermes model`, choose **Custom endpoint**, and enter:
   - Base URL: `http://localhost:11434/v1`
   - API key: `ollama` (or leave blank)
   - Model name: `gemma4:26b` (must match `ollama list` exactly)
   - Context length: `64000`

> **Two local-model gotchas worth knowing up front** (these trip up almost everyone):
> 1. **Context window.** Ollama defaults to a small 4K context. Long sources will get cut off. Set `OLLAMA_CONTEXT_LENGTH=65536` in your environment before running serious ingestion, or you'll see the agent "forget" the task halfway.
> 2. **Pick a strong instruction-follower.** Tiny models often *narrate* ("I would now create the file...") instead of actually doing it. A 26B-class model like `gemma4:26b` reliably follows the wiki skill; very small models may not.

### Confirm the model works

```bash
hermes chat
```
Type "hello". If it replies, your brain is connected. Type `/exit` to leave.

---

## 🟢 Step 3 — Confirm the `llm-wiki` skill is ready

The skill ships built-in — no install needed. Verify:
```bash
hermes skills list
```
Look for **`llm-wiki`** in the *research* category, status *enabled*. (You'll also spot `arxiv` and `obsidian` — handy companions for later.)

> 🖥️ **Desktop app:** open the **Skills** pane, find **llm-wiki**, and make sure it's enabled. Same check, by clicking.

---

## 🟢 Step 4 — Tell the skill where to keep your wiki

The wiki is just a folder. Set its location once.

> 🖥️ **Desktop app — this is your one terminal moment.** The wiki *path* isn't a GUI field yet, so set it with a single command in any terminal (the app and CLI share the same install):
> ```bash
> hermes config set skills.config.wiki.path ~/ai-fluency-wiki
> ```
> Then carry on in the app. (Prefer not to touch the terminal at all? `hermes dashboard` opens a browser panel where you can edit config too.)

**Terminal path — edit the config file directly:** (it's `config.yaml` in your Hermes home directory — `hermes doctor` shows the path under "Configuration Files"; commonly `~/.hermes/config.yaml`).

Open it in any text editor and add this block (if a `skills:` section already exists, add `config:` under it rather than making a second `skills:`):

```yaml
skills:
  config:
    wiki:
      path: ~/ai-fluency-wiki
```

Save. This puts your wiki at `ai-fluency-wiki` in your home folder, where you can also browse it in your file manager or open it in Obsidian later.

> **Always back up before editing config:** copy `config.yaml` to `config.yaml.bak` first. If anything breaks, restore it.

Confirm Hermes still loads cleanly:
```bash
hermes doctor
```
Green check on "Configuration Files" = good.

---

## 🟢 Step 5 — Initialise your AI-fluency wiki

Now the skill builds the structure for you. Start a chat:
```bash
hermes chat
```
Send this message (it forces the agent to read the skill first, which produces a correct structure):

```
First, read the llm-wiki skill in full, then initialise a new wiki at the configured path.
The domain is: AI Fluency — prompting, AI agents, evaluating AI output, AI ethics,
and the practical skills for using AI well. Set up the schema, index, and log following
the skill's structure. Then show me the SCHEMA.md you created.
```

The agent will create a folder structure like:
```
ai-fluency-wiki/
├── SCHEMA.md      ← rules, tag taxonomy, page conventions (your "steering wheel")
├── index.md       ← catalog of all pages
├── log.md         ← history of what's been added
├── raw/           ← original sources (never edited)
├── entities/      ← people, orgs, tools, models
├── concepts/      ← ideas and topics
├── comparisons/   ← side-by-side analyses
└── queries/       ← saved answers worth keeping
```

**Review the `SCHEMA.md` it shows you** — especially the *tag taxonomy* and *page thresholds*. Spend five minutes here; the schema governs how tidy your wiki stays. Tweak the tags to match how you think about AI fluency (e.g. `prompting`, `agents`, `evaluation`, `ethics`, `cognition`).

> **Verify it actually wrote the files** (don't just trust the chat reply). In a terminal:
> ```bash
> ls -R ~/ai-fluency-wiki
> ```
> You should see `SCHEMA.md`, `index.md`, `log.md`, and the folders. If any are missing, ask the agent again, or create them by hand from the structure above.

---

## 🟠 Step 6 — Add your first source

This is the core loop. Two easy ways to capture:

### Option A — paste text directly

In `hermes chat` (or via Telegram once set up — Step 8):
```
Add this to my wiki: [paste an article, your notes, or any text about AI fluency]
```

### Option B — capture a web page

The cleanest way to grab an article is to **fetch it as text first**, then ingest — web pages are full of menus and markup that waste the agent's effort. A tiny helper does this. Save it as `wikifetch` (works on macOS/Linux; on Windows use WSL or Git Bash):

```bash
#!/usr/bin/env bash
# wikifetch <url> — fetch a page, strip it to clean text, save into the wiki
set -euo pipefail
URL="${1:?usage: wikifetch <url>}"
WIKI="$HOME/ai-fluency-wiki"
SLUG="$(echo "$URL" | sed -E 's#https?://##; s#[^a-zA-Z0-9]+#-#g' | cut -c1-50)"
OUT="$WIKI/raw/articles/$(date +%F)-$SLUG.md"
mkdir -p "$WIKI/raw/articles"
curl -fsSL --max-time 30 -A "Mozilla/5.0" "$URL" | \
python3 -c "
import sys, re, html
raw = sys.stdin.read()
raw = re.sub(r'<head.*?</head>', '', raw, flags=re.S|re.I)
raw = re.sub(r'<(script|style|nav|footer)[^>]*>.*?</\1>', '', raw, flags=re.S|re.I)
t = html.unescape(re.sub(r'<[^>]+>', ' ', raw))
t = re.sub(r'[ \t]+', ' ', t); t = re.sub(r'\n\s*\n\s*\n+', '\n\n', t)
open('$OUT','w').write(t.strip())
print('Saved to', '$OUT')
"
```

Make it runnable (`chmod +x wikifetch`), then:
```bash
./wikifetch https://example.com/some-article-on-ai
```
It drops clean text into your wiki's `raw/articles/`. Then tell the agent:
```
Read the newest file in raw/articles/ and ingest it into my wiki following the llm-wiki skill.
```

### What "ingest" does

The agent will: save the raw source, write or update **concept pages** with proper headings and `[[wikilinks]]`, add them to `index.md`, and log the action. One good source typically touches several pages — that's the compounding effect.

> **Always verify on disk after an ingest:**
> ```bash
> ls ~/ai-fluency-wiki/concepts/
> ```
> Check that real pages appeared. The synthesis is usually great; occasionally the **index/log bookkeeping** is messy (see the tips below) — that's normal and easily tidied.

---

## 🟠 Step 7 — Ask your wiki questions

Once you have a handful of pages:
```
What does my wiki say about evaluating AI output?
```
The agent reads your synthesised pages and answers *from them*, citing which pages it used — not a generic web answer, but knowledge built from your own curated sources.

---

## 🟣 Step 8 (optional) — Set up the Telegram messaging gateway

This lets you talk to your agent — and capture sources into your wiki — from your phone, anywhere. You message a Telegram bot; the bot is your agent.

It takes about five minutes and has four parts: **create a bot**, **get your user ID**, **run the setup wizard**, and **pair your account**.

> 🖥️ **Desktop app:** steps 8.1 and 8.2 (create the bot in Telegram, get your ID) are the same. For 8.3, instead of the wizard, open the **Gateway** pane, toggle on **Telegram**, and paste your token and allowed ID there. Pairing (8.4) works the same.

### 8.1 — Create a bot with BotFather

BotFather is Telegram's official tool for making bots.

1. Open Telegram and search for **@BotFather** (it has a blue verified checkmark — make sure it's the real one).
2. Send it: `/newbot`
3. It asks for a **name** — this is the display name, can have spaces (e.g. `My Wiki Agent`).
4. It asks for a **username** — must be unique and **end in `bot`** (e.g. `my_wiki_agent_bot`). If taken, it'll ask again.
5. BotFather replies with a **token** that looks like `1234567890:AAFxxxxxxxxxxxxxxxxxxxxx`.

> 🔒 **Keep the token secret.** Anyone with it controls your bot. Don't paste it into chats or screenshots. Store it in a password manager.
>
> ⚠️ **Use a dedicated bot.** If you already run another Hermes gateway or bot, make a *new* bot for this — Telegram won't let two services use the same token at once, and it'll break both.

### 8.2 — Get your numeric user ID

Hermes only lets approved people message the bot, and it identifies you by a **number**, not your @username.

- In Telegram, message **@userinfobot** (send it anything, like `hi`).
- It instantly replies with your **ID** — a number like `123456789`. Copy it.

### 8.3 — Run the gateway setup wizard

Back on your computer, in a terminal:
```bash
hermes gateway setup
```

Work through the prompts:

| Prompt | What to enter |
|--------|---------------|
| **Select platform** | **Telegram** |
| **Bot token** | Paste the token from BotFather. *The input is hidden — you won't see characters as you paste. That's normal.* Press Enter. |
| **Allowed user IDs** | Your numeric ID from @userinfobot. (Add more people later, comma-separated.) |
| **Other options** | Leave default / skip — not needed for personal use. |
| **Done?** | Select **Done**. |
| **Restart gateway to apply?** | Type `y`. |

> The **gateway** is the background service that keeps your bot online. It must be running for the bot to respond. If you ever need to restart it manually:
> ```bash
> hermes gateway status     # check it's running
> hermes gateway restart    # restart if needed
> ```

### 8.4 — Pair your account (first message)

For security, the bot ignores people it doesn't recognise — including you at first.

1. In Telegram, send your bot any direct message (e.g. `hi`).
2. **If it replies normally** → you're already approved (your user ID was allowlisted in the wizard). You're done.
3. **If it replies with a pairing code** → copy that code, and in a terminal run:
   ```bash
   hermes pairing approve telegram <YOUR-PAIRING-CODE>
   ```
   Then message the bot again — it should now respond.

### 8.5 — Use it

From the Telegram chat with your bot, in plain language:

- **Capture a source:** *"Add this to my wiki: [paste text]"* — or forward an article / send a link.
- **Ask your wiki:** *"What does my wiki say about prompting techniques?"*
- **Maintain it:** *"Lint my wiki."*

Everything runs on your own machine; Telegram is just the remote control. Your phone becomes a one-tap capture device for your second brain.

> **Troubleshooting the bot:**
> - **No reply at all?** Check `hermes gateway status` — the gateway must be running. If it shows stopped, run `hermes gateway restart`.
> - **"Unauthorized" or silent?** Your user ID may not be in the allowlist. Re-run `hermes gateway setup` and double-check the numeric ID (not your @username).
> - **Bot offline after a reboot?** The gateway needs to be running — relaunch the Hermes app or run `hermes gateway restart`.
> - **Capturing web links:** the bot can save a pasted link, but for clean ingestion it's still best to fetch-and-strip first (the `wikifetch` helper in Step 6). On the phone, pasting the article *text* works great and skips that entirely.

---

## 🟣 Step 9 (optional) — Automate research intake

Have Hermes pull fresh papers into your wiki automatically. This uses the `arxiv` skill plus `llm-wiki`:

> 🖥️ **Desktop app:** the **Cron** pane lets you view, pause, and manage scheduled jobs. You can create this job from a terminal once (command below) and then manage it by clicking, or ask the agent in chat to "create a daily arxiv job" and it'll set it up for you.

```bash
hermes cron create "0 8 * * *" "Use the arxiv skill to find the single most relevant new paper from the past day on AI agents or AI literacy. If nothing relevant, reply [SILENT]. Otherwise save it to raw/papers/ and create a concept page following the llm-wiki skill, then give me a 3-sentence digest." --skill arxiv --skill llm-wiki --name "daily-ai-papers" --deliver telegram
```

**Test it before trusting the schedule:**
```bash
hermes cron run daily-ai-papers
```
Watch what it produces, verify on disk, *then* let the daily schedule take over. (Cron jobs run in a fresh session with a 3-minute limit, so keep them small — one paper per run.)

---

## ⚪ Maintaining your wiki

As it grows, run the skill's health check occasionally:
```
Lint my wiki — find orphan pages, broken wikilinks, duplicate entries, and tidy the index and log.
```
This catches dead links and keeps the index clean.

---

## ⚪ Hard-won tips (read these — they save hours)

These come from real setup experience and aren't obvious from the docs:

1. **Verify on disk, always.** After any ingest, check the actual files (`ls`, open them) rather than trusting the chat summary. AI agents sometimes *describe* work they didn't quite finish. A 10-second check saves confusion.

2. **The model does synthesis well; do bookkeeping yourself if needed.** Writing rich concept pages is where the agent shines. Updating the tiny `index.md`/`log.md` files sometimes misfires (especially on local models). If the index looks duplicated or the log is messy, just fix those two files by hand — the valuable content (the concept pages) is fine.

3. **Strip web pages to text before ingesting.** Raw HTML is ~80% menus and markup. The `wikifetch` helper (Step 6) turns a 100KB page into ~20KB of clean text — better synthesis, faster, fewer errors.

4. **Keep individual sources moderate-sized.** Very large documents can overflow the model's working memory mid-task. If a big source fails, split it into sections and ingest one at a time.

5. **If the agent "forgets" the task and just greets you** ("Hello! How can I help?") right after reading a file, that's usually **context compression firing too early**. In `config.yaml`, raise `compression.threshold` (e.g. from `0.5` to `0.85`) so your instruction survives long reads. This single setting fixes the most confusing failure mode.

6. **Spend time on the SCHEMA.md.** It's the steering wheel. A well-tuned tag taxonomy and clear page-creation rules keep the wiki from sprawling as it grows.

7. **Back up before editing config**, and run `hermes doctor` after any change to confirm it still loads.

---

## ⚪ Where things live (quick reference)

| Thing | Location |
|-------|----------|
| Your wiki | `~/ai-fluency-wiki/` (the path you set in Step 4) |
| Config | `config.yaml` in your Hermes home (`hermes doctor` shows it) |
| Skills list | `hermes skills list` |
| Change model | `hermes model` |
| Chat with agent | `hermes chat` |
| Set up Telegram bot | `hermes gateway setup` |
| Check/restart gateway | `hermes gateway status` / `hermes gateway restart` |
| Approve a paired user | `hermes pairing approve telegram <code>` |
| Health check | `hermes doctor` |

---

## You're done

You now have a private, growing, AI-fluency knowledge base that gets smarter every time you feed it. Capture sources as you read, ask it questions, lint it now and then, and let it compound. The more you put in, the more it connects ideas you'd never have linked yourself.

**Next steps to explore:** open your wiki folder in [Obsidian](https://obsidian.md) to see the `[[wikilinks]]` as a visual graph; add the `arxiv` automation; or branch into separate wikis for other domains.

---

## 🌱 Now go build — and make it matter

You don't need the perfect setup, the best model, or a finished plan. You need to *start*. Connect a free model, capture one source, ask one question — today. The workflow only clicks once your hands are on it, and every small thing you add compounds: a wiki with ten pages is handy; one you've fed for a year becomes a genuine second brain.

Then keep going — **learn by doing, a little every day.** Capture what you struggle with, connect it to what you already know, revisit it. The field will keep shifting under your feet; let your wiki be the place you learn, unlearn, and relearn without starting from zero.

And don't lose sight of *why* it matters. Getting fluent with AI isn't about offloading your thinking — it's about thinking further, building more, and reaching more people. Use what you learn to **teach someone else, solve a real problem, or make something good exist that didn't before.** Knowledge that just sits in a wiki is potential; knowledge you act on is impact.

Start small. Stay curious. Build something that helps. 🌱

*Built with Hermes Agent (Nous Research, MIT License) and the bundled `llm-wiki` skill. Official docs: https://hermes-agent.nousresearch.com/docs*
