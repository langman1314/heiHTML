// 无光域·主要反派与灰色势力档案（Phase 5.1）
// 任务书 5.1 回复：反派不是错误答案，而是把某个正确答案推到了吃人的程度

export const phase5Antagonists = [
  {
    id: 'antagonist-overview',
    num: 'A0',
    title: '反派总纲',
    sub: '每个反派都代表一种可成立的生存答案——他们错在把答案绝对化',
    summary: '无光域的反派不能只是邪教、怪物、掠夺者、系统走狗或疯子。核心恐怖来自"生存逻辑本身会变质"，所以主要敌对势力都必须拥有一部分正确性。他们可怕，不是因为他们全错，而是因为他们抓住了无光域的一条真实规律，然后把它推到极端。主角击败他们，不能等于证明他们全错——主角真正要做的是承认他们看到的真实困境，同时拒绝他们的唯一解。',
    content: `
      <p class=\"section-desc\">无光域的反派不能只是邪教、怪物、掠夺者、系统走狗或疯子。这个世界的核心恐怖来自"生存逻辑本身会变质"，所以主要敌对势力都必须拥有一部分正确性。</p>
      <div class=\"quote\">每个反派都代表一种可成立的生存答案。<br>他们错在把答案绝对化，并要求所有人为这个答案付出边界、名字、梦、自由或生命。</div>
      <h3>七大冲突源阵营总谱系</h3>
      <div class=\"grid-3\">
        <div class=\"card\"><h3 class=\"card-title\">食名教团</h3><div class=\"card-body\">身份应该流向更适合的人。</div></div>
        <div class=\"card\"><h3 class=\"card-title\">系统教</h3><div class=\"card-body\">服从系统，是玩家活下去的最大理性。</div></div>
        <div class=\"card\"><h3 class=\"card-title\">饥饿教</h3><div class=\"card-body\">被吃不是失败，而是回归循环。</div></div>
        <div class=\"card\"><h3 class=\"card-title\">方舟教极端派</h3><div class=\"card-body\">为了出走，可以牺牲留域者和"不适合登舟者"。</div></div>
        <div class=\"card\"><h3 class=\"card-title\">破榜者</h3><div class=\"card-body\">排行榜是屠宰场的灯，越亮的人越该被藏起来。</div></div>
        <div class=\"card\"><h3 class=\"card-title\">灰蜕公社激进派</h3><div class=\"card-body\">人类中心主义才是幻觉，应接受归域。</div></div>
        <div class=\"card\"><h3 class=\"card-title\">潮贵族/黑潮财团</h3><div class=\"card-body\">灾难不可消除，只能被管理和定价。</div></div>
      </div>
      <div class=\"quote\">无光域里最可怕的敌人，不是站在黑暗里说谎的人，而是站在废墟上说出半句真话的人。<br><br>他们说：身份应该给更适合者。<br>他们说：系统救了我们。<br>他们说：死亡本来就是循环。<br>他们说：方舟带不走所有人。<br>他们说：榜单会害死强者。<br>他们说：变得不像人也许不是堕落。<br>他们说：灾难总要有人管理。<br><br>每一句都对。但当他们要求所有人为了这句正确交出名字、梦、床、自由和未来时，正确就开始长牙。</div>
    `,
  },
  {
    id: 'antagonist-name-eaters',
    num: 'A1',
    title: '食名教团',
    sub: '他们不杀你，他们只是让世界觉得别人更像你',
    summary: '食名教团相信：名字不是私有物，而是现实中的位置。如果一个人无法承担自己的位置，更适合者就有权继承它。他们不认为自己是偷窃者——他们认为自己在优化无光域的身份秩序。危险在于：他们取消了个体不可替代性，把"责任继承"变成"人格替代"，最终会让社会只承认位置，不承认人。',
    content: `
      <p class=\"section-desc\">食名教团相信名字不是私有物，而是现实中的位置。如果一个人无法承担自己的位置，更适合者就有权继承它。他们最危险的地方在于：现实中确实存在"位置比个人更重要"的情况——一个守门人死了，门仍需要守；一个领主崩溃了，领地仍要活；一个父亲失踪了，孩子仍需要被养。食名教团就是从这种真实需求里长出来的。</p>
      <div class=\"quote\">名字不是私有物，而是现实中的位置。如果一个人无法承担自己的位置，更适合者就有权继承它。</div>
      <h3>组织结构</h3>
      <div class=\"truth-stack\">
        <div class=\"truth-layer\"><span class=\"truth-label\">外层·称呼采集者</span><div class=\"truth-text\">负责接近目标，收集昵称、旧名、亲昵称呼、系统ID、榜名、门牌名、床名。</div></div>
        <div class=\"truth-layer\"><span class=\"truth-label\">中层·借名师</span><div class=\"truth-text\">通过交易、契约、债务、救助、亲密关系借取目标的部分名音。</div></div>
        <div class=\"truth-layer\"><span class=\"truth-label\">内层·代位者</span><div class=\"truth-text\">经过训练后，逐步接近目标生活边界——使用相似称呼、接触其朋友、进入其庇护所、熟悉其床箱门、模仿其系统行为、接管其社会责任。</div></div>
        <div class=\"truth-layer\"><span class=\"truth-label\">核心·圣名者</span><div class=\"truth-text\">成功替代过多人身份的高阶食名者。他们不再追求某个名字，而是追求"名字流向更适合者"的神学权力。</div></div>
      </div>
      <h3>正确性</h3>
      <div class=\"card\"><div class=\"card-body\">身份确实不是完全私人，它与社会责任绑定。有些位置一旦空缺会造成真实灾难。无光域中名字本来就具有现实权重。旧主未断、新主不稳的中间地带确实需要有人填补。有些人被自己的位置压垮，而别人可能更适合。</div></div>
      <h3>危险性</h3>
      <div class=\"card danger\"><div class=\"card-body\">他们取消了个体不可替代性。他们把"责任继承"变成"人格替代"。他们不承认一个人即使不够强，也仍有权是自己。他们会为了证明"更适合"主动制造原主失格。他们最终会让社会只承认位置，不承认人。食名教团统治下的世界很稳定——每个位置都会有人坐，但没人能证明这个位置还属于自己。</div></div>
      <h3>与主角冲突点</h3>
      <p>主角方舟路线强调文明要保存人，而不是只保存功能。食名教团会挑战主角：如果一个无能父亲占着孩子唯一监护名额，是否该替换？如果一个庇护所主即将崩溃，是否该让更强者成为"他"？如果方舟只能带走十万人，为什么要带走"不适合者"？主角不能只说"你们邪恶"——他必须回答：文明保存的是效率，还是每个不完美的人仍有成为自己的权利？</p>
    `,
  },
  {
    id: 'antagonist-system-cult',
    num: 'A2',
    title: '系统教',
    sub: '他们相信系统不是神，但服从系统比相信人更可靠',
    summary: '系统教相信：系统救了玩家，给了庇护所、晦视、任务、频道、建造面板、黑潮倒计时。在一个会污染语言、名字、梦和门的世界里，系统是玩家唯一稳定的共同标准。他们未必认为系统善良——他们只认为系统"足够可用"。危险在于：系统不是完整真相，系统奖励的是筛选价值不是道德正确，他们会把人变成贡献值、排名、权限和任务完成率。',
    content: `
      <p class=\"section-desc\">系统教相信系统救了玩家。在一个会污染语言、名字、梦和门的世界里，系统是玩家唯一稳定的共同标准。他们未必认为系统善良——他们认为系统"足够可用"。</p>
      <h3>核心教义</h3>
      <div class=\"grid-2\">
        <div class=\"card\"><div class=\"card-body\">面板优先于土著口述。排行榜优先于民间声望。任务奖励代表高价值行为。系统交易比土著契约可信。死亡提示比梦与仪式更客观。玩家文明不应被土著迷信拖慢。服从系统路线是最大化生存率的理性选择。</div></div>
      </div>
      <h3>组织结构</h3>
      <div class=\"truth-stack\">
        <div class=\"truth-layer\"><span class=\"truth-label\">底层·任务信徒</span><div class=\"truth-text\">严格按任务行动，拒绝土著禁忌干扰。</div></div>
        <div class=\"truth-layer\"><span class=\"truth-label\">中层·面板官</span><div class=\"truth-text\">负责记录系统数据、分配资源、解释任务。</div></div>
        <div class=\"truth-layer\"><span class=\"truth-label\">高层·榜序司祭</span><div class=\"truth-text\">以排行榜为神圣序列，认为高排名者更接近系统认可。</div></div>
        <div class=\"truth-layer\"><span class=\"truth-label\">核心·协议主教</span><div class=\"truth-text\">研究系统隐藏规则，试图建立以系统权限为核心的玩家政体。</div></div>
      </div>
      <h3>正确性</h3>
      <div class=\"card\"><div class=\"card-body\">系统确实救了大量玩家。系统记录比许多土著口传更快速。系统交易能降低普通欺诈。黑潮倒计时极其有用。玩家若完全听土著，发展速度会很慢。土著专业者也可能借"边界风险"垄断收费。面板法能保护玩家免受部分土著权力压迫。</div></div>
      <h3>危险性</h3>
      <div class=\"card danger\"><div class=\"card-body\">系统不是完整真相。系统奖励的是筛选价值，不是道德正确。排行榜会让人变成位置。系统任务可能诱导高回流行为。系统语言会压缩边界风险。他们会把人变成贡献值、排名、权限和任务完成率。他们不理解土著法律是在处理系统看不到的层。系统教统治下玩家会高效、团结、扩张迅速——但他们也会更快变成神胎想要的社会样本。</div></div>
      <h3>与主角冲突点</h3>
      <p>主角需要系统但不能跪拜系统。系统教会指责主角：你使用系统却怀疑系统是背叛玩家；你引入土著法庭是让玩家文明倒退；你阻止追榜是压制强者；你说系统是筛选器，没有系统你早死了。主角必须承认：系统有用，系统救人，但系统救人的目的不等于人的目的。</p>
    `,
  },
  {
    id: 'antagonist-hunger-cult',
    num: 'A3',
    title: '饥饿教',
    sub: '他们说死亡不可怕，可怕的是死后不能被世界好好吃掉',
    summary: '饥饿教相信无光域的根本规律是循环——吃与被吃、种与被种、梦被吞、骨成麦、恐惧成晦晶、死亡成资源。他们崇拜的不是杀戮而是回流。他们认为尸体不该浪费、梦不该私藏、恐惧不该压抑、个体只是生态暂时借出的形状。危险在于：他们会把必要分流变成主动献祭、美化贫民死亡、将灾难经济神圣化，最终认为个体反抗循环是一种罪。',
    content: `
      <p class=\"section-desc\">饥饿教相信无光域的根本规律是循环。吃与被吃，种与被种，梦被吞，骨成麦，恐惧成晦晶，死亡成资源。他们崇拜的不是杀戮，而是回流。</p>
      <div class=\"quote\">无光域的根本规律是循环。抗拒被消化，才是痛苦源头。</div>
      <h3>核心理念</h3>
      <div class=\"card\"><div class=\"card-body\">尸体不该浪费。梦不该私藏。恐惧不该压抑。死亡应被尽快送入循环。个体只是生态暂时借出的形状。神胎不是怪物，而是循环即将长出的意识。</div></div>
      <h3>组织结构</h3>
      <div class=\"truth-stack\">
        <div class=\"truth-layer\"><span class=\"truth-label\">外层·骨播信徒</span><div class=\"truth-text\">参与尸体分流、骨麦田、腐殖池维护。</div></div>
        <div class=\"truth-layer\"><span class=\"truth-label\">中层·饥饿祭师</span><div class=\"truth-text\">主持"归食"仪式，将死亡神圣化。</div></div>
        <div class=\"truth-layer\"><span class=\"truth-label\">高层·潮腹司祭</span><div class=\"truth-text\">专门在黑潮后收集尸体、恐惧残响与高活性腐殖。</div></div>
        <div class=\"truth-layer\"><span class=\"truth-label\">核心·大胃先知</span><div class=\"truth-text\">声称能听见神胎饥饿节律，指导献祭与黑潮迎接。</div></div>
      </div>
      <h3>正确性</h3>
      <div class=\"card\"><div class=\"card-body\">无光域确实依赖循环。尸体处理不当会造成灾害。骨麦农业确实需要死亡分流。腐殖池是文明基础。完全拒绝死亡资源化，数百万人口无法生存。土著葬制本身也承认"死亡不是消失，而是分流"。</div></div>
      <h3>危险性</h3>
      <div class=\"card danger\"><div class=\"card-body\">他们会把必要分流变成主动献祭。他们会美化贫民死亡。他们会将灾难经济神圣化。他们会鼓励黑潮更强烈地收割。他们会把"不可浪费"变成"应该被吃"。他们最终会认为个体反抗循环是一种罪。饥饿教统治下，没有尸体浪费，没有梦浪费，没有恐惧浪费——也没有人真正拥有"不被使用"的权利。</div></div>
      <h3>与主角冲突点</h3>
      <p>主角同样利用尸体、腐殖、怪物、梦渣建立循环。饥饿教会认为主角是"未承认自己的同道"——他们把怪物种进土里、让尸体变成粮、让房子吃黑潮。主角必须划清：循环可以利用死亡但不能制造死亡；尸体可以分流但活人不能被提前定价；文明可以承认饥饿但不能让饥饿成为唯一法律。</p>
    `,
  },
  {
    id: 'antagonist-ark-extremists',
    num: 'A4',
    title: '方舟教极端派',
    sub: '他们想救文明，但已经开始提前决定谁不配被救',
    summary: '方舟教极端派相信无光域不可救、神胎临产不可阻、留域只是拖延死亡。唯一理性选择是尽快建造方舟，保存最有价值的人、技术、梦、种子和名字。他们不是反方舟，而是把方舟路线推向极端。危险在于：把"不得不选择"变成"由我们选择"，把救援变成资格审查，把留域者提前视作死人，把方舟变成精英逃生计划。',
    content: `
      <p class=\"section-desc\">方舟教极端派相信无光域不可救，唯一理性选择是尽快建造方舟，保存最有价值的人、技术、梦、种子和名字。他们不是反方舟，而是把方舟路线推向极端。</p>
      <h3>核心口号</h3>
      <div class=\"card\"><div class=\"card-body\">船小，不能带所有人。时间少，不能讲公平。文明优先于个体。留下者本就会被神胎吞食。选择谁登舟是文明延续的必要残酷。如果主角犹豫，就该由更坚定者接管方舟。</div></div>
      <h3>组织结构</h3>
      <div class=\"truth-stack\">
        <div class=\"truth-layer\"><span class=\"truth-label\">外层·登舟信徒</span><div class=\"truth-text\">普通追随者，愿为方舟建设奉献劳力与资源。</div></div>
        <div class=\"truth-layer\"><span class=\"truth-label\">中层·筛选官</span><div class=\"truth-text\">制定登舟资格：技能、生育能力、晦染程度、梦完整度、名字稳定性、对方舟忠诚度、是否有维护价值。</div></div>
        <div class=\"truth-layer\"><span class=\"truth-label\">高层·保存派长老</span><div class=\"truth-text\">负责收集种子、名册、梦囊、儿童、工匠、系统技术。</div></div>
        <div class=\"truth-layer\"><span class=\"truth-label\">核心·剥离派</span><div class=\"truth-text\">主张提前切断与留域者的关系，甚至主动牺牲外围聚落为方舟争取时间。</div></div>
      </div>
      <h3>正确性</h3>
      <div class=\"card\"><div class=\"card-body\">无光域确实可能无法全体拯救。方舟空间、资源、床位、梦舱有限。终局时间压力真实存在。留域可能意味着被神胎重新定义。文明保存确实需要选择。主角如果过度仁慈可能导致所有人一起死。</div></div>
      <h3>危险性</h3>
      <div class=\"card danger\"><div class=\"card-body\">把"不得不选择"变成"由我们选择"。把救援变成资格审查。把留域者提前视作死人。把不适合者当成负重。把方舟变成精英逃生计划。把未来文明建立在第一场大规模抛弃之上。如果他们掌控方舟，方舟会很快、很强、很干净——但也会从出发前就失去"文明值得被救"的理由。</div></div>
      <h3>与主角冲突点</h3>
      <p>他们会逼问主角：方舟床位有限，你带谁？一个低梦症老人和一个骨匠学徒谁更值得？一个重度晦染儿童是否能上船？一个欠潮债的底层玩家是否值得占用资源？如果带上所有人导致方舟失败，你是否才是真正的凶手？主角必须承认选择不可避免，但拒绝让选择变成资产、血统、效率和忠诚度审查。</p>
    `,
  },
  {
    id: 'antagonist-rank-breakers',
    num: 'A5',
    title: '破榜者',
    sub: '他们说排行榜是屠宰场的灯，越亮的人越该被藏起来',
    summary: '破榜者相信排行榜不是荣誉，而是神胎、系统、食名者、掠夺者和候选人格猎人的定位工具。所有榜单都必须被破坏、污染、遮蔽或操控。他们不是普通反系统组织，他们专门反对"强者被公开位置化"。危险在于：他们会替候选者决定自由、制造替身把灾祸引给无辜者、反对公开排名却建立暗中排名，最终从反对被看见变成自己决定谁该被藏。',
    content: `
      <p class=\"section-desc\">破榜者相信排行榜不是荣誉，而是神胎、系统、食名者、掠夺者和候选人格猎人的定位工具。所有榜单都必须被破坏、污染、遮蔽或操控。他们不是普通反系统组织——他们专门反对"强者被公开位置化"。</p>
      <div class=\"quote\">排行榜是屠宰场的灯，越亮的人越该被藏起来。</div>
      <h3>核心理念</h3>
      <div class=\"card\"><div class=\"card-body\">榜首会失名。强者会被候选化。排名会诱导互食。系统通过榜单让玩家自愿暴露。真正有价值的人应该被隐藏。必要时破榜者会暗中操控榜单，把灾厄引向替身。</div></div>
      <h3>组织结构</h3>
      <div class=\"truth-stack\">
        <div class=\"truth-layer\"><span class=\"truth-label\">外层·遮名人</span><div class=\"truth-text\">帮助榜单玩家隐藏真实身份、清理称号污染。</div></div>
        <div class=\"truth-layer\"><span class=\"truth-label\">中层·伪榜者</span><div class=\"truth-text\">制造假战绩、假排名、假身份，混淆系统和公众视线。</div></div>
        <div class=\"truth-layer\"><span class=\"truth-label\">高层·断榜师</span><div class=\"truth-text\">研究排行榜机制，能短暂干扰榜单显示。</div></div>
        <div class=\"truth-layer\"><span class=\"truth-label\">核心·守候者</span><div class=\"truth-text\">暗中保护或囚禁候选人格，防止其被神胎或其他势力夺走。</div></div>
      </div>
      <h3>正确性</h3>
      <div class=\"card\"><div class=\"card-body\">排行榜确实危险。榜名确实会压过真名。强者被公开后会被围猎。旧榜文明确实失败过。系统确实通过榜单筛选候选人格。有些候选者需要被保护而不是被推上神坛。</div></div>
      <h3>危险性</h3>
      <div class=\"card danger\"><div class=\"card-body\">他们会替候选者决定自由。他们可能囚禁强者，美其名曰保护。他们会制造替身，把灾祸引给无辜者。他们反对公开排名，却建立暗中排名。他们会操控信息，让社会无法判断真正风险。他们可能为了避免神胎筛选直接杀死潜在候选。破榜者反对被系统看见——但他们自己也开始决定谁该被藏、谁该被牺牲、谁有资格知道真相。</div></div>
      <h3>与主角冲突点</h3>
      <p>主角作为裂视者、方舟路线核心、潜在候选人格，必然被破榜者关注。他们可能帮主角隐藏排名、阻止主角公开行动、暗杀接近主角的人、制造主角替身，甚至囚禁主角。主角必须回答：如果被看见意味着危险，是否就该放弃公开承担责任？他的答案：可以隐藏名字，但不能隐藏选择；可以防止榜单吞人，但不能让少数人暗中替所有人决定命运。</p>
    `,
  },
  {
    id: 'antagonist-gray-commune',
    num: 'A6',
    title: '灰蜕公社激进派 · 情境性对立，非永久反派',
    sub: '他们说人类性不是底线，只是上一种环境留下的旧壳',
    summary: '灰蜕公社整体并不一定是反派，需分为温和派与激进派。温和派主张接纳晦染者，反对把半归域者当怪物。激进派则认为抵抗晦染是偏见——无光域不是污染源而是新的自然，变得不像人不代表堕落而是进化。他们反对人类中心主义和纯净晦民中心主义。危险在于：他们会美化边界丧失、劝人放弃名字梦床私域、把不再像人浪漫化，最终否定个体选择权。',
    content: `
      <p class=\"section-desc\">灰蜕公社整体并不一定是反派，需分为温和派与激进派。温和派主张接纳晦染者，反对把半归域者当怪物。激进派则进一步认为抵抗晦染是外来者和保守晦民的偏见——无光域不是污染源而是新的自然，变得不像人不代表堕落，也许是进化。</p>
      <div class=\"quote\">人类性不是底线，只是上一种环境留下的旧壳。</div>
      <h3>组织结构</h3>
      <div class=\"truth-stack\">
        <div class=\"truth-layer\"><span class=\"truth-label\">外层·灰蜕庇护所</span><div class=\"truth-text\">收容被聚落驱逐的晦染者、低梦者、名轻者、床寒症患者。</div></div>
        <div class=\"truth-layer\"><span class=\"truth-label\">中层·共生师</span><div class=\"truth-text\">研究如何让人、晦植、晦兽、活屋共生。</div></div>
        <div class=\"truth-layer\"><span class=\"truth-label\">高层·归域导师</span><div class=\"truth-text\">引导成员主动接受晦染阶段，削弱旧身份痛苦。</div></div>
        <div class=\"truth-layer\"><span class=\"truth-label\">核心·无皮者</span><div class=\"truth-text\">极端派领袖，认为完整个体边界是旧世界幻觉，应主动融入无光域。</div></div>
      </div>
      <h3>正确性</h3>
      <div class=\"card\"><div class=\"card-body\">晦染不等于立刻邪恶。很多灰蜕者仍有理智和情感。主流聚落确实歧视晦染者。"纯净人类"在无光域可能根本不存在。接受部分适应能提高生存能力。玩家固守旧世界标准有时是傲慢。土著闭门制度也可能把边缘者推向死亡。灰蜕公社是无光域中最有现实人权议题的势力之一。</div></div>
      <h3>危险性</h3>
      <div class=\"card danger\"><div class=\"card-body\">他们会美化边界丧失。他们会劝人放弃名字、梦、床位和私域。他们可能认为被庇护所内属化是温柔归宿。他们可能与母巢碎片或梦腐碎片接近。他们会把"不再像人"浪漫化。他们最终可能否定个体选择权，认为所有抗拒都是旧壳疼痛。灰蜕激进派统治下没有人被歧视——但这也意味着没有人有权说"我不想继续变了"。</div></div>
      <h3>与主角冲突点</h3>
      <p>主角本身会逐渐晦染，裂视也让他理解无光域逻辑。灰蜕激进派会说：你明明已经理解我们，为什么还要假装自己属于旧世界？他们逼主角承认自己已经变了、方舟也不可能纯净、出走者会带走无光域逻辑。主角不能否认这些——他的答案应是：变化可以被承认但不能被强迫，共生可以选择但不能把拒绝共生的人称作落后。</p>
    `,
  },
  {
    id: 'antagonist-tide-nobles',
    num: 'A7',
    title: '潮贵族/黑潮财团',
    sub: '他们不制造灾难，他们只是确保每次灾难都有人付账',
    summary: '潮贵族相信黑潮不可消除。既然灾难必然发生，就必须有人组织保险、避难、修复、拾荒、赔付和资源再分配。管理灾难的人理应获得收益。他们不是邪教，而是制度型反派。掌握黑潮保险、潮债、避难床位、潮后拾荒权、修门材料、净化服务等。危险在于：他们依赖黑潮持续存在、不希望灾难太少、让底层永远活在下一次黑潮前的债务里。',
    content: `
      <p class=\"section-desc\">潮贵族相信黑潮不可消除——既然灾难必然发生，就必须有人组织保险、避难、修复、拾荒、赔付和资源再分配。管理灾难的人理应获得收益。他们不是邪教，而是制度型反派。</p>
      <div class=\"quote\">他们不制造灾难，他们只是确保每次灾难都有人付账。</div>
      <h3>核心产业</h3>
      <div class=\"grid-2\">
        <div class=\"card\"><div class=\"card-body\">黑潮保险、潮债、避难床位、潮后拾荒权、修门材料、净化服务、尸体回收、灾后庇护所收购、高危资源拍卖。</div></div>
      </div>
      <h3>组织结构</h3>
      <div class=\"truth-stack\">
        <div class=\"truth-layer\"><span class=\"truth-label\">外层·保险员</span><div class=\"truth-text\">出售黑潮保险、床位险、死亡封名险、遗物净化险。</div></div>
        <div class=\"truth-layer\"><span class=\"truth-label\">中层·债契师</span><div class=\"truth-text\">签订潮债，管理抵押物：梦、名、劳役、庇护所权限。</div></div>
        <div class=\"truth-layer\"><span class=\"truth-label\">高层·拾荒权贵</span><div class=\"truth-text\">控制潮后资源区域，雇佣掘潮队。</div></div>
        <div class=\"truth-layer\"><span class=\"truth-label\">核心·潮议会</span><div class=\"truth-text\">由大型领地主、商队资本、五庭腐败官员、系统贵族联合组成。</div></div>
      </div>
      <h3>正确性</h3>
      <div class=\"card\"><div class=\"card-body\">没有保险，很多人活不过灾后。没有潮后组织，资源会被浪费。没有债务，穷人黑潮前买不起救命物资。没有大型仓储，聚落无法应对大黑潮。没有专业拾荒队，高级资源无法流通。没有黑潮产业，城邦无法长期运转。</div></div>
      <h3>危险性</h3>
      <div class=\"card danger\"><div class=\"card-body\">他们依赖黑潮持续存在。他们不希望灾难太少。他们会把救命资源定价到穷人无法承受。他们会用合规理由拒赔。他们会在灾后低价收购破产庇护所。他们会让底层永远活在下一次黑潮前的债务里。他们会阻挠能真正降低黑潮伤害的改革。潮贵族不需要杀人——他们只要等黑潮来，然后按契约收走人的床、梦和未来。</div></div>
      <h3>与主角冲突点</h3>
      <p>主角若建立更公平的黑潮防灾体系，必然触犯潮贵族利益。他们会说：免费避难会让人懒惰、廉价净化会破坏市场、减免潮债会让信用崩溃、方舟若不按贡献筛选就是让有准备者替无准备者买单。主角必须承认防灾确实需要成本——但他要拒绝让灾难成为少数人的稳定收入来源。</p>
    `,
  },
  {
    id: 'antagonist-conflict-matrix',
    num: 'A8',
    title: '阵营冲突关系',
    sub: '七方势力的恩怨网络——敌人、盟友与核心矛盾',
    summary: '各阵营之间的冲突关系矩阵。食名教团 vs 名庭与主角；系统教 vs 土著五庭与破榜者；饥饿教 vs 骨庭保守派与主角；方舟教极端派 vs 留域派与主角伦理派；破榜者 vs 系统教与食名教团；灰蜕激进派 vs 纯净派与系统教；潮贵族 vs 破债会与主角改革派。',
    content: `
      <p class=\"section-desc\">七大冲突源之间的冲突关系——没有绝对的敌人，只有重叠的矛盾。</p>
      <div class=\"card\"><div class=\"card-body\">
        <table style=\"width:100%;border-collapse:collapse;font-size:13px;color:#c8c4b8;\">
          <tr style=\"border-bottom:1px solid #2a2736;\"><th style=\"padding:8px;text-align:left;color:#d7b56d;\">势力</th><th style=\"padding:8px;text-align:left;color:#d7b56d;\">主要敌人</th><th style=\"padding:8px;text-align:left;color:#d7b56d;\">可能合作对象</th><th style=\"padding:8px;text-align:left;color:#d7b56d;\">核心矛盾</th></tr>
          <tr style=\"border-bottom:1px solid #1e1e2a;\"><td style=\"padding:8px;\">食名教团</td><td style=\"padding:8px;\">名庭、主角、反榜社</td><td style=\"padding:8px;\">潮贵族、系统贵族黑派</td><td style=\"padding:8px;\">身份是否可由适合者继承</td></tr>
          <tr style=\"border-bottom:1px solid #1e1e2a;\"><td style=\"padding:8px;\">系统教</td><td style=\"padding:8px;\">土著五庭、破榜者</td><td style=\"padding:8px;\">系统贵族、玩家公会</td><td style=\"padding:8px;\">系统记录是否高于边界法</td></tr>
          <tr style=\"border-bottom:1px solid #1e1e2a;\"><td style=\"padding:8px;\">饥饿教</td><td style=\"padding:8px;\">骨庭保守派、主角</td><td style=\"padding:8px;\">潮贵族、腐殖产业</td><td style=\"padding:8px;\">循环是否可神圣化为献祭</td></tr>
          <tr style=\"border-bottom:1px solid #1e1e2a;\"><td style=\"padding:8px;\">方舟教极端派</td><td style=\"padding:8px;\">留域派、主角伦理派</td><td style=\"padding:8px;\">活屋派、部分系统教</td><td style=\"padding:8px;\">文明保存是否允许筛掉弱者</td></tr>
          <tr style=\"border-bottom:1px solid #1e1e2a;\"><td style=\"padding:8px;\">破榜者</td><td style=\"padding:8px;\">系统教、食名教团</td><td style=\"padding:8px;\">名庭改革派、主角短期</td><td style=\"padding:8px;\">保护是否可变成操控</td></tr>
          <tr style=\"border-bottom:1px solid #1e1e2a;\"><td style=\"padding:8px;\">灰蜕激进派</td><td style=\"padding:8px;\">纯净派、系统教</td><td style=\"padding:8px;\">方舟派、晦染者</td><td style=\"padding:8px;\">适应是否等于放弃自我边界</td></tr>
          <tr><td style=\"padding:8px;\">潮贵族</td><td style=\"padding:8px;\">破债会、主角改革派</td><td style=\"padding:8px;\">系统贵族、商队</td><td style=\"padding:8px;\">灾难管理是否可成为世袭利益</td></tr>
        </table>
      </div></div>
      <h3>主角面对反派的正确写法</h3>
      <p>主角不能每次都"战胜反派观点"。更好的写法是：</p>
      <div class=\"truth-stack\">
        <div class=\"truth-layer\"><span class=\"truth-label\">第一步·承认</span><div class=\"truth-text\">承认对方看到的真实问题：食名教团看见了身份与责任的矛盾；系统教看见了系统效率与土著垄断问题；饥饿教看见了死亡循环的不可回避；方舟极端派看见了资源有限；破榜者看见了榜单暴露；灰蜕公社看见了纯净神话的虚伪；潮贵族看见了灾难管理需要成本。</div></div>
        <div class=\"truth-layer\"><span class=\"truth-label\">第二步·拒绝</span><div class=\"truth-text\">拒绝对方的唯一解：主角的立场不是"他们错了"，而是"你说的问题是真的，但你给出的答案正在吃人"。</div></div>
        <div class=\"truth-layer\"><span class=\"truth-label\">第三步·给出更难的路</span><div class=\"truth-text\">不食名但建立责任继承制度；不迷信系统但保留系统效率；不否认死亡循环但禁止活人燃料化；不否认登舟筛选但建立自愿私域与最低保障；不否认榜单危险但拒绝暗中操控；不否认晦染适应但保留停止变化的权利；不否认黑潮防灾成本但限制灾难资本垄断。</div></div>
      </div>
    `,
  },
  {
    id: 'antagonist-six-laws',
    num: 'A9',
    title: '反派阵营六律',
    sub: '真正的敌人不是说谎的人，而是站在废墟上说出半句真话的人',
    summary: '第一律：反派必须说出一部分真相。第二律：每个反派都代表一种生存策略。第三律：反派的罪不是错误，而是绝对化。第四律：反派越有用，越危险。第五律：主角不能靠否认战胜他们。第六律：终局不是消灭所有反派，而是防止他们代表的逻辑成为唯一法律。',
    content: `
      <p class=\"section-desc\">反派阵营的核心法则——世界观层面的约束，定义了无光域中"敌我关系"的底层逻辑。</p>
      <div class=\"grid-2\">
        <div class=\"card\"><h3 class=\"card-title\">第一律：反派必须说出一部分真相</h3><div class=\"card-body\">没有真相的反派只是怪物。无光域的反派应当能让一部分读者动摇。他们可怕不是因为全错，而是因为他们抓住了一条真实规律。</div></div>
        <div class=\"card\"><h3 class=\"card-title\">第二律：每个反派都代表一种生存策略</h3><div class=\"card-body\">替代、服从、循环、筛选、隐藏、归域、定价——它们都能让一些人活下去。这是它们吸引追随者的根基。</div></div>
        <div class=\"card\"><h3 class=\"card-title\">第三律：反派的罪不是错误，而是绝对化</h3><div class=\"card-body\">他们不是看不见问题，而是只允许一个答案。他们把部分的正确推到极致，然后要求所有人为此付出。</div></div>
        <div class=\"card\"><h3 class=\"card-title\">第四律：反派越有用，越危险</h3><div class=\"card-body\">真正危险的势力不是只会破坏的势力，而是能提供粮食、床位、保险、身份、秩序和希望的势力。有用性是它们最硬的盾牌。</div></div>
        <div class=\"card\"><h3 class=\"card-title\">第五律：主角不能靠否认战胜他们</h3><div class=\"card-body\">主角必须提出更难、更慢、更痛苦但更保留个体边界的第三路。简单地否认对方的正确性只会让主角显得幼稚。</div></div>
        <div class=\"card\"><h3 class=\"card-title\">第六律：终局不是消灭所有反派，而是防止他们代表的逻辑成为唯一法律</h3><div class=\"card-body\">食名、系统、饥饿、方舟、破榜、归域、灾难金融——这些逻辑都不会消失。文明只能限制它们，不能假装它们不存在。真正的敌人不是说谎的人，而是站在废墟上说出半句真话的人。</div></div>
      </div>
    `,
  },
  // ====== A10：赎籍会 ======
  {
    id: 'antagonist-redemption-society',
    num: 'A10-1',
    title: '赎籍会第一性：做账本减法的赖账生意',
    sub: '不欠债的人不该在这里。但谁到了无光域不欠债？',
    summary: '赎籍会不相信晦染能被治愈。他们认为晦染是债务——是神胎的采样权重，是你欠这个世界的债。赎籍会的生意不是"退染"，而是"把债从你的名上挪走，放到另一个名上"。嫁染实操链：找替身→借采样窗→倒债→结清。',
    content: `
      <p class="section-desc">赎籍会不相信晦染能被治愈。他们认为晦染不是病，是债务——是你欠神胎的"被采样权重"。真正的生意不是退染，是把债从你的名下挪走，放到另一个名下。</p>
      <div class="quote">晦染不是病，是债务。赎籍会不会治病——他们只在账本上改名字。</div>
      <div class="grid-2">
        <div class="card"><h3 class="card-title">不做的事</h3><div class="card-body">不治病、不净化、不退染、不降阶。不承诺你的晦染减少，只承诺"账本上那个数字不再是你的名字"。</div></div>
        <div class="card"><h3 class="card-title">做的事</h3><div class="card-body">找替身→借采样窗→倒债→结清。把高晦染者的债务索引，通过边界操作转嫁到另一个实体（染奴）身上。</div></div>
      </div>
      <div class="card danger"><div class="card-body"><span class="keyword">定义关键：</span>赎籍会做的事，在土著法律里叫"伪造边界记录"。在食名教团的教义里叫"偷名字"。在系统眼里叫"交易记录异常"。但在客户眼里，它叫"能多活一个潮岁"。</div></div>
    `,
  },
  {
    id: 'antagonist-redemption-engine',
    num: 'A10-2',
    title: '经济引擎：嫁染实操链',
    sub: '选一个快要被神胎吃掉的人，让另一个人替他——这就是全部生意',
    summary: '完整的嫁染实际操作链：选客户（高晦染、榜单高位、临染边缘）→ 物色替身（染奴）→ 通过骨刻/床签/名条建立覆盖边界 → 借黑潮窗/名庭空窗期实施转移 → 结算。残酷汇率：不是1:1转染，而是转嫁方留下"烙底"（嫁痕），接收方承担放大倍率的晦染。',
    content: `
      <p class="section-desc">嫁染不是"把晦染砍一半分给两个人"——嫁染是把一个人的债务索引整个挪到另一个人身上，但挪动本身会留下痕迹。</p>
      <h3>实操四步链</h3>
      <div class="truth-stack">
        <div class="truth-layer"><span class="truth-label">第一步·找替身</span><div class="truth-text">通过染奴池（债奴/掳口/养渗者/记忆屋遗民），筛选与客户"边界特征"高度重叠的人——相近的骨相、相近的名字音节、相近的床型、相近的居住时长。重叠度越高，嫁染越不容易被现实拒绝。</div></div>
        <div class="truth-layer"><span class="truth-label">第二步·借采样窗</span><div class="truth-text">等黑潮峰或名庭空窗期——现实承认阈值最低的时刻。这个窗口期极短，错过就等下一轮。</div></div>
        <div class="truth-layer"><span class="truth-label">第三步·倒债</span><div class="truth-text">通过骨刻伪造边界记录，通过床签建立假归属，通过名条替换索引。把"谁是那个高晦染者"的定义，从客户身上剥离到染奴身上。这一步必须在窗口期内完成。</div></div>
        <div class="truth-layer"><span class="truth-label">第四步·结算</span><div class="truth-text">结清——客户晦染等级不变，但世界认为那个等级对应的是另一个人。结算后留下烙底（嫁痕），是永远无法消除的索引残影，后续会被嫁痕猎人追踪。</div></div>
      </div>
      <h3>残酷汇率</h3>
      <div class="grid-2">
        <div class="card"><h3 class="card-title">接收方的放大倍率</h3><div class="card-body">染奴接收到的晦染不是原封不动转移——转移过程本身增加"搬运摩擦"，染奴承受的晦染 ≈ 客户原晦染 × 1.3~1.7倍。因为转移是对现实的一次强行改写，改写成本由接收方承担。</div></div>
        <div class="card"><h3 class="card-title">转嫁方的嫁痕（烙底）</h3><div class="card-body">晦染可以转移，但"被转移过"这件事本身成为一条新索引。嫁痕 = 你曾经欠债但你逃了。这条记录在名庭/系统底层永久保留，嫁痕猎人可据此追踪。客户虽然活下来了，但带着一条永远洗不掉的标记。</div></div>
      </div>
      <div class="quote">嫁染不是治病，是逃债。逃债会留下案底——嫁痕就是那个案底，被刻在世界的底层，比任何骨刻都深。</div>
    `,
  },
  {
    id: 'antagonist-redemption-slaves',
    num: 'A10-3',
    title: '染奴制度：替罪者的生产与再生产',
    sub: '赎籍会最大的成本不是技术，是活人',
    summary: '染奴是赎籍会经济链条中最关键也最消耗的资源。四类来源：债奴（欠潮债者以身为偿）、掳口（从灰色地带捕捉的失踪者）、养渗者（专门喂养到特定骨相/名音的活人）、记忆屋遗民（被食名教团替代后无处可去的人）。染奴一旦完成嫁染，会被现实标记为"那个高晦染者"——从此再也无法摆脱。',
    content: `
      <p class="section-desc">染奴是赎籍会经济链条中最关键也最消耗的资源——不是技术缺，是活人缺。每一次成功的嫁染，都消耗一个被现实永久标记为"高晦染者"的人。</p>
      <h3>染奴四来源</h3>
      <div class="grid-2">
        <div class="card"><h3 class="card-title">债奴</h3><div class="card-body"><span class="keyword">来源：</span>欠潮债/名债/床债无力偿还者。<br><span class="keyword">状态：</span>最"合法"的染奴来源。潮贵族的债务链条下游。赎籍会从潮贵族手中批量购买债契，债主转为染奴。<br><span class="keyword">占比：</span>约40%。</div></div>
        <div class="card"><h3 class="card-title">掳口</h3><div class="card-body"><span class="keyword">来源：</span>灰色地带失踪者。<br><span class="keyword">状态：</span>最黑的部分。聚落边缘、低活化庇护所、黑潮后的废墟——这些地方少一个人没人追究。赎籍会与掘潮队、拾荒团、灰色商队有长期的"人口分流"合作。<br><span class="keyword">占比：</span>约30%。</div></div>
        <div class="card"><h3 class="card-title">养渗者</h3><div class="card-body"><span class="keyword">来源：</span>赎籍会自己养的活人——专门喂养到特定需求：骨相接近某个客户、名音接近某个榜单高位者、能模仿特定人的床习惯。<br><span class="keyword">状态：</span>成本最高但匹配成功率最高。养一个合格的养渗者需要数月到数年。<br><span class="keyword">占比：</span>约20%。</div></div>
        <div class="card"><h3 class="card-title">记忆屋遗民</h3><div class="card-body"><span class="keyword">来源：</span>被食名教团替代后无处可去的人。<br><span class="keyword">状态：</span>最讽刺的来源——食名教团制造"失名者"，赎籍会把这些失名者回收为染奴。两个敌对势力在同一个链条上共生。<br><span class="keyword">占比：</span>约10%。</div></div>
      </div>
      <div class="quote">赎籍会最大的成本不是骨刻技术，不是床签材料，不是那个够窄的黑潮窗——是活人。每一次减法，都需要一个活人来承担那个被减掉的部分。</div>
    `,
  },
  {
    id: 'antagonist-redemption-brand',
    num: 'A10-4',
    title: '嫁痕与嫁痕猎人：逃债的案底可以被追踪',
    sub: '嫁染不是完美的犯罪——它会留下索引癌',
    summary: '嫁痕是嫁染操作在系统底层和名庭档案中留下的永久索引残影——一种"边界癌变"的记录。嫁痕猎人是专门训练来读取这些残影的人，分官面（受名庭/法庭雇佣）和暗面（卖给食名教团或潮贵族）两条线。嫁痕猎人是一个完全由赎籍会的存在催生出来的职业。',
    content: `
      <p class="section-desc">嫁痕是嫁染操作留下的永久索引残影。每一次成功的嫁染，都在系统底层留下一条"这里发生过一次身份替换"的记录。</p>
      <h3>嫁痕的生态位置</h3>
      <div class="card"><div class="card-body"><span class="keyword">嫁痕的本质：</span>一次边界改写留下的不可逆沉积。嫁染没有消灭债务，只是把债务挪了位置——挪动本身在底层留下了一条新索引。<br><span class="keyword">嫁痕的内容：</span>被替换者的原始身份片段 + 替换操作的时间/地点/媒介 + 操作者的晦染残影。<br><span class="keyword">嫁痕的位置：</span>名庭深度档案、系统交易记录异常层、骨刻残留边缘。<br><span class="keyword">嫁痕能否消除：</span>理论上不能——它是底层沉积，清除它等于清除一段现实历史，在无光域中几乎不可能。<br><span class="keyword">嫁痕的寿命：</span>随黑潮脉冲衰减但不消失。每一次黑潮会冲刷底层沉积，但嫁痕像"界碑"一样留下比普通沉积更硬的残余。</div></div>
      <h3>嫁痕猎人</h3>
      <div class="grid-2">
        <div class="card"><h3 class="card-title">官面嫁痕猎人</h3><div class="card-body">受名庭/法庭/系统管理部门雇佣。职责：追踪非法嫁染操作、恢复被篡改的索引、为名庭提供"某人是否被替换"的鉴定。合法、有序、流程化。但官面猎人受限于制度和资源，往往只能追踪最明显的嫁痕。</div></div>
        <div class="card"><h3 class="card-title">暗面嫁痕猎人</h3><div class="card-body">独立或受雇于食名教团/潮贵族/破榜者。职责：追踪嫁痕来寻找"可以被替换或被收割的人"——嫁痕意味着这个人曾经逃过一次债，现在他更脆弱、更易被再次操作。暗面猎人把嫁痕卖给食名教团（告诉他"这个人名上有缝"）或卖给潮贵族（告诉"这个人的抵押品有案底"）。</div></div>
      </div>
      <div class="quote">每一笔嫁染，都在世界的存档里刻下了一条不可删除的记录。嫁痕猎人就是读这些记录的人——他们不判断对错，他们只追踪痕迹。赎籍会制造了需求，嫁痕猎人满足了需求。没有赎籍会，就没有嫁痕猎人。</div>
    `,
  },
  {
    id: 'antagonist-redemption-mirror-war',
    num: 'A10-5',
    title: '镜像战争：赎籍会 vs 食名教团',
    sub: '他们争的不是地盘，是同一个名字的索引权',
    summary: '赎籍会和食名教团看似完全不同——一个做减法，一个做加法。但在底层逻辑上，它们是同一个操作的镜像：赎籍会找替身把名上的债卸掉，食名教团找替身把名本身拿走。两者争夺的是同一条名条的"索引锚点"归属。',
    content: `
      <p class="section-desc">赎籍会与食名教团在底层逻辑上是同一个操作的镜像——两者都在操作"名"与"债"的对应关系，只是方向相反。</p>
      <div class="card"><div class="card-body">
        <table style="width:100%;border-collapse:collapse;font-size:13px;color:#c8c4b8;">
          <tr style="border-bottom:1px solid #2a2736;"><th style="padding:8px;text-align:left;color:#d7b56d;">维度</th><th style="padding:8px;text-align:left;color:#d7b56d;">赎籍会</th><th style="padding:8px;text-align:left;color:#d7b56d;">食名教团</th></tr>
          <tr style="border-bottom:1px solid #1e1e2a;"><td style="padding:8px;">操作方向</td><td style="padding:8px;">减法——债从名上卸掉</td><td style="padding:8px;">加法——名本身被拿走</td></tr>
          <tr style="border-bottom:1px solid #1e1e2a;"><td style="padding:8px;">目标</td><td style="padding:8px;">保住名、丢掉债</td><td style="padding:8px;">保住债（名=位置）、拿到名</td></tr>
          <tr style="border-bottom:1px solid #1e1e2a;"><td style="padding:8px;">对替身的态度</td><td style="padding:8px;">替身=染奴，用完即弃</td><td style="padding:8px;">替身=圣名者，继承身份</td></tr>
          <tr style="border-bottom:1px solid #1e1e2a;"><td style="padding:8px;">底层工具</td><td style="padding:8px;">骨刻/床签/伪名条</td><td style="padding:8px;">借名/代位/归来式</td></tr>
          <tr style="border-bottom:1px solid #1e1e2a;"><td style="padding:8px;">最大风险</td><td style="padding:8px;">嫁痕暴露 + 染奴反噬</td><td style="padding:8px;">客户沉默（拒绝承认）</td></tr>
          <tr style="border-bottom:1px solid #1e1e2a;"><td style="padding:8px;">对客户的承诺</td><td style="padding:8px;">你活下来，但留案底</td><td style="padding:8px;">你被替代，但你的位置有人继承</td></tr>
          <tr><td style="padding:8px;">对系统的关系</td><td style="padding:8px;">伪记录对抗系统</td><td style="padding:8px;">利用系统记录漏洞</td></tr>
        </table>
      </div></div>
      <h3>名册争夺战（C线）中的镜像关系</h3>
      <div class="card"><div class="card-body">在C线推演中，赎籍会与食名教团争夺「灰三十七」这一条名条——赎籍会要把债从名上卸掉（嫁给染奴替三十七），食名教团要把名本身接管（由圣名者「另一个灰三十七」继承）。两支势力在同一张名册上做相反的运算。谁先完成操作，谁就锁定了这条名的归属——另一方的操作将因为"名已不属于原主"而自动失效。</div></div>
      <div class="quote">赎籍会和食名教团不是两种敌人，是同一条裂缝的两面。一个说"你的债可以换成别人来背"，一个说"你的名字可以换成别人来活"。把这两句话放在一起，你就得到了无光域最核心的恐怖：你和你欠的债、你和你占的名，从来就不是锁定的。</div>
    `,
  },
  {
    id: 'antagonist-redemption-structure',
    num: 'A10-6',
    title: '内部结构：无总坛、低共识、高流动',
    sub: '没有大本营才是最安全的大本营',
    summary: '赎籍会没有总坛，没有总部建筑，没有公开领袖。组织以"账房"为最小运作单位，每个账房独立运作、自付盈亏。账房之间通过名庭灰账、潮贵族债契、嫁痕猎人中转站发生联系，不通过上级指令。这使赎籍会极难被一锅端。',
    content: `
      <p class="section-desc">赎籍会没有总坛——不是因为胆小，而是因为"一个做身份替换生意的组织，不该有一个可以被定位的总部"。</p>
      <h3>组织原则</h3>
      <div class="grid-2">
        <div class="card"><h3 class="card-title">无总坛</h3><div class="card-body">赎籍会没有总部建筑，没有公开领袖，没有固定集会。组织以"账房"为最小运作单位，每个账房独立运作、自付盈亏。账房之间的联系通过名庭灰账、潮贵族债契、嫁痕猎人中转站，不通过上级指令。</div></div>
        <div class="card"><h3 class="card-title">低共识</h3><div class="card-body">没有统一教义，没有标准流程。不同账房的实操手法差异极大，部分账房只做债奴转染，部分专注养渗者培育。低共识的好处是：一个账房被端，其他账房继续运转，信息泄露有限。</div></div>
        <div class="card"><h3 class="card-title">高流动</h3><div class="card-body">赎籍师频繁更换庇护所、更换名号、更换记账方式。染奴被频繁转移。一个成熟的账房可能每隔数月废弃当前据点，转移到新的灰醒层区域。</div></div>
        <div class="card"><h3 class="card-title">无阶层晋升</h3><div class="card-body">没有"升职"——只有"分账大"和"分账小"的区别。一个赎籍师可以带一个养渗人另起炉灶，和原账房形成合作而非竞争关系。这种结构让赎籍会有极强的抗打击能力，也有极强的扩张惰性——它不会主动吞并其他势力，但也极难被根除。</div></div>
      </div>
      <h3>内部角色分级</h3>
      <div class="truth-stack">
        <div class="truth-layer"><span class="truth-label">账房</span><div class="truth-text">最小经营单位。拥有骨刻资源、床签材料、名庭关系网、染奴池。一个账房通常由1-2名赎籍师主导。</div></div>
        <div class="truth-layer"><span class="truth-label">赎籍师</span><div class="truth-text">核心操作者。掌握嫁染实操技术——骨刻伪造、床签嫁接、名条替换、窗口选择。每个赎籍师的风格差异极大。</div></div>
        <div class="truth-layer"><span class="truth-label">养渗人</span><div class="truth-text">负责培育染奴——喂养、训练、调整骨相与名音。养渗人往往曾是染奴本身或出身灰蜕公社。</div></div>
        <div class="truth-layer"><span class="truth-label">追奴/催债</span><div class="truth-text">负责染奴押运、逃跑回收、催缴欠债。最外层的武装力量。</div></div>
      </div>
      <div class="quote">赎籍会没有总坛，没有教主，没有圣典。它的"总部"是每个账房里那张堆满名条和骨刻工具的桌子。端掉一个账房，另一张桌子会在别处重新摆起来。</div>
    `,
  },
  {
    id: 'antagonist-redemption-philosophy',
    num: 'A10-7',
    title: '哲学内核：赎籍会是神胎的反讽镜像',
    sub: '神胎吃人，赎籍会帮人逃吃——但逃吃的人最终变得更适合被吃',
    summary: '赎籍会的存在对神胎来说既是损失也是收益：损失是它帮猎物逃掉了一次收割，收益是它帮神胎完成了筛选——染奴替代高晦染者后被神胎吃掉，逃脱的客户带着嫁痕变得更容易被追踪、更容易被第二次收割。赎籍会的本质不是反神胎势力，而是神胎免疫系统里一个延迟回收的环节。',
    content: `
      <p class="section-desc">赎籍会不是神胎的敌人，而是神胎免疫系统的寄生环节——它在帮部分猎物逃跑的同时，把这些猎物标记得更清楚，方便神胎在下一轮精准回收。</p>
      <div class="card danger"><div class="card-body"><span class="keyword">核心反讽：</span>赎籍会帮人"逃吃"——但逃吃的人最终变得更适合被吃。因为嫁痕让他们在系统底层被标记，下一次黑潮来时，他们是优先被定位的目标。赎籍会延长了客户的寿命，但降低了客户最终逃脱的可能性。</div></div>
      <h3>三层讽刺</h3>
      <div class="grid-2">
        <div class="card"><h3 class="card-title">第一层：赎籍会需要神胎存在</h3><div class="card-body">没有晦染就没有债务，没有债务就没有生意。赎籍会不反对神胎——它反对的是"债务不能被转移"。神胎是赎籍会的上游生态。赎籍会的理想世界不是神胎消失，而是神胎继续吃人但允许逃票。</div></div>
        <div class="card"><h3 class="card-title">第二层：赎籍会是食名教团的镜像互补</h3><div class="card-body">食名教团创造"失名者"，赎籍会回收失名者为染奴。赎籍会创造"嫁痕者"，嫁痕猎人追踪嫁痕卖给食名教团。两个敌对势力互相创造原料。它们打得很厉害，但它们的生态链是嵌套的。</div></div>
        <div class="card" style="grid-column:1/-1"><h3 class="card-title">第三层：赎籍会替神胎完成了筛选</h3><div class="card-body">神胎需要的是"最有营养的人格"。赎籍会筛选出什么样的客户能付得起嫁染费用——往往是最有资源、最有能力、榜单最高的穿越者。这些人的"营养密度"最高。赎籍会帮他们逃掉一次，但逃掉之后他们带着嫁痕变得更可追踪、更脆弱、下一次更容易被收割。赎籍会实际上是神胎的延迟回收系统——让猎物多长一段时间、多攒一些"营养"，再定向回收。真正逃掉的（彻底离开无光域的），不是赎籍会的客户。</div></div>
      </div>
      <div class="quote">赎籍会不是反神胎的势力。它是神胎免疫系统里一个延迟回收的环节——帮猎物多活一季，再精准标记回收。赎籍会最大的谎言不是它的伪证，而是它告诉客户"你逃掉了"。</div>
    `,
  },
  {
    id: 'antagonist-redemption-firewall',
    num: 'A10-8',
    title: '防火墙自检：赎籍会与反派六律',
    sub: '它能通过"每个反派都说出一部分真相"这道检验吗？',
    summary: '赎籍会是否符合无光域反派六律的检验。第一律：确实说出一部分真相——"晦染是债务"在无光域的运作逻辑下成立。第二律：代表一种生存策略——替罪。第三律：绝对化——不是替罪可被允许，而是"一切都可以被替"。第四律：很有用——它确实能让人活下来。第五律：主角不能靠否认战胜它——主角必须回答"如果一个人的债务必须有人背，凭什么不能转移给更该背的人"。第六律：终局不是消灭——赎籍会的逻辑不会消失，方舟也一样面临"谁的债谁背"的问题。',
    content: `
      <p class="section-desc">赎籍会是否符合反派六律的检验——如果有一条不满足，这个势力就是失败的。</p>
      <div class="truth-stack">
        <div class="truth-layer"><span class="truth-label">第一律：反派必须说出一部分真相</span><div class="truth-text">通过。在无光域中，晦染确实可以理解为债务——是神胎的采样权重。而且"债务可以被转移给别人背"确实是某些现实经济体系（债务继承、资产划转）的基本操作。赎籍会抓住了一条真实的经济逻辑。</div></div>
        <div class="truth-layer"><span class="truth-label">第二律：每个反派都代表一种生存策略</span><div class="truth-text">通过。替罪——把一个人的不幸转移给另一个人来承受。这套逻辑在任何有资源稀缺的社会中都存在。赎籍会让生存变得不公平，但它确实让有些人活了下来。</div></div>
        <div class="truth-layer"><span class="truth-label">第三律：反派的罪不是错误，而是绝对化</span><div class="truth-text">通过。赎籍会的绝对化不是"替罪可以被允许"，而是"一切都可以被替"。当一条名条上的债可以被替换，接下来就是名字、身份、梦、床——最终没有什么不可替换。赎籍会的危险不在于它做假账，而在于它教人相信"任何东西都可以从你身上剥离"。</div></div>
        <div class="truth-layer"><span class="truth-label">第四律：反派越有用，越危险</span><div class="truth-text">通过。赎籍会真的能让人活下去。一个临染边缘的高晦染者，如果没有赎籍会，下一轮黑潮大概率被收割。赎籍会给了一条活路——有代价、有嫁痕、有染奴替他死，但确实是一条活路。</div></div>
        <div class="truth-layer"><span class="truth-label">第五律：主角不能靠否认战胜他们</span><div class="truth-text">通过。主角无法简单地说"替罪是错的"。因为方舟本身就是一个大型的"谁上船谁留下"的筛选——本质上也在决定谁值得被救。赎籍会会质问主角：你说替罪不对，但你的方舟床位有限，那谁替你留在无光域等死？主角必须回答"替罪和筛选不是同一件事"，而且必须拿出一个不是"假装公平"的方案。</div></div>
        <div class="truth-layer"><span class="truth-label">第六律：终局不是消灭所有反派</span><div class="truth-text">通过。赎籍会的逻辑不会因为方舟出走或神胎分娩而消失。"能不能把一些东西转给别人扛"是人类在任何环境中都会面对的问题。方舟内部一样会出现"谁的生存资源可以转给更需要的人"的争论。赎籍会代表的替罪逻辑是文明永远需要面对的问题，不是在终局被一刀砍死的怪物。</div></div>
      </div>
      <div class="quote">赎籍会不是这本书里最可恶的势力。它甚至不是最危险的。但它是最难反驳的——因为它做的事，方舟也在做：决定谁活下去，谁替别人死。</div>
    `,
  },
];
