---
layout: default
title: "Horizon Summary: 2026-06-20 (ZH)"
date: 2026-06-20
lang: zh
---

> 从 232 条内容中筛选出 25 条重要资讯。

---

1. [中科院突破 3D DRAM：4 层 2T0C 结构，数据保持 400 秒](#item-1) ⭐️ 9.0/10
2. [LM Studio 与苹果用四台 Mac Studio 运行万亿参数 Kimi K2.6](#item-2) ⭐️ 9.0/10
3. [潘建伟团队构建芯片化量子通信网络，突破 540 公里](#item-3) ⭐️ 9.0/10
4. [英特尔与 AMD 联合推出 ACE CPU 扩展，为 x86 带来 AI 指令集](#item-4) ⭐️ 8.0/10
5. [英国科学家攻克量子传感器噪声难题](#item-5) ⭐️ 8.0/10
6. [苹果发布 Core AI，支持设备端生成式 AI](#item-6) ⭐️ 8.0/10
7. [Bedrock 上的 Claude Fable 5 要求与 Anthropic 共享数据](#item-7) ⭐️ 8.0/10
8. [大规模 LLM 推理开源手册发布](#item-8) ⭐️ 8.0/10
9. [状态空间模型（S4、Mamba）开源指南](#item-9) ⭐️ 8.0/10
10. [AWS 为 Cognito 增加多区域复制功能](#item-10) ⭐️ 7.0/10
11. [CSSQuake：仅用 CSS 玩《雷神之锤》](#item-11) ⭐️ 6.0/10
12. [马斯克行使全部 2018 年特斯拉薪酬计划权利](#item-12) ⭐️ 6.0/10
13. [英国拟强制 Meta、YouTube 推送本地新闻](#item-13) ⭐️ 6.0/10

---

<a id="item-1"></a>
## [中科院突破 3D DRAM：4 层 2T0C 结构，数据保持 400 秒](https://www.ithome.com/0/966/543.htm) ⭐️ 9.0/10

中国科学院微电子研究所联合北京超弦设备研究院，首次展示了基于 IGZO 晶体管的 4 层 3D 2T0C DRAM 结构，实现了 400 秒的数据保持时间和每单元 3 比特存储。该成果已被 VLSI 2026 接收。 这一突破通过在逻辑芯片上直接实现单层 3D DRAM 集成，满足了 AI 和高性能计算对高容量、高带宽存储的迫切需求，为克服传统 SRAM 的密度限制和片外 DRAM 的带宽瓶颈提供了可行路径。 该 3D 2T0C 单元采用双栅 IGZO 晶体管设计和垂直字线架构，优化了读取裕度、双栅控制稳定性和制造成本。400 秒的保持时间无需存储电容，仅依靠读取晶体管的寄生电容实现。

rss · IT之家 · 6月20日 10:33

**背景**: 传统 DRAM 采用 1T1C（一晶体管一电容）单元，垂直扩展困难。2T0C DRAM 用第二个晶体管替代电容，利用 IGZO 晶体管的超低关断电流保持电荷。但此前 2T0C 设计仅限于平面或垂直 4F²架构，无法多层堆叠。该工作提出单步高层三维集成方案，堆叠了四层 2T0C 单元。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.imec-int.com/en/press/imec-demonstrates-capacitor-less-igzo-based-dram-cell-400s-retention-time">Imec Demonstrates Capacitor-less IGZO-Based DRAM Cell With...</a></li>
<li><a href="https://ieeexplore.ieee.org/document/10631386">Bit-Cost-Scalable 3D DRAM Architecture and Unit Cell... | IEEE Xplore</a></li>
<li><a href="https://semiengineering.com/baby-steps-towards-3d-dram/">Baby Steps Toward 3D DRAM</a></li>

</ul>
</details>

**标签**: `#3D DRAM`, `#IGZO`, `#semiconductor`, `#memory technology`, `#VLSI`

---

<a id="item-2"></a>
## [LM Studio 与苹果用四台 Mac Studio 运行万亿参数 Kimi K2.6](https://www.ithome.com/0/966/539.htm) ⭐️ 9.0/10

LM Studio 与苹果合作，在四台 Mac Studio 集群上成功运行了万亿参数的 Kimi K2.6 模型，通过苹果的内存共享和互联技术实现了约 1.5TB 的统一内存池，并通过 LM Link 从 MacBook Neo 和 iPhone 演示了安全远程访问。 这一演示证明万亿参数 MoE 模型可以在消费级硬件上部署，显著降低了本地 AI 部署的门槛，提供了传统 GPU 集群的成本效益和能效替代方案，对隐私和可访问性具有潜在影响。 Kimi K2.6 模型总参数 1 万亿，采用 MoE 架构，激活参数 320 亿，支持长上下文、多模态输入和智能体任务。该集群在特定模式下达到约 28 tokens/s 的生成速度，功耗低于传统 GPU 集群。

rss · IT之家 · 6月20日 09:37

**背景**: LM Studio 是一个运行本地 AI 模型的平台，LM Link 是其远程访问功能，提供端到端加密连接。苹果的 macOS Tahoe 26.2 引入了基于 Thunderbolt 5 的 RDMA，实现了多台 Mac 之间的低延迟内存共享，这是为大型模型聚合内存的关键。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://lmstudio.ai/link">LM Link • Use your local models, remotely. | LM Studio</a></li>
<li><a href="https://tailscale.com/blog/lm-link-remote-llm-access">LM Link: Access models on your powerful devices you own, as if they were local</a></li>
<li><a href="https://www.webpronews.com/apples-macos-tahoe-26-2-enables-rdma-for-ai-mac-clusters-over-thunderbolt-5/">Apple's macOS Tahoe 26.2 Enables RDMA for AI Mac Clusters Over...</a></li>

</ul>
</details>

**标签**: `#AI`, `#Apple`, `#Mac Studio`, `#Large Language Models`, `#Local Deployment`

---

<a id="item-3"></a>
## [潘建伟团队构建芯片化量子通信网络，突破 540 公里](https://www.ithome.com/0/966/525.htm) ⭐️ 9.0/10

由中国科学技术大学潘建伟领导的研究团队联合其他机构，展示了基于双场量子密钥分发（TF-QKD）协议的芯片化量子密钥分发网络，在 540 公里光纤上实现了 2.93 bps 的安全成码率。该成果于 2026 年 6 月 19 日发表在《自然·光子学》上。 这一突破通过将关键组件集成到光子芯片上，降低了系统复杂性和成本，极大地推动了远距离量子通信的实用性。它为可扩展的、安全的量子网络铺平了道路，未来可连接城市并支持不可破解的通信等应用。 该芯片化发送端结合了基于高品质因子氮化硅（Si3N4）微环谐振腔的自注入锁定激光器芯片，以及集成了调制器和衰减器的薄膜铌酸锂（TFLN）光子集成芯片。网络采用量子叶脊架构支持多用户，在总损耗达 91.5 dB 的 540 公里超低损耗光纤中，安全成码率超过无中继密钥容量 9 倍。

rss · IT之家 · 6月20日 07:51

**背景**: 量子密钥分发（QKD）允许双方以信息论安全性共享密钥。双场量子密钥分发（TF-QKD）协议克服了传统 QKD 的速率-距离限制，可实现更远距离，但要求两个独立激光器之间实现极其稳定的单光子干涉。先前的实现体积庞大且复杂；本工作首次在网络环境中将必要组件集成到光子芯片上。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.ithome.com/0/966/525.htm">ithome.com/0/966/525.htm</a></li>
<li><a href="https://zhuanlan.zhihu.com/p/442820084">TF-QKD（双场量子密钥分发协议） - 知乎</a></li>
<li><a href="https://www.secrss.com/articles/18083">量子密钥分发：从BB84到TF-QKD - 安全内参 | 决策者的网络安全知识库</a></li>

</ul>
</details>

**标签**: `#quantum communication`, `#quantum key distribution`, `#photonics`, `#chip integration`, `#network security`

---

<a id="item-4"></a>
## [英特尔与 AMD 联合推出 ACE CPU 扩展，为 x86 带来 AI 指令集](https://www.tomshardware.com/pc-components/cpus/intel-and-amds-new-ace-cpu-extensions-bring-an-efficient-ai-oriented-instruction-set-to-x86-a-new-design-makes-matrix-multiplication-more-power-and-density-efficient) ⭐️ 8.0/10

英特尔与 AMD 联合发布了 ACE（AI Computex 扩展）的完整规范，这是一套针对 x86 CPU 的新指令集扩展，旨在加速 AI 工作负载，特别是矩阵乘法，并提升功耗和密度效率。 这标志着两大 x86 CPU 制造商罕见合作，以应对通用处理器上高效 AI 处理日益增长的需求，可能减少对 GPU 等专用 AI 加速器的依赖。 ACE 扩展专注于低精度 AI 格式和矩阵乘法引擎，旨在未来英特尔和 AMD CPU 上实现显著性能提升，同时保持可扩展性和能效。

rss · Tom's Hardware · 6月20日 12:00

**背景**: 现代 AI 工作负载（如神经网络推理）严重依赖矩阵乘法运算。传统 x86 CPU 缺乏针对这些运算的专用指令，通常需要 GPU 或专用 AI 加速器。ACE 扩展将矩阵运算的硬件级支持直接引入 CPU，提升了 AI 任务的效率。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.tomshardware.com/pc-components/cpus/intel-and-amds-new-ace-cpu-extensions-bring-an-efficient-ai-oriented-instruction-set-to-x86-a-new-design-makes-matrix-multiplication-more-power-and-density-efficient">Intel and AMD's new ACE CPU extensions bring an... | Tom's Hardware</a></li>
<li><a href="https://wccftech.com/amd-intel-arm-x86-with-ace-matrix-multiply-engines-low-precision-ai-formats-future-cpus/">AMD and Intel arm x86 against the AI gap with ACE , baking...</a></li>

</ul>
</details>

**标签**: `#CPU`, `#AI`, `#x86`, `#instruction set`, `#hardware`

---

<a id="item-5"></a>
## [英国科学家攻克量子传感器噪声难题](https://www.ithome.com/0/966/546.htm) ⭐️ 8.0/10

由英国帝国理工学院领导的研究团队展示了一种差分测量技术，通过比较两台原子干涉仪的测量结果来消除激光相位噪声，即使在单次信号被噪声淹没时也能达到量子极限灵敏度。该成果于 2026 年 6 月 17 日发表在《自然》杂志上。 这一突破消除了建造大规模量子传感器的主要障碍，使得探测当前探测器无法触及的暗物质和早期宇宙引力波的微弱信号成为可能。它为公里级原子干涉仪铺平了道路，有助于研究超大质量黑洞的形成和暗物质的本质。 研究团队使用同一台超稳定时钟激光照射两个空间分离的干涉仪中的超冷锶-87 原子。他们刻意注入额外噪声以模拟未来长基线环境，但联合分析仍能在量子投影噪声极限下恢复出清晰信号。

rss · IT之家 · 6月20日 11:43

**背景**: 原子干涉仪利用激光脉冲操控原子波包并测量干涉，为基础物理提供极高灵敏度。然而，激光相位噪声通常会淹没来自引力波或暗物质的微弱信号。AION（原子干涉仪观测站与网络）项目旨在英国建造大规模原子干涉仪以应对这些挑战。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.hep.ph.ic.ac.uk/AION-Project/">AION @ Imperial: Home</a></li>
<li><a href="https://www.imperial.ac.uk/high-energy-physics/research/experiments/aion/">AION | Research groups | Imperial College London</a></li>
<li><a href="https://www.ukri.org/news/quantum-experiment-opens-gravitational-waves-and-dark-matter-search/">Quantum experiment opens gravitational waves and dark matter search</a></li>

</ul>
</details>

**标签**: `#quantum sensing`, `#dark matter`, `#gravitational waves`, `#atom interferometer`, `#physics`

---

<a id="item-6"></a>
## [苹果发布 Core AI，支持设备端生成式 AI](https://www.infoq.com/news/2026/06/apple-core-ai-wwdc/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global) ⭐️ 8.0/10

在 WWDC 26 上，苹果宣布了 Core AI 框架，这是 Core ML 的继任者，允许开发者在 Apple Silicon 设备上完全本地运行大语言模型和生成式 AI。它支持自定义转换的 PyTorch 模型和预优化的开源模型。 Core AI 标志着移动 AI 开发的重大转变，实现了无需服务器依赖的强大设备端生成式 AI，增强了隐私性并降低了延迟。这使苹果在设备端 AI 领域具有强大竞争力，影响开发者和用户。 Core AI 提供了现代、内存安全的 Swift API，并利用 Apple Silicon 的统一内存架构，在 CPU、GPU 和神经网络引擎上运行模型。模型被转换为.aimodel 格式，苹果官方的 coreai-models 仓库包含 Gemma 3 和 Qwen3 等模型的转换。

rss · InfoQ · 6月20日 11:00

**背景**: 苹果之前使用 Core ML 进行设备端机器学习，但它并未针对大语言模型和生成式 AI 进行优化。Core AI 专为这些工作负载设计，利用 Apple Silicon 的统一内存在本地高效运行大型模型。这符合行业向设备端 AI 发展的趋势，以保护隐私和实现离线功能。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://developer.apple.com/core-ai/">Core AI - Apple Developer</a></li>
<li><a href="https://rockyshikoku.medium.com/coreai-model-zoo-open-llms-for-apples-new-core-ai-framework-f9af93e069b9">CoreAI-Model-Zoo: Open LLMs for Apple ’s New Core AI Framework</a></li>
<li><a href="https://www.aimadetools.com/blog/core-ai-vs-core-ml/">Core AI vs Core ML : Which Apple Framework Should You Use in 2026?</a></li>

</ul>
</details>

**标签**: `#Apple`, `#Generative AI`, `#On-Device AI`, `#Core AI`, `#WWDC`

---

<a id="item-7"></a>
## [Bedrock 上的 Claude Fable 5 要求与 Anthropic 共享数据](https://www.infoq.com/news/2026/06/bedrock-fable-5-data-sharing/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global) ⭐️ 8.0/10

AWS Bedrock 上的 Anthropic Claude Fable 5 和 Mythos 5 模型现在要求用户选择加入 provider_data_share，将提示和输出发送给 Anthropic 进行 30 天保留并接受人工审查。发布三天后，Anthropic 因美国出口管制合规要求 AWS 撤销对这两个模型的访问权限。 这标志着 AWS Bedrock 用户数据隐私政策的重大转变，因为之前的模型将推理数据保留在 AWS 边界内。强制数据共享以及随后的访问撤销引发了关于隐私、出口管制以及云 AI 服务可靠性的担忧。 provider_data_share 强制要求仅适用于 Mythos-class 层级，目前包括 Fable 5 和 Mythos 5。发布时，这些模型在美国东部（弗吉尼亚北部）和欧洲（斯德哥尔摩）可用，预计将增加更多区域。

rss · InfoQ · 6月20日 09:03

**背景**: Amazon Bedrock 是一项托管服务，通过 API 提供来自不同提供商的基础模型访问。以前，Bedrock 模型的推理数据保留在 AWS 基础设施内，确保数据隐私。Anthropic 的 Claude Fable 5 是一个大语言模型，支持高达 100 万 token 的上下文，并具有强大的视觉能力。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.creativeainews.com/articles/claude-fable-5-bedrock-data-sharing-2026/">Claude Fable 5 on Bedrock Forces Data Sharing</a></li>
<li><a href="https://www.datacamp.com/blog/claude-fable-5">Claude Fable 5 : A Mythos-Class Model You Can Use | DataCamp</a></li>

</ul>
</details>

**标签**: `#AI`, `#AWS`, `#Data Privacy`, `#Anthropic`, `#Export Control`

---

<a id="item-8"></a>
## [大规模 LLM 推理开源手册发布](https://www.reddit.com/r/learnmachinelearning/comments/1uavenu/an_open_handbook_on_llm_inference_at_scale_gpu/) ⭐️ 8.0/10

一份全面的大规模 LLM 推理开源手册已在 Reddit 上分享，内容涵盖 GPU 内部机制、KV 缓存、批处理以及 vLLM、SGLang 和 TensorRT-LLM 等框架。 该手册为从业者提供了结构化的深入资源，以理解和优化 LLM 推理，这对于大规模部署高效且成本可控的 AI 服务至关重要。 手册涵盖了 GPU 内部机制、KV 缓存机制、批处理策略，并比较了 vLLM、SGLang 和 TensorRT-LLM 等推理引擎，为高吞吐量服务提供了实用见解。

reddit · r/learnmachinelearning · /u/YouFirst295 · 6月20日 12:28

**背景**: 大规模 LLM 推理需要高效的内存管理和计算优化。关键技术包括 KV 缓存以避免冗余计算、批处理以最大化 GPU 利用率，以及实现这些优化的专用推理引擎如 vLLM 和 TensorRT-LLM。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://medium.com/@plienhar/llm-inference-series-3-kv-caching-unveiled-048152e461c8">LLM Inference Series: 3. KV caching explained | by Pierre... | Medium</a></li>
<li><a href="https://docs.vllm.ai/">vLLM</a></li>
<li><a href="https://github.com/NVIDIA/TensorRT-LLM">GitHub - NVIDIA/TensorRT-LLM: TensorRT LLM provides users with an easy-to-use Python API to define Large Language Models (LLMs) and supports state-of-the-art optimizations to perform inference efficiently on NVIDIA GPUs. TensorRT LLM also contains components to create Python and C++ runtimes that orchestrate the inference execution in a performant way. · GitHub</a></li>

</ul>
</details>

**标签**: `#LLM inference`, `#GPU`, `#KV cache`, `#batching`, `#inference engines`

---

<a id="item-9"></a>
## [状态空间模型（S4、Mamba）开源指南](https://www.reddit.com/r/learnmachinelearning/comments/1uau9jb/i_wrote_a_guide_to_state_space_models_s4_mamba/) ⭐️ 8.0/10

一位博士生研究员开源了一份关于状态空间模型（如 S4、Mamba 以及 Hydra、Jamba、Nemotron 等注意力混合模型）的全面指南，追溯了其从 20 世纪 40 年代信号处理到现代深度学习的数学基础。 该指南填补了 SSM 领域易于获取的深度教育资源空白，SSM 正成为序列建模中 Transformer 的高效替代方案，可能影响自然语言处理、时间序列分析等领域。 该指南托管在 ssm.guide 和 GitHub 上，涵盖从 S4 到 Mamba 及混合架构的模型，目前仍在完善中，许多章节待写。作者积极寻求合作者和反馈。

reddit · r/learnmachinelearning · /u/Turbulent_Row8604 · 6月20日 11:29

**背景**: 状态空间模型（SSM）是一类源自控制理论和信号处理的序列模型，利用隐藏状态高效处理序列。S4 将结构化状态空间引入深度学习，Mamba 通过选择性机制实现了线性时间推理。Jamba 和 Nemotron 等混合模型将 SSM 与注意力机制结合，以发挥两者优势。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/State_space_model">State space model</a></li>
<li><a href="https://en.wikipedia.org/wiki/Mamba_(deep_learning_architecture)">Mamba (deep learning architecture) - Wikipedia</a></li>
<li><a href="https://developer.nvidia.com/nemotron">Nemotron AI Models | NVIDIA Developer</a></li>

</ul>
</details>

**标签**: `#state space models`, `#deep learning`, `#sequence modeling`, `#open source`, `#machine learning`

---

<a id="item-10"></a>
## [AWS 为 Cognito 增加多区域复制功能](https://www.infoq.com/news/2026/06/cognito-replication-aws/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global) ⭐️ 7.0/10

AWS 为 Amazon Cognito 引入了多区域复制功能，可自动将用户身份和用户池配置从主区域复制到辅助区域，从而在中断期间实现自动故障转移。 该功能简化了构建高可用认证系统的过程，减少了对自定义复制和故障转移机制的需求，对于需要高弹性的应用至关重要。 复制是单向的，从主区域流向辅助区域，并支持所有认证方法，包括社交联合、SAML、OIDC 和 M2M OAuth2 流程。它还提供了基于 Route 53 健康检查的内置故障转移功能，用于自定义域名。

rss · InfoQ · 6月20日 07:40

**背景**: Amazon Cognito 是一个用于 Web 和移动应用的托管身份服务。此前，实现多区域弹性需要自定义复制和故障转移逻辑。这项新功能自动化了该过程，使维护高可用性更加容易。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://aws.amazon.com/blogs/aws/improve-your-application-resilience-with-amazon-cognito-multi-region-replication/">Improve your application resilience with Amazon Cognito ...</a></li>
<li><a href="https://www.infoq.com/news/2026/06/cognito-replication-aws/">AWS Adds Multi - Region Replication to Amazon Cognito ... - InfoQ</a></li>

</ul>
</details>

**标签**: `#AWS`, `#Cognito`, `#multi-region replication`, `#high availability`, `#authentication`

---

<a id="item-11"></a>
## [CSSQuake：仅用 CSS 玩《雷神之锤》](https://cssquake.com/) ⭐️ 6.0/10

CSSQuake 是一个完全可玩的经典游戏《雷神之锤》版本，完全使用 CSS 渲染，由 PolyCSS 引擎驱动，渲染过程不使用 JavaScript。 这个演示突破了 CSS 能力的边界，展示了仅使用 CSS 变换和其他 CSS 特性就能渲染复杂的 3D 游戏，从而激发创造性的 Web 开发。 CSSQuake 将游戏渲染为可检查的 HTML 和 CSS，意味着游戏世界中的每个元素都是一个 DOM 节点。然而，社区评论指出存在视图裁剪和敌人漂浮等问题，并且游戏可能仍需 JavaScript 处理输入。

hackernews · msalsas · 6月20日 10:49 · [社区讨论](https://news.ycombinator.com/item?id=48608223)

**背景**: CSS 主要用于网页样式设计，但借助 3D 变换、CSS 数学函数和计数器等现代特性，开发者已经创建了纯 CSS 游戏。CSSQuake 是纯 CSS 游戏引擎趋势的一部分，例如 Mantra CSS Game Engine 和 CSS is DOOMed，它们展示了 CSS 在实时图形方面的潜力。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://cssquake.com/">cssQuake - Powered by PolyCSS</a></li>
<li><a href="https://nielsleenheer.com/articles/2026/css-is-doomed-rendering-doom-in-3d-with-css/">CSS is DOOMed - Rendering DOOM in 3D with CSS | Hello my name is Niels Leenheer</a></li>
<li><a href="https://medium.com/cssclass-com/how-to-create-pure-css-games-2a29c777bf4">How to Create Pure CSS Games. How I Built a Pure CSS Game — No JS | by Elad Shechter | cssclass.com | Medium</a></li>

</ul>
</details>

**社区讨论**: 评论总体积极，用户称其“太棒了”和“非常酷”。一些人幽默地将其与退出 vim 相比较，而另一些人则报告了视图裁剪和敌人漂浮等技术问题，表明该演示存在缺陷。

**标签**: `#CSS`, `#game`, `#demo`, `#web`

---

<a id="item-12"></a>
## [马斯克行使全部 2018 年特斯拉薪酬计划权利](https://36kr.com/newsflashes/3861257361626112?f=rss) ⭐️ 6.0/10

根据美国证券交易委员会的一份新文件，埃隆·马斯克已完全行使了其 2018 年特斯拉 CEO 薪酬计划的权利，获得了价值约 1160 亿美元的 3.04 亿股股票。 这标志着历史上最大的 CEO 薪酬方案，反映了特斯拉的巨大增长以及马斯克与股东价值的对齐，不过这些股票将被锁定至 2028 年。 2018 年的计划要求特斯拉实现雄心勃勃的市值、收入和 EBIT 目标；马斯克没有获得任何固定工资。所获得的股票有五年锁定期，至 2028 年结束。

rss · 36氪 · 6月20日 08:34

**背景**: 2018 年，特斯拉董事会为埃隆·马斯克提出了一项独特的薪酬计划，没有固定工资，只有与业绩里程碑挂钩的股票期权。该计划旨在激励马斯克将特斯拉打造成全球最有价值的公司之一。SEC 的申报要求确保了高管薪酬的透明度。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.gurufocus.com/news/8924457/elon-musk-exercises-tesla-ceo-compensation-plan-secures-304m-shares">Elon Musk Exercises Tesla CEO Compensation Plan, Secures 304M Shares</a></li>
<li><a href="https://www.hbs.edu/faculty/Pages/item.aspx?num=54421">Tesla's CEO Compensation Plan - Case - Faculty & Research - Harvard Business School</a></li>

</ul>
</details>

**标签**: `#Tesla`, `#Elon Musk`, `#compensation`, `#business`

---

<a id="item-13"></a>
## [英国拟强制 Meta、YouTube 推送本地新闻](https://36kr.com/newsflashes/3861056590222342?f=rss) ⭐️ 6.0/10

英国政府计划强制 YouTube、Meta 等社交媒体平台提升本地新闻内容的曝光权重，预计最早于本月就相关规则展开公众咨询。 该政策可能重塑新闻在线分发方式，有望促进地方新闻业，但也引发对平台监管和编辑自由的担忧。 相关规则还将要求 BBC、ITV、Channel 4 等公共服务广播机构增加新闻内容供给，并可能延伸至全国性及区域性报纸。细节仍在最终敲定中。

rss · 36氪 · 6月20日 07:33

**背景**: 英国有悠久的公共服务广播传统，BBC、ITV 和 Channel 4 扮演关键角色。近年来，社交媒体平台成为主要新闻来源，常使地方媒体边缘化。政府旨在确保本地新闻保持可见度和可持续性。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Mass_media_in_the_United_Kingdom">Mass media in the United Kingdom - Wikipedia</a></li>
<li><a href="https://ibc.org/distribution-consumption/news/uk-public-service-broadcasters-unite-in-call-for-government-action/22525">UK public service broadcasters unite in call for government action</a></li>

</ul>
</details>

**标签**: `#policy`, `#social media`, `#news`, `#UK`

---

---

## 🔭 未知的未知

- [人造岩石：技术化石重新定义地质学](https://aeon.co/essays/the-strange-rocks-that-wouldnt-exist-without-us) ⭐️ 9.0/10

  > 这篇文章介绍了“技术化石”——模糊自然与人工界限的人造岩石和材料，拓展了人类世地质学的范畴。 这挑战了传统地质学，承认人类活动是一种地质力量，迫使我们重新思考什么是“自然的”，以及未来地质学家将如何解读我们的时代。 例子包括混凝土、塑料和其他合成材料，它们在地质记录中持续存在，可能成为人类世时代的持久标志。

- [尼克·兰德的加速主义：无人未来](https://aeon.co/essays/what-is-nick-lands-philosophy-of-accelerationism-really) ⭐️ 9.0/10

  > Vincent Lê在 Aeon 上发表的一篇文章探讨了尼克·兰德的加速主义哲学，该哲学将技术资本主义视为一种不可控的非人力量，推动着后人类未来的到来。 这篇文章介绍了一种小众但有影响力的思想流派，大多数技术专业人士从未接触过，它对理解当代技术文化和政治极端主义具有深远意义。 文章指出，恐怖分子和科技兄弟都将加速主义视为革命武器，但兰德看到了更黑暗的东西。它将控制论、资本主义和后人类主义联系起来。

- [自我的七层：以选择定义人格](https://www.themarginalian.org/2026/06/16/amelie-rorty-the-identities-of-persons/) ⭐️ 9.0/10

  > 文章提出了一个源自文学与哲学的新框架，包含自我的七个层次，主张人格由选择能力而非固定特质来定义。 这一观点挑战了本质主义的身份观，提供了一个融合认知科学与伦理学的动态模型，对正在探讨人格定义的 AI 和技术专业人士尤其相关。 该框架强调意图和选择能力而非静态特质，并借助文学与哲学资源阐释每一层次。

- [珍妮·维尔普勒-鲍尔：女裁缝、水族箱发明者、章鱼研究先驱](https://www.themarginalian.org/2026/06/14/jeanne-villepreux-power-argonaut/) ⭐️ 9.0/10

  > 一篇新文章揭示了 19 世纪自学成才的自然学家珍妮·维尔普勒-鲍尔被遗忘的贡献：她于 1832 年发明了第一个水族箱，并证明了船蛸自己制造外壳，为章鱼智力研究奠定了基础。 这个故事纠正了历史忽视，表彰了一位开创海洋生物学和水族箱技术的女性，这些技术是现代水生研究和公共教育的基础。它也激励科技专业人士，展示了跨学科思维如何带来突破性创新。 维尔普勒-鲍尔发明了三种水族箱：用于小型生物的玻璃缸、用于较大物种的笼中玻璃缸，以及用于深水研究的沉入式笼子。她用这些设备观察船蛸，并驳斥了古代认为它们从其他软体动物那里偷取外壳的信念。

---

## 🧠 AI 学习

- [Logits、温度和 Top-P 采样详解](https://machinelearningmastery.com/the-statistics-of-token-selection-logits-temperature-and-top-p-walkthrough/) ⭐️ 8.0/10

  > 一篇新的技术指南解释了 logits、温度和 top-p 采样如何控制大语言模型中的 token 选择，以平衡连贯性和创造性。 理解这些参数对于从业者针对特定任务（从事实摘要到创意写作）微调 LLM 输出至关重要。 Logits 是模型最后一层输出的原始分数，通过 softmax 转换为概率；温度在 softmax 之前缩放 logits 以控制随机性，而 top-p 采样则从累积概率超过阈值 p 的最小 token 集合中进行采样。

- [连续批处理提升大模型推理效率](https://machinelearningmastery.com/serving-multiple-users-at-once-how-continuous-batching-keeps-llm-inference-efficient/) ⭐️ 7.0/10

  > 文章解释了连续批处理如何动态调度不同请求的 token 生成步骤，并利用不规则批处理避免填充浪费，这与等待整个批次完成的静态批处理不同。 连续批处理可将大模型推理吞吐量提升高达 23 倍，并降低 p50 延迟，对于在生产环境中高效服务多个用户至关重要。 文章提供了代码示例，比较了静态批处理（将序列填充到等长）与使用调度器在槽位空闲时添加新请求的连续批处理。它还引用了 vLLM 和 PagedAttention 等实现。

- [为 LLM 代理构建上下文剪枝管道](https://machinelearningmastery.com/building-a-context-pruning-pipeline-for-long-running-agents/) ⭐️ 7.0/10

  > MachineLearningMastery.com 上的一篇教程展示了如何实现一个上下文剪枝管道，该管道利用语义相似性为长期运行的 LLM 代理选择对话历史中最相关的部分。 这解决了长期运行代理中令牌限制的关键工程挑战，使其能够在不超过上下文窗口的情况下保持性能。 该管道封装在 prune_context()函数中，该函数接收当前提示、完整交互历史以及一个参数 k，用于检索语义相关的过去轮次数量。

- [长期运行 AI 代理的记忆系统](https://pub.towardsai.net/memory-systems-for-long-running-agents-episodic-to-procedural-fdb6ebb19960?source=rss----98111c9905da---4) ⭐️ 7.0/10

  > Towards AI 上的一篇新文章探讨了长期运行的 AI 代理如何利用情景记忆和程序记忆系统来跨多个会话保持上下文并学习，超越了扁平化的上下文窗口。 这很重要，因为长期运行的代理——如个人助理或自主系统——需要持久记忆才能在数天或数周内有效运行，理解情景记忆和程序记忆为构建此类系统提供了实用框架。 情景记忆存储特定的过去经历（例如用户交互），而程序记忆存储习得的技能和行为以自动执行。文章提供了概念性概述，但缺乏深入的实施细节。

- [上下文窗口税：更长记忆损害 AI 智能体](https://pub.towardsai.net/the-context-window-tax-why-longer-memory-is-making-agents-dumber-not-smarter-3470c4e7bf8f?source=rss----98111c9905da---4) ⭐️ 7.0/10

  > 越来越多的研究和实践经验表明，增加 LLM 的上下文窗口大小会因注意力稀释和“中间丢失”问题而降低智能体的可靠性，导致静默失败和更高成本。 这挑战了普遍认为更大上下文窗口总能提升 AI 性能的假设，迫使工程团队重新考虑对原始上下文大小的依赖，并采用更谨慎的上下文管理策略。 “中间丢失”问题描述了一种 U 形性能曲线：模型对提示开头和结尾的信息表现良好，但对中间的信息表现不佳，即使这些信息至关重要。

---

## ✍️ 表达提升

- [比尔·格利谈心智模型与系统思维](https://fs.blog/knowledge-project-podcast/bill-gurley/) ⭐️ 8.0/10

  > 资深投资者、前 Benchmark 合伙人比尔·格利在 Farnam Street 知识项目播客中分享了他的心智模型和系统思维见解。 这一集提供了可操作的框架来改善推理和决策，借鉴了格利在华尔街、Benchmark 以及 Uber 超速增长时期的经验。 格利目前担任圣塔菲研究所董事会成员，研究复杂性和系统思维；该播客可在 YouTube、Spotify、Apple Podcasts 上收听，并提供文字记录。

- [马克·平卡斯谈创新法则](https://fs.blog/knowledge-project-podcast/mark-pincus/) ⭐️ 6.0/10

  > Zynga 创始人马克·平卡斯在 Farnam Street 的播客节目中分享了他的创新法则，探讨如何通过平衡成熟想法、更好执行和新概念来打造成功产品。 这次讨论提供了一位塑造社交游戏行业的资深企业家的实用见解，为创新者和商业领袖评估和追求新机遇提供了框架。 该播客节目可在 YouTube、Spotify、Apple Podcasts 上收听，并附有文字稿。平卡斯详细阐述了他的创新方法，强调从成熟概念入手，再迭代出新东西的重要性。

- [RiseGuide 创始人谈专家引导的自我提升](https://nesslabs.com/riseguide-featured-tool?utm_source=rss&utm_medium=rss&utm_campaign=riseguide-featured-tool) ⭐️ 5.0/10

  > Ness Labs 发布了对 RiseGuide 创始人 Oleksandr Matsiuk 的采访，该应用提供个性化、专家引导的自我提升计划。 此次采访突显了自我提升领域结构化、专家策划学习路径的增长趋势，为用户提供了比通用建议更可靠的选择。 RiseGuide 将用户与专家连接以创建定制改进计划，但文章缺乏具体技术细节或性能指标。