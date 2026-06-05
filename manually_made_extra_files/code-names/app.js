const WORD_CATEGORIES = {
    "MCCF": ["休息", "归纳法", "辅导", "崩溃", "Logos", "哲学", "神学", "吃饭", "偷懒", "CampusTour", "微波炉", "STEVEN", "导师", "敬拜夜", "戏剧之夜", "精兵营", "小组长", "查经", "POTLUCK", "同工", "向往的生活", "大一", "UTCCF", "KP208", "WALLBERG", "搬", "敬拜", "VIP读经", "作息", "考试", "数学", "工程", "银记肠粉", "喜悦轩", "KACHI", "空调", "统计", "执委会", "TREASURER", "八点半", "迎新", "破冰", "自我介绍", "大风吹", "MILTON", "篮球", "ROTMAN", "NEWSLETTER", "北京", "上海", "红体恤衫", "包饺子", "恋爱讲座", "职业规划", "毕业", "BAHEN", "拖延症", "创世纪", "马太福音", "路加福音", "有问必答", "随走随传", "华人", "华夏", "I人", "E人", "聊天室", "没准备好", "把人带跑", "找对象", "麦克风", "MIDTERMS", "FINALS", "祷告", "RETREAT", "目的", "关心", "一起吃饭", "凤梨酥", "猪排", "灵修", "差不多得了"],
    "圣经": ["亚伯拉罕", "以撒", "羊羔", "亚当", "夏娃", "果子", "分别善恶", "摩西", "杖", "耶洗別", "比撒列", "路得", "约伯", "以斯帖", "约拿", "鲸鱼", "尼尼微", "伊甸园", "蛇", "洪水", "所多玛", "蛾摩拉", "伯大尼", "以马忤斯", "法老", "大卫", "诗篇", "因信称义", "律法", "十诫", "拔摩岛", "何西阿", "保罗", "巴兰", "死里复活", "圣灵的果子", "圣父", "圣子", "圣灵", "约柜", "教会", "拿细耳人", "参孙", "五旬节", "五饼二鱼", "登山宝训", "客西马尼园", "方舟", "橄榄", "禁食", "十字架", "彼拉多", "洗脚", "爱", "诗篇", "死海古卷", "偶像", "逾越节", "住棚节", "圣洁", "荣耀", "以色列", "诞生", "马槽", "门徒", "法利赛人", "安息日", "瘫痪", "寡妇", "抹大拉的玛丽亚", "尼哥底母", "拉萨路", "雅各", "约翰", "以利亚", "挪亚", "约瑟", "荆棘冠冕", "石头", "葡萄树", "铜蛇", "火焰的剑", "玛纳", "以扫", "奴仆", "祷告", "洗礼", "悔改", "赞美", "传福音", "赦罪", "宝血", "嫉妒", "情欲", "贪婪", "红海", "歌利亚", "晚餐", "狮子", "埃及", "约但河", "大使命", "救恩", "虚空", "愚昧", "加利利", "水上行走", "以马内利", "以眼还眼", "安息", "睡觉", "十二", "撒玛利亚", "预言家", "加百列", "天使", "三位一体", "利亚", "拉结", "拉班", "凯撒", "舍客勒", "船", "圣殿", "耶路撒冷", "伯利恒", "西奈山", "拿撒勒", "约", "罪", "变体说", "浸信会", "福音堂", "分裂", "马丁路德"],
    "学生": ["教授", "助教", "讲座", "教室", "图书馆", "宿舍", "食堂", "课本", "笔记", "论文", "小组", "实验室", "期中", "期末", "GPA", "奖学金", "学费", "选课", "实习", "简历", "面试", "社团", "派对", "咖啡", "熬夜", "自习", "毕业", "学位", "校园", "新生", "Zoom", "PPT", "ChatGPT", "室友", "考试", "截止日期", "学分", "选修课", "通宵", "迟到", "摸鱼", "朋友圈", "游戏", "吐槽", "外卖", "奶茶", "表白", "八卦", "脱单", "网恋", "追剧", "兼职", "电影", "音乐", "旅游", "健身房", "逛街", "快递", "闹钟", "手机", "电脑", "键盘", "耳机", "充电宝", "密码", "房租", "聚餐", "博物馆", "演唱会", "盲盒"],
    "蔬菜水果": ["芥蓝", "菜心", "小白菜", "大白菜", "西兰花", "花椰菜", "芹菜", "韭菜", "空心菜", "莴笋", "苦瓜", "丝瓜", "黄瓜", "冬瓜", "南瓜", "西葫芦", "豆苗", "豌豆苗", "芦笋", "香菜", "葱", "蒜苗", "甘蓝", "紫甘蓝", "苹果", "香蕉", "橙子", "柠檬", "青柠", "葡萄", "草莓", "蓝莓", "树莓", "黑莓", "樱桃", "桃子", "李子", "杏子", "梨", "芒果", "菠萝", "木瓜", "猕猴桃", "石榴", "西瓜", "哈密瓜", "火龙果", "荔枝", "龙眼", "榴莲", "山竹", "椰子", "百香果", "牛油果", "杨梅", "枇杷", "无花果", "柚子", "金桔", "桑葚"],
    "约翰福音": ["光", "生命", "道", "真理", "恩典", "羔羊", "葡萄树", "牧人", "门", "饼", "水", "酒", "风", "井", "拉撒路", "马大", "马利亚", "尼哥底母", "撒玛利亚", "加利利", "伯大尼", "圣殿", "逾越节", "十字架", "复活", "多马", "彼得", "犹大", "神迹", "荣耀", "生命的粮", "世界的光", "羊的门", "好牧人", "道路", "耶稣", "安得烈", "腓力", "拿但业", "施洗约翰", "该亚法", "彼拉多", "撒玛利亚妇人", "王的大臣", "生来瞎眼的人", "瘫子", "门徒", "迦拿", "耶路撒冷", "汲沦溪", "雅各井", "毕士大池", "西罗亚池", "水变酒", "五饼二鱼", "瞎眼", "行走", "风浪", "医治", "鱼网", "病床", "香膏", "橄榄山", "客西马尼", "会堂"],
    "数学": ["无限", "变量", "方程", "曲线", "斜率", "坐标", "向量", "矩阵", "概率", "统计", "平均", "质数","导数", "积分", "证明", "定理", "公理", "集合", "拓扑", "多边形", "球体", "圆周率", "黄金比", "无穷大", "切线", "抛物线", "椭圆", "面积", "体积", "旋转", "镜像", "维度", "随机", "毕达哥拉斯"],
    "现代用语": ["显眼包", "社恐", "社牛", "尊嘟假嘟", "绝绝子", "摆烂", "卷王", "破防", "躺平", "emo", "画大饼", "佛系", "秃头", "划水", "吃瓜", "避雷", "种草", "塌房", "上岸", "硬核", "宝藏", "翻车", "拔草", "键盘侠", "热搜", "弹幕", "点赞", "转发", "网红", "直播", "带货", "剁手", "薅羊毛", "剧透", "脑洞", "代购", "yyds", "芭比Q", "冲浪", "滤镜", "粉丝", "流量", "封神", "治愈"],
    "属灵黑话": ["阿们", "哈利路亚", "以马内利", "恩典", "平安", "团契", "信心有点小", "赞美", "我会为你祷告", "见证", "服事", "同工", "福音", "宝血", "救恩", "受洗", "圣餐", "灵修", "异象", "呼召", "圣灵", "感动", "交通", "奉献", "主日", "查经", "软弱", "刚强", "得胜", "结果子", "建造", "扎根", "复兴", "装备", "属灵", "属肉体", "试炼", "蒙恩", "恩赐", "守望", "遮盖"],
    "哲学": ["本体论", "形而上学", "二元论", "唯物主义", "唯心主义", "决定论", "自由意志", "存在主义", "认识论", "经验主义", "理性主义", "先验", "怀疑论", "现象学", "实用主义", "不可知论", "伦理学", "功利主义", "相对主义", "虚无主义", "辩证法", "解构主义"],
    "诗歌歌单": ["满有能力", "在呼召我之处", "你爱不变", "主的喜乐是我力量", "你永远如此深爱着我", "我的救赎者活着", "美好事", "爱是不保留", "陪我走过春夏秋冬", "坚强的爱", "我要爱慕你", "转向你", "永恒唯一的盼望", "当转眼仰望耶稣", "我神真伟大", "前来敬拜", "爱我愿意", "我们爱让世界不一样", "在你没有难成的事", "十架的爱", "活出爱", "一切歌颂赞美", "唯独依靠你", "来吧，我们赞美", "恩典的记号", "我们成为一家人", "与你更靠近", "耶和华是我牧者", "有一位神", "大山为我挪开", "祷告的力量", "常常喜乐", "安静", "神羔羊", "如鹿切慕溪水", "你的爱", "我愿为你去", "你真伟大", "这一生最美的祝福", "恩典之路", "何等恩典", "如鹰展翅上腾", "你是我的一切", "亲眼看见你", "开路者", "展开清晨的翅膀", "主你是我力量", "永活盼望", "我安然居住", "有一天"]
};

