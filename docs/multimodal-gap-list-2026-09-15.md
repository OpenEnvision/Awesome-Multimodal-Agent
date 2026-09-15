# Multimodal Agent 目录补充清单与收录记录

**检索截止：2026-09-15（Asia/Singapore）。补充已落实到 [README](../README.md)。** 本轮接续 robot-use 整合，重点补齐3.6以外的章节；以下保留最初缺口分析，并记录最终收录位置与证据边界。

最初筛出 **46 项独立研究候选**（31 项P0、15 项P1，其中23项首次公开在8月15日及以后）、**6组系列更新**、**9项资源**。本轮已收录全部46项，并补入5条独立后续研究、更新既有GR00T条目的N1.7版本说明；全文复核后另收录Thinking on Shots、StreamSoccer、RefineCut，共新增 **54条研究记录**。原有306条研究全部保留，现有360条。网站抽取时已纠正旧统计：311/365误计入了文末5条贡献说明。

9项资源已进入第7—9节；其中Browser Use、Cua、Playwright CLI还分别链接了实际`SKILL.md`，因此共新增12个资源表格行。下文P0/P1保留为最初审核优先级，不表示仍待处理。

## 核查口径

- 通过相关领域目录发现线索，回到 arXiv 当前摘要、提交历史、官方项目或源码核对；以论文标识去重，并检查重要的同系列/同仓库关系。
- 日期采用官方首次提交或公开发布，而非转载、搜索抓取或最近修订时间。新版本另作说明。候选归类是根据主要贡献作出的编辑判断。
- P0＝最初认定的重要结构缺口；P1＝扩展覆盖。两批均已完成，优先级不表示论文质量排名。
- 归类依据当前论文的主要评测贡献；系统条目复核了方法和反馈路径，代码/数据入口核对作者来源与可访问性。未核实正式发表的条目保留Preprint或Technical report，未运行论文实验。本次检索不是对整个领域的穷尽证明。

## 一、46项独立研究补充（均已收录）

### 2.1 通用与专题综述

