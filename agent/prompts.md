# Reusable Prompts & Patterns for Your Second Brain

### A copy-paste prompt library for the Hermes Agent `llm-wiki` second brain

> 📓 **Companion to** [*Build a Second Brain with Hermes Agent*](https://pycon.sg/agent/hermes2ndbrain.md). That guide gets the second brain **built**; this one gets the most **out of it**. Everything below is written to be pasted straight into `hermes chat` or your Telegram bot.

> ⚡ **Why these are reusable.** The agent, the wiki structure, and the `llm-wiki` skill are stable — so the *way you talk to them* can be templated. Fill the `[BRACKETS]`, send, verify. The same ten patterns recur across every use case; learn them once and the specifics slot in.

> 🌱 **The guiding principle, carried over from the guide:** these prompts are for *cognitive augmentation, not cognitive offloading*. They're for revisiting and connecting what you've already engaged with — **"after the struggle, not instead of it."** A prompt that thinks *for* you is a misuse; a prompt that makes you think *further* is the point.

---

## How to use this file

- **Patterns** (Part 1) are the transferable building blocks — the *grammar* of good prompts. Ten of them.
- **The use-case library** (Part 2) applies those patterns to the second-brain lifecycle: capture → synthesise → query → compare → evaluate → maintain → automate. Each entry has a **template** and a **filled-in AI-fluency example**.
- **Recipes** (Part 3) chain several prompts into a multi-step workflow.
- **Quick reference** (Part 4) maps every pattern to its use case and the matching guide step.

A note on the examples: they all assume the **AI-fluency wiki** from the guide, with its `raw/`, `concepts/`, `comparisons/`, `queries/`, `entities/` folders and `SCHEMA.md` / `index.md` / `log.md` files. Swap the domain and they transfer to any wiki.

---

# Part 1 — The Ten Core Patterns

These are the reusable moves. Most good wiki prompts are two or three of them combined.

### P1 · Brief it like a new teammate (context-rich prompting)
Treat the agent as a sharp new colleague who knows the field but nothing about *you* or *your wiki's conventions* yet. Front-load the context a human expert would need: the goal, the constraints, the source, and the relevant `SCHEMA.md` rules. A thin prompt gets a generic page; a well-briefed one gets a page that fits your wiki.

```
You're maintaining my AI-fluency wiki. Follow SCHEMA.md conventions (tags, page
thresholds, wikilink style). Goal: [WHAT]. Source/context: [WHAT YOU'RE GIVING IT].
Constraint: [E.G. one concept page, ≤400 words, link to existing pages].
```

### P2 · Read the skill first
The single highest-leverage line for *any* structural task. It forces the agent to load the procedure before acting, which is the difference between a tidy ingest and a mess. Used throughout the guide for exactly this reason.

```
First, read the llm-wiki skill in full. Then [the actual task].
```

### P3 · Neutral framing (anti-sycophancy)
Never telegraph the answer you want — the model is trained to please and will mirror your lean. Ask for the question, not the conclusion. This matters *most* when querying your own wiki, where a flattering answer feels like confirmation but teaches you nothing.

```
❌  "My wiki shows RAG is better than fine-tuning, right?"
✅  "What do my pages say about the trade-offs between RAG and fine-tuning?
    Where do my sources disagree?"
```

### P4 · Rubric-driven evaluation
To get an *objective* judgement instead of praise, hand the agent explicit, binary criteria and a point system, and tell it to score each criterion **before** giving a total. Vague asks ("is this page good?") invite sycophancy; rubrics force rigour.

```
Evaluate [TARGET] against this rubric. For each criterion, quote the evidence,
mark it met/not-met, assign the points, then sum at the end. Be objective.
- [Criterion 1] — [N points] — met only if [unambiguous test]
- [Criterion 2] — [N points] — met only if [unambiguous test]
...
```

### P5 · Options-and-iterate
Don't accept the first answer. Ask for 3–5 options, react to them, ask again. Your feedback *is* the context that steers it — far more efficient than trying to specify everything up front.

```
Give me [3–5] options for [X], each one or two sentences. Don't expand any yet.
→ [you react: "I like 2's angle but 4's specificity; combine them; also consider …"]
→ "Now give me 3 new options based on that feedback."
```

### P6 · Progressive outlining
For anything you'll *write from* the wiki (a summary, a lesson, a thread): outline → critique the outline → bullets → draft. Editing an outline changes whole sections cheaply; editing finished prose changes one word at a time.

```
I'm writing [ARTEFACT] from my wiki on [TOPIC]. Don't draft yet.
First propose 3 outline options drawing on my concept pages. Cite which pages feed each.
```

### P7 · Think hard (reasoning trigger)
For genuine synthesis — comparing sources, resolving contradictions, building a comparison page — tell it to think hard (some setups understand **`ultrathink`**). Skip it for quick capture, where a fast pass is fine. "Think step by step" is obsolete; "think hard" is the modern cue.

```
Think hard before answering. [The synthesis task.]
```

### P8 · Ground it in my pages
Make the agent answer *from your curated wiki and name the pages it used*, not from generic pre-trained knowledge. This is what makes a second brain yours — and it makes hallucinations easy to catch.

```
Answer only from my wiki pages. Cite each page you draw on by filename.
If my wiki doesn't cover it, say so plainly rather than filling the gap from general knowledge.
```

### P9 · Verify on disk
Agents sometimes *describe* work they didn't finish. Every ingest or edit gets a 10-second check. Build it into the habit, not the hope. (Guide tip #1.)

```bash
ls -R ~/ai-fluency-wiki/concepts/        # did the pages actually appear?
git -C ~/ai-fluency-wiki diff --stat     # if you version the wiki, what changed?
```

### P10 · Steer the sources
When the agent fetches or evaluates external material, tell it which sources to trust. Left unsteered, it pulls whatever's most *available* (forums, blogs) over what's most *reliable*. Name the tier you want.

```
Prefer primary and peer-reviewed sources (papers, official docs, model cards) over
blogs and forums. If you can only find low-quality sources, flag that instead of trusting them.
```

---

# Part 2 — Use-Case Prompt Library

Grouped by the second-brain lifecycle. Each entry: **when to use → patterns it uses → template → filled AI-fluency example.**

---

## 🟠 Capture & ingest
*Getting sources in cleanly. → Guide Step 6.*

### Ingest a pasted article or note
**Patterns:** P2 (read skill) · P1 (context) · P9 (verify)

```
First, read the llm-wiki skill in full. Then ingest the text below into my AI-fluency wiki:
save the raw source under raw/articles/, write or update the relevant concept pages with
proper headings and [[wikilinks]], add them to index.md, and log the action.
Tell me which pages you created vs updated.

---
[PASTE THE TEXT]
```
*Then verify (P9):* `ls ~/ai-fluency-wiki/concepts/`

### Ingest a fetched web page
**Patterns:** P2 · P9 — after running `wikifetch` from the guide

```
Read the newest file in raw/articles/ and ingest it into my wiki following the llm-wiki skill.
This is a [primary source / opinion piece / tutorial] on [TOPIC] — weight it accordingly when
you synthesise. List the concept pages it touched and one sentence on what each gained.
```

### Capture-on-the-go (Telegram, one line)
**Patterns:** P1 — minimal but still typed

> *Example sent from your phone:*
```
Add to my wiki: this thread argues chain-of-thought prompting is now redundant on
frontier models because reasoning is trained in. File under prompting + reasoning,
link to the "Reasoning models" page if it exists.
```

### Split a source that's too big to ingest in one pass
**Patterns:** P1 — works around context limits (guide tip #4)

```
The source in raw/articles/[FILE] is long. Don't ingest it whole. First, read the llm-wiki
skill, then read the file and split it into [3] thematic sections. Ingest only section 1 now
as concept pages; list the other sections so I can ingest them one at a time.
```

---

## 🟢 Synthesise & cross-link
*Turning raw sources into interlinked knowledge — the compounding effect.*

### Force the cross-links (the part that makes it a *brain*)
**Patterns:** P7 (think hard) · P1

```
Think hard. Review the concept pages touched by my last 3 ingests. Find connections
my individual sources never stated outright — shared mechanisms, tensions, or one concept
that explains another. Add [[wikilinks]] for each real connection and a one-line note on
the relationship. Don't invent links that aren't supported; list any you considered but rejected.
```
> *Illustrative payoff:* linking the **context-window** page to the **RAG** page to the **"lost in the middle"** page — a relationship none of the three source articles spelled out alone.

### Write a synthesis ("query") page worth keeping
**Patterns:** P8 (ground) · P6 (outline first)

```
I want a saved synthesis page in queries/ answering: "[QUESTION]".
Don't draft yet — first outline it from my existing concept pages and cite which pages feed
each section. Once I approve the outline, write the page with [[wikilinks]] back to its sources.
```
> *Example question:* `"What actually changed in prompting practice between 2022 and 2026?"`

---

## 🟠 Query your wiki
*Asking your own curated knowledge, not the open web. → Guide Step 7.*

### The grounded question (default ask)
**Patterns:** P8 · P3 (neutral)

```
Answer only from my wiki, citing each page by filename. Neutral framing — don't assume my
view. Question: How do my sources characterise [TOPIC], and where do they disagree?
```
> *Example:* `Question: How do my sources characterise "sycophancy" in LLMs, and where do they disagree on how to mitigate it?`

### Find the gaps (what your second brain is missing)
**Patterns:** P3 · P8

```
Based only on what's in my wiki, what are the biggest gaps or under-developed areas in my
understanding of [DOMAIN]? List them as questions I can't currently answer from my own pages.
Don't pad the list — only genuine holes.
```
> *Example domain:* `AI evaluation (evals)` → surfaces that you have pages on rubrics but nothing on benchmark contamination.

### Quiz me from my own pages (active recall)
**Patterns:** P8 · the *augment-not-offload* principle in action

```
Generate 5 questions from my concept pages on [TOPIC] to test my recall — mix of
recall and "explain why". Don't show answers yet. After I answer, mark me against the
pages and point to the exact page for anything I got wrong.
```
> *Example topic:* `quantization and the privacy–speed–quality triangle`

---

## 🟣 Compare & contrast
*Building the `comparisons/` pages — high-value, high-synthesis.*

### Build a comparison page
**Patterns:** P7 (think hard) · P3 (neutral) · P8 (ground)

```
Think hard. Create a comparison page in comparisons/ for [A] vs [B], built from my wiki pages.
Neutral framing — don't pre-judge a winner. Structure: what each is, where each wins, the real
trade-offs, and "choose A when… / choose B when…". Cite the source pages with [[wikilinks]];
flag any claim my wiki doesn't actually support.
```
> *Examples that fit the AI-fluency domain:* `local model vs free cloud` · `RAG vs fine-tuning` · `web search vs deep research` · `reasoning model vs fast model`.

### Pressure-test a comparison you already have
**Patterns:** P4 (rubric) · P3

```
Evaluate my comparisons/[FILE] page for bias and gaps. Rubric, score each then total:
- Balanced (both options get steelmanned) — 30 — met only if each has ≥2 genuine strengths
- Grounded (every claim traces to a cited page) — 30 — met only if no uncited assertions
- Decision-useful ("choose X when" is concrete) — 20
- Surfaces real trade-offs, not just feature lists — 20
End with the 3 weakest spots to fix.
```

---

## 🔵 Evaluate & critique
*Quality control on the wiki itself — and on outside material before it gets in.*

### Critique a concept page objectively (beat the sycophancy)
**Patterns:** P4 (rubric) · P3

```
Critique concepts/[FILE] against this rubric — quote evidence, mark met/not-met, score, sum:
- Accurate: no claim contradicts a cited source — 30
- Self-contained: a newcomer understands it without other pages — 20
- Well-linked: ≥3 relevant [[wikilinks]], none broken — 20
- Right altitude: explains the *why*, not just the *what* — 20
- Tagged per SCHEMA.md — 10
Then give the top 3 concrete edits. Don't tell me it's good — tell me what's weak.
```

### Vet a source before trusting it
**Patterns:** P10 (steer sources) · P3

```
Before I ingest raw/articles/[FILE]: assess its reliability. Who's the author, what's the
evidence base, what's the publication date, and is anything outdated or contested as of now?
Should this go in as fact, as one viewpoint to attribute, or not at all?
```

---

## ⚪ Maintain & lint
*Keeping it tidy as it grows. → Guide "Maintaining your wiki".*

### Standard lint
**Patterns:** P2

```
Lint my wiki — find orphan pages, broken [[wikilinks]], duplicate entries, and untidy
index/log. Show me the issues grouped by type first; don't fix anything until I confirm.
```

### Fix the bookkeeping by hand-guidance (guide tip #2)
**Patterns:** P1 · P9 — the agent is great at pages, shakier on index/log

```
Only reconcile index.md and log.md against the actual files in concepts/, entities/,
comparisons/, and queries/. Don't touch the content pages. List every change before making it.
```
*Then verify (P9):* `ls -R ~/ai-fluency-wiki | head -50`

### Schema drift check
**Patterns:** P4 · P3

```
Audit my wiki against SCHEMA.md. Which pages violate the tag taxonomy, exceed the page
thresholds, or break naming conventions? List violations with the rule each breaks.
Recommend whether to fix the pages or update the schema.
```

---

## 🟣 Automate intake
*Scheduled research, delivered to you. → Guide Step 9 (arxiv + cron).*

### A well-shaped daily-digest cron
**Patterns:** P10 (steer sources) · P1 · the `[SILENT]` discipline so it doesn't spam you

```bash
hermes cron create "0 8 * * *" "Use the arxiv skill to find the single most relevant new \
paper from the past day on [AI agents / AI literacy / evaluation]. Prefer papers with \
empirical results over position pieces. If nothing clears that bar, reply [SILENT]. \
Otherwise save it to raw/papers/, create a concept page per the llm-wiki skill, add \
[[wikilinks]] to related pages, and give me a 3-sentence digest ending with why it matters \
for my wiki." --skill arxiv --skill llm-wiki --name "daily-ai-papers" --deliver telegram
```
*Always dry-run before trusting the schedule (guide Step 9):* `hermes cron run daily-ai-papers`

### Weekly self-review of what you captured
**Patterns:** P7 · P8 · active-learning layer

```bash
hermes cron create "0 18 * * 5" "Think hard. Review every page added to my wiki in the \
past 7 days. Give me: (1) the through-line connecting this week's additions, (2) one \
connection to older pages I might have missed, (3) one question this week's reading raised \
but didn't answer. Ground it in the pages; cite them." --skill llm-wiki --name "weekly-review" \
--deliver telegram
```

---

## 🟢 Tune the schema
*The steering wheel. Five minutes here saves sprawl later. → Guide Step 5, tip #6.*

### Shape the taxonomy to how *you* think
**Patterns:** P1 · P5 (options)

```
Read SCHEMA.md. My AI-fluency wiki will grow around these themes: prompting, agents,
evaluation, ethics, cognition, local-vs-cloud infrastructure. Propose 3 tag-taxonomy
options — flat, two-level, and faceted — with the trade-offs of each. Don't edit the schema
yet; I'll pick.
```

### Add a page type
**Patterns:** P1 · P2

```
First read the llm-wiki skill and my SCHEMA.md. I want a new page type: "technique" —
a reusable prompting/agent technique with fields: what, when-to-use, failure-modes, example.
Propose the schema addition and one sample page for "rubric-driven evaluation". Show me before writing.
```

---

# Part 3 — Recipes (chained workflows)

Multi-step sequences that compose the patterns above. Run them top to bottom.

### Recipe A — Ingest a dense paper *well*
*For an arXiv paper or long report you actually want to understand, not just file.*

1. **Fetch & strip** (guide Step 6 helper): `./wikifetch https://arxiv.org/abs/[ID]`
2. **Pre-read, don't ingest** — P1 + P7:
   ```
   First read the llm-wiki skill. Then read raw/articles/[FILE] and give me a 5-bullet
   map of its claims and evidence. Don't ingest yet — I want to engage with it first.
   ```
3. *(You read the paper. The struggle. Then:)*
4. **Ingest with your angle** — P1:
   ```
   Now ingest it. I care most about [THE PART THAT MATTERS TO YOU]. Make that a strong
   concept page; treat the rest as supporting links. Cross-link to [[existing page]].
   ```
5. **Verify** — P9: `ls ~/ai-fluency-wiki/concepts/`
6. **Connect** — the synthesis prompt from Part 2 to wire it into the wider wiki.

### Recipe B — Turn a week of capture into something you teach
*The augment-not-offload loop end to end — capture becomes contribution.*

1. **Weekly synthesis** — P7 + P8:
   ```
   Think hard. From this week's new pages on [TOPIC], draft the through-line as 3 key ideas,
   grounded in and citing the pages.
   ```
2. **Outline the lesson** — P6:
   ```
   I'm teaching this to [AUDIENCE] in [FORMAT]. Don't draft. Give me 3 outline options that
   build from those 3 ideas, each with a hook and a hands-on beat.
   ```
3. **Iterate** — P5: react to the options, ask for a revised outline.
4. **Draft, then critique** — P6 + P4: draft from the chosen outline, then score the draft against a clarity rubric before you touch it yourself.

### Recipe C — Resolve a contradiction in your wiki
*When two sources disagree and you want the disagreement made explicit, not averaged away.*

1. **Surface it** — P3 + P8:
   ```
   Answer only from my wiki. Where do my pages on [TOPIC] contradict each other? Quote the
   conflicting claims and name the pages. Don't resolve it yet.
   ```
2. **Steelman both** — P7 + P3:
   ```
   Think hard. Steelman each side of that contradiction in 3 sentences. What evidence would
   settle it? Is this a real disagreement or a difference in scope/definition?
   ```
3. **Record it** — write a `queries/` page capturing the tension and the open question (contradictions you've *mapped* are more valuable than ones you've smoothed over).

---

# Part 4 — Quick reference

| Pattern | One-line cue | Best for | Guide link |
|---|---|---|---|
| **P1 Brief like a teammate** | front-load goal + context + schema rules | every structural task | Steps 5–6 |
| **P2 Read the skill first** | `First, read the llm-wiki skill in full…` | ingest, init, schema edits | Steps 5, 6 |
| **P3 Neutral framing** | ask the question, not the conclusion | querying, comparisons, critique | Step 7 |
| **P4 Rubric evaluation** | binary criteria, score-then-sum | page/comparison critique, schema audit | maintenance |
| **P5 Options-and-iterate** | "3–5 options, no expanding yet" | schema design, lesson planning | Step 5 |
| **P6 Progressive outlining** | outline → critique → bullets → draft | writing *from* the wiki | — |
| **P7 Think hard** | `Think hard.` / `ultrathink` | synthesis, comparisons, cross-links | Step 9 reviews |
| **P8 Ground in my pages** | "answer only from my wiki, cite pages" | every query | Step 7 |
| **P9 Verify on disk** | `ls -R ~/ai-fluency-wiki/...` | after every ingest/edit | tip #1 |
| **P10 Steer the sources** | "prefer primary/peer-reviewed" | fetch, vet, automate | Steps 6, 9 |

### The five-second checklist before you send a wiki prompt
1. **Context** — did I brief it like a new teammate? (P1)
2. **Skill** — does this need "read the skill first"? (P2)
3. **Framing** — am I leaking the answer I want? (P3)
4. **Grounding** — should it answer from *my pages*, not the web? (P8)
5. **Verify** — what's my disk check afterwards? (P9)

---

## A closing note

The prompts are scaffolding. The goal isn't a wiki that thinks for you — it's a practice that makes *you* think further, connect more, and have something worth teaching. Capture what you struggle with, prompt it into connection, revisit it, and pass it on.

**Start small. Stay curious. Build something that helps.** 🌱

> *Companion to [Build a Second Brain with Hermes Agent](https://pycon.sg/agent/hermes2ndbrain.md). Patterns distilled from modern prompting practice; mechanics from the bundled `llm-wiki` skill (Nous Research, MIT License).*
