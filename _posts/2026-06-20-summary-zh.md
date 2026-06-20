---
layout: default
title: "Horizon Summary: 2026-06-20 (ZH)"
date: 2026-06-20
lang: zh
---

> 从 124 条内容中筛选出 13 条重要资讯。

---

1. [芯片化量子通信网络突破 540 公里光纤传输距离](#item-1) ⭐️ 9.0/10
2. [苹果发布 Core AI，实现设备端生成式 AI](#item-2) ⭐️ 9.0/10
3. [英特尔与 AMD 推出 ACE 扩展，提升 x86 AI 效率](#item-3) ⭐️ 8.0/10
4. [英国团队攻克量子传感器激光噪声难题](#item-4) ⭐️ 8.0/10
5. [三维光纤微镊实现精密微操控](#item-5) ⭐️ 8.0/10
6. [中科院突破 3D DRAM 技术，展示 4 层 IGZO 2T0C 结构](#item-6) ⭐️ 8.0/10
7. [Bedrock 上的 Claude Fable 5 要求与 Anthropic 共享数据](#item-7) ⭐️ 8.0/10
8. [AWS 为 Cognito 增加多区域复制功能](#item-8) ⭐️ 7.0/10
9. [GLM 5.2：高努力级别用一半 Token 保留 98%智能](#item-9) ⭐️ 7.0/10
10. [在 24GB AMD GPU 上运行 Qwen 27B 模型并支持 131k 上下文](#item-10) ⭐️ 7.0/10
11. [用自然语言战术指令控制多智能体足球 AI](#item-11) ⭐️ 7.0/10
12. [英国拟强制社交平台推广本地新闻](#item-12) ⭐️ 6.0/10

---

<a id="item-1"></a>
## [芯片化量子通信网络突破 540 公里光纤传输距离](https://www.ithome.com/0/966/525.htm) ⭐️ 9.0/10

潘建伟团队成功演示了基于双场量子密钥分发（TF-QKD）协议的芯片化量子密钥分发网络，在 540 公里超低损耗光纤上实现了 2.93 bps 的安全成码率，超过无中继密钥容量 9 倍。该成果于 2026 年 6 月 19 日发表在《自然·光子学》上。 这一突破通过将关键组件集成到光子芯片上，降低了系统复杂度和成本，极大推动了量子通信的实用化部署。它为可扩展的、安全的量子网络铺平了道路，能够在城域和城际距离上服务大量用户。 芯片化发送端集成了基于氮化硅（Si3N4）微环谐振腔的自注入锁定激光器（线宽 100 Hz）和薄膜铌酸锂（TFLN）光子芯片（调制器带宽 25 GHz，半波电压 2.6 V，消光比 34 dB）。网络采用量子叶脊架构，支持灵活的用户连接和可扩展性。

rss · IT之家 · 6月20日 07:51

**背景**: 量子密钥分发（QKD）允许两方以信息论安全的方式共享密钥。双场 QKD（TF-QKD）突破了传统 QKD 的速率-距离限制，可实现更远距离，但要求两个独立激光器之间实现极其稳定的单光子干涉。芯片集成旨在减小 QKD 系统的尺寸、成本和复杂度。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://mozi.ustc.edu.cn/detail/418">量 子 密 钥 分 发 ：从BB84到 TF - QKD （上）</a></li>
<li><a href="https://www.nsfc.gov.cn/publish/portal0/tab1358/info93612.htm">我国学者成功实现基于本地频率参考的 双 场 量 子 密 钥 分 发</a></li>

</ul>
</details>

**标签**: `#quantum communication`, `#quantum key distribution`, `#photonics`, `#chip integration`, `#network security`

---

<a id="item-2"></a>
## [苹果发布 Core AI，实现设备端生成式 AI](https://www.infoq.com/news/2026/06/apple-core-ai-wwdc/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global) ⭐️ 9.0/10

在 WWDC 26 上，苹果宣布了 Core AI 框架，它取代了 Core ML，使开发者能够在设备端完全运行大语言模型和生成式 AI，无需任何服务器依赖。 这标志着从云端 AI 向设备端处理的重大转变，增强了隐私性、降低了延迟并消除了 token 成本，可能加速生成式 AI 在 iOS 和 macOS 应用中的普及。 Core AI 支持自定义转换的 PyTorch 模型和预优化的开源模型，专为 Apple Silicon 设计，并提供现代、内存安全的 Swift API。

rss · InfoQ · 6月20日 11:00

**背景**: Core ML 是苹果在 2017 年推出的机器学习框架，主要用于传统 ML 模型。随着生成式 AI 和大语言模型的兴起，苹果开发了 Core AI，以利用 Apple Silicon 的统一内存架构和神经网络引擎提供优化的设备端推理。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://developer.apple.com/core-ai/">Core AI - Apple Developer</a></li>
<li><a href="https://www.everydev.ai/tools/apple-core-ai">Core AI - Apple On-Device AI Framework | EveryDev. ai</a></li>
<li><a href="https://www.aimadetools.com/blog/core-ai-vs-core-ml/">Core AI vs Core ML: Which Apple Framework Should You Use in 2026?</a></li>

</ul>
</details>

**标签**: `#Apple`, `#Generative AI`, `#On-Device ML`, `#Core AI`, `#WWDC`

---

<a id="item-3"></a>
## [英特尔与 AMD 推出 ACE 扩展，提升 x86 AI 效率](https://www.tomshardware.com/pc-components/cpus/intel-and-amds-new-ace-cpu-extensions-bring-an-efficient-ai-oriented-instruction-set-to-x86-a-new-design-makes-matrix-multiplication-more-power-and-density-efficient) ⭐️ 8.0/10

英特尔和 AMD 联合宣布为 x86 处理器推出 AI 计算扩展（ACE），这是一套新的指令集，旨在加速矩阵乘法并支持低精度数据格式，从而提升 AI 工作负载的功耗和密度效率。 ACE 将原生 AI 加速引入通用 x86 CPU，减少了许多机器学习任务对独立 GPU 或专用加速器的依赖，这有望降低成本并扩大 AI 在数据中心和边缘设备中的采用。 ACE 与现有的 AVX10 向量扩展集成，专注于高效的矩阵乘法和低精度（如 INT8、BF16）数据类型，这些对神经网络推理和训练至关重要。

rss · Tom's Hardware · 6月20日 12:00

**背景**: 矩阵乘法是神经网络等 AI 工作负载的核心运算。传统的 x86 CPU 通过通用指令处理，效率较低。之前的扩展如英特尔的 AMX（高级矩阵扩展）已针对此问题，但 ACE 是英特尔和 AMD 的跨厂商标准，确保了 x86 平台上更广泛的兼容性和优化。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://overclock3d.net/news/cpu_mainboard/amd-and-intel-confirm-ace-ai-compute-extensions-for-x86/">AMD and Intel confirm "ACE" AI Compute Extensions for x86 - OC3D</a></li>
<li><a href="https://www.digitalcitizen.life/amd-and-intel-prepare-ace-extensions-to-make-future-x86-cpus-better-at-ai-workloads/">AMD And Intel Prepare ACE Extensions To Make Future x86 CPUs Better At AI Workloads</a></li>
<li><a href="https://x86ecosystem.org/wp-content/uploads/2026/03/ACE-Whitepaper-v1.pdf">The AI Compute Extensions (ACE) for x86</a></li>

</ul>
</details>

**标签**: `#CPU`, `#AI`, `#x86`, `#instruction set`, `#matrix multiplication`

---

<a id="item-4"></a>
## [英国团队攻克量子传感器激光噪声难题](https://www.ithome.com/0/966/546.htm) ⭐️ 8.0/10

由英国帝国理工学院领导的一个合作团队展示了一种差分测量技术，可消除原子干涉仪中的激光相位噪声，即使在单台设备测量被噪声淹没时也能恢复信号。该成果于 2026 年 6 月 17 日发表在《自然》杂志上。 这一突破消除了建造大规模量子传感器的主要障碍，使得探测来自暗物质和早期宇宙引力波的超弱信号成为可能。它为公里级原子干涉仪铺平了道路，这类设备有望探索标准模型之外的物理。 研究团队使用两团超冷锶-87 原子作为独立的干涉仪，共享同一台超稳定时钟激光。通过比较它们的输出，共同激光噪声被抵消，即使在故意加入额外噪声的情况下，灵敏度也达到了量子极限。

rss · IT之家 · 6月20日 11:43

**背景**: 原子干涉仪利用激光脉冲操控原子，测量由重力或加速度等力引起的微小相位偏移。然而，激光相位噪声通常远大于目标信号，限制了灵敏度。AION（原子干涉仪观测站与网络）项目旨在建造大规模干涉仪，以搜寻暗物质和引力波。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.hep.ph.ic.ac.uk/AION-Project/">AION @ Imperial: Home</a></li>
<li><a href="https://quantumzeitgeist.com/atom-interferometer-ukri-funds-aion/">UKRI Funds AION to Build First Large-Scale Atom Interferometer</a></li>

</ul>
</details>

**标签**: `#quantum sensing`, `#atomic interferometer`, `#dark matter`, `#gravitational waves`, `#physics research`

---

<a id="item-5"></a>
## [三维光纤微镊实现精密微操控](https://www.ithome.com/0/966/545.htm) ⭐️ 8.0/10

安徽大学与中国科学技术大学的研究团队利用飞秒激光 3D 打印技术研制出三维光纤微镊（OFG），相关成果于 2026 年 6 月 17 日发表在《自然》期刊上。该器件集光学与机械功能于一体，实现了高性能微操控。 这一突破填补了光镊与机械夹持器之间的空白，输出力是传统光镊的十万倍以上。它能够在受限空间内精确操控不透明物体和单细胞，在生物医学、先进制造和光子学等领域具有潜在应用。 该微镊尺寸为 38×38×61 μm³，通过双光子聚合 3D 打印技术在商用光纤端部一次性制造而成。它由刚性光刻胶微爪和掺杂银纳米颗粒的温敏响应水凝胶“肌肉”构成，力质量比达到约 340 μN/mg，较此前报道的光纤集成微镊提升了一到两个数量级。

rss · IT之家 · 6月20日 11:23

**背景**: 光镊技术利用聚焦光束形成光学势阱来捕获微粒，但作用力较弱且无法操控不透明物体；传统微夹持器虽能提供较大作用力，但体积大、系统复杂。飞秒激光 3D 打印基于双光子聚合原理，能够以亚微米分辨率制造任意三维微结构。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.nature.com/articles/s41586-026-10673-7">Optical fibre gripper for high-performance 3D micromanipulation</a></li>
<li><a href="https://www.azom.com/article.aspx?ArticleID=21355">What is Femtosecond Laser-Based 3D Printing?</a></li>
<li><a href="https://en.wikipedia.org/wiki/Two-photon_polymerization">Two-photon polymerization</a></li>

</ul>
</details>

**标签**: `#micromanipulation`, `#optical fiber`, `#femtosecond laser`, `#Nature`, `#nanotechnology`

---

<a id="item-6"></a>
## [中科院突破 3D DRAM 技术，展示 4 层 IGZO 2T0C 结构](https://www.ithome.com/0/966/543.htm) ⭐️ 8.0/10

中国科学院微电子研究所联合北京超弦设备研究院，首次展示了基于 IGZO 晶体管的 4 层 3D 2T0C DRAM，实现了 400 秒的数据保持时间和每单元 3 比特存储，相关成果已被 VLSI 2026 接收。 这一突破通过实现无电容器的单片 3D DRAM 集成，满足了 AI 和高性能计算对高密度、高带宽存储器的迫切需求，有望推动更紧凑、高效的存储方案，缩小逻辑与存储之间的性能差距。 新型 3D DRAM 采用双栅 IGZO 2T0C 单元和垂直字线架构，优化了读取裕度和稳定性。400 秒的数据保持时间远超传统 DRAM（毫秒级），而每单元 3 比特存储进一步提升了密度。

rss · IT之家 · 6月20日 10:33

**背景**: 传统 DRAM 采用 1T1C（一个晶体管、一个电容器）单元，电容器限制了微缩。2T0C（两个晶体管、零电容器）架构去除了电容器，利用 IGZO 晶体管极低的关态电流来存储电荷，从而可以在逻辑芯片上直接堆叠多层，实现更高的存储密度和带宽。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.electronicspecifier.com/products/memory/novel-2t0c-dynamic-random-access-memory-cell-architecture/">Novel 2 T 0 C dynamic random - access memory cell architecture</a></li>
<li><a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12101486/">3D stacked IGZO 2 T 0 C DRAM array with multibit capability for...</a></li>
<li><a href="https://semiengineering.com/baby-steps-towards-3d-dram/">Baby Steps Toward 3D DRAM</a></li>

</ul>
</details>

**标签**: `#3D DRAM`, `#IGZO`, `#semiconductor`, `#memory technology`, `#VLSI`

---

<a id="item-7"></a>
## [Bedrock 上的 Claude Fable 5 要求与 Anthropic 共享数据](https://www.infoq.com/news/2026/06/bedrock-fable-5-data-sharing/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global) ⭐️ 8.0/10

在 Amazon Bedrock 上使用 Claude Fable 5 或 Mythos 5 现在需要选择加入 provider_data_share，将提示和输出发送给 Anthropic 进行 30 天保留并接受人工审查。发布三天后，Anthropic 因美国出口管制合规要求 AWS 撤销了对这两个模型的访问权限。 这打破了之前推理数据保留在 AWS 边界内的惯例，给企业带来了重大的数据隐私和合规问题。突然的访问撤销也削弱了信任，可能影响 Anthropic 模型在 Bedrock 上的采用。 数据共享必须通过 Data Retention API 启用，启动时没有控制台界面。Anthropic 以美国出口管制合规为由撤销访问权限，但未详细说明具体的出口管制担忧。

rss · InfoQ · 6月20日 09:03

**背景**: Amazon Bedrock 是一项托管服务，通过 API 提供对来自不同提供商的基础模型的访问。此前，Bedrock 不与第三方模型提供商共享推理数据，AWS 声明其不存储或共享客户数据。Anthropic 的 Claude 模型以注重安全的设计而闻名，但这一数据共享要求代表了政策上的转变。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.infoq.com/news/2026/06/bedrock-fable-5-data-sharing/">Claude Fable 5 on Bedrock Requires Sharing Inference Data ...</a></li>
<li><a href="https://docs.aws.amazon.com/bedrock/latest/userguide/model-card-anthropic-claude-fable-5.html">Claude Fable 5 - Amazon Bedrock</a></li>
<li><a href="https://www.repost.aws/knowledge-center/amazon-bedrock-model-data-use">Does Amazon Bedrock share input and output data with model ...</a></li>

</ul>
</details>

**标签**: `#AI`, `#data privacy`, `#AWS`, `#Anthropic`, `#compliance`

---

<a id="item-8"></a>
## [AWS 为 Cognito 增加多区域复制功能](https://www.infoq.com/news/2026/06/cognito-replication-aws/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global) ⭐️ 7.0/10

AWS 为 Amazon Cognito 引入了多区域复制功能，能够将近实时地将用户身份和用户池配置从主区域自动同步到备用区域。 该功能可在区域故障期间实现用户身份验证的自动故障转移，无需自定义复制和故障转移机制，从而显著提升 AWS 客户应用的韧性。 复制内容包括用户凭证、用户池配置和联合身份设置，在故障转移期间用户无需强制重置密码即可继续验证。

rss · InfoQ · 6月20日 07:40

**背景**: Amazon Cognito 是一项面向 Web 和移动应用的托管身份服务。此前，Cognito 用户池是区域资源，没有内置的全局复制功能，多区域灾难恢复较为困难。新功能通过提供自动复制和故障转移填补了这一空白。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://aws.amazon.com/blogs/aws/improve-your-application-resilience-with-amazon-cognito-multi-region-replication/">Improve your application resilience with Amazon Cognito multi-Region replication | Amazon Web Services</a></li>
<li><a href="https://aws.amazon.com/about-aws/whats-new/2026/06/amazon-cognito-multi-region/">Amazon Cognito now supports multi-Region replication - AWS</a></li>
<li><a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-multi-region.html">Multi-Region replication for user pools - Amazon Cognito</a></li>

</ul>
</details>

**标签**: `#AWS`, `#Cognito`, `#multi-region replication`, `#disaster recovery`, `#authentication`

---

<a id="item-9"></a>
## [GLM 5.2：高努力级别用一半 Token 保留 98%智能](https://www.reddit.com/r/LocalLLaMA/comments/1uar4e2/glm_52_98_of_max_level_intelligence_with_less/) ⭐️ 7.0/10

GLM 5.2 的“高”努力级别使用的 Token 不到“最高”级别的一半，同时在编码任务中达到最高级别智能的 98%，如 z.ai 技术报告所示。 这种 Token 效率使 GLM 5.2 对硬件有限的本地用户更易用，减少了等待时间和计算成本，同时保持接近最高的性能。 “高”努力级别使用约 6k Token，而“最高”级别使用 36.7k Token，实际答案质量差异通常可忽略不计。但结果可能因量化（如 Q4）和具体任务而异。

reddit · r/LocalLLaMA · /u/perelmanych · 6月20日 08:19

**背景**: GLM 5.2 是一个开源大语言模型，拥有 1M Token 的上下文窗口，专为长周期编码任务设计。它使用推理 Token 进行思维链处理，其努力级别控制允许用户在能力与速度、成本之间进行权衡。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://openlm.ai/glm-5.2/">GLM-5.2 | OpenLM.ai</a></li>
<li><a href="https://z.ai/blog/glm-5.2">GLM-5.2: Built for Long-Horizon Tasks - z.ai</a></li>
<li><a href="https://docs.z.ai/guides/llm/glm-5.2">GLM-5.2 - Overview - Z.AI DEVELOPER DOCUMENT</a></li>

</ul>
</details>

**社区讨论**: Reddit 用户报告称，经过测试，对于一道数学题，“高”级别产生的答案与“最高”级别非常相似，主要区别在于呈现方式而非正确性。他们建议日常使用“高”级别，仅在需要完美结果时使用“最高”级别。

**标签**: `#GLM 5.2`, `#token efficiency`, `#local LLM`, `#reasoning tokens`, `#AI inference`

---

<a id="item-10"></a>
## [在 24GB AMD GPU 上运行 Qwen 27B 模型并支持 131k 上下文](https://www.reddit.com/r/LocalLLaMA/comments/1uar6in/7900xtx_24gb_vram_can_finally_fit_q6kmtp_with/) ⭐️ 7.0/10

该方法显著扩展了消费级 AMD GPU 上本地 LLM 推理的实际上下文窗口，使得无需依赖云端即可进行长文档分析或长时间对话等任务。 用户使用 -DGGML_CUDA_FA_ALL_QUANTS=true 编译 llama.cpp，并采用 -ctk q5_0 -ctv q4_0 进行 KV 缓存量化，相比 Q8 减少了约 12%的显存占用，精度损失仅为 1.6%。

reddit · r/LocalLLaMA · /u/soyalemujica · 6月20日 08:23

**背景**: 大型语言模型需要大量显存来存储模型权重和键值（KV）缓存，后者随上下文长度增长。KV 缓存量化通过使用更低精度的数字来减少缓存的内存占用，从而在有限硬件上支持更长的上下文。Q6K 量化是一种 GGUF 格式，在模型大小和质量之间取得平衡。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://github.com/ggml-org/llama.cpp">GitHub - ggml-org/llama.cpp: LLM inference in C/C++</a></li>
<li><a href="https://huggingface.co/blog/kv-cache-quantization">Unlocking Longer Generation with Key-Value Cache Quantization</a></li>
<li><a href="https://ggufbench.com/knowledge/quantization/">Understanding Quantization — GGUF Bench</a></li>

</ul>
</details>

**标签**: `#local-llm`, `#amd-gpu`, `#vram-optimization`, `#llama.cpp`, `#qwen`

---

<a id="item-11"></a>
## [用自然语言战术指令控制多智能体足球 AI](https://www.reddit.com/r/LocalLLaMA/comments/1uawkdg/research_project_injecting_naturallanguage/) ⭐️ 7.0/10

一个名为 Football Tactical AI 的研究项目探索使用自然语言指令（如“积极逼抢”）来指导多智能体足球策略，AI 球员根据人类的高层意图调整行为。 这项工作连接了自然语言处理和多智能体强化学习，为足球之外的复杂团队协调任务提供了更直观的人机交互范式。 该项目将人类意图视为持续的控制接口而非一次性命令，要求智能体在遵循战术目标的同时保持对局部情况的适应性。测试环境选择足球，因其时间跨度长且需要团队级协调。

reddit · r/LocalLLaMA · /u/Working_Original9624 · 6月20日 13:24

**背景**: 多智能体强化学习（MARL）训练多个智能体在共享环境中协作或竞争。近期工作如 LangMARL 使用自然语言进行信用分配和策略改进。该项目将这一思路扩展为人类在环教练场景中的高层控制接口。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://github.com/Yabyeab9/football-tactical-ai">GitHub - Yabyeab9/ football - tactical - ai : AI platform for tactical style...</a></li>
<li><a href="https://arxiv.org/abs/2604.00722">LangMARL: Natural Language Multi-Agent Reinforcement Learning Safe Multi-agent Reinforcement Learning with Natural Language ... A hierarchical multi-agent reinforcement learning framework ... TalkToAgent: A multi-agent LLM Framework for natural language ... GitHub - yuqian2003/Co_Learning: This repository hosts the ... Multi-Agent Reinforcement Learning in AI - GeeksforGeeks</a></li>

</ul>
</details>

**标签**: `#multi-agent systems`, `#natural language processing`, `#reinforcement learning`, `#AI research`

---

<a id="item-12"></a>
## [英国拟强制社交平台推广本地新闻](https://36kr.com/newsflashes/3861056590222342?f=rss) ⭐️ 6.0/10

英国政府计划强制 YouTube、Meta 等社交媒体平台提升本地新闻内容的曝光权重，预计最早于本月就相关规则展开公众咨询。 这项政策可能重塑新闻在线分发方式，有望扩大地方新闻的覆盖面，同时给全球科技平台带来新的义务。 相关规则将要求 BBC、ITV、Channel 4 等公共服务广播机构增加新闻内容供给，并可能延伸至全国性及区域性报纸。细节仍在最终敲定中。

rss · 36氪 · 6月20日 07:33

**背景**: 社交媒体平台因优先展示用户生成内容而减少新闻（尤其是地方新闻）的曝光度而受到批评。英国一直积极监管在线平台，包括《在线安全法》。此举旨在支持面临财务困境的地方新闻业。

**标签**: `#policy`, `#social media`, `#news`, `#UK`, `#regulation`

---

---

## 🔭 未知的未知

- [“创伤”一词在现代语言中的滥用](https://aeon.co/essays/not-everything-is-trauma-language-needs-to-mean-something) ⭐️ 4.0/10

  > 莉莉·邓恩的文章指出，“创伤”一词在流行话语中被过度使用和稀释，失去了其原本指代真实心理体验的含义。 这很重要，因为语言塑造了我们理解和回应痛苦的方式；重新定义“创伤”有助于保留其临床意义，防止对严重经历的轻描淡写。 文章对比了真正的创伤（如战争或虐待所致）与如今被贴上“创伤”标签的日常压力，并呼吁回归精确的语言使用。