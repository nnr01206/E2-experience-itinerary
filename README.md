# E2 Co-Living｜台東日子這樣過｜GitHub Pages 靜態網站

這是一套不需要後端的 GitHub Pages 靜態網站，包含：

- `events.html`：地方遊程／合作課程列表頁
- `index.html`：單一活動／過去活動詳情頁
- `styles.css`：整套響應式視覺樣式
- `script.js`：活動資料、分類、Gallery Lightbox、即將到來／已結束狀態切換

## 1. 上 GitHub Pages

最簡單做法：

1. 建立一個 GitHub Repository。
2. 將本資料夾中的所有檔案上傳到 repository 根目錄。
3. GitHub → Settings → Pages。
4. Source 選 `Deploy from a branch`。
5. Branch 選 `main`、資料夾選 `/ (root)`。
6. 儲存後即可取得 GitHub Pages 網址。

## 2. 新增活動

所有活動資料集中在 `script.js` 的 `EVENTS` 物件。

新增一個 key，例如：

```js
"new-event": {
  status: "upcoming",
  category: "地方體驗",
  title: "新的活動名稱",
  subtitle: "一句簡短、有人味的介紹。",
  date: "2026.11.01",
  time: "14:00–17:00",
  price: "NT$1,000",
  slots: "4–10 人",
  ...
}
```

然後可以用：

```text
index.html?event=new-event
```

直接開啟活動詳情。

### 過去活動

將：

```js
status: "past"
```

頁面會自動切換成：

- 「活動已結束」
- CTA 改為「看看其他活動」
- 保留活動照片 Gallery
- 保留合作夥伴與活動故事

## 3. 替換成 E2 實際照片

目前程式使用 Unsplash 示意照片，方便 GitHub Pages 立即看到完整版面。正式上線建議把照片換成 E2 自己的圖片。

替換方式有兩種：

### A. 圖片放在 repository

例如：

```text
assets/images/mountain-hero.jpg
assets/images/mountain-01.jpg
assets/images/mountain-02.jpg
```

然後把 `script.js` 裡的圖片 URL 改成：

```js
"assets/images/mountain-hero.jpg"
```

### B. 使用 E2 自己的 CDN / 圖片網址

直接把 `heroImage` 與 `gallery` 裡的 URL 改成正式圖片網址即可。

## 4. 報名方式

目前 CTA 預設使用 `mailto:` 開啟 Email。

正式上線可以把：

```js
btn.href = `mailto:...`
```

改成：

- Google Form
- Typeform
- LINE 官方帳號
- 自建報名表單
- 第三方金流／報名系統

不需要改整個頁面，只需要替換 CTA URL。

## 5. E2 視覺方向

這份程式刻意維持與目前 E2 官網相容的品牌語言：

- 大量留白
- 暖白、米色、自然木質感
- 少量晨光橘作為 accent
- 真實生活照片優先
- 簡潔現代的資訊層級
- 不採用旅遊電商式的大量優惠 Banner
- 活動故事先於價格與按鈕
- Gallery 強調「一起過過的日子」而不是純商品展示

正式上線時，可再將導覽列、Logo、Footer URL 與既有 E2 官網的正式路徑完全對齊。
