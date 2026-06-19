---
layout: default
title: "Horizon Summary: 2026-06-19 (EN)"
date: 2026-06-19
lang: en
---

> From 27 items, 15 important content pieces were selected

---

1. [Project Valhalla Arrives in JDK 28 After a Decade](#item-1) ⭐️ 9.0/10
2. [Postgres 19 Beta: Key Features and Changes](#item-2) ⭐️ 9.0/10
3. [Zero-Touch OAuth for MCP Standardizes AI Agent Auth](#item-3) ⭐️ 8.0/10
4. [Datasette Apps: Host Sandboxed HTML/JS Apps Inside Datasette](#item-4) ⭐️ 8.0/10
5. [Essay Argues Profit Motive Misses Social Value](#item-5) ⭐️ 8.0/10
6. [Merkle Tree Certificates Boost Internet Speed and Security](#item-6) ⭐️ 8.0/10
7. [Guide to Defining Well-Known URIs Under .well-known](#item-7) ⭐️ 7.0/10
8. [Old Software Was Fast Due to Hardware Limits](#item-8) ⭐️ 7.0/10
9. [C++ Book Draft: CPU Cycle Costs for MUL/DIV](#item-9) ⭐️ 7.0/10
10. [How to Deadlock a Java ExecutorService](#item-10) ⭐️ 7.0/10
11. [PostgreSQL Modern Indexing: io_uring, Binary Search, TIDs](#item-11) ⭐️ 7.0/10
12. [AirPods and Social Isolation in Cities](#item-12) ⭐️ 6.0/10
13. [Datasette ACL 0.6a0 Expands to General Resource Sharing](#item-13) ⭐️ 6.0/10
14. [Build Your Own Vulnerability Harness](#item-14) ⭐️ 6.0/10
15. [Rethinking Modularity in Ruby Apps](#item-15) ⭐️ 6.0/10

---

<a id="item-1"></a>
## [Project Valhalla Arrives in JDK 28 After a Decade](https://www.reddit.com/r/programming/comments/1u9eu8s/project_valhalla_explained_how_a_decade_of_work/) ⭐️ 9.0/10

Project Valhalla introduces value classes and primitive objects to Java in JDK 28, enabling the JVM to store data by value instead of by reference for significant performance gains. This is a paradigm shift for Java, offering C-like memory efficiency and performance for data-intensive applications while maintaining Java's safety guarantees. Value classes give up object identity, so == compares by components; heap flattening is limited to objects with 64-bit or smaller representations, as noted in community discussion.

reddit · r/programming · /u/CrowSufficient · Jun 18, 18:49

**Background**: In traditional Java, every object is a reference type, requiring heap allocation, headers, and pointer indirection. Project Valhalla introduces value types that can be stored inline in arrays and fields, reducing memory footprint and cache misses.

<details><summary>References</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Project_Valhalla_(Java_language)">Project Valhalla (Java language) - Wikipedia</a></li>
<li><a href="https://openjdk.org/jeps/401">JEP 401: Value Classes and Objects (Preview)</a></li>
<li><a href="https://dev.to/adaumircosta/understanding-value-types-project-valhalla-faf">Understanding Value Types (Project Valhalla) - DEV Community</a></li>

</ul>
</details>

**Discussion**: Comments express mixed sentiment: some appreciate the hard work but criticize the complexity and limitations (e.g., no heap flattening for >64-bit objects), while others defend the project's progress and note Java's catch-up after Oracle's neglect.

**Tags**: `#Java`, `#Project Valhalla`, `#JVM`, `#performance`, `#programming languages`

---

<a id="item-2"></a>
## [Postgres 19 Beta: Key Features and Changes](https://www.reddit.com/r/programming/comments/1u9aktp/whats_new_in_postgres_19_beta_release_deep_dive/) ⭐️ 9.0/10

The Postgres 19 beta release introduces several new features including improved performance for parallel queries, enhanced logical replication, and new SQL/JSON capabilities. This release is significant for PostgreSQL users as it brings performance improvements and new capabilities that can benefit a wide range of applications, from data analytics to real-time systems. The beta release includes incremental backup support, better memory management for vacuum operations, and extended support for the MERGE command.

reddit · r/programming · /u/craigkerstiens · Jun 18, 16:12

**Background**: PostgreSQL is a powerful, open-source object-relational database system with a strong reputation for reliability and extensibility. The 19 beta is a preview of the next major version, allowing the community to test and provide feedback before the final release.

**Tags**: `#PostgreSQL`, `#database`, `#release`, `#beta`, `#open source`

---

<a id="item-3"></a>
## [Zero-Touch OAuth for MCP Standardizes AI Agent Auth](https://blog.modelcontextprotocol.io/posts/enterprise-managed-auth/) ⭐️ 8.0/10

Anthropic, Okta, Microsoft, Figma, and Linear have introduced Zero-Touch OAuth for the Model Context Protocol (MCP), isolating authentication from the agent's context window and leveraging a new token format called ID-JAG (Identity Assertion JWT Authorization Grant) for cross-application data sharing. This addresses a critical security and user experience issue in AI agent tooling by removing the need for agents to handle credentials directly, making enterprise adoption safer and easier. The ID-JAG token format also has broader applicability beyond MCP, enabling secure data sharing across any applications using the same SSO provider. Zero-Touch OAuth is now a stable extension in the MCP specification, and the ID-JAG token format is an IETF draft (draft-ietf-oauth-identity-assertion-jwt-authorization-grant). The authentication flow is isolated from the agent's context window, meaning the agent never sees or handles user credentials.

hackernews · niyikiza · Jun 18, 21:54 · [Discussion](https://news.ycombinator.com/item?id=48592163)

**Background**: The Model Context Protocol (MCP) is an open standard that allows AI agents to connect to tools, data, and services in a standardized way. Previously, authentication for MCP servers often required agents to manage credentials within their context window, creating security risks and poor user experience. OAuth is a widely used authorization framework that allows third-party applications to obtain limited access to a service without exposing user credentials.

<details><summary>References</summary>
<ul>
<li><a href="https://dev.to/kanywst/id-jag-deep-dive-1mhp">ID-JAG Deep Dive - DEV Community</a></li>

</ul>
</details>

**Discussion**: Community members praised the initiative, with one developer noting that isolating auth flow outside the agent's context is valuable for both security and user experience. Another developer shared frustration with implementing Microsoft Entra ID auth for MCP, highlighting the complexity of current auth flows. An Anthropic representative confirmed the feature is now available in Claude and encouraged feedback.

**Tags**: `#OAuth`, `#MCP`, `#AI agents`, `#security`, `#authentication`

---

<a id="item-4"></a>
## [Datasette Apps: Host Sandboxed HTML/JS Apps Inside Datasette](https://simonwillison.net/2026/Jun/18/datasette-apps/#atom-everything) ⭐️ 8.0/10

Datasette Apps is a new plugin that allows users to host self-contained HTML+JavaScript applications inside Datasette, sandboxed via iframe and CSP headers, with read-only SQL queries and optional write queries via stored procedures. This plugin transforms Datasette from a data publishing tool into a platform for building interactive, custom web applications directly on top of SQLite databases, enabling new use cases like internal tools and dashboards without separate backend infrastructure. Apps run in an iframe with sandbox="allow-scripts allow-forms" and an injected CSP header that blocks outbound HTTP requests, preventing data exfiltration. Write queries require pre-configured stored procedures, adding a layer of control.

rss · Simon Willison · Jun 18, 23:58 · [Discussion](https://news.ycombinator.com/item?id=48593731)

**Background**: Datasette is an open-source tool for exploring and publishing data, providing a JSON API and a web interface for SQLite databases. It has a rich plugin ecosystem. The new plugin builds on Datasette's existing JSON API to allow custom HTML/JS frontends to be hosted directly within the same instance.

<details><summary>References</summary>
<ul>
<li><a href="https://datasette.io/blog/2026/datasette-apps/">Host applications inside Datasette with Datasette Apps</a></li>
<li><a href="https://simonwillison.net/2026/Jun/18/datasette-apps/">Datasette Apps: Host custom HTML applications inside Datasette</a></li>

</ul>
</details>

**Discussion**: Commenters noted parallels with other projects like MotherDuck's "dives" and Louie.ai's patterns, and raised concerns about the write security model being honor-based if app authors can define their own stored procedures. Others appreciated the pattern for keeping apps and data co-located.

**Tags**: `#datasette`, `#plugin`, `#web-applications`, `#sql`, `#sandbox`

---

<a id="item-5"></a>
## [Essay Argues Profit Motive Misses Social Value](https://wilsoniumite.com/2026/06/19/the-room-the-economy-cant-see/) ⭐️ 8.0/10

An essay titled 'The room the economy can't see' argues that the profit motive fails to capture essential social goods like community and care, calling for markets to be contained within a broader social superstructure. This critique challenges the default assumption that markets optimize social welfare, highlighting the need to consciously design non-market spaces for social goods. It resonates with ongoing debates about the limits of market economics and the value of unpaid care work. The essay uses the metaphor of a 'room' that the economy cannot see to represent spaces where value is created but not monetized, such as community gathering places. It argues that the profit motive actively discourages investment in such spaces because they generate non-market value.

hackernews · Wilsoniumite · Jun 19, 10:16 · [Discussion](https://news.ycombinator.com/item?id=48596911)

**Background**: The essay is part of a broader critique of neoclassical economics, which often treats market transactions as the primary measure of value. Concepts like 'social value' and 'non-market goods' are central to this critique, drawing on traditions from feminist economics and ecological economics. The piece also touches on the idea of 'slack'—the time and resources freed from market pressures that enable care and community building.

**Discussion**: Commenters largely agree with the essay's thesis, emphasizing the importance of 'slack' and non-market spaces. One user notes that when they had financial security, they could afford to be generous with time and build useful things, but AI-driven market pressures now erode that slack. Another points out that economic value is wealth-weighted, which distorts what is considered valuable.

**Tags**: `#economics`, `#market critique`, `#social value`, `#profit motive`, `#essay`

---

<a id="item-6"></a>
## [Merkle Tree Certificates Boost Internet Speed and Security](https://www.reddit.com/r/programming/comments/1u9czhg/keeping_the_internet_fast_and_secure_introducing/) ⭐️ 8.0/10

A new proposal introduces Merkle Tree Certificates (MTCs) for HTTPS/TLS, which use Merkle trees to enable efficient post-quantum cryptography (PQC) authentication and signatures, improving certificate validation speed and security. This innovation addresses the size and performance challenges of integrating PQC into existing certificate infrastructure, which is critical for protecting internet connections against future quantum computer attacks. Merkle Tree Certificates are X.509 certificates that embed an issuance log entry, allowing verification without the full certificate chain. They are designed to work with the TLS 1.3 protocol and are being standardized in an IETF draft.

reddit · r/programming · /u/CircumspectCapybara · Jun 18, 17:41

**Background**: Traditional X.509 certificates rely on a hierarchical chain of trust, where each certificate is signed by a higher Certificate Authority (CA). Post-quantum cryptography algorithms produce larger signatures and keys, making them inefficient for current certificate validation. Merkle Tree Certificates leverage Merkle trees to aggregate multiple certificates into a single compact proof, reducing bandwidth and computation overhead.

<details><summary>References</summary>
<ul>
<li><a href="https://grokipedia.com/page/Merkle_Tree_Certificates">Merkle Tree Certificates</a></li>
<li><a href="https://www.ietf.org/ietf-ftp/internet-drafts/draft-davidben-tls-merkle-tree-certs-07.xml">Merkle Tree Certificates</a></li>
<li><a href="https://www.linkedin.com/pulse/merkle-tree-certificates-brief-overview-job-couwenberg-hf8qe">Merkle Tree Certificates , a brief overview.</a></li>

</ul>
</details>

**Tags**: `#security`, `#cryptography`, `#web`, `#certificates`, `#Merkle Tree`

---

<a id="item-7"></a>
## [Guide to Defining Well-Known URIs Under .well-known](https://mnot.net/blog/2026/well_known_uris) ⭐️ 7.0/10

Mark Nottingham published a blog post explaining how to properly define well-known URIs under the /.well-known/ path, as specified in RFC 8615, to avoid polluting the root namespace. This matters because many new standards (e.g., llms.txt) incorrectly place resources at the root of a domain, causing namespace pollution and potential conflicts. Following the well-known URI convention ensures consistency and interoperability across web servers. The post emphasizes that the /.well-known/ path is intended for site-wide metadata and should be used for all new standards requiring a fixed URI. It also notes that multiple well-known URIs can coexist on a domain, a point often overlooked.

hackernews · ingve · Jun 19, 06:05 · [Discussion](https://news.ycombinator.com/item?id=48595331)

**Background**: A well-known URI is a Uniform Resource Identifier with a path prefix of /.well-known/, defined by RFC 8615. It provides a standardized location for resources like security.txt, ACME challenges, and app-site-association files, ensuring they are discoverable across different servers.

<details><summary>References</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Well-known_URI">Well-known URI - Wikipedia</a></li>
<li><a href="https://datatracker.ietf.org/doc/html/rfc8615">RFC 8615 - Well-Known Uniform Resource Identifiers (URIs)</a></li>
<li><a href="https://www.keycdn.com/support/well-known">Explaining the Well-Known Path Prefix - KeyCDN Support</a></li>

</ul>
</details>

**Discussion**: Commenters expressed mixed reactions: some praised the post for addressing root namespace pollution (e.g., citing llms.txt as a bad example), while others criticized it as lacking substance and practical examples. One comment noted that .well-known has become a 'junk drawer' for various standards.

**Tags**: `#web standards`, `#URI`, `#HTTP`, `#API design`, `#best practices`

---

<a id="item-8"></a>
## [Old Software Was Fast Due to Hardware Limits](https://www.reddit.com/r/programming/comments/1ua2lxq/old_software_was_fast_because_it_had_no_choice/) ⭐️ 7.0/10

A Reddit post argues that older software was optimized for performance because hardware constraints left no alternative, contrasting with modern software's tendency to prioritize development speed and features over efficiency. This perspective highlights a fundamental shift in software engineering trade-offs, reminding developers that performance optimization often stems from necessity rather than choice, and may influence how we evaluate modern software bloat. The post does not cite specific examples but implies that older systems (e.g., early PCs, game consoles) had strict memory and CPU limits, forcing efficient code; modern hardware abundance allows developers to trade performance for faster iteration.

reddit · r/programming · /u/BlondieCoder · Jun 19, 13:52

**Background**: In early computing, hardware resources like RAM and clock speed were extremely limited, so software had to be carefully hand-optimized. As Moore's Law made hardware cheaper and more powerful, developers began to prioritize development speed, feature richness, and maintainability over raw performance, leading to what some call 'software bloat'.

**Discussion**: The community discussion is not provided, so no summary is available.

**Tags**: `#software engineering`, `#performance`, `#history`, `#optimization`, `#design philosophy`

---

<a id="item-9"></a>
## [C++ Book Draft: CPU Cycle Costs for MUL/DIV](https://www.reddit.com/r/programming/comments/1u9yk1j/efficient_c_programming_for_modern_c_cpus_chapter/) ⭐️ 7.0/10

A draft chapter from the upcoming book 'Efficient C++ Programming for Modern 64-bit CPUs' has been released, providing updated data on CPU clock cycle costs for arithmetic operations, including micro-research on MUL/DIV progress since 2017. This resource helps C++ developers understand the true cost of operations on modern CPUs, enabling them to write more efficient code by avoiding common performance pitfalls (de-pessimizations). The chapter includes a visualization of operation costs in CPU clock cycles and focuses on de-pessimizations rather than optimizations, with the authors actively seeking community feedback to improve the draft.

reddit · r/programming · /u/no-bugs · Jun 19, 10:40

**Background**: CPU clock cycles measure the time an instruction takes to execute; lower cycles mean faster execution. MUL (multiply) and DIV (divide) operations are historically expensive, and their latency has improved over generations. The concept of 'de-pessimizations' refers to avoiding known performance anti-patterns, as opposed to aggressive optimizations.

<details><summary>References</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Cycles_per_instruction">Cycles per instruction - Wikipedia</a></li>
<li><a href="https://stackoverflow.com/questions/75606253/x86-mul-operation-at-hardware-level">cpu architecture - x86 MUL operation at hardware level - Stack Overflow</a></li>
<li><a href="https://www.bearssl.org/ctmul.html">BearSSL - Constant-Time Mul</a></li>

</ul>
</details>

**Tags**: `#C++`, `#performance`, `#CPU`, `#optimization`, `#programming`

---

<a id="item-10"></a>
## [How to Deadlock a Java ExecutorService](https://www.reddit.com/r/programming/comments/1u9wq7z/how_to_deadlock_a_java_executorservice/) ⭐️ 7.0/10

A Reddit post explains how to accidentally deadlock a Java ExecutorService by submitting tasks that wait for other tasks in the same thread pool. This highlights a common concurrency pitfall that can cause production outages, especially in fixed thread pools where task dependencies create circular waits. The deadlock occurs when a task in a fixed thread pool submits a subtask and blocks waiting for its result, but the subtask cannot run because all threads are occupied by the parent task.

reddit · r/programming · /u/mlangc · Jun 19, 08:54

**Background**: Java's ExecutorService framework manages thread pools for asynchronous task execution. A fixed thread pool has a limited number of threads; if all threads are busy and a task waits for another task that is queued but cannot start, a self-induced deadlock occurs.

<details><summary>References</summary>
<ul>
<li><a href="https://dzone.com/articles/thread-pool-self-induced-deadlocks">Thread Pool Self-Induced Deadlocks</a></li>
<li><a href="https://www.baeldung.com/java-executor-service-tutorial">A Guide to the Java ExecutorService - Baeldung</a></li>
<li><a href="https://coderanch.com/t/662131/java/Deadlock-Executor-Service">Deadlock in Executor Service (Java in General forum at Coderanch)</a></li>

</ul>
</details>

**Discussion**: The Reddit discussion includes multiple perspectives on thread pool deadlocks, with some commenters sharing similar experiences and others suggesting solutions like using separate thread pools or asynchronous patterns.

**Tags**: `#Java`, `#Concurrency`, `#Deadlock`, `#ExecutorService`

---

<a id="item-11"></a>
## [PostgreSQL Modern Indexing: io_uring, Binary Search, TIDs](https://www.reddit.com/r/programming/comments/1u9adv5/how_modern_indexing_works_in_postgresql_in_depth/) ⭐️ 7.0/10

A detailed explanation reveals how PostgreSQL indexes work under the hood, including file structure with line pointers and TIDs, and modern optimizations such as using io_uring for asynchronous I/O and binary search on leaf pages. Understanding these internals helps developers and DBAs optimize query performance and choose appropriate indexing strategies, especially as PostgreSQL adopts modern OS features like io_uring to reduce I/O latency. PostgreSQL stores each index in its own file, unlike MySQL where clustered indexes are derived from the table. The index file contains line pointers and TIDs (tuple IDs), which encode the physical location (block number and offset) of each row, enabling direct disk access via fseek().

reddit · r/programming · /u/Ok_Stomach6651 · Jun 18, 16:05

**Background**: PostgreSQL uses B-tree indexes by default, which organize data in a tree structure for efficient searching. The index file is divided into pages; page 0 stores metadata including range information that helps locate the correct leaf page. Once a leaf page is loaded into memory, binary search is used to find the target TID, which then points to the actual row in the heap table.

<details><summary>References</summary>
<ul>
<li><a href="https://www.phoronix.com/news/PostgreSQL-Lands-IO_uring">PostgreSQL Database Lands Initial Support For IO _ uring ... - Phoronix</a></li>
<li><a href="https://www.freecodecamp.org/news/postgresql-indexing-strategies/">Advanced Indexing Strategies in PostgreSQL</a></li>

</ul>
</details>

**Tags**: `#PostgreSQL`, `#database indexing`, `#storage engines`, `#performance optimization`

---

<a id="item-12"></a>
## [AirPods and Social Isolation in Cities](https://www.theescapenewsletter.com/p/the-airpods-effect) ⭐️ 6.0/10

A cultural commentary article argues that AirPods and earbuds have become tools for social isolation in urban environments, reducing spontaneous interactions and altering the default mode network of the brain. This matters because it highlights a growing societal trend where constant audio input may be diminishing essential daydreaming and social connection, potentially affecting mental health and community cohesion. The article is based on personal observation and community discussion, not on new scientific research, and it focuses on urban environments like subways where noise is a factor.

hackernews · herbertl · Jun 18, 23:08 · [Discussion](https://news.ycombinator.com/item?id=48592832)

**Background**: The default mode network (DMN) is a brain network active when a person is at rest and daydreaming, which is suppressed during focused tasks. Constant earbud use may reduce DMN activity, potentially limiting creative thinking and self-reflection.

**Discussion**: Commenters generally agree that earbuds help cope with unpleasant urban noise, but some note the loss of daydreaming time and spontaneous interactions. One commenter observed that early iPod headphones actually increased social interaction due to novelty.

**Tags**: `#social commentary`, `#technology and society`, `#urban living`, `#audio`

---

<a id="item-13"></a>
## [Datasette ACL 0.6a0 Expands to General Resource Sharing](https://simonwillison.net/2026/Jun/18/datasette-acl/#atom-everything) ⭐️ 6.0/10

Datasette ACL 0.6a0, released on June 18, 2026, expands from table-only permissions to a general resource-sharing system for multi-user Datasette instances. This update is significant for Datasette users who need fine-grained access control across various resources, enabling more secure and flexible multi-user deployments. The plugin is under active development, with Alex Garcia contributing most of the work; it previously only supported table-level permissions like insert-row.

rss · Simon Willison · Jun 18, 19:03

**Background**: Datasette is an open-source multi-tool for exploring and publishing data, often used with SQLite databases. The datasette-acl plugin provides advanced permission management, and this release moves it toward a general resource-sharing system beyond just tables.

<details><summary>References</summary>
<ul>
<li><a href="https://github.com/datasette/datasette-acl">GitHub - datasette/ datasette - acl : Advanced permission management...</a></li>
<li><a href="https://simonwillison.net/2026/Jun/18/datasette-acl/">Release: datasette - acl 0.6a0 | Simon Willison’s Weblog</a></li>

</ul>
</details>

**Tags**: `#datasette`, `#access-control`, `#plugin`, `#release`

---

<a id="item-14"></a>
## [Build Your Own Vulnerability Harness](https://www.reddit.com/r/programming/comments/1u9z8i8/build_your_own_vulnerability_harness/) ⭐️ 6.0/10

A Reddit post discusses building a custom vulnerability harness for security testing, referencing Cloudflare's blog post on the topic. This empowers security engineers to create tailored vulnerability discovery systems that are model-agnostic and can be integrated into CI/CD pipelines. The harness is designed to be model-agnostic, allowing flexibility in choosing any model. It includes stages like vulnerability discovery and orchestration with security scanners.

reddit · r/programming · /u/CircumspectCapybara · Jun 19, 11:17

**Background**: A vulnerability harness is a system that automates the discovery and testing of security vulnerabilities in software. It often integrates with security scanners and CI/CD pipelines to provide continuous security testing.

<details><summary>References</summary>
<ul>
<li><a href="https://blog.cloudflare.com/build-your-own-vulnerability-harness/">Build your own vulnerability harness</a></li>
<li><a href="https://www.harness.io/products/application-security-testing/security-testing-orchestration">Security Testing Orchestration | Harness STO</a></li>

</ul>
</details>

**Tags**: `#security`, `#vulnerability`, `#harness`, `#reddit`

---

<a id="item-15"></a>
## [Rethinking Modularity in Ruby Apps](https://www.reddit.com/r/programming/comments/1u9x6ur/rethinking_modularity_in_ruby_applications/) ⭐️ 6.0/10

A Reddit post by user noteflakes initiates a discussion on new approaches to modularity in Ruby applications, challenging traditional practices. This discussion is significant for Ruby developers as it explores ways to improve code organization and maintainability in Ruby projects, potentially influencing software architecture trends in the Ruby ecosystem. The post does not provide specific technical details or examples, but the conversation likely covers modular design patterns, dependency management, and code separation techniques relevant to Ruby.

reddit · r/programming · /u/noteflakes · Jun 19, 09:21

**Background**: Modularity in software refers to dividing a program into separate, interchangeable modules that each handle a specific aspect of functionality. In Ruby, common modularity approaches include using modules, classes, and gems, but as applications grow, developers often seek better ways to manage complexity and dependencies.

**Tags**: `#Ruby`, `#software architecture`, `#modularity`

---