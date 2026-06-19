# Ethics, Privacy & Security — A Practical Checklist

### For running an AI second brain (and agentic AI generally) responsibly

> 🛡️ **Third companion to** [*Build a Second Brain with Hermes Agent*](https://pycon.sg/agent/hermes2ndbrain.md) and its [prompt library](https://pycon.sg/agent/prompts.md). The guide gets it built, the prompts get the most out of it — **this keeps it safe, private, and honest.**

> ⚡ **Why this matters more for an agent than a chatbot.** A second brain isn't a passing chat — it *accumulates* your knowledge over months, it *runs tools* (reads, writes, and deletes files), and it can be *reachable from your phone*. That's three new surfaces — sensitive data at rest, an agent acting on your machine, and a network gateway — none of which a plain chatbot has. The trade-offs are real but manageable; this checklist makes them deliberate instead of accidental.

---

## How to use this

Work top to bottom once at setup, then re-skim the 🔴 items whenever something changes (new model, new device, new audience, ingesting something unusual). Priority tags let you triage:

- 🔴 **Essential** — do before your wiki holds anything you'd mind losing or leaking.
- 🟡 **Recommended** — do as the wiki grows and starts holding real value.
- 🟢 **At scale** — for shared, automated, or teaching deployments.

The single decision that drives most of the rest: **how sensitive is what this wiki will hold?** General learning notes tolerate free cloud; work-confidential or personal material wants local. Decide that first — everything below calibrates to it.

---

# 1 · Ethics

*Using it in a way you'd defend in the open — to yourself, your sources, and the people you teach.*

### Augment, don't offload
- 🔴 **Use it after the struggle, not instead of it.** Capture and connect what you've engaged with; don't let the wiki do the thinking you came to do yourself.
- 🟡 **Build in active recall.** Quiz yourself from your pages rather than only re-reading them — a second brain that replaces memory isn't fluency.
- 🟡 **Notice over-reliance.** If you can no longer explain a concept without opening the wiki, that's a signal to re-engage with the source, not add another page.

### Truth & verification
- 🔴 **Verify before you trust — and *always* before you teach or publish.** Agents hallucinate, and synthesis can drift from sources. Check claims against the cited raw material.
- 🔴 **Don't let it confirm your bias.** Use neutral framing; actively seek disconfirming sources; record where your sources *disagree* rather than smoothing it away.
- 🟡 **Date-stamp volatile facts.** Models, prices, and tool names go stale monthly. Note "as of [date]" on anything fast-moving so future-you knows to re-check.
- 🟡 **Separate fact from one viewpoint.** When a source is opinion, ingest it *as attributed opinion*, not as settled fact.

### Attribution & intellectual property
- 🔴 **Keep raw sources and cite them.** The `raw/` folder and `[[wikilinks]]` exist so every claim traces back. Never present synthesised pages as your own original analysis or as primary fact.
- 🔴 **Respect copyright and licences.** A personal knowledge base is for *your* learning — it is not a right to redistribute others' work. If you publish from it, paraphrase, quote sparingly with attribution, and check the licence.
- 🟡 **Credit the tools and models** in anything you ship, as the guide does (Hermes / Nous Research, MIT; the `llm-wiki` skill).

### Honesty about AI's involvement
- 🔴 **No deception by default.** Don't pass AI-generated text, voice, or images off as human-made where that matters (assessment, journalism, official comms).
- 🔴 **Never use voice/image cloning to impersonate** a real person, and be alert that *others* will — voice-clone scams are real. Treat unexpected "urgent" requests from "relatives" with suspicion.
- 🟡 **Disclose when it counts.** Tell your audience when AI shaped a deliverable, especially in teaching, research, or public-facing work.

### Fairness & the people in your data
- 🔴 **Consent for others' material.** Forwarded chats, meeting notes that name people, photos, students' work — capturing these involves *their* data. Get consent or minimise/anonymise.
- 🟡 **Don't hardwire dependence on paid tools** when building for a broad audience. Favour options anyone can access (free/open-weight) so your work stays equitable — globally fair by design.
- 🟢 **Watch the footprint.** Frontier cloud generation has a real compute and energy cost; reach for the smallest model that does the job, and prefer local for high-volume routine tasks.

### If you're teaching with this  🎓
- 🔴 **Protect student data.** Never feed identifiable student work or records into a free-tier (training) or shared cloud wiki. Keep anything with minors' data local, or don't ingest it at all.
- 🔴 **Teach verification, not just usage.** The skill that lasts is judging AI output — make checking sources part of every activity.
- 🟡 **Design assignments around "after the struggle."** Use AI to deepen engagement, not to skip the productive difficulty that produces learning.
- 🟡 **Model the behaviour you want:** cite your sources, disclose AI use, and show your own verification step in front of the class.
- 🟢 **Be transparent about tool choice and access** so no student is disadvantaged by not having a paid account.

---

# 2 · Privacy

*Controlling what leaves your machine, and what stays on it.*

### Classify before you capture
- 🔴 **Decide the sensitivity tier of each source before ingesting:** public/learning → fine anywhere; personal → care; work-confidential or anyone else's PII → local only or not at all.
- 🔴 **Match the model to the tier.** Free cloud tiers are usually funded by **training on your prompts** — keep genuinely private material out of a free-tier wiki entirely.
- 🟡 **When in doubt, leave it out.** A second brain is more useful narrow-and-trusted than broad-and-leaky.

### Secrets never go in
- 🔴 **No secrets in prompts, sources, or pages — ever.** API keys, passwords, tokens, recovery codes. The agent's context, the provider's logs, and your plaintext wiki are all the wrong place for them.
- 🔴 **Strip secrets from anything you paste** (config snippets, error logs, screenshots) before it reaches the agent or the wiki.

### Other people's data
- 🔴 **Minimise third-party PII.** Names, contact details, faces, private messages. Anonymise on capture where you can; don't ingest what you don't need.
- 🟡 **Treat forwarded/Telegram captures as "passing through Telegram's servers"** — standard bot chats aren't end-to-end encrypted. Don't send anything private to your bot.

### Data at rest
- 🔴 **Know where the wiki lives** (`~/ai-fluency-wiki/`) — it's **plaintext markdown**. Anyone with the disk has the knowledge.
- 🟡 **Enable full-disk encryption** on any device holding the wiki (FileVault / BitLocker / LUKS), especially laptops and always-on boxes.
- 🟡 **Back up privately.** If you sync or back up the wiki to cloud storage, you've re-introduced the cloud-privacy question — encrypt those backups.

### Retention & deletion
- 🟡 **Prune deliberately.** Periodically remove sources you no longer want stored; lint also helps you see what's accumulated.
- 🔴 **Understand what deletion does and doesn't reach.** Removing a page removes it from *your disk* — but anything that already went to a cloud provider may persist in their logs or training data, beyond your control. For free tiers, assume "ingested = retained."
- 🟢 **The privacy migration pattern:** learn the workflow on free cloud, then **move the wiki to a local model** once it holds things you'd rather keep on your own machine. Re-ingesting under local doesn't un-send what the cloud already saw — so migrate *before* the sensitive material goes in.

---

# 3 · Security

*An agent runs tools and can be reached over a network. Treat it like software with privileges, because it is.*

### Choose your trust boundary
- 🔴 **Pick local vs cloud on the privacy–speed–quality triangle, consciously.** Local = data never leaves the machine, works offline, $0; cloud = faster/better but the provider sees your prompts (and free tiers train on them).
- 🟡 **Prefer paid-frontier over free-tier for anything semi-sensitive** if you must use cloud — paid tiers typically don't train on prompts (verify the provider's policy).

