---
layout: default
title: "Horizon Summary: 2026-06-30 (ZH)"
date: 2026-06-30
lang: zh
---

> 从 291 条内容中筛选出 3 条重要资讯。

---

---

## 🔭 未知的未知

- [人类制造的岩石重新定义人类世地质学](https://aeon.co/essays/the-strange-rocks-that-wouldnt-exist-without-us) ⭐️ 9.0/10

  > 一篇 Aeon 文章探讨了人类活动如何创造出新型岩石——如塑质砾岩和人类岩等技术化石——它们既不完全自然也不完全人造，迫使人们重新定义人类世的地质边界。 这挑战了传统地质分类，拓展了地质学和环境科学的学术领域，凸显了人类对地质的深远影响。 塑质砾岩是由塑料粘合天然碎屑形成的岩石，而人类岩是含有技术化石（如金属瓶盖或塑料碎片）的沉积岩。这些物质被认为是拟议中的人类世的潜在标志。

---

## 📰 技术资讯

1. [Meta 通过定制 CXL 芯片在新型服务器中复用旧 DDR4 内存](#item-1) ⭐️ 8.0/10
2. [AWS 推出 Lambda MicroVMs 实现隔离执行](#item-2) ⭐️ 8.0/10

---

<a id="item-1"></a>
## [Meta 通过定制 CXL 芯片在新型服务器中复用旧 DDR4 内存](https://www.tomshardware.com/pc-components/dram/meta-fights-soaring-hardware-costs-by-reusing-old-ddr4-server-memory-in-new-ddr5-only-servers-custom-cxl-2-0-chip-marries-legacy-ddr4-2400-with-cutting-edge-ddr5-6400) ⭐️ 8.0/10

Meta 开发了一款名为 Vistara 的定制 CXL 2.0 ASIC，使仅支持 DDR5 的新型服务器（使用 AMD EPYC 'Turin'处理器）能够复用旧的 DDR4-2400 内存模块，从而降低硬件成本。 这项创新使 Meta 能够重新利用数 TB 的退役 DDR4 内存，将 AI 推理所需的物理服务器数量减少高达 25%，并显著降低数据中心资本支出。 Vistara 芯片利用 Compute Express Link (CXL) 2.0 桥接 DDR4-2400 与 DDR5-6400 之间的差异，Meta 的软件栈（基于 Transparent Page Placement）自动为每个工作负载确定最佳的本地内存与扩展内存比例。

rss · Tom's Hardware · 6月30日 11:00

**背景**: CXL（Compute Express Link）是一种开放标准互连技术，可实现 CPU 与加速器之间的高效内存池化和扩展。DDR4 和 DDR5 是不同代际的 DRAM，接口不兼容，因此专为 DDR5 设计的服务器无法直接使用 DDR4 模块。Meta 的 Vistara ASIC 充当内存扩展器，使服务器能够通过 CXL 访问旧 DDR4 内存，如同访问本地内存一样，尽管延迟较高。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://windowsnews.ai/article/meta-vistara-how-a-custom-cxl-chip-is-repurposing-old-ddr4-and-cutting-ai-server-needs-by-25.432016">Meta Vistara: How a Custom CXL Chip Is Repurposing Old DDR4 and Cutting AI Server Needs by 25% - Windows News</a></li>
<li><a href="https://www.techradar.com/pro/near-zero-cost-memory-expansion-through-recycling-meta-will-reuse-terabytes-worth-of-ddr4-memory-using-cxl-tech-and-avoid-paying-the-ram-tax">Meta found a way to turn retired server RAM into cheap hyperscale memory expansion without buying new DRAM | TechRadar</a></li>
<li><a href="https://aisystemcodesign.github.io/papers/isca26/vistara_camera_ready.pdf">Vistara: Making CXL Real—Full Path from ASIC</a></li>

</ul>
</details>

**标签**: `#CXL`, `#DDR5`, `#Meta`, `#hardware`, `#data center`

---

<a id="item-2"></a>
## [AWS 推出 Lambda MicroVMs 实现隔离执行](https://www.infoq.com/news/2026/06/aws-lambda-microvms/?utm_campaign=infoq_content&utm_source=infoq&utm_medium=feed&utm_term=global) ⭐️ 8.0/10

AWS 推出了 Lambda MicroVMs，这是一种新的无服务器计算原语，可为每个用户会话或 AI 代理运行独立的 Firecracker 虚拟机，提供硬件级隔离、基于快照的快速启动和长达八小时的状态保留。 该服务为无服务器计算引入了硬件级隔离，这对多租户 AI 代理执行和安全敏感工作负载至关重要，可能重塑开发者在云端部署隔离代码的方式。 Reddit 社区分析发现，最低设置成本为每天 3.03 美元，大约是 Fargate spot 定价的 9 倍。这些微虚拟机基于 AWS 开发的开源 VMM Firecracker，它使用 KVM 实现轻量级虚拟化。

rss · InfoQ · 6月30日 09:09

**背景**: Firecracker 是 AWS 开发的开源虚拟机监视器（VMM），它使用基于 Linux 内核的虚拟机（KVM）来创建和管理微虚拟机。其设计极简，排除了不必要的设备和客户功能，以减少内存占用和攻击面。传统的 AWS Lambda 在共享执行环境中运行函数，而 Lambda MicroVMs 现在提供了更强的隔离性，但成本更高。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://firecracker-microvm.github.io/">Firecracker</a></li>
<li><a href="https://aws.amazon.com/fargate/pricing/">AWS Fargate Pricing</a></li>

</ul>
</details>

**社区讨论**: Reddit 社区分析强调了成本比较，指出最低设置成本为每天 3.03 美元，大约是 Fargate spot 定价的 9 倍，这可能会限制对成本敏感的工作负载的采用。一些用户对多租户 AI 代理的安全优势表示兴趣。

**标签**: `#AWS`, `#serverless`, `#Lambda`, `#Firecracker`, `#cloud computing`

---