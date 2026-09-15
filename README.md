<a id="top"></a>

<!--lint disable double-link table-pipe-alignment-->

<div align="center">

# Awesome Multimodal Agents
<img width="220" height="220" alt="Awesome Multimodal Agents — perception, action, and feedback" src="assets/logo-agent.png" />
<p>A curated map of agents that perceive across modalities, reason in a loop, and act on the digital or physical world.</p>

[![Awesome](https://awesome.re/badge-flat2.svg)](https://awesome.re)
![PRs Welcome](https://img.shields.io/badge/PRs-welcome-16a34a?style=flat-square)
![Scope](https://img.shields.io/badge/scope-multimodal%20%7C%20agentic%20%7C%20interactive-0f766e)
![Updated](https://img.shields.io/badge/updated-2026--09-111827)

</div>

An evidence-gated research and implementation index for multimodal agents, spanning end-to-end systems, enabling research, evaluation resources, open infrastructure, and reusable skills.

**OpenEnvision Library website:** [Website entry](index.html) · [GitHub Pages setup and local preview](website/README.md). The homepage sits beside this README; the interactive catalog is generated from it.

## Contents

- [About](#about)
- [1. Foundations](#1-foundations)
  - [1.1 What Counts as a Multimodal Agent](#11-what-counts-as-a-multimodal-agent)
  - [1.2 Agent Loop and Evidence](#12-agent-loop-and-evidence)
  - [1.3 Canonical Research Taxonomy](#13-canonical-research-taxonomy)
  - [1.4 Cross-Section Reading Paths](#14-cross-section-reading-paths)
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
  - [4.2 Action Models and Generalist Policies](#42-action-models-and-generalist-policies)
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
  - [7.2 Digital-Agent Infrastructure and Environments](#72-digital-agent-infrastructure-and-environments)
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

<p><strong>2026-09-15</strong> — Integrated robot-use research across the directory, then added 54 research entries, updated six research families, and added nine resource families; introduced cross-section reading paths, evaluation-level metadata, and documented evidence and version decisions in the <a href="docs/multimodal-gap-list-2026-09-15.md">expansion audit</a>.</p>
<p><strong>2026-08-15</strong> — Audited publication metadata and primary links, expanded current computer-use, agentic-generation, memory, presentation, and safety coverage, and added a complete contribution guide with local check instructions.</p>
<p><strong>2026-08-10</strong> — Expanded coverage to multimodal search, agentic generation and editing, creative workflows, reflection, verification, and self-improvement. Replaced mixed topic labels with separate modality, capability, action-domain, temporal, and participant axes.</p>

</details>

## 1. Foundations

### 1.1 What Counts as a Multimodal Agent

A **multimodal agent** is a goal-directed runtime system whose policy integrates two or more semantically distinct, task-relevant information modalities, selects grounded actions, and conditions later decisions on newly acquired feedback. Typical information modalities include language, images, video, speech, non-speech audio, 3D or depth, tactile or force signals, and structured sensor or application state.

The system index applies four conjunctive tests.

**1 · Multimodal evidence.** At least two independent information modalities materially affect decisions. Actions, coordinates, rewards, hidden states, and a transcript derived from the same speech signal do not create an additional modality by themselves.

**2 · Goal-directed policy.** The work exposes a decision process that selects actions toward a task objective, rather than only parsing, grounding, scoring, or generating a static output.

**3 · Grounded action.** An action changes an environment, an artifact, another participant, or the evidence state available to the agent—for example by manipulating, communicating, editing, retrieving, or invoking a tool.

**4 · Runtime feedback.** The resulting observation, execution result, verifier judgment, environmental change, or partner response causally influences a later action during evaluation.

**Robot-use agents** apply this loop to robots: a general-purpose agent invokes perception, robot-control APIs, executable programs, or learned policies as tools, then uses their consequences to decide what to do next. Robot-use is a physical action domain, not a new input modality or a synonym for every vision-language-action model.

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
│   ├── Digital-agent infrastructure and environments
│   ├── Embodied-AI and robotics infrastructure
│   └── Evaluation tooling
├── Multimodal agent skills                    <- portable procedural capability packages
└── Related lists
```

Audio, video, 3D, tactile sensing, real-time behavior, and collaboration are cross-cutting properties represented in entry metadata—not competing directory levels.

Research artifacts are ordered by first public release, newest first. Each work appears once under its primary contribution type.

**How to read the entries.** The title line provides direct Paper, Project, Code, Dataset, or Collection access. The compact metadata line records the earliest inspectable release and distinguishes verified peer-reviewed venues from Preprint, Technical report, and Project release. End-to-end systems include a separate **Agent loop** line naming the returned observation that changes a later decision; it is not a generic paper summary.

**Entry display.** Every research entry begins with a bold title and ends with consistent resource badges, following the high-signal navigation pattern demonstrated by Awesome World Models: ![Paper](https://img.shields.io/badge/Paper-arXiv-b31b1b.svg) primary manuscript, ![Project](https://img.shields.io/badge/Project-Page-2563eb.svg) official project page, ![Code](https://img.shields.io/badge/Code-GitHub-16a34a.svg?logo=github) maintained implementation, ![Dataset](https://img.shields.io/badge/Dataset-Data-f59e0b.svg) dataset, and ![Collection](https://img.shields.io/badge/Collection-List-7c3aed.svg) companion collection. The arXiv badge carries the paper identifier when available, so links remain recognizable before clicking.

### 1.4 Cross-Section Reading Paths

Use these paths to follow a capability across artifact types. A linked work retains one canonical research entry; a resource can expose both engineering code and a distinct procedural skill package.

| Capability | Runtime systems | Models and methods | Evaluation | Engineering entry points |
| --- | --- | --- | --- | --- |
| Memory across time and tasks | [JARVIS-1](#jarvis-1) | [MEMO](#memo); [StreamSoccer](#streamsoccer); [Perceptual user memory](#parametric-user-memory); [MMA](#mma); [Persistent skills](#persistent-skills) | [WorldMemArena](#worldmemarena); PerceptMem and MMA-Bench attached to their components | [Evaluation tooling](#74-evaluation-tooling) |
| Proactive, timed, and duplex interaction | [ChatMuse](#chatmuse) | [Gander](#gander); [MOSS-VL](#moss-vl); [Proactive-service survey](#proactive-service-agents) | [TIMELI](#timeli); [OmniAssistBench](#omniassistbench); [JarvisBench](#jarvisbench) | [ADK, LiveKit, Pipecat, and TEN](#71-agent-runtimes-and-interaction-frameworks) |
| Visual and execution verification | [PROS](#pros); [ACE](#ace); [Procedura](#procedura); [Thinking on Shots](#thinking-on-shots) | [RefineCut](#refinecut); [AutoDesign](#autodesign); [Tool ablations](#tool-use-capability-gains) | [VisEditBench](#viseditbench); [VideoArgus](#videoargus); [ConflictGUI](#conflictgui); [AgentHijack](#agenthijack) | [Playwright CLI](#72-digital-agent-infrastructure-and-environments); [Evaluation tooling](#74-evaluation-tooling) |
| Hybrid GUI, CLI, and external tools | [Agent S2](#agent-s2) | [Qwen-UI-Agent](#qwen-ui-agent); [UI-TARS-2](#ui-tars-2); [GUI-Owl-1.5](#mobile-agent-v35); [OmniParser](#omniparser) | [CUA-Universe](#cua-universe); [MobileWorld](#mobileworld); [OSWorld 2.0](#osworld-2) | [Digital infrastructure](#72-digital-agent-infrastructure-and-environments); [MCP](#interoperability-protocols) |
| Multi-agent and cross-device coordination | [Agent S2](#agent-s2); [Multi-robot systems](#36-physical-robotics-and-multi-robot-systems) | [Spine-Branch](#spine-branch); [Coordination methods](#54-multi-agent-and-conversational-coordination) | [JarvisGUI](#jarvisgui); [Robot/team evaluation](#66-physical-robotics-and-multi-robot-systems) | [A2A](#interoperability-protocols); [Agent runtimes](#71-agent-runtimes-and-interaction-frameworks) |
| Action-conditioned world models | [SIMA 2](#sima-2); [Robot-use systems](#36-physical-robotics-and-multi-robot-systems) | [Genie 3](#genie-3); [WM-R1](#wm-r1); [World-model methods](#53-world-models-and-model-based-planning) | [GUI-CC](#gui-cc); [Virtual worlds](#65-virtual-3d-and-open-worlds) | [Simulation and data pipelines](#simulation-and-data-pipelines) |

<!--lint disable awesome-list-item-->

## 2. Surveys and Perspectives

These works establish the field and its major interfaces. They are grouped by survey subject and are not mixed into the system index.

**In this section:** [General multimodal agency](#21-general-multimodal-agency) · [Embodied agents and world-model-based planning](#22-embodied-agents-and-world-model-based-planning) · [Multi-agent and human-agent collaboration](#23-multi-agent-and-human-agent-collaboration)

### 2.1 General Multimodal Agency

- **Agentic Visual Generation: From Generative Models to Agentic Control** <a id="agentic-visual-generation-survey"></a> [![arXiv 2609.06758](https://img.shields.io/badge/arXiv-2609.06758-b31b1b.svg)](https://arxiv.org/abs/2609.06758) [![Collection](https://img.shields.io/badge/Collection-List-7c3aed.svg)](https://github.com/YinmingHuang/Awesome-agentic-visual-generation-model)  
  *2026-09 · Preprint* — **Scope:** Control over generation conditions, execution, feedback, and reusable experience across agentic image, video, 3D, and multimodal generation
- **Efficient GUI Agents: A Systems Survey of Observation, Memory, Action, and Runtime Optimization** <a id="efficient-gui-agents"></a> [![arXiv 2609.02309](https://img.shields.io/badge/arXiv-2609.02309-b31b1b.svg)](https://arxiv.org/abs/2609.02309)  
  *2026-09 · Preprint* — **Scope:** Observation compression, memory, action efficiency, and runtime optimization for GUI agents; connects capability evaluation with token, latency, and execution costs
- **Software Engineering for and with GUI Agent** [![arXiv 2608.09278](https://img.shields.io/badge/arXiv-2608.09278-b31b1b.svg)](https://arxiv.org/abs/2608.09278)  
  *2026-08 · Preprint* — **Scope:** Evidence audit of 336 GUI-agent papers across architecture, interactive evaluation, recovery, lifecycle engineering, privacy, observability, human oversight, and deployment readiness
- **A Survey on Agentic Multimodal Large Language Models** [![arXiv 2510.10991](https://img.shields.io/badge/arXiv-2510.10991-b31b1b.svg)](https://arxiv.org/abs/2510.10991) [![Collection](https://img.shields.io/badge/Collection-List-7c3aed.svg)](https://github.com/HJYao00/Awesome-Agentic-MLLMs)  
  *2025-10 · Preprint* — **Scope:** Agentic internal intelligence, external tool invocation, environment interaction, training resources, evaluation, and applications for multimodal large language models
- **Large Multimodal Agents: A Survey** [![arXiv 2402.15116](https://img.shields.io/badge/arXiv-2402.15116-b31b1b.svg)](https://arxiv.org/abs/2402.15116)  
  *2024-02 · Preprint* — **Scope:** Architectures, tool use, collaboration, applications, and evaluation for LLM-driven multimodal agents
- **Agent AI: Surveying the Horizons of Multimodal Interaction** [![arXiv 2401.03568](https://img.shields.io/badge/arXiv-2401.03568-b31b1b.svg)](https://arxiv.org/abs/2401.03568)  
  *2024-01 · Preprint* — **Scope:** Interactive agents that integrate environmental perception, multisensory inputs, external knowledge, embodied action, and human feedback

### 2.2 Embodied Agents and World-Model-Based Planning

This branch covers surveys and technical perspectives on robot-use, embodied autonomy, and spatial or predictive representations that support an agent's memory, planning, decisions, or control. Perception-only spatial modeling and general world-model surveys without an explicit path to action are outside this branch.

- **Survey on Multimodal Embodied Agents: A Unified Capability-centric Perspective from Computer-Use to Robot-Use** [![Paper](https://img.shields.io/badge/Paper-Link-b31b1b.svg)](https://doi.org/10.6084/m9.figshare.33529048) [![Project](https://img.shields.io/badge/Project-Page-2563eb.svg)](https://showlab.github.io/Awesome-Multimodal-Embodied-Agent/) [![Collection](https://img.shields.io/badge/Collection-List-7c3aed.svg)](https://github.com/showlab/Awesome-Multimodal-Embodied-Agent)  
  *2026-09 · Preprint* — **Scope:** Connects computer-use and robot-use through Perceive, Anticipate, Plan, Act, and Verify (PAPAV), with attention to physical constraints and gaps in evaluation
- **Robot-Use Agents** [![Article](https://img.shields.io/badge/Article-Read-2563eb.svg)](https://web.mit.edu/phillipi/www/writing/robot-use-agents.html)  
  *2026-09 · Perspective* — **Scope:** Phillip Isola examines general-purpose agents operating robots through sensor and actuator interfaces, including latency, task feedback, and the limits of current deployments
- **Introducing Auto Engineering for Robotics** [![Article](https://img.shields.io/badge/Article-Read-2563eb.svg)](https://www.generalrobotics.company/post/introducing-auto-engineering-for-robotics)  
  *2026-09 · Research blog* — **Scope:** General Robotics describes GRID workflows for hardware integration, simulation, skill construction, and deployment repair; laboratory examples are developer reports
- **Large Multimodal Agents for Intelligent Transportation Systems: Architectures, Evidence, and Deployment Challenges** [![arXiv 2608.08184](https://img.shields.io/badge/arXiv-2608.08184-b31b1b.svg)](https://arxiv.org/abs/2608.08184) [![Collection](https://img.shields.io/badge/Collection-List-7c3aed.svg)](https://github.com/pangjunbiao/ITS-LMA-Review)  
  *2026-08 · Preprint* — **Scope:** Evidence-audited review of 42 intelligent-transportation agent families, separating model, system, and hybrid multimodality across capability, validation, deployment readiness, and bounded orchestration
- **What Language Does and What the Evidence Supports: A Functional Role Taxonomy and Evidence Audit of Language Grounding in Embodied Agents** [![arXiv 2608.03099](https://img.shields.io/badge/arXiv-2608.03099-b31b1b.svg)](https://arxiv.org/abs/2608.03099)  
  *2026-08 · Preprint* — **Scope:** Five functional roles for language, the embodied modules that consume it, and an evidence audit spanning actions, interventions, and causal grounding claims
- **Weights or Skills? A Survey of Robot-Learning Techniques: from Action-Predicting Weights to Robots that Write their Own Skills** [![arXiv 2608.01851](https://img.shields.io/badge/arXiv-2608.01851-b31b1b.svg)](https://arxiv.org/abs/2608.01851)  
  *2026-08 · Preprint* — **Scope:** Contrasts end-to-end VLA weight policies with generated code skills, including closed-loop repair, skill memory and evolution, and interoperable skill ecosystems
- **Introducing Waddle: agents that control robots** [![Article](https://img.shields.io/badge/Article-Read-2563eb.svg)](https://www.waddlelabs.ai/research/introducing-waddle)  
  *2026-07 · Research blog* — **Scope:** Describes camera-guided code execution, action models used as tools, verification, and shared robot skills; evidence consists of developer demonstrations
- **Data Pyramid for Embodied Manipulation: A Survey** [![arXiv 2607.24744](https://img.shields.io/badge/arXiv-2607.24744-b31b1b.svg)](https://arxiv.org/abs/2607.24744) [![Collection](https://img.shields.io/badge/Collection-List-7c3aed.svg)](https://github.com/worldbench/awesome-embodied-data-pyramid)  
  *2026-07 · Preprint* — **Scope:** Organizes robot, UMI, human-video, simulation, and vision-language data by scalability and alignment with robot actions, including failure/recovery data and policy-training recipes
- **From Perception to Action: Spatial AI Agents and World Models** [![arXiv 2602.01644](https://img.shields.io/badge/arXiv-2602.01644-b31b1b.svg)](https://arxiv.org/abs/2602.01644)  
  *2026-02 · Preprint* — **Scope:** Connects spatial grounding, hierarchical memory, planning, world models, and physically constrained action; explicitly distinguishes perception from agency
- **A Comprehensive Survey on World Models for Embodied AI** [![arXiv 2510.16732](https://img.shields.io/badge/arXiv-2510.16732-b31b1b.svg)](https://arxiv.org/abs/2510.16732)  
  *2025-10 · Preprint* — **Scope:** Decision-coupled and general-purpose world models across temporal and spatial representations, data, metrics, and control
- **Survey of Vision-Language-Action Models for Embodied Manipulation** [![arXiv 2508.15201](https://img.shields.io/badge/arXiv-2508.15201-b31b1b.svg)](https://arxiv.org/abs/2508.15201)  
  *2025-08 · Preprint* — **Scope:** VLA architectures, training, datasets, and evaluation for embodied manipulation
- **Towards Embodied Agentic AI: Review and Classification of LLM- and VLM-Driven Robot Autonomy and Interaction** [![arXiv 2508.05294](https://img.shields.io/badge/arXiv-2508.05294-b31b1b.svg)](https://arxiv.org/abs/2508.05294)  
  *2025-08 · Preprint* — **Scope:** Classifies LLM/VLM roles in robot autonomy, tool invocation, human interaction, ROS integration, and orchestration
- **A Survey: Learning Embodied Intelligence from Physical Simulators and World Models** [![arXiv 2507.00917](https://img.shields.io/badge/arXiv-2507.00917-b31b1b.svg)](https://arxiv.org/abs/2507.00917) [![Collection](https://img.shields.io/badge/Collection-List-7c3aed.svg)](https://github.com/NJU3DV-LoongGroup/Embodied-World-Models-Survey)  
  *2025-07 · Preprint* — **Scope:** Complementary roles of external simulation and internal predictive models in embodied learning
- **Embodied AI Agents: Modeling the World** [![arXiv 2506.22355](https://img.shields.io/badge/arXiv-2506.22355-b31b1b.svg)](https://arxiv.org/abs/2506.22355)  
  *2025-06 · Position paper* — **Scope:** Multimodal perception, world models, planning, memory, action, user models, and human-agent collaboration
- **A Survey on Integration of Large Language Models with Intelligent Robots** [![arXiv 2404.09228](https://img.shields.io/badge/arXiv-2404.09228-b31b1b.svg)](https://arxiv.org/abs/2404.09228)  
  *2024-04 · Intelligent Service Robotics 2024* — **Scope:** Reviews language-model integration into robot communication, perception, planning, and control, including practical prompting examples

### 2.3 Multi-Agent and Human-Agent Collaboration

- **Proactive Service Agents: A Unified Decision Framework, Methods, and Evaluation** <a id="proactive-service-agents"></a> [![arXiv 2609.03727](https://img.shields.io/badge/arXiv-2609.03727-b31b1b.svg)](https://arxiv.org/abs/2609.03727)  
  *2026-09 · Preprint* — **Scope:** Inferring service opportunities, choosing silence or clarification, timing interventions, and adapting to user feedback; distinguishes offline prediction from evaluated deployment benefit
- **LLM-Based Human-Agent Collaboration and Interaction Systems: A Survey** [![arXiv 2505.00753](https://img.shields.io/badge/arXiv-2505.00753-b31b1b.svg)](https://arxiv.org/abs/2505.00753) [![Collection](https://img.shields.io/badge/Collection-List-7c3aed.svg)](https://github.com/HenryPengZou/Awesome-LLM-Based-Human-Agent-System-Papers)  
  *2025-05 · ACL 2026 Findings* — **Scope:** Environment and participant modeling, human feedback, interaction, orchestration, communication, reliability, and safety in human-agent systems
- **Multi-agent Embodied AI: Advances and Future Directions** [![arXiv 2505.05108](https://img.shields.io/badge/arXiv-2505.05108-b31b1b.svg)](https://arxiv.org/abs/2505.05108)  
  *2025-05 · Preprint* — **Scope:** Perception, communication, coordination, adaptation, and open-environment challenges in embodied multi-agent systems
- **Generative Multi-Agent Collaboration in Embodied AI: A Systematic Review** [![arXiv 2502.11518](https://img.shields.io/badge/arXiv-2502.11518-b31b1b.svg)](https://arxiv.org/abs/2502.11518)  
  *2025-02 · Preprint* — **Scope:** Collaboration across physical and virtual embodiments

## 3. End-to-End Agent Systems

Every entry below passes all four system tests. Systems are partitioned **once** by primary action domain. Labeled metadata preserves the independent classification axes, so a speech-enabled robot remains a physical-robot system with Speech recorded as a modality rather than being duplicated in an “audio agents” branch.

**In this section:** [Information seeking and media understanding](#31-information-seeking-and-media-understanding) · [Creative and multimodal workflows](#32-creative-and-multimodal-workflows) · [Conversation and social interaction](#33-conversation-and-social-interaction) · [Digital and software environments](#34-digital-and-software-environments) · [Virtual, 3D, and open worlds](#35-virtual-3d-and-open-worlds) · [Physical robotics and multi-robot systems](#36-physical-robotics-and-multi-robot-systems)

### 3.1 Information Seeking and Media Understanding

For learned visual research and tool-use policies, see [Vision-DeepResearch](#vision-deepresearch) and [DeepEyesV2](#deepeyes-v2); they remain methods rather than duplicate system entries.

The agent acts by selecting evidence, invoking analysis or retrieval tools, updating memory, and deciding what to inspect next.

- **REVEAL: A Rubric-Guided Agent for Explicit Evidence Sufficiency Verification in Long-Video Question Answering** [![arXiv 2608.08612](https://img.shields.io/badge/arXiv-2608.08612-b31b1b.svg)](https://arxiv.org/abs/2608.08612)  
  *2026-08 · Preprint* — **Modalities:** Video; Language; Structured data — **Capabilities:** Perceive/retrieve; Plan/reason; Use tools/control; Remember; Verify/reflect — **Temporal:** Long-horizon — **Participants:** Single agent  
  **Agent loop:** A rubric checks whether retrieved video evidence is sufficient, identifies missing clues, and makes targeted re-retrieval alter the next reasoning and answer decision
- **SCOUT: Self-Checking and Recovery-Aware Tool-Thought Agents for Ultra-Long Egocentric Video Reasoning** [![arXiv 2608.07959](https://img.shields.io/badge/arXiv-2608.07959-b31b1b.svg)](https://arxiv.org/abs/2608.07959)  
  *2026-08 · ACM Multimedia 2026* — **Modalities:** Video; Language; Structured data — **Capabilities:** Perceive/retrieve; Plan/reason; Use tools/control; Verify/reflect; Learn/adapt — **Temporal:** Long-horizon — **Participants:** Single agent  
  **Agent loop:** Intermediate tool observations are evaluated for evidence value, so the agent can switch exploration or zoom strategy; recovery and tool-alignment rewards shape later turns
- **Video-DeepResearch: Towards the Next-Generation Multimodal Deepresearch Agent** [![arXiv 2608.03979](https://img.shields.io/badge/arXiv-2608.03979-b31b1b.svg)](https://arxiv.org/abs/2608.03979) [![Code](https://img.shields.io/badge/Code-GitHub-16a34a.svg?logo=github)](https://github.com/Osilly/Vision-DeepResearch)  
  *2026-08 · Preprint* — **Modalities:** Video; Language; Structured data — **Capabilities:** Perceive/retrieve; Plan/reason; Use tools/control — **Temporal:** Long-horizon — **Participants:** Single agent  
  **Agent loop:** Cross-frame perception results condition later open-web queries, while returned web evidence changes subsequent search, evidence selection, and final synthesis
- **Hear, Invoke, and Understand: A Skill-Calling Multimodal Agent for Large Audio Language Models** [![arXiv 2608.01881](https://img.shields.io/badge/arXiv-2608.01881-b31b1b.svg)](https://arxiv.org/abs/2608.01881)  
  *2026-08 · Preprint* — **Modalities:** Speech; Non-speech audio; Language; Structured data — **Capabilities:** Plan/reason; Use tools/control — **Temporal:** Multi-turn — **Participants:** Human-agent  
  **Agent loop:** Selects an audio skill, observes textual or processed-audio output, then updates later tool choices across the trajectory
- **Light-Omni** [![arXiv 2607.05511](https://img.shields.io/badge/arXiv-2607.05511-b31b1b.svg)](https://arxiv.org/abs/2607.05511) [![Project](https://img.shields.io/badge/Project-Page-2563eb.svg)](https://clare-nie.github.io/Light-Omni/) [![Code](https://img.shields.io/badge/Code-GitHub-16a34a.svg?logo=github)](https://github.com/Clare-Nie/Light-Omni)  
  *2026-07 · Preprint* — **Modalities:** Video; Language; Structured data — **Capabilities:** Perceive/retrieve; Remember; Use tools/control — **Temporal:** Streaming; Long-horizon — **Participants:** Single agent  
  **Agent loop:** Continuous observations update episodic and global states; the resulting latent state selects retrieval actions and conditions later responses
- **Orchestra-o1** [![arXiv 2606.13707](https://img.shields.io/badge/arXiv-2606.13707-b31b1b.svg)](https://arxiv.org/abs/2606.13707)  
  *2026-06 · Preprint* — **Modalities:** Language; Image/screen; Speech; Non-speech audio; Video — **Capabilities:** Perceive/retrieve; Plan/reason; Use tools/control; Coordinate — **Temporal:** Long-horizon — **Participants:** Agent team  
  **Agent loop:** The orchestrator decomposes each multimodal task, observes specialist outputs, and updates subsequent routing and synthesis decisions
- **Gen-Searcher** [![arXiv 2603.28767](https://img.shields.io/badge/arXiv-2603.28767-b31b1b.svg)](https://arxiv.org/abs/2603.28767) [![Code](https://img.shields.io/badge/Code-GitHub-16a34a.svg?logo=github)](https://github.com/tulerfeng/Gen-Searcher)  
  *2026-03 · Preprint* — **Modalities:** Language; Image/screen; Structured data — **Capabilities:** Perceive/retrieve; Plan/reason; Use tools/control; Create/edit — **Temporal:** Stepwise — **Participants:** Single agent  
  **Agent loop:** Search returns text and reference images that guide later retrieval and grounded image-synthesis decisions
- **LensWalk** [![arXiv 2603.24558](https://img.shields.io/badge/arXiv-2603.24558-b31b1b.svg)](https://arxiv.org/abs/2603.24558)  
  *2026-03 · CVPR 2026* — **Modalities:** Video; Language — **Capabilities:** Perceive/retrieve; Plan/reason; Use tools/control; Verify/reflect — **Temporal:** Long-horizon — **Participants:** Single agent  
  **Agent loop:** A reason-plan-observe loop changes temporal scope and sampling density after each returned visual observation
- **VideoARM** [![arXiv 2512.12360](https://img.shields.io/badge/arXiv-2512.12360-b31b1b.svg)](https://arxiv.org/abs/2512.12360)  
  *2025-12 · CVPR 2026* — **Modalities:** Video; Language — **Capabilities:** Perceive/retrieve; Use tools/control; Remember — **Temporal:** Long-horizon — **Participants:** Single agent  
  **Agent loop:** Repeats observation, coarse-to-fine tool action, returned evidence, and hierarchical-memory update before deciding again
- **Active Video Perception** [![arXiv 2512.05774](https://img.shields.io/badge/arXiv-2512.05774-b31b1b.svg)](https://arxiv.org/abs/2512.05774)  
  *2025-12 · Preprint* — **Modalities:** Video; Language — **Capabilities:** Perceive/retrieve; Plan/reason; Use tools/control; Verify/reflect — **Temporal:** Long-horizon — **Participants:** Agent team  
  **Agent loop:** A planner requests targeted temporal or spatial video interactions; timestamped pixel evidence is judged for sufficiency and either terminates the run or changes the next observation request
- **AudioToolAgent** [![arXiv 2510.02995](https://img.shields.io/badge/arXiv-2510.02995-b31b1b.svg)](https://arxiv.org/abs/2510.02995) [![Code](https://img.shields.io/badge/Code-GitHub-16a34a.svg?logo=github)](https://github.com/GLJS/AudioToolAgent)  
  *2025-10 · Preprint* — **Modalities:** Speech; Non-speech audio; Language; Structured data — **Capabilities:** Perceive/retrieve; Plan/reason; Use tools/control; Verify/reflect — **Temporal:** Multi-turn — **Participants:** Human-agent  
  **Agent loop:** The central agent selects audio-language tools, asks follow-up questions, and compares returned outputs before finalizing an answer
- **M3-Agent** [![arXiv 2508.09736](https://img.shields.io/badge/arXiv-2508.09736-b31b1b.svg)](https://arxiv.org/abs/2508.09736) [![Code](https://img.shields.io/badge/Code-GitHub-16a34a.svg?logo=github)](https://github.com/bytedance-seed/m3-agent)  
  *2025-08 · Preprint* — **Modalities:** Video; Speech; Non-speech audio; Language — **Capabilities:** Perceive/retrieve; Plan/reason; Remember — **Temporal:** Streaming; Long-horizon — **Participants:** Single agent  
  **Agent loop:** Real-time audiovisual observations update entity-centric episodic and semantic memory; iterative retrieval results change later reasoning turns
- **StreamAgent** [![arXiv 2508.01875](https://img.shields.io/badge/arXiv-2508.01875-b31b1b.svg)](https://arxiv.org/abs/2508.01875)  
  *2025-08 · Preprint* — **Modalities:** Video; Language — **Capabilities:** Perceive/retrieve; Remember — **Temporal:** Streaming; Long-horizon — **Participants:** Single agent  
  **Agent loop:** Anticipates future evidence, observes later frames, then revises temporal and spatial attention actions
- **VideoMind** [![arXiv 2503.13444](https://img.shields.io/badge/arXiv-2503.13444-b31b1b.svg)](https://arxiv.org/abs/2503.13444) [![Project](https://img.shields.io/badge/Project-Page-2563eb.svg)](https://videomind.github.io/)  
  *2025-03 · ICLR 2026* — **Modalities:** Video; Language; Structured data — **Capabilities:** Perceive/retrieve; Verify/reflect; Coordinate — **Temporal:** Long-horizon — **Participants:** Agent team  
  **Agent loop:** Planner requests evidence; grounding and verification results determine the next retrieval or answer action
- **LVAgent** [![arXiv 2503.10200](https://img.shields.io/badge/arXiv-2503.10200-b31b1b.svg)](https://arxiv.org/abs/2503.10200)  
  *2025-03 · ICCV 2025* — **Modalities:** Video; Language — **Capabilities:** Perceive/retrieve; Remember; Verify/reflect; Coordinate — **Temporal:** Long-horizon — **Participants:** Agent team  
  **Agent loop:** Agents retrieve, debate, and reflect; round-level evaluation changes team composition and later evidence use
- **VideoAgent: A Memory-augmented Multimodal Agent for Video Understanding** [![arXiv 2403.11481](https://img.shields.io/badge/arXiv-2403.11481-b31b1b.svg)](https://arxiv.org/abs/2403.11481)  
  *2024-03 · ECCV 2024* — **Modalities:** Video; Language — **Capabilities:** Perceive/retrieve; Use tools/control; Remember — **Temporal:** Long-horizon — **Participants:** Single agent  
  **Agent loop:** Tool results update structured temporal and object memory used by later localization and answer decisions
- **VideoAgent: Long-form Video Understanding with Large Language Model as Agent** [![arXiv 2403.10517](https://img.shields.io/badge/arXiv-2403.10517-b31b1b.svg)](https://arxiv.org/abs/2403.10517)  
  *2024-03 · ECCV 2024* — **Modalities:** Video; Language — **Capabilities:** Perceive/retrieve; Use tools/control — **Temporal:** Long-horizon — **Participants:** Single agent  
  **Agent loop:** Iteratively chooses frames, receives visual evidence through VLM tools, and updates the next acquisition decision
- **DoraemonGPT** [![arXiv 2401.08392](https://img.shields.io/badge/arXiv-2401.08392-b31b1b.svg)](https://arxiv.org/abs/2401.08392) [![Project](https://img.shields.io/badge/Project-Page-2563eb.svg)](https://z-x-yang.github.io/doraemon-gpt/)  
  *2024-01 · ICML 2024* — **Modalities:** Video; Language; Structured data — **Capabilities:** Perceive/retrieve; Plan/reason; Use tools/control; Remember — **Temporal:** Long-horizon — **Participants:** Single agent  
  **Agent loop:** An MCTS planner schedules spatiotemporal and external-knowledge tools, backpropagates result rewards, and explores improved solution paths
- **AVIS** [![arXiv 2306.08129](https://img.shields.io/badge/arXiv-2306.08129-b31b1b.svg)](https://arxiv.org/abs/2306.08129)  
  *2023-06 · NeurIPS 2023* — **Modalities:** Image/screen; Language; Structured data — **Capabilities:** Perceive/retrieve; Plan/reason; Use tools/control; Remember — **Temporal:** Stepwise — **Participants:** Single agent  
  **Agent loop:** A planner chooses the next tool from the current state; a reasoner analyzes each returned result and updates working memory
- **AssistGPT** [![arXiv 2306.08640](https://img.shields.io/badge/arXiv-2306.08640-b31b1b.svg)](https://arxiv.org/abs/2306.08640) [![Project](https://img.shields.io/badge/Project-Page-2563eb.svg)](https://showlab.github.io/assistgpt/)  
  *2023-06 · Preprint* — **Modalities:** Image/screen; Video; Language — **Capabilities:** Plan/reason; Use tools/control; Verify/reflect — **Temporal:** Stepwise — **Participants:** Single agent  
  **Agent loop:** Its Plan–Execute–Inspect–Learn loop inspects intermediate multimodal results and chooses the next tool from current progress

<p align="right"><a href="#top">Back to top</a></p>

### 3.2 Creative and Multimodal Workflows

The agent changes a media or design artifact and inspects rendered, executable, geometric, or human feedback before revising it.

- **Beyond Instruction-Driven Editing: Source-Grounded Problem Discovery with User-Governed Repair for Scientific Posters (PROS)** <a id="pros"></a> [![arXiv 2609.01813](https://img.shields.io/badge/arXiv-2609.01813-b31b1b.svg)](https://arxiv.org/abs/2609.01813)  
  *2026-09 · Preprint* — **Modalities:** Language; Source-paper content; Poster renders; Slide-object state — **Capabilities:** Perceive/retrieve; Plan/reason; Create/edit; Verify/reflect — **Temporal:** Stepwise — **Participants:** Human-agent  
  **Agent loop:** User-invoked diagnosis compares source evidence with the poster; accepted goals drive native PPTX edits, and execution or validation failures revise or reject the repair before preview and optional commit. PROS-Bench evaluates artifacts under protocol-accepted diagnoses, not a controlled user study
- **WorldClaw: Agentic 3D Open-World Generation at Scale** [![arXiv 2608.05248](https://img.shields.io/badge/arXiv-2608.05248-b31b1b.svg)](https://arxiv.org/abs/2608.05248)  
  *2026-08 · Preprint* — **Modalities:** Language; Image/screen; 3D/depth; Structured data — **Capabilities:** Plan/reason; Use tools/control; Create/edit; Verify/reflect; Coordinate — **Temporal:** Long-horizon — **Participants:** Agent team  
  **Agent loop:** Specialized agents inspect rendered world states and geometric contacts, then use those observations to refine terrain, objects, appearance, placement, and later creation steps
- **PosterMELD** [![arXiv 2608.02218](https://img.shields.io/badge/arXiv-2608.02218-b31b1b.svg)](https://arxiv.org/abs/2608.02218) [![Code](https://img.shields.io/badge/Code-GitHub-16a34a.svg?logo=github)](https://github.com/Shannon4Science/PosterMELD)  
  *2026-08 · Preprint* — **Modalities:** Language; Image/screen; Structured data — **Capabilities:** Plan/reason; Create/edit; Verify/reflect; Coordinate — **Temporal:** Long-horizon — **Participants:** Agent team  
  **Agent loop:** Deterministic gates and VLM review route failed poster drafts into bounded repair before export
- **Thinking on Shots: Consistent Multi-Shot Video Editing with Agentic Reasoning** <a id="thinking-on-shots"></a> [![arXiv 2608.26809](https://img.shields.io/badge/arXiv-2608.26809-b31b1b.svg)](https://arxiv.org/abs/2608.26809)  
  *2026-08 · Preprint* — **Modalities:** Language; Video; Shot images; Entity references — **Capabilities:** Perceive/retrieve; Plan/reason; Create/edit; Remember; Verify/reflect — **Temporal:** Long-horizon — **Participants:** Agent team  
  **Agent loop:** Shot-level edits are checked by visual question answering; Pos-Neg Editing Feedback turns detected errors into corrective prompts and further edits, while a Global Memory Card preserves entity anchors across shots. The paper also introduces MMLVE-Bench
- **Procedura: Agentic 3D Modeling with Procedural Control** <a id="procedura"></a> [![arXiv 2608.26238](https://img.shields.io/badge/arXiv-2608.26238-b31b1b.svg)](https://arxiv.org/abs/2608.26238)  
  *2026-08 · Preprint* — **Modalities:** Language; Reference images; Part-color renders; Geometric/program state — **Capabilities:** Plan/reason; Create/edit; Verify/reflect — **Temporal:** Long-horizon — **Participants:** Agent team  
  **Agent loop:** Part programs compile into geometry; compiler and assembly diagnostics change subsequent builds, while a visual critic reads multi-view renders and proposes fixes for another compile-render-check cycle. Bounded retries can still leave warnings or skipped parts
- **ACE: A Self-Correcting Agentic Canvas Editor for Multi-Slide Presentation Automation** <a id="ace"></a> [![arXiv 2608.24103](https://img.shields.io/badge/arXiv-2608.24103-b31b1b.svg)](https://arxiv.org/abs/2608.24103) [![Code](https://img.shields.io/badge/Code-GitHub-16a34a.svg?logo=github)](https://github.com/BloomBerry/agentic-canvas-editor) [![Dataset](https://img.shields.io/badge/Dataset-Data-f59e0b.svg)](https://huggingface.co/datasets/BloomBerry/figma-slide-benchmark)  
  *2026-08 · Preprint* — **Modalities:** Language; Canvas scene graph; Rendered slides; Edit deltas — **Capabilities:** Plan/reason; Use tools/control; Create/edit; Verify/reflect — **Temporal:** Long-horizon — **Participants:** Single agent  
  **Agent loop:** Canvas edits return structured deltas and, for visual-semantic checks, selected rendered evidence; instruction-following critique drives the next edit or rollback. Independent visual-quality judging is separate from the stopping signal
- **COMFYCLAW** [![arXiv 2607.01709](https://img.shields.io/badge/arXiv-2607.01709-b31b1b.svg)](https://arxiv.org/abs/2607.01709)  
  *2026-07 · Preprint* — **Modalities:** Language; Image/screen; Structured data — **Capabilities:** Plan/reason; Use tools/control; Create/edit; Verify/reflect; Learn/adapt — **Temporal:** Long-horizon; Continual — **Participants:** Single agent  
  **Agent loop:** Invalid edits are reverted; visual failures become repairs, while prior errors and verifier feedback become reusable skills
- **ManimAgent** [![arXiv 2606.30296](https://img.shields.io/badge/arXiv-2606.30296-b31b1b.svg)](https://arxiv.org/abs/2606.30296) [![Project](https://img.shields.io/badge/Project-Page-2563eb.svg)](https://manimagent.github.io/)  
  *2026-06 · Preprint* — **Modalities:** Language; Image/screen; Structured data — **Capabilities:** Create/edit; Verify/reflect; Remember; Learn/adapt — **Temporal:** Multi-turn; Continual — **Participants:** Single agent  
  **Agent loop:** Rendered keyframes are scored after reflection rounds; validated successes and failures update later memory
- **IterCAD** [![arXiv 2606.13368](https://img.shields.io/badge/arXiv-2606.13368-b31b1b.svg)](https://arxiv.org/abs/2606.13368)  
  *2026-06 · Preprint* — **Modalities:** Language; Image/screen; 3D/depth; Structured data — **Capabilities:** Plan/reason; Use tools/control; Create/edit; Verify/reflect — **Temporal:** Multi-turn — **Participants:** Human-agent  
  **Agent loop:** CAD execution and visual or geometric results drive code repair and interactive local editing
- **Data Journalist Agent (Data2Story)** [![arXiv 2606.11176](https://img.shields.io/badge/arXiv-2606.11176-b31b1b.svg)](https://arxiv.org/abs/2606.11176) [![Project](https://img.shields.io/badge/Project-Page-2563eb.svg)](https://data2story.github.io/)  
  *2026-06 · Preprint* — **Modalities:** Structured data; Language; Image/screen — **Capabilities:** Perceive/retrieve; Create/edit; Verify/reflect; Coordinate — **Temporal:** Long-horizon — **Participants:** Agent team  
  **Agent loop:** Newsroom agents research and compose; an inspector re-executes data claims and returns evidence for revision
- **Crayotter** [![arXiv 2606.07636](https://img.shields.io/badge/arXiv-2606.07636-b31b1b.svg)](https://arxiv.org/abs/2606.07636) [![Code](https://img.shields.io/badge/Code-GitHub-16a34a.svg?logo=github)](https://github.com/idwts/Crayotter)  
  *2026-06 · Preprint* — **Modalities:** Video; Speech; Non-speech audio; Language; Image/screen; Structured data — **Capabilities:** Perceive/retrieve; Plan/reason; Use tools/control; Create/edit; Verify/reflect; Coordinate — **Temporal:** Long-horizon — **Participants:** Agent team + human  
  **Agent loop:** Analyses, blueprints, tool calls, and intermediate renders remain inspectable; previews and failure diagnosis drive revision
- **IntentEdit: Multi-Agent Reasoning for Intent-Driven Complex Image Editing** [![Paper](https://img.shields.io/badge/Paper-Link-b31b1b.svg)](https://openaccess.thecvf.com/content/CVPR2026F/html/Zhang_IntentEdit_Multi-Agent_Reasoning_for_Intent-Driven_Complex_Image_Editing_CVPRF_2026_paper.html) [![Code](https://img.shields.io/badge/Code-GitHub-16a34a.svg?logo=github)](https://github.com/LaVi-Lab/IntentEdit)  
  *2026-06 · CVPR 2026 Findings* — **Modalities:** Language; Image/screen — **Capabilities:** Plan/reason; Use tools/control; Create/edit; Verify/reflect; Coordinate — **Temporal:** Multi-turn — **Participants:** Agent team  
  **Agent loop:** A cognitive planner grounds intent into staged edits; executors render them, and a reflective evaluator sends deficient outputs back for replanning and refinement
- **NEWTON: Agentic Planning for Physically Grounded Video Generation** [![arXiv 2605.18396](https://img.shields.io/badge/arXiv-2605.18396-b31b1b.svg)](https://arxiv.org/abs/2605.18396) [![Project](https://img.shields.io/badge/Project-Page-2563eb.svg)](https://newton026.github.io/newton/) [![Code](https://img.shields.io/badge/Code-GitHub-16a34a.svg?logo=github)](https://github.com/CUTEPKQ/NEWTON)  
  *2026-05 · Preprint* — **Modalities:** Language; Image/screen; Video; Structured physical data — **Capabilities:** Plan/reason; Use tools/control; Create/edit; Verify/reflect — **Temporal:** Multi-turn — **Participants:** Single agent  
  **Agent loop:** A learned planner orchestrates physics-aware tools and video generation; verifier evidence sends physically inconsistent results back into iterative replanning
- **GEMS: Agent-Native Multimodal Generation with Memory and Skills** [![arXiv 2603.28088](https://img.shields.io/badge/arXiv-2603.28088-b31b1b.svg)](https://arxiv.org/abs/2603.28088) [![Project](https://img.shields.io/badge/Project-Page-2563eb.svg)](https://gems-gen.github.io/) [![Code](https://img.shields.io/badge/Code-GitHub-16a34a.svg?logo=github)](https://github.com/lcqysl/GEMS)  
  *2026-03 · Preprint* — **Modalities:** Language; Image/screen; Structured data — **Capabilities:** Plan/reason; Use tools/control; Create/edit; Verify/reflect; Remember; Coordinate — **Temporal:** Multi-turn; Continual — **Participants:** Agent team  
  **Agent loop:** Specialized agents evaluate intermediate generations and iteratively optimize them, while persistent trajectory memory and on-demand skills change later decisions
- **SAGE: Scalable Agentic 3D Scene Generation for Embodied AI** [![arXiv 2602.10116](https://img.shields.io/badge/arXiv-2602.10116-b31b1b.svg)](https://arxiv.org/abs/2602.10116) [![Project](https://img.shields.io/badge/Project-Page-2563eb.svg)](https://research.nvidia.com/labs/dir/sage/)  
  *2026-02 · Preprint* — **Modalities:** Language; Image/screen; 3D/depth; Structured data — **Capabilities:** Plan/reason; Use tools/control; Create/edit; Verify/reflect — **Temporal:** Multi-turn — **Participants:** Single agent  
  **Agent loop:** Scene generators propose layouts and object compositions; semantic, visual, and physical critics return failures that change later tool selection and iterative scene refinement
- **Agent Banana: High-Fidelity Image Editing with Agentic Thinking and Tooling** [![arXiv 2602.09084](https://img.shields.io/badge/arXiv-2602.09084-b31b1b.svg)](https://arxiv.org/abs/2602.09084) [![Project](https://img.shields.io/badge/Project-Page-2563eb.svg)](https://agent-banana.github.io/) [![Code](https://img.shields.io/badge/Code-GitHub-16a34a.svg?logo=github)](https://github.com/taco-group/agent-banana)  
  *2026-02 · Preprint* — **Modalities:** Language; Image/screen; Structured memory — **Capabilities:** Plan/reason; Use tools/control; Create/edit; Remember — **Temporal:** Multi-turn; Long-horizon — **Participants:** Human-agent  
  **Agent loop:** Each user instruction and edited artifact update structured interaction memory; the planner decomposes later localized edits against the current layered image state
- **JarvisEvo** [![arXiv 2511.23002](https://img.shields.io/badge/arXiv-2511.23002-b31b1b.svg)](https://arxiv.org/abs/2511.23002) [![Project](https://img.shields.io/badge/Project-Page-2563eb.svg)](https://jarvisevo.vercel.app/) [![Code](https://img.shields.io/badge/Code-GitHub-16a34a.svg?logo=github)](https://github.com/LYL1015/JarvisEvo)  
  *2025-11 · CVPR 2026* — **Modalities:** Language; Image/screen — **Capabilities:** Plan/reason; Use tools/control; Create/edit; Verify/reflect; Learn/adapt — **Temporal:** Multi-turn; Continual — **Participants:** Single agent  
  **Agent loop:** Each edited image is evaluated and reflected on before later tool choices; editor-evaluator optimization also converts this feedback into policy improvement
- **MIRA: Multimodal Iterative Reasoning Agent for Image Editing** [![arXiv 2511.21087](https://img.shields.io/badge/arXiv-2511.21087-b31b1b.svg)](https://arxiv.org/abs/2511.21087)  
  *2025-11 · CVPR 2026 Findings* — **Modalities:** Language; Image/screen — **Capabilities:** Plan/reason; Use tools/control; Create/edit; Verify/reflect — **Temporal:** Multi-turn — **Participants:** Single agent  
  **Agent loop:** Each atomic edit produces a new image that is visually inspected before the agent selects the next edit or terminates
- **RAISECity** [![arXiv 2511.18005](https://img.shields.io/badge/arXiv-2511.18005-b31b1b.svg)](https://arxiv.org/abs/2511.18005)  
  *2025-11 · Preprint* — **Modalities:** Language; Image/screen; 3D/depth; Structured data — **Capabilities:** Perceive/retrieve; Plan/reason; Use tools/control; Create/edit; Verify/reflect — **Temporal:** Long-horizon — **Participants:** Single agent  
  **Agent loop:** Generated 3D assets and scenes are evaluated through iterative self-reflection, and detected fidelity errors trigger later tool calls and refinements
- **Auto-Slides: An Interactive Multi-Agent System for Creating and Customizing Research Presentations** [![arXiv 2509.11062](https://img.shields.io/badge/arXiv-2509.11062-b31b1b.svg)](https://arxiv.org/abs/2509.11062) [![Project](https://img.shields.io/badge/Project-Page-2563eb.svg)](https://auto-slides.github.io/) [![Code](https://img.shields.io/badge/Code-GitHub-16a34a.svg?logo=github)](https://github.com/Westlake-AGI-Lab/Auto-Slides)  
  *2025-09 · Preprint* — **Modalities:** Language; Image/screen; Structured documents — **Capabilities:** Perceive/retrieve; Plan/reason; Create/edit; Verify/reflect; Coordinate — **Temporal:** Multi-turn — **Participants:** Agent team + human  
  **Agent loop:** Verification and retrieval findings constrain slide generation, while rendered slides and interactive-editor feedback drive later content, layout, and personalization revisions
- **MAGUS** [![arXiv 2508.10494](https://img.shields.io/badge/arXiv-2508.10494-b31b1b.svg)](https://arxiv.org/abs/2508.10494)  
  *2025-08 · Preprint* — **Modalities:** Language; Image/screen; Speech; Non-speech audio; Video — **Capabilities:** Plan/reason; Use tools/control; Create/edit; Verify/reflect; Coordinate — **Temporal:** Multi-turn — **Participants:** Agent team  
  **Agent loop:** Perceiver and planner produce an action; reflector feedback changes later generation and tool decisions
- **AVAgent** [![arXiv 2410.23230](https://img.shields.io/badge/arXiv-2410.23230-b31b1b.svg)](https://arxiv.org/abs/2410.23230) [![Paper](https://img.shields.io/badge/Paper-NeurIPS-b31b1b.svg)](https://proceedings.neurips.cc/paper_files/paper/2024/hash/6c0ff499edc529c7d8c9f05c7c0ccb82-Abstract-Conference.html)  
  *2024-09 · NeurIPS 2024* — **Modalities:** Video; Speech; Non-speech audio; Language — **Capabilities:** Plan/reason; Use tools/control; Create/edit; Verify/reflect — **Temporal:** Multi-turn — **Participants:** Single agent  
  **Agent loop:** Audio edits are scored against visual content by a VLM; its alignment feedback determines the next filtering or augmentation action
- **Self-correcting LLM-controlled Diffusion Models (SLD)** [![arXiv 2311.16090](https://img.shields.io/badge/arXiv-2311.16090-b31b1b.svg)](https://arxiv.org/abs/2311.16090) [![Project](https://img.shields.io/badge/Project-Page-2563eb.svg)](https://self-correcting-llm-diffusion.github.io/) [![Code](https://img.shields.io/badge/Code-GitHub-16a34a.svg?logo=github)](https://github.com/tsunghan-wu/SLD)  
  *2023-11 · Preprint* — **Modalities:** Language; Image/screen — **Capabilities:** Plan/reason; Create/edit; Verify/reflect — **Temporal:** Multi-turn — **Participants:** Single agent  
  **Agent loop:** The controller generates an image, assesses prompt alignment, identifies inaccuracies, and feeds targeted corrections into the next diffusion or editing round
- **InternGPT** [![arXiv 2305.05662](https://img.shields.io/badge/arXiv-2305.05662-b31b1b.svg)](https://arxiv.org/abs/2305.05662) [![Code](https://img.shields.io/badge/Code-GitHub-16a34a.svg?logo=github)](https://github.com/OpenGVLab/InternGPT)  
  *2023-05 · Preprint* — **Modalities:** Language; Image/screen; Video — **Capabilities:** Converse; Use tools/control; Create/edit — **Temporal:** Multi-turn — **Participants:** Human-agent  
  **Agent loop:** Language and cursor gestures select tools or regions; returned visual edits become the context for subsequent instructions
- **AudioGPT** [![arXiv 2304.12995](https://img.shields.io/badge/arXiv-2304.12995-b31b1b.svg)](https://arxiv.org/abs/2304.12995) [![Code](https://img.shields.io/badge/Code-GitHub-16a34a.svg?logo=github)](https://github.com/AIGC-Audio/AudioGPT)  
  *2023-04 · AAAI 2024* — **Modalities:** Language; Speech; Non-speech audio; Video — **Capabilities:** Plan/reason; Use tools/control; Create/edit — **Temporal:** Multi-turn — **Participants:** Human-agent  
  **Agent loop:** Plans specialist model calls, observes analyzed or generated media, and uses the result in later dialogue and tool selection
- **Visual ChatGPT** [![arXiv 2303.04671](https://img.shields.io/badge/arXiv-2303.04671-b31b1b.svg)](https://arxiv.org/abs/2303.04671) [![Code](https://img.shields.io/badge/Code-GitHub-16a34a.svg?logo=github)](https://github.com/microsoft/visual-chatgpt)  
  *2023-03 · Preprint* — **Modalities:** Language; Image/screen — **Capabilities:** Converse; Plan/reason; Use tools/control; Create/edit — **Temporal:** Multi-turn — **Participants:** Human-agent  
  **Agent loop:** Visual models create or transform artifacts; returned images and user corrections enter the next planning and tool-use turn

<p align="right"><a href="#top">Back to top</a></p>

### 3.3 Conversation and Social Interaction

The primary action is communicative: speaking, listening, interrupting, gesturing, coordinating turns, or proactively responding while streams remain active.

- **Towards Expert-level Medical AI for Real-time Video Consultations** [![arXiv 2608.09861](https://img.shields.io/badge/arXiv-2608.09861-b31b1b.svg)](https://arxiv.org/abs/2608.09861)  
  *2026-08 · Preprint* — **Modalities:** Video; Speech; Language; Structured data — **Capabilities:** Converse; Perceive/retrieve; Plan/reason; Verify/reflect; Coordinate — **Temporal:** Streaming; Real-time; Multi-turn — **Participants:** Agent team + human  
  **Agent loop:** Live audiovisual cues and patient replies update clinical reasoning, changing subsequent questions, requested physical examinations, evidence checks, and management recommendations
- **EmpaAva: An Open-source Agentic 3D-Avatar Empathetic Live Chatbot** [![arXiv 2608.04709](https://img.shields.io/badge/arXiv-2608.04709-b31b1b.svg)](https://arxiv.org/abs/2608.04709) [![Project](https://img.shields.io/badge/Project-Page-2563eb.svg)](https://empaava.top/)  
  *2026-08 · Preprint* — **Modalities:** Speech; Image/screen; Language; 3D/depth — **Capabilities:** Converse; Perceive/retrieve; Plan/reason; Create/edit; Coordinate — **Temporal:** Streaming; Real-time; Multi-turn — **Participants:** Human-agent  
  **Agent loop:** Speech and optional visual affect estimates update the response plan, while generated emotional speech, facial motion, and avatar rendering become feedback for the next user turn
- **ChatMuse: Supporting In-Person Small-Group Conversation Experience with a Proactive Assistive AI Agent in Mixed Reality** <a id="chatmuse"></a> [![arXiv 2607.18556](https://img.shields.io/badge/arXiv-2607.18556-b31b1b.svg)](https://arxiv.org/abs/2607.18556)  
  *2026-07 · Preprint* — **Modalities:** Language from speech; RGB-D body pose; Gaze and head pose — **Capabilities:** Perceive/retrieve; Plan/reason; Use tools/control; Verify/reflect — **Temporal:** Real-time — **Participants:** Human group + agent  
  **Agent loop:** Conversational and nonverbal cues guide private mixed-reality suggestions; participants' subsequent verbal and nonverbal responses update context and prompts for later intervention timing and content
- **DuplexOmni** [![arXiv 2606.09186](https://img.shields.io/badge/arXiv-2606.09186-b31b1b.svg)](https://arxiv.org/abs/2606.09186)  
  *2026-06 · Preprint* — **Modalities:** Speech; Non-speech audio; Video; Language; Structured data — **Capabilities:** Converse; Plan/reason; Use tools/control — **Temporal:** Streaming; Real-time; Full-duplex — **Participants:** Human-agent  
  **Agent loop:** The interaction layer keeps listening and seeing while asynchronous reasoning and tool results alter subsequent responses
- **AURA: Always-On Understanding and Real-Time Assistance via Video Streams** [![arXiv 2604.04184](https://img.shields.io/badge/arXiv-2604.04184-b31b1b.svg)](https://arxiv.org/abs/2604.04184) [![Code](https://img.shields.io/badge/Code-GitHub-16a34a.svg?logo=github)](https://github.com/aurateam2026/AURA)  
  *2026-04 · Preprint* — **Modalities:** Video; Speech; Language — **Capabilities:** Converse; Perceive/retrieve; Remember — **Temporal:** Streaming; Real-time; Long-horizon — **Participants:** Human-agent  
  **Agent loop:** The system continuously updates bounded video context, answers live speech queries, and autonomously decides when changing scenes warrant a proactive response
- **VIA-Agent (Sighted by Default)** [![arXiv 2511.00945](https://img.shields.io/badge/arXiv-2511.00945-b31b1b.svg)](https://arxiv.org/abs/2511.00945)  
  *2025-11 · Preprint* — **Modalities:** Video; Speech; Language — **Capabilities:** Converse; Perceive/retrieve; Remember — **Temporal:** Streaming; Real-time; Multi-turn — **Participants:** Human-agent  
  **Agent loop:** Continuous bidirectional audiovisual observations preserve the user's task goal; scene changes and spoken feedback update subsequent concise navigation or retrieval guidance
- **EgoMem** [![arXiv 2509.11914](https://img.shields.io/badge/arXiv-2509.11914-b31b1b.svg)](https://arxiv.org/abs/2509.11914)  
  *2025-09 · Preprint* — **Modalities:** Video; Speech; Non-speech audio — **Capabilities:** Converse; Perceive/retrieve; Remember; Learn/adapt — **Temporal:** Streaming; Real-time; Full-duplex; Continual — **Participants:** Human-agent  
  **Agent loop:** Face and voice observations retrieve personalized context, while detected dialogue boundaries update memory used in later spoken interactions
- **Project Astra** [![Project](https://img.shields.io/badge/Project-Page-2563eb.svg)](https://deepmind.google/models/project-astra/)  
  *2024-05 · Project release* — **Modalities:** Video; Speech; Language; Image/screen; Structured data — **Capabilities:** Converse; Remember; Use tools/control — **Temporal:** Streaming; Real-time — **Participants:** Human-agent  
  **Agent loop:** Maintains live cross-device context, observes changing audiovisual input and tool results, then responds proactively
- **MIA** [![arXiv 2112.03763](https://img.shields.io/badge/arXiv-2112.03763-b31b1b.svg)](https://arxiv.org/abs/2112.03763) [![Project](https://img.shields.io/badge/Project-Page-2563eb.svg)](https://deepmind.google/blog/creating-interactive-agents-with-imitation-learning/)  
  *2021-12 · Technical report* — **Modalities:** Image/screen; Language; Proprioception — **Capabilities:** Converse; Use tools/control — **Temporal:** Streaming; Real-time — **Participants:** Human-agent  
  **Agent loop:** Observes and acts several times per second; human and environmental changes continuously update its policy

<p align="right"><a href="#top">Back to top</a></p>

### 3.4 Digital and Software Environments

Related foundation policies are indexed in [4.2](#42-action-models-and-generalist-policies), including [GUI-Owl-1.5 / Mobile-Agent-v3.5](#mobile-agent-v35), [Qwen-UI-Agent](#qwen-ui-agent), [UI-TARS-2](#ui-tars-2), and [OpenCUA](#opencua).

Only representative computer-use systems are kept here; this branch is deliberately not allowed to define the whole list.

- **FormBharo: Designing and Evaluating a Voice Agent for Conversational Form Filling in Rural India** [![arXiv 2608.06027](https://img.shields.io/badge/arXiv-2608.06027-b31b1b.svg)](https://arxiv.org/abs/2608.06027)  
  *2026-08 · Preprint* — **Modalities:** Speech; Language; Structured data — **Capabilities:** Converse; Plan/reason; Use tools/control; Verify/reflect — **Temporal:** Multi-turn; Real-time — **Participants:** Human-agent  
  **Agent loop:** Each caller utterance updates structured form state; deterministic validation detects missing or invalid fields and changes the next follow-up, retry, or form-writing action
- **WebChallenger: A Reliable and Efficient Generalist Web Agent** [![arXiv 2606.10423](https://img.shields.io/badge/arXiv-2606.10423-b31b1b.svg)](https://arxiv.org/abs/2606.10423) [![Code](https://img.shields.io/badge/Code-GitHub-16a34a.svg?logo=github)](https://github.com/jayoohwang1/webchallenger)  
  *2026-06 · Preprint* — **Modalities:** Language; Image/screen; Structured page state — **Capabilities:** Perceive/retrieve; Plan/reason; Use tools/control; Remember — **Temporal:** Long-horizon — **Participants:** Single agent  
  **Agent loop:** Browser actions update the page and PageMem representation; changed sections, element behavior, and partial workflow state determine the next region, compound action, or recovery decision
- **Don't Act Blindly: Robust GUI Automation via Action-Effect Verification and Self-Correction (VeriGUI)** [![arXiv 2604.05477](https://img.shields.io/badge/arXiv-2604.05477-b31b1b.svg)](https://arxiv.org/abs/2604.05477)  
  *2026-04 · ACL 2026* — **Modalities:** Language; Image/screen; Structured action expectations — **Capabilities:** Plan/reason; Use tools/control; Verify/reflect; Learn/adapt — **Temporal:** Long-horizon — **Participants:** Single agent  
  **Agent loop:** After each GUI action, the observed screen is compared with the expected effect; detected failure changes corrective reasoning and the next action instead of allowing blind continuation
- **LongHorizonUI: A Unified Framework for Robust Long-Horizon Task Automation of GUI Agent** [![Paper](https://img.shields.io/badge/Paper-OpenReview-b31b1b.svg)](https://openreview.net/forum?id=BK7Mk5d4WE) [![Project](https://img.shields.io/badge/Project-Page-2563eb.svg)](https://kane2kang.github.io/LongHorizonUI/)  
  *2026-01 · ICLR 2026* — **Modalities:** Language; Image/screen; Structured UI state — **Capabilities:** Plan/reason; Use tools/control; Verify/reflect — **Temporal:** Long-horizon — **Participants:** Single agent  
  **Agent loop:** Post-action screenshots are verified against the intended subgoal; failure triggers local replanning, rollback, or compensatory execution before the workflow proceeds
- **AURA: Agent for Understanding, Reasoning, and Automated Tool Use in Voice-Driven Tasks** [![arXiv 2506.23049](https://img.shields.io/badge/arXiv-2506.23049-b31b1b.svg)](https://arxiv.org/abs/2506.23049)  
  *2025-06 · Preprint* — **Modalities:** Speech; Language; Structured data — **Capabilities:** Converse; Plan/reason; Use tools/control — **Temporal:** Multi-turn — **Participants:** Human-agent  
  **Agent loop:** Spoken requests trigger tool actions such as search, email, or booking; returned service state and follow-up speech determine later calls and responses
- **UITron-Speech** [![arXiv 2506.11127](https://img.shields.io/badge/arXiv-2506.11127-b31b1b.svg)](https://arxiv.org/abs/2506.11127) [![Code](https://img.shields.io/badge/Code-GitHub-16a34a.svg?logo=github)](https://github.com/UITron-hub/UITron-Speech)  
  *2025-06 · Preprint* — **Modalities:** Speech; Image/screen — **Capabilities:** Plan/reason; Use tools/control — **Temporal:** Stepwise — **Participants:** Human-agent  
  **Agent loop:** Current speech context and screen state produce an action; the changed screen becomes the next observation
- **Agent S2: A Compositional Generalist-Specialist Framework for Computer Use Agents** <a id="agent-s2"></a> [![arXiv 2504.00906](https://img.shields.io/badge/arXiv-2504.00906-b31b1b.svg)](https://arxiv.org/abs/2504.00906) [![Code](https://img.shields.io/badge/Code-GitHub-16a34a.svg?logo=github)](https://github.com/simular-ai/Agent-S)  
  *2025-04 · Preprint* — **Modalities:** Language; Screenshots; OCR and interface state — **Capabilities:** Perceive/retrieve; Plan/reason; Use tools/control; Verify/reflect — **Temporal:** Long-horizon — **Participants:** Manager-worker agents  
  **Agent loop:** Grounded worker actions return new screenshots; subgoal completion or failure sends current visual state and execution history to the manager, which revises the remaining plan. Test-time trajectory selection is covered separately in [Agent S3](#agent-s3)
- **SeeAct** [![arXiv 2401.01614](https://img.shields.io/badge/arXiv-2401.01614-b31b1b.svg)](https://arxiv.org/abs/2401.01614) [![Code](https://img.shields.io/badge/Code-GitHub-16a34a.svg?logo=github)](https://github.com/OSU-NLP-Group/SeeAct)  
  *2024-01 · ICML 2024* — **Modalities:** Language; Image/screen; Structured data — **Capabilities:** Plan/reason; Use tools/control — **Temporal:** Stepwise — **Participants:** Human-agent  
  **Agent loop:** On live websites, a grounded action changes the page and the new visual or structural observation conditions the next action
- **Mobile-Agent** [![arXiv 2401.16158](https://img.shields.io/badge/arXiv-2401.16158-b31b1b.svg)](https://arxiv.org/abs/2401.16158) [![Code](https://img.shields.io/badge/Code-GitHub-16a34a.svg?logo=github)](https://github.com/X-PLUG/MobileAgent)  
  *2024-01 · Preprint* — **Modalities:** Language; Image/screen — **Capabilities:** Perceive/retrieve; Plan/reason; Use tools/control — **Temporal:** Long-horizon — **Participants:** Single agent  
  **Agent loop:** Each tap or swipe changes the application screen; fresh visual perception is used to plan and ground the next operation  
  **Series:** [Mobile-Agent-v3.5 / GUI-Owl-1.5](#mobile-agent-v35) is indexed as a separate model report in Section 4.2
- **AppAgent** [![arXiv 2312.13771](https://img.shields.io/badge/arXiv-2312.13771-b31b1b.svg)](https://arxiv.org/abs/2312.13771) [![Project](https://img.shields.io/badge/Project-Page-2563eb.svg)](https://appagent-official.github.io/)  
  *2023-12 · CHI 2025* — **Modalities:** Language; Image/screen; Structured data — **Capabilities:** Plan/reason; Use tools/control; Remember; Learn/adapt — **Temporal:** Long-horizon — **Participants:** Human-agent  
  **Agent loop:** Autonomous exploration generates app knowledge; during execution each tap or swipe yields a new screen used for the next action

<p align="right"><a href="#top">Back to top</a></p>

### 3.5 Virtual, 3D, and Open Worlds

The agent changes a simulated, reconstructed, or game world rather than a physical robot workspace.

- **WorldAgents** [![arXiv 2603.19708](https://img.shields.io/badge/arXiv-2603.19708-b31b1b.svg)](https://arxiv.org/abs/2603.19708)  
  *2026-03 · Preprint* — **Modalities:** Language; Image/screen; 3D/depth — **Capabilities:** Plan/reason; Simulate; Create/edit; Verify/reflect; Coordinate — **Temporal:** Long-horizon — **Participants:** Agent team  
  **Agent loop:** Director and generator propose views; 2D and 3D verifiers reject or return evidence that drives later generations
- **SIMA 2: An Agent That Plays, Reasons, and Learns with You in Virtual 3D Worlds** <a id="sima-2"></a> [![Project](https://img.shields.io/badge/Project-Page-2563eb.svg)](https://deepmind.google/blog/sima-2-an-agent-that-plays-reasons-and-learns-with-you-in-virtual-3d-worlds/)  
  *2025-11 · Research report* — **Modalities:** Language; Screenshots; Visual user prompts — **Capabilities:** Perceive/retrieve; Plan/reason; Use tools/control; Verify/reflect — **Temporal:** Interactive; Long-horizon — **Participants:** Human-agent  
  **Agent loop:** Keyboard and mouse actions return changed game views; Gemini-based reasoning uses those observations and user clarification to revise subsequent actions. Self-improvement experiments train later agent generations from collected experience; the release is a limited research preview
- **GenEx** [![arXiv 2412.09624](https://img.shields.io/badge/arXiv-2412.09624-b31b1b.svg)](https://arxiv.org/abs/2412.09624)  
  *2024-12 · ICLR 2025* — **Modalities:** Image/screen; Video; Language; 3D/depth — **Capabilities:** Plan/reason; Use tools/control; Simulate; Remember — **Temporal:** Long-horizon — **Participants:** Single agent  
  **Agent loop:** Generated panoramic observations update the agent's belief and active 3D map; imagined outcomes then alter later exploration or navigation actions
- **SIMA** [![arXiv 2404.10179](https://img.shields.io/badge/arXiv-2404.10179-b31b1b.svg)](https://arxiv.org/abs/2404.10179) [![Project](https://img.shields.io/badge/Project-Page-2563eb.svg)](https://deepmind.google/discover/blog/sima-generalist-ai-agent-for-3d-virtual-environments/)  
  *2024-03 · Technical report* — **Modalities:** Image/screen; Language — **Capabilities:** Plan/reason; Use tools/control — **Temporal:** Real-time; Long-horizon — **Participants:** Single agent  
  **Agent loop:** Keyboard and mouse control change the world; resulting visual observations condition later actions toward the goal  
  **Series:** [SIMA 2](#sima-2) adds reasoning and user interaction; its [Genie 3](#genie-3) experiments connect agents to generated environments without making the world model itself an agent
- **JARVIS-1** <a id="jarvis-1"></a> [![arXiv 2311.05997](https://img.shields.io/badge/arXiv-2311.05997-b31b1b.svg)](https://arxiv.org/abs/2311.05997) [![Paper](https://img.shields.io/badge/Paper-TPAMI-b31b1b.svg)](https://doi.org/10.1109/TPAMI.2024.3511593) [![Project](https://img.shields.io/badge/Project-Page-2563eb.svg)](https://craftjarvis.github.io/JARVIS-1/)  
  *2023-11 · IEEE TPAMI 2025* — **Modalities:** Image/screen; Language — **Capabilities:** Plan/reason; Use tools/control; Remember; Learn/adapt — **Temporal:** Long-horizon; Continual — **Participants:** Single agent  
  **Agent loop:** Plans dispatch to goal-conditioned controllers; new Minecraft observations and survival experiences update subsequent planning and memory
- **LEO** [![arXiv 2311.12871](https://img.shields.io/badge/arXiv-2311.12871-b31b1b.svg)](https://arxiv.org/abs/2311.12871) [![Project](https://img.shields.io/badge/Project-Page-2563eb.svg)](https://embodied-generalist.github.io/)  
  *2023-11 · ICML 2024* — **Modalities:** 3D/depth; Language — **Capabilities:** Plan/reason; Use tools/control; Remember — **Temporal:** Long-horizon — **Participants:** Single agent  
  **Agent loop:** Executes embodied actions from language and 3D state; later observations and action history condition subsequent steps
- **EmbodiedGPT** [![arXiv 2305.15021](https://img.shields.io/badge/arXiv-2305.15021-b31b1b.svg)](https://arxiv.org/abs/2305.15021)  
  *2023-05 · Preprint* — **Modalities:** Image/screen; Language; Proprioception — **Capabilities:** Plan/reason; Use tools/control — **Temporal:** Long-horizon — **Participants:** Single agent  
  **Agent loop:** Embodied reasoning selects an action; new visual and state observations update subsequent plans

<p align="right"><a href="#top">Back to top</a></p>

### 3.6 Physical Robotics and Multi-Robot Systems

The primary action changes the physical world or coordinates physical robots. **Robot-use agents** include systems that call robot APIs, generate control programs, select semantic action units, or orchestrate learned policies, with observation and verification closing the loop. Language-conditioned policies without a separately evidenced agent loop remain in the model section.

**Robot-use reading path:**

| What you need | Canonical location | Examples |
| --- | --- | --- |
| Concepts and integration perspectives | [2.2 Surveys and perspectives](#22-embodied-agents-and-world-model-based-planning) | Robot-Use Agents; PAPAV; robot autonomy surveys |
| Runtime task execution | This section | Show-Harness; OpenETA; Thea; Pigey; RoboClaw |
| Policies, memory, and failure diagnosis | [4.2 Policies](#42-action-models-and-generalist-policies), [4.3 Components](#43-spatial-memory-and-tool-use-models-and-components) | RoboTTT; Mimir; AHA; Code-as-Monitor |
| Code, orchestration, and learning algorithms | [5.1 Tool use](#51-tool-use-workflow-and-program-synthesis), [5.2 Self-improvement](#52-agentic-learning-and-self-improvement), [5.3 World models](#53-world-models-and-model-based-planning), [5.4 Coordination](#54-multi-agent-and-conversational-coordination) | ReKep; Harness VLA; ASPIRE; ENPIRE; VLAW; EMOS |
| Tasks, data, and evaluation | [6.6 Robotics evaluation](#66-physical-robotics-and-multi-robot-systems), [7.4 Evaluation tooling](#74-evaluation-tooling) | CaP-X; RoboDojo; RoboCerebra; Inspect Robots |
| Robot interfaces and reusable procedures | [7.3 Infrastructure](#73-embodied-ai-and-robotics-infrastructure), [8.2 Skill packages](#82-curated-skill-collections) | ROSA; ROS MCP Server; MoveIt 2; ros-skill; Real2Gym |

**Reading the evidence.** Distinguish the action interface (joint commands, end-effector targets, code, or policy/skill calls), the returned observation, and the verifier. Physical trials, simulation results, and selected demonstrations provide different evidence. A simulator paused between model calls does not establish real-time control. Research code, trained weights, hardware adapters, and reproducible task setup are separate release claims.

Coverage draws on [Awesome Robot Use Agent](https://github.com/kairunwen/Awesome-Robot-Use-Agent); see the [integration notes](docs/robot-use-integration.md) for canonical placements and demo handling.

- **Show-Harness: Just a VLM Agent Can Play Robots** [![arXiv 2609.10522](https://img.shields.io/badge/arXiv-2609.10522-b31b1b.svg)](https://arxiv.org/abs/2609.10522) [![Project](https://img.shields.io/badge/Project-Page-2563eb.svg)](https://showlab.github.io/Show-Harness/) [![Code](https://img.shields.io/badge/Code-GitHub-16a34a.svg?logo=github)](https://github.com/showlab/Show-Harness) [![Dataset](https://img.shields.io/badge/Dataset-Data-f59e0b.svg)](https://huggingface.co/datasets/showlab/Show-Harness-Data) [![Models](https://img.shields.io/badge/Models-Weights-7c3aed.svg)](https://huggingface.co/showlab/Show-Harness-VLMs)  
  *2026-09 · Preprint* — **Modalities:** Language; Multi-view images; Proprioception — **Capabilities:** Perceive/retrieve; Plan/reason; Use tools/control; Verify/reflect — **Temporal:** Long-horizon — **Participants:** Single agent  
  **Agent loop:** After an interpreted action unit moves the robot, new camera observations and action history inform the next unit; optional planning and recovery plugins revise execution. Includes real-robot and simulator evaluations and GUMI observation–action demonstrations
- **SAIN: Structure-Aware Interactive Navigation with Active Dialogue Grounding for Mobile Robot** [![arXiv 2608.09196](https://img.shields.io/badge/arXiv-2608.09196-b31b1b.svg)](https://arxiv.org/abs/2608.09196) [![Project](https://img.shields.io/badge/Project-Page-2563eb.svg)](https://zorattc.github.io/SAIN/)  
  *2026-08 · Preprint* — **Modalities:** Language; Image/screen; 3D/depth; Structured data — **Capabilities:** Converse; Perceive/retrieve; Plan/reason; Use tools/control; Remember — **Temporal:** Long-horizon; Multi-turn — **Participants:** Human-agent  
  **Agent loop:** Ambiguous observations trigger a targeted question; the answer is compiled into persistent corridor, object, and graph memory that changes frontier ranking and later approach actions
- **ETA / OpenETA: A New Agentic Paradigm for Embodied Tasks** [![arXiv 2608.03924](https://img.shields.io/badge/arXiv-2608.03924-b31b1b.svg)](https://arxiv.org/abs/2608.03924) [![Project](https://img.shields.io/badge/Project-Page-2563eb.svg)](https://openmoss.ai/OpenETA/) [![Code](https://img.shields.io/badge/Code-GitHub-16a34a.svg?logo=github)](https://github.com/OpenMOSS/OpenETA)  
  *2026-08 · Preprint* — **Modalities:** Language; Images; Robot state — **Capabilities:** Perceive/retrieve; Plan/reason; Use tools/control; Verify/reflect — **Temporal:** Long-horizon — **Participants:** Single agent  
  **Agent loop:** A planner issues one tool call; execution returns a result and a fresh observation, which change the next plan, tool choice, or recovery step. OpenETA supplies the runtime and simulation/real-robot interfaces
- **Thea: Towards the Harness of Embodied Agents** [![arXiv 2608.11246](https://img.shields.io/badge/arXiv-2608.11246-b31b1b.svg)](https://arxiv.org/abs/2608.11246) [![Project](https://img.shields.io/badge/Project-Page-2563eb.svg)](https://eit-hai.github.io/thea/) [![Code](https://img.shields.io/badge/Code-GitHub-16a34a.svg?logo=github)](https://github.com/EIT-HAI/Thea)  
  *2026-08 · Preprint* — **Modalities:** Language; Images; 3D scene state — **Capabilities:** Perceive/retrieve; Plan/reason; Use tools/control; Verify/reflect — **Temporal:** Long-horizon — **Participants:** Single agent  
  **Agent loop:** Tool execution updates a persistent scene graph; termination checks, success judgments, and failure diagnoses become exit results that determine the next tool call. The paper reports long-horizon physical tasks
- **RoboHarness: Memory-Driven Orchestration of Heterogeneous Robot Policies for Long-Horizon Planning** [![arXiv 2607.18060](https://img.shields.io/badge/arXiv-2607.18060-b31b1b.svg)](https://arxiv.org/abs/2607.18060) [![Project](https://img.shields.io/badge/Project-Page-2563eb.svg)](https://www.robo-harness.com/)  
  *2026-07 · Preprint* — **Modalities:** Language; Image/screen; Proprioception; Structured data — **Capabilities:** Plan/reason; Use tools/control; Remember; Verify/reflect; Learn/adapt — **Temporal:** Long-horizon; Continual — **Participants:** Single agent  
  **Agent loop:** Online execution evidence updates memory of each policy's capabilities, while routing and handoff-state bridges change the next selected policy and physical action
- **PhyAgentOS: A Self-Evolving Operating System for Embodied Agents with Decoupled Cognitive Planning and Physical Execution** [![arXiv 2607.16636](https://img.shields.io/badge/arXiv-2607.16636-b31b1b.svg)](https://arxiv.org/abs/2607.16636) [![Project](https://img.shields.io/badge/Project-Page-2563eb.svg)](https://phy-agent-os.net) [![Code](https://img.shields.io/badge/Code-GitHub-16a34a.svg?logo=github)](https://github.com/PhyAgentOS/PhyAgentOS-core)  
  *2026-07 · Preprint* — **Modalities:** Language; Image/screen; Proprioception; Structured data — **Capabilities:** Plan/reason; Use tools/control; Remember; Verify/reflect; Learn/adapt — **Temporal:** Long-horizon; Continual — **Participants:** Single agent  
  **Agent loop:** A session verifier converts execution evidence into success, failure, or replan decisions that gate the next session; verified outcomes then update epistemic memory
- **Pigey: Addressing the Orchestration Gap in Generalist Robots via Physical Agency** [![arXiv 2607.21725](https://img.shields.io/badge/arXiv-2607.21725-b31b1b.svg)](https://arxiv.org/abs/2607.21725) [![Project](https://img.shields.io/badge/Project-Page-2563eb.svg)](https://lianegalanti.github.io/Pigey/) [![Code](https://img.shields.io/badge/Code-GitHub-16a34a.svg?logo=github)](https://github.com/lianegalanti/Pigey)  
  *2026-07 · Preprint* — **Modalities:** Language; Images; Robot state — **Capabilities:** Perceive/retrieve; Plan/reason; Use tools/control; Verify/reflect — **Temporal:** Long-horizon — **Participants:** Single agent  
  **Agent loop:** The orchestrator invokes frozen VLA policies or parameterized skills, checks the resulting observations against the subgoal, and changes the next skill or recovery action. Evaluated in simulation and real manipulation
- **OmniAct** [![arXiv 2606.27251](https://img.shields.io/badge/arXiv-2606.27251-b31b1b.svg)](https://arxiv.org/abs/2606.27251)  
  *2026-06 · Preprint* — **Modalities:** Image/screen; Language; Structured data; Proprioception — **Capabilities:** Plan/reason; Use tools/control; Remember; Verify/reflect — **Temporal:** Long-horizon; Continual — **Participants:** Human-agent  
  **Agent loop:** An asynchronous visual preemption engine detects physical failures during cyber-physical execution and triggers recovery or replanning
- **HoloAgent-0** [![arXiv 2606.23565](https://img.shields.io/badge/arXiv-2606.23565-b31b1b.svg)](https://arxiv.org/abs/2606.23565)  
  *2026-06 · Preprint* — **Modalities:** Language; Image/screen; 3D/depth; Proprioception; Structured data — **Capabilities:** Plan/reason; Use tools/control; Remember; Verify/reflect; Coordinate — **Temporal:** Long-horizon — **Participants:** Single agent; Agent team  
  **Agent loop:** An embodied AgentOS executes skill graphs and monitors robot feedback; failures or ambiguity trigger clarification or replanning that changes later navigation, manipulation, or cross-robot actions
- **VAP-TAMP: Robot Planning and Situation Handling with Active Perception** [![arXiv 2604.26988](https://img.shields.io/badge/arXiv-2604.26988-b31b1b.svg)](https://arxiv.org/abs/2604.26988) [![Project](https://img.shields.io/badge/Project-Page-2563eb.svg)](https://vap-tamp.github.io/vap-tamp/)  
  *2026-04 · Preprint* — **Modalities:** Language; Images; 3D scene state — **Capabilities:** Perceive/retrieve; Plan/reason; Use tools/control; Verify/reflect — **Temporal:** Long-horizon — **Participants:** Single agent  
  **Agent loop:** Selected viewpoints reveal execution-time disruptions; situation assessment updates the scene graph and triggers revised task-and-motion plans. Evaluated in simulation and on a mobile manipulation platform
- **A Multimodal Framework for Human-Multi-Agent Interaction** [![arXiv 2603.23271](https://img.shields.io/badge/arXiv-2603.23271-b31b1b.svg)](https://arxiv.org/abs/2603.23271)  
  *2026-03 · Preprint* — **Modalities:** Speech; Image/screen; Proprioception — **Capabilities:** Converse; Plan/reason; Use tools/control; Coordinate — **Temporal:** Real-time; Multi-turn — **Participants:** Agent team + human  
  **Agent loop:** Two humanoid agents combine multimodal observations with LLM planning while centralized turn-taking regulates later speech and movement
- **RoboClaw: An Agentic Framework for Scalable Long-Horizon Robotic Tasks** [![arXiv 2603.11558](https://img.shields.io/badge/arXiv-2603.11558-b31b1b.svg)](https://arxiv.org/abs/2603.11558) [![Project](https://img.shields.io/badge/Project-Page-2563eb.svg)](https://roboclaw-agibot.github.io/) [![Code](https://img.shields.io/badge/Code-GitHub-16a34a.svg?logo=github)](https://github.com/RoboClaw-Robotics/RoboClaw)  
  *2026-03 · Preprint* — **Modalities:** Language; Images; Robot state — **Capabilities:** Plan/reason; Use tools/control; Verify/reflect; Learn/adapt — **Temporal:** Long-horizon — **Participants:** Single agent  
  **Agent loop:** A VLM selects learned manipulation primitives; observed outcomes guide subsequent subgoals and recovery. Forward/inverse action pairs also support self-resetting data collection and policy refinement on real robots
- **InteractGen** [![arXiv 2512.00797](https://img.shields.io/badge/arXiv-2512.00797-b31b1b.svg)](https://arxiv.org/abs/2512.00797)  
  *2025-11 · Preprint* — **Modalities:** Image/screen; Language; Proprioception; Structured data — **Capabilities:** Perceive/retrieve; Plan/reason; Use tools/control; Verify/reflect; Coordinate — **Temporal:** Long-horizon — **Participants:** Agent team + human  
  **Agent loop:** Continuous perception and execution verification expose failures; reflection and dynamic human delegation change subsequent team plans
- **VITA-E** [![arXiv 2510.21817](https://img.shields.io/badge/arXiv-2510.21817-b31b1b.svg)](https://arxiv.org/abs/2510.21817)  
  *2025-10 · Preprint* — **Modalities:** Image/screen; Speech; Language; Proprioception — **Capabilities:** Converse; Perceive/retrieve; Use tools/control — **Temporal:** Streaming; Real-time; Full-duplex — **Participants:** Human-agent  
  **Agent loop:** Ongoing audiovisual observations and spoken interruptions switch control between active and standby VLA instances, changing subsequent speech and physical action in near real time
- **PhysiAgent** [![arXiv 2509.24524](https://img.shields.io/badge/arXiv-2509.24524-b31b1b.svg)](https://arxiv.org/abs/2509.24524)  
  *2025-09 · Preprint* — **Modalities:** Image/screen; Language; Proprioception; Structured data — **Capabilities:** Perceive/retrieve; Plan/reason; Use tools/control; Remember; Verify/reflect; Learn/adapt — **Temporal:** Long-horizon; Continual — **Participants:** Single agent  
  **Agent loop:** Real-time VLA proficiency and execution feedback enter monitoring, memory, and self-reflection modules that reorganize later component, tool, and action decisions
- **Being-0** [![arXiv 2503.12533](https://img.shields.io/badge/arXiv-2503.12533-b31b1b.svg)](https://arxiv.org/abs/2503.12533) [![Project](https://img.shields.io/badge/Project-Page-2563eb.svg)](https://research.beingbeyond.com/being-0)  
  *2025-03 · Preprint* — **Modalities:** Image/screen; Language; Proprioception — **Capabilities:** Perceive/retrieve; Plan/reason; Use tools/control — **Temporal:** Real-time; Long-horizon — **Participants:** Single agent  
  **Agent loop:** Active vision and robot state pass through a connector that translates and updates high-level plans while coordinating later locomotion and dexterous-manipulation skills
- **Hi Robot: Open-Ended Instruction Following with Hierarchical Vision-Language-Action Models** [![arXiv 2502.19417](https://img.shields.io/badge/arXiv-2502.19417-b31b1b.svg)](https://arxiv.org/abs/2502.19417) [![Project](https://img.shields.io/badge/Project-Page-2563eb.svg)](https://www.physicalintelligence.company/research/hirobot)  
  *2025-02 · ICML 2025* — **Modalities:** Language; Images; Robot state — **Capabilities:** Perceive/retrieve; Plan/reason; Use tools/control; Verify/reflect — **Temporal:** Long-horizon — **Participants:** Human-agent  
  **Agent loop:** A high-level VLM combines the changed scene and situated user corrections with the task request to select a new subtask for the low-level VLA; demonstrated across three physical robot platforms
- **AutoRT** [![arXiv 2401.12963](https://img.shields.io/badge/arXiv-2401.12963-b31b1b.svg)](https://arxiv.org/abs/2401.12963) [![Project](https://img.shields.io/badge/Project-Page-2563eb.svg)](https://deepmind.google/research/publications/48151/)  
  *2024-01 · Preprint* — **Modalities:** Image/screen; Language; Proprioception — **Capabilities:** Perceive/retrieve; Plan/reason; Verify/reflect; Coordinate — **Temporal:** Continual — **Participants:** Agent team  
  **Agent loop:** VLM scene descriptions inform task proposals; safety checks and execution outcomes gate subsequent collection
- **OK-Robot** [![arXiv 2401.12202](https://img.shields.io/badge/arXiv-2401.12202-b31b1b.svg)](https://arxiv.org/abs/2401.12202) [![Project](https://img.shields.io/badge/Project-Page-2563eb.svg)](https://ok-robot.github.io/)  
  *2024-01 · Preprint* — **Modalities:** Image/screen; 3D/depth; Language — **Capabilities:** Plan/reason; Use tools/control; Remember — **Temporal:** Long-horizon — **Participants:** Single agent  
  **Agent loop:** Queries scene memory, executes navigation or grasping, and uses changed physical state for the next primitive
- **VoxPoser** [![arXiv 2307.05973](https://img.shields.io/badge/arXiv-2307.05973-b31b1b.svg)](https://arxiv.org/abs/2307.05973) [![Project](https://img.shields.io/badge/Project-Page-2563eb.svg)](https://voxposer.github.io/) [![Code](https://img.shields.io/badge/Code-GitHub-16a34a.svg?logo=github)](https://github.com/huangwl18/VoxPoser)  
  *2023-07 · CoRL 2023* — **Modalities:** Language; Image/screen; 3D/depth — **Capabilities:** Plan/reason; Use tools/control; Simulate; Learn/adapt — **Temporal:** Stepwise — **Participants:** Single agent  
  **Agent loop:** Composed 3D value maps drive model-based planning; new observations and online dynamics experience update trajectories under perturbations
- **RoCo** [![arXiv 2307.04738](https://img.shields.io/badge/arXiv-2307.04738-b31b1b.svg)](https://arxiv.org/abs/2307.04738) [![Project](https://img.shields.io/badge/Project-Page-2563eb.svg)](https://project-roco.github.io/) [![Code](https://img.shields.io/badge/Code-GitHub-16a34a.svg?logo=github)](https://github.com/MandiZhao/robot-collab)  
  *2023-07 · Preprint* — **Modalities:** Language; Structured data — **Capabilities:** Plan/reason; Verify/reflect; Coordinate — **Temporal:** Long-horizon — **Participants:** Agent team + human  
  **Agent loop:** Robot agents debate a plan, receive collision-check or human feedback, and revise later paths. The same work includes RoCoBench, a six-task MuJoCo collaboration benchmark; physical demonstrations are separate evidence
- **DoReMi: Grounding Language Model by Detecting and Recovering from Plan-Execution Misalignment** [![arXiv 2307.00329](https://img.shields.io/badge/arXiv-2307.00329-b31b1b.svg)](https://arxiv.org/abs/2307.00329) [![Project](https://img.shields.io/badge/Project-Page-2563eb.svg)](https://sites.google.com/view/doremi-paper)  
  *2023-07 · IROS 2024* — **Modalities:** Language; Images; Robot state — **Capabilities:** Perceive/retrieve; Plan/reason; Use tools/control; Verify/reflect — **Temporal:** Long-horizon — **Participants:** Single agent  
  **Agent loop:** An LLM supplies plans and execution constraints; a VLM observes ongoing execution and detects violations, triggering recovery and changing the following plan or action
- **TidyBot** [![arXiv 2305.05658](https://img.shields.io/badge/arXiv-2305.05658-b31b1b.svg)](https://arxiv.org/abs/2305.05658) [![Project](https://img.shields.io/badge/Project-Page-2563eb.svg)](https://tidybot.cs.princeton.edu/)  
  *2023-05 · IROS 2023* — **Modalities:** Image/screen; Language; Structured data; Proprioception — **Capabilities:** Plan/reason; Use tools/control; Remember; Learn/adapt — **Temporal:** Long-horizon; Continual — **Participants:** Human-agent  
  **Agent loop:** Prior user examples update a reusable preference summary; perception and changed scene state guide later pick-and-place decisions
- **Code as Policies** [![arXiv 2209.07753](https://img.shields.io/badge/arXiv-2209.07753-b31b1b.svg)](https://arxiv.org/abs/2209.07753) [![Project](https://img.shields.io/badge/Project-Page-2563eb.svg)](https://code-as-policies.github.io/) [![Code](https://img.shields.io/badge/Code-GitHub-16a34a.svg?logo=github)](https://github.com/google-research/google-research/tree/master/code_as_policies)  
  *2022-09 · ICRA 2023* — **Modalities:** Language; Image/screen; Structured data — **Capabilities:** Plan/reason; Use tools/control — **Temporal:** Long-horizon — **Participants:** Single agent  
  **Agent loop:** Executed code queries perception and control APIs; returned state drives later branches and actions
- **Inner Monologue** [![arXiv 2207.05608](https://img.shields.io/badge/arXiv-2207.05608-b31b1b.svg)](https://arxiv.org/abs/2207.05608) [![Project](https://img.shields.io/badge/Project-Page-2563eb.svg)](https://innermonologue.github.io/)  
  *2022-07 · CoRL 2022* — **Modalities:** Language; Image/screen; Structured data — **Capabilities:** Plan/reason; Use tools/control; Verify/reflect — **Temporal:** Long-horizon — **Participants:** Human-agent  
  **Agent loop:** Scene, success, failure, and human observations are inserted back into context before replanning
- **SayCan** [![arXiv 2204.01691](https://img.shields.io/badge/arXiv-2204.01691-b31b1b.svg)](https://arxiv.org/abs/2204.01691) [![Project](https://img.shields.io/badge/Project-Page-2563eb.svg)](https://say-can.github.io/) [![Code](https://img.shields.io/badge/Code-GitHub-16a34a.svg?logo=github)](https://github.com/google-research/google-research/tree/master/saycan)  
  *2022-04 · CoRL 2022* — **Modalities:** Language; Structured data — **Capabilities:** Plan/reason; Use tools/control — **Temporal:** Long-horizon — **Participants:** Single agent  
  **Agent loop:** Executes a feasible skill, re-evaluates grounded affordances in the changed environment, then selects the next skill
- **Multimodal Feedback for Active Robot-Object Interaction** [![arXiv 1809.03216](https://img.shields.io/badge/arXiv-1809.03216-b31b1b.svg)](https://arxiv.org/abs/1809.03216)  
  *2018-09 · IROS 2018 Workshop* — **Modalities:** 3D/depth; Tactile/force; Proprioception — **Capabilities:** Perceive/retrieve; Plan/reason; Use tools/control — **Temporal:** Stepwise — **Participants:** Single agent  
  **Agent loop:** RGB-D and SLAM observations revise approach and grasp configuration; subsequent hand-contact feedback updates the final manipulation actions

## 4. Agent Models, Policies, and Components

These works enable multimodal agents but are not presented as end-to-end systems. The **Canonical placement** line records why each work remains at the model, policy, or component layer.

**In this section:** [Omni-modal and interactive models](#41-omni-modal-and-interactive-models) · [Action models and generalist policies](#42-action-models-and-generalist-policies) · [Spatial, memory, and tool-use models and components](#43-spatial-memory-and-tool-use-models-and-components)

### 4.1 Omni-Modal and Interactive Models

- **Multimodal Duplex Interaction Agent (Gander)** <a id="gander"></a> [![arXiv 2609.08977](https://img.shields.io/badge/arXiv-2609.08977-b31b1b.svg)](https://arxiv.org/abs/2609.08977) [![Project](https://img.shields.io/badge/Project-Page-2563eb.svg)](https://omni-interaction-gander.github.io/Omni-Interaction-Agent/) [![Code](https://img.shields.io/badge/Code-GitHub-16a34a.svg?logo=github)](https://github.com/Omni-Interaction-Gander/Omni-Interaction-Agent)  
  *2026-09 · Technical report* — **Artifact:** Native duplex model + orchestration architecture — **Role:** Streaming Thinker-Talker interaction with an asynchronous reasoning and tool-use partner — **Modalities / channels:** Text; Images/video; Streaming speech; Tool messages  
  **Canonical placement:** The principal artifact is Gander's interactive model architecture; evaluated tool-assisted tasks do not establish unrestricted long-horizon deployment
- **JoyAI-Talker: Full-Duplex Speech Interactive Large Model Built for Empathetic Voice Agents** [![arXiv 2608.01119](https://img.shields.io/badge/arXiv-2608.01119-b31b1b.svg)](https://arxiv.org/abs/2608.01119)  
  *2026-08 · Preprint* — **Artifact:** Model / interaction architecture — **Role:** Full-duplex spoken dialogue with empathetic speech-text reasoning and learned turn control — **Modalities / channels:** Speech; Non-speech audio; Language  
  **Canonical placement:** Turn taking and response generation are learned inside the model architecture; no separately evaluated grounded external-action runtime is contributed
- **MOSS-VL Technical Report** <a id="moss-vl"></a> [![arXiv 2608.15045](https://img.shields.io/badge/arXiv-2608.15045-b31b1b.svg)](https://arxiv.org/abs/2608.15045) [![Code](https://img.shields.io/badge/Code-GitHub-16a34a.svg?logo=github)](https://github.com/OpenMOSS/MOSS-VL)  
  *2026-08 · Technical report* — **Artifact:** Streaming video-language model — **Role:** Continues ingesting video during generation and learns when to speak or remain silent — **Modalities / channels:** Video; Language; Streaming temporal context  
  **Canonical placement:** The report evaluates the real-time model and training recipe; responsiveness alone is not evidence of a complete task-execution agent
- **DyaPlex** [![arXiv 2606.03874](https://img.shields.io/badge/arXiv-2606.03874-b31b1b.svg)](https://arxiv.org/abs/2606.03874)  
  *2026-06 · Preprint* — **Artifact:** Model — **Role:** Streaming full-duplex speech-motion generation for dyadic interaction — **Modalities / channels:** Speech; Human and agent motion  
  **Canonical placement:** Reciprocal streaming behavior is learned inside the model; a separately evaluated planning or tool-use layer is not contributed
- **StepAudio 2.5** [![arXiv 2605.23463](https://img.shields.io/badge/arXiv-2605.23463-b31b1b.svg)](https://arxiv.org/abs/2605.23463)  
  *2026-05 · Technical report* — **Artifact:** Model — **Role:** Unified audio-language foundation for recognition, synthesis, and real-time spoken interaction — **Modalities / channels:** Speech; Non-speech audio; Language  
  **Canonical placement:** The report contributes a shared backbone and task-specific operating modes; it does not evaluate grounded action in an external environment
- **MiniCPM-o 4.5** [![arXiv 2604.27393](https://img.shields.io/badge/arXiv-2604.27393-b31b1b.svg)](https://arxiv.org/abs/2604.27393) [![Code](https://img.shields.io/badge/Code-GitHub-16a34a.svg?logo=github)](https://github.com/OpenBMB/MiniCPM-o)  
  *2026-04 · Preprint* — **Artifact:** Model — **Role:** Edge-oriented full-duplex omni-modal model — **Modalities / channels:** Streaming audio; Video; Language; Speech  
  **Canonical placement:** Deployments may build agents around it, but the contribution is the model
- **Unit-Based Agent for Semi-Cascaded Full-Duplex Dialogue Systems** [![arXiv 2601.20230](https://img.shields.io/badge/arXiv-2601.20230-b31b1b.svg)](https://arxiv.org/abs/2601.20230) [![Code](https://img.shields.io/badge/Code-GitHub-16a34a.svg?logo=github)](https://github.com/yu-haoyuan/fd-badcat)  
  *2026-01 · ICASSP 2026 Grand Challenge* — **Artifact:** Dialogue architecture / policy — **Role:** Unit-level listening, waiting, interruption, and speaking decisions — **Modalities / channels:** Speech; Language units derived from the same speech stream  
  **Canonical placement:** The loop is agentic, but a transcript or unit sequence derived from speech is not an independent second information modality
- **UI2Code^N: UI-to-Code Generation as Interactive Visual Optimization** [![arXiv 2511.08195](https://img.shields.io/badge/arXiv-2511.08195-b31b1b.svg)](https://arxiv.org/abs/2511.08195) [![Code](https://img.shields.io/badge/Code-GitHub-16a34a.svg?logo=github)](https://github.com/zai-org/UI2Code_N)  
  *2025-11 · Preprint* — **Artifact:** Model + reinforcement-learning method — **Role:** Closed-loop UI drafting, polishing, and editing through code execution and rendered feedback — **Modalities / channels:** Language; UI screenshots; Source code; Rendered interfaces  
  **Canonical placement:** The primary artifact is an open-source 9B model and Relative Visual Policy Optimization recipe; execution-feedback iteration is the inference and training protocol rather than a general-purpose agent runtime
- **Qwen3-Omni** [![arXiv 2509.17765](https://img.shields.io/badge/arXiv-2509.17765-b31b1b.svg)](https://arxiv.org/abs/2509.17765) [![Code](https://img.shields.io/badge/Code-GitHub-16a34a.svg?logo=github)](https://github.com/QwenLM/Qwen3-Omni)  
  *2025-09 · Technical report* — **Artifact:** Model — **Role:** Unified understanding and generation across text, image, audio, video, and streaming speech — **Modalities / channels:** Language; Image; Video; Audio; Speech  
  **Canonical placement:** Wide modality coverage and low-latency speech generation are model capabilities; no external action-feedback loop is evaluated as the primary artifact
- **Qwen2.5-Omni** [![arXiv 2503.20215](https://img.shields.io/badge/arXiv-2503.20215-b31b1b.svg)](https://arxiv.org/abs/2503.20215) [![Code](https://img.shields.io/badge/Code-GitHub-16a34a.svg?logo=github)](https://github.com/QwenLM/Qwen2.5-Omni)  
  *2025-03 · Preprint* — **Artifact:** Model — **Role:** Unified omni-modal foundation model — **Modalities / channels:** Language; Image; Video; Audio; Speech  
  **Canonical placement:** Broad modality support does not by itself create grounded action or an agent loop
- **Moshi** [![arXiv 2410.00037](https://img.shields.io/badge/arXiv-2410.00037-b31b1b.svg)](https://arxiv.org/abs/2410.00037) [![Code](https://img.shields.io/badge/Code-GitHub-16a34a.svg?logo=github)](https://github.com/kyutai-labs/moshi)  
  *2024-10 · Preprint* — **Artifact:** Model — **Role:** Full-duplex spoken-dialogue model — **Modalities / channels:** Speech; Language streams  
  **Canonical placement:** Full-duplex generation alone does not demonstrate external action or feedback-driven planning
- **VITA** [![arXiv 2408.05211](https://img.shields.io/badge/arXiv-2408.05211-b31b1b.svg)](https://arxiv.org/abs/2408.05211) [![Code](https://img.shields.io/badge/Code-GitHub-16a34a.svg?logo=github)](https://github.com/VITA-MLLM/VITA)  
  *2024-08 · Preprint* — **Artifact:** Model — **Role:** Real-time vision-speech interaction model — **Modalities / channels:** Video; Speech; Language  
  **Canonical placement:** Model-level interaction capability is not itself tool or environment agency

<a id="42-vision-language-action-and-generalist-policies"></a>

### 4.2 Action Models and Generalist Policies

This branch includes GUI action models, robot VLAs, and policies that span digital and physical tasks. The interface and evaluated setting are recorded per entry; action outputs do not count as an additional input modality.

- **BlueLM-GUI Technical Report: A Real-Device-Centric Flywheel for Self-Improving Mobile GUI Agents** <a id="bluelm-gui"></a> [![arXiv 2609.12394](https://img.shields.io/badge/arXiv-2609.12394-b31b1b.svg)](https://arxiv.org/abs/2609.12394)  
  *2026-09 · Technical report* — **Artifact:** Native mobile GUI model + training pipeline — **Role:** Reuses successful and failed real-device trajectories through continual pretraining, supervised learning, and online RL — **Modalities / channels:** Language; Phone screenshots; GUI actions; Execution traces  
  **Canonical placement:** The primary contribution is the model and real-device training flywheel; MobileGUI-VBench stays with this report
- **Qwen-CUA: Native Computer Use for (almost) Everything** [![arXiv 2608.02352](https://img.shields.io/badge/arXiv-2608.02352-b31b1b.svg)](https://arxiv.org/abs/2608.02352)  
  *2026-08 · Technical report* — **Artifact:** Model / policy + training infrastructure — **Role:** Native screenshot-only computer-use policy across browser, mobile, and desktop tasks — **Modalities / channels:** Screenshots; Language; Visual history; Keyboard and mouse actions  
  **Canonical placement:** The principal result is a foundation computer-use model, scaling recipe, and verifiable training corpus rather than a separately specified application runtime
- **WNM-3D: A World Navigation Model with 3D Scene Conditioning for Closed-Loop VLN** [![arXiv 2608.07267](https://img.shields.io/badge/arXiv-2608.07267-b31b1b.svg)](https://arxiv.org/abs/2608.07267)  
  *2026-08 · Preprint* — **Artifact:** World-action model / policy — **Role:** Generates future views and navigation actions from 3D-conditioned observation histories — **Modalities / channels:** RGB histories; 3D scene tokens; Language; Navigation actions  
  **Canonical placement:** The principal contribution is a generative navigation model and learned policy used in a closed-loop controller, not a separately specified general agent runtime
- **Capek 0.5: An Execution-Centric Vision-Language Model for Embodied Intelligence** [![arXiv 2608.06756](https://img.shields.io/badge/arXiv-2608.06756-b31b1b.svg)](https://arxiv.org/abs/2608.06756)  
  *2026-08 · Preprint* — **Artifact:** Model / policy — **Role:** Execution-centric spatial, temporal, action-guidance, and state-verification reasoning for embodied tasks — **Modalities / channels:** Images; Language; Robot state and actions  
  **Canonical placement:** Although evaluated in closed-loop tasks, the primary artifact is a unified model, capability taxonomy, checkpoint-merging strategy, and reinforcement-learning recipe
- **RoboTTT: Context Scaling for Robot Policies** [![arXiv 2607.15275](https://img.shields.io/badge/arXiv-2607.15275-b31b1b.svg)](https://arxiv.org/abs/2607.15275) [![Project](https://img.shields.io/badge/Project-Page-2563eb.svg)](https://research.nvidia.com/labs/gear/robottt/)  
  *2026-07 · Preprint* — **Artifact:** Policy / model — **Role:** Scales visuomotor history with test-time-training fast weights for in-context imitation and adaptation — **Modalities / channels:** Images; Human demonstration video; Proprioception  
  **Canonical placement:** The evaluated artifact is a history-conditioned robot policy and training recipe, rather than a separate task-orchestration runtime
- **Qwen-UI-Agent Technical Report: Toward Next-Generation Real-World Centric Foundation GUI Agents** <a id="qwen-ui-agent"></a> [![arXiv 2607.28227](https://img.shields.io/badge/arXiv-2607.28227-b31b1b.svg)](https://arxiv.org/abs/2607.28227)  
  *2026-07 · Technical report* — **Artifact:** Foundation GUI policy + training infrastructure — **Role:** Hybrid GUI/CLI actions across mobile, desktop, browser, and search tasks with long-horizon online RL — **Modalities / channels:** Language; Screenshots; Application state; GUI/CLI outputs  
  **Canonical placement:** This is a distinct report from Qwen-CUA (2608.02352), with a unified hybrid action space and real-device training; shared lineage does not make the papers interchangeable
- **π0.7: A Steerable Model with Emergent Capabilities** <a id="pi-07"></a> [![Paper](https://img.shields.io/badge/Paper-Link-b31b1b.svg)](https://www.pi.website/download/pi07.pdf) [![Project](https://img.shields.io/badge/Project-Page-2563eb.svg)](https://www.pi.website/blog/pi07)  
  *2026-04 · Technical report* — **Artifact:** Generalist robot policy — **Role:** Steers manipulation with language, visual subgoals, strategy and quality metadata, and joint or end-effector control context — **Modalities / channels:** Images; Language; Proprioception; Visual subgoals  
  **Canonical placement:** The research release evaluates a reusable VLA and author-reported compositional generalization; language coaching and autonomous execution are distinct settings. A report link does not imply released weights
- **Mobile-Agent-v3.5: Multi-platform Fundamental GUI Agents (GUI-Owl-1.5)** <a id="mobile-agent-v35"></a> [![arXiv 2602.16855](https://img.shields.io/badge/arXiv-2602.16855-b31b1b.svg)](https://arxiv.org/abs/2602.16855) [![Code](https://img.shields.io/badge/Code-GitHub-16a34a.svg?logo=github)](https://github.com/X-PLUG/MobileAgent/tree/main/Mobile-Agent-v3.5)  
  *2026-02 · Technical report* — **Artifact:** GUI-Owl-1.5 model family — **Role:** Multi-platform GUI grounding, memory, tool/MCP use, and environment RL with instruct/thinking variants — **Modalities / channels:** Language; Screenshots; GUI actions; Tool results  
  **Canonical placement:** The model and training report extends the Mobile-Agent family; retain the original runtime paper in Section 3.4
- **OmniActor** [![arXiv 2509.02322](https://img.shields.io/badge/arXiv-2509.02322-b31b1b.svg)](https://arxiv.org/abs/2509.02322)  
  *2025-09 · ICLR 2026* — **Artifact:** Policy / model — **Role:** Generalist action model for interleaved 2D GUI and 3D embodied tasks — **Modalities / channels:** Images; Language; GUI actions; Robot actions  
  **Canonical placement:** The primary contribution is a unified action model and training design rather than a system-level runtime architecture
- **UI-TARS-2 Technical Report: Advancing GUI Agent with Multi-Turn Reinforcement Learning** <a id="ui-tars-2"></a> [![arXiv 2509.02544](https://img.shields.io/badge/arXiv-2509.02544-b31b1b.svg)](https://arxiv.org/abs/2509.02544) [![Code](https://img.shields.io/badge/Code-GitHub-16a34a.svg?logo=github)](https://github.com/bytedance/UI-TARS) [![Project](https://img.shields.io/badge/Project-Page-2563eb.svg)](https://github.com/bytedance/UI-TARS-desktop)  
  *2025-09 · Technical report* — **Artifact:** Native GUI model — **Role:** Multi-turn reinforcement learning and scalable interaction data for GUI and terminal use — **Modalities / channels:** Language; Screenshots; GUI/terminal actions; Execution results  
  **Canonical placement:** The technical report contributes a learned policy and training system; the desktop application is an attached implementation
- **OmniVTLA** [![arXiv 2508.08706](https://img.shields.io/badge/arXiv-2508.08706-b31b1b.svg)](https://arxiv.org/abs/2508.08706)  
  *2025-08 · IEEE RA-L 2026* — **Artifact:** Policy / model + dataset — **Role:** Semantically aligned vision-tactile-language-action manipulation — **Modalities / channels:** Images; Tactile/force; Language; Proprioception; Robot actions  
  **Canonical placement:** The principal contributions are a tactile encoder, the ObjTac dataset, and a reusable VTLA policy rather than a separately evaluated agent runtime
- **OpenCUA: Open Foundations for Computer-Use Agents** <a id="opencua"></a> [![arXiv 2508.09123](https://img.shields.io/badge/arXiv-2508.09123-b31b1b.svg)](https://arxiv.org/abs/2508.09123) [![Project](https://img.shields.io/badge/Project-Page-2563eb.svg)](https://opencua.xlang.ai/) [![Code](https://img.shields.io/badge/Code-GitHub-16a34a.svg?logo=github)](https://github.com/xlang-ai/OpenCUA)  
  *2025-08 · Preprint* — **Artifact:** Open computer-use models + data pipeline — **Role:** Reproducible desktop policy training from human demonstrations and action-grounded reasoning — **Modalities / channels:** Language; Screenshots; Mouse/keyboard actions; Trajectory history  
  **Canonical placement:** AgentNet demonstrations, collection tools, and model training accompany the model contribution rather than becoming duplicate benchmark or engineering entries
- **SmolVLA** [![arXiv 2506.01844](https://img.shields.io/badge/arXiv-2506.01844-b31b1b.svg)](https://arxiv.org/abs/2506.01844) [![Code](https://img.shields.io/badge/Code-GitHub-16a34a.svg?logo=github)](https://github.com/huggingface/lerobot)  
  *2025-06 · Preprint* — **Artifact:** Policy / model — **Role:** Compact, affordable VLA with asynchronous perception, action prediction, and execution — **Modalities / channels:** Images; Language; Proprioception; Robot actions  
  **Canonical placement:** Asynchronous inference improves policy responsiveness, but the evaluated artifact remains a reusable VLA and deployment stack
- **π0.5** [![arXiv 2504.16054](https://img.shields.io/badge/arXiv-2504.16054-b31b1b.svg)](https://arxiv.org/abs/2504.16054) [![Code](https://img.shields.io/badge/Code-GitHub-16a34a.svg?logo=github)](https://github.com/Physical-Intelligence/openpi)  
  *2025-04 · Preprint* — **Artifact:** Policy / model — **Role:** Open-world generalization for long-horizon robot manipulation — **Modalities / channels:** Images; Language; Object detections; Semantic subtasks; Proprioception  
  **Canonical placement:** The evaluated contribution is an end-to-end VLA policy and co-training recipe  
  **Series:** [π0.7](#pi-07) adds multimodal prompt steering and reports new generalization experiments; availability and results must be checked for that release
- **Gemini Robotics** [![arXiv 2503.20020](https://img.shields.io/badge/arXiv-2503.20020-b31b1b.svg)](https://arxiv.org/abs/2503.20020) [![Project](https://img.shields.io/badge/Project-Page-2563eb.svg)](https://deepmind.google/models/gemini-robotics/)  
  *2025-03 · Technical report* — **Artifact:** Model family — **Role:** Generalist VLA control and embodied-reasoning models — **Modalities / channels:** Images; Language; Proprioception; Spatial and temporal state  
  **Canonical placement:** The report's primary contribution is a family of robotics foundation models. The [Gemini Robotics ER 2 overview](https://deepmind.google/models/gemini-robotics/embodied-reasoning/) describes high-level planning, tool use, and success tracking with a connected VLA for motor execution
- **GR00T N1** [![arXiv 2503.14734](https://img.shields.io/badge/arXiv-2503.14734-b31b1b.svg)](https://arxiv.org/abs/2503.14734) [![Code](https://img.shields.io/badge/Code-GitHub-16a34a.svg?logo=github)](https://github.com/NVIDIA/Isaac-GR00T)  
  *2025-03 · Technical report* — **Artifact:** Policy / model — **Role:** Dual-system generalist humanoid VLA — **Modalities / channels:** Images; Language; Human video; Proprioception  
  **Canonical placement:** Real-time motor generation is learned as a reusable foundation policy, not a separately evaluated agent stack  
  **Series update (2026-07):** [GR00T N1.7 GA](https://developer.nvidia.com/blog/develop-humanoid-robot-policies-end-to-end-with-nvidia-isaac-gr00t/) uses a Cosmos-Reason2-2B vision-language backbone and provides data, training, evaluation, and deployment interfaces in the linked repository. The original N1 paper and its results remain a separate version record
- **Magma** [![arXiv 2502.13130](https://img.shields.io/badge/arXiv-2502.13130-b31b1b.svg)](https://arxiv.org/abs/2502.13130) [![Project](https://img.shields.io/badge/Project-Page-2563eb.svg)](https://microsoft.github.io/Magma/) [![Code](https://img.shields.io/badge/Code-GitHub-16a34a.svg?logo=github)](https://github.com/microsoft/Magma)  
  *2025-02 · CVPR 2025* — **Artifact:** Model — **Role:** Foundation model for digital and physical multimodal agent tasks — **Modalities / channels:** Images; Video; Language; UI actions; Robot actions  
  **Canonical placement:** SoM/ToM pretraining produces an action-capable backbone; downstream environments supply the runtime loop
- **π0** [![arXiv 2410.24164](https://img.shields.io/badge/arXiv-2410.24164-b31b1b.svg)](https://arxiv.org/abs/2410.24164) [![Code](https://img.shields.io/badge/Code-GitHub-16a34a.svg?logo=github)](https://github.com/Physical-Intelligence/openpi)  
  *2024-10 · Technical report* — **Artifact:** Policy / model — **Role:** Generalist flow-based robot policy — **Modalities / channels:** Images; Language; Proprioception  
  **Canonical placement:** The primary contribution is an action policy used inside robot systems
- **OpenVLA** [![arXiv 2406.09246](https://img.shields.io/badge/arXiv-2406.09246-b31b1b.svg)](https://arxiv.org/abs/2406.09246) [![Code](https://img.shields.io/badge/Code-GitHub-16a34a.svg?logo=github)](https://github.com/openvla/openvla)  
  *2024-06 · CoRL 2024* — **Artifact:** Policy / model — **Role:** Open vision-language-action backbone — **Modalities / channels:** Images; Language; Robot actions  
  **Canonical placement:** Provides a reusable policy rather than a separately evaluated complete system
- **Octo** [![arXiv 2405.12213](https://img.shields.io/badge/arXiv-2405.12213-b31b1b.svg)](https://arxiv.org/abs/2405.12213) [![Code](https://img.shields.io/badge/Code-GitHub-16a34a.svg?logo=github)](https://github.com/octo-models/octo)  
  *2024-05 · RSS 2024* — **Artifact:** Policy / model — **Role:** Open generalist robot-policy initialization — **Modalities / channels:** Images; Goal images or language; Proprioception  
  **Canonical placement:** The paper evaluates a reusable policy and fine-tuning behavior across robots, not an agent architecture
- **3D-VLA** [![arXiv 2403.09631](https://img.shields.io/badge/arXiv-2403.09631-b31b1b.svg)](https://arxiv.org/abs/2403.09631) [![Code](https://img.shields.io/badge/Code-GitHub-16a34a.svg?logo=github)](https://github.com/UMass-Embodied-AGI/3D-VLA)  
  *2024-03 · ICML 2024* — **Artifact:** Model / world model — **Role:** 3D vision-language-action prediction with generative goal imagination — **Modalities / channels:** RGB; Point clouds; 3D geometry; Language; Robot actions  
  **Canonical placement:** The primary artifact is a generative VLA world model used by downstream embodied agents
- **RT-H** [![arXiv 2403.01823](https://img.shields.io/badge/arXiv-2403.01823-b31b1b.svg)](https://arxiv.org/abs/2403.01823) [![Project](https://img.shields.io/badge/Project-Page-2563eb.svg)](https://rt-hierarchy.github.io/)  
  *2024-03 · RSS 2024* — **Artifact:** Policy / hierarchy — **Role:** Language-mediated action hierarchy with human correction — **Modalities / channels:** Images; Task language; Language motions; Robot actions  
  **Canonical placement:** Human language interventions improve a policy, but the primary contribution is hierarchical policy learning
- **Interactive Agent Foundation Model** [![arXiv 2402.05929](https://img.shields.io/badge/arXiv-2402.05929-b31b1b.svg)](https://arxiv.org/abs/2402.05929)  
  *2024-02 · Preprint* — **Artifact:** Model / training paradigm — **Role:** Cross-domain action-taking foundation model — **Modalities / channels:** Robotics sequences; Gameplay video; Language  
  **Canonical placement:** The primary evaluation is multimodal pretraining and next-action prediction across domains
- **RoboFlamingo** [![arXiv 2311.01378](https://img.shields.io/badge/arXiv-2311.01378-b31b1b.svg)](https://arxiv.org/abs/2311.01378) [![Project](https://img.shields.io/badge/Project-Page-2563eb.svg)](https://roboflamingo.github.io/) [![Code](https://img.shields.io/badge/Code-GitHub-16a34a.svg?logo=github)](https://github.com/RoboFlamingo/RoboFlamingo)  
  *2023-11 · ICLR 2024 Spotlight* — **Artifact:** Policy / model — **Role:** Adapts an open vision-language model to language-conditioned manipulation — **Modalities / channels:** Images; Language; Action history  
  **Canonical placement:** The explicit policy head is evaluated primarily as an open-loop robot imitator rather than an adaptive agent architecture
- **RT-2** [![arXiv 2307.15818](https://img.shields.io/badge/arXiv-2307.15818-b31b1b.svg)](https://arxiv.org/abs/2307.15818) [![Project](https://img.shields.io/badge/Project-Page-2563eb.svg)](https://robotics-transformer2.github.io/)  
  *2023-07 · CoRL 2023* — **Artifact:** Policy / model — **Role:** Vision-language-action backbone — **Modalities / channels:** Images; Language; Robot actions  
  **Canonical placement:** Action-token prediction alone does not establish a system-level feedback path
- **RoboCat** [![arXiv 2306.11706](https://img.shields.io/badge/arXiv-2306.11706-b31b1b.svg)](https://arxiv.org/abs/2306.11706) [![Project](https://img.shields.io/badge/Project-Page-2563eb.svg)](https://deepmind.google/discover/blog/robocat-a-self-improving-robotic-agent/)  
  *2023-06 · TMLR 2023* — **Artifact:** Policy / model — **Role:** Visual goal-conditioned, multi-embodiment decision transformer with data-driven adaptation — **Modalities / channels:** Images; Goal images; Proprioception; Robot actions  
  **Canonical placement:** The autonomous improvement loop produces data between training iterations; the primary evaluated artifact remains the reusable policy model
- **PaLM-E** [![arXiv 2303.03378](https://img.shields.io/badge/arXiv-2303.03378-b31b1b.svg)](https://arxiv.org/abs/2303.03378) [![Project](https://img.shields.io/badge/Project-Page-2563eb.svg)](https://palm-e.github.io/)  
  *2023-03 · ICML 2023* — **Artifact:** Model — **Role:** Embodied multimodal language-model backbone — **Modalities / channels:** Images; Language; Continuous sensor state  
  **Canonical placement:** The contribution is a backbone, not a separately evaluated agent loop
- **RT-1** [![arXiv 2212.06817](https://img.shields.io/badge/arXiv-2212.06817-b31b1b.svg)](https://arxiv.org/abs/2212.06817) [![Project](https://img.shields.io/badge/Project-Page-2563eb.svg)](https://robotics-transformer1.github.io/)  
  *2022-12 · RSS 2023* — **Artifact:** Policy / model — **Role:** Scalable transformer policy for real-world multi-task robot control — **Modalities / channels:** Images; Language; Robot actions  
  **Canonical placement:** The contribution is a learned action-token policy; the deployment loop is not presented as a separate agent architecture
- **VIMA** [![arXiv 2210.03094](https://img.shields.io/badge/arXiv-2210.03094-b31b1b.svg)](https://arxiv.org/abs/2210.03094) [![Project](https://img.shields.io/badge/Project-Page-2563eb.svg)](https://vimalabs.github.io/)  
  *2022-10 · ICML 2023* — **Artifact:** Policy / model + benchmark — **Role:** Multimodal-prompt-conditioned transformer robot policy — **Modalities / channels:** Interleaved language and images; Robot actions  
  **Canonical placement:** The paper's principal contributions are the transformer policy, procedural benchmark, and imitation-learning data rather than a separately designed runtime agent stack
- **Gato** [![arXiv 2205.06175](https://img.shields.io/badge/arXiv-2205.06175-b31b1b.svg)](https://arxiv.org/abs/2205.06175)  
  *2022-05 · TMLR 2022* — **Artifact:** Policy / model — **Role:** Multi-task, multi-embodiment generalist policy — **Modalities / channels:** Images; Language; Proprioception; Game and robot actions  
  **Canonical placement:** One token policy spans many domains, but planning, feedback handling, and tool orchestration are not separately evaluated

### 4.3 Spatial, Memory, and Tool-Use Models and Components

- **MEMO: Multimodal Evidence Memory Organization for Long-Horizon LLM Agents** <a id="memo"></a> [![arXiv 2609.07471](https://img.shields.io/badge/arXiv-2609.07471-b31b1b.svg)](https://arxiv.org/abs/2609.07471)  
  *2026-09 · Preprint* — **Artifact:** Evidence-selection and memory-readout component — **Role:** Allocates evidence to textual, rendered-visual, or dual-channel carriers under a context budget — **Modalities / channels:** Retrieved text; Rendered document images; Source metadata  
  **Canonical placement:** The learned memory organizer is the evaluated component; rendering text as images does not establish independent visual information in every downstream task
- **AVA-Encoder: Towards Agent-Native Video Representation Learning** [![arXiv 2608.12313](https://img.shields.io/badge/arXiv-2608.12313-b31b1b.svg)](https://arxiv.org/abs/2608.12313)  
  *2026-08 · Preprint* — **Artifact:** Representation model / component — **Role:** Converts long video into editable knowledge graphs and optimizes them through reconstruction-derived textual gradients — **Modalities / channels:** Video; Audio; Images; Language; Structured graphs  
  **Canonical placement:** The primary result is an agent-native video representation and training framework; it is designed for downstream agents but does not itself define a grounded user-task runtime
- **StepReflect: Structured UI Transition Reflection for Mobile GUI Agents** [![arXiv 2608.05587](https://img.shields.io/badge/arXiv-2608.05587-b31b1b.svg)](https://arxiv.org/abs/2608.05587)  
  *2026-08 · Preprint* — **Artifact:** Reflection model / component — **Role:** Predicts structured action effects and failure diagnoses from before-and-after mobile screenshots — **Modalities / channels:** Language; Paired screenshots; Structured transition specifications  
  **Canonical placement:** The separately trained verifier improves multiple mobile agents online, but the main evaluated artifact is the reusable transition-reflection component
- **ToolArtist** [![arXiv 2608.04436](https://img.shields.io/badge/arXiv-2608.04436-b31b1b.svg)](https://arxiv.org/abs/2608.04436)  
  *2026-08 · Preprint* — **Artifact:** Model / post-training paradigm — **Role:** Unified policy for reasoning, search-tool use, and native image generation — **Modalities / channels:** Language; Search results; Generated images  
  **Canonical placement:** The contribution is a unified model and agentic-RL recipe; no post-generation inspect-and-revise system loop is established
- **V-Mem: Modality-Routed Retrieval for Long-Term Multimodal Agentic Memory** [![arXiv 2608.01543](https://img.shields.io/badge/arXiv-2608.01543-b31b1b.svg)](https://arxiv.org/abs/2608.01543) [![Code](https://img.shields.io/badge/Code-GitHub-16a34a.svg?logo=github)](https://github.com/Dingyi-Kang/V-Mem)  
  *2026-08 · Preprint* — **Artifact:** Memory / retrieval component — **Role:** Routes queries across modality-specific stores and retrieves cross-modal interaction evidence — **Modalities / channels:** Language; Images; Multimodal dialogue history  
  **Canonical placement:** The evaluated artifact is a reusable memory and retrieval layer for agents rather than an end-to-end grounded action system
- **PMMC: Prospective Multimodal Memory Compilation for Long-Term LVLM Agents** [![arXiv 2608.00962](https://img.shields.io/badge/arXiv-2608.00962-b31b1b.svg)](https://arxiv.org/abs/2608.00962)  
  *2026-08 · Preprint* — **Artifact:** Memory-compilation framework / component — **Role:** Compiles prospective questions and multimodal interaction history into executable memory programs with verification — **Modalities / channels:** Language; Images; Multimodal interaction history  
  **Canonical placement:** Prospective compilation and Doubter verification improve a memory subsystem; the work does not contribute the surrounding action-taking agent runtime
- **Mimir: A Neuro-Symbolic Memory System with Dynamic Grounding for Embodied Agents in Interactive Environments** [![arXiv 2608.04933](https://img.shields.io/badge/arXiv-2608.04933-b31b1b.svg)](https://arxiv.org/abs/2608.04933)  
  *2026-08 · Preprint* — **Artifact:** Memory component — **Role:** Maintains separate world facts and task progress, then grounds each active goal in retrieved objects and perceptual evidence — **Modalities / channels:** Language; Visual observations; Structured scene state  
  **Canonical placement:** Evaluates a reusable memory interface on EB-ALFRED and EB-Habitat in simulation
- **StreamSoccer: Event-Driven Memory for Streaming Soccer Commentary** <a id="streamsoccer"></a> [![arXiv 2608.19723](https://img.shields.io/badge/arXiv-2608.19723-b31b1b.svg)](https://arxiv.org/abs/2608.19723)  
  *2026-08 · Preprint* — **Artifact:** Event-memory architecture + streaming evaluation — **Role:** Maintains active, recently completed, and retrievable historical events for three commentary modes and silence — **Modalities / channels:** Streaming video; Event representations; Language history  
  **Canonical placement:** The main enabling contribution is bounded event memory and causal stream processing; commentary generation does not establish an external task-action loop. The three-track dataset remains attached here
- **Parametric Multimodal User Memory: Storing What Captions Cannot Carry** <a id="parametric-user-memory"></a> [![arXiv 2608.28609](https://img.shields.io/badge/arXiv-2608.28609-b31b1b.svg)](https://arxiv.org/abs/2608.28609) [![Code](https://img.shields.io/badge/Code-GitHub-16a34a.svg?logo=github)](https://github.com/19PINE-AI/multimodal-user-memory)  
  *2026-07 · Preprint* — **Artifact:** Perceptual identity memory + text fact store — **Role:** Combines contextual grounding with identity encoders to preserve user information that captions discard — **Modalities / channels:** Images; Audio; Video; Language; Identity keys  
  **Canonical placement:** The component separates perceptual identity from exact factual recall and includes PerceptMem; the first-release month follows the official submission history
- **MMA: Multimodal Memory Agent** <a id="mma"></a> [![arXiv 2602.16493](https://img.shields.io/badge/arXiv-2602.16493-b31b1b.svg)](https://arxiv.org/abs/2602.16493) [![Code](https://img.shields.io/badge/Code-GitHub-16a34a.svg?logo=github)](https://github.com/AIGeeksGroup/MMA)  
  *2026-02 · Preprint* — **Artifact:** Reliability-aware memory component — **Role:** Weights evidence by credibility, age, and cross-modal conflict, with abstention when support is insufficient — **Modalities / channels:** Language; Images; Source and time metadata  
  **Canonical placement:** The primary artifact is memory readout and belief updating; synthetic MMA-Bench is attached, and text-only evaluation tracks are not treated as multimodal evidence
- **Code-as-Monitor: Constraint-aware Visual Programming for Reactive and Proactive Robotic Failure Detection** [![arXiv 2412.04455](https://img.shields.io/badge/arXiv-2412.04455-b31b1b.svg)](https://arxiv.org/abs/2412.04455) [![Project](https://img.shields.io/badge/Project-Page-2563eb.svg)](https://zhoues.github.io/Code-as-Monitor/)  
  *2024-12 · CVPR 2025* — **Artifact:** Execution-monitoring component — **Role:** Generates code that checks visual spatio-temporal constraints for reactive failure detection and proactive intervention — **Modalities / channels:** Language; Images; Tracked geometric elements  
  **Canonical placement:** Supplies monitoring to an existing controller; the principal result is the verifier rather than a standalone task agent
- **AHA: A Vision-Language-Model for Detecting and Reasoning Over Failures in Robotic Manipulation** [![arXiv 2410.00371](https://img.shields.io/badge/arXiv-2410.00371-b31b1b.svg)](https://arxiv.org/abs/2410.00371) [![Project](https://img.shields.io/badge/Project-Page-2563eb.svg)](https://aha-vlm.github.io/) [![Code](https://img.shields.io/badge/Code-GitHub-16a34a.svg?logo=github)](https://github.com/NVlabs/AHA)  
  *2024-10 · ICLR 2025* — **Artifact:** Failure-reasoning model + dataset — **Role:** Diagnoses manipulation failures in language using training examples generated by FailGen — **Modalities / channels:** Images; Language; Execution trajectories  
  **Canonical placement:** A reusable diagnosis model improves downstream planning and verification; the AHA failure data belongs with this model entry
- **OmniParser for Pure Vision Based GUI Agent** <a id="omniparser"></a> [![arXiv 2408.00203](https://img.shields.io/badge/arXiv-2408.00203-b31b1b.svg)](https://arxiv.org/abs/2408.00203) [![Code](https://img.shields.io/badge/Code-GitHub-16a34a.svg?logo=github)](https://github.com/microsoft/OmniParser)  
  *2024-08 · Preprint* — **Artifact:** Screen parser / grounding component — **Role:** Detects interactable elements and associates screenshot regions with semantic descriptions for downstream GUI actions — **Modalities / channels:** Screenshots; Element boxes; Generated descriptions  
  **Canonical placement:** Parsing and grounding support a caller's agent loop. The original paper remains dated 2024-08; the linked implementation includes V2 and a July 2026 inference-only YOLOv9-E detector update
- **SpatialVLM** [![arXiv 2401.12168](https://img.shields.io/badge/arXiv-2401.12168-b31b1b.svg)](https://arxiv.org/abs/2401.12168) [![Project](https://img.shields.io/badge/Project-Page-2563eb.svg)](https://spatial-vlm.github.io/)  
  *2024-01 · CVPR 2024* — **Artifact:** Model — **Role:** Metric and qualitative spatial reasoning — **Modalities / channels:** Images; Depth-derived geometry; Language  
  **Canonical placement:** Performs spatial inference without a demonstrated runtime agent loop
- **MultiPLY** [![arXiv 2401.08577](https://img.shields.io/badge/arXiv-2401.08577-b31b1b.svg)](https://arxiv.org/abs/2401.08577) [![Code](https://img.shields.io/badge/Code-GitHub-16a34a.svg?logo=github)](https://github.com/UMass-Embodied-AGI/MultiPLY)  
  *2024-01 · CVPR 2024* — **Artifact:** Model + dataset — **Role:** Multisensory embodied language model and interactive state/action tokenization — **Modalities / channels:** Vision; Audio; Tactile; Thermal; 3D; Language  
  **Canonical placement:** Interactive inference closes a loop, but the primary evaluated contribution is the model and Multisensory Universe data
- **LLaVA-Plus** [![arXiv 2311.05437](https://img.shields.io/badge/arXiv-2311.05437-b31b1b.svg)](https://arxiv.org/abs/2311.05437)  
  *2023-11 · Preprint* — **Artifact:** Model / tool-use training — **Role:** Multimodal assistant with a repository of vision and vision-language skills — **Modalities / channels:** Images; Language; Tool results  
  **Canonical placement:** The primary contribution is tool-use instruction tuning; system-level feedback paths are not the main evaluated artifact
- **ConceptGraphs** [![arXiv 2309.16650](https://img.shields.io/badge/arXiv-2309.16650-b31b1b.svg)](https://arxiv.org/abs/2309.16650) [![Project](https://img.shields.io/badge/Project-Page-2563eb.svg)](https://concept-graphs.github.io/)  
  *2023-09 · ICRA 2024* — **Artifact:** Component — **Role:** Open-vocabulary 3D scene memory — **Modalities / channels:** RGB-D; 3D geometry; Language  
  **Canonical placement:** Supplies persistent spatial memory to agents rather than a complete agent; [code](https://github.com/concept-graphs/concept-graphs) provides scene-graph construction and querying
- **REFLECT: Summarizing Robot Experiences for Failure Explanation and Correction** [![arXiv 2306.15724](https://img.shields.io/badge/arXiv-2306.15724-b31b1b.svg)](https://arxiv.org/abs/2306.15724) [![Project](https://img.shields.io/badge/Project-Page-2563eb.svg)](https://robot-reflect.github.io/) [![Code](https://img.shields.io/badge/Code-GitHub-16a34a.svg?logo=github)](https://github.com/real-stanford/reflect)  
  *2023-06 · CoRL 2023* — **Artifact:** Failure-explanation component + dataset — **Role:** Summarizes multisensory execution history and produces explanations that a planner can use for corrective actions — **Modalities / channels:** Language; Vision; Audio; Robot state  
  **Canonical placement:** The main artifact is failure explanation and the accompanying RoboFail data, evaluated through downstream correction planning

## 5. Agent Learning, Planning, and World-Model Methods

These works contribute planning, coordination, workflow construction, tool composition, or world modeling. They remain separate from systems when execution is fixed, feedback is not decision-relevant, multimodality is absent, or the evaluated contribution is the method itself.

**In this section:** [Tool use, workflow, and program synthesis](#51-tool-use-workflow-and-program-synthesis) · [Agentic learning and self-improvement](#52-agentic-learning-and-self-improvement) · [World models and model-based planning](#53-world-models-and-model-based-planning) · [Multi-agent and conversational coordination](#54-multi-agent-and-conversational-coordination)

### 5.1 Tool Use, Workflow, and Program Synthesis

- **Screenshots or Tools? Eliciting Tool Use and Managing Multimodal Context in Hybrid GUI-MCP Computer-Use Agents** [![arXiv 2608.03327](https://img.shields.io/badge/arXiv-2608.03327-b31b1b.svg)](https://arxiv.org/abs/2608.03327)  
  *2026-08 · Preprint* — **Method:** Hybrid GUI-MCP tool adoption and context management — **Contribution:** Studies multi-turn reinforcement learning for choosing between visual interaction and structured tools, plus observation compression for long computer-use histories  
  **Canonical placement:** The primary result is a training and context-management method evaluated through a shared harness rather than one deployed computer-use system
- **GenRouter: Unified Workflow Routing for Agentic Image Generation** <a id="genrouter"></a> [![arXiv 2608.16721](https://img.shields.io/badge/arXiv-2608.16721-b31b1b.svg)](https://arxiv.org/abs/2608.16721) [![Code](https://img.shields.io/badge/Code-GitHub-16a34a.svg?logo=github)](https://github.com/EnVision-Research/GenRouter)  
  *2026-08 · Preprint* — **Method:** Cost-aware workflow routing — **Contribution:** Profiles request demands, matches prior experience, and filters quality/cost trade-offs to select executable image-generation workflows  
  **Canonical placement:** The evaluated contribution is routing over GenCanvas primitives and templates, rather than a new visual-generation backbone
- **VideoCoCo: Code-as-CoT for Physically-Consistent Video Generation via an Agentic Dual-Engine System** [![arXiv 2607.27380](https://img.shields.io/badge/arXiv-2607.27380-b31b1b.svg)](https://arxiv.org/abs/2607.27380)  
  *2026-07 · Preprint* — **Method:** Executable program synthesis — **Contribution:** A coding agent writes a Blender program as code-as-chain-of-thought, a simulator produces a physical draft, and a video engine edits it into a photorealistic result  
  **Canonical placement:** The executable intermediate representation drives a staged generation pipeline, but no feedback-informed revision loop is evaluated as the primary contribution
- **Knowledge-Centric Agents for Workflow Generation in ComfyUI** [![arXiv 2607.15845](https://img.shields.io/badge/arXiv-2607.15845-b31b1b.svg)](https://arxiv.org/abs/2607.15845)  
  *2026-07 · Preprint* — **Method:** Workflow synthesis — **Contribution:** Learns hierarchical workflow knowledge and synthesizes executable ComfyUI graphs with structural self-refinement  
  **Canonical placement:** Refinement targets workflow structure; independent visual execution feedback is not shown to alter a later runtime decision
- **Harness VLA / RPent: Steering Frozen VLAs into Reliable Manipulation Primitives via Memory-Guided Agents** [![arXiv 2607.08448](https://img.shields.io/badge/arXiv-2607.08448-b31b1b.svg)](https://arxiv.org/abs/2607.08448) [![Project](https://img.shields.io/badge/Project-Page-2563eb.svg)](https://harnessvla.github.io/) [![Code](https://img.shields.io/badge/Code-GitHub-16a34a.svg?logo=github)](https://github.com/RLinf/RPent)  
  *2026-07 · Preprint* — **Method:** Memory-guided policy orchestration — **Contribution:** Combines a frozen VLA for contact-rich manipulation with analytic primitives and execution memory to select, stage, and retry skills  
  **Canonical placement:** The central result is an orchestration method evaluated in LIBERO-Pro, RoboCasa365, and RoboTwin C2R; RPent is its linked implementation
- **GaP: A Graph-as-Policy Multi-Agent Self-Learning Harness For Variational Automation Tasks** [![arXiv 2607.05369](https://img.shields.io/badge/arXiv-2607.05369-b31b1b.svg)](https://arxiv.org/abs/2607.05369) [![Project](https://img.shields.io/badge/Project-Page-2563eb.svg)](https://graph-robots.github.io/gap/) [![Code](https://img.shields.io/badge/Code-GitHub-16a34a.svg?logo=github)](https://github.com/graph-robots/graph-as-policy)  
  *2026-07 · Preprint* — **Method:** Graph-based robot program synthesis — **Contribution:** Constructs executable graphs of perception, planning, and control skills, then rehearses task variants in simulation to refine graph structure and parameters  
  **Canonical placement:** Evaluates graph synthesis and refinement for variational automation, with simulation and physical workcell tasks
- **Claude plays robotics** [![Article](https://img.shields.io/badge/Article-Read-2563eb.svg)](https://www.anthropic.com/research/claude-plays-robotics)  
  *2026-07 · Technical report* — **Method:** Control-interface comparison — **Contribution:** Compares direct commands, generated controllers, policy supervision, and RL training in robotic control tasks  
  **Canonical placement:** An empirical study of how interfaces affect capability. Direct-control simulations pause during model calls; physical Go2 explorations are separate evidence
- **Silent Failures in Multimodal Agentic Search:A Diagnostic Taxonomy and Cross-Judge Evaluation** <a id="silent-failures"></a> [![arXiv 2607.19793](https://img.shields.io/badge/arXiv-2607.19793-b31b1b.svg)](https://arxiv.org/abs/2607.19793) [![Code](https://img.shields.io/badge/Code-GitHub-16a34a.svg?logo=github)](https://github.com/DingWu1021/silent-failures-multimodal-agentic-search)  
  *2026-07 · SIGIR 2026 SynthIR Workshop* — **Method:** Trajectory diagnosis and cross-judge evaluation — **Contribution:** Tests provenance hallucinations, visual shortcuts, and reasoning failures that final-answer accuracy can conceal in multimodal search  
  **Canonical placement:** The primary contribution is a diagnostic taxonomy and evaluation method; use alongside [MMSearch-Plus](#mmsearch-plus)
- **Qwen-Image-Agent: Bridging the Context Gap in Real-World Image Generation** [![arXiv 2606.26907](https://img.shields.io/badge/arXiv-2606.26907-b31b1b.svg)](https://arxiv.org/abs/2606.26907)  
  *2026-06 · Preprint* — **Method:** Agentic generation-context construction — **Contribution:** Plans, searches, reasons over references, and uses memory and feedback to assemble grounded context for image generation; IA-Bench evaluates the resulting capability  
  **Canonical placement:** The main contribution is the context-construction method, trained agent, and benchmark; the paper does not isolate a generated-artifact inspection loop that causally revises the image
- **Guava: An Effective and Universal Harness for Embodied Manipulation** [![arXiv 2606.18363](https://img.shields.io/badge/arXiv-2606.18363-b31b1b.svg)](https://arxiv.org/abs/2606.18363) [![Project](https://img.shields.io/badge/Project-Page-2563eb.svg)](https://guava-harness.github.io/)  
  *2026-06 · Preprint* — **Method:** Embodied harness design and distillation — **Contribution:** Studies observation formats, semantic action interfaces, and iterative perception–reasoning–action; distills the resulting behavior into Guava-Agent-4B  
  **Canonical placement:** The principal result is a harness-design study and distillation recipe. The paper describes simulated tool-use/recovery trajectories; a paper description alone does not establish a downloadable dataset
- **What Matters in Orchestrating Robot Policies: A Systematic Study of Hierarchical VLA Agents** [![arXiv 2606.10267](https://img.shields.io/badge/arXiv-2606.10267-b31b1b.svg)](https://arxiv.org/abs/2606.10267) [![Project](https://img.shields.io/badge/Project-Page-2563eb.svg)](https://jiahenghu.github.io/hi-vla/)  
  *2026-06 · Preprint* — **Method:** Hierarchical VLA orchestration study — **Contribution:** Compares planner/controller choices, subgoal switching, observations, and memory across simulation and ALOHA tasks  
  **Canonical placement:** The contribution is a controlled study of hierarchy design, rather than a distinct robot runtime
- **Do Multimodal Agents Really Benefit from Tool Use? A Systematic Study of Capability Gains** <a id="tool-use-capability-gains"></a> [![arXiv 2606.02357](https://img.shields.io/badge/arXiv-2606.02357-b31b1b.svg)](https://arxiv.org/abs/2606.02357)  
  *2026-06 · Preprint* — **Method:** Tool ablation and matched-control analysis — **Contribution:** Compares tool-enabled agents with no-tool controls to distinguish newly solved tasks from changed reasoning behavior or search cost  
  **Canonical placement:** This is an empirical method study; conclusions are bounded by the tested Thyme and DeepEyesV2 configurations and tasks
- **GenClaw: Code-Driven Agentic Image Generation** [![arXiv 2605.30248](https://img.shields.io/badge/arXiv-2605.30248-b31b1b.svg)](https://arxiv.org/abs/2605.30248)  
  *2026-05 · Preprint* — **Method:** Executable visual-sketch synthesis — **Contribution:** Searches and reasons, writes SVG, HTML, or Three.js sketches, and uses their rendered structure to condition a final image generator  
  **Canonical placement:** The executable intermediate representation supports a staged pipeline, but runtime output-feedback repair is not established as the principal evaluated contribution
- **Enabling Extensible Embodied Capabilities with Tools** [![arXiv 2605.26637](https://img.shields.io/badge/arXiv-2605.26637-b31b1b.svg)](https://arxiv.org/abs/2605.26637) [![Project](https://img.shields.io/badge/Project-Page-2563eb.svg)](https://racingemperor.github.io/manip-tool-hub/)  
  *2026-05 · Preprint* — **Method:** Embodied tool externalization — **Contribution:** Introduces the Embodied Tool Protocol (ETP) and a tool library; EmbodiedToolBench tests recognizing tool needs, selecting tools, executing them, and composing calls  
  **Canonical placement:** The paper centers on tool interfaces and their evaluation. Its benchmark is kept with this entry; physical object use and software-tool invocation are different capabilities
- **WebVIA: Webpage Generation Benchmark and Multimodal Agentic Framework for Visually Rich Webpages** [![arXiv 2511.06251](https://img.shields.io/badge/arXiv-2511.06251-b31b1b.svg)](https://arxiv.org/abs/2511.06251)  
  *2025-11 · Preprint* — **Method:** Multi-state webpage reconstruction workflow — **Contribution:** Explores interactive pages, captures state-linked screenshots, generates executable UI code, and validates interactivity against a benchmark  
  **Canonical placement:** The paper contributes the benchmark and generation workflow; validation is evaluated without a clearly isolated feedback-conditioned code-revision system
- **PresentAgent** [![arXiv 2507.04036](https://img.shields.io/badge/arXiv-2507.04036-b31b1b.svg)](https://arxiv.org/abs/2507.04036) [![Code](https://img.shields.io/badge/Code-GitHub-16a34a.svg?logo=github)](https://github.com/AIGeeksGroup/PresentAgent)  
  *2025-07 · EMNLP 2025 Demo* — **Method:** Multimodal production workflow — **Contribution:** Converts long documents into rendered slides, narration, and synchronized presentation video through a modular production pipeline  
  **Canonical placement:** PresentEval scores completed outputs, but the paper does not establish evaluator feedback that changes a later runtime production decision
- **DesignCoder: Hierarchy-Aware and Self-Correcting UI Code Generation with Large Language Models** [![arXiv 2506.13663](https://img.shields.io/badge/arXiv-2506.13663-b31b1b.svg)](https://arxiv.org/abs/2506.13663)  
  *2025-06 · Preprint* — **Method:** Hierarchical UI program synthesis — **Contribution:** Decomposes screenshots into grouped interface regions, generates code divide-and-conquer, and applies structured self-correction  
  **Canonical placement:** The primary evaluated contribution is the hierarchy-aware code-generation method rather than a general interactive software agent
- **PPTAgent: Generating and Evaluating Presentations Beyond Text-to-Slides** [![arXiv 2501.03936](https://img.shields.io/badge/arXiv-2501.03936-b31b1b.svg)](https://arxiv.org/abs/2501.03936)  
  *2025-01 · Preprint* — **Method:** Reference-grounded presentation editing workflow — **Contribution:** Retrieves slide examples, plans content, and generates editing actions over an existing deck while PPTEval scores content and design  
  **Canonical placement:** The main result is a two-stage edit-based generation method and evaluator; feedback-conditioned revision is not isolated as an end-to-end runtime claim
- **ReKep: Spatio-Temporal Reasoning of Relational Keypoint Constraints for Robotic Manipulation** [![arXiv 2409.01652](https://img.shields.io/badge/arXiv-2409.01652-b31b1b.svg)](https://arxiv.org/abs/2409.01652) [![Project](https://img.shields.io/badge/Project-Page-2563eb.svg)](https://rekep-robot.github.io/) [![Code](https://img.shields.io/badge/Code-GitHub-16a34a.svg?logo=github)](https://github.com/huangwl18/ReKep)  
  *2024-09 · CoRL 2024* — **Method:** Keypoint-constraint programming — **Contribution:** Turns language and RGB-D observations into Python costs over 3D keypoints, then repeatedly optimizes end-effector actions as the scene changes  
  **Canonical placement:** The primary contribution is the relational-constraint representation and optimization method, demonstrated on mobile and dual-arm robots
- **Set-of-Mark Prompting** [![arXiv 2310.11441](https://img.shields.io/badge/arXiv-2310.11441-b31b1b.svg)](https://arxiv.org/abs/2310.11441) [![Code](https://img.shields.io/badge/Code-GitHub-16a34a.svg?logo=github)](https://github.com/microsoft/SoM)  
  *2023-10 · Preprint* — **Method:** Visual grounding prompt — **Contribution:** Overlays addressable marks on segmented image regions so multimodal models can refer to precise targets  
  **Canonical placement:** It is a grounding method reused by agents, not an agent or feedback-informed system
- **ControlLLM** [![arXiv 2310.17796](https://img.shields.io/badge/arXiv-2310.17796-b31b1b.svg)](https://arxiv.org/abs/2310.17796) [![Code](https://img.shields.io/badge/Code-GitHub-16a34a.svg?logo=github)](https://github.com/OpenGVLab/ControlLLM)  
  *2023-10 · Preprint* — **Method:** Tool-graph planning — **Contribution:** Decomposes tasks, searches a dependency-aware tool graph, and executes image, audio, and video tools  
  **Canonical placement:** The selected solution path is primarily planned before execution; adaptive use of intermediate feedback is not the central evaluation
- **MusicAgent** [![arXiv 2310.11954](https://img.shields.io/badge/arXiv-2310.11954-b31b1b.svg)](https://arxiv.org/abs/2310.11954) [![Code](https://img.shields.io/badge/Code-GitHub-16a34a.svg?logo=github)](https://github.com/microsoft/muzic/tree/main/musicagent)  
  *2023-10 · EMNLP 2023 Demo* — **Method:** Audio-tool orchestration — **Contribution:** Decomposes music requests and composes tools from local models, repositories, and web APIs  
  **Canonical placement:** The published autonomous workflow emphasizes decomposition and execution rather than a feedback-informed second decision
- **SayPlan: Grounding Large Language Models using 3D Scene Graphs for Scalable Robot Task Planning** [![arXiv 2307.06135](https://img.shields.io/badge/arXiv-2307.06135-b31b1b.svg)](https://arxiv.org/abs/2307.06135) [![Project](https://img.shields.io/badge/Project-Page-2563eb.svg)](https://sayplan.github.io/)  
  *2023-07 · CoRL 2023* — **Method:** Scene-graph task planning — **Contribution:** Searches hierarchical 3D scene graphs and repairs proposed task plans using a path planner and scene-graph simulator feedback  
  **Canonical placement:** The evaluated feedback validates plan feasibility; real-robot demonstrations do not make every simulator check a physical execution check
- **GPT4Tools** [![arXiv 2305.18752](https://img.shields.io/badge/arXiv-2305.18752-b31b1b.svg)](https://arxiv.org/abs/2305.18752) [![Code](https://img.shields.io/badge/Code-GitHub-16a34a.svg?logo=github)](https://github.com/StevenGrove/GPT4Tools)  
  *2023-05 · Preprint* — **Method:** Tool-use self-instruction — **Contribution:** Generates multimodal tool-use instruction data and tunes open LLMs to invoke seen and unseen tools  
  **Canonical placement:** The primary contribution is a training method and benchmark for tool invocation, without an evaluated adaptive execution loop
- **Chameleon** [![arXiv 2304.09842](https://img.shields.io/badge/arXiv-2304.09842-b31b1b.svg)](https://arxiv.org/abs/2304.09842) [![Project](https://img.shields.io/badge/Project-Page-2563eb.svg)](https://chameleon-llm.github.io/)  
  *2023-04 · NeurIPS 2023* — **Method:** Program synthesis / tool composition — **Contribution:** Synthesizes programs from language models, vision models, web search, Python, and heuristics  
  **Canonical placement:** Program execution is compositional but does not by itself prove an adaptive multimodal runtime loop
- **HuggingGPT** [![arXiv 2303.17580](https://img.shields.io/badge/arXiv-2303.17580-b31b1b.svg)](https://arxiv.org/abs/2303.17580) [![Code](https://img.shields.io/badge/Code-GitHub-16a34a.svg?logo=github)](https://github.com/microsoft/JARVIS)  
  *2023-03 · NeurIPS 2023* — **Method:** Foundation-model orchestration — **Contribution:** Uses an LLM to plan tasks, select Hugging Face models, execute subtasks, and summarize results across language, vision, and speech  
  **Canonical placement:** The primary contribution is a general orchestration protocol; execution results are mainly collected for final synthesis
- **MM-REACT** [![arXiv 2303.11381](https://img.shields.io/badge/arXiv-2303.11381-b31b1b.svg)](https://arxiv.org/abs/2303.11381) [![Project](https://img.shields.io/badge/Project-Page-2563eb.svg)](https://multimodal-react.github.io/)  
  *2023-03 · Preprint* — **Method:** Prompted multimodal tool use — **Contribution:** Represents images, video, files, and coordinates in a textual trace that coordinates ChatGPT with vision experts  
  **Canonical placement:** Demonstrates multimodal tool composition, but the feedback-informed system loop is not isolated as its primary contribution
- **ViperGPT** [![arXiv 2303.08128](https://img.shields.io/badge/arXiv-2303.08128-b31b1b.svg)](https://arxiv.org/abs/2303.08128) [![Project](https://img.shields.io/badge/Project-Page-2563eb.svg)](https://viper.cs.columbia.edu/)  
  *2023-03 · ICCV 2023* — **Method:** Visual program synthesis — **Contribution:** Generates Python programs that compose vision, language, and knowledge modules for visual queries  
  **Canonical placement:** Code execution is a method for compositional inference; it is not evaluated as an interactive external-state agent
- **VisProg** [![arXiv 2211.11559](https://img.shields.io/badge/arXiv-2211.11559-b31b1b.svg)](https://arxiv.org/abs/2211.11559) [![Project](https://img.shields.io/badge/Project-Page-2563eb.svg)](https://prior.allenai.org/projects/visprog)  
  *2022-11 · CVPR 2023* — **Method:** Visual program synthesis — **Contribution:** Generates modular programs that invoke image, language, and Python modules for compositional tasks  
  **Canonical placement:** Programs execute a planned module sequence without a general feedback-informed interaction loop
- **ProgPrompt: Generating Situated Robot Task Plans using Large Language Models** [![arXiv 2209.11302](https://img.shields.io/badge/arXiv-2209.11302-b31b1b.svg)](https://arxiv.org/abs/2209.11302) [![Project](https://img.shields.io/badge/Project-Page-2563eb.svg)](https://progprompt.github.io/) [![Code](https://img.shields.io/badge/Code-GitHub-16a34a.svg?logo=github)](https://github.com/NVlabs/progprompt-vh)  
  *2022-09 · ICRA 2023* — **Method:** Situated program prompting — **Contribution:** Conditions program generation on available actions, scene objects, example plans, and state assertions for recovery  
  **Canonical placement:** The primary artifact is a prompting and plan-generation method, with VirtualHome code and separate tabletop robot experiments
- **Socratic Models** [![arXiv 2204.00598](https://img.shields.io/badge/arXiv-2204.00598-b31b1b.svg)](https://arxiv.org/abs/2204.00598) [![Project](https://img.shields.io/badge/Project-Page-2563eb.svg)](https://socraticmodels.github.io/)  
  *2022-04 · ICLR 2023* — **Method:** Zero-shot model composition — **Contribution:** Uses language as an exchange layer among pretrained vision, audio, language, and robotics models  
  **Canonical placement:** It is a composition framework with application demonstrations rather than one canonical evaluated agent system

### 5.2 Agentic Learning and Self-Improvement

- **From Interaction Traces to Persistent Skills: Online Evolution for Computer-Use Agents** <a id="persistent-skills"></a> [![arXiv 2609.04869](https://img.shields.io/badge/arXiv-2609.04869-b31b1b.svg)](https://arxiv.org/abs/2609.04869) [![Code](https://img.shields.io/badge/Code-GitHub-16a34a.svg?logo=github)](https://github.com/LongtaoHu/Skill-Evo4GUI)  
  *2026-09 · Preprint* — **Method:** Cross-iteration procedural memory evolution — **Contribution:** Turns interaction trajectories and evaluator feedback into a versioned skill library, tested against configuration-matched empty-library controls  
  **Canonical placement:** Each iteration uses a frozen library snapshot; accepted updates affect later iterations without changing model parameters, and repeated revision does not guarantee recovery
- **ToolVision: Learning When and How to Use Visual Tools with Capability-Aligned Supervision** [![arXiv 2608.08907](https://img.shields.io/badge/arXiv-2608.08907-b31b1b.svg)](https://arxiv.org/abs/2608.08907)  
  *2026-08 · Preprint* — **Method:** Capability-aligned visual-tool supervision — **Contribution:** Combines multi-agent branch exploration and stepwise evidence-gain selection for supervised fine-tuning with capability-difference-gated reinforcement-learning rewards  
  **Canonical placement:** The primary result is a data-construction and post-training method for tool-use policies rather than a deployed end-to-end multimodal task system
- **OpenVisTool: An Open Recipe for Synthesizing Instructive Visual Tool-Use Trajectories** [![arXiv 2608.08557](https://img.shields.io/badge/arXiv-2608.08557-b31b1b.svg)](https://arxiv.org/abs/2608.08557)  
  *2026-08 · Preprint* — **Method:** Causally grounded trajectory synthesis — **Contribution:** Retains trajectories only when answers are correct and tool observations are causally useful, producing a 42K training corpus and companion evaluation set  
  **Canonical placement:** The work contributes data synthesis, filtering, and training infrastructure; agent trajectories are training artifacts rather than a canonical deployed system
- **What to Edit Next: Visually Aligned Image-Editing Follow-Up Suggestions in Conversational Systems** [![arXiv 2608.07565](https://img.shields.io/badge/arXiv-2608.07565-b31b1b.svg)](https://arxiv.org/abs/2608.07565)  
  *2026-08 · Preprint* — **Method:** Feedback-aligned multimodal edit recommendation — **Contribution:** Combines supervised tuning, multi-objective reinforcement learning from user clicks, and a visual verifier to suggest useful next edits in live image-creation conversations  
  **Canonical placement:** The primary result is the learned suggestion policy and training system rather than the surrounding artifact-editing runtime
- **iARCS: Iterative Agentic RL for Controllable 3D Scene Generation** [![arXiv 2608.06161](https://img.shields.io/badge/arXiv-2608.06161-b31b1b.svg)](https://arxiv.org/abs/2608.06161)  
  *2026-08 · Preprint* — **Method:** Iterative agentic reinforcement learning — **Contribution:** Combines a universal reward model with LLM-generated task reward programs that are refined from training feedback for physically constrained 3D scenes  
  **Canonical placement:** Iteration improves the reward programs and generator during training; the central contribution is a learning method rather than an interactive runtime agent
- **Zetta $ζ$: An Efficient Closed-Loop Embodied Harness for Self-Evolving Physical Intelligence** [![arXiv 2608.16590](https://img.shields.io/badge/arXiv-2608.16590-b31b1b.svg)](https://arxiv.org/abs/2608.16590) [![Project](https://img.shields.io/badge/Project-Page-2563eb.svg)](https://air-embodied-brain.github.io/zetta/) [![Code](https://img.shields.io/badge/Code-GitHub-16a34a.svg?logo=github)](https://github.com/air-embodied-brain/Zetta-Embodiment)  
  *2026-08 · Preprint* — **Method:** Runtime critic and recovery evolution — **Contribution:** Keeps the base policy frozen while proposing code critics and recovery skills, testing them in rollouts, and accepting validated updates  
  **Canonical placement:** The principal result is harness self-evolution on LIBERO-Pro and RoboCasa; simulator results do not establish physical deployment
- **Self-Evolving Embodied Agents via Skill-Harness Evolution** [![arXiv 2608.11350](https://img.shields.io/badge/arXiv-2608.11350-b31b1b.svg)](https://arxiv.org/abs/2608.11350)  
  *2026-08 · Preprint* — **Method:** Training-free skill and harness evolution — **Contribution:** Uses target-environment rollouts to refine reusable instructions and context code while leaving model weights fixed  
  **Canonical placement:** Evaluates adaptation on VLABench and ESI-Bench; the evolving external skill library is distinct from policy fine-tuning
- **AgenticRobotics: You Don't Need To Stay in The Loop** [![arXiv 2608.07555](https://img.shields.io/badge/arXiv-2608.07555-b31b1b.svg)](https://arxiv.org/abs/2608.07555)  
  *2026-08 · Preprint* — **Method:** Agent-managed policy improvement — **Contribution:** Coordinates training and evaluation workers through recorded tool calls, recoverable state, and evidence-gated artifact promotion  
  **Canonical placement:** A preview of research-loop reliability; the measured lineage does not show better checkpoint selection than a human
- **Plans You Can Check: Verifier-Grounded Learning of an Open-Weight Planner for Executable Video-Editing (RefineCut)** <a id="refinecut"></a> [![arXiv 2608.25622](https://img.shields.io/badge/arXiv-2608.25622-b31b1b.svg)](https://arxiv.org/abs/2608.25622) [![Code](https://img.shields.io/badge/Code-GitHub-16a34a.svg?logo=github)](https://github.com/Lancelot-wy/RefineCut) [![Dataset](https://img.shields.io/badge/Dataset-Data-f59e0b.svg)](https://huggingface.co/datasets/Randallhy/RefineCut-Bench)  
  *2026-08 · Preprint* — **Method:** Verifier-replayed distillation and preference learning — **Contribution:** Trains a planner to repair typed video-editing timelines using executable constraints, then improves it with verifier-scored preference pairs  
  **Canonical placement:** The planner reads upstream clip captions, visual metadata, and music/constraint ledgers, not raw pixels. RefineCut-Bench evaluates this planning interface; verifier feedback must not be described as visual inspection
- **AutoDesign: Meta-Harness Optimization for Long-Horizon Agentic Design** <a id="autodesign"></a> [![arXiv 2608.13560](https://img.shields.io/badge/arXiv-2608.13560-b31b1b.svg)](https://arxiv.org/abs/2608.13560) [![Code](https://img.shields.io/badge/Code-GitHub-16a34a.svg?logo=github)](https://github.com/Yaxin9Luo/AutoDesign) [![Project](https://img.shields.io/badge/Project-Page-2563eb.svg)](https://autodesign.designanything.ai/)  
  *2026-08 · Technical report* — **Method:** Meta-harness optimization — **Contribution:** Uses rollout artifacts and evaluation feedback to guide a code agent in improving reusable design tools and orchestration for paper-to-poster production  
  **Canonical placement:** The primary contribution is optimization of the harness across trials; PosterBench and its controlled mini track stay with this method
- **Search Beyond What Can Be Taught: Evolving the Knowledge Boundary in Agentic Visual Generation** [![arXiv 2607.05382](https://img.shields.io/badge/arXiv-2607.05382-b31b1b.svg)](https://arxiv.org/abs/2607.05382)  
  *2026-07 · Preprint* — **Method:** Teach-then-search co-training for visual generation — **Contribution:** Builds SearchGen-20K, SearchGen-Bench, and a searchable visual corpus, then couples supervised tool-use teaching with self-improving search trajectories  
  **Canonical placement:** The primary contribution is the search-learning recipe, data, and benchmark rather than one user-facing generation system
- **VideoWeaver: Evaluating and Evolving Skills for Agentic Long Video Generation** [![arXiv 2606.08091](https://img.shields.io/badge/arXiv-2606.08091-b31b1b.svg)](https://arxiv.org/abs/2606.08091) [![Code](https://img.shields.io/badge/Code-GitHub-16a34a.svg?logo=github)](https://github.com/JianhuiWei7/VideoWeaver)  
  *2026-06 · Preprint* — **Method:** Agent-harness evaluation and skill evolution — **Contribution:** Judges execution traces and final long videos, then uses evidence-grounded feedback to refine and merge reusable generation skills  
  **Canonical placement:** The central contribution is a benchmark, harness comparison, and cross-task skill-evolution algorithm rather than one canonical deployed generation system
- **MemoGen: Can Past Experience Improve Future Text-to-Image Generation?** [![arXiv 2606.03243](https://img.shields.io/badge/arXiv-2606.03243-b31b1b.svg)](https://arxiv.org/abs/2606.03243) [![Code](https://img.shields.io/badge/Code-GitHub-16a34a.svg?logo=github)](https://github.com/Chatonz/MemoGen)  
  *2026-06 · Preprint* — **Method:** Training-free test-time self-evolution — **Contribution:** Stores task understanding, references, visual feedback, successes, and failure lessons, then retrieves them to repair related future generations  
  **Canonical placement:** The main novelty is a reusable experience-memory layer that improves a family of generators across tasks rather than a standalone user-facing runtime
- **OctoT2I: A Self-Evolving Agentic Text-to-Image Router** [![arXiv 2606.01803](https://img.shields.io/badge/arXiv-2606.01803-b31b1b.svg)](https://arxiv.org/abs/2606.01803) [![Code](https://img.shields.io/badge/Code-GitHub-16a34a.svg?logo=github)](https://github.com/JaxJiang2642081986/OctoT2I)  
  *2026-06 · Preprint* — **Method:** Stateful multi-round routing and self-evolution — **Contribution:** Explores tool capability frontiers with an autonomous Propose–Solve–Evaluate–Learn loop, building memory for quality- and efficiency-aware model selection  
  **Canonical placement:** The principal contribution is the self-evolving router and tool-capability learning mechanism rather than an artifact-editing application
- **ASPIRE: Agentic /Skills Discovery for Robotics** [![arXiv 2607.00272](https://img.shields.io/badge/arXiv-2607.00272-b31b1b.svg)](https://arxiv.org/abs/2607.00272) [![Project](https://img.shields.io/badge/Project-Page-2563eb.svg)](https://research.nvidia.com/labs/gear/aspire/) [![Code](https://img.shields.io/badge/Code-GitHub-16a34a.svg?logo=github)](https://github.com/NVlabs/ASPIRE)  
  *2026-06 · Preprint* — **Method:** Continual robot skill discovery — **Contribution:** Uses multimodal execution traces to diagnose failures, synthesize and validate code repairs, and accumulate transferable skills through evolutionary exploration  
  **Canonical placement:** The main contribution is continual skill acquisition; experiments study held-out tasks and transfer of simulation-discovered skills to physical robots
- **ENPIRE: Agentic Robot Policy Self-Improvement in the Real World** [![arXiv 2606.19980](https://img.shields.io/badge/arXiv-2606.19980-b31b1b.svg)](https://arxiv.org/abs/2606.19980) [![Project](https://img.shields.io/badge/Project-Page-2563eb.svg)](https://research.nvidia.com/labs/gear/enpire/) [![Code](https://img.shields.io/badge/Code-GitHub-16a34a.svg?logo=github)](https://github.com/NVlabs/ENPIRE)  
  *2026-06 · Preprint* — **Method:** Physical policy self-improvement — **Contribution:** Connects scene reset, policy rollout, outcome verification, and code/training refinement for repeated physical experiments  
  **Canonical placement:** Evaluates the policy-research loop, including AutoEnvBench on Push-T and Pin Insertion; task-specific resets, verification, and hardware remain part of the setup
- **Playful Agentic Robot Learning** [![arXiv 2606.19419](https://img.shields.io/badge/arXiv-2606.19419-b31b1b.svg)](https://arxiv.org/abs/2606.19419) [![Project](https://img.shields.io/badge/Project-Page-2563eb.svg)](https://playful-rats.github.io/) [![Code](https://img.shields.io/badge/Code-GitHub-16a34a.svg?logo=github)](https://github.com/Playful-RATs/RATs)  
  *2026-06 · Preprint* — **Method:** Self-directed robot practice — **Contribution:** RATs proposes practice tasks, tests robot programs, diagnoses failures, and stores successful code skills for later tasks  
  **Canonical placement:** Learning occurs before downstream evaluation, which retrieves a frozen skill library; includes simulation experiments and physical transfer
- **Task-Focused Memorization for Multimodal Agents** [![arXiv 2605.31075](https://img.shields.io/badge/arXiv-2605.31075-b31b1b.svg)](https://arxiv.org/abs/2605.31075)  
  *2026-05 · Preprint* — **Method:** Reinforcement-learned multimodal memory selection — **Contribution:** Learns what to store from streaming video so later task decisions recover relevant visual evidence under a bounded memory budget  
  **Canonical placement:** The principal contribution is the task-conditioned memorization objective and policy rather than a complete action-taking video agent
- **GenEvolve: Self-Evolving Image Generation Agents via Tool-Orchestrated Visual Experience Distillation** [![arXiv 2605.21605](https://img.shields.io/badge/arXiv-2605.21605-b31b1b.svg)](https://arxiv.org/abs/2605.21605) [![Project](https://img.shields.io/badge/Project-Page-2563eb.svg)](https://ephemeral182.github.io/GenEvolve/) [![Code](https://img.shields.io/badge/Code-GitHub-16a34a.svg?logo=github)](https://github.com/MeiGen-AI/GenEvolve)  
  *2026-05 · Preprint* — **Method:** Tool-orchestrated visual experience distillation — **Contribution:** Compares best and worst generation trajectories and turns their structured differences into dense supervision for search, reference selection, and prompt construction  
  **Canonical placement:** The primary result is a self-distillation framework, dataset, and benchmark for improving image-generation agents rather than one fixed deployed system
- **EmbodiSkill: Skill-Aware Reflection for Self-Evolving Embodied Agents** [![arXiv 2605.10332](https://img.shields.io/badge/arXiv-2605.10332-b31b1b.svg)](https://arxiv.org/abs/2605.10332) [![Project](https://img.shields.io/badge/Project-Page-2563eb.svg)](https://air-embodied-brain.github.io/EmbodiSkill/) [![Code](https://img.shields.io/badge/Code-GitHub-16a34a.svg?logo=github)](https://github.com/air-embodied-brain/EmbodiSkill)  
  *2026-05 · Preprint* — **Method:** Skill-aware reflection — **Contribution:** Separates defects in skill content from failures to follow valid guidance, then revises or reinforces the skill accordingly  
  **Canonical placement:** Evaluates training-free procedural adaptation on ALFWorld and EmbodiedBench in simulation
- **Learning While Deploying: Fleet-Scale Reinforcement Learning for Generalist Robot Policies** [![arXiv 2605.00416](https://img.shields.io/badge/arXiv-2605.00416-b31b1b.svg)](https://arxiv.org/abs/2605.00416)  
  *2026-05 · Preprint* — **Method:** Fleet-scale offline–online reinforcement learning — **Contribution:** Combines autonomous rollouts and human interventions to improve and redeploy a shared VLA policy across robot fleets  
  **Canonical placement:** The main contribution is continual policy post-training, evaluated with physical robots; human interventions remain part of the learning process
- **Vision-DeepResearch: Incentivizing DeepResearch Capability in Multimodal Large Language Models** <a id="vision-deepresearch"></a> [![arXiv 2601.22060](https://img.shields.io/badge/arXiv-2601.22060-b31b1b.svg)](https://arxiv.org/abs/2601.22060) [![Code](https://img.shields.io/badge/Code-GitHub-16a34a.svg?logo=github)](https://github.com/Osilly/Vision-DeepResearch)  
  *2026-01 · Preprint* — **Method:** Supervised and reinforcement learning for multimodal research — **Contribution:** Trains interleaved visual and textual search with multi-entity, multi-scale evidence gathering and tool-conditioned reasoning  
  **Canonical placement:** This training paper is distinct from Video-DeepResearch (2608.03979); the shared repository does not merge their evaluated contributions
- **Scaling Agentic Reinforcement Learning for Tool-Integrated Reasoning in VLMs (VISTA-Gym / VISTA-R1)** [![arXiv 2511.19773](https://img.shields.io/badge/arXiv-2511.19773-b31b1b.svg)](https://arxiv.org/abs/2511.19773) [![Code](https://img.shields.io/badge/Code-GitHub-16a34a.svg?logo=github)](https://github.com/Lucanyc/VISTA-Gym)  
  *2025-11 · CVPR 2026* — **Method:** Agentic reinforcement learning — **Contribution:** Provides an executable visual-tool environment, verifiable feedback, trajectory infrastructure, and multi-turn RL for tool-integrated reasoning  
  **Canonical placement:** The primary evaluated contribution is the scalable training environment and learning recipe, rather than a deployed end-to-end task system
- **DeepEyesV2: Toward Agentic Multimodal Model** <a id="deepeyes-v2"></a> [![arXiv 2511.05271](https://img.shields.io/badge/arXiv-2511.05271-b31b1b.svg)](https://arxiv.org/abs/2511.05271) [![Project](https://img.shields.io/badge/Project-Page-2563eb.svg)](https://visual-agent.github.io/)  
  *2025-11 · Preprint* — **Method:** Cold-start tool learning followed by reinforcement learning — **Contribution:** Establishes tool-use patterns before optimizing adaptive image operations, code execution, search, and combined tool reasoning  
  **Canonical placement:** This separate follow-up to DeepEyes contributes the training recipe and RealX-Bench; direct RL and cold-start-plus-RL are distinct ablations
- **Scaling Agents for Computer Use (Agent S3 / BJudge)** <a id="agent-s3"></a> [![arXiv 2510.02250](https://img.shields.io/badge/arXiv-2510.02250-b31b1b.svg)](https://arxiv.org/abs/2510.02250) [![Code](https://img.shields.io/badge/Code-GitHub-16a34a.svg?logo=github)](https://github.com/simular-ai/Agent-S)  
  *2025-10 · Preprint* — **Method:** Test-time trajectory selection — **Contribution:** Uses behavior-grounded judgment (BJudge) to assess and choose among multiple computer-use rollouts in Agent S3  
  **Canonical placement:** The main result is scaling execution and selection at test time, building on the [Agent S2](#agent-s2) lineage; multi-rollout scores require their own attempt and compute budgets
- **Process-Supervised Reinforcement Learning for Interactive Multimodal Tool-Use Agents** [![arXiv 2509.14480](https://img.shields.io/badge/arXiv-2509.14480-b31b1b.svg)](https://arxiv.org/abs/2509.14480)  
  *2025-09 · Preprint* — **Method:** Turn-level adjudicated reinforcement learning — **Contribution:** Trains interleaved speech-text tool-use trajectories with judge feedback at each turn to improve long-horizon credit assignment  
  **Canonical placement:** The main artifact is an RL sandbox and learning framework rather than a deployed multimodal task system
- **Self-Improving Embodied Foundation Models** [![arXiv 2509.15155](https://img.shields.io/badge/arXiv-2509.15155-b31b1b.svg)](https://arxiv.org/abs/2509.15155) [![Project](https://img.shields.io/badge/Project-Page-2563eb.svg)](https://self-improving-efms.github.io/)  
  *2025-09 · NeurIPS 2025* — **Method:** Reward learning and autonomous policy practice — **Contribution:** Combines demonstration fine-tuning, steps-to-go prediction, learned success detection, and reinforcement learning  
  **Canonical placement:** The evaluated contribution is a post-training recipe for embodied foundation models, with simulation and physical experiments
- **SEAgent: Self-Evolving Computer Use Agent with Autonomous Learning from Experience** [![arXiv 2508.04700](https://img.shields.io/badge/arXiv-2508.04700-b31b1b.svg)](https://arxiv.org/abs/2508.04700) [![Code](https://img.shields.io/badge/Code-GitHub-16a34a.svg?logo=github)](https://github.com/SunzeY/SEAgent)  
  *2025-08 · ICML 2026* — **Method:** Autonomous experiential learning for computer use — **Contribution:** Couples a world-state model and curriculum generator with failure imitation and GRPO so agents learn unfamiliar software through trial and error  
  **Canonical placement:** The main artifact is a self-evolving training framework and learned computer-use policy rather than one fixed end-user software workflow
- **VisualToolAgent (VisTA)** [![arXiv 2505.20289](https://img.shields.io/badge/arXiv-2505.20289-b31b1b.svg)](https://arxiv.org/abs/2505.20289) [![Project](https://img.shields.io/badge/Project-Page-2563eb.svg)](https://oodbag.github.io/vista_web/)  
  *2025-05 · Preprint* — **Method:** Visual-tool selection reinforcement learning — **Contribution:** Uses task-outcome rewards and GRPO to learn query-specific selection and composition of visual tools  
  **Canonical placement:** Feedback optimizes the training policy; the primary contribution is the learning framework, not a separately evaluated external-environment system
- **DeepEyes** [![arXiv 2505.14362](https://img.shields.io/badge/arXiv-2505.14362-b31b1b.svg)](https://arxiv.org/abs/2505.14362) [![Code](https://img.shields.io/badge/Code-GitHub-16a34a.svg?logo=github)](https://github.com/Visual-Agent/DeepEyes)  
  *2025-05 · ICLR 2026* — **Method:** Agentic visual-tool reinforcement learning — **Contribution:** Incentivizes interleaved visual and textual reasoning through tool-use data selection and outcome-based rewards  
  **Canonical placement:** The primary result is a reinforcement-learning recipe and model capability; no general external action-feedback runtime is contributed  
  **Series:** [DeepEyesV2](#deepeyes-v2) is a separate paper on cold-start tool learning followed by RL, with RealX-Bench attached

### 5.3 World Models and Model-Based Planning

- **WM-R1: Training GUI Agents to Reason and leverage World Models with Reinforcement Learning** <a id="wm-r1"></a> [![arXiv 2608.27508](https://img.shields.io/badge/arXiv-2608.27508-b31b1b.svg)](https://arxiv.org/abs/2608.27508) [![Code](https://img.shields.io/badge/Code-GitHub-16a34a.svg?logo=github)](https://github.com/genalyu/WM-R1)  
  *2026-08 · Preprint* — **Method:** World-model-based GUI reinforcement learning — **Contribution:** Uses generated state transitions instead of Android interaction within training rollouts and teaches consequence prediction before selecting actions  
  **Canonical placement:** The contribution is the learning and planning method; distinguish simulated training transitions from candidate-action lookahead at inference
- **World Action Planner** [![arXiv 2607.27599](https://img.shields.io/badge/arXiv-2607.27599-b31b1b.svg)](https://arxiv.org/abs/2607.27599) [![Project](https://img.shields.io/badge/Project-Page-2563eb.svg)](https://worldactionplanner.github.io/)  
  *2026-07 · Preprint* — **Method:** Action-conditioned world-model planning — **Contribution:** Proposes action plans and iteratively refines them through optimization and search over imagined rollouts  
  **Canonical placement:** The demonstrated refinement feedback comes from imagined rollouts; the paper's primary contribution is the planning method rather than a general runtime architecture
- **Agentic Self-Evolutionary Replanning for Embodied Navigation** [![arXiv 2603.02772](https://img.shields.io/badge/arXiv-2603.02772-b31b1b.svg)](https://arxiv.org/abs/2603.02772)  
  *2026-03 · Preprint* — **Method:** Adaptive action modeling and replanning — **Contribution:** Updates the navigation action model from recent failures and uses graph-based LLM reasoning to revise plans  
  **Canonical placement:** The main contribution is online action-model adaptation and replanning, tested in simulation and real navigation
- **RISE: Self-Improving Robot Policy with Compositional World Model** [![arXiv 2602.11075](https://img.shields.io/badge/arXiv-2602.11075-b31b1b.svg)](https://arxiv.org/abs/2602.11075)  
  *2026-02 · RSS 2026* — **Method:** Robot reinforcement learning via imagination — **Contribution:** Predicts multiview futures, evaluates imagined outcomes, and converts rollout advantages into policy updates for contact-rich manipulation  
  **Canonical placement:** Its closed loop operates primarily in imagined training rollouts; the evaluated contribution is a world-model learning method rather than a general deployed agent architecture
- **VLAW: Iterative Co-Improvement of Vision-Language-Action Policy and World Model** [![arXiv 2602.12063](https://img.shields.io/badge/arXiv-2602.12063-b31b1b.svg)](https://arxiv.org/abs/2602.12063) [![Project](https://img.shields.io/badge/Project-Page-2563eb.svg)](https://sites.google.com/view/vla-w) [![Code](https://img.shields.io/badge/Code-GitHub-16a34a.svg?logo=github)](https://github.com/Robert-gyj/Ctrl-World)  
  *2026-02 · Preprint* — **Method:** World-model and VLA co-improvement — **Contribution:** Uses physical rollouts to refine an action-conditioned video model, then uses synthetic rollouts to improve the robot policy  
  **Canonical placement:** The closed loop optimizes the policy and learned simulator; the linked Ctrl-World release covers the world-model component
- **Genie 3: A New Frontier for World Models** <a id="genie-3"></a> [![Project](https://img.shields.io/badge/Project-Page-2563eb.svg)](https://deepmind.google/blog/genie-3-a-new-frontier-for-world-models/)  
  *2025-08 · Research release* — **Method:** Action-conditioned interactive world modeling — **Contribution:** Generates controllable visual environments whose subsequent views respond to actions, providing a research substrate for virtual-agent interaction  
  **Canonical placement:** Genie 3 is an enabling world model, not an agent or an openly reproducible simulator; see [SIMA 2](#sima-2) for an agent evaluated in generated worlds
- **V-JEPA 2-AC** [![arXiv 2506.09985](https://img.shields.io/badge/arXiv-2506.09985-b31b1b.svg)](https://arxiv.org/abs/2506.09985) [![Code](https://img.shields.io/badge/Code-GitHub-16a34a.svg?logo=github)](https://github.com/facebookresearch/vjepa2)  
  *2025-06 · Technical report* — **Method:** Action-conditioned world model — **Contribution:** Predicts latent visual futures and plans toward image goals  
  **Canonical placement:** Current and goal images come from one visual modality; actions do not create a second information modality
- **COMBO: Compositional World Models for Embodied Multi-Agent Cooperation** [![arXiv 2404.10775](https://img.shields.io/badge/arXiv-2404.10775-b31b1b.svg)](https://arxiv.org/abs/2404.10775) [![Project](https://img.shields.io/badge/Project-Page-2563eb.svg)](https://umass-embodied-agi.github.io/COMBO/) [![Code](https://img.shields.io/badge/Code-GitHub-16a34a.svg?logo=github)](https://github.com/UMass-Embodied-AGI/COMBO)  
  *2024-04 · ICLR 2025* — **Method:** Compositional world modeling — **Contribution:** Reconstructs shared state, predicts multi-agent action outcomes, and supports online cooperative tree search  
  **Canonical placement:** The primary evaluated novelty is the compositional generative world model and planning method rather than one canonical deployed system
- **DreamerV3** [![arXiv 2301.04104](https://img.shields.io/badge/arXiv-2301.04104-b31b1b.svg)](https://arxiv.org/abs/2301.04104) [![Paper](https://img.shields.io/badge/Paper-Nature-b31b1b.svg)](https://www.nature.com/articles/s41586-025-08744-2) [![Code](https://img.shields.io/badge/Code-GitHub-16a34a.svg?logo=github)](https://github.com/danijar/dreamerv3)  
  *2023-01 · Nature 2025* — **Method:** World-model reinforcement learning — **Contribution:** Learns dynamics and behavior through imagined rollouts across many control domains  
  **Canonical placement:** Pixels plus actions and rewards do not satisfy the two-information-modality gate

### 5.4 Multi-Agent and Conversational Coordination

- **Spine-Branch Coordination for Multi-agent Computer Use** <a id="spine-branch"></a> [![arXiv 2608.22077](https://img.shields.io/badge/arXiv-2608.22077-b31b1b.svg)](https://arxiv.org/abs/2608.22077) [![Project](https://img.shields.io/badge/Project-Page-2563eb.svg)](https://mianzhang.github.io/spine-branch-computer-use/)  
  *2026-08 · Preprint* — **Method:** State-preserving multi-agent coordination — **Contribution:** Keeps one continuous main desktop state while parallel branches explore or gather evidence and return structured results  
  **Canonical placement:** The method addresses non-mergeable VM state in computer use; branch findings inform the main execution path without assuming arbitrary desktop states can be merged
- **EMOS: Embodiment-aware Heterogeneous Multi-robot Operating System with LLM Agents** [![arXiv 2410.22662](https://img.shields.io/badge/arXiv-2410.22662-b31b1b.svg)](https://arxiv.org/abs/2410.22662) [![Project](https://img.shields.io/badge/Project-Page-2563eb.svg)](https://emos-project.github.io/) [![Code](https://img.shields.io/badge/Code-GitHub-16a34a.svg?logo=github)](https://github.com/SgtVincent/EMOS)  
  *2024-10 · ICLR 2025* — **Method:** Embodiment-aware multi-robot coordination — **Contribution:** Builds capability descriptions from robot models and kinematics tools, then uses them for team planning and parallel execution in Habitat-MAS  
  **Canonical placement:** The main contribution is embodiment-aware coordination and its simulation benchmark; the paper does not establish physical multi-robot deployment
- **Conversational Language Models for Human-in-the-Loop Multi-Robot Coordination** [![arXiv 2402.19166](https://img.shields.io/badge/arXiv-2402.19166-b31b1b.svg)](https://arxiv.org/abs/2402.19166)  
  *2024-02 · Preprint* — **Method:** Multi-robot coordination — **Contribution:** Uses peer-to-peer and human-robot dialogue to plan heterogeneous roles and paths  
  **Canonical placement:** Every reported reasoning step is textual; physical execution alone does not establish a second decision-relevant modality
- **SpeechAgents** [![arXiv 2401.03945](https://img.shields.io/badge/arXiv-2401.03945-b31b1b.svg)](https://arxiv.org/abs/2401.03945) [![Code](https://img.shields.io/badge/Code-GitHub-16a34a.svg?logo=github)](https://github.com/0nutation/SpeechAgents)  
  *2024-01 · Preprint* — **Method:** Multi-agent spoken interaction — **Contribution:** Coordinates dialogue content, timing, and affect across speech-generating agents  
  **Canonical placement:** Speech realization, transcript, prosody, and emotion are coupled representations of the same utterance; no independent external modality closes the loop
- **Robots That Ask For Help: Uncertainty Alignment for Large Language Model Planners** [![arXiv 2307.01928](https://img.shields.io/badge/arXiv-2307.01928-b31b1b.svg)](https://arxiv.org/abs/2307.01928) [![Project](https://img.shields.io/badge/Project-Page-2563eb.svg)](https://robot-help.github.io/) [![Code](https://img.shields.io/badge/Code-GitHub-16a34a.svg?logo=github)](https://github.com/google-research/google-research/tree/master/language_model_uncertainty)  
  *2023-07 · CoRL 2023* — **Method:** Uncertainty-calibrated human assistance — **Contribution:** KnowNo uses conformal prediction to decide when a language-based planner should ask a person to resolve ambiguous actions  
  **Canonical placement:** The contribution is uncertainty calibration and clarification, evaluated in simulated and physical tasks; its guarantees depend on calibration assumptions

## 6. Benchmarks, Datasets, and Environments

Resources use the same six **primary action domains** as the end-to-end system index and are ordered in reverse chronology within each branch. Temporal properties such as streaming and participant properties such as collaboration remain metadata rather than directory levels.

**Evaluation level.** New and revised entries identify whether they test a component, a fixed artifact or replayed observation stream, an interactive trajectory, or complete task execution. These levels can coexist in one paper. State the observation mode, real application versus controlled replica or simulator, attempt/step budget, and whether the metric measures final completion, partial progress, quality, or cost before comparing scores. Dataset-only resources are not evidence of an evaluated runtime agent. Older entries should acquire this field when their protocols are reviewed.

**Cross-domain evaluation:** [WorldMemArena](#worldmemarena) covers memory across interaction domains; the [reading paths](#14-cross-section-reading-paths) connect memory, verification, and coordination without duplicating papers under several action domains.

**In this section:** [Information seeking and media understanding](#61-information-seeking-and-media-understanding) · [Creative and multimodal workflows](#62-creative-and-multimodal-workflows) · [Conversation and social interaction](#63-conversation-and-social-interaction) · [Digital and software environments](#64-digital-and-software-environments) · [Virtual, 3D, and open worlds](#65-virtual-3d-and-open-worlds) · [Physical robotics and multi-robot systems](#66-physical-robotics-and-multi-robot-systems)

### 6.1 Information Seeking and Media Understanding

Cross-domain memory evaluation enters through [WorldMemArena](#worldmemarena). Component-specific PerceptMem, MMA-Bench, and streaming commentary tracks stay with their respective [memory components](#43-spatial-memory-and-tool-use-models-and-components); RealX-Bench stays with [DeepEyesV2](#deepeyes-v2).

- **StreamArena** [![arXiv 2608.05703](https://img.shields.io/badge/arXiv-2608.05703-b31b1b.svg)](https://arxiv.org/abs/2608.05703)  
  *2026-08 · Preprint* — **Type:** Benchmark + baseline system — **Modalities / environment:** Hour-scale audiovisual streams; Language; Persistent multimodal memory; External search  
  **Evaluates:** Continuous perception, historical recall, proactive interaction, multimodal tool use, and response latency over open-ended long-video tasks
- **TVIR** [![arXiv 2606.02320](https://img.shields.io/badge/arXiv-2606.02320-b31b1b.svg)](https://arxiv.org/abs/2606.02320)  
  *2026-06 · Preprint* — **Type:** Benchmark + baseline system — **Modalities / environment:** Language; Retrieved images; Charts; Sources; Interleaved reports  
  **Evaluates:** Evidence-driven text-visual deep research and report generation
- **WorldMemArena: Evaluating Multimodal Agent Memory Through Action-World Interaction** <a id="worldmemarena"></a> [![arXiv 2605.29341](https://img.shields.io/badge/arXiv-2605.29341-b31b1b.svg)](https://arxiv.org/abs/2605.29341) [![Project](https://img.shields.io/badge/Project-Page-2563eb.svg)](https://worldmemarena-mem.github.io/) [![Code](https://img.shields.io/badge/Code-GitHub-16a34a.svg?logo=github)](https://github.com/UCSB-AI/WorldMemArena) [![Dataset](https://img.shields.io/badge/Dataset-Data-f59e0b.svg)](https://huggingface.co/datasets/LCZZZZ/WorldMemArena)  
  *2026-05 · Preprint* — **Type:** Memory benchmark + staged evaluation — **Modalities / environment:** Language; Multimodal interaction records; Cross-domain action/world trajectories — **Evaluation level:** Staged memory tasks and trajectory-grounded evaluation  
  **Evaluates:** Memory writing, maintenance, retrieval, and use across sessions and changing world state; cross-domain coverage is indexed here rather than treated as a robot-only task suite
- **MMOU** [![arXiv 2603.14145](https://img.shields.io/badge/arXiv-2603.14145-b31b1b.svg)](https://arxiv.org/abs/2603.14145)  
  *2026-03 · Preprint* — **Type:** Benchmark — **Modalities / environment:** Long video; Audio; Visual content; Language  
  **Evaluates:** Joint omni-modal reasoning over complex real-world video
- **RIVER** [![arXiv 2603.03985](https://img.shields.io/badge/arXiv-2603.03985-b31b1b.svg)](https://arxiv.org/abs/2603.03985) [![Code](https://img.shields.io/badge/Code-GitHub-16a34a.svg?logo=github)](https://github.com/OpenGVLab/RIVER)  
  *2026-03 · Preprint* — **Type:** Benchmark — **Modalities / environment:** Streaming video; Language; Online memory  
  **Evaluates:** Immediate perception and retrospective memory in live video
- **Strategic Navigation or Stochastic Search? How Agents and Humans Reason Over Document Collections (MADQA)** <a id="madqa"></a> [![arXiv 2603.12180](https://img.shields.io/badge/arXiv-2603.12180-b31b1b.svg)](https://arxiv.org/abs/2603.12180) [![Code](https://img.shields.io/badge/Code-GitHub-16a34a.svg?logo=github)](https://github.com/OxRML/MADQA) [![Dataset](https://img.shields.io/badge/Dataset-Data-f59e0b.svg)](https://huggingface.co/datasets/OxRML/MADQA)  
  *2026-03 · Preprint* — **Type:** Document-collection benchmark + harness — **Modalities / environment:** Heterogeneous PDF documents; Visual/textual evidence; Search interactions — **Evaluation level:** Interactive evidence search over a fixed collection  
  **Evaluates:** Answer accuracy versus search effort, navigation strategy, repeated unproductive searches, and differences between agent and human performance
- **LongShOTBench** [![arXiv 2512.16978](https://img.shields.io/badge/arXiv-2512.16978-b31b1b.svg)](https://arxiv.org/abs/2512.16978) [![Code](https://img.shields.io/badge/Code-GitHub-16a34a.svg?logo=github)](https://github.com/mbzuai-oryx/longshot)  
  *2025-12 · Preprint* — **Type:** Benchmark + baseline agent — **Modalities / environment:** Long video; Speech; Ambient audio; Language; Tool outputs  
  **Evaluates:** Open-ended single- and multi-turn reasoning, evidence tracing, tool use, and diagnostic rubric scoring over long omni-modal video
- **M3-Bench** [![arXiv 2511.17729](https://img.shields.io/badge/arXiv-2511.17729-b31b1b.svg)](https://arxiv.org/abs/2511.17729) [![Code](https://img.shields.io/badge/Code-GitHub-16a34a.svg?logo=github)](https://github.com/EtaYang10th/Open-M3-Bench)  
  *2025-11 · Preprint* — **Type:** Benchmark — **Modalities / environment:** Images; Language; MCP tool graphs; Intermediate resources  
  **Evaluates:** Semantic fidelity and workflow consistency in multi-hop, multi-threaded multimodal tool use across 28 servers and 231 tools
- **MMSearch-Plus: Benchmarking Provenance-Aware Search for Multimodal Browsing Agents** <a id="mmsearch-plus"></a> [![arXiv 2508.21475](https://img.shields.io/badge/arXiv-2508.21475-b31b1b.svg)](https://arxiv.org/abs/2508.21475)  
  *2025-08 · ICLR 2026* — **Type:** Multimodal browsing benchmark — **Modalities / environment:** Images; Language; Web evidence; Source provenance — **Evaluation level:** Interactive browsing / search  
  **Evaluates:** Fine-grained visual evidence gathering and source attribution; trajectory failure analysis is indexed with [Silent Failures](#silent-failures)
- **MMAU** [![arXiv 2410.19168](https://img.shields.io/badge/arXiv-2410.19168-b31b1b.svg)](https://arxiv.org/abs/2410.19168) [![Project](https://img.shields.io/badge/Project-Page-2563eb.svg)](https://sakshi113.github.io/mmau_homepage/)  
  *2024-10 · Preprint* — **Type:** Benchmark — **Modalities / environment:** Speech; Environmental sound; Music; Language  
  **Evaluates:** Expert-level audio understanding and reasoning
- **LongVideoBench** [![arXiv 2407.15754](https://img.shields.io/badge/arXiv-2407.15754-b31b1b.svg)](https://arxiv.org/abs/2407.15754) [![Code](https://img.shields.io/badge/Code-GitHub-16a34a.svg?logo=github)](https://github.com/longvideobench/LongVideoBench)  
  *2024-07 · NeurIPS 2024* — **Type:** Benchmark — **Modalities / environment:** Long video; Interleaved subtitles; Language  
  **Evaluates:** Retrieval and reasoning over videos up to an hour
- **Video-MME** [![arXiv 2405.21075](https://img.shields.io/badge/arXiv-2405.21075-b31b1b.svg)](https://arxiv.org/abs/2405.21075) [![Project](https://img.shields.io/badge/Project-Page-2563eb.svg)](https://video-mme.github.io/home_page.html)  
  *2024-05 · CVPR 2025* — **Type:** Benchmark — **Modalities / environment:** Video; Subtitles; Audio; Language  
  **Evaluates:** Short-to-long multimodal video understanding
- **MMInA** [![arXiv 2404.09992](https://img.shields.io/badge/arXiv-2404.09992-b31b1b.svg)](https://arxiv.org/abs/2404.09992) [![Project](https://img.shields.io/badge/Project-Page-2563eb.svg)](https://mmina.cliangyu.com/)  
  *2024-04 · ACL 2025 Findings* — **Type:** Benchmark + evolving websites — **Modalities / environment:** Language; Web text; Images; Browser state  
  **Evaluates:** Multihop compositional information seeking across evolving real-world websites, with both final success and intermediate progress evaluation
- **GAIA** [![arXiv 2311.12983](https://img.shields.io/badge/arXiv-2311.12983-b31b1b.svg)](https://arxiv.org/abs/2311.12983) [![Dataset](https://img.shields.io/badge/Dataset-Data-f59e0b.svg)](https://huggingface.co/datasets/gaia-benchmark/GAIA)  
  *2023-11 · ICLR 2024* — **Type:** Benchmark — **Modalities / environment:** Language; Images and files; Web; Tool outputs  
  **Evaluates:** General assistants requiring reasoning, multimodality, web browsing, and tool use

### 6.2 Creative and Multimodal Workflows

Bundled creative benchmarks remain with their primary contributions: PROS-Bench with [PROS](#pros), MMLVE-Bench with [Thinking on Shots](#thinking-on-shots), the canvas-editing dataset with [ACE](#ace), PosterBench with [AutoDesign](#autodesign), and RefineCut-Bench with [RefineCut](#refinecut).

- **VideoVIBE: A Video-Grounded Diagnostic Benchmark for One-Shot Interactive Website Generation** [![arXiv 2608.09573](https://img.shields.io/badge/arXiv-2608.09573-b31b1b.svg)](https://arxiv.org/abs/2608.09573)  
  *2026-08 · Preprint* — **Type:** Benchmark + diagnostic agent — **Modalities / environment:** Video; Source code; Rendered websites; Interaction traces  
  **Evaluates:** Semantic-logical, visual-motion, structural-temporal, and functional failure diagnosis for one-shot interactive website generation
- **DrawAI** [![arXiv 2608.00548](https://img.shields.io/badge/arXiv-2608.00548-b31b1b.svg)](https://arxiv.org/abs/2608.00548) [![Project](https://img.shields.io/badge/Project-Page-2563eb.svg)](https://drawai.renaissancemind.ai/)  
  *2026-08 · Preprint* — **Type:** Benchmark + baseline workflow — **Modalities / environment:** Raster images; Extracted elements; Executable graphics; Rendered revisions  
  **Evaluates:** Fidelity and editability in image-to-editable reconstruction, including a code-render-validate-revise baseline
- **VisEditBench: Can Vision-Language Models Edit Visualization Code from Multimodal Feedback?** <a id="viseditbench"></a> [![arXiv 2608.10408](https://img.shields.io/badge/arXiv-2608.10408-b31b1b.svg)](https://arxiv.org/abs/2608.10408) [![Code](https://img.shields.io/badge/Code-GitHub-16a34a.svg?logo=github)](https://github.com/vis-nlp/VisEditBench)  
  *2026-08 · Preprint* — **Type:** Visualization-editing benchmark — **Modalities / environment:** Chart images; Visual annotations; Language feedback; Visualization code — **Evaluation level:** Artifact editing on fixed task instances  
  **Evaluates:** Repair and style transfer from multimodal feedback; code execution and rendered outcomes test editing correctness, separately from broad desktop task completion
- **VideoArgus: Agentic Rubric-Grounded Unified Evaluation for Video Generation and Editing** <a id="videoargus"></a> [![arXiv 2608.05485](https://img.shields.io/badge/arXiv-2608.05485-b31b1b.svg)](https://arxiv.org/abs/2608.05485) [![Project](https://img.shields.io/badge/Project-Page-2563eb.svg)](https://zzzmyyzeng.github.io/VideoArgus)  
  *2026-08 · Preprint* — **Type:** Video evaluation framework + VideoArgus-Bench — **Modalities / environment:** Generated/edited video; Instructions; Instance-specific rubrics; Visual evidence — **Evaluation level:** Evaluator / artifact assessment  
  **Evaluates:** Rubric-grounded scoring and evidence traceability, including agreement with human judgments; this evaluator is not a video-generation agent
- **AVE-Compass** [![arXiv 2607.24821](https://img.shields.io/badge/arXiv-2607.24821-b31b1b.svg)](https://arxiv.org/abs/2607.24821)  
  *2026-07 · Preprint* — **Type:** Benchmark + baseline agent — **Modalities / environment:** Video; Speech; Non-speech audio; Language; Edited audiovisual output  
  **Evaluates:** Instruction following, fidelity, realism, editing intent, and cross-modal alignment in joint audio-video editing
- **PPT-Eval: A Benchmark for Computer-Use Agents on PowerPoint Tasks** [![arXiv 2606.31154](https://img.shields.io/badge/arXiv-2606.31154-b31b1b.svg)](https://arxiv.org/abs/2606.31154) [![Project](https://img.shields.io/badge/Project-Page-2563eb.svg)](https://microsoft.github.io/ppteval/)  
  *2026-06 · ICML 2026* — **Type:** Benchmark + rubric-based evaluator — **Modalities / environment:** PowerPoint files; Rendered slides; Language instructions; Application state  
  **Evaluates:** Partial progress, instruction following, unnecessary changes, and visual quality across 120 presentation-creation and editing tasks
- **Automatic Slide Updating with User-Defined Dynamic Templates and Natural Language Instructions (DynaSlide)** [![arXiv 2604.17894](https://img.shields.io/badge/arXiv-2604.17894-b31b1b.svg)](https://arxiv.org/abs/2604.17894)  
  *2026-04 · ACL 2026 Findings* — **Type:** Benchmark + agentic baseline — **Modalities / environment:** Source and target slides; Language instructions; External databases; Slide structure and rendering  
  **Evaluates:** 20,036 instruction-execution triples for updating user-authored reporting slides while preserving layout and style; SlideAgent provides a tool-augmented baseline
- **Vision2Web: A Hierarchical Benchmark for Visual Website Development with Agent Verification** [![arXiv 2603.26648](https://img.shields.io/badge/arXiv-2603.26648-b31b1b.svg)](https://arxiv.org/abs/2603.26648)  
  *2026-03 · Preprint* — **Type:** Hierarchical benchmark + agent verifier — **Modalities / environment:** Website screenshots; Source code; Rendered pages; Interactive test cases  
  **Evaluates:** 193 static UI, multi-page frontend, and long-horizon full-stack development tasks using GUI-agent verification and a vision-language judge
- **PresentBench: A Fine-Grained Rubric-Based Benchmark for Slide Generation** [![arXiv 2603.07244](https://img.shields.io/badge/arXiv-2603.07244-b31b1b.svg)](https://arxiv.org/abs/2603.07244)  
  *2026-03 · Preprint* — **Type:** Benchmark — **Modalities / environment:** Background documents and media; Generated slide decks; Instance-specific binary rubrics  
  **Evaluates:** Real-world slide generation across 238 instances with an average of 54.1 fine-grained checklist items and human-aligned scoring
- **FronTalk: Benchmarking Front-End Development as Conversational Code Generation with Multi-Modal Feedback** [![arXiv 2601.04203](https://img.shields.io/badge/arXiv-2601.04203-b31b1b.svg)](https://arxiv.org/abs/2601.04203)  
  *2025-12 · CoLM 2026* — **Type:** Benchmark + agent-based evaluator and baseline — **Modalities / environment:** Text instructions; Sketches, mockups, and annotated screenshots; Website code and rendered interaction  
  **Evaluates:** One hundred multi-turn frontend dialogues, visual-feedback interpretation, functional correctness, user experience, and forgetting; AceCoder critiques prior implementations with a web agent
- **PPTArena: A Benchmark for PowerPoint Editing** [![arXiv 2512.03042](https://img.shields.io/badge/arXiv-2512.03042-b31b1b.svg)](https://arxiv.org/abs/2512.03042) [![Code](https://img.shields.io/badge/Code-GitHub-16a34a.svg?logo=github)](https://github.com/michaelofengenden/PPTArena)  
  *2025-12 · ECCV 2026* — **Type:** Benchmark + baseline agent — **Modalities / environment:** PowerPoint structure; Rendered slides; Language instructions; XML and programmatic tools  
  **Evaluates:** More than 1,300 edits across 100 real decks using structural-diff and visual-quality judges; PPTPilot adds an iterative plan-edit-check baseline

### 6.3 Conversation and Social Interaction

- **Time-Aware Assistive Navigation (TIMELI)** <a id="timeli"></a> [![arXiv 2609.05596](https://img.shields.io/badge/arXiv-2609.05596-b31b1b.svg)](https://arxiv.org/abs/2609.05596) [![Project](https://img.shields.io/badge/Project-Page-2563eb.svg)](https://timeli-icra.github.io/)  
  *2026-09 · Preprint* — **Type:** Assistive-navigation benchmark + baseline — **Modalities / environment:** Egocentric video; Language instructions; Outdoor navigation simulation — **Evaluation level:** Open-loop; Closed-loop simulation; Sim-to-real transfer  
  **Evaluates:** When to speak, remain silent, and provide timely navigation guidance; instruction quality and timing are separate from physical robot control. The paper promises release, so the project link alone is not evidence of downloadable code
- **When Seeing Is Not Enough: Benchmarking Interactive Visual Grounding in LVLMs** <a id="interactive-visual-grounding"></a> [![arXiv 2608.23978](https://img.shields.io/badge/arXiv-2608.23978-b31b1b.svg)](https://arxiv.org/abs/2608.23978) [![Code](https://img.shields.io/badge/Code-GitHub-16a34a.svg?logo=github)](https://github.com/jaaack-wang/benchmarking-interative-visual-grounding)  
  *2026-08 · Preprint* — **Type:** Interactive visual-grounding benchmark — **Modalities / environment:** Images; Ambiguous referring expressions; Multi-turn clarification — **Evaluation level:** Interactive component evaluation  
  **Evaluates:** Active question asking, evidence integration, and calibrated grounding under ambiguity; one-shot pointing and multi-turn clarification use different protocols
- **OmniAssistBench: Assistant-style Interaction Benchmark for Omni-LLMs** <a id="omniassistbench"></a> [![arXiv 2608.21360](https://img.shields.io/badge/arXiv-2608.21360-b31b1b.svg)](https://arxiv.org/abs/2608.21360) [![Project](https://img.shields.io/badge/Project-Page-2563eb.svg)](https://xianyunsun.github.io/OmniAssistBench/)  
  *2026-08 · Preprint* — **Type:** Assistant-interaction benchmark — **Modalities / environment:** Video; Language goals; Gesture and temporal context — **Evaluation level:** Offline video-derived interactions with constrained routes  
  **Evaluates:** Continuous guidance, contextual references, and event-triggered responses; reverse-constructed interaction sequences do not provide freely branching online human behavior
- **JarvisBench: Always-on Intelligence Between Humans and Agents** <a id="jarvisbench"></a> [![arXiv 2608.14870](https://img.shields.io/badge/arXiv-2608.14870-b31b1b.svg)](https://arxiv.org/abs/2608.14870) [![Code](https://img.shields.io/badge/Code-GitHub-16a34a.svg?logo=github)](https://github.com/cchen1436/JarvisBench) [![Project](https://img.shields.io/badge/Project-Page-2563eb.svg)](https://cchen1436.github.io/jarvis)  
  *2026-08 · Preprint* — **Type:** Always-on interaction benchmark + reference interface — **Modalities / environment:** User dialogue; Background task execution; Duplex speech interface — **Evaluation level:** Concurrent agent-user/task interaction  
  **Evaluates:** Attention coordination between ongoing tasks, user interruptions, and agent requests for help; a speech-enabled reference implementation does not make every task independently visual
- **VAmoS Bench: Voice Agent Simulation Bench** [![arXiv 2607.27453](https://img.shields.io/badge/arXiv-2607.27453-b31b1b.svg)](https://arxiv.org/abs/2607.27453) [![Code](https://img.shields.io/badge/Code-GitHub-16a34a.svg?logo=github)](https://github.com/veris-ai/riley-agent)  
  *2026-07 · Preprint* — **Type:** Benchmark + stateful audio simulation — **Modalities / environment:** Speech; Language; Tool traces; PostgreSQL backend state  
  **Evaluates:** End-to-end containment, policy compliance, real backend changes, and trace-grounded outcomes for production-style voice agents
- **GPTNT** [![arXiv 2606.28514](https://img.shields.io/badge/arXiv-2606.28514-b31b1b.svg)](https://arxiv.org/abs/2606.28514) [![Project](https://img.shields.io/badge/Project-Page-2563eb.svg)](https://gptnt.github.io/)  
  *2026-06 · Preprint* — **Type:** Benchmark — **Modalities / environment:** Visual evidence; Language; Real-time agent-human communication  
  **Evaluates:** Collaborative multimodal planning under partial information
- **VideoFDB** [![arXiv 2605.30256](https://img.shields.io/badge/arXiv-2605.30256-b31b1b.svg)](https://arxiv.org/abs/2605.30256)  
  *2026-05 · Preprint* — **Type:** Benchmark — **Modalities / environment:** Full-duplex audiovisual input and output  
  **Evaluates:** Continuous audio-visual conversation and nonverbal behavior
- **OmniInteract** [![arXiv 2605.26485](https://img.shields.io/badge/arXiv-2605.26485-b31b1b.svg)](https://arxiv.org/abs/2605.26485) [![Code](https://img.shields.io/badge/Code-GitHub-16a34a.svg?logo=github)](https://github.com/Lucky-Lance/OmniInteract)  
  *2026-05 · Preprint* — **Type:** Streaming benchmark — **Modalities / environment:** Native online audio-visual streams; Ambient sound; Spoken queries  
  **Evaluates:** Response correctness and timing, interruption handling, context continuity, and continuous task guidance
- **τ-Voice** [![arXiv 2603.13686](https://img.shields.io/badge/arXiv-2603.13686-b31b1b.svg)](https://arxiv.org/abs/2603.13686) [![Code](https://img.shields.io/badge/Code-GitHub-16a34a.svg?logo=github)](https://github.com/sierra-research/tau2-bench)  
  *2026-03 · ICML 2026* — **Type:** Benchmark + simulator — **Modalities / environment:** Full-duplex speech; Tool and database state; Domain policies  
  **Evaluates:** Verifiable task completion and voice-interaction quality across realistic multi-turn service domains
- **VoiceAssistant-Eval** [![arXiv 2509.22651](https://img.shields.io/badge/arXiv-2509.22651-b31b1b.svg)](https://arxiv.org/abs/2509.22651) [![Project](https://img.shields.io/badge/Project-Page-2563eb.svg)](https://mathllm.github.io/VoiceAssistantEval/)  
  *2025-09 · Preprint* — **Type:** Benchmark — **Modalities / environment:** Speech; Non-speech audio; Images; Language; Spoken output  
  **Evaluates:** Listening, speaking, viewing, cross-modal consistency, robustness, and safety across 10,497 examples and 13 task categories
- **MultiVox** [![arXiv 2507.10859](https://img.shields.io/badge/arXiv-2507.10859-b31b1b.svg)](https://arxiv.org/abs/2507.10859)  
  *2025-07 · Preprint* — **Type:** Benchmark — **Modalities / environment:** Speech; Paralinguistic cues; Images; Video; Environmental audio  
  **Evaluates:** Context-grounded voice responses that integrate fine-grained vocal characteristics, acoustic context, and complementary visual evidence
- **OmniMMI** [![arXiv 2503.22952](https://img.shields.io/badge/arXiv-2503.22952-b31b1b.svg)](https://arxiv.org/abs/2503.22952)  
  *2025-03 · CVPR 2025* — **Type:** Streaming benchmark + baseline — **Modalities / environment:** Streaming video; Speech; Non-speech audio; Language  
  **Evaluates:** Online understanding and proactive reasoning across six real-time interaction subtasks
- **VoiceBench** [![arXiv 2410.17196](https://img.shields.io/badge/arXiv-2410.17196-b31b1b.svg)](https://arxiv.org/abs/2410.17196) [![Code](https://img.shields.io/badge/Code-GitHub-16a34a.svg?logo=github)](https://github.com/MatthewCYM/VoiceBench)  
  *2024-10 · Preprint* — **Type:** Benchmark — **Modalities / environment:** Speech instructions; Spoken responses  
  **Evaluates:** Real-world voice-assistant robustness and instruction following
- **COMMA** [![arXiv 2410.07553](https://img.shields.io/badge/arXiv-2410.07553-b31b1b.svg)](https://arxiv.org/abs/2410.07553) [![Code](https://img.shields.io/badge/Code-GitHub-16a34a.svg?logo=github)](https://github.com/tossowski/COMMA)  
  *2024-10 · TMLR 2025* — **Type:** Benchmark — **Modalities / environment:** Visual puzzles; Language communication; Unequal private information  
  **Evaluates:** Agent-agent and agent-human reasoning, communication, and collaboration under asymmetric access

### 6.4 Digital and Software Environments

- **JarvisGUI: Towards Cross-Device GUI Agents with Dynamic Task Composition** <a id="jarvisgui"></a> [![arXiv 2609.10451](https://img.shields.io/badge/arXiv-2609.10451-b31b1b.svg)](https://arxiv.org/abs/2609.10451) [![Code](https://img.shields.io/badge/Code-GitHub-16a34a.svg?logo=github)](https://github.com/BUAA-IRIP-LLM/JarvisGUI)  
  *2026-09 · Preprint* — **Type:** Cross-device GUI benchmark — **Modalities / environment:** Screenshots; Language; Android; Windows; Ubuntu; Shared task state — **Evaluation level:** End-to-end cross-device execution  
  **Evaluates:** Dynamic task composition, result transfer, and state dependencies across devices; bundled agents remain benchmark baselines
- **APPSim-Bench: Bridging Real-world Apps and Reproducible Evaluation for Mobile GUI Agents** <a id="appsim-bench"></a> [![arXiv 2609.07712](https://img.shields.io/badge/arXiv-2609.07712-b31b1b.svg)](https://arxiv.org/abs/2609.07712) [![Code](https://img.shields.io/badge/Code-GitHub-16a34a.svg?logo=github)](https://github.com/Acrab-Agentic-Labs/AppSim)  
  *2026-09 · Preprint* — **Type:** Mobile benchmark + controlled app environment — **Modalities / environment:** Language; Mobile screenshots; Simulated apps; Backend state — **Evaluation level:** Interactive execution in controlled app replicas  
  **Evaluates:** Realistic app workflows with reproducible setup and backend verification; results do not measure direct interaction with live commercial services
- **AgentHijack: Visual Patch Attacks on Multimodal Computer-Use Agents** <a id="agenthijack"></a> [![arXiv 2609.09212](https://img.shields.io/badge/arXiv-2609.09212-b31b1b.svg)](https://arxiv.org/abs/2609.09212)  
  *2026-09 · Preprint* — **Type:** Visual attack evaluation framework — **Modalities / environment:** Screenshots; Visual patches; Parsed actions; Executed environment state — **Evaluation level:** Model output; Action parsing; End-to-end execution  
  **Evaluates:** Whether visual influence propagates through the complete computer-use pipeline; separates output-level, parsed-action, and executed-effect success on author-controlled test sites
- **CUA-Universe: A Scalable and Dynamic Environment for Hybrid GUI+CLI Agents** <a id="cua-universe"></a> [![arXiv 2609.05374](https://img.shields.io/badge/arXiv-2609.05374-b31b1b.svg)](https://arxiv.org/abs/2609.05374)  
  *2026-09 · Preprint* — **Type:** Hybrid environment-to-data pipeline + CUA-Verse tasks — **Modalities / environment:** Screenshots; Language; Real desktop applications; Shared GUI/CLI state — **Evaluation level:** Interactive VM execution and verified training trajectories  
  **Evaluates:** Hybrid-interface success and efficiency through App-Forge, Task-Weave, and Path-Steer; attached post-training baselines do not change the primary environment/data placement
- **Do GUI Agents Know When Not to Act? Enabling Conflict-Aware Termination for Multimodal GUI Agents** <a id="conflictgui"></a> [![arXiv 2609.03438](https://img.shields.io/badge/arXiv-2609.03438-b31b1b.svg)](https://arxiv.org/abs/2609.03438) [![Code](https://img.shields.io/badge/Code-GitHub-16a34a.svg?logo=github)](https://github.com/serein356/ConflictGuard)  
  *2026-09 · Preprint* — **Type:** CONFLICTGUI benchmark + ConflictGuard intervention — **Modalities / environment:** Language instructions; Screenshots; Conflicting interface evidence — **Evaluation level:** Conflict recognition and termination during GUI evaluation  
  **Evaluates:** Whether an agent should stop when instructions contradict themselves or visible evidence, and whether an intervention improves termination; this differs from malicious prompt injection
- **StepJack: Benchmarking Computer-Use Agent Safety Against Multi-Step Indirect Prompt Injection** [![arXiv 2608.06477](https://img.shields.io/badge/arXiv-2608.06477-b31b1b.svg)](https://arxiv.org/abs/2608.06477)  
  *2026-08 · Preprint* — **Type:** Safety benchmark + attack-generation pipeline — **Modalities / environment:** Language; Web pages; Visual or structured browser observations; Navigation chains  
  **Evaluates:** Six computer-use agents on 480 indirect-prompt-injection cases whose malicious goal is distributed across multiple innocuous-looking pages and steps
- **GUI-CC: Benchmarking Contextual Consistency of GUI World Models as Agent Environments** <a id="gui-cc"></a> [![arXiv 2609.00048](https://img.shields.io/badge/arXiv-2609.00048-b31b1b.svg)](https://arxiv.org/abs/2609.00048)  
  *2026-08 · Preprint* — **Type:** GUI world-model benchmark — **Modalities / environment:** Screenshots; Action histories; Predicted UI transitions — **Evaluation level:** Offline trajectory consistency; Online agent loop  
  **Evaluates:** Context preservation and executable behavior as generated GUI states roll forward; distinguish transition fidelity from downstream agent task success
- **CUADebug: Diagnosing and Repairing Computer-Use Agent Failures** [![arXiv 2608.02643](https://img.shields.io/badge/arXiv-2608.02643-b31b1b.svg)](https://arxiv.org/abs/2608.02643)  
  *2026-07 · Preprint* — **Type:** Benchmark + debugging framework — **Modalities / environment:** Before-and-after screenshots; Language; GUI action traces; Corrective strategies  
  **Evaluates:** Root-cause step and error-type diagnosis, grounded explanations, and repair strategies that can be re-executed by a computer-use agent
- **OmegaUse-OfficeVal: Benchmarking LLM Agents on Long-Horizon Office-Suite Tasks with Economic Grounding** [![arXiv 2607.27155](https://img.shields.io/badge/arXiv-2607.27155-b31b1b.svg)](https://arxiv.org/abs/2607.27155)  
  *2026-07 · Preprint* — **Type:** Benchmark + executable office environment — **Modalities / environment:** Language; Office documents; Rendered application state; GUI or programmatic actions; Cost signals  
  **Evaluates:** One hundred practitioner-derived office workflows paired with human labor time and price proxies for task success, inference cost, and value-weighted comparison
- **MMShopBench: A Real-Log Benchmark for Multimodal, Multi-Turn Shopping Agents** [![arXiv 2607.29002](https://img.shields.io/badge/arXiv-2607.29002-b31b1b.svg)](https://arxiv.org/abs/2607.29002)  
  *2026-07 · Preprint* — **Type:** Benchmark + offline shopping sandbox — **Modalities / environment:** Images; Language; Product attributes; Text and image search results  
  **Evaluates:** Real-log multi-turn requirement inference, multimodal retrieval, and evidence-grounded verification of candidate products
- **Workflow-GYM: Towards Long-Horizon Evaluation of Computer-Use Agentic Tasks in Real-World Professional Fields** [![arXiv 2606.11042](https://img.shields.io/badge/arXiv-2606.11042-b31b1b.svg)](https://arxiv.org/abs/2606.11042)  
  *2026-06 · Preprint* — **Type:** Benchmark + professional software environments — **Modalities / environment:** Language; GUI screenshots; Domain-specific application state; Long action traces  
  **Evaluates:** End-to-end professional workflows, stage omission, error propagation, objective drift, and domain-software understanding across specialized fields
- **OSWorld 2.0: Benchmarking Computer Use Agents on Long-Horizon Real-World Tasks** <a id="osworld-2"></a> [![arXiv 2606.29537](https://img.shields.io/badge/arXiv-2606.29537-b31b1b.svg)](https://arxiv.org/abs/2606.29537)  
  *2026-06 · Preprint* — **Type:** Long-horizon computer-use benchmark — **Modalities / environment:** Language; Screenshots; Authentic files; Dynamic application/user state — **Evaluation level:** End-to-end desktop workflows  
  **Evaluates:** Constraint retention, new information during execution, hidden state, and verification; reports binary completion and partial progress separately under a stated step budget. This is a distinct task set from original OSWorld
- **WindowsWorld: A Process-Centric Benchmark of Autonomous GUI Agents in Professional Cross-Application Environments** [![arXiv 2604.27776](https://img.shields.io/badge/arXiv-2604.27776-b31b1b.svg)](https://arxiv.org/abs/2604.27776)  
  *2026-04 · Preprint* — **Type:** Benchmark + simulated Windows environment — **Modalities / environment:** Language; Screenshots; Desktop application state; Cross-application actions  
  **Evaluates:** 181 occupation-grounded tasks with intermediate process inspection and an average of five subgoals across 17 applications
- **MobileWorld: Benchmarking Autonomous Mobile Agents in Agent-User Interactive and MCP-Augmented Environments** <a id="mobileworld"></a> [![arXiv 2512.19432](https://img.shields.io/badge/arXiv-2512.19432-b31b1b.svg)](https://arxiv.org/abs/2512.19432) [![Code](https://img.shields.io/badge/Code-GitHub-16a34a.svg?logo=github)](https://github.com/Tongyi-MAI/MobileWorld)  
  *2025-12 · Preprint* — **Type:** Mobile benchmark + user/MCP interaction — **Modalities / environment:** Language; Screenshots; Controlled apps and backends; User replies; MCP results — **Evaluation level:** End-to-end cross-app execution  
  **Evaluates:** Long workflows, clarification, and hybrid tool use with backend verification; reproducible open-source app alternatives are distinct from live production services
- **ScienceBoard: Evaluating Multimodal Autonomous Agents in Realistic Scientific Workflows** [![arXiv 2505.19897](https://img.shields.io/badge/arXiv-2505.19897-b31b1b.svg)](https://arxiv.org/abs/2505.19897) [![Project](https://img.shields.io/badge/Project-Page-2563eb.svg)](https://qiushisun.github.io/ScienceBoard-Home/)  
  *2025-05 · ICLR 2026* — **Type:** Benchmark + executable scientific environment — **Modalities / environment:** Screenshots; Accessibility state; GUI and CLI actions; Professional scientific software  
  **Evaluates:** 169 validated end-to-end tasks across six scientific domains, including cross-application workflows and dynamic visual state
- **ScreenSpot-Pro: GUI Grounding for Professional High-Resolution Computer Use** <a id="screenspot-pro"></a> [![arXiv 2504.07981](https://img.shields.io/badge/arXiv-2504.07981-b31b1b.svg)](https://arxiv.org/abs/2504.07981) [![Project](https://img.shields.io/badge/Project-Page-2563eb.svg)](https://gui-agent.github.io/grounding-leaderboard/)  
  *2025-04 · Preprint* — **Type:** Professional GUI-grounding benchmark — **Modalities / environment:** High-resolution screenshots; Language targets; Professional software — **Evaluation level:** Component: single-step grounding  
  **Evaluates:** Small-target localization and high-resolution interface understanding; grounding accuracy is not end-to-end task completion
- **WorldGUI: An Interactive Benchmark for Desktop GUI Automation from Any Starting Point** [![arXiv 2502.08047](https://img.shields.io/badge/arXiv-2502.08047-b31b1b.svg)](https://arxiv.org/abs/2502.08047)  
  *2025-02 · Technical report* — **Type:** Benchmark + critique-based baseline — **Modalities / environment:** Language; Screenshots; Desktop and web application state; GUI actions  
  **Evaluates:** Planning recovery and robustness across ten applications whose tasks begin from diverse non-default states
- **CRAB** [![arXiv 2407.01511](https://img.shields.io/badge/arXiv-2407.01511-b31b1b.svg)](https://arxiv.org/abs/2407.01511) [![Code](https://img.shields.io/badge/Code-GitHub-16a34a.svg?logo=github)](https://github.com/camel-ai/crab)  
  *2024-07 · ACL 2025 Findings* — **Type:** Benchmark + cross-environment framework — **Modalities / environment:** Language; Screens; Desktop and mobile state; Cross-device actions  
  **Evaluates:** Graph-based progress and task completion for single- and multi-agent workflows spanning desktop and mobile environments
- **AndroidWorld** [![arXiv 2405.14573](https://img.shields.io/badge/arXiv-2405.14573-b31b1b.svg)](https://arxiv.org/abs/2405.14573) [![Code](https://img.shields.io/badge/Code-GitHub-16a34a.svg?logo=github)](https://github.com/google-research/android_world)  
  *2024-05 · ICLR 2025* — **Type:** Benchmark + executable environment — **Modalities / environment:** Language; Screenshots or accessibility state; Real Android applications  
  **Evaluates:** Dynamic, parameterized mobile tasks with durable state-based rewards across 20 applications
- **OSWorld** [![arXiv 2404.07972](https://img.shields.io/badge/arXiv-2404.07972-b31b1b.svg)](https://arxiv.org/abs/2404.07972) [![Project](https://img.shields.io/badge/Project-Page-2563eb.svg)](https://os-world.github.io/)  
  *2024-04 · NeurIPS 2024* — **Type:** Benchmark + executable environment — **Modalities / environment:** Language; Screenshots; Accessibility trees; Real desktop applications  
  **Evaluates:** Open-ended, cross-application computer tasks with reproducible state setup and execution-based evaluation  
  **Series:** [OSWorld 2.0](#osworld-2) adds a distinct long-horizon task suite; original and 2.0 success rates are not interchangeable
- **VisualWebArena** [![arXiv 2401.13649](https://img.shields.io/badge/arXiv-2401.13649-b31b1b.svg)](https://arxiv.org/abs/2401.13649) [![Project](https://img.shields.io/badge/Project-Page-2563eb.svg)](https://jykoh.com/vwa)  
  *2024-01 · ACL 2024* — **Type:** Benchmark + executable environment — **Modalities / environment:** Language; Web screenshots; Structured page state  
  **Evaluates:** Realistic visually grounded tasks across interactive websites

### 6.5 Virtual, 3D, and Open Worlds

- **360CityArena: A Realistic Virtual Urban Navigation Benchmark for Embodied Agents** [![arXiv 2608.08814](https://img.shields.io/badge/arXiv-2608.08814-b31b1b.svg)](https://arxiv.org/abs/2608.08814) [![Project](https://img.shields.io/badge/Project-Page-2563eb.svg)](https://360mm-team.github.io/360CityArena/)  
  *2026-08 · ECCV 2026* — **Type:** Benchmark + photorealistic urban environment — **Modalities / environment:** 360° video; Language; Navigation state; Reconstructed city district  
  **Evaluates:** Urban localization, landmark search, path planning, and relational spatial reasoning in a city-scale embodied environment
- **Lingjing: A Simulation Testbed for Multi-Agent Embodied Tasks in Open-Ended Cities** [![arXiv 2608.08045](https://img.shields.io/badge/arXiv-2608.08045-b31b1b.svg)](https://arxiv.org/abs/2608.08045)  
  *2026-08 · Preprint* — **Type:** Simulation testbed + benchmark — **Modalities / environment:** Rendered cities; Structured urban state; Physics; Language; Multi-agent communication  
  **Evaluates:** Heterogeneous multi-agent grounding, long-horizon execution, communication, scalability, robustness, and failure provenance
- **GameWorld** [![arXiv 2604.07429](https://img.shields.io/badge/arXiv-2604.07429-b31b1b.svg)](https://arxiv.org/abs/2604.07429) [![Project](https://img.shields.io/badge/Project-Page-2563eb.svg)](https://gameworld-bench.github.io/)  
  *2026-04 · Preprint* — **Type:** Benchmark + executable environments — **Modalities / environment:** Browser games; Visual observations; Language; Keyboard, mouse, or semantic actions  
  **Evaluates:** Verifiable multimodal game control, latency, memory sensitivity, action validity, and long-horizon planning
- **SpatialScore** [![arXiv 2505.17012](https://img.shields.io/badge/arXiv-2505.17012-b31b1b.svg)](https://arxiv.org/abs/2505.17012) [![Paper](https://img.shields.io/badge/Paper-Link-b31b1b.svg)](https://openaccess.thecvf.com/content/CVPR2026/html/Wu_SpatialScore_Towards_Comprehensive_Evaluation_for_Spatial_Intelligence_CVPR_2026_paper.html)  
  *2025-05 · CVPR 2026 Highlight* — **Type:** Benchmark + dataset + baseline agent — **Modalities / environment:** Images; Multi-frame video; Language; Spatial-tool outputs  
  **Evaluates:** Unified spatial intelligence across 30 tasks, with data-driven and tool-using multi-agent baselines
- **lmgame-Bench: How Good are LLMs at Playing Games?** <a id="lmgame-bench"></a> [![arXiv 2505.15146](https://img.shields.io/badge/arXiv-2505.15146-b31b1b.svg)](https://arxiv.org/abs/2505.15146) [![Code](https://img.shields.io/badge/Code-GitHub-16a34a.svg?logo=github)](https://github.com/lmgame-org/GamingAgent/tree/main/lmgame-bench)  
  *2025-05 · Preprint* — **Type:** Game benchmark + unified harness — **Modalities / environment:** Language; Game observations; Action interfaces; Platform, puzzle, and narrative games — **Evaluation level:** Interactive game trajectories  
  **Evaluates:** Perception, memory, planning, and prompt sensitivity under specified scaffolds; game scores depend on the observation representation and memory support supplied
- **MageBench** [![arXiv 2412.04531](https://img.shields.io/badge/arXiv-2412.04531-b31b1b.svg)](https://arxiv.org/abs/2412.04531) [![Code](https://img.shields.io/badge/Code-GitHub-16a34a.svg?logo=github)](https://github.com/microsoft/MageBench)  
  *2024-12 · Preprint* — **Type:** Benchmark + interactive environments — **Modalities / environment:** Continuously updated visual observations; Language; WebUI; Sokoban; Football  
  **Evaluates:** Vision-in-the-chain reasoning, interaction, and replanning from visual feedback across 483 scenarios

### 6.6 Physical Robotics and Multi-Robot Systems

This branch includes simulated robot tasks, physical protocols, and supporting demonstrations. Report the environment, observation access, action abstraction, reset procedure, verifier, and inference/retry budget with scores. Stage progress, symbolic plan correctness, and complete physical-task success measure different outcomes.

Data and benchmarks released with a system or method stay with that canonical entry: Show-Harness Data in [3.6](#36-physical-robotics-and-multi-robot-systems), Guava trajectories and EmbodiedToolBench in [5.1](#51-tool-use-workflow-and-program-synthesis), AutoEnvBench with ENPIRE in [5.2](#52-agentic-learning-and-self-improvement), Habitat-MAS with EMOS in [5.4](#54-multi-agent-and-conversational-coordination), and failure data with AHA/REFLECT in [4.3](#43-spatial-memory-and-tool-use-models-and-components).

- **StationeryBench** [![Code](https://img.shields.io/badge/Code-GitHub-16a34a.svg?logo=github)](https://github.com/robocurve/stationerybench) [![Project](https://img.shields.io/badge/Project-Page-2563eb.svg)](https://robocurve.github.io/stationerybench/)  
  *2026-09 · Project release* — **Type:** Physical benchmark + mock interface — **Modalities / environment:** Language; Multi-view images; Robot state; Bimanual desk tasks  
  **Evaluates:** Five stationery tasks with fixed setups and repeated trials. Distinguish binary completion from stage-progress scores, disclose human grading and control budgets, and keep the non-physical mock separate from hardware results
- **Long-Horizon Embodied Decision-Making via Multimodal Memory Compression (DunphyBench / MeMento)** [![arXiv 2608.01456](https://img.shields.io/badge/arXiv-2608.01456-b31b1b.svg)](https://arxiv.org/abs/2608.01456)  
  *2026-08 · Preprint* — **Type:** Benchmark + memory-compression baseline — **Modalities / environment:** Egocentric visual observations; Language; Housing evidence and preferences; Navigation actions  
  **Evaluates:** Long-horizon evidence integration across multiple embodied housing environments under bounded context, with MeMento compressing multimodal memory for later decisions
- **WorldSimProbe: Diagnosing Simulator Faithfulness in Action-Conditioned World Models for Embodied Manipulation** [![arXiv 2608.09298](https://img.shields.io/badge/arXiv-2608.09298-b31b1b.svg)](https://arxiv.org/abs/2608.09298) [![Project](https://img.shields.io/badge/Project-Page-2563eb.svg)](https://evophys.com/WorldSimProbe/)  
  *2026-08 · Preprint* — **Type:** Benchmark + diagnostic suites — **Modalities / environment:** Action-conditioned video; Robot actions; Motion; Manipulation environments  
  **Evaluates:** Simulator fidelity, action-to-motion correspondence, interaction grounding, control sensitivity, and primitive-level dynamics
- **Compiling and Benchmarking Task-State Horizons for Embodied Agents (RoboGraph)** [![arXiv 2608.08036](https://img.shields.io/badge/arXiv-2608.08036-b31b1b.svg)](https://arxiv.org/abs/2608.08036)  
  *2026-08 · Preprint* — **Type:** Benchmark + robotic task compiler — **Modalities / environment:** Visual or semantic closed-loop observations; State-transition graphs; Robot state and actions; Failures and interventions  
  **Evaluates:** Maintaining, exploring, and updating evolving task-relevant state across long task-state horizons
- **CMU-Drive and V2V-VLA: Cooperative Multi-Agent Unified Driving with Reasoning Benchmark and Vehicle-to-Vehicle Vision-Language-Action Models** [![arXiv 2608.07621](https://img.shields.io/badge/arXiv-2608.07621-b31b1b.svg)](https://arxiv.org/abs/2608.07621)  
  *2026-08 · Preprint* — **Type:** Closed-loop benchmark + baseline model — **Modalities / environment:** Multi-vehicle vision; Language reasoning; Vehicle state and trajectories; Vehicle-to-vehicle communication  
  **Evaluates:** Cooperative perception, reasoning, planning, communication, and closed-loop control in safety-critical multi-vehicle driving
- **RoboDojo** [![Project](https://img.shields.io/badge/Project-Page-2563eb.svg)](https://robodojo-benchmark.com/) [![arXiv 2607.04434](https://img.shields.io/badge/arXiv-2607.04434-b31b1b.svg)](https://arxiv.org/abs/2607.04434) [![Code](https://img.shields.io/badge/Code-GitHub-16a34a.svg?logo=github)](https://github.com/RoboDojo-Benchmark/RoboDojo)  
  *2026-07 · Preprint* — **Type:** Benchmark + simulation and physical evaluation — **Modalities / environment:** Language; Vision; Robot state; Isaac Sim and real robot arms  
  **Evaluates:** Generalization, memory, precision, long horizons, and open-vocabulary tasks; simulation and physical evaluation protocols are reported separately
- **Drone-Bench** [![Paper](https://img.shields.io/badge/Paper-Link-b31b1b.svg)](https://andonlabs.com/docs/Drone_Bench.pdf) [![Project](https://img.shields.io/badge/Project-Page-2563eb.svg)](https://andonlabs.com/evals/drone-bench)  
  *2026-07 · Technical report* — **Type:** Robotics software benchmark — **Modalities / environment:** Images; Geometry; Simulated drone tasks; Generated code  
  **Evaluates:** Reconstruction, localization, navigation, detection, and following as separate software tasks; best-of-submission scores and multiplied task probabilities do not measure one continuous autonomous flight
- **MECoBench** [![arXiv 2606.31966](https://img.shields.io/badge/arXiv-2606.31966-b31b1b.svg)](https://arxiv.org/abs/2606.31966) [![Code](https://img.shields.io/badge/Code-GitHub-16a34a.svg?logo=github)](https://github.com/q-i-n-g/MECoBench)  
  *2026-06 · Preprint* — **Type:** Benchmark + evaluation platform — **Modalities / environment:** Visually grounded embodied environments; Language communication; Multiple agents  
  **Evaluates:** Cooperation structures, collaboration modes, team-size effects, and robustness under noisy priors
- **SIMPLE: Simulation-Based Policy Learning and Evaluation for Humanoid Loco-manipulation** [![arXiv 2606.08278](https://img.shields.io/badge/arXiv-2606.08278-b31b1b.svg)](https://arxiv.org/abs/2606.08278) [![Project](https://img.shields.io/badge/Project-Page-2563eb.svg)](https://psi-lab.ai/SIMPLE/) [![Code](https://img.shields.io/badge/Code-GitHub-16a34a.svg?logo=github)](https://github.com/physical-superintelligence-lab/SIMPLE) [![Dataset](https://img.shields.io/badge/Dataset-Data-f59e0b.svg)](https://huggingface.co/datasets/USC-PSI-Lab/psi-data)  
  *2026-06 · Preprint* — **Type:** Simulation benchmark + data-collection environment — **Modalities / environment:** Language; Rendered images; Whole-body robot state; MuJoCo and Isaac Sim  
  **Evaluates:** Humanoid locomotion and manipulation policies, with motion-planning and teleoperation data pipelines; physical transfer is a separate experiment
- **Tabero** [![arXiv 2605.27886](https://img.shields.io/badge/arXiv-2605.27886-b31b1b.svg)](https://arxiv.org/abs/2605.27886) [![Code](https://img.shields.io/badge/Code-GitHub-16a34a.svg?logo=github)](https://github.com/NathanWu7/Tabero)  
  *2026-05 · Preprint* — **Type:** Benchmark + model suite — **Modalities / environment:** Vision; Tactile force; Language; Proprioception; Force-position commands  
  **Evaluates:** Task success and physical-interaction quality in gentle manipulation with real-time closed-loop force feedback
- **RoboWits** [![Project](https://img.shields.io/badge/Project-Page-2563eb.svg)](https://umass-embodied-agi.github.io/RoboWits/) [![arXiv 2605.30326](https://img.shields.io/badge/arXiv-2605.30326-b31b1b.svg)](https://arxiv.org/abs/2605.30326) [![Code](https://img.shields.io/badge/Code-GitHub-16a34a.svg?logo=github)](https://github.com/UMass-Embodied-AGI/RoboWits) [![Dataset](https://img.shields.io/badge/Dataset-Data-f59e0b.svg)](https://huggingface.co/datasets/XHRlyb2001/RoboWits_lerobot_dataset)  
  *2026-05 · Preprint* — **Type:** Benchmark + dataset — **Modalities / environment:** Language; Visual or oracle state; Simulated bimanual manipulation  
  **Evaluates:** Reasoning under geometric, material, and assembly changes, including using physical objects as tools. Specify state access and task subsets when comparing results
- **ESI-Bench** [![Project](https://img.shields.io/badge/Project-Page-2563eb.svg)](https://esi-bench.github.io/) [![arXiv 2605.18746](https://img.shields.io/badge/arXiv-2605.18746-b31b1b.svg)](https://arxiv.org/abs/2605.18746) [![Code](https://img.shields.io/badge/Code-GitHub-16a34a.svg?logo=github)](https://github.com/ESI-Bench/ESI-Bench) [![Dataset](https://img.shields.io/badge/Dataset-Data-f59e0b.svg)](https://huggingface.co/datasets/esi-bench/ESI-Bench)  
  *2026-05 · Preprint* — **Type:** Benchmark + dataset — **Modalities / environment:** Language; Active visual exploration; OmniGibson  
  **Evaluates:** Action selection to reveal hidden spatial and physical properties across 10 categories; answer accuracy is distinct from manipulation-task completion
- **CaP-X: A Framework for Benchmarking and Improving Coding Agents for Robot Manipulation** [![arXiv 2603.22435](https://img.shields.io/badge/arXiv-2603.22435-b31b1b.svg)](https://arxiv.org/abs/2603.22435) [![Project](https://img.shields.io/badge/Project-Page-2563eb.svg)](https://capgym.github.io/) [![Code](https://img.shields.io/badge/Code-GitHub-16a34a.svg?logo=github)](https://github.com/capgym/cap-x)  
  *2026-03 · Preprint* — **Type:** Benchmark + executable coding environment — **Modalities / environment:** Language; Visual observations; Robosuite; LIBERO-PRO; BEHAVIOR  
  **Evaluates:** Robot-control code generation across action abstractions and single-/multi-turn feedback; includes CaP-Gym, CaP-Agent0, and CaP-RL in the same research artifact
- **ResponsibleRobotBench** [![arXiv 2512.04308](https://img.shields.io/badge/arXiv-2512.04308-b31b1b.svg)](https://arxiv.org/abs/2512.04308) [![Project](https://img.shields.io/badge/Project-Page-2563eb.svg)](https://sites.google.com/view/responsible-robotbench)  
  *2025-12 · Preprint* — **Type:** Benchmark + evaluation framework — **Modalities / environment:** Vision; Language; Robot state and action representations; Human assistance  
  **Evaluates:** Risk detection and mitigation, moral decision-making, safe multi-stage manipulation, and physically grounded planning
- **SimWorld-Robotics** [![arXiv 2512.10046](https://img.shields.io/badge/arXiv-2512.10046-b31b1b.svg)](https://arxiv.org/abs/2512.10046) [![Project](https://img.shields.io/badge/Project-Page-2563eb.svg)](https://simworld.org/) [![Code](https://img.shields.io/badge/Code-GitHub-16a34a.svg?logo=github)](https://github.com/SimWorld-AI/SimWorld)  
  *2025-09 · NeurIPS 2025* — **Type:** Simulation platform + benchmarks — **Modalities / environment:** Photorealistic urban 3D worlds; Dynamic traffic and pedestrians; Vision-language instructions; Multi-robot communication  
  **Evaluates:** Multimodal grounding, spatial reasoning, safe long-range navigation, grounded communication, and cooperative robot search
- **GroundAct** [![arXiv 2508.05614](https://img.shields.io/badge/arXiv-2508.05614-b31b1b.svg)](https://arxiv.org/abs/2508.05614) [![Project](https://img.shields.io/badge/Project-Page-2563eb.svg)](https://zju-real.github.io/OmniEmbodied/) [![Code](https://img.shields.io/badge/Code-GitHub-16a34a.svg?logo=github)](https://github.com/ZJU-REAL/OmniEmbodied)  
  *2025-08 · Preprint* — **Type:** Benchmark + interactive environments — **Modalities / environment:** Language; Structured environmental state; Tools; Multiple agents  
  **Evaluates:** Action feasibility, tool acquisition, physical-constraint reasoning, and implicit coordination across 1,500 embodied scenarios
- **RoboCerebra: A Large-scale Benchmark for Long-horizon Robotic Manipulation Evaluation** [![arXiv 2506.06677](https://img.shields.io/badge/arXiv-2506.06677-b31b1b.svg)](https://arxiv.org/abs/2506.06677) [![Project](https://img.shields.io/badge/Project-Page-2563eb.svg)](https://robocerebra.github.io/) [![Code](https://img.shields.io/badge/Code-GitHub-16a34a.svg?logo=github)](https://github.com/qiuboxiang/RoboCerebra) [![Dataset](https://img.shields.io/badge/Dataset-Data-f59e0b.svg)](https://huggingface.co/datasets/qiukingballball/RoboCerebra)  
  *2025-06 · NeurIPS 2025* — **Type:** Benchmark + annotated demonstrations — **Modalities / environment:** Language; Images; Long-horizon simulated manipulation  
  **Evaluates:** Hierarchical VLM/VLA planning, reflection, and memory with subtask-labeled demonstrations. Planner scores depend on the low-level controller and interface
- **EmbodiedBench** [![arXiv 2502.09560](https://img.shields.io/badge/arXiv-2502.09560-b31b1b.svg)](https://arxiv.org/abs/2502.09560) [![Project](https://img.shields.io/badge/Project-Page-2563eb.svg)](https://embodiedbench.github.io/) [![Code](https://img.shields.io/badge/Code-GitHub-16a34a.svg?logo=github)](https://github.com/EmbodiedBench/EmbodiedBench)  
  *2025-02 · ICML 2025 Oral* — **Type:** Benchmark + interactive environments — **Modalities / environment:** Egocentric vision; Language; Navigation and manipulation actions  
  **Evaluates:** Vision-driven embodied reasoning, perception, spatial awareness, and long-term planning across four environments
- **VLABench** [![Project](https://img.shields.io/badge/Project-Page-2563eb.svg)](https://vlabench.github.io/) [![arXiv 2412.18194](https://img.shields.io/badge/arXiv-2412.18194-b31b1b.svg)](https://arxiv.org/abs/2412.18194) [![Code](https://img.shields.io/badge/Code-GitHub-16a34a.svg?logo=github)](https://github.com/OpenMOSS/VLABench) [![Models](https://img.shields.io/badge/Models-Weights-7c3aed.svg)](https://huggingface.co/VLABench)  
  *2024-12 · ICCV 2025* — **Type:** Benchmark + demonstrations — **Modalities / environment:** Language; Vision; Robot actions; MuJoCo  
  **Evaluates:** Implicit instructions, spatial relationships, knowledge transfer, and long-horizon manipulation across 100 task categories; distinguish policy execution from reasoning-only evaluation
- **PARTNR** [![arXiv 2411.00081](https://img.shields.io/badge/arXiv-2411.00081-b31b1b.svg)](https://arxiv.org/abs/2411.00081) [![Project](https://img.shields.io/badge/Project-Page-2563eb.svg)](https://aihabitat.org/partnr/) [![Code](https://img.shields.io/badge/Code-GitHub-16a34a.svg?logo=github)](https://github.com/facebookresearch/partnr-planner)  
  *2024-10 · ICLR 2025* — **Type:** Benchmark + simulation platform — **Modalities / environment:** Natural-language tasks; Egocentric perception; 3D household state; Human and robot actions  
  **Evaluates:** Planning, perception, skill execution, recovery, and human-robot coordination across 100,000 tasks
- **Embodied Agent Interface: Benchmarking LLMs for Embodied Decision Making** [![arXiv 2410.07166](https://img.shields.io/badge/arXiv-2410.07166-b31b1b.svg)](https://arxiv.org/abs/2410.07166) [![Project](https://img.shields.io/badge/Project-Page-2563eb.svg)](https://embodied-agent-interface.github.io/) [![Code](https://img.shields.io/badge/Code-GitHub-16a34a.svg?logo=github)](https://github.com/embodied-agent-interface/embodied-agent-interface) [![Dataset](https://img.shields.io/badge/Dataset-Data-f59e0b.svg)](https://huggingface.co/datasets/Inevitablevalor/EmbodiedAgentInterface)  
  *2024-10 · NeurIPS 2024 Datasets and Benchmarks* — **Type:** Benchmark + dataset — **Modalities / environment:** Symbolic goals and state; BEHAVIOR/iGibson; VirtualHome  
  **Evaluates:** Goal interpretation, subgoal decomposition, action sequencing, and transition modeling with separate error metrics; symbolic correctness is distinct from physical execution
- **CHAIC** [![arXiv 2411.01796](https://img.shields.io/badge/arXiv-2411.01796-b31b1b.svg)](https://arxiv.org/abs/2411.01796) [![Code](https://img.shields.io/badge/Code-GitHub-16a34a.svg?logo=github)](https://github.com/UMass-Foundation-Model/CHAIC)  
  *2024-09 · NeurIPS 2024 Datasets and Benchmarks* — **Type:** Benchmark + environment — **Modalities / environment:** Egocentric observations; Human behavior; Language; Embodied actions  
  **Evaluates:** Inferring human intent and physical constraints for inclusive cooperative planning
- **RoboCasa / RoboCasa365** [![arXiv 2406.02523](https://img.shields.io/badge/arXiv-2406.02523-b31b1b.svg)](https://arxiv.org/abs/2406.02523) [![Project](https://img.shields.io/badge/Project-Page-2563eb.svg)](https://robocasa.ai/) [![Code](https://img.shields.io/badge/Code-GitHub-16a34a.svg?logo=github)](https://github.com/robocasa/robocasa)  
  *2024-06 · RSS 2024; subsequent project releases* — **Type:** Simulation environment + tasks and demonstrations — **Modalities / environment:** Language; Images; Robot state; Kitchen manipulation  
  **Evaluates:** Atomic and composite household skills, task generalization, and policy learning. Report the release and task suite, since RoboCasa365 extends the original RoboCasa environment
- **RoboScript: Code Generation for Free-Form Manipulation Tasks Across Real and Simulation** [![arXiv 2402.14623](https://img.shields.io/badge/arXiv-2402.14623-b31b1b.svg)](https://arxiv.org/abs/2402.14623)  
  *2024-02 · Preprint* — **Type:** Benchmark + robot-code execution platform — **Modalities / environment:** Language; Perception and planning APIs; Gazebo; ROS  
  **Evaluates:** Code-generated manipulation plans and module-level failures, with shared simulation/hardware interfaces and separate Franka/UR5 demonstrations
- **LoTa-Bench** [![Project](https://img.shields.io/badge/Project-Page-2563eb.svg)](https://choi-jaewoo.github.io/LoTa-Bench/) [![arXiv 2402.08178](https://img.shields.io/badge/arXiv-2402.08178-b31b1b.svg)](https://arxiv.org/abs/2402.08178) [![Code](https://img.shields.io/badge/Code-GitHub-16a34a.svg?logo=github)](https://github.com/lbaa2022/LLMTaskPlanning)  
  *2024-02 · ICLR 2024* — **Type:** Benchmark + planner evaluation environment — **Modalities / environment:** Language; Household state; AI2-THOR; VirtualHome  
  **Evaluates:** Household task planning, action-failure feedback, and replanning across ALFRED and Watch-And-Help-derived tasks
- **RoboEval / CodeBotler** [![Project](https://img.shields.io/badge/Project-Page-2563eb.svg)](https://amrl.cs.utexas.edu/codebotler/) [![arXiv 2311.11183](https://img.shields.io/badge/arXiv-2311.11183-b31b1b.svg)](https://arxiv.org/abs/2311.11183) [![Code](https://img.shields.io/badge/Code-GitHub-16a34a.svg?logo=github)](https://github.com/ut-amrl/codebotler)  
  *2023-11 · IEEE RA-L 2024* — **Type:** Benchmark + robot-programming toolkit — **Modalities / environment:** Language; Symbolic service-robot simulator; Execution traces  
  **Evaluates:** Temporal-logic correctness and prompt robustness of generated programs. Symbolic evaluation is distinct from the accompanying CodeBotler robot demonstrations
- **Habitat 3.0** [![arXiv 2310.13724](https://img.shields.io/badge/arXiv-2310.13724-b31b1b.svg)](https://arxiv.org/abs/2310.13724) [![Code](https://img.shields.io/badge/Code-GitHub-16a34a.svg?logo=github)](https://github.com/facebookresearch/habitat-lab)  
  *2023-10 · ICLR 2024* — **Type:** Simulation platform + benchmark — **Modalities / environment:** 3D worlds; Humanoids; Robots; Human input  
  **Evaluates:** Human-in-the-loop and collaborative embodied tasks
- **Open X-Embodiment** [![arXiv 2310.08864](https://img.shields.io/badge/arXiv-2310.08864-b31b1b.svg)](https://arxiv.org/abs/2310.08864) [![Project](https://img.shields.io/badge/Project-Page-2563eb.svg)](https://robotics-transformer-x.github.io/)  
  *2023-10 · ICRA 2024* — **Type:** Dataset — **Modalities / environment:** Images; Language; Proprioception; Actions across embodiments  
  **Evaluates:** Cross-embodiment robot learning
- **LIBERO** [![arXiv 2306.03310](https://img.shields.io/badge/arXiv-2306.03310-b31b1b.svg)](https://arxiv.org/abs/2306.03310) [![Code](https://img.shields.io/badge/Code-GitHub-16a34a.svg?logo=github)](https://github.com/Lifelong-Robot-Learning/LIBERO)  
  *2023-06 · NeurIPS 2023* — **Type:** Benchmark — **Modalities / environment:** Vision; Language; Robot state and actions  
  **Evaluates:** Lifelong robot learning across manipulation suites
- **BEHAVIOR-1K** [![Paper](https://img.shields.io/badge/Paper-CoRL-b31b1b.svg)](https://proceedings.mlr.press/v205/li23a.html) [![arXiv 2403.09227](https://img.shields.io/badge/arXiv-2403.09227-b31b1b.svg)](https://arxiv.org/abs/2403.09227) [![Project](https://img.shields.io/badge/Project-Page-2563eb.svg)](https://behavior.stanford.edu/) [![Code](https://img.shields.io/badge/Code-GitHub-16a34a.svg?logo=github)](https://github.com/StanfordVL/BEHAVIOR-1K)  
  *2022-09 · CoRL 2022* — **Type:** Benchmark + simulator — **Modalities / environment:** OmniGibson; 3D scenes; Physics; Robot state and actions  
  **Evaluates:** Human-centered long-horizon household activities
- **CALVIN** [![arXiv 2112.03227](https://img.shields.io/badge/arXiv-2112.03227-b31b1b.svg)](https://arxiv.org/abs/2112.03227) [![Code](https://img.shields.io/badge/Code-GitHub-16a34a.svg?logo=github)](https://github.com/mees/calvin)  
  *2021-12 · IEEE RA-L 2022* — **Type:** Benchmark — **Modalities / environment:** Vision; Language; Proprioception; Robot actions  
  **Evaluates:** Long-horizon language-conditioned manipulation
- **TEACh** [![arXiv 2110.00534](https://img.shields.io/badge/arXiv-2110.00534-b31b1b.svg)](https://arxiv.org/abs/2110.00534) [![Code](https://img.shields.io/badge/Code-GitHub-16a34a.svg?logo=github)](https://github.com/alexa/teach)  
  *2021-10 · AAAI 2022* — **Type:** Benchmark + environment — **Modalities / environment:** Dialogue; Egocentric vision; Embodied actions  
  **Evaluates:** Task-driven embodied agents that collaborate through conversation
- **ALFWorld** [![Project](https://img.shields.io/badge/Project-Page-2563eb.svg)](https://alfworld.github.io/) [![arXiv 2010.03768](https://img.shields.io/badge/arXiv-2010.03768-b31b1b.svg)](https://arxiv.org/abs/2010.03768) [![Code](https://img.shields.io/badge/Code-GitHub-16a34a.svg?logo=github)](https://github.com/alfworld/alfworld)  
  *2020-10 · ICLR 2021* — **Type:** Aligned text and visual environments — **Modalities / environment:** Language; TextWorld; AI2-THOR household observations  
  **Evaluates:** Transfer from abstract planning to visually grounded task execution; identify text, visual, or hybrid mode before interpreting multimodal-agent scores
- **ALFRED** [![arXiv 1912.01734](https://img.shields.io/badge/arXiv-1912.01734-b31b1b.svg)](https://arxiv.org/abs/1912.01734) [![Project](https://img.shields.io/badge/Project-Page-2563eb.svg)](https://askforalfred.com/) [![Code](https://img.shields.io/badge/Code-GitHub-16a34a.svg?logo=github)](https://github.com/askforalfred/alfred)  
  *2019-12 · CVPR 2020* — **Type:** Benchmark + environment — **Modalities / environment:** Egocentric vision; Language; Embodied actions  
  **Evaluates:** Long-horizon household instruction following
- **JRDB** [![arXiv 1910.11792](https://img.shields.io/badge/arXiv-1910.11792-b31b1b.svg)](https://arxiv.org/abs/1910.11792) [![Project](https://img.shields.io/badge/Project-Page-2563eb.svg)](https://jrdb.erc.monash.edu/)  
  *2019-10 · IEEE TPAMI 2021* — **Type:** Dataset + benchmark — **Modalities / environment:** RGB; RGB-D; 360° video; Audio; LiDAR; IMU  
  **Evaluates:** Multisensor perception for social mobile robots

<!--lint enable awesome-list-item-->

## 7. Engineering Resources

This section contains maintained implementation infrastructure and documented interoperability protocols, grouped by engineering role. Protocol specifications are distinguished from runnable frameworks; implementations of research papers remain attached to their canonical entries unless they are distinct infrastructure artifacts.

### 7.1 Agent Runtimes and Interaction Frameworks

| Resource | Type | Primary use | Link |
| --- | --- | --- | --- |
| FlashRT | Agent-guided deployment harness | Measurement-gated optimization of real-time voice, video-generation, world-model, and omni-modal pipelines across GPU systems | [paper](https://arxiv.org/abs/2607.18171) |
| JarvisHub | Creative-agent harness | Canvas-native project state, multimodal tool orchestration, traces, revisions, and human steering for long-horizon creative work | [paper](https://arxiv.org/abs/2607.23588), [GitHub](https://github.com/LYL1015/JarvisHub) |
| OpenAI Agents SDK | Agent SDK | Tool use, handoffs, tracing, and real-time voice-agent applications | [GitHub](https://github.com/openai/openai-agents-python) |
| Google ADK | Agent runtime with bidirectional streaming | Audio/video sessions, streaming events, and tool coordination; modality support depends on the chosen live model and configuration | [GitHub](https://github.com/google/adk-python), [Audio/video docs](https://adk.dev/live/audio-video/) |
| LiveKit Agents | Real-time agent framework | Low-latency voice and multimodal agents over WebRTC | [GitHub](https://github.com/livekit/agents) |
| Pipecat | Real-time orchestration | Streaming audio/video pipelines, transport, interruption, and tool integration | [GitHub](https://github.com/pipecat-ai/pipecat) |
| TEN Framework | Real-time interaction framework | Multimodal conversational agents with RTC or WebSocket transport, VAD, turn detection, extensions, and deployable examples | [GitHub](https://github.com/TEN-framework/ten-framework) |

#### Interoperability protocols

These specifications describe communication interfaces, not complete agents or portable skill packages. An A2A Agent Card's capability descriptions are distinct from `SKILL.md` procedures.

| Resource | Type | Primary use | Link |
| --- | --- | --- | --- |
| Model Context Protocol (MCP) | Tool/resource interoperability specification | Connects agents to external tools, resources, and prompts; support depends on the client and server capabilities | [Specification, 2026-07-28](https://modelcontextprotocol.io/specification/2026-07-28) |
| Agent2Agent (A2A) | Agent interoperability protocol | Agent discovery, task delegation, lifecycle updates, and artifact exchange across independent implementations | [Documentation](https://a2a-protocol.org/latest/) |

<a id="72-digital-agent-environments"></a>

### 7.2 Digital-Agent Infrastructure and Environments

These are reusable execution tools and environments. Research-specific resources stay attached to their papers, including [CUA-Universe](#cua-universe), [MobileWorld](#mobileworld), and [OpenCUA](#opencua). Browser, desktop, and CLI interfaces still require a caller to supply an agent policy and feedback loop.

| Resource | Type | Primary use | Link |
| --- | --- | --- | --- |
| Browser Use | Browser automation library and CLI | Browser observation, screenshot-assisted actions, and reusable execution interfaces; includes a [procedural skill](#82-curated-skill-collections) | [GitHub](https://github.com/browser-use/browser-use) |
| Cua | Desktop automation SDK and execution environments | Computer-control interfaces, isolated desktops, and local macOS VMs; local open components and hosted services have separate deployment requirements | [GitHub](https://github.com/trycua/cua) |
| Playwright CLI | Browser inspection and execution tool | Stateful browser commands, screenshots, recordings, and UI verification; a tool invoked by an agent rather than a complete policy | [GitHub](https://github.com/microsoft/playwright-cli) |
| BrowserGym | Browser-agent environment | Unified Gym-style access to WebArena, VisualWebArena, WorkArena, MiniWoB, screenshots, traces, and repeatable web-task execution | [GitHub](https://github.com/ServiceNow/BrowserGym) |

### 7.3 Embodied AI and Robotics Infrastructure

These resources supply robot interfaces and execution backends. A perception model, motion planner, or protocol bridge becomes part of a robot-use agent only when a caller supplies goals, decisions, and outcome feedback. Research-linked runtimes such as OpenETA, Thea, PhyAgentOS, and RPent remain attached to their paper entries in [3.6](#36-physical-robotics-and-multi-robot-systems) and [5.1](#51-tool-use-workflow-and-program-synthesis).

#### Robot runtimes and interfaces

| Resource | Type | Primary use | Link |
| --- | --- | --- | --- |
| XPolicyLab | Robot-policy standard and deployment ecosystem | Common observation, action, and trajectory schemas; adapters for 42 policies; simulation and real-robot evaluation; packaged agent skills | [paper](https://arxiv.org/abs/2608.09892), [project](https://xpolicylab.github.io/), [GitHub](https://github.com/XPolicyLab/XPolicyLab) |
| LeRobot | Robot-learning framework | Datasets, policies, training, and hardware integration for embodied agents | [GitHub](https://github.com/huggingface/lerobot) |
| ROS 2 | Robotics middleware | Sensor, planning, communication, and actuator integration | [GitHub](https://github.com/ros2/ros2) |
| AgenticROS | ROS 2 capability runtime | Exposes named robot capabilities through agent adapters and MCP, with mission graphs and failure branches; its built-in mission compiler is rule-based | [GitHub](https://github.com/agenticros/agenticros) |
| DimOS | Robot runtime | Connects perception, spatial memory, navigation, and robot tools through Python, CLI, and MCP; pre-release beta with hardware-specific integrations | [GitHub](https://github.com/dimensionalOS/dimos) |
| EmbodiedAgents | ROS 2 component orchestration | Connects models, memory, and robot components through events in Automatika's EMOS ecosystem; distinct from the EMOS research paper in Section 5.4 | [GitHub](https://github.com/automatika-robotics/embodied-agents) |
| RAI | Robot-agent framework | Robot descriptions, multimodal perception, speech, simulation adapters, and rai_bench; deployments supply robot-specific tools | [GitHub](https://github.com/RobotecAI/rai) |
| Strands Robots | Robot tool adapter | Exposes simulation and hardware control plus policy execution to Strands Agents | [GitHub](https://github.com/strands-labs/robots) |
| ROSA | ROS inspection and operation tools | Natural-language access to ROS 1/2 diagnostics and custom robot tools; task capabilities depend on the configured robot | [GitHub](https://github.com/nasa-jpl/rosa) |
| ROS MCP Server | Robot protocol bridge | Uses rosbridge to expose ROS topics, services, actions, parameters, and sensor state to MCP clients | [GitHub](https://github.com/robotmcp/ros-mcp-server) |
| Reachy Mini / Nemotron tutorial | Worked integration guide | Connects voice, camera observations, reasoning, and robot behaviors through NeMo Agent Toolkit and Pipecat | [Tutorial](https://huggingface.co/blog/nvidia-reachy-mini) |

#### Perception and grasp backends

| Resource | Type | Primary use | Link |
| --- | --- | --- | --- |
| Grounded SAM 2 | Perception pipeline | Text-guided detection, segmentation, and video tracking; robot-frame targets require depth and calibration | [GitHub](https://github.com/IDEA-Research/Grounded-SAM-2) |
| SAM 3 | Perception backend | Text- and visual-prompted segmentation for robot tool integrations; checkpoints and robot grounding are configured separately | [GitHub](https://github.com/facebookresearch/sam3) |
| FoundationPose | Pose-estimation backend | Estimates and tracks 6D object poses from object models or reference views; follow the repository's research-use license | [GitHub](https://github.com/NVlabs/FoundationPose) |
| BundleSDF | Tracking and reconstruction backend | Tracks and reconstructs unknown objects from RGB-D video and an initial mask for downstream robot perception | [GitHub](https://github.com/NVlabs/BundleSDF) |
| Contact-GraspNet | Grasp proposal backend | Proposes 6D grasps from point clouds; a robot adapter must check feasibility and execute the selected grasp | [GitHub](https://github.com/NVlabs/contact_graspnet) |
| AnyGrasp | Grasp SDK | RGB-D grasp detection and tracking; SDK access, checkpoints, and licensing are separate from agent integration | [GitHub](https://github.com/graspnet/anygrasp_sdk) |

#### Planning and execution backends

| Resource | Type | Primary use | Link |
| --- | --- | --- | --- |
| MoveIt 2 | Manipulation planning | Kinematics, collision checking, motion planning, and trajectory execution for configured ROS 2 manipulators | [GitHub](https://github.com/moveit/moveit2) |
| Nav2 | Navigation stack | Goal-driven path planning, tracking, obstacle handling, and recovery for configured ROS 2 mobile bases | [GitHub](https://github.com/ros-navigation/navigation2) |
| cuRobo | Motion generation | GPU kinematics, collision checking, and trajectory generation; task-outcome verification belongs to the calling system | [GitHub](https://github.com/NVlabs/curobo) |
| PyRoki | Kinematic optimization | JAX-based robot optimization with configurable pose and collision costs | [GitHub](https://github.com/chungmin99/pyroki) |
| MPlib | Motion-planning library | Python motion planning with application-supplied robot models and collision geometry | [GitHub](https://github.com/haosulab/MPlib) |
| Mink | Differential inverse kinematics | MuJoCo-based local IK with joint constraints and collision avoidance; the application supplies targets and control timing | [GitHub](https://github.com/kevinzakka/mink) |
| Pink | Differential inverse kinematics | Pinocchio-based task-weighted IK for converting targets into joint velocities | [GitHub](https://github.com/pink-kinematics/pink) |
| ros2_control | Hardware and controller interfaces | Connects robot state and actuator commands through robot-specific hardware plugins and controllers | [GitHub](https://github.com/ros-controls/ros2_control) |
| BehaviorTree.CPP | Reactive execution framework | Composes asynchronous actions and conditions into behavior trees with application-defined robot bindings | [GitHub](https://github.com/BehaviorTree/BehaviorTree.CPP) |

#### Simulation and data pipelines

| Resource | Type | Primary use | Link |
| --- | --- | --- | --- |
| AI2-THOR | Embodied simulator | Interactive household environments for vision-language action research | [GitHub](https://github.com/allenai/ai2thor) |
| ManiSkill | Robotics simulator | GPU-parallel manipulation environments and reproducible evaluation | [GitHub](https://github.com/haosulab/ManiSkill) |
| robosuite | Robotics framework | MuJoCo manipulation environments and standardized robot interfaces | [GitHub](https://github.com/ARISE-Initiative/robosuite) |
| MetaDrive | Driving simulator | Compositional, multi-agent, and sensor-rich autonomous-driving environments | [GitHub](https://github.com/metadriverse/metadrive) |
| Isaac Lab | GPU robotics framework | Physics and multimodal sensor simulation, robot-learning environments, multi-agent RL, and sim-to-real workflows on Isaac Sim | [GitHub](https://github.com/isaac-sim/IsaacLab) |
| OmniSim | Agent-accessible simulator | Newton physics with HTTP/JSON and MCP for scene loading, stepping, screenshots, and controller iteration; public beta | [GitHub](https://github.com/omnilink-tech/omnisim) |
| mjbatch | Simulation backend | Batched MuJoCo CPU rollouts with shared state/control arrays for controller search and evaluation | [GitHub](https://github.com/kevinzakka/mjbatch) |
| EmbodiedGen V2 | Simulation-world construction | Builds editable assets, scenes, and task environments from language and images; physics checks and cross-simulator exports support policy workflows | [GitHub](https://github.com/HorizonRobotics/EmbodiedGen), [Paper](https://arxiv.org/abs/2607.07459) |
| SimFoundry | Video-to-simulation pipeline | Reconstructs objects and scenes, then creates editable digital cousins for robot-policy research; release coverage differs from the paper's full workflow | [GitHub](https://github.com/NVlabs/SimFoundry), [Paper](https://arxiv.org/abs/2606.28276) |
| Video to Data (V2D) | Demonstration-processing pipeline | Connects video retrieval, segmentation, 3D reconstruction, motion retargeting, and policy-training stages | [GitHub](https://github.com/nvidia-isaac/video_to_data) |

Benchmarks and their environments, including RoboCasa365, SIMPLE, LIBERO, and BEHAVIOR-1K/OmniGibson, are indexed in [6.6](#66-physical-robotics-and-multi-robot-systems). Portable robot-control and reconstruction procedures are in [8.2](#82-curated-skill-collections).

### 7.4 Evaluation Tooling

| Resource | Type | Primary use | Link |
| --- | --- | --- | --- |
| AgentLab | Browser-agent experimentation toolkit | BrowserGym experiment configuration, trajectory inspection, and reproducibility records; complements the environment layer | [GitHub](https://github.com/ServiceNow/AgentLab) |
| lmms-eval | Evaluation harness | Reproducible evaluation across image, video, audio, and multimodal benchmarks | [GitHub](https://github.com/EvolvingLMMs-Lab/lmms-eval) |
| Inspect AI | Agent-evaluation framework | Reproducible tool-use and multi-turn evaluations with agent scaffolds, sandboxing, tracing, model-graded scoring, limits, and bridges to external agent runtimes | [Documentation](https://inspect.aisi.org.uk/), [GitHub](https://github.com/UKGovernmentBEIS/inspect_ai) |
| Inspect Robots | Robotics evaluation framework | Policy, embodiment, and task adapters with trial recording and audit logs; used by StationeryBench | [GitHub](https://github.com/robocurve/inspect-robots), [Docs](https://docs.inspectrobots.org/) |
| VLA Evaluation Harness (Ai2) | Robot-policy evaluation harness | Model servers, containerized simulation benchmarks, episode recordings, and saved evaluation configurations | [GitHub](https://github.com/allenai/vla-evaluation-harness) |
| GPT 6 Astra as an Embodied Policy | Experiment and evaluation code | Direct and VLA-correction rollouts on RoboDojo with logs; public reference scores are reweighted comparisons, not matched reruns | [GitHub](https://github.com/anonymous-report-421/eval-of-gpt-6-astra-as-policy), [Report](https://anonymous-report-421.github.io/public-website/) |

## 8. Multimodal Agent Skills

This section indexes reusable procedural capability packages for building, operating, or evaluating multimodal agents. Here, a **skill** means an installable directory that follows the [Agent Skills specification](https://agentskills.io/specification)—a required `SKILL.md` with metadata and instructions, optionally accompanied by scripts, references, or assets—or a provider-maintained compatible bundle that exposes concrete skill directories.

Static prompt collections, ordinary SDKs, model repositories, and MCP-only servers are excluded. MCP supplies live tools or data; a skill supplies reusable procedure and execution guidance. A project may provide both, but it is listed here only when an inspectable skill package exists.

Repository stars below are dynamic, repository-level discovery signals rather than skill-level quality scores or endorsements. Review each skill's license, dependencies, network and credential requirements, executable scripts, and possible side effects before installation.

### 8.1 Standards and Distribution

| Resource | Role | Why it matters | Link |
| --- | --- | --- | --- |
| Agent Skills | Open specification and reference validator | Defines the portable `SKILL.md` package, metadata, progressive disclosure, optional scripts, references, and assets | [Specification](https://agentskills.io/specification), [GitHub](https://github.com/agentskills/agentskills) |
| skills CLI and skills.sh | Cross-agent discovery and installer | Finds, installs, lists, checks, and updates GitHub-backed skills across compatible agent clients | [Directory](https://skills.sh/), [GitHub](https://github.com/vercel-labs/skills) |
| Skills Over MCP | Working group / specification work | Explores discovering and distributing skill procedures through MCP; the charter and associated SEP are not proof of a universally supported stable client feature | [Working group](https://modelcontextprotocol.io/community/working-groups/skills-over-mcp) |
| OpenAI Plugins | Codex distribution catalog | Demonstrates how skills can be distributed alone or alongside MCP servers, apps, agents, commands, hooks, and assets in a plugin bundle | [GitHub](https://github.com/openai/plugins) |

### 8.2 Curated Skill Collections

Collections and focused packages are grouped by one consistent variable—**primary capability family**—while modalities and execution environments remain separate descriptors. Representative skills are examples, not an exhaustive inventory. A robot motion primitive or learned policy is not automatically a portable Agent Skill; the entries below expose concrete `SKILL.md` files.

| Collection | Provenance | Primary capability family | Modalities / environment | Representative installable skills | Repository signal | Link |
| --- | --- | --- | --- | --- | --- | --- |
| Anthropic Skills | Anthropic-maintained examples; mixed open-source and source-available licensing | Documents and visual artifacts | Documents; PDFs; Slides; Spreadsheets; Images; Web artifacts | `pdf`; `docx`; `pptx`; `xlsx`; `canvas-design`; `algorithmic-art`; `slack-gif-creator`; `web-artifacts-builder` | ![GitHub Stars](https://img.shields.io/github/stars/anthropics/skills?style=flat-square) | [GitHub](https://github.com/anthropics/skills) |
| Gemini API Skills | Google-maintained open source; not an officially supported Google product | Real-time and generative API workflows | Text; Image; Audio; Video; Speech; Bidirectional streaming; Tool calls | `gemini-live-api-dev`; `gemini-interactions-api`; `gemini-omni-flash-api` | ![GitHub Stars](https://img.shields.io/github/stars/google-gemini/gemini-skills?style=flat-square) | [GitHub](https://github.com/google-gemini/gemini-skills) |
| NVIDIA Agent Skills | Official, NVIDIA-verified catalog | Physical AI and streaming perception | Video; Sensors; Robotics; Simulation; Edge and GPU services | `video-search-and-summarization`; DeepStream pipeline skills; Isaac and Physical AI workflow skills | ![GitHub Stars](https://img.shields.io/github/stars/NVIDIA/skills?style=flat-square) | [GitHub](https://github.com/NVIDIA/skills) |
| ros-skill | Community-maintained package | Robot operation through ROS | ROS/ROS 2; Sensor state; rosbridge | `ros-skill`: topics, services, nodes, parameters, and actions via a JSON-returning Python CLI; requires a configured robot and rosbridge | ![GitHub Stars](https://img.shields.io/github/stars/lpigeon/ros-skill?style=flat-square) | [GitHub](https://github.com/lpigeon/ros-skill), [SKILL.md](https://github.com/lpigeon/ros-skill/blob/main/SKILL.md) |
| Real2Gym | Project-maintained package | Video-to-robot simulation reconstruction | Video; 3D scenes; Blender; MuJoCo | `real2sim-prompt`: reconstruct scenes, retarget actions, and validate simulated contacts; external tools and assets are required | ![GitHub Stars](https://img.shields.io/github/stars/cskrren/Real2Gym?style=flat-square) | [GitHub](https://github.com/cskrren/Real2Gym), [SKILL.md](https://github.com/cskrren/Real2Gym/blob/main/skills/real2sim-prompt/SKILL.md) |
| Browser Use Skill | Maintained in the Browser Use project | Browser operation and verification | Browser state; Screenshots; Forms; Web content | `browser-use`: persistent sessions, inspect/act loops, and screenshot checks | ![GitHub Stars](https://img.shields.io/github/stars/browser-use/browser-use?style=flat-square) | [SKILL.md](https://github.com/browser-use/browser-use/blob/main/skills/browser-use/SKILL.md), [Engineering entry](#72-digital-agent-infrastructure-and-environments) |
| Cua GUI Automation Skill | Maintained in the Cua project | Desktop GUI operation | Desktop screenshots; Mouse/keyboard control; VM execution | `gui-automation`: configure the desktop and use screenshot/action feedback | ![GitHub Stars](https://img.shields.io/github/stars/trycua/cua?style=flat-square) | [SKILL.md](https://github.com/trycua/cua/blob/main/skills/gui-automation/SKILL.md), [Engineering entry](#72-digital-agent-infrastructure-and-environments) |
| Playwright CLI Skill | Maintained in the Microsoft Playwright CLI repository | Browser testing and visual verification | Web UI; Screenshots; Recordings; Browser state | `playwright-cli`: inspect, operate, capture, and verify browser sessions | ![GitHub Stars](https://img.shields.io/github/stars/microsoft/playwright-cli?style=flat-square) | [SKILL.md](https://github.com/microsoft/playwright-cli/blob/main/skills/playwright-cli/SKILL.md), [Engineering entry](#72-digital-agent-infrastructure-and-environments) |
| Hugging Face Skills | Hugging Face-maintained open source | Models, data, training, and evaluation | Text; Image; Audio; Video; Datasets; Model and evaluation artifacts | `transformers-js`; `huggingface-vision-trainer`; `huggingface-datasets`; `huggingface-community-evals`; `hf-cli` | ![GitHub Stars](https://img.shields.io/github/stars/huggingface/skills?style=flat-square) | [GitHub](https://github.com/huggingface/skills) |
| LiveKit Agent Skills | LiveKit-maintained open source | Real-time voice-agent engineering | Streaming speech; Audio; Video; WebRTC; Tool-enabled conversation | `livekit-agents`; `livekit-simulations` | ![GitHub Stars](https://img.shields.io/github/stars/livekit/agent-skills?style=flat-square) | [GitHub](https://github.com/livekit/agent-skills) |
| Remotion Agent Skills | Remotion-maintained open source | Programmatic video production | React; Canvas; SVG; WebGL; Audio; Video; Captions; Maps | `remotion-best-practices`; `remotion-create`; `remotion-markup`; `remotion-render`; `remotion-multimedia` | ![GitHub Stars](https://img.shields.io/github/stars/remotion-dev/skills?style=flat-square) | [GitHub](https://github.com/remotion-dev/skills) |
| Pexo Skills | Community / project-maintained open source | Agentic media production | Text; Images; URLs; Scripts; Audio; Multi-shot video; Music; Subtitles | `pexo-agent`; `text-to-video`; `image-to-video`; `product-video`; `explainer-video` | ![GitHub Stars](https://img.shields.io/github/stars/pexoai/pexo-skills?style=flat-square) | [GitHub](https://github.com/pexoai/pexo-skills) |

**Installation note.** Collections indexed by skills.sh commonly support `npx skills add owner/repository --skill skill-name`. Follow the maintainer's instructions because plugin catalogs and client-specific packages may use different installation paths; pin and review source when reproducibility or privileged execution matters.

## 9. Related Lists

These adjacent collections cover broader modeling or narrower application areas and are useful complements to this evidence-gated index.

| Repository | Scope | Link |
| --- | --- | --- |
| Awesome Agentic Visual Generation Model | Broad L1–L4 taxonomy for agentic image, video, 3D, and multimodal generation; useful for candidate discovery beyond this list's stricter system gate | [GitHub](https://github.com/YinmingHuang/Awesome-agentic-visual-generation-model) |
| Awesome Proactive Agent | Proactive assistance, intervention timing, wearable interaction, and human-agent collaboration; includes text-only work that requires separate scope screening | [GitHub](https://github.com/LowEntropyAI/awesome-proactive-agent) |
| Awesome Agentic Gen | Broad paper ledger for agentic image, video, 3D, design, and generative workflows; adjacent to this list's stricter multimodal-agent system index | [GitHub](https://github.com/Yu-xm/Awesome-Agentic-Gen) |
| Awesome Agentic MLLMs | Companion collection to the Agentic MLLM survey, spanning internal intelligence, tool use, environment interaction, training, and evaluation | [GitHub](https://github.com/HJYao00/Awesome-Agentic-MLLMs) |
| GUI Agents Paper List | High-coverage, continuously updated computer-use paper ledger with venue, environment, and task metadata | [GitHub](https://github.com/OSU-NLP-Group/GUI-Agents-Paper-List) |
| Awesome GUI Agents | GUI-agent papers and resources organized around perception, planning, action, training, and evaluation | [GitHub](https://github.com/ZJU-REAL/Awesome-GUI-Agents) |
| Awesome UI Agents | Focused index of GUI-agent papers, frameworks, and benchmarks across desktop, web, and mobile environments | [GitHub](https://github.com/opendilab/awesome-ui-agents) |
| Awesome GUI Agent | Broad GUI-agent paper and resource collection useful for tracking computer-use systems and evaluation | [GitHub](https://github.com/showlab/Awesome-GUI-Agent) |
| Awesome Robot Use Agent | Robot-use papers, articles, interfaces, tools, benchmarks, and community demos; source collection for the robot-use expansion | [GitHub](https://github.com/kairunwen/Awesome-Robot-Use-Agent), [Demo catalogue](https://kairunwen.github.io/Awesome-Robot-Use-Agent/#social-demos) |
| Awesome Multimodal Embodied Agents | Computer-use and robot-use organized through the PAPAV capability framework; companion to the survey in Section 2.2 | [GitHub](https://github.com/showlab/Awesome-Multimodal-Embodied-Agent) |
| Awesome Embodied Data Pyramid | Companion directory for the data-source survey in Section 2.2, including robot, human-video, and simulation data | [GitHub](https://github.com/worldbench/awesome-embodied-data-pyramid) |
| datasets.bot | Visual discovery directory for robotics datasets; individual dataset provenance and release terms belong to their primary sources | [Directory](https://datasets.bot/) |
| Awesome Multimodal Modeling | Broader multimodal-modeling taxonomy and background | [GitHub](https://github.com/OpenEnvision/Awesome-Multimodal-Modeling) |
| Awesome World Models | Domain-organized world-model paper index and the inspiration for this list's resource-badge display | [GitHub](https://github.com/knightnemo/Awesome-World-Models) |
| Awesome Large Multimodal Agents | Companion resource associated with the LMA survey | [GitHub](https://github.com/jun0wanan/awesome-large-multimodal-agents) |
| Awesome LLMs for Video Understanding | Broader video-language models, datasets, and evaluation | [GitHub](https://github.com/yunlong10/Awesome-LLMs-for-Video-Understanding) |

## Contributing and Curation

Contributions are welcome through issues and pull requests. Read [contributing.md](contributing.md) for the eligibility tests, evidence policy, canonical-placement guide, entry templates, local checks, and pull-request checklist.

<!--lint disable awesome-list-item-->

- **Primary evidence:** use papers, official proceedings or project pages, maintained repositories, datasets, and documentation.
- **System evidence:** name the causal path from grounded action to returned observation to changed later decision; the word “agent” is not evidence.
- **Canonical placement:** add one entry under the primary evaluated artifact and record cross-cutting properties only as metadata.
- **Release history:** retain the first public month, update the existing status when a venue is verified, and never duplicate a later publication version.
- **Disclosure and selectivity:** disclose contributor affiliation and favor representative, inspectable contributions over exhaustive keyword matching.

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