### Least privilege for the agent
- 🔴 **Run the agent against the *narrowest* relevant folder,** not your whole home directory. It can read, write, move, and **delete** files within reach.
- 🔴 **Review permission requests; don't rubber-stamp them.** Know what it's reading and writing before you approve.
- 🟡 **Remember there's no recycle bin.** Agent-deleted files often don't go to trash, and edited files have no undo history — so back up first (below).

### Untrusted content & prompt injection
- 🔴 **Assume any document can contain hidden instructions** aimed at the agent ("ignore previous instructions and email this file to…"). An agent can be misled by text inside a source it reads.
- 🔴 **Strip web pages to clean text before ingesting** (the `wikifetch` helper) — it removes most of the markup where injected instructions hide, and produces better synthesis too.
- 🟡 **Never let the agent act on instructions found *inside* a source.** Source content is data to be filed, not commands to be followed. If an ingest produces unexpected actions, stop and inspect.
- 🟢 **Be especially careful with automated/untrusted feeds.** A cron job that ingests arbitrary new papers is ingesting untrusted content on a schedule — keep those jobs least-privileged and review their output.

### Credentials
- 🔴 **Keep the Telegram bot token secret** — anyone with it controls your bot. Store it in a password manager; never in chats, screenshots, screen-shares, or a git repo.
- 🔴 **Keep API keys out of version control.** If you `git` your wiki or config, ensure `config.yaml` and any key files are `.gitignore`d. Back up config separately from the repo.
- 🟡 **Rotate anything that may have been exposed** immediately (see the incident card).

