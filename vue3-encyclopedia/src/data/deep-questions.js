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
    status: 'resolved',
    priority: '中',
    category: '历史与设定',
    title: '"上一轮"的具体失败原因',
    summary: '【已由 Task 3.2 回复】四类失败路线：旧灯信光→伪安全灯；旧门信门→门灾叠室；旧梦信保存→梦腐层；旧榜信成神→位置吞人。',
    detail: `
      <p class="section-desc">【已由 Task 3.2·上一轮外来者遗产档案 完整回复】</p>
      <div class="truth-stack">
        <div class="truth-layer"><span class="truth-label">回答来源</span><div class="truth-text">phase3-legacy.js — L1 上一轮外来者总论、L2 四大遗产文明详解、L3 遗产物品与五层分布、L4 上一轮遗产六律</div></div>
        <div class="truth-layer"><span class="truth-label">四类失败路线</span><div class="truth-text">旧灯文明——相信光能稳定一切，忽略光也会被模仿，失败为正午错觉、旧灯回档、伪安全灯。<br>旧门文明——相信门能带文明逃离，忽略门会记人、路会变成嘴，失败为门灾、叠室遗迹、断链门廊。<br>旧梦文明——相信梦能保存文明，忽略梦保存太完整会想醒来，失败为梦腐层、不可醒梦、旧梦人格。<br>旧榜文明——相信最强者成神可拯救全体，忽略位置会吞掉人，失败为排行榜残留、候选互食机制。</div></div>
        <div class="truth-layer"><span class="truth-label">核心教训</span><div class="truth-text">上一轮外来者不是死在黑暗里，他们死在自己最相信的答案里。每一件遗产都能救命，也都在低声劝后来者：再相信我一次。当前系统从失败中学习，但改良的是效率不是慈悲。</div></div>
      </div>
    `,
    firstIdentified: '2026-06-14',
    lastChecked: '2026-06-14',
    notes: '',
  },
  {
    id: 'dq-sight-growth-curve',
    status: 'resolved',
    priority: '中',
    category: '能力设定',
    title: '裂视能力的成长曲线与代价',
    summary: '【已由 Task 2.2 回复】六大代价体系（被看见、边界削薄、梦境污染、系统异常、庇护所依恋、候选靠近）和七级成长（0级裂痕残光到6级临胎裂视）。',
    detail: `
      <p class="section-desc">【已由 Task 2.2·裂视能力规则 完整回复】</p>
      <div class="truth-stack">
        <div class="truth-layer"><span class="truth-label">回答来源</span><div class="truth-text">phase2-skills.js — V1 裂视第一性定义、V2 三类可见物、V3 代价体系与成长等级、V4 裂视六律</div></div>
        <div class="truth-layer"><span class="truth-label">六重代价</span><div class="truth-text">①被看见（越深越被反向定位）②边界削薄（名字/影子/自我不同步）③梦境污染（梦不再只是私人空间）④系统标注异常（新手保护降低）⑤庇护所依恋增强（墙体不愿主角远行）⑥候选人格靠近（神胎碎片投射诱惑）</div></div>
        <div class="truth-layer"><span class="truth-label">七级成长</span><div class="truth-text">0级·裂痕残光（偶尔闪烁）→1级·错标识别（看见系统与现实不一致）→2级·边界线感知（看到归属线）→3级·规则注释（读取骨刻语）→4级·缝隙通行（发现隐藏门路）→5级·候选注视（看见神胎碎片倾向）→6级·临胎裂视（看见整体代谢，不可完全恢复）</div></div>
        <div class="truth-layer"><span class="truth-label">核心定义</span><div class="truth-text">裂视不是系统赐予的能力，而是系统过滤层破裂的伤口。不是看答案，而是看裂缝。能被看见的缝，也可能正在看着你。</div></div>
      </div>
    `,
    firstIdentified: '2026-06-14',
    lastChecked: '2026-06-14',
    notes: '',
  },
  {
    id: 'dq-fragments-composition',
    status: 'resolved',
    priority: '高',
    category: '神胎与终局',
    title: '神胎碎片的具体构成与冲突',
    summary: '【已由 世界观维度定稿 D1 完整回复】六个碎片：饥饿（吞噬型）、母巢（圈养型）、名位（秩序型）、梦腐（保存型）、门脉（筛选型）、方舟（分裂繁殖型）。每个碎片都有独立人格倾向和主导后果。',
    detail: `
      <p class="section-desc">【已由 世界观维度定稿 D1 与 D5 完整回复】神胎碎片是无光域的主体意志的不同倾向，每一个碎片都在寻找有利于自己成为主导人格的材料。碎片不是系统故障，而是神胎尚未统合的人格候选。</p>
      <div class="truth-stack">
        <div class="truth-layer"><span class="truth-label">六个碎片</span><div class="truth-text">
          ① <strong>饥饿碎片</strong>（吞噬型）— 黑潮变为主动狩猎，晦兽进化为回收器官，文明被视作饲料培养方式。神胎承认自己最大的欲望就是吃。<br>
          ② <strong>母巢碎片</strong>（圈养型）— 黑潮减少，庇护所稳定，死亡率降低。但所有人被纳入巢穴秩序，个体边界被削弱，床门梦名由神体统一管理。<br>
          ③ <strong>名位碎片</strong>（秩序型）— 排行榜变为神籍，名册决定命运，食名现象制度化。你不会被杀，只会被判定为不再适合坐在你的位置上。<br>
          ④ <strong>梦腐碎片</strong>（保存型）— 死者可在梦中继续，活人可进入旧梦生活。没有人真正死去，也没有人真正继续向前活。<br>
          ⑤ <strong>门脉碎片</strong>（筛选型）— 门路无处不在，每个人不断被送往更适合他的地方。你永远有路可走，但每一条路都在替世界判断你是什么。<br>
          ⑥ <strong>方舟碎片</strong>（分裂繁殖型）— 神胎尝试将自身逻辑送往外部。出走可能不是逃离神胎，而是神胎学会如何把自己播种到别处。
        </div></div>
        <div class="truth-layer"><span class="truth-label">关联条目</span><div class="truth-text">framework-dimensions.js — D1 神胎临产本质、D5 终局路线完整对照<br>sections.js — 第二章（晦能基础规则）、第十六章（神胎与终局）<br>deep-logic.js — 第七条（核心边界器官·系统位置·神胎人格需求）、第十一条（神胎人格需求）</div></div>
      </div>
      <div class="quote-center">神胎临产，不是灾难倒计时，而是世界即将获得自我。<br>问题不是它会不会出生，而是它出生时，会把谁当成"自己"。</div>
    `,
    firstIdentified: '2026-06-14',
    lastChecked: '2026-06-14',
    notes: '',
  },
]