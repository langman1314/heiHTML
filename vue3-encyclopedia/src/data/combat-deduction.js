// 无光域·五杠杆实战推演（C线）
// 名册争夺战：赎籍会 vs 食名教团——逐回合边界裁决实战演示
// 任务书：把第四部分的公式、五杠杆、以及"战斗=晋升=堕落"在一张名条上演完

// 裁决规则速记：
// 战斗=边界裁决。现实必须回答问题；谁的答案先被现实承认谁赢；输家被改写。
// 裁决值 = 稳定度 × 共识人数 × 情绪强度 × 时间  ≥  承认阈值（默认100）
// 五杠杆：独断（稳定）/ 共识（人数）/ 情绪 / 持久（时间）/ 浓度（环境）
// 结算铁律：谁动了杠杆、谁强行写了现实，谁的晦染就+。赢家也染。

export const combatDeduction = [
  {
    id: 'deduction-overview',
    num: 'C0',
    title: '裁决规则（一屏速记）',
    sub: '战斗中每次出手都是向现实提交一个定义',
    summary: '战斗=边界裁决。现实必须回答一个问题；谁的答案先被现实承认，谁赢；输家被改写。裁决值=稳定度×共识人数×情绪强度×时间≥承认阈值（默认100，浓度越高阈值越低）。五杠杆：独断/共识/情绪/持久/浓度。结算铁律：谁动了杠杆、谁强行写了现实，谁的晦染就+。赢家也染。',
    content: `
      <div class="grid-3">
        <div class="card"><h3 class="card-title">核心公式</h3><div class="card-body">裁决值 = 稳定度 × 共识人数 × 情绪强度 × 时间<br>默认阈值 100，黑潮/高浓度区阈值降低</div></div>
        <div class="card"><h3 class="card-title">五杠杆</h3><div class="card-body"><span class="keyword">独断</span>（稳定）/ <span class="keyword">共识</span>（人数）/ <span class="keyword">情绪</span> / <span class="keyword">持久</span>（时间）/ <span class="keyword">浓度</span>（环境）</div></div>
        <div class="card danger"><h3 class="card-title">铁律</h3><div class="card-body">谁动了杠杆，谁的晦染就+。赢家也染。战斗=晋升=堕落。</div></div>
      </div>
      <div class="quote">在无光域，你不是在扣血，你是在和现实争一个定义。每挥一次刀，都在向世界缴纳一个新的解释。</div>
    `,
  },
  {
    id: 'deduction-battlefield',
    num: 'C1',
    title: '战场设定：名册争夺战',
    sub: '赎籍会 vs 食名教团——同一条名条，你死我活',
    summary: '现实要回答的问题：「灰三十七」这个名、这具身体，到底归谁的索引？红方赎籍会想将名留下、债转染奴（外科分割写），蓝方食名教团想将名接管给圣名者（敌意接管写）。争夺物：客户——榜单高位、临染边缘的高晦染者。',
    content: `
      <div class="grid-2">
        <div class="card"><h3 class="card-title">现实要回答的问题</h3><div class="card-body">「灰三十七」这个名、这具身体，到底归谁的索引？</div></div>
        <div class="card"><h3 class="card-title">争夺物</h3><div class="card-body">客户「灰三十七」——榜单高位、临染边缘的高晦染者，雇赎籍会退染保命。</div></div>
      </div>
      <h3>双方阵容</h3>
      <div class="grid-2">
        <div class="card"><h3 class="card-title">红方 · 赎籍会</h3><div class="card-body"><span class="keyword">在场者：</span>赎籍师「账娘」+ 养渗染奴「替三十七」<br><span class="keyword">想写入：</span>名留灰三十七、债转替三十七（外科分割写）<br><span class="keyword">杠杆偏好：</span>独断 + 持久 + 浓度</div></div>
        <div class="card"><h3 class="card-title">蓝方 · 食名教团</h3><div class="card-body"><span class="keyword">在场者：</span>圣名者「另一个灰三十七」<br><span class="keyword">想写入：</span>名转圣名者（敌意接管写）<br><span class="keyword">杠杆偏好：</span>共识 + 情绪</div></div>
      </div>
      <h3>环境与变量</h3>
      <div class="grid-2">
        <div class="card"><h3 class="card-title">地点/时机</h3><div class="card-body">骨沉层·缄默名庭阴面账房；小黑潮窗（浓度高→阈值由100压到~62）</div></div>
        <div class="card"><h3 class="card-title">裁判</h3><div class="card-body">名庭的「现实承认」——谁先破阈值谁的写入成立</div></div>
        <div class="card"><h3 class="card-title">野变量</h3><div class="card-body">名庭雇的裂视者「缝匠」，坐见证席，能曝光矛盾（独断流的天然反制）</div></div>
        <div class="card danger"><h3 class="card-title">致命耦合</h3><div class="card-body">若蓝方先接管名，红方就没有"灰三十七"这个锚来卸债（名都不归他了，债无从转）；若红方先卸债成功，客户晦染下沉，对食名教团失去价值。同一条名条，你死我活。</div></div>
      </div>
    `,
  },
  {
    id: 'deduction-rounds',
    num: 'C2',
    title: '逐回合推演',
    sub: '七回合，从共识造势到沉默封局',
    summary: '全推演由七回合构成，裁决条以红/蓝双方累积裁决值、阈值随黑潮下降为度量。全程只用既有设定：裁决公式、五杠杆、三证原则、骨刻、床签、名条、沉默防御、裂视见证、嫁痕/染奴、圣名者、晦染结算。零新系统。',
    content: `
      <p class="section-desc">【裁决条：红 / 蓝，阈值随黑潮下降】</p>
      <div class="truth-stack">
        <div class="truth-layer"><span class="truth-label">R1 — 蓝方开局·共识流</span><div class="truth-text">食名教团老套路：开战前就在频道/聚落散布补句「灰三十七其实早换过人了吧」，养出底共识。<br>→ <span class="keyword">蓝 20｜红 0｜阈值 100</span></div></div>
        <div class="truth-layer"><span class="truth-label">R2 — 红方反制·独断流</span><div class="truth-text">账娘亮出"三证"之一的伪边界承认（伪床签+套名），用骨刻把"债属替三十七"刻死。稳定度极高、一记重锤。但这是伪证，埋雷。<br>→ <span class="keyword">红 45｜蓝 20｜阈值 95</span></div></div>
        <div class="truth-layer"><span class="truth-label">R3 — 蓝方·情绪流</span><div class="truth-text">圣名者当众上演"归来"——哽咽、认人、唤旧名。在场者的亏欠与恐惧被拉爆（情绪是能压低他人阈值的因子）。<br>→ <span class="keyword">蓝 55｜红 45｜阈值 88</span></div></div>
        <div class="truth-layer"><span class="truth-label">R4 — 红方·持久流 + 浓度流</span><div class="truth-text">账娘故意把仪式拖到小黑潮峰值（阈值最低时下手），同时让染奴反复睡客户的床、反复念客户的名——时间×重复堆稳定度。<br>→ <span class="keyword">红 70｜蓝 55｜阈值骤降 65（红已逼近）</span></div></div>
        <div class="truth-layer"><span class="truth-label">R5 — 野变量·裂视见证（独断流反制=揭露矛盾）</span><div class="truth-text">缝匠看穿红方床签是错误标注，当庭曝光。红方稳定度崩塌。<br>→ <span class="keyword">红 30｜蓝 55｜阈值 65</span></div></div>
        <div class="truth-layer"><span class="truth-label">R6 — 反噬·曝光即助攻</span><div class="truth-text">但缝匠"被看见"了——他自己晦染+1；更糟的是，这场曝光把全场注意力（=共识人数）轰然推高，反而喂了蓝方的共识流。<br>→ <span class="keyword">蓝 75｜红 30｜阈值 62 → 蓝方破阈值在即</span></div></div>
        <div class="truth-layer" style="border:1px solid #d7b56d;"><span class="truth-label">R7 — 决断点：客户灰三十七自己选</span><div class="truth-text">这一刻，胜负不在两派手里，在客户开不开口：<br><br><span class="keyword">岔路①——沉默（不回应「你是不是回来了」）</span>：拒绝向圣名者签发关系承认 → 蓝方共识/情绪断供，蓝 75→40，两方皆不过阈值 → 流局。<br><br><span class="keyword">岔路②——开口认领自己的名（想保住名）</span>：等于回应了归来问句 → 瞬间给蓝方现实签证，蓝+即时关系加成 → 跃过阈值，代位成功。<br><br><span class="danger">「沉默是最强大的否定句；回应即许可。」——整场战斗的胜负手，是一句话说不说。</span></div></div>
      </div>
    `,
  },
  {
    id: 'deduction-settlement',
    num: 'C3',
    title: '三种结局的晦染结算',
    sub: '没有任何结局让动过杠杆的人全身而退',
    summary: '三种结局——蓝胜·代位、红险胜·嫁染成、流局·封染——没有任何结局让动过杠杆的人全身而退。共同结算：场上每个拉过杠杆的人——账娘、圣名者、甚至只是见证的裂视者缝匠——晦染全部+。这就是"战斗=晋升=堕落"在一张名条上的完整演示。',
    content: `
      <div class="grid-2">
        <div class="card"><h3 class="card-title">蓝胜·代位</h3><div class="card-body"><span class="keyword">触发：</span>客户开口（岔路②）<br><span class="keyword">谁赢：</span>圣名者接管名<br><span class="keyword">晦染代价：</span>圣名者晦染跳阶（食名越成功越接近候选——A1的诅咒兑现）；客户被改写=活死/失名</div></div>
        <div class="card"><h3 class="card-title">红险胜·嫁染成</h3><div class="card-body"><span class="keyword">触发：</span>客户配合、缝匠未及时曝光<br><span class="keyword">谁赢：</span>债转染奴<br><span class="keyword">晦染代价：</span>客户退回一阶但留嫁痕（永久烙底+采样权重↑）；染奴被现实当成那个高晦染的他；账娘作为操作者也沾染</div></div>
        <div class="card" style="grid-column:1/-1"><h3 class="card-title">流局·封染</h3><div class="card-body"><span class="keyword">触发：</span>客户沉默（岔路①）<br><span class="keyword">谁赢：</span>无人<br><span class="keyword">晦染代价：</span>债冻结、名保住，但能力一起冻结，且下一次黑潮会让封染开裂。教科书正解，但代价是封染冻结、债没退成、黑潮埋雷。</div></div>
      </div>
      <div class="quote">代价最重的"惨胜"是红方嫁染成功：客户多喘一阶，账面上一个染奴替他被神胎吃掉，且他从此带嫁痕——这恰好把这场战斗，喂回了赎籍会的下一单生意。战斗永远在为下一场战斗制造客户。</div>
      <div class="card danger"><div class="card-body"><span class="keyword">共同结算：</span>场上每个拉过杠杆的人——账娘、圣名者、甚至只是见证的裂视者缝匠——晦染全部+。没有人能"参与一场战斗而不被世界记住"。</div></div>
    `,
  },
  {
    id: 'deduction-leverage-guide',
    num: 'C4',
    title: '五杠杆通用速查',
    sub: '从本场抽象出通用实现与防御',
    summary: '从名册争夺战中抽象出的五杠杆通用用法与对应防御：独断靠骨刻/裂视刻写→被揭露矛盾反制；共识靠频道/教义聚众→被沉默断供反制；情绪靠恐惧/亏欠拉爆→被仪式封情反制；持久靠拖延/重复堆积→被抢先闭合反制；浓度靠择时拖入黑潮→被退守低浓度反制。',
    content: `
      <div class="card"><div class="card-body">
        <table style="width:100%;border-collapse:collapse;font-size:13px;color:#c8c4b8;">
          <tr style="border-bottom:1px solid #2a2736;"><th style="padding:8px;text-align:left;color:#d7b56d;">杠杆</th><th style="padding:8px;text-align:left;color:#d7b56d;">本场谁用</th><th style="padding:8px;text-align:left;color:#d7b56d;">通用实现</th><th style="padding:8px;text-align:left;color:#d7b56d;">防御=逆运算</th></tr>
          <tr style="border-bottom:1px solid #1e1e2a;"><td style="padding:8px;">独断·稳定度</td><td style="padding:8px;">红方骨刻伪证</td><td style="padding:8px;">裂视者/骨刻师把定义刻到现实里</td><td style="padding:8px;">揭露矛盾（缝匠所为）</td></tr>
          <tr style="border-bottom:1px solid #1e1e2a;"><td style="padding:8px;">共识·人数</td><td style="padding:8px;">蓝方频道造势</td><td style="padding:8px;">教团/公会/榜单/法庭聚众</td><td style="padding:8px;">沉默（断共识，岔路①）</td></tr>
          <tr style="border-bottom:1px solid #1e1e2a;"><td style="padding:8px;">情绪·强度</td><td style="padding:8px;">蓝方归来表演</td><td style="padding:8px;">恐惧/信仰/亏欠拉爆，压低对方阈值</td><td style="padding:8px;">仪式封情、不回应</td></tr>
          <tr style="border-bottom:1px solid #1e1e2a;"><td style="padding:8px;">持久·时间</td><td style="padding:8px;">红方拖延+重复</td><td style="padding:8px;">围城、占据、活屋、长仪式</td><td style="padding:8px;">抢先闭合边界、封染</td></tr>
          <tr style="border-bottom:1px solid #1e1e2a;"><td style="padding:8px;">浓度·环境</td><td style="padding:8px;">红方择黑潮峰</td><td style="padding:8px;">把战场拖进黑潮/梦腐层</td><td style="padding:8px;">三证原则、退守低浓度区</td></tr>
        </table>
      </div></div>
      <div class="quote">每一场战斗都是一次定义权的争夺。你选的杠杆，决定了你以什么代价赢——也决定了你赢了之后变成什么。</div>
    `,
  },
  {
    id: 'deduction-hooks',
    num: 'C5',
    title: '推演自检与钩回',
    sub: '三处天然钩回，零新系统',
    summary: '全程只用既有设定：裁决公式、五杠杆、三证原则、名庭、骨刻、床签名条、沉默防御、黑潮窗、裂视见证、嫁痕/染奴（A10）、圣名者（A1）、晦染结算（主脊）。零新系统。三处天然钩回：裂视者"曝光即被看见即染"、红方惨胜留嫁痕喂回A线、沉默/回应印证晦诡六律。',
    content: `
      <h3>三处天然钩回</h3>
      <div class="grid-2">
        <div class="card"><h3 class="card-title">① 裂视者印记</h3><div class="card-body">缝匠曝光伪证是正确的，但"被看见"让他自己晦染+1——印证裂视六律：能被看见的缝，也可能正在看你。</div></div>
        <div class="card"><h3 class="card-title">② 红方惨胜喂回A线</h3><div class="card-body">红方嫁染成功则客户留嫁痕→烙底+采样权↑→客户成为赎籍会的回头客——恰好喂回A10赎籍会的下一单生意。战斗永远在为下一场战斗制造客户。</div></div>
        <div class="card" style="grid-column:1/-1"><h3 class="card-title">③ 沉默即否定</h3><div class="card-body">岔路①的沉默流局印证晦诡六律：沉默是最强大的否定句，回应即许可。整场战斗的胜负手，不在两派的技巧，而在客户说没说出那句话。</div></div>
      </div>
      <div class="quote">这套「设问→五杠杆逐回合→破阈值→晦染结算」的推演格式，可作为全书所有战斗/对峙场景的统一写法模板——让"打架"永远是边界裁决而非扣血。</div>
    `,
  },
];