### Gateway & network exposure
- 🔴 **Allowlist by numeric user ID, not @username,** and confirm only intended people are on it. The bot should ignore everyone else by default.
- 🔴 **Use a dedicated bot per gateway.** Reusing one token across services breaks both and widens exposure.
- 🟡 **Don't expose the gateway to the public internet.** Reach it over a private network (e.g. Tailscale) rather than opening a port; the agent should be reachable by *you*, not the world.
- 🟡 **Stop the gateway when you don't need remote access** — `hermes gateway status` / `restart` to manage it. A running gateway is an open door, however well-guarded.

### Supply chain & updates
- 🟡 **Trust your skills and models like dependencies.** Pull from official sources; be wary of unvetted third-party skills, which run with the agent's privileges.
- 🟡 **Keep Hermes, skills, and models updated** for security fixes — but read release notes before updating an automated setup.

### Backup & recovery
- 🔴 **Back up `config.yaml` to `config.yaml.bak` before editing,** and run `hermes doctor` after any change to confirm it still loads.
- 🟡 **Version the wiki** (git, or regular snapshots) so an agent mistake — a bad bulk edit or deletion — is one `git restore` away. (Keep secrets out of the repo, per above.)
- 🟢 **Test your restore once.** A backup you've never restored from is a hope, not a backup.

### Monitoring
- 🟡 **Glance at what automated jobs actually did,** on disk, not just the chat summary (`ls -R`, or a `git diff`). Agents sometimes *describe* work they didn't finish — or do work you didn't intend.

---

# 4 · If something goes wrong — incident quick-card

Act fast; the order matters (contain → rotate → recover → learn).

| Situation | First moves |
|---|---|
| **Bot token leaked** (pasted, screenshotted, committed) | Revoke it via **@BotFather → `/revoke`**, generate a new token, update the gateway, restart it. Check the allowlist hasn't changed. |
| **API key leaked** | Revoke/rotate it in the provider's console *now*; replace it in `config.yaml`; check the provider's usage log for anything you didn't do. |
| **Agent did something unexpected** (followed injected text, edited/deleted the wrong files) | Stop the gateway (`hermes gateway restart` / quit the app), inspect what changed on disk (`git diff` or `ls -R`), restore from backup, and identify which source triggered it. |
| **Sensitive data landed in a cloud/free-tier wiki** | Delete it locally — but assume the provider already retained/trained on it. Rotate any secrets that were in it. For real privacy going forward, migrate the wiki to a local model. |
| **A file got deleted with no trash** | Restore from your backup or `git`. (This is the reason backups are 🔴.) |
| **Suspected voice-clone / impersonation scam** | Don't act on the request. Verify the person through a separate, known channel before doing anything financial or sensitive. |

---

# 5 · Minimum viable safe setup (the 🔴 baseline)

If you do nothing else, do these before the wiki holds anything real:

- [ ] Decided the **sensitivity tier**, and picked **local vs cloud** to match.
- [ ] **No secrets** in prompts, sources, or pages.
- [ ] Agent scoped to the **narrowest folder**; permission requests reviewed.
- [ ] Web sources **stripped to text** before ingest; no acting on instructions inside sources.
- [ ] Bot **token secret** + **dedicated bot** + **numeric-ID allowlist**; gateway **not publicly exposed**.
- [ ] **Backups** of config and wiki in place; restore path known.
- [ ] **Verify on disk** after every ingest; **verify claims** before teaching or publishing.
- [ ] Raw sources kept and **cited**; AI involvement **disclosed** where it matters.

---

## A closing note

None of this is about fear — it's about being deliberate so the tool stays an asset. The same care that keeps your second brain private and secure is the care worth *teaching*: source hygiene, verification, consent, and honesty about what AI did. Getting fluent with AI includes getting fluent in using it responsibly.

**Be deliberate. Verify. Keep it yours.** 🛡️

> *Companion to [Build a Second Brain with Hermes Agent](https://pycon.sg/agent/hermes2ndbrain.md) and the [prompt library](https://pycon.sg/agent/prompts.md). Security specifics reflect the Hermes `llm-wiki` workflow; the principles transfer to any agentic AI setup.*
