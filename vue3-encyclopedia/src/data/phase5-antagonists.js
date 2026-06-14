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
      <h3>七大反派阵营总谱系</h3>
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
    title: '灰蜕公社激进派',
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
      <p class=\"section-desc\">七大阵营之间的冲突关系——没有绝对的敌人，只有重叠的矛盾。</p>
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
]