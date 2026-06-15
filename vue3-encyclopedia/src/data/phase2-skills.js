// 无光域·裂视能力规则与庇护所活化机制（Phase 2.2 + 2.3 深化）
// 任务书 2.2 回复：裂视不是看见答案，而是看见现实没有缝好的地方
// 任务书 2.3 回复：庇护所不是房屋升级，而是文明器官逐渐长出自我

export const phase2Skills = [
  // ========== 裂视能力部分 ==========
  {
    id: 'sight-first-principle',
    num: 'V1',
    title: '裂视的第一性定义',
    sub: '裂视不是系统赐予的能力，而是系统过滤层破裂的伤口',
    summary: '裂视是主角在穿越瞬间看见"造主"后，普通系统晦视接口被冲裂产生的异常感知。它能看见未完成定义、错误标注和边界缝隙——但不是万能透视，不预测未来，不免疫污染。',
    content: `
      <p class="section-desc">普通玩家的晦视，是系统为了保护外来者而提供的低配过滤层。它让玩家能看见晦能轮廓、生命热度、污染波纹与资源粗略标记。而裂视则是在过滤层破裂后，偶尔看见更底层的信息。</p>
      <div class="grid-2">
        <div class="card"><h3 class="card-title">裂视是什么</h3><div class="card-body">看见未完成定义、错误标注、边界缝隙、系统遮蔽痕迹、规则注释残片、归属不一致、名字重影、门路错位、庇护所活化裂口、晦诡尚未成形的循环雏形。</div></div>
        <div class="card"><h3 class="card-title">裂视不是什么</h3><div class="card-body"><span class="danger">不是</span>透视眼、预知未来、读心术、万能鉴定术、规则百科全书、系统管理员权限、完全可靠的真相提示、免疫污染的护身符。裂视不告诉"正确答案是什么"，只提醒"这里有东西没有对齐"。</div></div>
      </div>
      <h3>穿越瞬间的三重后果</h3>
      <div class="truth-stack">
        <div class="truth-layer"><span class="truth-label">第一重：过滤层破裂</span><div class="truth-text">系统原本为玩家准备的感知保护被撕开一条缝，边缘会不稳定地显示更深层信息。</div></div>
        <div class="truth-layer"><span class="truth-label">第二重：灵魂边界被烫伤</span><div class="truth-text">自我结构被迫承认"现实之外还有更高层观测者"，对无光域的规则不再完全服从系统翻译。</div></div>
        <div class="truth-layer"><span class="truth-label">第三重：审美锚形成</span><div class="truth-text">被某种无法名状的壮丽震撼，不会轻易被低级恐怖击垮——但也埋下危险：对深层结构不只是恐惧，还会被吸引。</div></div>
      </div>
      <div class="quote">裂视不是主角看穿黑暗的眼睛，而是黑暗曾经看穿他后留下的裂口。他因此能看见现实没有缝好的地方，也因此必须一次次决定：是把裂缝缝上，还是为了看见更深的美，亲手把世界撕开一点。</div>
    `,
  },
  {
    id: 'sight-three-categories',
    num: 'V2',
    title: '裂视能看见的三类事物',
    sub: '未完成定义、错误标注、边界缝隙——裂视只稳定作用于这三类',
    summary: '裂视只能看见三类对象——未完成定义（正在决定自己是什么的事物）、错误标注（记录与现实的不一致）、边界缝隙（内外、生死、梦醒之间的未闭合裂口）。每类都有明确的可见对象和表现形式。',
    content: `
      <div class="grid-2">
        <div class="card"><h3 class="card-title">第一类：未完成定义</h3><div class="card-body">正在成形中的晦诡、尚未完全活化的庇护所模块、正在认主的物品、旧主未断的新交易物、空床空箱、黑潮后刚浮现的资源点、尚未稳定的门路、未完全死亡的活死者。表现形式：轮廓反复变形、名称闪烁、物体边缘像未干的墨、系统标签后出现划掉的字。作用：帮助主角在问题完全成形前发现问题——但这只是提前进入危险，不是胜利。</div></div>
        <div class="card"><h3 class="card-title">第二类：错误标注</h3><div class="card-body">系统、名册、门牌、床签、货契、排行榜、地图等记录与现实边界不一致。能看见系统把污染物标成资源、地图把门路标成普通道路、排行榜保留死亡玩家位置、床签写着某人名字但床不承认他。表现形式：字体错位、标签重影、名字下面压着旧名。这是裂视最实用的部分，能让主角比普通玩家更早知道系统不是全部真相。</div></div>
        <div class="card" style="grid-column:1/-1"><h3 class="card-title">第三类：边界缝隙</h3><div class="card-body">门缝中不是空间而是通行关系、床与睡者之间的归属线变细、死者名字仍连着频道、梦境出口没有完全关闭、庇护所墙体与废屋残片之间正在缝合。表现形式：声音延迟、温度错位、名字念起来变轻、影子不贴身体、某条路的回家感过强。边界缝隙具有反向感知性——看见缝隙等于在缝隙另一边点亮自己。裂视越深入，越容易被深层看见。</div></div>
      </div>
      <div class="quote">裂视最擅长看见"缝"，这也是它最危险的能力。</div>
    `,
  },
  {
    id: 'sight-cost-and-levels',
    num: 'V3',
    title: '裂视的代价体系与成长等级',
    sub: '裂视的代价必须具体、可积累、能推动剧情',
    summary: '裂视六大代价——被看见、边界削薄、梦境污染、系统标注异常、庇护所依恋增强、候选人格靠近。裂视从0级到6级，每一次升级都是一次不可逆的自我边界变化。',
    content: `
      <h3>六重代价</h3>
      <div class="grid-2">
        <div class="card"><h3 class="card-title">① 被看见</h3><div class="card-body">看得越深越容易被深层看见。晦诡更容易注意主角，系统隐藏文字出现频率上升，梦中有人知道主角看过什么。</div></div>
        <div class="card"><h3 class="card-title">② 边界削薄</h3><div class="card-body">名字被叫到时反应慢半拍，睡醒后短暂不确定自己在哪里，影子与系统昵称偶尔不同步——不是疯掉，而是自我与世界之间的皮肤变薄。</div></div>
        <div class="card"><h3 class="card-title">③ 梦境污染</h3><div class="card-body">梦见白天看过的门，梦里继续读未完的系统注释，梦渣品质提高但污染度上升。裂视越深，梦越不再只是私人空间。</div></div>
        <div class="card"><h3 class="card-title">④ 系统标注异常</h3><div class="card-body">任务奖励延迟，面板偶尔闪烁，隐藏文字增加，部分新手保护失效，部分高危任务提前开放——既是优势，也是筛选加速。</div></div>
        <div class="card"><h3 class="card-title">⑤ 庇护所依恋增强</h3><div class="card-body">墙体更快响应情绪，门主动为主角延迟关闭，箱子拒绝某些人接近主角物品，庇护所开始不愿主角远行。</div></div>
        <div class="card"><h3 class="card-title">⑥ 候选人格靠近</h3><div class="card-body">其他候选者更易相遇，神胎碎片投射不同诱惑，食名教团更想替代他，系统任务开始围绕文明选择而非个人生存。</div></div>
      </div>
      <h3>裂视等级</h3>
      <div class="truth-stack">
        <div class="truth-layer"><span class="truth-label">0级·裂痕残光</span><div class="truth-text">穿越初期，偶尔看见系统标签闪烁，对门/床/名字异常有本能不适。代价：头痛、耳鸣、睡眠质量下降。</div></div>
        <div class="truth-layer"><span class="truth-label">1级·错标识别</span><div class="truth-text">第一次黑潮前后，看见系统标注与现实不一致，识别部分旧主未断物。代价：梦中重复白天看到的标签，精神疲劳。</div></div>
        <div class="truth-layer"><span class="truth-label">2级·边界线感知</span><div class="truth-text">庇护所3级后，看见门、床、箱、名字之间的归属线。代价：自身名字偶尔变轻，庇护所依恋增强。</div></div>
        <div class="truth-layer"><span class="truth-label">3级·规则注释</span><div class="truth-text">进入骨沉层或梦腐层，看见部分规则触发条件，读取残缺骨刻语。代价：梦境污染显著，被同类晦诡反向识别。</div></div>
        <div class="truth-layer"><span class="truth-label">4级·缝隙通行</span><div class="truth-text">进入门脉层，发现隐藏门路，利用边界缝隙转移或封堵。代价：路会记住主角，归路发芽概率上升。</div></div>
        <div class="truth-layer"><span class="truth-label">5级·候选注视</span><div class="truth-text">进入候选人格池，看见神胎碎片倾向，识别其他候选人格纹路。代价：神胎碎片开始回应，每次裂视改变自身候选倾向。</div></div>
        <div class="truth-layer"><span class="truth-label">6级·临胎裂视</span><div class="truth-text">终局前胎海层，看见无光域整体代谢与终局路线边界代价。代价：使用后不可完全恢复，一部分自我会被神胎记住。</div></div>
      </div>
      <div class="quote">裂视成长不是简单"看得更清楚"，而是"看得更深、更危险、更难回头"。</div>
    `,
  },
  {
    id: 'sight-laws',
    num: 'V4',
    title: '裂视六律',
    sub: '裂视的核心法则——不提供答案，只揭示裂缝',
    summary: '裂视六律确立了裂视的底层逻辑：不看答案只看裂缝、能被看见的缝也在看你、错误标注是不完整真相、看见污染不等于免疫污染、裂视越强自我越薄、真正的答案不在眼睛里而在选择里。',
    content: `
      <div class="grid-2">
        <div class="card"><h3 class="card-title">第一律：不看答案，只看裂缝</h3><div class="card-body">裂视不会告诉你该怎么做。它只告诉你：这里没有对齐。</div></div>
        <div class="card"><h3 class="card-title">第二律：能被看见的缝，也可能正在看你</h3><div class="card-body">观察不是单向行为。裂视越深入，主角越容易被晦诡、系统、神胎碎片和门脉结构反向定位。</div></div>
        <div class="card"><h3 class="card-title">第三律：错误标注不是谎言，而是不完整真相</h3><div class="card-body">系统、名册、床签、门牌都可能只在某一层面正确。裂视的作用是发现层面之间的冲突。</div></div>
        <div class="card"><h3 class="card-title">第四律：看见污染不等于免疫污染</h3><div class="card-body">裂视让主角更早发现危险，也让危险更容易获得通向主角的路径。</div></div>
        <div class="card"><h3 class="card-title">第五律：裂视越强，自我越薄</h3><div class="card-body">能力成长伴随边界削薄、梦境污染、系统异常标注和候选人格风险。</div></div>
        <div class="card"><h3 class="card-title">第六律：真正的答案不在眼睛里，而在选择里</h3><div class="card-body">裂视能显示每条路的裂缝。但成神、留域、出走、破胎——最终不是看见哪条路干净，而是决定愿意为哪条路承担脏污。</div></div>
      </div>
      <div class="quote-center">裂视不是主角看穿黑暗的眼睛，<br>而是黑暗曾经看穿他后留下的裂口。</div>
    `,
  },
  // ========== 庇护所活化部分 ==========
  {
    id: 'shelter-first-principle',
    num: 'H1',
    title: '庇护所的第一性定义',
    sub: '庇护所不是房屋，而是系统、文明与神胎争夺"家"概念的中间物',
    summary: '庇护所是由系统安全接口、文明边界钉、晦能活化器官三种结构叠合而成的半活性边界器官。它会保护人，但保护本身会产生代价——越理解主人，越可能替主人做决定。',
    content: `
      <p class="section-desc">庇护所一开始是系统给予玩家的最低限度安全接口。但随着玩家持续居住、命名、修补、喂养、清点、升级、抵御黑潮、收纳物资、处理尸体、种植晦植、放置床位、建立规则，庇护所会逐渐从"物理空间"转变为"被现实承认的家"。</p>
      <div class="grid-2">
        <div class="card"><h3 class="card-title">系统安全接口</h3><div class="card-body">初始由系统提供，是玩家接入无光域后最基础的生存保护点。</div></div>
        <div class="card"><h3 class="card-title">文明边界钉</h3><div class="card-body">玩家通过门、床、箱、灯、灶、仓储、种植、规则、命名，将旧世界文明秩序钉入无光域。</div></div>
        <div class="card"><h3 class="card-title">晦能活化器官</h3><div class="card-body">庇护所吸收晦晶、尸体、腐殖、梦渣、恐惧、归属感与居住行为，逐渐长出类似生命体的反应。</div></div>
      </div>
      <h3>庇护所的底层活化逻辑</h3>
      <div class="grid-2">
        <div class="card"><h3 class="card-title">物质供养</h3><div class="card-body">庇护所需要材料成长——灰木、骨材、晦晶、活墙残片、门骨架、规则尘、晦兽尸体等。这些材料大多带有旧功能、旧主、旧梦与边界残留。庇护所升级不是把材料堆上去，而是让不同过去被迫承认：从现在起，我们属于同一个家。</div></div>
        <div class="card"><h3 class="card-title">边界重复</h3><div class="card-body">每天开关同一扇门、睡在同一张床、将物品放进同一个箱——重复越多，庇护所越稳定。但重复也会让庇护所形成习惯，当习惯积累到一定程度，庇护所不再只是被动承接行为，而是主动维持这种行为。活化就是习惯被房子学会。</div></div>
        <div class="card" style="grid-column:1/-1"><h3 class="card-title">情绪沉积</h3><div class="card-body">庇护所最重要的养分不是晦晶，而是归属感。它吸收恐惧、孤独、安全感、怀乡、疲惫、希望、守夜时的紧张——这些沉积最终构成庇护所人格雏形。但无光域中的家会反向索取：房屋学会的不只是保护，还有主人害怕什么、舍不得谁、讨厌谁。</div></div>
      </div>
      <div class="quote">庇护所不是玩家的房子，而是玩家用恐惧、梦、尸体、灯火、名字和归属感，在神胎体内养出的一颗文明器官。</div>
    `,
  },
  {
    id: 'shelter-three-rights',
    num: 'H2',
    title: '庇护所三种权与活化阶段',
    sub: '占有权、居住权、内属权——房屋与人之间的三层关系',
    summary: '占有权是系统层面的操作权，居住权是门床箱墙的承认，内属权是房屋将人视为自身一部分的危险状态。庇护所从0阶段死屋到7阶段子宫方舟，每阶段都在深化人与房屋的边界重叠。',
    content: `
      <h3>三种权</h3>
      <div class="grid-2">
        <div class="card"><h3 class="card-title">占有权</h3><div class="card-body">系统层面的所有权——可打开面板、可升级模块、可分配基础权限。局限：只代表系统承认你拥有操作接口，不代表门、床、箱真正承认你。占有权可以被系统交易、篡改或因死亡转移，但若居住权和内属权未同步转移，就会产生庇护所反抗。</div></div>
        <div class="card"><h3 class="card-title">居住权</h3><div class="card-body">庇护所内部器官对某人的承认——门对其开合顺畅、床能恢复其睡眠、箱愿意保存其物品。长期住客、伴侣甚至旧主都可能拥有居住权。居住权混乱会引发陌生室友、床位纠纷、箱子拒绝开启。</div></div>
        <div class="card" style="grid-column:1/-1"><h3 class="card-title">内属权</h3><div class="card-body">庇护所最高级也最危险的承认——房屋不再把某人视作"住在里面的人"，而是视作"自己的一部分"。其受伤时墙体出现反应，其远行时门区不安，黑潮中庇护所优先保护他甚至牺牲外人。内属权不是更高级保护，而是人与房屋边界的重叠。获得内属权后更安全，也更难离开。</div></div>
      </div>
      <h3>活化八阶段</h3>
      <div class="truth-stack">
        <div class="truth-layer"><span class="truth-label">0阶段·死屋</span><div class="truth-text">只提供最低限度保护，无明显自我修复，不主动排斥外人。</div></div>
        <div class="truth-layer"><span class="truth-label">1阶段·认主屋</span><div class="truth-text">门对主人反应更顺，床恢复效率提升，箱内物品更稳定。风险：对非主人反应迟钝。</div></div>
        <div class="truth-layer"><span class="truth-label">2阶段·习惯屋</span><div class="truth-text">门栓偶尔自行归位，箱子记住常放物位置，墙体缓慢自愈。风险：错误习惯也会被学习。</div></div>
        <div class="truth-layer"><span class="truth-label">3阶段·反应屋</span><div class="truth-text">主人恐惧时墙体收紧，外人撒谎时灯光不稳，危险物入屋时箱子发冷。风险：庇护所开始拥有偏见。</div></div>
        <div class="truth-layer"><span class="truth-label">4阶段·偏爱屋</span><div class="truth-text">庇护所区分"更重要的人"，某些人睡眠恢复更好，某些人更容易被门放行。风险：不再中立，可能引发内部权力问题。</div></div>
        <div class="truth-layer"><span class="truth-label">5阶段·人格屋</span><div class="truth-text">庇护所出现明确人格雏形，能主动保护、拒绝、隐藏、等待，对离别与死亡有反应。风险：第一次真正拥有"自己的想法"。</div></div>
        <div class="truth-layer"><span class="truth-label">6阶段·胚舟屋</span><div class="truth-text">地基可移动，可携带部分生态圈迁徙，能主动收容或拒绝外部空间。风险：开始不只保护个人，而是管理群体。</div></div>
        <div class="truth-layer"><span class="truth-label">7阶段·子宫方舟</span><div class="truth-text">文明载具雏形——可容纳群落、可迁出无光域、可保存种子梦名法律语言。风险：方舟携带晦能逻辑，可能把文明变成另一种巢。</div></div>
      </div>
      <div class="quote">等级是系统建筑层级，活化是生命化程度。两者不能等同。</div>
    `,
  },
  {
    id: 'shelter-failure-types',
    num: 'H3',
    title: '活化失败类型图鉴',
    sub: '庇护所活化失败不是升级失败，而是房屋人格走歪',
    summary: '九种活化失败类型——饥饿屋、妒主屋、旧主屋、空巢屋、多心屋、假方舟、巢穴化庇护所、门灾型庇护所、记忆屋。每一种都是房屋人格扭曲的后果，都有成因、表现、风险与修正方法。',
    content: `
      <div class="grid-2">
        <div class="card"><h3 class="card-title">① 饥饿屋</h3><div class="card-body"><span class="keyword">成因：</span>过度使用尸体、晦晶供养。<span class="keyword">表现：</span>腐殖池消化速度异常，墙体主动吸收血迹，储物物资无故减少。<span class="keyword">风险：</span>庇护所开始把活人也视为养分。</div></div>
        <div class="card"><h3 class="card-title">② 妒主屋</h3><div class="card-body"><span class="keyword">成因：</span>独居主人长期深度绑定。<span class="keyword">表现：</span>外人睡眠质量下降，门对访客反应迟缓，主人带回同伴后灯光变冷。<span class="keyword">风险：</span>庇护所可能伤害主人亲近者。</div></div>
        <div class="card"><h3 class="card-title">③ 旧主屋</h3><div class="card-body"><span class="keyword">成因：</span>吞并废屋时未断旧主。<span class="keyword">表现：</span>房间布局回到旧样，门对陌生名字有反应，夜里有人按旧习惯走路。<span class="keyword">风险：</span>旧主残留夺回居住权。</div></div>
        <div class="card"><h3 class="card-title">④ 空巢屋</h3><div class="card-body"><span class="keyword">成因：</span>多人迁离后未处理床位。<span class="keyword">表现：</span>空床保持温度，共食桌自动多出碗，门在固定时间等待归人。<span class="keyword">风险：</span>房屋会把外来者改造成"缺失的人"。</div></div>
        <div class="card"><h3 class="card-title">⑤ 多心屋</h3><div class="card-body"><span class="keyword">成因：</span>吞并过多废屋且未人格整合。<span class="keyword">表现：</span>不同房间气味不同，门与墙意见不一致，夜里房间顺序变化。<span class="keyword">风险：</span>庇护所人格分裂，严重时爆发"房间战争"。</div></div>
        <div class="card"><h3 class="card-title">⑥ 巢穴化</h3><div class="card-body"><span class="keyword">成因：</span>母巢碎片影响过重。<span class="keyword">表现：</span>居民外出感到不安，庇护所自动削弱外界吸引，孩童被过度保护。<span class="keyword">风险：</span>安全极高，自由极低。居民不再像公民而像幼崽。</div></div>
        <div class="card"><h3 class="card-title">⑦ 假方舟</h3><div class="card-body"><span class="keyword">成因：</span>过早追求迁徙但内部制度不稳。<span class="keyword">表现：</span>移动后丢失房间，收容多人但床位混乱，方舟梦境中出现神胎脐索。<span class="keyword">风险：</span>不是逃离神胎，而是神胎伸出的流动巢。</div></div>
        <div class="card"><h3 class="card-title">⑧ 门灾型</h3><div class="card-body"><span class="keyword">成因：</span>大量使用门材料。<span class="keyword">表现：</span>门越来越多，门后位置不稳定，有些门只向内开。<span class="keyword">风险：</span>内部变成叠室遗迹，居民可能迷失在自己家中。</div></div>
        <div class="card" style="grid-column:1/-1"><h3 class="card-title">⑨ 记忆屋</h3><div class="card-body"><span class="keyword">成因：</span>长期使用梦渣与旧物。<span class="keyword">表现：</span>死者房间不落灰，墙体记录住户梦话，新居民梦见前任生活。<span class="keyword">风险：</span>温柔但危险——它不会杀人，却会让人接着别人的日子活。</div></div>
      </div>
    `,
  },
  {
    id: 'shelter-laws',
    num: 'H4',
    title: '庇护所六律',
    sub: '庇护所的底层法则——房子是被生活喂活的',
    summary: '庇护所六律确立了活化机制的底层逻辑：房子不会突然活是被生活喂活的、系统拥有不等于房屋承认、升级是合并过去、庇护所越保护你越定义你、家感是最温柔的污染、方舟是带着黑暗重新定义家。',
    content: `
      <div class="grid-2">
        <div class="card"><h3 class="card-title">第一律：房子不会突然活，房子是被生活喂活的</h3><div class="card-body">开门、睡觉、清点、修补、恐惧、归来、失去、命名，都会成为庇护所活化的养分。没有日常，就没有活化。</div></div>
        <div class="card"><h3 class="card-title">第二律：系统拥有不等于房屋承认</h3><div class="card-body">面板显示主人，只是占有权。门、床、箱、墙共同承认，才是居住权。房子把你视作自己的一部分，才是内属权。</div></div>
        <div class="card"><h3 class="card-title">第三律：升级不是加固，而是合并过去</h3><div class="card-body">每一块骨材、旧门、活墙残片都带着前任功能和归属。升级失败不是建筑倒塌，而是旧关系被缝进新家。</div></div>
        <div class="card"><h3 class="card-title">第四律：庇护所越保护你，越会定义你</h3><div class="card-body">高活化庇护所会判断谁是自己人、谁是威胁、谁该留下、谁不该离开。保护与占有只隔着一扇门。</div></div>
        <div class="card"><h3 class="card-title">第五律：家感是最温柔的污染</h3><div class="card-body">恐惧让人逃，归属让人留下。无光域最危险的同化，不是让人害怕黑暗，而是让人觉得黑暗里也有家。</div></div>
        <div class="card"><h3 class="card-title">第六律：方舟不是逃离黑暗，而是带着黑暗重新定义家</h3><div class="card-body">子宫方舟能保存文明，也会携带晦能逻辑。真正的胜利不是离开无光域，而是不让方舟变成新的神胎。</div></div>
      </div>
      <div class="quote-center">庇护所不是玩家的房子，<br>而是玩家用恐惧、梦、尸体、灯火、名字和归属感，<br>在神胎体内养出的一颗文明器官。</div>
    `,
  },
]