| 原优先级 | 已收录研究与首次日期 | 补什么 | 归类或证据边界 |
| --- | --- | --- | --- |
| P0 | [Agentic Visual Generation](https://arxiv.org/abs/2609.06758) · 2026-09-06 | 补创作分支的综述入口，解释控制生成条件、执行、反馈和经验的差别。 | 已在2.1补入综述，并保留第9节目录入口；系统仍采用本库更严格的准入标准。 |
| P0 | [Efficient GUI Agents](https://arxiv.org/abs/2609.02309) · 2026-09-02 | 补观察、记忆、动作和运行时效率的系统综述；把成本与延迟纳入目录。 | 与已有 GUI 软件工程综述角度不同。 |

### 2.3 协作与主动交互综述

| 原优先级 | 已收录研究与首次日期 | 补什么 | 归类或证据边界 |
| --- | --- | --- | --- |
| P1 | [Proactive Service Agents](https://arxiv.org/abs/2609.03727) · 2026-09-03 | 补何时等待、询问、提供帮助和采取行动的主动服务框架。 | 属视角/综述；包含流式视频、屏幕与人机协作，但也覆盖纯文本工作。 |

### 3.2 创作工作流系统

| 原优先级 | 已收录研究与首次日期 | 补什么 | 归类或证据边界 |
| --- | --- | --- | --- |
| P0 | [PROS / PROS-Bench](https://arxiv.org/abs/2609.01813) · 2026-09-01 | 补主动发现科学海报问题、按用户接受的问题修复、再验证结果的交互编辑。 | 主贡献为系统；PROS-Bench 作为附属评测资源并从6.2交叉引用。 |
| P0 | [Procedura](https://arxiv.org/abs/2608.26238) · 2026-08-26 | 补可参数化、可编辑的程序化3D建模；编译、连接检查与视觉批评共同驱动修复。 | 主要动作是创建3D资产，归3.2，不因出现3D就归3.5虚拟环境操作。 |
| P0 | [ACE](https://arxiv.org/abs/2608.24103) · 2026-08-25 | 补多页画布编辑：场景图、专用编辑工具及评价反馈驱动的下一轮修正。 | 研究系统；将 CARE 路由和评价器挂在同一条目，不另造重复条目。 |

### 3.3 会话与社会交互系统

| 原优先级 | 已收录研究与首次日期 | 补什么 | 归类或证据边界 |
| --- | --- | --- | --- |
| P1 | [ChatMuse](https://arxiv.org/abs/2607.18556) · 2026-07-20 | 补混合现实中的多人面对面交流支持，结合语言与非语言线索并利用用户后续行为。 | 与单人语音助手不同；其用户研究是系统证据。 |

### 3.4 数字与软件环境系统

| 原优先级 | 已收录研究与首次日期 | 补什么 | 归类或证据边界 |
| --- | --- | --- | --- |
| P0 | [Agent S2](https://arxiv.org/abs/2504.00906) · 2025-04-01 | 补通用模型与专用定位模型协作、随屏幕变化调整层级计划的代表性电脑操作系统。 | 代码链接可指向当前 Agent-S；Agent S3 的独立扩展论文见5.2。 |

### 4.1 全模态与实时交互模型

| 原优先级 | 已收录研究与首次日期 | 补什么 | 归类或证据边界 |
| --- | --- | --- | --- |
| P0 | [Gander](https://arxiv.org/abs/2609.08977) · 2026-09-08 | 补基于 MiniCPM-o 4.5 的原生双工交互、异步工具协作及可打断响应。 | 采用9月12日v3标题 Multimodal Duplex Interaction Agent；当前证据主要是工具辅助任务，不能写成已充分验证任意长程任务。 |
| P0 | [MOSS-VL](https://arxiv.org/abs/2608.15045) · 2026-08-15 | 补生成响应时继续接收视频、主动发言与保持沉默的开源实时模型。 | 模型条目；实时视频能力本身不能替代端到端任务闭环证据。 |

### 4.2 动作模型与通用策略

| 原优先级 | 已收录研究与首次日期 | 补什么 | 归类或证据边界 |
| --- | --- | --- | --- |
| P0 | [BlueLM-GUI](https://arxiv.org/abs/2609.12394) · 2026-09-11 | 补真实手机上的持续预训练、监督学习、在线强化学习与失败轨迹再利用。 | 9月11日首次提交、9月14日v2；主体为原生GUI模型和训练体系。 |
| P0 | [Qwen-UI-Agent](https://arxiv.org/abs/2607.28227) · 2026-07-30 | 补手机、电脑、网页与检索的统一GUI/CLI动作空间和真实设备训练。 | 与已有 Qwen-CUA（2608.02352）是不同论文和接口设定，应分别收录并说明联系。 |
| P0 | [UI-TARS-2](https://arxiv.org/abs/2509.02544) · 2025-09-02 | 补原生GUI模型、多轮强化学习、GUI与终端混合环境的关键系列。 | 与框架型 Agent S2 区分；首次公开时间是2025年，不能按近期转载标2026年。 |
| P0 | [OpenCUA](https://arxiv.org/abs/2508.09123) · 2025-08-12 | 补开放电脑操作模型、示范采集与训练数据体系这一重要基础工作。 | AgentNet 数据和采集工具挂在同一研究条目；不把论文实现再重复列为独立工程项目。 |

### 4.3 记忆、定位与工具组件

| 原优先级 | 已收录研究与首次日期 | 补什么 | 归类或证据边界 |
| --- | --- | --- | --- |
| P0 | [OmniParser](https://arxiv.org/abs/2408.00203) · 2024-08-01 | 补截图中的可交互元素检测、语义描述和动作定位这一基础组件。 | 论文首次提交2024年；工程链接补当前V2及官方2026年7月检测器更新，不能把解析器写成独立完整agent。 |
| P1 | [MEMO](https://arxiv.org/abs/2609.07471) · 2026-09-07 | 补预算受限时对记忆证据进行选择、布局，并分配文字/图像读出载体的组件。 | 这里的视觉载体包含渲染后的文字；不据此声称所有原始任务都具有独立多模态信息。 |
| P1 | [Parametric Multimodal User Memory](https://arxiv.org/abs/2608.28609) · 2026-07-08 | 补字幕无法保留的身份和感知记忆，并把身份记忆与精确事实记忆分开。 | 日期按官方提交历史2026-07-08；不按arXiv编号或9月转载日期推断。PerceptMem 附在同条目。 |
| P1 | [MMA: Multimodal Memory Agent](https://arxiv.org/abs/2602.16493) · 2026-02-18 | 补记忆可信度、时效衰减、跨模态冲突和证据不足时的弃答。 | 组件与合成 MMA-Bench 一起收录；不同于单纯扩大上下文或做相似度检索。 |

### 5.1 工具使用与工作流方法

| 原优先级 | 已收录研究与首次日期 | 补什么 | 归类或证据边界 |
| --- | --- | --- | --- |
| P0 | [GenRouter](https://arxiv.org/abs/2608.16721) · 2026-08-17 | 补按任务需求、历史经验和成本选择图像生成工作流。 | 主要贡献是路由和编排方法；不是所有任务都需要同一套工具链。 |
| P0 | [Do Multimodal Agents Really Benefit from Tool Use?](https://arxiv.org/abs/2606.02357) · 2026-06-01 | 补工具消融、同源无工具对照，检查工具是否真正增加可解任务。 | 首次6月1日，8月27日v2；结论限于所测模型和任务，不能外推成所有工具无效。 |
| P1 | [Silent Failures in Multimodal Agentic Search](https://arxiv.org/abs/2607.19793) · 2026-07-22 | 补答案正确但证据链错误、视觉捷径、来源幻觉等轨迹诊断。 | 方法/分析工作；从6.1的MMSearch-Plus条目交叉引用。 |

### 5.2 学习、自我改进与测试时扩展

| 原优先级 | 已收录研究与首次日期 | 补什么 | 归类或证据边界 |
| --- | --- | --- | --- |
| P0 | [From Interaction Traces to Persistent Skills](https://arxiv.org/abs/2609.04869) · 2026-09-04 | 补把运行轨迹和评价反馈沉淀为可版本化、跨任务复用的程序知识。 | 强调后续迭代才使用更新后的技能库；与同配置空技能库比较。 |
| P0 | [AutoDesign](https://arxiv.org/abs/2608.13560) · 2026-08-13 | 补利用生成结果和评价反馈迭代改进创作工具及编排代码。 | 训练/优化方法为主；PosterBench 附在同一条目并从6.2索引。 |
| P1 | [Vision-DeepResearch](https://arxiv.org/abs/2601.22060) · 2026-01-29 | 补多轮、多实体、多尺度视觉与文本检索的监督学习和强化学习路线。 | 与已收录 Video-DeepResearch（2608.03979）不是同一论文；主放方法节，3.1提供入口。 |
| P1 | [Scaling Agents for Computer Use / Agent S3](https://arxiv.org/abs/2510.02250) · 2025-10-02 | 补用行为叙述评价并选择多条执行轨迹的测试时扩展方法。 | 与 Agent S2 分属不同论文；报告成绩须写清单次运行与多次候选选择，不能直接横比。 |

### 5.3 世界模型与规划

| 原优先级 | 已收录研究与首次日期 | 补什么 | 归类或证据边界 |
| --- | --- | --- | --- |
| P0 | [WM-R1](https://arxiv.org/abs/2608.27508) · 2026-08-27 | 补GUI世界模型用于训练状态转移，以及行动前后果推演。 | 将训练中的模拟环境与推理时的候选行动预测分开描述。 |
| P1 | [Genie 3](https://deepmind.google/blog/genie-3-a-new-frontier-for-world-models/) · 2025-08-05 | 补可根据行动生成后续画面的交互世界模型，连接虚拟环境、生成模拟器与agent训练研究。 | 2025-08-05官方研究发布；它是世界模型，不是端到端agent，也不能写成开源可复现环境。 |

### 5.4 多agent协调

| 原优先级 | 已收录研究与首次日期 | 补什么 | 归类或证据边界 |
| --- | --- | --- | --- |
| P0 | [Spine-Branch Coordination](https://arxiv.org/abs/2608.22077) · 2026-08-22 | 补多agent电脑操作中虚拟机状态无法直接合并的协调方法。 | 主流程保持连续环境状态；并行分支收集信息后交回结果，属协调方法。 |

### 6.1 信息检索、文档与记忆评测

| 原优先级 | 已收录研究与首次日期 | 补什么 | 归类或证据边界 |
| --- | --- | --- | --- |
| P0 | [WorldMemArena](https://arxiv.org/abs/2605.29341) · 2026-05-28 | 补记忆写入、维护、检索、使用四阶段以及跨会话变化的评测。 | 含跨域轨迹；主归信息/记忆评测，并在第6节总览加跨域记忆入口，不当成单一机器人benchmark。 |
| P0 | [MADQA](https://arxiv.org/abs/2603.12180) · 2026-03-12 | 补异构PDF文档集合中的检索与推理，以及准确率—搜索投入之间的权衡。 | 论文现名 Strategic Navigation or Stochastic Search? How Agents and Humans Reason Over Document Collections。 |
| P0 | [MMSearch-Plus](https://arxiv.org/abs/2508.21475) · 2025-08-29 | 补细粒度视觉线索、图文交替检索和来源核验；不能靠附近文字轻易绕过视觉。 | 采用2026年3月v3题名 Benchmarking Provenance-Aware Search for Multimodal Browsing Agents。 |

### 6.2 创作评测

| 原优先级 | 已收录研究与首次日期 | 补什么 | 归类或证据边界 |
| --- | --- | --- | --- |
| P1 | [VisEditBench](https://arxiv.org/abs/2608.10408) · 2026-08-11 | 补通过问题图表、视觉标注、文本反馈和参考图修改可视化代码。 | 既包括修复也包括风格迁移；与从零生成网页或幻灯片不同。 |
| P1 | [VideoArgus / VideoArgus-Bench](https://arxiv.org/abs/2608.05485) · 2026-08-06 | 补视频生成和编辑的逐实例评分准则、可追溯视觉证据及评价器人类一致性。 | 作为评测资源与配套评价方法；不误标为视频生成agent。 |

### 6.3 交互评测

| 原优先级 | 已收录研究与首次日期 | 补什么 | 归类或证据边界 |
| --- | --- | --- | --- |
| P0 | [Time-Aware Assistive Navigation / TIMELI](https://arxiv.org/abs/2609.05596) · 2026-09-04 | 补第一视角辅助导航中的回应时机、沉默和及时指导。 | 辅助人类行动，主归6.3；区分离线、闭环模拟及迁移评测，资源若仍承诺发布要如实标注。 |
| P0 | [When Seeing Is Not Enough](https://arxiv.org/abs/2608.23978) · 2026-08-25 | 补视觉指代不清时主动提问、整合多轮证据及置信度校准的评测。 | 属交互式视觉定位，不能与单次截图定位或普通图像QA混为一谈。 |
| P0 | [OmniAssistBench](https://arxiv.org/abs/2608.21360) · 2026-08-21 | 补按用户目标连续指导、理解手势、保持上下文及等待目标事件再回应。 | 基于源视频逆向构造和固定路线模拟，须标明并非任意分支的在线人机交互。 |
| P1 | [JarvisBench](https://arxiv.org/abs/2608.14870) · 2026-08-14 | 补后台任务继续执行时，对用户提问和agent求助的双向注意力协调。 | 参考实现包含双工语音；任务集并不意味着每项任务都有独立视觉输入。 |

### 6.4 数字环境评测

| 原优先级 | 已收录研究与首次日期 | 补什么 | 归类或证据边界 |
| --- | --- | --- | --- |
| P0 | [JarvisGUI](https://arxiv.org/abs/2609.10451) · 2026-09-09 | 补Android、Windows、Ubuntu之间跨设备结果传递、共享状态和动态组合任务。 | 这是benchmark，不应因名称带Agent就塞进3.4。 |
| P0 | [APPSim-Bench](https://arxiv.org/abs/2609.07712) · 2026-09-07 | 补保留常见应用交互逻辑、同时可控制后台状态的可复现手机评测。 | 使用可控模拟应用，不能宣传成直接测线上商业APP。 |
| P0 | [CUA-Universe](https://arxiv.org/abs/2609.05374) · 2026-09-04 | 补真实软件GUI/CLI混合环境、动态任务和可验证轨迹构造。 | 主归环境/数据资源；第7.2只交叉引用实现，避免把同一论文重复收录。 |
| P0 | [CONFLICTGUI / ConflictGuard](https://arxiv.org/abs/2609.03438) · 2026-09-03 | 补指令自相矛盾或与界面证据冲突时能否正确终止。 | 主要作为benchmark加配套推理干预方法；与恶意提示注入评测不同。 |
| P0 | [MobileWorld](https://arxiv.org/abs/2512.19432) · 2025-12-22 | 补跨APP长任务、向用户澄清和MCP工具调用。 | 已有 AndroidWorld 不能覆盖这三类能力；配套基线留在benchmark条目。 |
| P0 | [ScreenSpot-Pro](https://arxiv.org/abs/2504.07981) · 2025-04-04 | 补专业软件、高分辨率、小目标的基础定位评测。 | 组件级定位benchmark，不是端到端任务成功率benchmark。 |
| P1 | [AgentHijack](https://arxiv.org/abs/2609.09212) · 2026-09-06 | 补视觉贴片对截图、模型输出、动作解析和实际执行完整链路的影响。 | 限定为研究评测；与已收录 StepJack 的多步间接注入角度互补。 |
| P1 | [GUI-CC](https://arxiv.org/abs/2609.00048) · 2026-08-30 | 补GUI世界模型连续滚动时的上下文一致性和可执行性。 | 官方首次日期为8月30日，编号2609不等于9月首发；有离线轨迹与在线agent-loop两轨。 |

### 6.5 虚拟环境与游戏评测

| 原优先级 | 已收录研究与首次日期 | 补什么 | 归类或证据边界 |
| --- | --- | --- | --- |
| P1 | [lmgame-Bench](https://arxiv.org/abs/2505.15146) · 2025-05-21 | 补平台、解谜和叙事游戏中的感知、记忆、规划与提示敏感性评测。 | 基础补漏；说明感知/记忆支架和统一接口，不能把所有得分当成纯模型能力。 |

## 二、已有系列：补后续版本，不覆盖旧论文记录

| 当前条目 | 后续工作 | 如何处理 |
| --- | --- | --- |
| 3.4 Mobile-Agent | [Mobile-Agent-v3.5 / GUI-Owl-1.5](https://arxiv.org/abs/2602.16855)，论文首次2026-02-15；官方仓库发布记录为02-14 | 已在4.2收录模型报告，并从3.4的原Mobile-Agent条目建立系列链接。 |
| 3.5 SIMA | [SIMA 2](https://deepmind.google/blog/sima-2-an-agent-that-plays-reasons-and-learns-with-you-in-virtual-3d-worlds/)，2025-11-13 | 已在3.5收录并关联原SIMA；注明有限研究预览，以及自我改进发生在训练代际之间。 |
| 4.2 GR00T N1 | [GR00T N1.7](https://github.com/NVIDIA/Isaac-GR00T)；[2026-07-07官方技术介绍](https://developer.nvidia.com/blog/develop-humanoid-robot-policies-end-to-end-with-nvidia-isaac-gr00t/) | 已在既有N1条目追加N1.7 GA说明，链接官方7月技术介绍；原N1日期、论文和结果保持独立版本含义。 |
| 4.2 π0 / π0.5 | [π0.7](https://www.pi.website/blog/pi07)，2026-04-16；[官方报告](https://www.pi.website/download/pi07.pdf) | 已在4.2收录官方报告，并关联π0.5；注明语言指导与自主执行的不同设定，不据报告推定开放权重。 |
| 5.2 DeepEyes | [DeepEyesV2](https://arxiv.org/abs/2511.05271)，首次2025-11-07、当前v4为2026-03-11 | 已在5.2收录独立论文并关联原DeepEyes；RealX-Bench随该方法条目提供入口。 |
| 6.4 OSWorld | [OSWorld 2.0](https://arxiv.org/abs/2606.29537)，首次2026-06-28、当前v2为07-13 | 已在6.4收录并关联原OSWorld；明确完整成功、部分进度和步数预算。 |

另外，Qwen-UI-Agent 与 Qwen-CUA、Vision-DeepResearch 与 Video-DeepResearch、Agent S2 与 Scaling Agents for Computer Use 均有不同论文标识和主要贡献，不能仅因共用团队或代码仓库就合并掉。

## 三、工程、协议、技能与相关目录：9项（已落实）

| 收录位置 | 资源 | 补什么 / 收录方式 |
| --- | --- | --- |
| 7.1 | [Google ADK](https://github.com/google/adk-python)；[官方音视频文档](https://adk.dev/live/audio-video/) | 补实时双向音视频、事件和工具协作运行时；以可用的multimodal路径入库，避免只列一个泛用框架名。 |
| 7.1，协议组 | [MCP](https://modelcontextprotocol.io/specification/2026-07-28) | 补agent与外部工具、资源连接的协议入口；本次latest指向2026-07-28。它不是Agent Skill包。 |
| 7.1，协议组 | [A2A](https://a2a-protocol.org/latest/) | 补独立agent之间的发现、任务委派和结果交换；Agent Card中的skill描述不等同于SKILL.md包。 |
| 7.2；8.2交叉索引 | [Browser Use](https://github.com/browser-use/browser-use)；[实际SKILL.md](https://github.com/browser-use/browser-use/blob/main/skills/browser-use/SKILL.md) | 补可运行的浏览器操作库与命令工具。工程条目作为主入口；技能目录链接其具体程序指导包。 |
| 7.2；8.2交叉索引 | [Cua](https://github.com/trycua/cua)；[实际SKILL.md](https://github.com/trycua/cua/blob/main/skills/gui-automation/SKILL.md) | 补桌面自动化接口、隔离桌面、VM与执行环境；区分开源本地组件和托管服务。 |
| 7.2；8.2交叉索引 | [Playwright CLI](https://github.com/microsoft/playwright-cli)；[实际SKILL.md](https://github.com/microsoft/playwright-cli/blob/main/skills/playwright-cli/SKILL.md) | 补浏览器检查、截图、录像和反馈驱动的UI验证程序包。工具本身不等于完整多模态agent。 |
| 7.4 | [AgentLab](https://github.com/ServiceNow/AgentLab) | 补BrowserGym之上的实验管理、轨迹检查、版本记录与可复现评估；和已有BrowserGym分工不同。 |
| 8.1，进展/提案栏 | [Skills Over MCP工作组](https://modelcontextprotocol.io/community/working-groups/skills-over-mcp) | 跟踪技能通过MCP发现、分发和消费的规范工作。当前页面是工作组章程并指向SEP，不能直接标成所有客户端已支持的稳定标准。 |
| 9 | [Awesome Proactive Agent](https://github.com/LowEntropyAI/awesome-proactive-agent) | 补主动交互、可穿戴辅助、介入时机和人机协作的线索源；范围包含纯文本工作，逐条按本库标准筛选。 |

不建议把 [openai/skills](https://github.com/openai/skills) 当成新的活跃官方合集补回：该仓库已声明弃用并指向OpenAI Plugins，而当前8.1已有后者。

## 四、已落实的目录结构调整

1. **保留3与6的六个动作领域。** 医疗、科研、办公等行业作为标签；实时、主动、多人等作为能力/时间/参与者描述。避免在同一层把行业、时间形态和动作环境混在一起。
2. **4.2改为 Action Models and Generalist Policies。** 在条目上标GUI、VLA、跨域策略；现有名称更像机器人专节，而当前已收Qwen-CUA，新增GUI基础模型后这种歧义会更明显。
3. **7.2改为 Digital-Agent Infrastructure and Environments。** BrowserGym之外补执行接口、浏览器工具、桌面与沙箱资源；每项标资源类型。7.1内另设协议组即可，无需新一级目录。
4. **新增1.4跨章节能力索引表。** 用“记忆”“主动与双工交互”“视觉/执行验证”“GUI+CLI/MCP混合操作”“协作”连接系统、组件、方法、评测和工程入口。每篇研究仍只有一个主条目。
5. **第6节增加评测层级说明和模板字段。** 本轮19条新benchmark均注明层级，区分组件、静态/回放、交互轨迹和完整执行，并按证据补充环境及指标边界；旧条目在协议复核时再补字段，不凭名称猜测。4.2和7.2保留旧锚点兼容历史链接。

## 五、全文复核后的收录与边界判断

| 研究 | 最终位置 | 复核结论 |
| --- | --- | --- |
| [Thinking on Shots](https://arxiv.org/abs/2608.26809) | [3.2](../README.md#thinking-on-shots) | P-NEF通过视觉问答检查编辑结果，生成纠错提示并再次编辑；Global Memory Card提供跨镜头实体锚点，满足运行时反馈条件。MMLVE-Bench随系统条目收录。 |
| [StreamSoccer](https://arxiv.org/abs/2608.19723) | [4.3](../README.md#streamsoccer) | 已确认活跃事件、近期完成事件、可检索历史记录三层记忆，以及模式/沉默调度；收录事件记忆组件和附带流式评测，不将评论生成泛化成外部任务执行agent。 |
| [RefineCut](https://arxiv.org/abs/2608.25622) | [5.2](../README.md#refinecut) | 规划器读取上游视觉字幕、元数据、音乐及约束账本，不直接读取像素；采用可执行验证器重放筛选和偏好学习。按创作工作流的规划学习方法收录，不描述成视觉检查系统。 |
| [MEMO](https://arxiv.org/abs/2609.07471) | [4.3](../README.md#memo) | 记忆文字可渲染为视觉载体；这不等于原任务具有两种独立信息模态。 |
| [Discriminative World Models for Web Agents](https://arxiv.org/abs/2609.02885) | 未收录 | 检查的实验接口主要为HTML/AXTree等文本化状态，未建立符合本库范围的实质视觉实验路径；世界模型方向已补WM-R1。 |
| [LifeMem](https://arxiv.org/abs/2609.12655) | 未收录 | 当前证据以通用经验/文本记忆为主，尚不足以支持本库需要的多模态输入或组件实验关联。 |
| [VRL-Bench](https://arxiv.org/abs/2609.12404) | 未收录 | 当前检查到的是语言重试、预算及MiniWoB/WebShop等设定，未建立实际视觉输入路径；环境名称本身不能证明多模态。 |

另外三项正文中的重要限定：

- [PROS](../README.md#pros)：诊断由用户触发，用户接受目标后再修复；协议接受的诊断与真实受控用户研究不同。
- [ACE](../README.md#ace)：纠错与停止依据指令遵循评价；方法说明包含结构化差异及按需渲染证据，独立视觉质量评分不是下一步编辑的停止信号。
- [Procedura](../README.md#procedura)：编译/装配诊断和多视角渲染检查都会改变后续构建，但有界重试仍可能留下警告或跳过部件。

## 六、已处理的版本与来源差异

- Gander当前原论文已改题为 **Multimodal Duplex Interaction Agent**，不同于搜索索引仍显示的旧标题 *Omni Interaction Agent Technical Report*。本清单采用9月12日v3。
- MMSearch-Plus当前v3标题强调 **Provenance-Aware Search**，不再沿用初版的 *A Simple Yet Challenging Benchmark*。
- Parametric Multimodal User Memory的官方页面与提交历史均写2026-07-08；不能从2608编号或9月新闻日期直接推断首次日期。
- BlueLM-GUI采用9月14日v2说明，保留9月11日首次日期。

- WorldMemArena摘要与HTML版本的任务总数分别写400和461；正文不采用冲突计数，保留一致的阶段、输入和评测描述。
- GUI-CC的官方首次提交为2026-08-30；README使用2026-08。

## 七、最终收录入口与检查结果

共54条新增研究，以下均直接跳转到README唯一主条目。6组系列更新中的5条独立论文/报告已包含在54条内，GR00T N1.7为既有条目的版本注记，不另计一篇。

| 章节 | 新增数 | 主条目入口 |
| --- | --- | --- |
| 2.1 | 2 | [Agentic Visual Generation](../README.md#agentic-visual-generation-survey)；[Efficient GUI Agents](../README.md#efficient-gui-agents) |
| 2.3 | 1 | [Proactive Service Agents](../README.md#proactive-service-agents) |
| 3.2 | 4 | [PROS / PROS-Bench](../README.md#pros)；[Thinking on Shots](../README.md#thinking-on-shots)；[Procedura](../README.md#procedura)；[ACE](../README.md#ace) |
| 3.3 | 1 | [ChatMuse](../README.md#chatmuse) |
| 3.4 | 1 | [Agent S2](../README.md#agent-s2) |
| 3.5 | 1 | [SIMA 2](../README.md#sima-2) |
| 4.1 | 2 | [Gander](../README.md#gander)；[MOSS-VL](../README.md#moss-vl) |
| 4.2 | 6 | [BlueLM-GUI](../README.md#bluelm-gui)；[Qwen-UI-Agent](../README.md#qwen-ui-agent)；[π0.7](../README.md#pi-07)；[Mobile-Agent-v3.5 / GUI-Owl-1.5](../README.md#mobile-agent-v35)；[UI-TARS-2](../README.md#ui-tars-2)；[OpenCUA](../README.md#opencua) |
| 4.3 | 5 | [MEMO](../README.md#memo)；[StreamSoccer](../README.md#streamsoccer)；[Parametric Multimodal User Memory](../README.md#parametric-user-memory)；[MMA: Multimodal Memory Agent](../README.md#mma)；[OmniParser](../README.md#omniparser) |
| 5.1 | 3 | [GenRouter](../README.md#genrouter)；[Silent Failures in Multimodal Agentic Search](../README.md#silent-failures)；[Do Multimodal Agents Really Benefit from Tool Use?](../README.md#tool-use-capability-gains) |
| 5.2 | 6 | [From Interaction Traces to Persistent Skills](../README.md#persistent-skills)；[RefineCut](../README.md#refinecut)；[AutoDesign](../README.md#autodesign)；[Vision-DeepResearch](../README.md#vision-deepresearch)；[DeepEyesV2](../README.md#deepeyes-v2)；[Scaling Agents for Computer Use / Agent S3](../README.md#agent-s3) |
| 5.3 | 2 | [WM-R1](../README.md#wm-r1)；[Genie 3](../README.md#genie-3) |
| 5.4 | 1 | [Spine-Branch Coordination](../README.md#spine-branch) |
| 6.1 | 3 | [WorldMemArena](../README.md#worldmemarena)；[MADQA](../README.md#madqa)；[MMSearch-Plus](../README.md#mmsearch-plus) |
| 6.2 | 2 | [VisEditBench](../README.md#viseditbench)；[VideoArgus / VideoArgus-Bench](../README.md#videoargus) |
| 6.3 | 4 | [Time-Aware Assistive Navigation / TIMELI](../README.md#timeli)；[When Seeing Is Not Enough](../README.md#interactive-visual-grounding)；[OmniAssistBench](../README.md#omniassistbench)；[JarvisBench](../README.md#jarvisbench) |
| 6.4 | 9 | [JarvisGUI](../README.md#jarvisgui)；[APPSim-Bench](../README.md#appsim-bench)；[AgentHijack](../README.md#agenthijack)；[CUA-Universe](../README.md#cua-universe)；[CONFLICTGUI / ConflictGuard](../README.md#conflictgui)；[GUI-CC](../README.md#gui-cc)；[OSWorld 2.0](../README.md#osworld-2)；[MobileWorld](../README.md#mobileworld)；[ScreenSpot-Pro](../README.md#screenspot-pro) |
| 6.5 | 1 | [lmgame-Bench](../README.md#lmgame-bench) |

检查范围与结果：

- 原有306条研究记录全部保留；新增54条，合计360条；没有重复标题或重复主arXiv标识，研究条目保持按月份逆序。
- 本轮README/贡献说明新增的111个独立论文、项目、代码、数据及规范URL均返回HTTP 200；不将动态徽章或未改动的旧外链计入本轮网络检查。
- 通过GFM解析检查README、贡献说明及两份审核文档的表格、相对文件链接、内部锚点和旧锚点别名；无破损本地链接或列数不一致。
- `awesome-lint`执行后仅报告`awesome-github`：当前下载目录不是Git仓库；其他规则没有报错。贡献说明已删除不存在的定时workflow承诺，并注明等效检查的报告方式。
- 此次检查验证文档结构与链接，不等同于重跑论文实验、复现模型表现或审计所有外部代码。

---

检索路径：当前README → GUI/视觉生成/主动agent相关目录 → 原论文摘要和提交历史 → 必要的官方项目文档与SKILL.md → 论文ID去重及同系列关系核查。研究描述为本次摘要，不复制外部目录正文。
