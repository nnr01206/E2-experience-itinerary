const EVENTS = {
  "mountain-day": {
    status: "upcoming",
    category: "地方體驗",
    title: "山裡的一日",
    subtitle: "跟著在地人走進山線，認識一種不在景點地圖上的台東。",
    date: "2026.10.03",
    time: "09:00–13:00",
    price: "NT$1,200",
    slots: "4–10 人",
    statusText: "尚有名額",
    heroImage: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1500&q=85",
    heroCaption: "留一個上午給山，也留一點時間給自己。",
    storyHeading: "有些台東，不在景點地圖上。",
    story: [
      "這不是一趟趕著踩點的旅行。",
      "我們從山腳出發，跟著熟悉這片土地的人走一段路，認識植物、土地，以及那些只有在地人才知道的生活故事。",
      "留一個上午給山，也留一點時間給自己。"
    ],
    experiences: [
      ["01", "走進山裡", "跟著在地帶路，沿著山徑慢慢認識周遭環境。"],
      ["02", "認識土地", "從植物、地景與生活方式，認識台東山線。"],
      ["03", "一起吃頓飯", "在活動中留一點時間，坐下來吃飯、聊天。"],
      ["04", "帶一點故事回家", "不一定帶走什麼紀念品，但會多認識一個地方。"]
    ],
    info: {
      "活動日期": "2026.10.03",
      "活動時間": "09:00–13:00",
      "活動地點": "台東・山線",
      "活動費用": "NT$1,200／人",
      "活動人數": "4–10 人",
      "活動難度": "★★☆☆☆"
    },
    meeting: "活動當天 08:50 於 E2 東二共生居集合。",
    bring: "輕便服裝、好走的鞋子、水、防曬用品。",
    notice: "活動將依當日天候與現場狀況調整，請保留彈性。",
    partner: { initial: "山", name: "山線生活工作室", role: "在台東山線長大的地方夥伴", bio: "熟悉一條路、一座山，也熟悉怎麼把地方故事說給剛來的人聽。" },
    gallery: [
      ["https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=85", "出發前的清晨"],
      ["https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=900&q=85", "山徑上的一段路"],
      ["https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=900&q=85", "風景留給自己"],
      ["https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?auto=format&fit=crop&w=1300&q=85", "一起坐下來聊聊"]
    ],
    emailSubject: "台東日子這樣過｜山裡的一日報名"
  },
  "coastal-afternoon": {
    status: "upcoming",
    category: "山海體驗",
    title: "海岸線上的午後",
    subtitle: "不趕著去下一個景點，把一個午後留給太平洋。",
    date: "2026.10.17",
    time: "15:00–18:30",
    price: "NT$980",
    slots: "4–12 人",
    statusText: "尚有名額",
    heroImage: "https://images.unsplash.com/photo-1473116763249-2faaef81ccda?auto=format&fit=crop&w=1500&q=85",
    heroCaption: "海風來的時候，時間會自然慢下來。",
    storyHeading: "有些午後，不需要安排太多事。",
    story: [
      "從城市一路往海邊去，沒有打卡清單，也沒有一定要完成的任務。",
      "跟著熟悉海岸的人走一小段路，聽風、看潮汐，再找一個舒服的位置坐下來。",
      "有時候，旅行就是讓一個下午慢慢過完。"
    ],
    experiences: [
      ["01", "沿著海岸走走", "從一段不擁擠的海岸開始，感受台東的海風。"],
      ["02", "聽一點地方故事", "聊聊海邊的人、季節與生活方式。"],
      ["03", "一起吃點小食", "準備一點在地小食，邊吹風邊聊天。"],
      ["04", "把夕陽留在今天", "不追趕行程，只把最後的光看完。"]
    ],
    info: {
      "活動日期": "2026.10.17",
      "活動時間": "15:00–18:30",
      "活動地點": "台東・海岸線",
      "活動費用": "NT$980／人",
      "活動人數": "4–12 人",
      "活動難度": "★☆☆☆☆"
    },
    meeting: "活動當天 14:50 於指定集合點集合，報名後通知。",
    bring: "帽子、飲水、防曬用品，建議穿著方便行走的鞋子。",
    notice: "海邊活動受天候影響較大，出發前會再次通知。",
    partner: { initial: "海", name: "東岸地方散步團", role: "把海岸當成日常的人", bio: "熟悉風向、潮汐與海邊那些很難從地圖上看見的小路。" },
    gallery: [
      ["https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=85", "往海邊走"],
      ["https://images.unsplash.com/photo-1494783367193-149034c05e8f?auto=format&fit=crop&w=900&q=85", "午後的光"],
      ["https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=85", "海風"],
      ["https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?auto=format&fit=crop&w=1300&q=85", "一起坐著看海"]
    ],
    emailSubject: "台東日子這樣過｜海岸線上的午後報名"
  },
  "cooking-workshop": {
    status: "past",
    category: "地方料理",
    title: "台東特色料理體驗",
    subtitle: "把在地食材煮進日常，也把一桌人的故事留在記憶裡。",
    date: "2026.08.22",
    time: "16:00–19:00",
    price: "NT$1,080",
    slots: "4–8 人",
    statusText: "活動已結束",
    heroImage: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1500&q=85",
    heroCaption: "一張桌子，有時就是認識一個地方最好的開始。",
    storyHeading: "一頓飯，也可以是認識台東的方法。",
    story: [
      "從精選的在地食材開始，學著把一道家常菜慢慢做出來。",
      "不用完美刀工，也沒有標準答案。一起動手、一邊聊天，把味道煮進生活，也讓陌生人慢慢熟起來。",
      "那天結束之後，還有人把食譜帶回家繼續做。"
    ],
    experiences: [
      ["01", "認識在地食材", "從市場、農家與季節，理解今天餐桌上的味道。"],
      ["02", "一起動手", "不用趕進度，邊做邊聊，從料理開始認識彼此。"],
      ["03", "坐下來吃飯", "把剛做好的菜端上桌，一起吃一頓完整的晚餐。"],
      ["04", "把味道帶回家", "留下簡單食譜，也留下這次相遇的記憶。"]
    ],
    info: {
      "活動日期": "2026.08.22",
      "活動時間": "16:00–19:00",
      "活動地點": "E2 共生廚房",
      "活動費用": "NT$1,080／人",
      "活動人數": "4–8 人",
      "活動難度": "★☆☆☆☆"
    },
    meeting: "活動當天 15:50 於 E2 一樓共享空間集合。",
    bring: "可以直接來；若有食物過敏或飲食需求請提前告知。",
    notice: "本活動已結束，這裡保留活動紀錄與照片。",
    partner: { initial: "味", name: "台東家常味", role: "把家裡的味道帶上桌的人", bio: "相信料理不需要太複雜，重要的是食材、時間，以及一起吃飯的人。" },
    gallery: [
      ["https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=1200&q=85", "準備食材"],
      ["https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=900&q=85", "一起動手"],
      ["https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=85", "桌上的味道"],
      ["https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1300&q=85", "最後一起吃飯"]
    ],
    emailSubject: "台東日子這樣過｜活動照片與未來活動詢問"
  }
};

