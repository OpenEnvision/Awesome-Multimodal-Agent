# Robot-use integration notes

Reviewed on **2026-09-15**. This note records how robot-use coverage fits the existing multimodal-agent taxonomy.

## Source and scope

Candidate discovery used [Awesome Robot Use Agent](https://github.com/kairunwen/Awesome-Robot-Use-Agent), maintained by Kairun Wen. The reviewed [README snapshot](https://github.com/kairunwen/Awesome-Robot-Use-Agent/blob/8f3909efa334d95ef0a0c3ac20781d7977f1b411/README.md) is recorded for reproducibility; the upstream list will continue to change.

The integration adds **57 research, perspective, and evaluation entries**, **28 infrastructure/guide entries**, **3 evaluation tools**, **2 procedural skill packages**, and **4 related directories**. Section 3.6 gains **8 systems**, for **27 system entries** in total. These are catalogue-entry counts, not counts of independent experiments, released models, or reproducible robot deployments. Existing entries receive additional code and resource links where appropriate.

Paper dates and abstracts were checked against arXiv; project pages, repositories, and the two actual `SKILL.md` files were inspected for implementation scope. Descriptions were rewritten around the local taxonomy. Source-list labels and headline scores were not imported as evidence by themselves.

## Placement decisions

The organizing rule remains **one primary evaluated artifact, one canonical entry**. Robot-use describes an action domain; sensing modalities, collaboration, action interfaces, and learning timescales remain independent descriptors.

| Contribution | Placement | Integrated examples |
| --- | --- | --- |
| Surveys and technical perspectives | [2.2](../README.md#22-embodied-agents-and-world-model-based-planning) | PAPAV survey; robot autonomy/integration surveys; Robot-Use Agents; GRID; Waddle; Data Pyramid |
| Physical task runtimes with feedback | [3.6](../README.md#36-physical-robotics-and-multi-robot-systems) | Show-Harness; ETA/OpenETA; Thea; Pigey; VAP-TAMP; RoboClaw; Hi Robot; DoReMi |
| History-conditioned policy | [4.2](../README.md#42-vision-language-action-and-generalist-policies) | RoboTTT |
| Memory and failure-monitoring components | [4.3](../README.md#43-spatial-memory-and-tool-use-models-and-components) | Mimir; Code-as-Monitor; AHA; REFLECT |
| Tool interfaces, orchestration, and program synthesis | [5.1](../README.md#51-tool-use-workflow-and-program-synthesis) | Harness VLA/RPent; GaP; Guava; Hi-VLA design study; ETP; ReKep; SayPlan; ProgPrompt; Claude plays robotics |
| Skill and policy improvement | [5.2](../README.md#52-agentic-learning-and-self-improvement) | Zetta; SHAPER; AgenticRobotics; ASPIRE; ENPIRE; RATs; EmbodiSkill; LWD; Self-Improving Embodied Foundation Models |
| Action/world-model improvement and planning | [5.3](../README.md#53-world-models-and-model-based-planning) | SERP; VLAW |
| Coordination and human clarification | [5.4](../README.md#54-multi-agent-and-conversational-coordination) | EMOS; KnowNo |
| Robotics tasks, datasets, and environments | [6.6](../README.md#66-physical-robotics-and-multi-robot-systems) | StationeryBench; Drone-Bench; RoboDojo; SIMPLE; RoboWits; ESI-Bench; CaP-X; RoboCerebra; VLABench; EAI; RoboCasa; RoboScript; LoTa-Bench; RoboEval; ALFWorld |
| Robot runtimes and interfaces | [7.3](../README.md#73-embodied-ai-and-robotics-infrastructure) | AgenticROS; DimOS; EmbodiedAgents; RAI; Strands Robots; ROSA; ROS MCP Server; Reachy Mini tutorial |
| Perception, planning, and execution backends | [7.3](../README.md#73-embodied-ai-and-robotics-infrastructure) | Grounded SAM 2; SAM 3; FoundationPose; BundleSDF; Contact-GraspNet; AnyGrasp; MoveIt 2; Nav2; cuRobo; PyRoki; MPlib; Mink; Pink; ros2_control; BehaviorTree.CPP |
| Simulation and data construction | [7.3](../README.md#73-embodied-ai-and-robotics-infrastructure) | OmniSim; mjbatch; EmbodiedGen V2; SimFoundry; Video to Data |
| Evaluation infrastructure | [7.4](../README.md#74-evaluation-tooling) | Inspect Robots; Ai2 VLA Evaluation Harness; GPT 6 Astra as an Embodied Policy |
| Inspectable procedural packages | [8.2](../README.md#82-curated-skill-collections) | ros-skill; Real2Gym / real2sim-prompt |
| Discovery and community demonstrations | [9](../README.md#9-related-lists) | Upstream robot-use catalogue and demos; PAPAV collection; Data Pyramid collection; datasets.bot |

### Why some agent-named papers are outside Section 3.6

- **ReKep, SayPlan, ProgPrompt, and Harness VLA** contribute reusable representations, planning, or orchestration methods. Their robot experiments are retained in the descriptions; those experiments do not require a second system entry.
- **ASPIRE, ENPIRE, RATs, SHAPER, Zetta, EmbodiSkill, and LWD** center on acquiring or improving skills/policies. Learning during a rollout, learning between episodes, and retraining before redeployment are described separately.
- **Mimir, AHA, Code-as-Monitor, and REFLECT** contribute reusable memory or monitoring modules; downstream correction does not change their primary artifact type.
- **EMOS** contributes embodiment-aware coordination evaluated in Habitat-MAS simulation. Its evidence does not establish physical multi-robot deployment. It is also unrelated to Automatika's independently named EMOS/EmbodiedAgents ecosystem.
- **CaP-X, RoboCerebra, and RoboEval** package agents with evaluation resources. Their primary benchmark entries retain those baselines and implementations.
- **GRID and Waddle** are labeled developer research blogs; **Claude plays robotics** is an interface-comparison report. This preserves the technical material without implying peer review or independent reproduction.

### Existing and bundled material

Existing entries are retained for the Agentic MLLM survey, RoboHarness, PhyAgentOS, VoxPoser, RoCo, RoboCat, Code as Policies, Inner Monologue, SayCan, EmbodiedBench, PARTNR, TEACh, ALFRED, LIBERO, BEHAVIOR-1K, OpenVLA, the pi policies, LeRobot, and ConceptGraphs. The current Gemini Robotics ER 2 overview is linked from the existing model-family entry.

| Bundled resource | Where it is retained |
| --- | --- |
| Show-Harness Data and VLMs | Show-Harness, Section 3.6 |
| Guava-Agent-4B and paper-described tool/recovery trajectories | Guava, Section 5.1; data availability is not inferred from its description |
| RPent implementation | Harness VLA, Section 5.1 |
| EmbodiedToolBench | ETP, Section 5.1 |
| AutoEnvBench | ENPIRE, Section 5.2 |
| Habitat-MAS | EMOS, Section 5.4 |
| AHA/FailGen and RoboFail | AHA and REFLECT, Section 4.3 |
| CaP-Gym, CaP-Bench, CaP-Agent0, and CaP-RL | CaP-X, Section 6.6 |
| RoboCerebra demonstrations and evaluation | One combined entry in Section 6.6 |
| RoCoBench | Existing RoCo entry, Section 3.6 |
| OmniGibson | Existing BEHAVIOR-1K environment entry, Section 6.6 |

### Demonstrations and deferred examples

The upstream [social-demo catalogue](https://kairunwen.github.io/Awesome-Robot-Use-Agent/#social-demos) remains available from Section 9. Individual clips are discovery material. Their playback speed, model attribution, selected outcomes, or announcements of future code do not independently establish a tested agent loop or repeatable success rate.

[DexGPT](https://github.com/Hu-xiao-max/dexgpt) and [Real2Sim_GPT6_ASTRA](https://github.com/hku-sail/Real2Sim_GPT6_ASTRA) remain discoverable here as experimental reconstruction examples. DexGPT reports unmet physical-validation criteria; Real2Sim is a visual reconstruction/replay with estimated geometry and unbundled input images. Neither is promoted to a general robot-use system or simulator-validation result. Demo-associated previews such as GPT-Policy-Eval remain in the upstream discovery catalogue pending sufficient released evidence.

### Metadata and evidence limits

- Research dates use the first paper release rather than the digits of its arXiv identifier: ASPIRE is dated June 2026 despite its July identifier.
- The PAPAV survey is a **Preprint** linked through its published manuscript, not an invented arXiv identifier.
- CaP-X and VAP-TAMP retain **Preprint** status in this integration because a primary acceptance record was not established during the audit. Their upstream venue labels should be updated only with primary evidence.
- Do not equate stage progress with task completion, software-test correctness with physical execution, or simulated control frequency with model inference frequency. These distinctions are recorded next to the affected resources.
- Hardware-specific adapters, pretrained weights, sensor calibration, scene resets, and success verification remain part of the reproduction setup; a code link alone is not evidence of a complete working deployment.

- The LWD project hostname did not resolve during validation, so the entry retains its verified arXiv paper link without the unavailable project badge.

## Validation

- All 50 entries in the upstream paper catalogue map to a canonical README entry. All 43 project/tool rows are accounted for through integration, an existing entry, or an explicit deferral above.
- All 254 original bold-list entries remain; no canonical arXiv identifier is duplicated. The changed research subsections retain reverse chronological month ordering, and unrelated subsections are unchanged.
- All 197 newly introduced primary resource URLs in the README returned successful HTTP responses during the audit. This includes 52 arXiv links. The unavailable LWD project URL was removed before the final count.
- Local file links and heading anchors were checked across all three edited/added Markdown files. A GitHub-flavored Markdown parser found no inconsistent table column counts.
- `awesome-lint README.md` reported only `awesome-github`: the downloaded workspace has no `.git` directory. No Git history or remote was created to change the supplied workspace's identity.
- External-link validation was scoped to the new primary URLs rather than rerunning the guide's repository-wide `markdown-link-check` commands. Existing external URLs and generated badge endpoints were not re-audited.

## Attribution and upstream license

This integration adapts the source collection's resource selection and credits **Kairun Wen**. Primary papers, projects, datasets, and tools retain their own licenses. The source collection's MIT notice is reproduced below.

```text
MIT License

Copyright (c) 2026 Kairun Wen

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
