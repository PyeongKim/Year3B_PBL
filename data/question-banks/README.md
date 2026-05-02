# Question Bank Data

Edit `question-banks.js` to add new daily banks.

Each bank should use this shape:

```js
{
  id: "QB_V2",
  title: "QB_V2 - Generated 2 May 2026",
  generatedAt: "2026-05-02",
  description: "Optional short note.",
  questions: [
    {
      id: "cvs-001",
      system: "cvs",
      conditionId: "acs",
      condition: "ACS / MI",
      rank: "r1",
      stem: "Clinical vignette...",
      options: ["Option A", "Option B", "Option C", "Option D", "Option E"],
      answer: 1,
      explanation: "Why the correct answer is best, and why key distractors are less likely."
    }
  ]
}
```

Current `system` values are `cvs`, `resp`, `hep`, and `gi`. You can add new
system IDs later, for example `renal`, `endo`, or `neuro`; the MCQ page will add
them to the system selector automatically. Known systems get custom colours, and
new systems use a neutral tag.

`rank` should be `r1`, `r2`, or `r3`. `conditionId` and `condition` power
the disease tags shown on each question and in the incorrect-answer summary.

`answer` is zero-based, so `0` is option A, `1` is option B, and so on. The
page shuffles answer choices for each generated quiz attempt and remaps the
correct answer automatically.
