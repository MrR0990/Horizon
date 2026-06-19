---
layout: default
title: "Horizon Summary: 2026-06-19 (EN)"
date: 2026-06-19
lang: en
---

> From 27 items, 15 important content pieces were selected

---

1. [Project Valhalla Arrives in JDK 28 After a Decade](#item-1) ⭐️ 9.0/10
2. [Zero-Touch OAuth for MCP Enhances Enterprise AI Security](#item-2) ⭐️ 8.0/10
3. [Markets Fail to Value Social Goods](#item-3) ⭐️ 8.0/10
4. [Merkle Tree Certificates Boost Internet Speed and Security](#item-4) ⭐️ 8.0/10
5. [Postgres 19 Beta: New Features Deep Dive](#item-5) ⭐️ 8.0/10
6. [Datasette Apps: Sandboxed HTML/JS Apps with SQL Queries](#item-6) ⭐️ 7.0/10
7. [Datasette ACL 0.6a0 Expands to General Resource Sharing](#item-7) ⭐️ 7.0/10
8. [Old Software Was Fast Due to Hardware Limits](#item-8) ⭐️ 7.0/10
9. [Draft Chapter on CPU Cycle Costs for C++](#item-9) ⭐️ 7.0/10
10. [How to Deadlock a Java ExecutorService](#item-10) ⭐️ 7.0/10
11. [Best Practices for Defining Well-Known URIs](#item-11) ⭐️ 6.0/10
12. [AirPods and the New Social Isolation](#item-12) ⭐️ 6.0/10
13. [Build Your Own Vulnerability Harness](#item-13) ⭐️ 6.0/10
14. [Rethinking Modularity in Ruby Apps](#item-14) ⭐️ 6.0/10
15. [PostgreSQL Modern Indexing: B-tree, io_uring, and TID](#item-15) ⭐️ 6.0/10

---

<a id="item-1"></a>
## [Project Valhalla Arrives in JDK 28 After a Decade](https://www.reddit.com/r/programming/comments/1u9eu8s/project_valhalla_explained_how_a_decade_of_work/) ⭐️ 9.0/10

Project Valhalla, a long-running effort to add value types and primitive objects to Java, has culminated in JDK 28, enabling the JVM to store objects inline without heap indirection. This fundamentally improves Java's memory layout and performance, allowing developers to write high-level abstractions that match the efficiency of primitive types, which is critical for data-intensive and low-latency applications. Value types (primitive classes) are immutable and identity-free, enabling flattening in arrays and fields; however, heap flattening is limited to objects with 64-bit or smaller representations, as noted in community discussion.

reddit · r/programming · /u/CrowSufficient · Jun 18, 18:49

**Background**: Java has long distinguished between primitive types (int, double) and reference types (objects), with objects incurring overhead from headers and indirection. Project Valhalla bridges this gap by allowing user-defined value types that behave like primitives but retain object-like abstraction, improving cache locality and reducing garbage collection pressure.

<details><summary>References</summary>
<ul>
<li><a href="https://openjdk.org/projects/valhalla/">Project Valhalla - OpenJDK</a></li>
<li><a href="https://www.javaspring.net/blog/java-project-valhalla/">Java Project Valhalla: Revolutionizing Java with Value Types</a></li>
<li><a href="https://jdk.java.net/28/">OpenJDK JDK 28 Early-Access Builds</a></li>

</ul>
</details>

**Discussion**: Comments show mixed reactions: some praise the technical achievement and future JEPs, while others criticize the complexity and note that null-safety debates remain unresolved. A user also questions how to keep up with rapid JDK releases.

**Tags**: `#Java`, `#Project Valhalla`, `#JVM`, `#Performance`, `#Programming Languages`

---

<a id="item-2"></a>
## [Zero-Touch OAuth for MCP Enhances Enterprise AI Security](https://blog.modelcontextprotocol.io/posts/enterprise-managed-auth/) ⭐️ 8.0/10

Anthropic, in partnership with Okta, Microsoft, Figma, and Linear, has introduced Zero-Touch OAuth for the Model Context Protocol (MCP), a standardized authentication flow that isolates auth outside the agent's context window. This addresses a critical security and user experience bottleneck for enterprise AI tool adoption, enabling centralized provisioning and eliminating per-app OAuth configuration for end users. The feature is powered by a new token format called ID-JAG (Identity-Justified Assertion Grant), which is not MCP-specific and can be used for secure data sharing across applications sharing the same SSO provider.

hackernews · niyikiza · Jun 18, 21:54 · [Discussion](https://news.ycombinator.com/item?id=48592163)

**Background**: The Model Context Protocol (MCP) is an open standard introduced by Anthropic in November 2024 to standardize how AI systems integrate with external tools and data sources. Traditional MCP authorization required per-user OAuth flows, creating high friction for enterprise deployment.

<details><summary>References</summary>
<ul>
<li><a href="https://yavchn.parkscomputing.com/hn/s/48592163">Zero-Touch OAuth for MCP · YAVCHN</a></li>
<li><a href="https://en.wikipedia.org/wiki/Model_Context_Protocol">Model Context Protocol - Wikipedia</a></li>
<li><a href="https://modelcontextprotocol.io/docs/getting-started/intro">What is the Model Context Protocol (MCP)?</a></li>

</ul>
</details>

**Discussion**: Community members praised the collaboration across companies like Okta and Microsoft, noting that the ID-JAG token format has broader applicability beyond MCP. Some developers expressed frustration with current Microsoft Entra ID auth implementation for MCP, but overall sentiment is positive.

**Tags**: `#OAuth`, `#MCP`, `#AI agents`, `#authentication`, `#enterprise`

---

<a id="item-3"></a>
## [Markets Fail to Value Social Goods](https://wilsoniumite.com/2026/06/19/the-room-the-economy-cant-see/) ⭐️ 8.0/10

An essay argues that markets systematically undervalue essential social goods like community and mental health, highlighting a fundamental market failure. This critique challenges the default assumption that markets optimize social welfare, prompting a re-evaluation of economic priorities and the role of non-market spaces. The essay introduces the concept of 'wealth-weighted value' to explain why markets ignore benefits that cannot be monetized, such as reducing loneliness among teenagers.

hackernews · Wilsoniumite · Jun 19, 10:16 · [Discussion](https://news.ycombinator.com/item?id=48596911)

**Background**: Market failures occur when free markets do not allocate resources efficiently, often ignoring externalities or public goods. Social goods like community cohesion have no price, so markets underprovide them, leading to societal costs.

**Discussion**: Commenters emphasize the importance of 'slack'—time and resources free from market pressure—for fostering social goods, and note that economic value is inherently wealth-weighted, favoring the wealthy.

**Tags**: `#economics`, `#market failures`, `#social goods`, `#society`, `#critique`

---

<a id="item-4"></a>
## [Merkle Tree Certificates Boost Internet Speed and Security](https://www.reddit.com/r/programming/comments/1u9czhg/keeping_the_internet_fast_and_secure_introducing/) ⭐️ 8.0/10

A new certificate format called Merkle Tree Certificates (MTCs) has been proposed to integrate public logging of certificates, reducing their size and verification overhead while enabling efficient post-quantum cryptography. This innovation could significantly improve TLS/SSL performance and security, making the internet faster and more resilient against quantum computing threats, affecting all HTTPS users and certificate authorities. Merkle Tree Certificates are described in an IETF draft (draft-davidben-tls-merkle-tree-certs-06) and aim to replace traditional X.509 certificates by embedding Certificate Transparency logs directly into the certificate structure.

reddit · r/programming · /u/CircumspectCapybara · Jun 18, 17:41

**Background**: Certificate Transparency (CT) is a standard that requires public logging of TLS certificates to detect mis-issuance. Traditional X.509 certificates can be large, especially with post-quantum signatures, causing performance issues. Merkle Tree Certificates address this by using Merkle trees to compactly represent certificate chains and logs.

<details><summary>References</summary>
<ul>
<li><a href="https://www.ietf.org/ietf-ftp/internet-drafts/draft-davidben-tls-merkle-tree-certs-06.html">Merkle Tree Certificates</a></li>
<li><a href="https://en.wikipedia.org/wiki/Certificate_Transparency">Certificate Transparency</a></li>
<li><a href="https://www.encryptionconsulting.com/about-merkle-tree-certificates/">Merkle Tree Certificates : Rethinking the... | Encryption Consulting</a></li>

</ul>
</details>

**Tags**: `#cryptography`, `#TLS`, `#certificate transparency`, `#internet security`, `#Merkle tree`

---

<a id="item-5"></a>
## [Postgres 19 Beta: New Features Deep Dive](https://www.reddit.com/r/programming/comments/1u9aktp/whats_new_in_postgres_19_beta_release_deep_dive/) ⭐️ 8.0/10

The Postgres 19 beta release introduces several new features including improved performance for parallel queries, enhanced logical replication, and better support for JSON data types. This release is significant for PostgreSQL users as it brings performance and usability improvements that can benefit large-scale applications and real-time data processing. The beta includes incremental sorting improvements and new SQL/JSON constructor functions, but some features may change before the final release.

reddit · r/programming · /u/craigkerstiens · Jun 18, 16:12

**Background**: PostgreSQL is a powerful open-source relational database system. The beta release allows the community to test new features and provide feedback before the stable version.

**Discussion**: The Reddit discussion highlights excitement about the new JSON features and performance gains, with some users expressing caution about beta stability.

**Tags**: `#PostgreSQL`, `#database`, `#release`, `#beta`, `#open source`

---

<a id="item-6"></a>
## [Datasette Apps: Sandboxed HTML/JS Apps with SQL Queries](https://simonwillison.net/2026/Jun/18/datasette-apps/#atom-everything) ⭐️ 7.0/10

Datasette released a new plugin, datasette-apps, that allows users to host custom HTML+JavaScript applications inside a sandboxed iframe, with the ability to execute read-only and optionally write SQL queries against the underlying data. This plugin transforms Datasette from a data exploration tool into a platform for building custom data-driven web applications, enabling users to create interactive dashboards and tools without leaving the Datasette ecosystem. Apps run in an iframe with sandbox="allow-scripts allow-forms" and an injected CSP header that blocks outbound HTTP requests, preventing data exfiltration. Write queries are only allowed via pre-configured stored queries, not arbitrary SQL.

rss · Simon Willison · Jun 18, 23:58 · [Discussion](https://news.ycombinator.com/item?id=48593731)

**Background**: Datasette is an open-source tool for exploring and publishing data, often used by data journalists and researchers. It provides a JSON API for custom frontends, but previously required separate hosting for custom HTML/JS apps. This plugin integrates those apps directly into Datasette, inspired by Claude Artifacts and the author's earlier vibe-coded HTML tools.

<details><summary>References</summary>
<ul>
<li><a href="https://simonwillison.net/2026/Jun/18/datasette-apps/">Datasette Apps: Host custom HTML applications inside Datasette</a></li>
<li><a href="https://datasette.io/plugins">Datasette Plugins</a></li>
<li><a href="https://web.dev/articles/sandboxed-iframes">Play safely in sandboxed IFrames | Articles | web.dev</a></li>

</ul>
</details>

**Discussion**: Commenters noted parallels with other projects like Motherduck's "dives" and Louie.ai's patterns, suggesting a trend toward user-defined UIs over databases. Some raised concerns about the write restriction being honor-based if app authors can create their own stored queries.

**Tags**: `#datasette`, `#plugin`, `#sql`, `#web-applications`, `#sandbox`

---

<a id="item-7"></a>
## [Datasette ACL 0.6a0 Expands to General Resource Sharing](https://simonwillison.net/2026/Jun/18/datasette-acl/#atom-everything) ⭐️ 7.0/10

Datasette ACL 0.6a0, released on June 18, 2026, expands from table-only permissions to a general resource-sharing system for multi-user Datasette instances. This release significantly enhances multi-user access control in Datasette, enabling fine-grained permissions across various resources, which is crucial for collaborative data platforms. The plugin requires Datasette 1.0a15 or higher and is under active development; permissions are saved in the internal database.

rss · Simon Willison · Jun 18, 19:03

**Background**: Datasette is an open-source tool for exploring and publishing data. The datasette-acl plugin provides advanced permission management, previously limited to table-level control. This alpha release marks a step toward broader resource-level access control.

<details><summary>References</summary>
<ul>
<li><a href="https://github.com/datasette/datasette-acl">GitHub - datasette/datasette-acl: Advanced permission ...</a></li>
<li><a href="https://pypi.org/project/datasette-acl/">datasette-acl · PyPI</a></li>
<li><a href="https://simonwillison.net/2026/Jun/18/datasette-acl/">Release: datasette -acl 0.6a0 | Simon Willison’s Weblog</a></li>

</ul>
</details>

**Tags**: `#datasette`, `#access-control`, `#plugin`, `#release`

---

<a id="item-8"></a>
## [Old Software Was Fast Due to Hardware Limits](https://www.reddit.com/r/programming/comments/1ua2lxq/old_software_was_fast_because_it_had_no_choice/) ⭐️ 7.0/10

A Reddit post argues that older software was faster because hardware limitations forced developers to write efficient code, while modern software prioritizes features and developer productivity over performance. This perspective highlights a fundamental trade-off in software engineering between performance and development speed, resonating with many developers who feel modern applications are bloated. The post does not provide specific benchmarks but relies on anecdotal evidence from developers who recall faster load times and responsiveness in older software like early word processors or operating systems.

reddit · r/programming · /u/BlondieCoder · Jun 19, 13:52

**Background**: In the early days of computing, hardware resources like CPU speed, memory, and storage were extremely limited. Developers had to write highly optimized code to make software usable, often using assembly language or careful algorithms. Today, with powerful hardware, developers can use high-level languages and frameworks that prioritize ease of development and feature richness, sometimes at the cost of performance.

**Discussion**: The Reddit discussion is active, with many users agreeing that modern software is bloated, but some argue that the trade-off is worth it for faster development and more features. Others point out that not all old software was fast; some was just as slow due to poor design.

**Tags**: `#software engineering`, `#performance`, `#history`, `#efficiency`

---

<a id="item-9"></a>
## [Draft Chapter on CPU Cycle Costs for C++](https://www.reddit.com/r/programming/comments/1u9yk1j/efficient_c_programming_for_modern_c_cpus_chapter/) ⭐️ 7.0/10

The authors released the second part of Chapter 4 from their upcoming book 'Efficient C++ Programming for Modern 64-bit CPUs', featuring infographics on operation costs in clock cycles and micro-research on MUL/DIV progress since 2017. This content provides rare, detailed data on CPU cycle costs, helping C++ developers understand low-level performance and avoid common pessimizations, which is crucial for writing efficient code on modern CPUs. The chapter is a very draft version and focuses on 'de-pessimizations' rather than optimizations, with the authors actively seeking community feedback to fix issues. It includes a visualization of operation times that many readers requested.

reddit · r/programming · /u/no-bugs · Jun 19, 10:40

**Background**: In C++ performance, 'pessimization' refers to writing code that is slower than necessary, often due to unawareness of CPU behavior. The book aims to teach de-pessimization as a prerequisite to optimization, complementing Denis Bakhvalov's book on performance analysis.

<details><summary>References</summary>
<ul>
<li><a href="https://github.com/dendibakh/perf-book">GitHub - dendibakh/perf- book : The book " Performance Analysis and..."</a></li>
<li><a href="https://stackoverflow.com/questions/32618848/what-is-pessimization">c++ - What is pessimization ? - Stack Overflow</a></li>

</ul>
</details>

**Tags**: `#C++`, `#performance`, `#CPU`, `#optimization`, `#low-level`

---

<a id="item-10"></a>
## [How to Deadlock a Java ExecutorService](https://www.reddit.com/r/programming/comments/1u9wq7z/how_to_deadlock_a_java_executorservice/) ⭐️ 7.0/10

A Reddit post explains how improper use of Java's ExecutorService, such as submitting a task that waits for another task in the same thread pool, can cause a deadlock. This is significant because ExecutorService is widely used in Java applications, and such deadlocks are subtle and hard to debug, potentially causing production outages. A common scenario is using a single-threaded executor where an outer task calls get() on a future from an inner task submitted to the same executor, causing the thread to block forever.

reddit · r/programming · /u/mlangc · Jun 19, 08:54

**Background**: ExecutorService manages a pool of threads to execute tasks asynchronously. A deadlock occurs when two or more threads are blocked waiting for each other to release resources. In thread pools, a self-induced deadlock can happen if a task waits for another task that cannot run because all threads are occupied.

<details><summary>References</summary>
<ul>
<li><a href="https://dzone.com/articles/thread-pool-self-induced-deadlocks">Thread Pool Self-Induced Deadlocks</a></li>
<li><a href="https://nurkiewicz.com/2018/09/thread-pool-self-induced-deadlocks.html">Thread pool self-induced deadlocks - Tomasz Nurkiewicz</a></li>
<li><a href="https://howtodoinjava.com/java/multi-threading/writing-a-deadlock-and-resolving-in-java/">How to Create a Deadlock and Solve in Java</a></li>

</ul>
</details>

**Tags**: `#Java`, `#Concurrency`, `#Deadlock`, `#ExecutorService`

---

<a id="item-11"></a>
## [Best Practices for Defining Well-Known URIs](https://mnot.net/blog/2026/well_known_uris) ⭐️ 6.0/10

A technical blog post by Mark Nottingham explains the purpose and best practices for defining well-known URIs under the /.well-known/ path, as specified in RFC 8615. This matters because adhering to the /.well-known/ convention prevents pollution of the root namespace and ensures standardized service discovery across the web. The post highlights common pitfalls, such as defining multiple well-known URIs on the same domain, and emphasizes that the /.well-known/ path should be used for standardized, machine-readable resources.

hackernews · ingve · Jun 19, 06:05 · [Discussion](https://news.ycombinator.com/item?id=48595331)

**Background**: Well-known URIs are defined by RFC 8615 as a reserved path prefix (/.well-known/) for standardized locations on web servers. They enable applications to reliably discover configuration or metadata, such as security.txt or OpenID Connect discovery documents, without needing custom paths.

<details><summary>References</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Well-known_URI">Well-known URI - Wikipedia</a></li>
<li><a href="https://datatracker.ietf.org/doc/html/rfc8615">RFC 8615 - Well-Known Uniform Resource Identifiers (URIs)</a></li>
<li><a href="https://www.authgear.com/post/well-known-openid-configuration/">What Is .well-known/openid-configuration? A Developer's Guide</a></li>

</ul>
</details>

**Discussion**: Community comments are mixed: some appreciate the reminder to avoid root namespace pollution, citing examples like 'llms.txt', while others criticize the post for lacking substance and real recommendations. There is also a note about the /.well-known/ path becoming a 'junk drawer' for various standards.

**Tags**: `#URI`, `#web standards`, `#HTTP`, `#best practices`

---

<a id="item-12"></a>
## [AirPods and the New Social Isolation](https://www.theescapenewsletter.com/p/the-airpods-effect) ⭐️ 6.0/10

An article titled 'The AirPods Effect' examines how wireless earbuds like AirPods are changing social interactions by enabling selective isolation in public spaces. This matters because it highlights a cultural shift where technology is used to manage social discomfort in urban environments, potentially affecting how people connect with each other and their surroundings. The article scores 6.0/10 for cultural commentary but sparked high engagement with 220 points and 396 comments, indicating strong public interest in the topic.

hackernews · herbertl · Jun 18, 23:08 · [Discussion](https://news.ycombinator.com/item?id=48592832)

**Background**: AirPods and similar wireless earbuds have become ubiquitous in public spaces, allowing users to listen to audio or simply block out noise. This has led to discussions about whether they encourage social withdrawal or provide necessary relief from overwhelming urban stimuli.

**Discussion**: Commenters noted that earbuds help normalize unnatural urban environments by reducing noise, and some pointed out that missing out on daydreaming time (default mode network) is a bigger concern. One user recalled that early white headphones actually increased social interactions due to novelty.

**Tags**: `#social commentary`, `#technology and society`, `#urban living`, `#audio`

---

<a id="item-13"></a>
## [Build Your Own Vulnerability Harness](https://www.reddit.com/r/programming/comments/1u9z8i8/build_your_own_vulnerability_harness/) ⭐️ 6.0/10

A Reddit post discusses building a vulnerability harness for automated security testing, referencing Cloudflare's blog post on the topic. This approach enables developers to integrate vulnerability discovery directly into their CI/CD pipelines, improving security posture without manual effort. The harness includes stages like recon, find, verify, report, and patch, and uses LLMs to manage state and triage false positives.

reddit · r/programming · /u/CircumspectCapybara · Jun 19, 11:17

**Background**: A vulnerability harness is an automated pipeline that scans code for security flaws, triages findings, and suggests patches. It helps teams scale security testing across large codebases.

<details><summary>References</summary>
<ul>
<li><a href="https://blog.cloudflare.com/build-your-own-vulnerability-harness/">Build your own vulnerability harness</a></li>
<li><a href="https://github.com/anthropics/defending-code-reference-harness">GitHub - anthropics/defending-code-reference-harness: Skills for threat modeling, scanning, triage, patching, plus an autonomous scanning harness you can /customize · GitHub</a></li>

</ul>
</details>

**Tags**: `#security`, `#vulnerability`, `#harness`, `#programming`

---

<a id="item-14"></a>
## [Rethinking Modularity in Ruby Apps](https://www.reddit.com/r/programming/comments/1u9x6ur/rethinking_modularity_in_ruby_applications/) ⭐️ 6.0/10

A Reddit post initiated a discussion on new approaches to modularity in Ruby applications, challenging traditional design patterns. This discussion matters because modularity directly impacts code maintainability, scalability, and team collaboration in Ruby projects. The post does not specify a particular technique but invites the community to share experiences and opinions on modular design in Ruby.

reddit · r/programming · /u/noteflakes · Jun 19, 09:21

**Background**: Modularity in software refers to dividing a system into separate, interchangeable components. In Ruby, common modularity patterns include modules, classes, and gems, but larger applications often face challenges with coupling and cohesion.

**Discussion**: The community discussion is not available in the provided content, so no summary can be given.

**Tags**: `#Ruby`, `#modularity`, `#software design`, `#programming`

---

<a id="item-15"></a>
## [PostgreSQL Modern Indexing: B-tree, io_uring, and TID](https://www.reddit.com/r/programming/comments/1u9adv5/how_modern_indexing_works_in_postgresql_in_depth/) ⭐️ 6.0/10

A Reddit post explains how PostgreSQL indexing works internally, covering B-tree structures, the use of io_uring for asynchronous I/O, file structure with line pointers and tuple IDs (TID), and optimizations like binary search on leaf pages. Understanding these internals helps developers and DBAs optimize query performance and storage efficiency, especially as PostgreSQL adopts modern I/O methods like io_uring to reduce latency. PostgreSQL stores each index in a separate file, unlike MySQL's clustered indexes. The index file contains line pointers and TIDs that directly map to the physical location of rows on disk, enabling fast direct record retrieval.

reddit · r/programming · /u/Ok_Stomach6651 · Jun 18, 16:05

**Background**: Indexing in databases typically uses B-tree structures to enable fast lookups. PostgreSQL enhances this by using io_uring, a Linux kernel interface for asynchronous I/O, to reduce blocking during disk reads. The index file is organized into pages, with page 0 storing range information to quickly locate the relevant leaf page, where binary search finds the exact TID.

<details><summary>References</summary>
<ul>
<li><a href="https://www.phoronix.com/news/PostgreSQL-Lands-IO_uring">PostgreSQL Database Lands Initial Support For IO_uring: "Can Be Considerably Faster" - Phoronix</a></li>
<li><a href="https://internals-for-interns.com/posts/postgres-indexes/">The Indexes | Internals for Interns</a></li>
<li><a href="https://dlt.github.io/blog/posts/introduction-to-postgresql-indexes/">Introduction to PostgreSQL Indexes :: explain, analyze</a></li>

</ul>
</details>

**Tags**: `#PostgreSQL`, `#database indexing`, `#B-tree`, `#io_uring`, `#storage engines`

---