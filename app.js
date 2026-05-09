const CARDS = [
  { id:1,  cat:'战略与斗争', quote:'枪杆子里面出政权', img:'' },
  { id:2,  cat:'战略与斗争', quote:'一切反动派都是纸老虎', img:'' },
  { id:3,  cat:'战略与斗争', quote:'战略上藐视敌人，战术上重视敌人', img:'' },
  { id:4,  cat:'战略与斗争', quote:'人不犯我，我不犯人；人若犯我，我必犯人', img:'' },
  { id:5,  cat:'战略与斗争', quote:'宜将剩勇追穷寇，不可沽名学霸王', img:'' },
  { id:6,  cat:'战略与斗争', quote:'集中优势兵力，各个歼灭敌人', img:'' },
  { id:7,  cat:'战略与斗争', quote:'伤其十指，不如断其一指', img:'' },
  { id:8,  cat:'战略与斗争', quote:'打得赢就打，打不赢就走', img:'' },
  { id:9,  cat:'战略与斗争', quote:'不打无准备之仗，不打无把握之仗', img:'' },
  { id:10, cat:'战略与斗争', quote:'兵民是胜利之本', img:'' },
  { id:11, cat:'战略与斗争', quote:'战争的伟力之最深厚的根源，存在于民众之中', img:'' },
  { id:12, cat:'战略与斗争', quote:'利用矛盾，争取多数，反对少数，各个击破', img:'' },
  { id:13, cat:'战略与斗争', quote:'以斗争求团结则团结存，以退让求团结则团结亡', img:'' },
  { id:14, cat:'战略与斗争', quote:'政策和策略是党的生命', img:'' },
  { id:15, cat:'战略与斗争', quote:'下定决心，不怕牺牲，排除万难，去争取胜利', img:'' },
  { id:16, cat:'战略与斗争', quote:'星星之火，可以燎原', img:'' },
  { id:17, cat:'战略与斗争', quote:'前途是光明的，道路是曲折的', img:'' },
  { id:18, cat:'工作与领导', quote:'没有调查，就没有发言权', img:'' },
  { id:19, cat:'工作与领导', quote:'从群众中来，到群众中去', img:'' },
  { id:20, cat:'工作与领导', quote:'实事求是', img:'' },
  { id:21, cat:'工作与领导', quote:'实践、认识、再实践、再认识', img:'' },
  { id:22, cat:'工作与领导', quote:'政治路线确定之后，干部就是决定的因素', img:'' },
  { id:23, cat:'工作与领导', quote:'领导者的责任，归结起来，主要地是出主意、用干部两件事', img:'' },
  { id:24, cat:'工作与领导', quote:'必须善于识别干部……看全部历史和全部工作', img:'' },
  { id:25, cat:'工作与领导', quote:'凡属正确的领导，必须是从群众中来，到群众中去', img:'' },
  { id:26, cat:'工作与领导', quote:'我们看问题，必须从整体上、从各个方面去看', img:'' },
  { id:27, cat:'工作与领导', quote:'如果有问题，就要从个别中看出普遍性', img:'' },
  { id:28, cat:'工作与领导', quote:'一切为群众的工作都要从群众的需要出发', img:'' },
  { id:29, cat:'工作与领导', quote:'忘记发展经济……企图从收缩开支去解决财政困难……是不能解决任何问题的', img:'' },
  { id:30, cat:'工作与领导', quote:'上级机关不要不分轻重缓急地……指定下级机关做很多项工作', img:'' },
  { id:31, cat:'工作与领导', quote:'在一切工作中，命令主义是错误的', img:'' },
  { id:32, cat:'工作与领导', quote:'我们历来不打无准备无把握之仗', img:'' },
  { id:33, cat:'工作与领导', quote:'从最坏的可能性着想，总不吃亏', img:'' },
  { id:34, cat:'工作与领导', quote:'错误常常是正确的向导', img:'' },
  { id:35, cat:'工作与领导', quote:'我们决不能一见成绩就自满自足起来……天天要洗脸，天天要扫地', img:'' },
  { id:36, cat:'哲学与认知', quote:'世上决没有无缘无故的爱，也没有无缘无故的恨', img:'' },
  { id:37, cat:'哲学与认知', quote:'一切结论产生于调查情况的末尾，而不是在它的先头', img:'' },
  { id:38, cat:'哲学与认知', quote:'"实事"就是客观存在着的一切事物……"求"就是我们去研究', img:'' },
  { id:39, cat:'哲学与认知', quote:'真正的理论……就是从客观实际抽出来又在客观实际中得到了证明的理论', img:'' },
  { id:40, cat:'哲学与认知', quote:'我们讨论问题，应当从实际出发，不是从定义出发', img:'' },
  { id:41, cat:'哲学与认知', quote:'矛盾着的各方面不能孤立的存在', img:'' },
  { id:42, cat:'哲学与认知', quote:'事情不是矛盾双方互相依存就完了，更重要的，还在于矛盾着的事物的互相转化', img:'' },
  { id:43, cat:'哲学与认知', quote:'一切过程都有始有终，一切过程都转化为它们的对立物', img:'' },
  { id:44, cat:'哲学与认知', quote:'对立统一……斗争则是绝对的', img:'' },
  { id:45, cat:'哲学与认知', quote:'思想等等是主观的东西，做或行动是主观见之于客观的东西', img:'' },
  { id:46, cat:'哲学与认知', quote:'一切根据符合于客观事实的思想是正确的思想', img:'' },
  { id:47, cat:'哲学与认知', quote:'武器是战争的重要的因素，但不是决定的因素，决定的因素是人不是物', img:'' },
  { id:48, cat:'精神与态度', quote:'群众是真正的英雄，而我们自己则往往是幼稚可笑的', img:'' },
  { id:49, cat:'精神与态度', quote:'没有满腔的热忱……没有放下臭架子、甘当小学生的精神，是一定不能做，也一定做不好的', img:'' },
  { id:50, cat:'精神与态度', quote:'共产党员对任何事情都要问一个为什么……绝对不应盲从', img:'' },
  { id:51, cat:'精神与态度', quote:'学习的敌人是自己的满足，要认真学习一点东西，必须从不自满开始', img:'' },
  { id:52, cat:'精神与态度', quote:'有许多人，"下车伊始"，就哇喇哇喇地发议论……其实这种人十个有十个失败', img:'' },
  { id:53, cat:'精神与态度', quote:'一个人做事只凭动机，不问效果……病人吃死了多少他是不管的', img:'' },
  { id:54, cat:'精神与态度', quote:'普通的人，容易为过去和当前的情况所迷惑，以为今后也不过如此', img:'' },
];

