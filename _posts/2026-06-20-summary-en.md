---
layout: default
title: "Horizon Summary: 2026-06-20 (EN)"
date: 2026-06-20
lang: en
---

> From 124 items, 13 important content pieces were selected

---

1. [Chip-based quantum network breaks 540km fiber distance](#item-1) ⭐️ 9.0/10
2. [Apple Unveils Core AI for On-Device Generative AI](#item-2) ⭐️ 9.0/10
3. [Intel and AMD unveil ACE extensions for efficient AI on x86](#item-3) ⭐️ 8.0/10
4. [UK Team Cancels Laser Noise in Quantum Sensors](#item-4) ⭐️ 8.0/10
5. [3D Optical Fiber Gripper Enables Precision Micromanipulation](#item-5) ⭐️ 8.0/10
6. [Chinese Academy of Sciences Breaks 3D DRAM Record with 4-Layer IGZO 2T0C](#item-6) ⭐️ 8.0/10
7. [Claude Fable 5 on Bedrock Requires Data Sharing with Anthropic](#item-7) ⭐️ 8.0/10
8. [AWS Adds Multi-Region Replication to Cognito](#item-8) ⭐️ 7.0/10
9. [GLM 5.2: High Effort Uses Half Tokens, Retains 98% Intelligence](#item-9) ⭐️ 7.0/10
10. [Running Qwen 27B with 131k Context on 24GB AMD GPU](#item-10) ⭐️ 7.0/10
11. [Natural Language Tactical Instructions for Multi-Agent Football AI](#item-11) ⭐️ 7.0/10
12. [UK Plans to Mandate Local News Boost on Social Platforms](#item-12) ⭐️ 6.0/10

---

<a id="item-1"></a>
## [Chip-based quantum network breaks 540km fiber distance](https://www.ithome.com/0/966/525.htm) ⭐️ 9.0/10

Pan Jianwei's team demonstrated a chip-based quantum key distribution (QKD) network using the twin-field QKD (TF-QKD) protocol, achieving secure key generation over 540 km of ultra-low-loss fiber with a key rate of 2.93 bps, exceeding the repeaterless key capacity by 9 times. The results were published in Nature Photonics on June 19, 2026. This breakthrough significantly advances the practical deployment of quantum communication by integrating key components onto photonic chips, reducing system complexity and cost. It paves the way for scalable, secure quantum networks that can serve many users over metropolitan and intercity distances. The chip-based transmitter integrates a self-injection-locked laser on a silicon nitride (Si3N4) microring resonator with 100 Hz linewidth and a thin-film lithium niobate (TFLN) photonic chip containing modulators with 25 GHz bandwidth, 2.6 V half-wave voltage, and 34 dB extinction ratio. The network uses a quantum leaf-spine architecture supporting flexible user connections and scalability.

rss · IT之家 · Jun 20, 07:51

**Background**: Quantum key distribution (QKD) allows two parties to share a secure key with information-theoretic security. Twin-field QKD (TF-QKD) overcomes the rate-distance limit of traditional QKD, enabling longer distances, but requires extremely stable single-photon interference between two independent lasers. Chip integration aims to reduce the size, cost, and complexity of QKD systems.

<details><summary>References</summary>
<ul>
<li><a href="https://mozi.ustc.edu.cn/detail/418">量 子 密 钥 分 发 ：从BB84到 TF - QKD （上）</a></li>
<li><a href="https://www.nsfc.gov.cn/publish/portal0/tab1358/info93612.htm">我国学者成功实现基于本地频率参考的 双 场 量 子 密 钥 分 发</a></li>

</ul>
</details>

**Tags**: `#quantum communication`, `#quantum key distribution`, `#photonics`, `#chip integration`, `#network security`

---

<a id="item-2"></a>
## [Apple Unveils Core AI for On-Device Generative AI](https://www.infoq.com/news/2026/06/apple-core-ai-wwdc/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global) ⭐️ 9.0/10

At WWDC 26, Apple announced Core AI, a new framework that replaces Core ML, enabling developers to run large language models and generative AI entirely on-device with zero server dependencies. This marks a major shift from cloud-based AI to on-device processing, enhancing privacy, reducing latency, and eliminating token costs, which could accelerate adoption of generative AI in iOS and macOS apps. Core AI supports both custom-converted PyTorch models and pre-optimized open-source models, and is purpose-built for Apple Silicon with a modern, memory-safe Swift API.

rss · InfoQ · Jun 20, 11:00

**Background**: Core ML was Apple's machine learning framework introduced in 2017, primarily for traditional ML models. With the rise of generative AI and large language models, Apple developed Core AI to provide optimized on-device inference, leveraging Apple Silicon's unified memory architecture and Neural Engine.

<details><summary>References</summary>
<ul>
<li><a href="https://developer.apple.com/core-ai/">Core AI - Apple Developer</a></li>
<li><a href="https://www.everydev.ai/tools/apple-core-ai">Core AI - Apple On-Device AI Framework | EveryDev. ai</a></li>
<li><a href="https://www.aimadetools.com/blog/core-ai-vs-core-ml/">Core AI vs Core ML: Which Apple Framework Should You Use in 2026?</a></li>

</ul>
</details>

**Tags**: `#Apple`, `#Generative AI`, `#On-Device ML`, `#Core AI`, `#WWDC`

---

<a id="item-3"></a>
## [Intel and AMD unveil ACE extensions for efficient AI on x86](https://www.tomshardware.com/pc-components/cpus/intel-and-amds-new-ace-cpu-extensions-bring-an-efficient-ai-oriented-instruction-set-to-x86-a-new-design-makes-matrix-multiplication-more-power-and-density-efficient) ⭐️ 8.0/10

Intel and AMD have jointly announced the AI Compute Extensions (ACE) for x86 processors, a new instruction set designed to accelerate matrix multiplication and support low-precision data formats, improving power and density efficiency for AI workloads. ACE brings native AI acceleration to general-purpose x86 CPUs, reducing reliance on discrete GPUs or specialized accelerators for many machine learning tasks, which could lower costs and broaden AI adoption across data centers and edge devices. ACE integrates with the existing AVX10 vector extension and focuses on efficient matrix multiplication and low-precision (e.g., INT8, BF16) data types, which are critical for neural network inference and training.

rss · Tom's Hardware · Jun 20, 12:00

**Background**: Matrix multiplication is a core operation in AI workloads like neural networks. Traditional x86 CPUs handle it via general-purpose instructions, which can be inefficient. Previous extensions like Intel's AMX (Advanced Matrix Extensions) already targeted this, but ACE is a cross-vendor standard from both Intel and AMD, ensuring broader compatibility and optimization across x86 platforms.

<details><summary>References</summary>
<ul>
<li><a href="https://overclock3d.net/news/cpu_mainboard/amd-and-intel-confirm-ace-ai-compute-extensions-for-x86/">AMD and Intel confirm "ACE" AI Compute Extensions for x86 - OC3D</a></li>
<li><a href="https://www.digitalcitizen.life/amd-and-intel-prepare-ace-extensions-to-make-future-x86-cpus-better-at-ai-workloads/">AMD And Intel Prepare ACE Extensions To Make Future x86 CPUs Better At AI Workloads</a></li>
<li><a href="https://x86ecosystem.org/wp-content/uploads/2026/03/ACE-Whitepaper-v1.pdf">The AI Compute Extensions (ACE) for x86</a></li>

</ul>
</details>

**Tags**: `#CPU`, `#AI`, `#x86`, `#instruction set`, `#matrix multiplication`

---

<a id="item-4"></a>
## [UK Team Cancels Laser Noise in Quantum Sensors](https://www.ithome.com/0/966/546.htm) ⭐️ 8.0/10

A UK collaboration led by Imperial College London demonstrated a differential measurement technique that cancels laser phase noise in atomic interferometers, recovering signals even when single-device measurements are overwhelmed by noise. The results were published in Nature on June 17, 2026. This breakthrough removes a major obstacle to building large-scale quantum sensors, enabling detection of ultra-weak signals from dark matter and early-universe gravitational waves. It paves the way for kilometer-scale atomic interferometers that could probe physics beyond the Standard Model. The team used two clouds of ultracold strontium-87 atoms as separate interferometers, sharing the same ultra-stable clock laser. By comparing their outputs, common laser noise was canceled, achieving sensitivity at the quantum limit even when extra noise was deliberately added.

rss · IT之家 · Jun 20, 11:43

**Background**: Atomic interferometers use laser pulses to manipulate atoms and measure tiny phase shifts caused by forces like gravity or acceleration. However, laser phase noise is typically much larger than the target signal, limiting sensitivity. The AION (Atom Interferometer Observatory and Network) project aims to build large-scale interferometers to search for dark matter and gravitational waves.

<details><summary>References</summary>
<ul>
<li><a href="https://www.hep.ph.ic.ac.uk/AION-Project/">AION @ Imperial: Home</a></li>
<li><a href="https://quantumzeitgeist.com/atom-interferometer-ukri-funds-aion/">UKRI Funds AION to Build First Large-Scale Atom Interferometer</a></li>

</ul>
</details>

**Tags**: `#quantum sensing`, `#atomic interferometer`, `#dark matter`, `#gravitational waves`, `#physics research`

---

<a id="item-5"></a>
## [3D Optical Fiber Gripper Enables Precision Micromanipulation](https://www.ithome.com/0/966/545.htm) ⭐️ 8.0/10

Researchers from Anhui University and USTC developed a 3D optical fiber gripper (OFG) using femtosecond laser 3D printing, published in Nature on June 17, 2026. The device combines optical and mechanical functions to achieve high-performance micromanipulation. This breakthrough bridges the gap between optical tweezers and mechanical grippers, offering force output over 100,000 times that of traditional optical tweezers. It enables precise manipulation of opaque objects and single cells in confined spaces, with potential applications in biomedicine, advanced manufacturing, and photonics. The OFG measures 38×38×61 μm³ and is fabricated via two-photon polymerization 3D printing on a commercial optical fiber tip. It consists of rigid photoresist micro-jaws and silver nanoparticle-doped thermoresponsive hydrogel muscles, achieving a force-to-mass ratio of ~340 μN/mg, one to two orders of magnitude higher than previous fiber-integrated grippers.

rss · IT之家 · Jun 20, 11:23

**Background**: Optical tweezers, which won the 2018 Nobel Prize in Physics, use focused light to trap particles but provide weak forces and cannot handle opaque objects. Traditional microgrippers offer stronger forces but are bulky and complex. Femtosecond laser 3D printing, based on two-photon polymerization, enables fabrication of arbitrary 3D microstructures with submicron resolution.

<details><summary>References</summary>
<ul>
<li><a href="https://www.nature.com/articles/s41586-026-10673-7">Optical fibre gripper for high-performance 3D micromanipulation</a></li>
<li><a href="https://www.azom.com/article.aspx?ArticleID=21355">What is Femtosecond Laser-Based 3D Printing?</a></li>
<li><a href="https://en.wikipedia.org/wiki/Two-photon_polymerization">Two-photon polymerization</a></li>

</ul>
</details>

**Tags**: `#micromanipulation`, `#optical fiber`, `#femtosecond laser`, `#Nature`, `#nanotechnology`

---

<a id="item-6"></a>
## [Chinese Academy of Sciences Breaks 3D DRAM Record with 4-Layer IGZO 2T0C](https://www.ithome.com/0/966/543.htm) ⭐️ 8.0/10

Researchers from the Institute of Microelectronics of the Chinese Academy of Sciences, in collaboration with Beijing Superstring Equipment Research Institute, have demonstrated the first 4-layer 3D 2T0C DRAM using IGZO transistors, achieving a record data retention of 400 seconds and 3 bits per cell. The work was accepted at VLSI 2026. This breakthrough addresses the critical need for high-density, high-bandwidth memory in AI and high-performance computing by enabling monolithic 3D integration of DRAM without capacitors. It could pave the way for more compact and efficient memory solutions, reducing the performance gap between logic and memory. The new 3D DRAM uses a dual-gate IGZO 2T0C cell with vertical word-line architecture, optimized for read margin and stability. The 400-second data retention is significantly longer than typical DRAM retention (milliseconds), and the 3 bits/cell capability further boosts density.

rss · IT之家 · Jun 20, 10:33

**Background**: Traditional DRAM uses a 1T1C (one transistor, one capacitor) cell, which faces scaling challenges due to the capacitor. The 2T0C (two-transistor, zero-capacitor) architecture eliminates the capacitor, using IGZO transistors with extremely low off-state current to store charge. This allows stacking multiple layers directly on logic chips, offering a path to higher memory density and bandwidth.

<details><summary>References</summary>
<ul>
<li><a href="https://www.electronicspecifier.com/products/memory/novel-2t0c-dynamic-random-access-memory-cell-architecture/">Novel 2 T 0 C dynamic random - access memory cell architecture</a></li>
<li><a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12101486/">3D stacked IGZO 2 T 0 C DRAM array with multibit capability for...</a></li>
<li><a href="https://semiengineering.com/baby-steps-towards-3d-dram/">Baby Steps Toward 3D DRAM</a></li>

</ul>
</details>

**Tags**: `#3D DRAM`, `#IGZO`, `#semiconductor`, `#memory technology`, `#VLSI`

---

<a id="item-7"></a>
## [Claude Fable 5 on Bedrock Requires Data Sharing with Anthropic](https://www.infoq.com/news/2026/06/bedrock-fable-5-data-sharing/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global) ⭐️ 8.0/10

Using Claude Fable 5 or Mythos 5 on Amazon Bedrock now requires opting into provider_data_share, sending prompts and outputs to Anthropic for 30-day retention with human review. Three days after launch, Anthropic asked AWS to revoke access to both models due to US export control compliance. This breaks the previous AWS boundary where inference data stayed within AWS, raising significant data privacy and compliance concerns for enterprises. The sudden access revocation also undermines trust and may impact adoption of Anthropic models on Bedrock. The data sharing must be enabled via the Data Retention API with no console UI at launch. Anthropic cited US export control compliance as the reason for revoking access, but the specific export control concerns were not detailed.

rss · InfoQ · Jun 20, 09:03

**Background**: Amazon Bedrock is a managed service that provides access to foundation models from various providers via API. Previously, Bedrock did not share inference data with third-party model providers, and AWS stated it does not store or share customer data. Anthropic's Claude models are known for safety-focused design, but this data-sharing requirement represents a policy shift.

<details><summary>References</summary>
<ul>
<li><a href="https://www.infoq.com/news/2026/06/bedrock-fable-5-data-sharing/">Claude Fable 5 on Bedrock Requires Sharing Inference Data ...</a></li>
<li><a href="https://docs.aws.amazon.com/bedrock/latest/userguide/model-card-anthropic-claude-fable-5.html">Claude Fable 5 - Amazon Bedrock</a></li>
<li><a href="https://www.repost.aws/knowledge-center/amazon-bedrock-model-data-use">Does Amazon Bedrock share input and output data with model ...</a></li>

</ul>
</details>

**Tags**: `#AI`, `#data privacy`, `#AWS`, `#Anthropic`, `#compliance`

---

<a id="item-8"></a>
## [AWS Adds Multi-Region Replication to Cognito](https://www.infoq.com/news/2026/06/cognito-replication-aws/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global) ⭐️ 7.0/10

AWS has introduced multi-region replication for Amazon Cognito, automatically synchronizing user identities and pool configurations from a primary region to a secondary region in near real-time. This feature enables automatic failover for user authentication during regional outages, eliminating the need for custom replication and failover mechanisms, and significantly improving application resilience for AWS customers. The replication includes user credentials, user pool configurations, and federation setups, and it allows users to continue authenticating without forced password resets during failover.

rss · InfoQ · Jun 20, 07:40

**Background**: Amazon Cognito is a managed identity service for web and mobile applications. Previously, Cognito user pools were regional resources with no built-in global replication, making multi-region disaster recovery challenging. This new feature addresses that gap by providing automated replication and failover.

<details><summary>References</summary>
<ul>
<li><a href="https://aws.amazon.com/blogs/aws/improve-your-application-resilience-with-amazon-cognito-multi-region-replication/">Improve your application resilience with Amazon Cognito multi-Region replication | Amazon Web Services</a></li>
<li><a href="https://aws.amazon.com/about-aws/whats-new/2026/06/amazon-cognito-multi-region/">Amazon Cognito now supports multi-Region replication - AWS</a></li>
<li><a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-multi-region.html">Multi-Region replication for user pools - Amazon Cognito</a></li>

</ul>
</details>

**Tags**: `#AWS`, `#Cognito`, `#multi-region replication`, `#disaster recovery`, `#authentication`

---

<a id="item-9"></a>
## [GLM 5.2: High Effort Uses Half Tokens, Retains 98% Intelligence](https://www.reddit.com/r/LocalLLaMA/comments/1uar4e2/glm_52_98_of_max_level_intelligence_with_less/) ⭐️ 7.0/10

GLM 5.2's 'high' effort level uses less than half the tokens of 'max' while achieving 98% of max-level intelligence in coding tasks, as shown in the z.ai technical report. This token efficiency makes GLM 5.2 more accessible for local users with limited hardware, reducing wait times and computational costs while maintaining near-max performance. The 'high' effort level uses about 6k tokens compared to 36.7k for 'max', and the difference in answer quality is often negligible in practice. However, results may vary with quantization (e.g., Q4) and specific tasks.

reddit · r/LocalLLaMA · /u/perelmanych · Jun 20, 08:19

**Background**: GLM 5.2 is an open-source large language model with a 1M-token context window, designed for long-horizon coding tasks. It uses reasoning tokens for chain-of-thought processing, and its effort level control lets users trade off capability for speed and cost.

<details><summary>References</summary>
<ul>
<li><a href="https://openlm.ai/glm-5.2/">GLM-5.2 | OpenLM.ai</a></li>
<li><a href="https://z.ai/blog/glm-5.2">GLM-5.2: Built for Long-Horizon Tasks - z.ai</a></li>
<li><a href="https://docs.z.ai/guides/llm/glm-5.2">GLM-5.2 - Overview - Z.AI DEVELOPER DOCUMENT</a></li>

</ul>
</details>

**Discussion**: The Reddit user reported that after testing, the 'high' level produced very similar answers to 'max' for a math problem, with the main difference being presentation rather than correctness. They recommend 'high' for daily use and 'max' only when perfect results are needed.

**Tags**: `#GLM 5.2`, `#token efficiency`, `#local LLM`, `#reasoning tokens`, `#AI inference`

---

<a id="item-10"></a>
## [Running Qwen 27B with 131k Context on 24GB AMD GPU](https://www.reddit.com/r/LocalLLaMA/comments/1uar6in/7900xtx_24gb_vram_can_finally_fit_q6kmtp_with/) ⭐️ 7.0/10

A user demonstrated that by connecting the monitor to the iGPU and using KV cache quantization at Q5_0/Q4_0, the Qwen 3.6 27B model can run with 131k context on a single 24GB AMD Radeon 7900 XTX, achieving 55-60 tokens per second. This method significantly expands the practical context window for local LLM inference on consumer AMD GPUs, enabling tasks like long document analysis or extended conversations without cloud dependency. The user compiled llama.cpp with -DGGML_CUDA_FA_ALL_QUANTS=true and used -ctk q5_0 -ctv q4_0 for KV cache quantization, which reduces VRAM usage by about 12% with only 1.6% precision loss compared to Q8.

reddit · r/LocalLLaMA · /u/soyalemujica · Jun 20, 08:23

**Background**: Large language models require significant VRAM for both model weights and the key-value (KV) cache, which grows with context length. KV cache quantization reduces the memory footprint of the cache by using lower-precision numbers, allowing longer contexts on limited hardware. The Q6K quantization is a GGUF format that balances model size and quality.

<details><summary>References</summary>
<ul>
<li><a href="https://github.com/ggml-org/llama.cpp">GitHub - ggml-org/llama.cpp: LLM inference in C/C++</a></li>
<li><a href="https://huggingface.co/blog/kv-cache-quantization">Unlocking Longer Generation with Key-Value Cache Quantization</a></li>
<li><a href="https://ggufbench.com/knowledge/quantization/">Understanding Quantization — GGUF Bench</a></li>

</ul>
</details>

**Tags**: `#local-llm`, `#amd-gpu`, `#vram-optimization`, `#llama.cpp`, `#qwen`

---

<a id="item-11"></a>
## [Natural Language Tactical Instructions for Multi-Agent Football AI](https://www.reddit.com/r/LocalLLaMA/comments/1uawkdg/research_project_injecting_naturallanguage/) ⭐️ 7.0/10

A research project called Football Tactical AI explores using natural language instructions (e.g., "Press aggressively") to guide multi-agent football policies, where AI players adapt their behavior based on high-level human intent. This work bridges natural language processing and multi-agent reinforcement learning, offering a more intuitive human-AI interaction paradigm for complex team coordination tasks beyond football. The project treats human intent as a continuous control interface rather than a one-time command, requiring agents to remain adaptive to local situations while following tactical goals. The testbed is football, chosen for its long time horizons and need for team-level coordination.

reddit · r/LocalLLaMA · /u/Working_Original9624 · Jun 20, 13:24

**Background**: Multi-agent reinforcement learning (MARL) trains multiple agents to cooperate or compete in shared environments. Recent work like LangMARL uses natural language for credit assignment and policy improvement. This project extends the idea by using language as a high-level control interface for human-in-the-loop coaching.

<details><summary>References</summary>
<ul>
<li><a href="https://github.com/Yabyeab9/football-tactical-ai">GitHub - Yabyeab9/ football - tactical - ai : AI platform for tactical style...</a></li>
<li><a href="https://arxiv.org/abs/2604.00722">LangMARL: Natural Language Multi-Agent Reinforcement Learning Safe Multi-agent Reinforcement Learning with Natural Language ... A hierarchical multi-agent reinforcement learning framework ... TalkToAgent: A multi-agent LLM Framework for natural language ... GitHub - yuqian2003/Co_Learning: This repository hosts the ... Multi-Agent Reinforcement Learning in AI - GeeksforGeeks</a></li>

</ul>
</details>

**Tags**: `#multi-agent systems`, `#natural language processing`, `#reinforcement learning`, `#AI research`

---

<a id="item-12"></a>
## [UK Plans to Mandate Local News Boost on Social Platforms](https://36kr.com/newsflashes/3861056590222342?f=rss) ⭐️ 6.0/10

The UK government plans to mandate social media platforms like YouTube and Meta to increase the visibility of local news content, with a public consultation expected as early as this month. This policy could reshape how news is distributed online, potentially increasing the reach of local journalism while imposing new obligations on global tech platforms. The rules would require public service broadcasters like BBC, ITV, and Channel 4 to supply more news content, and may extend to national and regional newspapers. Details are still being finalized.

rss · 36氪 · Jun 20, 07:33

**Background**: Social media platforms have been criticized for reducing the visibility of news, especially local news, in favor of user-generated content. The UK has been active in regulating online platforms, including the Online Safety Act. This move aims to support local journalism, which has faced financial challenges.

**Tags**: `#policy`, `#social media`, `#news`, `#UK`, `#regulation`

---

---

## 🔭 Unknown Unknowns

- [The Dilution of 'Trauma' in Modern Language](https://aeon.co/essays/not-everything-is-trauma-language-needs-to-mean-something) ⭐️ 4.0/10

  > Lily Dunn's essay argues that the word 'trauma' has been overused and diluted in popular discourse, losing its original meaning for genuine psychological experiences. This matters because language shapes how we understand and respond to suffering; reclaiming 'trauma' can help preserve its clinical significance and prevent trivialization of serious experiences. The essay contrasts genuine trauma (e.g., from war or abuse) with everyday stressors now labeled as trauma, and calls for a return to precise language.