// 无光域·深层问题追踪表
// 用途：记录当前世界观中尚未被任务书回复覆盖的逻辑缺口
// 工作流：每次合并任务书回复后，对照此表——有答案则移除，无答案则搁置，仍不明则向用户提问
//
// 状态字段说明：
//   unresolved — 尚未被任务书回复覆盖，待解答
//   shelved    — 当前任务书回复未涉及，暂时搁置
//   resolved   — 已被任务书回复覆盖，已移除（历史留痕用）
//   need-ask   — 所有任务书回复处理完毕后仍无答案，需向用户提问

export const deepQuestions = [
  {
    id: 'dq-agriculture-huetide',
    status: 'unresolved',
    priority: '高',
    category: '生态与经济',
    title: '农业与黑潮周期的矛盾',
    summary: '骨麦生长周期（约21天）与黑潮周期（小潮每7天、大潮每30天）存在结构性冲突。庄稼如何在反复的边界松动、晦能浓度波动中存活？',
    detail: `
      <p class="section-desc">核心矛盾：骨麦的生长周期约21天，而小黑潮每7天一次、大黑潮每30天一次。一个完整的生长周期要经历2-3次小黑潮。</p>
      <div class="truth-stack">
        <div class="truth-layer"><span class="truth-label">已知事实</span><div class="truth-text">1. 骨麦是土著主食，生长周期约21天（sections.js 第四章 · 骨麦）。<br>2. 黑潮小周期约7天，大周期约30天（sections.js 第八章）。<br>3. 黑潮期间晦能浓度飙升、边界松动、认知成形门槛降低。<br>4. 土著已存活不知多少代，必然有成熟的农业应对体系。</div></div>
        <div class="truth-layer"><span class="truth-label">未解答的问题</span><div class="truth-text">① 骨麦在哪种黑潮阶段播种/收割？是否必须在小潮间隙的稳定窗口期操作？<br>② 大黑潮（30天）覆盖了整个生长周期，在大黑潮期间庄稼如何存活？<br>③ 是否有"避潮种"或"深土窖藏"等农业技术应对黑潮？<br>④ 黑潮是否反而对某些作物有利（利用高晦能浓度加速生长）？<br>⑤ 穿越者到来后，农业体系是否因人口暴增而承压？</div></div>
        <div class="truth-layer"><span class="truth-label">关联条目</span><div class="truth-text">sections.js — 第四章（骨麦）、第八章（黑潮周期）、第九章（资源体系）<br>deep-logic.js — 第一条（边界优先）、第二条（晦能定义）<br>consistency-check.js — 第7条（黑潮周期）、第9条（经济价值）</div></div>
      </div>
      <div class="quote">如果骨麦的农业体系无法自洽，整个土著文明的食物基础就会被动摇。这不是细节问题，是世界观的地基问题。</div>
    `,
    firstIdentified: '2026-06-14',
    lastChecked: '2026-06-14',
    notes: '',
  },
  {
    id: 'dq-cross-layer-economy',
    status: 'unresolved',
    priority: '高',
    category: '经济与交通',
    title: '五层胎腔的经济与交通断层',
    summary: '五层胎腔之间的跨层贸易如何运作？高级材料（第三层以下产出）如何到达第一层的穿越者手中？土著是否控制着层间通道？',
    detail: `
      <p class="section-desc">无光域有五层胎腔，越深处资源越丰富但越危险。但从设定中看，穿越者主要活动在第一层（灰醒层），而高级材料/知识在更深层。</p>
      <div class="truth-stack">
        <div class="truth-layer"><span class="truth-label">已知事实</span><div class="truth-text">1. 五层结构：灰醒层→骨沉层→梦腐层→门脉层→胎海层（sections.js 第三章）。<br>2. 越深资源越丰富、污染越重、规则越不稳定。<br>3. 穿越者初始投放点在灰醒层。<br>4. 土著聚落各层都有分布。</div></div>
        <div class="truth-layer"><span class="truth-label">未解答的问题</span><div class="truth-text">① 跨层交通如何实现？是否有固定的"层间通道"或"沉降节点"？<br>② 穿越者如何获得深层资源？通过贸易还是亲自下探？<br>③ 土著是否控制着层间通道并收取通行费？<br>④ 高层（浅层）聚落和低层（深层）聚落之间是否有阶层关系？<br>⑤ 系统是否参与了层间交通管理（如限制穿越者的可到达层数）？<br>⑥ 物品能否跨层交易？系统交易栏是否跨层通用？</div></div>
        <div class="truth-layer"><span class="truth-label">关联条目</span><div class="truth-text">sections.js — 第三章（五层结构）、第九章（资源体系）、第十一章（市场）<br>deep-logic.js — 第八条（系统位置）<br>consistency-check.js — 第9条（经济价值）</div></div>
      </div>
      <div class="quote">五层胎腔如果不存在有效的经济连接，前四层就会被割裂成四个独立世界——那穿越者为什么要冒险下深层？贸易动机和通道机制必须讲清楚。</div>
    `,
    firstIdentified: '2026-06-14',
    lastChecked: '2026-06-14',
    notes: '',
  },
  {
    id: 'dq-previous-round-failure',
    status: 'unresolved',
    priority: '中',
    category: '历史与设定',
    title: '"上一轮"的具体失败原因',
    summary: '设定中反复提及"上一轮外来者/穿越者"失败，但未说明他们怎么失败的、留了什么教训、遗物如何影响当前世界。',
    detail: `
      <p class="section-desc">多处处提及"上一轮"的存在——梦腐层有上一轮的精神沉积，骨沉层有上一轮的失败庇护所，系统裂缝可能是上一轮造成的。但上一轮的具体故事是空白的。</p>
      <div class="truth-stack">
        <div class="truth-layer"><span class="truth-label">已知碎片</span><div class="truth-text">1. 梦腐层有"上一轮外来者的精神沉积"（sections.js 第三章）。<br>2. 骨沉层有"失败庇护所、旧文明建筑、废弃庄园"（同上）。<br>3. "上一轮的穿越者留下了骨刻系统和流散语"（sections.js 第十四章）。<br>4. 系统出现裂缝与偏差（sections.js 第二章）。<br>5. 神胎经历过多轮筛选尝试（deep-logic.js 第七条）。</div></div>
        <div class="truth-layer"><span class="truth-label">未解答的问题</span><div class="truth-text">① 上一轮穿越者来了多少人？存活了多久？<br>② 他们失败的根本原因是什么？（集体疯狂？内斗？被神胎吸收？）<br>③ 他们留下了哪些具体遗产？（骨刻系统之外的？）<br>④ 他们是否对神胎的临产进度产生了影响？<br>⑤ 当前的土著文明与上一轮的外来者之间是什么关系？<br>⑥ 本轮穿越者是否在重复上一轮的路线？有没有人试图避免？</div></div>
        <div class="truth-layer"><span class="truth-label">关联条目</span><div class="truth-text">sections.js — 第三章（五层结构描述中的上轮沉积）、第十四章（骨刻与流散语起源）<br>deep-logic.js — 第三条（穿越者价值）、第七条（核心边界器官）<br>phase1-expansion.js — 第六组（裂视能力设定中可能关联上轮）</div></div>
      </div>
      <div class="quote">"上一轮"就像房间里的大象——被反复提及却从未被正视。如果不定义上一轮的失败模式，就无法真正理解本轮穿越者的处境。</div>
    `,
    firstIdentified: '2026-06-14',
    lastChecked: '2026-06-14',
    notes: '',
  },
  {
    id: 'dq-sight-growth-curve',
    status: 'unresolved',
    priority: '中',
    category: '能力设定',
    title: '裂视能力的成长曲线与代价',
    summary: '裂视是穿越者的核心能力，但设定中缺少其成长阶段、失败模式、使用代价和训练方法的清晰界定。',
    detail: `
      <p class="section-desc">裂视是穿越者独有的能力——看到边界的异常、残留和断裂痕迹。但这个能力的边界（字面意义上）非常模糊。</p>
      <div class="truth-stack">
        <div class="truth-layer"><span class="truth-label">已知事实</span><div class="truth-text">1. 裂视能看到边界异常和断裂痕迹（sections.js 第六章）。<br>2. 裂视是穿越者独有的能力（同上）。<br>3. 裂视可以用来判断灰潮时机、寻找庇护所边界漏洞等。<br>4. 部分高阶穿越者还能看到"梦痕"和"系统裂缝"。</div></div>
        <div class="truth-layer"><span class="truth-label">未解答的问题</span><div class="truth-text">① 裂视的成长阶段是什么？从"刚觉醒只能看门缝"到"能看穿梦腐层"需要什么条件？<br>② 过度使用裂视的代价是什么？（视野永久损伤？被晦能污染？被系统标记？）<br>③ 裂视是否有失败模式？（看错了、看到了不该看的、被看到的反噬）<br>④ 裂视能否被训练？土著是否有抑制裂视的技术？<br>⑤ 裂视与其他能力（骨刻、仪式）的配合关系？<br>⑥ 系统如何记录/显示裂视能力？（是否有技能等级？）</div></div>
        <div class="truth-layer"><span class="truth-label">关联条目</span><div class="truth-text">sections.js — 第六章（生存能力）、第十二章（战斗系统）<br>phase1-expansion.js — 第六组（裂视能力深化条目）<br>deep-logic.js — 第四条（认知五个条件）</div></div>
      </div>
      <div class="quote">裂视是穿越者区别于土著的核心能力，也是他们最依赖的生存工具。如果这个能力的规则不清晰，玩家（和读者）就无法理解穿越者为什么"特别"。</div>
    `,
    firstIdentified: '2026-06-14',
    lastChecked: '2026-06-14',
    notes: '',
  },
  {
    id: 'dq-fragments-composition',
    status: 'unresolved',
    priority: '高',
    category: '神胎与终局',
    title: '神胎碎片的具体构成与冲突',
    summary: '设定中神胎有"多个意识碎片"争夺主导权，但未定义碎片数量、各自倾向、竞争关系——这是终局逻辑的核心枢纽。',
    detail: `
      <p class="section-desc">神胎碎片是无光域的主体意志的不同倾向，每一个碎片都在寻找有利于自己成为主导人格的材料。但碎片的具体构成完全是空白。</p>
      <div class="truth-stack">
        <div class="truth-layer"><span class="truth-label">已知碎片</span><div class="truth-text">1. 神胎有多个意识碎片争夺主导权（sections.js 第二章）。<br>2. 不同碎片在系统中有不同权重（deep-logic.js 第七条）。<br>3. 碎片会利用穿越者的行为来强化自己的倾向（consistency-check.js 第10条）。<br>4. 碎片与三条终局路线（成神/留域/出走）有关联。</div></div>
        <div class="truth-layer"><span class="truth-label">未解答的问题</span><div class="truth-text">① 一共有多少个碎片？是否有命名和人格描述？<br>② 每个碎片的倾向是什么？（秩序/混沌/吞噬/保存/进化？）<br>③ 碎片之间的竞争关系如何？是敌对、博弈还是合作？<br>④ 穿越者的行为如何影响不同碎片的权重？<br>⑤ 碎片是否直接与穿越者对话？还是通过系统间接表达？<br>⑥ 碎片是否可以被摧毁、合并或说服？<br>⑦ 碎片与底层三影射（边界/镜子/容器）的关系是什么？</div></div>
        <div class="truth-layer"><span class="truth-label">关联条目</span><div class="truth-text">sections.js — 第二章（晦能基础规则）、第十六章（神胎与终局）<br>deep-logic.js — 第七条（核心边界器官·系统位置·神胎人格需求）、第十一条（神胎人格需求）<br>consistency-check.js — 第10条（神胎碎片利用）<br>groups.js — 终局设定组、影射层组</div></div>
      </div>
      <div class="quote-center">一切设定终将被神胎碎片利用——<br>但如果碎片本身没有被定义，"被利用"就是一个空洞的威胁。<br>神胎碎片是无光域的"幕后黑手"，<br>幕后黑手不能只是一团模糊的影子。</div>
    `,
    firstIdentified: '2026-06-14',
    lastChecked: '2026-06-14',
    notes: '',
  },
]