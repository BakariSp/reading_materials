---
marp: true
theme: academic
paginate: true
header: 'Paper Reading: Cognition-Inspired Human-AI Alignment'
footer: 'IUI 2025'
---

<!-- _class: paper-title -->

# Cognition-Inspired Interactive Frameworks for Human-AI Alignment
## 认知启发的人机对齐交互框架

**作者:** Simret Araya Gebreegziabher (University of Notre Dame)  
**发表:** IUI Companion 2025 (Doctoral Consortium)  
**链接:** [Paper](https://doi.org/10.1145/3708557.3716147)

---
<!-- _class: overview -->

# 论文概览

> **一句话总结:** 这篇论文提出利用**认知理论**设计双向、共适应的交互框架，使用户能够**迭代定义和调整**人机对齐标准，弥补 RLHF 等静态方法的不足。

**研究问题:** 
- 现有对齐方法（如 RLHF）假设用户偏好静态、可清晰表达，无法适应动态变化的用户意图。
- 人类的价值观和目标会因认知偏见、心智模型演变、AI 系统行为等因素而波动。

**关键词:** `Human-AI Alignment` `Machine Teaching` `Cognitive Theories` `Co-Adaptation`

---
<!-- _class: method -->

# 研究目标 & 方法

**三大研究问题:**
1. 人类意图的波动如何影响模型训练和对齐？
2. 如何设计适应动态变化的交互技术？
3. 如何在人与模型都存在不确定性时促进有效协作？

**理论基础:**
- **Variation Theory:** 通过探索关键特征的变化来促进学习
- **Structural Alignment Theory:** 通过结构对比促进有效理解

**方法:** Web 用户实验 + 模拟交互式模型训练实验

---
<!-- _class: contribution -->

# 核心工作 1: PaTAT

**系统:** PaTAT - 人机协作质性编码工具

**创新点:**
- 使用**可解释的神经符号模式** (Neuro-Symbolic Patterns) 从用户标注中生成规则
- 捕获词汇、句法、语义特征，推荐数据标注
- 提供**细粒度高亮**帮助用户理解模型学习过程

**用户研究 (N=8):**
- 用户认为可解释模式有助于反思标注方案
- 混合主动交互界面支持用户迭代修正模型

---
<!-- _class: contribution -->

# 核心工作 2: Variation Theory + 反事实增强

**问题:** 主动学习 (Active Learning) 存在冷启动问题

**方法:**
- 结合**神经符号方法**与 LLM 生成符合人类认知的反事实样本
- 基于 **Variation Theory**：通过关键特征变化帮助标注者和模型细化决策边界
- 三步过滤机制确保反事实质量

**结果:**
- 在三个数据集上，早期主动学习阶段显著优于 Baseline 和 SOTA

---
<!-- _class: contribution -->

# 核心工作 3: MOCHA

**系统:** MOCHA - 共适应机器教学框架

**设计原理:**
- **Variation Theory:** 反事实生成帮助用户探索概念边界
- **Structural Alignment:** 高亮原始数据与反事实的关键差异

**用户研究 (N=18):**
- 提高标注效率和模型学习效果
- 用户能更好地细化概念定义并引导模型向目标方向发展

---
<!-- _class: findings -->

# 未来工作

**1. LLM 评估中的用户意图规范:**
- 设计工具让用户在 **LLM-as-a-Judge** 场景中创建和迭代自然语言评估标准
- 支持定义成功/失败案例、探索不同指标实现的权衡

**2. 多利益相关者对齐:**
- 真实场景中往往涉及多方、目标可能冲突
- 设计支持**协作意图规范**、共同价值协商、冲突调解的工具
- 平衡个人目标与集体目标

---

# Thinking

**优点:**
- **理论驱动:** 用认知理论（Variation Theory, Structural Alignment）指导系统设计，不只是工程优化
- **双向视角:** 关注模型学习的同时也关注人类学习，体现 HCI 的核心关怀
- **闭环设计:** 从理解 → 标注 → 反馈 → 模型调整形成完整的迭代循环

**关联:**
- 与 *Metacognitive Demands of GenAI* 互补：本文提供了降低元认知负荷的具体系统设计
- 与 *Why Johnny Can't Prompt* 互补：本文的神经符号方法是解决"用户不会 Prompt"的一种路径

**启发:**
- 人机对齐不是一次性的，而是**持续迭代**的过程
- 好的 AI 工具应该帮助用户**发现自己真正想要什么**，而不只是执行命令

