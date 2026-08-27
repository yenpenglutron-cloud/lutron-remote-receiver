# Lutron Remote Web Receiver

這是給 iPhone、iPad、Mac、Windows 使用者使用的瀏覽器接收端。它不讀取 USB，只透過與 V28 相同的 6 位配對碼接收跨網路測試資料。

## 通道名稱編輯

- 點選數據卡片上方的通道名稱即可編輯，名稱會保存在目前瀏覽器。
- 數據卡片、讀取通道、Logger、CSV 與 XLSX 共用同一個名稱。
- Logger／匯出欄位格式為「來源-通道 名稱」，例如 `A-1 濕度`、`A-2 溫度`。
- 可在編輯視窗按「恢復原名」回到發射端原始名稱。

## 部署

將此資料夾所有檔案部署至任一 HTTPS 靜態網站（公司 Web Server、Cloudflare Pages、GitHub Pages 等）。完成後，把該 HTTPS 網址提供給使用者。

使用者以 Safari／Chrome 開啟網址、輸入發射端建立的 6 位碼即可加入；同一組碼可讓多位使用者同時接收。

## 通道校正

每張測值卡可設定加、減、乘、除校正係數。啟用後，卡片數值、MAX／MIN／AVG、Alarm、Logger、CSV 與 XLSX 都使用校正後數值；未設定校正的通道維持原始數值。

## 限制

此網頁與 V28 一樣使用 PeerJS/WebRTC。網路或防火牆限制嚴格時，可能需另外配置 TURN 中繼服務，才能保證跨國連線成功率。
