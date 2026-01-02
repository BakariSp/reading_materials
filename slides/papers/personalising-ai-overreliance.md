---
marp: true
theme: academic
paginate: true
header: 'Paper Reading: Personalising AI Overreliance'
footer: 'IUI 2025'
---

<!-- _class: paper-title -->

# Personalising AI Assistance Based on Overreliance Rate in AI-Assisted Decision Making
## 基于过度依赖率的个性化 AI 辅助决策

**作者:** Siddharth Swaroop, Zana Buçinca, Krzysztof Z. Gajos, Finale Doshi-Velez (Harvard)  
**发表:** IUI 2025 (30th International Conference on Intelligent User Interfaces)  
**链接:** [Paper](https://doi.org/10.1145/3708359.3712128)

---
<!-- _class: overview -->

# 论文概览

> **一句话总结:** 提出通过**探针问题 (Probe Questions)** 快速识别用户的过度依赖倾向，并据此**个性化**调整 AI 辅助类型，从而提升人机协作决策效果。

**研究问题:** 
- 固定的 AI 辅助方式无法适应所有用户，不同人对 AI 的依赖程度不同
- 过度依赖 (Overreliance) 是一个隐藏的、难以通过问卷预测的用户特质
- 如何**实时推断**用户的过度依赖倾向，并据此**自适应调整** AI 辅助？

**关键词:** `Overreliance` `Adaptive AI` `AI-Assisted Decision Making` `Personalization` `Reinforcement Learning`

---
<!-- _class: contribution -->

# 主要贡献

1. **探针问题方法 (Probe Questions):** 
   - 通过少量已知答案的问题，快速判断用户是否为"过度依赖者"
   - 正确选择的探针问题能有效区分用户类型

2. **个性化策略设计:**
   - 基于 Off-Policy Evaluation (OPE) 从历史数据学习最优策略
   - 根据用户类型、问题难度、AI 不确定性动态选择辅助方式

3. **实证验证:**
   - Study 1: 验证探针问题的有效性
   - Study 2: 证明个性化策略显著提升人机协作准确率

---
<!-- _class: method -->

# 实验设计: Alien Doctor 任务

**场景设计:**
- 参与者扮演医生，在 20 分钟内为外星病人开药
- 根据症状和治疗规则推断正确药物（逻辑推理任务）
- 屏幕上有倒计时，模拟**时间压力**环境

**三种 AI 辅助类型:**

| 类型 | 描述 | 特点 |
|------|------|------|
| **No-AI** | 无 AI 辅助 | 纯人工判断 |
| **AI-Before** | 先显示 AI 推荐 | 可能导致锚定效应 |
| **AI-After** | 用户先判断，再显示 AI | 需要用户投入更多认知资源 |

---
<!-- _class: method -->

# 核心概念: 过度依赖 (Overreliance)

**定义:** 当 AI 推荐错误时，用户仍然采纳 AI 建议的比率

**为什么重要？**
- 不同过度依赖率的用户适合不同的 AI 辅助方式
- 低过度依赖者：更慢但更准确，能实现人机互补
- 高过度依赖者：在 AI 不确定时不应展示 AI 推荐

**难点:**
- 过度依赖是**隐藏特质**，无法通过问卷直接测量
- 依赖于具体任务和 AI 类型，需要**实时推断**

---
<!-- _class: method -->

# 个性化策略: 8 状态策略表

基于三个因素构建 8 种状态，每种状态选择最优辅助类型：

| 用户类型 | 问题难度 | AI 不确定性 | 推荐辅助 |
|----------|----------|-------------|----------|
| 非过度依赖者 | Easy | Low | AI-Before |
| 非过度依赖者 | Easy | High | AI-Before |
| 非过度依赖者 | Hard | Low | AI-Before |
| 非过度依赖者 | Hard | High | AI-After |
| 过度依赖者 | Easy | Low | AI-Before |
| 过度依赖者 | Easy | High | No-AI |
| 过度依赖者 | Hard | Low | AI-Before |
| 过度依赖者 | Hard | High | No-AI |

**核心洞察:** 过度依赖者在 AI 高不确定时应**隐藏** AI 推荐

---
<!-- _class: findings -->

# Study 1: 探针问题的有效性

**目标:** 验证能否通过少量探针问题识别过度依赖者

**设计:**
- 探针问题 = AI 推荐错误的问题
- 用户接受错误推荐 → 标记为过度依赖者

**结果:**
- 2 个探针问题 + AI-Before 辅助 → 最佳识别效果
- 基于探针的分类与完整数据的分类**高度一致**
- 探针问题的**难度和 AI 不确定性**影响识别准确率

---
<!-- _class: findings -->

# Study 2: 个性化策略的效果

**实验设置:**
- **参与者:** N=399 (Prolific 招募)
- **条件:** 个性化策略 vs. 固定策略 (AI-Before / AI-After / No-AI)

**关键发现:**
1. **个性化策略显著优于 AI-Before 固定策略** (准确率差异显著)
2. 个性化策略与 No-AI 准确率相当，但 No-AI 更慢
3. **意外发现:** 与 AI-After 固定策略相比未见显著差异

**深层分析:**
- 用户会根据之前接触的 AI 类型**学习不同策略**
- 探针阶段接触 AI 的用户后续表现受"迁移效应"影响

---
<!-- _class: findings -->

# 重要洞察: 策略迁移效应

**探索性分析发现:**

```
在探针阶段接触 AI-Before 的用户
    ↓
学会"直接采纳 AI 建议"的策略
    ↓
后续测试阶段仍倾向于依赖 AI
```

**设计启示:**
- 自适应 AI 系统需要考虑用户的**历史交互经验**
- 早期接触的 AI 类型会影响用户建立的**心智模型**
- 未来工作需要建模用户的**策略演变**

---

# Thinking

**优点:**
- **隐藏特质的操作化:** 将"过度依赖"这一难以测量的特质转化为可观测的行为指标
- **理论与实践结合:** 用强化学习 (Off-Policy Evaluation) 从数据学习最优策略
- **生态效度:** 时间压力任务模拟真实决策场景

**局限:**
- 逻辑推理任务的泛化性有限（vs. 临床诊断、金融决策等）
- 策略迁移效应表明单次探针可能不够，需要持续监测

**关联:**
- 与 *Metacognitive Demands of GenAI* 互补：本文量化了用户的"监控"能力差异
- 与 *Human-AI Essay Scoring* 呼应：两篇都强调置信度/不确定性对人机协作的关键作用

**启发:**
- AI 辅助系统应具备**自适应能力**，而非"一刀切"
- 用户的过度依赖倾向是可以**实时检测**的，无需预先问卷
- 设计 AI 系统时需考虑用户的**学习曲线**和**策略适应**


