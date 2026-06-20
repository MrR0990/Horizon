---
layout: default
title: "Horizon Summary: 2026-06-20 (EN)"
date: 2026-06-20
lang: en
---

> From 116 items, 13 important content pieces were selected

---

1. [Pan's Team Builds Chip-Based Quantum Network Over 540km Fiber](#item-1) ⭐️ 9.0/10
2. [CAS Demonstrates 4-Layer 3D 2T0C DRAM with 400s Retention](#item-2) ⭐️ 8.0/10
3. [LM Studio and Apple Run Trillion-Parameter Kimi K2.6 on Mac Cluster](#item-3) ⭐️ 8.0/10
4. [Caltech Begins Construction of Most Sensitive Radio Telescope Array](#item-4) ⭐️ 8.0/10
5. [BabelTele: AI Language Compresses Text to 27.9% with 99.5% Accuracy](#item-5) ⭐️ 8.0/10
6. [Claude Fable 5 on Bedrock Requires Data Sharing with Anthropic](#item-6) ⭐️ 8.0/10
7. [New Quantum Sensor Detects Gravitational Waves and Dark Matter](#item-7) ⭐️ 8.0/10
8. [3D Fiber Micro-Tweezers Exceed Traditional Optical Tweezers Force by 100,000x](#item-8) ⭐️ 8.0/10
9. [Exploring Colors Beyond Screen Gamuts](#item-9) ⭐️ 7.0/10
10. [Satellite study reveals GPS tampering far worse than expected](#item-10) ⭐️ 7.0/10
11. [AWS Launches Multi-Region Replication for Cognito](#item-11) ⭐️ 7.0/10
12. [Storing a Website in a Favicon via Pixel Encoding](#item-12) ⭐️ 6.0/10
13. [UK Plans to Force Meta, YouTube to Boost Local News](#item-13) ⭐️ 6.0/10

---

<a id="item-1"></a>
## [Pan's Team Builds Chip-Based Quantum Network Over 540km Fiber](https://www.ithome.com/0/966/525.htm) ⭐️ 9.0/10

Researchers led by Pan Jianwei demonstrated a chip-based quantum key distribution (QKD) network using the twin-field QKD (TF-QKD) protocol, achieving secure key generation over 540 km of optical fiber with a loss of 91.5 dB. The results were published in Nature Photonics on June 19, 2026. This work represents a major step toward practical, scalable quantum communication networks by integrating key components onto photonic chips, significantly reducing system complexity. It demonstrates that chip-based QKD can overcome the rate-loss limit and support many users, paving the way for secure quantum internet. The chip-based transmitter integrates a self-injection locking laser on a silicon nitride micro-ring resonator (linewidth ~100 Hz) and a thin-film lithium niobate (TFLN) photonic integrated circuit with modulators achieving 25 GHz bandwidth, 2.6 V half-wave voltage, and 34 dB extinction ratio. The network uses a quantum leaf-spine architecture to support flexible user connections and scalability.

rss · IT之家 · Jun 20, 07:51

**Background**: Quantum key distribution (QKD) allows two parties to share a secret key with information-theoretic security. Twin-field QKD (TF-QKD) overcomes the fundamental rate-loss limit of conventional QKD, enabling longer distances without quantum repeaters. However, TF-QKD requires extremely stable lasers and precise interference, which has hindered practical deployment. Chip integration offers a path to reduce size, cost, and complexity.

<details><summary>References</summary>
<ul>
<li><a href="https://www.nature.com/articles/s42005-020-00415-0?error=cookies_not_supported">Optimized protocol for twin-field quantum key distribution</a></li>
<li><a href="https://arxiv.org/abs/2212.05730">[2212.05730] Recent Advances in Laser Self-Injection Locking to High-$Q$ Microresonators</a></li>
<li><a href="https://www.nature.com/articles/s41467-023-40502-8">High density lithium niobate photonic integrated circuits | Nature Communications</a></li>

</ul>
</details>

**Tags**: `#quantum communication`, `#quantum key distribution`, `#photonics`, `#chip integration`, `#network security`

---

<a id="item-2"></a>
## [CAS Demonstrates 4-Layer 3D 2T0C DRAM with 400s Retention](https://www.ithome.com/0/966/543.htm) ⭐️ 8.0/10

Researchers at the Chinese Academy of Sciences have demonstrated the first 4-layer 3D 2T0C DRAM structure using IGZO transistors, achieving 400-second data retention and 3 bits per cell. The work has been accepted at VLSI 2026. This breakthrough addresses the need for high-capacity, high-bandwidth memory in AI and HPC by enabling dense 3D integration of DRAM without capacitors. It could lead to more efficient on-chip memory solutions, reducing latency and improving performance. The 3D DRAM uses a vertical word line architecture and dual-gate 2T0C cell design, optimizing read margin and stability. The IGZO transistors enable both fast write and long retention (400 seconds), with 3-bit storage per cell to further increase density.

rss · IT之家 · Jun 20, 10:33

**Background**: Traditional DRAM uses a 1T1C (one transistor, one capacitor) cell, which faces scaling challenges as capacitors become harder to fabricate at advanced nodes. 2T0C DRAM eliminates the capacitor, using two transistors (one for write, one for read) and the parasitic capacitance of the read transistor for storage. IGZO (indium gallium zinc oxide) is an oxide semiconductor with extremely low off-state current, making it ideal for capacitor-less DRAM. 3D stacking of memory layers can dramatically increase density, similar to 3D NAND.

<details><summary>References</summary>
<ul>
<li><a href="https://www.science.org/doi/10.1126/sciadv.adu4323">3D stacked IGZO 2T0C DRAM array with multibit capability for computing in memory applications | Science Advances</a></li>
<li><a href="https://www.imec-int.com/en/articles/disrupting-dram-roadmap-capacitor-less-igzo-dram-technology">Disrupting the DRAM roadmap with capacitor-less IGZO- ...</a></li>

</ul>
</details>

**Tags**: `#DRAM`, `#3D integration`, `#IGZO`, `#semiconductor`, `#memory technology`

---

<a id="item-3"></a>
## [LM Studio and Apple Run Trillion-Parameter Kimi K2.6 on Mac Cluster](https://www.ithome.com/0/966/539.htm) ⭐️ 8.0/10

LM Studio and Apple successfully ran the trillion-parameter Kimi K2.6 model on a cluster of four Mac Studios at WWDC 2026, using memory pooling and Thunderbolt 5 RDMA, and enabled secure remote access via LM Link from MacBook Neo and iPhone. This demonstrates that consumer-grade Apple hardware can handle frontier-scale AI models locally, reducing reliance on expensive GPU clusters and advancing privacy-preserving local AI deployment. It also highlights the growing ecosystem for on-device AI inference. The Kimi K2.6 model has 1 trillion total parameters with 32 billion activated via MoE architecture, and the four Mac Studios achieved a unified memory pool of about 1.5 TB. In similar tests, inference speed reached approximately 28 tokens per second with lower power consumption than traditional GPU clusters.

rss · IT之家 · Jun 20, 09:37

**Background**: Mixture-of-Experts (MoE) is a neural network architecture that activates only a subset of parameters per input, enabling larger models with lower computational cost. RDMA (Remote Direct Memory Access) over Thunderbolt 5 allows multiple Macs to share memory with low latency, effectively pooling their unified memory for large model inference. LM Link is a secure remote access feature that creates end-to-end encrypted connections to LM Studio instances.

<details><summary>References</summary>
<ul>
<li><a href="https://www.jeffgeerling.com/blog/2025/15-tb-vram-on-mac-studio-rdma-over-thunderbolt-5/">1.5 TB of VRAM on Mac Studio - RDMA over Thunderbolt 5 - Jeff Geerling</a></li>
<li><a href="https://stabilise.io/blog-pages/blog/apples-rdma-revolution-how-mac-clusters-are-changing-local-ai-hosting">Apple's RDMA Revolution: How Mac Clusters Are Changing Local AI Hosting | Stabilise</a></li>
<li><a href="https://ubos.tech/news/tailscale-and-lm-studio-launch-lm‑link-for-encrypted-point‑to‑point-gpu-access/">Tailscale and LM Studio Launch LM ‑ Link for Encrypted... - UBOS</a></li>

</ul>
</details>

**Tags**: `#AI`, `#Apple`, `#Large Language Models`, `#Local Deployment`, `#Hardware`

---

<a id="item-4"></a>
## [Caltech Begins Construction of Most Sensitive Radio Telescope Array](https://www.ithome.com/0/966/530.htm) ⭐️ 8.0/10

Caltech has started construction of the Deep Synoptic Array (DSA), which upon completion in 2029 will consist of 1,650 dishes and become the most sensitive and fastest survey radio telescope array ever built. DSA is expected to discover billions of new radio sources in its first survey, revolutionizing our understanding of fast radio bursts, pulsars, and dark energy, and will provide real-time open data to the global community. Each dish is 6.1 meters in diameter, spread over a 19.3×16.1 km area in a remote Nevada desert. The array uses 0.7–2 GHz frequency range and is built with cost-saving measures like using cake pan molds from Fat Daddio’s for antenna components.

rss · IT之家 · Jun 20, 08:25

**Background**: Radio telescope arrays combine signals from multiple antennas to achieve high resolution, but they are less sensitive to faint signals than single large dishes. DSA's vast number of dishes and wide area coverage enable both high sensitivity and fast survey speed, ideal for studying transient phenomena like fast radio bursts.

<details><summary>References</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Deep_Synoptic_Array">Deep Synoptic Array - Wikipedia</a></li>
<li><a href="https://www.deepsynoptic.org/overview">DSA -2000 — Deep Synoptic Array ( DSA )</a></li>
<li><a href="https://en.wikipedia.org/wiki/Fast_radio_burst">Fast radio burst - Wikipedia</a></li>

</ul>
</details>

**Tags**: `#radio astronomy`, `#telescope array`, `#Caltech`, `#astrophysics`, `#deep space survey`

---

<a id="item-5"></a>
## [BabelTele: AI Language Compresses Text to 27.9% with 99.5% Accuracy](https://www.ithome.com/0/966/529.htm) ⭐️ 8.0/10

Researchers from multiple Chinese universities and the University of Sydney proposed BabelTele, a text compression method that converts natural language into a dense, model-readable format, achieving 27.9% of original size while retaining 99.5% semantic accuracy for LLMs. This research challenges the assumption that LLMs require human-readable prompts, potentially reducing token costs and improving efficiency in multi-agent communication and long-context processing. BabelTele fuses multilingual vocabulary, mathematical symbols, logical operators, and emojis to create a dense representation. It outperforms traditional summarization and prompt compression tools like LLMLingua-2 on benchmarks such as MeetingBank and QuALITY.

rss · IT之家 · Jun 20, 08:18

**Background**: Current LLMs interact using natural language designed for humans, which contains significant redundancy. BabelTele is a model-oriented representation that sacrifices human readability to achieve higher information density, enabling zero-shot transfer between different LLMs.

<details><summary>References</summary>
<ul>
<li><a href="https://arxiv.org/list/cs/new">Computer Science - arXiv</a></li>
<li><a href="https://www.alphaxiv.org/?organizations=["Tsinghua+University","Zhipu+AI","Beijing+Jiaotong+University","University+of+Science+and+Technology+of+China","Northeastern+University","Sapient+Intelligence","Pazhou+Laboratory","Nanjing+University","Princeton+AI+Lab","National+University+of+Singapore","Peking+University","Shanghai+AI+Lab","DeepSeek","University+of+Manchester","ShengShu","Google+Cloud+AI+Research","Fudan+University"]">Ask or search anything... - alphaXiv</a></li>

</ul>
</details>

**Tags**: `#LLM`, `#text compression`, `#AI efficiency`, `#natural language processing`, `#research`

---

<a id="item-6"></a>
## [Claude Fable 5 on Bedrock Requires Data Sharing with Anthropic](https://www.infoq.com/news/2026/06/bedrock-fable-5-data-sharing/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global) ⭐️ 8.0/10

Amazon Bedrock now requires customers using Claude Fable 5 or Mythos 5 to opt into provider_data_share, sending prompts and outputs to Anthropic for 30-day retention with human review, breaking from previous models that kept inference data within AWS. Three days after launch, Anthropic requested AWS to revoke access to both models due to US export control compliance. This change signals a shift in data privacy practices for enterprise AI deployments on AWS, potentially affecting compliance-sensitive industries. The export control revocation highlights growing geopolitical constraints on advanced AI model access. The provider_data_share mandate applies specifically to the Mythos-class tier, currently Fable 5 and Mythos 5. At launch, the models were available in US East (N. Virginia) and Europe (Stockholm) regions.

rss · InfoQ · Jun 20, 09:03

**Background**: Amazon Bedrock is a managed service that provides access to foundation models from various providers via API. Previously, inference data for Bedrock models remained within the AWS boundary, ensuring data privacy. The new data-sharing requirement for certain Anthropic models represents a departure from that practice. US export controls, governed by regulations like EAR, restrict the transfer of sensitive technologies, including advanced AI models, to certain countries.

<details><summary>References</summary>
<ul>
<li><a href="https://www.creativeainews.com/articles/claude-fable-5-bedrock-data-sharing-2026/">Claude Fable 5 on Bedrock Forces Data Sharing</a></li>
<li><a href="https://aws.amazon.com/bedrock/faqs/">Find answers to frequently asked questions about Amazon Bedrock .</a></li>

</ul>
</details>

**Tags**: `#AI`, `#AWS`, `#data privacy`, `#export control`, `#Anthropic`

---

<a id="item-7"></a>
## [New Quantum Sensor Detects Gravitational Waves and Dark Matter](https://36kr.com/newsflashes/3861211883607305?f=rss) ⭐️ 8.0/10

A new quantum sensor, based on an atom interferometer, eliminates background noise from laser pulses to detect extremely weak signals, as reported in Nature by Imperial College London. This breakthrough enables detection of faint signals previously inaccessible, aiding the study of gravitational waves, dark matter, and the formation of supermassive black holes. The sensor uses atom interferometry, which measures interference of atomic matter waves, but laser pulses used in the process introduce noise; the new design cancels this noise to achieve higher sensitivity.

rss · 36氪 · Jun 20, 09:05

**Background**: Atom interferometers measure tiny forces by splitting and recombining atomic wave packets using laser pulses. However, the laser pulses themselves introduce phase noise that can mask weak signals. The new sensor employs a technique to cancel this noise, allowing detection of signals like gravitational waves and dark matter interactions.

<details><summary>References</summary>
<ul>
<li><a href="https://wuli.iphy.ac.cn/cn/article/id/29243">原 子 干 涉 仪 和 原 子 光学研究的最新进展</a></li>

</ul>
</details>

**Tags**: `#quantum sensor`, `#gravitational waves`, `#dark matter`, `#physics`, `#astrophysics`

---

<a id="item-8"></a>
## [3D Fiber Micro-Tweezers Exceed Traditional Optical Tweezers Force by 100,000x](https://36kr.com/newsflashes/3861209206740228?f=rss) ⭐️ 8.0/10

Researchers from Anhui University and the University of Science and Technology of China have developed a femtosecond laser composite fabrication method to build 3D fiber micro-tweezers on the tip of commercial optical fibers, achieving over 100,000 times the output force of traditional optical tweezers. The work was published in Nature. This breakthrough enables high-precision, low-damage, and programmable three-dimensional manipulation of micrometer-scale objects, with potential applications in micro-assembly, biophysics, and integrated photonics. The dramatically increased force output overcomes a key limitation of traditional optical tweezers, expanding the range of manipulable objects. The 3D fiber micro-tweezers are fabricated using a femtosecond laser composite manufacturing method directly on the end face of a commercial optical fiber. The device can precisely manipulate micrometer-scale targets and accurately assemble complex microstructures.

rss · 36氪 · Jun 20, 08:42

**Background**: Optical tweezers use a highly focused laser beam to trap and manipulate microscopic particles, typically exerting forces on the order of piconewtons. Traditional optical tweezers require bulky optics and are limited in force output. Fiber-based optical tweezers integrate the trapping functionality onto an optical fiber tip, offering a more compact and flexible solution. The femtosecond laser fabrication method allows precise three-dimensional structuring of polymer materials on fiber tips, enabling complex geometries that enhance trapping force.

<details><summary>References</summary>
<ul>
<li><a href="https://www.light-am.com/en/article/doi/10.37188/lam.2022.005">Design and realization of 3D printed fiber-tip microcantilever probes ...</a></li>
<li><a href="https://www.illord.com/en/article/doi/10.37188/CO.2023-0016">Advances in optical fiber tweezer technology based on hetero-core fiber</a></li>

</ul>
</details>

**Tags**: `#optical tweezers`, `#femtosecond laser`, `#micro-manipulation`, `#Nature`, `#fiber optics`

---

<a id="item-9"></a>
## [Exploring Colors Beyond Screen Gamuts](https://moultano.wordpress.com/2026/06/19/where-to-find-the-colors-your-screen-cant-show-you/) ⭐️ 7.0/10

An article by Moultano explores colors that typical screens cannot reproduce, using CIE chromaticity diagrams and real-world examples like ultramarine blue and CRT phosphors. This deep dive highlights fundamental limitations of display technology, affecting fields from digital art to color-critical industries, and underscores the gap between physical colors and screen reproduction. The CIE 1931 chromaticity diagram is used to visualize color gamuts, but it overemphasizes certain blue-green colors that humans cannot distinguish well. The sRGB color space particularly struggles with saturated orange, red, and purple colors.

hackernews · moultano · Jun 20, 03:36 · [Discussion](https://news.ycombinator.com/item?id=48606140)

**Background**: A color gamut is the range of colors a device can reproduce, often shown as a triangle on the CIE diagram. The CIE 1931 color space is a standard model of human color vision, but it is not perceptually uniform. Ultramarine blue is a deep blue pigment historically made from lapis lazuli, known for its vividness that screens cannot fully capture.

<details><summary>References</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/CIE_diagram">CIE diagram</a></li>
<li><a href="https://en.wikipedia.org/wiki/Color_gamut">Color gamut</a></li>
<li><a href="https://en.wikipedia.org/wiki/Ultramarine_blue">Ultramarine blue</a></li>

</ul>
</details>

**Discussion**: Commenters noted that the CIE diagram overemphasizes some colors, and that sRGB's main defect is poor reproduction of saturated orange/red/purple. Real-world examples like ultramarine blue and CRT phosphors were shared, with one user mentioning that CRT phosphors can produce intense cyan not seen on modern screens.

**Tags**: `#color science`, `#display technology`, `#color gamut`, `#visual perception`

---

<a id="item-10"></a>
## [Satellite study reveals GPS tampering far worse than expected](https://www.space.com/space-exploration/satellites/its-quite-a-bit-more-than-we-expected-satellite-reveals-immense-scale-of-gps-signal-tampering) ⭐️ 7.0/10

A satellite-based study has revealed that GPS signal tampering, including jamming and spoofing, is far more widespread than previously estimated, posing serious safety risks to aviation and other critical infrastructure. This finding highlights a growing vulnerability in global navigation systems that could lead to aviation accidents, maritime incidents, and disruptions to financial networks, demanding urgent attention from regulators and industry. The study used data from a satellite-based sensor network to map GPS interference globally, finding that jamming and spoofing incidents are concentrated in conflict zones and along major shipping routes. The research was conducted by a company that also offers mitigation solutions, leading to some skepticism about potential bias.

hackernews · y1n0 · Jun 20, 04:07 · [Discussion](https://news.ycombinator.com/item?id=48606271)

**Background**: GPS (Global Positioning System) is a satellite-based navigation system used by billions of devices worldwide. Jamming involves broadcasting noise on GPS frequencies to drown out legitimate signals, while spoofing transmits fake GPS signals to trick receivers into believing they are at a different location. Both techniques can disrupt critical systems like aircraft navigation and timing for financial transactions.

<details><summary>References</summary>
<ul>
<li><a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11397858/">Detecting and Mitigating Attacks on GPS Devices - PMC</a></li>
<li><a href="https://flyapg.com/blog/what-is-gps-spoofing">Aviations GPS Spoofing & How to Avoid It - Aircraft Performance Group</a></li>
<li><a href="https://positioningservices.trimble.com/blog/positioning/en-US/article/understanding-gps-jamming-versus-gps-spoofing">GPS jamming vs spoofing : Why is prevention critical?</a></li>

</ul>
</details>

**Discussion**: Community comments express mixed reactions: some highlight the real safety concerns for aviation, especially regarding Ground Proximity Warning System failures, while others question the study's objectivity due to the company's commercial interest in selling mitigation technology. There is also frustration with the article's website usability.

**Tags**: `#GPS`, `#cybersecurity`, `#aviation`, `#satellite`, `#signal tampering`

---

<a id="item-11"></a>
## [AWS Launches Multi-Region Replication for Cognito](https://www.infoq.com/news/2026/06/cognito-replication-aws/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global) ⭐️ 7.0/10

AWS has introduced multi-region replication for Amazon Cognito, automatically replicating user identities and user pool configurations from a primary region to a secondary region, enabling automatic failover during outages. This feature significantly improves application resilience by providing native disaster recovery for authentication, eliminating the need for custom replication and failover mechanisms, which is a common pain point for cloud architects. The replication includes users, credentials, MFA settings, app clients, and configurations, and requires a custom AWS KMS key for encryption. The feature is available in all AWS commercial regions.

rss · InfoQ · Jun 20, 07:40

**Background**: Amazon Cognito is a managed identity service for web and mobile applications. Previously, achieving multi-region failover required complex custom solutions using DynamoDB streams or other workarounds. This new native replication simplifies high-availability setups.

<details><summary>References</summary>
<ul>
<li><a href="https://aws.amazon.com/blogs/aws/improve-your-application-resilience-with-amazon-cognito-multi-region-replication/">Improve your application resilience with Amazon Cognito ...</a></li>
<li><a href="https://www.infoq.com/news/2026/06/cognito-replication-aws/">AWS Adds Multi - Region Replication to Amazon Cognito ... - InfoQ</a></li>

</ul>
</details>

**Tags**: `#AWS`, `#Cognito`, `#multi-region replication`, `#disaster recovery`, `#cloud`

---

<a id="item-12"></a>
## [Storing a Website in a Favicon via Pixel Encoding](https://www.timwehrle.de/blog/i-stored-a-website-in-a-favicon/) ⭐️ 6.0/10

A developer demonstrated a technique to encode an entire website's content into a favicon image by mapping data to pixel colors, then extracting it with JavaScript. This creative hack highlights unconventional data storage methods in web development, sparking discussions on alternative approaches and potential security risks like favicon cache fingerprinting. The technique uses a 16x16 pixel favicon where each pixel stores a character via RGB values, achieving a storage capacity of 768 bytes. The extraction script reads the favicon canvas and reconstructs the original content.

hackernews · theanonymousone · Jun 20, 05:33 · [Discussion](https://news.ycombinator.com/item?id=48606619)

**Background**: Favicons are small icons displayed in browser tabs, typically 16x16 or 32x32 pixels. They are loaded from a website's root directory and can be dynamically changed. Encoding data into images is a known steganography technique, but applying it to favicons for website storage is novel.

**Discussion**: Commenters suggested alternative methods like using SVG favicons to directly embed markup, or storing data in PNG comment chunks. One commenter noted that favicon caches can be exploited for cross-domain tracking, posing a fingerprinting risk.

**Tags**: `#favicon`, `#data storage`, `#web development`, `#hacking`

---

<a id="item-13"></a>
## [UK Plans to Force Meta, YouTube to Boost Local News](https://36kr.com/newsflashes/3861056590222342?f=rss) ⭐️ 6.0/10

The UK government plans to mandate social media platforms like Meta and YouTube to increase the visibility of local news content, with a public consultation expected as early as this month. This regulation could reshape how news is distributed online, potentially ensuring local journalism reaches wider audiences amid declining traditional media revenues. The rules would also require public service broadcasters like BBC, ITV, and Channel 4 to increase news content supply, and may extend to national and regional newspapers. Details are still being finalized.

rss · 36氪 · Jun 20, 07:33

**Background**: Social media platforms have increasingly become primary news sources for many users, but algorithms often prioritize viral or divisive content over local news. The UK government's move aims to counter this trend and support public service journalism.

**Tags**: `#regulation`, `#social media`, `#news`, `#UK`

---