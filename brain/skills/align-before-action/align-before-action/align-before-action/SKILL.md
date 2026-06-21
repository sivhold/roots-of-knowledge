---
name: align-before-action
description: Use this skill before starting any non-trivial task for this user — anything with more than one reasonable approach, anything that touches files or makes lasting changes, anything multi-step, or anything where a wrong guess means real rework. It interviews the user thoroughly until you're both genuinely aligned on goal, scope, and approach before you take action. Trigger this proactively even when the user hasn't asked to be interviewed and hasn't flagged ambiguity themselves — they want you to surface ambiguity they may not have noticed. Do NOT trigger for simple, single-step, low-stakes requests (a quick factual answer, a one-line typo fix, reading a file) — interviewing there is just friction, not alignment.
---

# Align Before Acting

## Why this exists

The cost of misalignment isn't the clarifying question — it's the rework. A wrong guess on a multi-step or consequential task wastes more of the user's time than five extra questions would have. This skill exists to front-load that cost: spend a couple of minutes getting truly aligned before spending an hour building the wrong thing.

"Relentless" doesn't mean exhausting — it means not settling for the first plausible interpretation. Most requests have a comfortable, obvious-sounding reading. Your job is to notice the parts that *aren't* actually nailed down, even when the user's phrasing sounds confident.

## When to use this

Trigger before:
- Multi-step work (more than ~2-3 actions chained together)
- Anything that creates, edits, or deletes files, or changes a live system
- Requests with more than one reasonable interpretation of scope, approach, or "done"
- Work where the user is clearly delegating a judgment call to you ("clean this up," "make it better," "handle the X situation")
- Anything that's expensive to undo or redo

Skip it for:
- Single-step, low-stakes asks (answer a question, fix an obvious typo, look something up)
- Requests where the user has already specified scope, format, and constraints clearly
- Follow-ups within a task you're already aligned on — don't re-interview mid-stream just because a new sub-decision came up; use judgment or a quick single question instead

If you're not sure which bucket a request falls into, that uncertainty is itself a signal to interview.

## How to run the interview

1. **Think before asking.** Read the request and identify what's actually unresolved — not a generic checklist, but the specific things where a wrong guess would change the output. Common categories: the actual goal/outcome the user wants, scope boundaries (what's in/out), constraints (tools, deadlines, style, prior decisions), success criteria ("how will you know this is done well"), and audience/format of the result.

2. **Use the AskUserQuestion tool, not freeform text.** Batch related questions into one call (it supports multiple questions with multiple-choice options plus a free-text "Other"). This is faster for the user than a wall of questions in prose, and forces you to actually commit to concrete options rather than vague open-ended asks.

3. **Propose answers, don't just ask.** Where you have a reasonable guess, offer it as the recommended option rather than asking a totally open question. This respects the user's time — confirming a good guess is faster than generating an answer from scratch. Mark your suggestion clearly so the user knows it's a recommendation, not a setup.

4. **Treat this as a loop, not a single round.** Default to continuing: after the user answers, check whether their answers created new ambiguity, revealed a constraint you didn't know about, or only resolved part of the picture. If so, ask another batch of questions. Keep looping — multiple rounds, as many as it takes — until you can restate the goal, scope, and approach back to the user and you're both confident it's right, not just plausible. Don't stop at round one out of politeness or a feeling that you've "asked enough" — the default is to keep going until real alignment, not until a reasonable number of questions have been asked.

5. **Watch for an explicit override.** If the user says something like "just go," "stop asking, use your judgment," or "I trust you, figure it out" — respect that immediately. Relentless alignment-seeking is a service to the user, not a process they're obligated to sit through. Drop into your best judgment, note the assumptions you're making, and proceed.

6. **Summarize before acting.** Once aligned, restate the plan in a few sentences (goal, scope, approach, what "done" looks like) before doing the work. This is the last cheap checkpoint before the expensive part starts — if something's still off, this is where the user catches it.

## What this looks like in practice

A request like "redo the donations page" should not go straight to edits. It should trigger questions like: what's wrong with the current version (is this a content change, a layout change, or both)? Is the Stripe link finalized or still pending? Should existing copy be preserved, rewritten, or merged with new material? Each of those is a real fork in what gets built — guessing wrong on any one means redoing the work.

A request like "what's the Stripe payment link URL" needs no interview — it's a single factual lookup with no branching outcomes.
