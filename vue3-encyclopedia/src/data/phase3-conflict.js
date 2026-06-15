// 无光域·玩家—土著规则冲突表（Phase 3.3 深化）
// 任务书 3.3 回复：玩家相信系统完成了事情，晦民只承认边界真正闭合

export const phase3Conflict = [
  {
    id: 'conflict-foundation',
    num: 'R1',
    title: '两套现实确认机制',
    sub: '冲突根源：系统法则 vs 边界法则',
    summary: '玩家使用系统法则理解世界（面板就是事实、交易栏完成就是归属转移、死亡提示就是彻底死亡），晦民使用边界法则维持现实（门是否承认、床是否记住、旧主是否断开）。双方冲突不是信息差，而是世界观底层差异。',
    content: `
      <div class="grid-2">
        <div class="card"><h3 class="card-title">玩家系统法则</h3><div class="card-body">面板显示就是事实；交易栏完成就是归属转移；死亡提示就是彻底死亡；组队成功就是合作成立；庇护所面板显示主人就是房屋属于自己；排行榜越高越说明强大；任务奖励越高越说明行为正确。这种逻辑来自现代游戏化、数据化文明——在普通世界高效，在无光域不完整。</div></div>
        <div class="card"><h3 class="card-title">土著边界法则</h3><div class="card-body">记录不是事实只是影子；交易不只是交换物品而是断旧主认新主；死亡不只是肉体终止而是名梦床尸器物全部断开；房屋不是系统产权而是门床箱墙共同承认。晦民不是不懂效率，他们只是知道效率一旦越过边界确认就会变成灾难。</div></div>
      </div>
      <div class="quote">玩家问：系统不是已经判定了吗？晦民回答：系统只判定了你能看见的那一层。</div>
    `,
  },
  {
    id: 'conflict-three-evidence',
    num: 'R2',
    title: '三证原则',
    sub: '玩家—土著混合社会的基础事实确认体系',
    summary: '三证原则：系统记录、物理痕迹、边界承认。任何重大事实至少需要两证一致，涉及死亡、庇护所产权、旧主遗物、榜单残留等高危事项必须三证齐全。三证冲突时启动异常审查。',
    content: `
      <div class="grid-2">
        <div class="card"><h3 class="card-title">第一证：系统记录</h3><div class="card-body">包括系统提示、交易记录、死亡提示、排行榜、任务日志、频道记录、庇护所面板、组队信息。<span class="keyword">优点：</span>快速、清晰、可追溯。<span class="keyword">缺点：</span>可能错栏、延迟、只显示浅层，无法处理名/梦/床/死者残响。</div></div>
        <div class="card"><h3 class="card-title">第二证：物理痕迹</h3><div class="card-body">包括尸体、血迹、脚印、床痕、物品位置、门锁状态、灯光变化、骨刻痕迹、仓储数量。<span class="keyword">优点：</span>可被多人观察，可辅助纠正系统错误。<span class="keyword">缺点：</span>晦诡可以补证，黑潮会重排痕迹。</div></div>
        <div class="card" style="grid-column:1/-1"><h3 class="card-title">第三证：边界承认</h3><div class="card-body">门是否放行、床是否回温、箱是否认主、名字是否稳定、梦是否封存、尸体是否死干净、物品是否夜里出声、庇护所是否排斥。<span class="keyword">优点：</span>最接近无光域底层现实，能处理系统无法显示的深层关系。<span class="keyword">缺点：</span>慢、成本高、依赖土著专业者。</div></div>
      </div>
      <h3>三证判定等级</h3>
      <div class="truth-stack">
        <div class="truth-layer"><span class="truth-label">一级：一证成立</span><div class="truth-text">只能作为线索。适用于普通采集、低危交易、路线参考。</div></div>
        <div class="truth-layer"><span class="truth-label">二级：二证一致</span><div class="truth-text">可作为常规事实。适用于普通交易确认、小型纠纷、低污染物品。</div></div>
        <div class="truth-layer"><span class="truth-label">三级：三证齐全</span><div class="truth-text">可作为高危事实。适用于死亡确认、庇护所产权转移、名字纠纷、食名案件。</div></div>
        <div class="truth-layer"><span class="truth-label">四级：三证冲突</span><div class="truth-text">进入异常审查——隔离涉事者、封存涉事物、禁止频道传播、启动混合法庭。</div></div>
      </div>
    `,
  },
  {
    id: 'conflict-top-ten',
    num: 'R3',
    title: '十大核心纠纷',
    sub: '从交易到死亡，从床位到榜单——玩家与土著的典型规则冲突',
    summary: '交易纠纷（系统交易成功但货物回旧主身边）、死亡纠纷（系统判死但死者仍在频道发言）、庇护所产权纠纷（面板主人与房屋承认不一致）、组队纠纷、排行榜纠纷、频道纠纷、图鉴纠纷、床位纠纷、潮后资源纠纷、任务伦理纠纷——每类都有深层意义。',
    content: `
      <div class="grid-2">
        <div class="card"><h3 class="card-title">① 交易纠纷</h3><div class="card-body">系统交易成功，货物却回旧主身边。真相：交易不是"谁拿着"，而是"现实承认谁能叫它回来"。处理：查旧主关系是否断开，必要时火净或名净。</div></div>
        <div class="card"><h3 class="card-title">② 死亡纠纷</h3><div class="card-body">系统判死，死者仍在频道发言。真相：死不是一个瞬间，而是一套关系逐步关闭。处理：禁止回复死者原名、封存频道、查床位温度。</div></div>
        <div class="card"><h3 class="card-title">③ 庇护所产权</h3><div class="card-body">系统显示自己是主人，但门不顺、床不回温、箱不认主。真相：房子不是商品，它会记住谁真正住过。处理：门床箱墙四证确认。</div></div>
        <div class="card"><h3 class="card-title">④ 组队纠纷</h3><div class="card-body">队内战利品分配引发死者遗物污染。真相：合作不是一起打怪，而是约定谁负责把彼此死干净。处理：组队前签临时队契。</div></div>
        <div class="card"><h3 class="card-title">⑤ 排行榜纠纷</h3><div class="card-body">榜首荣耀还是公共污染？真相：被所有人看见不是荣耀，而是把自己挂在世界的舌头上。处理：高排名者定期名净。</div></div>
        <div class="card"><h3 class="card-title">⑥ 频道纠纷</h3><div class="card-body">玩家在频道求助，土著要求禁言。真相：信息自由在无光域不是天然正义——传播也可能是喂食。处理：建立频道净言法。</div></div>
        <div class="card"><h3 class="card-title">⑦ 图鉴纠纷</h3><div class="card-body">玩家记录异常，土著要求封页。真相：知识不是中立的——被写下的东西会学习如何继续被写。处理：只记边界不写人格化名称。</div></div>
        <div class="card"><h3 class="card-title">⑧ 床位纠纷</h3><div class="card-body">空床可否出租？真相：床不是家具，是现实替睡着证明"醒来后还是你"的证人。处理：查旧睡者状态、散旧温、刮旧梦。</div></div>
        <div class="card"><h3 class="card-title">⑨ 潮后资源</h3><div class="card-body">潮后物资谁有权拾取？真相：灾后不是没有主人，而是主人可能已经无法用普通方式说话。处理：潮后拾荒登记、听夜声。</div></div>
        <div class="card" style="grid-column:1/-1"><h3 class="card-title">⑩ 任务伦理</h3><div class="card-body">系统奖励是否代表行为合理？真相：系统想知道你怎么选，它不负责判断你选得是否还像个人。处理：高危任务需领地备案。</div></div>
      </div>
      <div class="quote">在无光域，法律不是判断谁对谁错，而是判断一件事到底有没有结束。</div>
    `,
  },
  {
    id: 'conflict-court-and-laws',
    num: 'R4',
    title: '混合法庭与冲突六律',
    sub: '玩家记录者、土著五庭、边界见证者共同组成的纠纷处理机构',
    summary: '混合法庭由玩家记录席、土著五庭席（门/名/眠/骨/井）和边界见证席共同组成。遵循先稳边界再分对错、系统记录不能单独定案、高危物默认隔离等原则。冲突六律构成了玩家—土著共存的底层法则。',
    content: `
      <h3>混合法庭组成</h3>
      <div class="grid-2">
        <div class="card"><h3 class="card-title">玩家记录席</h3><div class="card-body">系统记录、频道记录、交易日志、任务日志、排行榜变化、面板截图或系统拓印。</div></div>
        <div class="card"><h3 class="card-title">土著五庭席</h3><div class="card-body">门庭（门/庇护所/入侵）、名庭（名字/身份/食名）、眠庭（床/睡眠/替睡）、骨庭（死亡/尸体/葬制）、井庭（水权/井声/回声污染），外加箱庭（仓储/交易/归属）。</div></div>
        <div class="card" style="grid-column:1/-1"><h3 class="card-title">边界见证席</h3><div class="card-body">静听者、归床人、誊名师、箱契师、骨匠、梦医、屋医，必要时裂视者。他们不一定判案，而是判断边界是否稳定。</div></div>
      </div>
      <h3>混合法庭流程</h3>
      <div class="grid-2">
        <div class="card"><div class="card-body"><strong>①止传：</strong>案件涉及异常/死者发言/身份替代，先禁止频道扩散。<strong>②封物：</strong>涉事物品、床位、梦囊先封存。<strong>③取三证：</strong>系统记录、物理痕迹、边界承认。</div></div>
        <div class="card"><div class="card-body"><strong>④判定：</strong>判断问题属于哪一层冲突（系统/物理/名字/梦境/床位/庇护所/归属）。<strong>⑤裁定：</strong>优先保护公共边界——先防止现实继续长歪。<strong>⑥净化：</strong>断旧主、名净、梦净、骨净、火净等。<strong>⑦注销：</strong>公开注销错误记录防止继续流通。</div></div>
      </div>
      <h3>玩家—土著冲突六律</h3>
      <div class="grid-2">
        <div class="card"><h3 class="card-title">第一律</h3><div class="card-body">系统显示完成，不代表现实闭合。真正完成必须看旧主、名、梦、门、床、箱是否承认。</div></div>
        <div class="card"><h3 class="card-title">第二律</h3><div class="card-body">土著规矩不是迷信，而是灾后工程。每一道繁琐流程都是为了防止某种曾经发生过的边界事故再次发生。</div></div>
        <div class="card"><h3 class="card-title">第三律</h3><div class="card-body">记录可以证明事实，也可以制造事实。系统日志、频道截图、图鉴都不是纯粹旁观——它们会参与现实成形。</div></div>
        <div class="card"><h3 class="card-title">第四律</h3><div class="card-body">死亡、交易、居住、合作都不是瞬间事件。它们都是关系转换过程。关系未断净，事件就没有真正结束。</div></div>
        <div class="card"><h3 class="card-title">第五律</h3><div class="card-body">真相至少需要三证。只信一证，就是把自己交给某一层现实吞掉。</div></div>
        <div class="card"><h3 class="card-title">第六律</h3><div class="card-body">新文明必须发明第三法。玩家系统法太薄，土著边界法太重。方舟必须让效率、关系、个人选择同时被承认。</div></div>
      </div>
    `,
  },
]