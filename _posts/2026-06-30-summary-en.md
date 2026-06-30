---
layout: default
title: "Horizon Summary: 2026-06-30 (EN)"
date: 2026-06-30
lang: en
---

> From 291 items, 3 important content pieces were selected

---

---

## 🔭 Unknown Unknowns

- [Human-Made Rocks Redefine Geology in the Anthropocene](https://aeon.co/essays/the-strange-rocks-that-wouldnt-exist-without-us) ⭐️ 9.0/10

  > An Aeon essay explores how human activity has created new types of rocks—technofossils like plastiglomerates and anthropoquinas—that are neither fully natural nor artificial, forcing a redefinition of geological boundaries in the Anthropocene. This challenges traditional geological categories and expands the intellectual territory of geology and environmental science, highlighting humanity's profound geological impact. Plastiglomerates are rocks made of natural debris held together by plastic, while anthropoquinas are sedimentary rocks containing technofossils like metal bottle caps or plastic fragments. These materials are considered potential markers of the proposed Anthropocene epoch.

---

## 📰 Tech Digest

1. [Meta reuses old DDR4 memory in new servers via custom CXL chip](#item-1) ⭐️ 8.0/10
2. [AWS Launches Lambda MicroVMs for Isolated Execution](#item-2) ⭐️ 8.0/10

---

<a id="item-1"></a>
## [Meta reuses old DDR4 memory in new servers via custom CXL chip](https://www.tomshardware.com/pc-components/dram/meta-fights-soaring-hardware-costs-by-reusing-old-ddr4-server-memory-in-new-ddr5-only-servers-custom-cxl-2-0-chip-marries-legacy-ddr4-2400-with-cutting-edge-ddr5-6400) ⭐️ 8.0/10

Meta has developed a custom CXL 2.0 ASIC called Vistara that allows new DDR5-only servers (using AMD EPYC 'Turin' processors) to reuse legacy DDR4-2400 memory modules, reducing hardware costs. This innovation enables Meta to repurpose terabytes of retired DDR4 memory, cutting the number of physical servers needed for AI inference by up to 25% and significantly lowering data center capital expenditures. The Vistara chip uses Compute Express Link (CXL) 2.0 to bridge the gap between DDR4-2400 and DDR5-6400, and Meta's software stack (based on Transparent Page Placement) automatically determines the optimal local-to-expanded memory ratio for each workload.

rss · Tom's Hardware · Jun 30, 11:00

**Background**: CXL (Compute Express Link) is an open standard interconnect that enables efficient memory pooling and expansion between CPUs and accelerators. DDR4 and DDR5 are different generations of DRAM with incompatible interfaces, so servers designed for DDR5 cannot directly use DDR4 modules. Meta's Vistara ASIC acts as a memory expander, allowing the server to access old DDR4 memory over CXL as if it were local memory, albeit with higher latency.

<details><summary>References</summary>
<ul>
<li><a href="https://windowsnews.ai/article/meta-vistara-how-a-custom-cxl-chip-is-repurposing-old-ddr4-and-cutting-ai-server-needs-by-25.432016">Meta Vistara: How a Custom CXL Chip Is Repurposing Old DDR4 and Cutting AI Server Needs by 25% - Windows News</a></li>
<li><a href="https://www.techradar.com/pro/near-zero-cost-memory-expansion-through-recycling-meta-will-reuse-terabytes-worth-of-ddr4-memory-using-cxl-tech-and-avoid-paying-the-ram-tax">Meta found a way to turn retired server RAM into cheap hyperscale memory expansion without buying new DRAM | TechRadar</a></li>
<li><a href="https://aisystemcodesign.github.io/papers/isca26/vistara_camera_ready.pdf">Vistara: Making CXL Real—Full Path from ASIC</a></li>

</ul>
</details>

**Tags**: `#CXL`, `#DDR5`, `#Meta`, `#hardware`, `#data center`

---

<a id="item-2"></a>
## [AWS Launches Lambda MicroVMs for Isolated Execution](https://www.infoq.com/news/2026/06/aws-lambda-microvms/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global) ⭐️ 8.0/10

AWS launched Lambda MicroVMs, a new serverless compute primitive that runs each user session or AI agent in its own Firecracker virtual machine with hardware-level isolation, snapshot-based rapid launch, and state preservation for up to eight hours. This service introduces hardware-level isolation for serverless compute, which is critical for multi-tenant AI agent execution and security-sensitive workloads, potentially reshaping how developers deploy isolated code in the cloud. Reddit community analysis found the minimum setup costs $3.03/day, roughly 9 times Fargate spot pricing. The microVMs are based on Firecracker, an open-source VMM developed by AWS that uses KVM for lightweight virtualization.

rss · InfoQ · Jun 30, 09:09

**Background**: Firecracker is an open-source virtual machine monitor (VMM) developed by AWS that uses the Linux Kernel-based Virtual Machine (KVM) to create and manage microVMs. It has a minimalist design, excluding unnecessary devices and guest functionality to reduce memory footprint and attack surface. AWS Lambda traditionally runs functions in a shared execution environment, but Lambda MicroVMs now offer stronger isolation at the cost of higher pricing.

<details><summary>References</summary>
<ul>
<li><a href="https://firecracker-microvm.github.io/">Firecracker</a></li>
<li><a href="https://aws.amazon.com/fargate/pricing/">AWS Fargate Pricing</a></li>

</ul>
</details>

**Discussion**: Reddit community analysis highlighted the cost comparison, noting that the minimum setup costs $3.03/day, roughly 9x Fargate spot pricing, which may limit adoption for cost-sensitive workloads. Some users expressed interest in the security benefits for multi-tenant AI agents.

**Tags**: `#AWS`, `#serverless`, `#Lambda`, `#Firecracker`, `#cloud computing`

---