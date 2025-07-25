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

---

**Lisans:** MIT  
**Geliştirici:** Hakkı Cengiz (2025)
