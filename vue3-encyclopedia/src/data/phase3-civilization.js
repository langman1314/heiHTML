// 无光域·晦民文明史（Phase 3.1 深化）
// 任务书 3.1 回复：土著不是黑暗里的怪人，而是曾被光、语言、门和梦伤害过的文明

export const phase3Civilization = [
  {
    id: 'native-origin-and-three-ages',
    num: 'C1',
    title: '晦民起源与三纪文明',
    sub: '晦民不是天生沉默，而是经历过旧灯时代后又亲眼看着它熄灭的人',
    summary: '晦民文明分为三纪：近光纪（开放扩张、旧灯天幕、门路网络、梦库时代）、闭门纪（旧灯衰竭、门灾爆发、梦库腐化、半名期确立）、候胎纪（黑潮异常、系统出现、穿越者降临、神胎临产）。晦民不是NPC，而是被黑暗反复教育后仍选择留下的文明。',
    content: `
      <p class="section-desc">晦民并非单一种族，而是原生晦裔、旧光遗民、同化外裔、灰蜕后裔长期融合而成的本土智慧生命群。</p>
      <p class="section-desc">"晦民"不是血统概念，而是文明归属概念——被无光域承认为本土循环一部分、同时仍保留社会、语言、记忆与家族结构的智慧生命。</p>
      <h3>第一纪：近光纪——他们曾以为只要点亮世界，就能免于被吞食</h3>
      <div class="grid-2">
        <div class="card"><h3 class="card-title">旧灯天幕</h3><div class="card-body">无光域曾拥有微弱光源系统——可能是上一纪文明制造的巨型骨灯网络、神胎早期胎膜中残留的发光矿脉或某种人工昼夜系统。它足以支持早期晦民形成更开放的贸易、聚落、远行和语言制度。</div></div>
        <div class="card"><h3 class="card-title">社会特征</h3><div class="card-body">语言更开放（有叙事诗和公开辩论）、门路更发达（旧门、井路、骨桥连接聚落）、梦被视为公共档案（壳眠裔地位极高）、完整真名提前赋予。这是一个更有希望也更傲慢的时代。</div></div>
        <div class="card" style="grid-column:1/-1"><h3 class="card-title">终端：三灾并发</h3><div class="card-body">旧灯天幕衰竭（光失稳、伪安全灯出现）、门灾爆发（门开始记住人、门后不再是原路）、梦库腐化（梦中人物意识到自己是梦）——三者共同导致文明从开放转向闭锁。</div></div>
      </div>
      <h3>第二纪：闭门纪——他们学会活下去的方法是把世界关在门外</h3>
      <div class="grid-2">
        <div class="card"><h3 class="card-title">门灾与封禁</h3><div class="card-body">门路网络崩溃——门开始记住通行者，为某些人主动开启，门后不再是原路。旧门守墓者前身开始封禁大量门路。从此门不再是文明扩张工具，而是最危险的边界器官。</div></div>
        <div class="card"><h3 class="card-title">名字灾与半名期</h3><div class="card-body">完整真名制度遭遇灾难——儿童被梦中陌生人叫出真名后失踪，死者真名被反复呼唤后生成回声人格，名册过于完整使食名者能顺着名册替代身份。于是半名期制度产生：在孩子被家门、床、碗、箱共同确认前，不给完整真名。</div></div>
        <div class="card"><h3 class="card-title">沉默文化形成</h3><div class="card-body">大量传述型晦诡爆发——补全死者最后一句话会召唤残响、传播错误避灾口诀会喂养异常。缄面族提出核心原则：未确认者不给名字，未归属者不给位置，未结束者不补结尾。</div></div>
        <div class="card"><h3 class="card-title">文明成果</h3><div class="card-body">门庭、名庭、眠庭、骨庭、井庭五庭制度；骨刻语标准化；梦葬与缄封葬；黑潮前中后流程；半名期教育。代价：表达被压抑，远行减少，创新变慢。</div></div>
      </div>
      <h3>第三纪：候胎纪——分娩前夜</h3>
      <div class="grid-2">
        <div class="card"><h3 class="card-title">黑潮异常增强</h3><div class="card-body">大黑潮重排频繁，特殊黑潮增多——名潮、梦潮、门潮、胎潮、灯潮。土著古老禁忌被频繁触发。</div></div>
        <div class="card"><h3 class="card-title">系统与穿越者</h3><div class="card-body">系统首次被确认——晦民称玩家为"新一轮灯种"。这个称呼包含多重含义：携带光的记忆、像燃料一样会被点燃、可能照亮新路、也可能像旧灯文明一样引来更大灾难。晦民中部分高阶势力早已知道上一轮外来者失败过。</div></div>
      </div>
      <div class="quote">晦民不是没见过光的野蛮人。他们是见过光的替代品，后来亲眼看着它熄灭的人。他们对玩家携带的恒星记忆态度复杂——羡慕、恐惧、怀疑、利用、祭祀化、不愿再次沉迷。</div>
    `,
  },
  {
    id: 'native-ethnic-groups',
    num: 'C2',
    title: '晦民八种族群',
    sub: '晦民不是统一阵营，八种族群各有历史创伤与当前立场',
    summary: '骨纺人、壳眠裔、缄面族、食名裔、裂瞳古裔、井喉民、灰蜕人、灯骨匠裔——八个族群各自经历了近光纪的繁荣、闭门纪的创伤和候胎纪的抉择，对玩家态度从交易利用到厌恶排斥各有不同。',
    content: `
      <div class="grid-2">
        <div class="card"><h3 class="card-title">骨纺人</h3><div class="card-body"><span class="keyword">近光纪：</span>大型建筑者、灯塔骨架工程师。<span class="keyword">闭门纪：</span>转为骨墙与边界织物制造者，地位上升。<span class="keyword">候胎纪：</span>玩家最需要的建造技术族群。<span class="keyword">信条：</span>"房子先要知道哪里不能开口，才配长大。"</div></div>
        <div class="card"><h3 class="card-title">壳眠裔</h3><div class="card-body"><span class="keyword">近光纪：</span>梦库管理员、共梦外交官。<span class="keyword">闭门纪：</span>梦库腐化后转梦葬与梦净技术。<span class="keyword">候胎纪：</span>掌握上一轮残史，真相推进关键族群。<span class="keyword">创伤：</span>曾试图保存所有记忆，结果差点让所有死者都有机会回来。</div></div>
        <div class="card"><h3 class="card-title">缄面族</h3><div class="card-body"><span class="keyword">近光纪：</span>声纹记录者、证词官。<span class="keyword">闭门纪：</span>语言灾后成为沉默防灾专家。<span class="keyword">候胎纪：</span>最厌恶频道文化，也是处理频道遗言的关键盟友。<span class="keyword">信条：</span>太多灾难来自"多补了一句话"。</div></div>
        <div class="card"><h3 class="card-title">食名裔</h3><div class="card-body"><span class="keyword">近光纪：</span>名册官、真名见证人。<span class="keyword">闭门纪：</span>名字灾后分裂——正统变名医与誊名师，极端派形成食名教团。<span class="keyword">候胎纪：</span>对玩家极感兴趣，因玩家有系统昵称、榜单位置与旧世界真名多重索引。<span class="keyword">危险：</span>最容易堕入"更适合者应坐上去"的逻辑。</div></div>
        <div class="card"><h3 class="card-title">裂瞳古裔</h3><div class="card-body"><span class="keyword">近光纪：</span>深层观测者、旧灯校准者。<span class="keyword">闭门纪：</span>因看见太多而大幅减少。<span class="keyword">候胎纪：</span>裂视主角的土著镜像——能理解看见裂缝的代价。<span class="keyword">创伤：</span>不是没能看见灾难，而是看见了却无人愿为尚未发生的灾难关闭已经带来利益的门。</div></div>
        <div class="card"><h3 class="card-title">井喉民</h3><div class="card-body"><span class="keyword">近光纪：</span>水路与远程通讯网络核心。<span class="keyword">闭门纪：</span>井灾后建立井纹语与井庭。<span class="keyword">候胎纪：</span>净水与回声污染处理的核心力量。<span class="keyword">信条：</span>"井不是水洞，而是世界喉咙——一旦井开始练习说话，整座聚落都可能被回答污染。"</div></div>
        <div class="card"><h3 class="card-title">灰蜕人</h3><div class="card-body"><span class="keyword">闭门纪：</span>大量晦染幸存者被排斥到边缘。<span class="keyword">候胎纪：</span>形成灰蜕公社——主张晦染不是纯粹堕落而是另一种适应。<span class="keyword">意义：</span>保存了最多关于"同化后仍能活"的知识。</div></div>
        <div class="card" style="grid-column:1/-1"><h3 class="card-title">灯骨匠裔</h3><div class="card-body"><span class="keyword">近光纪：</span>旧灯天幕工程师与祭司。<span class="keyword">闭门纪：</span>地位崩塌后重建为骨灯与灯纹语专家。<span class="keyword">候胎纪：</span>部分极端派仍试图复原旧灯天幕。<span class="keyword">创伤：</span>曾让文明相信被照亮就是安全——后来伪灯证明，连安全的形状也会被模仿。</div></div>
      </div>
    `,
  },
  {
    id: 'native-politics-and-attitudes',
    num: 'C3',
    title: '土著政治势力与对玩家态度',
    sub: '晦民对神胎没有统一看法，对玩家也没有统一态度',
    summary: '六种神胎观（自然循环/饥饿归顺/边界抵抗/候选干预/方舟出走/破胎极端）、六种对玩家态度（交易利用/谨慎援助/厌恶排斥/崇拜利用/替代掠夺/合作改革）、八种政治势力（五庭联盟/眠渊议会/旧门守墓者/骨灯商队/灰井修会/食名教团/灰蜕公社/方舟派）构成复杂的土著社会图景。',
    content: `
      <h3>六种神胎观</h3>
      <div class="grid-2">
        <div class="card"><h3 class="card-title">自然循环派</h3><div class="card-body">神胎是无光域生态的最终结果，不是善恶，而是世界长到某阶段必然诞生的意识。代表：部分骨庭长老、灰井修会保守派。</div></div>
        <div class="card"><h3 class="card-title">饥饿归顺派</h3><div class="card-body">被神胎吞食是最高归位。代表：饥饿教、黑潮崇拜者。</div></div>
        <div class="card"><h3 class="card-title">边界抵抗派</h3><div class="card-body">必须延缓神胎发育。代表：旧门守墓者、缄面族保守派。</div></div>
        <div class="card"><h3 class="card-title">候选干预派</h3><div class="card-body">让谁成为主导人格是可以谈判的。代表：眠渊议会、裂瞳古裔。</div></div>
        <div class="card"><h3 class="card-title">方舟出走派</h3><div class="card-body">保存文明火种出走。代表：方舟教、灰蜕公社激进派。</div></div>
        <div class="card"><h3 class="card-title">破胎极端派</h3><div class="card-body">神胎必须被终止。代表：失去聚落的复仇者、极端反系统组织。</div></div>
      </div>
      <h3>八大政治势力</h3>
      <div class="truth-stack">
        <div class="truth-layer"><span class="truth-label">五庭保守联盟</span><div class="truth-text">门庭、名庭、眠庭、骨庭、井庭保守派。主张维持闭门纪制度，限制玩家扩张。优点：稳定、有经验。缺点：保守、可能错过终局变量。</div></div>
        <div class="truth-layer"><span class="truth-label">眠渊议会</span><div class="truth-text">壳眠裔、梦掘人、裂瞳古裔组成。研究上一轮失败，引导候选人格。优点：知识最深，掌握旧梦史料。缺点：秘密太多，可能把人当历史样本。</div></div>
        <div class="truth-layer"><span class="truth-label">旧门守墓者</span><div class="truth-text">守护门灾遗迹，封禁旧门。主张门不能随便开，方舟路线若依赖门脉必须受审查。优点：对门类异常最专业。缺点：对出走路线天然怀疑。</div></div>
        <div class="truth-layer"><span class="truth-label">骨灯商队</span><div class="truth-text">游商与情报贩子。主张灾难中也要贸易。优点：连接玩家与土著社会。缺点：利益优先，不一定告诉完整风险。</div></div>
        <div class="truth-layer"><span class="truth-label">灰井修会</span><div class="truth-text">净水、井纹、回声污染组织。主张水和声音是文明底线。优点：稳健、可处理污染。缺点：控制水权可能形成垄断。</div></div>
        <div class="truth-layer"><span class="truth-label">食名教团</span><div class="truth-text">身份替代组织。主张名字应流向更适合的位置。优点：揭示身份主题。缺点：吞噬个体选择权，极危险。</div></div>
        <div class="truth-layer"><span class="truth-label">灰蜕公社</span><div class="truth-text">接受晦染的边缘组织。主张晦染者不应全部被视为失败者。优点：提供非人类中心视角。缺点：容易滑向归域合理化。</div></div>
        <div class="truth-layer"><span class="truth-label">方舟派</span><div class="truth-text">年轻土著与玩家合作势力。主张庇护所活化和方舟路线是唯一变量。优点：与主角路线契合。缺点：可能被方舟碎片利用。</div></div>
      </div>
      <div class="quote">晦民不是黑暗里的怪人，而是曾经试图用光、语言、门和梦征服黑暗，后来亲眼看着光被模仿、门开始吃人、梦不愿醒来、名字被别人坐走的文明。</div>
    `,
  },
  {
    id: 'native-why-not-escape',
    num: 'C4',
    title: '晦民为什么不逃离无光域',
    sub: '不是因为他们蠢，而是因为逃离需要同时解决六个问题',
    summary: '没有稳定外部路径（门灾后门路极度不可信）、身体与晦能生态绑定（离开是生态性死亡）、家园伦理（放弃祖骨与无法离开的人等于背叛）、方舟技术不足、神胎封锁（越接近出走越引发碎片干涉）、内部分歧——晦民不是不逃，而是不知道怎样逃才不算背叛所有留下的人。',
    content: `
      <div class="grid-2">
        <div class="card"><h3 class="card-title">没有稳定外部路径</h3><div class="card-body">门灾后，通向外部或深层之外的门路极度不可信。旧门文明曾经试图逃离，结果造成更大灾难。</div></div>
        <div class="card"><h3 class="card-title">身体与晦能生态绑定</h3><div class="card-body">许多晦民的呼吸、睡眠、梦境、食物、繁殖、葬制都与晦能循环相连。离开可能不是自由，而是生态性死亡。</div></div>
        <div class="card"><h3 class="card-title">家园伦理</h3><div class="card-body">对晦民而言，无光域不是地狱而是祖辈的家。这里有骨、梦、井、门、床、孩子、葬礼和旧名。逃离意味着放弃祖骨、放弃梦库、放弃无法迁移的井、放弃老人。</div></div>
        <div class="card"><h3 class="card-title">方舟技术不足</h3><div class="card-body">传统晦民有边界技术，但缺少玩家庇护所系统、活屋路线与外来文明惯性。他们能守住家，却不一定能把家养成船。</div></div>
        <div class="card"><h3 class="card-title">神胎封锁</h3><div class="card-body">越接近出走可能，越会引发神胎碎片干涉——门脉、名位、母巢、饥饿碎片都会阻止文明剥离。</div></div>
        <div class="card"><h3 class="card-title">内部分歧</h3><div class="card-body">有人要留，有人要成神，有人要出走，有人要破胎。没有形成统一逃离方案。</div></div>
      </div>
      <div class="quote">无光域是地狱，也是家。对玩家而言，这里是被迫进入的黑暗。对晦民而言，这里埋着祖先、梦、井、床、孩子与旧灯残骸。他们不是不想逃，而是不知道怎样逃才不算背叛所有留下的人。</div>
    `,
  },
  {
    id: 'native-laws',
    num: 'C5',
    title: '晦民文明六律',
    sub: '晦民的核心法则——不是迷信，而是灾后工程',
    summary: '晦民文明的六条底层法则：不是没见过光而是见过光熄灭、沉默不是礼仪是灾后技术、门床名井不是迷信物而是文明骨架、土著规矩都是伤疤长成的法律、外来者既是灾难也是最后变量、无光域是地狱也是家。',
    content: `
      <div class="grid-2">
        <div class="card"><h3 class="card-title">第一律：晦民不是没见过光，而是见过光熄灭</h3><div class="card-body">他们现在不信光，不是因为愚昧，而是因为祖先曾把文明押在旧灯上，后来旧灯也学会骗人。</div></div>
        <div class="card"><h3 class="card-title">第二律：沉默不是礼仪，是灾后技术</h3><div class="card-body">每一句不说出口的话，都是在阻止世界多获得一个错误解释。</div></div>
        <div class="card"><h3 class="card-title">第三律：门、床、名、井不是迷信物，而是文明骨架</h3><div class="card-body">晦民围绕这些东西建立制度，是因为文明曾在这些地方崩塌过。</div></div>
        <div class="card"><h3 class="card-title">第四律：土著规矩都是伤疤长成的法律</h3><div class="card-body">每条村规、葬制、封文、禁句背后，都曾有一座聚落或一个家付过代价。</div></div>
        <div class="card"><h3 class="card-title">第五律：外来者既是灾难，也是最后变量</h3><div class="card-body">玩家会制造新型晦诡和排行榜灾害，但也携带光的记忆、完整文明惯性与方舟可能。</div></div>
        <div class="card"><h3 class="card-title">第六律：无光域是地狱，也是家</h3><div class="card-body">对玩家而言，这里是被迫进入的黑暗。对晦民而言，这里埋着祖先、梦、井、床、孩子与旧灯残骸。</div></div>
      </div>
      <div class="quote-center">在无光域，能活下来的文明，<br>往往不是说得最多的文明，<br>而是知道何时闭嘴、何时关门、何时把深爱之人从现实里温柔封存的文明。</div>
    `,
  },
]