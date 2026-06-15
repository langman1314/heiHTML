// 无光域·语言与系统翻译缺陷（Phase 3.4 深化）
// 任务书 3.4 回复：系统翻译让玩家听懂了词，却遮住了词后面的灾难史

export const phase3Language = [
  {
    id: 'language-first-principle',
    num: 'T1',
    title: '系统翻译的第一性定义',
    sub: '系统翻译不是语言学翻译，而是生存行动翻译',
    summary: '系统翻译优先让玩家"能行动"而不是让玩家"真正理解"。它会把复杂的土著词压缩成玩家熟悉的简单词，导致玩家经常以为自己听懂了，但实际只理解了表面。六大缺陷：压缩翻译、安全化翻译、游戏化翻译、去历史化翻译、去边界化翻译、延迟纠错翻译。',
    content: `
      <p class="section-desc">系统翻译是神胎筛选协议为外来者提供的语言适配层。它承担三项功能：降低初期交流成本（让玩家与土著基础对话）、保护玩家认知边界（避免直接接触不可理解的语言）、诱导玩家按系统逻辑行动（将复杂边界概念简化成玩家熟悉的词汇）。</p>
      <h3>六大翻译缺陷</h3>
      <div class="grid-2">
        <div class="card"><h3 class="card-title">① 压缩翻译</h3><div class="card-body">系统将多个土著词压缩成一个玩家词。土著语中十种不同的"门"——可开门、暂封门、饱门、认主门、吃过人的门、只向内开的门、旧主未断之门、假装成门的门——系统初期全部翻译为"门"。玩家因此以为所有门属于同一类。</div></div>
        <div class="card"><h3 class="card-title">② 安全化翻译</h3><div class="card-body">系统用更温和的词替换高危词。土著说"这张床还在等它上一位睡者"，系统翻译为"该床存在旧主残留"。玩家听到"残留"以为可清除，但土著原句中的"等"意味着床已有主动倾向。</div></div>
        <div class="card"><h3 class="card-title">③ 游戏化翻译</h3><div class="card-body">土著说"你的屋子已经把你咽到里面半寸了"，系统翻译为"庇护所活化度提升，内属倾向增加"。玩家觉得是增益，但土著在警告：房子正在把你当成自身的一部分。</div></div>
        <div class="card"><h3 class="card-title">④ 去历史化翻译</h3><div class="card-body">系统省略词背后的灾难史。土著说"不要在潮前换床"，系统翻译准确但不给原因。玩家以为是迷信，实际来自闭门纪"空床等待灾"——没有历史，规则就像迷信；有历史，规则才成为文明伤疤。</div></div>
        <div class="card"><h3 class="card-title">⑤ 去边界化翻译</h3><div class="card-body">系统把边界词翻译成普通物品词。土著语中的"碗"不是餐具而是"共食资格容器"，系统翻译为"碗"，于是玩家不理解为什么多一只碗要停食。</div></div>
        <div class="card"><h3 class="card-title">⑥ 延迟纠错翻译</h3><div class="card-body">初期翻译简化，随权限提高逐步修正。初期"门"→中期"旧门"→后期"旧主未断、曾吞通行关系、不可作主门之门"。这不是给新知识，而是玩家的认知承受能力提高后系统允许更复杂的词进入——但过去可能一直在错误理解许多东西。</div></div>
      </div>
      <div class="quote">玩家最大的危险不是听不懂土著，而是他以为自己听懂了。</div>
    `,
  },
  {
    id: 'language-dangerous-words',
    num: 'T2',
    title: '十大高危误译词',
    sub: '门、家、死、名字、梦、交易、安全、净化、活化、灯种——每个词背后都压着灾难史',
    summary: '十个最容易引发事故的误译词：系统初译与土著实际含义的差异巨大——门有十种分类、家有九种状态、死有八种形态、名字有十种索引。玩家以为的简单概念，实际上是土著文明的精细边界分类系统。',
    content: `
      <div class="grid-2">
        <div class="card"><h3 class="card-title">门</h3><div class="card-body"><span class="keyword">系统初译：</span>门。<span class="keyword">土著分类：</span>生门、旧门、饱门、认主门、回人门、内开门、假门、门尸、未门。<span class="keyword">误解：</span>门都是可开启通道，修好门就是提高安全，门越多越方便。<span class="keyword">后果：</span>门灾、错路、敲门者入侵、庇护所叠室化。</div></div>
        <div class="card"><h3 class="card-title">家</h3><div class="card-body"><span class="keyword">系统初译：</span>家、住所、庇护所。<span class="keyword">土著分类：</span>暂居处、栖屋、认门之家、认床之家、内属之家、等人之家、饥饿之家、巢之家、可迁之家。<span class="keyword">误解：</span>"家"是温暖正面词，庇护所越像家越安全。<span class="keyword">后果：</span>被过度内属、忽略巢穴化。</div></div>
        <div class="card"><h3 class="card-title">死</h3><div class="card-body"><span class="keyword">系统初译：</span>死亡。<span class="keyword">土著分类：</span>清死、缺死、错死、活死、梦死、名死、床死、未断死。<span class="keyword">误解：</span>生命值归零就是死亡完成。<span class="keyword">后果：</span>频道遗言、晚归影、活死者、遗物污染。</div></div>
        <div class="card"><h3 class="card-title">名字</h3><div class="card-body"><span class="keyword">系统初译：</span>名字、昵称、ID。<span class="keyword">土著分类：</span>乳名、真名、门名、床名、榜名、借名、旧名、死名、空名、轻名。<span class="keyword">误解：</span>把昵称当普通显示名，随意公开修改。<span class="keyword">后果：</span>食名、失名、榜首失名。</div></div>
        <div class="card"><h3 class="card-title">梦</h3><div class="card-body"><span class="keyword">系统初译：</span>梦、精神状态、梦渣资源。<span class="keyword">土著分类：</span>可食梦、可存梦、可借梦、可葬梦、禁述梦、不可醒梦、反梦、旧梦、归梦、空梦。<span class="keyword">误解：</span>以为完整复述有利于分析。<span class="keyword">后果：</span>梦污染、替睡者、不可醒梦。</div></div>
        <div class="card"><h3 class="card-title">交易</h3><div class="card-body"><span class="keyword">系统初译：</span>交易、买卖、交换。<span class="keyword">土著分类：</span>物换、断主换、带梦换、带名换、夜声换、半断换、债换、见证换、禁换。<span class="keyword">误解：</span>以为交易栏完成就安全。<span class="keyword">后果：</span>旧主回归、梦债、物品自返。</div></div>
        <div class="card"><h3 class="card-title">安全</h3><div class="card-body"><span class="keyword">系统初译：</span>安全、危险等级低。<span class="keyword">土著分类：</span>暂安、门安、床安、名安、梦安、物安、灯安、假安、过安。<span class="keyword">误解：</span>系统显示安全就是全面安全。<span class="keyword">后果：</span>正午错觉、伪安全灯、门区松懈。</div></div>
        <div class="card"><h3 class="card-title">净化</h3><div class="card-body"><span class="keyword">系统初译：</span>净化、清除污染。<span class="keyword">土著分类：</span>水净、火净、骨净、静净、梦净、名净、屋净、断净、缓净、伪净。<span class="keyword">误解：</span>以为净化水可以处理所有污染。<span class="keyword">后果：</span>名污染残留、净化过的物品再次出声。</div></div>
        <div class="card"><h3 class="card-title">活化</h3><div class="card-body"><span class="keyword">系统初译：</span>活化、升级、增强。<span class="keyword">土著分类：</span>醒材、认主活、习惯活、偏爱活、饥饿活、巢活、旧活、多心活、方舟活。<span class="keyword">误解：</span>以为活化越高越强。<span class="keyword">后果：</span>饥饿屋、巢穴化、假方舟。</div></div>
        <div class="card" style="grid-column:1/-1"><h3 class="card-title">灯种</h3><div class="card-body"><span class="keyword">系统初译：</span>外来者、玩家、穿越者。<span class="keyword">土著含义：</span>携带光记忆者、可被点燃的燃料、可能照亮新路的人、可能重复旧灯灾的人、神胎临产前投入的新鲜人格材料。系统翻译去掉了"燃料"和"上一轮"的含义，玩家因此低估土著对其真实处境的了解。</div></div>
      </div>
      <div class="quote">系统把土著的话翻译给玩家，就像把一座埋满坟的城市翻译成"住宅区"。玩家听见了词，却没听见词下面压着的灾难。</div>
    `,
  },
  {
    id: 'language-untranslatable',
    num: 'T3',
    title: '不可直译概念与语言学习等级',
    sub: '有些概念系统无法完整翻译，除非玩家权限或语言学习达到一定阶段',
    summary: '归位、不等、暂呼、旧主未断、床冷、门饱、梦醒了、名轻、屋子撒谎、潮后未结——十个不可直译概念，每个都是边界状态判断而非普通描述。语言学习从0级完全依赖翻译到6级危险直听，共七个阶段。',
    content: `
      <h3>十个不可直译概念</h3>
      <div class="grid-2">
        <div class="card"><h3 class="card-title">归位</h3><div class="card-body"><span class="keyword">表层：</span>回到位置、整理物品。<span class="keyword">实际：</span>让人、物、床、名、碗、箱、门重新被现实承认为各在其位——不是整理，是防止世界重新解释你属于哪里。</div></div>
        <div class="card"><h3 class="card-title">不等</h3><div class="card-body"><span class="keyword">表层：</span>不等待。<span class="keyword">实际：</span>对空床空屋进行封闭声明——不是冷漠，而是防止空缺继续长出人形。</div></div>
        <div class="card"><h3 class="card-title">暂呼</h3><div class="card-body"><span class="keyword">表层：</span>临时称呼。<span class="keyword">实际：</span>半名期儿童只能被有限呼唤，不可建立完整现实索引。</div></div>
        <div class="card"><h3 class="card-title">旧主未断</h3><div class="card-body"><span class="keyword">表层：</span>旧主人残留。<span class="keyword">实际：</span>物品、床、门、名字仍保留回到前归属关系的路径——不是残留物，而是未关闭的关系。</div></div>
        <div class="card"><h3 class="card-title">床冷</h3><div class="card-body"><span class="keyword">表层：</span>床铺温度低。<span class="keyword">实际：</span>床不再承认某人为安全睡眠者——可能比身体受伤更严重。</div></div>
        <div class="card"><h3 class="card-title">门饱</h3><div class="card-body"><span class="keyword">表层：</span>门异常。<span class="keyword">实际：</span>门吞过太多通行关系，不应再承担门的功能——再开不是开门而是喂路。</div></div>
        <div class="card"><h3 class="card-title">梦醒了</h3><div class="card-body"><span class="keyword">表层：</span>做梦者醒来。<span class="keyword">实际：</span>梦中某个存在意识到自己是梦，开始寻找进入现实的路径。</div></div>
        <div class="card"><h3 class="card-title">名轻</h3><div class="card-body"><span class="keyword">表层：</span>名字不稳定。<span class="keyword">实际：</span>现实通过名字索引个体的力量下降，别人更容易替代、误认、借名。</div></div>
        <div class="card"><h3 class="card-title">屋子撒谎</h3><div class="card-body"><span class="keyword">表层：</span>庇护所异常。<span class="keyword">实际：</span>庇护所面板、门、床、墙对同一事实给出不一致反应，且房屋有意隐藏某些边界变化。</div></div>
        <div class="card"><h3 class="card-title">潮后未结</h3><div class="card-body"><span class="keyword">表层：</span>黑潮后状态未结束。<span class="keyword">实际：</span>系统倒计时上结束，但区域代谢、死者关系、资源归属、梦污染仍未完全闭合。</div></div>
      </div>
      <h3>语言学习七级</h3>
      <div class="truth-stack">
        <div class="truth-layer"><span class="truth-label">0级</span><div class="truth-text">完全依赖系统翻译——把门都当门、把死都当死。风险最高。</div></div>
        <div class="truth-layer"><span class="truth-label">1级</span><div class="truth-text">识别高危词——知道旧门不等于普通门，空床不等于可用床。</div></div>
        <div class="truth-layer"><span class="truth-label">2级</span><div class="truth-text">理解边界语法——听出一句话是在确认边界还是在拒绝承认。</div></div>
        <div class="truth-layer"><span class="truth-label">3级</span><div class="truth-text">阅读骨刻与灯纹基础——可独立低风险探索，能发现系统翻译遗漏。</div></div>
        <div class="truth-layer"><span class="truth-label">4级</span><div class="truth-text">理解仪式语言——可参与混合法庭与庇护所管理深层剧情。</div></div>
        <div class="truth-layer"><span class="truth-label">5级</span><div class="truth-text">识别系统误译——判断系统把哪些词压缩了、安全化了，成为玩家—土著桥梁。</div></div>
        <div class="truth-layer"><span class="truth-label">6级</span><div class="truth-text">危险直听——不经系统过滤直接理解深层语言，但未过滤的语言可能直接污染梦与名。</div></div>
      </div>
    `,
  },
  {
    id: 'language-laws',
    num: 'T4',
    title: '语言与翻译六律',
    sub: '系统让你听懂，不等于让你懂',
    summary: '语言的六条底层法则：系统让你听懂不等于让你懂、一个玩家词可能压着十个土著灾难词、误译不是沟通失败而是边界事故、语言越精确越能活但越完整越危险、谁掌握词谁掌握现实解释权、新文明必须发明能保护人的语言。',
    content: `
      <div class="grid-2">
        <div class="card"><h3 class="card-title">第一律：系统让你听懂，不等于让你懂</h3><div class="card-body">它翻译的是行动所需的表层词，不是土著文明为活下来付出的全部分类。</div></div>
        <div class="card"><h3 class="card-title">第二律：一个玩家词，可能压着十个土著灾难词</h3><div class="card-body">门、床、死、名、梦、家、交易、安全、净化——都不是单一概念，而是灾难史压缩后的分类系统。</div></div>
        <div class="card"><h3 class="card-title">第三律：误译不是沟通失败，而是边界事故</h3><div class="card-body">在无光域，说错、听错、译错不只是误会——它可能让门被误开、死者被误召、名字被误借。</div></div>
        <div class="card"><h3 class="card-title">第四律：语言越精确越能活，语言越完整越危险</h3><div class="card-body">精确分类能防灾。但完整复述高危异常也会喂养异常。无光域的语言追求"足够精确"，不是"无限透明"。</div></div>
        <div class="card"><h3 class="card-title">第五律：谁掌握词，谁掌握现实解释权</h3><div class="card-body">系统、土著专业者、玩家攻略者、方舟制定者——都在争夺命名权。命名权就是文明权力。</div></div>
        <div class="card"><h3 class="card-title">第六律：新文明必须发明能保护人的语言</h3><div class="card-body">方舟不能只带走物资和人。它必须带走一套知道何时命名、何时沉默、何时记录、何时遗忘的语言。</div></div>
      </div>
      <div class="quote-center">在无光域，真正学会一门语言，<br>不是知道"门"怎么说，<br>而是知道哪一种门不能开；<br>不是知道"死"怎么说，<br>而是知道一个人到底要断掉多少关系，才算真正离开。</div>
    `,
  },
]