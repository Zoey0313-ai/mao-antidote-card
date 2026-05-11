/* 教员解药 - app.js */
/* 依赖：data.js（定义 CARDS 全局变量）*/

(function () {
  'use strict';

  /* ---- 状态 ---- */
  var selectedEmotion = null;   // null = 随机全库
  var selectedScene = null;     // null = 未选场景
  var currentMode = 'random';   // 'random' | 'emotion' | 'scene'
  var deck = [];              // 当前抽卡池（CARDS 的拷贝，已洗牌）
  var drawnCount = 0;          // 已抽数量
  var history = [];            // 抽卡记录
  var animating = false;

  /* ---- DOM ---- */
  var $cardArea   = document.getElementById('cardArea');
  var $cardOverlay = document.getElementById('cardOverlay');
  var $cardOverlayContent = document.getElementById('cardOverlayContent');
  var $emptyState = document.getElementById('emptyState');
  var $historyList= document.getElementById('historyList');
  var $toast      = document.getElementById('toast');
  var $emotionHint= document.getElementById('emotionHint');
  var $emotionGrid= document.getElementById('emotionGrid');
  var $pageDraw   = document.getElementById('pageDraw');
  var $pageHistory= document.getElementById('pageHistory');
  var $navDraw    = document.getElementById('navDraw');
  var $navHistory = document.getElementById('navHistory');

  /* ---- 工具 ---- */
  function shuffle(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = a[i]; a[i] = a[j]; a[j] = tmp;
    }
    return a;
  }

  /* 根据当前情绪/场景筛选卡池 */
  function getPool() {
    if (selectedEmotion) {
      return CARDS.filter(function (c) {
        return c.emotions && c.emotions.indexOf(selectedEmotion) >= 0;
      });
    }
    if (selectedScene) {
      return CARDS.filter(function (c) {
        return c.tags && c.tags.indexOf(selectedScene) >= 0;
      });
    }
    return CARDS.slice();
  }

  /* ---- 初始化/洗牌 ---- */
  function initDeck() {
    deck = shuffle(getPool());
    drawnCount = 0;
    $cardOverlay.classList.remove('show');
    $cardOverlayContent.innerHTML = '';
    updateUI();
    updateHistoryPage();
  }

  /* ---- UI 更新 ---- */
  function updateUI() {
    var pool = getPool();
    var remaining = pool.length - drawnCount;
    if (selectedEmotion) {
      $emotionHint.textContent = '当前：' + selectedEmotion + ' (' + pool.length + '张)';
    } else if (selectedScene) {
      $emotionHint.textContent = '当前：' + selectedScene + ' (' + pool.length + '张)';
    } else {
      $emotionHint.textContent = '随机模式 (' + pool.length + '张)';
    }
    $emptyState.style.display  = remaining <= 0 ? '' : 'none';
  }

  /* ---- 页面切换 ---- */
  window.switchPage = function (page) {
    $pageDraw.classList.toggle('active', page === 'draw');
    $pageHistory.classList.toggle('active', page === 'history');
    $navDraw.classList.toggle('active', page === 'draw');
    $navHistory.classList.toggle('active', page === 'history');
    if (page === 'history') updateHistoryPage();
  };

  /* ---- 模式切换 ---- */
  window.switchMode = function (mode) {
    currentMode = mode;
    var emotionGrid = document.getElementById('emotionGrid');
    var sceneGrid = document.getElementById('sceneGrid');
    
    if (mode === 'random') {
      selectedEmotion = null;
      selectedScene = null;
      emotionGrid.style.display = 'none';
      sceneGrid.style.display = 'none';
      document.querySelectorAll('.emotion-btn').forEach(function (b) { b.classList.remove('active'); });
      document.querySelectorAll('.scene-btn').forEach(function (b) { b.classList.remove('active'); });
    } else if (mode === 'emotion') {
      selectedScene = null;
      sceneGrid.style.display = 'none';
      emotionGrid.style.display = 'grid';
      document.querySelectorAll('.scene-btn').forEach(function (b) { b.classList.remove('active'); });
    } else if (mode === 'scene') {
      selectedEmotion = null;
      emotionGrid.style.display = 'none';
      sceneGrid.style.display = 'grid';
      document.querySelectorAll('.emotion-btn').forEach(function (b) { b.classList.remove('active'); });
    }
    initDeck();
  };

  /* ---- 情绪标签切换 ---- */
  window.toggleEmotion = function (el) {
    var emotion = el.getAttribute('data-emotion');
    var buttons = document.querySelectorAll('.emotion-btn');

    if (selectedEmotion === emotion) {
      selectedEmotion = null;
    } else {
      selectedEmotion = emotion;
      selectedScene = null;
      document.querySelectorAll('.scene-btn').forEach(function (b) { b.classList.remove('active'); });
    }

    buttons.forEach(function (b) {
      b.classList.toggle('active', b.getAttribute('data-emotion') === selectedEmotion);
    });

    initDeck();
  };

  /* ---- 场景标签切换 ---- */
  window.toggleScene = function (el) {
    var scene = el.getAttribute('data-scene');
    var buttons = document.querySelectorAll('.scene-btn');

    if (selectedScene === scene) {
      selectedScene = null;
    } else {
      selectedScene = scene;
      selectedEmotion = null;
      document.querySelectorAll('.emotion-btn').forEach(function (b) { b.classList.remove('active'); });
    }

    buttons.forEach(function (b) {
      b.classList.toggle('active', b.getAttribute('data-scene') === selectedScene);
    });

    initDeck();
  };

  /* ---- 抽一张 ---- */
  window.drawCard = function () {
    if (animating) return;
    var pool = getPool();
    if (drawnCount >= pool.length) {
      showToast('这个情绪下没有卡牌了，请重新洗牌');
      return;
    }
    animating = true;

    var drawn = deck[drawnCount];
    drawnCount++;
    history.unshift(drawn);

    $emptyState.style.display = 'none';
    renderCard(drawn);
    updateUI();
    setTimeout(function () { animating = false; }, 1200);
  };

  /* ---- 渲染卡牌 ---- */
  function renderCard(card) {
    var tagsHtml = '';
    if (card.tags) {
      card.tags.forEach(function (t) {
        tagsHtml += '<span class="tag-badge">' + escapeHtml(t) + '</span>';
      });
    }
    var interp = card.interpretation || '';
    var source = card.source || '';
    var cardLabel = selectedEmotion
      ? '病症：' + selectedEmotion + '，药方如下'
      : selectedScene
      ? '场景：' + selectedScene + '，药方如下'
      : '教员建议如下：';

    $cardOverlayContent.innerHTML =
      '<div class="card-label">' + cardLabel + '</div>' +
      '<div class="card-wrapper drawing" onclick="flipCard()">' +
        '<div class="card-inner" id="cardInner">' +
          '<div class="card-face card-back-face">' +
            '<div class="back-content">' +
              '<span class="back-icon">&#128138;</span>' +
              '<span class="back-title">教 员 解 药</span>' +
              '<span class="back-sub">THE CURE</span>' +
            '</div>' +
          '</div>' +
          '<div class="card-face card-front-face">' +
            '<div class="card-front-inner">' +
              '<div class="card-quote">' + escapeHtml(card.quote) + '</div>' +
              (source ? '<div class="card-source">' + escapeHtml(source) + '</div>' : '') +
              '<div class="card-tags">' + tagsHtml + '</div>' +
              '<div class="card-divider"></div>' +
              '<div class="card-interp">' + escapeHtml(interp) + '</div>' +
              '<span class="card-number">No.' + String(card.id).padStart(3, '0') + '</span>' +
            '</div>' +
          '</div>' +
        '</div>' +
      '</div>' +
      '<button class="close-btn" onclick="closeResult(event)">收起</button>';

    $cardOverlay.classList.add('show');

    setTimeout(function () {
      var inner = document.getElementById('cardInner');
      if (inner) inner.classList.add('flipped');
    }, 500);
  }

  /* ---- 翻牌 / 收起 ---- */
  window.flipCard = function () {
    var inner = document.getElementById('cardInner');
    if (inner) inner.classList.toggle('flipped');
  };

  window.closeResult = function (e) {
    if (e) e.stopPropagation();
    $cardOverlay.classList.remove('show');
    $cardOverlayContent.innerHTML = '';
    updateUI();
  };

  /* 点击遮罩背景关闭 */
  window.closeOverlayBg = function (e) {
    if (e.target === $cardOverlay) {
      closeResult(e);
    }
  };

  /* ---- 重新洗牌 ---- */
  window.resetDeck = function () {
    history = [];
    initDeck();
    showToast('已重新洗牌');
  };

  /* ---- 历史记录 ---- */
  function updateHistoryPage() {
    if (history.length === 0) {
      $historyList.innerHTML =
        '<div class="history-empty">还没有抽过卡<br><span style="font-size:12px;">去抽一张吧 &#128138;</span></div>';
      return;
    }
    var html = '';
    history.forEach(function (c, i) {
      html +=
        '<div class="history-item" onclick="viewHistoryCard(' + i + ')">' +
          '<span class="history-num">No.' + String(c.id).padStart(3, '0') + '</span>' +
          '<div class="history-info">' +
            '<div class="history-quote">' + escapeHtml(c.quote) + '</div>' +
            (c.source ? '<div class="history-source">' + escapeHtml(c.source) + '</div>' : '') +
          '</div>' +
        '</div>';
    });
    $historyList.innerHTML = html;
  }

  /* ---- 查看历史卡牌 ---- */
  window.viewHistoryCard = function (index) {
    var card = history[index];
    if (!card) return;
    renderCard(card);
  };

  /* ---- Toast ---- */
  function showToast(msg) {
    $toast.textContent = msg;
    $toast.classList.add('show');
    setTimeout(function () { $toast.classList.remove('show'); }, 1800);
  }

  /* ---- XSS 防护 ---- */
  function escapeHtml(str) {
    var div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  }

  /* ---- Service Worker ---- */
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js');
  }

  /* ---- 启动 ---- */
  initDeck();

})();
