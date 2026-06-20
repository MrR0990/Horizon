---
layout: default
title: "Horizon Summary: 2026-06-20 (EN)"
date: 2026-06-20
lang: en
---

> From 156 items, 13 important content pieces were selected

---

1. [2D Transistor Breakthrough: 50nm Pitch on 300mm Wafer](#item-1) ⭐️ 9.0/10
2. [Norway Bans AI for Elementary School Students](#item-2) ⭐️ 8.0/10
3. [ATProto Has No Instances, Says Dan Abramov](#item-3) ⭐️ 8.0/10
4. [Project Valhalla Arrives in JDK 28 After a Decade](#item-4) ⭐️ 8.0/10
5. [GLM-5.2 Tops Design Arena, Open Models Surge](#item-5) ⭐️ 8.0/10
6. [SK Telecom Named in Anthropic Mythos Export Controls Controversy](#item-6) ⭐️ 8.0/10
7. [Tesco removes 40,000 servers from VMware due to Broadcom pricing](#item-7) ⭐️ 8.0/10
8. [FERC Orders Grid Operators to Fast-Track AI Data Centers](#item-8) ⭐️ 8.0/10
9. [IETF Publishes RFC 10008 for New HTTP QUERY Method](#item-9) ⭐️ 8.0/10
10. [Nothing CMF Phone Discontinued Due to RAMageddon](#item-10) ⭐️ 6.0/10
11. [Joanna Stern Tests New Siri AI in iOS 27 Beta](#item-11) ⭐️ 6.0/10
12. [Apple Explains Why watchOS 27 Drops Support for Five Models](#item-12) ⭐️ 6.0/10
13. [MCP's Key Value: Auth Isolation Outside Agent Context](#item-13) ⭐️ 6.0/10

---

<a id="item-1"></a>
## [2D Transistor Breakthrough: 50nm Pitch on 300mm Wafer](https://www.tomshardware.com/tech-industry/semiconductors/imec-asml-and-tsmc-build-complementary-2d-material-transistors-at-50nm-pitch-on-a-300mm-wafer) ⭐️ 9.0/10

Imec, ASML, and TSMC have successfully integrated complementary n-type and p-type 2D-material transistors at a 50nm contacted poly pitch on a standard 300mm wafer, using single-exposure EUV lithography. This achievement demonstrates that 2D transistors can be fabricated at pitches comparable to advanced silicon nodes, marking a critical step toward post-silicon logic chips and potentially extending Moore's Law beyond silicon's physical limits. The n-type transistors use MoS₂, while p-type use WSe₂ or WS₂; 94% of transistors on the wafer function with an on/off ratio exceeding 100,000. The team employed a 'reverse thin-film transistor' process to overcome contact resistance issues.

rss · Tom's Hardware · Jun 19, 13:13

**Background**: As silicon transistor scaling approaches fundamental limits, 2D materials like transition metal dichalcogenides (TMDs) offer atomically thin channels that provide superior gate control. Contacted poly pitch (CPP) is a key metric for transistor density, and achieving 50nm CPP brings 2D transistors into the range of current silicon technology nodes (e.g., Intel's 10nm-class node has 54nm CPP).

<details><summary>References</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Two-dimensional_semiconductor">Two-dimensional semiconductor - Wikipedia</a></li>
<li><a href="https://en.wikipedia.org/wiki/10_nm_process">10 nm process - Wikipedia</a></li>
<li><a href="https://en.wikipedia.org/wiki/Transition_metal_dichalcogenide_monolayers">Transition metal dichalcogenide monolayers - Wikipedia</a></li>

</ul>
</details>

**Tags**: `#semiconductors`, `#2D materials`, `#transistors`, `#nanotechnology`, `#chip manufacturing`

---

<a id="item-2"></a>
## [Norway Bans AI for Elementary School Students](https://www.reuters.com/technology/norway-imposes-near-ban-ai-elementary-school-2026-06-19/) ⭐️ 8.0/10

Norway's government announced a near-total ban on AI use for students aged 6 to 13, and restricted use for ages 14 to 16 under teacher supervision, effective from the 2026 school year. This is one of the first national-level policies to restrict generative AI in education, setting a precedent for how countries might balance technological innovation with child development and learning fundamentals. The ban applies to all AI tools, including generative AI like ChatGPT, for elementary school students, while lower secondary students can use AI cautiously with teacher guidance. The policy aims to protect foundational skills in reading, writing, and comprehension.

hackernews · ilreb · Jun 19, 16:03 · [Discussion](https://news.ycombinator.com/item?id=48600093)

**Background**: Generative AI tools like ChatGPT can produce human-like text, raising concerns about academic integrity and the erosion of critical thinking. Norway's decision mirrors historical debates about calculators in classrooms, where tools were introduced only after students mastered basic arithmetic.

**Discussion**: Community comments largely support the ban, drawing parallels to calculator bans and emphasizing the need for children to learn foundational skills before using AI. Some express concerns about enforcement and the potential for AI as a tutoring tool if properly controlled.

**Tags**: `#AI regulation`, `#education`, `#policy`, `#generative AI`

---

<a id="item-3"></a>
## [ATProto Has No Instances, Says Dan Abramov](https://overreacted.io/there-are-no-instances-in-atproto/) ⭐️ 8.0/10

Dan Abramov published a blog post explaining that ATProto, the protocol behind Bluesky, does not have 'instances' like Mastodon's ActivityPub, and uses an RSS analogy to clarify the architectural difference. This clarification addresses a common misconception in the decentralized social networking community, helping developers and users understand the fundamental design differences between ATProto and ActivityPub, which affects how decentralization is achieved in practice. In ATProto, the roles of hosting user data (Personal Data Servers), aggregating content (Relays), and presenting it to users (AppViews) are separated, unlike Mastodon where each instance combines all functions. Relays are expensive to run, which has led to practical centralization around Bluesky's infrastructure.

hackernews · danabramov · Jun 19, 15:10 · [Discussion](https://news.ycombinator.com/item?id=48599515)

**Background**: ATProto (Authenticated Transfer Protocol) is a decentralized protocol for social networking, used by Bluesky. ActivityPub is the protocol behind Mastodon and other federated services. In ActivityPub, instances are independently operated servers that host content and users, forming a federation. ATProto separates these functions into distinct services, which some argue reduces the barrier to entry for users but increases reliance on centralized relay operators.

<details><summary>References</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/AT_Protocol">AT Protocol - Wikipedia</a></li>
<li><a href="https://atproto.com/guides/overview">Protocol Overview - AT Protocol</a></li>
<li><a href="https://sesamedisk.com/at-protocol-architecture-instances/">AT Protocol Architecture : Understanding Instances... - Sesame Disk</a></li>

</ul>
</details>

**Discussion**: The Hacker News discussion was substantive, with users like p4bl0 arguing the RSS analogy is flawed because RSS does not depend on a central service like Google Reader, whereas ATProto's AppViews heavily depend on Relays. Others like fizwidget noted that despite protocol-level decentralization, Bluesky the corporation still runs the main app and hosts most user data, leading to practical centralization. muglug praised the separation of concerns as a beautiful system design solution.

**Tags**: `#ATProto`, `#Bluesky`, `#decentralization`, `#protocols`, `#ActivityPub`

---

<a id="item-4"></a>
## [Project Valhalla Arrives in JDK 28 After a Decade](https://www.jvm-weekly.com/p/project-valhalla-explained-how-a) ⭐️ 8.0/10

Project Valhalla introduces value types and heap flattening to the JVM in JDK 28, enabling more efficient memory layout for objects without identity. This is a major JVM enhancement that improves memory density, cache locality, and performance for data-intensive applications, after over a decade of design and development. Value types are reference types without identity, meaning they can be flattened in arrays and fields, removing object headers and indirection pointers. However, flattening is limited to objects that fit within 64 bits (plus a null flag).

hackernews · philonoist · Jun 19, 06:35 · [Discussion](https://news.ycombinator.com/item?id=48595511)

**Background**: In Java, every object traditionally has an identity (a unique memory address) and an object header, which adds overhead. Project Valhalla introduces value classes that give up identity, allowing the JVM to store them inline without headers or pointers, similar to primitives. This improves memory locality and reduces garbage collection pressure.

<details><summary>References</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Project_Valhalla_(Java_language)">Project Valhalla (Java language) - Wikipedia</a></li>
<li><a href="https://openjdk.org/jeps/401">JEP 401: Value Classes and Objects (Preview) - OpenJDK Free Video: Value Classes Heap Flattening - What to Expect ... Value Classes Heap Flattening - What to expect from JEP 401 # ... Java's Value Classes: A Sneak Peek at the Future of High ... I Deleted 40% of Our Java Code and Made It 9x Faster ... - Medium</a></li>
<li><a href="https://inside.java/2025/10/31/jvmls-jep-401/">Value Classes Heap Flattening - What to expect from JEP 401 # ...</a></li>

</ul>
</details>

**Discussion**: The Hacker News discussion is substantive, with technical critiques about flattening limitations and null-safety trade-offs, but also defense of the decade-long effort. Some commenters note that many critics underestimate modern Java's capabilities.

**Tags**: `#Java`, `#JVM`, `#Project Valhalla`, `#performance`, `#memory`

---

<a id="item-5"></a>
## [GLM-5.2 Tops Design Arena, Open Models Surge](https://www.latent.space/p/ainews-glm-gpt-glm-52-passes-vibe) ⭐️ 8.0/10

GLM-5.2, an open-source model from Z.ai, achieved first place in the Design Arena benchmark for single-round HTML web design, surpassing proprietary models like Claude Fable 5. The news also forecasts an 'Open Fable' milestone by December 2026. This marks a turning point where open-source models can compete with or outperform proprietary frontier models in creative tasks, potentially democratizing access to high-quality AI. The 'Open Fable' forecast suggests a major shift in the open-source AI landscape by year-end. GLM-5.2 costs $1.40/$4.40 per million tokens, far cheaper than Fable 5's $10/$50. It effectively uses libraries like chart.js and three.js, and employs TailwindCSS in 91% of sessions, contributing to its win. The model also supports a 1M-token context and is MIT-licensed.

rss · Latent Space (AI Engineering) · Jun 19, 05:53

**Background**: Design Arena is a crowdsourced blind-test benchmark for AI-generated design quality, widely regarded as an industry benchmark for aesthetics and practical design. GLM-5.2 is an open-source model from Z.ai, built for long-horizon tasks with a 1M-token context. The 'Open Fable' refers to a predicted open-source model that could rival or surpass Claude Fable 5.

<details><summary>References</summary>
<ul>
<li><a href="https://github.com/zai-org/GLM-5">GLM-5.2 & GLM-5.1 & GLM-5 - GitHub</a></li>
<li><a href="https://openlm.ai/glm-5.2/">GLM-5.2 - openlm.ai</a></li>
<li><a href="https://z.ai/blog/glm-5.2">GLM-5.2: Built for Long-Horizon Tasks - z.ai</a></li>

</ul>
</details>

**Tags**: `#AI`, `#open-source`, `#GLM`, `#frontier models`, `#LLM`

---

<a id="item-6"></a>
## [SK Telecom Named in Anthropic Mythos Export Controls Controversy](https://www.tomshardware.com/tech-industry/artificial-intelligence/sk-telecom-named-as-the-korean-carrier-at-the-center-of-anthropics-mythos-export-controls) ⭐️ 8.0/10

Wired identified SK Telecom as the South Korean carrier whose access to Anthropic's Claude Mythos model was revoked by the White House over alleged ties to China, days before Mythos and Fable 5 were taken offline for all foreign nationals. This incident highlights escalating U.S. export controls on advanced AI models, potentially impacting international tech partnerships and the global AI industry's financial prospects. The White House used export controls to restrict access to Anthropic's most powerful AI, marking an unprecedented move that could set a precedent for future AI regulation.

rss · Tom's Hardware · Jun 19, 10:54

**Background**: Anthropic is a leading AI company behind the Claude series of large language models. Claude Mythos is a highly capable model with robust safeguards, but its access was restricted due to national security concerns over potential transfer to China.

<details><summary>References</summary>
<ul>
<li><a href="https://www.wired.com/story/sk-telecom-anthropic-mythos-export-controls/">The Korean Telecom Giant at the Center of Anthropic ’s Mythos...</a></li>
<li><a href="https://www.axios.com/2026/06/16/ai-anthropic-export-controls">Anthropic export ban sounds alarms for AI industry</a></li>
<li><a href="https://www.justsecurity.org/142745/law-anthropic-export-controls/">Legal Considerations Related to the Anthropic “ Export Controls ...”</a></li>

</ul>
</details>

**Tags**: `#AI`, `#export controls`, `#Anthropic`, `#national security`, `#telecom`

---

<a id="item-7"></a>
## [Tesco removes 40,000 servers from VMware due to Broadcom pricing](https://www.tomshardware.com/desktops/servers/tesco-uk-supermarket-chain-removes-40-000-servers-from-vmware-infrastructure-mass-exodus-continues-due-to-broadcoms-aggressive-subscription-model) ⭐️ 8.0/10

Tesco, a major UK supermarket chain, has removed 40,000 servers from its VMware infrastructure, continuing a mass exodus driven by Broadcom's aggressive subscription pricing model. This migration signals a significant industry shift as large enterprises abandon VMware due to cost increases, potentially accelerating the adoption of alternative hyperconverged infrastructure and cloud platforms. The move involves 40,000 servers, indicating a massive scale of migration. Broadcom eliminated perpetual VMware licenses in favor of annual subscription-based models, which has driven many customers to seek alternatives.

rss · Tom's Hardware · Jun 19, 10:00

**Background**: Broadcom acquired VMware in 2023 and has since transitioned its licensing from perpetual to subscription-based, significantly increasing costs for many enterprises. This has led to a wave of migrations to alternative virtualization platforms such as Nutanix, Huawei FusionCube, and others.

<details><summary>References</summary>
<ul>
<li><a href="https://techdocs.broadcom.com/us/en/vmware-cis/vsphere/vsphere/8-0/vcenter-and-host-management/license-management-host-management/licensing-for-products-in-vsphere-host-management.html">Licensing and Subscription in vSphere - Broadcom TechDocs</a></li>
<li><a href="https://trilio.io/resources/vmware-license-cost/">VMware License Cost Changes: What You Need to Know</a></li>
<li><a href="https://news.broadcom.com/cloud/vmware-by-broadcom-business-transformation">VMware by Broadcom Dramatically Simplifies Offer Lineup and Licensing Model - Broadcom News and Stories</a></li>

</ul>
</details>

**Tags**: `#VMware`, `#Broadcom`, `#enterprise IT`, `#cloud migration`, `#infrastructure`

---

<a id="item-8"></a>
## [FERC Orders Grid Operators to Fast-Track AI Data Centers](https://www.tomshardware.com/tech-industry/data-centers/us-energy-regulator-to-order-grid-operators-to-expedite-ai-data-center-applications-says-projects-should-bring-their-own-power-or-cut-usage-during-high-demand) ⭐️ 8.0/10

The U.S. Federal Energy Regulatory Commission (FERC) has ordered six regional grid operators to expedite interconnection for AI data centers that self-generate power or reduce demand during peak hours, with changes required within 90 days. This directive addresses the critical intersection of surging AI infrastructure power demand and aging U.S. grid capacity, potentially accelerating data center deployment while maintaining grid reliability. It also reflects regulatory efforts to bolster U.S. competitiveness in AI against China. The order applies to six regional grid operators serving about two-thirds of the U.S. population (200 million people). Data centers currently consume about 5% of U.S. electricity, a share that could triple by 2035.

rss · Tom's Hardware · Jun 19, 09:45

**Background**: FERC is an independent U.S. agency that regulates interstate transmission of electricity and natural gas. AI data centers have become some of the largest power-consuming facilities in U.S. history, with some exceeding the electricity usage of small cities. The grid interconnection process has been a bottleneck for new large loads, prompting FERC to act.

<details><summary>References</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/FERC">FERC</a></li>
<li><a href="https://beyondtmrw.org/article/ferc-large-load-interconnection-actions-for-ai-factories-and-grid-stress">FERC Large Load Interconnection: AI Factories and Grid Rules</a></li>
<li><a href="https://blogs.nvidia.com/blog/ferc-large-load-interconnection/">How FERC ’s Large-Load Interconnection Actions Help... | NVIDIA Blog</a></li>

</ul>
</details>

**Tags**: `#AI`, `#energy`, `#regulation`, `#data centers`, `#infrastructure`

---

<a id="item-9"></a>
## [IETF Publishes RFC 10008 for New HTTP QUERY Method](https://www.ithome.com/0/966/439.htm) ⭐️ 8.0/10

The IETF has published RFC 10008, defining the new HTTP QUERY method as a proposed standard for complex read-only requests that require a request body. This fills a long-standing gap in HTTP semantics, providing a standardized way for safe and idempotent queries, which improves API design clarity and enables automatic retries without side effects. The QUERY method is defined as safe and idempotent, similar to GET, but allows a request body like POST. It also introduces the Accept-Query response header and supports caching via assigned URIs.

rss · IT之家 · Jun 19, 15:16

**Background**: HTTP methods like GET and POST have been fundamental to web communication. GET is limited by URL length and cannot carry a body, while POST is not guaranteed to be read-only. The QUERY method bridges this gap by combining the safety of GET with the body-carrying capability of POST.

<details><summary>References</summary>
<ul>
<li><a href="https://www.rfc-editor.org/rfc/rfc10008.html">RFC 10008: The HTTP QUERY Method</a></li>
<li><a href="https://www.rfc-editor.org/info/rfc10008/">RFC 10008: The HTTP QUERY Method | RFC Editor</a></li>
<li><a href="https://mailarchive.ietf.org/arch/msg/ietf-announce/uNaYyRDGKjyOn_KDT2JaGLlm9fE/">RFC 10008 on The HTTP QUERY Method - mailarchive.ietf.org</a></li>

</ul>
</details>

**Tags**: `#HTTP`, `#IETF`, `#API design`, `#web standards`, `#RFC`

---

<a id="item-10"></a>
## [Nothing CMF Phone Discontinued Due to RAMageddon](https://9to5google.com/2026/06/19/nothing-cmf-phone-ram-costs/) ⭐️ 6.0/10

Nothing has discontinued its budget CMF Phone series after two models, citing rising memory costs driven by the global RAMageddon shortage as the reason for not releasing a third model. This highlights how the AI-driven memory shortage is impacting even budget smartphone segments, potentially reducing affordable options for consumers and forcing manufacturers to rethink product strategies. The CMF Phone series was Nothing's budget sub-brand, and its discontinuation underscores that memory (DRAM/NAND) has become the most expensive component in such devices, making low-margin models unsustainable.

rss · 9to5Google · Jun 19, 15:20

**Background**: RAMageddon refers to a global memory supply shortage that began in 2024, driven by manufacturers shifting production capacity to high-margin AI data center memory, leaving consumer markets with constrained supply and rising prices. This shortage is expected to last until at least 2030, affecting everything from PCs to smartphones.

<details><summary>References</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/RAMmageddon">RAMmageddon</a></li>
<li><a href="https://www.cnet.com/tech/services-and-software/what-is-ramageddon-why-ai-is-making-laptops-and-phones-more-expensive/">What Is RAMageddon ? Why AI Is Making Laptops and... - CNET</a></li>

</ul>
</details>

**Tags**: `#smartphones`, `#hardware`, `#supply chain`, `#memory`

---

<a id="item-11"></a>
## [Joanna Stern Tests New Siri AI in iOS 27 Beta](https://9to5mac.com/2026/06/19/joanna-stern-spent-one-week-with-new-siri-ai-and-its-very-good/) ⭐️ 6.0/10

Joanna Stern, formerly of The Wall Street Journal, published a video review after spending a week testing the new Siri AI in the iOS 27 beta, highlighting its strengths and shortcomings. This review provides an early, hands-on perspective on Siri AI, which represents Apple's major AI upgrade integrated with Google Gemini, and could influence user expectations and developer adoption. Siri AI, unveiled at WWDC 2026, features on-screen awareness, contextual personalization, and multi-app task orchestration, and is available in iOS 27, iPadOS 27, macOS 27, watchOS 27, and visionOS 27.

rss · 9to5Mac · Jun 19, 13:50

**Background**: Siri AI is a virtual assistant developed by Apple in partnership with Google Gemini, included in devices supporting Apple Intelligence. It uses voice, gestures, and natural language to answer questions and perform actions, adapting to individual user preferences over time.

<details><summary>References</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Siri_AI">Siri AI</a></li>
<li><a href="https://www.apple.com/newsroom/2026/06/apple-introduces-siri-ai-a-profoundly-more-capable-and-personal-assistant/">Apple introduces Siri AI, a profoundly more capable and personal assistant - Apple</a></li>

</ul>
</details>

**Tags**: `#Siri`, `#iOS 27`, `#AI`, `#Apple`

---

<a id="item-12"></a>
## [Apple Explains Why watchOS 27 Drops Support for Five Models](https://www.macrumors.com/2026/06/19/apple-explains-why-watchos-27-drops-support/) ⭐️ 6.0/10

Apple announced that watchOS 27 will not support the Apple Watch Series 6, 7, 8, SE 2, and original Ultra, citing performance requirements for new Siri AI features and a new tap gesture. This marks the first time Apple has dropped three years of device support in a single watchOS update. This unprecedented support cut affects a large installed base of Apple Watch users, forcing many to upgrade to continue receiving major feature updates. It also signals Apple's push to make the Watch a true AI co-partner with Apple Intelligence, prioritizing performance over backward compatibility. Affected models will still receive basic security updates and remain functional when paired with an iPhone running the latest software. watchOS 27 is currently in developer beta, with a public beta expected next month and an official release in the fall.

rss · MacRumors · Jun 19, 13:07

**Background**: Apple Watch models typically receive major watchOS updates for about 4-5 years. The Series 6 launched in 2020, Series 7 in 2021, Series 8 and SE 2 in 2022, and Ultra in 2022. watchOS 27 introduces Siri AI, a new Siri app, and a Dynamic app grid, leveraging Apple Intelligence for on-device processing.

<details><summary>References</summary>
<ul>
<li><a href="https://www.macrumors.com/roundup/watchos-27/">watchOS 27: Everything We Know | MacRumors</a></li>
<li><a href="https://www.tomsguide.com/wellness/smartwatches/watchos-27-all-the-new-features-coming-to-apple-watch-later-this-year">watchOS 27: All the new features coming to Apple Watch later ...</a></li>
<li><a href="https://endoflife.date/apple-watch">Apple Watch - endoflife.date</a></li>

</ul>
</details>

**Tags**: `#Apple Watch`, `#watchOS`, `#software support`, `#AI features`

---

<a id="item-13"></a>
## [MCP's Key Value: Auth Isolation Outside Agent Context](https://simonwillison.net/2026/Jun/19/sean-lynch/#atom-everything) ⭐️ 6.0/10

Sean Lynch argues that the Model Context Protocol (MCP) offers a critical advantage over traditional skills or CLI tools by isolating authentication flows outside the agent's context window, and suggests its idealized form might be a pure auth gateway for APIs. This insight highlights a practical security benefit of MCP that reduces the risk of credential leakage and simplifies agent architecture, potentially accelerating adoption of MCP in production AI agent systems. Lynch notes that isolating auth flows can remove them from the agent's context window entirely, and even if MCP only served as an auth gateway, it would still be a win. This contrasts with current approaches where agents often handle OAuth tokens directly within their context.

rss · Simon Willison · Jun 19, 22:45

**Background**: The Model Context Protocol (MCP) is an open standard introduced by Anthropic in November 2024 to standardize how AI systems connect to external tools and data sources. In AI agent architectures, authentication flows often require managing tokens and credentials within the agent's limited context window, which poses security and complexity challenges. Isolating auth flows outside this window can improve security and simplify agent design.

<details><summary>References</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Model_Context_Protocol">Model Context Protocol - Wikipedia</a></li>
<li><a href="https://modelcontextprotocol.io/">What is the Model Context Protocol ( MCP )? - Model Context Protocol</a></li>
<li><a href="https://www.scalekit.com/blog/oauth-ai-agents-architecture">OAuth for AI Agents: Production Architecture and Practical ...</a></li>

</ul>
</details>

**Tags**: `#model-context-protocol`, `#llms`, `#ai`, `#authentication`, `#agent-tooling`

---