// Phase 1: Establish Game State Tracking
const gameState = {
    currentTurn: '',       // 'R' or 'B'
    redRemaining: 0,
    blueRemaining: 0,
    selectedCard: null,    // Tracks the currently tapped card (for 2-tap confirm)
    isGameOver: false
};

document.addEventListener('DOMContentLoaded', () => {
    // Load saved settings from local storage
    const savedCategories = JSON.parse(localStorage.getItem('codenames_categories')) || [];
    document.querySelectorAll('#category-checkboxes input[type="checkbox"]').forEach(cb => {
        if (savedCategories.includes(cb.value)) {
            cb.checked = true;
        }
        cb.addEventListener('change', saveSettings);
    });

    const savedCustomWords = localStorage.getItem('codenames_custom_words');
    if (savedCustomWords !== null) {
        document.getElementById('word-list').value = savedCustomWords;
    }
    document.getElementById('word-list').addEventListener('input', saveSettings);
    
    document.getElementById('modal-close-btn').addEventListener('click', () => {
        document.getElementById('game-over-modal').style.display = 'none';
    });

    document.getElementById('modal-restart-btn').addEventListener('click', () => {
        location.reload();
    });

    document.getElementById('start-game-btn').addEventListener('click', () => {
        startGame();
    });

    document.getElementById('toggle-spymaster-btn').addEventListener('click', (e) => {
        e.stopPropagation();
        toggleSpymaster();
    });
    document.querySelector('.collapsible-header').addEventListener('click', toggleSpymaster);

    // Phase 6: End Turn Button
    document.getElementById('end-turn-btn').addEventListener('click', () => {
        if (!gameState.isGameOver) {
            switchTurn();
        }
    });
});

