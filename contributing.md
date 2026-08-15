# Contributing to Awesome Multimodal Agents

Thank you for helping keep this list selective, current, and evidence-grounded. Contributions may add a work, correct metadata, repair a link, or improve the taxonomy. Small, focused pull requests are easiest to review.

## Before You Submit

1. Search the [README](README.md) for the title, arXiv identifier, project name, and repository URL. Update an existing entry instead of creating a second entry for a journal or conference version.
2. Identify the work's primary evaluated artifact: system, model or component, method, benchmark or dataset, engineering resource, or agent skill.
3. Choose one canonical section. Cross-cutting properties belong in metadata, not duplicate entries.
4. Collect primary evidence for the release date, venue, links, and—when proposing an end-to-end system—the runtime agent loop.

## Inclusion Tests

### End-to-End Agent Systems

A work belongs in Section 3 only when all four tests pass:

1. **Multimodal evidence:** at least two semantically distinct, task-relevant information modalities affect decisions.
2. **Goal-directed policy:** the runtime selects actions toward a task objective.
3. **Grounded action:** an action changes an environment, artifact, participant, tool state, or available evidence.
4. **Runtime feedback:** the resulting observation or judgment causally changes a later action during evaluation.

The system entry must name the full causal path: `action -> returned observation -> changed later decision`. A multi-step decoder, chain of thought, action sequence, or offline training reward does not by itself prove a runtime feedback loop.

### Other Research Artifacts

Valuable work that does not pass all four system tests can still belong elsewhere:

| Primary contribution | Canonical section | Typical evidence |
| --- | --- | --- |
| Survey or perspective | Section 2 | The reviewed field and organizing framework |
| Learned backbone, policy, representation, memory, verifier, or tool-use module | Section 4 | Model architecture, training objective, or component evaluation |
| Training, planning, orchestration, coordination, or world-model algorithm | Section 5 | Method ablations and algorithmic evaluation |
| Benchmark, dataset, simulator, or executable evaluation environment | Section 6 | Tasks, splits, environment, metrics, and evaluated baselines |
| Maintained implementation infrastructure | Section 7 | Runnable code, documentation, releases, and maintenance activity |
| Portable procedural package with a concrete `SKILL.md` | Section 8 | Inspectable instructions plus any scripts, references, or assets |

### Out of Scope

- Static multimodal understanding or generation with no agentic decision process.
- Open-loop action prediction presented as a complete agent system.
- A second “modality” consisting only of actions, coordinates, rewards, hidden states, or another encoding of the same signal.
- Product announcements without an inspectable artifact or enough technical evidence to classify the contribution.
- Duplicate entries for the same work, model version, or later venue publication.
- Abandoned link farms or repositories whose principal value is not multimodal-agent research or implementation.

## Evidence and Metadata

Prefer the strongest available primary source for each claim:

| Claim | Preferred evidence |
| --- | --- |
| First public release | Earliest arXiv submission, official proceedings page, dated technical report, or tagged project release |
| Peer-reviewed venue | Official proceedings, journal page, OpenReview decision, or the paper's verified journal reference |
| Code or data availability | Author- or organization-owned repository or dataset page linked by the paper/project |
| System eligibility | Methods, evaluation protocol, traces, or diagrams that expose the runtime feedback path |

Use the earliest inspectable public month in `YYYY-MM` form and order research entries newest first within their subsection. A later venue changes the status label, not the release month or canonical placement. Use `Preprint`, `Technical report`, `Project release`, or `Position paper` when peer review cannot be verified. Do not infer acceptance from a planned submission, workshop presentation, citation string, or repository topic.

Link directly to the canonical paper, project, code, dataset, or collection. Avoid search pages, URL shorteners, scraped paper mirrors, and aggregator pages when a primary source exists. Remove tracking parameters. If the canonical URL changes, replace it in place and mention the old URL in the pull-request description.

## Entry Templates

Use only the resource badges that are actually available.

### Survey

