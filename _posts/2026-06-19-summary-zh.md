---
layout: default
title: "Horizon Summary: 2026-06-19 (ZH)"
date: 2026-06-19
lang: zh
---

> 从 28 条内容中筛选出 16 条重要资讯。

---

1. [Project Valhalla 历经十年终在 JDK 28 落地](#item-1) ⭐️ 9.0/10
2. [MCP 零接触 OAuth 与 ID-JAG 令牌](#item-2) ⭐️ 8.0/10
3. [工具探测 LLM 对个人的识别能力](#item-3) ⭐️ 8.0/10
4. [Merkle 树证书：更快速、更安全的互联网](#item-4) ⭐️ 8.0/10
5. [Postgres 19 Beta：新特性深度解析](#item-5) ⭐️ 8.0/10
6. [定义 Well-Known URI 的最佳实践](#item-6) ⭐️ 7.0/10
7. [Datasette Apps：在 Datasette 中运行沙盒化 HTML/JS 应用](#item-7) ⭐️ 7.0/10
8. [文章指出利润动机无法提供社会基础设施](#item-8) ⭐️ 7.0/10
9. [旧软件因硬件限制而快速](#item-9) ⭐️ 7.0/10
10. [C++ CPU 周期成本草稿章节](#item-10) ⭐️ 7.0/10
11. [如何让 Java ExecutorService 死锁](#item-11) ⭐️ 7.0/10
12. [PostgreSQL 现代索引工作原理](#item-12) ⭐️ 7.0/10
13. [AirPods 在城市中创造个人声学气泡](#item-13) ⭐️ 6.0/10
14. [Datasette-acl 0.6a0 扩展为通用资源共享系统](#item-14) ⭐️ 6.0/10
15. [构建自己的漏洞测试框架指南](#item-15) ⭐️ 6.0/10
16. [重新思考 Ruby 应用中的模块化](#item-16) ⭐️ 6.0/10

---

<a id="item-1"></a>
## [Project Valhalla 历经十年终在 JDK 28 落地](https://www.jvm-weekly.com/p/project-valhalla-explained-how-a) ⭐️ 9.0/10

Project Valhalla 历经十年努力，最终在 JDK 28 中引入了值类型（内联类），实现了无需对象头的扁平化、紧凑数据布局，从而提升性能。 这代表了 Java 内存模型的重大范式转变，使开发者能够编写更节省内存、更快的应用程序，尤其适用于数据密集型工作负载。它弥合了面向对象表达性与底层性能之间的差距。 内联类将值直接存储在数组或字段中，无需对象头，但扁平化数据需要原子访问以避免并发下的撕裂问题。设计优先考虑用户简便性而非最高性能上限。

hackernews · philonoist · 6月19日 06:35 · [社区讨论](https://news.ycombinator.com/item?id=48595511)

**背景**: 在 Java 中，每个对象传统上都有一个头部（如标记字、类指针），增加了内存开销。Project Valhalla 引入了值类型（内联类），它们像基本类型一样工作，但可以拥有方法和字段，从而实现无需间接引用的紧凑存储。自 2014 年项目宣布以来，这一直是备受期待的特性。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Project_Valhalla_(Java_language)">Project Valhalla (Java language) - Wikipedia</a></li>
<li><a href="https://medium.com/@vishalpriyadarshi/project-valhalla-bringing-value-types-and-performance-efficiency-to-java-83b85e00b791">Project Valhalla : Bringing Value Types and Performance... | Medium</a></li>
<li><a href="https://www.baeldung.com/java-valhalla-project">Java Valhalla Project | Baeldung</a></li>

</ul>
</details>

**社区讨论**: Hacker News 上的评论讨论了设计权衡，如空安全性和原子性要求。一些用户担心原子性约束可能限制非线程安全用例的性能提升，而另一些用户则欣赏简化的模型。

**标签**: `#Java`, `#JVM`, `#Project Valhalla`, `#performance`, `#language design`

---

<a id="item-2"></a>
## [MCP 零接触 OAuth 与 ID-JAG 令牌](https://blog.modelcontextprotocol.io/posts/enterprise-managed-auth/) ⭐️ 8.0/10

Anthropic、Okta、Microsoft、Figma 和 Linear 为模型上下文协议 (MCP) 推出了企业托管授权 (EMA)，采用名为 ID-JAG 的新令牌格式，为 AI 代理实现零接触 OAuth 设置。 通过将认证流程隔离在代理的上下文窗口之外，简化并增强了 AI 代理环境中的认证安全性，改善了用户体验和企业采用 AI 工具的安全性。 ID-JAG 令牌遵循 'oauth-id-jag+jwt' 格式，使用令牌交换模式但不包含 actor_token 参数，允许使用同一 SSO 提供商的应用程序之间安全共享数据。

hackernews · niyikiza · 6月18日 21:54 · [社区讨论](https://news.ycombinator.com/item?id=48592163)

**背景**: 模型上下文协议 (MCP) 是 Anthropic 于 2024 年 11 月推出的开放标准，旨在标准化 AI 应用程序与外部系统的连接方式。OAuth 2.0 是一种广泛使用的授权框架，允许第三方应用程序有限访问用户账户。ID-JAG 是一种新令牌格式，专为跨应用程序的身份感知数据共享而设计。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://blog.modelcontextprotocol.io/posts/enterprise-managed-auth/">Enterprise-Managed Authorization: Zero - touch OAuth for MCP</a></li>
<li><a href="https://news.ycombinator.com/item?id=48592163">Zero - Touch OAuth for MCP | Hacker News</a></li>

</ul>
</details>

**社区讨论**: 社区成员称赞将认证流程隔离在代理上下文窗口之外是一项有价值的安全改进。一位开发者提到在 MCP 服务器上使用 Microsoft Entra ID 认证时遇到挑战，尤其是在指示 client_id 方面。ID-JAG 格式被强调为不限于 MCP，可为安全数据共享提供更广泛的用途。

**标签**: `#OAuth`, `#MCP`, `#authentication`, `#security`, `#AI agents`

---

<a id="item-3"></a>
## [工具探测 LLM 对个人的识别能力](https://www.intheweights.com/) ⭐️ 8.0/10

新网站 intheweights.com 并行查询多个大型语言模型，检查它们对某个人的识别强度，并对响应进行聚类以显示识别程度。该工具揭示个人信息是否嵌入在模型权重中，而无需使用网络搜索。 该工具凸显了 LLM 在权重中保留个人数据的隐私影响，可能使个人面临误报或幻觉的风险。它提高了人们对模型如何识别或编造个人信息的认识，影响 AI 系统的信任和安全。 该工具并行查询前沿和小型模型，对响应进行聚类，并将其分类为识别或幻觉。用户报告了误报（如被误认为恐怖分子）和幻觉（模型编造传记）的情况。

hackernews · turtlesoup · 6月18日 20:49 · [社区讨论](https://news.ycombinator.com/item?id=48591348)

**背景**: 大型语言模型从海量数据集中学习，其权重编码了关于个人的知识，包括公众人物。当模型未经同意回忆或编造个人信息时，可能导致隐私风险。术语“in the weights”指直接存储在模型参数中的信息，而非通过外部工具检索。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://intheweights.com/about">IN THE WEIGHTS</a></li>
<li><a href="https://arstechnica.com/security/2026/03/llms-can-unmask-pseudonymous-users-at-scale-with-surprising-accuracy/">LLMs can unmask pseudonymous users at scale with surprising accuracy - Ars Technica</a></li>
<li><a href="https://minimaxir.com/2025/07/llms-identify-people/">LLMs can now identify public figures in images | Max Woolf's Blog</a></li>

</ul>
</details>

**社区讨论**: 社区评论反应不一：一些人认为该工具具有揭示性且令人担忧，因为存在误报和幻觉，尤其是对于常见名字或阿拉伯名字的人。其他人指出该工具经常产生幻觉或错误归因信息，引发对可靠性和隐私风险的质疑。

**标签**: `#LLM`, `#privacy`, `#AI`, `#tool`, `#hallucination`

---

<a id="item-4"></a>
## [Merkle 树证书：更快速、更安全的互联网](https://www.reddit.com/r/programming/comments/1u9czhg/keeping_the_internet_fast_and_secure_introducing/) ⭐️ 8.0/10

一种名为 Merkle 树证书（MTCs）的新型证书格式被提出，旨在取代传统的 X.509 证书，它集成了类似证书透明度的公开日志功能，以实现更快速、更安全的验证。 MTCs 可以显著降低证书验证的开销，提升网络性能，并支持高效的后量子密码学应用，这对于保障互联网未来的安全至关重要。 Merkle 树证书利用 Merkle 树将多个证书捆绑在一起，使得单个证明即可验证整个证书链，并且它们被设计为与 TLS 1.3 和后量子签名兼容。

reddit · r/programming · /u/CircumspectCapybara · 6月18日 17:41

**背景**: 传统的 X.509 证书依赖于分层的信任链，每个证书由更高级别的机构签名，验证时需要多次往返。Merkle 树是一种使用加密哈希高效验证大量数据的数据结构，常用于区块链。Merkle 树证书将这两个概念结合起来，以简化证书验证过程。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://grokipedia.com/page/Merkle_Tree_Certificates">Merkle Tree Certificates</a></li>
<li><a href="https://www.ietf.org/ietf-ftp/internet-drafts/draft-davidben-tls-merkle-tree-certs-06.html">Merkle Tree Certificates</a></li>
<li><a href="https://en.wikipedia.org/wiki/Merkle_tree">Merkle tree - Wikipedia</a></li>

</ul>
</details>

**标签**: `#security`, `#certificates`, `#Merkle tree`, `#web performance`, `#cryptography`

---

<a id="item-5"></a>
## [Postgres 19 Beta：新特性深度解析](https://www.reddit.com/r/programming/comments/1u9aktp/whats_new_in_postgres_19_beta_release_deep_dive/) ⭐️ 8.0/10

Postgres 19 Beta 版本引入了多项新特性，包括并行查询性能提升、逻辑复制增强以及新的 SQL/JSON 功能。 PostgreSQL 是最受欢迎的开源数据库之一，每个主要版本都会带来重大改进，影响全球数百万开发者和组织。 Beta 版本包含窗口函数的增量排序、更好的增量视图维护，以及外部数据包装器对 MERGE 的支持。

reddit · r/programming · /u/craigkerstiens · 6月18日 16:12

**背景**: PostgreSQL 是一个功能强大的开源对象关系数据库系统，拥有超过 30 年的活跃开发历史。主要版本每年发布一次，Beta 版本允许社区在最终版本发布前测试新功能。

**社区讨论**: Reddit 讨论中对并行查询改进和逻辑复制增强表现出兴奋，部分用户对 Beta 版本的稳定性表示谨慎。

**标签**: `#PostgreSQL`, `#database`, `#release`, `#beta`

---

<a id="item-6"></a>
## [定义 Well-Known URI 的最佳实践](https://mnot.net/blog/2026/well_known_uris) ⭐️ 7.0/10

Mark Nottingham 的一篇技术博客文章解释了在 /.well-known/ 路径下定义 well-known URI 的目的和最佳实践，以避免污染根命名空间。 这一点很重要，因为不当使用根命名空间进行发现端点会导致冲突和维护问题；遵循 well-known URI 标准（RFC 8615）可确保互操作性和网络标准的未来适应性。 文章强调，well-known URI 应在 IANA 注册，并且多个 well-known URI 可以在 /.well-known/ 下共存而不会冲突。它还警告不要创建像 'llms.txt' 这样的新根级路径。

hackernews · ingve · 6月19日 06:05 · [社区讨论](https://news.ycombinator.com/item?id=48595331)

**背景**: Well-known URI 在 RFC 5785 中标准化并由 RFC 8615 更新，为 Web 服务器上的元数据和服务发现提供了保留路径前缀 (/.well-known/)。在此标准之前，每个协议都定义了自己的任意发现路径，导致命名空间污染和冲突。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Well-known_URI">Well - known URI - Wikipedia</a></li>
<li><a href="https://http.dev/well-known-uris">Well - Known URIs explained</a></li>
<li><a href="https://cameronrye.com/blog/well-known-uris-standardizing-web-metadata/">Well - known URIs : Standardizing Web Metadata... | Cameron Rye</a></li>

</ul>
</details>

**社区讨论**: 评论者普遍认同根命名空间污染的问题，并引用了 'llms.txt' 等例子。然而，一些人批评该帖子缺乏可操作的建议和具体示例，认为其内容肤浅。

**标签**: `#web standards`, `#URI`, `#HTTP`, `#best practices`, `#IETF`

---

<a id="item-7"></a>
## [Datasette Apps：在 Datasette 中运行沙盒化 HTML/JS 应用](https://simonwillison.net/2026/Jun/18/datasette-apps/#atom-everything) ⭐️ 7.0/10

datasette-apps 插件允许在 Datasette 中托管沙盒化的 HTML+JavaScript 应用，支持只读 SQL 查询，并可通过存储过程实现写入查询。 该插件将 Datasette 转变为一个直接在 SQLite 数据之上构建自定义、安全 Web 应用的平台，将其用例从数据探索扩展到完整的应用托管。 应用在沙盒化的 iframe 中运行，并带有 CSP 头，阻止外部 HTTP 请求，防止数据泄露。写入查询需要预先配置的存储过程，增加了安全层。

rss · Simon Willison · 6月18日 23:58 · [社区讨论](https://news.ycombinator.com/item?id=48593731)

**背景**: Datasette 是一个用于探索和发布数据的开源工具，提供 JSON API 以支持自定义前端。新插件在此基础上，允许用户直接在 Datasette 界面中嵌入交互式应用，并使用沙盒化 iframe 确保安全。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Stored_procedure">Stored procedure - Wikipedia</a></li>

</ul>
</details>

**社区讨论**: 评论者注意到与其他项目（如 Motherduck 的“dives”）的相似之处，并讨论了通过存储过程进行写入访问的安全影响，质疑谁定义这些存储过程以及限制是否真正可执行。

**标签**: `#datasette`, `#plugin`, `#sql`, `#web-applications`, `#sandbox`

---

<a id="item-8"></a>
## [文章指出利润动机无法提供社会基础设施](https://wilsoniumite.com/2026/06/19/the-room-the-economy-cant-see/) ⭐️ 7.0/10

一篇题为《经济看不见的房间》的文章指出，利润动机系统性地无法产生社区空间等基本社会基础设施，并呼吁将市场限制在更广泛的社会上层建筑之内。 这一批判挑战了市场能有效配置所有有价值资源的默认假设，揭示了经济思维中的一个盲点，该盲点影响着社区福祉和社会凝聚力。 文章用“房间”的隐喻代表有价值但无法出售的非货币化社交空间，例如让孤独青少年聚集的场所。社区评论提供了现实世界的例子，如童子军聚会、图书馆和公园。

hackernews · Wilsoniumite · 6月19日 10:16 · [社区讨论](https://news.ycombinator.com/item?id=48596911)

**背景**: 当追求利润无法带来社会最优结果时，就会出现市场失灵，尤其是对于非竞争性和非排他性的公共物品。社会基础设施包括促进社区互动和信任的物质及社交空间，这些往往由市场提供不足。

**社区讨论**: 评论者大多同意文章观点，分享了关于闲暇和非市场空间价值的个人经历。一位用户指出，市场在抑制此类支出时实际上是在优化，但这表明市场应被限制在社会上层建筑之内。

**标签**: `#economics`, `#social infrastructure`, `#market failure`, `#public goods`, `#community`

---

<a id="item-9"></a>
## [旧软件因硬件限制而快速](https://www.reddit.com/r/programming/comments/1ua2lxq/old_software_was_fast_because_it_had_no_choice/) ⭐️ 7.0/10

Reddit 上的一场讨论认为，旧软件之所以更快，是因为它必须在有限的硬件上运行，而现代软件往往优先考虑功能和开发者生产力，而非性能。 这凸显了软件工程中的一个基本权衡：性能与开发速度和功能丰富性之间的取舍，影响着整个行业的用户体验和系统资源使用。 该帖子指出，旧软件由于硬件限制别无选择只能高效，而现代软件往往依赖更快的硬件来弥补高级语言和框架引入的低效。

reddit · r/programming · /u/BlondieCoder · 6月19日 13:52

**背景**: 在计算早期，CPU 和内存极其有限，迫使开发者编写高度优化的代码。随着硬件变得更强大，开发者将重点转向生产力和功能，导致软件臃肿。这场讨论重新审视了这一历史背景，以解释性能差异。

**社区讨论**: 评论者基本同意这一前提，并补充了早期视频游戏和操作系统在极简硬件上运行的例子。一些人认为，鉴于硬件进步，现代软件的低效是可以接受的，而另一些人则认为臃肿损害了低性能设备上的用户体验。

**标签**: `#software performance`, `#systems design`, `#historical perspective`, `#engineering trade-offs`

---

<a id="item-10"></a>
## [C++ CPU 周期成本草稿章节](https://www.reddit.com/r/programming/comments/1u9yk1j/efficient_c_programming_for_modern_c_cpus_chapter/) ⭐️ 7.0/10

即将出版的《现代 64 位 CPU 的高效 C++编程》一书的第 4 章第二部分以草稿形式发布，其中包含信息图表以及自 2017 年以来 MUL/DIV 操作进展的微观研究。 本章提供了算术操作 CPU 周期成本的宝贵数据，帮助 C++开发者通过理解去悲观化策略而非过早优化来编写更高效的代码。 草稿包含 CPU 时钟周期操作成本的可视化以及自 2017 年以来 MUL/DIV 改进的微观研究，但明确这是一本关于去悲观化的书，而非优化。

reddit · r/programming · /u/no-bugs · 6月19日 10:40

**背景**: CPU 周期成本衡量一条指令执行所需的时钟周期数。现代 CPU 使用流水线和超标量设计，每个周期可执行多条指令，但乘法和除法等操作比加法慢。去悲观化指的是避免不必要损害性能的编码实践，而非主动提升性能的优化。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Instructions_per_cycle">Instructions per cycle - Wikipedia</a></li>
<li><a href="https://en.wikipedia.org/wiki/Cycles_per_instruction">Cycles per instruction - Wikipedia</a></li>

</ul>
</details>

**社区讨论**: Reddit 上的讨论很活跃，用户对草稿提供反馈并请求更多可视化内容。作者承诺修复评论中指出的问题。

**标签**: `#C++`, `#CPU`, `#performance`, `#optimization`, `#programming`

---

<a id="item-11"></a>
## [如何让 Java ExecutorService 死锁](https://www.reddit.com/r/programming/comments/1u9wq7z/how_to_deadlock_a_java_executorservice/) ⭐️ 7.0/10

一篇 Reddit 帖子解释了在同一个固定线程池中提交一个等待另一个任务完成的任务如何导致自诱导死锁，并讨论了避免方法。 这是一个常见的并发陷阱，可能悄无声息地冻结应用程序，理解它有助于开发者编写更健壮的 Java 多线程代码。 当池中的线程提交子任务并调用其 Future 的 get()时，会消耗唯一可用的线程并无限阻塞，从而发生死锁。使用更大的线程池、分离的池或异步技术（如 CompletableFuture）可以避免。

reddit · r/programming · /u/mlangc · 6月19日 08:54

**背景**: Java 的 ExecutorService 管理一个线程池来并发执行任务。固定线程池的线程数量有限；如果所有线程都忙，而一个任务等待另一个已排队但因无空闲线程而无法运行的任务，就会发生死锁。这被称为线程池自诱导死锁。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://dzone.com/articles/thread-pool-self-induced-deadlocks">Thread Pool Self-Induced Deadlocks</a></li>
<li><a href="https://coderanch.com/t/662131/java/Deadlock-Executor-Service">Deadlock in Executor Service (Java in General forum at Coderanch)</a></li>
<li><a href="https://javanexus.com/blog/solving-deadlock-java-executorservice">Solving Deadlock Problems in Java ExecutorService | Java Tech Blog</a></li>

</ul>
</details>

**标签**: `#Java`, `#Concurrency`, `#Deadlock`, `#ExecutorService`

---

<a id="item-12"></a>
## [PostgreSQL 现代索引工作原理](https://www.reddit.com/r/programming/comments/1u9adv5/how_modern_indexing_works_in_postgresql_in_depth/) ⭐️ 7.0/10

一篇关于 PostgreSQL 索引内部机制的详细解释揭示了 PostgreSQL 使用 io_uring 实现高效同步 I/O，使用 fseek() 直接从磁盘检索记录，并在内存中对叶子页进行二分查找。它还维护了一个专用的索引文件，包含行指针和 TID（元组 ID），用于直接从磁盘获取记录。 这篇深入分析帮助开发者理解 PostgreSQL 相对于其他数据库的性能优势，特别是在高吞吐场景下。使用 io_uring 等现代操作系统调用和优化的文件结构可以显著降低 I/O 延迟并提高查询速度。 PostgreSQL 始终维护一个独立的索引文件，而 MySQL 的聚簇索引直接从表中计算。索引文件的第 0 页存储了排序后的数据范围，使 PostgreSQL 能够快速定位正确的页面，将其作为叶子页加载到内存中，并执行二分查找以找到确切的 TID。

reddit · r/programming · /u/Ok_Stomach6651 · 6月18日 16:05

**背景**: 数据库索引是一种通过减少磁盘访问来加速数据检索的技术。B-tree 索引以平衡树结构组织数据，叶子页包含指向实际记录的指针。PostgreSQL 通过引入 io_uring 等现代操作系统特性实现异步 I/O，并使用 fseek() 进行直接文件定位，从而提升了性能。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.phoronix.com/news/PostgreSQL-Lands-IO_uring">PostgreSQL Database Lands Initial Support For IO _ uring ... - Phoronix</a></li>
<li><a href="https://en.wikipedia.org/wiki/Database_index">Database index - Wikipedia</a></li>
<li><a href="https://www.alexstoica.com/blog/composite-index-storage">How Postgres Stores Composite Indexes on Disk | Alex’s nuggets of...</a></li>

</ul>
</details>

**标签**: `#PostgreSQL`, `#indexing`, `#database internals`, `#performance`

---

<a id="item-13"></a>
## [AirPods 在城市中创造个人声学气泡](https://www.theescapenewsletter.com/p/the-airpods-effect) ⭐️ 6.0/10

一篇题为《AirPods 效应》的文章探讨了人们如何利用 AirPods 等耳机在嘈杂的城市环境中营造个人声学气泡，引发了关于社交隔离和自然性的讨论。 这篇文化评论突显了一种日益增长的趋势：技术正在调节我们对公共空间的感官体验，从而影响社交互动和城市生活规范。 该文章得分为 6.0/10，参与度很高（223 分，408 条评论），表明读者对耳机与社交行为的话题有浓厚兴趣。

hackernews · herbertl · 6月18日 23:08 · [社区讨论](https://news.ycombinator.com/item?id=48592832)

**背景**: AirPods 及类似无线耳机在城市中已变得无处不在，常被用来听音频或仅仅隔绝噪音。这引发了关于这种隔离是否自然或反社会的讨论。

**社区讨论**: 评论者就声学隔离的自然性展开辩论，一些人认为嘈杂的城市环境本身就不自然，另一些人则指出助听器可能被误认为是耳机，使人们对无礼行为的看法变得复杂。

**标签**: `#AirPods`, `#social behavior`, `#urban life`, `#technology and society`

---

<a id="item-14"></a>
## [Datasette-acl 0.6a0 扩展为通用资源共享系统](https://simonwillison.net/2026/Jun/18/datasette-acl/#atom-everything) ⭐️ 6.0/10

2026 年 6 月 18 日发布的 datasette-acl 0.6a0 从仅限表的权限扩展为面向多用户 Datasette 实例的通用资源共享系统。 此版本对于需要在各种资源上进行细粒度访问控制的 Datasette 用户来说意义重大，它实现了更安全、更灵活的多用户数据发布。 该插件仍在积极开发中，Alex Garcia 为这个 alpha 版本贡献了大部分工作。目前它支持配置单个表的权限，控制插入行操作。

rss · Simon Willison · 6月18日 19:03

**背景**: Datasette 是一个用于探索和发布数据的开源多工具，通常用于将 SQLite 数据库转换为带有 JSON API 的交互式网站。datasette-acl 插件提供高级权限管理，允许管理员控制谁可以访问或修改特定的数据资源。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://pypi.org/project/datasette-acl/">datasette - acl · PyPI</a></li>
<li><a href="https://simonwillison.net/2026/Jun/18/datasette-acl/">Release: datasette - acl 0.6a0 | Simon Willison’s Weblog</a></li>
<li><a href="https://datasette.io/">Datasette : An open source multi-tool for exploring and publishing data</a></li>

</ul>
</details>

**标签**: `#datasette`, `#access-control`, `#plugin`, `#open-source`

---

<a id="item-15"></a>
## [构建自己的漏洞测试框架指南](https://www.reddit.com/r/programming/comments/1u9z8i8/build_your_own_vulnerability_harness/) ⭐️ 6.0/10

Cloudflare 发布了一份详细指南，介绍如何构建自定义漏洞测试框架以实现自动化安全测试，并解析了多阶段发现与分类架构。 这使得开发者和安全团队能够创建可跨多种代码库扩展的定制化漏洞发现流水线，从而提升左移安全实践。 该框架采用两阶段架构：漏洞发现框架（VDH）和漏洞验证系统（VVS），通过状态控制和对抗性审查来减少误报。

reddit · r/programming · /u/CircumspectCapybara · 6月19日 11:17

**背景**: 漏洞测试框架是一种自动化系统，用于编排安全测试工具和流程以发现并验证漏洞。Cloudflare 的方法集成了基于 LLM 的技能，用于扫描、分类和修补，如其 GitHub 上的开源参考框架所示。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://blog.cloudflare.com/build-your-own-vulnerability-harness/">Build your own vulnerability harness</a></li>
<li><a href="https://github.com/anthropics/defending-code-reference-harness">GitHub - anthropics/defending-code-reference-harness: Skills for threat modeling, scanning, triage, patching, plus an autonomous scanning harness you can /customize · GitHub</a></li>

</ul>
</details>

**标签**: `#security`, `#vulnerability`, `#harness`, `#programming`

---

<a id="item-16"></a>
## [重新思考 Ruby 应用中的模块化](https://www.reddit.com/r/programming/comments/1u9x6ur/rethinking_modularity_in_ruby_applications/) ⭐️ 6.0/10

一篇题为“重新思考 Ruby 应用中的模块化”的 Reddit 帖子探讨了 Ruby 中模块化设计的新方法，但摘要中未提供具体技术细节或实例。 模块化对于 Ruby 应用的可维护性和可扩展性至关重要，新的视角有助于开发者改进代码组织并减少耦合。 该帖子得分为 6.0/10，表明关注度中等，但缺乏评论或额外背景来评估讨论的深度。

reddit · r/programming · /u/noteflakes · 6月19日 09:21

**背景**: 软件中的模块化指将系统划分为独立、可互换的组件。在 Ruby 中，常见的模块化模式包括模块、类和 gem，但大型应用常面临紧耦合和依赖管理等问题。

**标签**: `#Ruby`, `#software architecture`, `#modularity`

---