function toggleSpymaster() {
    const card = document.getElementById('spymaster-link');
    card.classList.toggle('is-collapsed');
}

function startGame() {
    document.getElementById('start-game-btn').style.display = 'none';
    document.getElementById('turn-active-area').style.display = 'block';
    
    // Collapse spymaster panel when game starts
    document.getElementById('spymaster-link').classList.add('is-collapsed');
    
    // Update Turn Indicator visuals
    updateTurnUI();
}

function updateTurnUI() {
    const turnIndicator = document.getElementById('turn-indicator');
    const endTurnBtn = document.getElementById('end-turn-btn');
    const statusBar = document.getElementById('game-status-bar');
    
    statusBar.classList.remove('red-glow', 'blue-glow');
    if (gameState.currentTurn === 'R') {
        turnIndicator.textContent = "红队回合";
        turnIndicator.className = "red-text";
        endTurnBtn.className = "red-turn";
        statusBar.classList.add('red-glow');
    } else {
        turnIndicator.textContent = "蓝队回合";
        turnIndicator.className = "blue-text";
        endTurnBtn.className = "blue-turn";
        statusBar.classList.add('blue-glow');
    }
}

function saveSettings() {
    const selectedCats = Array.from(document.querySelectorAll('#category-checkboxes input[type="checkbox"]:checked')).map(cb => cb.value);
    localStorage.setItem('codenames_categories', JSON.stringify(selectedCats));
    localStorage.setItem('codenames_custom_words', document.getElementById('word-list').value);
}

