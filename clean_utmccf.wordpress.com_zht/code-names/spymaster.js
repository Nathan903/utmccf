document.addEventListener('DOMContentLoaded', () => {
    // Decode on the Phone
    const params = new URLSearchParams(window.location.search);
    const wParam = params.get('w');
    const cParam = params.get('c');
    
    if (!wParam || !cParam) {
        document.getElementById('spymaster-board').innerHTML = 
            '<p style="text-align:center; grid-column: span 5; color: white;">错误：URL中缺少游戏数据。请从主屏幕扫描二维码。</p>';
        return;
    }

    // Extract words, colors and dimensions
    const words = decodeURIComponent(wParam).split(',');
    const colors = cParam.split('');
    const rows = parseInt(params.get('r')) || 5;
    const cols = parseInt(params.get('cl')) || 5;
    
    if (words.length !== rows * cols || colors.length !== rows * cols) {
        document.getElementById('spymaster-board').innerHTML = 
            '<p style="text-align:center; grid-column: span 5; color: white;">错误：游戏数据无效。请确保词语数量与棋盘大小匹配。</p>';
        return;
    }
    
    const board = document.getElementById('spymaster-board');
    board.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;
    
    // Draw the board, instantly applying colors based on the URL data
    words.forEach((word, index) => {
        const card = document.createElement('div');
        card.className = 'card revealed'; 
        
        const mainWord = document.createElement('span');
        mainWord.className = 'card-main-word';
        mainWord.textContent = word;
        card.appendChild(mainWord);
        
        card.classList.add(
            colors[index] === 'R' ? 'red' :
            colors[index] === 'B' ? 'blue' :
            colors[index] === 'N' ? 'neutral' : 'assassin'
        );
        
        board.appendChild(card);
    });
});