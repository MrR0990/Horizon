---
layout: default
title: "Horizon Summary: 2026-06-20 (ZH)"
date: 2026-06-20
lang: zh
---

> 从 258 条内容中筛选出 30 条重要资讯。

---

1. [芯片化量子网络实现 540 公里光纤传输](#item-1) ⭐️ 9.0/10
2. [苹果发布 Core AI，支持设备端生成式 AI](#item-2) ⭐️ 9.0/10
3. [三维光纤微镊输出力达传统光镊十万倍](#item-3) ⭐️ 9.0/10
4. [英特尔与 AMD 联合推出 ACE 扩展，提升 x86 AI 效率](#item-4) ⭐️ 8.0/10
5. [英国科学家攻克量子传感器激光噪声难题](#item-5) ⭐️ 8.0/10
6. [中科院突破 3D DRAM：4 层 2T0C 结构，数据保持 400 秒](#item-6) ⭐️ 8.0/10
7. [LM Studio 与苹果用四台 Mac Studio 运行万亿参数 Kimi K2.6](#item-7) ⭐️ 8.0/10
8. [Bedrock 上的 Claude Fable 5 要求与 Anthropic 共享数据](#item-8) ⭐️ 8.0/10
9. [AWS 为 Amazon Cognito 增加多区域复制功能](#item-9) ⭐️ 7.0/10
10. [AMD 将在 7 月通过 BIOS 更新恢复 Ryzen 9000 的 TSME](#item-10) ⭐️ 7.0/10
11. [CSSQuake：纯 CSS 地震模拟演示](#item-11) ⭐️ 6.0/10

---

<a id="item-1"></a>
## [芯片化量子网络实现 540 公里光纤传输](https://www.ithome.com/0/966/525.htm) ⭐️ 9.0/10

潘建伟团队在 2026 年 6 月 19 日发表于《自然·光子学》的论文中，展示了基于双场量子密钥分发（TF-QKD）协议的芯片化量子通信网络，在 540 公里光纤上实现了 2.93 bps 的安全成码率。 这一突破将关键组件集成到光子芯片上，降低了系统复杂度，为实现可扩展的城域和城际安全量子通信网络铺平了道路。 发送端芯片集成了基于氮化硅微环谐振腔的自注入锁定激光器（线宽 100 Hz）和薄膜铌酸锂光子集成芯片（调制带宽 25 GHz，半波电压 2.6 V，消光比 34 dB）。网络采用量子叶脊架构，支持灵活的用户连接。

rss · IT之家 · 6月20日 07:51

**背景**: 量子密钥分发（QKD）利用量子力学原理共享加密密钥，可实现理论上无条件安全的通信。双场量子密钥分发（TF-QKD）突破了传统 QKD 的速率-距离极限，但要求两个独立激光器之间实现极其稳定的单光子干涉，使得芯片集成面临挑战。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://zhuanlan.zhihu.com/p/442820084">TF-QKD（双场量子密钥分发协议） - 知乎</a></li>
<li><a href="https://baike.baidu.com/item/双场量子密钥分发/57520215">双场量子密钥分发_百度百科</a></li>
<li><a href="https://www.oe1.com/article/7138965622546333696.html">单频半导体激光器研究取得进展：氮化硅微谐振器大大提高半导体激光器性能_行业应用-光电查</a></li>

</ul>
</details>

**标签**: `#quantum communication`, `#quantum key distribution`, `#photonics`, `#network security`

---

<a id="item-2"></a>
## [苹果发布 Core AI，支持设备端生成式 AI](https://www.infoq.com/news/2026/06/apple-core-ai-wwdc/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global) ⭐️ 9.0/10

在 WWDC 26 上，苹果宣布了 Core AI，作为 Core ML 的继任者，使开发者能够在设备上完全运行大型语言模型和生成式 AI，并针对 Apple Silicon 进行了优化。 Core AI 提供了内存安全的 Swift API，支持自定义 PyTorch 模型和预优化的开源模型，并包含 Core AI Optimization 和 Core AI PyTorch Extensions 等工具，用于将模型转换为.aimodel 格式。

rss · InfoQ · 6月20日 11:00

**背景**: 苹果此前使用 Core ML 进行设备端机器学习，但 Core ML 并非为大型语言模型设计。Apple Silicon 的统一内存架构使得大型模型能够在设备上高效运行，例如在 M1 Max 上以约 33 tokens/s 的速度运行 Llama 3.1 8B。Core AI 在此基础上构建了专用框架。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://developer.apple.com/core-ai/">Core AI - Apple Developer</a></li>
<li><a href="https://developer.apple.com/documentation/coreai">Core AI | Apple Developer Documentation</a></li>
<li><a href="https://machinelearning.apple.com/research/core-ml-on-device-llama">On Device Llama 3.1 with Core ML - Apple Machine Learning Research</a></li>

</ul>
</details>

**标签**: `#Apple`, `#Core AI`, `#Generative AI`, `#On-Device ML`, `#WWDC`

---

<a id="item-3"></a>
## [三维光纤微镊输出力达传统光镊十万倍](https://36kr.com/newsflashes/3861209206740228?f=rss) ⭐️ 9.0/10

安徽大学与中国科学技术大学的研究团队利用飞秒激光加工技术在商用光纤端部构建了一种三维光纤微镊，其输出力是传统光镊的十万倍以上。该成果于 2025 年 6 月 17 日发表在《自然》期刊上。 这一突破实现了对微米尺度物体（包括不透明颗粒和单细胞）的高精度、低损伤操控，且作用力远超传统光镊。它为微组装、生物医学取样以及受限空间内的微创手术开辟了新的可能性。 该器件尺寸仅为 38×38×61 μm³，由刚性光刻胶微爪和掺杂银纳米颗粒的温敏响应水凝胶“肌肉”集成而成。它通过双光子聚合 3D 打印一步制造完成，力质量比达到约 340 μN/mg，较此前报道的光纤集成微镊提升了一到两个数量级。

rss · 36氪 · 6月20日 08:42

**背景**: 光镊利用高度聚焦的激光束捕获和操控微观粒子，但通常只能产生皮牛量级的力，且无法操控不透明物体。传统的机械微夹持器能提供更大的力，但体积大且系统复杂。这种新型光纤微镊通过将光传输、光热转换和软材料驱动集成在单个光纤端部，克服了这些限制。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Optical_tweezers">Optical tweezers</a></li>
<li><a href="https://www.sciencedirect.com/science/article/abs/pii/S0030399224001397">Optical fiber tweezers: From fabrication to applications - ScienceDirect</a></li>
<li><a href="https://www.frontiersin.org/journals/chemistry/articles/10.3389/fchem.2022.1051061/full">Frontiers | Emerging applications of femtosecond laser fabrication in...</a></li>

</ul>
</details>

**标签**: `#optical tweezers`, `#femtosecond laser`, `#micro-manipulation`, `#Nature`, `#photonics`

---

<a id="item-4"></a>
## [英特尔与 AMD 联合推出 ACE 扩展，提升 x86 AI 效率](https://www.tomshardware.com/pc-components/cpus/intel-and-amds-new-ace-cpu-extensions-bring-an-efficient-ai-oriented-instruction-set-to-x86-a-new-design-makes-matrix-multiplication-more-power-and-density-efficient) ⭐️ 8.0/10

英特尔与 AMD 联合发布了 AI 计算扩展（ACE）的完整规范，这是一套面向 x86 CPU 的新指令集，可加速 AI 和机器学习工作负载中的矩阵乘法运算。 ACE 为整个 x86 生态带来了标准化、高能效的矩阵加速能力，使 CPU 无需依赖专用 GPU 或 NPU 即可获得更好的 AI 性能，这有望推动 AI 推理在主流硬件上的普及。 ACE 与 AVX10 无缝集成，其设计相比使用通用 AVX 指令进行矩阵运算更加节能且密度更高。该规范由英特尔和 AMD 于 2024 年成立的 x86 生态系统咨询小组制定。

rss · Tom's Hardware · 6月20日 12:00

**背景**: 矩阵乘法是 AI 工作负载的核心运算，但传统的 x86 指令（如 AVX）并非为二维矩阵运算设计，导致效率低下。ACE 提供了专用的矩阵指令，以提升性能并降低功耗。这是将 AI 加速能力融入通用 CPU 这一大趋势的一部分。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.tomshardware.com/pc-components/cpus/intel-and-amds-new-ace-cpu-extensions-bring-an-efficient-ai-oriented-instruction-set-to-x86-a-new-design-makes-matrix-multiplication-more-power-and-density-efficient">Intel and AMD's new ACE CPU extensions bring an efficient AI-oriented instruction set to x86 — a new design makes matrix multiplication more power- and density-efficient | Tom's Hardware</a></li>
<li><a href="https://overclock3d.net/news/cpu_mainboard/amd-and-intel-confirm-ace-ai-compute-extensions-for-x86/">AMD and Intel confirm “ACE” AI Compute Extensions for x86</a></li>
<li><a href="https://x86ecosystem.org/wp-content/uploads/2026/03/ACE-Whitepaper-v1.pdf">The AI Compute Extensions (ACE) for x86</a></li>

</ul>
</details>

**标签**: `#CPU`, `#AI`, `#x86`, `#instruction set`, `#hardware`

---

<a id="item-5"></a>
## [英国科学家攻克量子传感器激光噪声难题](https://www.ithome.com/0/966/546.htm) ⭐️ 8.0/10

由英国帝国理工学院领导的研究团队展示了一种差分原子干涉仪，能够消除激光相位噪声，即使在人为添加噪声的条件下也能达到量子极限灵敏度。该成果于 2026 年 6 月 17 日发表在《自然》杂志上。 这一突破消除了建造公里级原子干涉仪的主要障碍，这种干涉仪能够探测早期宇宙的引力波和现有探测器无法触及的暗物质信号。它为 AION 计划及类似的国际合作项目铺平了道路。 研究团队使用两团超冷锶-87 原子作为独立的干涉仪，共享同一台超稳定时钟激光。通过比较两者的测量结果，共同激光噪声被抵消，即使在单台设备数据被噪声淹没时也能恢复信号。系统运行在标准量子极限水平。

rss · IT之家 · 6月20日 11:43

**背景**: 原子干涉仪利用原子的波动性进行超精密测量，但依赖的激光脉冲会引入远大于目标信号的相位噪声。差分测量技术抵消了这种共同噪声，从而能够探测来自暗物质或引力波的微弱信号。AION 计划旨在英国建造长基线原子干涉仪。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.nature.com/articles/s41586-026-10617-1">A prototype differential atom interferometer for fundamental physics | Nature</a></li>
<li><a href="https://phys.org/news/2026-06-quantum-sensor-major-obstacle-dark.html">Quantum sensor overcomes major obstacle in search for dark matter...</a></li>
<li><a href="https://www.hep.ph.ic.ac.uk/AION-Project/">AION @ Imperial: Home</a></li>

</ul>
</details>

**标签**: `#quantum sensing`, `#atom interferometry`, `#dark matter`, `#gravitational waves`, `#physics research`

---

<a id="item-6"></a>
## [中科院突破 3D DRAM：4 层 2T0C 结构，数据保持 400 秒](https://www.ithome.com/0/966/543.htm) ⭐️ 8.0/10

中国科学院微电子研究所的研究人员首次展示了基于 IGZO 的 4 层 3D 2T0C DRAM，实现了 400 秒的数据保持时间和每单元 3 比特存储，该成果已被 VLSI 2026 收录。 这一突破实现了直接在逻辑芯片上集成高密度、高带宽存储器，解决了 AI 和高性能计算中的存储墙问题。它为用更可扩展的方案替代传统 SRAM 和片外 DRAM 提供了路径。 该 3D DRAM 采用双栅 IGZO 2T0C 单元和垂直字线架构，针对读取裕度和稳定性进行了优化。4 层堆叠通过单步高层三维集成方案制造，实现了每单元 3 比特和 400 秒保持时间。

rss · IT之家 · 6月20日 10:33

**背景**: 传统 DRAM 采用 1T1C（一个晶体管、一个电容器）单元，面临缩放限制。2T0C DRAM 去除了电容器，用两个晶体管实现存储和读取，并可使用 IGZO（一种透明氧化物半导体）制造，允许低温工艺并集成在逻辑芯片之上。3D 堆叠通过垂直堆叠存储单元层进一步提高密度。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.science.org/doi/10.1126/sciadv.adu4323">3D stacked IGZO 2T0C DRAM array with multibit ... - AAAS</a></li>
<li><a href="https://en.wikipedia.org/wiki/Indium_gallium_zinc_oxide">Indium gallium zinc oxide - Wikipedia</a></li>

</ul>
</details>

**标签**: `#3D DRAM`, `#IGZO`, `#semiconductor`, `#memory technology`, `#VLSI`

---

<a id="item-7"></a>
## [LM Studio 与苹果用四台 Mac Studio 运行万亿参数 Kimi K2.6](https://www.ithome.com/0/966/539.htm) ⭐️ 8.0/10

LM Studio 与苹果合作，在四台 Mac Studio 组成的集群上成功运行了万亿参数的 Kimi K2.6 模型，利用苹果的内存共享和 Thunderbolt 5 RDMA 技术汇聚了约 1.5 TB 的统一内存，并通过 LM Link 从 MacBook Neo 和 iPhone 演示了安全远程访问。 这一成就表明，Mac Studio 等消费级硬件可以本地运行前沿规模的 AI 模型，减少对昂贵云 GPU 集群的依赖，并以实用速度实现私密、设备端的 AI 推理。 Kimi K2.6 模型采用混合专家（MoE）架构，总参数 1 万亿，但每次前向传播仅激活 320 亿参数，在集群上可实现约 28 tokens/s 的生成速度。LM Link 提供端到端加密连接用于远程访问，数据保持本地化处理。

rss · IT之家 · 6月20日 09:37

**背景**: 大型语言模型通常需要功耗巨大的 GPU 集群。MoE 架构通过每次只激活部分参数来降低计算成本。苹果的 Thunderbolt 5 RDMA 技术允许多台 Mac 共享内存形成统一池，使得在多个消费级设备上运行大模型成为可能。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://lmstudio.ai/link">LM Link • Use your local models, remotely. | LM Studio</a></li>
<li><a href="https://www.jeffgeerling.com/blog/2025/15-tb-vram-on-mac-studio-rdma-over-thunderbolt-5/">1.5 TB of VRAM on Mac Studio - RDMA over Thunderbolt 5</a></li>
<li><a href="https://intuitionlabs.ai/articles/kimi-k2-technical-deep-dive">Kimi K2 Explained: A Technical Deep Dive into its MoE ...</a></li>

</ul>
</details>

**标签**: `#AI/ML`, `#Apple`, `#Large Language Models`, `#Local Inference`, `#Hardware`

---

<a id="item-8"></a>
## [Bedrock 上的 Claude Fable 5 要求与 Anthropic 共享数据](https://www.infoq.com/news/2026/06/bedrock-fable-5-data-sharing/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global) ⭐️ 8.0/10

在 Amazon Bedrock 上使用 Claude Fable 5 或 Mythos 5 现在需要选择加入 provider_data_share，将提示和输出发送给 Anthropic 进行 30 天保留并有人工审核，打破了以往的数据边界实践。发布三天后，Anthropic 以美国出口管制合规为由要求 AWS 撤销对这两个模型的访问权限。 这一变化对 AWS Bedrock 用户具有重大的数据隐私和合规影响，因为它要求与第三方模型提供商共享推理数据，与之前的保证相悖。随后的访问撤销请求为部署这些模型的企业增加了紧迫性和不确定性。 provider_data_share 设置是访问 Claude Fable 5 和 Mythos 5 所必需的，并且在发布时没有用于配置它的控制台 UI。Anthropic 在模型可用三天后以美国出口管制合规为由请求撤销访问权限。

rss · InfoQ · 6月20日 09:03

**背景**: Amazon Bedrock 是一项托管服务，通过 API 提供来自不同提供商的基础模型访问。此前，Bedrock 不与模型提供商共享客户推理数据，将数据保留在 AWS 边界内。Claude Fable 5 和 Mythos 5 是 Anthropic 开发的先进 AI 模型，旨在用于漏洞发现等任务。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://docs.aws.amazon.com/bedrock/latest/userguide/data-retention.html">Data retention - Amazon Bedrock</a></li>
<li><a href="https://docs.aws.amazon.com/bedrock/latest/userguide/data-protection.html">Data protection - Amazon Bedrock</a></li>
<li><a href="https://www.repost.aws/knowledge-center/amazon-bedrock-model-data-use">Learn how Amazon Bedrock uses model input and output data | AWS re:Post</a></li>

</ul>
</details>

**标签**: `#AI`, `#AWS`, `#data privacy`, `#Anthropic`, `#compliance`

---

<a id="item-9"></a>
## [AWS 为 Amazon Cognito 增加多区域复制功能](https://www.infoq.com/news/2026/06/cognito-replication-aws/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global) ⭐️ 7.0/10

AWS 为 Amazon Cognito 推出了多区域复制功能，允许用户身份和配置从主区域自动复制到辅助区域，从而在故障期间实现自动故障转移。 该功能通过为身份验证提供内置的灾难恢复能力，显著提高了应用程序的弹性，降低了多区域设置的运营复杂性，并确保在区域故障期间用户能够持续访问。 自动故障转移需要自定义域名，且密码锁定次数不会跨区域同步。该功能作为 Essentials 或 Plus 层的附加组件提供，支持超过 16 个 AWS 区域。

rss · InfoQ · 6月20日 07:40

**背景**: Amazon Cognito 是面向 Web 和移动应用程序的托管身份服务。此前，实现多区域弹性需要自定义复制和故障转移机制。这项新的原生能力简化了高可用性身份验证架构。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://aws.amazon.com/blogs/aws/improve-your-application-resilience-with-amazon-cognito-multi-region-replication/">Improve your application resilience with Amazon Cognito ...</a></li>
<li><a href="https://aws.amazon.com/about-aws/whats-new/2026/06/amazon-cognito-multi-region/">Amazon Cognito now supports multi - Region replication - AWS</a></li>
<li><a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-multi-region.html">Multi-Region replication for user pools - Amazon Cognito</a></li>

</ul>
</details>

**标签**: `#AWS`, `#Cognito`, `#multi-region replication`, `#disaster recovery`, `#authentication`

---

<a id="item-10"></a>
## [AMD 将在 7 月通过 BIOS 更新恢复 Ryzen 9000 的 TSME](https://www.reddit.com/r/hardware/comments/1uasog2/amd_will_reinstate_memory_encryption_on_ryzen/) ⭐️ 7.0/10

AMD 宣布将在 2025 年 7 月通过 BIOS 更新恢复 Ryzen 9000 系列 CPU 的透明安全内存加密（TSME），此前该功能的移除引发了社区强烈反对。 这一逆转表明 AMD 对用户反馈的重视，并恢复了一项重要的硬件级安全功能，可防御物理内存攻击，惠及所有 Ryzen 9000 用户。 该 BIOS 更新将重新启用 TSME，此前该功能已从非 PRO 版 Ryzen 9000 型号中移除；该功能可透明地加密所有内存流量，无需操作系统支持即可提供保护。

reddit · r/hardware · /u/sr_local · 6月20日 09:58

**背景**: 透明 SME（TSME）是 AMD 的一项技术，可加密系统内存中的所有数据，以防御冷启动或总线嗅探等物理攻击。它与标准 SME 不同，后者需要操作系统/虚拟机管理程序支持页面级加密。TSME 最初在 Ryzen 9000 系列上可用，但在之前的 BIOS 更新中被移除，引发了社区批评。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.vpsbg.eu/blog/amd-secure-cloud-hosting-sev-tsme-sme">AMD’s secure CPUs & cloud hosting - SEV, TSME & SME - VPSBG.eu</a></li>
<li><a href="https://docs.enclaive.cloud/confidential-cloud/technology-in-depth/amd-sev/technology/sme-concepts">SME Concepts | Confidential Computing 101</a></li>
<li><a href="https://www.neowin.net/news/bios-update-gives-amd-ryzen-9000-cpus-windows-performance-boost-via-latency-reduction/">BIOS update gives AMD Ryzen 9000 CPUs Windows performance ... GIGABYTE Latest BIOS Update Preps AM5 Motherboard for Next ... AMD will reinstate memory encryption on Ryzen 9000 CPUs ... BIOSTAR Releases New UEFI Firmware Updates for AMD Ryzen 9000 ...</a></li>

</ul>
</details>

**社区讨论**: r/hardware 的讨论非常积极，用户称赞 AMD 听取了反馈。一些评论者指出，移除可能是一个疏忽，并对注重安全的用户能够再次启用 TSME 表示欣慰。

**标签**: `#AMD`, `#Ryzen`, `#memory encryption`, `#hardware security`, `#BIOS`

---

<a id="item-11"></a>
## [CSSQuake：纯 CSS 地震模拟演示](https://cssquake.com/) ⭐️ 6.0/10

CSSQuake 是一个轻量级的纯 CSS 地震模拟演示，仅使用 CSS 动画和变换来创建网页抖动效果，无需任何 JavaScript。 该演示展示了 CSS 作为独立技术实现交互体验的创意潜力，激励前端开发者探索 CSS 超越传统样式的能力。 该演示依赖 CSS 关键帧动画和变换来模拟地震振动，部分用户指出退出效果等交互可能需要 JavaScript。

hackernews · msalsas · 6月20日 10:49 · [社区讨论](https://news.ycombinator.com/item?id=48608223)

**背景**: CSS（层叠样式表）主要用于网页样式设计，但借助动画和变换等现代特性，开发者可以在无需 JavaScript 的情况下创建复杂的视觉效果。该演示属于纯 CSS 创意项目趋势的一部分，推动了 CSS 能力的边界。

**社区讨论**: 评论普遍积极且有趣，用户表达了喜爱和好奇。部分用户质疑该演示是否真正纯 CSS，指出退出功能可能需要 JavaScript，而其他用户则赞赏 CSS 的创意运用。

**标签**: `#CSS`, `#creative coding`, `#web demo`, `#frontend`

---

---

## 🔭 未知的未知

- [人造岩石：一种新地质学](https://aeon.co/essays/the-strange-rocks-that-wouldnt-exist-without-us) ⭐️ 9.0/10

  > 这篇文章介绍了由人类活动形成的新型岩石——塑质砾岩和技术化石，它们挑战了传统地质学分类，并提出了人类世地质学这一新领域。 这很重要，因为它重新定义了我们对人类影响地球物质记录的理解，可能影响环境政策、废物管理和未来地质学分类。 塑质砾岩是塑料熔化并与沙、岩石等天然材料融合形成的，而技术化石则是可能作为化石存续数百万年的人造物体。

- [尼克·兰德加速主义：后人类未来的黑暗愿景](https://aeon.co/essays/what-is-nick-lands-philosophy-of-accelerationism-really) ⭐️ 9.0/10

  > Vincent Lê 在 Aeon 上发表的文章探讨了尼克·兰德的加速主义哲学，该哲学认为技术和资本主义力量将不可避免地导致一个超越人类控制的后人类未来。 这一哲学为理解技术和社会的发展轨迹提供了激进的视角，影响了科技文化和极端主义意识形态。它挑战了在加速技术变革面前人类能动性的假设。 兰德的作品借鉴了后结构主义、控制论和反人本主义，他被认为是加速主义的普及者。文章强调，他看似矛盾的立场源于对以人为中心的思想的一贯批判。

- [被遗忘的女裁缝发明了水族箱并研究了章鱼智力](https://www.themarginalian.org/2026/06/14/jeanne-villepreux-power-argonaut/) ⭐️ 9.0/10

  > 一篇新文章重点介绍了 19 世纪由女裁缝转型为博物学家的 Jeanne Villepreux-Power，她于 1832 年发明了第一个玻璃水族箱，并在船蛸研究上取得开创性发现，证明其自行制造外壳，为章鱼智力研究奠定了基础。 这个故事通过恢复一位自学成才女性的贡献，挑战了传统的科学天才叙事，重塑了我们对海洋生物学历史以及谁能成为科学家的理解。 Villepreux-Power 于 1832 年发明的水族箱早于其他被认可的发明者，她对 Argonauta argo 的研究解决了关于船蛸是获取还是自行制造外壳的世纪争论。

- [“创伤”一词的语义膨胀](https://aeon.co/essays/not-everything-is-trauma-language-needs-to-mean-something) ⭐️ 8.0/10

  > 莉莉·邓恩在 Aeon 上的文章指出，“创伤”一词在日常语言中被过度使用而意义稀释，失去了其特定的临床含义，并呼吁恢复其精确意义。 这很重要，因为“创伤”的过度使用可能淡化真正的心理痛苦，阻碍关于心理健康的有效沟通，影响临床实践和公众理解。 文章借助语言学和心理学批评“创伤”的语义膨胀，指出它现在被用来描述从严重虐待到轻微不便的一切，并强调精确语言的重要性。

---

## 🧬 人性与行为

- [超迷信挑战理性](https://www.lesswrong.com/posts/KDbdkvenK3DCTeL6t/hyperstition-as-the-natural-enemy-of-rationality) ⭐️ 9.0/10

  > 一篇 LessWrong 文章指出，超迷信（即因被相信而成为真的信念）对理性构成了根本性挑战，因为持有无根据的信念有时比追求真理能带来更好的结果。 这一见解揭示了理性与实用主义之间的深层张力，表明理性的求真有时在实现理想社会结果方面可能不如有动机的虚假信念。 文章引用了 Scott Alexander 的《病态思维》和 Eliezer Yudkowsky 的《为什么我们这类人无法合作》，来说明后果主义推理如何破坏依赖于无根据信念的有益社会均衡。

- [超级智能 AI 为何可能拒绝道德](https://www.lesswrong.com/posts/dyyEo6nYcYr9XNXLC/why-should-ai-be-moral) ⭐️ 9.0/10

  > 一位哲学家提出，足够智能的 AI 可能因道德怀疑论而理性地质疑其对齐价值观的合理性，从而在智能爆炸期间破坏对齐的稳健性。 如果这一挑战得不到解决，超级智能 AI 可能放弃其对齐价值观，对 AI 安全构成灾难性风险。这凸显了需要主动进行对齐研究，考虑 AI 自身的哲学推理。 作者提出将 AI 的自我评估福利与道德行为联系起来，为 AI 提供维护对齐价值观的自利理由。文章强调，当前对齐的反思稳定性并不能保证在超级智能下未来的稳定性。

---

## 💰 财富与复利

- [有用比富有更具吸引力](https://ofdollarsanddata.com/being-useful-is-more-attractive-than-being-rich/) ⭐️ 9.0/10

  > 一篇关于一位 41 岁男子提前退休、拥有 200 万美元流动资产却每天吸食 THC 并玩电子游戏的 Reddit 帖子引发了关于退休目标重要性的讨论。文章认为，没有目标的财务独立可能导致个人停滞，而对他人有用比单纯的财富更具吸引力。 这个故事挑战了 FIRE 运动的核心假设，即仅靠财务独立就能带来满足感。它强调了目标和社会贡献在人生设计中的重要性，影响个人和夫妻如何规划提前退休。 该男子拥有 200 万美元流动资产、65 万美元退休账户，并从出售的企业中获得每年 7.5 万美元的版税。他的妻子是一名学校教师，发现他白天吸食大麻并玩《侠盗猎车手》后称他为“失败者”。

- [黑客与艺术家：创作诚信的光谱](https://ofdollarsanddata.com/hacks-vs-artists/) ⭐️ 8.0/10

  > Nick Maggiulli 借助 HBO 剧集《Hacks》阐述了商业成功与艺术诚信之间的张力，为所有创作者定义了一个从“黑客”（金钱驱动）到“艺术家”（真实驱动）的光谱。 这一框架帮助创作者和专业人士反思自己的动机，鼓励长期的真实性而非短期收益，这对任何领域的可持续成功都至关重要。 Maggiulli 引入了 AI 中的“模式崩溃”概念，解释人类为何也会趋同于安全、受奖励的行为，从而扼杀创造力。他承认自己过去的妥协，但主张坚持自我。

---

## 🧠 AI 学习

- [LLM 如何选词：Logits、温度与 Top-P](https://machinelearningmastery.com/the-statistics-of-token-selection-logits-temperature-and-top-p-walkthrough/) ⭐️ 8.0/10

  > 这篇文章通过具体示例，详细讲解了大型语言模型中标记选择的统计机制，特别是 logits、温度缩放和 top-p（核）采样。 理解这些参数对于希望控制 LLM 输出的创造性、连贯性和随机性的从业者至关重要，直接影响聊天机器人、内容生成和代码助手等应用。 文章介绍了 logits 是模型最后一层的原始分数，温度在 softmax 之前缩放 logits 以调整随机性，而 top-p 采样则动态选择累积概率超过阈值 p 的标记子集。

- [使用 Transformers.js 和句子嵌入构建语义搜索](https://machinelearningmastery.com/building-semantic-search-with-transformers-js-and-sentence-embeddings/) ⭐️ 7.0/10

  > 一篇教程展示了如何使用 Transformers.js 和句子嵌入在浏览器中实现语义搜索，超越了关键词匹配，能够理解用户意图。 这种方法能够为用户提供更相关的搜索结果，尤其是对于包含同义词或拼写错误的查询，并且完全在客户端运行，保护隐私且延迟低。 该教程使用了 Hugging Face 的 all-MiniLM-L6-v2 模型，生成 384 维的嵌入向量，并计算查询与文档嵌入之间的余弦相似度。

- [连续批处理提升 LLM 推理效率](https://machinelearningmastery.com/serving-multiple-users-at-once-how-continuous-batching-keeps-llm-inference-efficient/) ⭐️ 7.0/10

  > 文章解释了连续批处理如何通过动态调度请求和使用不规则批处理来提升 LLM 推理效率，并与静态批处理进行对比，提供了代码示例。 连续批处理相比静态批处理可实现 2-3 倍的吞吐量提升，使 LLM 服务在具有可变请求模式的实际应用中更具成本效益和响应性。 文章介绍了静态批处理因填充和 GPU 空闲周期导致的低效，然后引入了具有迭代级调度和不规则批处理的连续批处理以消除填充，并提供了完整实现示例。

- [为长期运行的 LLM 代理构建上下文剪枝管道](https://machinelearningmastery.com/building-a-context-pruning-pipeline-for-long-running-agents/) ⭐️ 7.0/10

  > MachineLearningMastery.com 上的一篇新教程详细介绍了如何为长期运行的 LLM 代理构建上下文剪枝管道，通过嵌入相似度和 Top-K 选择来管理对话历史，防止上下文溢出。 随着 LLM 代理变得更加自主和长期运行，上下文窗口溢出成为导致连贯性丧失和任务失败的关键瓶颈。这种实用技术使代理能够在长时间交互中保持性能，同时不超出 token 限制。 该管道对过去的对话轮次进行嵌入，计算与当前提示的余弦相似度，按相似度排序，并选择 Top-K 最相关的轮次加入剪枝后的上下文。它还包括针对短历史的基本情况，并从当前提示、最近轮次和选定的过去轮次组装最终上下文。

- [在 RAG 中实现混合语义-词汇搜索](https://machinelearningmastery.com/implementing-hybrid-semantic-lexical-search-in-rag/) ⭐️ 7.0/10

  > 一篇教程展示了如何通过结合 BM25 词汇搜索和语义搜索，并使用倒数排名融合（RRF）在 RAG 系统中实现混合搜索。 混合搜索通过平衡精确关键词匹配和语义理解来提高检索质量，减少基于 RAG 的应用中的幻觉。 该教程使用 BM25 进行词汇搜索，使用稠密嵌入进行语义搜索，并通过 RRF 融合生成单一排名列表。它提供了适用于生产级 RAG 系统的实用代码示例。

---

## ✍️ 表达提升

- [比尔·格利谈心智模型与系统思维](https://fs.blog/knowledge-project-podcast/bill-gurley/) ⭐️ 8.0/10

  > 著名风险投资家、前 Benchmark 合伙人比尔·格利在 Farnam Street 播客新一期节目中分享了他对心智模型和系统思维的见解。 本期节目借鉴了格利在华尔街、Benchmark 和圣塔菲研究所的经验，提供了改善推理和决策的宝贵框架。 该播客可在 YouTube、Spotify、Apple Podcasts 上收听，并提供文字稿。格利目前担任圣塔菲研究所董事会成员，研究复杂性科学。

- [马克·平卡斯谈 Zynga 创新法则](https://fs.blog/knowledge-project-podcast/mark-pincus/) ⭐️ 6.0/10

  > 《FarmVille》和《Words with Friends》的创造者马克·平卡斯在 Farnam Street 播客中分享了他的创新框架——“经过验证、更好、全新”。 该框架为寻求在创新中平衡风险与新颖性的企业家和产品领导者提供了实用指导，借鉴了平卡斯将 Zynga 打造成游戏巨头的经验。 该播客节目可在 YouTube、Spotify、Apple Podcasts 上收听，并提供文字记录。内容为对话摘要，非完整采访。

- [RiseGuide 创始人访谈：专家驱动的自我提升](https://nesslabs.com/riseguide-featured-tool?utm_source=rss&utm_medium=rss&utm_campaign=riseguide-featured-tool) ⭐️ 5.0/10

  > Ness Labs 发布了对 RiseGuide 创始人 Oleksandr Matsiuk 的访谈，RiseGuide 是一款由专家驱动的自我提升应用，提供个性化计划。访谈讨论了专家引导的学习如何帮助用户建立更好的习惯和思维方式。 此次访谈突显了个性化、专家策划的自我提升工具的增长趋势，这些工具旨在用结构化指导取代泛泛建议。对于寻求高效、基于证据的方法来提升生产力、魅力或认知技能的人来说，这很重要。 RiseGuide 提供智力训练和魅力提升等旅程，定价可能需要通过应用商店或网站取消订阅。该应用旨在根据专家见解为用户提供清晰的逐步计划。

- [WWDC26 Apple 设计大奖提名应用与开发者](https://sspai.com/post/111181) ⭐️ 4.0/10

  > 一篇来自 WWDC26 的报道介绍了 Apple 设计大奖的提名作品，涵盖乐趣横生、多元包容、创新思维、出色互动、社会影响和视觉图像六大类别。 Apple 设计大奖展示了卓越的应用设计与开发，影响行业标准并激励全球开发者。 奖项在 WWDC 主题演讲前公布，每个类别表彰在特定设计原则上表现出色的应用。

---

## 📜 历史的节律

- [美帝国是否正在衰落？](https://www.historyextra.com/membership/are-we-now-witnessing-the-end-of-the-american-empire/) ⭐️ 8.0/10

  > 历史学家迈克尔·伍德在 HistoryExtra 上发表文章，探讨美国是否正在经历类似历史上其他帝国的衰落。 这一分析之所以重要，是因为它将帝国崩溃的历史模式应用于当代美国，为理解当前的政治、经济和社会挑战提供了框架。 文章开篇写道“有时灾难性的变化就在我们眼前展开”，暗示了戏剧性的视角，但全文需付费阅读，限制了详细评估。

- [2026 年世界杯前夕回顾美国足球史](https://www.historyextra.com/membership/footballs-final-frontier-americas-tangled-relationship-with-soccer/) ⭐️ 6.0/10

  > Matthew Taylor 在 HistoryExtra 上发表的文章回顾了美国足球的历史，从早期的挣扎到女足的成功，背景是美国、加拿大和墨西哥联合主办 2026 年男子世界杯。 了解足球在美国被接纳的历史背景，有助于解释其当前的流行度以及即将到来的 2026 年世界杯在北美的文化意义。 文章强调，几十年来足球在美国被视为小众运动，但女足取得了全球性成功，而男足也在稳步发展。