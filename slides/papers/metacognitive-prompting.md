---
marp: true
theme: academic
paginate: true
header: 'Paper Reading: Metacognitive Prompting'
footer: '2308.05342v4'
---

<!-- _class: paper-title -->

# Metacognitive Prompting Improves Understanding in Large Language Models
## 让 LLM 像人类一样"反思"

**作者:** Yuqing Wang (Stanford), Yun Zhao (Meta)  
**发表:** arXiv 2023  
**链接:** [Paper](https://arxiv.org/abs/2308.05342) | [Code](https://github.com/EternityYW/Metacognitive-Prompting)

---
<!-- _class: overview -->

# 论文概览

> **一句话总结:** 提出 **Metacognitive Prompting (MP)**，模仿人类的"元认知"（Thinking about thinking）过程，通过自我反思和评估来提升 LLM 的理解能力。

**研究问题:** 
- 现有的 Prompt 技术（如 CoT）主要关注逻辑推理（Reasoning），但在需要深层理解（Understanding）的任务上表现不足。
- 如何让 LLM 不仅关注"怎么做"，还能反思"为什么"以及"确信度"。

**关键词:** `Metacognitive Prompting` `NLU` `Self-Reflection` `Confidence`

---
<!-- _class: contribution -->

# 主要贡献

1. **提出 Metacognitive Prompting (MP):** 一种受认知心理学启发的 Prompt 策略，将人类的内省推理过程形式化为 LLM 的结构化评估步骤。
   
2. **弥补 Understanding 短板:** 强调从单纯的任务执行转向更深层的理解，特别是在 NLU（自然语言理解）任务上。

3. **广泛验证:** 在 10 个 NLU 数据集（GLUE, SuperGLUE 等）上测试，证明 MP 在 GPT-4, Llama2 等模型上均优于 CoT 及其变体。

---
<!-- _class: method -->

# 方法框架: 五阶段元认知

MP 模拟了人类认知的五个阶段：

1. **Understanding (理解):** 重新阐述输入文本，模拟人类的理解过程。
2. **Preliminary Judgment (初步判断):** 做出初始的推断或判断。
3. **Critical Evaluation (批判性评估):** **(核心)** 对初步判断进行自我反思和质疑。如果存疑，则重新评估。
4. **Final Decision (最终决策):** 给出最终结论并解释理由。
5. **Confidence Check (置信度评估):** 评估对结论的信心程度（0-100%）并解释原因。

---
<!-- _class: method -->

# Prompt 示例 (Simplified)

```text
As you perform this task, follow these steps:

1. Understand the context and meaning of the target word...
2. Make a preliminary judgment on whether...
3. Critically assess your preliminary analysis. If you are unsure, reassess it.
4. Confirm your final answer and explain the reasoning.
5. Evaluate your confidence (0-100%) and explain why.

Provide the answer in your final response as "..."
```

---
<!-- _class: findings -->

# 实验结果

**对比基线:** Standard Prompting, CoT (Chain of Thought)

**主要发现:**
- **全面提升:** 在 Llama2, PaLM2, GPT-3.5, GPT-4 上，MP 在绝大多数 NLU 任务中优于 CoT。
- **小模型受益更多:** 较弱的模型（如 Llama2-7b）通过这种结构化的引导，性能提升尤为明显。
- **置信度校准:** MP 生成的置信度评分能更好地反映模型实际的准确率，有助于提高系统可靠性。

---
<!-- _class: findings -->

# 为什么 Metacognitive Prompting 有效？

1. **结构化思考:** 强制模型在得出结论前进行"暂停"和"反思"，避免了直觉式的错误（System 1 thinking vs System 2 thinking）。
2. **自我纠错:** 阶段 3 的 Critical Evaluation 给了模型修正初步错误的机会。
3. **上下文深入:** 阶段 1 的 Understanding 步骤迫使模型显式处理上下文信息，而非直接跳到答案。

---

# Thinking

**优点:**
- **通用性强:** 不依赖特定领域知识，适用于各种 NLU 任务。
- **无需训练:** 纯 Prompt 策略，即插即用。
- **可解释性:** 输出包含完整的思考和反思过程，以及置信度，便于调试。

**局限:**
- **Token 消耗:** 相比直接回答，生成的文本量显著增加（5 个步骤）。
- **推理延迟:** 更多的生成步骤意味着更高的延迟。

**启发:**
- 可以将 MP 的思想融入到 Agent 的规划层，在执行关键操作前进行"元认知"检查。

