---
layout: default
title: "Horizon Summary: 2026-06-19 (EN)"
date: 2026-06-19
lang: en
---

> From 173 items, 17 important content pieces were selected

---

1. [Industry Giants Achieve 2D Transistor Breakthrough at 50nm Pitch](#item-1) ⭐️ 9.0/10
2. [Project Valhalla Arrives in JDK 28 After a Decade](#item-2) ⭐️ 8.0/10
3. [Zero-Touch OAuth for MCP Enhances Enterprise AI Security](#item-3) ⭐️ 8.0/10
4. [Datasette Apps: Host sandboxed HTML apps with SQL access](#item-4) ⭐️ 8.0/10
5. [Essay Argues Markets Fail to Provide Third Spaces](#item-5) ⭐️ 8.0/10
6. [Unpatchable BootROM Exploit for A12/A13 Chips](#item-6) ⭐️ 8.0/10
7. [US Bans Anthropic's Fable Model, Big Implications](#item-7) ⭐️ 8.0/10
8. [SK hynix samples HBM4E memory with 16Gbps pin speed, 48GB capacity](#item-8) ⭐️ 8.0/10
9. [SK Telecom named in Anthropic Mythos export controls controversy](#item-9) ⭐️ 8.0/10
10. [Tesco removes 40,000 servers from VMware due to Broadcom pricing](#item-10) ⭐️ 8.0/10
11. [MosaicLeaks: Benchmarking Data Leakage in LLM Research Agents](#item-11) ⭐️ 8.0/10
12. [IETF Publishes RFC 10008: New HTTP QUERY Method](#item-12) ⭐️ 8.0/10
13. [Apple Announces Major App Store Changes in Brazil](#item-13) ⭐️ 7.0/10
14. [Apple Confirms Consistent Siri AI Across All Devices](#item-14) ⭐️ 6.0/10
15. [Joanna Stern's Week with New Siri AI: Impressive but Flawed](#item-15) ⭐️ 6.0/10
16. [Apple Explains Why watchOS 27 Drops Support for Five Models](#item-16) ⭐️ 6.0/10
17. [Datasette-acl 0.6a0 expands to general resource-sharing](#item-17) ⭐️ 6.0/10

---

<a id="item-1"></a>
## [Industry Giants Achieve 2D Transistor Breakthrough at 50nm Pitch](https://www.tomshardware.com/tech-industry/semiconductors/imec-asml-and-tsmc-build-complementary-2d-material-transistors-at-50nm-pitch-on-a-300mm-wafer) ⭐️ 9.0/10

Imec, ASML, and TSMC have successfully fabricated complementary n-type and p-type transistors using atomically thin 2D materials on a 300mm wafer, achieving a contacted poly pitch of 50nm. This marks the first integration of both transistor types at such a small pitch on industry-standard wafers, bringing post-silicon transistor scaling closer to commercial reality and potentially extending Moore's Law. The transistors use transition metal dichalcogenide (TMD) channel materials with bottom contacts and an overlapping deposited gate, fabricated on pre-patterned tungsten-filled trenches. The 50nm contacted poly pitch (CPP) was achieved without degrading device performance.

rss · Tom's Hardware · Jun 19, 13:13

**Background**: Silicon transistor scaling is approaching physical limits, prompting research into 2D materials like graphene and TMDs for future chips. Complementary transistors (nFET and pFET) are essential for CMOS logic circuits. This work demonstrates that 2D material transistors can be fabricated using existing 300mm wafer infrastructure, a key step toward industrial adoption.

<details><summary>References</summary>
<ul>
<li><a href="https://www.imec-int.com/en/press/asml-tsmc-and-imec-bring-industry-ready-2d-material-transistors-closer-breakthrough-300mm">2D-material transistors closer to industrial readiness | imec</a></li>
<li><a href="https://www.linkedin.com/pulse/asml-tsmc-imec-scale-2d-transistors-50nm-pitch-300mm-wafers-kiyoshi-r1mae">ASML, TSMC and Imec scale 2D transistors to 50nm pitch on ...</a></li>
<li><a href="https://www.studioglobal.ai/discover/answers/what-recent-breakthrough-did-asml-tsmc-and-6a3217a6c8fd6d815c3d5760">2D Transistors Hit the Factory Floor: ASML, TSMC, and Imec ...</a></li>

</ul>
</details>

**Tags**: `#semiconductors`, `#2D materials`, `#transistor scaling`, `#nanotechnology`, `#chip manufacturing`

---

<a id="item-2"></a>
## [Project Valhalla Arrives in JDK 28 After a Decade](https://www.jvm-weekly.com/p/project-valhalla-explained-how-a) ⭐️ 8.0/10

After a decade of development, Project Valhalla's value types and heap flattening are finally arriving in JDK 28, fundamentally changing how the JVM handles memory for small objects. This is significant because it dramatically improves memory density and performance for data-intensive applications by eliminating object headers and indirection pointers, enabling Java to compete with languages like C# and Rust in low-level memory control. Value types are immutable and lack identity, allowing the JVM to store them inline in arrays without per-element headers or pointers; however, flattened data must be atomically readable and writable to avoid tearing under concurrent access, which imposes a 64-bit size limit for flattening.

hackernews · philonoist · Jun 19, 06:35 · [Discussion](https://news.ycombinator.com/item?id=48595511)

**Background**: Project Valhalla is an OpenJDK effort to introduce value types to Java, combining object-oriented abstraction with primitive-like performance. Traditionally, every Java object has an identity and a header, causing memory overhead and indirection. Value types remove identity and headers, enabling dense, cache-friendly layouts. Heap flattening extends this by storing value type fields directly in their container's memory layout.

<details><summary>References</summary>
<ul>
<li><a href="https://openjdk.org/projects/valhalla/">Project Valhalla - OpenJDK</a></li>
<li><a href="https://inside.java/2025/10/31/jvmls-jep-401/">Value Classes Heap Flattening - What to expect from JEP 401 #JVMLS – Inside.java</a></li>
<li><a href="https://dev.to/adaumircosta/understanding-value-types-project-valhalla-faf">Understanding Value Types (Project Valhalla) - DEV Community</a></li>

</ul>
</details>

**Discussion**: Community comments show mixed sentiment: some appreciate the hard work but criticize the complexity and the decision to require atomicity for flattened data, which limits performance gains. Others defend the project, noting Java's historical constraints and the progress made since JDK 8.

**Tags**: `#Java`, `#JVM`, `#Project Valhalla`, `#performance`, `#memory`

---

<a id="item-3"></a>
## [Zero-Touch OAuth for MCP Enhances Enterprise AI Security](https://blog.modelcontextprotocol.io/posts/enterprise-managed-auth/) ⭐️ 8.0/10

Anthropic, Okta, and partners have introduced Enterprise-Managed Authorization (EMA) for the Model Context Protocol (MCP), enabling a zero-touch OAuth flow that isolates authentication outside the agent's context window. This addresses a critical security and user experience challenge in enterprise AI tool adoption by eliminating per-server consent screens and reducing context bloat, making it easier for large organizations to deploy AI agents securely. The flow uses a new token format called ID-JAG (Identity Assertion JWT Authorization Grant), where the client obtains the token from the IdP during SSO and exchanges it for an access token from the MCP server's authorization server, without user redirection.

hackernews · niyikiza · Jun 18, 21:54 · [Discussion](https://news.ycombinator.com/item?id=48592163)

**Background**: The Model Context Protocol (MCP) is an open standard for connecting AI assistants to data sources. Previously, each MCP server required its own OAuth consent screen, which was cumbersome for enterprise users and consumed context window space. EMA streamlines this by centralizing authentication through the enterprise's existing identity provider.

<details><summary>References</summary>
<ul>
<li><a href="https://blog.modelcontextprotocol.io/posts/enterprise-managed-auth/">Enterprise-Managed Authorization: Zero-touch OAuth for MCP | Model Context Protocol Blog</a></li>
<li><a href="https://www.anthropic.com/news/model-context-protocol">Introducing the Model Context Protocol \ Anthropic</a></li>
<li><a href="https://en.wikipedia.org/wiki/Model_Context_Protocol">Model Context Protocol - Wikipedia</a></li>

</ul>
</details>

**Discussion**: Community members praised the isolation of auth flow as a valuable capability over traditional skills/CLI, with one implementer noting real-world struggles with Microsoft Entra ID but expressing optimism. Another commenter highlighted that ID-JAG is not MCP-specific and can be used for secure data sharing across applications using the same SSO provider.

**Tags**: `#MCP`, `#OAuth`, `#authentication`, `#AI agents`, `#security`

---

<a id="item-4"></a>
## [Datasette Apps: Host sandboxed HTML apps with SQL access](https://simonwillison.net/2026/Jun/18/datasette-apps/#atom-everything) ⭐️ 8.0/10

Simon Willison launched the datasette-apps plugin, which allows users to host custom HTML+JavaScript applications inside Datasette within a sandboxed iframe that can execute read-only or write SQL queries against the underlying database. This plugin transforms Datasette from a data exploration tool into a platform for building lightweight, database-backed web applications without a separate backend, potentially simplifying the creation of custom dashboards and internal tools. Apps run in an iframe with sandbox="allow-scripts allow-forms" and a CSP header that blocks outbound HTTP requests, preventing data exfiltration. Write access requires pre-configured stored queries, and the plugin originated from Datasette Agent's artifact system.

rss · Simon Willison · Jun 18, 23:58 · [Discussion](https://news.ycombinator.com/item?id=48593731)

**Background**: Datasette is an open-source tool for exploring and publishing data, providing a JSON API and a web interface for SQLite databases. The new plugin extends this by allowing users to embed interactive HTML apps that query the database directly from the browser, similar to how Claude Artifacts work but with database integration.

<details><summary>References</summary>
<ul>
<li><a href="https://simonwillison.net/2026/Jun/18/datasette-apps/">Datasette Apps: Host custom HTML applications inside Datasette</a></li>
<li><a href="https://github.com/datasette/datasette-apps">GitHub - datasette/datasette-apps: Apps that live inside Datasette · GitHub</a></li>
<li><a href="https://web.dev/articles/sandboxed-iframes">Play safely in sandboxed IFrames | Articles | web.dev</a></li>

</ul>
</details>

**Discussion**: Commenters noted parallels with Motherduck's "dives" and Louie.ai's patterns, suggesting a trend toward user-defined UIs over databases. Some raised concerns about write access security, questioning who defines stored queries and whether the honor system is sufficient.

**Tags**: `#datasette`, `#plugin`, `#web-applications`, `#sql`, `#sandbox`

---

<a id="item-5"></a>
## [Essay Argues Markets Fail to Provide Third Spaces](https://wilsoniumite.com/2026/06/19/the-room-the-economy-cant-see/) ⭐️ 8.0/10

A high-scoring essay on Wilsoniumite argues that profit-driven markets neglect essential non-commercial spaces like teen hangouts, advocating for containing markets within a broader social superstructure. This essay highlights a fundamental market failure in providing public goods and third spaces, sparking debate on the limits of market incentives and the need for non-commercial social infrastructure. The essay received 169 upvotes and 163 comments, with community members discussing how market optimization disincentivizes spending on non-commercial spaces and the role of religion, slack, and existing third places like libraries and scouts.

hackernews · Wilsoniumite · Jun 19, 10:16 · [Discussion](https://news.ycombinator.com/item?id=48596911)

**Background**: In sociology, a 'third place' is a social space separate from home (first place) and work (second place), such as cafes, parks, and libraries. Market failure occurs when free markets inefficiently allocate goods and services, especially public goods that are non-excludable and non-rivalrous. This essay applies these concepts to argue that profit motives cannot sustain essential community spaces.

<details><summary>References</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Third_place">Third place - Wikipedia</a></li>
<li><a href="https://en.wikipedia.org/wiki/Market_failure">Market failure - Wikipedia</a></li>
<li><a href="https://en.wikipedia.org/wiki/Non-commercial_activity">Non-commercial activity - Wikipedia</a></li>

</ul>
</details>

**Discussion**: Commenters largely agreed with the essay's premise, with ixtli noting that market optimization is real but must be contained within a superstructure. Nicbou emphasized the importance of 'slack' (free time and resources) for non-commercial activities, while the_sleaze_ argued that religion historically provided such spaces. Dzink listed existing third spaces like scouts, libraries, and sports clubs.

**Tags**: `#economics`, `#public goods`, `#market failure`, `#sociology`, `#third spaces`

---

<a id="item-6"></a>
## [Unpatchable BootROM Exploit for A12/A13 Chips](https://9to5mac.com/2026/06/18/new-unpatchable-exploit-targets-apple-devices-with-a12-and-a13-chips/) ⭐️ 8.0/10

Security firm Paradigm Shift disclosed usbliter8, an unpatchable BootROM exploit for Apple A12 and A13 chips, enabling arbitrary code execution at boot. This vulnerability affects millions of iPhones (XS to 11 series) and cannot be fixed via software updates, posing a permanent security risk for those devices. The exploit abuses a hardware bug in the USB controller, causing a pointer to walk backwards in memory. On A13, Apple's Pointer Authentication Codes (PAC) make exploitation more complex but not impossible.

rss · 9to5Mac · Jun 18, 21:21

**Background**: BootROM (SecureROM) is the first code executed when an iPhone boots, stored in read-only memory. Vulnerabilities at this level are unpatchable because they are baked into the silicon. The previous major BootROM exploit was checkm8 in 2019, affecting older devices.

<details><summary>References</summary>
<ul>
<li><a href="https://9to5mac.com/2026/06/18/new-unpatchable-exploit-targets-apple-devices-with-a12-and-a13-chips/">New unpatchable exploit targets Apple devices with A12 and ...</a></li>
<li><a href="https://www.macrumors.com/2026/06/18/a12-and-a13-chips-facing-exploit/">Apple's A 12 and A 13 Chips Facing New Unpatchable... - MacRumors</a></li>
<li><a href="https://github.com/prdgmshift/usbliter8">GitHub - prdgmshift/usbliter8: An A12/A13 SecureROM exploit</a></li>

</ul>
</details>

**Tags**: `#security`, `#exploit`, `#Apple`, `#hardware vulnerability`, `#BootROM`

---

<a id="item-7"></a>
## [US Bans Anthropic's Fable Model, Big Implications](https://newsletter.pragmaticengineer.com/p/the-pulse-big-implications-of-us) ⭐️ 8.0/10

The US government has banned Anthropic's new Claude Fable 5 model, citing regulatory concerns, as reported in The Pragmatic Engineer newsletter. This marks a significant escalation in AI regulation, potentially setting a precedent for how advanced AI models are controlled in the US and affecting the entire AI industry. Claude Fable 5 is a Mythos-class model designed for document-heavy tasks like finance and legal, with vision capabilities for code evaluation. The ban's specific reasons are not detailed in the newsletter.

rss · The Pragmatic Engineer · Jun 18, 17:11

**Background**: Anthropic is a leading AI safety company known for its Claude models. The US government has been increasingly scrutinizing AI models for potential risks, and this ban could be part of broader regulatory efforts. The newsletter also covers Meta's engineering culture issues and SpaceX's IPO.

<details><summary>References</summary>
<ul>
<li><a href="https://www.anthropic.com/claude/fable">Claude Fable \ Anthropic</a></li>
<li><a href="https://www.anthropic.com/news/claude-fable-5-mythos-5">Claude Fable 5 and Claude Mythos 5 \ Anthropic</a></li>

</ul>
</details>

**Tags**: `#AI regulation`, `#tech industry`, `#engineering culture`, `#Anthropic`, `#SpaceX`

---

<a id="item-8"></a>
## [SK hynix samples HBM4E memory with 16Gbps pin speed, 48GB capacity](https://www.gsmarena.com/sk_hynix_ships_samples_of_its_hbm4e_memory_16gbps_per_pin_48gb_capacity_per_12layer_stack-news-73336.php) ⭐️ 8.0/10

SK hynix has begun shipping samples of its HBM4E memory to customers, featuring 16Gbps per pin bandwidth and 48GB capacity in a 12-layer stack, surpassing the previous HBM4 standard of 10Gbps per pin. This advancement is critical for AI hardware, as HBM memory is essential for feeding data to thousands of GPU cores in accelerators. Higher bandwidth and capacity directly improve performance of AI training and inference workloads. Samsung had previously announced its own HBM4E samples with 14Gbps per pin, making SK hynix's 16Gbps a competitive edge. The 12-layer stack achieves 48GB capacity per package, and the memory uses 3D-stacked DRAM with through-silicon vias (TSVs).

rss · GSMArena · Jun 18, 21:03

**Background**: High Bandwidth Memory (HBM) is a 3D-stacked DRAM interface used in high-performance graphics accelerators and AI hardware. It provides much higher bandwidth than traditional DDR memory by stacking multiple dies and using a wide interface. The current HBM4 standard offers 10Gbps per pin, while HBM4E is an enhanced version pushing speeds further.

<details><summary>References</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/High_Bandwidth_Memory">High Bandwidth Memory - Wikipedia</a></li>
<li><a href="https://en.wikipedia.org/wiki/HBM_memory_shortage">HBM memory shortage</a></li>

</ul>
</details>

**Tags**: `#HBM`, `#memory`, `#AI hardware`, `#SK hynix`, `#semiconductors`

---

<a id="item-9"></a>
## [SK Telecom named in Anthropic Mythos export controls controversy](https://www.tomshardware.com/tech-industry/artificial-intelligence/sk-telecom-named-as-the-korean-carrier-at-the-center-of-anthropics-mythos-export-controls) ⭐️ 8.0/10

Wired identified SK Telecom as the South Korean carrier whose access to Anthropic's Claude Mythos model was revoked by the White House due to alleged ties to China, days before the White House took Mythos and Fable 5 offline for all foreign nationals. This incident highlights the tightening of US AI export controls, with national security concerns directly impacting major telecom companies and restricting access to cutting-edge AI models globally. The revocation occurred days before the White House took Mythos and Fable 5 offline for all foreign nationals, and Anthropic had previously disabled access to comply with a government directive.

rss · Tom's Hardware · Jun 19, 10:54

**Background**: Claude Mythos is a highly advanced AI model developed by Anthropic, codenamed 'Capybara', and first surfaced in March 2026. The US government issued an export control directive targeting Mythos and Fable 5, citing national security risks, leading to access restrictions for foreign entities.

<details><summary>References</summary>
<ul>
<li><a href="https://www.cnbc.com/2026/06/12/anthropic-disables-access-to-fable-5-and-mythos-5-to-comply-with-government-directive.html">Anthropic disables access to Fable 5, Mythos 5 on ... - CNBC</a></li>
<li><a href="https://www.searchenginejournal.com/government-order-shuts-down-fable-5-despite-anthropics-objections/579168/">Anthropic Forced To Shut Down Fable 5 By U.S. Government Order</a></li>

</ul>
</details>

**Tags**: `#AI`, `#export controls`, `#Anthropic`, `#national security`, `#telecom`

---

<a id="item-10"></a>
## [Tesco removes 40,000 servers from VMware due to Broadcom pricing](https://www.tomshardware.com/desktops/servers/tesco-uk-supermarket-chain-removes-40-000-servers-from-vmware-infrastructure-mass-exodus-continues-due-to-broadcoms-aggressive-subscription-model) ⭐️ 8.0/10

Tesco, a major UK supermarket chain, has migrated 40,000 servers off VMware infrastructure, continuing a mass exodus driven by Broadcom's aggressive subscription pricing model. This move signals a significant industry trend where large enterprises are abandoning VMware due to cost increases, potentially reshaping the virtualization market and boosting adoption of alternatives like open-source hypervisors or public clouds. The migration involves 40,000 servers, a massive scale that underscores the operational complexity and cost savings driving the decision. Tesco's move follows Broadcom's portfolio simplification and transition from perpetual licenses to subscription-only models, which have significantly raised costs for many customers.

rss · Tom's Hardware · Jun 19, 10:00

**Background**: VMware is a leading virtualization platform that allows multiple virtual servers to run on a single physical server, widely used in enterprise data centers. In late 2023, Broadcom completed its acquisition of VMware and began restructuring its licensing, eliminating perpetual licenses and pushing customers toward more expensive subscription bundles. This has prompted many organizations to explore alternative hypervisors such as Nutanix, Microsoft Hyper-V, or open-source KVM, as well as cloud migration.

<details><summary>References</summary>
<ul>
<li><a href="https://news.broadcom.com/cloud/vmware-by-broadcom-business-transformation">VMware by Broadcom Dramatically Simplifies Offer Lineup and ...</a></li>
<li><a href="https://vmwaremadesimple.com/articles/broadcom-vmware-licensing-changes-2026.html">Broadcom's VMware Licensing Changes in 2026: What Every Admin ...</a></li>
<li><a href="https://www.cloudzero.com/blog/vmware-alternatives/">9 VMware Alternatives To Consider In 2026</a></li>

</ul>
</details>

**Tags**: `#VMware`, `#Broadcom`, `#enterprise IT`, `#cloud migration`, `#infrastructure`

---

<a id="item-11"></a>
## [MosaicLeaks: Benchmarking Data Leakage in LLM Research Agents](https://huggingface.co/blog/ServiceNow/mosaicleaks) ⭐️ 8.0/10

Researchers introduced MosaicLeaks, a benchmark of 1,001 multi-hop deep research tasks designed to evaluate whether LLM-based research agents inadvertently leak sensitive information when querying external sources. This benchmark addresses a critical AI safety vulnerability, as LLM agents increasingly handle private enterprise data while performing web searches, and data leakage could lead to severe privacy breaches and compliance violations. The benchmark chains private enterprise documents with a public web corpus, forcing agents to make external queries that depend on local information, thereby simulating realistic leakage scenarios.

rss · Hugging Face Blog · Jun 18, 18:13

**Background**: LLM-based research agents are AI systems that can answer complex questions by combining internal knowledge with real-time web searches. However, when agents have access to sensitive internal documents, they may inadvertently include private information in their search queries, leading to data leakage. MosaicLeaks is designed to detect and quantify such risks.

<details><summary>References</summary>
<ul>
<li><a href="https://arxiv.org/abs/2605.30727">[2605.30727] MosaicLeaks:Privacy Risks in Querying-in-the ...</a></li>
<li><a href="https://lumienai.com/news/mosaicleaks-ai-research-agent-data-leakage">MosaicLeaks: Can Your AI Research Agent Actually Keep a…</a></li>

</ul>
</details>

**Tags**: `#AI Safety`, `#LLM Agents`, `#Data Leakage`, `#Security`, `#Benchmark`

---

<a id="item-12"></a>
## [IETF Publishes RFC 10008: New HTTP QUERY Method](https://www.ithome.com/0/966/439.htm) ⭐️ 8.0/10

The IETF has published RFC 10008, defining a new HTTP request method called QUERY, which is a safe, idempotent, and cacheable method that allows a request body for complex read-only queries. This fills a long-standing gap between GET and POST, enabling developers to perform complex read-only queries without misusing POST or hitting URL length limits. It improves API clarity and aligns with RESTful principles. The QUERY method is defined as safe and idempotent, supports caching via a new Accept-Query response header, and can be advertised by servers using the Allow header. RFC 10008 is currently a Proposed Standard.

rss · IT之家 · Jun 19, 15:16

**Background**: HTTP methods like GET and POST have well-defined semantics: GET is safe and idempotent but cannot carry a request body, while POST can carry a body but is neither safe nor idempotent. For complex queries, developers often had to either cram parameters into a URL (GET) or misuse POST, leading to ambiguity. The new QUERY method solves this by combining the safety of GET with the body-carrying capability of POST.

<details><summary>References</summary>
<ul>
<li><a href="https://www.rfc-editor.org/info/rfc10008/">RFC 10008 : The HTTP QUERY Method | RFC Editor</a></li>
<li><a href="https://blainsmith.com/articles/rfc-10008-http-query-method/">RFC 10008 : The HTTP QUERY Method - Blain Smith</a></li>
<li><a href="https://www.banandre.com/blog/rfc-10008-http-query-method-breakdown">RFC 10008 Just Gave HTTP a Fourth Read-Only Method ... - Banandre</a></li>

</ul>
</details>

**Tags**: `#HTTP`, `#API Design`, `#IETF`, `#Web Standards`, `#REST`

---

<a id="item-13"></a>
## [Apple Announces Major App Store Changes in Brazil](https://www.macrumors.com/2026/06/18/apple-announces-ios-app-store-changes-in-brazil/) ⭐️ 7.0/10

Apple will allow alternative app marketplaces and third-party payments on iOS in Brazil starting with iOS 26.5, following regulatory action by Brazil's competition regulator. This marks another significant crack in Apple's App Store monopoly, expanding the list of countries where developers can bypass Apple's ecosystem, and could pressure other regulators globally. Apple will charge a 5% Core Technology Commission on apps distributed outside the App Store, and reduce App Store commissions to up to 21% for digital goods. Developers using third-party payments still face fees of 10-15% on linked website transactions.

rss · MacRumors · Jun 18, 17:15

**Background**: Apple has historically required all iOS app distribution and in-app purchases to go through its App Store, charging commissions of up to 30%. Similar regulatory pressures in the EU, Japan, and South Korea have already forced Apple to allow alternative app stores and third-party payments in those regions.

<details><summary>References</summary>
<ul>
<li><a href="https://www.macobserver.com/news/apple-cuts-app-store-fees-and-allows-alternative-app-stores-in-brazil/">Apple Cuts App Store Fees and Allows Alternative App Stores ...</a></li>

</ul>
</details>

**Tags**: `#Apple`, `#App Store`, `#Brazil`, `#iOS`, `#Regulation`

---

<a id="item-14"></a>
## [Apple Confirms Consistent Siri AI Across All Devices](https://9to5mac.com/2026/06/19/apple-just-said-the-thing-about-siri-that-weve-long-wanted-to-hear/) ⭐️ 6.0/10

Apple has confirmed that the new Siri AI, introduced in iOS 27 beta, will provide a consistent experience across all Apple devices, including iPhone, iPad, Mac, Apple Watch, and Apple Vision Pro. This addresses a long-standing user frustration where Siri behaved differently on different devices, making the assistant more reliable and seamless across the Apple ecosystem. The consistent Siri experience was a deliberate design goal, as explained by Apple's senior watchOS team in a recent interview. Siri AI is powered by the next generation of Apple Intelligence and can draw on personal context across apps.

rss · 9to5Mac · Jun 19, 15:01

**Background**: Siri has historically provided inconsistent responses across devices, with some features available only on certain hardware. Apple's Siri AI overhaul, announced at WWDC 2026, aims to unify the assistant's capabilities using advanced AI and on-device intelligence.

<details><summary>References</summary>
<ul>
<li><a href="https://www.apple.com/newsroom/2026/06/apple-introduces-siri-ai-a-profoundly-more-capable-and-personal-assistant/">Apple introduces Siri AI, a profoundly more capable and ...</a></li>
<li><a href="https://techcrunch.com/2026/06/08/apples-long-awaited-ai-siri-overhaul-is-finally-here/">Apple's long-awaited AI Siri overhaul is finally here ...</a></li>

</ul>
</details>

**Tags**: `#Apple`, `#Siri`, `#AI`, `#iOS`

---

<a id="item-15"></a>
## [Joanna Stern's Week with New Siri AI: Impressive but Flawed](https://9to5mac.com/2026/06/19/joanna-stern-spent-one-week-with-new-siri-ai-and-its-very-good/) ⭐️ 6.0/10

Joanna Stern published a video review after spending a week testing the new Siri AI in the iOS 27 beta, highlighting its strengths and shortcomings. This hands-on review provides early real-world insights into Apple's major Siri overhaul, which is a key feature of iOS 27 and could significantly impact user experience across Apple devices. The review covers Siri AI's on-screen awareness, contextual personalization, and multi-app task orchestration, but notes that as a beta, it still has limitations and bugs.

rss · 9to5Mac · Jun 19, 13:50

**Background**: Siri AI is a completely reimagined version of Siri powered by Apple Intelligence, unveiled at WWDC 2026 and developed in partnership with Google Gemini. It integrates on-screen awareness, contextual personalization, and multi-app task orchestration natively across the Apple ecosystem. iOS 27 is currently in public beta and is expected to ship in the fall of 2026.

<details><summary>References</summary>
<ul>
<li><a href="https://www.apple.com/newsroom/2026/06/apple-introduces-siri-ai-a-profoundly-more-capable-and-personal-assistant/">Apple introduces Siri AI, a profoundly more capable and ...</a></li>
<li><a href="https://en.wikipedia.org/wiki/Siri_AI">Siri AI</a></li>

</ul>
</details>

**Tags**: `#Siri`, `#iOS 27`, `#AI`, `#Apple`, `#beta`

---

<a id="item-16"></a>
## [Apple Explains Why watchOS 27 Drops Support for Five Models](https://www.macrumors.com/2026/06/19/apple-explains-why-watchos-27-drops-support/) ⭐️ 6.0/10

Apple announced that watchOS 27 will not support Apple Watch Series 6, 7, 8, SE 2, and original Ultra, citing performance requirements for new Siri AI features. This is the first time Apple has dropped three years of device support in a single watchOS update, potentially accelerating upgrade cycles for Apple Watch users. Affected models will still receive security updates and remain functional when paired with a supported iPhone. watchOS 27 is currently in developer beta, with a public beta expected next month.

rss · MacRumors · Jun 19, 13:07

**Background**: watchOS 27 introduces Siri AI, a smarter version of Siri powered by Apple Intelligence and generative AI models. Apple aims to make Siri a consistent, personalized assistant across iPhone and Apple Watch, enabling seamless handoff of tasks.

<details><summary>References</summary>
<ul>
<li><a href="https://www.macrumors.com/roundup/watchos-27/">watchOS 27: Everything We Know | MacRumors</a></li>
<li><a href="https://www.apple.com/os/watchos/">OS - watchOS 27 - Apple</a></li>
<li><a href="https://www.tomsguide.com/wellness/smartwatches/watchos-27-all-the-new-features-coming-to-apple-watch-later-this-year">watchOS 27: All the new features coming to Apple Watch later ...</a></li>

</ul>
</details>

**Tags**: `#Apple Watch`, `#watchOS`, `#software support`, `#AI features`

---

<a id="item-17"></a>
## [Datasette-acl 0.6a0 expands to general resource-sharing](https://simonwillison.net/2026/Jun/18/datasette-acl/#atom-everything) ⭐️ 6.0/10

Datasette-acl 0.6a0 expands from table-only permissions to a general resource-sharing system, allowing multi-user Datasette instances to have finely grained control over access to various resources. This release is significant for Datasette users who need to manage access in multi-user environments, as it provides a more flexible and comprehensive permission system beyond just tables. The plugin now supports a UI for setting permissions on users and groups for various resources, with the 'datasette-acl' permission required to access this UI. Alex Garcia contributed most of the work for this release.

rss · Simon Willison · Jun 18, 19:03

**Background**: Datasette is an open-source multi-tool for exploring and publishing data, often used to create interactive websites from SQLite databases. The datasette-acl plugin provides advanced permission management, enabling fine-grained access control in multi-user Datasette instances. Previously, permissions were limited to tables; this release generalizes the system to cover other resources.

<details><summary>References</summary>
<ul>
<li><a href="https://github.com/datasette/datasette-acl">GitHub - datasette/ datasette - acl : Advanced permission management...</a></li>
<li><a href="https://datasette.io/">Datasette : An open source multi-tool for exploring and publishing data</a></li>
<li><a href="https://simonwillison.net/2026/Jun/18/datasette-acl/">Release: datasette - acl 0.6a0 | Simon Willison’s Weblog</a></li>

</ul>
</details>

**Tags**: `#datasette`, `#permissions`, `#access-control`, `#plugin`

---