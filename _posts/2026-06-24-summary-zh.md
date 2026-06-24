---
layout: default
title: "Horizon Summary: 2026-06-24 (ZH)"
date: 2026-06-24
lang: zh
---

> 从 310 条内容中筛选出 36 条重要资讯。

---

---

## 🧠 AI 学习

- [从玩具调度器到真实异步 HTTP：系统调用之旅](https://pub.towardsai.net/unraveling-an-async-http-request-61e7e28dc95e?source=rss----98111c9905da---4) ⭐️ 9.0/10

  > 本文解释了如何通过非阻塞套接字和操作系统系统调用（如 connect()、send()和 recv()），将基于生成器的玩具协程调度器与真实的异步 HTTP 连接起来。 理解系统调用级别的机制有助于揭开异步 I/O 的神秘面纱，帮助开发者编写更高效的并发代码，并调试 Python asyncio 中的性能问题。 文章使用原始套接字演示阻塞系统调用，然后引入非阻塞模式，其中系统调用立即返回 EAGAIN/EWOULDBLOCK 错误，从而实现并发。

- [Logits、温度和 Top-P 如何控制 LLM 输出](https://machinelearningmastery.com/the-statistics-of-token-selection-logits-temperature-and-top-p-walkthrough/) ⭐️ 8.0/10

  > 一篇新教程详细讲解了 logits、温度缩放和 top-p（核采样）如何协同工作，以控制 LLM 中 token 选择的随机性和多样性。 理解这些参数对于需要针对不同任务（如聊天机器人、内容生成或代码补全）微调 LLM 输出以平衡创造力和连贯性的实践者至关重要。 教程解释了 logits 是模型最后一层的原始分数，然后通过温度（值越高随机性越大）进行缩放，并通过 top-p（选择累积概率超过阈值的 token）进行过滤。

- [AI 代理记忆引擎：双池与异步写入](https://pub.towardsai.net/two-pools-one-record-the-architecture-of-a-memory-engine-for-ai-agents-7080c6ca4a30?source=rss----98111c9905da---4) ⭐️ 8.0/10

  > 该文章提出了一个 AI 代理独立记忆引擎的详细架构蓝图，包含两个永不合并的记忆池（个人记忆和项目记忆）、基于指针的链接、异步模型写入，以及具有三种读取深度的时序感知检索。 该设计解决了大多数记忆系统忽视的关键数据模型、时间和治理问题，提供了一个实用的蓝图，使记忆不仅能回忆事实，还能增长技能。它可能影响 AI 代理在本地优先、保护隐私的环境中管理长期上下文的方式。 记忆引擎使用单一类型记录，包含五种类型、每行两个时间线，并从第一天起就标记来源。遗忘是一个可逆的分数，可按类型和波动性配置，新记忆被隔离直到被强化。项目记忆通过 git 引用上的操作日志随仓库本身移动，实现无需服务器的共享记忆。

- [2026 年用 6GB 显存运行 35B 大模型指南](https://pub.towardsai.net/a-gpu-poors-guide-to-local-llm-inference-in-2026-48d59cafd215?source=rss----98111c9905da---4) ⭐️ 8.0/10

  > 一篇实用指南展示了如何在 6GB GTX 1660 Ti 上以每秒 28 个 token 的速度运行一个 350 亿参数的混合专家（MoE）模型，并支持完整的 128K 上下文窗口，使用了 MoE、低于 q8_0 的 KV 缓存量化以及基于 MCP 的工具等技术。 该指南挑战了大型语言模型需要 24GB 显存高端 GPU 的传统观念，使拥有消费级硬件（4-12 GB 显存）的用户也能进行本地 LLM 推理。它强调了那些缩小了昂贵设备与旧笔记本电脑之间差距的技术。 该指南使用了 Qwen3.6 35B-A3B，这是一个总参数 350 亿但每个 token 仅激活约 30 亿的 MoE 模型。关键技术包括在 llama.cpp 中使用--n-cpu-moe 标志，将注意力层保留在 GPU 上，同时将专家权重卸载到 CPU；以及使用 Turboquant 分支进行低于 q8_0 的 KV 缓存量化，而不会出现明显的质量下降。

- [连续批处理提升大模型推理效率](https://machinelearningmastery.com/serving-multiple-users-at-once-how-continuous-batching-keeps-llm-inference-efficient/) ⭐️ 7.0/10

  > 文章解释了连续批处理如何动态调度大模型推理请求，而非使用固定大小的批次，从而提高吞吐量并降低延迟。 该技术对于在生产环境中高效服务多个用户至关重要，因为它能最大化 GPU 利用率并减少空闲时间。 连续批处理（也称为不规则批处理）允许在前一个请求完成后立即将新请求加入批次，而静态批处理则需要等待批次中所有请求完成。

---

## 🔭 未知的未知

- [庄子对精英制度的批判](https://aeon.co/essays/zhuangzi-and-the-case-against-meritocracy) ⭐️ 9.0/10

  > Aeon 上的一篇文章引用中国古代哲学家庄子的思想，认为自我成功的概念是有缺陷的，因为我们的成就与外部因素深度相互依存。 这挑战了尤其在科技和商业文化中根深蒂固的精英制度信念，并促使我们重新思考如何归因成功与应得。 该文章由 Christine Abigail L Tan 撰写，发表在 Aeon 上。它运用庄子哲学论证没有人是真正白手起家的，因为成功依赖于运气、社会环境和天赋。

- [人造岩石挑战地质学边界](https://aeon.co/essays/the-strange-rocks-that-wouldnt-exist-without-us) ⭐️ 9.0/10

  > John MacDonald 在 Aeon 上发表的文章探讨了人类活动创造的新型岩石，如塑质砾岩和技术化石，这些岩石模糊了地质学中自然与人工的界限。 这开启了一个真正的新领域——人类世地质学，挑战了传统地质学边界，为理解人类对地球物质记录的影响提供了新颖视角。 文章讨论了具体例子，如塑质砾岩（塑料与天然沉积物融合）和技术化石（保存在地层中的技术制品），它们可能持续数百万年。

- [尼克·兰德的加速主义：一种黑暗哲学](https://aeon.co/essays/what-is-nick-lands-philosophy-of-accelerationism-really) ⭐️ 9.0/10

  > Aeon 的一篇文章探讨了尼克·兰德的加速主义哲学，该哲学认为技术资本主义是一个自主的、非人的过程，正在加速走向后人类未来，并审视了它对科技文化和极端政治的影响。 这种哲学挑战了关于人类能动性和进步的基本假设，提供了一个与硅谷技术乐观主义者和极右翼反动派都产生共鸣的视角，使其成为当代思想中一股强大而有争议的力量。 兰德的工作借鉴了控制论、德勒兹思想和黑暗悲观主义，并创造了“超虚构”一词，指代那些能自我实现的模因思想。文章指出，恐怖分子和科技精英都将加速主义视为一种革命性武器。

- [乔治·福斯特与感性科学的诞生](https://www.themarginalian.org/2026/06/20/george-forster-andrea-wulf/) ⭐️ 9.0/10

  > 《The Marginalian》上的一篇文章介绍了 18 世纪博物学家乔治·福斯特及其“感性科学”概念，该概念将经验观察与情感和道德洞察相结合，挑战了现代科学中客观性的疏离。 这一视角为科技和科学中占主导地位的纯粹理性主义范式提供了替代方案，表明将心灵与头脑结合可以带来对世界更全面的理解。 文章强调福斯特的方法如同“潜望镜”，超越了主流思维，并通过人文视角重新诠释启蒙科学，强调了一种融合理性与情感的已被遗忘的传统。

---

## ✍️ 表达提升

- [比尔·格利谈心智模型与系统思维](https://fs.blog/knowledge-project-podcast/bill-gurley/) ⭐️ 8.0/10

  > 著名风险投资家、圣塔菲研究所董事会成员比尔·格利在《知识项目》播客新一期节目中分享了他关于心智模型、复杂性和系统思维的见解。 这场讨论提供了实用的认知工具，能够改善推理和决策能力，对投资者、企业家以及任何在复杂系统中导航的人尤其有价值。 该期节目可在 YouTube、Spotify、Apple Podcasts 上收听，并提供文字稿。格利借鉴了他在华尔街的经历、Benchmark 的合伙人身份、Uber 的超高速增长期以及他在圣塔菲研究所的工作。

- [把面试变成推理游戏：全流程备战 SOP](https://sspai.com/post/110947) ⭐️ 7.0/10

  > 文章提出将面试视为一场演绎推理游戏，并提供了一套系统化的备战与复盘 SOP（标准操作流程）来提升表现。 这一框架帮助专业人士将面试准备从被动记忆转变为主动解决问题，有望在竞争激烈的就业市场中提高成功率。 该 SOP 可能包括收集样题、识别模式、制定回答模板以及进行面试后复盘以优化策略等步骤。

- [马克·平卡斯谈创新：经证明、更好、全新](https://fs.blog/knowledge-project-podcast/mark-pincus/) ⭐️ 6.0/10

  > Zynga 创始人马克·平卡斯在 Farnam Street 播客中分享了他的创新框架“经证明、更好、全新”，但讨论缺乏改善思维或沟通的具体可行技巧。 尽管该框架为创新提供了高层次的视角，但缺乏实用指导，限制了其对寻求提升创意或沟通技能的专业人士的价值。 该播客是《知识项目》系列的一部分，包含文字记录；但内容被描述为泛泛而谈，不直接适用于写作或沟通。

- [Tim Cook 在苹果与耐克之间的商业纽带](https://sspai.com/post/111081) ⭐️ 4.0/10

  > 一期播客节目深入探讨了苹果、耐克与 Tim Cook 之间错综复杂的商业关系，突出了 Cook 作为两家公司连接者的角色。 这一分析揭示了个人领导力和跨行业关系如何塑造战略合作伙伴关系，为关注企业合作的商业人士提供了洞见。 该节目由 sspai.com 主办，聚焦于苹果、耐克与 Tim Cook 之间的“商业三角关系”，但未提供具体的新发现或数据。

---

## 🧬 人性与行为

- [被了解是感受到爱的关键](https://behavioralscientist.org/how-can-we-feel-loved-if-we-dont-feel-known/) ⭐️ 8.0/10

  > 心理学家 Sonja Lyubomirsky 和 Harry Reis 基于七年的合作研究，认为被他人了解是感受到爱的前提，这一发现连接了幸福与关系研究。 这一见解挑战了关于爱的常见误解，并提供了一条基于科学的通往更大幸福的路径，强调真正被了解——而不仅仅是受欣赏或关心——对于感受到爱至关重要。 文章指出了关于感受到爱的五种常见误解，例如认为吸引力或成功会带来爱，并展示了一项对近 2000 名美国成年人的调查结果，他们难以描述自己如何感受到爱。

- [超级智能 AI 可能破坏核威慑](https://www.lesswrong.com/posts/2kseP9fZghYHKLFno/superintelligence-vs-the-second-strike) ⭐️ 8.0/10

  > 这一分析挑战了长期以来认为核武器能保证战略稳定的假设，表明 AI 的快速发展可能改变力量平衡并带来新的安全风险。 文章概述了超级智能 AI 可能克服核威慑的三种方式：辉煌的第一击、大规模杀伤性武器防御以及其他机制，强调 AI 进步的速度可能超过传统适应的速度。

---

## 💰 财富与复利

- [贫困学生即使获得相同学位，收入仍低 7%](https://ofdollarsanddata.com/why-poorer-students-earn-less-even-with-the-same-degree/) ⭐️ 8.0/10

  > 一项涵盖超过 3000 万学生的研究发现，来自贫困背景的毕业生在毕业十年后，即使就读同一所大学、获得相同学位和成绩，收入仍比富裕同龄人低 7%。 这一发现挑战了仅靠教育就能实现机会均等的假设，表明社会经济背景通过人脉和特权持续影响收入，从而在一生中加剧不平等。 即使在控制大学选择性、专业和成绩后，收入差距依然存在；对于非精英四年制大学，父母收入与子女收入的斜率为 0.095，意味着富裕家庭仍能带来优势。

- [有用比富有更具吸引力](https://ofdollarsanddata.com/being-useful-is-more-attractive-than-being-rich/) ⭐️ 8.0/10

  > 一篇关于一位 41 岁男子提前退休、拥有 265 万美元资产，却因每天吸食大麻食品并玩电子游戏而被妻子称为“失败者”的 Reddit 帖子引发热议，讨论财务独立之外人生目标的重要性。 这个故事挑战了“财富本身就有吸引力”的普遍假设，强调有用和投入更能带来满足感和尊重。它揭示了 FIRE 运动的一个关键洞见：没有目标的财务独立可能导致空虚和关系紧张。 该男子拥有 200 万美元流动资产、65 万美元退休金和每年 7.5 万美元的版税收入，被动收入总计 12.5 万美元。他的妻子是一名学校教师，提前回家发现他吸食大麻食品后正在玩《侠盗猎车手》，于是称他为“失败者”。

---

## 📜 历史的节律

- [英国如何失去美国：独立战争分析](https://www.historyextra.com/membership/american-revolutionary-war-podcast-series-episode-three/) ⭐️ 7.0/10

  > 一档播客节目邀请亚当·IP·史密斯教授探讨美国革命者如何通过战略、消耗战和全球冲突动态幸存并击败大英帝国。 这一分析提供了关于非对称战争和帝国过度扩张的永恒教训，对现代地缘政治和军事战略具有借鉴意义。 该集节目涵盖了战役的消耗性艰辛以及冲突的全球影响，突显了一个新生运动如何战胜超级大国。

- [百年来五位首相的垮台](https://www.historyextra.com/membership/prime-minister-resignation-downfall/) ⭐️ 6.0/10

  > 历史学家理查德·托耶审视了过去一百年中五位英国首相最引人注目的垮台事件。 这一分析揭示了政治领导力的脆弱性以及导致首相辞职的反复出现的模式。 文章发表在 HistoryExtra 上，涵盖了戏剧性的辞职事件，但并未明确将其与当代政治进行类比。

---

## 📰 技术资讯

1. [谷歌解雇创建非官方工作区 CLI 的员工](#item-1) ⭐️ 8.0/10
2. [加州 AB 2047 限制学校使用 3D 打印机](#item-2) ⭐️ 8.0/10
3. [研究发现 AI 招聘工具加剧种族偏见](#item-3) ⭐️ 8.0/10
4. [SpaceX 星落返回舱完成首飞](#item-4) ⭐️ 8.0/10
5. [实时自适应深脑刺激改善帕金森步态](#item-5) ⭐️ 8.0/10
6. [Datasette 1.0a35 新增创建/修改表界面](#item-6) ⭐️ 7.0/10
7. [研究：标注 AI 使用使游戏评测减少 53%](#item-7) ⭐️ 7.0/10
8. [美国施压 Meta 接受 AI 安全审查](#item-8) ⭐️ 7.0/10
9. [中信证券：算力与电力产业链具备长期配置价值](#item-9) ⭐️ 7.0/10
10. [Groq 完成 6.5 亿美元融资，目标 2027 年达 200 兆瓦](#item-10) ⭐️ 7.0/10
11. [模块化纳米机器人可自行组装用于靶向药物递送](#item-11) ⭐️ 7.0/10
12. [Superhuman 收购 AI 检测初创公司 GPTZero](#item-12) ⭐️ 7.0/10
13. [LastPass 再次警告用户数据泄露，此次通过合作伙伴](#item-13) ⭐️ 6.0/10
14. [中国开发者对苹果提起反垄断投诉](#item-14) ⭐️ 6.0/10
15. [用于 Datasette Lite 的 OPFS + Pyodide 测试工具](#item-15) ⭐️ 6.0/10
16. [苹果 Vision Pro 工具 RCP3 吸收 The Machinery 游戏引擎](#item-16) ⭐️ 6.0/10
17. [维基百科联合创始人：AI 幻觉仍严重，不直接编辑](#item-17) ⭐️ 6.0/10

---

<a id="item-1"></a>
## [谷歌解雇创建非官方工作区 CLI 的员工](https://twitter.com/JPoehnelt/status/2069482265953087602) ⭐️ 8.0/10

谷歌员工 Justin Poehnelt 因创建并发布名为 gws 的非官方 Google Workspace CLI 工具而被解雇，该工具为 Google Workspace 服务提供了统一的命令行界面。 这一事件凸显了员工创新与企业政策之间的紧张关系，特别是对于可能被误认为是官方发布的开源项目，并引发了关于大型科技公司官僚主义和风险管理的广泛讨论。 该工具以 npm 包@googleworkspace/cli 发布，在 GitHub 上大受欢迎，但未获得谷歌官方批准，据称 Poehnelt 因未遵循内部程序而被解雇。

hackernews · justinwp · 6月23日 18:13 · [社区讨论](https://news.ycombinator.com/item?id=48649011)

**背景**: 谷歌历来通过“20%时间”鼓励副项目，但也有严格的政策禁止发布可能被视为官方项目的作品。Google Workspace CLI (gws) 是一个命令行工具，为 Gmail、Drive 和 Calendar 等 Google Workspace 服务提供统一接口。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://grokipedia.com/page/Google_Workspace_CLI">Google Workspace CLI</a></li>

</ul>
</details>

**社区讨论**: 社区评论意见分歧：一些人批评 Poehnelt 判断失误，发布了可能被误认为是官方产品的工具；另一些人则认为谷歌的官僚主义扼杀了创新，解雇是过度反应。几位评论者指出，谷歌此前曾容忍类似项目。

**标签**: `#Google`, `#open source`, `#corporate policy`, `#CLI`, `#employment`

---

<a id="item-2"></a>
## [加州 AB 2047 限制学校使用 3D 打印机](https://www.the3dprintingnerd.com/ab2047) ⭐️ 8.0/10

加州议会通过了 AB 2047《枪支打印预防法案》，要求 3D 打印机内置技术以防止打印枪支，实际上使得无法合规的学生、教育工作者和企业无法使用 3D 打印机。 该法案可能扼杀加州的 3D 打印教育和创新，为全国类似法规树立先例，并引发关于在 3D 打印机上实施基于内容的限制是否可行的辩论。 该法案要求 3D 打印机制造商实施阻止打印枪支部件的技术，但批评者认为此类技术目前不可行，因为打印机无法从代码中区分意图。

hackernews · Buildstarted · 6月23日 22:12 · [社区讨论](https://news.ycombinator.com/item?id=48652184)

**背景**: 3D 打印机通过逐层沉积材料从数字模型创建物理物体。对 3D 打印“幽灵枪”的担忧导致了限制访问的立法努力，但在不阻碍合法使用的情况下执行此类限制仍存在技术挑战。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.everytown.org/press/california-assembly-passes-landmark-bill-to-stop-the-rise-of-3d-printed-ghost-guns/">California Assembly Passes Landmark Bill to Stop the Rise of 3D-Printed Ghost Guns</a></li>
<li><a href="https://legiscan.com/CA/text/AB2047/id/3438106">Bill Text: CA AB2047 | 2025-2026 | Regular Session | Amended - LegiScan</a></li>
<li><a href="https://www.timesunion.com/capitol/article/regulations-3d-printers-passed-still-face-long-22277140.php">NY moves to ban 3D printers that make guns, but can it be enforced? - Times Union</a></li>

</ul>
</details>

**社区讨论**: 评论者对可执行性表示怀疑，有人指出即使像分半打印这样的简单变通方法也能绕过限制。另有人指出类似法案可能由彭博社资助，暗示政治动机。

**标签**: `#3D printing`, `#regulation`, `#education`, `#technology policy`, `#censorship`

---

<a id="item-3"></a>
## [研究发现 AI 招聘工具加剧种族偏见](https://hai.stanford.edu/news/ai-hiring-tools-can-yield-racial-bias-and-systemic-rejection) ⭐️ 8.0/10

斯坦福大学 2025 年 5 月发表的一项研究分析了 83,000 名申请者在 100 家财富 500 强公司中使用 pymetrics 评估工具的情况，发现算法招聘会形成单一文化，放大种族偏见并系统性地拒绝合格候选人。 这项研究提供了算法招聘“黑箱”内部罕见的实证证据，表明广泛采用单一 AI 供应商可能会将整个群体排除在外，加剧劳动力市场的系统性不平等。 该研究聚焦于 pymetrics 这一游戏化评估工具，而非简历筛选 AI 或大语言模型。研究发现，当某个供应商主导一个行业时，相同的候选人（通常来自少数族裔背景）会在多个雇主处反复被拒绝。

hackernews · sizzle · 6月23日 18:56 · [社区讨论](https://news.ycombinator.com/item?id=48649673)

**背景**: 算法招聘工具利用机器学习来筛选、排序或评估求职者，承诺提高效率和客观性。然而，它们可能继承并放大历史招聘数据中存在的偏见。“算法单一文化”的概念指的是当许多雇主依赖同一 AI 系统时，会导致统一的排斥模式的风险。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://hai.stanford.edu/news/ai-hiring-tools-can-yield-racial-bias-and-systemic-rejection">AI Hiring Tools Can Yield Racial Bias and Systemic Rejection | Stanford HAI</a></li>

</ul>
</details>

**社区讨论**: 评论者对研究方法提出质疑，有人指出论文关注的是评估工具而非 AI 或大语言模型，并质疑种族是如何确定的。其他人则强调了单一文化的系统性风险，认为即使是无偏见的 AI，如果被广泛采用，也可能将某些群体排除在外。

**标签**: `#AI ethics`, `#algorithmic bias`, `#hiring`, `#fairness`, `#machine learning`

---

<a id="item-4"></a>
## [SpaceX 星落返回舱完成首飞](https://www.ithome.com/0/967/717.htm) ⭐️ 8.0/10

SpaceX 的星落返回舱于 2026 年 6 月 23 日搭乘猎鹰 9 号火箭从卡纳维拉尔角完成首飞。该舱体设计可携带高达 1000 公斤的有效载荷返回地球，用于科学研究和太空制造。 星落为太空实验和在轨制造产品提供了低成本、常态化的返回能力，可能加速太空制造和研究。它比现有的返回舱（如 Varda 的 W 系列）大得多，能够承载更大的有效载荷。 该舱体直径 3.1 米，高 0.75 米，采用碳纤维防热大底和冷气（氮气）姿态控制。再入大气层时分为两段：上段存放载荷与航电设备，下段内置压缩气体用于机动。

rss · IT之家 · 6月23日 23:39

**背景**: SpaceX 的星落是一款纯货运返回舱，可搭载猎鹰 9 号或重型猎鹰火箭发射。它专为需要从近地轨道或亚轨道返回有效载荷的任务设计。该舱体无自身推进系统，依赖火箭二级进行离轨。Varda Space 此前已用较小的 W 系列返回舱演示了类似技术。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.youtube.com/watch?v=IrVeYmLouSU">Falcon 9 - Starfall Demo Mission - SLC-40 - Cape Canaveral SFS - June 23, 2026</a></li>
<li><a href="https://en.wikipedia.org/wiki/Varda_Space_Industries">Varda Space Industries - Wikipedia</a></li>
<li><a href="https://www.varda.com/platform">Built for orbital material production and reentry - Varda Space Industries</a></li>

</ul>
</details>

**标签**: `#SpaceX`, `#space technology`, `#return capsule`, `#space manufacturing`, `#aerospace`

---

<a id="item-5"></a>
## [实时自适应深脑刺激改善帕金森步态](https://36kr.com/newsflashes/3866385812509699?f=rss) ⭐️ 8.0/10

加州大学旧金山分校的研究人员开发出一种新型深脑刺激系统，能够实时读取神经信号，在每一步中自动调整刺激强度，改善帕金森患者的步态并减少跌倒。该研究发表于《自然·医学》。 这是首次证明植入式脑刺激器可以检测与步伐相关的神经信号并在毫秒内自动调整刺激，开启了个性化神经调控的新篇章。它解决了帕金森病最难治疗的症状之一——步态障碍。 该系统在四名帕金森患者身上进行了测试，他们植入了电极和神经刺激器，用于大脑感知和反馈控制。自适应刺激根据与每一步相关的神经信号实时调整。

rss · 36氪 · 6月23日 23:49

**背景**: 深部脑刺激（DBS）是一种通过电脉冲调节特定神经回路的疗法，常用于帕金森病。传统 DBS 提供持续刺激，而自适应 DBS 旨在根据患者的神经状态实时调整刺激，可能提高疗效并减少副作用。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.gotac.cn/article_read_102.html">上海国泰医院投资管 理 有限公司</a></li>
<li><a href="https://www.tmtpost.com/7560598.html">tmtpost.com/7560598.html</a></li>

</ul>
</details>

**标签**: `#neuroscience`, `#Parkinson's disease`, `#deep brain stimulation`, `#medical technology`, `#Nature Medicine`

---

<a id="item-6"></a>
## [Datasette 1.0a35 新增创建/修改表界面](https://simonwillison.net/2026/Jun/23/datasette/#atom-everything) ⭐️ 7.0/10

Datasette 1.0a35 引入了“创建表”和“修改表”界面，两者均由新的 JSON API 支持，并提供了稳定的模板上下文文档。 这些功能显著增强了 Datasette 在数据库管理方面的实用性，使其更接近一个功能完整的数据平台，并标志着向 1.0 版本迈出了重要一步。 创建表 API 支持定义列、主键、自定义类型、NOT NULL 约束、默认值和单列外键；修改表 API 支持添加、重命名、重新排序和删除列，以及更改类型、默认值、约束和表名。

rss · Simon Willison · 6月23日 21:34

**背景**: Datasette 是一个用于探索和发布数据（尤其是 SQLite 数据库）的开源工具。它提供 Web 界面和 JSON API 来查询和操作数据。在此版本之前，Datasette 缺少创建或修改表模式的内置界面，用户需要使用外部工具。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://simonwillison.net/2026/Jun/18/datasette-apps/">Datasette Apps: Host custom HTML applications inside Datasette</a></li>
<li><a href="https://datasette.io/blog/2026/datasette-apps/">Host applications inside Datasette with Datasette ... - Datasette Blog</a></li>

</ul>
</details>

**标签**: `#datasette`, `#data tools`, `#Python`, `#SQLite`, `#release`

---

<a id="item-7"></a>
## [研究：标注 AI 使用使游戏评测减少 53%](https://www.ithome.com/0/967/724.htm) ⭐️ 7.0/10

Game Oracle 的一项研究分析了 2025 年 1 月至 10 月发布的 9879 款游戏，发现在控制发行商、团队经验和游戏类型等变量后，公开 AI 使用情况会使玩家评测数量减少约 53%。 这一发现提供了具体证据，表明 AI 披露会对玩家参与度产生负面影响，尤其是对高质量游戏，这可能影响开发者是否披露 AI 使用以及如何向玩家沟通的决策。 负面效应在规模更大、经验更丰富的团队中更为明显，而低质量游戏无论是否使用 AI，表现几乎没有差别。研究还指出，像《The Finals》这样的游戏尽管大量使用 AI 仍取得成功，表明 AI 的实施方式至关重要。

rss · IT之家 · 6月24日 00:11

**背景**: 生成式 AI 工具在游戏开发中越来越常见，用于资产创建、对话生成和原型设计等任务。然而，玩家对 AI 生成内容的态度褒贬不一，有些人认为这是一种降低质量的成本削减措施。Steam 等平台已引入 AI 生成内容的披露要求，使透明度成为关键问题。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.game-oracle.com/blog/ai-part2">AI in Games: The Impact On Sales - Game Oracle</a></li>

</ul>
</details>

**标签**: `#AI`, `#game development`, `#player perception`, `#market research`

---

<a id="item-8"></a>
## [美国施压 Meta 接受 AI 安全审查](https://www.ithome.com/0/967/706.htm) ⭐️ 7.0/10

特朗普政府正向 Meta 施压，要求其自愿提交 AI 模型供美国政府进行安全审查，因为 Meta 是目前唯一尚未签署此类协议的主要 AI 开发商。 此举凸显了监管机构对 AI 安全的日益关注，可能为强制合规树立先例，影响整个行业 AI 模型的开发与部署方式。 Meta 于今年 4 月推出了 Muse Spark AI 模型，但尚未同意与美国 AI 安全研究所（AISI）共享模型。OpenAI、谷歌、微软等其他公司已签署自愿审查协议。

rss · IT之家 · 6月23日 22:56

**背景**: 美国政府设立了 AI 安全研究所，用于评估前沿 AI 模型的风险和漏洞。自愿审查协议允许政府在模型公开发布前进行评估，旨在预防潜在危害。

**标签**: `#AI safety`, `#regulation`, `#Meta`, `#US government`, `#AI governance`

---

<a id="item-9"></a>
## [中信证券：算力与电力产业链具备长期配置价值](https://36kr.com/newsflashes/3866430062269705?f=rss) ⭐️ 7.0/10

中信证券发布研报，建议长期配置算力和电力相关产业链，驱动因素包括海量 AI Token 需求、政策支持以及供应链动态。 这家主要金融机构的分析表明，AI 基础设施投资正从炒作转向持续的资本部署，将影响全球投资者、芯片制造商和能源供应商。 报告指出，“六张网”落地将带来万亿算力投资，国产芯片、存储和光通信面临大规模国产替代机遇。同时，算力建设提振铜、锡等金属需求，IDC REITs 拓宽资金来源。

rss · 36氪 · 6月24日 00:16

**背景**: AI Token 需求指大型语言模型等 AI 应用所需的计算处理，推动数据中心和电力需求。“六张网”是中国涵盖算力、电力等基础设施网络的政策框架。IDC REITs 是专注于数据中心的房地产投资信托基金，为基础设施扩张提供融资渠道。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.datacenterknowledge.com/investing/data-center-reits-a-guide-to-investing-in-digital-infrastructure">Data Center REITs: A Guide to Investing in Digital Infrastructure</a></li>

</ul>
</details>

**标签**: `#AI infrastructure`, `#investment`, `#compute`, `#power`, `#supply chain`

---

<a id="item-10"></a>
## [Groq 完成 6.5 亿美元融资，目标 2027 年达 200 兆瓦](https://36kr.com/newsflashes/3866429031716103?f=rss) ⭐️ 7.0/10

AI 芯片初创公司 Groq 于 6 月 22 日宣布完成 6.5 亿美元新一轮增长融资，由 Disruptive 和 Infinitum 领投，现有投资者跟投。资金将用于加速数据中心基础设施升级，并目标在 2027 年底前将总装机容量扩展至 200 兆瓦。 本轮融资表明投资者对 Groq 的 AI 推理技术及其与英伟达等老牌厂商竞争的能力充满信心。计划将容量扩展至 200 兆瓦，可能大幅增加专用 AI 推理云服务的可用性，从而降低 AI 应用成本并提升性能。 资金还将用于在现有数据中心部署英伟达最新的 LPX 系统。Groq 的定制 LPU（语言处理单元）架构专为 AI 推理设计，为大语言模型提供低延迟和高吞吐量。

rss · 36氪 · 6月24日 00:15

**背景**: Groq 是一家 AI 芯片初创公司，开发用于 AI 推理的定制硬件，专注于为大语言模型提供低延迟性能。其 LPU 架构采用确定性的数据流设计，与传统 GPU 不同。本轮融资正值越来越多公司部署生成式 AI 应用、对 AI 推理基础设施需求日益增长之际。

**标签**: `#AI chips`, `#funding`, `#cloud computing`, `#hardware`

---

<a id="item-11"></a>
## [模块化纳米机器人可自行组装用于靶向药物递送](https://36kr.com/newsflashes/3866386287219712?f=rss) ⭐️ 7.0/10

瑞士巴塞尔大学的研究人员开发出一种模块化纳米递药机器人，它由可重复使用的推进模块和有效载荷模块自行组装而成，能够靶向癌细胞并降低其活性。相关成果发表在《先进功能材料》期刊上。 这种模块化设计允许灵活且可重复使用的组件，可能降低成本并实现针对不同治疗或工业应用的定制化。它代表了向实用纳米机器人用于精准医疗迈出的一步。 该机器人由两个主要模块组成：推进模块和有效载荷模块，它们可以以不同配置组合。研究证明，组装后的纳米机器人能够靶向癌细胞并在体外降低其活性。

rss · 36氪 · 6月23日 23:51

**背景**: 纳米医学旨在将药物精确递送至病变细胞，但由于尺寸极小，构建功能性纳米机器人颇具挑战。受乐高式组装启发的模块化设计允许不同功能部件组合和重复使用。此前已有纳米机器人被提出用于溶栓和肿瘤栓塞等任务，但临床转化仍然有限。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://news.sciencenet.cn/htmlnews/2021/5/458821.shtm">news.sciencenet.cn/htmlnews/2021/5/458821.shtm</a></li>

</ul>
</details>

**标签**: `#纳米技术`, `#药物递送`, `#机器人`, `#癌症治疗`, `#材料科学`

---

<a id="item-12"></a>
## [Superhuman 收购 AI 检测初创公司 GPTZero](https://techcrunch.com/2026/06/23/superhuman-acquires-ai-detection-startup-gptzero/) ⭐️ 7.0/10

Superhuman（Grammarly AI 检测工具的运营公司）收购了由普林斯顿毕业生 Edward Tian 创立的成立三年的 AI 检测初创公司 GPTZero。该收购于 2026 年 6 月 23 日宣布。 此次收购标志着 AI 检测市场的整合，主要玩家通过整合专业初创公司来增强自身产品。这可能导致 Grammarly 和 Superhuman 的产品中集成更强大的 AI 检测功能，影响用户验证 AI 生成内容的方式。 GPTZero 最初是 Edward Tian 在普林斯顿大学的毕业设计项目，经过训练可检测 ChatGPT、GPT-4、Bard 和 LLaMa 等模型的输出。Superhuman 已在其平台内提供 AI 检测功能，此次收购预计将进一步提升其能力。

rss · TechCrunch · 6月23日 21:48

**背景**: AI 检测工具旨在识别由大型语言模型（如 GPT-4）生成的文本，帮助用户区分人类撰写和 AI 生成的内容。随着 AI 写作工具的普及，对可靠检测的需求日益增长，尤其是在教育、新闻和内容审核领域。Superhuman 运营着流行的写作助手 Grammarly，并一直在集成 AI 检测功能以促进负责任的 AI 使用。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://techcrunch.com/2026/06/23/superhuman-acquires-ai-detection-startup-gptzero/">Superhuman acquires AI detection startup GPTZero | TechCrunch</a></li>
<li><a href="https://en.wikipedia.org/wiki/GPTZero">GPTZero - Wikipedia</a></li>
<li><a href="https://help.superhuman.com/hc/en-us/articles/46242198434445-AI-Detector-user-guide">AI Detector user guide - Superhuman Help Center</a></li>

</ul>
</details>

**标签**: `#AI`, `#acquisition`, `#AI detection`, `#startup`

---

<a id="item-13"></a>
## [LastPass 再次警告用户数据泄露，此次通过合作伙伴](https://9to5mac.com/2026/06/23/lastpass-notifies-users-of-yet-another-data-breach/) ⭐️ 6.0/10

LastPass 已通知用户发生新的数据泄露事件，此次泄露是通过其一家外部合作伙伴发生的，导致个人数据被暴露。 这一主要密码管理器再次发生泄露事件，削弱了用户信任，并引发了对第三方集成安全性的担忧。 此次泄露涉及个人数据被盗，但尚未披露有关攻击或受影响合作伙伴的技术细节。

rss · 9to5Mac · 6月23日 21:48

**背景**: LastPass 是一款流行的密码管理器，将用户的登录凭据存储在加密的保险库中。该公司近年来经历了多起安全事件，包括 2022 年一次重大泄露事件，导致加密保险库数据暴露。

**标签**: `#security`, `#data breach`, `#password manager`, `#LastPass`

---

<a id="item-14"></a>
## [中国开发者对苹果提起反垄断投诉](https://9to5mac.com/2026/06/23/chinese-developers-file-antitrust-complaint-against-apple-over-app-store-fees/) ⭐️ 6.0/10

48 名中国开发者对苹果提起反垄断投诉，指控其 App Store 收费过高且分发规则过于严格。 此次投诉加剧了全球对苹果 App Store 做法的监管压力，并可能影响中国及其他地区的反垄断政策。 投诉主要针对苹果对应用内购买收取 30%佣金以及限制第三方应用商店的做法，开发者认为这些行为损害了竞争。

rss · 9to5Mac · 6月23日 20:17

**背景**: 苹果 App Store 因其佣金费用和封闭生态在多个国家面临反垄断审查。在中国，苹果拥有显著市场份额，本地开发者长期批评其高成本。类似的投诉已在欧盟和韩国引发监管行动。

**标签**: `#antitrust`, `#Apple`, `#App Store`, `#China`, `#regulation`

---

<a id="item-15"></a>
## [用于 Datasette Lite 的 OPFS + Pyodide 测试工具](https://simonwillison.net/2026/Jun/23/opfs-pyodide/#atom-everything) ⭐️ 6.0/10

Simon Willison 发布了一个测试工具，将 Origin Private File System (OPFS) 与 Pyodide 结合，探索在浏览器中为 Datasette Lite 实现持久化 SQLite 文件编辑。 这可能使 Datasette Lite 能够编辑存储在用户本地机器上的 SQLite 数据库，弥合 Web 应用与本地文件持久化之间的差距。 该测试工具使用 Claude Code for web 构建，允许用户在不同浏览器中尝试 OPFS 与 Pyodide 的组合。这是一个功能有限的早期工具。

rss · Simon Willison · 6月23日 18:58

**背景**: Datasette Lite 通过 Pyodide（编译为 WebAssembly 的 Python）在浏览器中运行完整的 Datasette Python Web 应用。Origin Private File System (OPFS) 是一种浏览器 API，提供私有的、特定于源的文件系统，用于持久化存储数据。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://github.com/simonw/datasette-lite">simonw/datasette-lite - GitHub</a></li>
<li><a href="https://lite.datasette.io/">Datasette Lite</a></li>

</ul>
</details>

**标签**: `#webassembly`, `#pyodide`, `#datasette-lite`, `#browser-storage`, `#sqlite`

---

<a id="item-16"></a>
## [苹果 Vision Pro 工具 RCP3 吸收 The Machinery 游戏引擎](https://www.ithome.com/0/967/711.htm) ⭐️ 6.0/10

苹果 Reality Composer Pro 3 测试版代码中引用了已停用的游戏引擎 The Machinery，表明其灵活框架被整合用于 Vision Pro 内容创作。 此举通过利用经过验证的模块化引擎架构，强化了苹果 Vision Pro 的 3D 内容生态，可能加速沉浸式体验的开发。 开发者 Nicholas Alvarez 在 RCP3 安装文件中发现了至少 40 处“the machinery”或“our machinery”字样，且资源处理和数据库组织方式与 The Machinery 高度相似。

rss · IT之家 · 6月23日 23:17

**背景**: The Machinery 是由 Our Machinery 开发的游戏引擎，其创始人是 Bitsquid/Stingray 引擎的资深开发者。该引擎强调基于插件的灵活架构，但于 2022 年中停止开发。Reality Composer Pro 是苹果面向空间计算的 3D 内容创作工具，用于为 Vision Pro 构建场景和交互。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.macrumors.com/2026/06/23/apple-reality-composer-pro-the-machinery/">Apple's Latest Vision Pro Tool Contains Traces of Defunct Game Engine 'The Machinery'</a></li>
<li><a href="https://www.reddit.com/r/gamedev/comments/wd4qoh/our_machinery_extensible_engine_made_in_c_just/">Our Machinery, extensible engine made in C, just stopped being available : r/gamedev</a></li>

</ul>
</details>

**标签**: `#Apple`, `#Vision Pro`, `#game engine`, `#3D content`, `#Reality Composer`

---

<a id="item-17"></a>
## [维基百科联合创始人：AI 幻觉仍严重，不直接编辑](https://www.ithome.com/0/967/709.htm) ⭐️ 6.0/10

维基百科联合创始人吉米·威尔士于 6 月 24 日表示，AI 幻觉问题仍然非常严重，因此不会让 AI 直接编辑维基百科条目，但 AI 可能帮助标记内容供人类编辑处理。 这凸显了 AI 在内容创作中的可靠性信任问题，影响维基百科等主要平台如何整合 AI。同时也强调了 AI 公司使用维基百科数据与公平补偿需求之间的紧张关系。 威尔士指出，维基百科的人类流量下降了 8%，而 AI 机器人流量上升，但他认为这“并非灾难”，因为维基百科依赖捐赠的商业模式不依赖流量。他呼吁 AI 公司为服务器成本支付公平份额。

rss · IT之家 · 6月23日 23:16

**背景**: AI 幻觉是指 AI 生成看似真实但实际虚假或误导性信息的现象，这是大型语言模型的常见问题。维基百科依赖志愿者人类编辑确保准确性，其内容被广泛用于训练和提供 AI 模型。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/AI_hallucination">AI hallucination</a></li>

</ul>
</details>

**标签**: `#AI`, `#Wikipedia`, `#AI Hallucination`, `#Content Moderation`

---