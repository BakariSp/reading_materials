---
marp: true
theme: academic
paginate: true
header: 'Paper Reading: DSPy'
footer: '2310.03714v1'
---

<!-- _class: paper-title -->

# DSPy: Compiling Declarative Language Model Calls into Self-Improving Pipelines
## 像写代码一样写 Prompt

**作者:** Khattab et al. (Stanford)  
**发表:** arXiv 2023 / ICLR 2024  
**链接:** [Paper](https://arxiv.org/abs/2310.03714) | [Code](https://github.com/stanfordnlp/dspy)

---
<!-- _class: overview -->

# 论文概览

> **一句话总结:** 提出 **DSPy** 编程模型，将 LM 调用抽象为**声明式模块**，并通过**编译器**自动优化提示词 (Prompt)，实现流水线自改进。

**研究问题:** 
- 现有的 LM 流水线依赖手工试错的"提示词工程"，脆弱且难以扩展。
- 微小的 Prompt 变动可能导致性能剧烈波动。

**关键词:** `DSPy` `Compiler` `Teleprompters` `Declarative Modules`

---
<!-- _class: contribution -->

# 主要贡献

1. **DSPy 编程模型:** 将 Chain of Thought 等 Prompt 技术抽象为声明式模块 (Modules) 和签名 (Signatures)，与具体文本分离。
   
2. **DSPy 编译器 (Teleprompters):** 提出自动优化器，能通过 Bootstrapping 自动为流水线生成高质量的 few-shot 示例和 prompt。

3. **高效能验证:** 证明简单的 DSPy 程序编译后，能让 **Llama2-13b** 等小模型超越依赖专家提示词的 **GPT-3.5**。

---
<!-- _class: method -->

# DSPy 核心概念

**1. Signatures (签名):** 
- 定义输入输出语义，而非 Prompt。
- 例: `question -> answer`, `context, question -> answer`

**2. Modules (模块):** 
- 参数化的操作层，如 `dspy.ChainOfThought`。
- 类似于 PyTorch 的 `nn.Module`，可组合、可学习。

---
<!-- _class: method -->

# 编译器: Teleprompters

**核心思想:** 用算法替代手工 Prompt 调优。

**BootstrapFewShot:**
1. **Teacher 模式:** 用更强的模型（或自身）在训练集上运行。
2. **Trace 收集:** 记录成功的推理路径（输入 -> 推理 -> 输出）。
3. **Prompt 生成:** 将成功的 trace 作为 few-shot examples 注入到 Prompt 中。

$$
\text{Program}_{\text{compiled}} = \text{Compiler}(\text{Program}_{\text{zero-shot}}, \text{Data}, \text{Metric})
$$

---
<!-- _class: method -->

# 核心流程: 从代码到 Prompt

```python
# 1. Define Program
program = dspy.ChainOfThought("question -> answer")

# 2. Compile (Automatic Prompt Engineering)
teleprompter = dspy.BootstrapFewShot(metric=em)
optimized_program = teleprompter.compile(program, trainset=data)

# 3. Run
optimized_program("What is DSPy?")
```

**核心转变:** 
- 开发者编写 **逻辑 (Code)**
- 编译器生成 **提示词 (Prompt)**

---
<!-- _class: findings -->

# 实验结果: Math & Q/A

**Case Study 1: GSM8K (Math)**
- **Llama2-13b + DSPy:** 47% accuracy (vs. 9% standard few-shot)
- **GPT-3.5 + DSPy:** 82% accuracy
- **小模型逆袭:** DSPy 优化后的 Llama2-13b 接近未优化的 GPT-3.5。

**Case Study 2: HotPotQA (Multi-hop)**
- DSPy 程序只需几行代码即可生成复杂的检索-回答流水线。
- 性能优于专家手工设计的复杂 Prompt 链。

---
<!-- _class: findings -->

# 为什么 DSPy 有效？

1. **Systematic Optimization:** 编译器在整个数据集上搜索最优 Prompt，而非单点试错。
2. **Modularity:** 将逻辑流（Python 代码）与文本表示（Prompt）解耦。
3. **Self-Consistency:** 自动筛选出模型"自己能理解"的示例，而非人类觉得好的示例。

---

# Thinking

**优点:**
- **工程化:** 将 LLM 开发从"炼丹"转变为标准化的软件工程。
- **复用性:** 同样的逻辑代码，只需重新编译即可适配不同模型（如 GPT-4 -> Llama-3）。
- **效果显著:** 尤其对小模型的效果提升巨大。

**挑战:**
- **思维转变:** 开发者需要适应"声明式"的思维，不再直接控制 Prompt。
- **调试难度:** 编译后的 Prompt 可能很长且复杂，难以人工 Debug。

**启发:**
- 未来的 LLM 应用开发可能不再需要 Prompt Engineer，而是 "Pipeline Architect"。

