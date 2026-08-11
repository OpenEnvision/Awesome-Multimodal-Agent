<a id="top"></a>

<!--lint disable double-link table-pipe-alignment-->

<div align="center">

# Awesome Multimodal Agents

<p>A curated map of agents that perceive across modalities, reason in a loop, and act on the digital or physical world.</p>

[![Awesome](https://awesome.re/badge-flat2.svg)](https://awesome.re)
![GitHub Stars](https://img.shields.io/github/stars/OpenEnvision/Awesome-Multimodal-Agent?style=flat-square)
![PRs Welcome](https://img.shields.io/badge/PRs-welcome-16a34a?style=flat-square)
![Scope](https://img.shields.io/badge/scope-multimodal%20%7C%20agentic%20%7C%20interactive-0f766e)
![Updated](https://img.shields.io/badge/updated-2026--08-111827)

</div>

An evidence-gated research and implementation index for multimodal agents, spanning end-to-end systems, enabling research, evaluation resources, open infrastructure, and reusable skills.

## Contents

- [About](#about)
- [1. Foundations](#1-foundations)
  - [1.1 What Counts as a Multimodal Agent](#11-what-counts-as-a-multimodal-agent)
  - [1.2 Agent Loop and Evidence](#12-agent-loop-and-evidence)
  - [1.3 Canonical Research Taxonomy](#13-canonical-research-taxonomy)
- [2. Surveys and Perspectives](#2-surveys-and-perspectives)
  - [2.1 General Multimodal Agency](#21-general-multimodal-agency)
  - [2.2 Embodied Agents and World-Model-Based Planning](#22-embodied-agents-and-world-model-based-planning)
  - [2.3 Multi-Agent and Human-Agent Collaboration](#23-multi-agent-and-human-agent-collaboration)
- [3. End-to-End Agent Systems](#3-end-to-end-agent-systems)
  - [3.1 Information Seeking and Media Understanding](#31-information-seeking-and-media-understanding)
  - [3.2 Creative and Multimodal Workflows](#32-creative-and-multimodal-workflows)
  - [3.3 Conversation and Social Interaction](#33-conversation-and-social-interaction)
  - [3.4 Digital and Software Environments](#34-digital-and-software-environments)
  - [3.5 Virtual, 3D, and Open Worlds](#35-virtual-3d-and-open-worlds)
  - [3.6 Physical Robotics and Multi-Robot Systems](#36-physical-robotics-and-multi-robot-systems)
- [4. Agent Models, Policies, and Components](#4-agent-models-policies-and-components)
  - [4.1 Omni-Modal and Interactive Models](#41-omni-modal-and-interactive-models)
  - [4.2 Vision-Language-Action and Generalist Policies](#42-vision-language-action-and-generalist-policies)
  - [4.3 Spatial, Memory, and Tool-Use Models and Components](#43-spatial-memory-and-tool-use-models-and-components)
- [5. Agent Learning, Planning, and World-Model Methods](#5-agent-learning-planning-and-world-model-methods)
  - [5.1 Tool Use, Workflow, and Program Synthesis](#51-tool-use-workflow-and-program-synthesis)
  - [5.2 Agentic Learning and Self-Improvement](#52-agentic-learning-and-self-improvement)
  - [5.3 World Models and Model-Based Planning](#53-world-models-and-model-based-planning)
  - [5.4 Multi-Agent and Conversational Coordination](#54-multi-agent-and-conversational-coordination)
- [6. Benchmarks, Datasets, and Environments](#6-benchmarks-datasets-and-environments)
  - [6.1 Information Seeking and Media Understanding](#61-information-seeking-and-media-understanding)
  - [6.2 Creative and Multimodal Workflows](#62-creative-and-multimodal-workflows)
  - [6.3 Conversation and Social Interaction](#63-conversation-and-social-interaction)
  - [6.4 Digital and Software Environments](#64-digital-and-software-environments)
  - [6.5 Virtual, 3D, and Open Worlds](#65-virtual-3d-and-open-worlds)
  - [6.6 Physical Robotics and Multi-Robot Systems](#66-physical-robotics-and-multi-robot-systems)
- [7. Engineering Resources](#7-engineering-resources)
  - [7.1 Agent Runtimes and Interaction Frameworks](#71-agent-runtimes-and-interaction-frameworks)
  - [7.2 Digital-Agent Environments](#72-digital-agent-environments)
  - [7.3 Embodied AI and Robotics Infrastructure](#73-embodied-ai-and-robotics-infrastructure)
  - [7.4 Evaluation Tooling](#74-evaluation-tooling)
- [8. Multimodal Agent Skills](#8-multimodal-agent-skills)
  - [8.1 Standards and Distribution](#81-standards-and-distribution)
  - [8.2 Curated Skill Collections](#82-curated-skill-collections)
- [9. Related Lists](#9-related-lists)
- [Contributing and Curation](#contributing-and-curation)
- [Citation](#citation)

## About

This repository provides a curated, evidence-grounded taxonomy of multimodal agency across digital and physical environments. It organizes end-to-end systems, enabling models and methods, evaluation resources, open infrastructure, and reusable agent skills according to their primary contribution.

> **Core criterion:** an end-to-end agent system must integrate at least two task-relevant information modalities, select grounded actions, and use observations returned by those actions or by an evolving environment to inform subsequent decisions at runtime.

Each work is assigned one canonical placement based on its primary evaluated contribution. System and benchmark branches encode exactly one primary action domain; modality, capability, temporal regime, and participant structure are recorded as independent cross-cutting descriptors rather than duplicate placements.

<details>
<summary><strong>Project updates</strong></summary>

<p><strong>2026-08-11</strong> — Tightened the embodied-agent/world-model boundary, audited every research branch against primary sources, added representative systems, models, methods, and benchmarks across underrepresented modalities, and introduced a provenance-aware Multimodal Agent Skills index.</p>
<p><strong>2026-08-11</strong> — Reorganized the index as a numbered research taxonomy, aligned system and benchmark branches by action domain, corrected model/system/method boundaries, and expanded underrepresented tactile, real-time interaction, safety, and human-agent research.</p>
<p><strong>2026-08-10</strong> — Expanded coverage to multimodal search, agentic generation and editing, creative workflows, reflection, verification, and self-improvement. Replaced mixed topic labels with separate modality, capability, action-domain, temporal, and participant axes.</p>
<p><strong>2026-08-10</strong> — Rebuilt the list around multimodal agency rather than visual/GUI agents. Made multimodal evidence and runtime feedback mandatory, separated artifact types, and removed duplicate placements.</p>

</details>

## 1. Foundations

### 1.1 What Counts as a Multimodal Agent

A **multimodal agent** is a goal-directed runtime system whose policy integrates two or more semantically distinct, task-relevant information modalities, selects grounded actions, and conditions later decisions on newly acquired feedback. Typical information modalities include language, images, video, speech, non-speech audio, 3D or depth, tactile or force signals, and structured sensor or application state.

The system index applies four conjunctive tests.

**1 · Multimodal evidence.** At least two independent information modalities materially affect decisions. Actions, coordinates, rewards, hidden states, and a transcript derived from the same speech signal do not create an additional modality by themselves.

**2 · Goal-directed policy.** The work exposes a decision process that selects actions toward a task objective, rather than only parsing, grounding, scoring, or generating a static output.

**3 · Grounded action.** An action changes an environment, an artifact, another participant, or the evidence state available to the agent—for example by manipulating, communicating, editing, retrieving, or invoking a tool.

**4 · Runtime feedback.** The resulting observation, execution result, verifier judgment, environmental change, or partner response causally influences a later action during evaluation.

A static multimodal model, parser, grounding module, generator, dataset, or open-loop action predictor is therefore not treated as an end-to-end agent system. Such works remain valuable and are indexed by their actual artifact type.

### 1.2 Agent Loop and Evidence

The minimal closed-loop abstraction used here is:

```text
multimodal observation O_t -> state / memory update S_t -> decision or plan P_t
        ^                                                     |
        |                                                     v
feedback O_{t+1} <- environment, tool, artifact, or partner <- action A_t
```

An entry's `Agent-loop evidence` must identify both the returned feedback and the later decision it changes. Merely executing a sequence, autoregressively predicting actions, or producing an internal chain of thought does not establish this causal feedback path.

### 1.3 Canonical Research Taxonomy

Each work receives one canonical placement according to its **primary evaluated contribution**.

**End-to-end system.** An instantiated runtime evaluated with the four-part loop above.

**Model, policy, or component.** A reusable learned artifact or subsystem whose principal contribution is architecture, representation, or prediction.

**Method.** A training, planning, orchestration, coordination, or world-model technique evaluated primarily as an algorithmic contribution.

**Benchmark, dataset, or environment.** An evaluation or data artifact, including bundled baseline agents.

**Engineering resource.** Maintained implementation infrastructure rather than a research claim.

**Agent skill.** A portable `SKILL.md` package that provides reusable procedural guidance and optional scripts, references, or assets. It is an implementation resource, not evidence of a research contribution or an end-to-end agent system.

System and benchmark branches use the same grouping variable—**primary action domain**. Modality, capability, temporal regime, and participant structure remain independent descriptors and never create duplicate placements.

```text
Awesome Multimodal Agents
├── Foundations and definitions
├── Surveys and perspectives
├── End-to-end agent systems                  <- passes all four tests
│   ├── Information seeking and media understanding
│   ├── Creative and multimodal workflows
│   ├── Conversation and social interaction
│   ├── Digital and software environments
│   ├── Virtual, 3D, and open worlds
│   └── Physical robotics and multi-robot systems
├── Agent models, policies, and components
├── Agent learning, planning, and world-model methods
├── Benchmarks, datasets, and environments    <- same six action domains
├── Engineering resources
│   ├── Agent runtimes and interaction frameworks
│   ├── Digital-agent environments
│   ├── Embodied-AI and robotics infrastructure
│   └── Evaluation tooling
├── Multimodal agent skills                    <- portable procedural capability packages
└── Related lists
```

Audio, video, 3D, tactile sensing, real-time behavior, and collaboration are cross-cutting properties represented in entry metadata—not competing directory levels.

Research artifacts are ordered by first public release, newest first. Each work appears once under its primary contribution type.

**How to read the tables.** `First public` records the earliest inspectable release, not the eventual publication year. `Venue / status` distinguishes verified peer-reviewed venues from Preprint, Technical report, and Project release. For systems, `Agent-loop evidence` names the returned observation that changes a later decision; it is not a generic summary of the paper.

**Entry display.** Every research entry begins with a bold title and ends with consistent resource badges, following the high-signal navigation pattern demonstrated by Awesome World Models: ![Paper](https://img.shields.io/badge/Paper-arXiv-b31b1b.svg) primary manuscript, ![Project](https://img.shields.io/badge/Project-Page-2563eb.svg) official project page, ![Code](https://img.shields.io/badge/Code-GitHub-16a34a.svg?logo=github) maintained implementation, ![Dataset](https://img.shields.io/badge/Dataset-Data-f59e0b.svg) dataset, and ![Collection](https://img.shields.io/badge/Collection-List-7c3aed.svg) companion collection. The arXiv badge carries the paper identifier when available, so links remain recognizable before clicking.

## 2. Surveys and Perspectives

These works establish the field and its major interfaces. They are grouped by survey subject and are not mixed into the system index.

**In this section:** [General multimodal agency](#21-general-multimodal-agency) · [Embodied agents and world-model-based planning](#22-embodied-agents-and-world-model-based-planning) · [Multi-agent and human-agent collaboration](#23-multi-agent-and-human-agent-collaboration)

### 2.1 General Multimodal Agency

| Work | First public | Venue / status | Scope | Resources |
| --- | --- | --- | --- | --- |
| **Large Multimodal Agents: A Survey** | 2024-02 | Preprint | Architectures, tool use, collaboration, applications, and evaluation for LLM-driven multimodal agents | [![arXiv 2402.15116](https://img.shields.io/badge/arXiv-2402.15116-b31b1b.svg)](https://arxiv.org/abs/2402.15116) |
| **Agent AI: Surveying the Horizons of Multimodal Interaction** | 2024-01 | Preprint | Interactive agents that integrate environmental perception, multisensory inputs, external knowledge, embodied action, and human feedback | [![arXiv 2401.03568](https://img.shields.io/badge/arXiv-2401.03568-b31b1b.svg)](https://arxiv.org/abs/2401.03568) |

### 2.2 Embodied Agents and World-Model-Based Planning

This branch covers surveys that connect spatial or predictive representations to an agent's memory, planning, decision, or control loop. Perception-only spatial modeling and general world-model surveys without an explicit path to action are outside this branch.

| Work | First public | Venue / status | Scope | Resources |
| --- | --- | --- | --- | --- |
| **From Perception to Action: Spatial AI Agents and World Models** | 2026-02 | Preprint | Connects spatial grounding, hierarchical memory, planning, world models, and physically constrained action; explicitly distinguishes perception from agency | [![arXiv 2602.01644](https://img.shields.io/badge/arXiv-2602.01644-b31b1b.svg)](https://arxiv.org/abs/2602.01644) |
| **A Comprehensive Survey on World Models for Embodied AI** | 2025-10 | Preprint | Decision-coupled and general-purpose world models across temporal and spatial representations, data, metrics, and control | [![arXiv 2510.16732](https://img.shields.io/badge/arXiv-2510.16732-b31b1b.svg)](https://arxiv.org/abs/2510.16732) |
| **Survey of Vision-Language-Action Models for Embodied Manipulation** | 2025-08 | Preprint | VLA architectures, training, datasets, and evaluation for embodied manipulation | [![arXiv 2508.15201](https://img.shields.io/badge/arXiv-2508.15201-b31b1b.svg)](https://arxiv.org/abs/2508.15201) |
| **A Survey: Learning Embodied Intelligence from Physical Simulators and World Models** | 2025-07 | Preprint | Complementary roles of external simulation and internal predictive models in embodied learning | [![arXiv 2507.00917](https://img.shields.io/badge/arXiv-2507.00917-b31b1b.svg)](https://arxiv.org/abs/2507.00917) [![Collection](https://img.shields.io/badge/Collection-List-7c3aed.svg)](https://github.com/NJU3DV-LoongGroup/Embodied-World-Models-Survey) |
| **Embodied AI Agents: Modeling the World** | 2025-06 | Position paper | Multimodal perception, world models, planning, memory, action, user models, and human-agent collaboration | [![arXiv 2506.22355](https://img.shields.io/badge/arXiv-2506.22355-b31b1b.svg)](https://arxiv.org/abs/2506.22355) |

### 2.3 Multi-Agent and Human-Agent Collaboration

| Work | First public | Venue / status | Scope | Resources |
| --- | --- | --- | --- | --- |
| **LLM-Based Human-Agent Collaboration and Interaction Systems: A Survey** | 2025-05 | ACL 2026 Findings | Environment and participant modeling, human feedback, interaction, orchestration, communication, reliability, and safety in human-agent systems | [![arXiv 2505.00753](https://img.shields.io/badge/arXiv-2505.00753-b31b1b.svg)](https://arxiv.org/abs/2505.00753) [![Collection](https://img.shields.io/badge/Collection-List-7c3aed.svg)](https://github.com/HenryPengZou/Awesome-LLM-Based-Human-Agent-System-Papers) |
| **Multi-agent Embodied AI: Advances and Future Directions** | 2025-05 | Preprint | Perception, communication, coordination, adaptation, and open-environment challenges in embodied multi-agent systems | [![arXiv 2505.05108](https://img.shields.io/badge/arXiv-2505.05108-b31b1b.svg)](https://arxiv.org/abs/2505.05108) |
| **Generative Multi-Agent Collaboration in Embodied AI: A Systematic Review** | 2025-02 | Preprint | Collaboration across physical and virtual embodiments | [![arXiv 2502.11518](https://img.shields.io/badge/arXiv-2502.11518-b31b1b.svg)](https://arxiv.org/abs/2502.11518) |

## 3. End-to-End Agent Systems

Every row below passes all four system tests. Systems are partitioned **once** by primary action domain. The remaining columns preserve independent classification axes, so a speech-enabled robot remains a physical-robot system with Speech recorded as a modality rather than being duplicated in an “audio agents” branch.

**In this section:** [Information seeking and media understanding](#31-information-seeking-and-media-understanding) · [Creative and multimodal workflows](#32-creative-and-multimodal-workflows) · [Conversation and social interaction](#33-conversation-and-social-interaction) · [Digital and software environments](#34-digital-and-software-environments) · [Virtual, 3D, and open worlds](#35-virtual-3d-and-open-worlds) · [Physical robotics and multi-robot systems](#36-physical-robotics-and-multi-robot-systems)

### 3.1 Information Seeking and Media Understanding

The agent acts by selecting evidence, invoking analysis or retrieval tools, updating memory, and deciding what to inspect next.

| System | First public | Venue / status | Decision-relevant modalities | Capabilities | Temporal | Participants | Agent-loop evidence | Resources |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| **SpeechAgent-R** | 2026-08 | Preprint | Speech; Non-speech audio; Language; Structured data | Plan/reason; Use tools/control | Multi-turn | Human-agent | Selects an audio skill, observes textual or processed-audio output, then updates later tool choices across the trajectory | [![arXiv 2608.01881](https://img.shields.io/badge/arXiv-2608.01881-b31b1b.svg)](https://arxiv.org/abs/2608.01881) |
| **Light-Omni** | 2026-07 | Preprint | Video; Language; Structured data | Perceive/retrieve; Remember; Use tools/control | Streaming; Long-horizon | Single agent | Continuous observations update episodic and global states; the resulting latent state selects retrieval actions and conditions later responses | [![arXiv 2607.05511](https://img.shields.io/badge/arXiv-2607.05511-b31b1b.svg)](https://arxiv.org/abs/2607.05511) [![Project](https://img.shields.io/badge/Project-Page-2563eb.svg)](https://clare-nie.github.io/Light-Omni/) [![Code](https://img.shields.io/badge/Code-GitHub-16a34a.svg?logo=github)](https://github.com/Clare-Nie/Light-Omni) |
| **Orchestra-o1** | 2026-06 | Preprint | Language; Image/screen; Speech; Non-speech audio; Video | Perceive/retrieve; Plan/reason; Use tools/control; Coordinate | Long-horizon | Agent team | The orchestrator decomposes each multimodal task, observes specialist outputs, and updates subsequent routing and synthesis decisions | [![arXiv 2606.13707](https://img.shields.io/badge/arXiv-2606.13707-b31b1b.svg)](https://arxiv.org/abs/2606.13707) |
| **Gen-Searcher** | 2026-03 | Preprint | Language; Image/screen; Structured data | Perceive/retrieve; Plan/reason; Use tools/control; Create/edit | Stepwise | Single agent | Search returns text and reference images that guide later retrieval and grounded image-synthesis decisions | [![arXiv 2603.28767](https://img.shields.io/badge/arXiv-2603.28767-b31b1b.svg)](https://arxiv.org/abs/2603.28767) [![Code](https://img.shields.io/badge/Code-GitHub-16a34a.svg?logo=github)](https://github.com/tulerfeng/Gen-Searcher) |
| **LensWalk** | 2026-03 | Preprint | Video; Language | Perceive/retrieve; Plan/reason; Use tools/control; Verify/reflect | Long-horizon | Single agent | A reason-plan-observe loop changes temporal scope and sampling density after each returned visual observation | [![arXiv 2603.24558](https://img.shields.io/badge/arXiv-2603.24558-b31b1b.svg)](https://arxiv.org/abs/2603.24558) |
| **VideoARM** | 2025-12 | Preprint | Video; Language | Perceive/retrieve; Use tools/control; Remember | Long-horizon | Single agent | Repeats observation, coarse-to-fine tool action, returned evidence, and hierarchical-memory update before deciding again | [![arXiv 2512.12360](https://img.shields.io/badge/arXiv-2512.12360-b31b1b.svg)](https://arxiv.org/abs/2512.12360) |
| **Active Video Perception** | 2025-12 | Preprint | Video; Language | Perceive/retrieve; Plan/reason; Use tools/control; Verify/reflect | Long-horizon | Agent team | A planner requests targeted temporal or spatial video interactions; timestamped pixel evidence is judged for sufficiency and either terminates the run or changes the next observation request | [![arXiv 2512.05774](https://img.shields.io/badge/arXiv-2512.05774-b31b1b.svg)](https://arxiv.org/abs/2512.05774) |
| **AudioToolAgent** | 2025-10 | Preprint | Speech; Non-speech audio; Language; Structured data | Perceive/retrieve; Plan/reason; Use tools/control; Verify/reflect | Multi-turn | Human-agent | The central agent selects audio-language tools, asks follow-up questions, and compares returned outputs before finalizing an answer | [![arXiv 2510.02995](https://img.shields.io/badge/arXiv-2510.02995-b31b1b.svg)](https://arxiv.org/abs/2510.02995) [![Code](https://img.shields.io/badge/Code-GitHub-16a34a.svg?logo=github)](https://github.com/GLJS/AudioToolAgent) |
| **M3-Agent** | 2025-08 | Preprint | Video; Speech; Non-speech audio; Language | Perceive/retrieve; Plan/reason; Remember | Streaming; Long-horizon | Single agent | Real-time audiovisual observations update entity-centric episodic and semantic memory; iterative retrieval results change later reasoning turns | [![arXiv 2508.09736](https://img.shields.io/badge/arXiv-2508.09736-b31b1b.svg)](https://arxiv.org/abs/2508.09736) [![Code](https://img.shields.io/badge/Code-GitHub-16a34a.svg?logo=github)](https://github.com/bytedance-seed/m3-agent) |
| **StreamAgent** | 2025-08 | Preprint | Video; Language | Perceive/retrieve; Remember | Streaming; Long-horizon | Single agent | Anticipates future evidence, observes later frames, then revises temporal and spatial attention actions | [![arXiv 2508.01875](https://img.shields.io/badge/arXiv-2508.01875-b31b1b.svg)](https://arxiv.org/abs/2508.01875) |
| **VideoMind** | 2025-03 | Preprint | Video; Language; Structured data | Perceive/retrieve; Verify/reflect; Coordinate | Long-horizon | Agent team | Planner requests evidence; grounding and verification results determine the next retrieval or answer action | [![arXiv 2503.13444](https://img.shields.io/badge/arXiv-2503.13444-b31b1b.svg)](https://arxiv.org/abs/2503.13444) [![Project](https://img.shields.io/badge/Project-Page-2563eb.svg)](https://videomind.github.io/) |
| **LVAgent** | 2025-03 | Preprint | Video; Language | Perceive/retrieve; Remember; Verify/reflect; Coordinate | Long-horizon | Agent team | Agents retrieve, debate, and reflect; round-level evaluation changes team composition and later evidence use | [![arXiv 2503.10200](https://img.shields.io/badge/arXiv-2503.10200-b31b1b.svg)](https://arxiv.org/abs/2503.10200) |
| **VideoAgent: A Memory-augmented Multimodal Agent for Video Understanding** | 2024-03 | Preprint | Video; Language | Perceive/retrieve; Use tools/control; Remember | Long-horizon | Single agent | Tool results update structured temporal and object memory used by later localization and answer decisions | [![arXiv 2403.11481](https://img.shields.io/badge/arXiv-2403.11481-b31b1b.svg)](https://arxiv.org/abs/2403.11481) |
| **VideoAgent: Long-form Video Understanding with Large Language Model as Agent** | 2024-03 | ECCV 2024 | Video; Language | Perceive/retrieve; Use tools/control | Long-horizon | Single agent | Iteratively chooses frames, receives visual evidence through VLM tools, and updates the next acquisition decision | [![arXiv 2403.10517](https://img.shields.io/badge/arXiv-2403.10517-b31b1b.svg)](https://arxiv.org/abs/2403.10517) |
| **DoraemonGPT** | 2024-01 | ICML 2024 | Video; Language; Structured data | Perceive/retrieve; Plan/reason; Use tools/control; Remember | Long-horizon | Single agent | An MCTS planner schedules spatiotemporal and external-knowledge tools, backpropagates result rewards, and explores improved solution paths | [![arXiv 2401.08392](https://img.shields.io/badge/arXiv-2401.08392-b31b1b.svg)](https://arxiv.org/abs/2401.08392) [![Project](https://img.shields.io/badge/Project-Page-2563eb.svg)](https://z-x-yang.github.io/doraemon-gpt/) |
| **AVIS** | 2023-06 | NeurIPS 2023 | Image/screen; Language; Structured data | Perceive/retrieve; Plan/reason; Use tools/control; Remember | Stepwise | Single agent | A planner chooses the next tool from the current state; a reasoner analyzes each returned result and updates working memory | [![arXiv 2306.08129](https://img.shields.io/badge/arXiv-2306.08129-b31b1b.svg)](https://arxiv.org/abs/2306.08129) |
| **AssistGPT** | 2023-06 | Preprint | Image/screen; Video; Language | Plan/reason; Use tools/control; Verify/reflect | Stepwise | Single agent | Its Plan–Execute–Inspect–Learn loop inspects intermediate multimodal results and chooses the next tool from current progress | [![arXiv 2306.08640](https://img.shields.io/badge/arXiv-2306.08640-b31b1b.svg)](https://arxiv.org/abs/2306.08640) [![Project](https://img.shields.io/badge/Project-Page-2563eb.svg)](https://showlab.github.io/assistgpt/) |

<p align="right"><a href="#top">Back to top</a></p>

### 3.2 Creative and Multimodal Workflows

The agent changes a media or design artifact and inspects rendered, executable, geometric, or human feedback before revising it.

| System | First public | Venue / status | Decision-relevant modalities | Capabilities | Temporal | Participants | Agent-loop evidence | Resources |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| **PosterMELD** | 2026-08 | Preprint | Language; Image/screen; Structured data | Plan/reason; Create/edit; Verify/reflect; Coordinate | Long-horizon | Agent team | Deterministic gates and VLM review route failed poster drafts into bounded repair before export | [![arXiv 2608.02218](https://img.shields.io/badge/arXiv-2608.02218-b31b1b.svg)](https://arxiv.org/abs/2608.02218) [![Code](https://img.shields.io/badge/Code-GitHub-16a34a.svg?logo=github)](https://github.com/Shannon4Science/PosterMELD) |
| **COMFYCLAW** | 2026-07 | Preprint | Language; Image/screen; Structured data | Plan/reason; Use tools/control; Create/edit; Verify/reflect; Learn/adapt | Long-horizon; Continual | Single agent | Invalid edits are reverted; visual failures become repairs, while prior errors and verifier feedback become reusable skills | [![arXiv 2607.01709](https://img.shields.io/badge/arXiv-2607.01709-b31b1b.svg)](https://arxiv.org/abs/2607.01709) |
| **ManimAgent** | 2026-06 | Preprint | Language; Image/screen; Structured data | Create/edit; Verify/reflect; Remember; Learn/adapt | Multi-turn; Continual | Single agent | Rendered keyframes are scored after reflection rounds; validated successes and failures update later memory | [![arXiv 2606.30296](https://img.shields.io/badge/arXiv-2606.30296-b31b1b.svg)](https://arxiv.org/abs/2606.30296) [![Project](https://img.shields.io/badge/Project-Page-2563eb.svg)](https://manimagent.github.io/) |
| **IterCAD** | 2026-06 | Preprint | Language; Image/screen; 3D/depth; Structured data | Plan/reason; Use tools/control; Create/edit; Verify/reflect | Multi-turn | Human-agent | CAD execution and visual or geometric results drive code repair and interactive local editing | [![arXiv 2606.13368](https://img.shields.io/badge/arXiv-2606.13368-b31b1b.svg)](https://arxiv.org/abs/2606.13368) |
| **Data Journalist Agent (Data2Story)** | 2026-06 | Preprint | Structured data; Language; Image/screen | Perceive/retrieve; Create/edit; Verify/reflect; Coordinate | Long-horizon | Agent team | Newsroom agents research and compose; an inspector re-executes data claims and returns evidence for revision | [![arXiv 2606.11176](https://img.shields.io/badge/arXiv-2606.11176-b31b1b.svg)](https://arxiv.org/abs/2606.11176) [![Project](https://img.shields.io/badge/Project-Page-2563eb.svg)](https://data2story.github.io/) |
| **Crayotter** | 2026-06 | Preprint | Video; Speech; Non-speech audio; Language; Image/screen; Structured data | Perceive/retrieve; Plan/reason; Use tools/control; Create/edit; Verify/reflect; Coordinate | Long-horizon | Agent team + human | Analyses, blueprints, tool calls, and intermediate renders remain inspectable; previews and failure diagnosis drive revision | [![arXiv 2606.07636](https://img.shields.io/badge/arXiv-2606.07636-b31b1b.svg)](https://arxiv.org/abs/2606.07636) [![Code](https://img.shields.io/badge/Code-GitHub-16a34a.svg?logo=github)](https://github.com/idwts/Crayotter) |
| **IntentEdit: Multi-Agent Reasoning for Intent-Driven Complex Image Editing** | 2026-06 | CVPR 2026 Findings | Language; Image/screen | Plan/reason; Use tools/control; Create/edit; Verify/reflect; Coordinate | Multi-turn | Agent team | A cognitive planner grounds intent into staged edits; executors render them, and a reflective evaluator sends deficient outputs back for replanning and refinement | [![Paper](https://img.shields.io/badge/Paper-Link-b31b1b.svg)](https://openaccess.thecvf.com/content/CVPR2026F/html/Zhang_IntentEdit_Multi-Agent_Reasoning_for_Intent-Driven_Complex_Image_Editing_CVPRF_2026_paper.html) [![Code](https://img.shields.io/badge/Code-GitHub-16a34a.svg?logo=github)](https://github.com/LaVi-Lab/IntentEdit) |
| **SAGE: Scalable Agentic 3D Scene Generation for Embodied AI** | 2026-02 | Preprint | Language; Image/screen; 3D/depth; Structured data | Plan/reason; Use tools/control; Create/edit; Verify/reflect | Multi-turn | Single agent | Scene generators propose layouts and object compositions; semantic, visual, and physical critics return failures that change later tool selection and iterative scene refinement | [![arXiv 2602.10116](https://img.shields.io/badge/arXiv-2602.10116-b31b1b.svg)](https://arxiv.org/abs/2602.10116) [![Project](https://img.shields.io/badge/Project-Page-2563eb.svg)](https://research.nvidia.com/labs/dir/sage/) |
| **JarvisEvo** | 2025-11 | CVPR 2026 | Language; Image/screen | Plan/reason; Use tools/control; Create/edit; Verify/reflect; Learn/adapt | Multi-turn; Continual | Single agent | Each edited image is evaluated and reflected on before later tool choices; editor-evaluator optimization also converts this feedback into policy improvement | [![arXiv 2511.23002](https://img.shields.io/badge/arXiv-2511.23002-b31b1b.svg)](https://arxiv.org/abs/2511.23002) [![Project](https://img.shields.io/badge/Project-Page-2563eb.svg)](https://jarvisevo.vercel.app/) [![Code](https://img.shields.io/badge/Code-GitHub-16a34a.svg?logo=github)](https://github.com/LYL1015/JarvisEvo) |
| **MIRA: Multimodal Iterative Reasoning Agent for Image Editing** | 2025-11 | CVPR 2026 Findings | Language; Image/screen | Plan/reason; Use tools/control; Create/edit; Verify/reflect | Multi-turn | Single agent | Each atomic edit produces a new image that is visually inspected before the agent selects the next edit or terminates | [![arXiv 2511.21087](https://img.shields.io/badge/arXiv-2511.21087-b31b1b.svg)](https://arxiv.org/abs/2511.21087) |
| **RAISECity** | 2025-11 | Preprint | Language; Image/screen; 3D/depth; Structured data | Perceive/retrieve; Plan/reason; Use tools/control; Create/edit; Verify/reflect | Long-horizon | Single agent | Generated 3D assets and scenes are evaluated through iterative self-reflection, and detected fidelity errors trigger later tool calls and refinements | [![arXiv 2511.18005](https://img.shields.io/badge/arXiv-2511.18005-b31b1b.svg)](https://arxiv.org/abs/2511.18005) |
| **MAGUS** | 2025-08 | Preprint | Language; Image/screen; Speech; Non-speech audio; Video | Plan/reason; Use tools/control; Create/edit; Verify/reflect; Coordinate | Multi-turn | Agent team | Perceiver and planner produce an action; reflector feedback changes later generation and tool decisions | [![arXiv 2508.10494](https://img.shields.io/badge/arXiv-2508.10494-b31b1b.svg)](https://arxiv.org/abs/2508.10494) |
| **AVAgent** | 2024-09 | NeurIPS 2024 | Video; Speech; Non-speech audio; Language | Plan/reason; Use tools/control; Create/edit; Verify/reflect | Multi-turn | Single agent | Audio edits are scored against visual content by a VLM; its alignment feedback determines the next filtering or augmentation action | [![arXiv 2410.23230](https://img.shields.io/badge/arXiv-2410.23230-b31b1b.svg)](https://arxiv.org/abs/2410.23230) [![Paper](https://img.shields.io/badge/Paper-NeurIPS-b31b1b.svg)](https://proceedings.neurips.cc/paper_files/paper/2024/hash/6c0ff499edc529c7d8c9f05c7c0ccb82-Abstract-Conference.html) |
| **InternGPT** | 2023-05 | Preprint | Language; Image/screen; Video | Converse; Use tools/control; Create/edit | Multi-turn | Human-agent | Language and cursor gestures select tools or regions; returned visual edits become the context for subsequent instructions | [![arXiv 2305.05662](https://img.shields.io/badge/arXiv-2305.05662-b31b1b.svg)](https://arxiv.org/abs/2305.05662) [![Code](https://img.shields.io/badge/Code-GitHub-16a34a.svg?logo=github)](https://github.com/OpenGVLab/InternGPT) |
| **AudioGPT** | 2023-04 | AAAI 2024 | Language; Speech; Non-speech audio; Video | Plan/reason; Use tools/control; Create/edit | Multi-turn | Human-agent | Plans specialist model calls, observes analyzed or generated media, and uses the result in later dialogue and tool selection | [![arXiv 2304.12995](https://img.shields.io/badge/arXiv-2304.12995-b31b1b.svg)](https://arxiv.org/abs/2304.12995) [![Code](https://img.shields.io/badge/Code-GitHub-16a34a.svg?logo=github)](https://github.com/AIGC-Audio/AudioGPT) |
| **Visual ChatGPT** | 2023-03 | Preprint | Language; Image/screen | Converse; Plan/reason; Use tools/control; Create/edit | Multi-turn | Human-agent | Visual models create or transform artifacts; returned images and user corrections enter the next planning and tool-use turn | [![arXiv 2303.04671](https://img.shields.io/badge/arXiv-2303.04671-b31b1b.svg)](https://arxiv.org/abs/2303.04671) [![Code](https://img.shields.io/badge/Code-GitHub-16a34a.svg?logo=github)](https://github.com/microsoft/visual-chatgpt) |

<p align="right"><a href="#top">Back to top</a></p>

### 3.3 Conversation and Social Interaction

The primary action is communicative: speaking, listening, interrupting, gesturing, coordinating turns, or proactively responding while streams remain active.

| System | First public | Venue / status | Decision-relevant modalities | Capabilities | Temporal | Participants | Agent-loop evidence | Resources |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| **DuplexOmni** | 2026-06 | Preprint | Speech; Non-speech audio; Video; Language; Structured data | Converse; Plan/reason; Use tools/control | Streaming; Real-time; Full-duplex | Human-agent | The interaction layer keeps listening and seeing while asynchronous reasoning and tool results alter subsequent responses | [![arXiv 2606.09186](https://img.shields.io/badge/arXiv-2606.09186-b31b1b.svg)](https://arxiv.org/abs/2606.09186) |
| **AURA: Always-On Understanding and Real-Time Assistance via Video Streams** | 2026-04 | Preprint | Video; Speech; Language | Converse; Perceive/retrieve; Remember | Streaming; Real-time; Long-horizon | Human-agent | The system continuously updates bounded video context, answers live speech queries, and autonomously decides when changing scenes warrant a proactive response | [![arXiv 2604.04184](https://img.shields.io/badge/arXiv-2604.04184-b31b1b.svg)](https://arxiv.org/abs/2604.04184) [![Code](https://img.shields.io/badge/Code-GitHub-16a34a.svg?logo=github)](https://github.com/aurateam2026/AURA) |
| **VIA-Agent (Sighted by Default)** | 2025-11 | Preprint | Video; Speech; Language | Converse; Perceive/retrieve; Remember | Streaming; Real-time; Multi-turn | Human-agent | Continuous bidirectional audiovisual observations preserve the user's task goal; scene changes and spoken feedback update subsequent concise navigation or retrieval guidance | [![arXiv 2511.00945](https://img.shields.io/badge/arXiv-2511.00945-b31b1b.svg)](https://arxiv.org/abs/2511.00945) |
| **EgoMem** | 2025-09 | Preprint | Video; Speech; Non-speech audio | Converse; Perceive/retrieve; Remember; Learn/adapt | Streaming; Real-time; Full-duplex; Continual | Human-agent | Face and voice observations retrieve personalized context, while detected dialogue boundaries update memory used in later spoken interactions | [![arXiv 2509.11914](https://img.shields.io/badge/arXiv-2509.11914-b31b1b.svg)](https://arxiv.org/abs/2509.11914) |
| **Project Astra** | 2024-05 | Project release | Video; Speech; Language; Image/screen; Structured data | Converse; Remember; Use tools/control | Streaming; Real-time | Human-agent | Maintains live cross-device context, observes changing audiovisual input and tool results, then responds proactively | [![Project](https://img.shields.io/badge/Project-Page-2563eb.svg)](https://deepmind.google/models/project-astra/) |
| **MIA** | 2021-12 | Technical report | Image/screen; Language; Proprioception | Converse; Use tools/control | Streaming; Real-time | Human-agent | Observes and acts several times per second; human and environmental changes continuously update its policy | [![arXiv 2112.03763](https://img.shields.io/badge/arXiv-2112.03763-b31b1b.svg)](https://arxiv.org/abs/2112.03763) [![Project](https://img.shields.io/badge/Project-Page-2563eb.svg)](https://deepmind.google/blog/creating-interactive-agents-with-imitation-learning/) |

<p align="right"><a href="#top">Back to top</a></p>

### 3.4 Digital and Software Environments

Only representative computer-use systems are kept here; this branch is deliberately not allowed to define the whole list.

| System | First public | Venue / status | Decision-relevant modalities | Capabilities | Temporal | Participants | Agent-loop evidence | Resources |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| **AURA: Agent for Understanding, Reasoning, and Automated Tool Use in Voice-Driven Tasks** | 2025-06 | Preprint | Speech; Language; Structured data | Converse; Plan/reason; Use tools/control | Multi-turn | Human-agent | Spoken requests trigger tool actions such as search, email, or booking; returned service state and follow-up speech determine later calls and responses | [![arXiv 2506.23049](https://img.shields.io/badge/arXiv-2506.23049-b31b1b.svg)](https://arxiv.org/abs/2506.23049) |
| **UITron-Speech** | 2025-06 | Preprint | Speech; Image/screen | Plan/reason; Use tools/control | Stepwise | Human-agent | Current speech context and screen state produce an action; the changed screen becomes the next observation | [![arXiv 2506.11127](https://img.shields.io/badge/arXiv-2506.11127-b31b1b.svg)](https://arxiv.org/abs/2506.11127) [![Code](https://img.shields.io/badge/Code-GitHub-16a34a.svg?logo=github)](https://github.com/UITron-hub/UITron-Speech) |
| **SeeAct** | 2024-01 | ICML 2024 | Language; Image/screen; Structured data | Plan/reason; Use tools/control | Stepwise | Human-agent | On live websites, a grounded action changes the page and the new visual or structural observation conditions the next action | [![arXiv 2401.01614](https://img.shields.io/badge/arXiv-2401.01614-b31b1b.svg)](https://arxiv.org/abs/2401.01614) [![Code](https://img.shields.io/badge/Code-GitHub-16a34a.svg?logo=github)](https://github.com/OSU-NLP-Group/SeeAct) |
| **Mobile-Agent** | 2024-01 | Preprint | Language; Image/screen | Perceive/retrieve; Plan/reason; Use tools/control | Long-horizon | Single agent | Each tap or swipe changes the application screen; fresh visual perception is used to plan and ground the next operation | [![arXiv 2401.16158](https://img.shields.io/badge/arXiv-2401.16158-b31b1b.svg)](https://arxiv.org/abs/2401.16158) [![Code](https://img.shields.io/badge/Code-GitHub-16a34a.svg?logo=github)](https://github.com/X-PLUG/MobileAgent) |
| **AppAgent** | 2023-12 | Preprint | Language; Image/screen; Structured data | Plan/reason; Use tools/control; Remember; Learn/adapt | Long-horizon | Human-agent | Autonomous exploration generates app knowledge; during execution each tap or swipe yields a new screen used for the next action | [![arXiv 2312.13771](https://img.shields.io/badge/arXiv-2312.13771-b31b1b.svg)](https://arxiv.org/abs/2312.13771) [![Project](https://img.shields.io/badge/Project-Page-2563eb.svg)](https://appagent-official.github.io/) |

<p align="right"><a href="#top">Back to top</a></p>

### 3.5 Virtual, 3D, and Open Worlds

The agent changes a simulated, reconstructed, or game world rather than a physical robot workspace.

| System | First public | Venue / status | Decision-relevant modalities | Capabilities | Temporal | Participants | Agent-loop evidence | Resources |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| **WorldAgents** | 2026-03 | Preprint | Language; Image/screen; 3D/depth | Plan/reason; Simulate; Create/edit; Verify/reflect; Coordinate | Long-horizon | Agent team | Director and generator propose views; 2D and 3D verifiers reject or return evidence that drives later generations | [![arXiv 2603.19708](https://img.shields.io/badge/arXiv-2603.19708-b31b1b.svg)](https://arxiv.org/abs/2603.19708) |
| **GenEx** | 2024-12 | ICLR 2025 | Image/screen; Video; Language; 3D/depth | Plan/reason; Use tools/control; Simulate; Remember | Long-horizon | Single agent | Generated panoramic observations update the agent's belief and active 3D map; imagined outcomes then alter later exploration or navigation actions | [![arXiv 2412.09624](https://img.shields.io/badge/arXiv-2412.09624-b31b1b.svg)](https://arxiv.org/abs/2412.09624) |
| **SIMA** | 2024-03 | Technical report | Image/screen; Language | Plan/reason; Use tools/control | Real-time; Long-horizon | Single agent | Keyboard and mouse control change the world; resulting visual observations condition later actions toward the goal | [![arXiv 2404.10179](https://img.shields.io/badge/arXiv-2404.10179-b31b1b.svg)](https://arxiv.org/abs/2404.10179) [![Project](https://img.shields.io/badge/Project-Page-2563eb.svg)](https://deepmind.google/discover/blog/sima-generalist-ai-agent-for-3d-virtual-environments/) |
| **JARVIS-1** | 2023-11 | Preprint | Image/screen; Language | Plan/reason; Use tools/control; Remember; Learn/adapt | Long-horizon; Continual | Single agent | Plans dispatch to goal-conditioned controllers; new Minecraft observations and survival experiences update subsequent planning and memory | [![arXiv 2311.05997](https://img.shields.io/badge/arXiv-2311.05997-b31b1b.svg)](https://arxiv.org/abs/2311.05997) [![Project](https://img.shields.io/badge/Project-Page-2563eb.svg)](https://craftjarvis.org/JARVIS-1/) |
| **LEO** | 2023-11 | ICML 2024 | 3D/depth; Language | Plan/reason; Use tools/control; Remember | Long-horizon | Single agent | Executes embodied actions from language and 3D state; later observations and action history condition subsequent steps | [![arXiv 2311.12871](https://img.shields.io/badge/arXiv-2311.12871-b31b1b.svg)](https://arxiv.org/abs/2311.12871) [![Project](https://img.shields.io/badge/Project-Page-2563eb.svg)](https://embodied-generalist.github.io/) |
| **EmbodiedGPT** | 2023-05 | Preprint | Image/screen; Language; Proprioception | Plan/reason; Use tools/control | Long-horizon | Single agent | Embodied reasoning selects an action; new visual and state observations update subsequent plans | [![arXiv 2305.15021](https://img.shields.io/badge/arXiv-2305.15021-b31b1b.svg)](https://arxiv.org/abs/2305.15021) |

<p align="right"><a href="#top">Back to top</a></p>

### 3.6 Physical Robotics and Multi-Robot Systems

The primary action changes the physical world or coordinates physical robots. Language-conditioned policies without a separately evidenced agent loop remain in the model section.

| System | First public | Venue / status | Decision-relevant modalities | Capabilities | Temporal | Participants | Agent-loop evidence | Resources |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| **OmniAct** | 2026-06 | Preprint | Image/screen; Language; Structured data; Proprioception | Plan/reason; Use tools/control; Remember; Verify/reflect | Long-horizon; Continual | Human-agent | An asynchronous visual preemption engine detects physical failures during cyber-physical execution and triggers recovery or replanning | [![arXiv 2606.27251](https://img.shields.io/badge/arXiv-2606.27251-b31b1b.svg)](https://arxiv.org/abs/2606.27251) |
| **HoloAgent-0** | 2026-06 | Preprint | Language; Image/screen; 3D/depth; Proprioception; Structured data | Plan/reason; Use tools/control; Remember; Verify/reflect; Coordinate | Long-horizon | Single agent; Agent team | An embodied AgentOS executes skill graphs and monitors robot feedback; failures or ambiguity trigger clarification or replanning that changes later navigation, manipulation, or cross-robot actions | [![arXiv 2606.23565](https://img.shields.io/badge/arXiv-2606.23565-b31b1b.svg)](https://arxiv.org/abs/2606.23565) |
| **A Multimodal Framework for Human-Multi-Agent Interaction** | 2026-03 | Preprint | Speech; Image/screen; Proprioception | Converse; Plan/reason; Use tools/control; Coordinate | Real-time; Multi-turn | Agent team + human | Two humanoid agents combine multimodal observations with LLM planning while centralized turn-taking regulates later speech and movement | [![arXiv 2603.23271](https://img.shields.io/badge/arXiv-2603.23271-b31b1b.svg)](https://arxiv.org/abs/2603.23271) |
| **InteractGen** | 2025-11 | Preprint | Image/screen; Language; Proprioception; Structured data | Perceive/retrieve; Plan/reason; Use tools/control; Verify/reflect; Coordinate | Long-horizon | Agent team + human | Continuous perception and execution verification expose failures; reflection and dynamic human delegation change subsequent team plans | [![arXiv 2512.00797](https://img.shields.io/badge/arXiv-2512.00797-b31b1b.svg)](https://arxiv.org/abs/2512.00797) |
| **VITA-E** | 2025-10 | Preprint | Image/screen; Speech; Language; Proprioception | Converse; Perceive/retrieve; Use tools/control | Streaming; Real-time; Full-duplex | Human-agent | Ongoing audiovisual observations and spoken interruptions switch control between active and standby VLA instances, changing subsequent speech and physical action in near real time | [![arXiv 2510.21817](https://img.shields.io/badge/arXiv-2510.21817-b31b1b.svg)](https://arxiv.org/abs/2510.21817) |
| **PhysiAgent** | 2025-09 | Preprint | Image/screen; Language; Proprioception; Structured data | Perceive/retrieve; Plan/reason; Use tools/control; Remember; Verify/reflect; Learn/adapt | Long-horizon; Continual | Single agent | Real-time VLA proficiency and execution feedback enter monitoring, memory, and self-reflection modules that reorganize later component, tool, and action decisions | [![arXiv 2509.24524](https://img.shields.io/badge/arXiv-2509.24524-b31b1b.svg)](https://arxiv.org/abs/2509.24524) |
| **Being-0** | 2025-03 | Preprint | Image/screen; Language; Proprioception | Perceive/retrieve; Plan/reason; Use tools/control | Real-time; Long-horizon | Single agent | Active vision and robot state pass through a connector that translates and updates high-level plans while coordinating later locomotion and dexterous-manipulation skills | [![arXiv 2503.12533](https://img.shields.io/badge/arXiv-2503.12533-b31b1b.svg)](https://arxiv.org/abs/2503.12533) [![Project](https://img.shields.io/badge/Project-Page-2563eb.svg)](https://research.beingbeyond.com/being-0) |
| **AutoRT** | 2024-01 | Preprint | Image/screen; Language; Proprioception | Perceive/retrieve; Plan/reason; Verify/reflect; Coordinate | Continual | Agent team | VLM scene descriptions inform task proposals; safety checks and execution outcomes gate subsequent collection | [![arXiv 2401.12963](https://img.shields.io/badge/arXiv-2401.12963-b31b1b.svg)](https://arxiv.org/abs/2401.12963) [![Project](https://img.shields.io/badge/Project-Page-2563eb.svg)](https://deepmind.google/research/publications/48151/) |
| **OK-Robot** | 2024-01 | Preprint | Image/screen; 3D/depth; Language | Plan/reason; Use tools/control; Remember | Long-horizon | Single agent | Queries scene memory, executes navigation or grasping, and uses changed physical state for the next primitive | [![arXiv 2401.12202](https://img.shields.io/badge/arXiv-2401.12202-b31b1b.svg)](https://arxiv.org/abs/2401.12202) [![Project](https://img.shields.io/badge/Project-Page-2563eb.svg)](https://ok-robot.github.io/) |
| **VoxPoser** | 2023-07 | CoRL 2023 | Language; Image/screen; 3D/depth | Plan/reason; Use tools/control; Simulate; Learn/adapt | Stepwise | Single agent | Composed 3D value maps drive model-based planning; new observations and online dynamics experience update trajectories under perturbations | [![arXiv 2307.05973](https://img.shields.io/badge/arXiv-2307.05973-b31b1b.svg)](https://arxiv.org/abs/2307.05973) [![Project](https://img.shields.io/badge/Project-Page-2563eb.svg)](https://voxposer.github.io/) |
| **RoCo** | 2023-07 | Preprint | Language; Structured data | Plan/reason; Verify/reflect; Coordinate | Long-horizon | Agent team + human | Robot agents debate a plan, receive collision-check or human feedback, and revise later paths | [![arXiv 2307.04738](https://img.shields.io/badge/arXiv-2307.04738-b31b1b.svg)](https://arxiv.org/abs/2307.04738) [![Project](https://img.shields.io/badge/Project-Page-2563eb.svg)](https://project-roco.github.io/) |
| **TidyBot** | 2023-05 | Preprint | Image/screen; Language; Structured data; Proprioception | Plan/reason; Use tools/control; Remember; Learn/adapt | Long-horizon; Continual | Human-agent | Prior user examples update a reusable preference summary; perception and changed scene state guide later pick-and-place decisions | [![arXiv 2305.05658](https://img.shields.io/badge/arXiv-2305.05658-b31b1b.svg)](https://arxiv.org/abs/2305.05658) [![Project](https://img.shields.io/badge/Project-Page-2563eb.svg)](https://tidybot.cs.princeton.edu/) |
| **Code as Policies** | 2022-09 | ICRA 2023 | Language; Image/screen; Structured data | Plan/reason; Use tools/control | Long-horizon | Single agent | Executed code queries perception and control APIs; returned state drives later branches and actions | [![arXiv 2209.07753](https://img.shields.io/badge/arXiv-2209.07753-b31b1b.svg)](https://arxiv.org/abs/2209.07753) [![Project](https://img.shields.io/badge/Project-Page-2563eb.svg)](https://code-as-policies.github.io/) |
| **Inner Monologue** | 2022-07 | CoRL 2022 | Language; Image/screen; Structured data | Plan/reason; Use tools/control; Verify/reflect | Long-horizon | Human-agent | Scene, success, failure, and human observations are inserted back into context before replanning | [![arXiv 2207.05608](https://img.shields.io/badge/arXiv-2207.05608-b31b1b.svg)](https://arxiv.org/abs/2207.05608) [![Project](https://img.shields.io/badge/Project-Page-2563eb.svg)](https://innermonologue.github.io/) |
| **SayCan** | 2022-04 | CoRL 2022 | Language; Structured data | Plan/reason; Use tools/control | Long-horizon | Single agent | Executes a feasible skill, re-evaluates grounded affordances in the changed environment, then selects the next skill | [![arXiv 2204.01691](https://img.shields.io/badge/arXiv-2204.01691-b31b1b.svg)](https://arxiv.org/abs/2204.01691) [![Project](https://img.shields.io/badge/Project-Page-2563eb.svg)](https://say-can.github.io/) |
| **Multimodal Feedback for Active Robot-Object Interaction** | 2018-09 | IROS 2018 Workshop | 3D/depth; Tactile/force; Proprioception | Perceive/retrieve; Plan/reason; Use tools/control | Stepwise | Single agent | RGB-D and SLAM observations revise approach and grasp configuration; subsequent hand-contact feedback updates the final manipulation actions | [![arXiv 1809.03216](https://img.shields.io/badge/arXiv-1809.03216-b31b1b.svg)](https://arxiv.org/abs/1809.03216) |

## 4. Agent Models, Policies, and Components

These works enable multimodal agents but are not presented as end-to-end systems. The boundary column records why each work remains at the model, policy, or component layer.

**In this section:** [Omni-modal and interactive models](#41-omni-modal-and-interactive-models) · [Vision-language-action and generalist policies](#42-vision-language-action-and-generalist-policies) · [Spatial, memory, and tool-use models and components](#43-spatial-memory-and-tool-use-models-and-components)

### 4.1 Omni-Modal and Interactive Models

| Work | First public | Venue / status | Artifact type | Primary role | Information modalities / channels | Why it is not in the system index | Resources |
| --- | --- | --- | --- | --- | --- | --- | --- |
| **DyaPlex** | 2026-06 | Preprint | Model | Streaming full-duplex speech-motion generation for dyadic interaction | Speech; Human and agent motion | Reciprocal streaming behavior is learned inside the model; a separately evaluated planning or tool-use layer is not contributed | [![arXiv 2606.03874](https://img.shields.io/badge/arXiv-2606.03874-b31b1b.svg)](https://arxiv.org/abs/2606.03874) |
| **StepAudio 2.5** | 2026-05 | Technical report | Model | Unified audio-language foundation for recognition, synthesis, and real-time spoken interaction | Speech; Non-speech audio; Language | The report contributes a shared backbone and task-specific operating modes; it does not evaluate grounded action in an external environment | [![arXiv 2605.23463](https://img.shields.io/badge/arXiv-2605.23463-b31b1b.svg)](https://arxiv.org/abs/2605.23463) |
| **MiniCPM-o 4.5** | 2026-04 | Preprint | Model | Edge-oriented full-duplex omni-modal model | Streaming audio; Video; Language; Speech | Deployments may build agents around it, but the contribution is the model | [![arXiv 2604.27393](https://img.shields.io/badge/arXiv-2604.27393-b31b1b.svg)](https://arxiv.org/abs/2604.27393) [![Code](https://img.shields.io/badge/Code-GitHub-16a34a.svg?logo=github)](https://github.com/OpenBMB/MiniCPM-o) |
| **Unit-Based Agent for Semi-Cascaded Full-Duplex Dialogue Systems** | 2026-01 | Preprint | Dialogue architecture / policy | Unit-level listening, waiting, interruption, and speaking decisions | Speech; Language units derived from the same speech stream | The loop is agentic, but a transcript or unit sequence derived from speech is not an independent second information modality | [![arXiv 2601.20230](https://img.shields.io/badge/arXiv-2601.20230-b31b1b.svg)](https://arxiv.org/abs/2601.20230) [![Code](https://img.shields.io/badge/Code-GitHub-16a34a.svg?logo=github)](https://github.com/yu-haoyuan/fd-badcat) |
| **Qwen3-Omni** | 2025-09 | Technical report | Model | Unified understanding and generation across text, image, audio, video, and streaming speech | Language; Image; Video; Audio; Speech | Wide modality coverage and low-latency speech generation are model capabilities; no external action-feedback loop is evaluated as the primary artifact | [![arXiv 2509.17765](https://img.shields.io/badge/arXiv-2509.17765-b31b1b.svg)](https://arxiv.org/abs/2509.17765) [![Code](https://img.shields.io/badge/Code-GitHub-16a34a.svg?logo=github)](https://github.com/QwenLM/Qwen3-Omni) |
| **Qwen2.5-Omni** | 2025-03 | Preprint | Model | Unified omni-modal foundation model | Language; Image; Video; Audio; Speech | Broad modality support does not by itself create grounded action or an agent loop | [![arXiv 2503.20215](https://img.shields.io/badge/arXiv-2503.20215-b31b1b.svg)](https://arxiv.org/abs/2503.20215) [![Code](https://img.shields.io/badge/Code-GitHub-16a34a.svg?logo=github)](https://github.com/QwenLM/Qwen2.5-Omni) |
| **Moshi** | 2024-10 | Preprint | Model | Full-duplex spoken-dialogue model | Speech; Language streams | Full-duplex generation alone does not demonstrate external action or feedback-driven planning | [![arXiv 2410.00037](https://img.shields.io/badge/arXiv-2410.00037-b31b1b.svg)](https://arxiv.org/abs/2410.00037) [![Code](https://img.shields.io/badge/Code-GitHub-16a34a.svg?logo=github)](https://github.com/kyutai-labs/moshi) |
| **VITA** | 2024-08 | Preprint | Model | Real-time vision-speech interaction model | Video; Speech; Language | Model-level interaction capability is not itself tool or environment agency | [![arXiv 2408.05211](https://img.shields.io/badge/arXiv-2408.05211-b31b1b.svg)](https://arxiv.org/abs/2408.05211) [![Code](https://img.shields.io/badge/Code-GitHub-16a34a.svg?logo=github)](https://github.com/VITA-MLLM/VITA) |

### 4.2 Vision-Language-Action and Generalist Policies

| Work | First public | Venue / status | Artifact type | Primary role | Information modalities / channels | Why it is not in the system index | Resources |
| --- | --- | --- | --- | --- | --- | --- | --- |
| **OmniActor** | 2025-09 | ICLR 2026 | Policy / model | Generalist action model for interleaved 2D GUI and 3D embodied tasks | Images; Language; GUI actions; Robot actions | The primary contribution is a unified action model and training design rather than a system-level runtime architecture | [![arXiv 2509.02322](https://img.shields.io/badge/arXiv-2509.02322-b31b1b.svg)](https://arxiv.org/abs/2509.02322) |
| **OmniVTLA** | 2025-08 | Preprint | Policy / model + dataset | Semantically aligned vision-tactile-language-action manipulation | Images; Tactile/force; Language; Proprioception; Robot actions | The principal contributions are a tactile encoder, the ObjTac dataset, and a reusable VTLA policy rather than a separately evaluated agent runtime | [![arXiv 2508.08706](https://img.shields.io/badge/arXiv-2508.08706-b31b1b.svg)](https://arxiv.org/abs/2508.08706) |
| **SmolVLA** | 2025-06 | Preprint | Policy / model | Compact, affordable VLA with asynchronous perception, action prediction, and execution | Images; Language; Proprioception; Robot actions | Asynchronous inference improves policy responsiveness, but the evaluated artifact remains a reusable VLA and deployment stack | [![arXiv 2506.01844](https://img.shields.io/badge/arXiv-2506.01844-b31b1b.svg)](https://arxiv.org/abs/2506.01844) [![Code](https://img.shields.io/badge/Code-GitHub-16a34a.svg?logo=github)](https://github.com/huggingface/lerobot) |
| **π0.5** | 2025-04 | Preprint | Policy / model | Open-world generalization for long-horizon robot manipulation | Images; Language; Object detections; Semantic subtasks; Proprioception | The evaluated contribution is an end-to-end VLA policy and co-training recipe | [![arXiv 2504.16054](https://img.shields.io/badge/arXiv-2504.16054-b31b1b.svg)](https://arxiv.org/abs/2504.16054) [![Code](https://img.shields.io/badge/Code-GitHub-16a34a.svg?logo=github)](https://github.com/Physical-Intelligence/openpi) |
| **Gemini Robotics** | 2025-03 | Technical report | Model family | Generalist VLA control and embodied-reasoning models | Images; Language; Proprioception; Spatial and temporal state | The report's primary contribution is explicitly a family of robotics foundation models, not a separately specified agent runtime | [![arXiv 2503.20020](https://img.shields.io/badge/arXiv-2503.20020-b31b1b.svg)](https://arxiv.org/abs/2503.20020) [![Project](https://img.shields.io/badge/Project-Page-2563eb.svg)](https://deepmind.google/models/gemini-robotics/) |
| **GR00T N1** | 2025-03 | Technical report | Policy / model | Dual-system generalist humanoid VLA | Images; Language; Human video; Proprioception | Real-time motor generation is learned as a reusable foundation policy, not a separately evaluated agent stack | [![arXiv 2503.14734](https://img.shields.io/badge/arXiv-2503.14734-b31b1b.svg)](https://arxiv.org/abs/2503.14734) [![Code](https://img.shields.io/badge/Code-GitHub-16a34a.svg?logo=github)](https://github.com/NVIDIA/Isaac-GR00T) |
| **Magma** | 2025-02 | CVPR 2025 | Model | Foundation model for digital and physical multimodal agent tasks | Images; Video; Language; UI actions; Robot actions | SoM/ToM pretraining produces an action-capable backbone; downstream environments supply the runtime loop | [![arXiv 2502.13130](https://img.shields.io/badge/arXiv-2502.13130-b31b1b.svg)](https://arxiv.org/abs/2502.13130) [![Project](https://img.shields.io/badge/Project-Page-2563eb.svg)](https://microsoft.github.io/Magma/) [![Code](https://img.shields.io/badge/Code-GitHub-16a34a.svg?logo=github)](https://github.com/microsoft/Magma) |
| **π0** | 2024-10 | Technical report | Policy / model | Generalist flow-based robot policy | Images; Language; Proprioception | The primary contribution is an action policy used inside robot systems | [![arXiv 2410.24164](https://img.shields.io/badge/arXiv-2410.24164-b31b1b.svg)](https://arxiv.org/abs/2410.24164) [![Code](https://img.shields.io/badge/Code-GitHub-16a34a.svg?logo=github)](https://github.com/Physical-Intelligence/openpi) |
| **OpenVLA** | 2024-06 | CoRL 2024 | Policy / model | Open vision-language-action backbone | Images; Language; Robot actions | Provides a reusable policy rather than a separately evaluated complete system | [![arXiv 2406.09246](https://img.shields.io/badge/arXiv-2406.09246-b31b1b.svg)](https://arxiv.org/abs/2406.09246) [![Code](https://img.shields.io/badge/Code-GitHub-16a34a.svg?logo=github)](https://github.com/openvla/openvla) |
| **Octo** | 2024-05 | RSS 2024 | Policy / model | Open generalist robot-policy initialization | Images; Goal images or language; Proprioception | The paper evaluates a reusable policy and fine-tuning behavior across robots, not an agent architecture | [![arXiv 2405.12213](https://img.shields.io/badge/arXiv-2405.12213-b31b1b.svg)](https://arxiv.org/abs/2405.12213) [![Code](https://img.shields.io/badge/Code-GitHub-16a34a.svg?logo=github)](https://github.com/octo-models/octo) |
| **3D-VLA** | 2024-03 | ICML 2024 | Model / world model | 3D vision-language-action prediction with generative goal imagination | RGB; Point clouds; 3D geometry; Language; Robot actions | The primary artifact is a generative VLA world model used by downstream embodied agents | [![arXiv 2403.09631](https://img.shields.io/badge/arXiv-2403.09631-b31b1b.svg)](https://arxiv.org/abs/2403.09631) [![Project](https://img.shields.io/badge/Project-Page-2563eb.svg)](https://vis-www.cs.umass.edu/3dvla/) [![Code](https://img.shields.io/badge/Code-GitHub-16a34a.svg?logo=github)](https://github.com/UMass-Embodied-AGI/3D-VLA) |
| **RT-H** | 2024-03 | RSS 2024 | Policy / hierarchy | Language-mediated action hierarchy with human correction | Images; Task language; Language motions; Robot actions | Human language interventions improve a policy, but the primary contribution is hierarchical policy learning | [![arXiv 2403.01823](https://img.shields.io/badge/arXiv-2403.01823-b31b1b.svg)](https://arxiv.org/abs/2403.01823) [![Project](https://img.shields.io/badge/Project-Page-2563eb.svg)](https://rt-hierarchy.github.io/) |
| **Interactive Agent Foundation Model** | 2024-02 | Preprint | Model / training paradigm | Cross-domain action-taking foundation model | Robotics sequences; Gameplay video; Language | The primary evaluation is multimodal pretraining and next-action prediction across domains | [![arXiv 2402.05929](https://img.shields.io/badge/arXiv-2402.05929-b31b1b.svg)](https://arxiv.org/abs/2402.05929) |
| **RoboFlamingo** | 2023-11 | ICLR 2024 Spotlight | Policy / model | Adapts an open vision-language model to language-conditioned manipulation | Images; Language; Action history | The explicit policy head is evaluated primarily as an open-loop robot imitator rather than an adaptive agent architecture | [![arXiv 2311.01378](https://img.shields.io/badge/arXiv-2311.01378-b31b1b.svg)](https://arxiv.org/abs/2311.01378) [![Project](https://img.shields.io/badge/Project-Page-2563eb.svg)](https://roboflamingo.github.io/) [![Code](https://img.shields.io/badge/Code-GitHub-16a34a.svg?logo=github)](https://github.com/RoboFlamingo/RoboFlamingo) |
| **RT-2** | 2023-07 | CoRL 2023 | Policy / model | Vision-language-action backbone | Images; Language; Robot actions | Action-token prediction alone does not establish a system-level feedback path | [![arXiv 2307.15818](https://img.shields.io/badge/arXiv-2307.15818-b31b1b.svg)](https://arxiv.org/abs/2307.15818) [![Project](https://img.shields.io/badge/Project-Page-2563eb.svg)](https://robotics-transformer2.github.io/) |
| **RoboCat** | 2023-06 | TMLR 2023 | Policy / model | Visual goal-conditioned, multi-embodiment decision transformer with data-driven adaptation | Images; Goal images; Proprioception; Robot actions | The autonomous improvement loop produces data between training iterations; the primary evaluated artifact remains the reusable policy model | [![arXiv 2306.11706](https://img.shields.io/badge/arXiv-2306.11706-b31b1b.svg)](https://arxiv.org/abs/2306.11706) [![Project](https://img.shields.io/badge/Project-Page-2563eb.svg)](https://deepmind.google/discover/blog/robocat-a-self-improving-robotic-agent/) |
| **PaLM-E** | 2023-03 | ICML 2023 | Model | Embodied multimodal language-model backbone | Images; Language; Continuous sensor state | The contribution is a backbone, not a separately evaluated agent loop | [![arXiv 2303.03378](https://img.shields.io/badge/arXiv-2303.03378-b31b1b.svg)](https://arxiv.org/abs/2303.03378) [![Project](https://img.shields.io/badge/Project-Page-2563eb.svg)](https://palm-e.github.io/) |
| **RT-1** | 2022-12 | RSS 2023 | Policy / model | Scalable transformer policy for real-world multi-task robot control | Images; Language; Robot actions | The contribution is a learned action-token policy; the deployment loop is not presented as a separate agent architecture | [![arXiv 2212.06817](https://img.shields.io/badge/arXiv-2212.06817-b31b1b.svg)](https://arxiv.org/abs/2212.06817) [![Project](https://img.shields.io/badge/Project-Page-2563eb.svg)](https://robotics-transformer1.github.io/) |
| **VIMA** | 2022-10 | ICML 2023 | Policy / model + benchmark | Multimodal-prompt-conditioned transformer robot policy | Interleaved language and images; Robot actions | The paper's principal contributions are the transformer policy, procedural benchmark, and imitation-learning data rather than a separately designed runtime agent stack | [![arXiv 2210.03094](https://img.shields.io/badge/arXiv-2210.03094-b31b1b.svg)](https://arxiv.org/abs/2210.03094) [![Project](https://img.shields.io/badge/Project-Page-2563eb.svg)](https://vimalabs.github.io/) |
| **Gato** | 2022-05 | Technical report | Policy / model | Multi-task, multi-embodiment generalist policy | Images; Language; Proprioception; Game and robot actions | One token policy spans many domains, but planning, feedback handling, and tool orchestration are not separately evaluated | [![arXiv 2205.06175](https://img.shields.io/badge/arXiv-2205.06175-b31b1b.svg)](https://arxiv.org/abs/2205.06175) |

### 4.3 Spatial, Memory, and Tool-Use Models and Components

| Work | First public | Venue / status | Artifact type | Primary role | Information modalities / channels | Why it is not in the system index | Resources |
| --- | --- | --- | --- | --- | --- | --- | --- |
| **ToolArtist** | 2026-08 | Preprint | Model / post-training paradigm | Unified policy for reasoning, search-tool use, and native image generation | Language; Search results; Generated images | The contribution is a unified model and agentic-RL recipe; no post-generation inspect-and-revise system loop is established | [![arXiv 2608.04436](https://img.shields.io/badge/arXiv-2608.04436-b31b1b.svg)](https://arxiv.org/abs/2608.04436) |
| **SpatialVLM** | 2024-01 | CVPR 2024 | Model | Metric and qualitative spatial reasoning | Images; Depth-derived geometry; Language | Performs spatial inference without a demonstrated runtime agent loop | [![arXiv 2401.12168](https://img.shields.io/badge/arXiv-2401.12168-b31b1b.svg)](https://arxiv.org/abs/2401.12168) [![Project](https://img.shields.io/badge/Project-Page-2563eb.svg)](https://spatial-vlm.github.io/) |
| **MultiPLY** | 2024-01 | CVPR 2024 | Model + dataset | Multisensory embodied language model and interactive state/action tokenization | Vision; Audio; Tactile; Thermal; 3D; Language | Interactive inference closes a loop, but the primary evaluated contribution is the model and Multisensory Universe data | [![arXiv 2401.08577](https://img.shields.io/badge/arXiv-2401.08577-b31b1b.svg)](https://arxiv.org/abs/2401.08577) [![Project](https://img.shields.io/badge/Project-Page-2563eb.svg)](https://vis-www.cs.umass.edu/multiply/) |
| **LLaVA-Plus** | 2023-11 | Preprint | Model / tool-use training | Multimodal assistant with a repository of vision and vision-language skills | Images; Language; Tool results | The primary contribution is tool-use instruction tuning; system-level feedback paths are not the main evaluated artifact | [![arXiv 2311.05437](https://img.shields.io/badge/arXiv-2311.05437-b31b1b.svg)](https://arxiv.org/abs/2311.05437) |
| **ConceptGraphs** | 2023-09 | ICRA 2024 | Component | Open-vocabulary 3D scene memory | RGB-D; 3D geometry; Language | Supplies persistent spatial memory to agents rather than a complete agent | [![arXiv 2309.16650](https://img.shields.io/badge/arXiv-2309.16650-b31b1b.svg)](https://arxiv.org/abs/2309.16650) [![Project](https://img.shields.io/badge/Project-Page-2563eb.svg)](https://concept-graphs.github.io/) |

## 5. Agent Learning, Planning, and World-Model Methods

These works contribute planning, coordination, workflow construction, tool composition, or world modeling. They remain separate from systems when execution is fixed, feedback is not decision-relevant, multimodality is absent, or the evaluated contribution is the method itself.

**In this section:** [Tool use, workflow, and program synthesis](#51-tool-use-workflow-and-program-synthesis) · [Agentic learning and self-improvement](#52-agentic-learning-and-self-improvement) · [World models and model-based planning](#53-world-models-and-model-based-planning) · [Multi-agent and conversational coordination](#54-multi-agent-and-conversational-coordination)

### 5.1 Tool Use, Workflow, and Program Synthesis

| Work | First public | Venue / status | Method family | Primary contribution | Boundary decision | Resources |
| --- | --- | --- | --- | --- | --- | --- |
| **Knowledge-Centric Agents for Workflow Generation in ComfyUI** | 2026-07 | Preprint | Workflow synthesis | Learns hierarchical workflow knowledge and synthesizes executable ComfyUI graphs with structural self-refinement | Refinement targets workflow structure; independent visual execution feedback is not shown to alter a later runtime decision | [![arXiv 2607.15845](https://img.shields.io/badge/arXiv-2607.15845-b31b1b.svg)](https://arxiv.org/abs/2607.15845) |
| **PresentAgent** | 2025-07 | EMNLP 2025 Demo | Multimodal production workflow | Converts long documents into rendered slides, narration, and synchronized presentation video through a modular production pipeline | PresentEval scores completed outputs, but the paper does not establish evaluator feedback that changes a later runtime production decision | [![arXiv 2507.04036](https://img.shields.io/badge/arXiv-2507.04036-b31b1b.svg)](https://arxiv.org/abs/2507.04036) [![Code](https://img.shields.io/badge/Code-GitHub-16a34a.svg?logo=github)](https://github.com/AIGeeksGroup/PresentAgent) |
| **Set-of-Mark Prompting** | 2023-10 | Preprint | Visual grounding prompt | Overlays addressable marks on segmented image regions so multimodal models can refer to precise targets | It is a grounding method reused by agents, not an agent or feedback-informed system | [![arXiv 2310.11441](https://img.shields.io/badge/arXiv-2310.11441-b31b1b.svg)](https://arxiv.org/abs/2310.11441) [![Code](https://img.shields.io/badge/Code-GitHub-16a34a.svg?logo=github)](https://github.com/microsoft/SoM) |
| **ControlLLM** | 2023-10 | Preprint | Tool-graph planning | Decomposes tasks, searches a dependency-aware tool graph, and executes image, audio, and video tools | The selected solution path is primarily planned before execution; adaptive use of intermediate feedback is not the central evaluation | [![arXiv 2310.17796](https://img.shields.io/badge/arXiv-2310.17796-b31b1b.svg)](https://arxiv.org/abs/2310.17796) [![Code](https://img.shields.io/badge/Code-GitHub-16a34a.svg?logo=github)](https://github.com/OpenGVLab/ControlLLM) |
| **MusicAgent** | 2023-10 | EMNLP 2023 Demo | Audio-tool orchestration | Decomposes music requests and composes tools from local models, repositories, and web APIs | The published autonomous workflow emphasizes decomposition and execution rather than a feedback-informed second decision | [![arXiv 2310.11954](https://img.shields.io/badge/arXiv-2310.11954-b31b1b.svg)](https://arxiv.org/abs/2310.11954) [![Code](https://img.shields.io/badge/Code-GitHub-16a34a.svg?logo=github)](https://github.com/microsoft/muzic/tree/main/musicagent) |
| **GPT4Tools** | 2023-05 | Preprint | Tool-use self-instruction | Generates multimodal tool-use instruction data and tunes open LLMs to invoke seen and unseen tools | The primary contribution is a training method and benchmark for tool invocation, without an evaluated adaptive execution loop | [![arXiv 2305.18752](https://img.shields.io/badge/arXiv-2305.18752-b31b1b.svg)](https://arxiv.org/abs/2305.18752) [![Code](https://img.shields.io/badge/Code-GitHub-16a34a.svg?logo=github)](https://github.com/StevenGrove/GPT4Tools) |
| **Chameleon** | 2023-04 | NeurIPS 2023 | Program synthesis / tool composition | Synthesizes programs from language models, vision models, web search, Python, and heuristics | Program execution is compositional but does not by itself prove an adaptive multimodal runtime loop | [![arXiv 2304.09842](https://img.shields.io/badge/arXiv-2304.09842-b31b1b.svg)](https://arxiv.org/abs/2304.09842) [![Project](https://img.shields.io/badge/Project-Page-2563eb.svg)](https://chameleon-llm.github.io/) |
| **HuggingGPT** | 2023-03 | NeurIPS 2023 | Foundation-model orchestration | Uses an LLM to plan tasks, select Hugging Face models, execute subtasks, and summarize results across language, vision, and speech | The primary contribution is a general orchestration protocol; execution results are mainly collected for final synthesis | [![arXiv 2303.17580](https://img.shields.io/badge/arXiv-2303.17580-b31b1b.svg)](https://arxiv.org/abs/2303.17580) [![Code](https://img.shields.io/badge/Code-GitHub-16a34a.svg?logo=github)](https://github.com/microsoft/JARVIS) |
| **MM-REACT** | 2023-03 | Preprint | Prompted multimodal tool use | Represents images, video, files, and coordinates in a textual trace that coordinates ChatGPT with vision experts | Demonstrates multimodal tool composition, but the feedback-informed system loop is not isolated as its primary contribution | [![arXiv 2303.11381](https://img.shields.io/badge/arXiv-2303.11381-b31b1b.svg)](https://arxiv.org/abs/2303.11381) [![Project](https://img.shields.io/badge/Project-Page-2563eb.svg)](https://multimodal-react.github.io/) |
| **ViperGPT** | 2023-03 | ICCV 2023 | Visual program synthesis | Generates Python programs that compose vision, language, and knowledge modules for visual queries | Code execution is a method for compositional inference; it is not evaluated as an interactive external-state agent | [![arXiv 2303.08128](https://img.shields.io/badge/arXiv-2303.08128-b31b1b.svg)](https://arxiv.org/abs/2303.08128) [![Project](https://img.shields.io/badge/Project-Page-2563eb.svg)](https://viper.cs.columbia.edu/) |
| **VisProg** | 2022-11 | CVPR 2023 | Visual program synthesis | Generates modular programs that invoke image, language, and Python modules for compositional tasks | Programs execute a planned module sequence without a general feedback-informed interaction loop | [![arXiv 2211.11559](https://img.shields.io/badge/arXiv-2211.11559-b31b1b.svg)](https://arxiv.org/abs/2211.11559) [![Project](https://img.shields.io/badge/Project-Page-2563eb.svg)](https://prior.allenai.org/projects/visprog) |
| **Socratic Models** | 2022-04 | ICLR 2023 | Zero-shot model composition | Uses language as an exchange layer among pretrained vision, audio, language, and robotics models | It is a composition framework with application demonstrations rather than one canonical evaluated agent system | [![arXiv 2204.00598](https://img.shields.io/badge/arXiv-2204.00598-b31b1b.svg)](https://arxiv.org/abs/2204.00598) [![Project](https://img.shields.io/badge/Project-Page-2563eb.svg)](https://socraticmodels.github.io/) |

### 5.2 Agentic Learning and Self-Improvement

| Work | First public | Venue / status | Method family | Primary contribution | Boundary decision | Resources |
| --- | --- | --- | --- | --- | --- | --- |
| **Scaling Agentic Reinforcement Learning for Tool-Integrated Reasoning in VLMs (VISTA-Gym / VISTA-R1)** | 2025-11 | CVPR 2026 | Agentic reinforcement learning | Provides an executable visual-tool environment, verifiable feedback, trajectory infrastructure, and multi-turn RL for tool-integrated reasoning | The primary evaluated contribution is the scalable training environment and learning recipe, rather than a deployed end-to-end task system | [![arXiv 2511.19773](https://img.shields.io/badge/arXiv-2511.19773-b31b1b.svg)](https://arxiv.org/abs/2511.19773) [![Code](https://img.shields.io/badge/Code-GitHub-16a34a.svg?logo=github)](https://github.com/Lucanyc/VISTA-Gym) |
| **Process-Supervised Reinforcement Learning for Interactive Multimodal Tool-Use Agents** | 2025-09 | Preprint | Turn-level adjudicated reinforcement learning | Trains interleaved speech-text tool-use trajectories with judge feedback at each turn to improve long-horizon credit assignment | The main artifact is an RL sandbox and learning framework rather than a deployed multimodal task system | [![arXiv 2509.14480](https://img.shields.io/badge/arXiv-2509.14480-b31b1b.svg)](https://arxiv.org/abs/2509.14480) |
| **VisualToolAgent (VisTA)** | 2025-05 | Preprint | Visual-tool selection reinforcement learning | Uses task-outcome rewards and GRPO to learn query-specific selection and composition of visual tools | Feedback optimizes the training policy; the primary contribution is the learning framework, not a separately evaluated external-environment system | [![arXiv 2505.20289](https://img.shields.io/badge/arXiv-2505.20289-b31b1b.svg)](https://arxiv.org/abs/2505.20289) [![Project](https://img.shields.io/badge/Project-Page-2563eb.svg)](https://oodbag.github.io/vista_web/) |
| **DeepEyes** | 2025-05 | Preprint | Agentic visual-tool reinforcement learning | Incentivizes interleaved visual and textual reasoning through tool-use data selection and outcome-based rewards | The primary result is a reinforcement-learning recipe and model capability; no general external action-feedback runtime is contributed | [![arXiv 2505.14362](https://img.shields.io/badge/arXiv-2505.14362-b31b1b.svg)](https://arxiv.org/abs/2505.14362) [![Code](https://img.shields.io/badge/Code-GitHub-16a34a.svg?logo=github)](https://github.com/Visual-Agent/DeepEyes) |

### 5.3 World Models and Model-Based Planning

| Work | First public | Venue / status | Method family | Primary contribution | Boundary decision | Resources |
| --- | --- | --- | --- | --- | --- | --- |
| **World Action Planner** | 2026-07 | Preprint | Action-conditioned world-model planning | Proposes action plans and iteratively refines them through optimization and search over imagined rollouts | The demonstrated refinement feedback comes from imagined rollouts; the paper's primary contribution is the planning method rather than a general runtime architecture | [![arXiv 2607.27599](https://img.shields.io/badge/arXiv-2607.27599-b31b1b.svg)](https://arxiv.org/abs/2607.27599) [![Project](https://img.shields.io/badge/Project-Page-2563eb.svg)](https://worldactionplanner.github.io/) |
| **RISE: Self-Improving Robot Policy with Compositional World Model** | 2026-02 | Preprint | Robot reinforcement learning via imagination | Predicts multiview futures, evaluates imagined outcomes, and converts rollout advantages into policy updates for contact-rich manipulation | Its closed loop operates primarily in imagined training rollouts; the evaluated contribution is a world-model learning method rather than a general deployed agent architecture | [![arXiv 2602.11075](https://img.shields.io/badge/arXiv-2602.11075-b31b1b.svg)](https://arxiv.org/abs/2602.11075) |
| **V-JEPA 2-AC** | 2025-06 | Technical report | Action-conditioned world model | Predicts latent visual futures and plans toward image goals | Current and goal images come from one visual modality; actions do not create a second information modality | [![arXiv 2506.09985](https://img.shields.io/badge/arXiv-2506.09985-b31b1b.svg)](https://arxiv.org/abs/2506.09985) [![Code](https://img.shields.io/badge/Code-GitHub-16a34a.svg?logo=github)](https://github.com/facebookresearch/vjepa2) |
| **COMBO: Compositional World Models for Embodied Multi-Agent Cooperation** | 2024-04 | ICLR 2025 | Compositional world modeling | Reconstructs shared state, predicts multi-agent action outcomes, and supports online cooperative tree search | The primary evaluated novelty is the compositional generative world model and planning method rather than one canonical deployed system | [![arXiv 2404.10775](https://img.shields.io/badge/arXiv-2404.10775-b31b1b.svg)](https://arxiv.org/abs/2404.10775) [![Project](https://img.shields.io/badge/Project-Page-2563eb.svg)](https://vis-www.cs.umass.edu/combo/) |
| **DreamerV3** | 2023-01 | Preprint | World-model reinforcement learning | Learns dynamics and behavior through imagined rollouts across many control domains | Pixels plus actions and rewards do not satisfy the two-information-modality gate | [![arXiv 2301.04104](https://img.shields.io/badge/arXiv-2301.04104-b31b1b.svg)](https://arxiv.org/abs/2301.04104) [![Code](https://img.shields.io/badge/Code-GitHub-16a34a.svg?logo=github)](https://github.com/danijar/dreamerv3) |

### 5.4 Multi-Agent and Conversational Coordination

| Work | First public | Venue / status | Method family | Primary contribution | Boundary decision | Resources |
| --- | --- | --- | --- | --- | --- | --- |
| **Conversational Language Models for Human-in-the-Loop Multi-Robot Coordination** | 2024-02 | Preprint | Multi-robot coordination | Uses peer-to-peer and human-robot dialogue to plan heterogeneous roles and paths | Every reported reasoning step is textual; physical execution alone does not establish a second decision-relevant modality | [![arXiv 2402.19166](https://img.shields.io/badge/arXiv-2402.19166-b31b1b.svg)](https://arxiv.org/abs/2402.19166) |
| **SpeechAgents** | 2024-01 | Preprint | Multi-agent spoken interaction | Coordinates dialogue content, timing, and affect across speech-generating agents | Speech realization, transcript, prosody, and emotion are coupled representations of the same utterance; no independent external modality closes the loop | [![arXiv 2401.03945](https://img.shields.io/badge/arXiv-2401.03945-b31b1b.svg)](https://arxiv.org/abs/2401.03945) [![Code](https://img.shields.io/badge/Code-GitHub-16a34a.svg?logo=github)](https://github.com/0nutation/SpeechAgents) |

## 6. Benchmarks, Datasets, and Environments

Resources use the same six **primary action domains** as the end-to-end system index and are ordered in reverse chronology within each branch. Temporal properties such as streaming and participant properties such as collaboration remain metadata rather than directory levels.

**In this section:** [Information seeking and media understanding](#61-information-seeking-and-media-understanding) · [Creative and multimodal workflows](#62-creative-and-multimodal-workflows) · [Conversation and social interaction](#63-conversation-and-social-interaction) · [Digital and software environments](#64-digital-and-software-environments) · [Virtual, 3D, and open worlds](#65-virtual-3d-and-open-worlds) · [Physical robotics and multi-robot systems](#66-physical-robotics-and-multi-robot-systems)

### 6.1 Information Seeking and Media Understanding

| Resource | First public | Venue / status | Type | Modalities / environment | Evaluation target | Resources |
| --- | --- | --- | --- | --- | --- | --- |
| **StreamArena** | 2026-08 | Preprint | Benchmark + baseline system | Hour-scale audiovisual streams; Language; Persistent multimodal memory; External search | Continuous perception, historical recall, proactive interaction, multimodal tool use, and response latency over open-ended long-video tasks | [![arXiv 2608.05703](https://img.shields.io/badge/arXiv-2608.05703-b31b1b.svg)](https://arxiv.org/abs/2608.05703) |
| **TVIR** | 2026-06 | Preprint | Benchmark + baseline system | Language; Retrieved images; Charts; Sources; Interleaved reports | Evidence-driven text-visual deep research and report generation | [![arXiv 2606.02320](https://img.shields.io/badge/arXiv-2606.02320-b31b1b.svg)](https://arxiv.org/abs/2606.02320) |
| **MMOU** | 2026-03 | Preprint | Benchmark | Long video; Audio; Visual content; Language | Joint omni-modal reasoning over complex real-world video | [![arXiv 2603.14145](https://img.shields.io/badge/arXiv-2603.14145-b31b1b.svg)](https://arxiv.org/abs/2603.14145) |
| **RIVER** | 2026-03 | Preprint | Benchmark | Streaming video; Language; Online memory | Immediate perception and retrospective memory in live video | [![arXiv 2603.03985](https://img.shields.io/badge/arXiv-2603.03985-b31b1b.svg)](https://arxiv.org/abs/2603.03985) [![Code](https://img.shields.io/badge/Code-GitHub-16a34a.svg?logo=github)](https://github.com/OpenGVLab/RIVER) |
| **LongShOTBench** | 2025-12 | Preprint | Benchmark + baseline agent | Long video; Speech; Ambient audio; Language; Tool outputs | Open-ended single- and multi-turn reasoning, evidence tracing, tool use, and diagnostic rubric scoring over long omni-modal video | [![arXiv 2512.16978](https://img.shields.io/badge/arXiv-2512.16978-b31b1b.svg)](https://arxiv.org/abs/2512.16978) [![Code](https://img.shields.io/badge/Code-GitHub-16a34a.svg?logo=github)](https://github.com/mbzuai-oryx/longshot) |
| **M3-Bench** | 2025-11 | Preprint | Benchmark | Images; Language; MCP tool graphs; Intermediate resources | Semantic fidelity and workflow consistency in multi-hop, multi-threaded multimodal tool use across 28 servers and 231 tools | [![arXiv 2511.17729](https://img.shields.io/badge/arXiv-2511.17729-b31b1b.svg)](https://arxiv.org/abs/2511.17729) [![Code](https://img.shields.io/badge/Code-GitHub-16a34a.svg?logo=github)](https://github.com/EtaYang10th/Open-M3-Bench) |
| **MMAU** | 2024-10 | Preprint | Benchmark | Speech; Environmental sound; Music; Language | Expert-level audio understanding and reasoning | [![arXiv 2410.19168](https://img.shields.io/badge/arXiv-2410.19168-b31b1b.svg)](https://arxiv.org/abs/2410.19168) [![Project](https://img.shields.io/badge/Project-Page-2563eb.svg)](https://sakshi113.github.io/mmau_homepage/) |
| **LongVideoBench** | 2024-07 | NeurIPS 2024 | Benchmark | Long video; Interleaved subtitles; Language | Retrieval and reasoning over videos up to an hour | [![arXiv 2407.15754](https://img.shields.io/badge/arXiv-2407.15754-b31b1b.svg)](https://arxiv.org/abs/2407.15754) [![Code](https://img.shields.io/badge/Code-GitHub-16a34a.svg?logo=github)](https://github.com/longvideobench/LongVideoBench) |
| **Video-MME** | 2024-05 | CVPR 2025 | Benchmark | Video; Subtitles; Audio; Language | Short-to-long multimodal video understanding | [![arXiv 2405.21075](https://img.shields.io/badge/arXiv-2405.21075-b31b1b.svg)](https://arxiv.org/abs/2405.21075) [![Project](https://img.shields.io/badge/Project-Page-2563eb.svg)](https://video-mme.github.io/home_page.html) |
| **MMInA** | 2024-04 | ACL 2025 Findings | Benchmark + evolving websites | Language; Web text; Images; Browser state | Multihop compositional information seeking across evolving real-world websites, with both final success and intermediate progress evaluation | [![arXiv 2404.09992](https://img.shields.io/badge/arXiv-2404.09992-b31b1b.svg)](https://arxiv.org/abs/2404.09992) [![Project](https://img.shields.io/badge/Project-Page-2563eb.svg)](https://mmina.cliangyu.com/) |
| **GAIA** | 2023-11 | ICLR 2024 | Benchmark | Language; Images and files; Web; Tool outputs | General assistants requiring reasoning, multimodality, web browsing, and tool use | [![arXiv 2311.12983](https://img.shields.io/badge/arXiv-2311.12983-b31b1b.svg)](https://arxiv.org/abs/2311.12983) [![Dataset](https://img.shields.io/badge/Dataset-Data-f59e0b.svg)](https://huggingface.co/datasets/gaia-benchmark/GAIA) |

### 6.2 Creative and Multimodal Workflows

| Resource | First public | Venue / status | Type | Modalities / environment | Evaluation target | Resources |
| --- | --- | --- | --- | --- | --- | --- |
| **DrawAI** | 2026-08 | Preprint | Benchmark + baseline workflow | Raster images; Extracted elements; Executable graphics; Rendered revisions | Fidelity and editability in image-to-editable reconstruction, including a code-render-validate-revise baseline | [![arXiv 2608.00548](https://img.shields.io/badge/arXiv-2608.00548-b31b1b.svg)](https://arxiv.org/abs/2608.00548) [![Project](https://img.shields.io/badge/Project-Page-2563eb.svg)](https://drawai.renaissancemind.ai/) |
| **AVE-Compass** | 2026-07 | Preprint | Benchmark + baseline agent | Video; Speech; Non-speech audio; Language; Edited audiovisual output | Instruction following, fidelity, realism, editing intent, and cross-modal alignment in joint audio-video editing | [![arXiv 2607.24821](https://img.shields.io/badge/arXiv-2607.24821-b31b1b.svg)](https://arxiv.org/abs/2607.24821) |

### 6.3 Conversation and Social Interaction

| Resource | First public | Venue / status | Type | Modalities / environment | Evaluation target | Resources |
| --- | --- | --- | --- | --- | --- | --- |
| **GPTNT** | 2026-06 | Preprint | Benchmark | Visual evidence; Language; Real-time agent-human communication | Collaborative multimodal planning under partial information | [![arXiv 2606.28514](https://img.shields.io/badge/arXiv-2606.28514-b31b1b.svg)](https://arxiv.org/abs/2606.28514) [![Project](https://img.shields.io/badge/Project-Page-2563eb.svg)](https://gptnt.github.io/) |
| **VideoFDB** | 2026-05 | Preprint | Benchmark | Full-duplex audiovisual input and output | Continuous audio-visual conversation and nonverbal behavior | [![arXiv 2605.30256](https://img.shields.io/badge/arXiv-2605.30256-b31b1b.svg)](https://arxiv.org/abs/2605.30256) |
| **OmniInteract** | 2026-05 | Preprint | Streaming benchmark | Native online audio-visual streams; Ambient sound; Spoken queries | Response correctness and timing, interruption handling, context continuity, and continuous task guidance | [![arXiv 2605.26485](https://img.shields.io/badge/arXiv-2605.26485-b31b1b.svg)](https://arxiv.org/abs/2605.26485) [![Code](https://img.shields.io/badge/Code-GitHub-16a34a.svg?logo=github)](https://github.com/Lucky-Lance/OmniInteract) |
| **τ-Voice** | 2026-03 | ICML 2026 | Benchmark + simulator | Full-duplex speech; Tool and database state; Domain policies | Verifiable task completion and voice-interaction quality across realistic multi-turn service domains | [![arXiv 2603.13686](https://img.shields.io/badge/arXiv-2603.13686-b31b1b.svg)](https://arxiv.org/abs/2603.13686) [![Code](https://img.shields.io/badge/Code-GitHub-16a34a.svg?logo=github)](https://github.com/sierra-research/tau2-bench) |
| **VoiceAssistant-Eval** | 2025-09 | Preprint | Benchmark | Speech; Non-speech audio; Images; Language; Spoken output | Listening, speaking, viewing, cross-modal consistency, robustness, and safety across 10,497 examples and 13 task categories | [![arXiv 2509.22651](https://img.shields.io/badge/arXiv-2509.22651-b31b1b.svg)](https://arxiv.org/abs/2509.22651) [![Project](https://img.shields.io/badge/Project-Page-2563eb.svg)](https://mathllm.github.io/VoiceAssistantEval/) |
| **MultiVox** | 2025-07 | Preprint | Benchmark | Speech; Paralinguistic cues; Images; Video; Environmental audio | Context-grounded voice responses that integrate fine-grained vocal characteristics, acoustic context, and complementary visual evidence | [![arXiv 2507.10859](https://img.shields.io/badge/arXiv-2507.10859-b31b1b.svg)](https://arxiv.org/abs/2507.10859) |
| **OmniMMI** | 2025-03 | Preprint | Streaming benchmark + baseline | Streaming video; Speech; Non-speech audio; Language | Online understanding and proactive reasoning across six real-time interaction subtasks | [![arXiv 2503.22952](https://img.shields.io/badge/arXiv-2503.22952-b31b1b.svg)](https://arxiv.org/abs/2503.22952) |
| **VoiceBench** | 2024-10 | Preprint | Benchmark | Speech instructions; Spoken responses | Real-world voice-assistant robustness and instruction following | [![arXiv 2410.17196](https://img.shields.io/badge/arXiv-2410.17196-b31b1b.svg)](https://arxiv.org/abs/2410.17196) [![Code](https://img.shields.io/badge/Code-GitHub-16a34a.svg?logo=github)](https://github.com/MatthewCYM/VoiceBench) |
| **COMMA** | 2024-10 | TMLR 2025 | Benchmark | Visual puzzles; Language communication; Unequal private information | Agent-agent and agent-human reasoning, communication, and collaboration under asymmetric access | [![arXiv 2410.07553](https://img.shields.io/badge/arXiv-2410.07553-b31b1b.svg)](https://arxiv.org/abs/2410.07553) [![Code](https://img.shields.io/badge/Code-GitHub-16a34a.svg?logo=github)](https://github.com/tossowski/COMMA) |

### 6.4 Digital and Software Environments

| Resource | First public | Venue / status | Type | Modalities / environment | Evaluation target | Resources |
| --- | --- | --- | --- | --- | --- | --- |
| **CRAB** | 2024-07 | Preprint | Benchmark + cross-environment framework | Language; Screens; Desktop and mobile state; Cross-device actions | Graph-based progress and task completion for single- and multi-agent workflows spanning desktop and mobile environments | [![arXiv 2407.01511](https://img.shields.io/badge/arXiv-2407.01511-b31b1b.svg)](https://arxiv.org/abs/2407.01511) [![Code](https://img.shields.io/badge/Code-GitHub-16a34a.svg?logo=github)](https://github.com/camel-ai/crab) |
| **AndroidWorld** | 2024-05 | ICLR 2025 | Benchmark + executable environment | Language; Screenshots or accessibility state; Real Android applications | Dynamic, parameterized mobile tasks with durable state-based rewards across 20 applications | [![arXiv 2405.14573](https://img.shields.io/badge/arXiv-2405.14573-b31b1b.svg)](https://arxiv.org/abs/2405.14573) [![Code](https://img.shields.io/badge/Code-GitHub-16a34a.svg?logo=github)](https://github.com/google-research/android_world) |
| **OSWorld** | 2024-04 | NeurIPS 2024 | Benchmark + executable environment | Language; Screenshots; Accessibility trees; Real desktop applications | Open-ended, cross-application computer tasks with reproducible state setup and execution-based evaluation | [![arXiv 2404.07972](https://img.shields.io/badge/arXiv-2404.07972-b31b1b.svg)](https://arxiv.org/abs/2404.07972) [![Project](https://img.shields.io/badge/Project-Page-2563eb.svg)](https://os-world.github.io/) |
| **VisualWebArena** | 2024-01 | ACL 2024 | Benchmark + executable environment | Language; Web screenshots; Structured page state | Realistic visually grounded tasks across interactive websites | [![arXiv 2401.13649](https://img.shields.io/badge/arXiv-2401.13649-b31b1b.svg)](https://arxiv.org/abs/2401.13649) [![Project](https://img.shields.io/badge/Project-Page-2563eb.svg)](https://jykoh.com/vwa) |

### 6.5 Virtual, 3D, and Open Worlds

| Resource | First public | Venue / status | Type | Modalities / environment | Evaluation target | Resources |
| --- | --- | --- | --- | --- | --- | --- |
| **GameWorld** | 2026-04 | Preprint | Benchmark + executable environments | Browser games; Visual observations; Language; Keyboard, mouse, or semantic actions | Verifiable multimodal game control, latency, memory sensitivity, action validity, and long-horizon planning | [![arXiv 2604.07429](https://img.shields.io/badge/arXiv-2604.07429-b31b1b.svg)](https://arxiv.org/abs/2604.07429) [![Project](https://img.shields.io/badge/Project-Page-2563eb.svg)](https://gameworld-bench.github.io/) |
| **SpatialScore** | 2025-05 | CVPR 2026 Highlight | Benchmark + dataset + baseline agent | Images; Multi-frame video; Language; Spatial-tool outputs | Unified spatial intelligence across 30 tasks, with data-driven and tool-using multi-agent baselines | [![arXiv 2505.17012](https://img.shields.io/badge/arXiv-2505.17012-b31b1b.svg)](https://arxiv.org/abs/2505.17012) [![Paper](https://img.shields.io/badge/Paper-Link-b31b1b.svg)](https://openaccess.thecvf.com/content/CVPR2026/html/Wu_SpatialScore_Towards_Comprehensive_Evaluation_for_Spatial_Intelligence_CVPR_2026_paper.html) |
| **MageBench** | 2024-12 | Preprint | Benchmark + interactive environments | Continuously updated visual observations; Language; WebUI; Sokoban; Football | Vision-in-the-chain reasoning, interaction, and replanning from visual feedback across 483 scenarios | [![arXiv 2412.04531](https://img.shields.io/badge/arXiv-2412.04531-b31b1b.svg)](https://arxiv.org/abs/2412.04531) [![Code](https://img.shields.io/badge/Code-GitHub-16a34a.svg?logo=github)](https://github.com/microsoft/MageBench) |

### 6.6 Physical Robotics and Multi-Robot Systems

| Resource | First public | Venue / status | Type | Modalities / environment | Evaluation target | Resources |
| --- | --- | --- | --- | --- | --- | --- |
| **MECoBench** | 2026-06 | Preprint | Benchmark + evaluation platform | Visually grounded embodied environments; Language communication; Multiple agents | Cooperation structures, collaboration modes, team-size effects, and robustness under noisy priors | [![arXiv 2606.31966](https://img.shields.io/badge/arXiv-2606.31966-b31b1b.svg)](https://arxiv.org/abs/2606.31966) [![Code](https://img.shields.io/badge/Code-GitHub-16a34a.svg?logo=github)](https://github.com/q-i-n-g/MECoBench) |
| **Tabero** | 2026-05 | Preprint | Benchmark + model suite | Vision; Tactile force; Language; Proprioception; Force-position commands | Task success and physical-interaction quality in gentle manipulation with real-time closed-loop force feedback | [![arXiv 2605.27886](https://img.shields.io/badge/arXiv-2605.27886-b31b1b.svg)](https://arxiv.org/abs/2605.27886) [![Code](https://img.shields.io/badge/Code-GitHub-16a34a.svg?logo=github)](https://github.com/NathanWu7/Tabero) |
| **ResponsibleRobotBench** | 2025-12 | Preprint | Benchmark + evaluation framework | Vision; Language; Robot state and action representations; Human assistance | Risk detection and mitigation, moral decision-making, safe multi-stage manipulation, and physically grounded planning | [![arXiv 2512.04308](https://img.shields.io/badge/arXiv-2512.04308-b31b1b.svg)](https://arxiv.org/abs/2512.04308) [![Project](https://img.shields.io/badge/Project-Page-2563eb.svg)](https://sites.google.com/view/responsible-robotbench) |
| **SimWorld-Robotics** | 2025-09 | NeurIPS 2025 | Simulation platform + benchmarks | Photorealistic urban 3D worlds; Dynamic traffic and pedestrians; Vision-language instructions; Multi-robot communication | Multimodal grounding, spatial reasoning, safe long-range navigation, grounded communication, and cooperative robot search | [![arXiv 2512.10046](https://img.shields.io/badge/arXiv-2512.10046-b31b1b.svg)](https://arxiv.org/abs/2512.10046) [![Project](https://img.shields.io/badge/Project-Page-2563eb.svg)](https://simworld.org/) [![Code](https://img.shields.io/badge/Code-GitHub-16a34a.svg?logo=github)](https://github.com/SimWorld-AI/SimWorld) |
| **GroundAct** | 2025-08 | Preprint | Benchmark + interactive environments | Language; Structured environmental state; Tools; Multiple agents | Action feasibility, tool acquisition, physical-constraint reasoning, and implicit coordination across 1,500 embodied scenarios | [![arXiv 2508.05614](https://img.shields.io/badge/arXiv-2508.05614-b31b1b.svg)](https://arxiv.org/abs/2508.05614) [![Project](https://img.shields.io/badge/Project-Page-2563eb.svg)](https://zju-real.github.io/OmniEmbodied/) [![Code](https://img.shields.io/badge/Code-GitHub-16a34a.svg?logo=github)](https://github.com/ZJU-REAL/OmniEmbodied) |
| **EmbodiedBench** | 2025-02 | ICML 2025 Oral | Benchmark + interactive environments | Egocentric vision; Language; Navigation and manipulation actions | Vision-driven embodied reasoning, perception, spatial awareness, and long-term planning across four environments | [![arXiv 2502.09560](https://img.shields.io/badge/arXiv-2502.09560-b31b1b.svg)](https://arxiv.org/abs/2502.09560) [![Project](https://img.shields.io/badge/Project-Page-2563eb.svg)](https://embodiedbench.github.io/) |
| **PARTNR** | 2024-10 | ICLR 2025 | Benchmark + simulation platform | Natural-language tasks; Egocentric perception; 3D household state; Human and robot actions | Planning, perception, skill execution, recovery, and human-robot coordination across 100,000 tasks | [![arXiv 2411.00081](https://img.shields.io/badge/arXiv-2411.00081-b31b1b.svg)](https://arxiv.org/abs/2411.00081) [![Project](https://img.shields.io/badge/Project-Page-2563eb.svg)](https://aihabitat.org/partnr/) |
| **CHAIC** | 2024-09 | NeurIPS 2024 Datasets and Benchmarks | Benchmark + environment | Egocentric observations; Human behavior; Language; Embodied actions | Inferring human intent and physical constraints for inclusive cooperative planning | [![arXiv 2411.01796](https://img.shields.io/badge/arXiv-2411.01796-b31b1b.svg)](https://arxiv.org/abs/2411.01796) [![Code](https://img.shields.io/badge/Code-GitHub-16a34a.svg?logo=github)](https://github.com/UMass-Foundation-Model/CHAIC) |
| **Habitat 3.0** | 2023-10 | ICLR 2024 | Simulation platform + benchmark | 3D worlds; Humanoids; Robots; Human input | Human-in-the-loop and collaborative embodied tasks | [![arXiv 2310.13724](https://img.shields.io/badge/arXiv-2310.13724-b31b1b.svg)](https://arxiv.org/abs/2310.13724) [![Code](https://img.shields.io/badge/Code-GitHub-16a34a.svg?logo=github)](https://github.com/facebookresearch/habitat-lab) |
| **Open X-Embodiment** | 2023-10 | ICRA 2024 | Dataset | Images; Language; Proprioception; Actions across embodiments | Cross-embodiment robot learning | [![arXiv 2310.08864](https://img.shields.io/badge/arXiv-2310.08864-b31b1b.svg)](https://arxiv.org/abs/2310.08864) [![Project](https://img.shields.io/badge/Project-Page-2563eb.svg)](https://robotics-transformer-x.github.io/) |
| **LIBERO** | 2023-06 | NeurIPS 2023 | Benchmark | Vision; Language; Robot state and actions | Lifelong robot learning across manipulation suites | [![arXiv 2306.03310](https://img.shields.io/badge/arXiv-2306.03310-b31b1b.svg)](https://arxiv.org/abs/2306.03310) [![Code](https://img.shields.io/badge/Code-GitHub-16a34a.svg?logo=github)](https://github.com/Lifelong-Robot-Learning/LIBERO) |
| **BEHAVIOR-1K** | 2022-09 | CoRL 2022 | Benchmark + simulator | 3D scenes; Physics; Robot state and actions | Human-centered long-horizon household activities | [![Paper](https://img.shields.io/badge/Paper-CoRL-b31b1b.svg)](https://proceedings.mlr.press/v205/li23a.html) [![arXiv 2403.09227](https://img.shields.io/badge/arXiv-2403.09227-b31b1b.svg)](https://arxiv.org/abs/2403.09227) [![Project](https://img.shields.io/badge/Project-Page-2563eb.svg)](https://behavior.stanford.edu/) |
| **CALVIN** | 2021-12 | IEEE RA-L 2022 | Benchmark | Vision; Language; Proprioception; Robot actions | Long-horizon language-conditioned manipulation | [![arXiv 2112.03227](https://img.shields.io/badge/arXiv-2112.03227-b31b1b.svg)](https://arxiv.org/abs/2112.03227) [![Code](https://img.shields.io/badge/Code-GitHub-16a34a.svg?logo=github)](https://github.com/mees/calvin) |
| **TEACh** | 2021-10 | AAAI 2022 | Benchmark + environment | Dialogue; Egocentric vision; Embodied actions | Task-driven embodied agents that collaborate through conversation | [![arXiv 2110.00534](https://img.shields.io/badge/arXiv-2110.00534-b31b1b.svg)](https://arxiv.org/abs/2110.00534) [![Code](https://img.shields.io/badge/Code-GitHub-16a34a.svg?logo=github)](https://github.com/alexa/teach) |
| **ALFRED** | 2019-12 | CVPR 2020 | Benchmark + environment | Egocentric vision; Language; Embodied actions | Long-horizon household instruction following | [![arXiv 1912.01734](https://img.shields.io/badge/arXiv-1912.01734-b31b1b.svg)](https://arxiv.org/abs/1912.01734) [![Project](https://img.shields.io/badge/Project-Page-2563eb.svg)](https://askforalfred.com/) |
| **JRDB** | 2019-10 | IEEE TPAMI 2021 | Dataset + benchmark | RGB; RGB-D; 360° video; Audio; LiDAR; IMU | Multisensor perception for social mobile robots | [![arXiv 1910.11792](https://img.shields.io/badge/arXiv-1910.11792-b31b1b.svg)](https://arxiv.org/abs/1910.11792) [![Project](https://img.shields.io/badge/Project-Page-2563eb.svg)](https://jrdb.erc.monash.edu/) |

## 7. Engineering Resources

This section contains maintained, runnable infrastructure rather than papers relabeled as tools. Resources are grouped by engineering role, not research topic.

### 7.1 Agent Runtimes and Interaction Frameworks

| Resource | Type | Primary use | Link |
| --- | --- | --- | --- |
| FlashRT | Agent-guided deployment harness | Measurement-gated optimization of real-time voice, video-generation, world-model, and omni-modal pipelines across GPU systems | [paper](https://arxiv.org/abs/2607.18171) |
| JarvisHub | Creative-agent harness | Canvas-native project state, multimodal tool orchestration, traces, revisions, and human steering for long-horizon creative work | [paper](https://arxiv.org/abs/2607.23588), [GitHub](https://github.com/LYL1015/JarvisHub) |
| OpenAI Agents SDK | Agent SDK | Tool use, handoffs, tracing, and real-time voice-agent applications | [GitHub](https://github.com/openai/openai-agents-python) |
| LiveKit Agents | Real-time agent framework | Low-latency voice and multimodal agents over WebRTC | [GitHub](https://github.com/livekit/agents) |
| Pipecat | Real-time orchestration | Streaming audio/video pipelines, transport, interruption, and tool integration | [GitHub](https://github.com/pipecat-ai/pipecat) |
| TEN Framework | Real-time interaction framework | Multimodal conversational agents with RTC or WebSocket transport, VAD, turn detection, extensions, and deployable examples | [GitHub](https://github.com/TEN-framework/ten-framework) |

### 7.2 Digital-Agent Environments

| Resource | Type | Primary use | Link |
| --- | --- | --- | --- |
| BrowserGym | Browser-agent environment | Unified Gym-style access to WebArena, VisualWebArena, WorkArena, MiniWoB, screenshots, traces, and repeatable web-task execution | [GitHub](https://github.com/ServiceNow/BrowserGym) |

### 7.3 Embodied AI and Robotics Infrastructure

| Resource | Type | Primary use | Link |
| --- | --- | --- | --- |
| LeRobot | Robot-learning framework | Datasets, policies, training, and hardware integration for embodied agents | [GitHub](https://github.com/huggingface/lerobot) |
| AI2-THOR | Embodied simulator | Interactive household environments for vision-language action research | [GitHub](https://github.com/allenai/ai2thor) |
| ManiSkill | Robotics simulator | GPU-parallel manipulation environments and reproducible evaluation | [GitHub](https://github.com/haosulab/ManiSkill) |
| robosuite | Robotics framework | MuJoCo manipulation environments and standardized robot interfaces | [GitHub](https://github.com/ARISE-Initiative/robosuite) |
| MetaDrive | Driving simulator | Compositional, multi-agent, and sensor-rich autonomous-driving environments | [GitHub](https://github.com/metadriverse/metadrive) |
| ROS 2 | Robotics middleware | Sensor, planning, communication, and actuator integration | [GitHub](https://github.com/ros2/ros2) |
| Isaac Lab | GPU robotics framework | Physics and multimodal sensor simulation, robot-learning environments, multi-agent RL, and sim-to-real workflows on Isaac Sim | [GitHub](https://github.com/isaac-sim/IsaacLab) |

### 7.4 Evaluation Tooling

| Resource | Type | Primary use | Link |
| --- | --- | --- | --- |
| lmms-eval | Evaluation harness | Reproducible evaluation across image, video, audio, and multimodal benchmarks | [GitHub](https://github.com/EvolvingLMMs-Lab/lmms-eval) |
| Inspect AI | Agent-evaluation framework | Reproducible tool-use and multi-turn evaluations with agent scaffolds, sandboxing, tracing, model-graded scoring, limits, and bridges to external agent runtimes | [Documentation](https://inspect.aisi.org.uk/), [GitHub](https://github.com/UKGovernmentBEIS/inspect_ai) |

## 8. Multimodal Agent Skills

This section indexes reusable procedural capability packages for building, operating, or evaluating multimodal agents. Here, a **skill** means an installable directory that follows the [Agent Skills specification](https://agentskills.io/specification)—a required `SKILL.md` with metadata and instructions, optionally accompanied by scripts, references, or assets—or a provider-maintained compatible bundle that exposes concrete skill directories.

Static prompt collections, ordinary SDKs, model repositories, and MCP-only servers are excluded. MCP supplies live tools or data; a skill supplies reusable procedure and execution guidance. A project may provide both, but it is listed here only when an inspectable skill package exists.

Repository stars below are dynamic, repository-level discovery signals rather than skill-level quality scores or endorsements. Review each skill's license, dependencies, network and credential requirements, executable scripts, and possible side effects before installation.

### 8.1 Standards and Distribution

| Resource | Role | Why it matters | Link |
| --- | --- | --- | --- |
| Agent Skills | Open specification and reference validator | Defines the portable `SKILL.md` package, metadata, progressive disclosure, optional scripts, references, and assets | [Specification](https://agentskills.io/specification), [GitHub](https://github.com/agentskills/agentskills) |
| skills CLI and skills.sh | Cross-agent discovery and installer | Finds, installs, lists, checks, and updates GitHub-backed skills across compatible agent clients | [Directory](https://skills.sh/), [GitHub](https://github.com/vercel-labs/skills) |
| OpenAI Plugins | Codex distribution catalog | Demonstrates how skills can be distributed alone or alongside MCP servers, apps, agents, commands, hooks, and assets in a plugin bundle | [GitHub](https://github.com/openai/plugins) |

### 8.2 Curated Skill Collections

Collections are grouped by one consistent variable—**primary capability family**—while modalities and execution environments remain separate descriptors. Representative skills are examples, not an exhaustive inventory.

| Collection | Provenance | Primary capability family | Modalities / environment | Representative installable skills | Repository signal | Link |
| --- | --- | --- | --- | --- | --- | --- |
| Anthropic Skills | Anthropic-maintained examples; mixed open-source and source-available licensing | Documents and visual artifacts | Documents; PDFs; Slides; Spreadsheets; Images; Web artifacts | `pdf`; `docx`; `pptx`; `xlsx`; `canvas-design`; `algorithmic-art`; `slack-gif-creator`; `web-artifacts-builder` | ![GitHub Stars](https://img.shields.io/github/stars/anthropics/skills?style=flat-square) | [GitHub](https://github.com/anthropics/skills) |
| Gemini API Skills | Google-maintained open source; not an officially supported Google product | Real-time and generative API workflows | Text; Image; Audio; Video; Speech; Bidirectional streaming; Tool calls | `gemini-live-api-dev`; `gemini-interactions-api`; `gemini-omni-flash-api` | ![GitHub Stars](https://img.shields.io/github/stars/google-gemini/gemini-skills?style=flat-square) | [GitHub](https://github.com/google-gemini/gemini-skills) |
| NVIDIA Agent Skills | Official, NVIDIA-verified catalog | Physical AI and streaming perception | Video; Sensors; Robotics; Simulation; Edge and GPU services | `video-search-and-summarization`; DeepStream pipeline skills; Isaac and Physical AI workflow skills | ![GitHub Stars](https://img.shields.io/github/stars/NVIDIA/skills?style=flat-square) | [GitHub](https://github.com/NVIDIA/skills) |
| Hugging Face Skills | Hugging Face-maintained open source | Models, data, training, and evaluation | Text; Image; Audio; Video; Datasets; Model and evaluation artifacts | `transformers-js`; `huggingface-vision-trainer`; `huggingface-datasets`; `huggingface-community-evals`; `hf-cli` | ![GitHub Stars](https://img.shields.io/github/stars/huggingface/skills?style=flat-square) | [GitHub](https://github.com/huggingface/skills) |
| LiveKit Agent Skills | LiveKit-maintained open source | Real-time voice-agent engineering | Streaming speech; Audio; Video; WebRTC; Tool-enabled conversation | `livekit-agents`; `livekit-simulations` | ![GitHub Stars](https://img.shields.io/github/stars/livekit/agent-skills?style=flat-square) | [GitHub](https://github.com/livekit/agent-skills) |
| Remotion Agent Skills | Remotion-maintained open source | Programmatic video production | React; Canvas; SVG; WebGL; Audio; Video; Captions; Maps | `remotion-best-practices`; `remotion-create`; `remotion-markup`; `remotion-render`; `remotion-multimedia` | ![GitHub Stars](https://img.shields.io/github/stars/remotion-dev/skills?style=flat-square) | [GitHub](https://github.com/remotion-dev/skills) |
| Pexo Skills | Community / project-maintained open source | Agentic media production | Text; Images; URLs; Scripts; Audio; Multi-shot video; Music; Subtitles | `pexo-agent`; `text-to-video`; `image-to-video`; `product-video`; `explainer-video` | ![GitHub Stars](https://img.shields.io/github/stars/pexoai/pexo-skills?style=flat-square) | [GitHub](https://github.com/pexoai/pexo-skills) |

**Installation note.** Collections indexed by skills.sh commonly support `npx skills add owner/repository --skill skill-name`. Follow the maintainer's instructions because plugin catalogs and client-specific packages may use different installation paths; pin and review source when reproducibility or privileged execution matters.

## 9. Related Lists

These adjacent collections cover broader modeling or narrower application areas and are useful complements to this evidence-gated index.

| Repository | Scope | Link |
| --- | --- | --- |
| Awesome Agentic Gen | Broad paper ledger for agentic image, video, 3D, design, and generative workflows; adjacent to this list's stricter multimodal-agent system index | [GitHub](https://github.com/Yu-xm/Awesome-Agentic-Gen) |
| Awesome Multimodal Modeling | Broader multimodal-modeling taxonomy and background | [GitHub](https://github.com/OpenEnvision/Awesome-Multimodal-Modeling) |
| Awesome World Models | Domain-organized world-model paper index and the inspiration for this list's resource-badge display | [GitHub](https://github.com/knightnemo/Awesome-World-Models) |
| Awesome Large Multimodal Agents | Companion resource associated with the LMA survey | [GitHub](https://github.com/jun0wanan/awesome-large-multimodal-agents) |
| Awesome LLMs for Video Understanding | Broader video-language models, datasets, and evaluation | [GitHub](https://github.com/yunlong10/Awesome-LLMs-for-Video-Understanding) |

## Contributing and Curation

Contributions are welcome through issues and pull requests. Before proposing a work, read the [contribution guide](contributing.md) and provide enough primary-source evidence to reproduce its placement.

<!--lint disable awesome-list-item-->

- **Primary sources first.** Prefer papers, official project pages, maintained code, datasets, and documentation.
- **Agent claims require loop evidence.** A project name containing “agent” is not sufficient.
- **Multimodality requires information, not control.** Actions, rewards, coordinates, and latent state never supply the second modality.
- **One work, one canonical entry.** Placement follows the primary evaluated contribution; cross-cutting traits belong in taxonomy columns, not duplicate rows.
- **Models are not systems by default.** Foundation models and VLA backbones stay in Models, Policies, and Components unless a separate feedback-informed system is evaluated.
- **Skills are implementation packages, not research systems.** Require a concrete `SKILL.md`, record provenance and operational requirements, and review executable contents before recommending installation.
- **Axes remain independent.** For systems, encode the primary action domain through exactly one canonical subsection, then record modality, capability, temporal regime, and participants in their own fields; never compress them into one mixed category.
- **Keep the list selective.** Favor representative systems with a clear conceptual, empirical, or engineering contribution.
- **Use the first public month.** Order research artifacts by `YYYY-MM` and update an existing entry rather than adding a second row for a later venue version.
- **Audit links and placement together.** A valid URL does not imply that a work belongs in the selected category.
- **Run the repository checks.** Use [`node scripts/validate_readme.mjs`](scripts/validate_readme.mjs) before submission, then run the network-dependent link checks documented in the contribution guide.

<!--lint enable awesome-list-item-->

## Citation

If this curated index helps your research or engineering work, you can cite it as:

```bibtex
@misc{awesome_multimodal_agents,
  title        = {Awesome Multimodal Agents},
  author       = {OpenEnvision},
  year         = {2026},
  howpublished = {\url{https://github.com/OpenEnvision/Awesome-Multimodal-Agent}},
  note         = {An evidence-gated index of multimodal agent systems, enabling research, evaluation resources, infrastructure, and reusable skills}
}
```
