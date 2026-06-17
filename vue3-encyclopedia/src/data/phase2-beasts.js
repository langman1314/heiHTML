// 无光域·晦兽威胁分级完整图鉴（Phase 2.4）
// 晦兽不是怪物，是神胎的免疫细胞与搬运者
// 危险量纲 = 边界侵蚀力 × 自主性 × 与神胎碎片接近度

// 与晦诡的本能相反（玩家头号死因）:
// 晦诡=规则病灶，杀载体=转移升级，要净化/沉默。
// 晦兽=生态生命，有肉体，该打就得物理打——但高阶尸体是晦染源。

export const phase2Beasts = [
  {
    id: 'beast-foundation',
    num: '兽·总纲',
    title: '晦兽第一性定义',
    sub: '晦兽不是怪物，是神胎的免疫细胞与搬运者',
    summary: '晦兽有身体、有生物逻辑（吃、守、迁、繁），由物质守恒下被重组的尸骨/菌/皮/晦晶/腐殖拼成。危险量纲 = 边界侵蚀力 × 自主性 × 与神胎碎片接近度，三者随等级同步抬升。5级起跨入晦诡领域，7级已是神胎器官。',
    content: `
      <p class="section-desc">晦兽是有身体、有生物逻辑的实体——它们吃、守、迁徙、繁殖，由物质守恒下被重组的尸骨、菌皮、晦晶、腐殖拼成。它们不是怪物，是神胎的免疫细胞与搬运者。</p>
      <div class="card danger"><h3 class="card-title">与晦诡的本能相反（新手第一死因）</h3><div class="card-body"><span class="keyword">晦诡</span>=规则病灶，杀载体=转移升级，要净化、沉默。<br><span class="keyword">晦兽</span>=生态生命，有肉体，该打就得物理打——但高阶尸体是晦染源。把这两套本能搞反，是新手第一死因。</div></div>
      <h3>通用规则</h3>
      <div class="grid-3">
        <div class="card"><h3 class="card-title">染</h3><div class="card-body">杀晦兽=强加"它死了/归我"的边界裁决 → 按主脊累积函数加晦染，增量 ∝ 兽阶 × 当地浓度 × 你的曝光。0-1级近乎忽略，4级起显著，6-7级一次接触即可跳阶。</div></div>
        <div class="card"><h3 class="card-title">落</h3><div class="card-body">一切掉落服从物质守恒，是"被消化的过去"——带旧功能残影，需净化断主才能安全用。</div></div>
        <div class="card"><h3 class="card-title">潮</h3><div class="card-body">黑潮是等级临时跃迁器——潮中兽阶+1~+2，潮后回落但留沉积兽与尸料。</div></div>
      </div>
      <div class="quote">晦兽是神胎的免疫细胞——它们不主动猎杀文明，它们清理边界失调。但黑潮一来，免疫系统开始攻击一切不属于神胎的东西。</div>
    `,
  },
  {
    id: 'beast-tier-0',
    num: '兽0',
    title: '孢族·虫媒',
    sub: '搬运晦能的微动物，世界的纤毛',
    summary: '腐殖与孢子在低浓度区自组织成的微型搬运体，是神胎的纤毛与血小板。无攻击意图，只搬运晦能、清理边界碎屑。其聚集密度是浓度计——哪里孢虫骤增，哪里晦能将涨。',
    content: `
      <div class="grid-2">
        <div class="card"><h3 class="card-title">成因</h3><div class="card-body">腐殖与孢子在低浓度区自组织成的微型搬运体。神胎的"纤毛与血小板"。</div></div>
        <div class="card"><h3 class="card-title">形</h3><div class="card-body">灰白孢虫、骨屑蚁、菌絮蠓，成群如尘。</div></div>
        <div class="card"><h3 class="card-title">性</h3><div class="card-body">无攻击意图，只搬运晦能、清理边界碎屑。其聚集密度是浓度计——哪里孢虫骤增，哪里晦能将涨。</div></div>
        <div class="card"><h3 class="card-title">战</h3><div class="card-body">无需战斗。野外侦察价值>威胁。</div></div>
        <div class="card"><h3 class="card-title">落</h3><div class="card-body">孢质、菌絮（养眠菇/晦植的基料）。</div></div>
        <div class="card"><h3 class="card-title">染</h3><div class="card-body">≈0。</div></div>
        <div class="card" style="grid-column:1/-1"><h3 class="card-title">潮</h3><div class="card-body">潮前骤聚、潮中爆发为雾群，是兽2追声兽的食物起点。</div></div>
      </div>
    `,
  },
  {
    id: 'beast-tier-1',
    num: '兽1',
    title: '食腐兽',
    sub: '只在你"成为腐肉"时才危险',
    summary: '处理尸体腐殖的回收者，由旧兽尸+腐殖重组。只认腐败/失主/重伤的边界信号。健康活人对它近乎透明——它不猎你，它猎"已经在死的东西"。所以装死、流血、弃尸不净，等于自报家门。',
    content: `
      <div class="grid-2">
        <div class="card"><h3 class="card-title">成因</h3><div class="card-body">处理尸体腐殖的回收者，由旧兽尸+腐殖重组。</div></div>
        <div class="card"><h3 class="card-title">形</h3><div class="card-body">剥皮露骨、口器外翻的低伏走兽，嗅觉极灵，视觉退化。</div></div>
        <div class="card"><h3 class="card-title">性</h3><div class="card-body">只认"腐败/失主/重伤"的边界信号。健康活人对它近乎透明——它不猎你，它猎"已经在死的东西"。装死、流血、弃尸不净，等于自报家门。</div></div>
        <div class="card"><h3 class="card-title">战</h3><div class="card-body">物理可杀，弱。真正的战法是别让自己进入它的食谱：止血、藏尸、断腐味。</div></div>
        <div class="card"><h3 class="card-title">落</h3><div class="card-body">腐殖土、骨粉、低纯晦晶（骨麦田基料）。</div></div>
        <div class="card"><h3 class="card-title">染</h3><div class="card-body">低。但用它的腐殖种骨麦，会带入死者低语（物质守恒"功能残留"）。</div></div>
        <div class="card" style="grid-column:1/-1"><h3 class="card-title">潮</h3><div class="card-body">潮后尸海期暴增，是潮后拾荒最大物理威胁。</div></div>
      </div>
    `,
  },
  {
    id: 'beast-tier-2',
    num: '兽2',
    title: '追声兽',
    sub: '循声、循认知捕猎——惩罚喧哗者',
    summary: '以声音/认知波动为食的捕食者，听觉/认知器官畸大。循频道发言、循呼名、循恐惧尖叫定位。喧哗即坐标——这正是土著"沉默防御"的生态根源。',
    content: `
      <div class="grid-2">
        <div class="card"><h3 class="card-title">成因</h3><div class="card-body">以"声音/认知波动"为食的捕食者。听觉/认知器官畸大。</div></div>
        <div class="card"><h3 class="card-title">形</h3><div class="card-body">无眼、巨耳膜、骨腔共鸣体，皮面随声纹颤动。</div></div>
        <div class="card"><h3 class="card-title">性</h3><div class="card-body">循频道发言、循呼名、循恐惧尖叫定位。喧哗即坐标——这正是土著"沉默防御"的生态根源（与静净同源）。</div></div>
        <div class="card"><h3 class="card-title">战</h3><div class="card-body">沉默+物理伏击的双轨——先静音断它的坐标，再用雾喉花遮味、设陷阱近杀。喊叫求救=邀请它。</div></div>
        <div class="card"><h3 class="card-title">落</h3><div class="card-body">声膜（可制静皮帘/隔音材料）、中纯晦晶。</div></div>
        <div class="card"><h3 class="card-title">染</h3><div class="card-body">中低。</div></div>
        <div class="card" style="grid-column:1/-1"><h3 class="card-title">潮</h3><div class="card-body">潮中认知噪声暴涨，追声兽成群且可被推上兽5染脑兽。</div></div>
      </div>
    `,
  },
  {
    id: 'beast-tier-3',
    num: '兽3',
    title: '蚀界兽',
    sub: '啃食门、墙、床——攻城型',
    summary: '专食"边界结构"的兽，由旧门骨架、活墙残片重组，保留"区分内外"的功能残影故而专咬边界物。不咬人，咬庇护所——啃门缝、松床签、蚀墙基。一旦得手，庇护所活化阶倒退、内外失守。',
    content: `
      <div class="grid-2">
        <div class="card"><h3 class="card-title">成因</h3><div class="card-body">专食"边界结构"的兽，由旧门骨架、活墙残片重组，保留"区分内外"的功能残影故而专咬边界物。</div></div>
        <div class="card"><h3 class="card-title">形</h3><div class="card-body">颚部是门轴/锁舌状骨构，体表覆旧门板鳞，移动时似一扇会爬的门。</div></div>
        <div class="card"><h3 class="card-title">性</h3><div class="card-body">不咬人，咬庇护所——啃门缝、松床签、蚀墙基。一旦得手，庇护所活化阶倒退、内外失守，真正杀你的是随之涌入的一切。</div></div>
        <div class="card"><h3 class="card-title">战</h3><div class="card-body">物理可杀但要快；核心是边界加固（骨刻封门、雾喉花断其嗅界）。低活化庇护所最怕它。</div></div>
        <div class="card"><h3 class="card-title">落</h3><div class="card-body">门骨、界鳞（高级门材料，但带旧门"开向何处"的残执，需净化）。</div></div>
        <div class="card"><h3 class="card-title">染</h3><div class="card-body">中。用它的门骨造门，易生门源污染/叠室异常。</div></div>
        <div class="card" style="grid-column:1/-1"><h3 class="card-title">潮</h3><div class="card-body">潮前门缝变宽即其先兆；潮中攻城成潮。</div></div>
      </div>
    `,
  },
  {
    id: 'beast-tier-4',
    num: '兽4',
    title: '临驯兽',
    sub: '可驯养，但驯养会把晦染倒灌给驯主',
    summary: '自主性已高到可建立"主—兽"边界关系的兽，神胎的"可役使免疫体"。双刃——驯成则得强力战兽/坐骑/守卫；但"认主"是一条反向边界通道，兽的晦染会顺着主仆边界倒灌进驯主。驯养越深，主越染。',
    content: `
      <div class="grid-2">
        <div class="card"><h3 class="card-title">成因</h3><div class="card-body">自主性已高到可建立"主—兽"边界关系的兽。神胎的"可役使免疫体"。</div></div>
        <div class="card"><h3 class="card-title">形</h3><div class="card-body">半人格化的大型骨甲兽，眼有迟疑，会回应名字。</div></div>
        <div class="card"><h3 class="card-title">性</h3><div class="card-body">双刃——驯成则得强力战兽/坐骑/守卫；但"认主"是一条反向边界通道，兽的晦染会顺着主仆边界倒灌进驯主（驯养越深，主越染）。这是无光域版"力量的诱惑"。</div></div>
        <div class="card"><h3 class="card-title">战</h3><div class="card-body">三选一——拒驯物理猎杀（最稳）/ 接受晦染换战力（赌）/ 半驯即弃（多生记忆兽后患）。</div></div>
        <div class="card"><h3 class="card-title">落</h3><div class="card-body">高纯晦晶、驯骨（战兽部件）。</div></div>
        <div class="card"><h3 class="card-title">染</h3><div class="card-body">高，且主动。养一头临驯兽=持续小额加晦染，是高晦染者的常见隐性来源。</div></div>
        <div class="card" style="grid-column:1/-1"><h3 class="card-title">潮</h3><div class="card-body">潮中易脱驯反噬主人。</div></div>
      </div>
    `,
  },
  {
    id: 'beast-tier-5',
    num: '兽5',
    title: '染脑兽',
    sub: '不咬人，靠梦/恐惧/晦染攻击——晦兽与晦诡的桥',
    summary: '精神污染型，自主性溢出生物层、开始作用于"解释"层。它是晦兽长成晦诡的过渡态。物理攻击对它几乎无效甚至有害——它没有可被杀死的核心循环，砍它的"身体"会让它转入梦/名/床载体。此处晦兽本能必须切换为晦诡本能，搞反就死。',
    content: `
      <div class="card danger"><h3 class="card-title">★ 本能翻转点</h3><div class="card-body">5级以上切换为晦诡处理本能：物理攻击无效，需净化（梦净/名净）+ 裂视识别。搞反就死——这是总纲警告的翻转点。</div></div>
      <div class="grid-2">
        <div class="card"><h3 class="card-title">成因</h3><div class="card-body">精神污染型，自主性溢出生物层、开始作用于"解释"层。晦兽长成晦诡的过渡态。</div></div>
        <div class="card"><h3 class="card-title">形</h3><div class="card-body">形体模糊、边缘像未干的墨，常以"熟悉者轮廓"出现。</div></div>
        <div class="card"><h3 class="card-title">性</h3><div class="card-body">物理攻击几乎无效甚至有害——它没有可被杀死的核心循环，砍它的"身体"会让它转入梦/名/床载体。</div></div>
        <div class="card"><h3 class="card-title">战</h3><div class="card-body">净化（梦净/名净）+ 裂视识别真伪载体 + 睡眠隔离。物理只用于断它当前的临时身体、争取净化时间。</div></div>
        <div class="card"><h3 class="card-title">落</h3><div class="card-body">规则尘、梦渣凝质（高价研究材料/裂视成长料，但高连接度=高危）。</div></div>
        <div class="card"><h3 class="card-title">染</h3><div class="card-body">高。与它交手本身就在喂晦染，胜负都染。</div></div>
        <div class="card" style="grid-column:1/-1"><h3 class="card-title">潮</h3><div class="card-body">潮中可由追声兽/临驯兽跃迁而来；潮后是"废屋呼吸、死者发言"的兽源。</div></div>
      </div>
    `,
  },
  {
    id: 'beast-tier-6',
    num: '兽6',
    title: '领主·精英',
    sub: '区域顶端，号令群兽，半神胎人格',
    summary: '长期盘踞一地、被大量晦能与共识喂养出半人格的兽王。对应晦诡6级·区域晦诡。占据并定义一整片区域的边界规则——在它的领地里，门、路、归属都按它的意志重排。打它不是打一头兽，是和一片现实争夺解释权。',
    content: `
      <div class="grid-2">
        <div class="card"><h3 class="card-title">成因</h3><div class="card-body">长期盘踞一地、被大量晦能与共识喂养出半人格的兽王。对应晦诡6级·区域晦诡。</div></div>
        <div class="card"><h3 class="card-title">形</h3><div class="card-body">巨型，体内长出小型生态（菌林、骨城、寄生群兽），本身即一座会动的领地。</div></div>
        <div class="card"><h3 class="card-title">性</h3><div class="card-body">占据并定义一整片区域的边界规则——在它的领地里，门、路、归属都按它的意志重排。打它不是打一头兽，是和一片现实争夺解释权。</div></div>
        <div class="card"><h3 class="card-title">战</h3><div class="card-body">单人必败。需区域级团战+土著仪式群+五杠杆全开（共识流聚众、持久流围困、独断流骨刻反定义、浓度流择时）。这已是边界裁决而非砍杀。</div></div>
        <div class="card"><h3 class="card-title">落</h3><div class="card-body">领核（区域级晦晶，可活化领地/方舟）、它定义过的"规则残片"。</div></div>
        <div class="card"><h3 class="card-title">染</h3><div class="card-body">极高。斩领主者必跳晦染阶，往往一战从显染冲进候染——屠龙者就此成为离神胎最近的人。</div></div>
        <div class="card" style="grid-column:1/-1"><h3 class="card-title">潮</h3><div class="card-body">领主的领地往往就是黑潮的区域性策源/泄洪口。</div></div>
      </div>
      <div class="quote">屠龙者最染——斩领主者必跳晦染阶，往往一战从显染冲进候染。胜利越大，离被神胎吞掉越近。</div>
    `,
  },
  {
    id: 'beast-tier-7',
    num: '兽7',
    title: '潮变·器官兽',
    sub: '黑潮获得了身体——本质是神胎的免疫器官',
    summary: '被神胎意识碎片直接采纳的兽，已非独立生命，是神胎伸出的一只手。对应晦诡7级·神胎级。无稳定外形，时而是一场会捕食的黑潮，时而是一段会吞人的地形。遭遇它=遭遇终局本身。',
    content: `
      <div class="grid-2">
        <div class="card"><h3 class="card-title">成因</h3><div class="card-body">被神胎意识碎片直接采纳的兽，已非独立生命，是神胎伸出的一只手。对应晦诡7级·神胎级。</div></div>
        <div class="card"><h3 class="card-title">形</h3><div class="card-body">无稳定外形，时而是一场会捕食的黑潮，时而是一段会吞人的地形，时而是天空本身。</div></div>
        <div class="card"><h3 class="card-title">性</h3><div class="card-body">它不在区域里，它就是临产期世界代谢的一部分。遭遇它=遭遇终局本身。</div></div>
        <div class="card"><h3 class="card-title">战</h3><div class="card-body">无法以"驱兽/猎杀"处理。只能经文明级选择——方舟剥离、留域谈判、成神重写、破胎代价。</div></div>
        <div class="card"><h3 class="card-title">落</h3><div class="card-body">无可拾取之物；接触即被纳入循环。</div></div>
        <div class="card"><h3 class="card-title">染</h3><div class="card-body">接触即向7（归染）逼近——这不是战斗，是抉择。</div></div>
        <div class="card" style="grid-column:1/-1"><h3 class="card-title">潮</h3><div class="card-body">它就是大黑潮在临产期的人格化形态。</div></div>
      </div>
      <div class="quote">7级不是战斗，是抉择。你无法杀死神胎的一只手，你只能决定是否继续活在它的身体里。</div>
    `,
  },
  {
    id: 'beast-quick-reference',
    num: '兽·速查',
    title: '晦兽威胁分级速查表',
    sub: '级、杀法本能、一句话识别',
    summary: '',
    content: `
      <div class="card"><div class="card-body">
        <table style="width:100%;border-collapse:collapse;font-size:13px;color:#c8c4b8;">
          <tr style="border-bottom:1px solid #2a2736;"><th style="padding:8px;text-align:left;color:#d7b56d;">级</th><th style="padding:8px;text-align:left;color:#d7b56d;">杀法本能</th><th style="padding:8px;text-align:left;color:#d7b56d;">一句话</th></tr>
          <tr style="border-bottom:1px solid #1e1e2a;"><td style="padding:8px;">0 孢族</td><td style="padding:8px;">不必战</td><td style="padding:8px;">浓度计</td></tr>
          <tr style="border-bottom:1px solid #1e1e2a;"><td style="padding:8px;">1 食腐兽</td><td style="padding:8px;">物理（弱）</td><td style="padding:8px;">别成为腐肉</td></tr>
          <tr style="border-bottom:1px solid #1e1e2a;"><td style="padding:8px;">2 追声兽</td><td style="padding:8px;">沉默+伏击</td><td style="padding:8px;">喧哗即坐标</td></tr>
          <tr style="border-bottom:1px solid #1e1e2a;"><td style="padding:8px;">3 蚀界兽</td><td style="padding:8px;">物理+封门</td><td style="padding:8px;">它咬的是你的家</td></tr>
          <tr style="border-bottom:1px solid #1e1e2a;"><td style="padding:8px;">4 临驯兽</td><td style="padding:8px;">杀或驯（驯则染）</td><td style="padding:8px;">力量倒灌</td></tr>
          <tr style="border-bottom:1px solid #1e1e2a;"><td style="padding:8px;">5 染脑兽</td><td style="padding:8px;">切换净化本能</td><td style="padding:8px;">★ 本能翻转点，搞反就死</td></tr>
          <tr style="border-bottom:1px solid #1e1e2a;"><td style="padding:8px;">6 领主</td><td style="padding:8px;">团战+裁决</td><td style="padding:8px;">屠龙者最染</td></tr>
          <tr><td style="padding:8px;">7 器官兽</td><td style="padding:8px;">文明级抉择</td><td style="padding:8px;">黑潮的身体</td></tr>
        </table>
      </div></div>
      <div class="quote">晦兽0-7与晦诡0-7严格并轨且本能相反。危险量纲单调上升。杀兽=加晦染（兽阶×浓度×曝光）。6级"屠龙者最染"与7级"器官兽即终局"——天然钩回主脊。</div>
    `,
  },
];
