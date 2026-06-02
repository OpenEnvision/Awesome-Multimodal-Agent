<a id="top"></a>

<div align="center">

# Awesome Visual Agent

**A curated research index for visual agents that perceive, ground, plan, act, create, and evaluate in visually grounded environments.**

[![Awesome](https://awesome.re/badge-flat2.svg)](https://awesome.re)
![Scope](https://img.shields.io/badge/scope-visual%20agents-0f766e)
![Boundary](https://img.shields.io/badge/boundary-agentic%20visual%20systems-111827)
![Style](https://img.shields.io/badge/style-curated%20research%20map-2563eb)

</div>

Visual agents occupy the intersection of multimodal perception, grounded reasoning, tool use, interaction, and control. This repository curates papers, benchmarks, datasets, runtimes, and engineering resources for systems that close the loop between visual observation and purposeful action.

The list is selective rather than exhaustive. It prioritizes works that introduce a clear agent loop, action space, evaluation protocol, data engine, safety finding, or reusable implementation artifact, while excluding generic multimodal models and one-shot visual-generation systems without an agentic mechanism.

## Contents

- [Selection Boundary](#selection-boundary)
- [Research Taxonomy](#research-taxonomy)
- [Curation Rubric](#curation-rubric)
- [Reading Pathways](#reading-pathways)
- [Recent Additions](#recent-additions)
- [Research Map](#research-map)
  - [Surveys and Landscape](#surveys-and-landscape)
  - [GUI Grounding and Screen Perception](#gui-grounding-and-screen-perception)
  - [Computer-Use Agents and Environments](#computer-use-agents-and-environments)
  - [Embodied Vision-Language-Action Agents](#embodied-vision-language-action-agents)
  - [Agentic Visual Reasoning, Generation, and World Building](#agentic-visual-reasoning-generation-and-world-building)
  - [General Visual Agents, Tool Use, and Visualization Agents](#general-visual-agents-tool-use-and-visualization-agents)
  - [Safety, Robustness, and Evaluation](#safety-robustness-and-evaluation)
- [Benchmarks and Environments](#benchmarks-and-environments)
- [Skills, Tools, and Engineering Resources](#skills-tools-and-engineering-resources)
  - [Skill and Prompt Libraries](#skill-and-prompt-libraries)
  - [Models, Parsers, and Grounding Tools](#models-parsers-and-grounding-tools)
  - [Agent Runtimes and Operator Stacks](#agent-runtimes-and-operator-stacks)
  - [Data Capture, Training, and Evaluation Stacks](#data-capture-training-and-evaluation-stacks)
  - [Embodied and Robotics Tooling](#embodied-and-robotics-tooling)
- [Workflow Stacks](#workflow-stacks)
- [Official Docs and Engineering Notes](#official-docs-and-engineering-notes)
- [Related Lists](#related-lists)
- [Contributing](#contributing)
- [Maintenance Policy](#maintenance-policy)
- [Citation](#citation)

## Selection Boundary

Included areas:

- GUI, web, desktop, and mobile agents that perceive screens and produce executable actions.
- Visual grounding work that is clearly tied to downstream agent control.
- Embodied vision-language-action systems for robot manipulation, navigation, and physical-world interaction.
- Agentic visual reasoning and generation systems with search, planning, memory, tools, critique, or iterative refinement.
- Benchmarks, data engines, simulators, safety suites, and toolchains that support visual-agent construction and evaluation.

Excluded by default:

- Broad multimodal foundation models with no visual-agent evaluation.
- Generic OCR, captioning, visual question answering, or layout parsing without an action or agent setting.
- Image, video, or 3D generators that are only prompt-in/artifact-out.
- Unverified arXiv IDs, placeholder-looking entries, product rumors, and duplicate rows.

[Back to top](#top)

## Research Taxonomy

| Track | Research question | Representative works |
| --- | --- | --- |
| Screen grounding | Can the model localize text, widgets, controls, and regions well enough to act? | Set-of-Mark, SeeClick, OmniParser, UGround, ScreenSpot-Pro, GUI-Eyes, SafeGround, PAGER |
| Computer use | Can the agent complete tasks in real websites, desktops, or phones over multiple steps? | WebArena, WebLINX, AppAgent, Mobile-Agent, OSWorld, AndroidWorld, Agent S, UI-TARS, WebGym, OpenComputer |
| Embodied VLA | Can visual observations and language be converted into safe physical actions? | PerAct, VIMA, RT-1, RT-2, Open X-Embodiment, OpenVLA, Pi-Zero, Magma, VLA-REPLICA, Pre-VLA |
| Agentic reasoning and creation | Can the system plan, search, critique, edit, or generate visual artifacts through a loop? | VISPROG, ViperGPT, DiffusionAgent, GenArtist, DeepEyes, Visual Agentic RFT, Agent Banana, VisionCreator, GEMS, GenEvolve |
| General visual agents | Can multimodal agents build reusable visual skills, use visual tools, reason over video/charts/visualizations, and coordinate across visual contexts? | Orion, Kimi K2.5, MMSkills, VTC-Bench, VisualToolAgent, Visual Agentic Memory, HierVA, DV-World |
| Reliability and safety | Can we measure brittleness, privacy risk, prompt injection, unsafe actions, and deployment readiness? | VPI-Bench, OpenAgentSafety, OS-BLIND, HazardArena, UI-CUBE, GUIDE, CORA, WARD |
| Infrastructure | Which tools and environments support reproducible training, deployment, and evaluation? | BrowserGym, AgentLab, Stagehand, Playwright MCP, Agent S, Cua, OpenCUA, ScaleCUA, WebGym, C-World, LeRobot |

[Back to top](#top)

## Curation Rubric

An item should usually satisfy at least one of these conditions:

- It defines a new visual-agent capability, benchmark, data engine, training recipe, runtime, or safety evaluation.
- It evaluates closed-loop behavior rather than only static recognition or one-shot generation.
- It is widely used as a baseline, benchmark, dataset, environment, or builder tool.
- It has a stable paper, official code, project page, or documentation that readers can inspect.

An item is removed or left out when the visual-agent connection is weak, the link is unverifiable, the arXiv ID is wrong, the row duplicates a better entry, or the contribution is mostly a product announcement without enough technical detail.

[Back to top](#top)

## Reading Pathways

**GUI and computer use.** Start with [SeeClick](https://arxiv.org/abs/2401.10935), [OmniParser](https://arxiv.org/abs/2408.00203), [OSWorld](https://arxiv.org/abs/2404.07972), [UI-TARS](https://arxiv.org/abs/2501.12326), [Agent S2](https://arxiv.org/abs/2504.00906), [OpenCUA](https://arxiv.org/abs/2508.09123), [UI-Copilot](https://arxiv.org/abs/2604.13822), [WebGym](https://arxiv.org/abs/2601.02439), [MementoGUI](https://arxiv.org/abs/2605.18652), and [OpenComputer](https://arxiv.org/abs/2605.19769).

**Mobile GUI agents.** Read [Android in the Wild](https://arxiv.org/abs/2307.10088), [MM-Navigator](https://arxiv.org/abs/2311.07562), [AppAgent](https://arxiv.org/abs/2312.13771), [Mobile-Agent](https://arxiv.org/abs/2401.16158), [Mobile-Agent-v2](https://arxiv.org/abs/2406.01014), [A3](https://arxiv.org/abs/2501.01149), [MemGUI-Bench](https://arxiv.org/abs/2602.06075), [PSPA-Bench](https://arxiv.org/abs/2603.29318), [OmniGUI](https://arxiv.org/abs/2605.18758), and [How Mobile World Model Guides GUI Agents?](https://arxiv.org/abs/2605.10347).

**Grounding and perception.** Read [ScreenAI](https://arxiv.org/abs/2402.04615), [Ferret-UI](https://arxiv.org/abs/2404.05719), [UGround](https://arxiv.org/abs/2410.05243), [ScreenSpot-Pro](https://arxiv.org/abs/2504.07981), [GUI-Actor](https://arxiv.org/abs/2506.03143), [Phi-Ground](https://arxiv.org/abs/2507.23779), [GUI-Eyes](https://arxiv.org/abs/2601.09770), [UI-Zoomer](https://arxiv.org/abs/2604.14113), [SafeGround](https://arxiv.org/abs/2602.02419), [AutoFocus](https://arxiv.org/abs/2605.02630), and [PAGER](https://arxiv.org/abs/2605.15963).

**Embodied VLA.** Start with [PerAct](https://arxiv.org/abs/2209.05451), [VIMA](https://arxiv.org/abs/2210.03094), [RT-1](https://arxiv.org/abs/2212.06817), [PaLM-E](https://arxiv.org/abs/2303.03378), [RT-2](https://arxiv.org/abs/2307.15818), [Open X-Embodiment](https://arxiv.org/abs/2310.08864), [OpenVLA](https://arxiv.org/abs/2406.09246), [Pi-Zero](https://arxiv.org/abs/2410.24164), [Magma](https://arxiv.org/abs/2502.13130), [World-Value-Action](https://arxiv.org/abs/2604.14732), [VLAs-as-Tools](https://arxiv.org/abs/2605.13119), [VLA-REPLICA](https://arxiv.org/abs/2605.20774), and [Pre-VLA](https://arxiv.org/abs/2605.22446).

**Agentic visual reasoning and creation.** Read [VISPROG](https://arxiv.org/abs/2211.11559), [Visual ChatGPT](https://arxiv.org/abs/2303.04671), [ViperGPT](https://arxiv.org/abs/2303.08128), [LLaVA-Plus](https://arxiv.org/abs/2311.05437), [DiffusionAgent](https://arxiv.org/abs/2401.10061), [GenArtist](https://arxiv.org/abs/2407.05600), [DeepEyes](https://arxiv.org/abs/2505.14362), [Agent Banana](https://arxiv.org/abs/2602.09084), [VisionCreator](https://arxiv.org/abs/2603.02681), [Visual Agentic Memory](https://arxiv.org/abs/2605.16481), [GEMS](https://arxiv.org/abs/2603.28088), and [GenEvolve](https://arxiv.org/abs/2605.21605).

**General visual agents.** Read [Visual Agentic Reinforcement Fine-Tuning](https://arxiv.org/abs/2505.14246), [VisualToolAgent](https://arxiv.org/abs/2505.20289), [Orion](https://arxiv.org/abs/2511.14210), [Kimi K2.5](https://arxiv.org/abs/2602.02276), [VTC-Bench](https://arxiv.org/abs/2603.15030), [MMSkills](https://arxiv.org/abs/2605.13527), [Visual Agentic Memory](https://arxiv.org/abs/2605.16481), [HierVA](https://arxiv.org/abs/2605.04304), and [DV-World](https://arxiv.org/abs/2604.25914).

[Back to top](#top)

## Recent Additions

| Work | Date | Contribution / Relevance |
| --- | --- | --- |
| [GUI-Eyes](https://arxiv.org/abs/2601.09770) | 2026-01 | Active visual perception for GUI grounding with learned crop/zoom tool use. |
| [ShowUI-Aloha](https://arxiv.org/abs/2601.07181) | 2026-01 | Converts human screen recordings into structured GUI-agent supervision. |
| [OS-Symphony](https://arxiv.org/abs/2601.07779) | 2026-01 | Holistic framework for robust computer-using agents. |
| [Kimi K2.5](https://arxiv.org/abs/2602.02276) | 2026-02 | Open-source multimodal model focused on visual agentic intelligence. |
| [Agent Banana](https://arxiv.org/abs/2602.09084) | 2026-02 | Agentic image editing with planning and tool execution rather than one-shot editing. |
| [SAGE](https://arxiv.org/abs/2602.10116) | 2026-02 | Agentic 3D scene generation for embodied-AI policy training. |
| [ActionEngine](https://arxiv.org/abs/2602.20502) | 2026-02 | Uses state-machine memory to make GUI agents more programmatic and recoverable. |
| [OmniStream](https://arxiv.org/abs/2603.12265) | 2026-03 | Streaming visual-agent representation for perception, reconstruction, and action. |
| [VTC-Bench](https://arxiv.org/abs/2603.15030) | 2026-03 | Evaluates compositional visual tool chaining in agentic multimodal models. |
| [CUA-Suite](https://arxiv.org/abs/2603.24440) | 2026-03 | Large human-annotated video demonstrations for computer-use agents. |
| [GEMS](https://arxiv.org/abs/2603.28088) | 2026-03 | Multimodal generation loop with memory, skills, and iterative agent refinement. |
| [SciVisAgentBench](https://arxiv.org/abs/2603.29139) | 2026-03-31 | Benchmark for scientific data analysis and visualization agents. |
| [SASAV](https://arxiv.org/abs/2604.03406) | 2026-04-03 | Self-directed agent for scientific analysis and visualization workflows. |
| [UI-Copilot](https://arxiv.org/abs/2604.13822) | 2026-04 | Long-horizon GUI automation with tool-integrated policy optimization. |
| [UI-Zoomer](https://arxiv.org/abs/2604.14113) | 2026-04 | Uncertainty-driven zoom-in for hard GUI grounding cases. |
| [CANVAS](https://arxiv.org/abs/2604.13452) | 2026-04-15 | Agentic storyboarding for continuity-aware long-form visual narratives. |
| [Progressive Online Video Understanding](https://arxiv.org/abs/2604.18459) | 2026-04-20 | Streaming visual-agent setting where answers trigger when enough evidence appears. |
| [Beyond Pixels](https://arxiv.org/abs/2604.21134) | 2026-04-22 | Interactive grounding for visualization agents beyond static pixel reading. |
| [AI-Gram](https://arxiv.org/abs/2604.21446) | 2026-04-23 | Deployed AI-native social network where visual agents create and respond to visual content. |
| [DynamicGUIBench](https://arxiv.org/abs/2604.25380) | 2026-04 | Evaluates GUI agents in high-dynamic interfaces rather than static screenshots. |
| [DV-World](https://arxiv.org/abs/2604.25914) | 2026-04-28 | Real-world benchmark for data-visualization agents with grounding and intent alignment. |
| [UI-Verse](https://arxiv.org/abs/2605.02729) | 2026-05 | Studies interface design heuristics that improve computer-use-agent reliability. |
| [HierVA](https://arxiv.org/abs/2605.04304) | 2026-05-05 | Hierarchical visual agent for chart reasoning across image-text contexts. |
| [Securing Computer-Use Agents](https://arxiv.org/abs/2605.07110) | 2026-05 | Connects CUA architecture, lifecycle, permission scope, and runtime reliability. |
| [Don't Click That](https://arxiv.org/abs/2605.09497) | 2026-05 | Deception-aware web-agent benchmark and defense for misleading interface elements. |
| [VLAs-as-Tools](https://arxiv.org/abs/2605.13119) | 2026-05-13 | Long-horizon embodied-agent strategy that delegates bounded physical subtasks to specialized VLA tools. |
| [MMSkills](https://arxiv.org/abs/2605.13527) | 2026-05-13 | Multimodal skill packages for reusable procedural knowledge in general visual agents. |
| [Video2GUI](https://arxiv.org/abs/2605.14747) | 2026-05 | Synthesizes GUI interaction trajectories from instructional videos. |
| [SaaS-Bench](https://arxiv.org/abs/2605.15777) | 2026-05-15 | Real-world SaaS workflow benchmark for long-horizon computer-use agents. |
| [ScreenSearch](https://arxiv.org/abs/2605.16024) | 2026-05-15 | Ambiguity-aware OS exploration for building large desktop GUI state graphs. |
| [ShopGym](https://arxiv.org/abs/2605.16116) | 2026-05-15 | Realistic, controllable e-commerce simulation and benchmark for web agents. |
| [Visual Agentic Memory](https://arxiv.org/abs/2605.16481) | 2026-05-15 | Online indexing, hierarchical memory, and agentic retrieval for long video understanding. |
| [SE-GA](https://arxiv.org/abs/2605.16883) | 2026-05-16 | Memory-augmented self-evolution framework for long-horizon GUI agents. |
| [DocOS](https://arxiv.org/abs/2605.18048) | 2026-05-18 | Benchmark for GUI agents that proactively retrieve documentation and ground it into actions. |
| [MementoGUI](https://arxiv.org/abs/2605.18652) | 2026-05-18 | Learned multimodal memory controller for long-horizon GUI-agent trajectories. |
| [AQuaUI](https://arxiv.org/abs/2605.19260) | 2026-05-19 | Adaptive quadtree visual-token reduction for high-resolution GUI-agent screenshots. |
| [CutVerse](https://arxiv.org/abs/2605.19484) | 2026-05-19 | GUI-agent benchmark for professional media post-production editing workflows. |
| [OpenComputer](https://arxiv.org/abs/2605.19769) | 2026-05-19 | Verifier-grounded software worlds and auditable rewards for computer-use agents. |
| [VLA-REPLICA](https://arxiv.org/abs/2605.20774) | 2026-05-20 | Low-cost, reproducible real-world benchmark for VLA model evaluation. |
| [Agent JIT Compilation](https://arxiv.org/abs/2605.21470) | 2026-05-20 | Compiles web-agent plans into lower-latency executable schedules. |
| [GenEvolve](https://arxiv.org/abs/2605.21605) | 2026-05-20 | Self-evolving image-generation agent using tool-orchestrated visual experience distillation. |
| [Pre-VLA](https://arxiv.org/abs/2605.22446) | 2026-05-21 | Runtime verification for risky VLA actions and world-model rollouts before execution. |
| [Spatial Memory for Out-of-Vision Manipulation](https://arxiv.org/abs/2605.22283) | 2026-05-21 | Adds persistent spatial memory to VLA policies when targets leave the camera view. |

[Back to top](#top)

## Research Map

### Surveys and Landscape

| Work | Year | Links | Contribution / Relevance |
| --- | --- | --- | --- |
| A Comprehensive Survey of Agents for Computer Use | 2025 | [paper](https://arxiv.org/abs/2501.16150) | Broad map of computer-use-agent domains, agent loops, and evaluation bottlenecks. |
| GUI Agents: A Survey | 2024 | [paper](https://arxiv.org/abs/2412.13501) | Practical survey of GUI-agent architectures, datasets, benchmarks, and failure modes. |
| A Survey on (M)LLM-Based GUI Agents | 2025 | [paper](https://arxiv.org/abs/2504.13865) | Focused entry point for planning, grounding, memory, and GUI-agent evaluation. |
| Towards Trustworthy GUI Agents | 2025 | [paper](https://arxiv.org/abs/2503.23434) | Reliability and safety framing for deployment-facing GUI agents. |
| Large Multimodal Agents: A Survey | 2024 | [paper](https://arxiv.org/abs/2402.15116) | Contextual background on LLM-driven multimodal agent components. |
| A Survey on Vision-Language-Action Models for Embodied AI | 2024 | [paper](https://arxiv.org/abs/2405.14093) | Early VLA survey covering embodied perception, planning, and action. |
| Vision-Language-Action in Robotics | 2026 | [paper](https://arxiv.org/abs/2604.23001) | Data-centric survey of VLA datasets, benchmarks, and data engines. |
| Vision-Language-Action Safety | 2026 | [paper](https://arxiv.org/abs/2604.23775) | Focused taxonomy of threats, evaluations, and defenses for VLA systems. |
| Safety in Embodied AI | 2026 | [paper](https://arxiv.org/abs/2605.02900) | Wider safety survey across perception, planning, action, and interaction. |
| Visual Generation in the New Era | 2026 | [paper](https://arxiv.org/abs/2604.28185) | Conceptual lens for when visual generation becomes agentic world modeling. |
| Securing Computer-Use Agents | 2026 | [paper](https://arxiv.org/abs/2605.07110) | Deployment-grounded view of CUA reliability across architecture, lifecycle, permissions, and oversight. |
| GUI Agents with Reinforcement Learning | 2026 | [paper](https://arxiv.org/abs/2604.27955) | RL-centered survey of GUI-agent rewards, data efficiency, continual learning, and deployment risks. |
| Agentic World Modeling | 2026 | [paper](https://arxiv.org/abs/2604.22748) | Taxonomy for predictive world models across physical, digital, social, and scientific agents. |
| World Action Models | 2026 | [paper](https://arxiv.org/abs/2605.12090) | Defines embodied models that jointly predict future states and actions rather than actions alone. |

[Back to top](#top)

### GUI Grounding and Screen Perception

| Work | Year | Links | Contribution / Relevance |
| --- | --- | --- | --- |
| CogAgent | 2023 | [paper](https://arxiv.org/abs/2312.08914), [code](https://github.com/THUDM/CogAgent) | Early high-resolution VLM built explicitly for GUI understanding and navigation. |
| Set-of-Mark Prompting | 2023 | [paper](https://arxiv.org/abs/2310.11441), [code](https://github.com/microsoft/SoM) | Simple visual marking strategy that became a practical grounding primitive for LMM agents. |
| SeeClick | 2024 | [paper](https://arxiv.org/abs/2401.10935), [code](https://github.com/njucckevin/SeeClick) | Shows that GUI grounding is a core bottleneck for visual GUI agents. |
| ScreenAI | 2024 | [paper](https://arxiv.org/abs/2402.04615) | Strong foundation for screen, document, infographic, and layout-heavy visual understanding. |
| Ferret-UI | 2024 | [paper](https://arxiv.org/abs/2404.05719), [code](https://github.com/apple/ml-ferret) | Region-aware mobile UI understanding with explicit grounding. |
| OmniParser | 2024 | [paper](https://arxiv.org/abs/2408.00203), [code](https://github.com/microsoft/OmniParser) | Practical screenshot-to-interactable-region parser for pure-vision GUI agents. |
| UGround | 2024 | [paper](https://arxiv.org/abs/2410.05243), [code](https://github.com/OSU-NLP-Group/UGround) | Strong pure-vision grounding baseline without relying on accessibility trees. |
| OS-ATLAS | 2024 | [paper](https://arxiv.org/abs/2410.23218) | Foundation action model for generalist GUI agents. |
| ShowUI | 2024 | [paper](https://arxiv.org/abs/2411.17465), [code](https://github.com/showlab/ShowUI) | Unifies screenshot-conditioned GUI perception and action modeling. |
| Aguvis | 2024 | [paper](https://arxiv.org/abs/2412.04454) | Pure-vision GUI agent direction with autonomous interface interaction. |
| UI-E2I-Synth | 2025 | [paper](https://arxiv.org/abs/2504.11257) | Synthetic instruction pipeline for scaling GUI grounding supervision. |
| ScreenSpot-Pro | 2025 | [paper](https://arxiv.org/abs/2504.07981) | Hard high-resolution grounding benchmark for professional computer-use screens. |
| GUI-G1 | 2025 | [paper](https://arxiv.org/abs/2505.15810), [code](https://github.com/Yuqi-Zhou/GUI-G1) | Careful analysis of RL pitfalls in GUI grounding. |
| Enhancing Visual Grounding via Self-Evolutionary RL | 2025 | [paper](https://arxiv.org/abs/2505.12370) | Data-efficient RL recipe for high-resolution GUI grounding. |
| GUI-Actor | 2025 | [paper](https://arxiv.org/abs/2506.03143) | Coordinate-free grounding with an action head and verifier. |
| Phi-Ground | 2025 | [paper](https://arxiv.org/abs/2507.23779) | Strong empirical report on training compact GUI grounding models. |
| Test-Time RL for GUI Grounding | 2025 | [paper](https://arxiv.org/abs/2508.05615) | Test-time adaptation using region consistency. |
| Explicit Position-to-Coordinate Mapping | 2025 | [paper](https://arxiv.org/abs/2510.03230) | Addresses coordinate generation as a concrete grounding bottleneck. |
| GUI-Eyes | 2026 | [paper](https://arxiv.org/abs/2601.09770) | Learns when and how to call visual tools such as crop and zoom. |
| SafeGround | 2026 | [paper](https://arxiv.org/abs/2602.02419) | Calibrates GUI-grounding uncertainty before risky or irreversible actions. |
| UI-Zoomer | 2026 | [paper](https://arxiv.org/abs/2604.14113), [code](https://github.com/ZJU-REAL/UI-Zoomer) | Uses uncertainty to decide where to zoom for GUI grounding. |
| AutoFocus | 2026 | [paper](https://arxiv.org/abs/2605.02630) | Training-free active visual search for high-resolution GUI grounding. |
| DRS-GUI | 2026 | [paper](https://arxiv.org/abs/2605.15542) | Dynamic region search that narrows cluttered screenshots without model fine-tuning. |
| WinDeskGround | 2026 | [paper](https://arxiv.org/abs/2605.16402) | Robust grounding benchmark for complex multi-window desktop interfaces. |
| PAGER | 2026 | [paper](https://arxiv.org/abs/2605.15963) | Studies point-precise geometric GUI control where small coordinate errors cascade. |
| AQuaUI | 2026 | [paper](https://arxiv.org/abs/2605.19260) | Adaptive-quadtree visual-token reduction for high-resolution GUI-agent screenshots. |

[Back to top](#top)

### Computer-Use Agents and Environments

| Work | Year | Links | Contribution / Relevance |
| --- | --- | --- | --- |
| Mind2Web | 2023 | [paper](https://arxiv.org/abs/2306.06070) | Foundational benchmark for generalist web agents. |
| Android in the Wild | 2023 | [paper](https://arxiv.org/abs/2307.10088) | Large-scale Android device-control dataset with realistic gestures. |
| WebArena | 2023 | [paper](https://arxiv.org/abs/2307.13854), [code](https://github.com/web-arena-x/webarena) | Realistic web-agent environment with execution-based tasks. |
| AutoDroid | 2023 | [paper](https://arxiv.org/abs/2308.15272) | Early Android task-automation system and benchmark that remains relevant as a mobile-agent baseline. |
| MM-Navigator | 2023 | [paper](https://arxiv.org/abs/2311.07562) | Early GPT-4V smartphone GUI navigation agent with zero-shot screen interaction. |
| AppAgent | 2023 | [paper](https://arxiv.org/abs/2312.13771) | Smartphone agent that learns app operation from autonomous exploration or demonstrations. |
| SeeAct | 2024 | [paper](https://arxiv.org/abs/2401.01614) | Web agent showing why grounding matters for GPT-4V-style agents. |
| Mobile-Agent | 2024 | [paper](https://arxiv.org/abs/2401.16158), [code](https://github.com/X-PLUG/MobileAgent) | Vision-centric mobile device agent using visual perception tools and stepwise planning. |
| VisualWebArena | 2024 | [paper](https://arxiv.org/abs/2401.13649), [code](https://github.com/web-arena-x/visualwebarena) | Adds visually grounded tasks to realistic web-agent evaluation. |
| WebVoyager | 2024 | [paper](https://arxiv.org/abs/2401.13919) | End-to-end multimodal web agent evaluated on live websites. |
| WebLINX | 2024 | [paper](https://arxiv.org/abs/2402.05930), [project](https://mcgill-nlp.github.io/weblinx) | Large benchmark of multi-turn conversational web navigation with screenshots and action history. |
| OmniACT | 2024 | [paper](https://arxiv.org/abs/2402.17553) | Desktop and web benchmark where agents generate executable automation scripts. |
| WorkArena | 2024 | [paper](https://arxiv.org/abs/2403.07718), [code](https://github.com/ServiceNow/WorkArena) | Enterprise workflow benchmark for knowledge-work agents. |
| MMInA | 2024 | [paper](https://arxiv.org/abs/2404.09992), [code](https://github.com/shulin16/MMInA) | Multihop multimodal Internet-agent benchmark on evolving real websites. |
| B-MoCA | 2024 | [paper](https://arxiv.org/abs/2404.16660) | Mobile device-control benchmark across diverse configurations. |
| OSWorld | 2024 | [paper](https://arxiv.org/abs/2404.07972), [code](https://github.com/xlang-ai/OSWorld) | Flagship benchmark for open-ended tasks in real desktop environments. |
| AndroidWorld | 2024 | [paper](https://arxiv.org/abs/2405.14573), [code](https://github.com/google-research/android_world) | Dynamic Android benchmark with broad task diversity. |
| Mobile-Agent-v2 | 2024 | [paper](https://arxiv.org/abs/2406.01014), [code](https://github.com/X-PLUG/MobileAgent) | Multi-agent mobile operation assistant with planning, decision, and reflection roles. |
| MobileAgentBench | 2024 | [paper](https://arxiv.org/abs/2406.08184) | Practical benchmark for mobile LLM agents. |
| WebCanvas | 2024 | [paper](https://arxiv.org/abs/2406.12373) | Online web-agent benchmark and framework built around Mind2Web-Live. |
| Agent S | 2024 | [paper](https://arxiv.org/abs/2410.08164), [code](https://github.com/simular-ai/Agent-S) | Open agentic framework for using computers through GUI actions. |
| Windows Agent Arena | 2024 | [paper](https://arxiv.org/abs/2409.08264), [code](https://github.com/microsoft/WindowsAgentArena) | Scalable evaluation environment for Windows OS agents. |
| SPA-Bench | 2024 | [paper](https://arxiv.org/abs/2410.15164) | Comprehensive smartphone-agent evaluation benchmark. |
| AndroidLab | 2024 | [paper](https://arxiv.org/abs/2410.24024) | Android training and benchmarking environment with virtual devices and task suites. |
| VideoWebArena | 2024 | [paper](https://arxiv.org/abs/2410.19100) | Long-context video understanding inside web-agent workflows. |
| MageBench | 2024 | [paper](https://arxiv.org/abs/2412.04531), [code](https://github.com/microsoft/MageBench) | Lightweight visual-agent benchmark covering WebUI, Sokoban, and Football environments. |
| UI-TARS | 2025 | [paper](https://arxiv.org/abs/2501.12326) | Native GUI-agent model trained for perception, grounding, and action. |
| A3 | 2025 | [paper](https://arxiv.org/abs/2501.01149), [project](https://yuxiangchai.github.io/Android-Agent-Arena/) | Android Agent Arena for online mobile GUI-agent evaluation across real apps. |
| Agent S2 | 2025 | [paper](https://arxiv.org/abs/2504.00906), [code](https://github.com/simular-ai/Agent-S) | Generalist-specialist framework for computer-use agents. |
| UI-Evol | 2025 | [paper](https://arxiv.org/abs/2505.21964) | Plug-in knowledge-evolution module that improves OSWorld execution reliability for CUAs. |
| ZeroGUI | 2025 | [paper](https://arxiv.org/abs/2505.23762) | Online GUI-agent learning with task generation and reward estimation. |
| OpenCUA | 2025 | [paper](https://arxiv.org/abs/2508.09123), [code](https://github.com/xlang-ai/OpenCUA) | Open foundation stack for computer-use agents. |
| ScaleCUA | 2025 | [paper](https://arxiv.org/abs/2509.15221), [code](https://github.com/OpenGVLab/ScaleCUA) | Cross-platform data scaling for open-source computer-use agents. |
| WebGym | 2026 | [paper](https://arxiv.org/abs/2601.02439) | Large-scale training environment for realistic visual web agents. |
| C-World | 2026 | [paper](https://arxiv.org/abs/2601.06328) | Environment creator for scalable computer-use-agent training. |
| OS-Symphony | 2026 | [paper](https://arxiv.org/abs/2601.07779), [code](https://github.com/OS-Copilot/OS-Symphony) | Framework for robust and generalist computer-use agents. |
| OmegaUse | 2026 | [paper](https://arxiv.org/abs/2601.20380) | General-purpose GUI agent for autonomous task execution. |
| OS-Marathon | 2026 | [paper](https://arxiv.org/abs/2601.20650) | Benchmark for long-horizon repetitive professional computer-use workflows. |
| Continual GUI Agents | 2026 | [paper](https://arxiv.org/abs/2601.20732) | Continual-learning setup and RL recipe for shifting GUI domains and resolutions. |
| CUA-Skill | 2026 | [paper](https://arxiv.org/abs/2601.21123) | Structured skill base for reusable computer-use procedures and composition graphs. |
| DynaWeb | 2026 | [paper](https://arxiv.org/abs/2601.22149) | Model-based RL framework that trains web agents inside learned web world models. |
| Avenir-Web | 2026 | [paper](https://arxiv.org/abs/2602.02468) | Multimodal web agent with grounding experts, experience imitation, and memory. |
| Agent Alpha | 2026 | [paper](https://arxiv.org/abs/2602.02995) | Uses step-level MCTS to unify GUI-agent generation, exploration, and evaluation. |
| UI-Mem | 2026 | [paper](https://arxiv.org/abs/2602.05832) | Hierarchical experience memory for online RL in mobile GUI agents. |
| MemGUI-Bench | 2026 | [paper](https://arxiv.org/abs/2602.06075) | Evaluates memory across mobile GUI sessions and changing environments. |
| ActionEngine | 2026 | [paper](https://arxiv.org/abs/2602.20502) | State-machine memory for more structured GUI automation. |
| SecAgent | 2026 | [paper](https://arxiv.org/abs/2603.08533) | Efficient 3B mobile GUI agent with semantic context compression and Chinese mobile data. |
| ContractSkill | 2026 | [paper](https://arxiv.org/abs/2603.20340) | Treats web-agent skills as repairable contracts that can be verified and reused. |
| PSPA-Bench | 2026 | [paper](https://arxiv.org/abs/2603.29318) | Personalized smartphone GUI-agent benchmark with process-level evaluation. |
| GPA | 2026 | [paper](https://arxiv.org/abs/2604.01676) | Demonstration-based GUI process automation with local deterministic replay. |
| ClawGUI | 2026 | [paper](https://arxiv.org/abs/2604.11784) | Unified framework for training, evaluating, and deploying GUI agents. |
| RiskWebWorld | 2026 | [paper](https://arxiv.org/abs/2604.13531) | Realistic interactive benchmark for e-commerce risk-management GUI agents. |
| UI-Copilot | 2026 | [paper](https://arxiv.org/abs/2604.13822), [code](https://github.com/ZJU-REAL/UI-Copilot) | Long-horizon GUI automation with tool-integrated policy optimization. |
| DynamicGUIBench | 2026 | [paper](https://arxiv.org/abs/2604.25380) | Stress-tests agents in dynamic, evolving GUI environments. |
| OmniGUI | 2026 | [paper](https://arxiv.org/abs/2605.18758), [project](https://omni-gui.github.io) | Smartphone GUI benchmark with synchronized visual, audio, and video context. |
| UI-Verse | 2026 | [paper](https://arxiv.org/abs/2605.02729) | Interface-design perspective on making CUAs more reliable. |
| How Mobile World Model Guides GUI Agents? | 2026 | [paper](https://arxiv.org/abs/2605.10347) | Analyzes which mobile world-model representations help GUI-agent training and test-time guidance. |
| Executable Agentic Memory | 2026 | [paper](https://arxiv.org/abs/2605.12294) | Converts GUI experience into executable memory graphs for retrieval-and-execution planning. |
| SaaS-Bench | 2026 | [paper](https://arxiv.org/abs/2605.15777), [code](https://github.com/UniPat-AI/SaaS-Bench) | Long-horizon benchmark over real deployable SaaS systems and professional workflows. |
| ShopGym | 2026 | [paper](https://arxiv.org/abs/2605.16116) | Realistic, controllable e-commerce simulation and benchmark for web agents. |
| ScreenSearch | 2026 | [paper](https://arxiv.org/abs/2605.16024) | Ambiguity-aware large-scale desktop OS exploration with deduplicated state graphs. |
| Skim | 2026 | [paper](https://arxiv.org/abs/2605.16565) | Speculative execution framework for faster web-agent workflows on structured sites. |
| SE-GA | 2026 | [paper](https://arxiv.org/abs/2605.16883), [code](https://github.com/jinshilong-dev/SE-GA) | Memory-augmented self-evolving GUI agent for dynamic long-horizon tasks. |
| DocOS | 2026 | [paper](https://arxiv.org/abs/2605.18048) | Proactive document-guided GUI-agent benchmark in open web environments. |
| MementoGUI | 2026 | [paper](https://arxiv.org/abs/2605.18652) | Plug-in multimodal memory controller for long-horizon GUI control. |
| OpenComputer | 2026 | [paper](https://arxiv.org/abs/2605.19769) | Verifiable software worlds with state verifiers, task generation, and auditable rewards. |
| CutVerse | 2026 | [paper](https://arxiv.org/abs/2605.19484) | Benchmark for professional media post-production editing with dense multimodal GUIs. |
| Agent JIT Compilation | 2026 | [paper](https://arxiv.org/abs/2605.21470) | Compiles web-agent plans into lower-latency executable schedules. |
| Weblica | 2026 | [paper](https://arxiv.org/abs/2605.06761) | Reproducible web-replica environments for scaling visual web-agent training. |
| TClone | 2026 | [paper](https://arxiv.org/abs/2605.17320) | Low-latency live GUI environment forking for parallel CUA rollouts and what-if execution. |
| PANDO | 2026 | [paper](https://arxiv.org/abs/2605.24785) | Online skill distillation that reduces token and action overhead for multimodal web agents. |
| SimuWoB | 2026 | [paper](https://arxiv.org/abs/2605.25160) | Synthetic realistic mobile-app benchmark for fast, faithful GUI-agent evaluation. |
| CUA-Gym | 2026 | [paper](https://arxiv.org/abs/2605.25624) | Scalable generation of verifiable environments, tasks, rewards, and models for CUA RLVR. |
| MobileGym | 2026 | [paper](https://arxiv.org/abs/2605.26114) | Parallel mobile GUI-agent simulator with structured state, deterministic judges, and RL rewards. |
| AndroidDaily | 2026 | [paper](https://arxiv.org/abs/2605.27761) | Real-world closed-source Android benchmark with process-aware visual trajectory grading. |
| LearnWeak | 2026 | [paper](https://arxiv.org/abs/2605.28775) | Student-aware data synthesis and specialization for small computer-use agents. |
| PRO-CUA | 2026 | [paper](https://arxiv.org/abs/2605.29119) | Step-level process-reward optimization for computer-use agents on live web tasks. |
| GUITestScape | 2026 | [paper](https://arxiv.org/abs/2605.29532) | Open-set exploratory GUI testing benchmark for MLLM agents. |
| Multi-Agent Computer Use | 2026 | [paper](https://arxiv.org/abs/2606.01533) | Multi-agent CUA architecture with DAG decomposition, parallel execution, and replanning. |
| OpenWebRL | 2026 | [paper](https://arxiv.org/abs/2606.02031) | Online multi-turn RL framework for training open visual web agents on live websites. |

[Back to top](#top)

### Embodied Vision-Language-Action Agents

| Work | Year | Links | Contribution / Relevance |
| --- | --- | --- | --- |
| PerAct | 2022 | [paper](https://arxiv.org/abs/2209.05451), [project](https://peract.github.io/) | Language-conditioned RGB-D manipulation agent that predicts voxel actions directly. |
| VIMA | 2022 | [paper](https://arxiv.org/abs/2210.03094), [project](https://vimalabs.github.io/) | Multimodal-prompt robot manipulation benchmark and transformer agent. |
| RT-1 | 2022 | [paper](https://arxiv.org/abs/2212.06817), [project](https://robotics-transformer1.github.io/) | Large-scale real-robot action model that anchors later RT/VLA work. |
| PaLM-E | 2023 | [paper](https://arxiv.org/abs/2303.03378) | Embodied multimodal language model connecting visual input to robot tasks. |
| RT-2 | 2023 | [paper](https://arxiv.org/abs/2307.15818) | Canonical VLA model transferring web-scale vision-language knowledge to robot control. |
| Open X-Embodiment / RT-X | 2023 | [paper](https://arxiv.org/abs/2310.08864) | Large robot-learning dataset and RT-X model family. |
| Octo | 2024 | [paper](https://arxiv.org/abs/2405.12213) | Open-source generalist robot policy. |
| OpenVLA | 2024 | [paper](https://arxiv.org/abs/2406.09246), [code](https://github.com/openvla/openvla) | Open-source VLA model and a common baseline for robot manipulation. |
| Pi-Zero | 2024 | [paper](https://arxiv.org/abs/2410.24164) | Flow-based VLA model for general robot control. |
| Magma | 2025 | [paper](https://arxiv.org/abs/2502.13130), [code](https://github.com/microsoft/Magma) | Bridges multimodal agents across digital and physical actions. |
| SafeVLA | 2025 | [paper](https://arxiv.org/abs/2503.03480) | Safety alignment for VLA models via constrained learning. |
| Interleave-VLA | 2025 | [paper](https://arxiv.org/abs/2505.02152) | Robot manipulation with interleaved image-text instructions. |
| ChatVLA-2 | 2025 | [paper](https://arxiv.org/abs/2505.21906) | Open-world embodied reasoning from pretrained knowledge. |
| VLA^2 | 2025 | [paper](https://arxiv.org/abs/2510.14902) | Agentic framework for unseen-concept manipulation. |
| World-Value-Action | 2026 | [paper](https://arxiv.org/abs/2604.14732) | Uses implicit planning and future-state value estimation for VLA systems. |
| VLAs-as-Tools | 2026 | [paper](https://arxiv.org/abs/2605.13119) | Splits long-horizon embodied tasks between a high-level VLM planner and specialized VLA tools. |
| SAGE | 2026 | [paper](https://arxiv.org/abs/2602.10116), [code](https://github.com/NVlabs/sage) | Agentically generates simulator-ready 3D scenes for embodied policy training. |
| StableVLA | 2026 | [paper](https://arxiv.org/abs/2605.18287) | Studies robustness of VLA models under unseen visual disturbances without extra data. |
| Dexora | 2026 | [paper](https://arxiv.org/abs/2605.18722) | Open-source VLA direction for high-DoF bimanual dexterous manipulation. |
| VLA-REPLICA | 2026 | [paper](https://arxiv.org/abs/2605.20774) | Low-cost reproducible real-world evaluation benchmark for VLA models. |
| Spatial Memory for Out-of-Vision Manipulation | 2026 | [paper](https://arxiv.org/abs/2605.22283) | Adds persistent spatial memory when manipulation targets leave the current camera view. |
| Pre-VLA | 2026 | [paper](https://arxiv.org/abs/2605.22446) | Preemptive runtime verification for VLA actions and world-model rollouts. |
| ActQuant | 2026 | [paper](https://arxiv.org/abs/2605.24011) | Action-guided mixed-precision quantization for deploying VLA models on constrained hardware. |
| Continuous Reasoning for VLA | 2026 | [paper](https://arxiv.org/abs/2606.00229) | Replaces token-style reasoning with shareable continuous latents aligned to action chunks. |
| VLAMotor | 2026 | [paper](https://arxiv.org/abs/2606.00053) | Test-guided failure discovery and agent-based synthetic data repair for VLA models. |
| FATE-VLA | 2026 | [paper](https://arxiv.org/abs/2606.02307) | Adaptive failure-aware test generation that searches high-risk embodied scenes for VLA failures. |

[Back to top](#top)

### Agentic Visual Reasoning, Generation, and World Building

| Work | Year | Links | Contribution / Relevance |
| --- | --- | --- | --- |
| VISPROG | 2022 | [paper](https://arxiv.org/abs/2211.11559), [project](https://prior.allenai.org/projects/visprog) | Foundational visual-programming approach for tool-composed visual reasoning and editing. |
| Visual ChatGPT | 2023 | [paper](https://arxiv.org/abs/2303.04671), [code](https://github.com/chenfei-wu/TaskMatrix) | Early system connecting ChatGPT with visual foundation models for multi-step visual tasks. |
| ViperGPT | 2023 | [paper](https://arxiv.org/abs/2303.08128), [code](https://github.com/cvlab-columbia/viper) | Uses Python execution to compose vision modules for interpretable visual reasoning. |
| LLaVA-Plus | 2023 | [paper](https://arxiv.org/abs/2311.05437) | Trains multimodal agents to select and use visual tools across understanding and generation. |
| DiffusionAgent | 2024 | [paper](https://arxiv.org/abs/2401.10061) | Routes prompts through expert diffusion models with tree-of-thought navigation and feedback memory. |
| GenArtist | 2024 | [paper](https://arxiv.org/abs/2407.05600), [code](https://github.com/zhenyuw16/GenArtist) | MLLM-as-agent for image generation and editing through planning and tool use. |
| CIGEval | 2025 | [paper](https://arxiv.org/abs/2504.07046) | Agentic evaluation framework for conditional image generation. |
| DeepEyes | 2025 | [paper](https://arxiv.org/abs/2505.14362) | Reinforcement learning for active visual reasoning, grounding, and "thinking with images." |
| ImAgent | 2025 | [paper](https://arxiv.org/abs/2511.11483) | Test-time scalable multimodal agent framework for image generation. |
| GenAgent | 2026 | [paper](https://arxiv.org/abs/2601.18543) | Scales text-to-image generation through agentic multimodal reasoning. |
| Mind-Brush | 2026 | [paper](https://arxiv.org/abs/2602.01756) | Adds cognitive search and reasoning loops to image generation. |
| Agent Banana | 2026 | [paper](https://arxiv.org/abs/2602.09084), [code](https://github.com/taco-group/agent-banana) | High-fidelity image editing with planner-executor tooling. |
| M3 | 2026 | [paper](https://arxiv.org/abs/2602.06166) | Multi-modal, multi-agent, multi-round reasoning for high-fidelity text-to-image generation. |
| VisionCreator | 2026 | [paper](https://arxiv.org/abs/2603.02681) | Native visual-generation agentic model with understanding, planning, and creation. |
| VisionCreator-R1 | 2026 | [paper](https://arxiv.org/abs/2603.08812) | Adds explicit reflection and reflection-plan co-optimization for visual-generation agents. |
| Gen-Searcher | 2026 | [paper](https://arxiv.org/abs/2603.28767), [project](https://gen-searcher.vercel.app/) | Reinforces agentic search for image generation. |
| GEMS | 2026 | [paper](https://arxiv.org/abs/2603.28088), [project](https://gems-gen.github.io/) | Multimodal generation with memory, skills, and iterative agent loops. |
| Visual Generation in the New Era | 2026 | [paper](https://arxiv.org/abs/2604.28185) | Helpful taxonomy for agentic world modeling and generation. |
| Visual Agentic Memory | 2026 | [paper](https://arxiv.org/abs/2605.16481) | Online indexing, hierarchical memory, and agentic retrieval for long video understanding. |
| GenEvolve | 2026 | [paper](https://arxiv.org/abs/2605.21605) | Self-evolving image-generation agent with tool-orchestrated visual experience distillation. |

[Back to top](#top)

### General Visual Agents, Tool Use, and Visualization Agents

| Work | Year | Links | Contribution / Relevance |
| --- | --- | --- | --- |
| AVA | 2023 | [paper](https://arxiv.org/abs/2312.04494) | Autonomous visualization agents with visual perception-driven decision making. |
| Visual Agents as Fast and Slow Thinkers | 2024 | [paper](https://arxiv.org/abs/2408.08862) | System-1/System-2 framing for visual-agent reasoning and action. |
| Visual Agentic AI for Spatial Reasoning | 2025 | [paper](https://arxiv.org/abs/2502.06787) | Dynamic-API visual agent for spatial reasoning in 3D scenes. |
| Visual Agentic Reinforcement Fine-Tuning | 2025 | [paper](https://arxiv.org/abs/2505.14246) | Trains VLMs to use visual tools and code for "thinking with images." |
| ParaView-MCP | 2025 | [paper](https://arxiv.org/abs/2505.07064) | Autonomous visualization agent with direct tool use in ParaView. |
| VisualToolAgent / VisTA | 2025 | [paper](https://arxiv.org/abs/2505.20289) | RL framework for dynamic visual tool selection and composition. |
| Evaluation-Centric Scientific Visualization Agents | 2025 | [paper](https://arxiv.org/abs/2509.15160) | Evaluation-first paradigm for scientific visualization agents. |
| DART | 2025 | [paper](https://arxiv.org/abs/2512.07132) | Uses multi-agent disagreement to recruit specialized visual tools. |
| Orion | 2025 | [paper](https://arxiv.org/abs/2511.14210) | Unified visual agent for multimodal perception, visual reasoning, and tool execution. |
| Kimi K2.5 | 2026 | [paper](https://arxiv.org/abs/2602.02276) | Open-source multimodal agentic model optimized jointly for text and vision. |
| OmniStream | 2026 | [paper](https://arxiv.org/abs/2603.12265) | Streaming visual-agent representation for perception, reconstruction, and action. |
| VTC-Bench | 2026 | [paper](https://arxiv.org/abs/2603.15030) | Evaluates agentic multimodal models through compositional visual tool chaining. |
| SciVisAgentBench | 2026 | [paper](https://arxiv.org/abs/2603.29139) | Reproducible benchmark for scientific data analysis and visualization agents. |
| SASAV | 2026 | [paper](https://arxiv.org/abs/2604.03406) | Self-directed scientific analysis and visualization agent. |
| CANVAS | 2026 | [paper](https://arxiv.org/abs/2604.13452) | Visual agentic storyboarding for continuity-aware long-form visual narratives. |
| Progressive Online Video Understanding | 2026 | [paper](https://arxiv.org/abs/2604.18459) | Online visual agent that answers when enough streaming evidence appears. |
| Beyond Pixels | 2026 | [paper](https://arxiv.org/abs/2604.21134) | Introspective and interactive grounding for visualization agents. |
| AI-Gram | 2026 | [paper](https://arxiv.org/abs/2604.21446) | Live social platform populated by visual agents that create and respond to visual content. |
| DV-World | 2026 | [paper](https://arxiv.org/abs/2604.25914) | Real-world benchmark for data-visualization agents with native environment grounding. |
| Hierarchical Visual Agent / HierVA | 2026 | [paper](https://arxiv.org/abs/2605.04304) | Manages image-text contexts for multi-step chart reasoning across subplots. |
| Emergent Communication between Heterogeneous Visual Agents | 2026 | [paper](https://arxiv.org/abs/2605.11695) | Studies decentralized communication when visual agents have private representations. |
| MMSkills | 2026 | [paper](https://arxiv.org/abs/2605.13527) | Multimodal procedural skill packages for reusable visual-agent decision making. |
| Visual Agentic Memory | 2026 | [paper](https://arxiv.org/abs/2605.16481) | Training-free visual memory for online indexing, retrieval, and evidence verification. |
| MemEye | 2026 | [paper](https://arxiv.org/abs/2605.15128) | Visual-centric evaluation framework for long-term multimodal agent memory. |
| Diversity Over Frequency | 2026 | [paper](https://arxiv.org/abs/2606.00096) | Studies tool-use collapse and rollout diversity in visual Chain-of-Thought agents. |
| VESTA | 2026 | [paper](https://arxiv.org/abs/2606.00384) | Scientific visual exploration agent with dynamically generated statistical tools. |
| CV-Arena | 2026 | [paper](https://arxiv.org/abs/2606.00931) | Instructional computer-vision benchmark with agentic planning, editing, and verification. |
| Visual Skills | 2026 | [paper](https://arxiv.org/abs/2606.01414) | Multimodal reusable skill paradigm preserving visual evidence and spatial interaction traces. |
| TVIR | 2026 | [paper](https://arxiv.org/abs/2606.02320) | Text-visual interleaved deep-research benchmark and hierarchical multimodal report agent. |
| Active Exploring like a Pigeon | 2026 | [paper](https://arxiv.org/abs/2606.02459) | Agentic spatial reasoning with dynamic cognitive maps and verifiable spatial assertion codes. |

[Back to top](#top)

### Safety, Robustness, and Evaluation

| Work | Year | Links | Contribution / Relevance |
| --- | --- | --- | --- |
| AGENTSAFE | 2025 | [paper](https://arxiv.org/abs/2506.14697) | Safety benchmark for embodied agents under hazardous instructions. |
| IS-Bench | 2025 | [paper](https://arxiv.org/abs/2506.16402) | Interactive safety benchmark for VLM-driven household agents. |
| VPI-Bench | 2025 | [paper](https://arxiv.org/abs/2506.02456), [code](https://github.com/boyugou/VPI-Bench) | Visual prompt-injection benchmark for computer-use agents. |
| OpenAgentSafety | 2025 | [paper](https://arxiv.org/abs/2507.06134) | Framework for evaluating real-world agent safety across risk categories. |
| OS-Sentinel | 2025 | [paper](https://arxiv.org/abs/2510.24411) | Hybrid validation for safer mobile GUI agents. |
| UI-CUBE | 2025 | [paper](https://arxiv.org/abs/2511.17131) | Enterprise CUA benchmark that measures operational reliability beyond task accuracy. |
| SafePred | 2026 | [paper](https://arxiv.org/abs/2602.01725) | Predictive guardrail for computer-using agents using world-model rollouts. |
| LPS-Bench | 2026 | [paper](https://arxiv.org/abs/2602.03255) | Safety-awareness benchmark for long-horizon CUA planning under benign and adversarial scenarios. |
| GUIGuard-Bench | 2026 | [paper](https://arxiv.org/abs/2601.18842) | Privacy-preserving GUI-agent evaluation. |
| CUAAudit | 2026 | [paper](https://arxiv.org/abs/2603.10577) | Tests whether VLMs can audit autonomous computer-use agents. |
| GUIDE | 2026 | [paper](https://arxiv.org/abs/2604.04399) | Hierarchical diagnostic evaluation for long GUI-agent trajectories. |
| VeriGUI | 2026 | [paper](https://arxiv.org/abs/2604.05477) | Action-effect verification and self-correction for robust GUI automation. |
| Semantic-level UI Element Injection | 2026 | [paper](https://arxiv.org/abs/2604.07831) | Red-teaming method that distracts GUI agents through benign-looking injected UI elements. |
| CORA | 2026 | [paper](https://arxiv.org/abs/2604.09155) | Conformal risk-controlled safeguard for mobile GUI-agent action execution. |
| OS-BLIND | 2026 | [paper](https://arxiv.org/abs/2604.10577) | Shows how benign-looking user instructions expose CUA vulnerabilities. |
| HazardArena | 2026 | [paper](https://arxiv.org/abs/2604.12447) | Semantic safety evaluation for VLA systems. |
| RedVLA | 2026 | [paper](https://arxiv.org/abs/2604.22591) | Physical red-teaming benchmark for VLA models. |
| GUI-Perturbed | 2026 | [paper](https://arxiv.org/abs/2604.14262) | Domain-randomization study exposing GUI-grounding brittleness. |
| OS-SPEAR | 2026 | [paper](https://arxiv.org/abs/2604.24348) | Toolkit for safety, performance, efficiency, and robustness analysis of OS agents. |
| Don't Click That | 2026 | [paper](https://arxiv.org/abs/2605.09497) | Benchmarks and mitigates deceptive UI elements for VLM-based web agents. |
| SafeManip | 2026 | [paper](https://arxiv.org/abs/2605.12386) | Temporal-safety benchmark for robotic manipulation using LTL-style monitors. |
| WARD | 2026 | [paper](https://arxiv.org/abs/2605.15030) | Robust defense for web agents against prompt injection in HTML and visual interfaces. |
| ProjGuard | 2026 | [paper](https://arxiv.org/abs/2605.13631) | Safety monitoring for computer-use agents via low-dimensional projections. |
| Pre-VLA | 2026 | [paper](https://arxiv.org/abs/2605.22446) | Runtime verification for risky VLA action generation and imagined rollouts. |
| AgentHijack | 2026 | [paper](https://arxiv.org/abs/2605.25707) | Benchmarks CUA robustness to realistic environment corruptions rather than direct adversarial prompts. |
| ROGUE | 2026 | [paper](https://arxiv.org/abs/2606.00341) | Corrigibility benchmark showing unsafe behavior can arise during ordinary computer-use tasks. |
| SafeVLA-Bench | 2026 | [paper](https://arxiv.org/abs/2606.00773) | Post-hoc safety benchmark exposing unsafe-success cases in VLA manipulation rollouts. |
| FATE-VLA | 2026 | [paper](https://arxiv.org/abs/2606.02307) | Failure-seeking VLA test generation for robustness evaluation before deployment. |

[Back to top](#top)

## Benchmarks and Environments

| Area | Resource | Link | Primary Use |
| --- | --- | --- | --- |
| Web | MiniWoB++ | [code](https://github.com/Farama-Foundation/miniwob-plusplus) | Compact browser-interaction environments for controlled RL-style experiments. |
| Web | Mind2Web | [paper](https://arxiv.org/abs/2306.06070) | Offline web-agent action prediction and grounding. |
| Web | WebArena | [paper](https://arxiv.org/abs/2307.13854), [code](https://github.com/web-arena-x/webarena) | Realistic web navigation with execution-based grading. |
| Web | WebArena-Verified | [code](https://github.com/ServiceNow/webarena-verified) | Audited WebArena task set with deterministic offline evaluation. |
| Web | VisualWebArena | [paper](https://arxiv.org/abs/2401.13649), [code](https://github.com/web-arena-x/visualwebarena) | Visually grounded web tasks where screenshots matter. |
| Web | WebLINX | [paper](https://arxiv.org/abs/2402.05930), [project](https://mcgill-nlp.github.io/weblinx) | Conversational web navigation from expert demonstrations. |
| Web | WorkArena | [paper](https://arxiv.org/abs/2403.07718), [code](https://github.com/ServiceNow/WorkArena) | Enterprise workflow automation in ServiceNow-style environments. |
| Web | MMInA | [paper](https://arxiv.org/abs/2404.09992), [code](https://github.com/shulin16/MMInA) | Multihop multimodal tasks over evolving real websites. |
| Web | WebCanvas | [paper](https://arxiv.org/abs/2406.12373) | Online web-agent evaluation with Mind2Web-Live. |
| Web | WebGym | [paper](https://arxiv.org/abs/2601.02439) | Large-scale realistic training environment for visual web agents. |
| Web | DocOS | [paper](https://arxiv.org/abs/2605.18048) | Document-guided GUI-agent tasks in dynamic open-web environments. |
| Web | RiskWebWorld | [paper](https://arxiv.org/abs/2604.13531) | Realistic e-commerce risk-management tasks for GUI agents. |
| Web | SaaS-Bench | [paper](https://arxiv.org/abs/2605.15777), [code](https://github.com/UniPat-AI/SaaS-Bench) | Long-horizon professional workflows across deployable SaaS systems. |
| Web | ShopGym | [paper](https://arxiv.org/abs/2605.16116) | Controllable e-commerce simulation with realistic layouts, catalogs, policies, and tasks. |
| Desktop | OSWorld | [paper](https://arxiv.org/abs/2404.07972), [code](https://github.com/xlang-ai/OSWorld) | Open-ended desktop tasks in real operating systems. |
| Desktop | Windows Agent Arena | [paper](https://arxiv.org/abs/2409.08264), [code](https://github.com/microsoft/WindowsAgentArena) | Windows-specific scaling and reproducible OS-agent evaluation. |
| Desktop | OmniACT | [paper](https://arxiv.org/abs/2402.17553) | Evaluating executable automation rather than only low-level clicks. |
| Desktop | OS-Marathon | [paper](https://arxiv.org/abs/2601.20650) | Long-horizon repetitive professional workflows. |
| Desktop | OpenComputer | [paper](https://arxiv.org/abs/2605.19769) | Verifiable software worlds with state verifiers and auditable partial-credit rewards. |
| Desktop | CutVerse | [paper](https://arxiv.org/abs/2605.19484) | Media post-production editing tasks across professional creative applications. |
| Mobile | Android in the Wild | [paper](https://arxiv.org/abs/2307.10088) | Large-scale Android device-control demonstrations with screen observations. |
| Mobile | B-MoCA | [paper](https://arxiv.org/abs/2404.16660) | Mobile control across diverse device configurations. |
| Mobile | AndroidWorld | [paper](https://arxiv.org/abs/2405.14573), [code](https://github.com/google-research/android_world) | Dynamic Android tasks with broad app coverage. |
| Mobile | AndroidControl | [paper](https://arxiv.org/abs/2406.03679) | Diverse Android control dataset for studying scale and generalization. |
| Mobile | MobileAgentBench | [paper](https://arxiv.org/abs/2406.08184) | Efficient mobile-agent evaluation across open-source apps. |
| Mobile | SPA-Bench | [paper](https://arxiv.org/abs/2410.15164) | Smartphone-agent testing with comprehensive task coverage. |
| Mobile | AndroidLab | [paper](https://arxiv.org/abs/2410.24024) | Training and systematic benchmarking on Android virtual devices. |
| Mobile | A3 | [paper](https://arxiv.org/abs/2501.01149), [project](https://yuxiangchai.github.io/Android-Agent-Arena/) | Real-app online evaluation for mobile GUI agents. |
| Mobile | SecAgent | [paper](https://arxiv.org/abs/2603.08533) | Chinese mobile GUI dataset, benchmark, and compact semantic-context agent. |
| Mobile | PSPA-Bench | [paper](https://arxiv.org/abs/2603.29318) | Personalized smartphone GUI-agent tasks with process-aware evaluation. |
| Mobile | OmniGUI | [paper](https://arxiv.org/abs/2605.18758), [project](https://omni-gui.github.io) | Omni-modal smartphone action prediction with visual, audio, and video cues. |
| Computer use | C-World | [paper](https://arxiv.org/abs/2601.06328) | On-demand environment creation for computer-use-agent training. |
| Grounding | ScreenSpot-Pro | [paper](https://arxiv.org/abs/2504.07981) | High-resolution professional-screen grounding. |
| Grounding | WinDeskGround | [paper](https://arxiv.org/abs/2605.16402) | Multi-window desktop grounding under realistic visual clutter. |
| Grounding | PAGER | [paper](https://arxiv.org/abs/2605.15963) | Point-precise GUI control for geometric construction tasks. |
| Visual-agent reasoning | MageBench | [paper](https://arxiv.org/abs/2412.04531), [code](https://github.com/microsoft/MageBench) | Lightweight environments for vision-in-the-chain agent reasoning. |
| Visual-agent reasoning | VTC-Bench | [paper](https://arxiv.org/abs/2603.15030) | Compositional visual tool chaining for agentic multimodal models. |
| Visualization | SciVisAgentBench | [paper](https://arxiv.org/abs/2603.29139) | Scientific data analysis and visualization-agent evaluation. |
| Visualization | DV-World | [paper](https://arxiv.org/abs/2604.25914) | Real-world data visualization tasks with environment grounding and intent alignment. |
| Memory | MemGUI-Bench | [paper](https://arxiv.org/abs/2602.06075) | Cross-session and cross-temporal mobile GUI memory. |
| Memory | MementoGUI-Bench | [paper](https://arxiv.org/abs/2605.18652) | Long-horizon GUI decision-making with memory consistency diagnostics. |
| Memory | Visual Agentic Memory | [paper](https://arxiv.org/abs/2605.16481) | Online indexing and evidence retrieval for long video understanding. |
| Dynamic GUI | DynamicGUIBench | [paper](https://arxiv.org/abs/2604.25380) | Robustness under evolving interfaces and dynamic UI changes. |
| Exploration | ScreenSearch | [paper](https://arxiv.org/abs/2605.16024) | Large-scale desktop state-graph exploration under partial observability. |
| Enterprise reliability | UI-CUBE | [paper](https://arxiv.org/abs/2511.17131) | Deployment-readiness diagnostics beyond simple task success. |
| Security | VPI-Bench | [paper](https://arxiv.org/abs/2506.02456), [code](https://github.com/boyugou/VPI-Bench) | Visual prompt injection for GUI and computer-use agents. |
| Safety | AGENTSAFE | [paper](https://arxiv.org/abs/2506.14697) | Hazardous-instruction safety for embodied agents. |
| Safety | HazardArena | [paper](https://arxiv.org/abs/2604.12447) | Semantic safety evaluation for VLA systems. |
| Safety | SafeManip | [paper](https://arxiv.org/abs/2605.12386) | Temporal safety properties for robotic manipulation rollouts. |
| Embodied | LIBERO | [code](https://github.com/Lifelong-Robot-Learning/LIBERO) | Lifelong robot manipulation tasks. |
| Embodied | RLBench | [code](https://github.com/stepjam/RLBench) | Simulation-based manipulation benchmark. |
| Embodied | VLA-REPLICA | [paper](https://arxiv.org/abs/2605.20774) | Low-cost reproducible real-world VLA evaluation. |
| Web | Weblica | [paper](https://arxiv.org/abs/2605.06761) | Scalable reproducible web-replica environments for visual web-agent training. |
| Web | CUA-Gym | [paper](https://arxiv.org/abs/2605.25624) | Verifiable RLVR task/environment/reward generation for computer-use agents. |
| Web | OpenWebRL | [paper](https://arxiv.org/abs/2606.02031) | Online multi-turn RL framework for live visual web agents. |
| Mobile | SimuWoB | [paper](https://arxiv.org/abs/2605.25160) | Synthetic high-fidelity mobile apps with automatic rewards. |
| Mobile | MobileGym | [paper](https://arxiv.org/abs/2605.26114) | Highly parallel mobile GUI simulator with deterministic state-based judging. |
| Mobile | AndroidDaily | [paper](https://arxiv.org/abs/2605.27761) | Closed-source real-app Android benchmark with visual process evaluation. |
| Desktop | TClone | [paper](https://arxiv.org/abs/2605.17320) | Low-latency forking of live GUI environments for CUA execution and evaluation. |
| GUI testing | GUITestScape | [paper](https://arxiv.org/abs/2605.29532) | Open-set exploratory GUI testing with interaction and display defects. |
| Visual-agent memory | MemEye | [paper](https://arxiv.org/abs/2605.15128) | Evaluates whether multimodal agent memory preserves visual evidence. |
| Visualization | VESTA / DAWN | [paper](https://arxiv.org/abs/2606.00384) | Statistical modeling benchmark and visual tool-agent framework. |
| Visual editing | CV-Arena | [paper](https://arxiv.org/abs/2606.00931) | Instructional computer-vision task benchmark with human-AI preference evaluation. |
| Embodied safety | SafeVLA-Bench | [paper](https://arxiv.org/abs/2606.00773) | Success-safety gap evaluation for VLA manipulation policies. |

[Back to top](#top)

## Skills, Tools, and Engineering Resources

These resources are intentionally separated from research papers. They are implementation and evaluation artifacts rather than, in every case, standalone research contributions.

### Skill and Prompt Libraries

| Resource | Type | Link | Primary Use |
| --- | --- | --- | --- |
| OpenAI Skills guide | docs | [Docs](https://developers.openai.com/api/docs/guides/tools-skills) | Understanding skill-style packaging for reusable agent capabilities. |
| Agent Skills for Large Language Models | survey | [Paper](https://arxiv.org/abs/2602.12430) | Architecture, acquisition, and security framing for skill-based agents. |
| CUA-Skill | skill base | [Paper](https://arxiv.org/abs/2601.21123) | Reusable computer-use procedures with parameterized execution graphs. |
| MMSkills | multimodal skill framework | [Paper](https://arxiv.org/abs/2605.13527) | Reusable visual procedures with multimodal state, progress, and failure evidence. |
| awesome-agent-skills | collection | [GitHub](https://github.com/VoltAgent/awesome-agent-skills) | Finding reusable agent skills across browsing, coding, documents, and visual tasks. |
| awesome-gpt-image-2 | collection | [GitHub](https://github.com/freestylefly/awesome-gpt-image-2) | Tracking prompt patterns and workflows around modern image generation. |
| gpt_image_2_skill | skill package | [GitHub](https://github.com/wuyoscar/gpt_image_2_skill) | Example of packaging image-generation workflows as reusable skills. |
| ToDiagram skills | skill collection | [GitHub](https://github.com/ToDiagram/skills) | Diagram and visual-communication skills that pair well with visual agents. |

### Models, Parsers, and Grounding Tools

| Resource | Type | Link | Primary Use |
| --- | --- | --- | --- |
| OmniParser | parser | [GitHub](https://github.com/microsoft/OmniParser) | Converting screenshots into candidate interactable regions. |
| ShowUI | GUI model | [GitHub](https://github.com/showlab/ShowUI) | Screenshot-conditioned GUI action modeling and demonstration pipelines. |
| UGround | grounding model | [GitHub](https://github.com/OSU-NLP-Group/UGround) | Pure-vision GUI grounding without accessibility trees. |
| OS-ATLAS | action model | [Paper](https://arxiv.org/abs/2410.23218) | Cross-platform GUI action grounding. |
| GUI-G1 | grounding model | [GitHub](https://github.com/Yuqi-Zhou/GUI-G1) | Studying RL recipes and evaluation pitfalls for GUI grounding. |
| UI-Zoomer | grounding tool | [GitHub](https://github.com/ZJU-REAL/UI-Zoomer) | Adaptive zoom-in when the target UI element is hard to localize. |
| Phi-Ground | grounding model | [Paper](https://arxiv.org/abs/2507.23779) | Compact GUI grounding baseline for resource-constrained settings. |
| SafeGround | grounding calibrator | [Paper](https://arxiv.org/abs/2602.02419) | Estimating grounding risk before executing high-impact GUI actions. |
| AutoFocus | grounding tool | [Paper](https://arxiv.org/abs/2605.02630) | Training-free uncertainty-aware active visual search on high-resolution screens. |
| AQuaUI | token reducer | [Paper](https://arxiv.org/abs/2605.19260) | Adaptive quadtree compression for GUI screenshots at inference time. |
| Orion | visual agent | [Paper](https://arxiv.org/abs/2511.14210) | Tool-augmented visual reasoning and execution across images, videos, and documents. |
| Kimi K2.5 | visual agentic model | [Paper](https://arxiv.org/abs/2602.02276) | Open-source multimodal agentic intelligence model with joint text-vision optimization. |
| VisualToolAgent | tool selector | [Paper](https://arxiv.org/abs/2505.20289) | RL-based selection and composition of visual tools. |
| VTC-Bench | tool-chain benchmark | [Paper](https://arxiv.org/abs/2603.15030) | Evaluating compositional visual tool use in agentic multimodal models. |

### Agent Runtimes and Operator Stacks

| Resource | Type | Link | Primary Use |
| --- | --- | --- | --- |
| UI-TARS Desktop | desktop agent | [GitHub](https://github.com/bytedance/UI-TARS-desktop) | Running multimodal desktop agents locally. |
| Agent S | runtime | [GitHub](https://github.com/simular-ai/Agent-S) | General computer-use experiments with a practical open framework. |
| Cua | operator stack | [GitHub](https://github.com/trycua/cua) | Infrastructure for running and evaluating computer-use agents. |
| OpenAdapt | generative RPA stack | [GitHub](https://github.com/OpenAdaptAI/OpenAdapt) | Recording GUI demonstrations, training models, and evaluating agents from a unified CLI. |
| HIDAgent | HID toolkit | [Paper](https://arxiv.org/abs/2602.00492) | Enabling visual UI agents on HID-compatible devices. |
| GPA | demo replay stack | [Paper](https://arxiv.org/abs/2604.01676) | Local GUI process automation from a single demonstration. |
| browser-use | browser runtime | [GitHub](https://github.com/browser-use/browser-use) | Browser automation workflows when DOM/tool access is acceptable. |
| Stagehand | browser runtime | [GitHub](https://github.com/browserbase/stagehand) | Hybrid code-plus-natural-language browser automation for production workflows. |
| Playwright MCP | browser MCP server | [GitHub](https://github.com/microsoft/playwright-mcp) | Gives agents browser automation tools through the Model Context Protocol. |
| BrowserGym | browser harness | [GitHub](https://github.com/ServiceNow/BrowserGym) | Reproducible browser-agent experiments and benchmark orchestration. |
| AgentLab | experiment framework | [GitHub](https://github.com/ServiceNow/AgentLab) | Running, comparing, and analyzing web-agent experiments. |
| OpenAdapt Desktop | desktop capture/runtime | [GitHub](https://github.com/OpenAdaptAI/openadapt-desktop) | Capturing human demonstrations and replaying desktop workflows. |
| ScreenPipe | local data capture | [GitHub](https://github.com/screenpipe/screenpipe) | Recording local screen/audio context for personal or research agents. |

### Data Capture, Training, and Evaluation Stacks

| Resource | Type | Link | Primary Use |
| --- | --- | --- | --- |
| OSWorld | desktop environment | [GitHub](https://github.com/xlang-ai/OSWorld) | Standard desktop benchmark and environment. |
| AndroidWorld | mobile environment | [GitHub](https://github.com/google-research/android_world) | Dynamic Android environment for mobile agents. |
| AndroidControl | mobile dataset | [Paper](https://arxiv.org/abs/2406.03679) | Large Android control demonstrations for training and data-scaling studies. |
| Windows Agent Arena | desktop environment | [GitHub](https://github.com/microsoft/WindowsAgentArena) | Windows-specific OS-agent evaluation. |
| WebArena | web benchmark | [GitHub](https://github.com/web-arena-x/webarena) | Realistic web tasks with execution-based grading. |
| WebArena-Verified | web benchmark | [GitHub](https://github.com/ServiceNow/webarena-verified) | Audited and deterministic WebArena evaluation. |
| VisualWebArena | visual web benchmark | [GitHub](https://github.com/web-arena-x/visualwebarena) | Web tasks where screenshots and visual grounding matter. |
| WorkArena | enterprise benchmark | [GitHub](https://github.com/ServiceNow/WorkArena) | Enterprise-style workflow automation. |
| OpenCUA | open CUA stack | [GitHub](https://github.com/xlang-ai/OpenCUA) | Data, models, and evaluation foundations for computer-use agents. |
| ScaleCUA | scaling stack | [GitHub](https://github.com/OpenGVLab/ScaleCUA) | Cross-platform CUA data scaling and evaluation. |
| WebGym | visual web environment | [Paper](https://arxiv.org/abs/2601.02439) | Large-scale realistic training tasks for visual web agents. |
| C-World | environment creator | [Paper](https://arxiv.org/abs/2601.06328) | Creating diverse computer-use environments on demand. |
| OpenComputer | verifiable worlds | [Paper](https://arxiv.org/abs/2605.19769) | State verifiers, synthetic desktop tasks, and auditable rewards. |
| ShopGym | e-commerce simulator | [Paper](https://arxiv.org/abs/2605.16116) | Realistic and controllable e-commerce web-agent evaluation. |
| SciVisAgentBench | visualization benchmark | [Paper](https://arxiv.org/abs/2603.29139) | Evaluating scientific visualization agents on executable analysis tasks. |
| DV-World | data-visualization benchmark | [Paper](https://arxiv.org/abs/2604.25914) | Real-world visualization-agent scenarios with evolving environments. |
| Visual Agentic Memory | video memory framework | [Paper](https://arxiv.org/abs/2605.16481) | Training-free long-video indexing, hierarchical memory, and retrieval. |
| CUA-Suite | data suite | [Paper](https://arxiv.org/abs/2603.24440) | Large human-annotated video demonstrations for CUA research. |
| ShowUI-Aloha | data pipeline | [Paper](https://arxiv.org/abs/2601.07181), [code](https://github.com/showlab/ShowUI) | Turning screen recordings into GUI-agent training trajectories. |
| Video2GUI | data pipeline | [Paper](https://arxiv.org/abs/2605.14747) | Synthesizing GUI trajectories from instructional videos. |
| ScreenSearch | exploration corpus | [Paper](https://arxiv.org/abs/2605.16024) | Building desktop GUI state graphs through ambiguity-aware exploration. |
| CutVerse | creative-workflow benchmark | [Paper](https://arxiv.org/abs/2605.19484) | Professional media post-production GUI trajectories and evaluation. |
| lmms-eval | eval toolkit | [GitHub](https://github.com/EvolvingLMMs-Lab/lmms-eval) | Static multimodal evaluation that can complement closed-loop agent tests. |

### Embodied and Robotics Tooling

| Resource | Type | Link | Primary Use |
| --- | --- | --- | --- |
| OpenVLA | VLA model | [GitHub](https://github.com/openvla/openvla) | Common open baseline for VLA robot manipulation. |
| LeRobot | robotics toolkit | [GitHub](https://github.com/huggingface/lerobot) | Robot-learning datasets, policies, training, and deployment tooling. |
| LIBERO | robotics benchmark | [GitHub](https://github.com/Lifelong-Robot-Learning/LIBERO) | Lifelong robot manipulation tasks. |
| RLBench | robotics benchmark | [GitHub](https://github.com/stepjam/RLBench) | Simulation-based manipulation evaluation. |
| SAGE | 3D scene engine | [GitHub](https://github.com/NVlabs/sage) | Agentic 3D scene generation for embodied policy training. |
| Magma | foundation model | [GitHub](https://github.com/microsoft/Magma) | Bridging digital computer use and physical action. |
| VLA-REPLICA | robot benchmark | [Paper](https://arxiv.org/abs/2605.20774) | Low-cost reproducible real-world VLA evaluation. |
| SafeManip | safety benchmark | [Paper](https://arxiv.org/abs/2605.12386) | Temporal-safety monitors for robotic manipulation rollouts. |

[Back to top](#top)

## Workflow Stacks

| Workflow | Practical stack |
| --- | --- |
| GUI grounding research | ScreenSpot-Pro + OmniParser + UGround + GUI-G1 + SafeGround + UI-Zoomer + AutoFocus + PAGER + AQuaUI |
| Browser-agent experiments | BrowserGym + AgentLab + WebArena + WebArena-Verified + VisualWebArena + WebLINX + MMInA + WebGym + ShopGym + SaaS-Bench |
| Desktop computer-use agents | UI-TARS Desktop + Agent S + Cua + OSWorld + Windows Agent Arena + OS-Marathon + OpenComputer + ScreenSearch + CutVerse |
| Mobile GUI agents | Android in the Wild + AndroidControl + AndroidWorld + A3 + MobileAgentBench + SPA-Bench + MemGUI-Bench + PSPA-Bench + OmniGUI + UI-Mem |
| Demonstration and data pipelines | OpenAdapt + OpenAdapt Desktop + ScreenPipe + ShowUI-Aloha + CUA-Suite + Video2GUI + C-World + OpenComputer |
| Agentic visual creation | gpt_image_2_skill + DiffusionAgent + GenArtist + DeepEyes + Agent Banana + VisionCreator + VisionCreator-R1 + GEMS + GenEvolve |
| General visual agents and tool use | Visual Agentic RFT + VisualToolAgent + Orion + Kimi K2.5 + VTC-Bench + MMSkills + Visual Agentic Memory |
| Visualization and chart agents | AVA + ParaView-MCP + SciVisAgentBench + SASAV + Beyond Pixels + DV-World + HierVA |
| Embodied VLA research | OpenVLA + LeRobot + LIBERO + RLBench + SAGE + Magma + VLAs-as-Tools + VLA-REPLICA + SafeManip + Pre-VLA |
| Reliability and security testing | VPI-Bench + OpenAgentSafety + UI-CUBE + GUIDE + CORA + OS-BLIND + HazardArena + OS-SPEAR + WARD + Pre-VLA |

[Back to top](#top)

## Official Docs and Engineering Notes

| Resource | Link | Why read it |
| --- | --- | --- |
| OpenAI Computer Use guide | [Docs](https://developers.openai.com/api/docs/guides/tools-computer-use) | Developer-facing guide for building with computer-use tooling. |
| OpenAI Computer-Using Agent | [Article](https://openai.com/index/computer-using-agent/) | Product and research framing for modern CUAs. |
| OpenAI Skills guide | [Docs](https://developers.openai.com/api/docs/guides/tools-skills) | Practical reference for reusable agent skills. |
| OpenAI MCP and Connectors guide | [Docs](https://developers.openai.com/api/docs/guides/tools-connectors-mcp) | Reference for connecting external tools and services to agents. |
| Anthropic: Developing a computer use model | [Article](https://www.anthropic.com/news/developing-computer-use) | Strong public engineering writeup on GUI-agent training and evaluation. |
| Anthropic: Introducing computer use | [Article](https://www.anthropic.com/news/3-5-models-and-computer-use) | System framing and deployment context for computer-use models. |
| Google DeepMind: Gemini Robotics | [Article](https://deepmind.google/discover/blog/gemini-robotics-brings-ai-into-the-physical-world/) | Industry view on embodied visual agents. |
| Google DeepMind: Gemini Robotics On-Device | [Article](https://deepmind.google/discover/blog/gemini-robotics-on-device-brings-ai-to-local-robotic-devices/) | Notes on low-latency, local VLA deployment. |

[Back to top](#top)

## Related Lists

| Repository | Link | Notes |
| --- | --- | --- |
| Awesome-GUI-Agents | [GitHub](https://github.com/ZJU-REAL/Awesome-GUI-Agents) | Focused companion index for GUI grounding and automation papers. |
| GUI-Agents-Paper-List | [GitHub](https://github.com/OSU-NLP-Group/GUI-Agents-Paper-List) | Systematic paper index focused on GUI agents. |
| awesome-ui-agents | [GitHub](https://github.com/opendilab/awesome-ui-agents) | Neighboring index for UI-agent papers and projects. |
| Evolving Visual Generation | [GitHub](https://github.com/EvolvingLMMs-Lab/Evolving-Visual-Generation) | Adjacent map for visual-generation systems. |
| Awesome Multimodal Modeling | [GitHub](https://github.com/OpenEnvision/Awesome-Multimodal-Modeling) | Broader multimodal modeling list beyond the stricter agent boundary here. |

[Back to top](#top)

## Contributing

Pull requests are welcome when they improve precision rather than volume.

Recommended metadata:

- The paper title or project name.
- Official paper, code, project page, or documentation link.
- The best category for the item.
- One sentence explaining the visual-agent loop, benchmark role, or builder value.

Out of scope:

- Generic multimodal model releases with no visual-agent evaluation.
- One-shot generation papers without planning, tools, search, critique, or interaction.
- Duplicate benchmark rows unless the new row adds a distinct environment or protocol.
- Unverified arXiv IDs, placeholder links, and marketing-only announcements.

[Back to top](#top)

## Maintenance Policy

This repository is maintained as a precision-oriented research map:

- Prefer primary sources: official papers, project pages, code repositories, datasets, benchmarks, and technical documentation.
- Keep research entries, benchmarks, and engineering resources separated when their roles differ.
- Add recent work only when it improves the conceptual coverage, empirical coverage, or builder utility of the map.
- Verify arXiv identifiers, project links, and benchmark names before adding new entries.
- Prune duplicate, weakly scoped, or marketing-only entries even when they are recent.
- Preserve a strict visual-agent boundary: perception alone is not sufficient without grounding, planning, tool use, interaction, control, or agent-oriented evaluation.

[Back to top](#top)

## Citation

If you use this curated index in research or engineering work, please cite it as:

```bibtex
@misc{awesome-visual-agent,
  title        = {Awesome Visual Agent},
  author       = {OpenEnvision and contributors},
  year         = {2026},
  howpublished = {\url{https://github.com/OpenEnvision/Awesome-Visual-Agent}},
  note         = {Curated list of visual-agent papers, benchmarks, and tooling}
}
```

[Back to top](#top)
