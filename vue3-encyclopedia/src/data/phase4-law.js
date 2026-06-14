// 无光域·法律与治理体系（Phase 4.3 深化）
// 任务书 4.3 回复：法律不是道德审判，而是防止现实继续长歪的公共技术

export const phase4Law = [
  {
    id: 'law-first-principle',
    num: 'L1',
    title: '法律第一性原则',
    sub: '法不是道德本身，而是公共防灾协议',
    summary: '无光域的法律不能照搬普通世界的"犯罪—审判—惩罚"模型。违法行为不只损害他人利益，更可能直接破坏现实边界、制造晦诡、污染庇护所、扰乱死亡分流。法的首要目标不是惩罚坏人，而是让一件事正确结束，让边界重新闭合。法庭不只是判案机构，更是现实校准机构。',
    content: `
      <p class="section-desc">无光域法律体系的第一性定义：法不是道德本身，而是公共防灾协议。它的首要目标不是惩罚坏人，而是让一件事正确结束，让一个边界重新闭合，让现实不再继续错误解释。</p>
      <div class="quote-center">普通世界的法律判断"谁有罪"。<br>无光域的法律首先判断"这件事有没有结束"。</div>
      <h3>三条基本原则</h3>
      <div class="grid-3">
        <div class="card"><h3 class="card-title">先稳边界，再判善恶</h3><div class="card-body">案件若处理不及时，可能从社会纠纷升级为现实异常——床位纠纷会变成替睡者、遗产纠纷会变成旧主回归、身份纠纷会变成食名案件。法庭第一步不是审问动机，而是封门、封床、封名、封物、禁传、隔离梦、稳定名册。先让现实停止继续扩散错误，再处理责任归属。</div></div>
        <div class="card"><h3 class="card-title">法律处理的是"关系状态"</h3><div class="card-body">普通法律处理行为后果，无光域法律处理关系状态。必须问的不只是谁偷了东西、谁杀了人，而是：这件物品现在属于谁？旧主是否断开？死者是否死干净？名字是否还指向本人？床是否还承认睡者？门是否错误放行过？梦是否仍在继续？系统记录是否与边界承认一致？</div></div>
        <div class="card"><h3 class="card-title">判决必须可执行为仪式或记录</h3><div class="card-body">判决不能只写在纸上，必须能落实为现实校准动作——名册更正、门禁重写、床位封存、货契重订、旧主断契、梦葬补办、尸体分流、骨刻封文、频道注销、庇护所产权复验。判决如果不能改变现实状态，就不是完整判决。</div></div>
      </div>
      <div class="quote">无光域的法庭不只是判案机构，而是现实校准机构。法官、誊名师、归床人、守门人、梦医、骨匠、井纹师、箱契师共同承担的，不只是社会秩序，而是现实稳定。</div>
    `,
  },
  {
    id: 'law-three-evidence',
    num: 'L2',
    title: '三证原则',
    sub: '系统记录、物理痕迹、边界承认——三证一致才能定案',
    summary: '所有重大案件必须校验三证。系统记录（任务日志、交易栏、死亡提示、排行榜、频道记录、背包记录）快速但不完整。物理痕迹（尸体、血迹、脚印、床痕、门锁、箱签、灯纹、仓储变化）直观但可能被晦诡补证。边界承认（门是否放行、床是否回温、箱是否认主、名字是否稳定、庇护所是否排斥）最深但成本最高。',
    content: `
      <p class="section-desc">此前玩家—土著冲突中已提出"三证原则"，在4.3法律体系中应成为所有混合法庭的基础。</p>
      <div class="quote-center">三证：系统记录、物理痕迹、边界承认。</div>
      <div class="grid-3">
        <div class="card"><h3 class="card-title">系统记录</h3><div class="card-body">包括任务日志、交易栏、死亡提示、排行榜、频道记录、庇护所面板、组队记录、背包记录、地图标记、权限变更。系统记录快速、清晰，但不完整——它只记录系统能理解的事件，不记录系统无法编码的边界关系。</div></div>
        <div class="card"><h3 class="card-title">物理痕迹</h3><div class="card-body">包括尸体、血迹、脚印、床痕、门锁、箱签、灯纹、物品残留、骨刻痕迹、仓储变化、潮后沉积、庇护所损伤。物理痕迹直观，但可能被晦诡补证、黑潮重排、梦污染伪造。物理痕迹的"真实"本身需要被验证。</div></div>
        <div class="card"><h3 class="card-title">边界承认</h3><div class="card-body">包括门是否放行、床是否回温、箱是否认主、名字是否稳定、梦是否继续、死者是否封名、旧主是否断开、庇护所是否排斥、井是否可信回应、碗位是否成立。边界承认最深，但成本最高，也最容易被专业阶层垄断。</div></div>
      </div>
      <h3>三证判案规则</h3>
      <div class="truth-stack">
        <div class="truth-layer"><span class="truth-label">三证一致</span><div class="truth-text">可定案。</div></div>
        <div class="truth-layer"><span class="truth-label">两证一致，一证缺失</span><div class="truth-text">可临时定案，需补证。</div></div>
        <div class="truth-layer"><span class="truth-label">两证一致，一证冲突</span><div class="truth-text">定为高风险案件，需隔离。</div></div>
        <div class="truth-layer"><span class="truth-label">三证互相冲突</span><div class="truth-text">定为异常案件，进入封存审查。</div></div>
        <div class="truth-layer"><span class="truth-label">只有系统记录</span><div class="truth-text">只能作为线索，不能定案。</div></div>
        <div class="truth-layer"><span class="truth-label">只有物理痕迹</span><div class="truth-text">需防补证污染。</div></div>
        <div class="truth-layer"><span class="truth-label">只有边界承认</span><div class="truth-text">需防土著专业者滥权。</div></div>
      </div>
    `,
  },
  {
    id: 'law-six-courts',
    num: 'L3',
    title: '六庭一讯制度',
    sub: '传统六庭处理土著边界，讯庭处理玩家信息边界',
    summary: '传统六庭：门庭（内外进出）、名庭（名字身份）、眠庭（梦床睡眠）、骨庭（尸体葬制）、箱庭（物品归属）、井庭（水源井权）。候胎纪新增讯庭，处理系统信息、频道传播、榜单身份、公告污染与玩家数据纠纷。六庭一讯共同构成无光域完整的法庭体系。',
    content: `
      <p class="section-desc">原任务书提出五庭（门庭、名庭、眠庭、骨庭、箱庭），结合原百科中的井庭以及玩家系统问题，正式定为传统六庭加讯庭，即"六庭一讯"。</p>
      <div class="grid-2">
        <div class="card"><h3 class="card-title">门庭</h3><div class="card-body">处理一切与内外、进出、门路、庇护所入口、开门事故有关的案件。核心罪名：乱门罪、认外罪、饱门再启罪、私门罪、弃门罪。判决方式：门框封文、门绳更换、门税赔偿、守门劳役、旧门火净、临时失门惩戒。门庭不关心你是否善良，它只问：你有没有让外面获得不该有的进入资格？</div></div>
        <div class="card"><h3 class="card-title">名庭</h3><div class="card-body">处理名字、身份、名册、门牌、榜名、食名、真名、死名、旧名、借名相关案件。核心罪名：乱名罪、借名不还罪、死名扰眠罪、食名罪、伪榜名罪。判决：名净、真名称量、临时封名、失声惩戒、榜名封存、无名流放。名庭不问你的名字是什么，它问：这个名字现在还能不能正确找到你？</div></div>
        <div class="card"><h3 class="card-title">眠庭</h3><div class="card-body">处理梦、床、睡眠、替睡、梦债、梦污染、梦葬、不可醒梦等案件。核心罪名：乱床罪、替睡罪、乱梦罪、梦债欺诈罪、初梦贩卖罪。判决：封床钉、刮旧梦、梦净、梦葬补办、梦债减免、强制睡眠隔离。眠庭不问你有没有睡，它问：你醒来后，还是不是被床承认的那个人？</div></div>
        <div class="card"><h3 class="card-title">骨庭</h3><div class="card-body">处理死亡、尸体、骨材、葬制、遗骸利用、骨播葬、封名骨、骨刻污染。核心罪名：乱尸罪、私骨罪、错葬罪、骨刻伪证罪、骨粮污染罪。判决：骨播劳役、尸债赔偿、封名骨补办、缄封葬、骨材销毁。骨庭不问死人有没有价值，它问：他死后，被分流到了正确的位置没有？</div></div>
        <div class="card"><h3 class="card-title">箱庭</h3><div class="card-body">处理物品归属、仓储、旧主断开、箱签、货契、潮后资源、遗物分配。核心罪名：乱箱罪、未断主交易罪、旧签回归隐瞒罪、潮物私售罪、禁物入仓罪。判决：货契重写、旧主断契、箱签注销、归箱礼、仓储隔离。箱庭不问你拿到了什么，它问：这东西现在是否愿意安全地属于你？</div></div>
        <div class="card"><h3 class="card-title">井庭</h3><div class="card-body">处理水源、井权、回声污染、井纹标记、水路、井葬、井下回应。核心罪名：乱井罪、伪井纹罪、回声传播罪、黑水照童罪、水权欺诈罪。判决：封井、井纹重刻、水源净化劳役、禁止取水、井葬补办。井庭不问井里有没有水，它问：这口井是否仍然只是井？</div></div>
      </div>
      <h3>讯庭——候胎纪新增法庭</h3>
      <p class="section-desc">玩家到来后出现了土著传统六庭无法完全处理的新型公共边界：系统公告、区域频道、排行榜、任务日志、交易栏、攻略传播、截图证据、死者频道发言、系统昵称等。</p>
      <div class="card"><h3 class="card-title">讯庭职责与罪名</h3><div class="card-body">处理频道遗言、攻略成诡、错栏公告传播、排行榜残留、榜名侵权、玩家ID伪造、系统交易争议、任务反噬、频道谣言。核心罪名包括乱讯罪（传播未确认信息）、伪讯罪（伪造系统记录）、死讯扰亡罪（回复死者频道发言）、攻略成诡罪、榜讯滥用罪。判决方式：频道禁言、错误攻略注销、公告重写、榜名封存、图鉴封页、公开更正。讯庭不问你说的是不是"消息"，它问：这条消息被多少人相信后，会不会开始长出身体？</div></div>
    `,
  },
  {
    id: 'law-trial-process',
    num: 'L4',
    title: '审判流程',
    sub: '先分流，再审理——每一步都是防止现实继续恶化的校准',
    summary: '七步审判流程：止损封存（封物封床封门封名封梦禁传）→定庭（按核心边界归类，复杂案件多庭联审）→取三证（系统记录、物理痕迹、边界承认）→判断状态（已结束/未结束/错误结束/正在成形为异常）→临时裁定（若有公共污染风险）→责任判定（故意/鲁莽/无知/传播/维护五类责任）→校准与赔偿（必须同时包括现实校准、受害补偿、公共边界修复）。',
    content: `
      <p class="section-desc">无光域案件必须先分流，再审理。每一步的核心不是寻找"罪犯"，而是防止现实继续恶化。</p>
      <div class="truth-stack">
        <div class="truth-layer"><span class="truth-label">第一步·止损封存</span><div class="truth-text">任何案件进入法庭前，先执行封物、封床、封门、封名、封梦、禁传、隔离涉事人、停止交易、暂停系统转发、禁止频道讨论。目的不是惩罚，而是防止案件继续成形。</div></div>
        <div class="truth-layer"><span class="truth-label">第二步·定庭</span><div class="truth-text">根据案件主边界归类：门进出→门庭，名字身份→名庭，梦床睡眠→眠庭，尸体骨材→骨庭，交易仓储→箱庭，水井回声→井庭，系统频道→讯庭。复杂案件可多庭联审。</div></div>
        <div class="truth-layer"><span class="truth-label">第三步·取三证</span><div class="truth-text">系统记录、物理痕迹、边界承认。若涉及玩家必须取系统证，若涉及晦民必须取边界证，若涉及晦诡必须验证物理证是否为补证。</div></div>
        <div class="truth-layer"><span class="truth-label">第四步·判断状态</span><div class="truth-text">法庭要先判断事件状态：已结束？未结束？错误结束？被伪造结束？多层结束不一致？正在成形为异常？已经进入公共现实？这个步骤比定罪更重要。</div></div>
        <div class="truth-layer"><span class="truth-label">第五步·临时裁定</span><div class="truth-text">若案件存在公共污染风险，法庭可先做临时裁定：暂封名、暂封床、暂停交易、暂停频道、暂停门路、临时隔离庇护所、临时冻结排行榜称号。临时裁定不等于有罪，只是防止现实继续恶化。</div></div>
        <div class="truth-layer"><span class="truth-label">第六步·责任判定</span><div class="truth-text">责任分为五类：故意责任（明知风险仍实施）、重大鲁莽责任（本应了解但未了解）、无知责任（新玩家不知规则但造成损害）、传播责任（非直接行为人但扩大污染）、维护责任（管理者未及时维护公共边界）。</div></div>
        <div class="truth-layer"><span class="truth-label">第七步·校准与赔偿</span><div class="truth-text">判决必须同时包括现实校准、受害补偿、公共边界修复、记录注销或更正、未来防范条款。只罚物资不处理边界的判决属于无效判决。</div></div>
      </div>
      <div class="quote">无光域的法庭不是为了证明谁更善良，而是为了让门重新知道谁在里面，让床重新知道谁该醒来，让名字重新指向正确的人，让死者终于不必再被错误地召回。</div>
    `,
  },
  {
    id: 'law-penalties',
    num: 'L5',
    title: '刑罚与校准措施',
    sub: '无光域的刑罚以边界修复为核心——失权比坐牢更有效',
    summary: '七类刑罚与校准措施：物资赔偿（净化水、骨麦、晦晶、药材）、劳役（守门、骨播、水源净化、潮后修墙）、失权（禁止开门/交易/租床/发言/进井区——比坐牢更符合无光域逻辑）、封存（封物封床封名封梦封门——暂停现实继续解释）、净化（水净/火净/骨净/静净/梦净/名净/屋净/井净）、流放（门外流放/失名流放/无床流放/禁市流放）、极刑（极少使用，必须配套封名、梦葬、尸体处理）。',
    content: `
      <p class="section-desc">无光域刑罚不应只写死刑、监禁、罚款。更有特色的处罚应围绕边界修复展开。</p>
      <div class="grid-2">
        <div class="card"><h3 class="card-title">物资赔偿</h3><div class="card-body">适用于低危经济纠纷。包括净化水、骨麦、晦晶、药材、建材、规则尘、床位费用、净化费用。</div></div>
        <div class="card"><h3 class="card-title">劳役</h3><div class="card-body">适用于造成公共负担者。包括守门劳役、骨播劳役、水源净化劳役、腐殖池劳役、潮后修墙、静净抄录、错误攻略注销、黑潮后尸体分流。</div></div>
        <div class="card"><h3 class="card-title">失权</h3><div class="card-body">剥夺某些边界资格：禁止开门、禁止交易、禁止租床、禁止持有旧物、禁止参与名契、禁止频道发言、禁止进入井区、禁止担任守夜人。失权比坐牢更符合无光域逻辑——失去参与边界的能力就是最有效的惩罚。</div></div>
        <div class="card"><h3 class="card-title">封存</h3><div class="card-body">适用于涉事人或物不宜立刻处置。包括封物、封床、封名、封梦、封门、封榜名、封频道记录、封庇护所房间。封存不是惩罚，而是暂停现实继续解释。</div></div>
        <div class="card"><h3 class="card-title">净化</h3><div class="card-body">包括水净、火净、骨净、静净、梦净、名净、屋净、井净。净化费用通常由责任人承担。从低到高的净化成本决定了不同阶层能承受的"纠错能力"。</div></div>
        <div class="card"><h3 class="card-title">流放</h3><div class="card-body">无光域流放不是赶走那么简单：门外流放、失名流放、无床流放、禁市流放、深层劳役流放、黑潮后拾荒流放。其中"无床流放"极重——失去安全睡眠权几乎等于慢性死亡。</div></div>
      </div>
      <h3>极刑</h3>
      <p>极刑很少使用，因为死亡处理成本高。仅在主动制造大规模晦诡、成熟食名者不可逆、故意开饱门导致聚落灾害、贩卖儿童初梦、多次破坏公共死亡分流时使用。极刑必须同时配套封名、梦葬、尸体处理——否则处死罪犯反而可能制造更大异常。</p>
    `,
  },
  {
    id: 'law-death-confirmation',
    num: 'L6',
    title: '死亡确认制度',
    sub: '死亡不能只靠系统提示——六项确认一致才能宣布清死',
    summary: '死亡是无光域法律最核心的制度之一。死亡不能只靠系统提示，需经过六项确认：肉体状态、系统状态、名字状态、梦境状态、床位状态、遗物归属状态。若六项不一致，不能宣布清死。不同死亡类型（清死/缺死/错死/活死/梦死/名死/床死）对应不同法律处理后果。死亡未确认前不得分配遗物、转让床位、呼唤真名、出售梦囊。',
    content: `
      <p class="section-desc">死亡确认是无光域法律最核心的制度之一。因为无光域的死亡分层——系统死亡不等于名、梦、床、尸体、遗物关系全部断开。</p>
      <div class="quote-center">死亡需经过六项确认：<br>肉体状态、系统状态、名字状态、梦境状态、床位状态、遗物归属状态。<br>若六项不一致，不能宣布清死。</div>
      <h3>死亡类型法律后果</h3>
      <div class="truth-stack">
        <div class="truth-layer"><span class="truth-label">清死</span><div class="truth-text">可继承、可葬、可分配遗物。</div></div>
        <div class="truth-layer"><span class="truth-label">缺死</span><div class="truth-text">不得立即继承，需等待或缄封。</div></div>
        <div class="truth-layer"><span class="truth-label">错死</span><div class="truth-text">系统证无效，进入异常审查。</div></div>
        <div class="truth-layer"><span class="truth-label">活死</span><div class="truth-text">隔离，确认哪些边界仍承认。</div></div>
        <div class="truth-layer"><span class="truth-label">梦死</span><div class="truth-text">眠庭介入，不得只按活人处理。</div></div>
        <div class="truth-layer"><span class="truth-label">名死</span><div class="truth-text">名庭介入，防替代。</div></div>
        <div class="truth-layer"><span class="truth-label">床死</span><div class="truth-text">眠庭与名庭联审。</div></div>
      </div>
      <h3>死亡未确认前的法律禁止</h3>
      <p>在死亡未确认前，不得：分配遗物、转让床位、注销门牌、呼唤死者真名、出售其梦囊、使用其骨材、改写其庇护所权限、将其从队伍责任中删除、在频道公开复述遗言。这些禁止的目的是防止死亡关系未断导致的二次污染。</p>
    `,
  },
  {
    id: 'law-shelter-property',
    num: 'L7',
    title: '庇护所产权制度',
    sub: '占有权、居住权、内属权——三权确认才能完成产权转移',
    summary: '庇护所产权必须确认三权：占有权（系统面板主人）、居住权（门床箱墙承认）、内属权（庇护所是否将某人视为自身一部分）。产权转移必须处理三权，不可只改系统主人。庇护所继承必须经过死亡确认、床位状态确认、庇护所人格检查等八步流程。庇护所租赁必须写明租客床位、门禁权限、梦污染责任、死亡处理责任。',
    content: `
      <p class="section-desc">庇护所产权是玩家到来后最重要的新法律领域。系统面板显示的"主人"并不等于庇护所实际承认的主人。</p>
      <h3>三权确认</h3>
      <div class="grid-3">
        <div class="card"><h3 class="card-title">占有权</h3><div class="card-body">系统面板主人。谁的名字写在庇护所面板上。这是最容易被篡改的权——系统记录可以被任务、交易、排行榜、权限转移修改。</div></div>
        <div class="card"><h3 class="card-title">居住权</h3><div class="card-body">门、床、箱、墙是否承认此人。门是否放行、床是否回温、箱是否认主。居住权比占有权更深——庇护所可以拒绝面板主人进入，也可以接受无面板权限者。</div></div>
        <div class="card"><h3 class="card-title">内属权</h3><div class="card-body">庇护所是否将某人视为自身一部分。这是最深层的产权——已活化的庇护所可能主动排斥新主，也可能拒绝交出旧主遗物。产权转移必须处理三权，不可只改系统主人。</div></div>
      </div>
      <h3>庇护所继承八步流程</h3>
      <p>主人死亡、失踪、失名后，继承须经过：①死亡确认→②床位状态确认→③庇护所人格检查→④旧主梦封存→⑤新主人认门→⑥箱契重写→⑦面板权限迁移→⑧黑潮后复检。否则可能形成旧主屋、妒主屋、空巢屋。</p>
      <h3>庇护所租赁标准条款</h3>
      <p>租赁契约必须写明：租客床位、门禁权限、仓储权限、梦污染责任、死亡处理责任、黑潮期间归位点、租期结束后的离屋仪式。没有这些条款的租赁在混合法庭中无效或高危。</p>
    `,
  },
  {
    id: 'law-anomaly-defense',
    num: 'L8',
    title: '异常辩护制度',
    sub: '有些人不是纯粹犯罪，而是被晦诡、梦污染、食名、系统错栏影响',
    summary: '无光域法律允许一种特殊制度——异常辩护。可申请的情形包括：梦中被诱导犯罪、名字被借用或食名、系统错栏任务诱导、床位替睡导致行为断层、庇护所人格强迫、门路错位导致误入、频道污染导致集体错误行为。异常辩护不等于无罪，它只改变责任类型。必须三证支持，防止滥用。',
    content: `
      <p class="section-desc">无光域法律允许一种特殊制度——异常辩护。因为有些人不是纯粹犯罪，而是被晦诡、梦污染、食名、系统错栏、庇护所内属影响。</p>
      <div class="grid-2">
        <div class="card"><h3 class="card-title">可申请异常辩护的情形</h3><div class="card-body">梦中被诱导犯罪、名字被借用或食名、系统错栏任务诱导、床位替睡导致行为断层、庇护所人格强迫、门路错位导致误入、频道污染导致集体错误行为、黑潮中认知成形影响。</div></div>
        <div class="card"><h3 class="card-title">异常辩护不等于无罪</h3><div class="card-body">它只改变责任类型。可能判定为：无主观罪但需隔离净化、轻责任但需赔偿公共修复、被害者兼风险源、需要名净梦净屋净后再判、受污染者暂失行为资格。</div></div>
      </div>
      <h3>防止滥用</h3>
      <p>异常辩护必须三证支持。不能一句"被污染了"就逃避责任。讯庭尤其要防止玩家用系统错栏当借口。异常辩护制度的存在本身，就是无光域法律不同于普通法律的核心标志——它承认现实本身可能出错，而人只是那个错误的一部分。</p>
    `,
  },
  {
    id: 'law-and-class',
    num: 'L9',
    title: '法律与阶层风险',
    sub: '法庭本身也会变成权力——法律不是绝对正义，它也有阴影',
    summary: '五庭和讯庭掌握着谁能交易、谁能睡哪里、谁能拥有名字、谁能被判定死亡的权力，会形成法庭阶层。底层人可能支付不起名净费、梦净费、床租认证费、死亡确认费。玩家系统法派与边界法派的政治斗争将长期化。主角若建立方舟必须改革法律——基础名净公共化、死亡确认最低保障、禁止儿童初梦交易、频道净言但防滥权。',
    content: `
      <p class="section-desc">法律本身也会变成权力。无光域的五庭不是绝对正义——它们可能垄断安全、压迫底层、排斥玩家、收费过高、遮掩历史。这样社会才有真实张力。</p>
      <div class="grid-2">
        <div class="card"><h3 class="card-title">法庭垄断安全</h3><div class="card-body">六庭和讯庭掌握着：谁能交易、谁能睡哪里、谁能拥有名字、谁能被判定死亡、谁能进入水源、谁能保留庇护所、谁的频道发言有效。这会形成法庭阶层——掌握边界解释权的人，比掌握武力的人更隐蔽地控制着社会。</div></div>
        <div class="card"><h3 class="card-title">底层买不起正义</h3><div class="card-body">底层人可能无法支付名净费、梦净费、货契费、床位认证费、死亡确认费、庇护所产权审查费。于是他们更容易失名、失床、失物、失去继承权。在无光域，贫穷不只是缺少物资，更是缺少"被正确承认"的能力。</div></div>
        <div class="card"><h3 class="card-title">系统法派 vs 边界法派</h3><div class="card-body">玩家会质疑：为什么系统交易成功还要交断主费？为什么死亡提示不能继承遗物？为什么频道发言要被审查？排行榜不能代表权威？这会形成"系统法派"（面板至上）与"边界法派"（土著传统）的政治斗争——这是候胎纪最核心的社会冲突之一。</div></div>
        <div class="card"><h3 class="card-title">主角的法律改革方向</h3><div class="card-body">主角若建立方舟或混合领地，必须改革法律：基础名净公共化、死亡确认最低保障、公共床位制度、禁止儿童初梦交易、频道净言但防滥权、任务伦理审查、庇护所租赁标准化、高危交易强制三证、异常辩护公开流程、方舟登舟权不得只由资产决定。否则方舟只会把旧压迫带上船。</div></div>
      </div>
    `,
  },
  {
    id: 'law-six-laws',
    num: 'L10',
    title: '法律体系六律',
    sub: '真正的文明不是没有罪，而是知道如何让罪不继续繁殖',
    summary: '第一律：法庭先封边界再判人心。第二律：没有死干净就不能继承。第三律：系统记录只是一证。第四律：判决必须能钉住现实。第五律：传播者也有责任。第六律：真正的文明不是没有罪，而是知道如何让罪不继续繁殖。',
    content: `
      <p class="section-desc">法律体系的核心法则——世界观层面的约束，不是单纯的道德判断。</p>
      <div class="grid-2">
        <div class="card"><h3 class="card-title">第一律：法庭先封边界，再判人心</h3><div class="card-body">不先阻断污染，审判本身也可能成为传播。法庭的第一职责不是寻找真相，而是阻止现实继续错误解释。</div></div>
        <div class="card"><h3 class="card-title">第二律：没有死干净，就不能继承</h3><div class="card-body">尸体、名字、梦、床、遗物、频道权限没有断完，死亡就不是完整法律事实。不完全的死亡意味着不完全的继承权。</div></div>
        <div class="card"><h3 class="card-title">第三律：系统记录只是一证</h3><div class="card-body">面板、交易栏、排行榜、任务日志都必须接受物理痕迹和边界承认校验。系统权威不是最高权威——现实才是。</div></div>
        <div class="card"><h3 class="card-title">第四律：判决必须能钉住现实</h3><div class="card-body">只写在纸上的判决不够。骨刻、封名、封床、断契、净化、注销、改册才是完整执行。判决如果不能改变现实状态就是无效判决。</div></div>
        <div class="card"><h3 class="card-title">第五律：传播者也有责任</h3><div class="card-body">在无光域，错误消息会长出身体。频道、攻略、错栏原文、死者遗言的传播者必须承担公共风险。说"我只是转发"是不够的。</div></div>
        <div class="card"><h3 class="card-title">第六律：真正的文明不是没有罪，而是知道如何让罪不继续繁殖</h3><div class="card-body">无光域无法彻底消灭错误，但文明必须让错误停止扩散、停止继承、停止变成规则。法律不是文明的装饰，法律是文明每天替现实缝合伤口的针。</div></div>
      </div>
    `,
  },
]