document.getElementById('generate-btn').addEventListener('click', () => {
    // Gather words from selected categories
    let allWords = [];
    document.querySelectorAll('#category-checkboxes input[type="checkbox"]:checked').forEach(cb => {
        const cat = cb.value;
        if (WORD_CATEGORIES[cat]) {
            allWords = allWords.concat(WORD_CATEGORIES[cat]);
        }
    });

    const text = document.getElementById('word-list').value;
    // Parse the Input: split by newline and filter empties
    const customWords = text.split('\n').map(w => w.trim()).filter(w => w.length > 0);
    allWords = allWords.concat(customWords);

    // Deduplicate silently
    allWords = [...new Set(allWords)];
    
    const rows = parseInt(document.getElementById('board-rows').value) || 5;
    const cols = parseInt(document.getElementById('board-cols').value) || 5;
    const totalCards = rows * cols;

    if (allWords.length < totalCards) {
        alert(`请提供或选择至少 ${totalCards} 个有效的词语。当前有 ${allWords.length} 个不重复词语。`);
        return;
    }

    // Shuffle and Select: take the required words randomly
    const shuffledWords = fisherYatesShuffle([...allWords]).slice(0, totalCards);
    
    const startingTeam = 'R'; // Always start with Red
    const colors = generateColors(startingTeam, totalCards);
    
    // Phase 3: Initialize the Game Rules
    gameState.currentTurn = startingTeam;
    gameState.redRemaining = colors.filter(c => c === 'R').length;
    gameState.blueRemaining = colors.filter(c => c === 'B').length;
    gameState.selectedCard = null;
    gameState.isGameOver = false;

    // Update UI scores
    document.querySelector('#red-score span').textContent = gameState.redRemaining;
    document.querySelector('#blue-score span').textContent = gameState.blueRemaining;

    // Reset Turn UI to "Start" state
    document.getElementById('start-game-btn').style.display = 'inline-block';
    document.getElementById('turn-active-area').style.display = 'none';
    const statusBar = document.getElementById('game-status-bar');
    statusBar.classList.remove('red-glow', 'blue-glow');
    statusBar.style.borderColor = 'transparent';

    // Show panels
    document.getElementById('game-status-bar').style.display = 'flex';
    document.getElementById('config-panel').style.display = 'none';
    document.getElementById('spymaster-link').style.display = 'block';
    document.getElementById('spymaster-link').classList.remove('is-collapsed');

    // Draw Player Board
    renderBoard(shuffledWords, colors, cols);
    // Serialize & Generate QR
    generateSpymasterLink(shuffledWords, colors, rows, cols);
});

// Fisher-Yates shuffle algorithm
function fisherYatesShuffle(array) {
    let currentIndex = array.length, randomIndex;
    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    return array;
}

// Generate the Color Map for the Cards
function generateColors(startingTeam, total) {
    const secondTeam = startingTeam === 'R' ? 'B' : 'R';
    const startingCount = Math.floor(total / 3) + 1;
    const secondCount = Math.floor(total / 3);
    const neutralCount = total - 1 - startingCount - secondCount;

    const colors = [
        ...Array(startingCount).fill(startingTeam),
        ...Array(secondCount).fill(secondTeam),
        ...Array(neutralCount).fill('N'), // Neutral / Bystander
        'A' // Assassin
    ];
    return fisherYatesShuffle(colors);
}

let imageStacks = {
    R: [],
    B: [],
    N: []
};

