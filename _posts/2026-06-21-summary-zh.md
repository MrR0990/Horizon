---
layout: default
title: "Horizon Summary: 2026-06-21 (ZH)"
date: 2026-06-21
lang: zh
---

> 从 238 条内容中筛选出 28 条重要资讯。

---

---

## 🔭 未知的未知

- [技术化石：人类制造的岩石重新定义地质学](https://aeon.co/essays/the-strange-rocks-that-wouldnt-exist-without-us) ⭐️ 9.0/10

  > 这篇文章介绍了“技术化石”——塑料和混凝土等人造物体成为地质记录的一部分，挑战了人类世中自然与人工岩石的传统区分。 这一概念迫使地质学家和哲学家重新思考什么是“自然的”，并将地质学范围扩大到包括人类活动作为地质力量，对我们理解地球未来的地层具有深远影响。 技术化石包括塑料瓶、合成纤维和混凝土等耐用物品，它们可以存在数百万年，并可能成为人类世的关键标志。

- [尼克·兰德加速主义：后人类未来的黑暗愿景](https://aeon.co/essays/what-is-nick-lands-philosophy-of-accelerationism-really) ⭐️ 9.0/10

  > Vincent Lê在 Aeon 上发表的一篇文章探讨了尼克·兰德的加速主义哲学，该哲学认为技术和资本主义将不可避免地加速超越人类控制，导致后人类世界的到来。 这一哲学挑战了硅谷的技术乐观主义，为 AI 和资本主义的发展轨迹提供了批判性视角，影响了边缘政治运动和学术讨论。 兰德的加速主义不同于左翼加速主义和有效加速主义（e/acc），它秉持虚无主义观点，认为人类只是机器进程中的一个过渡阶段。

- [奥利弗·萨克斯论幻象的必要性](https://www.themarginalian.org/2026/06/16/oliver-sacks-illusions/) ⭐️ 9.0/10

  > 奥利弗·萨克斯提出，幻象不仅仅是认知错误，而是帮助我们承受时间和死亡重量的必要虚构。 这一观点挑战了将幻象视为纯粹错误的普遍假设，将其重新定义为心理健康和应对存在焦虑的关键。 萨克斯强调超脱与投入的双重需求，并指出生命的意义与爱有关。

- [自我七层：文学与哲学框架](https://www.themarginalian.org/2026/06/16/amelie-rorty-the-identities-of-persons/) ⭐️ 9.0/10

  > Amélie Rorty 的文章提出了一个七层自我模型，认为人的定义在于选择能力而非固定特质。 该框架挑战了传统的身份概念，为认知科学和 AI 伦理等领域提供了新视角，这些领域中人格是核心议题。 这七层从生物个体性到叙事身份，强调意向性而非静态配置。

---

## 🧠 AI 学习

- [长时运行 LLM 代理的上下文剪枝管道](https://machinelearningmastery.com/building-a-context-pruning-pipeline-for-long-running-agents/) ⭐️ 8.0/10

  > 一篇关于为长时运行 LLM 代理实现上下文剪枝管道的实用指南已发布，详细说明了如何通过选择性保留相关上下文来管理令牌限制并维持性能。 随着 LLM 代理长时间运行，上下文窗口增长并降低性能；该管道提供了一种系统化解决方案，可降低成本、延迟和“中间丢失”问题，使长时运行代理更可靠且经济。 该管道使用一个中间件层，根据新近度、重要性和相关性（RIR）对上下文进行评分，然后在令牌到达 LLM 之前剪除低分令牌。它可将输入大小减少 20%，延迟降低 10-15%，通过使用 FAISS 和 scikit-learn 等库的 LLM 前中间件进行集成。

- [Token 选择统计：Logits、温度与 Top-P](https://machinelearningmastery.com/the-statistics-of-token-selection-logits-temperature-and-top-p-walkthrough/) ⭐️ 8.0/10

  > MachineLearningMastery.com 上的一篇新教程详细介绍了 logits、温度缩放和 top-p 采样如何控制大语言模型中的 token 选择，以平衡连贯性和创造性。 理解这些机制对于从业者针对特定应用（如创意写作或事实问答）微调 LLM 输出至关重要。 该教程解释了 logits 是通过 softmax 转换为概率的原始分数，温度缩放 logits 以控制随机性，而 top-p 采样则从累积概率超过阈值 p 的最小 token 集合中进行选择。

- [RAG 中的混合语义-词汇搜索](https://machinelearningmastery.com/implementing-hybrid-semantic-lexical-search-in-rag/) ⭐️ 7.0/10

  > 一篇新教程展示了如何在 RAG 系统中通过结合 BM25 词汇搜索与语义搜索，并使用倒数排名融合（RRF）来实现混合语义-词汇搜索。 混合搜索通过平衡精确关键词匹配与语义理解来提高检索质量，解决了用户查询返回零结果等常见问题。该技术对于将 RAG 系统从原型推向生产至关重要。 该实现使用 BM25 进行词汇搜索，使用密集嵌入进行语义搜索，并通过 RRF 融合生成单一排序列表。教程包含代码示例和面向实践者的实用指导。

- [使用 Scikit-LLM 与开源大语言模型](https://machinelearningmastery.com/using-scikit-llm-with-open-source-llms/) ⭐️ 6.0/10

  > 一篇教程展示了如何通过 Ollama 使用 Scikit-LLM Python 库与本地部署的开源大语言模型（Mistral、Gemma、Llama 3）进行文本分类任务。 这种集成使开发者能够在不依赖云 API 的情况下，使用强大的大语言模型进行文本分类，从而降低成本并提高数据隐私性。 Scikit-LLM 为 LLM 提供了与 scikit-learn 兼容的接口，而 Ollama 则提供了一个免费仓库用于本地运行模型。该教程涵盖了使用这些工具进行零样本分类的内容。

- [构建具有错误恢复能力的多工具 Gemma 4 智能体](https://machinelearningmastery.com/building-a-multi-tool-gemma-4-agent-with-error-recovery/) ⭐️ 6.0/10

  > MachineLearningMastery.com 上的一篇教程展示了如何使用 Google DeepMind 的 Gemma 4 模型构建多工具智能体，并通过迭代对话处理机制实现错误恢复。 该教程为开发者提供了构建稳健自主智能体的实用指导，使其能够处理工具故障，这对于在实际应用中部署可靠的 AI 系统至关重要。 该智能体将对话列表作为记忆，每次迭代将完整历史发送回模型，从而实现无状态错误恢复。该方法利用了 Gemma 4 的原生函数调用支持和系统提示能力。

---

## ✍️ 表达提升

- [比尔·格利谈心智模型与系统思维](https://fs.blog/knowledge-project-podcast/bill-gurley/) ⭐️ 8.0/10

  > 著名风险投资家、圣塔菲研究所董事会成员比尔·格利在最新一期的 Farnam Street 播客中分享了他最常使用的心智模型，包括系统思维以及二阶和三阶效应。 这期节目提供了一位顶级投资者和复杂性科学专家的实用认知工具，帮助听众提升决策能力并理解复杂系统——这些技能在当今互联互通的世界中愈发重要。 格利讨论了系统思维、二阶和三阶效应等心智模型，以及理解一个领域的基础与前沿的重要性。该节目可在 YouTube、Spotify、Apple Podcasts 上收听，并提供文字记录。

- [马克·平卡斯提出“已验证、更好、全新”创新框架](https://fs.blog/knowledge-project-podcast/mark-pincus/) ⭐️ 7.0/10

  > 《FarmVille》和《Words with Friends》的创造者马克·平卡斯在 Farnam Street 知识项目播客中分享了他的创新框架“已验证、更好、全新”。 该框架提供了一种具体且可操作的创新方法，平衡了风险与新颖性，可帮助企业家和产品开发者在追求突破之前系统性地建立在已验证的想法之上。 “已验证、更好、全新”框架建议从已验证的概念开始，然后加以改进，最后才追求真正的新想法。平卡斯在 Zynga 应用了这一方法，在现有机制基础上构建社交游戏。

- [RiseGuide 创始人访谈：专家驱动的自我提升](https://nesslabs.com/riseguide-featured-tool?utm_source=rss&utm_medium=rss&utm_campaign=riseguide-featured-tool) ⭐️ 5.0/10

  > Ness Labs 发布了对 RiseGuide 创始人 Oleksandr Matsiuk 的访谈，RiseGuide 是一款基于专家知识提供个性化自我提升计划的应用程序。 这突显了专家主导、结构化的自我提升应用日益增长的趋势，这些应用旨在用个性化的每日课程取代零散的建议。 RiseGuide 提供关于沟通、自信和记忆力等主题的每日互动课程，每节课结束时还有实用的练习。

---

## 🧬 人性与行为

- [执法轻微违法行为的权衡](https://behavioralscientist.org/what-becomes-of-second-chances/) ⭐️ 8.0/10

  > 《行为科学家》一篇文章探讨了通过执法逃票等轻微违法行为来抓捕重罪犯的复杂权衡，既指出了预防犯罪的好处，也指出了过度执法和侵蚀公众信任的风险。 这一分析之所以重要，是因为它揭示了一个非显而易见的行为洞察：看似能有效抓捕罪犯的政策也可能导致种族偏见、因贫困相关违法行为而增加的监禁以及执法信任度下降等意外后果。 文章引用了纽约市和旧金山的例子，逃票执法导致携带武器和毒品的人被捕，但也引发了关于将贫困刑事化的辩论。2023 年，BART 反对将逃票非刑事化，而曼哈顿地区检察官小赛·万斯在 2017 年停止起诉此类案件。

- [LLM 修格斯迷因：比你想象的更深](https://www.lesswrong.com/posts/nhb8AyEcQGjQetgi5/the-llm-shoggoth-meme-is-weirder-than-you-think) ⭐️ 8.0/10

  > 一篇 LessWrong 文章深入分析了 LLM 修格斯迷因，将其与 H.P. 洛夫克拉夫特的宇宙恐怖联系起来，并认为该迷因反映了人类对异类智能和大型语言模型诡异本质的深层恐惧。 这一分析揭示，该迷因不仅仅是一个笑话，而是触及了基本的心理和进化恐惧，提供了关于人类如何看待模仿我们但本质上不同的 AI 的见解。它突显了尽管 LLM 有 helpful 的外表，许多人仍感到不适。 文章将洛夫克拉夫特的修格斯（旧日支配者创造的无脑模仿者）与 LLM 进行类比，LLM 在人类数据上训练并通过 RLHF 微调以显得 helpful，但本质上仍是异类。文章还指出，该迷因起源于 2022 年一位名为 Tetraspace 的 Twitter 用户，讽刺 RLHF 掩盖了 LLM 的异类本质。

---

## 📜 历史的节律

- [我们正在见证美帝国的终结吗？](https://www.historyextra.com/membership/are-we-now-witnessing-the-end-of-the-american-empire/) ⭐️ 8.0/10

  > 历史学家迈克尔·伍德探讨美国是否正遵循历史上帝国衰落的模式，并与罗马、大英帝国等过去的帝国进行类比。 这一分析之所以重要，是因为它通过历史先例的视角，为理解美国当前的政治和经济挑战提供了框架，并可能为未来提供借鉴。 这篇文章发表在 HistoryExtra 上，借鉴了伍德在世界史方面的专业知识，重点关注过度扩张、经济压力以及道德权威丧失等模式。

- [美国革命在英国引发激进主义](https://www.historyextra.com/membership/how-american-revolution-inflamed-passions-britain/) ⭐️ 7.0/10

  > 历史学家 Tom Cutterham 的一篇新文章揭示，美国革命不仅激励了殖民地居民，还在英国本土点燃了激进运动，包括一名年轻的苏格兰破坏者，他对英国政府采取了行动。 这表明压迫性政策可能在国内产生反效果，在压迫国激发平行运动，与现代全球抗议和政府越权行为有明显的相似之处。 文章聚焦于一名年轻的苏格兰破坏者的具体案例，他被英国政府的高压行动激怒，说明了美国革命期间英国激进主义的更广泛模式。

---

## 💰 财富与复利

- [有用比富有更有吸引力](https://ofdollarsanddata.com/being-useful-is-more-attractive-than-being-rich/) ⭐️ 8.0/10

  > 一篇关于一位 41 岁男子提前退休、拥有 200 万美元流动资产却整天打游戏吸大麻的 Reddit 帖子引发热议，文章指出，有用和投入比单纯的财务独立更有吸引力。 这一见解挑战了 FIRE 运动的核心前提，表明没有目标的财务独立可能导致不快乐和关系紧张。它强调，雄心和有用性是吸引力和生活满意度的关键因素，而不仅仅是财富。 该男子每年从资产和版税中获得 12.5 万美元和 7.5 万美元收入，但妻子因他每天玩 GTA 和吸大麻而称他为“失败者”。文章引用了 David Buss 在 37 个文化中的研究，表明在择偶中雄心比资源更重要。

- [黑客与艺术家：创作光谱](https://ofdollarsanddata.com/hacks-vs-artists/) ⭐️ 8.0/10

  > Nick Maggiulli 以 HBO 剧集《Hacks》为例，阐述了为钱创作（黑客）与为艺术创作（艺术家）之间的张力，并提出这一光谱适用于所有创作者和专业人士。 这一框架帮助创作者和投资者从长期角度思考价值创造与短期回报，并揭示了抑制创造力的模式崩溃行为金融概念。 Maggiulli 提供了黑客与艺术家行为的具体例子，例如为追求病毒式传播而给出糟糕建议（黑客）与推广自己引以为傲的作品（艺术家），并指出大多数人两者兼具。

---

## 📰 技术资讯

1. [Epoll 与 io_uring：性能与安全权衡](#item-1) ⭐️ 8.0/10
2. [开发者为何拒绝能运行的 AI 代码](#item-2) ⭐️ 8.0/10
3. [2022 年前书籍因 AI 更可信](#item-3) ⭐️ 8.0/10
4. [NASA 启动史无前例的 Swift 天文台救援任务](#item-4) ⭐️ 8.0/10
5. [台积电加速研发 CoPoS 封装以取代 CoWoS](#item-5) ⭐️ 8.0/10
6. [特斯拉开启 Autopilot 撞入民宅致 76 岁女性身亡](#item-6) ⭐️ 7.0/10
7. [微软确认 KB5094126 更新导致 Office 崩溃和回收站问题](#item-7) ⭐️ 7.0/10
8. [特斯拉 Cybercab 侧视摄像头喷淋清洗系统](#item-8) ⭐️ 6.0/10
9. [微信灰度测试原生 AI 助手“小微”](#item-9) ⭐️ 6.0/10
10. [韩国央行警告存储芯片繁荣或推高通胀](#item-10) ⭐️ 6.0/10

---

<a id="item-1"></a>
## [Epoll 与 io_uring：性能与安全权衡](https://sibexi.co/posts/epoll-vs-io_uring/) ⭐️ 8.0/10

一篇关于 Linux I/O 中 epoll 与 io_uring 的详细技术对比文章已发布，分析了性能差异和安全影响。文章指出，虽然 io_uring 每秒请求数可比 epoll 高出 20%，但其内核级直接内存共享引入了安全漏洞。 这一对比对于构建高性能网络服务的开发者至关重要，因为 io_uring 提供了显著的性能提升，但常因安全问题在生产环境中被禁用。理解这些权衡有助于工程师为他们的应用选择正确的 I/O 模型。 文章涵盖了静态批处理、连续批处理和完整实现细节。社区评论指出，CPU 绑定和套接字绑定可以进一步提升 epoll 性能，而 io_uring 近期遭遇了多次漏洞利用。

hackernews · Sibexico · 6月20日 23:07 · [社区讨论](https://news.ycombinator.com/item?id=48613872)

**背景**: epoll 是 Linux 内核中用于可扩展 I/O 事件通知的系统调用，广泛用于高性能网络服务器。io_uring 是一种较新的异步 I/O 接口，通过内核与用户空间之间的共享环形缓冲区实现零拷贝 I/O，提供更高吞吐量，但增加了内核攻击面。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Io_uring">io _ uring - Wikipedia</a></li>
<li><a href="https://man7.org/linux/man-pages/man7/io_uring.7.html">io _ uring (7) - Linux manual page</a></li>
<li><a href="https://github.com/axboe/liburing/issues/536">Yet another comparison between io _ uring and epoll on network...</a></li>

</ul>
</details>

**社区讨论**: 社区成员确认了 io_uring 的性能优势，但强调其安全缺陷，一位用户指出它“需要内核选择启用，并且出于安全原因几乎在所有地方都被禁用”。其他人建议使用 CPU 绑定和 mimalloc 等库来优化基于 epoll 的系统。

**标签**: `#Linux`, `#I/O`, `#epoll`, `#io_uring`, `#performance`

---

<a id="item-2"></a>
## [开发者为何拒绝能运行的 AI 代码](https://vinibrasil.com/when-i-reject-ai-code-even-if-it-works/) ⭐️ 8.0/10

一位开发者发表博客文章，解释为何即使 AI 生成的代码能正常运行，他们也会拒绝，理由包括不必要的复杂性、可维护性差以及与项目模式不符。 这凸显了软件工程中“能运行的代码”与“可维护的代码”之间日益增长的矛盾，挑战了“AI 生成的代码天然优质”的假设。它强调了人工代码审查的必要性以及代码质量超越单纯功能的重要性。 作者指出，AI 常常生成过度设计的抽象，且不遵循项目特定约定，导致代码更难维护。社区评论将其与拒绝同事的代码相类比，认为 AI 代码应受到与人类编写代码相同的标准。

hackernews · vnbrs · 6月21日 00:58 · [社区讨论](https://news.ycombinator.com/item?id=48614631)

**背景**: 像 GitHub Copilot 和 ChatGPT 这样的 AI 代码生成工具可以快速生成功能代码，但它们缺乏对项目独特上下文、编码风格和长期可维护性的理解。软件工程不仅强调正确性，还强调可读性、简洁性和遵循团队约定。

**社区讨论**: 评论者大多同意作者的观点，有人指出 AI 常常在存在更简单解决方案的地方创建复杂的抽象。另一个人将其与拒绝同事代码相类比，认为 AI 代码应受到同样的审查。一些人建议使用多个 AI 相互审查输出。

**标签**: `#AI code generation`, `#software engineering`, `#code quality`, `#developer experience`, `#LLM`

---

<a id="item-3"></a>
## [2022 年前书籍因 AI 更可信](https://notes.lorenzogravina.com/musings/pre-2022-books) ⭐️ 8.0/10

一篇博客文章认为，2022 年之前出版的书籍更可信，因为它们是在 AI 生成内容广泛使用之前撰写的，引发了关于真实性和检测的社区讨论。 这很重要，因为它凸显了在 AI 时代对信息可靠性的日益担忧，影响读者、研究人员和平台如何评估内容质量和可信度。 文章指出，AI 生成的书籍通常缺乏事实核查、编辑和排版，且以低成本生产以充斥亚马逊等平台。一些用户报告 AI 检测工具错误地将人类撰写的内容标记为 AI 生成。

hackernews · trms · 6月20日 22:36 · [社区讨论](https://news.ycombinator.com/item?id=48613631)

**背景**: 自 2022 年底以来，GPT-3.5 和 GPT-4 等大型语言模型使得文本生成变得容易，导致亚马逊等平台上 AI 生成的书籍泛滥。这引发了对信息质量以及区分人类与 AI 内容难度的担忧。

**社区讨论**: 评论者对 AI 生成的书籍表示沮丧，指出即使是人类撰写的内容也可能被 AI 检测器错误标记。一些人偏好 2022 年之前的参考资料，一位用户指出亚马逊上存在一年内出版超过 100 本 AI 生成书籍的作者。

**标签**: `#AI-generated content`, `#trustworthiness`, `#books`, `#information quality`, `#community discussion`

---

<a id="item-4"></a>
## [NASA 启动史无前例的 Swift 天文台救援任务](https://www.ithome.com/0/966/626.htm) ⭐️ 8.0/10

NASA 将于 2026 年 6 月 27 日发射一项救援任务，利用 Katalyst Space Technologies 的航天器“链路号”与 Swift 空间天文台对接并将其抬升至更高轨道，使其寿命延长至少五年。 此次任务是首次尝试与未设计用于在轨服务的政府航天器对接并进行维护，可能彻底改变卫星延寿技术并减少太空垃圾。 重 425 千克的“链路号”航天器配备三条机械臂和霍尔推进器，将由飞马座 XL 火箭发射。Swift 于 2004 年发射，没有推进系统，由于太阳活动加剧，其下降速度超出预期。

rss · IT之家 · 6月21日 03:10

**背景**: Neil Gehrels Swift 天文台是 NASA 于 2004 年发射的空间望远镜，用于研究伽马射线暴。它运行在约 600 公里高度的轨道上，但由于大气阻力逐渐下降。若无干预，它将于 2026 年底再入地球大气层。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Neil_Gehrels_Swift_Observatory">Neil Gehrels Swift Observatory - Wikipedia</a></li>
<li><a href="https://en.wikipedia.org/wiki/Katalyst_Space_Technologies">Katalyst Space Technologies</a></li>
<li><a href="https://www.katalystspace.com/news/katalyst-selects-northrop-grumman-pegasus-rocket-for-robotic-rescue-mission">Katalyst Selects Northrop Grumman Pegasus Rocket for Robotic...</a></li>

</ul>
</details>

**标签**: `#NASA`, `#space rescue`, `#Swift observatory`, `#orbital mechanics`, `#spacecraft docking`

---

<a id="item-5"></a>
## [台积电加速研发 CoPoS 封装以取代 CoWoS](https://www.ithome.com/0/966/590.htm) ⭐️ 8.0/10

台积电正加速研发 CoPoS（基板上面板芯片封装）技术，采用玻璃核心基板可降低成本 20-30%，并将晶圆利用率提升至 90%以上，旨在取代现有的 CoWoS 工艺。 这一转变可大幅降低 AI 芯片制造成本并提升性能，满足日益增长的高性能计算需求，同时也使台积电在先进封装市场与英特尔展开竞争。 CoPoS 采用最大 750×620 毫米的方形/矩形面板，而 CoWoS 使用 300 毫米圆形晶圆，单块基材可容纳更多芯片。台积电计划 2027 年试产，2028 年量产，完整玻璃核心 CoPoS 工艺在 2030 年后。

rss · IT之家 · 6月20日 23:32

**背景**: CoWoS（基板上晶圆上芯片）是台积电当前用于 AI 芯片（如 NVIDIA Blackwell）的先进封装技术。随着芯片尺寸增大，CoWoS 接近物理极限。玻璃核心基板相比硅或有机材料，具有更大尺寸、更低信号损耗和更好热稳定性。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://wallstreetcn.com/articles/3771756">CoWoS之后，下一代先进封装会是CoPoS？</a></li>
<li><a href="https://finance.sina.com.cn/tech/digi/2026-04-13/doc-inhuixxe4782666.shtml">曝台积电准备新一代 CoPoS 封装技术，试点生产线预计今年 6 月完工|台积电|芯片|新一代_新浪科技_新浪网</a></li>
<li><a href="https://www.bnext.com.tw/article/82088/tsmc-cowos-type-explanation">CoWoS是什麼？台積電先進封裝技術介紹：CoWoS、CoWoP、CoPoS差異一次...</a></li>

</ul>
</details>

**标签**: `#半导体`, `#先进封装`, `#台积电`, `#AI芯片`, `#CoPoS`

---

<a id="item-6"></a>
## [特斯拉开启 Autopilot 撞入民宅致 76 岁女性身亡](https://www.ithome.com/0/966/610.htm) ⭐️ 7.0/10

周五晚，一辆据称开启了 Autopilot 系统的特斯拉撞入得克萨斯州一栋民宅，导致一名 76 岁女性死亡，44 岁驾驶员受伤。驾驶员向调查人员称事故发生时 Autopilot 处于开启状态。 这起事故增加了涉及特斯拉驾驶辅助系统的致命碰撞案例，加剧了监管审查和公众对 Autopilot 及 FSD 安全性的争论，凸显了明确责任和系统局限性的迫切需求。 车辆在路口未能转弯，保持高速直行，撞穿砖墙冲入受害者所在的客厅。调查人员尚未确认启用的是 Autopilot 还是 FSD（监督版），目前未提出任何指控。

rss · IT之家 · 6月21日 02:03

**背景**: 特斯拉的 Autopilot 是一种需要驾驶员持续注意的驾驶辅助系统，而 FSD（监督版）提供更高级功能但仍需驾驶员监督。两者均为 L2 级系统，驾驶员必须随时准备接管。NHTSA 一直在调查特斯拉的驾驶辅助系统，包括 2025 年 10 月对约 290 万辆配备 FSD 的车辆展开调查，并于 2026 年 3 月升级为工程分析。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/List_of_Tesla_Autopilot_crashes">List of Tesla Autopilot crashes - Wikipedia</a></li>
<li><a href="https://recharged.com/articles/tesla-fsd-vs-autopilot-differences">Tesla FSD vs Autopilot Differences in 2026 | Recharged</a></li>

</ul>
</details>

**标签**: `#Tesla`, `#Autopilot`, `#autonomous driving`, `#safety`, `#accident`

---

<a id="item-7"></a>
## [微软确认 KB5094126 更新导致 Office 崩溃和回收站问题](https://www.ithome.com/0/966/585.htm) ⭐️ 7.0/10

微软已确认，Windows 11 25H2/24H2 的 2026 年 6 月强制更新 KB5094126 导致 Office 应用程序通过 OLE 自动化崩溃以及回收站文件名显示错误，此外还有未确认的蓝屏和 BitLocker 恢复循环报告。 此更新对所有 Windows 11 25H2/24H2 系统是强制性的，影响企业生产力工具和系统稳定性。IT 管理员必须准备临时解决方案，直到 2026 年 7 月 14 日修复发布。 Office 崩溃发生在第三方软件通过 OLE 自动化调用 Word、Excel 或 PowerPoint 时；手动打开 Office 应用则正常。回收站显示内部文件名如 $Rxxxxx.ext 而非原始名称，但不会导致数据丢失。

rss · IT之家 · 6月20日 23:12

**背景**: KB5094126 是 2026 年 6 月 9 日发布的 Windows 11 24H2 和 25H2 的累积安全更新。OLE 自动化是微软的一项技术，允许一个应用程序控制另一个应用程序，常用于企业软件。BitLocker 是一种磁盘加密功能，如果系统文件损坏，启动时可能会提示输入恢复密钥。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.catalog.update.microsoft.com/Search.aspx?q=KB5094126">Microsoft Update Catalog</a></li>
<li><a href="https://en.wikipedia.org/wiki/OLE_Automation">OLE Automation</a></li>
<li><a href="https://learn.microsoft.com/en-us/windows/security/operating-system-security/data-protection/bitlocker/preboot-recovery-screen">BitLocker preboot recovery screen | Microsoft Learn</a></li>

</ul>
</details>

**标签**: `#Windows 11`, `#KB5094126`, `#Office`, `#BSOD`, `#Update Issues`

---

<a id="item-8"></a>
## [特斯拉 Cybercab 侧视摄像头喷淋清洗系统](https://www.ithome.com/0/966/629.htm) ⭐️ 6.0/10

一张特斯拉 Cybercab 的谍照显示，其侧视摄像头外壳集成了喷淋清洗系统，旨在恶劣天气下保持镜头清晰。该硬件解决了特斯拉纯视觉 FSD 系统的一个已知弱点。 该功能对于可靠的无监督 FSD 至关重要，因为摄像头脏污可能触发安全退出机制。这也意味着现有 AI4 车型可能需要改装或硬件升级才能达到同等的全天候能力。 喷淋系统针对用于变道和盲区监测的侧视摄像头，后置摄像头也可能加入类似清洁功能。Cybercab 没有方向盘和后视镜，因此必须依靠自动清洁来持续运营。

rss · IT之家 · 6月21日 04:04

**背景**: 特斯拉的 FSD 系统完全依赖摄像头进行感知，因此镜头清洁至关重要。当前 AI4 车型缺少专用的侧/后摄像头清洗装置，车主常在警告出现时手动清洁镜头。Cybercab 的设计直接解决了这一限制。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Tesla_Cybercab">Tesla Cybercab - Wikipedia</a></li>
<li><a href="https://www.autopilotreview.com/tesla-hardware-4-rolling-out-to-new-vehicles/">Tesla Hardware 4 (AI4) – Full Details and Latest News</a></li>

</ul>
</details>

**标签**: `#Tesla`, `#autonomous driving`, `#camera cleaning`, `#FSD`, `#Cybercab`

---

<a id="item-9"></a>
## [微信灰度测试原生 AI 助手“小微”](https://36kr.com/newsflashes/3862458180359424?f=rss) ⭐️ 6.0/10

微信已小范围灰度上线原生 AI 助手“小微”，部分用户主界面左上角出现小眼睛图标，点击即可进入测试版。该助手支持通过文字或语音对话操作微信原生功能、调起小程序等。 这是微信首次原生集成 AI 助手，可能通过免提控制和智能任务执行改变用户与应用的交互方式。它标志着超级应用嵌入 AI 助手的趋势，可能重塑用户习惯和消息生态的竞争格局。 该测试仅面向小部分用户，助手可通过文字或语音执行发送消息、查询朋友圈、预约服务等任务。据腾讯客服介绍，小微是微信团队开发的原生 AI 助手，用于内部测试。

rss · 36氪 · 6月21日 05:03

**背景**: 微信是腾讯开发的中国多功能消息、社交媒体和移动支付应用。“灰度测试”是中国科技公司常见的做法，即新功能先向一小部分用户推送，然后逐步扩大范围。AI 助手如 Siri 或 Alexa 已很常见，但将其原生集成到微信这样的超级应用中相对较新。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://t.me/times001/812451">电报时报 – Telegram</a></li>

</ul>
</details>

**标签**: `#WeChat`, `#AI assistant`, `#voice assistant`, `#beta`

---

<a id="item-10"></a>
## [韩国央行警告存储芯片繁荣或推高通胀](https://36kr.com/newsflashes/3862282115749129?f=rss) ⭐️ 6.0/10

韩国央行警告称，存储芯片景气周期带来的巨额绩效奖金可能扩散至更广泛领域，推高通胀压力，并可能在 7 月或 9 月加息。 这凸显了半导体上行周期可能对主要芯片生产国的宏观经济产生溢出效应，影响央行政策和消费者价格。 韩国央行预测 2026 年通胀率为 2.7%，远高于 2%的目标，并将 7 月或 9 月的政策会议视为重要的加息窗口。芯片厂周边的奢侈品消费已升温，零售股被当作“存储概念股”炒作。

rss · 36氪 · 6月21日 02:26

**背景**: 存储芯片是半导体市场中规模最大、周期性最明显的细分领域，常被视为行业风向标。韩国拥有三星和 SK 海力士这两家全球顶级存储芯片制造商，其员工奖金在景气周期大幅增长，刺激本地消费，可能推高整体通胀。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.36kr.com/p/3804471429046277">单季最高涨价75%，存储芯片2026年行业景气度全面上行-36氪</a></li>
<li><a href="https://news.qq.com/rain/a/20260617A053BH00">韩国央行预计通胀将持续高于目标水平 直至明年_腾讯新闻</a></li>
<li><a href="https://cn.tradingview.com/news/reuters.com,2026:newsml_L6S42P0DI:0/">韩国央行：在通胀回落至目标水平之前将积极采取应对措施 — TradingVie...</a></li>

</ul>
</details>

**标签**: `#semiconductors`, `#inflation`, `#macroeconomics`, `#South Korea`, `#memory chips`

---