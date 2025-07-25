# timurlenk-chess
Timur Satrancı, 14. yüzyılda yaşayan büyük Türk hükümdarı ve komutan Emir Timur (Tamerlane) tarafından geliştirilen özel bir satranç türüdür. Klasik satranca benzer kurallara sahip olmakla birlikte, bu satranç türünde deve, zürafa, debbabe, mancınık, bakan (veliaht) gibi özgün taşlar yer alır. 


# Timur Satranç Oyunu

Bu proje, **Timur Satranç** kurallarına uygun özel bir satranç oyununu HTML, CSS ve JavaScript ile oynanabilir şekilde sunar. 
Modern satranca göre daha büyük bir tahta (11x11), farklı taşlar ve kurallar içerir.

---

## 🧩 Nasıl Oynanır?

- Oyuna başlamak için "Yeni Oyun" veya "Yeni Botlu Oyun" butonuna tıklayın.
- Beyaz taşlar ile ilk hamleyi yapın.
- Bir taşa tıkladığınızda geçerli hamle kareleri **vurgulanır**.
- İkinci tıklama hamleyi gerçekleştirir.
- Bot ile oynarken, bot kendi hamlesini otomatik oynar.
- "Pes Et" butonuyla oyunu bırakabilirsiniz.
- "Beraberlik Teklif Et" ile eşitlik önerisinde bulunabilirsiniz.
- Her hamle sonrası oyun durumu otomatik kaydedilir. Sayfa yenilendiğinde oyun kaldığı yerden devam eder.
- Şah, rakibin "Saray" karesine girerse oyun **beraberlikle** biter.
- Eğer bir oyuncunun şahı yoksa veya şah mat durumundaysa oyun sona erer.
- Veliaht ("bakan") hayattaysa şah **alınamaz**.

---

## 💾 Aşamalar ve Gelişim Süreci

### Aşama 1-10
- HTML/CSS/JS ile temel 11x11 tahta yapısı kuruldu.
- Taşlar ve sembolleri tanımlandı, 3 sıra dizilim sağlandı.
- Saray kareleri ve berabere durumu tanımlandı.

### Aşama 11-20
- Her hamle sonrası oyun `localStorage`'a kaydedildi.
- Sayfa yenilendiğinde oyun kaldığı yerden yüklendi.
- Bot entegrasyonu (rastgele hamle yapan) eklendi.
- Yeni Oyun, Yeni Botlu Oyun, Pes Et ve Beraberlik butonları eklendi.
- Botlu oyunda pes ve beraberlik talepleri otomatik kabul edildi.

### Aşama 21-30
- Tüm taşların yerleşimi güncellendi (piyon, deve, zürafa, bakan vb.).
- Tüm özel taş hareket kuralları `getValidMoves()` fonksiyonunda eklendi.
- Taş tıklama ve geçerli kareleri vurgulama özelliği tamamlandı.
- Bot sırayla ve zaman gecikmeli hamle yapacak şekilde geliştirildi.

### Aşama 31-35
- Proje yapısı 4 dosya olarak bölündü: `index.html`, `style.css`, `script.js`, `moves.js`.
- Bu dosyalar `script.js`'te birleştirilerek sadeleştirildi.
- Kodlar tek dosya halinde GitHub'a kolayca yüklenebilir hale getirildi.

### Aşama 36-40
- Her hamlede oyun sonu kontrolü (`announceWinner`) eklendi.
- Şah mat kontrolü `isGameOver()` fonksiyonu ile detaylı hale getirildi.
- Veliaht (bakan) varsa şah alınamaması kuralı işlendi.
- Şah, kaçacak yeri yoksa ve veliaht da yoksa oyun sonu tetiklendi.
- Bot ve kullanıcı için hamle sonrası oyun bitişi kontrolü sağlandı.

---

## 🧠 Kurallar Özeti

- **Şah** rakibin sarayına girerse beraberlik olur.
- **Veliaht** (bakan) hayattaysa şah alınamaz.
- Mat veya şah yoksa oyun sona erer.
- Taşlar:
  - Piyon (♟): Öne gider, çapraz alır, terfi eder.
  - Deve (🐪), Zürafa (🦒), Debbabe (🎯), Bakan (⚜️), Mancınık (🛡), Fil (🐘) gibi özgün hareketlere sahip taşlar içerir.

---

## ✨ Katkı ve Geliştirme

