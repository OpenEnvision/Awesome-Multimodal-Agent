<a id="top"></a>

<div align="center">

# Awesome Visual Agent

**A curated list of visual agents that perceive, reason, use tools, generate, and act.**

[![Awesome](https://awesome.re/badge-flat2.svg)](https://awesome.re)
![Scope](https://img.shields.io/badge/scope-visual%20agents%20%7C%20tool%20use%20%7C%20action-0f766e)
![Updated](https://img.shields.io/badge/updated-2026--07-111827)

</div>

This repository tracks high-signal work on agent systems that use visual observations to reason, call tools, create content, operate software, or take actions. It is intentionally selective: entries should help readers understand, build, evaluate, or deploy systems with an explicit agent loop.

## News

- **2026-07-01** Major agent-only restructure: pruned non-agent VLM, generation, detection, segmentation, OCR, chart, and generic benchmark rows.
- **2026-07-01** Verified and expanded 2025-2026 GUI/CUA, visual tool-use, agentic AIGC, visual memory, and benchmark coverage from primary sources.
- **2026-07-01** Removed the old additions block and the standalone peripheral block; papers, benchmarks/datasets, and tools are kept in separate sections.

## Table of Contents

- [About This List](#about-this-list)
  - [At a Glance](#at-a-glance)
  - [Curation Principles](#curation-principles)
- [1. Scope and Taxonomy](#1-scope-and-taxonomy)
  - [1.1 Inclusion Boundary](#11-inclusion-boundary)
  - [1.2 Research Map](#12-research-map)
  - [1.3 Reading Pathways](#13-reading-pathways)
- [2. Agent Systems](#2-agent-systems)
  - [2.1 Surveys and System Papers](#21-surveys-and-system-papers)
  - [2.2 GUI and Computer-Use Agents](#22-gui-and-computer-use-agents)
  - [2.3 Visual Tool-Use and Programmatic Reasoning](#23-visual-tool-use-and-programmatic-reasoning)
- [3. Agentic AIGC and Creative Agents](#3-agentic-aigc-and-creative-agents)
  - [3.1 Agentic Creative Workflows](#31-agentic-creative-workflows)
- [4. Agentic Visual Perception and Grounding](#4-agentic-visual-perception-and-grounding)
  - [4.1 GUI Grounding and Screen Perception](#41-gui-grounding-and-screen-perception)
  - [4.2 Agentic Visual Memory and Active Perception](#42-agentic-visual-memory-and-active-perception)
- [5. Benchmarks and Evaluation](#5-benchmarks-and-evaluation)
- [6. Tools and Engineering Resources](#6-tools-and-engineering-resources)
  - [6.1 Agent Runtimes](#61-agent-runtimes)
  - [6.2 Agentic Visual Perception Tooling](#62-agentic-visual-perception-tooling)
  - [6.3 Agentic AIGC Tooling](#63-agentic-aigc-tooling)
- [7. Workflow Stacks](#7-workflow-stacks)
- [Related Lists](#related-lists)
- [Contributing](#contributing)
- [Maintenance Policy](#maintenance-policy)
- [Citation](#citation)
- [License](#license)

## About This List

This list is a research and builder map, not a raw paper dump. It favors works that define a useful capability, benchmark, architecture, dataset, tool, or failure mode for visual agents.

### At a Glance

| Dimension | Coverage |
| --- | --- |
| Primary scope | Visual agents, GUI/CUA agents, visual tool-use agents, agentic AIGC, visual memory, and agent-oriented grounding |
| Core audience | Researchers, students, builders, benchmark maintainers, and applied multimodal engineers |
| Source preference | Papers, official project pages, code repositories, datasets, benchmark pages, and technical reports |
| Inclusion bar | Clear contribution, inspectable source, and relevance to an agent loop: observe, reason, plan, use tools, act, remember, or self-correct |
| Exclusion bar | Generic model releases, pure foundation models, duplicate rows, marketing-only posts, unverifiable arXiv IDs, and one-shot demos with no reusable agent insight |

### Curation Principles

| Principle | Rule |
| --- | --- |
| Precision over volume | Prefer fewer strong entries over long unreviewed lists. |
| Primary sources first | Link to papers, official code, project pages, docs, or benchmark pages. |
| Separate roles | Keep papers, benchmarks, and engineering tools in distinct sections. |
| Benchmark hygiene | Put benchmarks, datasets, and evaluation suites in [Benchmarks and Evaluation](#5-benchmarks-and-evaluation), not in model tables. |
| Agent relevance | Agent entries should involve observation, reasoning, planning, tool use, memory, control, or closed-loop evaluation. |
| AIGC relevance | AIGC entries should involve agentic planning, tool orchestration, iterative editing, critique, feedback, memory, or search. |
| Visual understanding relevance | Understanding entries should directly support GUI grounding, screen perception, tool-use reasoning, or action selection. |

Each paper table is designed for scanning: **Work** names the paper or system, **Year** gives the first public paper year, **Links** prioritizes primary sources, and **Why it matters** states the concrete contribution.

[Back to top](#top)

## 1. Scope and Taxonomy

### 1.1 Inclusion Boundary

Included:

- GUI, web, desktop, and mobile agents that act from visual observations.
- Multimodal agents that use visual tools, memory, code, search, critique, or planning.
- AIGC systems only when they are agentic: multi-turn, tool-using, feedback-driven, self-correcting, memory-based, or search/planning based.
- Visual understanding methods only when they support grounding, screen perception, action selection, or agent control.
- Benchmarks, datasets, simulators, runtimes, and evaluation tools used to build or assess these systems.

Excluded by default:

- Plain image classification, OCR, captioning, VQA, chart QA, document parsing, detection, segmentation, or retrieval papers with no agent loop.
- Generic LLM/VLM releases without GUI control, tool use, action grounding, or agent evaluation.
- Pure text-to-image, text-to-video, image-editing, or controllable-generation papers unless the system itself is an agent.

### 1.2 Research Map

```text
Visual Agent Ecosystem
|-- 2. Agent Systems
|   |-- GUI and computer-use agents
|   |-- Web, desktop, and mobile environments
|   |-- Visual tool-use and programmatic reasoning
|-- 3. Agentic AIGC and Creative Agents
|   |-- Agentic planning, critique, and creative tool orchestration
|-- 4. Agentic Visual Perception and Grounding
|   |-- GUI grounding and screen parsing
|   |-- Agentic visual memory and active perception
|   |-- Risk-aware and active visual perception for agents
|-- 5. Benchmarks and Evaluation
|-- 6. Tools and Engineering Resources
```

### 1.3 Reading Pathways

| Path | Core models / methods | Benchmarks / evaluation |
| --- | --- | --- |
| GUI and computer use | [UI-TARS](https://arxiv.org/abs/2501.12326), [Agent S2](https://arxiv.org/abs/2504.00906), [MAPLE](https://arxiv.org/abs/2505.23596), [Mirage-1](https://arxiv.org/abs/2506.10387), [CoAct-1](https://arxiv.org/abs/2508.03923), [Mobile-Agent-v3 / GUI-Owl](https://arxiv.org/abs/2508.15144), [UItron](https://arxiv.org/abs/2508.21767), [UI-TARS-2](https://arxiv.org/abs/2509.02544), [Instruction Agent](https://arxiv.org/abs/2509.07098), [MGA](https://arxiv.org/abs/2510.24168), [HAR-GUI](https://arxiv.org/abs/2511.09127), [Agent Alpha](https://arxiv.org/abs/2602.02995), [EAM](https://arxiv.org/abs/2605.12294), [AGMem](https://arxiv.org/abs/2606.14106), [ComAct](https://arxiv.org/abs/2606.13239), [Xiaomi-GUI-0](https://arxiv.org/abs/2606.31410), [ATMem](https://arxiv.org/abs/2606.31612) | [OSWorld](https://arxiv.org/abs/2404.07972), [AndroidLH](https://arxiv.org/abs/2506.10387), [GUI-360](https://arxiv.org/abs/2511.04307), [OSWorld 2.0](https://arxiv.org/abs/2606.29537), [DragOn](https://arxiv.org/abs/2606.06322), [ComCADBench](https://arxiv.org/abs/2606.13239), [Workflow-GYM](https://arxiv.org/abs/2606.11042) |
| GUI grounding | [SeeClick](https://arxiv.org/abs/2401.10935), [OS-ATLAS](https://arxiv.org/abs/2410.23218), [ShowUI](https://arxiv.org/abs/2411.17465), [Phi-Ground](https://arxiv.org/abs/2507.23779), [MEGA-GUI](https://arxiv.org/abs/2511.13087), [SafeGround](https://arxiv.org/abs/2602.02419), [See, Point, Refine](https://arxiv.org/abs/2604.13019) | [ScreenSpot-Pro](https://arxiv.org/abs/2504.07981), [PAGE Bench](https://arxiv.org/abs/2605.15963), [Argus](https://arxiv.org/abs/2606.25760) |
| Visual tool-use and search | [DeepEyes](https://arxiv.org/abs/2505.14362), [VTool-R1](https://arxiv.org/abs/2505.19255), [ChartAgent](https://arxiv.org/abs/2510.04514), [CodeV](https://arxiv.org/abs/2511.19661), [CiQi-Agent](https://arxiv.org/abs/2603.28474), [MTA-Agent](https://arxiv.org/abs/2604.06376), [POINTS-Seeker](https://arxiv.org/abs/2604.14029), [LMM-Searcher](https://arxiv.org/abs/2604.12890), [ODE](https://arxiv.org/abs/2605.10832), [Astra](https://arxiv.org/abs/2606.06476), [VESTA](https://arxiv.org/abs/2606.00384), [Visual-Seeker](https://arxiv.org/abs/2606.15231), [TACO](https://arxiv.org/abs/2606.30251), [SimpleSearch-VL](https://arxiv.org/abs/2606.31504) | [Agentic-MME](https://arxiv.org/abs/2604.03016), [InterLV-Search](https://arxiv.org/abs/2605.07510), [VisualToolBench](https://arxiv.org/abs/2510.12712), and agentic visual reasoning/search evaluations |
| Visual memory and active perception | [IPR-1](https://arxiv.org/abs/2511.15407), [MuSEAgent](https://arxiv.org/abs/2603.27813), [Visual Agentic Memory](https://arxiv.org/abs/2605.16481), [AGMem](https://arxiv.org/abs/2606.14106), [TASKER](https://arxiv.org/abs/2606.29445), [VisualClaw](https://arxiv.org/abs/2606.16295), [DualMem](https://arxiv.org/abs/2606.27499) | [DMV-Bench](https://arxiv.org/abs/2606.27499), [VG-GUIBench](https://arxiv.org/abs/2606.29445), [SpatialWorld](https://arxiv.org/abs/2606.09669), [GPTNT](https://arxiv.org/abs/2606.28514) |
| Agentic AIGC | [ComfyGPT](https://arxiv.org/abs/2503.17671), [RefineEdit-Agent](https://arxiv.org/abs/2508.17435), [MIRA](https://arxiv.org/abs/2511.21087), [I2E](https://arxiv.org/abs/2601.03741), [MiLDEAgent](https://arxiv.org/abs/2601.04589), [GenAgent](https://arxiv.org/abs/2601.18543), [MSRAMIE](https://arxiv.org/abs/2603.16967), [Gen-Searcher](https://arxiv.org/abs/2603.28767), [Unify-Agent](https://arxiv.org/abs/2603.29620), [Agent Banana](https://arxiv.org/abs/2602.09084), [GEMS](https://arxiv.org/abs/2603.28088), [Data2Story](https://arxiv.org/abs/2606.11176), [ManimAgent](https://arxiv.org/abs/2606.30296), [Qwen-Image-Agent](https://arxiv.org/abs/2606.26907) | [FlowBench](https://arxiv.org/abs/2503.17671), [LongBench-T2I-Edit](https://arxiv.org/abs/2508.17435), [MiLDEBench](https://arxiv.org/abs/2601.04589), [IA-Bench](https://arxiv.org/abs/2606.26907), [FactIP](https://arxiv.org/abs/2603.29620) |

[Back to top](#top)

## 2. Agent Systems

### 2.1 Surveys and System Papers

| Work | Year | Links | Why it matters |
| --- | --- | --- | --- |
| Large Multimodal Agents: A Survey | 2024 | [paper](https://arxiv.org/abs/2402.15116) | Broad entry point for multimodal agents, tools, memory, planning, and evaluation. |
| GUI Agents: A Survey | 2024 | [paper](https://arxiv.org/abs/2412.13501) | Focused overview of GUI-agent architectures, grounding, benchmarks, and failure modes. |
| A Comprehensive Survey of Agents for Computer Use | 2025 | [paper](https://arxiv.org/abs/2501.16150) | Maps the CUA stack from perception and planning to action execution and evaluation. |
| GUI Agents with Reinforcement Learning | 2026 | [paper](https://arxiv.org/abs/2604.27955) | Taxonomy and roadmap for offline, online, and hybrid RL in GUI-agent training. |
| GUI Agent Autonomy Levels | 2026 | [paper](https://arxiv.org/abs/2602.11514) | Six-level framework for comparing GUI-agent autonomy, task control, and deployment responsibility. |
| Agent S | 2024 | [paper](https://arxiv.org/abs/2410.08164), [code](https://github.com/simular-ai/Agent-S) | Practical open framework for computer use with hierarchical planning and experience retrieval. |
| UI-TARS | 2025 | [paper](https://arxiv.org/abs/2501.12326), [desktop](https://github.com/bytedance/UI-TARS-desktop) | Native GUI-agent model trained for screenshot perception, grounding, reasoning, and actions. |
| OpenCUA | 2025 | [paper](https://arxiv.org/abs/2508.09123), [code](https://github.com/xlang-ai/OpenCUA) | Open data, annotation, training, and model stack for computer-use agents. |

### 2.2 GUI and Computer-Use Agents

| Work | Year | Links | Why it matters |
| --- | --- | --- | --- |
| MM-Navigator | 2023 | [paper](https://arxiv.org/abs/2311.07562) | Early GPT-4V-style smartphone navigation agent. |
| AppAgent | 2023 | [paper](https://arxiv.org/abs/2312.13771), [code](https://github.com/mnotgod96/AppAgent) | Mobile app agent that learns from exploration and demonstrations. |
| SeeAct | 2024 | [paper](https://arxiv.org/abs/2401.01614), [project](https://osu-nlp-group.github.io/SeeAct/) | Web agent showing the importance of visual grounding in live websites. |
| SeeClick | 2024 | [paper](https://arxiv.org/abs/2401.10935), [code](https://github.com/njucckevin/SeeClick) | Defines GUI grounding as a core bottleneck for screenshot-only GUI agents. |
| WebVoyager | 2024 | [paper](https://arxiv.org/abs/2401.13919), [code](https://github.com/MinorJerry/WebVoyager) | End-to-end multimodal web agent evaluated on live websites. |
| Mobile-Agent | 2024 | [paper](https://arxiv.org/abs/2401.16158), [code](https://github.com/X-PLUG/MobileAgent) | Vision-centric mobile agent with planning and visual perception tools. |
| OS-ATLAS | 2024 | [paper](https://arxiv.org/abs/2410.23218) | Foundation GUI action model with large-scale cross-platform grounding data. |
| ShowUI | 2024 | [paper](https://arxiv.org/abs/2411.17465), [code](https://github.com/showlab/ShowUI) | Lightweight GUI action model for screenshot grounding and navigation. |
| Aguvis | 2024 | [paper](https://arxiv.org/abs/2412.04454), [project](https://aguvis-project.github.io/) | Unified pure-vision GUI agent for autonomous cross-platform interaction. |
| Agent S2 | 2025 | [paper](https://arxiv.org/abs/2504.00906), [code](https://github.com/simular-ai/Agent-S) | Generalist-specialist CUA framework with mixture-of-grounding and hierarchical planning. |
| LiteCUA | 2025 | [paper](https://arxiv.org/abs/2505.18829), [code](https://github.com/agiresearch/AIOS) | Treats the computer as an MCP server so agents can reason over structured state and actions. |
| UI-Evol | 2025 | [paper](https://arxiv.org/abs/2505.21964) | Plug-in knowledge-evolution module that retraces GUI trajectories and critiques external instructions. |
| MAPLE | 2025 | [paper](https://arxiv.org/abs/2505.23596) | Mobile GUI agent with persistent finite-state memory for planning, verification, rollback, and recovery. |
| Surfer-H / Holo1 | 2025 | [paper](https://arxiv.org/abs/2506.02865) | Cost-efficient open-weight web agent pairing Surfer-H with Holo1 UI-specialized VLMs. |
| DPO CUA | 2025 | [paper](https://arxiv.org/abs/2506.03095) | Uses LLM-as-judge trajectory signals to train smaller privacy-preserving local CUAs. |
| Mirage-1 | 2025 | [paper](https://arxiv.org/abs/2506.10387), [project](https://cybertronagent.github.io/Mirage-1.github.io/) | Cross-platform GUI agent with hierarchical multimodal skills and skill-augmented tree search. |
| GUIRoboTron-Speech | 2025 | [paper](https://arxiv.org/abs/2506.11127), [code](https://github.com/GUIRoboTron/GUIRoboTron-Speech) | Speech-instruction GUI agent trained for screenshot grounding, planning, and action prediction. |
| UI-AGILE | 2025 | [paper](https://arxiv.org/abs/2507.22025) | Training and inference framework for GUI agents with RL rewards and decomposed high-resolution grounding. |
| CoAct-1 | 2025 | [paper](https://arxiv.org/abs/2508.03923) | Multi-agent CUA that dynamically routes subtasks between GUI control and code execution. |
| SEAgent | 2025 | [paper](https://arxiv.org/abs/2508.04700) | Self-evolving CUA that learns unfamiliar software through exploration, curriculum tasks, and experience. |
| ComputerRL / AutoGLM-OS | 2025 | [paper](https://arxiv.org/abs/2508.14040) | Online RL infrastructure for desktop agents with API-GUI actions and distributed virtual environments. |
| Mobile-Agent-v3 / GUI-Owl | 2025 | [paper](https://arxiv.org/abs/2508.15144), [code](https://github.com/X-PLUG/MobileAgent) | Foundational GUI agent family spanning mobile, desktop, browser, planning, grounding, and environment RL. |
| WebSight | 2025 | [paper](https://arxiv.org/abs/2508.16987) | Vision-first autonomous web agent with planning, reasoning, vision-action, verification, and episodic memory. |
| UItron | 2025 | [paper](https://arxiv.org/abs/2508.21767) | Foundational GUI agent with data engineering, interactive infrastructure, perception, grounding, and planning. |
| UI-TARS-2 | 2025 | [paper](https://arxiv.org/abs/2509.02544) | Native GUI-centered agent model with data flywheel, stabilized multi-turn RL, and hybrid GUI environments. |
| Instruction Agent | 2025 | [paper](https://arxiv.org/abs/2509.07098) | GUI agent that extracts executable instructions from demonstrations with verifier and backtracker modules. |
| Ferret-UI Lite | 2025 | [paper](https://arxiv.org/abs/2509.26539) | Compact on-device GUI agent with visual tool-use, CoT reasoning, and RL for mobile, web, and desktop control. |
| UltraCUA | 2025 | [paper](https://arxiv.org/abs/2510.17790) | Hybrid-action CUA that alternates between GUI control and programmatic tool calls. |
| MGA | 2025 | [paper](https://arxiv.org/abs/2510.24168) | Memory-driven GUI agent that observes first, updates structured memory, and then decides actions. |
| HAR-GUI | 2025 | [paper](https://arxiv.org/abs/2511.09127) | History-aware reasoning framework that teaches GUI agents to use short-term trajectory context and reflective corrections. |
| EDAgent | 2025 | [paper](https://arxiv.org/abs/2512.11611) | Reflection-based GUI agent for electronic-design automation workflows in professional CAD-style software. |
| MAI-UI | 2025 | [paper](https://arxiv.org/abs/2512.22047) | Foundation GUI-agent family with device-cloud collaboration, self-evolving data, and online RL. |
| WebGym | 2026 | [paper](https://arxiv.org/abs/2601.02439) | Large-scale realistic training environment and RL recipe for visual web agents. |
| ColorBrowserAgent | 2026 | [paper](https://arxiv.org/abs/2601.07262) | Web agent with progress summarization and human-in-the-loop knowledge adaptation for long-horizon tasks. |
| Agent Alpha | 2026 | [paper](https://arxiv.org/abs/2602.02995) | Step-level MCTS framework that unifies generation, exploration, and evaluation for computer-use agents. |
| Mobile-Agent-v3.5 / GUI-Owl-1.5 | 2026 | [paper](https://arxiv.org/abs/2602.16855), [code](https://github.com/X-PLUG/MobileAgent) | Multi-platform GUI-agent family with tool/MCP use, memory, multi-agent adaptation, and RL scaling. |
| SecAgent | 2026 | [paper](https://arxiv.org/abs/2603.08533) | Efficient multilingual mobile GUI agent using semantic context summaries for long interaction history. |
| MolmoWeb | 2026 | [paper](https://arxiv.org/abs/2604.08516) | Open visual web-agent family trained from browser demonstrations and web-GUI perception data. |
| ClawGUI | 2026 | [paper](https://arxiv.org/abs/2604.11784) | Full-stack framework for training, evaluating, and deploying GUI agents across devices. |
| UI-Copilot | 2026 | [paper](https://arxiv.org/abs/2604.13822), [code](https://github.com/ZJU-REAL/UI-Copilot) | Long-horizon GUI automation with retriever/calculator tools and policy optimization. |
| AgentLens | 2026 | [paper](https://arxiv.org/abs/2604.20279) | Mobile GUI agent that adapts user-facing visual modalities during background execution. |
| uxCUA | 2026 | [paper](https://arxiv.org/abs/2604.26020) | Trains CUAs to execute interaction flows and assess GUI usability from visual evidence. |
| Faithful-Agent | 2026 | [paper](https://arxiv.org/abs/2605.01208) | Mobile GUI agent trained for evidence-grounded and internally consistent actions. |
| Weblica | 2026 | [paper](https://arxiv.org/abs/2605.06761) | Reproducible web-replica environments for scaling visual web-agent RL. |
| EAM | 2026 | [paper](https://arxiv.org/abs/2605.12294) | Executable agentic memory with state-aware graph construction and value-guided search for long-horizon GUI automation. |
| MementoGUI | 2026 | [paper](https://arxiv.org/abs/2605.18652) | Plug-in multimodal memory control for long-horizon GUI trajectories. |
| PANDO | 2026 | [paper](https://arxiv.org/abs/2605.24785) | Online skill-distillation web agent with reflection, routing, visual compression, and cache-aware prompting. |
| UI-KOBE | 2026 | [paper](https://arxiv.org/abs/2605.29534) | Lightweight mobile GUI agent guided by autonomously explored app knowledge graphs. |
| Multi-Agent Computer Use | 2026 | [paper](https://arxiv.org/abs/2606.01533), [project](https://jykoh.com/multi-agent-computer-use/) | Manager-subagent CUA architecture for decomposition, parallel execution, and replanning. |
| OpenWebRL | 2026 | [paper](https://arxiv.org/abs/2606.02031) | Open online multi-turn RL framework for visual web agents on live websites. |
| Demo2Tutorial | 2026 | [paper](https://arxiv.org/abs/2606.03951), [code](https://github.com/showlab/Demo2Tutorial) | Converts screen recordings and interaction logs into structured multimodal tutorials that improve GUI-agent planning. |
| AsyncWebRL | 2026 | [paper](https://arxiv.org/abs/2606.05597) | Asynchronous multi-step RL system that improves training throughput for visual web agents. |
| StainFlow | 2026 | [paper](https://arxiv.org/abs/2606.07027) | Entity-stain process reward model that tracks visual evidence flow for GUI-agent RL credit assignment. |
| GUI-AC | 2026 | [paper](https://arxiv.org/abs/2606.10522) | Continual-learning method that stabilizes GUI-agent RFT with grounding certainty. |
| HiViG | 2026 | [paper](https://arxiv.org/abs/2606.11078), [code](https://github.com/G-JWLee/HiViG) | History-aware visually grounded critic for pre-execution CUA action checking. |
| ComAct | 2026 | [paper](https://arxiv.org/abs/2606.13239) | COM-as-action paradigm and self-correcting ComActor for professional software control. |
| AGMem | 2026 | [paper](https://arxiv.org/abs/2606.14106) | Action-grounded visual memory for GUI agents using local image crops tied to successful actions and recoveries. |
| LLM-as-Code | 2026 | [paper](https://arxiv.org/abs/2606.15874) | Agentic-programming harness that moves loop control into code for stable long visual operation sequences. |
| PreAct | 2026 | [paper](https://arxiv.org/abs/2606.17929) | Compiles successful CUA trajectories into screen-checked state-machine programs for repeated tasks. |
| RL with Autonomous Evaluation | 2026 | [paper](https://arxiv.org/abs/2606.24515) | Reinforcement learning for CUAs using autonomous vision-language evaluation as scalable reward feedback. |
| PEEU | 2026 | [paper](https://arxiv.org/abs/2606.27330) | Autonomous experience exploration and hindsight utilization for GUI-agent task planning. |
| GUICrafter | 2026 | [paper](https://arxiv.org/abs/2606.29705), [code](https://github.com/fansunqi/GUICrafter) | Weakly supervised GUI agent trained from massive unannotated screenshots plus small calibrated RL data. |
| Learning from Failure | 2026 | [paper](https://arxiv.org/abs/2606.31270) | Inference-time self-improvement loop that diagnoses failed CUA trajectories and patches agent behavior. |
| Xiaomi-GUI-0 | 2026 | [paper](https://arxiv.org/abs/2606.31410) | Real-device closed-loop mobile GUI agent with failure-driven data flywheel and agentic RL. |
| ATMem | 2026 | [paper](https://arxiv.org/abs/2606.31612) | Active task-driving memory that maintains workflow state for long-horizon mobile GUI agents. |

### 2.3 Visual Tool-Use and Programmatic Reasoning

| Work | Year | Links | Why it matters |
| --- | --- | --- | --- |
| VISPROG | 2022 | [paper](https://arxiv.org/abs/2211.11559), [project](https://prior.allenai.org/projects/visprog) | Visual programming approach that composes vision modules through executable steps. |
| Visual ChatGPT | 2023 | [paper](https://arxiv.org/abs/2303.04671), [code](https://github.com/microsoft/visual-chatgpt) | Early system connecting ChatGPT-style interaction with visual foundation models. |
| ViperGPT | 2023 | [paper](https://arxiv.org/abs/2303.08128), [code](https://github.com/cvlab-columbia/viper) | Uses generated Python programs to compose visual tools for reasoning. |
| Set-of-Mark Prompting | 2023 | [paper](https://arxiv.org/abs/2310.11441), [code](https://github.com/microsoft/SoM) | Simple visual marking strategy widely reused for agent grounding. |
| LLaVA-Plus | 2023 | [paper](https://arxiv.org/abs/2311.05437), [project](https://llava-vl.github.io/llava-plus/) | Trains multimodal assistants to select and invoke visual tools. |
| Visual Agentic RFT | 2025 | [paper](https://arxiv.org/abs/2505.14246) | Reinforcement fine-tuning for multimodal agents that browse, code, and manipulate images. |
| DeepEyes | 2025 | [paper](https://arxiv.org/abs/2505.14362), [code](https://github.com/Visual-Agent/DeepEyes) | Reinforcement learning for active visual reasoning and tool-like visual inspection. |
| VTool-R1 | 2025 | [paper](https://arxiv.org/abs/2505.19255), [code](https://github.com/VTOOL-R1/vtool-r1) | Trains VLMs to interleave text with visual tool operations for multimodal chain-of-thought reasoning. |
| ChartAgent | 2025 | [paper](https://arxiv.org/abs/2510.04514) | Tool-augmented chart agent that decomposes questions into visual subtasks and interacts with chart images. |
| Orion | 2025 | [paper](https://arxiv.org/abs/2511.14210) | Unified visual agent that orchestrates detection, OCR, segmentation, geometry, and other tools for multi-step workflows. |
| CodeV | 2025 | [paper](https://arxiv.org/abs/2511.19661) | Code-based visual agent trained with tool-aware policy optimization for faithful image-operation use. |
| CiQi-Agent | 2026 | [paper](https://arxiv.org/abs/2603.28474), [dataset](https://huggingface.co/datasets/SII-Monument-Valley/CiQi-VQA) | Cultural-heritage visual agent with vision-tool invocation and multimodal retrieval for porcelain reasoning. |
| MTA-Agent | 2026 | [paper](https://arxiv.org/abs/2604.06376) | Open recipe for multimodal deep-search agents with verified multi-hop vision-language tool trajectories. |
| LMM-Searcher | 2026 | [paper](https://arxiv.org/abs/2604.12890), [code](https://github.com/RUCAIBox/LMM-Searcher) | Long-horizon multimodal search agent with file-based visual memory and on-demand image fetching. |
| POINTS-Seeker | 2026 | [paper](https://arxiv.org/abs/2604.14029) | Multimodal agentic search model trained from scratch with agentic seeding and visual history compression. |
| ProMMSearchAgent | 2026 | [paper](https://arxiv.org/abs/2604.20486) | Multimodal search agent trained with process-oriented rewards and sim-to-real transfer. |
| S1-VL | 2026 | [paper](https://arxiv.org/abs/2604.21409) | Scientific multimodal agent that actively manipulates images with code for visual reasoning. |
| HierVA | 2026 | [paper](https://arxiv.org/abs/2605.04304) | Hierarchical visual agent for chart reasoning with manager-worker planning and zoomed visual context. |
| ODE | 2026 | [paper](https://arxiv.org/abs/2605.10832) | On-policy data-evolution harness with reusable image-bank references for visual-native multimodal search agents. |
| MMSkills | 2026 | [paper](https://arxiv.org/abs/2605.13527) | Multimodal skill packages with visual evidence for reusable agent procedures. |
| VisHarness | 2026 | [paper](https://arxiv.org/abs/2605.29894) | Trainable visual agent that learns to route multi-turn reasoning through heterogeneous visual expert tools. |
| Diversity Over Frequency | 2026 | [paper](https://arxiv.org/abs/2606.00096), [project](https://scaffolded-exploration.github.io) | Studies and regularizes visual tool-use diversity in visual chain-of-thought agents. |
| VESTA | 2026 | [paper](https://arxiv.org/abs/2606.00384) | Visual statistical-tool agent that creates and reuses diagnostic visualizations, tests, and data transforms. |
| Astra | 2026 | [paper](https://arxiv.org/abs/2606.06476) | Agentic spatial-reasoning framework that invokes a world simulator for imagined visual evidence. |
| IAPO | 2026 | [paper](https://arxiv.org/abs/2606.11652) | Attribution-aware RL method for improving tool use in small multimodal agents without brittle exact-match rewards. |
| PERIA | 2026 | [paper](https://arxiv.org/abs/2606.12830) | Tool-augmented visual agent for spatial reasoning across maps, probing, and reconstruction. |
| Visual-Seeker | 2026 | [paper](https://arxiv.org/abs/2606.15231), [code](https://github.com/ZhengboZhang/Visual-Seeker) | Visual-native multimodal search agent that actively gathers fine-grained visual evidence. |
| S-Agent | 2026 | [paper](https://arxiv.org/abs/2606.20515) | Spatial tool-use agent for continuous multi-view and video reasoning. |
| ProMSA | 2026 | [paper](https://arxiv.org/abs/2606.27974), [code](https://github.com/DingWu1021/Promsa) | Progressive multimodal search agent that selects image search, text search, or stopping under tool budgets. |
| Dynamo | 2026 | [paper](https://arxiv.org/abs/2606.30185) | Training-free vision-language agent that evolves reusable reasoning skills and executable visual tools. |
| TACO | 2026 | [paper](https://arxiv.org/abs/2606.30251) | Credit-assignment objective for multimodal code-tool agents that rewards useful visual tool calls. |
| SimpleSearch-VL | 2026 | [paper](https://arxiv.org/abs/2606.31504) | Lightweight multimodal agentic deep-search recipe with evidence-verified reasoning and self-summary. |

[Back to top](#top)

## 3. Agentic AIGC and Creative Agents

This section keeps only generation and editing work with an explicit agent loop: planning, tool use, critique, feedback, memory, search, self-correction, or multi-turn execution.

### 3.1 Agentic Creative Workflows

| Work | Year | Links | Why it matters |
| --- | --- | --- | --- |
| LLMGA | 2023 | [paper](https://arxiv.org/abs/2311.16500) | MLLM-based generation assistant for prompt refinement and image editing. |
| LLaVA-Plus | 2023 | [paper](https://arxiv.org/abs/2311.05437), [project](https://llava-vl.github.io/llava-plus/) | Connects visual understanding, generation, retrieval, and tool composition. |
| GenArtist | 2024 | [paper](https://arxiv.org/abs/2407.05600), [project](https://zhenyuw16.github.io/GenArtist_page/) | MLLM agent for image generation and editing through decomposition, tool use, and self-correction. |
| PlotEdit | 2025 | [paper](https://arxiv.org/abs/2501.11233) | Multi-agent chart-image editing system with extraction, code retrieval, instruction decomposition, and multimodal feedback. |
| ComfyGPT | 2025 | [paper](https://arxiv.org/abs/2503.17671) | Self-optimizing multi-agent system for generating and refining ComfyUI image-generation workflows. |
| RefineEdit-Agent | 2025 | [paper](https://arxiv.org/abs/2508.17435) | Training-free closed-loop image-editing agent with instruction parsing, planning, tool selection, and visual feedback. |
| Street Design Multi-Agent Pipeline | 2025 | [paper](https://arxiv.org/abs/2509.05469) | Multi-agent street-view redesign workflow with localization, prompt optimization, generation, and automated evaluation. |
| MIRA | 2025 | [paper](https://arxiv.org/abs/2511.21087) | Plug-and-play iterative image-editing agent that predicts atomic edits from visual feedback. |
| JarvisEvo | 2025 | [paper](https://arxiv.org/abs/2511.23002), [project](https://jarvisevo.vercel.app/) | Self-evolving photo-editing agent with tool selection, interleaved multimodal CoT, and editor-evaluator optimization. |
| I2E | 2026 | [paper](https://arxiv.org/abs/2601.03741) | Decompose-then-action image-editing agent that turns object layers into actionable interactive environments. |
| MiLDEAgent | 2026 | [paper](https://arxiv.org/abs/2601.04589) | Reasoning-based multi-layer design-document editing agent with layer-aware understanding and targeted modifications. |
| GenAgent | 2026 | [paper](https://arxiv.org/abs/2601.18543) | Agentic multimodal model that invokes generators as tools and refines images through reasoning and reflection. |
| Agent Banana | 2026 | [paper](https://arxiv.org/abs/2602.09084), [code](https://github.com/taco-group/agent-banana) | Planner-executor image-editing agent for high-definition multi-turn workflows. |
| SAGE | 2026 | [paper](https://arxiv.org/abs/2602.10116), [project](https://nvlabs.github.io/sage) | Agentic 3D scene generator with critics, tool selection, and iterative self-refinement. |
| VisionCreator | 2026 | [paper](https://arxiv.org/abs/2603.02681) | Native visual-generation agentic model with understanding, thinking, planning, and creation. |
| VisionCreator-R1 | 2026 | [paper](https://arxiv.org/abs/2603.08812) | Reflection-enhanced visual-generation agent with reflection-plan co-optimization. |
| MSRAMIE | 2026 | [paper](https://arxiv.org/abs/2603.16967) | Training-free structured-reasoning agent for multi-instruction image editing with state and reference graphs. |
| WorldAgents | 2026 | [paper](https://arxiv.org/abs/2603.19708) | Multi-agent 3D world-synthesis pipeline with director, generator, and verifier roles. |
| GEMS | 2026 | [paper](https://arxiv.org/abs/2603.28088), [project](https://gems-gen.github.io/) | Agent-native multimodal generation framework with loop, memory, and skills. |
| Gen-Searcher | 2026 | [paper](https://arxiv.org/abs/2603.28767), [code](https://github.com/tulerfeng/Gen-Searcher) | Search-augmented image-generation agent trained with SFT and agentic RL for knowledge-intensive prompts. |
| IMAGAgent | 2026 | [paper](https://arxiv.org/abs/2603.29602), [code](https://github.com/hackermmzz/IMAGAgent.git) | Multi-turn image-editing agent with constraint-aware planning, tool orchestration, and collaborative reflection. |
| Unify-Agent | 2026 | [paper](https://arxiv.org/abs/2603.29620) | World-grounded image-synthesis agent with multimodal evidence search, recaptioning, and generation trajectories. |
| AnomalyAgent | 2026 | [paper](https://arxiv.org/abs/2604.07900) | Tool-augmented anomaly-synthesis agent with retrieval, masking, quality evaluation, and self-reflection. |
| Generation Navigator | 2026 | [paper](https://arxiv.org/abs/2605.17969) | State-aware multi-turn image-generation agent trained with trajectory-level RL. |
| Code-as-Room | 2026 | [paper](https://arxiv.org/abs/2605.18451) | Agentic code-synthesis framework that converts top-down room images into executable Blender scenes. |
| GenEvolve | 2026 | [paper](https://arxiv.org/abs/2605.21605), [project](https://ephemeral182.github.io/GenEvolve/) | Self-evolving image-generation agents via tool-orchestrated visual experience distillation. |
| GenClaw | 2026 | [paper](https://arxiv.org/abs/2605.30248) | Code-driven agentic image generation with executable sketches as controllable intermediates. |
| IEA | 2026 | [paper](https://arxiv.org/abs/2606.08016) | Conversational image-editing agent that operates explicit parameterized tools with transparent edit traces. |
| Data2Story | 2026 | [paper](https://arxiv.org/abs/2606.11176), [project](https://data2story.github.io) | Multi-agent newsroom that turns data into evidence-grounded multimodal stories with generated visual assets. |
| InterleaveThinker | 2026 | [paper](https://arxiv.org/abs/2606.13679) | Multi-agent planner-critic pipeline for interleaved text-image generation. |
| RS-Gen | 2026 | [paper](https://arxiv.org/abs/2606.23221) | Training-free reasoning and search-augmented image-generation agent with a closed-loop questioning-and-solving process. |
| Qwen-Image-Agent | 2026 | [paper](https://arxiv.org/abs/2606.26907) | Context-centric image-generation agent that plans, reasons, searches, remembers, and incorporates feedback before generation. |
| ManimAgent | 2026 | [paper](https://arxiv.org/abs/2606.30296), [project](https://manimagent.github.io/) | Self-evolving multimodal agent that writes Manim animation code and stores visual reflection memories across tasks. |

[Back to top](#top)

## 4. Agentic Visual Perception and Grounding

This section keeps visual-understanding work only when it is designed for agents, screen control, action grounding, or risk-aware perception.

### 4.1 GUI Grounding and Screen Perception

| Work | Year | Links | Why it matters |
| --- | --- | --- | --- |
| OmniParser | 2024 | [paper](https://arxiv.org/abs/2408.00203), [code](https://github.com/microsoft/OmniParser) | Parses screenshots into interactable regions for pure-vision GUI agents. |
| UGround | 2024 | [paper](https://arxiv.org/abs/2410.05243), [code](https://github.com/OSU-NLP-Group/UGround) | Pure-vision GUI grounding baseline without accessibility trees. |
| Phi-Ground | 2025 | [paper](https://arxiv.org/abs/2507.23779), [project](https://zhangmiaosen2000.github.io/Phi-Ground/) | GUI-grounding model family tuned for CUA click localization and ScreenSpot-Pro-style deployment settings. |
| GUI-AIMA | 2025 | [paper](https://arxiv.org/abs/2511.00810), [code](https://github.com/sjz5202/GUI-AIMA) | Aligns intrinsic multimodal attention with GUI grounding signals for efficient coordinate-free click localization. |
| MEGA-GUI | 2025 | [paper](https://arxiv.org/abs/2511.13087), [code](https://github.com/samsungsds-research-papers/mega-gui) | Multi-stage GUI grounding agents with ROI zoom and context-aware query rewriting. |
| SafeGround | 2026 | [paper](https://arxiv.org/abs/2602.02419) | Uncertainty calibration for deciding when GUI grounding predictions are safe to trust. |
| See, Point, Refine | 2026 | [paper](https://arxiv.org/abs/2604.13019), [code](https://github.com/microsoft/precision-cua-bench) | Closed-loop GUI grounding agent that refines cursor localization through visual feedback. |
| UI-in-the-Loop / UILoop | 2026 | [paper](https://arxiv.org/abs/2604.06995) | Explicit UI-element comprehension loop for screen-to-action reasoning. |
| AutoFocus | 2026 | [paper](https://arxiv.org/abs/2605.02630) | Uncertainty-aware active visual search for high-resolution GUI grounding. |
| PAGER | 2026 | [paper](https://arxiv.org/abs/2605.15963) | Point-precise geometric GUI control for pixel-level agent actions. |
| AQuaUI | 2026 | [paper](https://arxiv.org/abs/2605.19260) | Adaptive-quadtree visual token reduction for GUI-agent screenshots. |

### 4.2 Agentic Visual Memory and Active Perception

| Work | Year | Links | Why it matters |
| --- | --- | --- | --- |
| IPR-1 | 2025 | [paper](https://arxiv.org/abs/2511.15407), [project](https://mybearyzhang.github.io/ipr-1) | Interactive physical reasoner that uses world-model rollouts and action code for visual game-to-unseen transfer. |
| MuSEAgent | 2026 | [paper](https://arxiv.org/abs/2603.27813) | Multimodal reasoning agent with a quality-filtered stateful-experience bank for adaptive retrieval. |
| Visual Agentic Memory | 2026 | [paper](https://arxiv.org/abs/2605.16481), [code](https://github.com/yiliu-li/Visual-Agentic-Memory) | Training-free long-video memory with online indexing, hierarchical storage, and agentic retrieval. |
| CoSee | 2026 | [paper](https://arxiv.org/abs/2605.31354) | Audits shared-state collaboration failures in resource-constrained visual agents through read-write-verify traces. |
| VisualClaw | 2026 | [paper](https://arxiv.org/abs/2606.16295) | Self-evolving personalized multimodal agent for streaming visual evidence, memory, and skill-bank updates. |
| DualMem | 2026 | [paper](https://arxiv.org/abs/2606.27499), [code](https://github.com/yyyujintang/DMV-Bench) | Dual visual-verbal memory architecture for multimodal agents that must remember pixel-only cues. |
| TASKER | 2026 | [paper](https://arxiv.org/abs/2606.29445), [code](https://github.com/VG-GUI-TASKER/VG-GUI-TASKER) | Task-driven keyframe selector for video-guided GUI agents and long-horizon procedural transfer. |

[Back to top](#top)

## 5. Benchmarks and Evaluation

| Area | Benchmark | Links | Primary use |
| --- | --- | --- | --- |
| Web agents | Mind2Web | [paper](https://arxiv.org/abs/2306.06070), [project](https://osu-nlp-group.github.io/Mind2Web/) | Offline web action prediction and grounding. |
| Web agents | WebArena | [paper](https://arxiv.org/abs/2307.13854), [code](https://github.com/web-arena-x/webarena) | Realistic web tasks with execution-based grading. |
| Web agents | VisualWebArena | [paper](https://arxiv.org/abs/2401.13649), [code](https://github.com/web-arena-x/visualwebarena) | Visually grounded web tasks. |
| Web agents | WebLINX | [paper](https://arxiv.org/abs/2402.05930), [project](https://mcgill-nlp.github.io/weblinx/) | Conversational web navigation demonstrations. |
| Enterprise agents | WorkArena | [paper](https://arxiv.org/abs/2403.07718), [code](https://github.com/ServiceNow/WorkArena) | Enterprise workflow automation. |
| Desktop/web agents | OmniACT | [paper](https://arxiv.org/abs/2402.17553) | Benchmark for executable automation scripts across desktop and web tasks. |
| Web agents | WebClick | [paper](https://arxiv.org/abs/2506.02865) | Web UI localization benchmark introduced with Surfer-H and Holo1. |
| Visual web agents | WebGym | [paper](https://arxiv.org/abs/2601.02439) | Large-scale realistic web-agent training and evaluation environment with rubric-based tasks. |
| Web agents | WebChain / WebChainBench | [paper](https://arxiv.org/abs/2603.05295) | Human-annotated real-world web interaction traces with aligned visual, structural, and action data. |
| Web agents | Ego2Web | [paper](https://arxiv.org/abs/2603.22529) | Connects egocentric video understanding with online web-agent execution tasks. |
| Web agents | ClawBench | [paper](https://arxiv.org/abs/2604.08523), [project](https://claw-bench.com/), [code](https://github.com/reacher-z/ClawBench) | Live production-website tasks for GUI and browser agents with request-interception scoring and five-layer execution traces. |
| Desktop agents | OSWorld | [paper](https://arxiv.org/abs/2404.07972), [code](https://github.com/xlang-ai/OSWorld) | Open-ended desktop tasks in real OS environments. |
| Desktop agents | OSWorld 2.0 | [paper](https://arxiv.org/abs/2606.29537) | Long-horizon real-world computer-use workflows with partial scoring and execution auditing. |
| Desktop agents | Windows Agent Arena | [paper](https://arxiv.org/abs/2409.08264), [code](https://github.com/microsoft/WindowsAgentArena) | Windows-specific OS-agent evaluation. |
| Desktop agents | MacArena | [paper](https://arxiv.org/abs/2606.06560) | Online macOS benchmark running on Apple Silicon virtualization. |
| Desktop agents | GUI-360 | [paper](https://arxiv.org/abs/2511.04307), [dataset](https://huggingface.co/datasets/vyokky/GUI-360) | Large-scale Windows CUA dataset and benchmark for grounding, screen parsing, and action prediction. |
| Desktop agents | GUI vs. CLI | [paper](https://arxiv.org/abs/2606.24551) | Matched execution-layer benchmark comparing screen-only GUI agents with skill-mediated CLI agents. |
| Hybrid-interface agents | WeaveBench | [paper](https://arxiv.org/abs/2606.09426) | Long-horizon tasks requiring coordinated GUI, CLI, code, browser, and external-tool use. |
| Professional software agents | ComCADBench | [paper](https://arxiv.org/abs/2606.13239) | Industrial CAD benchmark for professional software agents using GUI and COM-style executable actions. |
| Professional software agents | GUI-EDA | [paper](https://arxiv.org/abs/2512.11611) | Electronic-design-automation GUI dataset and benchmark for CAD-style professional workflows. |
| Presentation agents | PPT-Eval | [paper](https://arxiv.org/abs/2606.31154), [project](https://microsoft.github.io/ppteval) | PowerPoint creation and editing benchmark with rubric-based partial credit. |
| GUI design for agents | AUI-Gym | [paper](https://arxiv.org/abs/2511.15567), [code](https://github.com/showlab/AUI) | Evaluates whether CUAs can judge and improve automatically generated GUI applications. |
| Desktop agents | OpenComputer | [paper](https://arxiv.org/abs/2605.19769) | Verifiable software worlds with state verifiers and auditable rewards. |
| Desktop agents | Workflow-GYM | [paper](https://arxiv.org/abs/2606.11042) | Long-horizon GUI workflows in professional software domains. |
| Desktop agents | MyPCBench | [paper](https://arxiv.org/abs/2606.16748), [project](https://mypcbench.com/) | Personal-computer tasks over seeded apps and user-specific context. |
| Scientific instruments | LabOSBench | [paper](https://arxiv.org/abs/2606.16802) | Web-based scientific-instrument control benchmark for multimodal GUI agents. |
| Desktop data | ProCUA-SFT | [paper](https://arxiv.org/abs/2606.17321) | Large-scale synthetic SFT data for desktop computer-use agents. |
| Mobile agents | Android in the Wild | [paper](https://arxiv.org/abs/2307.10088) | Android action traces from real-world use. |
| Mobile agents | AndroidWorld | [paper](https://arxiv.org/abs/2405.14573), [code](https://github.com/google-research/android_world) | Dynamic Android tasks with reproducible rewards. |
| Mobile agents | AndroidLH | [paper](https://arxiv.org/abs/2506.10387), [project](https://cybertronagent.github.io/Mirage-1.github.io/) | Long-horizon Android benchmark introduced with Mirage-1 for online GUI-agent planning. |
| Enterprise agents | SaaS-Bench | [paper](https://arxiv.org/abs/2605.15777), [code](https://github.com/UniPat-AI/SaaS-Bench) | Deployable SaaS systems and professional workflow evaluation. |
| Enterprise readiness | UI-CUBE | [paper](https://arxiv.org/abs/2511.17131) | Enterprise-readiness benchmark beyond simple task success. |
| Living-screen GUI | LivingScreen | [paper](https://arxiv.org/abs/2606.04701), [code](https://github.com/BITHLP/LivingScreen) | Short-video-platform GUI tasks where the screen changes continuously between actions. |
| Omni-modal mobile GUI | OmniGUI | [paper](https://arxiv.org/abs/2605.18758), [project](https://omni-gui.github.io) | Smartphone GUI-agent benchmark with static screenshots, audio cues, and temporal video dynamics. |
| Video-guided GUI | VG-GUIBench | [paper](https://arxiv.org/abs/2606.29445), [project](https://vg-gui-tasker.github.io/) | Tests whether GUI agents can learn procedures from video tutorials and act in software. |
| Long-horizon GUI | MementoGUI-Bench | [paper](https://arxiv.org/abs/2605.18652) | Memory consistency and decision-making over long GUI trajectories. |
| Document-guided GUI | DocOS | [paper](https://arxiv.org/abs/2605.18048) | Agents must search documentation and ground procedures into GUI actions. |
| GUI exploration | ScreenSearch | [paper](https://arxiv.org/abs/2605.16024) | Ambiguity-aware desktop GUI state-graph exploration. |
| GUI grounding | ScreenSpot | [paper](https://arxiv.org/abs/2401.10935), [code](https://github.com/njucckevin/SeeClick) | Mobile, desktop, and web grounding. |
| GUI grounding | ScreenSpot-Pro | [paper](https://arxiv.org/abs/2504.07981), [leaderboard](https://gui-agent.github.io/grounding-leaderboard/) | High-resolution professional screen grounding. |
| GUI grounding | PAGE Bench | [paper](https://arxiv.org/abs/2605.15963) | Precision-sensitive geometric GUI tasks with pixel-level actions. |
| GUI grounding | Precision-CUA-Bench | [paper](https://arxiv.org/abs/2604.13019), [code](https://github.com/microsoft/precision-cua-bench) | Pixel-precise multi-turn cursor localization for software-engineering agents. |
| GUI grounding | DragOn | [paper](https://arxiv.org/abs/2606.06322) | Drag, swipe, highlight, resize, and slider grounding tasks for GUI agents. |
| GUI uncertainty | Argus | [paper](https://arxiv.org/abs/2606.25760) | Post-hoc uncertainty quantification benchmark for executable GUI grounding in CUAs. |
| Web-agent behavior | VAF | [paper](https://arxiv.org/abs/2601.21961) | Controlled evaluation of how visual interface attributes influence web-agent decisions. |
| CUA stability | Repeated Execution Reliability | [paper](https://arxiv.org/abs/2604.17849) | Evaluates whether CUAs remain stable across repeated executions of the same task. |
| Visual tool-use | VisualToolBench | [paper](https://arxiv.org/abs/2510.12712) | Tool-enabled image perception, transformation, and reasoning benchmark for thinking with images. |
| Multimodal agentic reasoning | Agentic-MME | [paper](https://arxiv.org/abs/2604.03016) | Process-verified benchmark for visual expansion, knowledge expansion, tool use, and intermediate-state auditing. |
| Multimodal search | InterLV-Search | [paper](https://arxiv.org/abs/2605.07510), [code](https://github.com/hbhalpha/InterLV-Search-Bench) | Interleaved language-vision agentic search with reusable textual and visual evidence. |
| Domain visual agents | CiQi-Bench | [paper](https://arxiv.org/abs/2603.28474), [dataset](https://huggingface.co/datasets/SII-Monument-Valley/CiQi-VQA) | Porcelain connoisseurship benchmark requiring visual-tool and retrieval-augmented cultural reasoning. |
| Visual statistical agents | DAWN | [paper](https://arxiv.org/abs/2606.00384) | Automated-workflow benchmark for VESTA-style visual statistical tool agents. |
| Visual memory/video agents | VisualClawArena | [paper](https://arxiv.org/abs/2606.16295) | Agentic benchmark requiring video evidence, documents, dynamic updates, and executable checks. |
| Visual memory | DMV-Bench | [paper](https://arxiv.org/abs/2606.27499), [code](https://github.com/yyyujintang/DMV-Bench) | Interactive visual-memory benchmark with pixel-only incidental cues for multimodal agents. |
| Collaborative multimodal agents | GPTNT | [paper](https://arxiv.org/abs/2606.28514), [project](https://gptnt.github.io/) | Real-time multimodal collaboration benchmark based on Keep Talking and Nobody Explodes. |
| Interactive spatial agents | SpatialWorld | [paper](https://arxiv.org/abs/2606.09669) | Vision-only partial-observability benchmark for active spatial evidence gathering and long-horizon planning. |
| Agentic generation workflows | FlowBench | [paper](https://arxiv.org/abs/2503.17671) | ComfyUI workflow-generation benchmark for multi-agent visual-generation workflow builders. |
| Agentic generation | CIGEval | [paper](https://arxiv.org/abs/2504.07046) | Agentic evaluation framework for conditional image generation. |
| Agentic editing | LongBench-T2I-Edit | [paper](https://arxiv.org/abs/2508.17435) | Complex multi-turn image-editing benchmark for closed-loop editing agents. |
| Agentic editing | ArtEdit-Bench | [paper](https://arxiv.org/abs/2511.23002), [project](https://jarvisevo.vercel.app/) | Photo-editing benchmark for self-evolving editor-evaluator agents. |
| Agentic editing data | MIRA-Editing | [paper](https://arxiv.org/abs/2511.21087) | Tool-use dataset for iterative image-editing agents with visual feedback. |
| Agentic document editing | MiLDEBench / MiLDEEval | [paper](https://arxiv.org/abs/2601.04589) | Multi-layer design-document editing benchmark and evaluation protocol. |
| Agentic editing | MTEditBench | [paper](https://arxiv.org/abs/2603.29602) | Multi-turn image-editing benchmark introduced with IMAGAgent. |
| Agentic generation | KnowGen | [paper](https://arxiv.org/abs/2603.28767), [project](https://gen-searcher.vercel.app) | Search-grounded image-generation benchmark for knowledge-intensive prompts. |
| Agentic generation | FactIP | [paper](https://arxiv.org/abs/2603.29620) | World-grounded image-synthesis benchmark for long-tail factual concepts. |
| Agentic generation | GenEvolve-Bench | [paper](https://arxiv.org/abs/2605.21605), [project](https://ephemeral182.github.io/GenEvolve/) | Multi-turn tool-orchestrated image-generation evaluation. |
| Agentic generation | IA-Bench | [paper](https://arxiv.org/abs/2606.26907) | Evaluates image-agent capabilities across planning, reasoning, search, and memory. |

[Back to top](#top)

## 6. Tools and Engineering Resources

### 6.1 Agent Runtimes

| Resource | Type | Link | Primary use |
| --- | --- | --- | --- |
| Agent S | runtime | [GitHub](https://github.com/simular-ai/Agent-S) | Open computer-use agent framework. |
| UI-TARS Desktop | desktop agent | [GitHub](https://github.com/bytedance/UI-TARS-desktop) | Running GUI agents on local desktops. |
| ShowUI | GUI model | [GitHub](https://github.com/showlab/ShowUI) | GUI action model and datasets for screenshot agents. |
| Aguvis | GUI model | [Project](https://aguvis-project.github.io/) | Pure-vision GUI-agent models, datasets, and recipes. |
| LiteCUA | MCP CUA | [GitHub](https://github.com/agiresearch/AIOS) | Computer-as-MCP-server environment contextualization for CUAs. |
| UI-Copilot | GUI agent | [GitHub](https://github.com/ZJU-REAL/UI-Copilot) | Long-horizon GUI agent with tool-integrated policy optimization. |
| OpenCUA | CUA stack | [GitHub](https://github.com/xlang-ai/OpenCUA) | Annotation, data, training, and evaluation for computer-use agents. |
| UItron | GUI agent | [Paper](https://arxiv.org/abs/2508.21767) | Data engineering and interactive infrastructure for foundational GUI agents. |
| UI-TARS-2 | GUI agent | [Paper](https://arxiv.org/abs/2509.02544) | Multi-turn RL and hybrid GUI-environment training for native GUI agents. |
| UI-AGILE | GUI-agent training | [Paper](https://arxiv.org/abs/2507.22025) | RL and high-resolution grounding recipe for GUI agents. |
| Mirage-1 | GUI agent | [Project](https://cybertronagent.github.io/Mirage-1.github.io/) | Hierarchical multimodal skills and online tree search for long-horizon GUI tasks. |
| Instruction Agent | demonstration agent | [Paper](https://arxiv.org/abs/2509.07098) | Converting expert demonstrations into verifiable GUI-agent instructions. |
| MGA | GUI memory | [Paper](https://arxiv.org/abs/2510.24168) | Observation-centric structured memory for GUI interaction. |
| CoAct-1 | hybrid CUA | [Paper](https://arxiv.org/abs/2508.03923) | Routing CUA subtasks between GUI actions and code execution. |
| Mobile-Agent | mobile GUI agent | [GitHub](https://github.com/X-PLUG/MobileAgent) | Mobile and multi-platform GUI-agent implementations. |
| GUIRoboTron-Speech | speech GUI agent | [GitHub](https://github.com/GUIRoboTron/GUIRoboTron-Speech) | Speech-instruction GUI action prediction from screenshots. |
| ClawGUI | GUI-agent stack | [Paper](https://arxiv.org/abs/2604.11784) | Unified training, evaluation, and deployment framework for GUI agents. |
| Agent Alpha | CUA planner | [Paper](https://arxiv.org/abs/2602.02995) | MCTS-style generation, exploration, and evaluation for CUAs. |
| EAM | GUI memory | [Paper](https://arxiv.org/abs/2605.12294) | Executable graph memory and value-guided search for long-horizon GUI automation. |
| Demo2Tutorial | tutorial distillation | [GitHub](https://github.com/showlab/Demo2Tutorial) | Turning screen recordings into multimodal tutorials for GUI agents. |
| ComAct | software agent | [Paper](https://arxiv.org/abs/2606.13239) | COM-as-action control for professional desktop software. |
| LLM-as-Code | CUA harness | [Paper](https://arxiv.org/abs/2606.15874) | Code-governed loop control for stable long CUA trajectories. |
| HiViG | critic | [GitHub](https://github.com/G-JWLee/HiViG) | History-aware visually grounded action critic for CUAs. |
| MolmoWeb | visual web agent | [Paper](https://arxiv.org/abs/2604.08516) | Open visual web-agent models, data mixture, and evaluation harness. |
| WebGym | web-agent environment | [Paper](https://arxiv.org/abs/2601.02439) | Realistic visual web-agent RL tasks and rollout infrastructure. |
| OpenWebRL | web-agent RL | [Paper](https://arxiv.org/abs/2606.02031) | Online multi-turn RL pipeline for live visual web agents. |
| AsyncWebRL | web-agent RL | [Paper](https://arxiv.org/abs/2606.05597) | Asynchronous rollout and training system for visual web agents. |
| Weblica | web-agent environment | [Paper](https://arxiv.org/abs/2605.06761) | Reproducible cached web replicas for scalable visual web-agent training. |
| GUICrafter | GUI-agent training | [GitHub](https://github.com/fansunqi/GUICrafter) | Weakly supervised GUI-agent training from unannotated screenshots. |
| EDAgent | professional GUI agent | [Paper](https://arxiv.org/abs/2512.11611) | Reflection-driven GUI control for electronic-design automation software. |
| uxCUA | usability CUA | [Paper](https://arxiv.org/abs/2604.26020) | CUA-based GUI usability assessment through executed interaction flows. |
| BrowserGym | browser harness | [GitHub](https://github.com/ServiceNow/BrowserGym) | Reproducible browser-agent experiments. |
| AgentLab | experiment framework | [GitHub](https://github.com/ServiceNow/AgentLab) | Running and comparing web-agent experiments. |
| Playwright MCP | browser MCP | [GitHub](https://github.com/microsoft/playwright-mcp) | Browser automation tools exposed through MCP. |
| Stagehand | browser runtime | [GitHub](https://github.com/browserbase/stagehand) | Natural-language plus code browser automation. |
| OpenAdapt | desktop automation | [GitHub](https://github.com/OpenAdaptAI/OpenAdapt) | Recording and replaying GUI demonstrations. |
| ScreenPipe | local capture | [GitHub](https://github.com/screenpipe/screenpipe) | Capturing screen and audio context for local agents. |
| Cua | operator stack | [GitHub](https://github.com/trycua/cua) | Infrastructure for computer-use agents and sandboxed desktops. |

### 6.2 Agentic Visual Perception Tooling

| Resource | Type | Link | Primary use |
| --- | --- | --- | --- |
| OmniParser | GUI parser | [GitHub](https://github.com/microsoft/OmniParser) | Screenshot parsing for pure-vision GUI agents. |
| UGround | GUI grounding | [GitHub](https://github.com/OSU-NLP-Group/UGround) | Pure-vision grounding without accessibility trees. |
| Phi-Ground | GUI grounding | [Project](https://zhangmiaosen2000.github.io/Phi-Ground/) | Grounding model family for CUA click localization. |
| GUI-AIMA | GUI grounding | [GitHub](https://github.com/sjz5202/GUI-AIMA) | Attention-aligned coordinate-free GUI grounding. |
| MEGA-GUI | GUI grounding | [GitHub](https://github.com/samsungsds-research-papers/mega-gui) | Multi-stage grounding agents with ROI zoom and query rewriting. |
| SafeGround | grounding calibration | [Paper](https://arxiv.org/abs/2602.02419) | Risk-aware confidence calibration before GUI actions. |
| See, Point, Refine | closed-loop grounding | [GitHub](https://github.com/microsoft/precision-cua-bench) | Visual-feedback loop for pixel-precise CUA cursor localization. |
| AutoFocus | active perception | [Paper](https://arxiv.org/abs/2605.02630) | Training-free active search for high-resolution GUI grounding. |
| PAGER | GUI control | [Paper](https://arxiv.org/abs/2605.15963) | Point-precise geometric GUI control for pixel-level actions. |
| AQuaUI | token reduction | [Paper](https://arxiv.org/abs/2605.19260) | Adaptive screenshot compression for GUI agents. |
| AGMem | GUI visual memory | [Paper](https://arxiv.org/abs/2606.14106) | Action-grounded crop memory for GUI agents. |
| ChartAgent | visual tool agent | [Paper](https://arxiv.org/abs/2510.04514) | Chart-specific visual actions such as crop, annotate, localize, and decompose. |
| CodeV | code visual agent | [Paper](https://arxiv.org/abs/2511.19661) | Faithful visual reasoning through executable image operations and tool-aware rewards. |
| CiQi-Agent | domain visual agent | [Dataset](https://huggingface.co/datasets/SII-Monument-Valley/CiQi-VQA) | Tool-augmented porcelain reasoning data and benchmark resources. |
| LMM-Searcher | multimodal search | [GitHub](https://github.com/RUCAIBox/LMM-Searcher) | Long-horizon multimodal search with file-based visual memory. |
| POINTS-Seeker | multimodal search | [Paper](https://arxiv.org/abs/2604.14029) | Agentic seeding and visual-history compression for multimodal search. |
| ODE | search-agent data | [Paper](https://arxiv.org/abs/2605.10832) | On-policy data evolution for visual-native search agents. |
| Astra | simulator tool-use | [Paper](https://arxiv.org/abs/2606.06476) | World-simulator calls for imagined spatial evidence. |
| VESTA | statistical tool agent | [Paper](https://arxiv.org/abs/2606.00384) | Dynamic visual/statistical tool creation for data-model exploration. |
| Agentic-MME | agentic eval | [Paper](https://arxiv.org/abs/2604.03016) | Process-level evaluation of visual and knowledge tool expansion. |
| TACO | tool-use RL | [Paper](https://arxiv.org/abs/2606.30251) | Credit assignment for useful multimodal code-tool calls. |
| Visual Agentic Memory | visual memory | [GitHub](https://github.com/yiliu-li/Visual-Agentic-Memory) | Online indexing, hierarchical memory, and retrieval for long-video agents. |
| MuSEAgent | experience memory | [Paper](https://arxiv.org/abs/2603.27813) | Stateful multimodal experience bank for adaptive reasoning guidance. |
| TASKER | keyframe search | [GitHub](https://github.com/VG-GUI-TASKER/VG-GUI-TASKER) | Task-driven keyframe extraction for video-guided GUI agents. |
| DualMem | visual memory | [GitHub](https://github.com/yyyujintang/DMV-Bench) | Visual-verbal memory for multimodal agents with pixel-grounded recall. |
| IPR-1 | active reasoning | [Project](https://mybearyzhang.github.io/ipr-1) | Interactive physical reasoning with world-model rollouts and action code. |

### 6.3 Agentic AIGC Tooling

| Resource | Type | Link | Primary use |
| --- | --- | --- | --- |
| LLaVA-Plus | visual tool-use agent | [Project](https://llava-vl.github.io/llava-plus/) | Tool selection across visual understanding, retrieval, and generation. |
| GenArtist | creative agent | [Project](https://zhenyuw16.github.io/GenArtist_page/) | Decomposed image generation and editing with self-correction. |
| PlotEdit | chart-editing agent | [Paper](https://arxiv.org/abs/2501.11233) | Multi-agent chart editing from natural language over PDF or scanned chart images. |
| ComfyGPT | workflow agent | [Paper](https://arxiv.org/abs/2503.17671) | Self-optimizing multi-agent ComfyUI workflow generation. |
| RefineEdit-Agent | image-editing agent | [Paper](https://arxiv.org/abs/2508.17435) | Closed-loop iterative image editing with visual feedback. |
| MIRA | image-editing agent | [Paper](https://arxiv.org/abs/2511.21087) | Iterative perception-reasoning-action loop for image editing. |
| I2E | image-editing agent | [Paper](https://arxiv.org/abs/2601.03741) | Object-layer action environment for compositional image editing. |
| MiLDEAgent | design-editing agent | [Paper](https://arxiv.org/abs/2601.04589) | Layer-aware editing for multi-layer design documents. |
| GenAgent | generation agent | [Paper](https://arxiv.org/abs/2601.18543) | Generator-as-tool agentic image generation. |
| MSRAMIE | image-editing agent | [Paper](https://arxiv.org/abs/2603.16967) | Structured multimodal reasoning for multi-instruction image editing. |
| Gen-Searcher | search-generation agent | [GitHub](https://github.com/tulerfeng/Gen-Searcher) | Search-augmented image generation for knowledge-intensive prompts. |
| Unify-Agent | grounded generation agent | [Paper](https://arxiv.org/abs/2603.29620) | Multimodal evidence search, recaptioning, and grounded image synthesis. |
| Agent Banana | image-editing agent | [GitHub](https://github.com/taco-group/agent-banana) | Planner-executor multi-turn image editing. |
| JarvisEvo | photo-editing agent | [Project](https://jarvisevo.vercel.app/) | Self-evolving editor-evaluator optimization for photo editing. |
| IMAGAgent | image-editing agent | [GitHub](https://github.com/hackermmzz/IMAGAgent.git) | Multi-turn editing with planning, tool orchestration, and reflection. |
| SAGE | 3D scene-generation agent | [Project](https://nvlabs.github.io/sage) | Agentic simulator-ready 3D scene generation. |
| GEMS | multimodal generation agent | [Project](https://gems-gen.github.io/) | Agent loop, memory, and skills for multimodal generation. |
| GenEvolve | agentic generation | [Project](https://ephemeral182.github.io/GenEvolve/) | Tool-orchestrated image-generation agent and benchmark resources. |
| GenClaw | code-driven generation | [Paper](https://arxiv.org/abs/2605.30248) | Executable sketches as controllable intermediates for image generation. |
| IEA | image-editing agent | [Paper](https://arxiv.org/abs/2606.08016) | Parameterized editing tools with transparent conversational edit traces. |
| Data2Story | multimodal story agent | [Project](https://data2story.github.io) | Multi-agent data storytelling with evidence-grounded generated visuals. |
| InterleaveThinker | interleaved generation | [Paper](https://arxiv.org/abs/2606.13679) | Planner-critic multi-agent pipeline for text-image sequence generation. |
| RS-Gen | generation agent | [Paper](https://arxiv.org/abs/2606.23221) | Reasoning and search-augmented image-generation framework. |
| Qwen-Image-Agent | image-generation agent | [Paper](https://arxiv.org/abs/2606.26907) | Context-aware planning, search, memory, and feedback for image generation. |
| ManimAgent | animation agent | [Project](https://manimagent.github.io/) | Self-evolving multimodal agent for Manim animation code generation. |

## 7. Workflow Stacks

| Goal | Practical starting stack |
| --- | --- |
| GUI grounding research | ScreenSpot + ScreenSpot-Pro + PAGE Bench + Precision-CUA-Bench + DragOn + SeeClick + OS-ATLAS + ShowUI + OmniParser + UGround + Phi-Ground + GUI-AIMA + MEGA-GUI + SafeGround + See, Point, Refine + AutoFocus + Argus |
| Web-agent experiments | BrowserGym + AgentLab + WebArena + VisualWebArena + WebLINX + WebClick + WebGym + WebChain + Weblica + Ego2Web + OpenWebRL + AsyncWebRL + Surfer-H/Holo1 + WebSight + MolmoWeb + ColorBrowserAgent + PANDO + Multi-Agent Computer Use |
| Desktop CUA experiments | OSWorld + GUI-360 + OSWorld 2.0 + Windows Agent Arena + MacArena + GUI vs. CLI + WeaveBench + PPT-Eval + Agent S/S2 + UI-TARS Desktop + UI-TARS-2 + OpenCUA + LiteCUA + UItron + UI-AGILE + Mirage-1 + CoAct-1 + Instruction Agent + MGA + SEAgent + ComputerRL + UltraCUA + MAI-UI + Ferret-UI Lite + Agent Alpha + EAM + AGMem + ComAct + LLM-as-Code + StainFlow + OpenComputer + Workflow-GYM + PreAct + Learning from Failure |
| Personal and scientific CUA | MyPCBench + MementoGUI + ATMem + ScreenSearch + OpenComputer + LabOSBench + ProCUA-SFT + DocOS + AUI-Gym + LivingScreen + VG-GUIBench + VisualClawArena + GUI-EDA + EDAgent + uxCUA + Repeated Execution Reliability |
| Mobile-agent experiments | Android in the Wild + AndroidWorld + AndroidLH + OmniGUI + AppAgent + Mobile-Agent + Mirage-1 + GUIRoboTron-Speech + Mobile-Agent-v3/GUI-Owl + GUI-Owl-1.5 + Xiaomi-GUI-0 + GUICrafter + UI-KOBE + SecAgent + Faithful-Agent + AgentLens + ClawGUI + Aguvis + UI-Copilot + Ferret-UI Lite |
| Visual tool-use and search | VISPROG + ViperGPT + LLaVA-Plus + DeepEyes + Visual Agentic RFT + VTool-R1 + ChartAgent + CodeV + CiQi-Agent + Orion + MTA-Agent + LMM-Searcher + POINTS-Seeker + ODE + ProMMSearchAgent + MMSkills + VisHarness + VESTA + Astra + IAPO + PERIA + Visual-Seeker + S-Agent + ProMSA + Dynamo + TACO + SimpleSearch-VL + VisualToolBench + Agentic-MME + InterLV-Search |
| Visual memory and active perception | IPR-1 + MuSEAgent + CoSee + Visual Agentic Memory + AGMem + TASKER + VisualClaw + DualMem + DMV-Bench + VG-GUIBench + SpatialWorld + GPTNT |
| Agentic image, editing, and 3D creation | LLaVA-Plus + GenArtist + PlotEdit + ComfyGPT + RefineEdit-Agent + Street Design Multi-Agent Pipeline + MIRA + I2E + MiLDEAgent + GenAgent + MSRAMIE + Gen-Searcher + Unify-Agent + Agent Banana + JarvisEvo + IMAGAgent + SAGE + WorldAgents + VisionCreator + GEMS + Code-as-Room + GenEvolve + GenClaw + IEA + Data2Story + InterleaveThinker + RS-Gen + Qwen-Image-Agent + ManimAgent |

[Back to top](#top)

## Related Lists

| Repository | Link | Notes |
| --- | --- | --- |
| Awesome Multimodal Modeling | [GitHub](https://github.com/OpenEnvision/Awesome-Multimodal-Modeling) | Reference style and broader multimodal-modeling taxonomy. |
| Awesome-GUI-Agents | [GitHub](https://github.com/ZJU-REAL/Awesome-GUI-Agents) | Focused list for GUI agents and GUI grounding. |
| GUI-Agents-Paper-List | [GitHub](https://github.com/OSU-NLP-Group/GUI-Agents-Paper-List) | Systematic paper list for GUI agents. |
| Awesome Multimodal Large Language Models | [GitHub](https://github.com/BradyFU/Awesome-Multimodal-Large-Language-Models) | Broader MLLM background; not the inclusion scope of this list. |
| Evolving Visual Generation | [GitHub](https://github.com/EvolvingLMMs-Lab/Evolving-Visual-Generation) | Broader visual-generation background; only agentic entries belong here. |

[Back to top](#top)

## Contributing

Pull requests are welcome when they improve precision, coverage, or maintainability.

Recommended entry format:

```markdown
| Work | Year | Links | Why it matters |
| --- | --- | --- | --- |
| Paper or project name | 2026 | [paper](...), [code](...) | One sentence explaining the agent loop, tool use, action grounding, memory, critique, or closed-loop evaluation relevance. |
```

Before adding an item, check:

- Does it fit visual agents, agentic AIGC, agentic visual perception, benchmark, or tooling?
- Is there a primary source?
- Is it meaningfully different from entries already listed?
- Does the one-sentence relevance explain why a reader should care?
- Would it still belong here if all generic VLM, generation, OCR, detection, and segmentation papers were excluded?

[Back to top](#top)

## Maintenance Policy

- Keep the list selective. Do not add every adjacent arXiv paper.
- Remove duplicate rows and weakly scoped papers during each cleanup pass.
- Prefer primary sources over secondary summaries.
- Avoid future-looking claims unless the source is public and inspectable.
- Keep research papers, benchmarks, and tools separated.
- Re-check links and arXiv IDs before accepting large batches.

[Back to top](#top)

## Citation

If this curated index helps your research or engineering work, you can cite it as:

```bibtex
@misc{awesome_visual_agent,
  title        = {Awesome Visual Agent},
  author       = {OpenEnvision},
  year         = {2026},
  howpublished = {\url{https://github.com/OpenEnvision/Awesome-Visual-Agent}},
  note         = {Curated list of visual agents, agentic AIGC workflows, and agent-oriented visual grounding systems}
}
```

[Back to top](#top)

## License

Please follow the repository license when reusing this list. If no license file is present, add one before formal redistribution.

[Back to top](#top)
