---
marp: true
theme: academic
paginate: true
header: 'Paper Reading: Human-AI Collaborative Essay Scoring'
footer: 'LAK 2025'
---

<!-- _class: paper-title -->

# Human-AI Collaborative Essay Scoring: A Dual-Process Framework with LLMs
## 基于双过程理论的人机协作作文评分

**作者:** Changrong Xiao (Tsinghua), Wenxing Ma, Sean Xin Xu, Kunpeng Zhang, et al.  
**发表:** LAK 2025 (Learning Analytics and Knowledge)  
**链接:** [Paper](https://doi.org/10.1145/3706468.3706507)

---
<!-- _class: overview -->

# 论文概览

> **一句话总结:** 提出基于**双过程理论 (Dual-Process Theory)** 的 LLM 自动作文评分系统，不仅能准确评分和生成反馈，还能通过**置信度**和**解释**提升人类评分者的效率和准确性。

**研究问题:** 
- 中国高师生比导致学生难以获得及时写作反馈
- 传统 AES 系统难以应对多样评分标准，且教师仍需人工复核
- 如何设计支持**人机协作**的 AES 系统？

**关键词:** `LLM Application` `Automated Essay Scoring` `Human-AI Collaboration` `Learning Analytics`

---
<!-- _class: method -->

# 研究方法

**数据集:**
- 公开数据集 (ASAP 等)
- **新数据集:** 13,372 篇中国高中生英语作文，多维度专家评分

**模型对比:**
| 模型 | 设置 |
|------|------|
| GPT-3.5 / GPT-4 | Zero-shot, Few-shot |
| LLaMA3-8B | Fine-tuned (LoRA) |
| BERT | Fine-tuned (Baseline) |

**评估维度:** 内容 (8分) + 语言 (8分) + 结构 (4分) = 总分 (20分)

---
<!-- _class: contribution -->

# 核心设计: 双过程理论框架

![h:340](../../materials/human-ai-essay-scoring/image/figure1.png)

- **Fast Thinking (System 1):** Lightweight Classifier → 快速输出分数 + 置信度
- **Slow Thinking (System 2):** Text Generation → 低置信度时触发详细解释

---
<!-- _class: findings -->

# 核心发现: LLM vs 传统 SOTA

**LLM 的优势:**
- **一致性 (Consistency):** 不同 prompt 下表现稳定
- **泛化性 (Generalizability):** 跨数据集表现好
-**解释性 (Explainability):** 生成详细评分理由

**LLM 的局限:**
- 单纯准确率不超过 fine-tuned BERT 等传统 SOTA
- Zero-shot 在严格评分标准下表现较差

**结论:** LLM 的价值不在于"更准"，而在于**支持人机协作**

---
<!-- _class: findings -->

# 人机协作实验

**实验设置:**
- **参与者:** 新手评分者 + 专家评分者
- **条件:** 有/无 AI 辅助 (分数预测 + 解释 + 置信度)

**关键发现:**
1. AI 辅助显著**提升新手表现**，使其接近专家水平
2. AI 辅助提升专家的**评分效率**
3. 对于**低置信度作文**，人类介入价值最大
4. 解释帮助评分者理解评分依据，减少盲目接受

> *"LLM 不是替代人类，而是让人类更高效、更一致"*

---

# Thinking

**优点:**
- **实证严谨:** 大规模数据集 (13K+ 作文) + 多模型对比 + 人机协作实验
- **实用导向:** 关注真实教育场景的部署需求 (开源、可解释、人机协作)
- **理论支撑:** 用双过程理论指导系统设计

**关联:**
- 与 *Metacognitive Demands of GenAI* 呼应：AI 生成解释帮助人类"评估 AI 输出"
- 与 *Cognition-Inspired Alignment* 互补：本文是人机协作对齐在教育场景的具体应用

**启发:**
- AI 辅助系统的核心价值是**置信度 + 解释**，而非仅仅预测
- 人机协作的关键：让 AI 知道"什么时候不确定"，让人类介入最有价值的地方

