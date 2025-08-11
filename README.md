## Teknik Gereksinimler ve Kullanılan Teknolojiler

Proje, talep edilen tüm teknik gereksinimleri karşılamaktadır:

- **Framework:** Next.js (App Router)
- **Kütüphane:** React
- **Dil:** JavaScript (ES6+)
- **Stil:** SASS (SCSS) ve Bootstrap 5
- **Veri Kaynağı:** Proje içine eklenmiş `public/hotels.json` mock dosyası.

---

## Uygulanan Özellikler

### Temel Gereksinimler
- **Component Yapısı:** Uygulama, yeniden kullanılabilir ve yönetilebilir component'lere ( `HotelCard`, `HotelList`, `Pagination` vb.) ayrılmıştır.
- **Servis Katmanı Mimarisi:**
    - `api.service.js`: Tüm ağ istekleri için `GET`, `POST` gibi temel metodları içeren genel bir motor.
    - `hotel.service.js`: Sadece otellerle ilgili veri işlemlerini yöneten, `api.service`'i kullanan özel bir servis.
- **Sunucu Taraflı Veri Yükleme (SSR):** Next.js App Router'ın varsayılan sunucu component'leri sayesinde, otel verileri sayfa render edilmeden önce sunucu tarafında çekilerek performansı ve SEO uyumluluğunu artırır.
- **Responsive Tasarım:** Arayüz, Bootstrap ve özel media query'ler kullanılarak mobil, tablet ve masaüstü cihazlarda sorunsuz bir kullanıcı deneyimi sunar.
- **Lazy Loading ile Görsel Optimizasyonu:** Otel resimleri, `next/image` component'i kullanılarak otomatik olarak optimize edilir ve kullanıcı ekranına girmeden yüklenmez
- **Pagination Desteği:** Otel listesi, kullanıcı dostu bir sayfalama (pagination) yapısıyla sunularak tüm verinin tek seferde yüklenmesi engellenir.

---

## Kurulum ve Çalıştırma

Projeyi yerel makinenizde çalıştırmak için aşağıdaki adımları izleyin:

1.  **Projeyi Klonlayın:**
    ```bash
    git clone [PROJE_REPO_URL]
    cd [PROJE_KLASOR_ADI]
    ```

2.  **Gerekli Paketleri Yükleyin:**
    Proje, `npm` paket yöneticisini kullanır. Gerekli tüm bağımlılıkları yüklemek için aşağıdaki komutu çalıştırın:
    ```bash
    npm install
    ```

3.  **Geliştirme Sunucusunu Başlatın:**
    Kurulum tamamlandıktan sonra, geliştirme sunucusunu başlatmak için aşağıdaki komutu çalıştırın:
    ```bash
    npm run dev
    ```

4.  **Uygulamayı Görüntüleyin:**
    Sunucu başarıyla başlatıldığında, web tarayıcınızda [http://localhost:3000](http://localhost:3000) adresini ziyaret ederek uygulamayı görebilirsiniz.

---

