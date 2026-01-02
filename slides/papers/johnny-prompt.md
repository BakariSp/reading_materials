---
marp: true
theme: academic
paginate: true
header: 'Paper Reading: Why Johnny Can''t Prompt'
footer: 'CHI 2023'
---

<!-- _class: paper-title -->

# Why Johnny Can't Prompt: How Non-AI Experts Try (and Fail) to Design LLM Prompts
## 为什么非专家在 Prompt Engineering 上屡屡受挫？

**作者:** J.D. Zamfirescu-Pereira (Berkeley), et al.  
**发表:** CHI 2023  
**链接:** [Paper](https://dl.acm.org/doi/10.1145/3544548.3581388)

---
<!-- _class: overview -->

# 论文概览

> **一句话总结:** 通过观察非 AI 专家使用设计工具（Design Probe）编写 Prompt 的过程，揭示了普通用户对 LLM 的**错误心智模型**和**试错策略**。

**研究问题:** 
- 大家都说 "Prompt Engineering" 是未来最重要的技能，但普通人真的能掌握吗？
- 非专家用户在尝试让 LLM 执行复杂任务时，会遇到哪些障碍？

**关键词:** `HCI` `Prompt Engineering` `Mental Models` `End-User Programming`

---
<!-- _class: method -->

# 研究方法

**Design Probe (BotDesigner):**
- 作者开发了一个简单的 Prompt 原型设计工具。
- 允许用户通过 **Few-shot examples** (Input/Output pairs) 来定义 LLM 的行为。
- **任务:** 要求参与者设计一个"聊天机器人"，能够识别句子是否带有"讽刺"意味，或者进行分类等。

**参与者:** 
- 非 AI 专家（设计师、法律背景等），没有编程或 ML 经验。

---
<!-- _class: findings -->

# 核心发现: 三大误区

1.  **过度泛化 (Overgeneralization):**
    - 用户倾向于认为："如果它能做 X (比如写诗)，那它肯定也能做 Y (比如逻辑推理)"。
    - 类似于与人交流，认为模型具有通用智能。

2.  **拟人化交流 (Anthropomorphism):**
    - 用户试图通过"劝说"、"解释"甚至"恳求"来修正模型的错误，而不是调整数据（Examples）。
    - *User:* "No, that's not what I meant, please try again." (对 Prompt 优化无效)

3.  **盲目试错 (Opportunistic Trial & Error):**
    - 缺乏系统性的测试策略。一旦某个 Prompt 在一两个例子上跑通了，就认为"完成了"，忽略了边缘情况 (Edge Cases)。

---
<!-- _class: findings -->

# 为什么这很重要？

**"Gulf of Execution" (执行鸿沟):**
- 用户不知道如何将意图转化为模型能理解的 Prompt。

**"Gulf of Evaluation" (评估鸿沟):**
- 用户难以评估生成的 Prompt 是否真的可靠（往往只看表面）。

**结论:** 
- 仅仅依靠"自然语言"编程是个伪命题，普通用户缺乏必要的**计算思维**和**系统测试能力**。
- 我们需要更好的**工具**（可视化、自动评估），而不仅仅是更好的**教程**。

---

# Thinking

**优点:**
- **HCI 视角:** 跳出了"模型能力"的视角，关注"人如何使用模型"。
- **实证研究:** 用真实的用户行为数据打破了"Prompt Engineering 很简单"的幻想。

**局限:**
- **模型版本:** 实验使用的是 GPT-3 (davinci)，现在的 GPT-4 在指令遵循上已经强了很多，部分"拟人化"沟通现在可能真的有效了。

**启发:**
- 开发 LLM 应用时，不能指望用户会写 Prompt。
- 需要为用户提供**中间层界面**，将用户的意图转化为结构化的 Few-shot examples。