function catClass(cat) {
  if (cat.startsWith('战略')) return 'cat-战略';
  if (cat.startsWith('工作')) return 'cat-工作';
  if (cat.startsWith('哲学')) return 'cat-哲学';
  return 'cat-精神';
}

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

let deck = shuffle([...CARDS]);
let history = [];
let animating = false;

const $remaining     = document.getElementById('remaining');
const $deckVisual   = document.getElementById('deckVisual');
const $deckStack    = document.getElementById('deckStack');
const $cardArea     = document.getElementById('cardArea');
const $emptyState   = document.getElementById('emptyState');
const $historyList  = document.getElementById('historyList');
const $historyEmpty = document.getElementById('historyEmpty');
const $toast        = document.getElementById('toast');
const $pageDraw     = document.getElementById('pageDraw');
const $pageHistory  = document.getElementById('pageHistory');
const $navDraw      = document.getElementById('navDraw');
const $navHistory   = document.getElementById('navHistory');

function updateUI() {
  $remaining.textContent = deck.length;
  const idle = $cardArea.style.display === 'none';
  $deckVisual.style.display = (deck.length > 0 && idle) ? '' : 'none';
  $emptyState.style.display  = (deck.length === 0 && idle) ? '' : 'none';
}

function switchPage(page) {
  $pageDraw.classList.toggle('active', page === 'draw');
  $pageHistory.classList.toggle('active', page === 'history');
  $navDraw.classList.toggle('active', page === 'draw');
  $navHistory.classList.toggle('active', page === 'history');
  if (page === 'history') updateHistoryPage();
}