const defaultEvent = EVENTS["mountain-day"];

function getEventKey() {
  const params = new URLSearchParams(window.location.search);
  return params.get("event") || "mountain-day";
}

function getEvent() {
  return EVENTS[getEventKey()] || defaultEvent;
}

function q(sel) { return document.querySelector(sel); }
function qa(sel) { return [...document.querySelectorAll(sel)]; }

function renderDetail(event) {
  if (!q("#event-title")) return;

  q("#event-category").textContent = event.category;
  q("#event-title").textContent = event.title;
  q("#event-subtitle").textContent = event.subtitle;
  q("#event-date").textContent = event.date;
  q("#event-time").textContent = event.time;
  q("#hero-image").src = event.heroImage;
  q("#hero-image").alt = event.title;
  q("#hero-caption").textContent = event.heroCaption;
  q("#story-heading").textContent = event.storyHeading;
  q("#story-copy").innerHTML = event.story.map(p => `<p>${p}</p>`).join("");
  q("#experience-grid").innerHTML = event.experiences.map(item => `
    <article class="experience-item">
      <span class="experience-number">${item[0]}</span>
      <h3>${item[1]}</h3>
      <p>${item[2]}</p>
    </article>
  `).join("");
  q("#info-grid").innerHTML = Object.entries(event.info).map(([key, value]) => `
    <div class="info-item"><span>${key}</span><strong>${value}</strong></div>
  `).join("");
  q("#meeting-info").textContent = event.meeting;
  q("#bring-info").textContent = event.bring;
  q("#notice-info").textContent = event.notice;
  q("#booking-title").textContent = event.title;
  q("#booking-price").textContent = event.price;
  q("#booking-date").textContent = event.date;
  q("#booking-time").textContent = event.time;
  q("#booking-slots").textContent = event.slots;
  q("#booking-label").textContent = event.status === "past" ? "活動紀錄" : "這次一起去台東的某個地方";

  const isPast = event.status === "past";
  const pill = q("#status-pill");
  pill.textContent = event.statusText;
  pill.classList.toggle("past", isPast);

  const buttons = [q("#booking-button"), q("#mobile-booking-button")];
  buttons.forEach(btn => {
    if (!btn) return;
    if (isPast) {
      btn.textContent = "看看其他活動";
      btn.href = "events.html";
    } else {
      btn.textContent = "立即報名";
      btn.href = `mailto:hello@e2coliving.com?subject=${encodeURIComponent(event.emailSubject)}`;
    }
  });
  q("#mobile-status").textContent = event.statusText;
  q("#mobile-price").textContent = isPast ? "活動已結束" : `${event.price}／人`;

  q("#ask-button").textContent = isPast ? "詢問下一場活動" : "詢問活動";
  q("#ask-button").onclick = () => { window.location.href = "mailto:hello@e2coliving.com?subject=" + encodeURIComponent(isPast ? "想詢問下一場地方遊程" : event.emailSubject); };
  q("#booking-footnote").textContent = isPast ? "這一頁保留活動紀錄與照片；想參加新的活動可以回到活動列表。" : "報名後會由 E2 與你確認集合細節。";

  q("#gallery-heading").textContent = isPast ? "我們一起過過的這一天" : "如果你也在這裡";
  q("#gallery-note").textContent = isPast ? "一些活動結束後，還留在照片裡的日子。" : "活動照片將持續留下這些與台東相遇的片段。";
  q("#gallery").innerHTML = event.gallery.map((item, index) => `
    <button class="gallery-item" type="button" data-index="${index}" aria-label="查看照片：${item[1]}">
      <img src="${item[0]}" alt="${event.title}｜${item[1]}" loading="lazy" />
      <span class="gallery-caption">${item[1]}</span>
    </button>
  `).join("");

  q("#partner-initial").textContent = event.partner.initial;
  q("#partner-name").textContent = event.partner.name;
  q("#partner-role").textContent = event.partner.role;
  q("#partner-bio").textContent = event.partner.bio;

  document.title = `${event.title}｜台東日子這樣過｜E2 Co-Living`;
  setupLightbox(event.gallery);
}

