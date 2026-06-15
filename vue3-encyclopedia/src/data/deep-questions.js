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
    id: 'dq-god-intention',
    status: 'resolved',
    priority: '高',
    category: '神胎与本质',
    title: '神胎的"意图"悖论——向性vs意图',
    summary: '【已由用户回答】认知负压模型：神胎没有意图（intention），只有向性（tropism）。穿越者被"吸入"不是因为神胎想吃饭，而是因为高密度边界模型向低密度虚空流动，是物理压差而非主动捕食。',
    detail: `
      <p class="section-desc">【已由用户完整回答】</p>
      <div class="truth-stack">
        <div class="truth-layer"><span class="truth-label">核心答案</span><div class="truth-text">神胎有向性（tropism）无意图（intention）。向性三要件——统一自我×认知目标模型×选择手段能力——神胎均不具备。穿越者的"被拖入"不是主动捕食，而是认知负压：穿越者携带高密度边界模型，神胎体内缺乏这些，形成压差，穿越者被"渗透"进来。</div></div>
        <div class="truth-layer"><span class="truth-label">叙事建议</span><div class="truth-text">开场：没有为什么，只是压差，像落叶被冲进下水道。后期：神胎碎片逐渐学会"意图"——向性从被动变为主动，这才是真正的恐怖递进。</div></div>
      </div>
    `,
    firstIdentified: '2026-06-14',
    lastChecked: '2026-06-14',
    notes: '与后两个回答汇聚于同一机制：神胎的心跳（黑潮）同时驱动三件事——把人吸进来、把人喂下去、把层打开又关上。现已落地为 deep-logic 第17条「黑潮三联律」。',
  },
  {
    id: 'dq-agriculture-huetide',
    status: 'resolved',
    priority: '高',
    category: '生态与经济',
    title: '农业与黑潮周期的矛盾',
    summary: '【已由 深化裁定·潮间双相代谢 回复】骨麦非"在黑潮中幸存"，而是"专等黑潮收割"：静晦期只长结构（约21天空穗），黑潮期停止生长、转入潮中灌浆+骨化成熟。黑潮是骨麦的灌浆季，农业时点被锁死在晦相日历上。',
    detail: `
      <p class="section-desc">【已由 深化裁定·黑潮三联机制 完整回复】</p>
      <div class="truth-stack">
        <div class="truth-layer"><span class="truth-label">核心裁定：骨麦双相代谢</span><div class="truth-text">
          ① <strong>静晦相（约21天·结构生长）</strong>——只长根茎空穗，几乎不储能，故未熟骨麦贫瘠不可食。这就是那21天。<br>
          ② <strong>黑潮相（约3–7天·潮中灌浆+骨化）</strong>——停止结构生长（再长会被边界波动撕碎），转为疯狂吸收洪泛晦能灌进空穗、凝成晦晶淀粉=成熟；茎秆骨化变硬以抵抗边界消融。骨麦因此专等黑潮来收割。
        </div></div>
        <div class="truth-layer"><span class="truth-label">逐问结案</span><div class="truth-text">
          ① 播种/收割时点：种植锁死在晦相日历——21天结构期须正好赶在一场黑潮前结束，黑潮一来3–7天灌浆完成。晦民按黑潮种地，非按心情。<br>
          ② 大黑潮（30天）期作物如何活：大潮灌浆更猛、产量更高，但边界消融更强，骨化撑不住者"过熟炸穗"——丰年即凶年。<br>
          ③ 避潮技术：核心不是避潮，而是"对潮"——读懂晦相、押对时点即最高农技。<br>
          ④ 黑潮是否有利：是。黑潮是唯一的灌浆/成熟相，没有黑潮骨麦永为空壳。接续饥饿碎片"食潮"与危机经济。<br>
          ⑤ 穿越者承压：会大规模饿死，且这是养殖逻辑的第一道筛选闸——穿越者集中在黑潮前后被渗透进来（边界最薄），恰逢抢收最紧张期，第一周饿死者=第一批被筛者。"被养殖"≠"被喂饱"，养殖场靠饥饿控存栏。
        </div></div>
        <div class="truth-layer"><span class="truth-label">关联条目</span><div class="truth-text">sections.js — 第四章（骨麦）、第八章（黑潮周期）；现已落地为 deep-logic 第17条「黑潮三联律」（本条为其第二联·潮间双相代谢的完整展开）。</div></div>
      </div>
    `,
    firstIdentified: '2026-06-14',
    lastChecked: '2026-06-14',
    notes: '由本轮深化裁定结案；建议同步把"潮间双相代谢"补写进 sections.js 第四章正文。',
  },
  {
    id: 'dq-cross-layer-economy',
    status: 'resolved',
    priority: '高',
    category: '经济与交通',
    title: '五层胎腔的经济与交通断层',
    summary: '【已由 深化裁定·潮汐式层门 回复】通道不归人管、归晦相+边界守恒管。层间是胎膜状边界，随黑潮张弛：黑潮期沉降节点开启（深渊也借机上浮），黑潮后第一天为"落潮探深"黄金关闭窗口。下潜便宜、带货上浮极贵（触发晦染）。',
    detail: `
      <p class="section-desc">【已由 深化裁定·黑潮三联机制 完整回复】</p>
      <div class="truth-stack">
        <div class="truth-layer"><span class="truth-label">核心裁定：潮汐式层门</span><div class="truth-text">
          层与层之间是胎膜状边界（与通往外渊的胎膜同源），随黑潮/晦相张弛。<br>
          · <strong>黑潮期</strong>（神胎阵痛痉挛）：层膜松弛，沉降节点开启=下潜窗口；同时深层之物借机上浮（黑潮危险的真正原因之一：深渊在上来）。<br>
          · <strong>黑潮后第一天</strong>（静晦初期）：层膜缓慢重收=稳定但正在关闭的黄金窗口，"落潮探深"发生于此。<br>
          <strong>边界守恒上锁</strong>：下去便宜，带上来很贵——深层物质被搬到浅层=把"属于更深边界之物"挪到不属于它的层，物质"想回去"（类减压病），携带过多触发晦染。同时兑现"越深越危险"+晦染体系+门脉碎片。
        </div></div>
        <div class="truth-layer"><span class="truth-label">逐问结案</span><div class="truth-text">
          ① 跨层交通：靠潮汐式层门，黑潮开/落潮关，非固定常开通道。<br>
          ② 穿越者取深层资源：黑潮窗口亲自下探，或经"潮后探深队→灰醒层黑市"供应链贸易取得（溢价+延迟）。<br>
          ③ 土著是否控制通道收费：通道归晦相不归人，故无人"控制"——但懂晦相时点/节点位置者有信息优势，权力降级为"情报与向导经济"（门路商人卖时窗情报与带路，可议价可背叛）。<br>
          ④ 层间阶层关系：存在但被供应链中介，深层货经潮后供应链上行，形成跨层依赖而非割裂。<br>
          ⑤ 系统是否管交通：系统不主动管，但高整合人格=晦能高压点，黑潮/层门天然向其聚集（涌现，非设计）。<br>
          ⑥ 物品跨层交易：可，但深层物质跨层持有有晦染风险，定价含"减压风险溢价"。
        </div></div>
        <div class="truth-layer"><span class="truth-label">关联条目</span><div class="truth-text">sections.js — 第三章（五层结构）、第九/十一章（资源/市场）；现已落地为 deep-logic 第17条「黑潮三联律」（本条为其第三联·潮汐式层门的完整展开）。</div></div>
      </div>
    `,
    firstIdentified: '2026-06-14',
    lastChecked: '2026-06-14',
    notes: '由本轮深化裁定结案；与农业条同源于"黑潮三联机制"，现已合并写入 deep-logic 第17条。',
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
    notes: '补强（本轮Q1+Q5裁定）：四类文明的失败不是四个独立教训，而是同一条元规律的四次发作——【收敛律】任何文明只要让某一个"答案/碎片"成为唯一法律（旧灯=光、旧门=门、旧梦=保存、旧榜=成神），其集体人格就收敛成一个高度自洽的单一边界模型，而高度自洽的收敛体正是神胎最需要的"来料"——于是被采样、被吃。他们不是被黑暗杀死，是"答得太完整"而被神胎当成了完整边界模型吞收（接Q5：收敛即被吃）。推论：神胎无意图（Q1），它不惩罚错误答案，它只吞收"完整答案"。所以越自信、越统一、越成功的文明，越先被吃。这一轮方舟之所以是第一次结构性不同的尝试——因为它的立约恰恰是"绝不让任何碎片成为唯一法律"（F11第六律），即主动拒绝收敛成单一答案，从而拒绝成为可被吞收的完整来料。这是前四轮从未做过的事。',
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
    notes: '补强（本轮Q5裁定）：第七重代价·成熟即被收割。裂视不只是"看见裂缝"，它本身是一种高强度认知整合行为——看得越清，人格收敛得越快、越自洽。而高认知整合=晦能高压点，黑潮/晦诡/系统异常/候选诱惑会天然向其聚集（非谁惩罚，纯涌现）。故裂视等级越高，越接近候选阈值，越快"熟透"被收割。这解释了为何6级临胎裂视"不可完全恢复"——到这一级，主角已经几乎是一个成熟到可被神胎采样的完整人格。叙事推论：开悟不会让你自由，只会让你熟得更快。裂视者是世界上最濒危的群体。主角必须走钢丝：裂视用到"够看清"，但绝不练到"看穿全代谢"(6级)，否则等于自己点亮诱饵灯走向收割。',
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
  {
    id: 'dq-reject-god-three-walls',
    status: 'resolved',
    priority: '高',
    category: '主角伦理',
    title: '拒绝成神的真正动机——三堵墙',
    summary: '【已由用户回答】主角拒绝成神不是因为"成神邪恶"，而是因为三堵墙：认知墙（裂视识破神胎诱饵——成神不是被获得力量而是被神胎获得）、母题墙（所有神一旦诞生就不再属于自己，成神是终极牢笼）、私人墙（只有人能做到而神永远做不到的事——记住一个人的真名、记得一个人怕什么、知道一个人还没回家）。',
    detail: `
      <p class="section-desc">【已由用户完整回答】</p>
      <div class="truth-stack">
        <div class="truth-layer"><span class="truth-label">核心答案</span><div class="truth-text">三堵墙：①认知墙——裂视让主角看见成神的底层真相：那不是飞升，而是被神胎当作"最适合统合碎片的人格"安装进系统。他不是拒绝力量，他识破了诱饵。②母题墙——所有创世神话中，神一旦诞生就不再属于自己。创世神把自己拆成天地，管理神锁进职司，人格神被信徒期待固定。成神是终极牢笼。③私人墙——这是只有"人"能做到的事：记住一个人的真名，记得一个人怕什么，知道一个人还没回家。神可以爱众生但不能爱一个人。</div></div>
        <div class="truth-layer"><span class="truth-label">写到</span><div class="truth-text">phase5-protagonist.js — P7 已扩展添加三堵墙卡片</div></div>
      </div>
    `,
    firstIdentified: '2026-06-14',
    lastChecked: '2026-06-14',
    notes: '',
  },
  {
    id: 'dq-system-informed',
    status: 'resolved',
    priority: '中',
    category: '系统与神胎',
    title: '系统如何处理知情者',
    summary: '【已由用户回答】系统无意图。知道真相不改变系统对玩家的物理处理，只改变认知。三种结局：收敛(高效适应→最合格人格粮)、溃散(认知崩塌→系统回收)、方舟(唯一第三出口——利用漏洞剥离系统)。开悟不会让你自由，只会让你更快成熟为合格候选人格。',
    detail: `
      <p class="section-desc">【已由用户完整回答】</p>
      <div class="truth-stack">
        <div class="truth-layer"><span class="truth-label">核心答案</span><div class="truth-text">系统没有意图。知道真相不改变系统对玩家的物理处理方式。三种结局：收敛(知情者高效适应→最好的饲料)、溃散(认知崩塌→回收)、方舟(唯一第三出口，利用系统漏洞剥离系统)。开悟不是出口，开悟是候选人格加速成熟剂。</div></div>
        <div class="truth-layer"><span class="truth-label">写到</span><div class="truth-text">sections.js — 系统条目(15) 已添加"系统如何处理知情者"子章节</div></div>
      </div>
    `,
    firstIdentified: '2026-06-14',
    lastChecked: '2026-06-14',
    notes: '',
  },
  {
    id: 'dq-de-registration',
    status: 'resolved',
    priority: '高',
    category: '社会机制',
    title: '脱册制——高风险职业与名册剥离',
    summary: '【已由用户回答】高风险职业(井喉深潜者、骨沉层清道夫、黑潮前探人)出发前从聚落名册除名。代价：慢慢变成半个晦诡。灰蜕者是积累多年的老脱册者。穿越者天生不在无光域名册上=天然脱册者，可做更多冒险但也被同化得更慢。',
    detail: `
      <p class="section-desc">【已由用户完整回答】</p>
      <div class="truth-stack">
        <div class="truth-layer"><span class="truth-label">核心答案</span><div class="truth-text">脱册制：高风险职业在出发前从聚落名册除名。脱册者存在但不被计数，活着但不被承认。代价是慢慢变成半个晦诡——名字听不见回应，床觉得他们陌生，门犹豫是否让他们通过。灰蜕者是积累了多年的老脱册者。穿越者天生不在名册=天然脱册者，因此可以做更多冒险，但也被同化得更慢。</div></div>
        <div class="truth-layer"><span class="truth-label">写到</span><div class="truth-text">sections.js — 势力组织条目(10) 下新增"社会机制：脱册制"子章节<br>sections.js — 灰蜕人描述已扩展包含脱册制来源</div></div>
      </div>
    `,
    firstIdentified: '2026-06-14',
    lastChecked: '2026-06-14',
    notes: '',
  },
  {
    id: 'dq-ark-invasive-species',
    status: 'resolved',
    priority: '高',
    category: '方舟与终局',
    title: '方舟=入侵物种——外渊双叉',
    summary: '【已由用户回答】方舟抵达外渊后面临两条路(外渊双叉)：慢性死亡(无晦能补给，生态崩溃) 或 入侵污染(在脆弱世界扎根，播种新无光域)。晦能逻辑不可清除只可被制衡。主角不是逃向天堂，而是在明知可能成为灾祸时仍按下播种键。出走者的罪不是无知而是知情。',
    detail: `
      <p class="section-desc">【已由用户完整回答】</p>
      <div class="truth-stack">
        <div class="truth-layer"><span class="truth-label">核心答案</span><div class="truth-text">外渊双叉：叉一慢性死亡(无晦能补给，生态崩溃，离域症)，叉二入侵污染(在脆弱世界扎根，播种无光域逻辑)。晦能逻辑不可清除，只可被其他力量制衡。主角的明知负担——他不是逃向天堂，而是在明知可能成为灾祸时仍按下播种键。出走者的罪不是无知，而是知情。</div></div>
        <div class="truth-layer"><span class="truth-label">写到</span><div class="truth-text">framework-dimensions.js — D4 外渊危险已扩展为外渊双叉模型</div></div>
      </div>
    `,
    firstIdentified: '2026-06-14',
    lastChecked: '2026-06-14',
    notes: '',
  },
  {
    id: 'dq-threshold-function',
    status: 'resolved',
    priority: '中',
    category: '影射与基础规则',
    title: '三层影射的统一公式——阈值函数',
    summary: '【已由用户回答】成形=认知稳定度×共识人数×情绪强度×时间≥阈值。三层影射(现实/神话/都市怪谈)不是三种手法而是同一条公式在不同浓度下的表达。影射不是彩蛋，对世界是真的，只有当对读者也变真时才在叙事中真正发生。',
    detail: `
      <p class="section-desc">【已由用户完整回答】</p>
      <div class="truth-stack">
        <div class="truth-layer"><span class="truth-label">核心答案</span><div class="truth-text">认知成形阈值函数：成形 = 认知稳定度 × 共识人数 × 情绪强度 × 时间 ≥ 阈值。三层影射(现实/神话/都市怪谈)不是三种手法，而是同一公式在不同浓度下的表达。影射不是彩蛋，对世界是真的，但它只有当对读者也变真时才真的在叙事中发生。</div></div>
        <div class="truth-layer"><span class="truth-label">写到</span><div class="truth-text">deep-logic.js — 认知改写现实的五个条件(#5) 已添加阈值函数子章节<br>sections.js — 影射总览(50) 已添加阈值函数公式与三层对应关系</div></div>
      </div>
    `,
    firstIdentified: '2026-06-14',
    lastChecked: '2026-06-14',
    notes: '',
  },
]