---
layout: default
title: "Horizon Summary: 2026-06-21 (ZH)"
date: 2026-06-21
lang: zh
---

> 从 254 条内容中筛选出 27 条重要资讯。

---

---

## 🔭 未知的未知

- [人造岩石挑战地质学](https://aeon.co/essays/the-strange-rocks-that-wouldnt-exist-without-us) ⭐️ 9.0/10

  > 这篇文章介绍了由人类活动创造的新型岩石——塑料砾岩和技术化石，模糊了地质学中自然与人工的界限。 这开启了一个新的“人类世地质学”领域，迫使地质学家重新思考岩石的构成，以及人类活动如何留下永久的地质记录。 塑料砾岩是由沉积颗粒和天然碎屑被熔融塑料粘合而成的岩石，而技术化石则是塑料和电子产品等人造物体，它们将在数百万年的地质记录中持续存在。

- [尼克·兰德的加速主义：后人类未来的黑暗愿景](https://aeon.co/essays/what-is-nick-lands-philosophy-of-accelerationism-really) ⭐️ 9.0/10

  > Vincent Lê在 Aeon 上发表的一篇文章探讨了尼克·兰德的加速主义哲学，该哲学认为技术和资本主义力量正推动走向一个人类过时的后人类未来。 这种哲学通过呈现一种更黑暗的进步叙事，挑战了主流的技术乐观主义，同时影响了极右翼恐怖分子和硅谷的技术乌托邦主义者。理解加速主义有助于将当前关于人工智能、资本主义和人类未来的辩论置于背景中。 英国哲学家尼克·兰德在 20 世纪 90 年代推广了加速主义，融合了控制论、资本主义和后人类主义。他的作品偏离了思辨实在论，并与左翼加速主义和“黑暗启蒙”运动有关联。

- [乔治·福斯特：敏感科学的先驱](https://www.themarginalian.org/2026/06/20/george-forster-andrea-wulf/) ⭐️ 9.0/10

  > 《边缘人》杂志上的一篇文章重点介绍了 18 世纪博物学家乔治·福斯特，他倡导一种植根于感受和共情的科学，挑战了启蒙运动时期占主导地位的理性主义范式。 这通过引入一个被遗忘的人物和概念——'敏感科学'——重新定义了科学史，它连接了启蒙运动的理性主义和浪漫主义的情感主义，为共情在知识创造中的作用提供了新的视角。 乔治·福斯特（1754–1794）是一位德裔波兰博学家，曾随父亲参加詹姆斯·库克的第二次航行，他的方法强调与自然的直觉和情感互动。

- [珍妮·维尔普勒-鲍尔：水族箱发明者与章鱼研究先驱](https://www.themarginalian.org/2026/06/14/jeanne-villepreux-power-argonaut/) ⭐️ 9.0/10

  > 一篇新文章强调了珍妮·维尔普勒-鲍尔被遗忘的贡献：她在 1832 年发明了第一个玻璃水族箱，并证明了船蛸章鱼自己制造外壳，为章鱼智力研究奠定了基础。 这个故事纠正了历史忽视，认可了一位女性科学家的发明和发现，这些是现代海洋生物学和头足类智力研究的基础，激励着更具包容性的科学史。 维尔普勒-鲍尔在西西里岛进行实验，使用定制的玻璃缸观察船蛸的发育，她的发现由理查德·欧文爵士提交给伦敦动物学会。

---

## 🧠 AI 学习

- [LLM 令牌选择：Logits、温度与 Top-P 解析](https://machinelearningmastery.com/the-statistics-of-token-selection-logits-temperature-and-top-p-walkthrough/) ⭐️ 8.0/10

  > 一篇新教程详细介绍了大型语言模型中令牌选择背后的统计机制，涵盖 logits、温度缩放和 top-p（核采样），并提供了数学直觉和实现细节。 理解这些参数对于从业者控制 LLM 输出的创造力、连贯性和安全性至关重要，能够实现更可预测和定制化的文本生成。 Logits 是模型最后一层输出的未归一化分数，通过 softmax 转换为概率；温度缩放调整概率分布的尖锐程度，top-p 采样动态选择累积概率超过阈值的令牌子集。

- [连续批处理提升大模型推理效率](https://machinelearningmastery.com/serving-multiple-users-at-once-how-continuous-batching-keeps-llm-inference-efficient/) ⭐️ 7.0/10

  > 文章解释了连续批处理如何在每次迭代中动态调度多个请求的 token，在 LLM 推理中优于静态批处理。 该技术显著提高了 LLM 服务的吞吐量并降低了延迟，使得大型模型在生产环境中能够经济高效地部署。 连续批处理（也称为迭代级调度）在每一步处理来自不同请求的 token，避免了静态批处理的填充浪费。文章包含演示静态和连续批处理实现的代码示例。

- [为长期运行代理构建上下文剪枝管道](https://machinelearningmastery.com/building-a-context-pruning-pipeline-for-long-running-agents/) ⭐️ 7.0/10

  > Machine Learning Mastery 上的一篇新教程展示了如何为长期运行的 LLM 代理构建上下文剪枝管道，通过摘要和滑动窗口技术来管理令牌限制。 这很重要，因为长期运行的代理经常超出令牌限制，导致上下文丢失和性能下降。该管道提供了一个实用解决方案，以在长时间任务中保持代理的连贯性。 该管道结合了摘要技术以压缩较旧的上下文，以及滑动窗口以仅保留最近相关的消息。它被设计为一个中间件层，根据时效性、重要性和相关性对上下文进行评分和过滤。

- [构建带错误恢复的多工具 Gemma 4 智能体](https://machinelearningmastery.com/building-a-multi-tool-gemma-4-agent-with-error-recovery/) ⭐️ 7.0/10

  > MachineLearningMastery 上的一篇教程展示了如何使用 Google DeepMind 的 Gemma 4 模型构建一个多工具智能体，并集成错误恢复机制以优雅地处理工具调用失败。 该教程为开发者提供了实用指导，帮助他们创建能够自主规划并执行多步骤任务的鲁棒 AI 智能体，错误恢复机制确保了在实际应用中的可靠性。 该智能体利用 Gemma 4 的原生函数调用支持，并采用重试逻辑和备用工具等技术来从错误中恢复。教程包含代码示例和逐步实现说明。

- [2026 年初重要 LLM 论文精选列表](https://magazine.sebastianraschka.com/p/llm-research-papers-2026-part1) ⭐️ 6.0/10

  > Sebastian Raschka 发布了一份 2026 年 1 月至 5 月期间值得关注的 LLM 研究论文精选列表。 该列表帮助研究人员和从业者快速识别快速发展的 LLM 领域中的关键进展，但缺乏深入的技术分析。 该文章是一篇综述而非深度分析，评分为 6.0/10，因为它提供了精选列表，但缺乏对每篇论文贡献的详细解释。

---

## ✍️ 表达提升

- [比尔·格利谈心智模型与系统思维](https://fs.blog/knowledge-project-podcast/bill-gurley/) ⭐️ 8.0/10

  > 著名风险投资家、圣塔菲研究所董事会成员比尔·格利在法纳姆街知识项目播客的新一期节目中，分享了他对心智模型和系统思维的见解。 这期节目结合了格利在华尔街、风险投资和复杂性科学领域的独特经验，提供了改善推理和决策的宝贵框架。 格利讨论了他从华尔街分析师到 Benchmark 合伙人的历程、在优步高速增长期间的工作，以及目前在圣塔菲研究所专注于复杂性科学的研究。

- [马克·平卡斯谈创新规则](https://fs.blog/knowledge-project-podcast/mark-pincus/) ⭐️ 6.0/10

  > Zynga 创始人马克·平卡斯在 Farnam Street 的播客节目中分享了他的创新规则，讨论了如何打造成功的产品。 平卡斯从打造《FarmVille》和《Words with Friends》中获得的见解，为希望在社交和游戏行业创新的企业家和产品开发者提供了实用经验。 该播客节目可在 YouTube、Spotify、Apple Podcasts 和 X 上收听，并在 Farnam Street 网站上提供完整文字稿。

- [RiseGuide 创始人谈专家驱动的自我提升](https://nesslabs.com/riseguide-featured-tool?utm_source=rss&utm_medium=rss&utm_campaign=riseguide-featured-tool) ⭐️ 5.0/10

  > Ness Labs 发布了对 RiseGuide 创始人 Oleksandr Matsiuk 的采访，该应用基于专家知识提供个性化的自我提升计划。 这次采访突显了专家主导、结构化的自我提升应用的增长趋势，这类应用可能比通用建议提供更可靠的指导。 RiseGuide 提供每日短课，专注于智力训练和沟通技巧，借鉴顶级创作者使用的策略。

---

## 🧬 人性与行为

- [给前罪犯第二次机会可能适得其反](https://behavioralscientist.org/what-becomes-of-second-chances/) ⭐️ 8.0/10

  > Jennifer Doleac 的文章探讨了针对前罪犯的第二次机会政策（如将逃票非刑事化）如何因行为反应而导致意外负面效果，例如累犯增加和就业减少。 这一分析挑战了宽松政策总是有助于改造的常见假设，强调了基于证据的政策设计以避免适得其反的必要性。 文章以纽约和 BART 的逃票执法为例，指出虽然有人主张非刑事化可减少因贫困导致的逮捕，但另一些人担心这会助长犯罪并增加犯罪率。

- [AI 对齐失败模式的分类法](https://www.lesswrong.com/posts/SAJoCCvmqyhba94sa/a-misalignment-taxonomy) ⭐️ 8.0/10

  > 一篇 LessWrong 文章提出了 AI 系统中五种内部错位和两种外部错位失败模式的分类法，为理解目标错位提供了结构化框架。 该分类法帮助 AI 安全研究人员系统性地识别和分析潜在失败模式，对于随着 AI 能力进步开发稳健的对齐技术至关重要。 五种内部错位类型包括早熟型、完美相关型、梯度型以及文章中详述的另外两种；外部错位包括规范博弈和奖励黑客。

---

## 📜 历史的节律

- [美帝国正在衰落吗？](https://www.historyextra.com/membership/are-we-now-witnessing-the-end-of-the-american-empire/) ⭐️ 8.0/10

  > 历史学家迈克尔·伍德探讨美国是否正在经历历史上帝国衰落的典型模式，暗示巨变可能正在发生。 这一分析通过历史先例的视角，为理解当前美国的政治和社会动荡提供了框架，可能影响政策制定者和公众对正在发生的事件的解读。 该文章发表在 HistoryExtra 上，由著名历史学家和广播员迈克尔·伍德撰写，为所做出的历史比较增添了可信度。

- [英国如何失去美国：独立战争分析](https://www.historyextra.com/membership/american-revolutionary-war-podcast-series-episode-three/) ⭐️ 7.0/10

  > 一个播客系列探讨了美国革命者如何通过战略、消耗战和全球动态击败大英帝国，其中包含历史学家的访谈。 这一分析提供了关于非对称战争和帝国过度扩张的教训，有助于理解现代权力更迭和抵抗运动。 该系列从多个角度涵盖独立战争，包括英国的高压统治和一名苏格兰破坏者，并追溯了《独立宣言》的演变。

---

## 💰 财富与复利

- [有用比有钱更有吸引力](https://ofdollarsanddata.com/being-useful-is-more-attractive-than-being-rich/) ⭐️ 8.0/10

  > 一篇关于一位 41 岁男子提前退休、拥有 200 万美元流动资产，却因整天打游戏和食用大麻被妻子称为“失败者”的 Reddit 帖子走红，凸显了没有目标的财务独立可能导致空虚。 这个故事挑战了 FIRE 运动认为财务独立本身就能带来满足感的假设，表明有用和有目标比仅仅富有更有吸引力，对人们如何定义成功和幸福具有启示意义。 该男子每年从资产和版税中获得 12.5 万美元和 7.5 万美元收入，但他的妻子认为他的日常生活令人反感；文章认为，资源本身并不能赢得尊重——你如何获得它们以及你用它们做什么才是关键。

- [“套路”与“艺术家”：创作光谱](https://ofdollarsanddata.com/hacks-vs-artists/) ⭐️ 8.0/10

  > Nick Maggiulli 借助 HBO 剧集《Hacks》阐述了创作中“套路”（商业化）与“艺术家”（真实性）之间的光谱，并指出大多数创作者介于两者之间。 这一框架帮助创作者和专业人士理解短期回报与长期真实性之间的权衡，这种张力与财务决策和生活选择息息相关。 Maggiulli 引入了 AI 中的“模式崩溃”概念来解释套路为何存在：对安全行为的重复奖励会剥夺创造力，导致产出同质化。

---

## 📰 技术资讯

1. [西湖大学绘制最精细人体蛋白质组空间图谱](#item-1) ⭐️ 9.0/10
2. [NASA 启动史无前例的 Swift 天文台救援任务](#item-2) ⭐️ 8.0/10
3. [Android 17 引入应用级内存限制](#item-3) ⭐️ 8.0/10
4. [为 AI 代理映射 754 项网络安全技能](#item-4) ⭐️ 8.0/10
5. [构建可靠的自主 AI 系统](#item-5) ⭐️ 7.0/10
6. [旧安卓手机组网通过声音探测沙赫德无人机](#item-6) ⭐️ 7.0/10
7. [京东刘强东计划培训 70 万快递员转型机器人维修](#item-7) ⭐️ 7.0/10
8. [《帝国时代 2》山羊被用作神经网络，嘲讽 AI 意识论](#item-8) ⭐️ 6.0/10
9. [微信灰度测试原生 AI 助手“小微”](#item-9) ⭐️ 6.0/10

---

<a id="item-1"></a>
## [西湖大学绘制最精细人体蛋白质组空间图谱](https://www.ithome.com/0/966/680.htm) ⭐️ 9.0/10

西湖大学与合作团队绘制出迄今分辨率最高、覆盖范围最广的人体蛋白质组空间图谱，涵盖 58 种正常组织和 25 种癌症类型，数据通过 db.prottalks.com 向全球开放。该研究发表于《自然》杂志，定量分析了 13,609 种蛋白质，并识别出 8,940 个癌症差异表达蛋白。 该图谱为人体蛋白质空间分布提供了系统性参考，有助于研究人员理解组织特异性功能和疾病机制。研究还发现了 2,879 个肿瘤特异蛋白，为癌症诊断和治疗提供了潜在靶点。 研究团队开发了微量样本蛋白质组分析方法，仅需芝麻大小的组织样本，分析速度提高约十倍，同时降低了实验成本。数据库包含 15,332 个蛋白质，其中 13,609 种在 58 种正常组织和 25 种癌症类型中得到精准定量。

rss · IT之家 · 6月21日 09:52

**背景**: 蛋白质是生命功能的主要执行者，也是绝大多数药物的直接作用靶点。然而，科学界对蛋白质在人体全身范围内的空间分布长期缺乏系统性认知。蛋白质组学是对蛋白质进行大规模研究，质谱法是全面分析蛋白质组的关键工具。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC7854154/">A Protocol to Map the Spatial Proteome Using HyperLOPIT in...</a></li>
<li><a href="https://link.springer.com/article/10.1186/s12953-024-00231-2">Spatial proteomics : unveiling the multidimensional landscape of...</a></li>

</ul>
</details>

**标签**: `#proteomics`, `#biomedical research`, `#cancer`, `#open data`, `#Nature`

---

<a id="item-2"></a>
## [NASA 启动史无前例的 Swift 天文台救援任务](https://www.ithome.com/0/966/626.htm) ⭐️ 8.0/10

NASA 将于 2026 年 6 月 27 日启动一项大胆的救援任务，利用 Katalyst Space Technologies 的“链路号”航天器与 Swift 空间天文台对接并将其抬升至更高轨道，避免其即将发生的大气层再入。 此次任务是首次尝试与未设计用于在轨服务的卫星对接并进行维护，有望将 Swift 的寿命延长五年，并为未来的卫星救援和维护操作树立先例。 重 425 千克的链路号航天器配备三条机械臂和霍尔推进器，将搭乘最后一枚飞马座 XL 火箭发射。该任务在九个月内以 3000 万美元预算完成开发，面临太阳能帆板故障和 Swift 脆弱的隔热毯等风险。

rss · IT之家 · 6月21日 03:10

**背景**: 尼尔·盖雷尔斯 Swift 天文台于 2004 年发射，是一个多波段空间望远镜，用于研究伽马射线暴。它最初运行在 600 公里轨道，但由于太阳活动加剧导致轨道衰减，且缺乏推进系统。若不干预，它将在 2026 年底坠入地球大气层。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Neil_Gehrels_Swift_Observatory">Neil Gehrels Swift Observatory - Wikipedia</a></li>
<li><a href="https://en.wikipedia.org/wiki/Katalyst_Space_Technologies">Katalyst Space Technologies</a></li>
<li><a href="https://swift.gsfc.nasa.gov/">The Neil Gehrels Swift Observatory</a></li>

</ul>
</details>

**标签**: `#space`, `#NASA`, `#satellite servicing`, `#Swift observatory`, `#orbital mechanics`

---

<a id="item-3"></a>
## [Android 17 引入应用级内存限制](https://www.reddit.com/r/androiddev/comments/1ubgnw0/android_app_memory_limits_in_place_from_android_17/) ⭐️ 8.0/10

从 Android 17 开始，平台在原有的系统级低内存杀手守护进程（LMKD）基础上增加了应用级内存限制，即使设备整体内存充足，系统也可以终止超出其分配内存预算的单个应用。 这一变化从根本上改变了 Android 应用管理内存的方式，要求开发者更严格地优化内存使用以避免意外终止，并将内存管理模型从被动响应（系统级压力）转变为主动预测（应用级上限）。 应用级内存上限基于设备总 RAM 确定，并在首个版本中故意设置得较为保守；超出限制的应用会以特定的退出原因被终止，使开发者更容易诊断内存问题。

reddit · r/androiddev · /u/meonlineoct2014 · 6月21日 04:33

**背景**: 在 Android 17 之前，Android 完全依赖低内存杀手守护进程（LMKD）在系统内存不足时根据进程优先级（如前台 vs 后台）杀死最不重要的进程。新的应用级限制增加了第二种机制，即使设备未处于全局内存压力下，也可以杀死内存占用过高的应用，从而鼓励更好的内存管理习惯。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://source.android.com/docs/core/perf/lmkd">Low memory killer daemon - Android Open Source Project</a></li>
<li><a href="https://stora.sh/blog/2026-04-25-android-17-memory-limits-guide">Android 17 app memory limits, explained: what they are, why Google added them, and how to test your app before the stable release — Stora</a></li>
<li><a href="https://developer.android.com/topic/performance/memory-overview">Overview of memory management | App quality | Android Developers</a></li>

</ul>
</details>

**社区讨论**: Reddit 讨论强调这一变化对应用架构意义重大，一些开发者对保守的默认限制和需要更多测试工具表示担忧。另一些人则赞赏向主动内存管理的转变，认为这可以减少系统级卡顿。

**标签**: `#Android`, `#memory management`, `#app development`, `#Android 17`

---

<a id="item-4"></a>
## [为 AI 代理映射 754 项网络安全技能](https://github.com/mukul975/Anthropic-Cybersecurity-Skills) ⭐️ 8.0/10

该仓库满足了 AI 代理对标准化、多框架网络安全技能定义日益增长的需求，使得跨不同工具和平台的安全自动化更加有效和一致。 该仓库涵盖 26 个安全领域，采用 Apache 2.0 许可证，并使用 agentskills.io 开放标准，该标准利用模型上下文协议（MCP）实现跨平台兼容性。

ossinsight · mukul975 · 6月21日 11:10

**背景**: MITRE ATT&CK 是一个广泛使用的对手战术和技术框架，而 NIST CSF 2.0 提供了全面的网络安全风险管理框架。MITRE ATLAS 将 ATT&CK 扩展到 AI 系统，D3FEND 则专注于防御性对策。agentskills.io 标准定义了 AI 代理技能的通用格式，实现了跨平台的互操作性。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://agentskills.io/">A standardized way to give AI agents new capabilities and expertise.</a></li>
<li><a href="https://www.getastra.com/blog/security-audit/mitre-atlas/">The Ultimate Guide to MITRE ATLAS (2026) (Reviewed)</a></li>
<li><a href="https://www.vectra.ai/topics/mitre-d3fend">What is MITRE D 3 FEND : Framework & ATT&CK Mapping</a></li>

</ul>
</details>

**标签**: `#cybersecurity`, `#AI agents`, `#MITRE ATT&CK`, `#NIST CSF`, `#agent skills`

---

<a id="item-5"></a>
## [构建可靠的自主 AI 系统](https://martinfowler.com/articles/reliable-llm-bayer.html) ⭐️ 7.0/10

Martin Fowler 发布了一份关于构建可靠的基于 LLM 的智能体的实用指南，强调数据质量和评估远比模型调优更为关键。文章详细介绍了文档检索智能体的案例研究，并强调了上下文纪律和动态工作流设计的重要性。 该指南为构建自主 AI 系统的开发者提供了可操作的见解，将焦点从以模型为中心的改进转向以数据为中心的实践。它解决了非确定性循环和动态数据获取等实际挑战，这些对生产环境的可靠性至关重要。 文章描述了一种包含循环以进行重新规划的动态工作流，这引入了非确定性和透明性挑战。它还强调，更大的上下文窗口并不能消除仔细决定模型不应看到哪些信息的必要性。

hackernews · sarangk90 · 6月21日 04:28 · [社区讨论](https://news.ycombinator.com/item?id=48615680)

**背景**: 自主 AI 系统是能够自主行动以实现目标的 AI 系统，它们使用推理、规划和工具调用。与仅响应提示的传统 LLM 不同，智能体可以调用 API、查询数据库并在任务上迭代。由于它们的自主性和非确定性，这类系统的可靠性是一个主要关注点。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.grammarly.com/agentic-ai">What is Agentic AI ? | Agentic AI 101</a></li>
<li><a href="https://arxiv.org/html/2507.21504v1">Evaluation and Benchmarking of LLM Agents: A Survey - arXiv.org</a></li>

</ul>
</details>

**社区讨论**: 评论者强调数据质量是主导因素（99%的工作量 vs 1%的智能体调优），并且动态数据获取会导致打地鼠式的问题。其他人则指出上下文纪律的重要性被低估，并对非确定性循环与透明性要求之间的冲突表示担忧。

**标签**: `#agentic AI`, `#LLM`, `#reliability`, `#data quality`, `#evaluation`

---

<a id="item-6"></a>
## [旧安卓手机组网通过声音探测沙赫德无人机](https://www.tomshardware.com/tech-industry/drones/acoustic-mapping-app-uses-thousands-of-networked-old-android-phones-to-hunt-shahed-drones-crowd-sourced-microphone-network-spots-small-low-rcs-military-targets) ⭐️ 7.0/10

一款新应用将数千部旧安卓手机转变为众包声学传感器网络，通过分析伊朗沙赫德无人机独特的声学特征来探测和追踪这类低雷达截面目标。 这种低成本、可扩展的方法可在乌克兰等冲突地区为无人机蜂群提供早期预警——雷达难以探测小型低空目标——同时展示了废弃智能手机在国防领域的新用途。 该应用利用手机内置麦克风捕获声学特征，然后通过网络化多设备数据三角定位无人机的位置和轨迹。它专门针对具有独特声音特征的沙赫德无人机。

rss · Tom's Hardware · 6月21日 10:30

**背景**: 沙赫德无人机是伊朗制造的游荡弹药，在俄乌战争中被广泛使用。它们具有低雷达截面（RCS），传统雷达难以探测。声学探测利用声音传感器捕捉无人机电机和螺旋桨的噪音，提供了一种补充手段。利用旧安卓手机进行众包，可以构建密集、低成本的传感器网络。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.unmannedairspace.info/counter-uas-systems-and-policies/australian-research-finds-acoustic-signals-can-identify-drones-almost-four-kilometers-away/">Australian research finds acoustic signals can identify drones almost...</a></li>
<li><a href="https://en.wikipedia.org/wiki/Shahed_drones">Shahed drones - Wikipedia</a></li>
<li><a href="https://bigsoundbank.com/blog/when-sound-hunts-down-drones-b589.html">When sound hunts down drones</a></li>

</ul>
</details>

**标签**: `#acoustic detection`, `#crowdsourcing`, `#drones`, `#Android`, `#defense`

---

<a id="item-7"></a>
## [京东刘强东计划培训 70 万快递员转型机器人维修](https://www.ithome.com/0/966/657.htm) ⭐️ 7.0/10

在 2026 年 APEC 工商领导人中国论坛上，京东创始人刘强东宣布了“涅槃计划”，计划对包括快递员在内的 7 万名蓝领工人进行再培训，让他们转型从事机器人维修和保养工作，以应对 AI 和自动化对传统岗位的替代。 这一举措标志着企业在自动化浪潮中承担劳动力再培训责任的重大转变，可能为大型电商和物流公司应对 AI 导致的岗位替代树立先例。 京东已与 120 所学校签约提供技术培训，此前还宣布计划五年内培养 10 万名工程师，覆盖机器人和智能家居售后维修。刘强东强调，技术应让人类生活更美好，而不是剥夺工人的权利。

rss · IT之家 · 6月21日 08:11

**背景**: 京东运营着中国最大的物流网络之一，雇佣了数十万名快递员。随着 AI 和机器人技术的进步，京东等公司正在探索最后一公里配送的自动化，引发了关于失业的担忧。“涅槃计划”是企业主导的再培训计划以应对技术颠覆这一更广泛趋势的一部分。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://ai.zol.com.cn/1202/12021508.html">京东启动涅槃计划：70万快递员将转型智能技术岗位</a></li>
<li><a href="https://t.cj.sina.com.cn/articles/view/1642634100/61e89b7404001oeqm">刘强东宣布涅槃计划，70万快递员将接受技术培训</a></li>
<li><a href="https://zhuanlan.zhihu.com/p/2043654844397925373">京东宣布5年培养10万名机器人维修工程师，这个新兴岗位的薪资天花板和...</a></li>

</ul>
</details>

**标签**: `#AI`, `#automation`, `#labor`, `#reskilling`, `#e-commerce`

---

<a id="item-8"></a>
## [《帝国时代 2》山羊被用作神经网络，嘲讽 AI 意识论](https://www.tomshardware.com/tech-industry/artificial-intelligence/age-of-empires-iis-goats-used-as-ai-building-blocks-to-build-a-neural-network-goaty-experiment-mocks-the-idea-of-chatbot-consciousness-microsoft-ai-researchers-project-makes-an-absurdist-point-about-ai-consciousness) ⭐️ 6.0/10

微软 AI 研究员 Adrian de Wynter 在《帝国时代 2》中用山羊构建了一个功能性神经网络，并发表了一篇讽刺性论文，题为《如果 LLM 拥有人类属性，那么《帝国时代 2》也有》，以此论证赋予 LLM 意识是荒谬的。 该实验凸显了将大型语言模型拟人化的危险，提醒 AI 社区：类人反应并不意味着意识或理解。 De Wynter 基于山羊的神经网络复制了与 LLM 相同的数学运算，但没有人会认为这些山羊有意识，这表明仅凭架构并不能赋予感知能力。

rss · Tom's Hardware · 6月21日 11:00

**背景**: 像 ChatGPT 这样的大型语言模型（LLM）通过海量文本数据训练生成类人回复，导致有人声称它们具有意识。De Wynter 的项目利用游戏中的单位作为逻辑门构成神经网络，表明任何能进行计算的系统都可以模仿 LLM 行为，从而削弱了意识主张。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.pcgamer.com/software/ai/microsoft-researcher-builds-goat-powered-neural-network-in-age-of-empires-2-to-show-why-we-should-stop-assuming-that-llms-behave-like-humans-just-because-they-were-trained-with-natural-language/">Microsoft researcher builds goat -powered neural network... | PC Gamer</a></li>
<li><a href="https://the-decoder.com/microsoft-researcher-builds-a-working-neural-network-out-of-goats-in-age-of-empires-ii-to-critique-ai-science/">Microsoft researcher builds a working neural network out of goats in...</a></li>
<li><a href="https://digg.com/tech/55m83irw">Adrian de Wynter's parody paper builds logic gates in Age of Empires ...</a></li>

</ul>
</details>

**社区讨论**: 一些人称赞该实验巧妙且发人深省，而另一些人则斥之为误导性的诡辩。有评论指出 LLM 是神经网络，而非任意计算系统，但研究者关于拟人化的观点仍然成立。

**标签**: `#AI`, `#consciousness`, `#LLM`, `#humor`, `#critique`

---

<a id="item-9"></a>
## [微信灰度测试原生 AI 助手“小微”](https://36kr.com/newsflashes/3862458180359424?f=rss) ⭐️ 6.0/10

微信已开始小范围灰度测试原生 AI 助手“小微”，入口位于主界面左上角的小眼睛图标。该助手支持通过文字或语音对话操作微信原生功能及调起小程序。 这标志着微信首次集成原生 AI 助手，可能改变用户与应用的交互方式。它可能为在中国最大的即时通讯平台中引入更深入的 AI 功能铺平道路，影响数十亿用户。 该测试仅限小部分用户，助手可帮助完成给好友发消息、查询朋友圈、预约服务等任务。目前尚不清楚“小微”使用何种底层 AI 模型，但微信此前曾测试过 DeepSeek-R1 用于 AI 搜索。

rss · 36氪 · 6月21日 05:03

**背景**: 微信是一款拥有超过十亿用户的超级应用，提供即时通讯、社交媒体、支付等功能。AI 助手已成为趋势，竞争对手如支付宝也已推出类似功能。微信此举是在此前接入 DeepSeek 驱动的 AI 搜索之后进行的。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://money.udn.com/money/story/5604/9579280">緊追支付寶！ 微 信 AI ... | 經濟日報</a></li>
<li><a href="https://t.me/times001/812451">电报时报 – Telegram</a></li>
<li><a href="https://h5.ifeng.com/c/vivoArticle/v0020rEjtb4umTdOOBz4thkVL7jQxSv61cTArmS1x5SuZEY__?isNews=1&showComments=0">微 信 接入DeepSeek！ 长啥样？ 意味着什么？ 看这篇就够了</a></li>

</ul>
</details>

**社区讨论**: 未提供社区评论，但根据评分和标签，用户情绪表现为中等兴趣但并非高度兴奋，认为这是一次增量更新而非突破性进展。

**标签**: `#WeChat`, `#AI assistant`, `#beta`, `#voice interaction`

---