---
layout: default
title: "Horizon Summary: 2026-06-24 (EN)"
date: 2026-06-24
lang: en
---

> From 310 items, 36 important content pieces were selected

---

---

## 🧠 AI Learning

- [From Toy Scheduler to Real Async HTTP via Syscalls](https://pub.towardsai.net/unraveling-an-async-http-request-61e7e28dc95e?source=rss----98111c9905da---4) ⭐️ 9.0/10

  > This article explains how to bridge a toy coroutine scheduler using generators with real async HTTP by leveraging non-blocking sockets and OS syscalls like connect(), send(), and recv(). Understanding the syscall-level mechanics demystifies async I/O, helping developers write more efficient concurrent code and debug performance issues in Python's asyncio. The article uses raw sockets to demonstrate blocking syscalls, then introduces non-blocking mode where syscalls return immediately with EAGAIN/EWOULDBLOCK errors, enabling concurrency.

- [How Logits, Temperature, and Top-P Control LLM Output](https://machinelearningmastery.com/the-statistics-of-token-selection-logits-temperature-and-top-p-walkthrough/) ⭐️ 8.0/10

  > A new tutorial provides a detailed walkthrough of how logits, temperature scaling, and top-p (nucleus) sampling work together to control randomness and diversity in LLM token selection. Understanding these parameters is crucial for practitioners who need to fine-tune LLM outputs for tasks requiring different levels of creativity or coherence, such as chatbots, content generation, or code completion. The tutorial explains that logits are raw scores from the model's final layer, which are then scaled by temperature (higher values increase randomness) and filtered by top-p (selecting tokens with cumulative probability above a threshold).

- [Memory Engine for AI Agents: Dual Pools & Async Writes](https://pub.towardsai.net/two-pools-one-record-the-architecture-of-a-memory-engine-for-ai-agents-7080c6ca4a30?source=rss----98111c9905da---4) ⭐️ 8.0/10

  > The article presents a detailed architectural blueprint for a standalone memory engine for AI agents, featuring two never-merged memory pools (personal and project), pointer-based linking, asynchronous model writes, and time-aware retrieval with three read depths. This design addresses critical data-model, time, and governance problems that most memory systems overlook, offering a practical blueprint for building memory that not only recalls facts but grows skills. It could influence how AI agents manage long-term context in local-first, privacy-preserving environments. The memory engine uses a single typed record with five kinds, two timelines per row, and provenance stamped from day one. Forgetting is a reversible score, configurable per kind and volatility, with new memories quarantined until reinforced. Project memory rides the repo itself via an op-log on a git ref, enabling shared memory without a server.

- [Running 35B LLM on 6GB GPU: A 2026 Guide](https://pub.towardsai.net/a-gpu-poors-guide-to-local-llm-inference-in-2026-48d59cafd215?source=rss----98111c9905da---4) ⭐️ 8.0/10

  > A practical guide demonstrates running a 35-billion-parameter Mixture-of-Experts (MoE) model at 28 tokens per second with full 128K context on a 6 GB GTX 1660 Ti, using techniques like MoE, KV cache quantization below q8_0, and MCP-based tooling. This guide challenges the conventional wisdom that large language models require high-end GPUs with 24 GB VRAM, making local LLM inference accessible to users with consumer-grade hardware (4-12 GB VRAM). It highlights techniques that have narrowed the gap between expensive setups and older laptops. The guide uses Qwen3.6 35B-A3B, a MoE model with 35B total parameters but only ~3B active per token. Key techniques include the --n-cpu-moe flag in llama.cpp to keep attention layers on GPU while offloading expert weights to CPU, and KV cache quantization using the Turboquant fork for sub-q8_0 quality without significant regression.

- [Continuous Batching Boosts LLM Inference Efficiency](https://machinelearningmastery.com/serving-multiple-users-at-once-how-continuous-batching-keeps-llm-inference-efficient/) ⭐️ 7.0/10

  > The article explains how continuous batching dynamically schedules LLM inference requests instead of using fixed-size batches, improving throughput and reducing latency. This technique is crucial for serving multiple users efficiently in production LLM applications, as it maximizes GPU utilization and minimizes idle time. Continuous batching, also known as ragged batching, allows new requests to be added to the batch as soon as previous ones finish, unlike static batching which waits for all requests in a batch to complete.

---

## 🔭 Unknown Unknowns

- [Zhuangzi's Critique of Meritocracy](https://aeon.co/essays/zhuangzi-and-the-case-against-meritocracy) ⭐️ 9.0/10

  > An essay on Aeon argues, drawing on the ancient Chinese philosopher Zhuangzi, that the concept of self-made success is a flawed notion because our achievements are deeply interdependent with external factors. This challenges the deeply held belief in meritocracy, especially prevalent in tech and business cultures, and invites a rethinking of how we attribute success and deservingness. The essay is by Christine Abigail L Tan and was published on Aeon. It uses Zhuangzi's philosophy to argue that no one is truly self-made, as success depends on luck, social context, and natural endowments.

- [Human-Made Rocks Challenge Geology's Boundaries](https://aeon.co/essays/the-strange-rocks-that-wouldnt-exist-without-us) ⭐️ 9.0/10

  > An Aeon essay by John MacDonald explores the emergence of new rock types created by human activity, such as plastiglomerates and technofossils, which blur the line between natural and artificial in geology. This opens a genuinely new field—Anthropocene geology—challenging traditional geological boundaries and offering a novel lens for understanding human impact on Earth's material record. The essay discusses specific examples like plastiglomerates (plastic fused with natural sediment) and technofossils (technological artifacts preserved in strata), which may persist for millions of years.

- [Nick Land's Accelerationism: A Dark Philosophy](https://aeon.co/essays/what-is-nick-lands-philosophy-of-accelerationism-really) ⭐️ 9.0/10

  > Aeon essay explores Nick Land's accelerationist philosophy, which argues that technological capitalism is an autonomous, inhuman process accelerating toward a post-human future, and examines its influence on both tech culture and extremist politics. This philosophy challenges fundamental assumptions about human agency and progress, offering a lens that resonates with both Silicon Valley techno-optimists and far-right reactionaries, making it a potent and controversial force in contemporary thought. Land's work draws on cybernetics, Deleuzian thought, and dark pessimism, and he coined the term 'hyperstition' for memetic ideas that bring about their own reality. The essay notes that terrorists and tech bros alike view accelerationism as a revolutionary weapon.

- [George Forster and the Birth of Sensitive Science](https://www.themarginalian.org/2026/06/20/george-forster-andrea-wulf/) ⭐️ 9.0/10

  > An essay on The Marginalian introduces 18th-century naturalist George Forster and his concept of 'sensitive science', which integrates empirical observation with emotional and moral insight, challenging the detached objectivity of modern science. This perspective offers an alternative to the purely rationalist paradigm dominant in technology and science, suggesting that integrating heart and mind can lead to a more holistic understanding of the world. The essay highlights Forster's approach as a 'periscope' that rises above mainstream thinking, and reframes Enlightenment science through a humanistic lens, emphasizing a forgotten tradition that merges reason and feeling.

---

## ✍️ Language & Expression

- [Bill Gurley on Mental Models and Systems Thinking](https://fs.blog/knowledge-project-podcast/bill-gurley/) ⭐️ 8.0/10

  > Bill Gurley, a renowned venture capitalist and board member of the Santa Fe Institute, shares his insights on mental models, complexity, and systems thinking in a new episode of The Knowledge Project podcast. This discussion provides practical cognitive tools that can improve reasoning and decision-making, especially valuable for investors, entrepreneurs, and anyone navigating complex systems. The episode is available on YouTube, Spotify, Apple Podcasts, and includes a transcript. Gurley draws from his Wall Street experience, Benchmark partnership, Uber's hypergrowth, and his work at the Santa Fe Institute.

- [Treat Interviews as a Deductive Game: A Full Preparation SOP](https://sspai.com/post/110947) ⭐️ 7.0/10

  > The article proposes treating interviews as a deductive reasoning game, offering a systematic preparation and review SOP (Standard Operating Procedure) to improve performance. This framework helps professionals transform interview preparation from passive memorization into active problem-solving, potentially increasing success rates in competitive job markets. The SOP likely includes steps such as gathering sample questions, identifying patterns, formulating response templates, and conducting post-interview reviews to refine strategies.

- [Mark Pincus on Innovation: Proven, Better, New](https://fs.blog/knowledge-project-podcast/mark-pincus/) ⭐️ 6.0/10

  > Mark Pincus, founder of Zynga, shared his innovation framework 'Proven, Better, New' in a podcast on Farnam Street, but the discussion lacks concrete actionable techniques for improving thinking or communication. While the framework offers a high-level lens for innovation, the absence of practical guidance limits its value for professionals seeking to enhance their creative or communication skills. The podcast episode is part of The Knowledge Project and includes a transcript; however, the content is described as generic and not directly applicable to writing or communication.

- [Tim Cook's Business Link Between Apple and Nike](https://sspai.com/post/111081) ⭐️ 4.0/10

  > A podcast episode explores the intricate business relationship between Apple, Nike, and Tim Cook, highlighting Cook's role as a connector between the two companies. This analysis sheds light on how personal leadership and cross-industry relationships can shape strategic partnerships, offering insights for business professionals interested in corporate collaboration. The episode is hosted on sspai.com and focuses on the 'business triangle' among Apple, Nike, and Tim Cook, though no specific new revelations or data are provided.

---

## 🧬 Human Nature & Behavior

- [Feeling Known Is Key to Feeling Loved](https://behavioralscientist.org/how-can-we-feel-loved-if-we-dont-feel-known/) ⭐️ 8.0/10

  > Psychologists Sonja Lyubomirsky and Harry Reis argue that feeling known by another person is a prerequisite for feeling loved, based on their seven-year collaboration bridging happiness and relationship research. This insight challenges common misconceptions about love and offers a science-backed path to greater happiness, emphasizing that being truly known—not just admired or cared for—is essential for feeling loved. The article identifies five common misconceptions about feeling loved, such as believing that attractiveness or success will bring love, and presents findings from a survey of nearly 2,000 American adults who struggled to describe how they feel loved.

- [Superintelligent AI Could Undermine Nuclear Deterrence](https://www.lesswrong.com/posts/2kseP9fZghYHKLFno/superintelligence-vs-the-second-strike) ⭐️ 8.0/10

  > A LessWrong essay argues that superintelligent AI could render nuclear second-strike capabilities obsolete, undermining deterrence and disempowering even nuclear states unless they invest in AI-based resilience. This analysis challenges the long-held assumption that nuclear weapons guarantee strategic stability, suggesting that rapid AI advancement could shift the balance of power and create new security risks. The essay outlines three ways superintelligent AI could overcome nuclear deterrence: splendid first strikes, WMD defenses, and other mechanisms, emphasizing that the speed of AI progress could outpace traditional adaptation.

---

## 💰 Wealth & Compounding

- [Poorer Students Earn 7% Less Even with Same Degree](https://ofdollarsanddata.com/why-poorer-students-earn-less-even-with-the-same-degree/) ⭐️ 8.0/10

  > A study covering over 30 million students found that graduates from poorer backgrounds earn 7% less than their wealthier peers a decade after graduation, even when they attended the same university and earned the same degree with the same grade. This finding challenges the assumption that education alone equalizes opportunities, revealing that socioeconomic background continues to affect earnings through networks and privilege, compounding inequality over a lifetime. The earnings gap persists even after controlling for university selectivity, degree subject, and grades; the slope of parental income versus child income is 0.095 for non-elite four-year colleges, meaning wealthier families still confer an advantage.

- [Being Useful Is More Attractive Than Being Rich](https://ofdollarsanddata.com/being-useful-is-more-attractive-than-being-rich/) ⭐️ 8.0/10

  > A viral Reddit post about a 41-year-old man who retired early with $2.65M in assets but was called a "loser" by his wife for spending his days playing video games while high on edibles has sparked a discussion on the importance of purpose beyond financial independence. This story challenges the common assumption that wealth alone is attractive, highlighting that being useful and engaged is more fulfilling and respected. It underscores a key insight for the FIRE movement: financial independence without purpose can lead to emptiness and relationship strain. The man has $2M liquid, $650k retirement, and $75k/yr royalty income, totaling $125k/yr passive income. His wife, a school teacher, came home early to find him stoned and playing Grand Theft Auto, leading to her calling him a "loser."

---

## 📜 History & Patterns

- [How Britain Lost America: Revolutionary War Analysis](https://www.historyextra.com/membership/american-revolutionary-war-podcast-series-episode-three/) ⭐️ 7.0/10

  > A podcast episode featuring Professor Adam IP Smith examines how American revolutionaries survived and defeated the British empire through strategy, attrition, and global conflict dynamics. This analysis offers timeless lessons on asymmetric warfare and empire overreach, relevant to modern geopolitics and military strategy. The episode covers the attritional hardship of campaigns and the global impact of the conflict, highlighting how a fledgling movement overcame a superpower.

- [Five Greatest PM Downfalls in 100 Years](https://www.historyextra.com/membership/prime-minister-resignation-downfall/) ⭐️ 6.0/10

  > Historian Richard Toye examines five of the most spectacular downfalls of British prime ministers over the past century. This analysis offers insights into the fragility of political leadership and the recurring patterns that lead to a prime minister's resignation. The article is published on HistoryExtra and covers dramatic resignations, though it does not explicitly draw parallels to contemporary politics.

---

## 📰 Tech Digest

1. [Google Fires Employee for Creating Unofficial Workspace CLI](#item-1) ⭐️ 8.0/10
2. [California AB 2047 restricts 3D printers in schools](#item-2) ⭐️ 8.0/10
3. [AI Hiring Tools Amplify Racial Bias, Study Finds](#item-3) ⭐️ 8.0/10
4. [SpaceX Starfall Return Capsule Completes First Flight](#item-4) ⭐️ 8.0/10
5. [Real-time adaptive DBS improves gait in Parkinson's](#item-5) ⭐️ 8.0/10
6. [Datasette 1.0a35 Adds Create/Alter Table Interfaces](#item-6) ⭐️ 7.0/10
7. [Study: AI Disclosure Cuts Game Reviews by 53%](#item-7) ⭐️ 7.0/10
8. [US Pressures Meta to Agree to AI Safety Review](#item-8) ⭐️ 7.0/10
9. [CITIC Securities: Compute and Power Supply Chains Offer Long-Term Value](#item-9) ⭐️ 7.0/10
10. [Groq Raises $650M to Expand AI Inference Cloud, Targets 200 MW by 2027](#item-10) ⭐️ 7.0/10
11. [Modular Nanorobots Self-Assemble for Targeted Drug Delivery](#item-11) ⭐️ 7.0/10
12. [Superhuman acquires AI detection startup GPTZero](#item-12) ⭐️ 7.0/10
13. [LastPass Warns Users of Another Data Breach via Partner](#item-13) ⭐️ 6.0/10
14. [Chinese Developers File Antitrust Complaint Against Apple](#item-14) ⭐️ 6.0/10
15. [OPFS + Pyodide Test Harness for Datasette Lite](#item-15) ⭐️ 6.0/10
16. [Apple Vision Pro Tool RCP3 Absorbs The Machinery Game Engine](#item-16) ⭐️ 6.0/10
17. [Wikipedia Co-founder: AI Hallucinations Still Severe, No Direct Editing](#item-17) ⭐️ 6.0/10

---

<a id="item-1"></a>
## [Google Fires Employee for Creating Unofficial Workspace CLI](https://twitter.com/JPoehnelt/status/2069482265953087602) ⭐️ 8.0/10

Justin Poehnelt, a Google employee, was fired for creating and releasing an unofficial Google Workspace CLI tool called gws, which provided a unified command-line interface for Google Workspace services. This incident highlights the tension between employee innovation and corporate policies, especially regarding open-source projects that could be mistaken for official releases, and has sparked widespread debate about bureaucracy and risk management in large tech companies. The tool, published under the npm package @googleworkspace/cli, was a GitHub hit but was not officially sanctioned by Google, leading to termination after Poehnelt allegedly failed to follow internal procedures.

hackernews · justinwp · Jun 23, 18:13 · [Discussion](https://news.ycombinator.com/item?id=48649011)

**Background**: Google has a history of encouraging side projects through '20% time,' but also has strict policies about releasing projects that could be perceived as official. The Google Workspace CLI (gws) is a command-line tool that provides a unified interface for interacting with Google Workspace services like Gmail, Drive, and Calendar.

<details><summary>References</summary>
<ul>
<li><a href="https://grokipedia.com/page/Google_Workspace_CLI">Google Workspace CLI</a></li>

</ul>
</details>

**Discussion**: Community comments are divided: some criticize Poehnelt for poor judgment in releasing a tool that could be confused with an official product, while others argue that Google's bureaucracy stifles innovation and that the firing was an overreaction. Several commenters note that similar projects were previously tolerated at Google.

**Tags**: `#Google`, `#open source`, `#corporate policy`, `#CLI`, `#employment`

---

<a id="item-2"></a>
## [California AB 2047 restricts 3D printers in schools](https://www.the3dprintingnerd.com/ab2047) ⭐️ 8.0/10

California Assembly passed AB 2047, the Firearm Printing Prevention Act, which would require 3D printers to incorporate technology to prevent the printing of firearms, effectively making them off-limits to students, educators, and businesses that cannot comply. This bill could stifle 3D printing education and innovation in California, setting a precedent for similar regulations nationwide and sparking debate about the feasibility of enforcing content-based restrictions on 3D printers. The bill requires 3D printer manufacturers to implement technology that blocks the printing of firearm components, but critics argue that such technology is not currently feasible because printers cannot distinguish intent from code.

hackernews · Buildstarted · Jun 23, 22:12 · [Discussion](https://news.ycombinator.com/item?id=48652184)

**Background**: 3D printers create physical objects from digital models by depositing material layer by layer. Concerns about 3D-printed "ghost guns" have led to legislative efforts to restrict access, but technical challenges remain in enforcing such restrictions without hindering legitimate use.

<details><summary>References</summary>
<ul>
<li><a href="https://www.everytown.org/press/california-assembly-passes-landmark-bill-to-stop-the-rise-of-3d-printed-ghost-guns/">California Assembly Passes Landmark Bill to Stop the Rise of 3D-Printed Ghost Guns</a></li>
<li><a href="https://legiscan.com/CA/text/AB2047/id/3438106">Bill Text: CA AB2047 | 2025-2026 | Regular Session | Amended - LegiScan</a></li>
<li><a href="https://www.timesunion.com/capitol/article/regulations-3d-printers-passed-still-face-long-22277140.php">NY moves to ban 3D printers that make guns, but can it be enforced? - Times Union</a></li>

</ul>
</details>

**Discussion**: Commenters expressed skepticism about enforceability, with one noting that even simple workarounds like printing in halves can bypass restrictions. Another pointed out that similar bills may be funded by Bloomberg, suggesting political motivations.

**Tags**: `#3D printing`, `#regulation`, `#education`, `#technology policy`, `#censorship`

---

<a id="item-3"></a>
## [AI Hiring Tools Amplify Racial Bias, Study Finds](https://hai.stanford.edu/news/ai-hiring-tools-can-yield-racial-bias-and-systemic-rejection) ⭐️ 8.0/10

A Stanford study published in May 2025 analyzed 83,000 applicants across 100 Fortune 500 companies using the pymetrics assessment tool, revealing that algorithmic hiring creates monocultures that amplify racial bias and systematically reject qualified candidates. This research provides rare empirical evidence inside the 'black box' of algorithmic hiring, showing that widespread adoption of a single AI vendor can lock out entire demographic groups and exacerbate systemic inequality in the labor market. The study focused on pymetrics, a gamified assessment tool, not CV-screening AI or large language models. It found that as one vendor dominates an industry, the same candidates—often from minority backgrounds—are repeatedly rejected across multiple employers.

hackernews · sizzle · Jun 23, 18:56 · [Discussion](https://news.ycombinator.com/item?id=48649673)

**Background**: Algorithmic hiring tools use machine learning to screen, rank, or assess job applicants, promising efficiency and objectivity. However, they can inherit and amplify biases present in historical hiring data. The concept of 'algorithmic monoculture' refers to the risk when many employers rely on the same AI system, leading to uniform exclusion patterns.

<details><summary>References</summary>
<ul>
<li><a href="https://hai.stanford.edu/news/ai-hiring-tools-can-yield-racial-bias-and-systemic-rejection">AI Hiring Tools Can Yield Racial Bias and Systemic Rejection | Stanford HAI</a></li>

</ul>
</details>

**Discussion**: Commenters raised concerns about the study's methodology, with some noting that the paper focuses on assessment tools rather than AI or LLMs, and questioning how race was determined. Others emphasized the systemic risk of monoculture, arguing that even unbiased AI can lock out groups if widely adopted.

**Tags**: `#AI ethics`, `#algorithmic bias`, `#hiring`, `#fairness`, `#machine learning`

---

<a id="item-4"></a>
## [SpaceX Starfall Return Capsule Completes First Flight](https://www.ithome.com/0/967/717.htm) ⭐️ 8.0/10

SpaceX's Starfall return capsule completed its first flight on June 23, 2026, launched atop a Falcon 9 rocket from Cape Canaveral. The capsule is designed to carry up to 1000 kg of payloads back to Earth for scientific and manufacturing purposes. Starfall provides a low-cost, routine return capability for space experiments and manufactured goods, potentially accelerating in-space manufacturing and research. It is significantly larger than existing return capsules like Varda's W-series, enabling larger payloads. The capsule measures 3.1 meters in diameter and 0.75 meters in height, with a carbon fiber heat shield and cold gas (nitrogen) attitude control. It separates into two sections during reentry: the upper section houses payloads and avionics, while the lower section contains compressed gas for maneuvering.

rss · IT之家 · Jun 23, 23:39

**Background**: SpaceX's Starfall is a cargo-only return capsule that can be launched on Falcon 9 or Falcon Heavy. It is designed for missions requiring payload return from low Earth orbit or suborbital flights. The capsule lacks its own propulsion and relies on the rocket's upper stage for deorbit. Varda Space has previously demonstrated similar technology with smaller W-series capsules.

<details><summary>References</summary>
<ul>
<li><a href="https://www.youtube.com/watch?v=IrVeYmLouSU">Falcon 9 - Starfall Demo Mission - SLC-40 - Cape Canaveral SFS - June 23, 2026</a></li>
<li><a href="https://en.wikipedia.org/wiki/Varda_Space_Industries">Varda Space Industries - Wikipedia</a></li>
<li><a href="https://www.varda.com/platform">Built for orbital material production and reentry - Varda Space Industries</a></li>

</ul>
</details>

**Tags**: `#SpaceX`, `#space technology`, `#return capsule`, `#space manufacturing`, `#aerospace`

---

<a id="item-5"></a>
## [Real-time adaptive DBS improves gait in Parkinson's](https://36kr.com/newsflashes/3866385812509699?f=rss) ⭐️ 8.0/10

Researchers at UCSF developed a novel deep brain stimulation system that reads neural signals in real-time to automatically adjust stimulation intensity during each step, improving gait and reducing falls in Parkinson's patients. The study was published in Nature Medicine. This is the first demonstration that an implantable brain stimulator can detect step-related neural signals and adjust stimulation within milliseconds, opening a new chapter in personalized neuromodulation. It addresses one of the most difficult-to-treat symptoms of Parkinson's disease—gait impairment. The system was tested in four Parkinson's patients who received implanted electrodes and a neural stimulator for brain sensing and feedback control. The adaptive stimulation adjusted in real-time based on neural signals associated with each step.

rss · 36氪 · Jun 23, 23:49

**Background**: Deep brain stimulation (DBS) is a therapy that uses electrical impulses to modulate specific neural circuits, commonly used for Parkinson's disease. Traditional DBS delivers constant stimulation, but adaptive DBS aims to adjust stimulation in real-time based on the patient's neural state, potentially improving efficacy and reducing side effects.

<details><summary>References</summary>
<ul>
<li><a href="https://www.gotac.cn/article_read_102.html">上海国泰医院投资管 理 有限公司</a></li>
<li><a href="https://www.tmtpost.com/7560598.html">tmtpost.com/7560598.html</a></li>

</ul>
</details>

**Tags**: `#neuroscience`, `#Parkinson's disease`, `#deep brain stimulation`, `#medical technology`, `#Nature Medicine`

---

<a id="item-6"></a>
## [Datasette 1.0a35 Adds Create/Alter Table Interfaces](https://simonwillison.net/2026/Jun/23/datasette/#atom-everything) ⭐️ 7.0/10

Datasette 1.0a35 introduces a 'Create table' interface and an 'Alter table' interface, both backed by new JSON APIs, along with stable template context documentation. These features significantly enhance Datasette's utility for database management, moving it closer to a full-featured data platform and marking a major step toward the 1.0 release. The create table API supports defining columns, primary keys, custom types, NOT NULL constraints, defaults, and single-column foreign keys; the alter table API supports adding, renaming, reordering, and dropping columns, as well as changing types, defaults, constraints, and table name.

rss · Simon Willison · Jun 23, 21:34

**Background**: Datasette is an open-source tool for exploring and publishing data, especially SQLite databases. It provides a web interface and a JSON API for querying and interacting with data. Prior to this release, Datasette lacked built-in interfaces for creating or altering table schemas, requiring users to use external tools.

<details><summary>References</summary>
<ul>
<li><a href="https://simonwillison.net/2026/Jun/18/datasette-apps/">Datasette Apps: Host custom HTML applications inside Datasette</a></li>
<li><a href="https://datasette.io/blog/2026/datasette-apps/">Host applications inside Datasette with Datasette ... - Datasette Blog</a></li>

</ul>
</details>

**Tags**: `#datasette`, `#data tools`, `#Python`, `#SQLite`, `#release`

---

<a id="item-7"></a>
## [Study: AI Disclosure Cuts Game Reviews by 53%](https://www.ithome.com/0/967/724.htm) ⭐️ 7.0/10

A study by Game Oracle analyzing 9,879 games released from January to October 2025 found that disclosing AI use in development reduces the number of player reviews by approximately 53%, after controlling for variables like publisher, team experience, and genre. This finding provides concrete evidence that AI disclosure negatively impacts player engagement, especially for high-quality games, which could influence developer decisions on whether to disclose AI use and how to communicate it to players. The negative effect is stronger for larger, more experienced teams, while low-quality games show little difference regardless of AI use. The study also notes that games like The Finals succeeded despite heavy AI use, suggesting that the manner of AI implementation matters.

rss · IT之家 · Jun 24, 00:11

**Background**: Generative AI tools have become increasingly common in game development for tasks like asset creation, dialogue generation, and prototyping. However, player sentiment toward AI-generated content has been mixed, with some viewing it as a cost-cutting measure that reduces quality. Steam and other platforms have introduced disclosure requirements for AI-generated content, making transparency a key issue.

<details><summary>References</summary>
<ul>
<li><a href="https://www.game-oracle.com/blog/ai-part2">AI in Games: The Impact On Sales - Game Oracle</a></li>

</ul>
</details>

**Tags**: `#AI`, `#game development`, `#player perception`, `#market research`

---

<a id="item-8"></a>
## [US Pressures Meta to Agree to AI Safety Review](https://www.ithome.com/0/967/706.htm) ⭐️ 7.0/10

The Trump administration is pressuring Meta to voluntarily submit its AI models for safety review by the US government, as Meta remains the only major AI developer that has not yet signed such an agreement. This move highlights the growing regulatory scrutiny on AI safety and could set a precedent for mandatory compliance, affecting how AI models are developed and deployed across the industry. Meta launched its Muse Spark AI model in April, but has not yet agreed to share models with the US AI Safety Institute (AISI). Other companies like OpenAI, Google, and Microsoft have already signed voluntary review agreements.

rss · IT之家 · Jun 23, 22:56

**Background**: The US government established the AI Safety Institute to evaluate frontier AI models for risks and vulnerabilities. Voluntary review agreements allow the government to assess models before public release, aiming to prevent potential harms.

**Tags**: `#AI safety`, `#regulation`, `#Meta`, `#US government`, `#AI governance`

---

<a id="item-9"></a>
## [CITIC Securities: Compute and Power Supply Chains Offer Long-Term Value](https://36kr.com/newsflashes/3866430062269705?f=rss) ⭐️ 7.0/10

CITIC Securities released a research report recommending long-term allocation to compute and power supply chains, driven by massive AI token demand, policy support, and supply chain dynamics. This analysis from a major financial institution signals that AI infrastructure investment is shifting from hype to sustained capital deployment, affecting investors, chipmakers, and energy providers globally. The report highlights that China's 'six networks' initiative will bring trillions in compute investment, while domestic chips, storage, and optical communications face large-scale import substitution opportunities. It also notes that compute construction boosts demand for metals like copper and tin, and that IDC REITs broaden funding sources.

rss · 36氪 · Jun 24, 00:16

**Background**: AI token demand refers to the computational processing required for large language models and other AI applications, which drives the need for data centers and power. 'Six networks' is a Chinese policy framework encompassing computing, power, and other infrastructure networks. IDC REITs are real estate investment trusts focused on data centers, providing a way to finance infrastructure expansion.

<details><summary>References</summary>
<ul>
<li><a href="https://www.datacenterknowledge.com/investing/data-center-reits-a-guide-to-investing-in-digital-infrastructure">Data Center REITs: A Guide to Investing in Digital Infrastructure</a></li>

</ul>
</details>

**Tags**: `#AI infrastructure`, `#investment`, `#compute`, `#power`, `#supply chain`

---

<a id="item-10"></a>
## [Groq Raises $650M to Expand AI Inference Cloud, Targets 200 MW by 2027](https://36kr.com/newsflashes/3866429031716103?f=rss) ⭐️ 7.0/10

AI chip startup Groq announced on June 22 that it raised $650 million in a new growth round led by Disruptive and Infinitum, with participation from existing investors. The funds will be used to accelerate data center infrastructure upgrades and expand total capacity to 200 megawatts by the end of 2027. This funding round signals strong investor confidence in Groq's AI inference technology and its ability to compete with established players like Nvidia. The planned capacity expansion to 200 MW could significantly increase the availability of specialized AI inference cloud services, potentially lowering costs and improving performance for AI applications. The funding will also be used to deploy Nvidia's latest LPX systems in existing data centers. Groq's custom LPU (Language Processing Unit) architecture is designed specifically for AI inference, offering low latency and high throughput for large language models.

rss · 36氪 · Jun 24, 00:15

**Background**: Groq is an AI chip startup that develops custom hardware for AI inference, focusing on low-latency performance for large language models. The company's LPU architecture differs from traditional GPUs by using a deterministic, dataflow-based design. This funding round comes amid growing demand for AI inference infrastructure as more companies deploy generative AI applications.

**Tags**: `#AI chips`, `#funding`, `#cloud computing`, `#hardware`

---

<a id="item-11"></a>
## [Modular Nanorobots Self-Assemble for Targeted Drug Delivery](https://36kr.com/newsflashes/3866386287219712?f=rss) ⭐️ 7.0/10

Researchers at the University of Basel have developed a modular nanoscale drug-delivery robot that self-assembles from reusable propulsion and payload modules, and can target cancer cells to reduce their activity. The findings were published in the journal Advanced Functional Materials. This modular design allows for flexible and reusable components, potentially lowering costs and enabling customization for different therapeutic or industrial applications. It represents a step toward practical nanorobots for precision medicine. The robot consists of two main modules: a propulsion module and a payload module, which can be combined in different configurations. The study demonstrated that the assembled nanorobots can target cancer cells and reduce their viability in vitro.

rss · 36氪 · Jun 23, 23:51

**Background**: Nanomedicine aims to deliver drugs precisely to diseased cells, but building functional nanorobots is challenging due to their tiny size. Modular design, inspired by LEGO-like assembly, allows different functional parts to be combined and reused. Previous nanorobots have been proposed for tasks like thrombolysis and tumor embolization, but clinical translation remains limited.

<details><summary>References</summary>
<ul>
<li><a href="https://news.sciencenet.cn/htmlnews/2021/5/458821.shtm">news.sciencenet.cn/htmlnews/2021/5/458821.shtm</a></li>

</ul>
</details>

**Tags**: `#纳米技术`, `#药物递送`, `#机器人`, `#癌症治疗`, `#材料科学`

---

<a id="item-12"></a>
## [Superhuman acquires AI detection startup GPTZero](https://techcrunch.com/2026/06/23/superhuman-acquires-ai-detection-startup-gptzero/) ⭐️ 7.0/10

Superhuman, the company behind Grammarly's AI detection tool, has acquired GPTZero, a three-year-old AI detection startup founded by Princeton graduate Edward Tian. The acquisition was announced on June 23, 2026. This acquisition signals consolidation in the AI detection market, as major players integrate specialized startups to enhance their offerings. It could lead to more robust and integrated AI detection features within Grammarly and Superhuman's products, affecting how users verify AI-generated content. GPTZero was originally built as a senior thesis project by Edward Tian at Princeton University and has been trained to detect outputs from models like ChatGPT, GPT-4, Bard, and LLaMa. Superhuman already offers an AI detection feature within its platform, and this acquisition is expected to further improve its capabilities.

rss · TechCrunch · Jun 23, 21:48

**Background**: AI detection tools are designed to identify text generated by large language models (LLMs) like GPT-4, helping users distinguish between human-written and AI-generated content. As AI writing tools become widespread, demand for reliable detection has grown, especially in education, journalism, and content moderation. Superhuman operates Grammarly, a popular writing assistant, and has been integrating AI detection features to promote responsible AI use.

<details><summary>References</summary>
<ul>
<li><a href="https://techcrunch.com/2026/06/23/superhuman-acquires-ai-detection-startup-gptzero/">Superhuman acquires AI detection startup GPTZero | TechCrunch</a></li>
<li><a href="https://en.wikipedia.org/wiki/GPTZero">GPTZero - Wikipedia</a></li>
<li><a href="https://help.superhuman.com/hc/en-us/articles/46242198434445-AI-Detector-user-guide">AI Detector user guide - Superhuman Help Center</a></li>

</ul>
</details>

**Tags**: `#AI`, `#acquisition`, `#AI detection`, `#startup`

---

<a id="item-13"></a>
## [LastPass Warns Users of Another Data Breach via Partner](https://9to5mac.com/2026/06/23/lastpass-notifies-users-of-yet-another-data-breach/) ⭐️ 6.0/10

LastPass has notified users of a new data breach that occurred through one of its outside partners, exposing personal data. This recurring breach at a major password manager undermines user trust and raises concerns about the security of third-party integrations. The breach involved stolen personal data, but no technical details about the attack or the affected partner have been disclosed.

rss · 9to5Mac · Jun 23, 21:48

**Background**: LastPass is a popular password manager that stores users' login credentials in an encrypted vault. The company has experienced multiple security incidents in recent years, including a major breach in 2022 that exposed encrypted vault data.

**Tags**: `#security`, `#data breach`, `#password manager`, `#LastPass`

---

<a id="item-14"></a>
## [Chinese Developers File Antitrust Complaint Against Apple](https://9to5mac.com/2026/06/23/chinese-developers-file-antitrust-complaint-against-apple-over-app-store-fees/) ⭐️ 6.0/10

48 Chinese developers filed an antitrust complaint against Apple, alleging unfairly high App Store fees and restrictive distribution rules. This complaint adds to global regulatory pressure on Apple's App Store practices and could influence antitrust policy in China and beyond. The complaint focuses on Apple's 30% commission on in-app purchases and restrictions on alternative app stores, which developers argue harm competition.

rss · 9to5Mac · Jun 23, 20:17

**Background**: Apple's App Store has faced antitrust scrutiny in multiple countries over its commission fees and walled-garden approach. In China, Apple holds a significant market share, and local developers have long criticized the high costs. Similar complaints have led to regulatory actions in the EU and South Korea.

**Tags**: `#antitrust`, `#Apple`, `#App Store`, `#China`, `#regulation`

---

<a id="item-15"></a>
## [OPFS + Pyodide Test Harness for Datasette Lite](https://simonwillison.net/2026/Jun/23/opfs-pyodide/#atom-everything) ⭐️ 6.0/10

Simon Willison released a test harness that combines the Origin Private File System (OPFS) with Pyodide to explore persistent SQLite file editing in the browser for Datasette Lite. This could enable Datasette Lite to edit SQLite databases stored on the user's local machine, bridging the gap between web apps and local file persistence. The test harness is built using Claude Code for web and allows users to try OPFS with Pyodide across different browsers. It is an early-stage tool with limited functionality.

rss · Simon Willison · Jun 23, 18:58

**Background**: Datasette Lite runs the full Datasette Python web application in the browser via Pyodide (Python compiled to WebAssembly). The Origin Private File System (OPFS) is a browser API that provides a private, origin-specific file system for storing data persistently.

<details><summary>References</summary>
<ul>
<li><a href="https://github.com/simonw/datasette-lite">simonw/datasette-lite - GitHub</a></li>
<li><a href="https://lite.datasette.io/">Datasette Lite</a></li>

</ul>
</details>

**Tags**: `#webassembly`, `#pyodide`, `#datasette-lite`, `#browser-storage`, `#sqlite`

---

<a id="item-16"></a>
## [Apple Vision Pro Tool RCP3 Absorbs The Machinery Game Engine](https://www.ithome.com/0/967/711.htm) ⭐️ 6.0/10

Apple's Reality Composer Pro 3 test build contains code references to the defunct game engine The Machinery, indicating integration of its flexible framework for Vision Pro content creation. This move strengthens Apple's 3D content ecosystem for Vision Pro by leveraging a proven, modular engine architecture, potentially accelerating development of immersive experiences. Developer Nicholas Alvarez found at least 40 instances of 'the machinery' or 'our machinery' in the RCP3 installer, and the resource handling and database organization closely mirror The Machinery's approach.

rss · IT之家 · Jun 23, 23:17

**Background**: The Machinery was a game engine developed by Our Machinery, founded by veterans of the Bitsquid/Stingray engine. It emphasized a plugin-based, highly flexible architecture but ceased development in mid-2022. Reality Composer Pro is Apple's 3D content authoring tool for spatial computing, used to build scenes and interactions for Vision Pro.

<details><summary>References</summary>
<ul>
<li><a href="https://www.macrumors.com/2026/06/23/apple-reality-composer-pro-the-machinery/">Apple's Latest Vision Pro Tool Contains Traces of Defunct Game Engine 'The Machinery'</a></li>
<li><a href="https://www.reddit.com/r/gamedev/comments/wd4qoh/our_machinery_extensible_engine_made_in_c_just/">Our Machinery, extensible engine made in C, just stopped being available : r/gamedev</a></li>

</ul>
</details>

**Tags**: `#Apple`, `#Vision Pro`, `#game engine`, `#3D content`, `#Reality Composer`

---

<a id="item-17"></a>
## [Wikipedia Co-founder: AI Hallucinations Still Severe, No Direct Editing](https://www.ithome.com/0/967/709.htm) ⭐️ 6.0/10

Wikipedia co-founder Jimmy Wales stated on June 24 that AI hallucinations remain very serious, so AI will not be allowed to directly edit Wikipedia articles, though it may help flag content for human editors. This highlights ongoing trust issues with AI reliability in content creation, affecting how major platforms like Wikipedia integrate AI. It also underscores the tension between AI companies using Wikipedia data and the need for fair compensation. Wales noted that human traffic to Wikipedia has dropped 8% while AI bot traffic increased, but he called this 'not a disaster' since Wikipedia's donation-based model doesn't rely on traffic. He urged AI companies to pay their fair share for server costs.

rss · IT之家 · Jun 23, 23:16

**Background**: AI hallucination refers to AI generating false or misleading information presented as fact, a common issue with large language models. Wikipedia relies on volunteer human editors to ensure accuracy, and its content is widely used to train and feed AI models.

<details><summary>References</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/AI_hallucination">AI hallucination</a></li>

</ul>
</details>

**Tags**: `#AI`, `#Wikipedia`, `#AI Hallucination`, `#Content Moderation`

---