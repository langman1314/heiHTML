// 无光域·一致性检查表
// 任务书 7.2：每次新增设定时逐一检查
// 10条校验标准，作为世界观防火墙

export const consistencyCheck = [
  {
    id: 'cc-hue-conservation',
    num: '1',
    title: '是否符合晦能守恒？',
    sub: '三重守恒是一切设定的底层约束',
    summary: '新设定不能违背物质守恒（不能无中生有）、边界守恒（归属转移必须断旧主）、情绪守恒（情绪是燃料但会枯竭）。这是无光域的第一道防火墙。',
    content: `
      <p class="section-desc">任何新设定，首先问：它是否涉及物质的凭空出现？是否涉及归属的无代价转移？是否假设情绪可以无限再生？</p>
      <div class="grid-3">
        <div class="card"><h3 class="card-title">🧱 物质守恒</h3><div class="card-body">资源从哪来？尸体、腐殖、旧物、黑潮沉积——必须有明确物质来源。晦能不能让"无"变成"有"。</div></div>
        <div class="card"><h3 class="card-title">🔲 边界守恒</h3><div class="card-body">这个设定改变了什么归属关系？旧关系是否断开？新关系是否确认？一个归属被建立，另一个必然被削弱。</div></div>
        <div class="card"><h3 class="card-title">💓 情绪守恒</h3><div class="card-body">设定是否依赖情绪输入？这个情绪是否可持续？是否会被制度化、枯竭或污染？</div></div>
      </div>
      <div class="quote">如果新设定可以"凭空产生"任何东西——无论物质、归属还是情绪——它就违反了第一条。无光域没有免费的午餐，每一份获得背后都有一份被消化掉的过去。</div>
    `,
  },
  {
    id: 'cc-cognition-rules',
    num: '2',
    title: '是否符合认知成形规则？',
    sub: '认知改写现实必须满足五个条件',
    summary: '认知影响现实必须同时具备：边界相关性、重复性、共识性、情绪强度、晦能浓度。缺一不可。',
    content: `
      <div class="truth-stack">
        <div class="truth-layer"><span class="truth-label">① 边界相关性</span><div class="truth-text">这个认知是否涉及边界变化？"这里是我的家"有效，"这里有一座金山"无效——纯粹幻想不会成真。</div></div>
        <div class="truth-layer"><span class="truth-label">② 重复性</span><div class="truth-text">偶然想法无效。必须反复称呼、反复使用、反复确认才会沉积。</div></div>
        <div class="truth-layer"><span class="truth-label">③ 共识性</span><div class="truth-text">单人认知影响有限。多人共同承认会显著增强——这解释了流言和怪谈为什么危险。</div></div>
        <div class="truth-layer"><span class="truth-label">④ 情绪强度</span><div class="truth-text">恐惧、爱、愧疚、信仰会提高认知重量。一句在极端恐惧中反复说出的描述，可能喂出晦诡。</div></div>
        <div class="truth-layer"><span class="truth-label">⑤ 晦能浓度</span><div class="truth-text">静晦期稳定，认知难以改写现实。黑潮、梦腐层、胎海层中认知更容易成形。</div></div>
      </div>
      <div class="quote-center">如果新设定假设"随便想想就能改变现实"，它就违反了第二条。<br>无光域不是万能许愿机。</div>
    `,
  },
  {
    id: 'cc-boundary-change',
    num: '3',
    title: '是否涉及边界变化？',
    sub: '明确改变了哪种边界',
    summary: '每一个设定都必须回答：它改变的是哪种边界？内外、归属、生死、身份、主客、新旧、梦醒——还是其他？',
    content: `
      <p class="section-desc">无光域中，边界不是抽象概念，而是现实资源。一个设定必须明确它作用于哪条边界：</p>
      <div class="grid-4">
        <div class="card"><h3 class="card-title">🚪 内外</h3><div class="card-body">谁在门内，谁在门外</div></div>
        <div class="card"><h3 class="card-title">🛏️ 归属</h3><div class="card-body">这属于谁，不属于谁</div></div>
        <div class="card"><h3 class="card-title">☠️ 生死</h3><div class="card-body">谁活着，谁已死</div></div>
        <div class="card"><h3 class="card-title">📛 身份</h3><div class="card-body">现实通过什么索引你</div></div>
        <div class="card"><h3 class="card-title">👥 主客</h3><div class="card-body">谁是家主人，谁是客人</div></div>
        <div class="card"><h3 class="card-title">🔄 新旧</h3><div class="card-body">旧关系是否已断</div></div>
        <div class="card"><h3 class="card-title">💤 梦醒</h3><div class="card-body">梦是否在寻找醒路</div></div>
        <div class="card"><h3 class="card-title">🗣️ 有名/无名</h3><div class="card-body">是否被现实承认</div></div>
      </div>
      <div class="quote">如果无法回答"这个设定改变了哪种边界"，它可能就是无效设定——或者更危险：它可能在不知不觉中松动了一条不该动的边界。</div>
    `,
  },
  {
    id: 'cc-cost',
    num: '4',
    title: '是否有代价？',
    sub: '谁为这个设定支付代价',
    summary: '无光域中没有无成本的获得。每一次边界变化、每一份资源产出、每一个晦诡存在，都必须有人或物支付代价。',
    content: `
      <p class="section-desc">代价可以由以下对象承担。一个设定如果"只有收益没有代价"，它一定有问题：</p>
      <div class="grid-3">
        <div class="card"><h3 class="card-title">个体身体</h3><div class="card-body">体力、健康、寿命、肢体、感官</div></div>
        <div class="card"><h3 class="card-title">个体梦境</h3><div class="card-body">梦的质量、记忆的完整性</div></div>
        <div class="card"><h3 class="card-title">个体名字</h3><div class="card-body">现实索引的稳定性</div></div>
        <div class="card"><h3 class="card-title">庇护所稳定度</h3><div class="card-body">家的边界是否松动</div></div>
        <div class="card"><h3 class="card-title">物品旧主</h3><div class="card-body">旧归属是否被消耗</div></div>
        <div class="card"><h3 class="card-title">聚落边界</h3><div class="card-body">群体的整体安全</div></div>
        <div class="card"><h3 class="card-title">系统标注</h3><div class="card-body">系统记录是否被污染</div></div>
        <div class="card"><h3 class="card-title">区域现实稳定度</h3><div class="card-body">整个区域是否会变得异常</div></div>
        <div class="card"><h3 class="card-title">神胎碎片倾向</h3><div class="card-body">是否助长了某个碎片的优势</div></div>
      </div>
      <div class="quote-center">如果新设定"只有好处没有代价"——它在欺骗你。<br>在无光域中，免费的承诺比恶意更危险。</div>
    `,
  },
  {
    id: 'cc-native-handling',
    num: '5',
    title: '是否能被土著制度处理？',
    sub: '土著文明必须有应对方式',
    summary: '土著在无光域生存了不知多少代，发展出了一套完整的制度化应对体系。如果某个新设定土著完全无法处理，那它要么是神胎级事件，要么就是设定出了问题。',
    content: `
      <p class="section-desc">土著不是被动受苦的，他们拥有数千年的共生经验。检查新设定是否有对应的土著处理手段：</p>
      <div class="grid-2">
        <div class="card"><h3 class="card-title">🤫 沉默</h3><div class="card-body">能否通过不命名、不传播来阻断？</div></div>
        <div class="card"><h3 class="card-title">🦴 骨刻</h3><div class="card-body">能否用骨刻固定边界来应对？</div></div>
        <div class="card"><h3 class="card-title">📿 封名</h3><div class="card-body">能否通过封存名字来解决？</div></div>
        <div class="card"><h3 class="card-title">🪞 仪式</h3><div class="card-body">土著是否已有对应的仪式流程？</div></div>
        <div class="card"><h3 class="card-title">⚖️ 法律</h3><div class="card-body">是否已被纳入土著法律体系？</div></div>
        <div class="card"><h3 class="card-body">🏠 归位</h3><div class="card-body">能否通过重新确认归属来处理？</div></div>
      </div>
      <div class="quote">如果一个设定在无光域中存在了足够久，土著却完全没有应对方式——那要么这个设定太新（如穿越者带来的概念污染），要么它根本不应该存在。</div>
    `,
  },
  {
    id: 'cc-system-record',
    num: '6',
    title: '是否会被系统记录？',
    sub: '系统如何翻译这个设定',
    summary: '系统是神胎的筛选协议，它会将深层现实翻译为玩家能理解的界面语言。检查新设定是否会被系统识别、记录、显示在榜单/频道/任务栏中。',
    content: `
      <p class="section-desc">系统不是绝对客观的第三方，而是神胎的筛选神经。它会用自己的语言翻译任何新出现的现象：</p>
      <div class="grid-3">
        <div class="card"><h3 class="card-title">📋 排行榜</h3><div class="card-body">这个设定是否会影响排名？排名是否会导致竞争异化？</div></div>
        <div class="card"><h3 class="card-title">📢 频道</h3><div class="card-body">是否会在频道中显示？是否会成为传述型污染的源头？</div></div>
        <div class="card"><h3 class="card-title">📝 任务栏</h3><div class="card-body">系统是否会将其包装成任务？任务的真实目的是什么？</div></div>
        <div class="card"><h3 class="card-title">💼 交易栏</h3><div class="card-body">是否可交易？系统如何估值？交易后归属如何转移？</div></div>
        <div class="card"><h3 class="card-title">🎒 背包</h3><div class="card-body">是否能放入背包？背包是否改变了物品的归属性质？</div></div>
        <div class="card"><h3 class="card-title">💀 死亡提示</h3><div class="card-body">系统如何判定死亡？死亡判定是否可能与现实不符？</div></div>
      </div>
      <div class="quote">系统不会撒谎，但永远按筛选目的裁剪真相。被系统记录不代表设定是"安全"的——恰恰相反，被系统关注意味着神胎已经注意到了它。</div>
    `,
  },
  {
    id: 'cc-blacktide-cycle',
    num: '7',
    title: '是否与黑潮周期有关？',
    sub: '黑潮是世界的代谢周期',
    summary: '黑潮不是天气，而是无光域的整体代谢。任何设定都应检查：它是否受黑潮影响？是否影响下一轮黑潮？黑潮前中后分别有什么变化？',
    content: `
      <p class="section-desc">黑潮同时承担进食、排泄、重排、筛选四种功能。一个设定必须在黑潮周期中找到自己的位置：</p>
      <div class="grid-3">
        <div class="card"><h3 class="card-title">🌊 黑潮前</h3><div class="card-body">边界开始松动。设定是否处于预备状态？是否变得更易触发或更危险？</div></div>
        <div class="card"><h3 class="card-title">🌪️ 黑潮中</h3><div class="card-body">晦能浓度升高，认知成形门槛降低。设定是否加速发展？是否因黑潮获得新能力？</div></div>
        <div class="card"><h3 class="card-title">🌋 黑潮后</h3><div class="card-body">世界补证能力增强。设定是否留下沉积物、遗迹或规则残留？</div></div>
      </div>
      <div class="quote">如果一个设定完全不受黑潮影响——它要么在深层胎海区（那里的黑潮本身就是常态），要么它与无光域的基础代谢脱节。</div>
      <div class="quote-center">高价值设定，往往既是黑潮的产物，也是下一轮黑潮的燃料。</div>
    `,
  },
  {
    id: 'cc-shelter-absorption',
    num: '8',
    title: '是否可能被庇护所吸收？',
    sub: '庇护所是活着的边界器官',
    summary: '庇护所不只是房子，它是活化中的边界器官。检查设定是否会被庇护所学习、内化、拒绝或作为食物——以及庇护所的活化程度会如何改变结果。',
    content: `
      <p class="section-desc">庇护所越像"家"，越会主动判断什么该留下、什么该出去。不同活化程度的庇护所对同一设定的反应截然不同：</p>
      <div class="truth-stack">
        <div class="truth-layer"><span class="truth-label">低活化庇护所</span><div class="truth-text">主要依靠门、墙、系统保护。设定若被识别为威胁，基本依靠物理防御和系统修正处理。</div></div>
        <div class="truth-layer"><span class="truth-label">中活化庇护所</span><div class="truth-text">开始拥有家感与自修复能力。会偏袒主人、拒绝某些外来者，可能将部分异常误判为"自己人"。</div></div>
        <div class="truth-layer"><span class="truth-label">高活化庇护所</span><div class="truth-text">已产生人格雏形。可能主动隐藏异常、将居民不愿面对的问题内化、制造"保护性异常"，甚至把外人喂给自己。</div></div>
      </div>
      <div class="quote">如果你创造的设定被高活化庇护所"欢迎"——不要高兴。那意味着庇护所认为它有用。庇护所认为有用的东西，未必对住在里面的人有好处。</div>
    `,
  },
  {
    id: 'cc-economic-value',
    num: '9',
    title: '是否产生经济价值？',
    sub: '设定是否进入无光域的经济循环',
    summary: '在无光域中，几乎一切都可以被交易——物质、梦、名字、恐惧、床位、门路、甚至死亡。检查设定是否可交易、是否进入市场、是否成为阶层资源。',
    content: `
      <p class="section-desc">无光域的经济体系建立在晦能循环之上。任何一个稳定存在的设定，都必然在某种程度上被纳入经济循环：</p>
      <div class="grid-2">
        <div class="card"><h3 class="card-title">💰 可交易吗？</h3><div class="card-body">设定本身或它的副产物能否成为交易品？交易是否涉及边界转移？</div></div>
        <div class="card"><h3 class="card-title">📊 阶层资源吗？</h3><div class="card-body">是否被上层垄断？是否成为阶层分化的工具？穷人是否更难获得或更易受害？</div></div>
        <div class="card"><h3 class="card-title">🏪 市场存在吗？</h3><div class="card-body">是否有专门市场？土著是否有对应的交易规则和禁忌？</div></div>
        <div class="card"><h3 class="card-title">⚙️ 生产链位置？</h3><div class="card-body">设定是资源的生产者、消费者、搬运者还是污染副产物？</div></div>
      </div>
      <div class="quote">在无光域中，"没有经济价值"的设定几乎不可能长期存在——除非它处于循环的枯竭端。连晦诡都有经济价值：规则尘、研究材料、陷阱组件。</div>
    `,
  },
  {
    id: 'cc-god-fragment',
    num: '10',
    title: '是否可能被神胎碎片利用？',
    sub: '一切设定终将指向神胎的临产',
    summary: '神胎不是旁观者。它是无光域的主体意志。每一个设定都应检查：它会被哪个神胎碎片采纳？是否助长了某个路线的倾向？是否成为筛选候选人格的素材？',
    content: `
      <p class="section-desc">神胎碎片不是"坏蛋"，它们是神胎未统一前的不同倾向。每一个碎片都在寻找有利于自己成为主导人格的材料：</p>
      <div class="grid-2">
        <div class="card"><h3 class="card-title">🧩 碎片采纳</h3><div class="card-body">这个设定是否与某个碎片的倾向契合？碎片是否会因此获得优势？</div></div>
        <div class="card"><h3 class="card-title">🎯 人格筛选</h3><div class="card-body">是否影响候选人格的筛选方向？是否增加了某类人格被选中的概率？</div></div>
        <div class="card"><h3 class="card-title">🚪 路线权重</h3><div class="card-body">是否让成神/留域/出走/破胎四条主动路线的某一条变得更可行或更不可行？是否在推动崩坏这条失败默认态？</div></div>
        <div class="card"><h3 class="card-title">🌡️ 临产进度</h3><div class="card-body">是否加速或推迟了神胎的临产？是否影响了黑潮的强度或频率？</div></div>
      </div>
      <div class="quote-center">如果你创造的设定"神胎碎片完全不会感兴趣"——<br>要么它太小，要么它太干净，要么它根本不属于无光域。<br>记住：连抵抗本身，也可能成为神胎的营养。</div>
      <div class="banner"><p>第十条是所有检查中最危险的一条。<br>因为它意味着：你的设定越成功、越有趣、越有价值，它就越可能被神胎吃掉。<br>这不是设定的失败——这是无光域的真相。</p></div>
    `,
  },
  {
    id: 'cc-fragment-origin',
    num: '11',
    title: '碎片来源是否可追溯？',
    sub: '任何碎片必须能追溯到一次文明级收敛',
    summary: '无光域没有凭空出现的概念。每一个"碎片"——无论是神胎碎片、认知碎片、规则碎片还是遗迹——都必须能追溯到某一次具体的文明级失败收敛。碎片不是自然生成物，而是历代失败轮回的收敛遗骸。',
    content: `
      <p class="section-desc">碎片不是"随机散落在地图上的道具"。每一次文明级失败——无论是上一轮四文明的崩溃、更早轮的灭绝，还是局部的聚落级消亡——都会在无光域中留下收敛遗骸。这些遗骸就是"碎片"的真实来源。</p>
      <div class="grid-3">
        <div class="card"><h3 class="card-title">🧩 神胎碎片</h3><div class="card-body">神胎尚未统一时的不同倾向残片，来自上一轮失败后未完全消化的边界尝试。每一个碎片都是"未出生的神的一次失败人格实验"。</div></div>
        <div class="card"><h3 class="card-title">📜 认知碎片</h3><div class="card-body">被土著制度封印、但未能完全消化的危险认知。这些认知曾达到闭合级，但因某种原因被中断——它们还"活着"，只是被压住了。</div></div>
        <div class="card"><h3 class="card-title">🏚️ 遗迹碎片</h3><div class="card-body">旧文明的技术、旧灯、旧门、旧梦的残留。时间深度锚（120-180潮岁）使它们刚好够古老到神话化，又够年轻到仍是活性遗产。</div></div>
      </div>
      <div class="truth-stack">
        <div class="truth-layer"><span class="truth-label">追溯要求</span><div class="truth-text">每一个碎片设定必须明确回答：它来自哪一次文明级收敛？是哪一轮失败留下的遗骸？它的原主文明是什么形态？它经历了怎样的消化过程才变成今天的"碎片"形式？</div></div>
        <div class="truth-layer"><span class="truth-label">禁止凭空出现</span><div class="truth-text">"从晦能中自然凝结"不是有效的碎片起源。晦能只能重组已有边界，不能凭空创造新碎片。如果一个碎片找不到文明级失败作为母亲，它要么是神胎还没消化的旧轮残响，要么就是设定漏洞。</div></div>
        <div class="truth-layer"><span class="truth-label">碎片的时间层级</span><div class="truth-text">不同深度的碎片对应不同的历史层级：灰醒层的碎片通常来自较近的失败（几潮岁内）；骨沉层的碎片来自上一轮（120-180潮岁）；梦腐层和门脉层的碎片来自更古老的失败轮次，有些可能追溯到无光域开始自我代谢的初期。</div></div>
      </div>
      <div class="quote">如果一个设定的碎片"从晦能中自然凝结而成"——说明设计者绕过了碎片必须来自文明级失败这个规则。在无光域中，没有无母的碎片。</div>
      <div class="quote-center">碎片不是地图上随机刷新的道具。<br>每一片碎片，都是一次文明死亡的墓碑。</div>
    `,
  },
]