Geliştirme süreci devam etmektedir. Eksik taş hareketleri ve görsel iyileştirmeler için katkıda bulunabilirsiniz. 
Yeni özellikler veya stratejik bot eklemek isterseniz PR göndermekten çekinmeyin.

✅ TODO – Geliştirilecek Özellikler ve İyileştirmeler

🎮 Oyun Mekanikleri

[ ] Tüm taşların özel hareket kurallarının eksiksiz şekilde tanımlanması (getValidMoves genişletmesi)

[ ] Terfi sistemi: Piyon belirli bir noktaya ulaştığında başka taşa dönüşebilmeli

[ ] Saray bölgesine giriş kontrolü: Şah rakip saraya girdiğinde oyun otomatik berabere bitmeli

[ ] Veliaht (Bakan) savunması kuralı: Şah tehdit altındayken bakan hayattaysa şah alınamamalı

[ ] Oyun geçmişi gösterimi (hamle listesi): Sağ veya alt panelde yapılan hamlelerin sıralı listesi

[ ] Hamle geri alma (Undo): Son hamleyi geri alma butonu


🤖 Bot Geliştirmeleri

[ ] Şu anki bot yalnızca rastgele hamle yapıyor → Basit seviye stratejik bot geliştir

[ ] Zorluk seviyeleri: Kolay, Orta, Zor

[ ] Minimax algoritması kullanan akıllı bot entegresi

[ ] Botun hamle süresini ayarlayabilme


💾 Kayıt & Devam Özellikleri

[x] Oyun durumunu localStorage ile saklama

[ ] Oyun tekrar açıldığında “Kaldığın yerden devam et” özelliği için yüklenme animasyonu

[ ] .json olarak indir / yükle sistemi (oyun durumunu dışa ve içe aktar)


🖼 Görsel & UI İyileştirmeleri

[ ] Temalar (klasik, taşlı tahta, Timur dönemi esintili)

[ ] Taşların SVG ikonlarıyla görselleştirilmesi

[ ] Responsive mobil uyumlu tasarım

[ ] Gece modu / gün modu desteği

[ ] Oyun bitiş ekranı (kazanan, süre, toplam hamle sayısı vs. ile)


🌐 Çoklu Dil Desteği

[ ] İngilizce, Türkçe, Arapça gibi diller arasında geçiş

[ ] Metinlerin çeviri dosyaları üzerinden yönetilmesi (örneğin lang/tr.json, lang/en.json)


🧠 Eğitim & Analiz

[ ] “Nasıl Oynanır?” rehberi ve kurallar görsel anlatımı

[ ] Eğitim modu: taşların nasıl hareket ettiğini anlatan etkileşimli öğretici

[ ] Her taş için örnek hamle gösterme özelliği

[ ] Oyun analiz modu (kimin daha üstün olduğu, hangi taş daha çok etkiliydi vb.)


🌐 Çevrimiçi / Çok Oyunculu

[ ] WebSocket ile gerçek zamanlı çok oyunculu destek

[ ] Oda oluştur / katıl sistemine sahip arkadaşla oynama modu

[ ] Sıra-tabanlı (turn-based) e-posta/bağlantı ile oyun gönderimi


📁 Proje Yönetimi

[ ] Kodların modüler hale getirilmesi (her taş tipi için ayrı JS modülü)

[ ] Test altyapısı (Jest veya Mocha ile taş hareket testleri)

[ ] GitHub Actions ile otomatik build/test entegrasyonu

[ ] docs/ klasörüne detaylı oyun kuralları ve örnek senaryolar


### 🙌 Katkı Alanı
- [ ] 🧑‍💻 Katkıda bulunanlar için özel liste oyun içinde ve `README` dosyasında gösterilecek.
- [ ] 💬 Açılan issue veya pull request’ler katkı olarak sayılacak ve otomatik güncellenecek yapıya bağlanacak.

---

Katkı sağlamak isteyen geliştiriciler bu listedeki işaretlenmemiş maddelerden başlayabilir. `README.md` dosyasına isminizi ekleyin veya bir katkı PR'ı açın. 

---

💡 Katkı Sağlamak İsteyenler İçin

issues sayfasından açık görevleri alabilirsiniz

PR açmadan önce main branch'teki son durumu çektiğinizden emin olun

Yeni taşlar veya kurallar için moves.js dosyasını düzenleyebilirsiniz

Her katkı için kod içinde yorum ve açıklama eklemeye özen gösterin


---

**Lisans:** MIT  
**Geliştirici:** Hakkı Cengiz (2025)