```markdown
- **Title** [![arXiv YYMM.NNNNN](https://img.shields.io/badge/arXiv-YYMM.NNNNN-b31b1b.svg)](https://arxiv.org/abs/YYMM.NNNNN)
  *YYYY-MM · Venue or Preprint* — **Scope:** What field, artifacts, and evaluation questions the survey organizes
```

### End-to-End System

```markdown
- **Title** [![arXiv YYMM.NNNNN](https://img.shields.io/badge/arXiv-YYMM.NNNNN-b31b1b.svg)](https://arxiv.org/abs/YYMM.NNNNN)
  *YYYY-MM · Venue or Preprint* — **Modalities:** Language; Image/screen — **Capabilities:** Perceive/retrieve; Plan/reason; Use tools/control; Verify/reflect — **Temporal:** Long-horizon — **Participants:** Single agent
  **Agent loop:** The action changes X; returned observation Y changes the next planning, tool, editing, or control decision Z
```

### Model, Policy, or Component

```markdown
- **Title** [![arXiv YYMM.NNNNN](https://img.shields.io/badge/arXiv-YYMM.NNNNN-b31b1b.svg)](https://arxiv.org/abs/YYMM.NNNNN)
  *YYYY-MM · Venue or Preprint* — **Artifact:** Model / policy / component — **Role:** Principal learned capability — **Modalities / channels:** Language; Images; Structured state
  **Canonical placement:** Why the primary result is this artifact rather than a complete system
```

### Method

```markdown
- **Title** [![arXiv YYMM.NNNNN](https://img.shields.io/badge/arXiv-YYMM.NNNNN-b31b1b.svg)](https://arxiv.org/abs/YYMM.NNNNN)
  *YYYY-MM · Venue or Preprint* — **Method:** Method family — **Contribution:** Evaluated algorithmic contribution
  **Canonical placement:** Why this is a method rather than a complete runtime system
```

### Benchmark, Dataset, or Environment

```markdown
- **Title** [![arXiv YYMM.NNNNN](https://img.shields.io/badge/arXiv-YYMM.NNNNN-b31b1b.svg)](https://arxiv.org/abs/YYMM.NNNNN)
  *YYYY-MM · Venue or Preprint* — **Type:** Benchmark / dataset / environment — **Modalities / environment:** Language; Screenshots; Application state
  **Evaluates:** Tasks, capabilities, metrics, and evaluation setting
```

Engineering resources, skills, and related lists use the existing table schema in the target subsection. Keep descriptions factual and compact; do not copy paper abstracts or use promotional claims.

## Pull Request Checklist

- [ ] I searched for duplicate titles, arXiv identifiers, and repository URLs.
- [ ] I selected one canonical placement based on the primary evaluated contribution.
- [ ] I verified the first public month and publication status from primary evidence.
- [ ] Every added link is direct, relevant, and reachable.
- [ ] A proposed system passes all four inclusion tests and states causal agent-loop evidence.
- [ ] The entry follows the subsection's template and reverse-chronological order.
- [ ] I disclosed if I am an author, maintainer, or otherwise affiliated with the work.
- [ ] I ran the local checks below, or explained why a check could not run.

```bash
npx --yes markdown-link-check --alive 200,202,206 README.md
npx --yes markdown-link-check --alive 200,202,206 contributing.md
npx --yes awesome-lint README.md
```

The scheduled repository workflow performs recurring link checks. HTTP `202` is accepted because some publisher DOI resolvers use it for a valid asynchronous response. Some sites also rate-limit automated clients; when a primary URL works in a browser but fails only in automation, include the evidence in the pull request rather than silently replacing it with a lower-quality mirror.

## Maintenance-Only Changes

Metadata and link repairs are welcome even when no new work is added. For a venue update, retain the original public month, replace `Preprint` with the verified venue and year, and add an official paper link when useful. For renamed projects or repositories, update the existing entry and preserve a single canonical record.

## Review and Conduct

Maintainers may move, edit, defer, or decline an entry to preserve the taxonomy and evidence standard. Inclusion is not an endorsement, and citation count, organization, popularity, or contributor affiliation does not override the criteria. Keep discussion specific to evidence and placement, and follow the repository's adopted community conduct policy if one is added.