function initImageStacks(colors) {
    const totalRed = colors.filter(c => c === 'R').length;
    const totalBlue = colors.filter(c => c === 'B').length;
    const totalNeutral = colors.filter(c => c === 'N').length;

    const redImages = ['red1.jpg', 'red2.jpg', 'red3.jpg', 'red4.jpg', 'red5.jpg'];
    const blueImages = ['blue1.jpg', 'blue2.jpg', 'blue3.jpg'];
    const neutralImages = ['yellow1.jpg', 'yellow2.jpg', 'yellow3.jpg'];
    
    imageStacks.R = generateShuffledStack(redImages, totalRed);
    imageStacks.B = generateShuffledStack(blueImages, totalBlue);
    imageStacks.N = generateShuffledStack(neutralImages, totalNeutral);
}

function generateShuffledStack(images, count) {
    let stack = [];
    let n = images.length;
    for (let i = 0; i < count; i++) {
        // Prevent recent images from repeating
        let recent = stack.slice(-(n - 1));
        let available = images.filter(img => !recent.includes(img));
        
        if (available.length === 0) {
            available = images;
        }
        
        let chosen = available[Math.floor(Math.random() * available.length)];
        stack.push(chosen);
    }
    // Reverse so that popping from the end yields the correct non-repeating sequence
    return stack.reverse();
}

// Rendering the Player Board
function renderBoard(words, colors, cols) {
    const board = document.getElementById('game-board');
    board.innerHTML = '';
    board.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;
    board.classList.remove('game-over');
    
    initImageStacks(colors);
    
    words.forEach((word, index) => {
        const btn = document.createElement('div');
        btn.className = 'card';
        btn.dataset.color = colors[index];

        // Create inner content for authentic card look
        const topWord = document.createElement('span');
        topWord.className = 'card-top-word';
        topWord.textContent = word;
        
        const mainWord = document.createElement('span');
        mainWord.className = 'card-main-word';
        mainWord.textContent = word;

        btn.appendChild(topWord);
        btn.appendChild(mainWord);
        
        // Add Click Events
        btn.addEventListener('click', () => {
            if (btn.classList.contains('revealed')) return;

            // Only show images if time is past 2026-06-05 6:20 PM EST (UTC-5)
            const unlockTime = new Date('2026-06-05T18:20:00-04:00').getTime();
            const showImages = new Date().getTime() >= unlockTime;
            const color = colors[index];

            if (gameState.isGameOver || board.classList.contains('game-over')) {
                // If game is over, just reveal it immediately (1 tap) without game logic
                revealCardVisual(btn, color, showImages);
                return;
            }

            // Phase 4: Implement the "Two-Tap" Confirmation
            if (gameState.selectedCard !== btn) {
                // First click: select
                if (gameState.selectedCard) {
                    gameState.selectedCard.classList.remove('selected');
                    const oldOverlay = gameState.selectedCard.querySelector('.card-confirm-overlay');
                    if (oldOverlay) oldOverlay.remove();
                }
                
                btn.classList.add('selected');
                
                // Add Confirm Overlay
                const overlay = document.createElement('div');
                overlay.className = 'card-confirm-overlay';
                overlay.innerHTML = '<span>确定?</span><span class="small-text">再次点击翻开</span>';
                btn.appendChild(overlay);
                
                gameState.selectedCard = btn;
            } else {
                // Second click: confirm
                btn.classList.remove('selected');
                const overlay = btn.querySelector('.card-confirm-overlay');
                if (overlay) overlay.remove();
                
                gameState.selectedCard = null;
                btn.classList.add('revealed');
                
                // Phase 5: Implement Forced Turn-Ending and Scoring
                processReveal(btn, color, showImages);
            }
        });
        
        board.appendChild(btn);
    });
}

function revealCardVisual(btn, color, showImages) {
    btn.classList.add('revealed');
    if (color === 'R') {
        btn.classList.add('red');
        if (showImages) btn.style.backgroundImage = `url('${imageStacks.R.pop()}')`;
    } else if (color === 'B') {
        btn.classList.add('blue');
        if (showImages) btn.style.backgroundImage = `url('${imageStacks.B.pop()}')`;
    } else if (color === 'N') {
        btn.classList.add('neutral');
        if (showImages) btn.style.backgroundImage = `url('${imageStacks.N.pop()}')`;
    } else {
        btn.classList.add('assassin');
        if (showImages) btn.style.backgroundImage = `url('black1.jpg')`;
    }
}