function renderEventList() {
  const list = q("#event-list");
  if (!list) return;
  const entries = Object.entries(EVENTS);
  const draw = filter => {
    const filtered = entries.filter(([, event]) => {
      if (filter === "all") return true;
      if (filter === "past") return event.status === "past";
      if (filter === "experience") return event.category.includes("體驗") || event.category.includes("料理");
      if (filter === "local") return event.category.includes("地方") || event.category.includes("山海");
      return true;
    });
    list.innerHTML = filtered.map(([key, event]) => `
      <a class="event-card" href="index.html?event=${encodeURIComponent(key)}">
        <div class="event-card-media">
          <img src="${event.heroImage}" alt="${event.title}" loading="lazy" />
          <span class="event-card-tag">${event.status === "past" ? "過去活動" : event.category}</span>
        </div>
        <div class="event-card-body">
          <div class="event-card-meta"><span>${event.date}</span><span>·</span><span>${event.time}</span></div>
          <h3>${event.title}</h3>
          <p>${event.subtitle}</p>
          <span class="event-card-cta">${event.status === "past" ? "查看活動紀錄 →" : "查看活動 →"}</span>
        </div>
      </a>
    `).join("");
  };
  draw("all");
  qa(".filter").forEach(btn => btn.addEventListener("click", () => {
    qa(".filter").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    draw(btn.dataset.filter);
  }));
}

function setupLightbox(gallery) {
  const modal = q("#lightbox");
  const img = q("#lightbox-image");
  const caption = q("#lightbox-caption");
  if (!modal) return;
  let current = 0;

  const openAt = index => {
    current = index;
    img.src = gallery[current][0];
    img.alt = gallery[current][1];
    caption.textContent = `${gallery[current][1]}  ·  ${current + 1} / ${gallery.length}`;
    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  };
  const close = () => {
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  };
  const next = delta => openAt((current + delta + gallery.length) % gallery.length);

  qa(".gallery-item").forEach(btn => btn.addEventListener("click", () => openAt(Number(btn.dataset.index))));
  q("#lightbox-close").onclick = close;
  q("#lightbox-prev").onclick = () => next(-1);
  q("#lightbox-next").onclick = () => next(1);
  modal.addEventListener("click", e => { if (e.target === modal) close(); });
  document.addEventListener("keydown", e => {
    if (!modal.classList.contains("open")) return;
    if (e.key === "Escape") close();
    if (e.key === "ArrowRight") next(1);
    if (e.key === "ArrowLeft") next(-1);
  });
}

function setupYear() { qa("#year").forEach(el => el.textContent = new Date().getFullYear()); }

renderEventList();
renderDetail(getEvent());
setupYear();
