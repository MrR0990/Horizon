---
layout: default
title: "Horizon Summary: 2026-06-24 (ZH)"
date: 2026-06-24
lang: zh
---

> 从 294 条内容中筛选出 32 条重要资讯。

---

---

## 🔭 未知的未知

- [庄子对精英制度的批判](https://aeon.co/essays/zhuangzi-and-the-case-against-meritocracy) ⭐️ 9.0/10

  > Aeon 上的一篇文章借鉴古代道家哲学家庄子的思想，论证了“白手起家”的概念是一种幻觉，精英制度是一个有严重缺陷的观念。 这一批判通过引入强调相互依存和自然自发性而非个人努力的哲学视角，挑战了现代社会中（尤其是科技和创业文化中）普遍存在的关于成功和应得性的根深蒂固的假设。 该文章由 Christine Abigail L Tan 撰写，发表在 Aeon 上。它利用庄子的思想论证成功很大程度上归因于外部因素和运气，而非纯粹的个人功绩。

- [人类活动创造新型岩石](https://aeon.co/essays/the-strange-rocks-that-wouldnt-exist-without-us) ⭐️ 9.0/10

  > John MacDonald 在 Aeon 上发表的文章探讨了人类活动如何创造出新型岩石，如混凝土和含塑料沉积物，这些岩石挑战了传统地质分类。 这重新定义了自然与人工的界限，将地质学扩展至人类世，促使人们重新审视何为“天然”岩石。 文章重点介绍了“人类世岩石”，如混凝土——一种由天然和加工材料组成的人造岩石，以及工业废物形成的其他构造。

- [尼克·兰德的加速主义：后人类未来](https://aeon.co/essays/what-is-nick-lands-philosophy-of-accelerationism-really) ⭐️ 9.0/10

  > Vincent Lê在 Aeon 上发表的文章探讨了尼克·兰德的加速主义哲学，该哲学设想了一个技术和资本主义加速超越人类控制、走向后人类机器智能的未来。 这篇文章介绍了一种激进的哲学运动，挑战了关于技术、资本主义和人类能动性的假设，为不熟悉大陆哲学的技术专业人士开辟了新的思想领域。 兰德的哲学通过直面死亡的不可避免性来批判人类自恋，他看似矛盾的立场源于超越人类中心主义的一贯动机。

- [多迷走神经理论：人类连接的生物学基础](https://www.themarginalian.org/2026/06/22/polyvagal-theory/) ⭐️ 9.0/10

  > The Marginalian 上的一篇文章探讨了多迷走神经理论，揭示了神经系统如何支配社会纽带、破裂与修复，并将连接视为一种生物学需求。 该理论为理解创伤、社交焦虑和关系动态提供了神经科学视角，为治疗师、教育工作者以及任何寻求更深层人际连接的人提供了实用见解。 多迷走神经理论由 Stephen Porges 于 1994 年提出，认为迷走神经有两个不同分支——腹侧迷走神经（社交参与）和背侧迷走神经（静止）——调节安全感和连接。

---

## 🧬 人性与行为

- [玩具 Transformer 保留无用的信念状态数据](https://www.lesswrong.com/posts/vzav5kfbRCDQyEB8v/toy-transformers-may-represent-belief-state-geometry) ⭐️ 9.0/10

  > 一项关于玩具 Transformer 的研究表明，它们在残差流中保留了可证明无用的信念状态数据，即使这些数据对预测已不再相关，只有在容量压力下才会丢弃，且优先丢弃最旧的信息。 这一发现挑战了最优预测理论的假设——即 Transformer 会修剪无关信息，揭示了一种非显而易见的表征行为，可能为机械可解释性和认知科学提供启示。 实验使用了隐马尔可夫模型（HMM）和一个随机“硬币”元素，该元素后来变得与预测无关；消融已失效的硬币信息不会导致预测准确率下降，证实了其惰性。

- [被了解是感受到爱的关键](https://behavioralscientist.org/how-can-we-feel-loved-if-we-dont-feel-known/) ⭐️ 8.0/10

  > 研究人员 Sonja Lyubomirsky 和 Harry Reis 基于七年的合作和对近 2000 名美国成年人的调查，提出被伴侣了解是感受到爱的关键。 这一见解重塑了关于爱的常见误解，表明努力被了解和了解他人可能比追求吸引力或成功更能促进关系幸福。 文章指出了关于感受爱的五个常见误解，例如“如果我更有吸引力、更有权力或更成功”。该研究是他们即将出版的书籍《如何感受爱》的一部分。

---

## 🧠 AI 学习

- [Logit 掩码：唯一能保证 LLM 输出正确的方法](https://pub.towardsai.net/your-llm-obeys-99-of-the-time-that-1-is-taking-down-production-a6ea1b6f00c1?source=rss----98111c9905da---4) ⭐️ 8.0/10

  > 文章指出，即使 99%服从的 LLM 也可能因无效输出导致生产故障，并提倡使用 logit 掩码——将禁止的 token 的 logit 设为负无穷——来强制执行严格的输出约束。 这很重要，因为依赖 LLM 的生产系统需要确定性的输出保证；logit 掩码提供了一种有原则、可验证的解决方案，能完全防止格式错误的输出，这与提示工程或重试循环不同。 Logit 掩码在 logit 计算和 softmax 归一化之间操作，将禁止的 token 的 logit 设为负无穷，使其概率恰好为零。该技术可根据模式约束在每个 token 位置应用。

- [AI 代理消除打字后，意图成为瓶颈](https://pub.towardsai.net/once-an-ai-agent-removes-typing-intent-becomes-the-bottleneck-9b957ba9be95?source=rss----98111c9905da---4) ⭐️ 7.0/10

  > 对 1263 个真实编码提示的分析表明，使用 AI 编码代理时，瓶颈从打字速度转变为精确表达意图的能力。 这一洞察重新定义了开发者需要培养的技能：意图清晰度比提示工程更重要，这可以显著提高生产力并减少 AI 辅助编码中的昂贵错误。 中位提示仅 78 个字符，三分之二少于 120 个字符；有效的提示将结果、约束、原因、范围、自主权和未知因素浓缩在一两句话中。

- [使用本地模型对金融 PDF 进行 RAG 基准测试](https://pub.towardsai.net/benchmarking-rag-architectures-locally-on-a-real-financial-pdf-0f84287d95ed?source=rss----98111c9905da---4) ⭐️ 7.0/10

  > 一个三部分系列文章使用仅本地开源模型对一份密集的金融 PDF 进行六种 RAG 架构的基准测试，第一部分聚焦于文本层检索管道，包括 Naive RAG、Hybrid RAG 以及带 ColBERT 重排序器的 Hybrid RAG。 这项工作解决了受监管行业中数据必须留在本地的实际约束，提供了在真实文档上而非理想化基准上对 RAG 方法的实用比较。 文档是 Akbank 的 2025 年第四季度财报演示文稿，一份 38 页的纯图像 PDF，包含图表和表格，所有实验在单台工作站上使用 Ollama 服务器运行，无外部端点。

- [2026 年上半年 LLM 研究论文汇总](https://magazine.sebastianraschka.com/p/llm-research-papers-2026-part1) ⭐️ 6.0/10

  > 一份精选的 2026 年 1 月至 5 月间发表的 LLM 研究论文列表已发布，概述了近期进展。 该汇总帮助研究人员和从业者快速识别快速发展的 LLM 领域的关键趋势和突破，节省文献回顾时间。 该列表涵盖 2026 年 1 月至 5 月的论文，但未提供深入的技术分析或对单个工作的详细比较。

- [使用 Scikit-LLM 构建情感分析流水线](https://machinelearningmastery.com/building-an-end-to-end-sentiment-analysis-pipeline-with-scikit-llm/) ⭐️ 6.0/10

  > 一篇教程展示了如何使用 Scikit-LLM（一个将大语言模型与 scikit-learn 集成的库）构建端到端的情感分析流水线。它用基于 LLM 的嵌入取代了 TF-IDF 等传统特征提取方法。 这种方法通过利用 LLM 的语义理解简化了 NLP 流水线，可能比传统方法提高准确性。它使熟悉 scikit-learn 的开发者更容易进行高级情感分析。 该教程涵盖了在 scikit-learn API 内的数据预处理、模型选择和评估。它强调了 Scikit-LLM 能够将 LLM 用作特征提取器或分类器，同时保持与 scikit-learn 的网格搜索和流水线的兼容性。

---

## ✍️ 表达提升

- [比尔·格利谈心智模型与系统思维](https://fs.blog/knowledge-project-podcast/bill-gurley/) ⭐️ 8.0/10

  > 著名风险投资家、圣塔菲研究所董事会成员比尔·格利在 Farnam Street 的 Knowledge Project 播客中探讨了心智模型与系统思维。 这期节目结合格利在风险投资和复杂性科学方面的经验，提供了改善决策与推理的实用框架。 格利分享了他在华尔街、Benchmark 以及 Uber 高速增长期的职业生涯见解，以及他目前在圣塔菲研究所研究复杂系统的工作。

- [把面试变成一场开卷推理游戏](https://sspai.com/post/110947) ⭐️ 7.0/10

  > 文章提出了一套系统化的备战与复盘 SOP，将求职面试重新定义为一场推理游戏，强调模式识别和结构化沟通。 这种方法为求职者提供了一个具体、可操作的框架，有助于提升面试表现，可能减少焦虑并提高在高风险职业场景中的成功率。 该 SOP 包括收集样题、识别重复主题、构建模块化答案以及进行面试后复盘以优化策略等步骤。

- [Mark Pincus 谈创新规则：经过验证、更好、全新](https://fs.blog/knowledge-project-podcast/mark-pincus/) ⭐️ 6.0/10

  > Zynga 创始人 Mark Pincus 在 Farnam Street 的播客采访中分享了他的创新框架“经过验证、更好、全新”，该框架源自他打造 FarmVille 和 Words with Friends 等社交游戏爆款的经验。 该框架为创业者和产品团队提供了一种实用的视角，以结构化方式评估创新机会，平衡风险与新颖性。 Pincus 将创新分为三个层级：“经过验证”（低风险、渐进式）、“更好”（中等风险、改进型）和“全新”（高风险、突破性）。他强调，大多数成功产品都结合了多个层级的元素。

---

## 💰 财富与复利

- [贫困学生即使获得相同学位，收入仍低 7%](https://ofdollarsanddata.com/why-poorer-students-earn-less-even-with-the-same-degree/) ⭐️ 8.0/10

  > 一项涵盖超过 3000 万学生的研究发现，来自贫困背景的毕业生在毕业十年后，即使就读同一所大学、获得相同学位和成绩，收入仍比富裕同龄人低 7%。 这挑战了仅靠教育就能实现机会均等的假设，揭示了社会经济背景通过社会资本和人脉等因素持续影响收入，对旨在减少不平等的政策具有重要意义。 即使在控制大学选择性、专业和成绩后，收入差距依然存在；非精英四年制大学中，父母收入与子女收入排名的斜率为 0.095，而全国范围内为 0.288。

- [有用比有钱更有吸引力](https://ofdollarsanddata.com/being-useful-is-more-attractive-than-being-rich/) ⭐️ 8.0/10

  > 一篇在 Reddit 上疯传的帖子描述了一位 41 岁男子，他拥有 200 万美元流动资产并提前退休，但每天沉迷于吸食大麻玩电子游戏，导致妻子称他为“失败者”。文章用这个故事论证，没有目标的财务独立会导致不满，并且有用比有钱更有吸引力。 这挑战了常见的 FIRE（财务独立，提前退休）叙事，强调目标和有用性对于充实退休生活至关重要。它凸显了在财务财富之外建立“人生资本”的重要性，影响个人和社区对待提前退休规划的方式。 该男子拥有 200 万美元流动资产、65 万美元退休金和每年 7.5 万美元的版税收入，但妻子认为他每天吸食大麻玩游戏的习惯令人反感。文章引用进化心理学家 David Buss 的跨文化择偶偏好研究，支持雄心比资源更重要的观点。

---

## 📜 历史的节律

- [百年来五位首相的垮台](https://www.historyextra.com/membership/prime-minister-resignation-downfall/) ⭐️ 6.0/10

  > 历史学家理查德·托耶分析了过去一百年中五位英国首相最引人注目的垮台事件，探讨了其辞职的原因和背景。 这一分析提供了对政治领导危机的历史视角，揭示了垮台的模式，有助于理解当代政治不稳定。 文章发表在 HistoryExtra 上，包含了托耶教授挑选的五个案例研究，但提供的片段中未列出具体首相姓名。

- [美国开国元勋吞并加拿大的失误](https://www.historyextra.com/membership/the-founding-fathers-wanted-to-acquire-canada-for-the-united-states-but-they-made-one-huge-mistake/) ⭐️ 6.0/10

  > Eliga Gould 的文章追溯了从独立战争到门罗主义期间美国早期吞并加拿大的野心，并指出一个导致这些努力失败的策略性错误。 这一历史分析揭示了美国扩张主义中鲜为人知的一面及其失败，为早期美国外交政策和美加持久关系提供了见解。 文章具体考察了从 1775 年到门罗主义时期，认为开国元勋对待加拿大的方式存在缺陷，但摘要中未提供该错误的具体细节。

---

## 📰 技术资讯

1. [中国黑市英伟达 A100 服务器价格飙升至 8.2 万美元](#item-1) ⭐️ 8.0/10
2. [Meta 暂停 AI 培训项目，因员工数据泄露](#item-2) ⭐️ 8.0/10
3. [中国启动工业 5G 独立专网试点](#item-3) ⭐️ 8.0/10
4. [中国天眼 FAST 完成馈源舱钢丝绳国产化更换](#item-4) ⭐️ 8.0/10
5. [Bunny DNS 免费：欧洲的 Cloudflare 替代方案](#item-5) ⭐️ 7.0/10
6. [日月光预计先进封装营收 2026 年翻倍，计划新建 15 座工厂](#item-6) ⭐️ 7.0/10
7. [RDLA：一种新的离线优先响应式数据层架构](#item-7) ⭐️ 7.0/10
8. [影眸科技完成数亿元融资，发布 Hyper3D Rodin Gen-2.5](#item-8) ⭐️ 7.0/10
9. [AI 赋能一人公司：创业新时代](#item-9) ⭐️ 7.0/10
10. [前 Meta CTO：基础设施是硬科技护城河](#item-10) ⭐️ 7.0/10
11. [OpenMontage：首个开源智能视频制作系统](#item-11) ⭐️ 7.0/10
12. [树莓派 Pico W 变身 USB Wi-Fi 适配器](#item-12) ⭐️ 6.0/10
13. [终止项目：工程领导者最艰难的决定](#item-13) ⭐️ 6.0/10
14. [36 氪 WAVES 2026：全密态计算破解 AI 数据安全](#item-14) ⭐️ 6.0/10

---

<a id="item-1"></a>
## [中国黑市英伟达 A100 服务器价格飙升至 8.2 万美元](https://www.tomshardware.com/pc-components/gpu-drivers/five-year-old-nvidia-a100-servers-triple-in-price-in-china) ⭐️ 8.0/10

由于走私打击和海关冻结，中国公司现在为搭载五年前英伟达 A100 加速器的服务器支付高达 8.2 万美元，是原价的三倍。 这一价格飙升凸显了美国出口管制对中国 AI 硬件供应链的严重影响，迫使企业为过时技术支付天价。 A100 是五年前的加速器，服务器现在售价 8.2 万美元，而原价约为 2.7 万美元。此次打击涉及一个试图向中国出口价值 1.6 亿美元英伟达 H100 和 H200 GPU 的走私团伙。

rss · Tom's Hardware · 6月24日 10:21

**背景**: 美国对包括英伟达 A100、H100 和 H200 在内的先进 AI 芯片实施了出口管制。2025 年，美国当局捣毁了一个试图绕过这些管制的主要走私网络，导致中国对此类芯片的海关清关冻结。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.justice.gov/opa/pr/us-authorities-shut-down-major-china-linked-ai-tech-smuggling-network">Office of Public Affairs | U.S. Authorities Shut Down Major China-Linked AI Tech Smuggling Network | United States Department of Justice</a></li>
<li><a href="https://www.cnbc.com/2025/12/31/160-million-export-controlled-nvidia-gpus-allegedly-smuggled-to-china.html">How $160 million worth of export-controlled Nvidia chips were allegedly smuggled into China</a></li>

</ul>
</details>

**标签**: `#Nvidia`, `#AI hardware`, `#supply chain`, `#China`, `#GPU`

---

<a id="item-2"></a>
## [Meta 暂停 AI 培训项目，因员工数据泄露](https://www.tomshardware.com/tech-industry/big-tech/meta-pauses-mandatory-ai-training-program-that-tracked-employee-keystrokes-after-internal-data-leak-exposed-sensitive-staff-information-company-wide-employees-express-frustration-over-poor-handling-of-data) ⭐️ 8.0/10

Meta 已暂停其强制性 AI 培训项目，该项目追踪员工的键盘敲击和鼠标移动，此前一次内部数据泄露在全公司范围内暴露了包括对话和绩效数据在内的敏感员工信息。 这一事件凸显了在 AI 培训中进行员工监控的重大隐私和伦理风险，尤其是在像 Meta 这样的大型科技公司，可能影响行业实践和围绕工作场所监控的监管审查。 该追踪项目名为“模型能力倡议”（MCI），收集美国员工的鼠标移动、点击、键盘敲击和偶尔的屏幕截图，以训练能够自主执行工作任务的 AI 代理。

rss · Tom's Hardware · 6月24日 09:30

**背景**: Meta 于 2026 年 4 月启动了 MCI 项目，在员工电脑上安装追踪软件，收集数据以训练能够自主执行工作任务的 AI 模型。该项目对美国员工是强制性的。最近的数据泄露在全公司范围内暴露了这些敏感数据，导致员工不满和项目暂停。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.reuters.com/sustainability/boards-policy-regulation/meta-start-capturing-employee-mouse-movements-keystrokes-ai-training-data-2026-04-21/">Meta to start capturing employee mouse movements, keystrokes for AI training data | Reuters</a></li>
<li><a href="https://www.bbc.com/news/articles/cvglyklz49jo">Meta to track workers' clicks and keystrokes to train AI</a></li>
<li><a href="https://letsdatascience.com/news/meta-deploys-keystroke-tracking-for-ai-training-c6615ab1">Meta Deploys Keystroke Tracking for AI Training | Let's Data Science</a></li>

</ul>
</details>

**标签**: `#privacy`, `#data leak`, `#AI training`, `#employee monitoring`, `#Meta`

---

<a id="item-3"></a>
## [中国启动工业 5G 独立专网试点](https://www.ithome.com/0/968/105.htm) ⭐️ 8.0/10

2026 年 6 月 24 日，工业和信息化部等五部门联合启动工业 5G 独立专网试点，允许企业建设不依赖公共网络的专属 5G 网络。 该政策使制造、能源、交通等关键行业能够拥有专用、安全、低延迟的 5G 网络，加速 5G 在工业物联网和工业 4.0 中的应用。这标志着从“公网专用”向“专网专用”的转变，满足了数据不出厂等关键需求。 试点支持原材料、装备制造、消费品、电子信息、国防科技、能源交通等行业的大型特大型企业。鼓励已开展“5G+工业互联网”融合应用试点的城市率先建设。目前全国已建成 2.5 万余个虚拟/混合专网和 1260 家 5G 工厂。

rss · IT之家 · 6月24日 09:54

**背景**: 此前，中国的工业 5G 网络主要通过“公网专用”方式实现，即运营商分配专用通道或下沉部分设备。而独立专网使用专用频谱和完全独立的设施，提供更强的控制、安全和性能。此次试点是向工业专用频谱分配迈出的重要一步。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.infoobs.com/article/20250109/68183.html">工业5G独立专网破局，工业互联网平台体系壮大 | 信息化观察网 - 引领行业变革</a></li>
<li><a href="https://www.cww.net.cn/article?id=595527">工业5G独立专网（专频专网）渐行渐近_通信世界网</a></li>
<li><a href="https://finance.sina.com.cn/jjxw/2026-06-24/doc-iniepeiu6194974.shtml">五部门联合启动工业5G独立专网试点 一图读懂_新浪财经_新浪网</a></li>

</ul>
</details>

**标签**: `#5G`, `#industrial IoT`, `#private networks`, `#China policy`, `#Industry 4.0`

---

<a id="item-4"></a>
## [中国天眼 FAST 完成馈源舱钢丝绳国产化更换](https://www.ithome.com/0/968/000.htm) ⭐️ 8.0/10

2026 年 6 月 22 日，500 米口径球面射电望远镜（FAST）完成了 6 根馈源舱钢丝绳的国产化更换，通过专家验收，并于次日恢复天文观测。 这一成就结束了 FAST 对进口钢丝绳的依赖，解决了油泥污染问题，并将成本降低约一半，同时展示了中国为重大科技基础设施生产关键部件的能力。 每根钢丝绳重超 6 吨，总长近 4000 米，研发过程中经历了 6.2 万次滑轮循环测试和 20 万次脉冲疲劳试验。更换工作比 60 天的计划提前 10 天完成，且实现零事故、零损伤。

rss · IT之家 · 6月24日 08:17

**背景**: FAST 是世界上最大的单口径射电望远镜，其 30 吨重的馈源舱由 6 根钢丝绳悬挂，用于精确接收宇宙信号。自 2016 年启用以来，钢丝绳一直依赖进口，并于 2021 年首次更换，但逐渐渗出的油泥影响了观测。2023 年 1 月，FAST 运行中心启动国产化研发以实现自主可控。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.ecns.cn/cns-wire/2026-05-07/detail-ihfehatt6820168.shtml">FAST telescope replaces imported steel cables with domestic ...</a></li>
<li><a href="https://english.cas.cn/newsroom/cas-in-media/202605/t20260509_1158666.shtml">China's FAST Telescope Achieves Domestic Replacement of Key ...</a></li>
<li><a href="https://www.tkww.hk/a/202605/08/AP69fd77d8e4b04773b06d5d62.html">FAST telescope replaces imported steel cables with domestic ...</a></li>

</ul>
</details>

**标签**: `#FAST`, `#telescope`, `#engineering`, `#self-reliance`, `#astronomy`

---

<a id="item-5"></a>
## [Bunny DNS 免费：欧洲的 Cloudflare 替代方案](https://bunny.net/blog/were-making-bunny-dns-free/) ⭐️ 7.0/10

Bunny.net 宣布其 DNS 服务现在对每个账户最多 500 个域名免费，无查询限制、无按请求计费，并且所有功能（包括智能记录和健康监控）均免费提供。 此举使 Bunny DNS 成为 Cloudflare 在欧洲的有力竞争对手，尤其吸引因地缘政治担忧而寻求欧洲替代方案的用户。取消查询费用降低了小型企业和开发者采用快速可靠 DNS 服务的门槛。 免费套餐每个账户支持最多 500 个域名，无查询限制，并包含智能记录和健康监控等高级功能，这些功能在其他服务中通常需要付费。Bunny.net 是一家私营公司，仅在 2022 年进行过一轮 600 万美元融资，专注于有机增长。

hackernews · dabinat · 6月24日 08:50 · [社区讨论](https://news.ycombinator.com/item?id=48657030)

**背景**: DNS（域名系统）是一种将域名转换为 IP 地址的基本互联网服务。大多数 DNS 提供商按查询量收费或提供有限的免费套餐。Cloudflare 是 DNS 市场的主导者，但其总部位于美国，导致一些欧洲用户因数据主权和地缘政治担忧而寻求替代方案。

**社区讨论**: 社区反应总体积极，用户称赞此举是 Cloudflare 在欧洲的竞争性替代方案。一些人指出 Bunny DNS 缺乏静态网站托管等高级功能，但赞赏其专注于核心 DNS 和 CDN 服务。还有用户提到存在 Terraform 提供商，可用于基础设施即代码集成。

**标签**: `#DNS`, `#cloud`, `#EU tech`, `#competition`, `#free tier`

---

<a id="item-6"></a>
## [日月光预计先进封装营收 2026 年翻倍，计划新建 15 座工厂](https://www.ithome.com/0/968/118.htm) ⭐️ 7.0/10

日月光投控宣布，预计 2026 年先进封装营收将翻倍增长，并计划今年开发 15 个新厂区。此外，其首条 310mm 面板级封装（PLP）自动化产线预计最快 2026 年底量产。 这一扩张标志着先进封装领域的大规模产能建设，而先进封装是 AI 和 HPC 芯片的关键瓶颈。作为全球领先的 OSAT 供应商，日月光投控的投资将有助于缓解供应限制，并影响半导体供应链的竞争格局。 日月光投控 2025 年先进封装营收达 502 亿新台币，占总营收比例从 6%升至 13%。公司计划在 2026-2027 年维持高资本支出，旗下日月光和矽品今年共有 13 个新开发厂区，外加 2 个外部购买厂区。

rss · IT之家 · 6月24日 10:02

**背景**: OSAT（外包半导体封装测试）公司为芯片制造商提供封装和测试服务。先进封装，如面板级封装（PLP），可实现 AI 和 HPC 芯片更高的集成度和性能。PLP 使用更大的基板（310mm 面板），相比传统晶圆级封装能提高效率并降低成本。

**标签**: `#semiconductor`, `#advanced packaging`, `#OSAT`, `#ASE`, `#PLP`

---

<a id="item-7"></a>
## [RDLA：一种新的离线优先响应式数据层架构](https://www.infoq.com/articles/rdla-offline-first-reactive-android-data-layer/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global) ⭐️ 7.0/10

Mervyn Anthony 提出了响应式数据层架构（RDLA），作为 CLEAN 和 MVP 的替代方案，用于在 Android 应用中构建离线优先的响应式数据层。 RDLA 在公共数据 API 和私有数据源实现之间建立了清晰的边界，使表示层能够以纯粹的响应式方式运行，并通过接口编程和干净的种子模式简化测试。 该架构强调离线优先行为和响应式编程，允许表示层观察数据变化，而非过程式查询。

rss · InfoQ · 6月24日 09:00

**背景**: 传统的 Android 架构如 CLEAN 和 MVP 虽然关注点分离，但在离线优先和响应式需求上可能力不从心。RDLA 通过专注于数据层的响应式和离线能力来解决这一问题，它建立在响应式编程和离线优先设计的概念之上。

**标签**: `#Android`, `#Architecture`, `#Offline-first`, `#Reactive`, `#Data Layer`

---

<a id="item-8"></a>
## [影眸科技完成数亿元融资，发布 Hyper3D Rodin Gen-2.5](https://36kr.com/p/3865060112438533?f=rss) ⭐️ 7.0/10

影眸科技完成数亿元新一轮融资，由凯辉基金和上海国投先导领投，并发布 Hyper3D Rodin Gen-2.5 模型，将“先思考再生成”的模式引入 3D 生成领域。 这标志着向可控制、生产就绪的 3D 资产迈出了重要一步，可能改变游戏、电商和工业设计等行业。该模型的测试时缩放策略有望弥合 AI 生成 3D 内容与专业使用之间的鸿沟。 Rodin Gen-2.5 是全球首个千万面级 3D 生成模型，最快 4 秒可生成百万面模型，并同步推出全球首个 12K 精度的原生 3D 贴图模型。它支持五档“思考力度”，耗时 4 秒至 80 秒不等，实现自适应细节。

rss · 36氪 · 6月24日 10:06

**背景**: 传统 AI 3D 生成依赖“2D 升维 3D”方法，先生成多视角图像再重建 3D 资产，导致不可逆的信息丢失。影眸在 2024 年凭借 CLAY 架构开创了原生 3D 生成路线，直接使用 3D 数据训练，实现生产就绪的质量。新模型借鉴大语言模型（LLM）的测试时缩放策略，进一步提升了可控性。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://finance.sina.com.cn/tech/roll/2026-06-24/doc-inienawa1625626.shtml">完成数亿元新融资，影眸科技 Hyper3D 让3D生成进入「思考时代」丨36氪首...</a></li>
<li><a href="https://hyper3d.ai/">Rodin AI - Free AI 3D Model Generator For Everyone | Instantly...</a></li>

</ul>
</details>

**标签**: `#3D generation`, `#AI`, `#funding`, `#startup`, `#computer graphics`

---

<a id="item-9"></a>
## [AI 赋能一人公司：创业新时代](https://36kr.com/p/3866649515938825?f=rss) ⭐️ 7.0/10

在 2026 WAVES 大会上，一场圆桌讨论探讨了 AI 如何让个人以一人公司（OPC）形式运营，云平台正将重心从开发者转向业务用户，并强调市场推广效率。 这一趋势降低了创业门槛，让个人能够利用 AI 和云基础设施与大型公司竞争，可能重塑创业生态和平台经济。 阿里云的调查显示，其用户中仅 20%是传统开发者，35%是产品/运营人员，21%是企业主。圆桌强调，OPC 的成功取决于市场推广效率和强大的底层系统。

rss · 36氪 · 6月24日 04:00

**背景**: 一人公司（OPC）指个人利用 AI 工具和云服务运营业务，取代传统团队。这一概念建立在“超级个体”借助 AI 杠杆的理念上，代码和媒体成为边际成本几乎为零的可扩展资产。

**标签**: `#AI`, `#One Person Company`, `#cloud computing`, `#entrepreneurship`, `#platform economy`

---

<a id="item-10"></a>
## [前 Meta CTO：基础设施是硬科技护城河](https://news.crunchbase.com/venture/hard-tech-infrastructure-moat-schroepfer-gigascale/) ⭐️ 7.0/10

在 Crunchbase News 的问答中，Gigascale Capital 创始人、前 Meta CTO Mike Schroepfer 认为基础设施已成为战略护城河，并预测未来十年电池、机器人等硬科技将取得突破。 Schroepfer 的观点表明风险投资正转向资本密集型硬科技，这可能重塑行业并吸引大量投资。他领导 Meta 基础设施的经验使“拥有基础设施能提供持久竞争优势”这一观点更具可信度。 Schroepfer 强调，AI 数据中心带来的电力短缺是核能及其他能源创新的关键催化剂。他还指出，电池、机器人和储能领域的突破可能在未来十年重塑经济。

rss · Crunchbase News · 6月24日 11:00

**背景**: “战略护城河”是指保护公司免受竞争对手攻击的持久竞争优势，这一概念由投资者沃伦·巴菲特推广。“硬科技”指基于物理科学和工程的技术，如机器人、能源和先进制造，通常需要大量资本和时间来开发。Gigascale Capital 是 Schroepfer 创立的投资硬科技公司的风险投资机构。

**标签**: `#hard tech`, `#infrastructure`, `#venture capital`, `#energy`, `#robotics`

---

<a id="item-11"></a>
## [OpenMontage：首个开源智能视频制作系统](https://github.com/calesthio/OpenMontage) ⭐️ 7.0/10

OpenMontage 作为全球首个开源智能视频制作系统已在 GitHub 上发布，包含 12 条流水线、52 个工具和 500 多项智能体技能，可将 AI 编程助手转变为完整的视频制作工作室。 该项目通过利用现有的 AI 编程助手，使专业视频制作大众化，可能降低内容创作的门槛，并实现自动化的多阶段视频工作流。 OpenMontage 将视频制作视为结构化工程，在每个阶段设置质量门、审计追踪和强制执行，包括预合成验证和幻灯片风险评分。

ossinsight · calesthio · 6月24日 11:09

**背景**: 传统视频制作需要专业软件和人工操作，涵盖脚本、编辑和渲染等环节。智能体系统利用 AI 智能体自动化复杂工作流。OpenMontage 与 Cursor 或 Copilot 等 AI 编程助手集成，通过模块化流水线编排视频创作。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://github.com/calesthio/OpenMontage">GitHub - calesthio/ OpenMontage : World's first open-source,...</a></li>
<li><a href="https://pyshine.com/OpenMontage-Agentic-Video-Production-System/">OpenMontage - Agentic Video Production System with 12 Pipelines...</a></li>
<li><a href="https://aitoolly.com/ai-news/article/2026-06-22-openmontage-the-worlds-first-open-source-agentic-video-production-system-debuts-on-github">OpenMontage: First Open-Source Agentic AI Video System</a></li>

</ul>
</details>

**标签**: `#video production`, `#open-source`, `#AI agents`, `#Python`

---

<a id="item-12"></a>
## [树莓派 Pico W 变身 USB Wi-Fi 适配器](https://gitlab.com/baiyibai/pico-usb-wifi) ⭐️ 6.0/10

一个名为 pico-usb-wifi 的项目提供了固件，可将树莓派 Pico W 变成免驱动的 USB Wi-Fi 适配器，平均吞吐量达到 4.75 Mbit/s。 该项目为没有内置 Wi-Fi 的设备（如旧电脑或嵌入式系统）提供了一种低成本、免驱动的 Wi-Fi 解决方案，但其吞吐量相比标准 USB 适配器有限。 该固件枚举为 USB CDC-NCM 设备，在大多数操作系统上无需额外驱动。平均 4.75 Mbit/s 的吞吐量远低于典型 USB Wi-Fi 适配器（可超过 100 Mbit/s）。

hackernews · byb · 6月24日 03:17 · [社区讨论](https://news.ycombinator.com/item?id=48654676)

**背景**: 树莓派 Pico W 是一款低成本微控制器板，内置 Wi-Fi（CYW43439）。USB CDC-NCM（通信设备类 - 网络控制模型）是一种标准协议，允许设备在主机计算机上显示为网络适配器，从而在许多平台上实现免驱动操作。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://gitlab.com/baiyibai/pico-usb-wifi">白一百 / pico - usb - wifi · GitLab</a></li>
<li><a href="https://github.com/sidd-kishan/PicoPiFi">GitHub - sidd-kishan/PicoPiFi: A driverless usb rndis wifi dongle...</a></li>
<li><a href="https://github.com/czietz/picowifi">GitHub - czietz/picowifi: An inexpensive and easy-to-use Wifi ...</a></li>

</ul>
</details>

**社区讨论**: 评论者赞赏该项目使用了非 GitHub 平台，并指出已有类似的透明以太网桥实现（如 BlueSCSI、PicoMEM）。一位评论者对低吞吐量提出疑问，另一位则分享了一个相关的旅行路由器项目（RaspAP）。

**标签**: `#Raspberry Pi`, `#Wi-Fi`, `#Embedded Systems`, `#DIY`

---

<a id="item-13"></a>
## [终止项目：工程领导者最艰难的决定](https://leaddev.com/leadership/killing-a-project-is-every-engineering-leaders-hardest-call?utm_source=leaddev&utm_medium=RSS) ⭐️ 6.0/10

LeadDev 上的一篇文章讨论了工程领导者在必须终止项目以保持团队动力和专注时所面临的艰难决定。 这个话题很重要，因为终止项目的决定会影响团队士气、资源分配和长期产品策略，但在工程领导力中却常常被忽视。 文章强调，有时终止项目是必要的，以防止项目扼杀动力，但没有提供具体的技术细节或案例研究。

rss · LeadDev · 6月24日 07:30

**背景**: 工程领导者经常要同时处理多个项目，必须决定何时继续或停止。终止项目可能在情感和政治上具有挑战性，但可以释放资源用于更高优先级的工作。

**标签**: `#engineering leadership`, `#project management`, `#decision making`

---

<a id="item-14"></a>
## [36 氪 WAVES 2026：全密态计算破解 AI 数据安全](https://36kr.com/p/3866604451845377?f=rss) ⭐️ 6.0/10

在 36 氪 WAVES 2026 大会上，辰宜科技联合创始人于功山发表了关于全同态加密（FHE）作为 AI 时代数据安全解决方案的主题演讲。他介绍了其自主研发的基于 FHE 的数据库，声称性能比传统明文计算提升 37%，硬件成本降低至 38%以下。 随着 AI 模型需要大量敏感数据，传统加密方法在计算过程中会使数据暴露。FHE 允许在加密数据上直接计算而无需解密，有望解锁金融、医疗等行业的安全数据共享。 该产品是一个多模态数据库，融合了向量、图、时序和关系数据，完全自研且零开源代码。它采用格密码学以抵抗量子攻击，目标保持 30 年安全稳定运行。

rss · 36氪 · 6月24日 03:14

**背景**: 全同态加密（FHE）允许在不解密的情况下对加密数据进行计算，这一概念于 1970 年代提出，但直到 2009 年才通过基于格的方案实现。然而，由于巨大的计算开销，FHE 历史上一直过于缓慢而无法实际应用。辰宜科技声称已克服这一性能障碍。

**标签**: `#data security`, `#homomorphic encryption`, `#AI`, `#privacy`

---