// Phase 5: Implement Forced Turn-Ending and Scoring
function processReveal(btn, color, showImages) {
    revealCardVisual(btn, color, showImages);
    
    // Check Assassin
    if (color === 'A') {
        gameState.isGameOver = true;
        document.getElementById('game-board').classList.add('game-over');
        const winner = gameState.currentTurn === 'R' ? '蓝队' : '红队';
        setTimeout(() => showModal(`刺客被选中！${winner}获胜！`), 300);
        return;
    }

    // Check Correct Guess
    if (color === gameState.currentTurn) {
        if (color === 'R') {
            gameState.redRemaining--;
            updateScoreUI('R');
        } else {
            gameState.blueRemaining--;
            updateScoreUI('B');
        }

        // Check Win
        if (gameState.redRemaining === 0) {
            gameState.isGameOver = true;
            document.getElementById('game-board').classList.add('game-over');
            setTimeout(() => showModal('红队获胜！'), 300);
        } else if (gameState.blueRemaining === 0) {
            gameState.isGameOver = true;
            document.getElementById('game-board').classList.add('game-over');
            setTimeout(() => showModal('蓝队获胜！'), 300);
        }
    } else {
        // Check Wrong Guess (Neutral or Opposing Team)
        if (color === 'R') {
            gameState.redRemaining--;
            updateScoreUI('R');
        } else if (color === 'B') {
            gameState.blueRemaining--;
            updateScoreUI('B');
        }

        // Check Win for opponent if we revealed their last card
        if (gameState.redRemaining === 0) {
            gameState.isGameOver = true;
            document.getElementById('game-board').classList.add('game-over');
            setTimeout(() => showModal('红队获胜！'), 300);
            return;
        } else if (gameState.blueRemaining === 0) {
            gameState.isGameOver = true;
            document.getElementById('game-board').classList.add('game-over');
            setTimeout(() => showModal('蓝队获胜！'), 300);
            return;
        }

        switchTurn();
    }
}

function updateScoreUI(team) {
    const scoreSpan = document.querySelector(`#${team === 'R' ? 'red' : 'blue'}-score span`);
    scoreSpan.textContent = team === 'R' ? gameState.redRemaining : gameState.blueRemaining;
    
    // Animation for score change
    const display = scoreSpan.parentElement;
    display.classList.add('score-changed');
    setTimeout(() => display.classList.remove('score-changed'), 300);
}

// Phase 6: The "End Turn" Button & Turn Switching logic
function switchTurn() {
    gameState.currentTurn = gameState.currentTurn === 'R' ? 'B' : 'R';
    updateTurnUI();

    if (gameState.selectedCard) {
        gameState.selectedCard.classList.remove('selected');
        const overlay = gameState.selectedCard.querySelector('.card-confirm-overlay');
        if (overlay) overlay.remove();
        gameState.selectedCard = null;
    }
}

function showModal(message) {
    document.getElementById('modal-message').textContent = message;
    document.getElementById('game-over-modal').style.display = 'flex';
}

// The QR Code & Spymaster View (The URL Trick)
function generateSpymasterLink(words, colors, rows, cols) {
    // Construct the URL referencing the spymaster html file
    const urlObj = new URL('spymaster.html', window.location.href);
    urlObj.searchParams.set('w', encodeURIComponent(words.join(',')));
    urlObj.searchParams.set('c', colors.join(''));
    urlObj.searchParams.set('r', rows);
    urlObj.searchParams.set('cl', cols);
    
    const spymasterUrl = urlObj.href;
    
    // Generate QR using qrious CDN
    const qrCanvas = document.getElementById('qr-code');
    new QRious({
        element: qrCanvas,
        value: spymasterUrl,
        size: 250,
        backgroundAlpha: 1,
        foreground: 'black'
    });
    
    const linkElem = document.getElementById('spymaster-url');
    linkElem.href = spymasterUrl;
    
    document.getElementById('spymaster-link').style.display = 'block';
}