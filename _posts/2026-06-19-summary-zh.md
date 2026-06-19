---
layout: default
title: "Horizon Summary: 2026-06-19 (ZH)"
date: 2026-06-19
lang: zh
---

> 从 173 条内容中筛选出 17 条重要资讯。

---

1. [行业巨头实现 50nm 间距 2D 晶体管突破](#item-1) ⭐️ 9.0/10
2. [Project Valhalla 历经十年终在 JDK 28 落地](#item-2) ⭐️ 8.0/10
3. [MCP 零接触 OAuth 提升企业 AI 安全性](#item-3) ⭐️ 8.0/10
4. [Datasette Apps：在沙箱中托管可访问 SQL 的 HTML 应用](#item-4) ⭐️ 8.0/10
5. [文章指出市场无法提供第三空间](#item-5) ⭐️ 8.0/10
6. [A12/A13 芯片不可修补的 BootROM 漏洞](#item-6) ⭐️ 8.0/10
7. [美国禁止 Anthropic 的 Fable 模型，影响深远](#item-7) ⭐️ 8.0/10
8. [SK 海力士开始提供 HBM4E 内存样品，引脚速度 16Gbps，容量 48GB](#item-8) ⭐️ 8.0/10
9. [SK 电信被指卷入 Anthropic Mythos 出口管制争议](#item-9) ⭐️ 8.0/10
10. [Tesco 因 Broadcom 定价移除 4 万台 VMware 服务器](#item-10) ⭐️ 8.0/10
11. [MosaicLeaks：评估 LLM 研究代理的数据泄露风险](#item-11) ⭐️ 8.0/10
12. [IETF 发布 RFC 10008：新的 HTTP QUERY 方法](#item-12) ⭐️ 8.0/10
13. [苹果宣布巴西 App Store 重大变更](#item-13) ⭐️ 7.0/10
14. [苹果确认 Siri AI 在所有设备上体验一致](#item-14) ⭐️ 6.0/10
15. [Joanna Stern 一周体验新 Siri AI：令人印象深刻但仍有不足](#item-15) ⭐️ 6.0/10
16. [苹果解释 watchOS 27 为何放弃支持五款机型](#item-16) ⭐️ 6.0/10
17. [Datasette-acl 0.6a0 扩展为通用资源共享系统](#item-17) ⭐️ 6.0/10

---

<a id="item-1"></a>
## [行业巨头实现 50nm 间距 2D 晶体管突破](https://www.tomshardware.com/tech-industry/semiconductors/imec-asml-and-tsmc-build-complementary-2d-material-transistors-at-50nm-pitch-on-a-300mm-wafer) ⭐️ 9.0/10

Imec、ASML 和台积电在 300mm 晶圆上成功制造了互补型 n 型和 p 型晶体管，采用原子级薄 2D 材料，实现了 50nm 的接触多晶间距。 这标志着首次在行业标准晶圆上以如此小的间距集成两种晶体管类型，使后硅晶体管缩放更接近商业现实，并可能延续摩尔定律。 这些晶体管使用过渡金属二硫属化物（TMD）沟道材料，具有底部接触和重叠沉积栅极，在预图案化的钨填充沟槽上制造。50nm 接触多晶间距（CPP）的实现没有降低器件性能。

rss · Tom's Hardware · 6月19日 13:13

**背景**: 硅晶体管缩放正接近物理极限，促使研究人员探索石墨烯和 TMD 等 2D 材料用于未来芯片。互补型晶体管（nFET 和 pFET）是 CMOS 逻辑电路的基础。这项工作表明，2D 材料晶体管可以使用现有的 300mm 晶圆基础设施制造，这是迈向工业应用的关键一步。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.imec-int.com/en/press/asml-tsmc-and-imec-bring-industry-ready-2d-material-transistors-closer-breakthrough-300mm">2D-material transistors closer to industrial readiness | imec</a></li>
<li><a href="https://www.linkedin.com/pulse/asml-tsmc-imec-scale-2d-transistors-50nm-pitch-300mm-wafers-kiyoshi-r1mae">ASML, TSMC and Imec scale 2D transistors to 50nm pitch on ...</a></li>
<li><a href="https://www.studioglobal.ai/discover/answers/what-recent-breakthrough-did-asml-tsmc-and-6a3217a6c8fd6d815c3d5760">2D Transistors Hit the Factory Floor: ASML, TSMC, and Imec ...</a></li>

</ul>
</details>

**标签**: `#semiconductors`, `#2D materials`, `#transistor scaling`, `#nanotechnology`, `#chip manufacturing`

---

<a id="item-2"></a>
## [Project Valhalla 历经十年终在 JDK 28 落地](https://www.jvm-weekly.com/p/project-valhalla-explained-how-a) ⭐️ 8.0/10

经过十年的开发，Project Valhalla 的值类型和堆扁平化功能终于将在 JDK 28 中到来，从根本上改变了 JVM 处理小对象内存的方式。 这意义重大，因为它通过消除对象头和间接指针，显著提高了数据密集型应用的内存密度和性能，使 Java 在底层内存控制方面能与 C# 和 Rust 等语言竞争。 值类型是不可变且无标识的，允许 JVM 将它们内联存储在数组中，无需每个元素的头或指针；然而，扁平化数据必须支持原子读写以避免并发访问下的撕裂问题，这给扁平化施加了 64 位的大小限制。

hackernews · philonoist · 6月19日 06:35 · [社区讨论](https://news.ycombinator.com/item?id=48595511)

**背景**: Project Valhalla 是 OpenJDK 的一项努力，旨在为 Java 引入值类型，将面向对象的抽象与类似原始类型的性能结合起来。传统上，每个 Java 对象都有标识和头，导致内存开销和间接引用。值类型去除了标识和头，实现了密集、缓存友好的布局。堆扁平化进一步将值类型字段直接存储在容器的内存布局中。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://openjdk.org/projects/valhalla/">Project Valhalla - OpenJDK</a></li>
<li><a href="https://inside.java/2025/10/31/jvmls-jep-401/">Value Classes Heap Flattening - What to expect from JEP 401 #JVMLS – Inside.java</a></li>
<li><a href="https://dev.to/adaumircosta/understanding-value-types-project-valhalla-faf">Understanding Value Types (Project Valhalla) - DEV Community</a></li>

</ul>
</details>

**社区讨论**: 社区评论显示出复杂的情绪：一些人赞赏这项艰苦的工作，但批评其复杂性以及要求扁平化数据支持原子性的决定，这限制了性能提升。另一些人则为该项目辩护，指出 Java 的历史限制以及自 JDK 8 以来取得的进展。

**标签**: `#Java`, `#JVM`, `#Project Valhalla`, `#performance`, `#memory`

---

<a id="item-3"></a>
## [MCP 零接触 OAuth 提升企业 AI 安全性](https://blog.modelcontextprotocol.io/posts/enterprise-managed-auth/) ⭐️ 8.0/10

Anthropic、Okta 及合作伙伴为模型上下文协议（MCP）引入了企业托管授权（EMA），实现了零接触 OAuth 流程，将认证隔离在智能体的上下文窗口之外。 这解决了企业采用 AI 工具时面临的关键安全性和用户体验挑战，消除了每个服务器的同意屏幕并减少了上下文膨胀，使大型组织能够更安全地部署 AI 智能体。 该流程使用一种名为 ID-JAG（身份断言 JWT 授权授予）的新令牌格式，客户端在单点登录期间从身份提供商获取该令牌，并将其交换为 MCP 服务器授权服务器的访问令牌，无需用户重定向。

hackernews · niyikiza · 6月18日 21:54 · [社区讨论](https://news.ycombinator.com/item?id=48592163)

**背景**: 模型上下文协议（MCP）是一个开放标准，用于将 AI 助手连接到数据源。此前，每个 MCP 服务器都需要自己的 OAuth 同意屏幕，这对企业用户来说很繁琐，且占用上下文窗口空间。EMA 通过企业现有的身份提供商集中认证，简化了这一过程。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://blog.modelcontextprotocol.io/posts/enterprise-managed-auth/">Enterprise-Managed Authorization: Zero-touch OAuth for MCP | Model Context Protocol Blog</a></li>
<li><a href="https://www.anthropic.com/news/model-context-protocol">Introducing the Model Context Protocol \ Anthropic</a></li>
<li><a href="https://en.wikipedia.org/wiki/Model_Context_Protocol">Model Context Protocol - Wikipedia</a></li>

</ul>
</details>

**社区讨论**: 社区成员称赞将认证流程隔离是超越传统技能/CLI 的宝贵能力，一位实施者提到在 Microsoft Entra ID 上遇到的实际困难但表示乐观。另一位评论者强调 ID-JAG 并非 MCP 专属，可用于使用相同 SSO 提供商的应用程序之间的安全数据共享。

**标签**: `#MCP`, `#OAuth`, `#authentication`, `#AI agents`, `#security`

---

<a id="item-4"></a>
## [Datasette Apps：在沙箱中托管可访问 SQL 的 HTML 应用](https://simonwillison.net/2026/Jun/18/datasette-apps/#atom-everything) ⭐️ 8.0/10

Simon Willison 发布了 datasette-apps 插件，允许用户在 Datasette 内部的沙箱 iframe 中托管自定义 HTML+JavaScript 应用，这些应用可以对底层数据库执行只读或写入 SQL 查询。 该插件将 Datasette 从数据探索工具转变为构建轻量级、数据库驱动的 Web 应用的平台，无需单独的后端，从而简化了自定义仪表盘和内部工具的开发。 应用在设置了 sandbox="allow-scripts allow-forms" 和 CSP 标头（阻止出站 HTTP 请求）的 iframe 中运行，防止数据泄露。写入访问需要预先配置的存储查询，该插件最初源于 Datasette Agent 的 artifact 系统。

rss · Simon Willison · 6月18日 23:58 · [社区讨论](https://news.ycombinator.com/item?id=48593731)

**背景**: Datasette 是一个用于探索和发布数据的开源工具，为 SQLite 数据库提供 JSON API 和 Web 界面。新插件通过允许用户嵌入可直接从浏览器查询数据库的交互式 HTML 应用来扩展这一功能，类似于 Claude Artifacts 的工作方式，但集成了数据库。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://simonwillison.net/2026/Jun/18/datasette-apps/">Datasette Apps: Host custom HTML applications inside Datasette</a></li>
<li><a href="https://github.com/datasette/datasette-apps">GitHub - datasette/datasette-apps: Apps that live inside Datasette · GitHub</a></li>
<li><a href="https://web.dev/articles/sandboxed-iframes">Play safely in sandboxed IFrames | Articles | web.dev</a></li>

</ul>
</details>

**社区讨论**: 评论者指出这与 Motherduck 的 "dives" 和 Louie.ai 的模式相似，表明了一种用户自定义数据库 UI 的趋势。一些人提出了对写入访问安全性的担忧，质疑谁定义存储查询以及“君子协定”是否足够。

**标签**: `#datasette`, `#plugin`, `#web-applications`, `#sql`, `#sandbox`

---

<a id="item-5"></a>
## [文章指出市场无法提供第三空间](https://wilsoniumite.com/2026/06/19/the-room-the-economy-cant-see/) ⭐️ 8.0/10

Wilsoniumite 上的一篇高分文章指出，以利润为导向的市场忽视了青少年聚集地等重要的非商业空间，主张将市场限制在更广泛的社会上层建筑之内。 这篇文章揭示了市场在提供公共物品和第三空间方面的根本性失灵，引发了关于市场激励的局限性以及非商业社会基础设施必要性的讨论。 该文章获得了 169 个赞和 163 条评论，社区成员讨论了市场优化如何抑制对非商业空间的投入，以及宗教、余闲和现有第三空间（如图书馆和童子军）的作用。

hackernews · Wilsoniumite · 6月19日 10:16 · [社区讨论](https://news.ycombinator.com/item?id=48596911)

**背景**: 在社会学中，“第三空间”是区别于家（第一空间）和工作场所（第二空间）的社交空间，例如咖啡馆、公园和图书馆。市场失灵是指自由市场无法有效分配商品和服务，尤其是那些非排他性和非竞争性的公共物品。这篇文章运用这些概念，论证了利润动机无法维持必要的社区空间。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Third_place">Third place - Wikipedia</a></li>
<li><a href="https://en.wikipedia.org/wiki/Market_failure">Market failure - Wikipedia</a></li>
<li><a href="https://en.wikipedia.org/wiki/Non-commercial_activity">Non-commercial activity - Wikipedia</a></li>

</ul>
</details>

**社区讨论**: 评论者普遍赞同文章的前提，ixtli 指出市场优化是真实的，但必须被限制在上层建筑之内。nicbou 强调了“余闲”（空闲时间和资源）对非商业活动的重要性，而 the_sleaze_则认为宗教历史上提供了这样的空间。dzink 列举了现有的第三空间，如童子军、图书馆和体育俱乐部。

**标签**: `#economics`, `#public goods`, `#market failure`, `#sociology`, `#third spaces`

---

<a id="item-6"></a>
## [A12/A13 芯片不可修补的 BootROM 漏洞](https://9to5mac.com/2026/06/18/new-unpatchable-exploit-targets-apple-devices-with-a12-and-a13-chips/) ⭐️ 8.0/10

安全公司 Paradigm Shift 披露了 usbliter8，这是一个针对苹果 A12 和 A13 芯片的不可修补的 BootROM 漏洞，可在启动时执行任意代码。 该漏洞影响数百万部 iPhone（XS 至 11 系列），且无法通过软件更新修复，对这些设备构成永久性安全风险。 该漏洞利用了 USB 控制器中的硬件缺陷，导致指针在内存中向后移动。在 A13 上，苹果的指针认证码（PAC）使利用更加复杂，但并非不可能。

rss · 9to5Mac · 6月18日 21:21

**背景**: BootROM（SecureROM）是 iPhone 启动时执行的第一段代码，存储在只读存储器中。这一级别的漏洞无法修补，因为它们固化在芯片中。上一次主要的 BootROM 漏洞是 2019 年的 checkm8，影响较旧的设备。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://9to5mac.com/2026/06/18/new-unpatchable-exploit-targets-apple-devices-with-a12-and-a13-chips/">New unpatchable exploit targets Apple devices with A12 and ...</a></li>
<li><a href="https://www.macrumors.com/2026/06/18/a12-and-a13-chips-facing-exploit/">Apple's A 12 and A 13 Chips Facing New Unpatchable... - MacRumors</a></li>
<li><a href="https://github.com/prdgmshift/usbliter8">GitHub - prdgmshift/usbliter8: An A12/A13 SecureROM exploit</a></li>

</ul>
</details>

**标签**: `#security`, `#exploit`, `#Apple`, `#hardware vulnerability`, `#BootROM`

---

<a id="item-7"></a>
## [美国禁止 Anthropic 的 Fable 模型，影响深远](https://newsletter.pragmaticengineer.com/p/the-pulse-big-implications-of-us) ⭐️ 8.0/10

据《务实工程师》通讯报道，美国政府以监管为由禁止了 Anthropic 的新模型 Claude Fable 5。 这标志着 AI 监管的重大升级，可能为美国如何控制先进 AI 模型开创先例，并影响整个 AI 行业。 Claude Fable 5 是一款 Mythos 级模型，专为金融、法律等文档密集型任务设计，具备视觉能力用于代码评估。通讯中未详细说明禁令的具体原因。

rss · The Pragmatic Engineer · 6月18日 17:11

**背景**: Anthropic 是一家以 Claude 模型闻名的领先 AI 安全公司。美国政府日益审查 AI 模型的潜在风险，此次禁令可能是更广泛监管努力的一部分。该通讯还涵盖了 Meta 的工程文化问题和 SpaceX 的 IPO。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.anthropic.com/claude/fable">Claude Fable \ Anthropic</a></li>
<li><a href="https://www.anthropic.com/news/claude-fable-5-mythos-5">Claude Fable 5 and Claude Mythos 5 \ Anthropic</a></li>

</ul>
</details>

**标签**: `#AI regulation`, `#tech industry`, `#engineering culture`, `#Anthropic`, `#SpaceX`

---

<a id="item-8"></a>
## [SK 海力士开始提供 HBM4E 内存样品，引脚速度 16Gbps，容量 48GB](https://www.gsmarena.com/sk_hynix_ships_samples_of_its_hbm4e_memory_16gbps_per_pin_48gb_capacity_per_12layer_stack-news-73336.php) ⭐️ 8.0/10

SK 海力士已开始向客户提供其 HBM4E 内存样品，该内存采用 12 层堆叠设计，每引脚带宽 16Gbps，容量 48GB，超过了此前 HBM4 标准每引脚 10Gbps 的规格。 这一进展对 AI 硬件至关重要，因为 HBM 内存是为加速器中数千个 GPU 核心提供数据的关键。更高的带宽和容量直接提升了 AI 训练和推理工作负载的性能。 三星此前宣布了其 HBM4E 样品，每引脚速度为 14Gbps，因此 SK 海力士的 16Gbps 具有竞争优势。12 层堆叠每个封装实现 48GB 容量，该内存采用 3D 堆叠 DRAM 和硅通孔（TSV）技术。

rss · GSMArena · 6月18日 21:03

**背景**: 高带宽内存（HBM）是一种用于高性能图形加速器和 AI 硬件的 3D 堆叠 DRAM 接口。通过堆叠多个芯片和使用宽接口，它提供比传统 DDR 内存高得多的带宽。当前的 HBM4 标准提供每引脚 10Gbps 的速度，而 HBM4E 是进一步增强速度的版本。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/High_Bandwidth_Memory">High Bandwidth Memory - Wikipedia</a></li>
<li><a href="https://en.wikipedia.org/wiki/HBM_memory_shortage">HBM memory shortage</a></li>

</ul>
</details>

**标签**: `#HBM`, `#memory`, `#AI hardware`, `#SK hynix`, `#semiconductors`

---

<a id="item-9"></a>
## [SK 电信被指卷入 Anthropic Mythos 出口管制争议](https://www.tomshardware.com/tech-industry/artificial-intelligence/sk-telecom-named-as-the-korean-carrier-at-the-center-of-anthropics-mythos-export-controls) ⭐️ 8.0/10

《连线》杂志确认 SK 电信是韩国运营商，其访问 Anthropic 的 Claude Mythos 模型的权限因被指与中国有关联而被白宫撤销，几天后白宫对所有外国公民关闭了 Mythos 和 Fable 5 的访问。 这一事件凸显了美国 AI 出口管制的收紧，国家安全担忧直接影响到大型电信公司，并限制了全球对尖端 AI 模型的访问。 撤销发生在白宫对所有外国公民关闭 Mythos 和 Fable 5 访问的几天前，Anthropic 此前已按照政府指令禁用了访问权限。

rss · Tom's Hardware · 6月19日 10:54

**背景**: Claude Mythos 是 Anthropic 开发的高度先进的 AI 模型，代号'Capybara'，于 2026 年 3 月首次公开。美国政府以国家安全风险为由，发布了针对 Mythos 和 Fable 5 的出口管制指令，导致外国实体访问受限。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.cnbc.com/2026/06/12/anthropic-disables-access-to-fable-5-and-mythos-5-to-comply-with-government-directive.html">Anthropic disables access to Fable 5, Mythos 5 on ... - CNBC</a></li>
<li><a href="https://www.searchenginejournal.com/government-order-shuts-down-fable-5-despite-anthropics-objections/579168/">Anthropic Forced To Shut Down Fable 5 By U.S. Government Order</a></li>

</ul>
</details>

**标签**: `#AI`, `#export controls`, `#Anthropic`, `#national security`, `#telecom`

---

<a id="item-10"></a>
## [Tesco 因 Broadcom 定价移除 4 万台 VMware 服务器](https://www.tomshardware.com/desktops/servers/tesco-uk-supermarket-chain-removes-40-000-servers-from-vmware-infrastructure-mass-exodus-continues-due-to-broadcoms-aggressive-subscription-model) ⭐️ 8.0/10

英国大型连锁超市 Tesco 已将 4 万台服务器从 VMware 基础设施上迁移，继续因 Broadcom 激进的订阅定价模式而引发的大规模迁移潮。 此举标志着大型企业因成本上升而放弃 VMware 的重要行业趋势，可能重塑虚拟化市场，并推动开源 hypervisor 或公有云等替代方案的采用。 此次迁移涉及 4 万台服务器，规模巨大，凸显了运营复杂性和成本节约是决策的关键驱动因素。Tesco 的行动紧随 Broadcom 简化产品组合并从永久许可转向纯订阅模式之后，这已大幅提高了许多客户的成本。

rss · Tom's Hardware · 6月19日 10:00

**背景**: VMware 是领先的虚拟化平台，允许多个虚拟服务器在单台物理服务器上运行，广泛应用于企业数据中心。2023 年底，Broadcom 完成对 VMware 的收购，并开始重组许可模式，取消永久许可，推动客户转向更昂贵的订阅捆绑包。这促使许多组织探索替代 hypervisor，如 Nutanix、Microsoft Hyper-V 或开源 KVM，以及云迁移。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://news.broadcom.com/cloud/vmware-by-broadcom-business-transformation">VMware by Broadcom Dramatically Simplifies Offer Lineup and ...</a></li>
<li><a href="https://vmwaremadesimple.com/articles/broadcom-vmware-licensing-changes-2026.html">Broadcom's VMware Licensing Changes in 2026: What Every Admin ...</a></li>
<li><a href="https://www.cloudzero.com/blog/vmware-alternatives/">9 VMware Alternatives To Consider In 2026</a></li>

</ul>
</details>

**标签**: `#VMware`, `#Broadcom`, `#enterprise IT`, `#cloud migration`, `#infrastructure`

---

<a id="item-11"></a>
## [MosaicLeaks：评估 LLM 研究代理的数据泄露风险](https://huggingface.co/blog/ServiceNow/mosaicleaks) ⭐️ 8.0/10

研究人员推出了 MosaicLeaks 基准测试，包含 1001 个多跳深度研究任务，旨在评估基于 LLM 的研究代理在查询外部来源时是否无意中泄露敏感信息。 该基准测试解决了一个关键的 AI 安全漏洞，因为 LLM 代理在执行网络搜索时越来越多地处理企业私有数据，数据泄露可能导致严重的隐私泄露和合规违规。 该基准测试将私有企业文档与公共网络语料库链接起来，迫使代理进行依赖本地信息的外部查询，从而模拟真实的泄露场景。

rss · Hugging Face Blog · 6月18日 18:13

**背景**: 基于 LLM 的研究代理是能够通过结合内部知识和实时网络搜索来回答复杂问题的 AI 系统。然而，当代理能够访问敏感的内部文档时，它们可能无意中将私人信息包含在搜索查询中，导致数据泄露。MosaicLeaks 旨在检测和量化此类风险。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://arxiv.org/abs/2605.30727">[2605.30727] MosaicLeaks:Privacy Risks in Querying-in-the ...</a></li>
<li><a href="https://lumienai.com/news/mosaicleaks-ai-research-agent-data-leakage">MosaicLeaks: Can Your AI Research Agent Actually Keep a…</a></li>

</ul>
</details>

**标签**: `#AI Safety`, `#LLM Agents`, `#Data Leakage`, `#Security`, `#Benchmark`

---

<a id="item-12"></a>
## [IETF 发布 RFC 10008：新的 HTTP QUERY 方法](https://www.ithome.com/0/966/439.htm) ⭐️ 8.0/10

IETF 发布了 RFC 10008，定义了一种名为 QUERY 的新 HTTP 请求方法，它是一种安全、幂等且可缓存的方法，允许在请求体中携带复杂只读查询。 这填补了 GET 和 POST 之间长期存在的空白，使开发者能够执行复杂的只读查询，而无需滥用 POST 或受 URL 长度限制。它提高了 API 的清晰度，并符合 RESTful 原则。 QUERY 方法被定义为安全且幂等，支持通过新的 Accept-Query 响应头进行缓存，服务器可以使用 Allow 头来声明支持。RFC 10008 目前是提议标准。

rss · IT之家 · 6月19日 15:16

**背景**: HTTP 方法如 GET 和 POST 有明确的语义：GET 安全且幂等，但不能携带请求体；POST 可以携带请求体，但既不安全也不幂等。对于复杂查询，开发者常常不得不将参数塞入 URL（GET）或滥用 POST，导致歧义。新的 QUERY 方法通过结合 GET 的安全性和 POST 的携带请求体能力解决了这一问题。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.rfc-editor.org/info/rfc10008/">RFC 10008 : The HTTP QUERY Method | RFC Editor</a></li>
<li><a href="https://blainsmith.com/articles/rfc-10008-http-query-method/">RFC 10008 : The HTTP QUERY Method - Blain Smith</a></li>
<li><a href="https://www.banandre.com/blog/rfc-10008-http-query-method-breakdown">RFC 10008 Just Gave HTTP a Fourth Read-Only Method ... - Banandre</a></li>

</ul>
</details>

**标签**: `#HTTP`, `#API Design`, `#IETF`, `#Web Standards`, `#REST`

---

<a id="item-13"></a>
## [苹果宣布巴西 App Store 重大变更](https://www.macrumors.com/2026/06/18/apple-announces-ios-app-store-changes-in-brazil/) ⭐️ 7.0/10

苹果将从 iOS 26.5 开始，在巴西允许替代应用市场和第三方支付，此举源于巴西竞争监管机构的监管行动。 这标志着苹果 App Store 垄断的又一次重大裂痕，扩大了开发者可以绕过苹果生态系统的国家名单，并可能对全球其他监管机构形成压力。 苹果将对在 App Store 之外分发的应用收取 5%的核心技术费，并将 App Store 内数字商品的佣金降至最高 21%。使用第三方支付的开发者仍需为链接网站交易支付 10-15%的费用。

rss · MacRumors · 6月18日 17:15

**背景**: 苹果历来要求所有 iOS 应用分发和应用内购买必须通过其 App Store，并收取最高 30%的佣金。欧盟、日本和韩国的类似监管压力已迫使苹果在这些地区允许替代应用市场和第三方支付。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.macobserver.com/news/apple-cuts-app-store-fees-and-allows-alternative-app-stores-in-brazil/">Apple Cuts App Store Fees and Allows Alternative App Stores ...</a></li>

</ul>
</details>

**标签**: `#Apple`, `#App Store`, `#Brazil`, `#iOS`, `#Regulation`

---

<a id="item-14"></a>
## [苹果确认 Siri AI 在所有设备上体验一致](https://9to5mac.com/2026/06/19/apple-just-said-the-thing-about-siri-that-weve-long-wanted-to-hear/) ⭐️ 6.0/10

苹果已确认，在 iOS 27 测试版中推出的全新 Siri AI 将在所有苹果设备（包括 iPhone、iPad、Mac、Apple Watch 和 Apple Vision Pro）上提供一致的体验。 这解决了用户长期以来的困扰——Siri 在不同设备上表现不一致，使得该助手在苹果生态系统中更加可靠和无缝。 苹果高级 watchOS 团队在最近一次采访中解释，一致的 Siri 体验是一个刻意的设计目标。Siri AI 由下一代 Apple Intelligence 驱动，能够跨应用利用个人上下文信息。

rss · 9to5Mac · 6月19日 15:01

**背景**: Siri 历来在不同设备上提供不一致的响应，某些功能仅限特定硬件。苹果在 WWDC 2026 上宣布的 Siri AI 全面改造，旨在利用先进 AI 和端侧智能统一助手的能力。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.apple.com/newsroom/2026/06/apple-introduces-siri-ai-a-profoundly-more-capable-and-personal-assistant/">Apple introduces Siri AI, a profoundly more capable and ...</a></li>
<li><a href="https://techcrunch.com/2026/06/08/apples-long-awaited-ai-siri-overhaul-is-finally-here/">Apple's long-awaited AI Siri overhaul is finally here ...</a></li>

</ul>
</details>

**标签**: `#Apple`, `#Siri`, `#AI`, `#iOS`

---

<a id="item-15"></a>
## [Joanna Stern 一周体验新 Siri AI：令人印象深刻但仍有不足](https://9to5mac.com/2026/06/19/joanna-stern-spent-one-week-with-new-siri-ai-and-its-very-good/) ⭐️ 6.0/10

Joanna Stern 在 iOS 27 测试版中花了一周时间测试新的 Siri AI，并发布了一段视频评论，指出了其优点和缺点。 这篇实际体验评测为苹果对 Siri 的重大改造提供了早期的真实世界见解，这是 iOS 27 的关键功能，可能对苹果设备的用户体验产生重大影响。 评测涵盖了 Siri AI 的屏幕感知、上下文个性化和多应用任务编排功能，但指出作为测试版，它仍然存在局限性和错误。

rss · 9to5Mac · 6月19日 13:50

**背景**: Siri AI 是由 Apple Intelligence 驱动的完全重新设计的 Siri 版本，在 2026 年 WWDC 上发布，并与 Google Gemini 合作开发。它原生集成了屏幕感知、上下文个性化和多应用任务编排功能，覆盖苹果生态系统。iOS 27 目前处于公开测试阶段，预计将于 2026 年秋季正式发布。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.apple.com/newsroom/2026/06/apple-introduces-siri-ai-a-profoundly-more-capable-and-personal-assistant/">Apple introduces Siri AI, a profoundly more capable and ...</a></li>
<li><a href="https://en.wikipedia.org/wiki/Siri_AI">Siri AI</a></li>

</ul>
</details>

**标签**: `#Siri`, `#iOS 27`, `#AI`, `#Apple`, `#beta`

---

<a id="item-16"></a>
## [苹果解释 watchOS 27 为何放弃支持五款机型](https://www.macrumors.com/2026/06/19/apple-explains-why-watchos-27-drops-support/) ⭐️ 6.0/10

苹果宣布 watchOS 27 将不再支持 Apple Watch Series 6、7、8、SE 2 和初代 Ultra，原因是新 Siri AI 功能对性能有要求。 这是苹果首次在一次 watchOS 更新中放弃三年内的设备支持，可能会加速 Apple Watch 用户的升级周期。 受影响的机型仍会收到安全更新，且与支持的 iPhone 配对后仍可正常使用。watchOS 27 目前处于开发者测试版，公开测试版预计下月推出。

rss · MacRumors · 6月19日 13:07

**背景**: watchOS 27 引入了 Siri AI，这是由 Apple Intelligence 和生成式 AI 模型驱动的更智能的 Siri 版本。苹果旨在让 Siri 成为 iPhone 和 Apple Watch 上一致、个性化的助手，实现任务的无缝切换。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.macrumors.com/roundup/watchos-27/">watchOS 27: Everything We Know | MacRumors</a></li>
<li><a href="https://www.apple.com/os/watchos/">OS - watchOS 27 - Apple</a></li>
<li><a href="https://www.tomsguide.com/wellness/smartwatches/watchos-27-all-the-new-features-coming-to-apple-watch-later-this-year">watchOS 27: All the new features coming to Apple Watch later ...</a></li>

</ul>
</details>

**标签**: `#Apple Watch`, `#watchOS`, `#software support`, `#AI features`

---

<a id="item-17"></a>
## [Datasette-acl 0.6a0 扩展为通用资源共享系统](https://simonwillison.net/2026/Jun/18/datasette-acl/#atom-everything) ⭐️ 6.0/10

Datasette-acl 0.6a0 从仅限表的权限扩展为通用资源共享系统，使多用户 Datasette 实例能够对各类资源的访问进行细粒度控制。 此版本对于需要在多用户环境中管理访问权限的 Datasette 用户意义重大，因为它提供了超越仅限表的更灵活、更全面的权限系统。 该插件现在支持通过用户界面为各种资源设置用户和组的权限，需要拥有 'datasette-acl' 权限才能访问此界面。Alex Garcia 为此版本贡献了大部分工作。

rss · Simon Willison · 6月18日 19:03

**背景**: Datasette 是一个用于探索和发布数据的开源多工具，常用于从 SQLite 数据库创建交互式网站。datasette-acl 插件提供高级权限管理，支持在多用户 Datasette 实例中进行细粒度访问控制。此前权限仅限于表；此版本将系统泛化以覆盖其他资源。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://github.com/datasette/datasette-acl">GitHub - datasette/ datasette - acl : Advanced permission management...</a></li>
<li><a href="https://datasette.io/">Datasette : An open source multi-tool for exploring and publishing data</a></li>
<li><a href="https://simonwillison.net/2026/Jun/18/datasette-acl/">Release: datasette - acl 0.6a0 | Simon Willison’s Weblog</a></li>

</ul>
</details>

**标签**: `#datasette`, `#permissions`, `#access-control`, `#plugin`

---