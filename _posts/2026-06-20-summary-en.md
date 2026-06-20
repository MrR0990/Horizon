---
layout: default
title: "Horizon Summary: 2026-06-20 (EN)"
date: 2026-06-20
lang: en
---

> From 163 items, 11 important content pieces were selected

---

1. [imec, ASML, TSMC achieve 50nm pitch 2D transistors on 300mm wafer](#item-1) ⭐️ 9.0/10
2. [Norway Bans AI for Elementary Students](#item-2) ⭐️ 8.0/10
3. [ATProto Has No Instances: A Deep Dive](#item-3) ⭐️ 8.0/10
4. [Project Valhalla Arrives in JDK 28 After a Decade](#item-4) ⭐️ 8.0/10
5. [SK Telecom Named in Anthropic Mythos Export Controls Controversy](#item-5) ⭐️ 8.0/10
6. [Tesco removes 40,000 servers from VMware amid Broadcom pricing backlash](#item-6) ⭐️ 8.0/10
7. [IETF Publishes RFC 10008 for New HTTP QUERY Method](#item-7) ⭐️ 8.0/10
8. [Yuanxin Satellite Achieves First Unmodified Phone-to-Satellite Call in China](#item-8) ⭐️ 8.0/10
9. [AltStore PAL Launches in Brazil as Apple Opens iOS](#item-9) ⭐️ 7.0/10
10. [MCP's Key Value: Isolating Auth from Agent Context](#item-10) ⭐️ 7.0/10
11. [Apple Explains Why watchOS 27 Drops Five Models](#item-11) ⭐️ 6.0/10

---

<a id="item-1"></a>
## [imec, ASML, TSMC achieve 50nm pitch 2D transistors on 300mm wafer](https://www.tomshardware.com/tech-industry/semiconductors/imec-asml-and-tsmc-build-complementary-2d-material-transistors-at-50nm-pitch-on-a-300mm-wafer) ⭐️ 9.0/10

imec, ASML, and TSMC have successfully integrated complementary n-type and p-type transistors using atomically thin 2D materials on a 300mm wafer, achieving a contacted poly pitch (CPP) of 50nm. This is the smallest pitch ever demonstrated for 2D complementary devices, approaching current advanced silicon nodes. This breakthrough demonstrates that 2D materials can be integrated at industry-relevant densities, paving the way for post-silicon logic chips. It addresses the long-standing challenge of scaling transistors beyond silicon's physical limits, potentially enabling lower power and higher performance in future chips. The transistors use molybdenum disulfide (MoS₂) for n-type and tungsten diselenide (WSe₂) or tungsten disulfide (WS₂) for p-type, with a channel length of 28nm achieved via single EUV exposure. 94% of the transistors on the wafer are functional, with an on/off ratio exceeding 100,000.

rss · Tom's Hardware · Jun 19, 13:13

**Background**: Two-dimensional semiconductors, such as transition metal dichalcogenides (TMDs), are atomically thin materials that offer superior electrostatic control over the channel, enabling further transistor scaling. Contacted poly pitch (CPP) is a key metric for transistor density, representing the distance from one gate to the next. This work overcomes the contact resistance bottleneck by using a reverse thin-film transistor process with bottom contacts.

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
## [Norway Bans AI for Elementary Students](https://www.reuters.com/technology/norway-imposes-near-ban-ai-elementary-school-2026-06-19/) ⭐️ 8.0/10

Norway's government announced a near-total ban on AI use for elementary students aged 6-13, and restricted use for lower secondary students aged 14-16 to supervised settings, effective from the 2026 school year. This policy sets a precedent for how governments can regulate AI in education, prioritizing foundational skills like reading and writing over early AI adoption, and may influence other countries' approaches. The ban applies to generative AI tools in classrooms and homework, while allowing exceptions for assistive technologies for students with disabilities. The policy is based on recommendations from a government-appointed committee.

hackernews · ilreb · Jun 19, 16:03 · [Discussion](https://news.ycombinator.com/item?id=48600093)

**Background**: Generative AI, such as ChatGPT, can produce human-like text and is increasingly used in education. However, educators worry that reliance on AI may hinder the development of critical thinking and writing skills in young children. Norway's decision reflects a broader debate on balancing AI literacy with traditional learning.

**Discussion**: Commenters largely support the ban, drawing analogies to not giving calculators before learning arithmetic. Some highlight enforcement challenges and the potential positive use of AI as a tutor with proper safeguards.

**Tags**: `#AI policy`, `#education`, `#generative AI`, `#Norway`, `#regulation`

---

<a id="item-3"></a>
## [ATProto Has No Instances: A Deep Dive](https://overreacted.io/there-are-no-instances-in-atproto/) ⭐️ 8.0/10

Dan Abramov published a blog post explaining that ATProto, the protocol behind Bluesky, does not have 'instances' like Mastodon, but instead uses separate services: Personal Data Servers (PDS), Relays, and AppViews. This clarification helps prevent category errors when comparing decentralized social protocols, and highlights ATProto's architectural advantage in separating data storage, indexing, and presentation for better scalability and flexibility. In ATProto, Relays index the entire network and provide data to AppViews, which are the user-facing applications; this separation allows multiple AppViews to serve the same content with different features or moderation policies.

hackernews · danabramov · Jun 19, 15:10 · [Discussion](https://news.ycombinator.com/item?id=48599515)

**Background**: ActivityPub, used by Mastodon, relies on instances—servers that host user data and serve content directly to users. ATProto decouples these roles: PDS stores user data, Relays aggregate and index data, and AppViews present it. This design aims to reduce the operational burden on individual server operators and enable more flexible application development.

<details><summary>References</summary>
<ul>
<li><a href="https://atproto.brussels/atproto-architecture">ATproto Architecture • atproto.brussels</a></li>
<li><a href="https://sesamedisk.com/at-protocol-architecture-instances/">AT Protocol Architecture: Understanding Instances and ...</a></li>
<li><a href="https://atproto.wiki/en/wiki/reference/core-architecture/appview">AppViews | AT Protocol Community Wiki</a></li>

</ul>
</details>

**Discussion**: Commenters debated whether the architecture truly decentralizes control, noting that Bluesky currently runs most of the infrastructure. Some praised the separation of concerns, while others argued that the RSS analogy in the post was flawed because RSS feeds are self-sufficient unlike ATProto's relay-dependent app views.

**Tags**: `#ATProto`, `#Bluesky`, `#decentralization`, `#protocols`, `#ActivityPub`

---

<a id="item-4"></a>
## [Project Valhalla Arrives in JDK 28 After a Decade](https://www.jvm-weekly.com/p/project-valhalla-explained-how-a) ⭐️ 8.0/10

Project Valhalla introduces value types and heap flattening to the JVM, fundamentally changing how data is stored and accessed in Java, with the first major features landing in JDK 28. This represents a decade-long effort to give Java the performance of primitive types with the abstraction of objects, significantly reducing memory overhead and improving cache locality for data-intensive applications. Heap flattening encodes value objects as compact bit vectors directly in fields or array cells, but it only works for objects that fit within 64 bits; larger value types still require indirection.

hackernews · philonoist · Jun 19, 06:35 · [Discussion](https://news.ycombinator.com/item?id=48595511)

**Background**: Traditionally, Java objects carry overhead like headers and pointers, making arrays of small objects memory-inefficient. Project Valhalla introduces value types—immutable, identity-free classes that can be flattened into memory, similar to C structs but with full object semantics.

<details><summary>References</summary>
<ul>
<li><a href="https://openjdk.org/projects/valhalla/">Project Valhalla - OpenJDK</a></li>
<li><a href="https://www.jvm-weekly.com/p/project-valhalla-explained-how-a">Project Valhalla, Explained: How a Decade of... - JVM Weekly vol. 180</a></li>
<li><a href="https://inside.java/2025/10/31/jvmls-jep-401/">Value Classes Heap Flattening - What to expect from JEP 401...</a></li>

</ul>
</details>

**Discussion**: Comments show mixed reactions: some appreciate the technical achievement but criticize the complexity and limitations (e.g., 64-bit flattening limit), while others defend Java's evolution and note that many critics are unaware of modern JVM capabilities.

**Tags**: `#Java`, `#JVM`, `#Project Valhalla`, `#performance`, `#memory model`

---

<a id="item-5"></a>
## [SK Telecom Named in Anthropic Mythos Export Controls Controversy](https://www.tomshardware.com/tech-industry/artificial-intelligence/sk-telecom-named-as-the-korean-carrier-at-the-center-of-anthropics-mythos-export-controls) ⭐️ 8.0/10

Wired identified SK Telecom as the South Korean carrier whose access to Anthropic's Claude Mythos model was revoked by the White House over alleged ties to China, days before the U.S. government took Mythos and Fable 5 offline for all foreign nationals. This incident highlights escalating U.S. export controls on advanced AI models, directly affecting international partners and raising concerns about national security and global AI access. The trigger for the export controls was a reported technique to bypass Fable 5's safety guardrails, accessing Mythos's advanced cybersecurity capabilities. Anthropic suspended access to both models for all foreign nationals following a U.S. government order.

rss · Tom's Hardware · Jun 19, 10:54

**Background**: Anthropic's Claude Mythos is a powerful AI model with advanced cybersecurity capabilities. Fable 5 is a safeguarded version released to the public. Export controls are government restrictions on the transfer of sensitive technologies to foreign entities, often for national security reasons.

<details><summary>References</summary>
<ul>
<li><a href="https://www.wired.com/story/sk-telecom-anthropic-mythos-export-controls/">The Korean Telecom Giant at the Center of Anthropic’s Mythos Controversy | WIRED</a></li>
<li><a href="https://www.cnet.com/tech/services-and-software/anthropic-claude-fable-mythos-us-export-controls/">Anthropic Pulls Claude Fable and Mythos AI Models After Feds Claim Jailbreak - CNET</a></li>
<li><a href="https://www.forbes.com/sites/anishasircar/2026/06/16/anthropic-disabled-fable-5-and-mythos-5-after-a-us-export-control-order-heres-what-happened/">Anthropic Disabled Fable 5 And Mythos 5 After A U.S. Export-Control Order. Here’s What Happened</a></li>

</ul>
</details>

**Tags**: `#AI`, `#export controls`, `#Anthropic`, `#national security`, `#telecom`

---

<a id="item-6"></a>
## [Tesco removes 40,000 servers from VMware amid Broadcom pricing backlash](https://www.tomshardware.com/desktops/servers/tesco-uk-supermarket-chain-removes-40-000-servers-from-vmware-infrastructure-mass-exodus-continues-due-to-broadcoms-aggressive-subscription-model) ⭐️ 8.0/10

Tesco, a major UK supermarket chain, has removed 40,000 servers from its VMware infrastructure, continuing a mass exodus driven by Broadcom's aggressive subscription pricing model. This migration signals a significant industry trend where large enterprises are abandoning VMware due to cost increases from Broadcom's licensing changes, potentially reshaping the virtualization market. The migration involves 40,000 servers, making it one of the largest known VMware exits. Tesco likely moved to alternative virtualization platforms such as KVM-based solutions or cloud infrastructure.

rss · Tom's Hardware · Jun 19, 10:00

**Background**: Broadcom acquired VMware in November 2023 and quickly transitioned its licensing from perpetual to subscription-only, significantly increasing costs for many customers. The new model bundles products into VMware Cloud Foundation with per-core pricing, forcing enterprises to reassess their virtualization strategies. Alternatives like open-source KVM and Proxmox have gained traction as cost-effective replacements.

<details><summary>References</summary>
<ul>
<li><a href="https://news.broadcom.com/cloud/vmware-by-broadcom-business-transformation">VMware by Broadcom Dramatically Simplifies Offer Lineup and ...</a></li>
<li><a href="https://www.virtualizationhowto.com/2025/07/the-great-vmware-exodus-real-migration-stories-and-alternatives-for-2025/">The Great VMware Exodus, Real Migration Stories and ...</a></li>
<li><a href="https://redresscompliance.com/broadcom-vmware-licensing-changes-explained">Broadcom VMware Licensing 2026: Costs, Tiers, Renewals | Redress</a></li>

</ul>
</details>

**Tags**: `#VMware`, `#Broadcom`, `#enterprise infrastructure`, `#cloud migration`, `#IT cost optimization`

---

<a id="item-7"></a>
## [IETF Publishes RFC 10008 for New HTTP QUERY Method](https://www.ithome.com/0/966/439.htm) ⭐️ 8.0/10

The IETF has published RFC 10008, defining the new HTTP QUERY method as a proposed standard. This method allows safe, idempotent read-only requests with a request body, filling a gap between GET and POST. This standard provides API designers with a semantically correct way to handle complex queries without misusing POST, improving clarity and interoperability. It also enables caching and automatic retries for such requests, benefiting web developers and service reliability. The QUERY method is defined as safe and idempotent, similar to GET, but allows a request body like POST. It introduces the Accept-Query response header and supports caching, conditional requests, and range requests.

rss · IT之家 · Jun 19, 15:16

**Background**: HTTP methods like GET and POST have well-defined semantics: GET is for safe, idempotent data retrieval without a body, while POST is for non-idempotent actions that may change server state. For complex queries that require a request body, developers previously had to use POST, which violates its semantics. The QUERY method resolves this by providing a standardized way to send read-only queries with a body.

<details><summary>References</summary>
<ul>
<li><a href="https://www.rfc-editor.org/info/rfc10008/">RFC 10008: The HTTP QUERY Method | RFC Editor</a></li>
<li><a href="https://www.rfc-editor.org/rfc/rfc10008.html">RFC 10008: The HTTP QUERY Method</a></li>

</ul>
</details>

**Tags**: `#HTTP`, `#IETF`, `#API design`, `#web standards`, `#RFC`

---

<a id="item-8"></a>
## [Yuanxin Satellite Achieves First Unmodified Phone-to-Satellite Call in China](https://www.ithome.com/0/966/433.htm) ⭐️ 8.0/10

On June 19, 2026, Yuanxin Satellite announced the successful completion of China's first direct-to-satellite voice call using an unmodified commercial smartphone, with call quality comparable to terrestrial 5G. This breakthrough demonstrates that existing smartphones can directly connect to satellites without hardware modifications, paving the way for ubiquitous satellite communication and integration with 5G/6G networks. It positions China's Qianfan constellation as a key player in the global satellite internet race. The test used Yuanxin's first direct-to-cell experimental satellite launched on June 9, 2026, which carries a domestically developed L-band full-digital phased array antenna with leading aperture and element count. The system employs a two-stage time-frequency offset compensation scheme and dynamic adaptive coding rate adjustment to overcome large Doppler shifts and uplink bottlenecks.

rss · IT之家 · Jun 19, 14:37

**Background**: Direct-to-cell satellite communication allows standard smartphones to connect to satellites without specialized hardware, enabling coverage in remote areas. Yuanxin Satellite operates the Qianfan constellation, a low Earth orbit (LEO) satellite internet project aiming to deploy over 15,000 satellites. The constellation is planned in three phases: 648 satellites for regional coverage, 1,296 for global coverage, and ultimately over 15,000 for diverse services.

<details><summary>References</summary>
<ul>
<li><a href="https://finance.sina.com.cn/tech/roll/2025-02-07/doc-ineisatw0467975.shtml">上海 垣 信 卫 星 千 帆 星 座 成功“出海”马来西亚_新浪科技_新浪网</a></li>
<li><a href="https://m.huanqiu.com/article/4Iv4Snfpwlz">迈出重要一步！ 国产低轨互联网“ 千 帆 星 座 ”成功首发 | 环球网</a></li>
<li><a href="https://36kr.com/p/3728478035669507">资产破百亿、营收仅百万， 垣 信 卫 星 靠什么撑起高估值？ -36氪</a></li>

</ul>
</details>

**Tags**: `#satellite communication`, `#direct-to-cell`, `#5G`, `#6G`, `#China`

---

<a id="item-9"></a>
## [AltStore PAL Launches in Brazil as Apple Opens iOS](https://9to5mac.com/2026/06/18/altstore-pal-now-available-in-brazil-as-apple-flips-the-switch-on-alternative-marketplaces/) ⭐️ 7.0/10

AltStore PAL, an alternative app marketplace, is now available for iPhone users in Brazil following Apple's decision to enable third-party app stores and alternative payment processing in the country as of June 18, 2026. This expansion marks a significant shift in Apple's app distribution monopoly, potentially lowering barriers for developers and increasing competition in Brazil's iOS ecosystem, similar to changes in the EU and Japan. AltStore PAL was previously only available in the EU and Japan; it is an open-source app store focused on independent developers. Apple has warned that alternative marketplaces could introduce new security risks.

rss · 9to5Mac · Jun 19, 00:09

**Background**: Apple has historically maintained strict control over iOS app distribution through its official App Store. However, regulatory pressure from the EU, Japan, and now Brazil has forced Apple to allow alternative app marketplaces and third-party payment systems, following antitrust agreements.

<details><summary>References</summary>
<ul>
<li><a href="https://altstore.io/">AltStore</a></li>
<li><a href="https://www.ithinkdiff.com/apple-alternative-app-marketplaces-brazil-ios-26-5/">Apple Opens iOS to Alternative App Marketplaces in Brazil Today</a></li>
<li><a href="https://techgolly.com/news/apple-opens-ios-to-alternative-app-stores-in-brazil-following-antitrust-agreement">Apple Opens iOS to Alternative App Stores in Brazil Following ...</a></li>

</ul>
</details>

**Tags**: `#Apple`, `#AltStore`, `#App Store`, `#Brazil`, `#Regulation`

---

<a id="item-10"></a>
## [MCP's Key Value: Isolating Auth from Agent Context](https://simonwillison.net/2026/Jun/19/sean-lynch/#atom-everything) ⭐️ 7.0/10

Sean Lynch argues that the Model Context Protocol (MCP) offers a unique advantage over skills/CLI by isolating authentication flows outside the agent's context window, potentially serving as a dedicated auth gateway for APIs. This perspective reframes MCP's value proposition, highlighting security and architectural benefits that could influence how AI agents interact with external services, reducing token consumption and attack surface. Lynch suggests that the idealized form of MCP might be nothing more than an auth gateway for APIs, which would still be a win. This contrasts with the typical view of MCP as a tool-use protocol.

rss · Simon Willison · Jun 19, 22:45

**Background**: The Model Context Protocol (MCP) is an open standard introduced by Anthropic in November 2024 for standardizing how AI systems integrate with external tools and data. Traditional approaches like skills/CLI embed authentication within the agent's context, consuming tokens and exposing credentials. MCP's architecture allows auth to be handled externally, reducing complexity and improving security.

<details><summary>References</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Model_Context_Protocol">Model Context Protocol - Wikipedia</a></li>
<li><a href="https://arize.com/blog/mcp-vs-cli-skills-for-agents-what-our-eval-found-and-which-you-should-use/">MCP vs . CLI Skills for agents: what our eval found... - Arize AI</a></li>
<li><a href="https://github.com/microsoft/mcp-gateway">GitHub - microsoft/mcp-gateway: MCP Gateway is a reverse ...</a></li>

</ul>
</details>

**Discussion**: The Hacker News discussion highlights Lynch's comment as a novel insight, with some users agreeing that auth isolation is an underappreciated benefit of MCP. Others debate whether MCP's complexity outweighs its advantages for simple use cases.

**Tags**: `#model-context-protocol`, `#llms`, `#ai`, `#authentication`, `#agent-architecture`

---

<a id="item-11"></a>
## [Apple Explains Why watchOS 27 Drops Five Models](https://www.macrumors.com/2026/06/19/apple-explains-why-watchos-27-drops-support/) ⭐️ 6.0/10

Apple announced that watchOS 27 will not support the Apple Watch Series 6, 7, 8, SE 2, and original Ultra, dropping three years of device support in a single update. Apple executives cited performance requirements for new Siri AI features and a new tap gesture as the reason. This is the largest single drop in Apple Watch support, affecting millions of users and signaling a shift toward requiring newer hardware for AI-driven features. It may accelerate upgrade cycles and raise concerns about planned obsolescence. The affected models will still receive basic security updates and remain functional when paired with an iPhone running the latest iOS. watchOS 27 is currently in developer beta, with a public beta expected next month and a fall release.

rss · MacRumors · Jun 19, 13:07

**Background**: Apple Watch models typically receive major watchOS updates for about 5-6 years. The Series 6 launched in 2020, making it 6 years old, but dropping the Series 7 (2021), Series 8 (2022), SE 2 (2022), and original Ultra (2022) is unprecedented. The new Siri AI features require the S9 or later chip for on-device processing.

<details><summary>References</summary>
<ul>
<li><a href="https://talk.macpowerusers.com/t/watchos-27-drops-support-for-apple-watch-series-9-ultra-1-se-2-and-older/45784">WatchOS 27 Drops Support for Apple Watch Series 9, Ultra 1, SE 2, and ...</a></li>

</ul>
</details>

**Tags**: `#Apple Watch`, `#watchOS`, `#software support`, `#Siri AI`

---