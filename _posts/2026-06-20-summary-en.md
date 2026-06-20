---
layout: default
title: "Horizon Summary: 2026-06-20 (EN)"
date: 2026-06-20
lang: en
---

> From 232 items, 25 important content pieces were selected

---

1. [CAS Breaks 3D DRAM Barrier: 4-Layer 2T0C with 400s Retention](#item-1) ⭐️ 9.0/10
2. [LM Studio and Apple Run Trillion-Parameter Kimi K2.6 on Four Mac Studios](#item-2) ⭐️ 9.0/10
3. [Pan Jianwei Team Builds Chip-Based Quantum Network Over 540km](#item-3) ⭐️ 9.0/10
4. [Intel and AMD Unveil ACE CPU Extensions for AI on x86](#item-4) ⭐️ 8.0/10
5. [UK Scientists Overcome Quantum Sensor Noise for Dark Matter and Gravitational Waves](#item-5) ⭐️ 8.0/10
6. [Apple Launches Core AI for On-Device Generative AI](#item-6) ⭐️ 8.0/10
7. [Claude Fable 5 on Bedrock Requires Data Sharing with Anthropic](#item-7) ⭐️ 8.0/10
8. [Open Handbook on LLM Inference at Scale Released](#item-8) ⭐️ 8.0/10
9. [Open-Source Guide to State Space Models (S4, Mamba)](#item-9) ⭐️ 8.0/10
10. [AWS Adds Multi-Region Replication to Cognito](#item-10) ⭐️ 7.0/10
11. [CSSQuake: Play Quake Using Only CSS](#item-11) ⭐️ 6.0/10
12. [Musk Exercises All 2018 Tesla Compensation Rights](#item-12) ⭐️ 6.0/10
13. [UK to Mandate Local News on Meta, YouTube](#item-13) ⭐️ 6.0/10

---

<a id="item-1"></a>
## [CAS Breaks 3D DRAM Barrier: 4-Layer 2T0C with 400s Retention](https://www.ithome.com/0/966/543.htm) ⭐️ 9.0/10

Researchers at the Institute of Microelectronics, Chinese Academy of Sciences, in collaboration with Beijing Superstring Equipment Research Institute, have demonstrated the first 4-layer 3D 2T0C DRAM structure using IGZO transistors, achieving a record data retention time of 400 seconds and 3 bits per cell. The work has been accepted at VLSI 2026. This breakthrough addresses the critical need for high-capacity, high-bandwidth memory in AI and HPC applications by enabling monolithic 3D integration of DRAM directly on logic chips. It offers a path to overcome the density limitations of traditional SRAM and the bandwidth bottlenecks of off-chip DRAM. The 3D 2T0C cell uses a dual-gate IGZO transistor design with a vertical word-line architecture, optimizing read margin, dual-gate control stability, and manufacturing cost. The 400-second retention time is achieved without a storage capacitor, relying on the parasitic capacitance of the read transistor.

rss · IT之家 · Jun 20, 10:33

**Background**: Traditional DRAM uses a 1T1C (one transistor, one capacitor) cell, which is difficult to scale vertically. 2T0C DRAM replaces the capacitor with a second transistor, leveraging the ultra-low off-current of IGZO transistors to retain charge. However, prior 2T0C designs were limited to planar or vertical 4F² architectures without multi-layer stacking. This work introduces a single-step high-layer 3D integration scheme that stacks four layers of 2T0C cells.

<details><summary>References</summary>
<ul>
<li><a href="https://www.imec-int.com/en/press/imec-demonstrates-capacitor-less-igzo-based-dram-cell-400s-retention-time">Imec Demonstrates Capacitor-less IGZO-Based DRAM Cell With...</a></li>
<li><a href="https://ieeexplore.ieee.org/document/10631386">Bit-Cost-Scalable 3D DRAM Architecture and Unit Cell... | IEEE Xplore</a></li>
<li><a href="https://semiengineering.com/baby-steps-towards-3d-dram/">Baby Steps Toward 3D DRAM</a></li>

</ul>
</details>

**Tags**: `#3D DRAM`, `#IGZO`, `#semiconductor`, `#memory technology`, `#VLSI`

---

<a id="item-2"></a>
## [LM Studio and Apple Run Trillion-Parameter Kimi K2.6 on Four Mac Studios](https://www.ithome.com/0/966/539.htm) ⭐️ 9.0/10

LM Studio, in collaboration with Apple, successfully ran the trillion-parameter Kimi K2.6 model on a cluster of four Mac Studios, achieving a unified memory pool of about 1.5TB via Apple's memory sharing and interconnect technology, and demonstrated secure remote access through LM Link from a MacBook Neo and iPhone. This demonstration proves that trillion-parameter MoE models can be deployed on consumer-grade hardware, significantly lowering the barrier for local AI deployment and offering a cost-effective, energy-efficient alternative to traditional GPU clusters, with potential implications for privacy and accessibility. The Kimi K2.6 model has 1 trillion total parameters with 32 billion activated parameters using a Mixture-of-Experts (MoE) architecture, and supports long context, multimodal input, and agent tasks. The cluster achieved approximately 28 tokens/s generation speed in specific modes, with lower power consumption compared to traditional GPU clusters.

rss · IT之家 · Jun 20, 09:37

**Background**: LM Studio is a platform for running local AI models, and LM Link is its remote access feature that provides end-to-end encrypted connections. Apple's macOS Tahoe 26.2 introduced RDMA over Thunderbolt 5, enabling low-latency memory sharing across multiple Macs, which is key to pooling memory for large models.

<details><summary>References</summary>
<ul>
<li><a href="https://lmstudio.ai/link">LM Link • Use your local models, remotely. | LM Studio</a></li>
<li><a href="https://tailscale.com/blog/lm-link-remote-llm-access">LM Link: Access models on your powerful devices you own, as if they were local</a></li>
<li><a href="https://www.webpronews.com/apples-macos-tahoe-26-2-enables-rdma-for-ai-mac-clusters-over-thunderbolt-5/">Apple's macOS Tahoe 26.2 Enables RDMA for AI Mac Clusters Over...</a></li>

</ul>
</details>

**Tags**: `#AI`, `#Apple`, `#Mac Studio`, `#Large Language Models`, `#Local Deployment`

---

<a id="item-3"></a>
## [Pan Jianwei Team Builds Chip-Based Quantum Network Over 540km](https://www.ithome.com/0/966/525.htm) ⭐️ 9.0/10

Researchers led by Pan Jianwei from the University of Science and Technology of China, in collaboration with other institutions, demonstrated a chip-based quantum key distribution (QKD) network using the twin-field QKD (TF-QKD) protocol over 540 km of optical fiber, achieving a secure key rate of 2.93 bps. The results were published in Nature Photonics on June 19, 2026. This breakthrough significantly advances the practicality of long-distance quantum communication by integrating key components onto photonic chips, reducing system complexity and cost. It paves the way for scalable, secure quantum networks that could eventually connect cities and support applications like unhackable communications. The chip-based transmitter combines a self-injection-locked laser chip using a high-quality-factor silicon nitride (Si3N4) microring resonator with a thin-film lithium niobate (TFLN) photonic integrated chip containing modulators and attenuators. The network uses a quantum leaf-spine architecture to support multiple users, and in a 540 km ultra-low-loss fiber with 91.5 dB total loss, the secure key rate exceeded the repeaterless key capacity by a factor of 9.

rss · IT之家 · Jun 20, 07:51

**Background**: Quantum key distribution (QKD) allows two parties to share a secret key with information-theoretic security. The twin-field QKD (TF-QKD) protocol overcomes the rate-distance limit of traditional QKD, enabling longer distances, but requires extremely stable single-photon interference between two independent lasers. Previous implementations were bulky and complex; this work integrates the necessary components onto photonic chips for the first time in a network setting.

<details><summary>References</summary>
<ul>
<li><a href="https://www.ithome.com/0/966/525.htm">ithome.com/0/966/525.htm</a></li>
<li><a href="https://zhuanlan.zhihu.com/p/442820084">TF-QKD（双场量子密钥分发协议） - 知乎</a></li>
<li><a href="https://www.secrss.com/articles/18083">量子密钥分发：从BB84到TF-QKD - 安全内参 | 决策者的网络安全知识库</a></li>

</ul>
</details>

**Tags**: `#quantum communication`, `#quantum key distribution`, `#photonics`, `#chip integration`, `#network security`

---

<a id="item-4"></a>
## [Intel and AMD Unveil ACE CPU Extensions for AI on x86](https://www.tomshardware.com/pc-components/cpus/intel-and-amds-new-ace-cpu-extensions-bring-an-efficient-ai-oriented-instruction-set-to-x86-a-new-design-makes-matrix-multiplication-more-power-and-density-efficient) ⭐️ 8.0/10

Intel and AMD have jointly released the full specification for ACE (AI Computex Extensions), a new instruction set extension for x86 CPUs designed to accelerate AI workloads, particularly matrix multiplication, with improved power and density efficiency. This marks a rare collaboration between the two dominant x86 CPU makers to address the growing need for efficient AI processing on general-purpose processors, potentially reducing reliance on dedicated AI accelerators like GPUs for certain tasks. The ACE extensions focus on low-precision AI formats and matrix multiply engines, aiming to deliver significant performance gains while maintaining scalability and energy efficiency across future Intel and AMD CPUs.

rss · Tom's Hardware · Jun 20, 12:00

**Background**: Modern AI workloads, such as neural network inference, heavily rely on matrix multiplication operations. Traditional x86 CPUs lack specialized instructions for these operations, often requiring GPUs or dedicated AI accelerators. ACE extensions bring hardware-level support for matrix math directly to the CPU, improving efficiency for AI tasks.

<details><summary>References</summary>
<ul>
<li><a href="https://www.tomshardware.com/pc-components/cpus/intel-and-amds-new-ace-cpu-extensions-bring-an-efficient-ai-oriented-instruction-set-to-x86-a-new-design-makes-matrix-multiplication-more-power-and-density-efficient">Intel and AMD's new ACE CPU extensions bring an... | Tom's Hardware</a></li>
<li><a href="https://wccftech.com/amd-intel-arm-x86-with-ace-matrix-multiply-engines-low-precision-ai-formats-future-cpus/">AMD and Intel arm x86 against the AI gap with ACE , baking...</a></li>

</ul>
</details>

**Tags**: `#CPU`, `#AI`, `#x86`, `#instruction set`, `#hardware`

---

<a id="item-5"></a>
## [UK Scientists Overcome Quantum Sensor Noise for Dark Matter and Gravitational Waves](https://www.ithome.com/0/966/546.htm) ⭐️ 8.0/10

A UK team led by Imperial College London demonstrated a differential measurement technique using two atom interferometers to cancel laser phase noise, achieving quantum-limited sensitivity even when individual signals are buried in noise. The results were published in Nature on June 17, 2026. This breakthrough removes a major obstacle to building large-scale quantum sensors, enabling detection of faint signals from dark matter and early-universe gravitational waves that are inaccessible to current detectors. It paves the way for kilometer-scale atom interferometers that could probe supermassive black hole formation and the nature of dark matter. The team used ultracold strontium-87 atoms in two spatially separated interferometers illuminated by the same ultra-stable clock laser. They intentionally injected extra noise to simulate future long-baseline environments, yet the combined analysis recovered clear signals at the quantum projection noise limit.

rss · IT之家 · Jun 20, 11:43

**Background**: Atom interferometers use laser pulses to manipulate atomic wave packets and measure interference, offering extreme sensitivity for fundamental physics. However, laser phase noise typically overwhelms the weak signals from gravitational waves or dark matter. The AION (Atom Interferometer Observatory and Network) project aims to build large-scale atom interferometers in the UK to address these challenges.

<details><summary>References</summary>
<ul>
<li><a href="https://www.hep.ph.ic.ac.uk/AION-Project/">AION @ Imperial: Home</a></li>
<li><a href="https://www.imperial.ac.uk/high-energy-physics/research/experiments/aion/">AION | Research groups | Imperial College London</a></li>
<li><a href="https://www.ukri.org/news/quantum-experiment-opens-gravitational-waves-and-dark-matter-search/">Quantum experiment opens gravitational waves and dark matter search</a></li>

</ul>
</details>

**Tags**: `#quantum sensing`, `#dark matter`, `#gravitational waves`, `#atom interferometer`, `#physics`

---

<a id="item-6"></a>
## [Apple Launches Core AI for On-Device Generative AI](https://www.infoq.com/news/2026/06/apple-core-ai-wwdc/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global) ⭐️ 8.0/10

At WWDC 26, Apple announced Core AI, a new framework that succeeds Core ML, enabling developers to run large language models and generative AI entirely on Apple Silicon devices. It supports custom-converted PyTorch models and pre-optimized open-source models. Core AI marks a major shift in mobile AI development, enabling powerful on-device generative AI with zero server dependencies, enhancing privacy and reducing latency. This positions Apple to compete strongly in the on-device AI space, impacting developers and users alike. Core AI provides a modern, memory-safe Swift API and leverages Apple Silicon's unified memory architecture, running models across CPU, GPU, and Neural Engine. Models are converted to the .aimodel format, and Apple's official coreai-models repo includes conversions for models like Gemma 3 and Qwen3.

rss · InfoQ · Jun 20, 11:00

**Background**: Apple previously used Core ML for on-device machine learning, but it was not optimized for large language models and generative AI. Core AI is purpose-built for these workloads, taking advantage of Apple Silicon's unified memory to efficiently run large models locally. This aligns with the industry trend toward on-device AI for privacy and offline capabilities.

<details><summary>References</summary>
<ul>
<li><a href="https://developer.apple.com/core-ai/">Core AI - Apple Developer</a></li>
<li><a href="https://rockyshikoku.medium.com/coreai-model-zoo-open-llms-for-apples-new-core-ai-framework-f9af93e069b9">CoreAI-Model-Zoo: Open LLMs for Apple ’s New Core AI Framework</a></li>
<li><a href="https://www.aimadetools.com/blog/core-ai-vs-core-ml/">Core AI vs Core ML : Which Apple Framework Should You Use in 2026?</a></li>

</ul>
</details>

**Tags**: `#Apple`, `#Generative AI`, `#On-Device AI`, `#Core AI`, `#WWDC`

---

<a id="item-7"></a>
## [Claude Fable 5 on Bedrock Requires Data Sharing with Anthropic](https://www.infoq.com/news/2026/06/bedrock-fable-5-data-sharing/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global) ⭐️ 8.0/10

Anthropic's Claude Fable 5 and Mythos 5 models on AWS Bedrock now require users to opt into provider_data_share, sending prompts and outputs to Anthropic for 30-day retention with human review. Three days after launch, Anthropic asked AWS to revoke access to both models due to US export control compliance. This marks a significant shift in data privacy policy for AWS Bedrock users, as previous models kept inference data within the AWS boundary. The mandatory data sharing and subsequent access revocation raise concerns about privacy, export control, and the reliability of cloud AI services. The provider_data_share mandate is specific to the Mythos-class tier, currently Fable 5 and Mythos 5. At launch, the models were available in US East (N. Virginia) and Europe (Stockholm), with additional regions expected.

rss · InfoQ · Jun 20, 09:03

**Background**: Amazon Bedrock is a managed service that provides access to foundation models from various providers via API. Previously, inference data for Bedrock models remained within AWS's infrastructure, ensuring data privacy. Anthropic's Claude Fable 5 is a large language model with up to 1M token context and strong vision capabilities.

<details><summary>References</summary>
<ul>
<li><a href="https://www.creativeainews.com/articles/claude-fable-5-bedrock-data-sharing-2026/">Claude Fable 5 on Bedrock Forces Data Sharing</a></li>
<li><a href="https://www.datacamp.com/blog/claude-fable-5">Claude Fable 5 : A Mythos-Class Model You Can Use | DataCamp</a></li>

</ul>
</details>

**Tags**: `#AI`, `#AWS`, `#Data Privacy`, `#Anthropic`, `#Export Control`

---

<a id="item-8"></a>
## [Open Handbook on LLM Inference at Scale Released](https://www.reddit.com/r/learnmachinelearning/comments/1uavenu/an_open_handbook_on_llm_inference_at_scale_gpu/) ⭐️ 8.0/10

A comprehensive open handbook covering LLM inference at scale, including GPU internals, KV cache, batching, and frameworks like vLLM, SGLang, and TensorRT-LLM, has been shared on Reddit. This handbook provides practitioners with a structured, in-depth resource to understand and optimize LLM inference, which is critical for deploying efficient and cost-effective AI services at scale. The handbook covers GPU internals, KV cache mechanisms, batching strategies, and compares inference engines such as vLLM, SGLang, and TensorRT-LLM, offering practical insights for high-throughput serving.

reddit · r/learnmachinelearning · /u/YouFirst295 · Jun 20, 12:28

**Background**: LLM inference at scale requires efficient memory management and computation optimization. Key techniques include KV caching to avoid redundant computation, batching to maximize GPU utilization, and specialized inference engines like vLLM and TensorRT-LLM that implement these optimizations.

<details><summary>References</summary>
<ul>
<li><a href="https://medium.com/@plienhar/llm-inference-series-3-kv-caching-unveiled-048152e461c8">LLM Inference Series: 3. KV caching explained | by Pierre... | Medium</a></li>
<li><a href="https://docs.vllm.ai/">vLLM</a></li>
<li><a href="https://github.com/NVIDIA/TensorRT-LLM">GitHub - NVIDIA/TensorRT-LLM: TensorRT LLM provides users with an easy-to-use Python API to define Large Language Models (LLMs) and supports state-of-the-art optimizations to perform inference efficiently on NVIDIA GPUs. TensorRT LLM also contains components to create Python and C++ runtimes that orchestrate the inference execution in a performant way. · GitHub</a></li>

</ul>
</details>

**Tags**: `#LLM inference`, `#GPU`, `#KV cache`, `#batching`, `#inference engines`

---

<a id="item-9"></a>
## [Open-Source Guide to State Space Models (S4, Mamba)](https://www.reddit.com/r/learnmachinelearning/comments/1uau9jb/i_wrote_a_guide_to_state_space_models_s4_mamba/) ⭐️ 8.0/10

A PhD researcher has open-sourced a comprehensive guide to state space models (SSMs) like S4, Mamba, and attention hybrids (Hydra, Jamba, Nemotron), tracing their mathematical foundations from 1940s signal processing to modern deep learning. This guide fills a gap in accessible, in-depth educational resources for SSMs, which are emerging as efficient alternatives to Transformers for sequence modeling, potentially impacting NLP, time-series analysis, and beyond. The guide is hosted at ssm.guide and on GitHub, covers models from S4 to Mamba and hybrid architectures, and is a work-in-progress with many chapters yet to be written. The author actively seeks collaborators and feedback.

reddit · r/learnmachinelearning · /u/Turbulent_Row8604 · Jun 20, 11:29

**Background**: State space models (SSMs) are a class of sequence models derived from control theory and signal processing, using hidden states to process sequences efficiently. S4 introduced structured state spaces for deep learning, and Mamba improved upon it with a selective mechanism for linear-time inference. Hybrid models like Jamba and Nemotron combine SSMs with attention mechanisms to leverage the strengths of both approaches.

<details><summary>References</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/State_space_model">State space model</a></li>
<li><a href="https://en.wikipedia.org/wiki/Mamba_(deep_learning_architecture)">Mamba (deep learning architecture) - Wikipedia</a></li>
<li><a href="https://developer.nvidia.com/nemotron">Nemotron AI Models | NVIDIA Developer</a></li>

</ul>
</details>

**Tags**: `#state space models`, `#deep learning`, `#sequence modeling`, `#open source`, `#machine learning`

---

<a id="item-10"></a>
## [AWS Adds Multi-Region Replication to Cognito](https://www.infoq.com/news/2026/06/cognito-replication-aws/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global) ⭐️ 7.0/10

AWS has introduced multi-region replication for Amazon Cognito, which automatically replicates user identities and pool configurations from a primary region to a secondary region, enabling automatic failover during outages. This feature simplifies building highly available authentication systems, reducing the need for custom replication and failover mechanisms, which is critical for applications requiring high resilience. Replication flows in one direction from the primary to the secondary region, and supports all authentication methods including social federation, SAML, OIDC, and M2M OAuth2 flows. It also provides a built-in Route 53 health check-based failover for custom domains.

rss · InfoQ · Jun 20, 07:40

**Background**: Amazon Cognito is a managed identity service for web and mobile applications. Previously, achieving multi-region resilience required custom replication and failover logic. This new feature automates that process, making it easier to maintain high availability.

<details><summary>References</summary>
<ul>
<li><a href="https://aws.amazon.com/blogs/aws/improve-your-application-resilience-with-amazon-cognito-multi-region-replication/">Improve your application resilience with Amazon Cognito ...</a></li>
<li><a href="https://www.infoq.com/news/2026/06/cognito-replication-aws/">AWS Adds Multi - Region Replication to Amazon Cognito ... - InfoQ</a></li>

</ul>
</details>

**Tags**: `#AWS`, `#Cognito`, `#multi-region replication`, `#high availability`, `#authentication`

---

<a id="item-11"></a>
## [CSSQuake: Play Quake Using Only CSS](https://cssquake.com/) ⭐️ 6.0/10

CSSQuake is a fully playable version of the classic game Quake rendered entirely with CSS, powered by the PolyCSS engine, without using JavaScript for rendering. This demo pushes the boundaries of what CSS can achieve, showing that complex 3D games can be rendered using only CSS transforms and other CSS features, inspiring creative web development. CSSQuake renders the game as inspectable HTML and CSS, meaning every element in the game world is a DOM node. However, community comments note issues like view clipping and floating enemies, and the game may still require JavaScript for input handling.

hackernews · msalsas · Jun 20, 10:49 · [Discussion](https://news.ycombinator.com/item?id=48608223)

**Background**: CSS is primarily used for styling web pages, but with modern features like 3D transforms, CSS math functions, and counters, developers have created pure CSS games. CSSQuake is part of a trend of CSS-only game engines, such as the Mantra CSS Game Engine and CSS is DOOMed, which demonstrate the potential of CSS for real-time graphics.

<details><summary>References</summary>
<ul>
<li><a href="https://cssquake.com/">cssQuake - Powered by PolyCSS</a></li>
<li><a href="https://nielsleenheer.com/articles/2026/css-is-doomed-rendering-doom-in-3d-with-css/">CSS is DOOMed - Rendering DOOM in 3D with CSS | Hello my name is Niels Leenheer</a></li>
<li><a href="https://medium.com/cssclass-com/how-to-create-pure-css-games-2a29c777bf4">How to Create Pure CSS Games. How I Built a Pure CSS Game — No JS | by Elad Shechter | cssclass.com | Medium</a></li>

</ul>
</details>

**Discussion**: Comments are generally positive, with users calling it 'awesome' and 'very cool'. Some note humorous comparisons to exiting vim, while others report technical issues like view clipping and floating enemies, suggesting the demo has bugs.

**Tags**: `#CSS`, `#game`, `#demo`, `#web`

---

<a id="item-12"></a>
## [Musk Exercises All 2018 Tesla Compensation Rights](https://36kr.com/newsflashes/3861257361626112?f=rss) ⭐️ 6.0/10

Elon Musk has fully exercised his rights under the 2018 Tesla CEO compensation plan, acquiring 304 million shares worth approximately $116 billion, as disclosed in a new SEC filing. This marks the largest CEO compensation package in history, reflecting Tesla's massive growth and Musk's alignment with shareholder value, though the shares are locked until 2028. The 2018 plan required Tesla to achieve ambitious market value, revenue, and EBIT targets; Musk received no guaranteed salary. The acquired shares are subject to a five-year lockup period ending in 2028.

rss · 36氪 · Jun 20, 08:34

**Background**: In 2018, Tesla's board proposed a unique compensation plan for Elon Musk with no fixed salary, only stock options tied to performance milestones. The plan was designed to incentivize Musk to grow Tesla into one of the world's most valuable companies. The SEC filing requirement ensures transparency in executive compensation.

<details><summary>References</summary>
<ul>
<li><a href="https://www.gurufocus.com/news/8924457/elon-musk-exercises-tesla-ceo-compensation-plan-secures-304m-shares">Elon Musk Exercises Tesla CEO Compensation Plan, Secures 304M Shares</a></li>
<li><a href="https://www.hbs.edu/faculty/Pages/item.aspx?num=54421">Tesla's CEO Compensation Plan - Case - Faculty & Research - Harvard Business School</a></li>

</ul>
</details>

**Tags**: `#Tesla`, `#Elon Musk`, `#compensation`, `#business`

---

<a id="item-13"></a>
## [UK to Mandate Local News on Meta, YouTube](https://36kr.com/newsflashes/3861056590222342?f=rss) ⭐️ 6.0/10

The UK government plans to mandate social media platforms like YouTube and Meta to prioritize local news content, with a public consultation expected as early as this month. This policy could reshape how news is distributed online, potentially boosting local journalism but raising concerns about platform regulation and editorial freedom. The rules would also require public service broadcasters like BBC, ITV, and Channel 4 to increase news content supply, and may extend to national and regional newspapers. Details are still being finalized.

rss · 36氪 · Jun 20, 07:33

**Background**: The UK has a strong tradition of public service broadcasting, with the BBC, ITV, and Channel 4 playing key roles. In recent years, social media platforms have become major news sources, often sidelining local outlets. The government aims to ensure local news remains visible and sustainable.

<details><summary>References</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Mass_media_in_the_United_Kingdom">Mass media in the United Kingdom - Wikipedia</a></li>
<li><a href="https://ibc.org/distribution-consumption/news/uk-public-service-broadcasters-unite-in-call-for-government-action/22525">UK public service broadcasters unite in call for government action</a></li>

</ul>
</details>

**Tags**: `#policy`, `#social media`, `#news`, `#UK`

---

---

## 🔭 Unknown Unknowns

- [Human-Made Rocks: Technofossils Redefine Geology](https://aeon.co/essays/the-strange-rocks-that-wouldnt-exist-without-us) ⭐️ 9.0/10

  > The essay introduces 'technofossils'—human-made rocks and materials that blur the line between natural and artificial, expanding the scope of geology in the Anthropocene. This challenges traditional geology by recognizing human activity as a geological force, forcing us to reconsider what is 'natural' and how future geologists will interpret our era. Examples include concrete, plastics, and other synthetic materials that persist in the geological record, potentially becoming lasting markers of the Anthropocene epoch.

- [Nick Land's Accelerationism: The No-Human Future](https://aeon.co/essays/what-is-nick-lands-philosophy-of-accelerationism-really) ⭐️ 9.0/10

  > An essay by Vincent Lê on Aeon explores Nick Land's accelerationist philosophy, which views technological capitalism as an uncontrollable, inhuman force driving toward a post-human future. This essay introduces a niche but influential school of thought that most tech professionals have never encountered, with deep implications for understanding contemporary tech culture and political extremism. The essay highlights that both terrorists and tech bros view accelerationism as a revolutionary weapon, but Land glimpsed something much darker. It connects cybernetics, capitalism, and posthumanism.

- [Seven Layers of Selfhood: Personhood Defined by Choice](https://www.themarginalian.org/2026/06/16/amelie-rorty-the-identities-of-persons/) ⭐️ 9.0/10

  > The article presents a novel framework of seven layers of selfhood drawn from literature and philosophy, arguing that personhood is defined by capacities for choice rather than fixed traits. This perspective challenges essentialist views of identity, offering a dynamic model that integrates cognitive science and ethics, which is particularly relevant for AI and tech professionals grappling with definitions of personhood. The framework emphasizes intentions and capacities for choice over static traits, drawing on literary and philosophical sources to illustrate each layer.

- [Jeanne Villepreux-Power: Seamstress, Aquarium Inventor, Octopus Pioneer](https://www.themarginalian.org/2026/06/14/jeanne-villepreux-power-argonaut/) ⭐️ 9.0/10

  > A new essay highlights the forgotten contributions of Jeanne Villepreux-Power, a 19th-century self-taught naturalist who invented the first aquarium in 1832 and proved that argonauts produce their own shells, laying the groundwork for octopus intelligence research. This story corrects historical oversight by recognizing a woman who pioneered marine biology and aquarium technology, which are fundamental to modern aquatic research and public education. It also inspires tech professionals by showing how cross-disciplinary thinking can lead to breakthrough innovations. Villepreux-Power invented three types of aquaria: glass for small organisms, glass within a cage for larger species, and a submerged cage for deep-water studies. She used these to observe argonauts and disprove the ancient belief that they steal shells from other mollusks.

---

## 🧠 AI Learning

- [Logits, Temperature, and Top-P Sampling Explained](https://machinelearningmastery.com/the-statistics-of-token-selection-logits-temperature-and-top-p-walkthrough/) ⭐️ 8.0/10

  > A new technical walkthrough explains how logits, temperature, and top-p sampling control token selection in large language models, balancing coherence and creativity. Understanding these parameters is crucial for practitioners to fine-tune LLM outputs for specific tasks, from factual summarization to creative writing. Logits are raw scores from the model's final layer, which are converted to probabilities via softmax; temperature scales logits before softmax to control randomness, and top-p sampling selects from the smallest set of tokens whose cumulative probability exceeds a threshold p.

- [Continuous Batching Boosts LLM Inference Efficiency](https://machinelearningmastery.com/serving-multiple-users-at-once-how-continuous-batching-keeps-llm-inference-efficient/) ⭐️ 7.0/10

  > The article explains how continuous batching dynamically schedules token generation steps across requests, using ragged batching to avoid padding waste, unlike static batching which waits for entire batches to complete. Continuous batching can achieve up to 23x throughput improvement and reduce p50 latency for LLM inference, making it critical for serving multiple users efficiently in production. The article provides code examples comparing static batching (padding sequences to equal length) with continuous batching using a scheduler that adds new requests as slots free up. It also references vLLM and PagedAttention as implementations.

- [Building a Context Pruning Pipeline for LLM Agents](https://machinelearningmastery.com/building-a-context-pruning-pipeline-for-long-running-agents/) ⭐️ 7.0/10

  > A tutorial on MachineLearningMastery.com demonstrates how to implement a context pruning pipeline that uses semantic similarity to select the most relevant parts of a conversation history for long-running LLM agents. This addresses the critical engineering challenge of token limits in long-running agents, enabling them to maintain performance without exceeding context windows. The pipeline is encapsulated in a prune_context() function that takes the current prompt, full interaction history, and a parameter k for the number of semantically relevant past turns to retrieve.

- [Memory Systems for Long-Running AI Agents](https://pub.towardsai.net/memory-systems-for-long-running-agents-episodic-to-procedural-fdb6ebb19960?source=rss----98111c9905da---4) ⭐️ 7.0/10

  > A new article on Towards AI explores how long-running AI agents can use episodic and procedural memory systems to maintain context and learn across multiple sessions, moving beyond flat context windows. This matters because long-running agents—such as personal assistants or autonomous systems—need persistent memory to operate effectively over days or weeks, and understanding episodic and procedural memory provides a practical framework for building such systems. Episodic memory stores specific past experiences (e.g., user interactions), while procedural memory stores learned skills and behaviors for automatic execution. The article provides a conceptual overview but lacks deep implementation details.

- [Context Window Tax: Longer Memory Hurts AI Agents](https://pub.towardsai.net/the-context-window-tax-why-longer-memory-is-making-agents-dumber-not-smarter-3470c4e7bf8f?source=rss----98111c9905da---4) ⭐️ 7.0/10

  > A growing body of research and practical experience shows that increasing the context window size in LLMs degrades agent reliability due to attention dilution and the 'lost in the middle' problem, leading to silent failures and higher costs. This challenges the prevailing assumption that bigger context windows always improve AI performance, forcing engineering teams to reconsider their reliance on raw context size and adopt more careful context management strategies. The 'lost in the middle' problem describes a U-shaped performance curve where models perform well on information at the beginning and end of a prompt but poorly on information in the middle, even when that information is critical.

---

## ✍️ Language & Expression

- [Bill Gurley on Mental Models and Systems Thinking](https://fs.blog/knowledge-project-podcast/bill-gurley/) ⭐️ 8.0/10

  > Bill Gurley, a veteran investor and former Benchmark partner, shares his mental models and systems thinking insights on the Farnam Street Knowledge Project podcast. This episode offers actionable frameworks for improving reasoning and decision-making, drawing from Gurley's experience on Wall Street, at Benchmark, and with Uber's hypergrowth. Gurley now serves on the board of the Santa Fe Institute, where he studies complexity and systems thinking, and the podcast is available on YouTube, Spotify, Apple Podcasts, and with a transcript.

- [Mark Pincus on Innovation Rules](https://fs.blog/knowledge-project-podcast/mark-pincus/) ⭐️ 6.0/10

  > Mark Pincus, founder of Zynga, shared his rules for innovation in a podcast episode on Farnam Street, discussing how to build successful products by balancing proven ideas, better execution, and new concepts. This discussion offers practical insights from a seasoned entrepreneur who shaped the social gaming industry, providing a framework that can guide innovators and business leaders in evaluating and pursuing new opportunities. The podcast episode is available on YouTube, Spotify, Apple Podcasts, and includes a transcript. Pincus breaks down his approach to innovation, emphasizing the importance of starting with proven concepts before iterating to something new.

- [RiseGuide Founder Interview on Expert-Led Self-Improvement](https://nesslabs.com/riseguide-featured-tool?utm_source=rss&utm_medium=rss&utm_campaign=riseguide-featured-tool) ⭐️ 5.0/10

  > Ness Labs published an interview with Oleksandr Matsiuk, founder of RiseGuide, an app that provides personalized, expert-led plans for self-improvement. This interview highlights the growing trend of structured, expert-curated learning paths in the self-improvement space, offering users a more reliable alternative to generic advice. RiseGuide connects users with experts to create customized improvement plans, though the article lacks specific technical details or performance metrics.