function drawCard(count) {
  if (animating) return;
  if (deck.length < count) {
    showToast(deck.length === 0 ? '已抽完，请重新洗牌' : '剩余牌数不足');
    return;
  }
  animating = true;
  const drawn = deck.splice(deck.length - count, count).reverse();
  history = [...drawn, ...history];

  $deckVisual.style.display = 'none';
  $emptyState.style.display = 'none';
  $cardArea.style.display  = '';

  if (count === 1) {
    renderSingle(drawn[0]);
  } else {
    renderMulti(drawn);
  }
  updateUI();
  updateHistoryData();
  setTimeout(() => { animating = false; }, count === 1 ? 1100 : 600);
}

function renderSingle(card) {
  const cc = catClass(card.cat);
  const imgStyle = card.img ? 'style="background-image:url(\'' + card.img + '\')"' : '';
  $cardArea.innerHTML = ''
    + '<div class="card-wrapper drawing" id="cardWrapper" onclick="flipCard()">'
    +   '<div class="card-inner" id="cardInner">'
    +     '<div class="card-face card-back-face">'
    +       '<div class="back-content">'
    +         '<span class="back-icon">&#128218;</span>'
    +         '<span class="back-title">金 句 牌</span>'
    +         '<span class="back-sub">GOLDEN QUOTES</span>'
    +       '</div>'
    +     '</div>'
    +     '<div class="card-face card-front-face">'
    +       '<div class="card-img-area" ' + imgStyle + '></div>'
    +       '<div class="card-front-inner">'
    +         '<span class="card-category ' + cc + '">' + card.cat + '</span>'
    +         '<div class="card-quote">' + card.quote + '</div>'
    +         '<span class="card-number">No.' + String(card.id).padStart(2,'0') + '</span>'
    +       '</div>'
    +     '</div>'
    +   '</div>'
    + '</div>'
    + '<button class="close-btn" onclick="closeResult(event)">收起</button>';
  setTimeout(function() {
    const inner = document.getElementById('cardInner');
    if (inner) inner.classList.add('flipped');
  }, 500);
}

function renderMulti(cards) {
  let html = '<div class="multi-cards">';
  cards.forEach(function(c, i) {
    const cc = catClass(c.cat);
    html += ''
      + '<div class="mini-card" style="animation-delay:' + (i*0.1) + 's">'
      +   '<span class="mini-cat">' + c.cat + '</span>'
      +   '<div class="mini-quote">' + c.quote + '</div>'
      +   '<span class="mini-num">No.' + String(c.id).padStart(2,'0') + '</span>'
      + '</div>';
  });
  html += '</div><button class="close-btn" onclick="closeResult(event)">收起</button>';
  $cardArea.innerHTML = html;
}

function flipCard() {
  const inner = document.getElementById('cardInner');
  if (inner) inner.classList.toggle('flipped');
}

function closeResult(e) {
  if (e) e.stopPropagation();
  $cardArea.style.display = 'none';
  $cardArea.innerHTML = '';
  updateUI();
}

function resetDeck() {
  $deckStack.classList.add('shuffling');
  setTimeout(function() { $deckStack.classList.remove('shuffling'); }, 500);

  deck = shuffle([...CARDS]);
  history = [];
  $cardArea.style.display = 'none';
  $cardArea.innerHTML = '';
  updateHistoryData();
  updateUI();
  showToast('已重新洗牌');
}

function updateHistoryData() {
}

function updateHistoryPage() {
  if (history.length === 0) {
    $historyList.innerHTML = '<div class="history-empty">还没有抽过卡<br><span style="font-size:12px;">去抽几张吧 &#10024;</span></div>';
    return;
  }
  let html = '';
  history.forEach(function(c) {
    html += ''
      + '<div class="history-item">'
      +   '<span class="history-num">' + String(c.id).padStart(2,'0') + '</span>'
      +   '<div class="history-info">'
      +     '<div class="history-cat">' + c.cat + '</div>'
      +     '<div class="history-quote">' + c.quote + '</div>'
      +   '</div>'
      + '</div>';
  });
  $historyList.innerHTML = html;
}

function showToast(msg) {
  $toast.textContent = msg;
  $toast.classList.add('show');
  setTimeout(function() { $toast.classList.remove('show'); }, 1800);
}

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js');
}
updateUI();
