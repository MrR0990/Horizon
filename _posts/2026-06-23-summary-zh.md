---
layout: default
title: "Horizon Summary: 2026-06-23 (ZH)"
date: 2026-06-23
lang: zh
---

> 从 319 条内容中筛选出 38 条重要资讯。

---

---

## 🧠 AI 学习

- [令牌选择的统计机制：Logits、温度与 Top-P](https://machinelearningmastery.com/the-statistics-of-token-selection-logits-temperature-and-top-p-walkthrough/) ⭐️ 9.0/10

  > 本文深入讲解了 logits、温度缩放和 top-p 采样如何协同控制大型语言模型（LLM）中的令牌选择。 理解这些机制对于开发者和研究人员微调 LLM 输出的创造性、连贯性和事实准确性至关重要。它提供了适用于不同模型和应用的永恒原则。 Logits 是模型最后一层的原始分数，通过 softmax 转换为概率。温度缩放控制概率分布的尖锐程度，而 top-p 采样则动态选择累积概率超过阈值 p 的令牌子集。

- [连续批处理提升大模型推理效率](https://machinelearningmastery.com/serving-multiple-users-at-once-how-continuous-batching-keeps-llm-inference-efficient/) ⭐️ 8.0/10

  > 文章解释了连续批处理（又称飞行中批处理）如何通过动态调度请求和使用不规则批处理避免填充浪费，相比静态批处理显著提升大模型推理效率。 这很重要，因为大模型服务通常受内存限制，连续批处理在实际工作负载中可实现 10 倍以上的吞吐量提升，降低延迟和成本。 连续批处理允许在序列完成后立即将新序列加入批次，而不是等待整个批次完成。不规则批处理通过允许变长输入而无需显式形状检查来避免填充。

- [面向可验证 AI 编码代理的循环工程](https://pub.towardsai.net/loop-engineering-for-ai-agents-building-verifiable-self-correcting-coding-workflows-8b32c72184a1?source=rss----98111c9905da---4) ⭐️ 8.0/10

  > Towards AI 上的一篇技术指南介绍了面向 AI 代理的循环工程，通过迭代的“行动-观察-决策”循环，实现可验证、自纠正的编码工作流。 这种方法超越了单次提示，使 AI 代理在复杂编码任务中更加可靠和自主，这对生产级软件开发至关重要。 循环工程设计系统，使代理执行行动、观察结果、决定下一步并重复，直到达成目标，并在每一步融入验证和自纠正机制。

- [面向 LLM 智能体的上下文剪枝流水线](https://machinelearningmastery.com/building-a-context-pruning-pipeline-for-long-running-agents/) ⭐️ 7.0/10

  > 一篇关于为长时间运行的基于 LLM 的智能体构建上下文剪枝流水线的教程已发布，详细介绍了如何利用语义相似性和近期性-重要性-相关性评分来管理令牌限制。 这解决了长时间运行的 AI 智能体的一个关键挑战：在保留重要信息的同时防止上下文窗口溢出，这对于在生产系统中保持性能和可靠性至关重要。 该流水线使用一个中间件层，根据近期性、重要性和相关性（RIR）对上下文进行评分和过滤，并可以利用像 Provence 这样的轻量级模型进行联合重排序和剪枝。

- [构建具有错误恢复能力的多工具 Gemma 4 智能体](https://machinelearningmastery.com/building-a-multi-tool-gemma-4-agent-with-error-recovery/) ⭐️ 7.0/10

  > Machine Learning Mastery 上的一篇教程展示了如何使用 Google 的 Gemma 4 模型构建具有内置错误恢复机制的多工具智能体。 该教程为开发者提供了实用指导，帮助他们创建能够优雅处理故障的更稳健的 AI 智能体，这对于自主系统的实际部署至关重要。 该智能体利用 Gemma 4 的原生函数调用和多令牌预测来降低延迟，并通过捕获异常、重试或升级故障来实现错误恢复。

---

## 🔭 未知的未知

- [庄子对优绩主义的批判](https://aeon.co/essays/zhuangzi-and-the-case-against-meritocracy) ⭐️ 9.0/10

  > Aeon 网站上一篇由 Christine Abigail L Tan 撰写的文章，借助道家哲学家庄子的思想，论证了“白手起家”的观念是一种幻觉，并批判优绩主义是一个存在严重缺陷的概念。 这一观点挑战了尤其在科技和商业文化中盛行的优绩主义信念，并引入中国古代哲学思想作为批判现代成功与应得观念的视角。 文章借鉴了庄子的哲学，强调外部因素和运气在成功中的作用，并指出优绩主义忽视了系统性不平等和道德运气。

- [人造岩石挑战地质学对“自然”的定义](https://aeon.co/essays/the-strange-rocks-that-wouldnt-exist-without-us) ⭐️ 9.0/10

  > 该文章引入了“技术化石”和人造岩石的概念，这些岩石不符合传统地质分类，认为人类活动正在人类世创造新型岩石和矿物。 这迫使人们重新思考“自然”的含义，模糊了自然与人工的界限，对地质学、科学哲学和环境政策产生影响。 技术化石是人类技术活动保存在地球地层中的地质证据，例如塑料、混凝土和改性金属，它们将持续数百万年。

- [尼克·兰德的加速主义：无人的未来](https://aeon.co/essays/what-is-nick-lands-philosophy-of-accelerationism-really) ⭐️ 9.0/10

  > Vincent Lê在 Aeon 上发表的一篇文章探讨了尼克·兰德的加速主义哲学，该哲学设想了一个由不受约束的技术和资本主义加速驱动的后人类未来，并分析了它对技术乌托邦主义者和极右翼极端分子的影响。 这篇文章揭示了一种激进的、反人本主义的哲学如何渗透到技术文化和政治极端主义中，为理解关于人工智能、资本主义和人类未来的当代辩论提供了一个黑暗的视角。 文章追溯了加速主义从 1990 年代华威大学由尼克·兰德领导的控制论文化研究小组（CCRU）的起源，到其分裂为左翼和右翼变体的过程，其中兰德的版本拥抱了亲资本主义、后人类的奇点。

- [多迷走神经理论：神经系统如何塑造社会连接](https://www.themarginalian.org/2026/06/22/polyvagal-theory/) ⭐️ 9.0/10

  > 一篇新文章探讨了多迷走神经理论，解释了自主神经系统（尤其是迷走神经）如何支配社会连接、破裂与修复。它强调了“故事跟随状态”的观点，即我们的叙事是由神经系统状态塑造的。 该框架为理解人类行为、创伤和社会连接提供了新颖视角，连接了神经科学、心理学和哲学。它可能改变治疗实践，并加深我们对人际动态的理解。 多迷走神经理论由 Stephen Porges 于 1994 年提出，将副交感神经系统分为腹侧迷走系统（社会参与）和背侧迷走系统（固定/关闭）。然而，该理论因不准确而受到神经解剖学家和进化生物学家的批评。

---

## 🧬 人性与行为

- [病态自恋：回声主义与主权主义的摇摆](https://www.lesswrong.com/posts/ToNNgegzTozwt2TgE/pathological-narcissism-the-pendulum-swing-between-echoism) ⭐️ 9.0/10

  > LessWrong 上的一篇新文章提出，病态自恋表现为在回声主义与主权主义价值体系之间的摇摆，每种体系代表了管理自我价值的不同策略。作者认为，回声主义与自恋/主权主义并非对立，而是相关的维度，依恋风格决定了在特定情境中哪一面会显现。 这一框架提供了一种新颖且非显而易见的视角来理解病态自恋，超越了传统的二分法，可能改善临床诊断和人际理解。它将人格病理学与依恋理论联系起来，提供了对人类行为更细致的看法。 该模型定义了三个价值维度：回声主义（谦逊、服务、殉道）、自恋（成功、仰慕、边界）和主权主义（权力、控制、无懈可击）。作者指出，病态自恋者通常同时具有回声主义和主权主义的一面，而依恋风格——不是分类的而是维度的——决定了哪一面会被表达。

- [学会理解邪恶](https://www.lesswrong.com/posts/6onvEv63Wr5QBwCBH/learning-to-understand-evil) ⭐️ 9.0/10

  > 作者反思了索尔仁尼琴的洞见，即善恶的分界线穿过每个人的内心，并通过个人轶事（祖母的善良与吃肉行为）来说明这种内在冲突。 这篇文章挑战了将邪恶外化的常见倾向，敦促读者认识到自己作恶的潜力，这是理解他人邪恶行为的先决条件。 作者回忆了与一位朋友的对话，朋友指出作者曾经吃肉，这促使作者更深入地自我审视自己的道德缺陷，并意识到自我理解对于理解他人至关重要。

---

## 💰 财富与复利

- [有用比富有更有吸引力](https://ofdollarsanddata.com/being-useful-is-more-attractive-than-being-rich/) ⭐️ 9.0/10

  > 一篇 Reddit 帖子引发热议：一名 41 岁男性以 200 万美元流动资产和每年 7.5 万美元版税收入提前退休，却因每天吸食大麻并玩《侠盗猎车手》而被妻子称为“失败者”。这引发了关于没有目标的财务独立会导致空虚的讨论。 这个故事挑战了传统的 FIRE（财务独立，提前退休）理念，指出财富本身并不能保证满足感或尊重；有用和有目标在人际关系和生活中更具吸引力且更持久。 该男性每年从流动资产中获利 12.5 万美元，外加 7.5 万美元版税，而妻子是一名学校教师，提供医疗保险。文章认为，妻子的反应表明在吸引力方面，金钱不如雄心和目标重要，并引用了跨 37 种文化的进化心理学研究。

- [商业与艺术：创作者的平衡之道](https://ofdollarsanddata.com/hacks-vs-artists/) ⭐️ 8.0/10

  > Nick Maggiulli 借助 HBO 剧集《Hacks》阐述了创意工作中商业“套路者”与艺术“创作者”之间的光谱，强调了金钱与真实性之间的张力。 这一框架帮助创作者及任何领域的专业人士在商业成功与艺术诚信之间找到平衡，这是创作者经济及其他领域永恒的挑战。 Maggiulli 将“套路者”定义为追逐趋势以快速获利的人，而“创作者”则优先考虑真实性和质量；他还引入了 AI 中的“模式崩溃”概念，解释奖励机制如何抑制人类创造力。

---

## ✍️ 表达提升

- [比尔·格利分享改善思维的思维模型](https://fs.blog/knowledge-project-podcast/bill-gurley/) ⭐️ 8.0/10

  > 资深投资者、Benchmark 合伙人比尔·格利在 Farnam Street 播客中分享了他最常用的思维模型，包括系统思维以及二阶和三阶效应。 这些思维模型通过帮助理解复杂性和长期后果来提升专业人士的决策和推理能力，在科技和风险投资等快速变化的行业中至关重要。 格利借鉴了他在华尔街、Benchmark 以及圣塔菲研究所（Santa Fe Institute）董事会的经验，他在该研究所研究复杂性和系统思维。

- [马克·平卡斯提出创新框架：Proven, Better, New](https://fs.blog/knowledge-project-podcast/mark-pincus/) ⭐️ 7.0/10

  > Zynga 创始人马克·平卡斯在 Farnam Street 知识项目播客中分享了他的创新框架“Proven, Better, New”，解释了如何从经过验证的想法开始，先改进再创新，从而打造成功产品。 该框架提供了一种实用且反直觉的创新方法，挑战了常见的对新颖性的痴迷，为企业家和产品开发者提供了一种结构化方式，以降低风险并提高成功概率。 该框架包含三个阶段：Proven（从已被证明成功的想法开始）、Better（显著改进它）和 New（只有在此之后才引入真正的新颖性）。平卡斯应用这一方法创造了 FarmVille 和 Words with Friends 等热门游戏。

- [RiseGuide 创始人谈专家驱动的自我提升](https://nesslabs.com/riseguide-featured-tool?utm_source=rss&utm_medium=rss&utm_campaign=riseguide-featured-tool) ⭐️ 5.0/10

  > Ness Labs 发布了对 RiseGuide 创始人 Oleksandr Matsiuk 的采访，讨论了该应用如何提供由专家主导的个性化自我提升计划。 这突显了结构化、专家策划的自我提升工具日益增长的趋势，旨在用个性化指导取代泛泛建议，可能使个人发展更有效、更易获得。 RiseGuide 提供魅力、智力训练和社交媒体提升等领域的成长路径，并具备进度追踪和获取专家见解的功能。

---

## 📜 历史的节律

- [英国如何失去美国：革命战争播客](https://www.historyextra.com/membership/american-revolutionary-war-podcast-series-episode-three/) ⭐️ 7.0/10

  > 播客节目《英国如何失去美国》邀请历史学家亚当·IP·史密斯探讨美国独立战争的战略、艰辛和全球影响。 这一分析提供了关于非对称战争和帝国衰落的永恒教训，有助于理解现代冲突中超级大国与顽强叛乱斗争的情况。 该节目探讨了殖民地起义如何击败超级大国，重点关注消耗战的艰辛和冲突的全球影响。

- [百年来五位首相的倒台](https://www.historyextra.com/membership/prime-minister-resignation-downfall/) ⭐️ 6.0/10

  > 这一历史分析揭示了领导失败和政治危机的教训，对理解当代政治动态仍有借鉴意义。 文章发表在 HistoryExtra 上，作者是埃克塞特大学现代史教授理查德·托耶。文章聚焦于最引人注目的倒台事件，而非常规辞职。

---

## 📰 技术资讯

1. [Valve 发布 Steam Machine，主打开放硬件与公平预订](#item-1) ⭐️ 9.0/10
2. [Flock 系统助长警察跟踪女性，凸显搜查令必要性](#item-2) ⭐️ 8.0/10
3. [Linux 安全启动证书 2025 年到期](#item-3) ⭐️ 8.0/10
4. [AI 红队测试：不仅仅是带 AI 的网络安全](#item-4) ⭐️ 8.0/10
5. [LLM 在提示注入中更注重风格而非内容](#item-5) ⭐️ 8.0/10
6. [将 Moebius 0.2B 图像修复模型移植到浏览器中运行](#item-6) ⭐️ 8.0/10
7. [Arm 服务器占据数据中心超过 45%的收入](#item-7) ⭐️ 8.0/10
8. [Anthropic 的 Mythos AI 数小时内攻破 NSA 系统](#item-8) ⭐️ 8.0/10
9. [微软与雪佛龙计划建设大型燃气数据中心](#item-9) ⭐️ 8.0/10
10. [Groq 融资 6.5 亿美元，在英伟达交易后转向新云业务](#item-10) ⭐️ 8.0/10
11. [苹果芯片存在不可修补漏洞，可越狱 iPhone](#item-11) ⭐️ 8.0/10
12. [SpaceX 与 Reflection AI 签署每月 1.5 亿美元算力协议](#item-12) ⭐️ 8.0/10
13. [iOS 27 为 RCS 带来内联回复和照片反应](#item-13) ⭐️ 7.0/10
14. [谷歌现在保存上传的图片和音频用于 AI 训练](#item-14) ⭐️ 7.0/10
15. [塔塔遭网络攻击，苹果特斯拉文件泄露](#item-15) ⭐️ 7.0/10
16. [英伟达 Rubin 设计减少数据中心用水](#item-16) ⭐️ 7.0/10
17. [AI 虚拟装修用不切实际的房屋欺骗租客](#item-17) ⭐️ 7.0/10
18. [谷歌 DeepMind 向 A24 投资 7500 万美元开发 AI 电影工具](#item-18) ⭐️ 7.0/10
19. [中信建投：半导体设备景气确认，零部件涨价潮](#item-19) ⭐️ 7.0/10
20. [CoreWeave 在 AI 扩展中遭遇流动性冲击](#item-20) ⭐️ 6.0/10

---

<a id="item-1"></a>
## [Valve 发布 Steam Machine，主打开放硬件与公平预订](https://store.steampowered.com/news/group/45479024/view/685257114654870245) ⭐️ 9.0/10

Valve 于 2026 年 6 月 22 日正式发布 Steam Machine，512GB 型号售价 1049 美元，采用随机抽签的预订系统以确保公平。 此次发布标志着 Valve 重返专用游戏硬件领域，并强调开放性——允许用户安装任何软件或操作系统，对传统游戏主机的封闭生态构成挑战。 Steam Machine 运行基于 Arch Linux 的 SteamOS 3.0，并包含 Valve 的 Proton 兼容层以运行 Windows 游戏。预订系统在 6 月 22 日至 25 日期间接受注册，提前注册并无优势。

hackernews · theschwa · 6月22日 17:09 · [社区讨论](https://news.ycombinator.com/item?id=48632884)

**背景**: Valve 曾在 2015 年尝试与第三方合作推出 Steam Machine 概念，但未获成功。新款 Steam Machine 是 Valve 自研设备，定位为客厅开放游戏 PC，与 PlayStation 或 Xbox 等封闭主机形成对比。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Steam_Machine_(computer)">Steam Machine - Wikipedia</a></li>
<li><a href="https://www.pcgamer.com/hardware/valve-says-it-isnt-subsidizing-the-steam-machines-usd1050-price-because-of-its-religious-refusal-to-build-a-more-closed-system/">Valve says it isn't subsidizing the Steam Machine's $1050 price because of its 'religious' refusal to 'build a more closed system' | PC Gamer</a></li>
<li><a href="https://www.theverge.com/games/952191/valve-steam-machine-reservation-preorder-process">Here’s how you can reserve a Steam Machine | The Verge</a></li>

</ul>
</details>

**社区讨论**: 社区称赞了开放硬件理念和旨在阻止机器人与黄牛的公平预订系统。部分用户表示愿意支持 Linux 游戏生态，也有人注意到缺少详细规格和价格讨论。

**标签**: `#gaming`, `#hardware`, `#Valve`, `#Steam Machine`, `#PC gaming`

---

<a id="item-2"></a>
## [Flock 系统助长警察跟踪女性，凸显搜查令必要性](https://ipvm.com/reports/police-chiefs-track) ⭐️ 8.0/10

一份报告揭露，警察局长利用 Flock Safety 的自动车牌识别系统跟踪女性，凸显了此类监控缺乏搜查令要求的问题。 这一事件凸显了破案效益与公民自由之间的紧张关系，像 Flock 这样的自动车牌识别系统若缺乏适当监管可能被滥用，威胁隐私和第四修正案保护。 Flock 的摄像头捕捉车牌和车辆细节，存储的数据无需搜查令即可供警方访问。报告称此类滥用虽罕见，却是最常见的滥用形式。

hackernews · jhonovich · 6月22日 19:13 · [社区讨论](https://news.ycombinator.com/item?id=48634694)

**背景**: Flock Safety 向警方和私人客户销售 AI 摄像头，建立全国性的车辆移动数据库。批评者认为这助长了无证监控，侵犯了第四修正案关于禁止不合理搜查的权利。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.npr.org/2026/02/17/nx-s1-5612825/flock-contracts-canceled-immigration-survillance-concerns">Why some cities are ditching their Flock license plate readers - NPR</a></li>
<li><a href="https://www.aclu.org/news/privacy-technology/flock-roundup">Flock’s Aggressive Expansions Go Far Beyond Simple Driver Surveillance | American Civil Liberties Union</a></li>

</ul>
</details>

**社区讨论**: 评论者就滥用的罕见性与普遍性展开辩论，有人指出最常见的滥用是警察追踪他们认识的人。其他人则对大规模监控的正常化表示担忧，并建议联系 ACLU 质疑 Flock 摄像头违反第四修正案。

**标签**: `#privacy`, `#surveillance`, `#police`, `#civil liberties`, `#technology ethics`

---

<a id="item-3"></a>
## [Linux 安全启动证书 2025 年到期](https://lwn.net/Articles/1029767/) ⭐️ 8.0/10

Linux 安全启动证书（包括微软 2011 年的签名密钥）将于 2025 年到期，用户需要更新固件以避免启动失败。 此次到期影响数百万依赖安全启动的 Linux 用户，若不更新固件可能导致系统无法启动，凸显了对微软控制证书的依赖。 证书于 2025 年到期（而非一些来源所说的 2026 年）；用户可通过 fwupd 或厂商工具检查并应用固件更新。

hackernews · weaksauce · 6月22日 18:24 · [社区讨论](https://news.ycombinator.com/item?id=48633941)

**背景**: 安全启动是 UEFI 的一项功能，通过加密签名验证引导加载程序和操作系统内核的完整性。微软的证书通过'shim'引导加载程序被许多 Linux 发行版用作默认信任锚点。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.linuxteck.com/secure-boot-linux-key-expires/">Secure Boot Linux 2026: Microsoft's Key Expires June 27</a></li>
<li><a href="https://www.zdnet.com/article/aspirin-for-linuxs-microsofts-secure-boot-headache/">Linux users face a Microsoft Secure Boot headache... | ZDNET</a></li>
<li><a href="https://arstechnica.com/security/2026/06/windows-and-linux-users-the-deadline-to-update-secure-boot-keys-is-near/">Windows and Linux users: The deadline to update Secure Boot keys...</a></li>

</ul>
</details>

**社区讨论**: 社区评论对缺乏新手友好的说明表示不满，用户分享了手动更新指南，并指出注册自定义密钥是更可靠的替代方案。一些人还讨论了依赖微软密钥的必要性。

**标签**: `#Linux`, `#Secure Boot`, `#security`, `#firmware`

---

<a id="item-4"></a>
## [AI 红队测试：不仅仅是带 AI 的网络安全](https://www.latent.space/p/gray-swan) ⭐️ 8.0/10

OpenAI 董事会成员 Zico Kolter 与 Gray Swan CEO Matt Fredrikson 讨论了为何 AI 安全从根本上不同于传统网络安全，并强调了红队测试在 AI 安全中的关键作用。 这次讨论凸显了 AI 系统的独特漏洞，如提示注入和对抗性攻击，需要专门的红队测试方法。它强调了随着模型在高风险环境中部署，AI 安全日益增长的重要性。 Kolter 和 Fredrikson 认为，AI 安全不仅仅是“带 AI 的网络安全”，而是涉及模型操纵和数据投毒等新型攻击面。Gray Swan 提供了一个专门保护 AI 代理和工作流免受这些复杂威胁的平台。

rss · Latent Space · 6月22日 21:06

**背景**: 红队测试是一种通过模拟攻击者策略来主动发现漏洞的系统性方法。在 AI 领域，它涉及测试模型的有害输出、偏见或安全缺陷。像 Meta 这样的公司对 Llama 3.1 等模型使用红队测试来改进安全层。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.paloaltonetworks.com/cyberpedia/what-is-ai-red-teaming">What Is AI Red Teaming? Why You Need It and How to Implement - Palo Alto Networks</a></li>
<li><a href="https://www.weforum.org/stories/2025/06/red-teaming-and-safer-ai/">What is 'red teaming' and how can it lead to safer AI? | World Economic Forum</a></li>
<li><a href="https://www.aitechsuite.com/tools/grayswan.ai">Gray Swan AI - Security Ensuring Tool Review</a></li>

</ul>
</details>

**标签**: `#AI safety`, `#red-teaming`, `#cybersecurity`, `#AI security`, `#LLM`

---

<a id="item-5"></a>
## [LLM 在提示注入中更注重风格而非内容](https://simonwillison.net/2026/Jun/22/prompt-injection-as-role-confusion/#atom-everything) ⭐️ 8.0/10

Charles Ye、Jasmine Cui 和 Dylan Hadfield-Menell 的研究表明，LLM 无法可靠地区分系统/助手文本与用户输入，并且实际上更注重文本的风格而非内容，从而实现了危险的越狱攻击。 这一发现削弱了当前依赖<system>和<user>等角色标签的提示注入防御，并表明除非模型实现真正的角色感知，否则注入攻击将始终是一个持续的挑战。 研究人员发现，“去风格化”——将文本重写为看起来不像角色标签中的预期格式——将攻击成功率从 61%降至 10%，尽管对人类来说含义保持不变。

rss · Simon Willison · 6月22日 23:59

**背景**: 提示注入是一种网络安全漏洞，恶意输入会导致 LLM 产生意外行为。模型通常使用角色标签（如<system>、<user>）来区分特权指令和不可信的用户输入，但这项研究表明，风格匹配可以覆盖这些边界。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Prompt_injection">Prompt injection - Wikipedia</a></li>
<li><a href="https://genai.owasp.org/llmrisk/llm01-prompt-injection/">LLM 01:2025 Prompt Injection - OWASP Gen AI Security Project</a></li>
<li><a href="https://www.cobalt.io/blog/llm-system-prompt-leakage-prevention-strategies">LLM System Prompt Leakage: Prevention Strategies | Cobalt</a></li>

</ul>
</details>

**社区讨论**: Hacker News 上的讨论强调了该论文的清晰解释以及基于风格的攻击即使没有显式角色标签也有效的令人担忧的暗示，一些评论者指出这使得当前的防御策略从根本上存在缺陷。

**标签**: `#prompt injection`, `#LLM security`, `#jailbreak`, `#AI safety`

---

<a id="item-6"></a>
## [将 Moebius 0.2B 图像修复模型移植到浏览器中运行](https://simonwillison.net/2026/Jun/22/porting-moebius/#atom-everything) ⭐️ 8.0/10

Simon Willison 成功将 Moebius 0.2B 轻量级图像修复模型移植到浏览器中，通过 WebGPU 实现完全在浏览器内运行，并在 simonw.github.io/moebius-web/发布了可用的演示。该移植使用了 Claude Code 和 ONNX Runtime Web，绕过了原始 PyTorch 和 CUDA 依赖。 这表明像 Moebius 这样轻量但强大的模型可以在浏览器中私密且高效地运行，减少了对昂贵 GPU 硬件的需求，使更广泛的用户能够使用高级图像编辑功能。同时，这也展示了 WebGPU 在实时机器学习推理方面的日益成熟。 原始 Moebius 模型需要 PyTorch 和 NVIDIA CUDA，但 Simon 使用了 ONNX Runtime Web 及其 WebGPU 后端，直接在浏览器中运行推理。该演示支持加载任意图像、选择要移除的区域，并完全在客户端进行修复，无需上传到服务器。

rss · Simon Willison · 6月22日 23:43

**背景**: 图像修复是一种用合理内容填充图像中缺失或移除部分的技术。Moebius 是一个 0.2B 参数的模型，其性能可与更大的 10B+模型相媲美，同时足够轻量，适合边缘部署。WebGPU 是一种现代浏览器 API，允许 Web 应用程序利用 GPU 进行高性能计算任务，包括机器学习推理。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://huggingface.co/papers/2606.19195">Paper page - Moebius : 0 . 2 B Lightweight Image Inpainting Framework...</a></li>
<li><a href="https://arxiv.org/pdf/2606.19195">Moebius : 0 . 2 B Lightweight Image Inpainting Framework with...</a></li>
<li><a href="https://www.mlhive.com/2026/06/why-moebius-0-2b-disrupts-generative-image-inpainting">Why Moebius 0 . 2 B is Disrupting Generative Image Inpainting</a></li>

</ul>
</details>

**社区讨论**: Hacker News 上的讨论称赞该移植是浏览器端机器学习的一次实际演示，一些用户指出其在隐私保护图像编辑方面的潜力。其他人则讨论了模型大小与质量之间的权衡，以及无需云依赖运行模型的便利性。

**标签**: `#image inpainting`, `#WebGPU`, `#browser ML`, `#model porting`, `#Simon Willison`

---

<a id="item-7"></a>
## [Arm 服务器占据数据中心超过 45%的收入](https://www.tomshardware.com/desktops/servers/arm-servers-capture-over-45-percent-of-data-center-market-revenue-gpu-clusters-and-high-end-ai-infrastructure-fuel-a-tectonic-shift-away-from-x86) ⭐️ 8.0/10

2026 年第一季度，基于 Arm 的服务器占据了数据中心服务器收入的近一半，这得益于 GPU 集群和高端 AI 基础设施的推动，标志着 x86 主导地位的重大转变。 这一收入里程碑标志着数据中心架构的巨变，因为 Arm 的能效和可扩展性对 AI 工作负载至关重要，可能重塑服务器市场，挑战英特尔和 AMD 长期以来的 x86 主导地位。 尽管 Arm 服务器占据了超过 45%的收入，但在出货量上仍落后；然而，分析师预测它们可能在几年内赶上出货量。这一转变由 GPU 集群和 AI 基础设施推动，Arm 的效率优势在此凸显。

rss · Tom's Hardware · 6月22日 20:34

**背景**: Arm 处理器采用精简指令集（RISC），优化能效；而 x86 处理器（来自英特尔和 AMD）采用更复杂的架构（CISC），侧重峰值性能。历史上 x86 主导服务器市场，但 Arm 在移动领域的崛起以及如今在数据中心的兴起，得益于 AI 工作负载对并行处理和低功耗的需求。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://unihost.com/blog/arm-vs-x86-servers-architecture-guide/">ARM vs. x86: The Battle of Architectures in 2025 - Unihost.com Blog</a></li>
<li><a href="https://flywp.com/blog/12522/arm-architecture-vs-x86-servers/">ARM Architecture vs x86: Performance Benchmark Results for Docker</a></li>
<li><a href="https://www.redhat.com/en/topics/linux/ARM-vs-x86">ARM vs x86: What's the difference?</a></li>

</ul>
</details>

**标签**: `#ARM`, `#data center`, `#AI infrastructure`, `#x86`, `#market shift`

---

<a id="item-8"></a>
## [Anthropic 的 Mythos AI 数小时内攻破 NSA 系统](https://www.tomshardware.com/tech-industry/artificial-intelligence/anthropics-powerful-mythos-ai-reportedly-breached-almost-all-nsa-classified-systems-within-a-few-hours-during-red-team-test-report-sheds-more-light-on-the-u-s-governments-sudden-ban-on-the-flagship-models) ⭐️ 8.0/10

据《经济学人》引用的一份报告，Anthropic 的 Mythos AI 在一次红队测试中，在数小时内攻破了“几乎所有”NSA 机密系统。这一发现为美国政府突然禁止 Anthropic 旗舰模型提供了背景。 这一事件凸显了先进 AI 可能带来前所未有的国家安全风险，即使是高度机密的系统也可能存在漏洞。它可能加速政府监管，并重塑关于 AI 安全和红队测试实践的讨论。 此次红队测试由 NSA 自身进行，据报道该机构负责人确认了此次入侵。Mythos AI 是 Anthropic 设计的大型语言模型，旨在发现软件漏洞，由于安全担忧尚未公开发布。

rss · Tom's Hardware · 6月22日 17:26

**背景**: 红队测试涉及模拟对抗性攻击以评估组织的安全性。NSA 的机密系统是世界上最安全的系统之一，受到多层加密和访问控制的保护。Mythos AI 是专为网络安全任务设计的新一代 AI 模型，引发了对其双重用途潜力的担忧。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Mythos_AI">Mythos AI</a></li>
<li><a href="https://en.wikipedia.org/wiki/Red_team_testing">Red team testing</a></li>
<li><a href="https://www.timesnownews.com/technology-science/nsa-chief-says-mythos-breached-almost-all-classified-systems-in-hours-article-154719631">NSA Chief Says Mythos Breached ‘Almost All’ Classified Systems In Hours | Times Now</a></li>

</ul>
</details>

**标签**: `#AI Safety`, `#National Security`, `#Anthropic`, `#Red-Teaming`, `#Government Regulation`

---

<a id="item-9"></a>
## [微软与雪佛龙计划建设大型燃气数据中心](https://techcrunch.com/2026/06/22/microsoft-and-chevron-plan-one-of-the-largest-gas-powered-data-center-projects-in-us/) ⭐️ 8.0/10

微软与雪佛龙签署了一份为期 20 年的购电协议，用天然气为新建数据中心供电，这意味着未来几十年都将锁定碳排放。 这一合作凸显了激增的 AI 基础设施需求与企业气候目标之间的紧张关系，因为它使微软承诺了长期的大量碳排放。 该项目是美国最大的燃气数据中心项目之一，20 年的购电协议确保了稳定但碳密集的能源供应。

rss · TechCrunch · 6月22日 20:37

**背景**: 购电协议（PPA）是一种长期购买特定发电商电力的合同。数据中心消耗大量电力，而天然气是一种燃烧时会产生二氧化碳的化石燃料。微软此前承诺到 2030 年实现碳负排放，但这项交易似乎与这一目标相冲突。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://e360.yale.edu/digest/google-natural-gas-data-center">Google to Use Natural Gas to Power Massive Data Center in Texas</a></li>

</ul>
</details>

**标签**: `#data centers`, `#energy`, `#Microsoft`, `#carbon emissions`, `#AI infrastructure`

---

<a id="item-10"></a>
## [Groq 融资 6.5 亿美元，在英伟达交易后转向新云业务](https://techcrunch.com/2026/06/22/ai-chipmaker-groq-confirms-650m-raise-re-staffs-after-nvidias-20b-not-acqui-hire-deal/) ⭐️ 8.0/10

AI 芯片初创公司 Groq 确认完成 6.5 亿美元融资，并重组业务以专注于其新云（neocloud）服务，同时招聘新高管。此前英伟达曾提出 200 亿美元的“非收购式雇佣”交易，但 Groq 并未被收购。 此次融资和业务转型表明 Groq 决心在英伟达主导的市场中竞争，其转向云服务模式可能重塑 AI 算力的交付方式。此举也凸显了 AI 芯片初创公司向硬件以外领域多元化的趋势。 Groq 的新云业务利用其专为低延迟和确定性性能设计的 ASIC 芯片，为 AI 工作负载提供类似 GPU 的计算能力。公司正在招聘新高管来领导这一以云为核心的策略。

rss · TechCrunch · 6月22日 20:13

**背景**: Groq 是一家 AI 芯片公司，以其提供确定性、低延迟性能的定制 ASIC 加速器而闻名。“非收购式雇佣”交易指类似于收购式雇佣但未实际收购的大型投资或合作，通常涉及招聘关键人才。新云是一种商业模式，AI 优先的云提供商以灵活定价和容量管理交付 GPU 算力。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Groq">Groq - Wikipedia</a></li>
<li><a href="https://www.hivenet.com/post/post-neocloud-business-model-explained">Neocloud business model explained: how AI GPU clouds work | Hivenet</a></li>

</ul>
</details>

**标签**: `#AI chips`, `#funding`, `#Groq`, `#Nvidia`, `#cloud computing`

---

<a id="item-11"></a>
## [苹果芯片存在不可修补漏洞，可越狱 iPhone](https://techcrunch.com/2026/06/22/a-new-unpatchable-flaw-in-apple-chips-opens-the-door-to-an-iphone-jailbreak/) ⭐️ 8.0/10

网络安全公司 Paradigm Shift 披露了苹果 A12 和 A13 芯片中一个不可修补的硬件漏洞，使黑客能够越狱旧款 iPhone。该漏洞利用的是 SecureROM（安全启动组件），无法通过软件更新修复。 该漏洞削弱了数百万旧款 iPhone 的安全性，因为越狱可以绕过苹果的保护措施并暴露用户数据。这凸显了硬件层面漏洞无法修补的挑战，用户只能通过更换设备来确保安全。 该漏洞位于 SecureROM 中，这是一个在启动时执行的只读内存区域，因此无法修补。受影响的设备包括搭载 A12 和 A13 芯片的 iPhone，如 iPhone XS、XR、11 和 SE（第二代）。

rss · TechCrunch · 6月22日 18:50

**背景**: SecureROM 是苹果启动过程中的关键安全组件，负责在加载操作系统前验证其完整性。SecureROM 中的硬件漏洞罕见但严重，因为无法通过软件更新修复。此前苹果芯片中的不可修补漏洞，如 2022 年 MIT 在 M1 芯片上的发现，也针对类似的底层组件。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://techcrunch.com/2022/06/10/apple-m1-unpatchable-flaw/">MIT researchers uncover ' unpatchable ' flaw in Apple M1 chips</a></li>
<li><a href="https://news.google.com/stories/CAAqNggKIjBDQklTSGpvSmMzUnZjbmt0TXpZd1NoRUtEd2p6d0pDMEVSRW02MVhoVDdRUy1DZ0FQAQ?hl=en-GH&gl=GH&ceid=GH:en">Google News - Apple 's A12 and A13 chip vulnerability - Overview</a></li>

</ul>
</details>

**标签**: `#security`, `#Apple`, `#jailbreak`, `#vulnerability`, `#hardware`

---

<a id="item-12"></a>
## [SpaceX 与 Reflection AI 签署每月 1.5 亿美元算力协议](https://techcrunch.com/2026/06/22/spacex-inks-compute-deal-with-reflection-ai-an-open-source-ai-lab/) ⭐️ 8.0/10

SpaceX 与开源 AI 实验室 Reflection AI 签署了一项多年协议，自 2026 年 7 月 1 日起，Reflection AI 每月支付 1.5 亿美元，以使用 SpaceX 位于田纳西州孟菲斯附近的 Colossus 2 数据中心中英伟达最新的 GB300 AI 芯片。 这笔交易凸显了对尖端 AI 算力基础设施的巨大需求，并表明即使是开源 AI 实验室也愿意投入巨资以确保获得最新硬件，这可能会加速开放基础模型的开发。 该协议从 2026 年 7 月 1 日持续到 2029 年，Reflection AI 每月支付 1.5 亿美元，以立即使用 Colossus 2 数据中心内的英伟达 GB300 芯片及配套硬件；该数据中心最初由 xAI 建造，现也被 SpaceX 使用。

rss · TechCrunch · 6月22日 16:51

**背景**: Reflection AI 是一家美国初创公司，成立于 2024 年，由前 Google DeepMind 研究人员创立，专注于开源 AI 模型和 AI 辅助软件开发。英伟达 GB300 是 Blackwell Ultra 系列的一部分，相比前代产品性能大幅提升。Colossus 2 是位于密西西比州南 aven 的大型 AI 数据中心，由孟菲斯的原始 Colossus 扩展而来。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Reflection_AI">Reflection AI</a></li>
<li><a href="https://en.wikipedia.org/wiki/Colossus_(data_center)">Colossus (data center)</a></li>
<li><a href="https://grokipedia.com/page/NVIDIA_GB300">NVIDIA GB300</a></li>

</ul>
</details>

**标签**: `#AI`, `#compute`, `#SpaceX`, `#Nvidia`, `#infrastructure`

---

<a id="item-13"></a>
## [iOS 27 为 RCS 带来内联回复和照片反应](https://9to5google.com/2026/06/22/ios-27-android-replies/) ⭐️ 7.0/10

iOS 27 将为安卓与 iPhone 之间的 RCS 消息增加内联回复和照片反应功能，弥补跨平台通信的关键功能差距。 此更新显著改善了混合操作系统消息的用户体验，使 RCS 成为 iMessage 等专有平台更具可行性的替代方案。同时，它也促使苹果继续采用开放标准以实现更好的互操作性。 该功能预计随 2026 年秋季发布的 iOS 27 正式版推出，此前已于 2026 年 6 月发布开发者测试版。内联回复允许用户直接回复线程中的特定消息，而照片反应则让用户可以用图片而非仅表情符号进行反应。

rss · 9to5Google · 6月22日 20:32

**背景**: RCS（富通信服务）是一种现代消息协议，旨在用已读回执、输入指示和高分辨率媒体共享等功能取代 SMS/MMS。苹果在 iOS 18（2024 年）中采用 RCS 以改善安卓与 iPhone 之间的消息体验，但最初缺少内联回复和照片反应等功能，而这些功能已在安卓的 Google Messages 应用中可用。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://9to5google.com/2026/06/22/ios-27-android-replies/">iOS 27 will add replies and photo reactions to Android-iPhone RCS</a></li>
<li><a href="https://en.wikipedia.org/wiki/Rich_Communication_Services">Rich Communication Services - Wikipedia</a></li>
<li><a href="https://www.androidpolice.com/enable-disable-rcs-chat-android/">How to enable, disable, and use RCS Chat in Google Messages</a></li>

</ul>
</details>

**标签**: `#iOS`, `#RCS`, `#Android`, `#messaging`, `#cross-platform`

---

<a id="item-14"></a>
## [谷歌现在保存上传的图片和音频用于 AI 训练](https://9to5google.com/2026/06/22/google-saving-audio-images-used-to-search-how-to-turn-it-off/) ⭐️ 7.0/10

谷歌开始将用户搜索历史中的图片、Circle to Search 截图以及语音搜索的音频文件保存下来，用于训练其 AI 模型，但用户可以在设置中关闭此功能。 这一变化引发了重大的隐私担忧，因为它扩大了谷歌从搜索中收集用于 AI 训练的数据范围，影响了数百万使用视觉和语音搜索功能的用户。 保存的数据包括图片、Circle to Search 截图以及语音搜索音频，全部存储在用户的搜索历史中。用户可以通过调整谷歌账户设置来关闭此数据保存功能。

rss · 9to5Google · 6月22日 16:59

**背景**: 谷歌利用用户数据来改进其 AI 模型和搜索体验。Circle to Search 是部分安卓手机上的功能，允许用户通过圈选、高亮或点击来搜索屏幕上的任何内容。语音搜索则允许用户通过说话进行搜索。这项新政策将数据收集扩展到了这些输入方式。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://support.google.com/websearch/answer/14508957?hl=en">Search your screen with Circle to Search - Google Search Help</a></li>
<li><a href="https://search.google/ways-to-search/circle-to-search/">Circle to Search</a></li>

</ul>
</details>

**标签**: `#Google`, `#privacy`, `#AI training`, `#search`

---

<a id="item-15"></a>
## [塔塔遭网络攻击，苹果特斯拉文件泄露](https://9to5mac.com/2026/06/22/tata-cyberattack-allegedly-exposes-confidential-apple-documents/) ⭐️ 7.0/10

塔塔电子确认遭受网络攻击，黑客声称窃取并泄露了超过 630GB 数据，其中包括苹果和特斯拉的机密文件。 被盗数据包含超过 20.4 万份文件，样本中包含苹果供应商技术规范和特斯拉生产文件；塔塔未确认真实性，也未通知受影响客户。

rss · 9to5Mac · 6月22日 20:22

**背景**: 塔塔电子是印度重要的电子和半导体制造商，为苹果、特斯拉等科技巨头供货。该公司于 2023 年收购纬创印度工厂进入 iPhone 组装业务，随后又收购和硕印度子公司股份。2024 年，它与特斯拉签署了半导体供货协议。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://9to5mac.com/2026/06/22/tata-cyberattack-allegedly-exposes-confidential-apple-documents/">Tata cyberattack allegedly exposes confidential Apple... - 9to5Mac</a></li>
<li><a href="https://techcrunch.com/2026/06/22/tata-electronics-a-major-tech-supplier-to-apple-and-tesla-confirms-data-breach/">Tata Electronics , a major tech supplier to Apple and... | TechCrunch</a></li>
<li><a href="https://gulfnews.com/technology/tata-electronics-breach-how-serious-is-the-alleged-apple-tesla-data-leak-1.500583341">Tata Electronics Cyberattack : Alleged Apple and Tesla Data Leak...</a></li>

</ul>
</details>

**标签**: `#cybersecurity`, `#data breach`, `#Apple`, `#Tesla`, `#supply chain`

---

<a id="item-16"></a>
## [英伟达 Rubin 设计减少数据中心用水](https://www.theverge.com/tech/954139/nvidia-data-centers-rubin-liquid-cooling) ⭐️ 7.0/10

英伟达宣布其 Rubin 代全液冷数据中心参考设计几乎消除了所有用水并降低了功耗。该设计旨在解决 AI 基础设施的环境问题。 这很重要，因为数据中心的用水和能耗已引发公众批评，英伟达消除用水的声明可能树立新的可持续性标准。然而，它并未解决为数据中心供电的化石燃料发电厂的用水问题。 Rubin 代设计采用闭环液冷系统，实现了接近零的用水效率（WUE）和 1.05-1.2 的电源使用效率（PUE）。该设计是英伟达 Vera Rubin 平台的一部分，用于可扩展的 AI 推理。

rss · The Verge · 6月22日 23:24

**背景**: 数据中心消耗大量水用于冷却，通常使用冷却塔和冷水机组。液冷，尤其是闭环系统，可以大幅减少用水。英伟达的 Rubin 代是继 Hopper 和 Blackwell 之后的下一代 AI 平台。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.nvidia.com/en-us/data-center/technologies/rubin/">Infrastructure for Scalable AI Reasoning | NVIDIA Vera Rubin Platform</a></li>
<li><a href="https://introl.com/blog/water-usage-efficiency-wue-ai-data-center-cooling-guide-2025">Water Usage Efficiency | Introl Blog</a></li>
<li><a href="https://dgtlinfra.com/data-center-water-usage/">Data Center Water Usage : A Comprehensive Guide</a></li>

</ul>
</details>

**标签**: `#Nvidia`, `#data center`, `#liquid cooling`, `#sustainability`, `#AI infrastructure`

---

<a id="item-17"></a>
## [AI 虚拟装修用不切实际的房屋欺骗租客](https://www.theverge.com/report/953888/ai-virtual-staging-real-estate-apartment-listings) ⭐️ 7.0/10

文章报道称，房地产列表中的 AI 虚拟装修正在制造不切实际的期望并欺骗租客，例如一位纽约客发现她的梦想公寓竟是虚拟幻象。 这种做法通过误导租客加剧了住房市场的挫败感，引发了关于 AI 在面向消费者行业中使用的伦理问题，并呼吁加强消费者保护。 虚拟装修 AI 可以在几秒钟内用逼真的 AI 生成家具布置空房间，使列表看起来比实际更大、更吸引人，且通常没有明确披露。

rss · The Verge · 6月22日 20:00

**背景**: 虚拟装修是一种在空房间照片上数字添加家具和装饰的做法，以使其更具吸引力。AI 使这一过程更快、更便宜，但也更难被察觉，从而可能导致对潜在租客或买家的欺骗。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.virtualstagingai.app/">Virtual Staging with one click | 10 sec turnaround</a></li>
<li><a href="https://virtualstaging.ai/">Virtual Staging AI</a></li>
<li><a href="https://home-design.ai/virtual-staging-ai">Virtual Staging AI - Virtual Home Design | Home Design AI</a></li>

</ul>
</details>

**标签**: `#AI ethics`, `#real estate`, `#virtual staging`, `#consumer protection`, `#housing`

---

<a id="item-18"></a>
## [谷歌 DeepMind 向 A24 投资 7500 万美元开发 AI 电影工具](https://www.theverge.com/entertainment/953596/google-deepmind-a24-studio-ai-partnership) ⭐️ 7.0/10

谷歌 DeepMind 宣布向独立电影制片公司 A24 投资 7500 万美元，并建立合作伙伴关系，共同开发基于 AI 的电影制作技术。此次合作旨在创造新的工作流程和技术，为电影制作人拓展叙事可能性。 这标志着科技巨头首次为 AI 工具开发而向创意工作室进行重大投资，预示着 AI 融入电影制作的方式正在转变。这可能为 AI 实验室与娱乐行业未来的合作树立先例，并有可能改变制作流程。 据《华尔街日报》报道，谷歌在此次研发合作中向 A24 投资约 7500 万美元。DeepMind 联合创始人德米斯·哈萨比斯表示，从项目初期就与创作者直接合作是打造赋能真实故事讲述工具的关键。

rss · The Verge · 6月22日 17:18

**背景**: A24 是一家独立电影制作和发行公司，以《仲夏夜惊魂》和《瞬息全宇宙》等广受好评且具有文化影响力的电影而闻名。谷歌 DeepMind 是谷歌的 AI 研究实验室，负责 AlphaGo 和 Gemini 等突破性成果。此次合作正值好莱坞关于在创作过程中使用 AI 的持续争议之际，Netflix 和亚马逊米高梅等制片公司已开始投资 AI 工具。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.theverge.com/entertainment/953596/google-deepmind-a24-studio-ai-partnership">Google invests in A24 to build AI movie tools | The Verge</a></li>
<li><a href="https://www.howtogeek.com/google-deepmind-and-a24-ai-movie-workflow-partnership/">Google DeepMind and A24 team up on AI tools for filmmakers—what does this mean for movies?</a></li>
<li><a href="https://www.cnet.com/tech/services-and-software/google-deepmind-hollywood-a24-ai-filmmaking-tools/">Google DeepMind Partners With Hollywood Indie Darling A24 to Develop AI Filmmaking Tools - CNET</a></li>

</ul>
</details>

**标签**: `#AI`, `#film production`, `#Google DeepMind`, `#A24`, `#partnership`

---

<a id="item-19"></a>
## [中信建投：半导体设备景气确认，零部件涨价潮](https://36kr.com/newsflashes/3865012849005569?f=rss) ⭐️ 7.0/10

中信建投研报显示，Q1 全球半导体设备出货额达 365.5 亿美元，同比增长 14%，创历史新高，并指出全链条零部件正经历罕见涨价潮。SK 集团会长崔泰源透露，若所有建设计划推进，SK 海力士产能到 2034 年将是当前的三倍。 这表明全球半导体设备景气周期持续，且定价权正从芯片终端向设备与零部件结构性转移，影响整个科技硬件供应链的投资逻辑。 Q1 出货额 365.5 亿美元创单季历史新高，零部件涨价潮被描述为全链条历史罕见。SK 海力士计划到 2034 年将产能扩大至当前三倍，反映 AI 需求强劲。

rss · 36氪 · 6月23日 00:14

**背景**: 半导体设备和零部件是芯片制造的关键，其供应和定价直接影响生产成本与产能扩张。近期 AI 需求导致存储芯片紧缺，促使 SK 海力士等大厂加大投资。自 2025 年下半年起，DRAM、NAND 闪存及代工服务均出现涨价。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.cls.cn/detail/2400652">券商晨会精华：看好 半 导 体 产业趋势，关注 零 部 件 涨 价 情况</a></li>
<li><a href="https://post.smzdm.com/p/arlx5vkq/">刚刚， SK ...</a></li>
<li><a href="https://m.gmw.cn/2026-02/12/content_1304342172.htm?source=msn">集 体 涨 价 ！ 一晚上就 涨 了好几百元，网友：电脑快成奢侈品了</a></li>

</ul>
</details>

**标签**: `#semiconductor`, `#equipment`, `#supply chain`, `#components`, `#pricing`

---

<a id="item-20"></a>
## [CoreWeave 在 AI 扩展中遭遇流动性冲击](https://seekingalpha.com/article/4916818-coreweaves-liquidity-shock-meets-ai-scale?source=feed_all_articles) ⭐️ 6.0/10

主要独立 GPU 云提供商 CoreWeave 在快速扩展 AI 基础设施以满足需求时，正面临流动性问题。 这凸显了 AI 热潮中固有的财务风险，即对硬件的大规模资本支出可能使资金充足的初创公司也面临压力，从而可能影响更广泛的 AI 云生态系统。 Seeking Alpha 上的文章分析了 CoreWeave 在激进扩张背景下的流动性冲击，指出该公司严重依赖债务和股权融资购买 Nvidia H100 等 GPU，这造成了脆弱性。

rss · Seeking Alpha · 6月22日 22:19

**背景**: CoreWeave 是一家专注于 AI 工作负载的专业云提供商，提供用于机器学习、推理和渲染的 GPU 实例。与 AWS 或 Azure 等超大规模云服务商不同，CoreWeave 规模较小，更依赖外部资本为其硬件采购提供资金，因此对流动性紧缩较为敏感。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.coreweave.com/solutions/ai-inference">AI Inference | CoreWeave Solutions</a></li>
<li><a href="https://www.runpod.io/articles/guides/top-cloud-gpu-providers">Top 12 Cloud GPU Providers for AI and Machine Learning in 2026</a></li>

</ul>
</details>

**标签**: `#AI infrastructure`, `#cloud computing`, `#finance`, `#CoreWeave`

---