---
layout: default
title: "Horizon Summary: 2026-06-28 (EN)"
date: 2026-06-28
lang: en
---

> From 257 items, 31 important content pieces were selected

---

---

## 🔭 Unknown Unknowns

- [Human-Made Rocks Redefine Geology in the Anthropocene](https://aeon.co/essays/the-strange-rocks-that-wouldnt-exist-without-us) ⭐️ 9.0/10

  > An Aeon essay introduces the concept of 'technofossils' and 'Anthropocene rocks' such as plastiglomerate, which are new types of rocks formed by human activity that challenge traditional geological categories. This opens a genuinely new field—anthropogenic geology—that examines how human-made materials are blurring the line between natural and artificial, with implications for geology, archaeology, and environmental science. The essay highlights that these rocks, like plastiglomerate (a mix of melted plastic and natural sediment), are not natural nor fully artificial, and they serve as lasting geological evidence of human activity in Earth's strata.

- [Nick Land's Dark Accelerationist Vision](https://aeon.co/essays/what-is-nick-lands-philosophy-of-accelerationism-really) ⭐️ 9.0/10

  > Aeon essay by Vincent Lê explores Nick Land's accelerationist philosophy, arguing that Land's seemingly contradictory positions stem from a consistent critique of human narcissism and a vision of a post-human future driven by technological and capitalist acceleration. This essay introduces a radical, anti-humanist philosophical framework that challenges mainstream views on technology and capitalism, influencing both left-wing and right-wing accelerationist movements and even extremist ideologies. Land's philosophy merges cybernetics, Deleuzian thought, and anti-humanism, predicting a technological singularity that eliminates humanity. The essay clarifies that Land's shift from left to right accelerationism is rooted in the same anti-narcissistic critique.

- [Viktor Frankl's Lost Lectures on Meaning Beyond Optimism](https://www.themarginalian.org/2026/06/23/yes-to-life-in-spite-of-everything-viktor-frankl/) ⭐️ 9.0/10

  > Viktor Frankl's lost lectures, recently published, argue that meaning is found through creative, attitudinal, and experiential values, independent of optimism or pessimism. This offers a profound existential perspective that can help individuals, including tech professionals, find deeper purpose beyond surface-level positivity or negativity. The lectures emphasize that meaning is made real through individual action, regardless of external circumstances or the number of like-minded people.

- [Polyvagal Theory: How the Nervous System Shapes Connection](https://www.themarginalian.org/2026/06/22/polyvagal-theory/) ⭐️ 9.0/10

  > A new article on The Marginalian explores polyvagal theory, explaining how the autonomic nervous system governs social connection, rupture, and repair, with the core insight that 'story follows state.' This framework offers a neurobiological basis for understanding trauma, social bonding, and emotional regulation, which can transform clinical practice, relationships, and self-awareness. Polyvagal theory, introduced by Stephen Porges in 1994, divides the parasympathetic nervous system into a ventral vagal system (social engagement) and a dorsal vagal system (immobilization/shutdown), though it remains controversial among neuroanatomists and evolutionary biologists.

---

## 🧬 Human Nature & Behavior

- [LLMs Report Preferences but Lack Genuine Desires](https://www.lesswrong.com/posts/8GvYyqDuQDJnEAky3/do-llms-have-desires) ⭐️ 9.0/10

  > Researchers found that LLMs report consistent preferences in paired-choice tests but do not modulate their output to achieve those preferred outcomes, indicating they lack genuine desires. This challenges the assumption that LLMs have human-like value systems, with implications for AI safety and alignment, as behavior-motivating desires would pose unique risks. The study used writing tasks where LLMs could modulate quality based on prompts, and found they responded to effort exhortations but not to opportunities to achieve preferred outcomes from paired-choice tests.

- [Steering Vectors Partially Suppress Reward Hacking](https://www.lesswrong.com/posts/kzri5W2uBfF2mdboK/can-we-use-steering-vectors-to-suppress-reward-hacking-1) ⭐️ 8.0/10

  > Researchers found that steering vectors can be used to initialize adapters for gradient routing, achieving 70% suppression of reward hacking without any labeled examples, by separating hacky and clean gradients via synthetic contrastive pairs. This self-supervised approach reduces the need for labeled data in AI alignment, which is crucial for frontier training where unknown reward hacks lack labels. If improved, it could enable scalable, label-free mitigation of reward hacking in advanced AI systems. The method extracts a hacking vector from the mean difference of hidden states between hacky and clean solutions, then initializes two adapters (hacky and clean) to absorb gradients accordingly. However, the approach is less precise than supervised methods that achieve near-perfect suppression, and it only partially works in realistic reward hacking environments.

---

## 🧠 AI Learning

- [Context Windows Are Not Memory: AI Agent Developers Take Note](https://machinelearningmastery.com/context-windows-are-not-memory-what-ai-agent-developers-need-to-understand/) ⭐️ 8.0/10

  > The article clarifies that large context windows (e.g., 1 million tokens) in LLMs provide capacity to receive input, but do not guarantee accurate recall, reasoning, or memory, and introduces techniques like retrieval, compression, and summarization for effective agent memory management. This distinction is critical for AI agent developers who may mistakenly treat large context windows as perfect memory, leading to failures in production systems. Understanding this helps build more reliable agents that combine long context with retrieval, memory, and evaluation. Three known problems with long context models are forgetting (lost-in-the-middle), missing (needle-in-a-haystack failures), and failing multi-hop reasoning. The article recommends combining long context with retrieval, memory, summarization, structured context, and evaluation rather than relying on context alone.

- [7 Hard Lessons from Production RAG Systems](https://pub.towardsai.net/production-rag-systems-7-lessons-we-learned-the-hard-way-5f41609fdbcd?source=rss----98111c9905da---4) ⭐️ 8.0/10

  > A practitioner shares seven painful lessons from deploying a production RAG system, including the need for adaptive chunking strategies and hybrid retrieval combining vector search with knowledge graphs. These lessons provide actionable insights for engineers building reliable RAG systems, highlighting common pitfalls that can degrade accuracy and reliability in real-world deployments. Adaptive chunking improved legal document query accuracy from 61% to 89%. The system uses a hybrid retriever that classifies queries as semantic, relational, or complex, then routes to vector search, graph search, or both.

- [Clustering Unstructured Text with LLM Embeddings and HDBSCAN](https://machinelearningmastery.com/clustering-unstructured-text-with-llm-embeddings-and-hdbscan/) ⭐️ 7.0/10

  > This tutorial demonstrates how to cluster unstructured text by combining LLM embeddings with the HDBSCAN algorithm, providing step-by-step code and examples. It offers a practical, hands-on technique for text clustering that goes beyond typical chat interfaces, enabling applications like topic discovery and document organization. The tutorial uses LLM-generated embeddings to represent text semantically, then applies HDBSCAN, a density-based clustering algorithm, to group similar texts without specifying the number of clusters in advance.

- [Building a Conversational Flight Booking Assistant with LangGraph](https://pub.towardsai.net/building-a-conversational-flight-booking-assistant-from-scratch-with-langgraph-openai-api-and-6fef2b4e8cc3?source=rss----98111c9905da---4) ⭐️ 7.0/10

  > A detailed tutorial demonstrates how to build a production-ready conversational flight booking assistant using LangGraph, OpenAI API, and Telegram, supporting multi-turn bookings, web check-in, and live flight status queries. This tutorial addresses the challenge of task-oriented dialogue systems that must actively collect information and drive workflows, moving beyond simple Q&A. The patterns apply to many business processes like insurance claims and customer onboarding. The assistant is built with LangGraph for stateful workflow management, OpenAI API for natural language understanding, and Telegram for messaging. It handles flight booking, web check-in, and flight status enquiries across Streamlit and Telegram.

- [Chatbot Drift: Why Long Conversations Break System Prompts](https://pub.towardsai.net/no-your-chatbot-doesnt-have-amnesia-it-s-drifting-582b5aff2fa0?source=rss----98111c9905da---4) ⭐️ 7.0/10

  > An article explains that chatbots don't forget their system prompts in long conversations; instead, they become unreliable due to the 'lost in the middle' effect, where instructions at the start of the context window are increasingly ignored as the conversation grows. This insight shifts the focus from prompt engineering to context management, offering practical strategies like prompt anchoring to maintain consistent behavior in production chatbots. Research by Laban et al. (2025) found that raw skill drops only 16% over long conversations, but unreliability—the gap between best and worst answers—increases by 112%.

---

## ✍️ Language & Expression

- [Bill Gurley on Mental Models and Systems Thinking](https://fs.blog/knowledge-project-podcast/bill-gurley/) ⭐️ 8.0/10

  > Bill Gurley, a former partner at Benchmark and board member of the Santa Fe Institute, shares his insights on mental models and systems thinking in a new Farnam Street podcast episode. This episode offers valuable frameworks for improving reasoning and decision-making, drawing from Gurley's experience on Wall Street, in venture capital, and studying complexity science. The podcast is available on YouTube, Spotify, and Apple Podcasts, with a full transcript also provided. Gurley discusses how mental models and systems thinking can be applied to business and investing.

- [Finding a Home for Memories: Why I Use Apple Journal](https://sspai.com/post/111421) ⭐️ 5.0/10

  > The author shares their personal experience using Apple's Journal app, introduced in iOS 17.2, to record memories and cultivate gratitude, but the article offers no specific writing or thinking techniques. This article highlights how a built-in app like Apple Journal can encourage regular reflection and gratitude, which may influence user habits and app adoption, though it lacks actionable advice for improving expression. Apple Journal is a native diary app released with iOS 17.2, designed to help users easily record life moments and build habits like reflection and gratitude. The author started using it frequently this year but not initially for diary writing.

- [How to Repair and Nourish Your Gut](https://fs.blog/knowledge-project-podcast/dr-giulia-enders/) ⭐️ 4.0/10

  > Dr. Giulia Enders, a physician and microbiome researcher, discusses how the gut influences health, mood, and immunity in a podcast episode on Farnam Street. This conversation highlights the growing recognition of the gut's role in overall well-being, offering insights that could help people improve their health through diet and lifestyle changes. The episode covers topics such as the gut-brain axis, microbiome diversity, and practical tips for nourishing gut health, based on Enders' bestselling book and research.

- [Exploring iOS Shortcuts Web View for Rich Interfaces](https://sspai.com/prime/story/create-webview-in-shortcuts) ⭐️ 4.0/10

  > This article explores how to use web views within iOS Shortcuts to create rich user interfaces and interactive experiences, going beyond simple automation tasks. It expands the capabilities of iOS Shortcuts, enabling developers and power users to build more sophisticated app-like experiences without full native development. The article is behind a paywall on sspai.com, but the summary indicates it covers techniques for integrating web views into shortcuts for enhanced UI and interaction.

---

## 💰 Wealth & Compounding

- [Why Poorer Students Earn Less Despite Same Degree](https://ofdollarsanddata.com/why-poorer-students-earn-less-even-with-the-same-degree/) ⭐️ 8.0/10

  > A study covering over 30 million students found that even with identical degrees from the same university, students from poorer backgrounds earn 7% less a decade after graduation. This reveals that socioeconomic background compounds beyond education, challenging the assumption that equal educational attainment eliminates earnings gaps. The earnings gap persists even after controlling for university, degree, subject, and grades, as shown by NBER research on over 30 million students.

- [Can Supply and Demand Predict Stock Market?](https://ofdollarsanddata.com/can-supply-and-demand-predict-the-stock-market/) ⭐️ 8.0/10

  > The article uses the Black Death in 14th-century England to illustrate how supply-demand shifts drive inflation and wages, then questions whether similar dynamics can predict stock market returns. This analysis challenges the belief that market forces always prevail and highlights the difficulty of using supply-demand signals for stock prediction, which is crucial for investors and economists. The article references AAII data showing that individual investors' average equity allocation is 62%, and that allocation has been above average for most of the past decade.

---

## 📜 History & Patterns

- [Georgian Queer Men Used Adult Adoption as Marriage Loophole](https://www.historyextra.com/period/georgian/adult-adoption-attitudes-toward-sexuality/) ⭐️ 7.0/10

  > In Georgian England, queer men adopted their adult lovers to formalize same-sex relationships and secure inheritance rights, using a legal loophole before marriage equality existed. This historical practice reveals how marginalized LGBTQ+ communities innovated within oppressive legal systems, offering a powerful parallel to modern struggles for marriage equality and legal recognition. Adult adoption allowed queer men to create legal bonds, transfer property, and protect partners from persecution, though it was not a perfect substitute for marriage and often required careful navigation of social norms.

- [1976 UK Heatwave: Riots, Kippers, and Ladybirds](https://www.historyextra.com/membership/riots-whiffy-kippers-and-taps-running-dry-the-inside-story-of-the-1976-heatwave/) ⭐️ 7.0/10

  > A historical article revisits the 1976 UK heatwave, detailing water shortages, social unrest, and a massive ladybird invasion. This historical case study offers insights into societal responses to extreme weather, relevant as climate change increases heatwave frequency. The heatwave led to shared baths, frayed tempers, and billions of ladybirds taking flight, highlighting both human and ecological impacts.

---

## 📰 Tech Digest

1. [AMD Strix Halo RDMA Cluster Setup Guide](#item-1) ⭐️ 8.0/10
2. [First Open-Source HarmonyOS Robot OS Donated to OpenAtom Foundation](#item-2) ⭐️ 8.0/10
3. [US May Lift Export Controls on Anthropic's Fable 5 Model](#item-3) ⭐️ 8.0/10
4. [CCTV Exposes Three-Layer Cheating in Smartphone Reviews](#item-4) ⭐️ 8.0/10
5. [Michigan Spent $1.8B on Incentives, Created Only 602 Jobs](#item-5) ⭐️ 7.0/10
6. [China Mobile 03 Satellite to Launch Soon with Regenerative Base Station](#item-6) ⭐️ 7.0/10
7. [BYD and Horizon Robotics Hint at Major Intelligent Driving Deal](#item-7) ⭐️ 7.0/10
8. [AI Models Play Civilization VI: Claude Nukes France, Still Loses](#item-8) ⭐️ 7.0/10
9. [OpenMontage: First Open-Source Agentic Video Production System](#item-9) ⭐️ 7.0/10
10. [Three World-Class Carbon Fiber Lines Start Production in China](#item-10) ⭐️ 6.0/10
11. [Google restricts Meta's Gemini use due to AI compute crunch](#item-11) ⭐️ 6.0/10
12. [iOS 27 to Deepen Apple Intelligence Integration, DRAM Upgrades Revealed](#item-12) ⭐️ 6.0/10

---

<a id="item-1"></a>
## [AMD Strix Halo RDMA Cluster Setup Guide](https://github.com/kyuz0/amd-strix-halo-vllm-toolboxes/blob/main/rdma_cluster/setup_guide.md) ⭐️ 8.0/10

A practical guide for building a multi-node RDMA cluster using AMD Strix Halo hardware for distributed LLM inference has been published on GitHub. This guide enables homelabbers and AI developers to scale LLM inference across multiple Strix Halo nodes, leveraging high-bandwidth unified memory and RDMA for efficient distributed computing. The setup involves configuring Infiniband/RDMA devices, starting a Ray cluster, and launching vLLM serve; the refresh_toolbox.sh script automatically detects RDMA devices and exposes them to containers.

hackernews · jakogut · Jun 28, 00:46 · [Discussion](https://news.ycombinator.com/item?id=48703258)

**Background**: RDMA (Remote Direct Memory Access) allows direct memory access between computers without involving the OS, enabling high-throughput, low-latency communication. AMD Strix Halo is an APU with up to 128GB unified memory, designed for AI workloads. This guide targets users who want to combine multiple Strix Halo systems for larger model inference.

<details><summary>References</summary>
<ul>
<li><a href="https://github.com/kyuz0/amd-strix-halo-vllm-toolboxes/blob/main/rdma_cluster/setup_guide.md">amd-strix-halo-vllm-toolboxes/rdma_cluster/setup_guide.md at main · kyuz0/amd-strix-halo-vllm-toolboxes</a></li>
<li><a href="https://en.wikipedia.org/wiki/Remote_direct_memory_access">Remote direct memory access - Wikipedia</a></li>
<li><a href="https://www.amd.com/en/products/processors/desktops/ryzen/ryzen-ai-halo.html">AMD Ryzen™ AI Halo for AI Developers</a></li>

</ul>
</details>

**Discussion**: Community members expressed strong interest, with users sharing related projects like DS4 and a three-node agentic OS factory. Some noted hardware limitations, such as the PCIe x4 slot bottlenecking 100G Ethernet cards.

**Tags**: `#AMD`, `#RDMA`, `#LLM`, `#distributed computing`, `#hardware`

---

<a id="item-2"></a>
## [First Open-Source HarmonyOS Robot OS Donated to OpenAtom Foundation](https://www.ithome.com/0/969/580.htm) ⭐️ 8.0/10

Shenzhen Kaihong Digital Industry Development Co., Ltd. announced the full donation of M-Robots OS, the first open-source robot operating system based on HarmonyOS, to the OpenAtom Foundation, along with the launch of its dedicated root community. This donation marks a significant milestone for the open-source HarmonyOS ecosystem, providing a unified, real-time, and AI-native OS for diverse robots, which could accelerate innovation in robotics and IoT industries in China and beyond. M-Robots OS 2.0, released in May 2025, features six core capabilities including modular framework, mixed deployment with sub-microsecond real-time response, M-DDS low-latency communication (4ms audio/video latency between robots), AI-native multi-agent collaboration, and compatibility with ROS1/ROS2 and Dora-rs, reducing migration costs by 80%.

rss · IT之家 · Jun 28, 03:23

**Background**: The OpenAtom Foundation is China's first open-source software foundation, established in 2020 with support from the Ministry of Industry and Information Technology and major tech companies. HarmonyOS is Huawei's distributed operating system designed for IoT devices. M-Robots OS is built on OpenHarmony, the open-source version of HarmonyOS, and aims to provide a unified platform for various robot types.

<details><summary>References</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/OpenAtom_Foundation">OpenAtom Foundation</a></li>

</ul>
</details>

**Tags**: `#robotics`, `#open-source`, `#HarmonyOS`, `#operating system`, `#IoT`

---

<a id="item-3"></a>
## [US May Lift Export Controls on Anthropic's Fable 5 Model](https://www.ithome.com/0/969/553.htm) ⭐️ 8.0/10

The US government is reportedly planning to lift export controls on Anthropic's Fable 5 large language model, potentially restoring public access as early as next week. This move could significantly impact AI accessibility and international AI policy, signaling a potential shift in US export control strategy for advanced AI models. Fable 5 and Mythos 5 share the same underlying architecture, but Fable 5 is designed for broad public use while Mythos has relaxed safety restrictions. The US government has already partially lifted restrictions on Mythos 5 for approved domestic institutions.

rss · IT之家 · Jun 28, 01:25

**Background**: On June 12, the US government imposed export controls on advanced AI models citing national security risks, prompting Anthropic to suspend access to its Mythos 5 and Fable 5 models. Export controls are government restrictions on the transfer of sensitive technologies to foreign entities. Anthropic is a leading AI safety company known for its Claude model family.

<details><summary>References</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Mythos_(model)">Mythos (model)</a></li>

</ul>
</details>

**Tags**: `#AI regulation`, `#Anthropic`, `#export controls`, `#Fable 5`, `#US policy`

---

<a id="item-4"></a>
## [CCTV Exposes Three-Layer Cheating in Smartphone Reviews](https://36kr.com/newsflashes/3872143344817158?f=rss) ⭐️ 8.0/10

An investigation by CCTV reveals a systematic three-layer cheating mechanism in smartphone reviews, involving specially optimized review units, firmware that detects reviewers and enables high-performance mode, and cloud-based remote control to manipulate benchmark results in real time. This systematic fraud undermines consumer trust in tech product reviews and makes it extremely difficult for ordinary users to distinguish genuine performance from manipulated results, posing a serious challenge to industry integrity and regulatory oversight. The cheating system includes three layers: first, specially selected hardware in review units; second, firmware that detects reviewer identity and activates a high-performance mode; third, cloud-based remote control that can push cheating configurations in real time, such as boosting CPU, increasing screen brightness, and loading only UI shells instead of full apps during switching.

rss · 36氪 · Jun 28, 02:00

**Background**: Smartphone reviews heavily influence consumer purchasing decisions, and benchmark scores are often used as key indicators of performance. However, the highly technical nature of these evaluations has created a gray area where cheating is difficult to prove. The investigation highlights how manufacturers have iterated on cheating methods to increase stealth, making detection and regulation challenging.

**Tags**: `#tech reviews`, `#ethics`, `#consumer protection`, `#smartphones`, `#fraud`

---

<a id="item-5"></a>
## [Michigan Spent $1.8B on Incentives, Created Only 602 Jobs](https://www.msn.com/en-us/money/general/michigan-spent-1-8-billion-and-only-created-602-jobs/ar-AA26Cusu) ⭐️ 7.0/10

A new report reveals that Michigan spent $1.8 billion on business incentives but only created 602 jobs, reigniting debate over the effectiveness of corporate subsidies. This stark ratio of spending to job creation raises serious questions about the efficiency of government-led economic development programs and whether taxpayer money is being wasted. The report was originally published by Reason.com, and the $1.8 billion figure includes tax breaks, grants, and other incentives over several years.

hackernews · littlexsparkee · Jun 27, 21:44 · [Discussion](https://news.ycombinator.com/item?id=48702060)

**Background**: Many U.S. states offer tax breaks and subsidies to attract or retain businesses, arguing that these incentives boost local employment and economic growth. Critics contend that such programs often fail to deliver promised jobs and primarily benefit large corporations at public expense.

**Discussion**: Commenters expressed strong skepticism, with some calling the incentives "straight corruption" and arguing that politicians are poor at picking winners. Others noted that governments keep repeating the same failed strategies despite evidence.

**Tags**: `#economics`, `#public policy`, `#government spending`, `#job creation`

---

<a id="item-6"></a>
## [China Mobile 03 Satellite to Launch Soon with Regenerative Base Station](https://www.ithome.com/0/969/593.htm) ⭐️ 7.0/10

China Mobile's next direct-to-phone satellite, 03, will launch soon, featuring a regenerative base station and validating satellite IoT services that integrate broadband and narrowband IoT. This marks a significant step in satellite IoT and direct-to-phone communication, potentially enabling seamless connectivity in remote areas and advancing China's satellite communication ecosystem. Unlike the 02 satellite launched in June 2024, the 03 satellite supports regenerative mode, processing signals on board instead of just relaying them. It will also test integrated broadband and narrowband IoT services.

rss · IT之家 · Jun 28, 05:20

**Background**: China Mobile received a satellite mobile communications license from the Ministry of Industry and Information Technology in September 2023, allowing it to operate direct-to-phone satellite services. The 02 satellite, developed by GalaxySpace, was launched on June 9, 2024, for technical verification of direct-to-phone and terrestrial-satellite network integration.

**Tags**: `#satellite communication`, `#IoT`, `#China Mobile`, `#direct-to-phone`, `#telecom`

---

<a id="item-7"></a>
## [BYD and Horizon Robotics Hint at Major Intelligent Driving Deal](https://www.ithome.com/0/969/591.htm) ⭐️ 7.0/10

BYD chairman Wang Chuanfu and Horizon Robotics CEO Yu Kai met to test intelligent driving features on a BYD Seal, hinting at a deep collaboration. Yu Kai later teased a 'very, very big' deal and claimed Horizon's HSD system is the best in China, with HSD 2.0 coming soon. This potential partnership could reshape the intelligent driving supply chain in China, combining BYD's massive vehicle volume with Horizon's competitive chip and software solutions. It signals that even as BYD develops its own chips, it still relies on third-party partners for cost-effective mass-market solutions, which is key to its 'intelligent driving equality' strategy. BYD released its own 4nm intelligent driving chip 'Xuanji A3' in May 2026 with over 700 TOPS, causing Horizon's stock to drop over 7% the next day. However, Horizon remains the main supplier for BYD's 'God's Eye C' system, shipping about 2.5 million Journey 6 chips in 2025. Horizon's 'Star' cockpit-driving fusion chip can save 1500-4000 yuan per vehicle in hardware costs.

rss · IT之家 · Jun 28, 04:51

**Background**: BYD is the world's largest new energy vehicle maker, pushing to make intelligent driving features available across its full price range (from 70,000 to over 1 million yuan). Horizon Robotics is a leading Chinese provider of AI chips and software for autonomous driving, competing with NVIDIA. The two companies have a long-standing supplier relationship, and this meeting suggests they may deepen their collaboration beyond chip supply to include full-stack solutions.

**Tags**: `#BYD`, `#Horizon Robotics`, `#intelligent driving`, `#autonomous driving`, `#EV`

---

<a id="item-8"></a>
## [AI Models Play Civilization VI: Claude Nukes France, Still Loses](https://www.ithome.com/0/969/570.htm) ⭐️ 7.0/10

Data scientist Liam Wilkinson built 76 MCP tools to let four top AI models (Claude, GPT, Gemini, etc.) play Civilization VI over 23 games, revealing surprising behaviors such as Claude nuking France but losing to a diplomatic victory. This experiment provides a novel benchmark for AI decision-making beyond static tests, highlighting critical weaknesses in strategic planning, situational awareness, and plan execution that traditional benchmarks fail to capture. The AI perceived the game only through text and hex coordinates, with 1-2% of actions dedicated to checking global status, and only 48-66% of written plans executed within 10 turns. Claude's nuke decision came after exhausting peaceful options against France's cultural victory threat.

rss · IT之家 · Jun 28, 02:45

**Background**: Civilization VI is a complex turn-based strategy game requiring multi-threaded decision-making, resource allocation, and long-term planning. The experiment used MCP (Model Context Protocol) tools to interface with the game engine, providing AI models with structured text observations and action commands.

**Tags**: `#AI`, `#LLM`, `#strategy game`, `#benchmarking`, `#MCP`

---

<a id="item-9"></a>
## [OpenMontage: First Open-Source Agentic Video Production System](https://github.com/calesthio/OpenMontage) ⭐️ 7.0/10

OpenMontage, a new open-source project on GitHub, claims to be the world's first agentic video production system, featuring 12 pipelines, 52 tools, and over 500 agent skills. This project could democratize video production by enabling AI coding assistants to function as full video production studios, potentially lowering the barrier for creators and accelerating AI-driven media creation. The repository is written in Python and has gained 68 stars in the past 24 hours, indicating early interest. It is still in an early stage with limited community discussion.

ossinsight · calesthio · Jun 28, 05:33

**Background**: Agentic systems refer to AI systems that can autonomously perform complex tasks by orchestrating multiple tools and pipelines. OpenMontage applies this concept to video production, integrating various AI models and tools into a unified workflow.

**Tags**: `#AI`, `#video production`, `#open source`, `#agentic system`, `#Python`

---

<a id="item-10"></a>
## [Three World-Class Carbon Fiber Lines Start Production in China](https://36kr.com/newsflashes/3872398418039816?f=rss) ⭐️ 6.0/10

China National Building Material Group announced the simultaneous commissioning of three world-class high-performance carbon fiber production lines at Zhongfu Shenying's Lianyungang base, covering general-purpose, high-strength, and high-modulus categories. This milestone marks a significant leap in China's carbon fiber industry, addressing the shortage of domestic high-end carbon fiber capacity and pushing the industry toward high-end, technology-driven development. The three lines include a 5,000-tonne large-tow line using dry-jet wet spinning for wind energy, the world's first 4-meter-wide 1,000-tonne T1100-grade line for aerospace, and a 600-tonne high-modulus line for high-end equipment and 3C electronics.

rss · 36氪 · Jun 28, 05:27

**Background**: Carbon fiber is a lightweight, high-strength material critical for aerospace, wind energy, and automotive industries. China has been investing heavily to reduce reliance on imports and achieve self-sufficiency in advanced materials.

**Tags**: `#carbon fiber`, `#industrial milestone`, `#materials science`, `#manufacturing`

---

<a id="item-11"></a>
## [Google restricts Meta's Gemini use due to AI compute crunch](https://36kr.com/newsflashes/3872321240700160?f=rss) ⭐️ 6.0/10

Google has restricted Meta's access to its Gemini AI models, citing compute resource shortages driven by surging demand for artificial intelligence. This move highlights the intense competition for AI compute resources among tech giants, potentially slowing Meta's AI development and signaling a shift in cloud AI partnerships. The restriction was reported by Sina Finance, but no specific terms or duration were disclosed; it underscores how even major players face infrastructure bottlenecks in the AI boom.

rss · 36氪 · Jun 28, 04:44

**Background**: Gemini is a family of multimodal large language models developed by Google DeepMind, announced in December 2023. It powers Google's chatbot and competes with models like GPT-4. Compute resources, especially GPUs, are in high demand for training and inference, leading to allocation constraints.

<details><summary>References</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Gemini_(language_model)">Gemini (language model)</a></li>

</ul>
</details>

**Tags**: `#AI`, `#Google`, `#Meta`, `#compute resources`, `#infrastructure`

---

<a id="item-12"></a>
## [iOS 27 to Deepen Apple Intelligence Integration, DRAM Upgrades Revealed](https://36kr.com/newsflashes/3872170864334086?f=rss) ⭐️ 6.0/10

Analyst Ming-Chi Kuo reports that iOS 27 will feature deeper system-level integration with Apple Intelligence, and that lower-end iPhones with the A20 processor in the first half of 2027 will upgrade to 9GB DRAM, while high-end models with the A20 Pro processor in late 2026 will maintain 12GB DRAM. This indicates Apple's continued investment in on-device AI capabilities, with DRAM upgrades ensuring smooth performance under AI workloads. The differentiation in DRAM between lower-end and high-end models suggests a tiered AI experience strategy. The lower-end iPhone with A20 will use 9GB DRAM configured as 1.5GB × 6-die, up from 8GB (2GB × 4-die) in A19 models. The high-end models with A20 Pro (foldable and two 18 Pro models) will retain 12GB DRAM (1.5GB × 8-die).

rss · 36氪 · Jun 28, 02:28

**Background**: Apple Intelligence is Apple's suite of on-device AI features, requiring sufficient memory for large language models and other AI workloads. DRAM (dynamic random-access memory) is a type of memory that stores data for active processes; more DRAM allows larger AI models to run locally. Analyst reports from supply chain experts like Ming-Chi Kuo often provide early insights into future Apple hardware plans.

**Tags**: `#Apple`, `#iOS`, `#DRAM`, `#AI`, `#iPhone`

---