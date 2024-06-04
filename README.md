# Kullanıcı Yönetim Paneli (Geliştirme Aşamasında)

**Ön Bilgilendirme:**
Bu proje geliştirme aşamasındadır. Proje tanıtımı aşağıdaki gibidir:

**Proje Adı: Kullanıcı Yönetim Paneli**

**Açıklama:**
Bu proje, kullanıcı yönetimi ve yetkilendirme işlevselliğini sağlayan bir web uygulaması geliştirmeyi amaçlar. Modern web teknolojileri kullanılarak oluşturulan bu uygulama, kullanıcıların sistemdeki rollerini ve erişim haklarını yönetmelerini kolaylaştırır. React, Redux, ve MUI gibi önemli araçlarla oluşturulan kullanıcı dostu bir arayüz sunar. Backend kısmı ise Node.js ve PostgreSQL kullanılarak geliştirilmiş olup, güvenli ve ölçeklenebilir bir altyapı sağlar.

**Özellikler:**

1. **Yetki Yönetimi:**
   - Kullanıcılar için granüler yetki seviyeleri tanımlama imkanı.
   - Önceden tanımlanmış yetki tabloları (örneğin, panel erişimi, kullanıcı yönetimi vb.) ile hızlı başlangıç sağlama.
   - Yöneticilerin yetki grupları oluşturma ve bunları kullanıcılara atama yeteneği.

2. **Kullanıcı Yönetimi:**
   - Yeni kullanıcıların oluşturulması ve varolanların düzenlenmesi.
   - Kullanıcıların yetki gruplarına atanması ve bu gruplar aracılığıyla erişim haklarının yönetilmesi.
   - Kullanıcıların profillerinin görüntülenmesi ve güncellenmesi.

3. **Gelişmiş Güvenlik:**
   - JWT (JSON Web Token) tabanlı kimlik doğrulama ve yetkilendirme.
   - Hassas verilerin güvenliği için şifreleme ve güvenlik önlemleri.

4. **Kullanıcı Dostu Arayüz:**
   - Modern tasarım standartlarına uygun kullanıcı arayüzü.
   - MUI ile özelleştirilebilir bileşenlerle zengin ve etkileşimli deneyim.
   - Kullanıcıların kolayca gezinmesini ve işlemlerini gerçekleştirmesini sağlayacak sezgisel arayüz.

**Teknik Özellikler:**

- **Frontend:**
  - React: Kullanıcı arayüzü (UI) bileşenlerini oluşturmak ve yönetmek için kullanılır.
  - Redux: Uygulama genelindeki durum yönetimi için kullanılır. Kullanıcı bilgileri, yetki durumu vb. gibi verilerin depolanmasını sağlar.
  - MUI (Material-UI): Modern ve özelleştirilebilir kullanıcı arayüzü bileşenleri sağlar.
  - Vite: Hızlı ve optimize edilmiş bir geliştirme ortamı sağlar.

- **Backend:**
  - Node.js: Hızlı ve etkili bir şekilde backend mantığını oluşturmak için kullanılır.
  - Express.js: Web uygulamaları geliştirmek için minimalist ve esnek bir web framework'üdür.
  - PostgreSQL: İlişkisel veritabanı yönetimi için tercih edilen açık kaynaklı bir çözümdür.

- **Kimlik Doğrulama ve Yetkilendirme:**
  - JWT (JSON Web Token): Kullanıcı kimlik doğrulaması ve yetkilendirme için kullanılır. Güvenli bir oturum yönetimi sağlar.
  - Kullanıcı Yetkileri ve Grupları: Kullanıcıların yetki seviyeleri ve yetki grupları, PostgreSQL veritabanında tutulur.

- **Güvenlik:**
  - Şifreleme: Hassas verilerin güvenliği için uygun şifreleme algoritmaları kullanılır.
  - Salting: Kullanıcı şifrelerinin güvenliği için salt kullanımı.

**Teknik Özellikler:**

Proje, frontend ve backend olmak üzere iki ana bileşene sahiptir. Kurulum talimatları bileşenlerin kendi README dosyasında ayrıntılı olarak belirtilmiştir.
