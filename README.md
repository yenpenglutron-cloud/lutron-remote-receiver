# Lutron Remote Web Receiver

這是給 iPhone、iPad、Mac、Windows 同事使用的瀏覽器接收端。它不讀取 USB，只透過與 V28 相同的 6 位配對碼接收跨網路測試資料。

## 部署

將此資料夾所有檔案部署至任一 HTTPS 靜態網站（公司 Web Server、Cloudflare Pages、GitHub Pages 等）。完成後，把該 HTTPS 網址提供給同事。

同事以 Safari／Chrome 開啟網址、輸入發射端建立的 6 位碼即可加入；同一組碼可讓多位同事同時接收。

## 限制

此網頁與 V28 一樣使用 PeerJS/WebRTC。網路或防火牆限制嚴格時，可能需另外配置 TURN 中繼服務，才能保證跨國連線成功率。
