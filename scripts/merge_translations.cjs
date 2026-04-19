const fs = require('fs');
const path = require('path');

const newEn = require('./new_translations_en.json');

// Helper to translate values recursively for ID
function toId(obj) {
  if (typeof obj === 'string') return obj; // keep as is, user can translate later
  if (Array.isArray(obj)) return obj.map(toId);
  const result = {};
  for (const [k, v] of Object.entries(obj)) result[k] = toId(v);
  return result;
}

const localesDir = path.join(__dirname, '../src/i18n/locales');

// EN
const en = require(path.join(localesDir, 'en.json'));
Object.assign(en, newEn);

// Add navigation entries
en.navigation.ai = 'AI';
en.navigation.bookingEngine = 'Booking Engine';
en.navigation.customers = 'Customers';
en.navigation.ecf = 'ECF';
en.navigation.eventTicketing = 'Event Ticketing';
en.navigation.habitat = 'Habitat';
en.navigation.helpdesk = 'Helpdesk';
en.navigation.profilex = 'Profilex';
en.navigation.propertyManagement = 'Property Management';
en.navigation.simklinik = 'SIMKlinik';

// Add modulesPage entries
en.modulesPage.modules = en.modulesPage.modules || {};
en.modulesPage.modules.ai = 'AI-powered business intelligence and automation platform.';
en.modulesPage.modules.bookingEngine = 'Smart booking and reservation management for any business.';
en.modulesPage.modules.customers = 'Centralize customer data with 360° profiles and loyalty programs.';
en.modulesPage.modules.ecf = 'Transparent equity crowdfunding platform for operators and investors.';
en.modulesPage.modules.eventTicketing = 'End-to-end event management with QR code check-in.';
en.modulesPage.modules.habitat = 'Digital community management for residential environments.';
en.modulesPage.modules.helpdesk = 'Multi-channel customer support with SLA tracking and knowledge base.';
en.modulesPage.modules.profilex = 'MBTI, DISC, and custom psychological assessments with auto-grading.';
en.modulesPage.modules.propertyManagement = 'Integrated property management for landlords and property managers.';
en.modulesPage.modules.simklinik = 'Clinic information system with EMR, pharmacy, and billing.';

fs.writeFileSync(path.join(localesDir, 'en.json'), JSON.stringify(en, null, 2));
console.log('EN done');

// ID - copy structure from EN, keep same for now
const id = require(path.join(localesDir, 'id.json'));

// Build ID translations (Indonesian)
const idNew = JSON.parse(JSON.stringify(newEn));

// Override key strings with Indonesian
idNew.ai.title = 'Platform Kecerdasan Bisnis Berbasis AI';
idNew.ai.subtitle = 'Manfaatkan kekuatan kecerdasan buatan untuk mengotomatisasi proses, mendapatkan wawasan prediktif, dan membuat keputusan bisnis yang lebih cerdas.';
idNew.ai.badge = 'Dipercaya oleh 5.000+ Perusahaan';
idNew.ai.features.title = 'Solusi AI Lengkap untuk Bisnis Anda';
idNew.ai.features.subtitle = 'Dari analitik prediktif hingga otomatisasi cerdas — semua yang Anda butuhkan untuk membangun organisasi yang lebih cerdas.';
idNew.ai.benefits.title = 'Mengapa Memilih Omniflow AI';
idNew.ai.benefits.subtitle = 'Transformasikan bisnis Anda dengan AI kelas enterprise yang dibangun untuk skala besar.';
idNew.ai.cta.title = 'Siap Membuka Kekuatan AI?';
idNew.ai.cta.subtitle = 'Mulai perjalanan transformasi AI Anda hari ini dengan demo personal yang disesuaikan.';
idNew.ai.testimonials.title = 'Apa Kata Pelanggan Kami';
idNew.ai.testimonials.subtitle = 'Organisasi di seluruh dunia mempercayai Omniflow AI untuk menggerakkan operasi cerdas mereka.';

idNew.bookingEngine.title = 'Manajemen Booking & Reservasi Cerdas';
idNew.bookingEngine.subtitle = 'Sederhanakan reservasi, kelola sumber daya, dan puaskan pelanggan dengan engine booking canggih untuk bisnis modern.';
idNew.bookingEngine.badge = 'Dipercaya oleh 8.000+ Bisnis';
idNew.bookingEngine.features.title = 'Semua yang Dibutuhkan untuk Mengelola Booking';
idNew.bookingEngine.features.subtitle = 'Dari reservasi online hingga manajemen sumber daya — platform lengkap untuk bisnis berbasis booking.';
idNew.bookingEngine.benefits.title = 'Mengapa Memilih Omniflow Booking Engine';
idNew.bookingEngine.benefits.subtitle = 'Dibangun untuk perhotelan, kesehatan, salon, co-working space, dan bisnis berbasis sumber daya lainnya.';
idNew.bookingEngine.cta.title = 'Siap Menyederhanakan Reservasi Anda?';
idNew.bookingEngine.cta.subtitle = 'Lihat bagaimana Omniflow Booking Engine dapat mengubah manajemen reservasi Anda.';
idNew.bookingEngine.testimonials.title = 'Dipercaya oleh Bisnis Booking';
idNew.bookingEngine.testimonials.subtitle = 'Dari hotel hingga klinik, bisnis mengandalkan Omniflow Booking Engine untuk berjalan lancar.';

idNew.customers.title = 'Platform Manajemen Data Pelanggan';
idNew.customers.subtitle = 'Sentralisasi data pelanggan, bangun profil yang lebih kaya, dan berikan pengalaman personal yang mendorong loyalitas dan retensi.';
idNew.customers.badge = 'Dipercaya oleh 12.000+ Bisnis';
idNew.customers.features.title = 'Manajemen Pelanggan Lengkap';
idNew.customers.features.subtitle = 'Semua yang Anda butuhkan untuk mengenal pelanggan dan membangun hubungan yang langgeng.';
idNew.customers.benefits.title = 'Mengapa Memilih Omniflow Customers';
idNew.customers.benefits.subtitle = 'Bangun hubungan pelanggan yang lebih kuat dan dorong pertumbuhan bisnis yang berkelanjutan.';
idNew.customers.cta.title = 'Siap Mentransformasi Manajemen Pelanggan?';
idNew.customers.cta.subtitle = 'Lihat bagaimana Omniflow Customers memberikan pandangan lengkap tentang setiap hubungan pelanggan.';
idNew.customers.testimonials.title = 'Dipercaya oleh Bisnis yang Berfokus pada Pelanggan';
idNew.customers.testimonials.subtitle = 'Perusahaan di berbagai industri mengandalkan Omniflow Customers untuk mengenal dan mengembangkan basis pelanggan mereka.';

idNew.ecf.title = 'Platform Equity Crowdfunding';
idNew.ecf.subtitle = 'Hubungkan operator proyek dunia nyata dengan investor melalui platform pendanaan yang transparan, terstruktur, dan dapat dilacak sepanjang siklus hidupnya.';
idNew.ecf.badge = 'Dipercaya oleh 3.000+ Investor & Operator';
idNew.ecf.features.title = 'Solusi Crowdfunding Lengkap';
idNew.ecf.features.subtitle = 'Dari listing proyek hingga distribusi keuntungan — platform siklus hidup pendanaan yang sepenuhnya transparan.';
idNew.ecf.benefits.title = 'Mengapa Memilih Omniflow ECF';
idNew.ecf.benefits.subtitle = 'Platform paling transparan dan terstruktur untuk equity crowdfunding di Asia Tenggara.';
idNew.ecf.cta.title = 'Siap Mendemokratisasi Pendanaan Bisnis?';
idNew.ecf.cta.subtitle = 'Lihat bagaimana Omniflow ECF membuat crowdfunding terstruktur menjadi sederhana, transparan, dan patuh regulasi.';
idNew.ecf.testimonials.title = 'Operator & Investor Mempercayai Omniflow ECF';
idNew.ecf.testimonials.subtitle = 'Bisnis nyata yang mengumpulkan modal nyata melalui crowdfunding yang transparan.';

idNew.eventTicketing.title = 'Sistem Tiket & Registrasi Acara';
idNew.eventTicketing.subtitle = 'Kelola acara dari ujung ke ujung — dari penjualan tiket dan registrasi hingga check-in QR code dan analitik pasca acara.';
idNew.eventTicketing.badge = 'Dipercaya oleh 6.000+ Penyelenggara Acara';
idNew.eventTicketing.features.title = 'Solusi Manajemen Acara Lengkap';
idNew.eventTicketing.features.subtitle = 'Semua yang Anda butuhkan untuk menjalankan acara profesional dari registrasi hingga pelaporan pasca acara.';
idNew.eventTicketing.benefits.title = 'Mengapa Memilih Omniflow Event Ticketing';
idNew.eventTicketing.benefits.subtitle = 'Dari workshop kecil hingga konferensi besar — dibangun untuk berkembang sesuai acara Anda.';
idNew.eventTicketing.cta.title = 'Siap Mentransformasi Acara Anda?';
idNew.eventTicketing.cta.subtitle = 'Lihat bagaimana Omniflow Event Ticketing memudahkan penjualan tiket, pengelolaan peserta, dan pengukuran kesuksesan.';
idNew.eventTicketing.testimonials.title = 'Dipercaya oleh Penyelenggara Acara';
idNew.eventTicketing.testimonials.subtitle = 'Dari konferensi korporat hingga festival musik, penyelenggara mempercayai Omniflow.';

idNew.habitat.title = 'Manajemen Lingkungan Komunitas';
idNew.habitat.subtitle = 'Kelola lingkungan hunian dan komunitas dengan alat digital untuk fasilitas, pengumuman, tagihan, dan keterlibatan penghuni.';
idNew.habitat.badge = 'Dipercaya oleh 2.000+ Komunitas';
idNew.habitat.features.title = 'Platform Manajemen Komunitas Lengkap';
idNew.habitat.features.subtitle = 'Semua yang dibutuhkan manajer komunitas untuk menjalankan lingkungan hunian yang lancar dan terhubung.';
idNew.habitat.benefits.title = 'Mengapa Memilih Omniflow Habitat';
idNew.habitat.benefits.subtitle = 'Manajemen komunitas modern untuk apartemen, kondominium, perumahan, dan co-living space.';
idNew.habitat.cta.title = 'Siap Mendigitalisasi Komunitas Anda?';
idNew.habitat.cta.subtitle = 'Lihat bagaimana Omniflow Habitat mengubah manajemen komunitas menjadi pengalaman digital yang mulus.';
idNew.habitat.testimonials.title = 'Komunitas Menyukai Omniflow Habitat';
idNew.habitat.testimonials.subtitle = 'Penghuni dan manajer sama-sama menikmati kemudahan manajemen komunitas digital.';

idNew.helpdesk.title = 'Sistem Helpdesk & Dukungan Pelanggan';
idNew.helpdesk.subtitle = 'Berikan dukungan pelanggan yang luar biasa dengan platform helpdesk canggih — dari manajemen tiket hingga pelacakan SLA dan basis pengetahuan.';
idNew.helpdesk.badge = 'Dipercaya oleh 7.000+ Tim Support';
idNew.helpdesk.features.title = 'Platform Dukungan Lengkap';
idNew.helpdesk.features.subtitle = 'Semua yang dibutuhkan tim support Anda untuk memberikan layanan pelanggan yang cepat, konsisten, dan terukur.';
idNew.helpdesk.benefits.title = 'Mengapa Memilih Omniflow Helpdesk';
idNew.helpdesk.benefits.subtitle = 'Kurangi waktu respons, tingkatkan skor CSAT, dan skalakan operasi support Anda dengan mudah.';
idNew.helpdesk.cta.title = 'Siap Mentransformasi Dukungan Pelanggan?';
idNew.helpdesk.cta.subtitle = 'Lihat bagaimana Omniflow Helpdesk membantu tim Anda menyelesaikan masalah lebih cepat dan membuat pelanggan senang.';
idNew.helpdesk.testimonials.title = 'Tim Support Menyukai Omniflow Helpdesk';
idNew.helpdesk.testimonials.subtitle = 'Dari startup hingga enterprise, tim support mempercayai Omniflow untuk mengelola hubungan pelanggan.';

idNew.profilex.title = 'Platform Asesmen Psikologi';
idNew.profilex.subtitle = 'Jalankan asesmen MBTI, DISC, dan kustom dengan auto-grading, konfigurasi berversi, dan analitik tim yang dibangun untuk tim HR dan talent.';
idNew.profilex.badge = 'Dipercaya oleh 4.000+ Tim HR';
idNew.profilex.features.title = 'Mesin Asesmen Lengkap';
idNew.profilex.features.subtitle = 'Platform yang fleksibel dan ekstensibel untuk asesmen psikologi atau kompetensi apa pun — tanpa harus membangun ulang mesinnya setiap kali.';
idNew.profilex.benefits.title = 'Mengapa Memilih Omniflow Profilex';
idNew.profilex.benefits.subtitle = 'Platform asesmen yang tumbuh bersama organisasi Anda — dari rekrutmen startup hingga pengembangan talent enterprise.';
idNew.profilex.cta.title = 'Siap Membangun Praktik HR Berbasis Data?';
idNew.profilex.cta.subtitle = 'Lihat bagaimana Omniflow Profilex memudahkan pelaksanaan asesmen MBTI, DISC, dan kustom.';
idNew.profilex.testimonials.title = 'Tim HR Menyukai Omniflow Profilex';
idNew.profilex.testimonials.subtitle = 'Perusahaan menggunakan Profilex untuk merekrut lebih cerdas, membangun tim lebih baik, dan mengembangkan talent.';

idNew.propertyManagement.title = 'Sistem Manajemen Properti';
idNew.propertyManagement.subtitle = 'Kelola properti, penyewa, sewa, dan permintaan perawatan dalam satu platform terintegrasi yang dirancang untuk manajer properti dan pemilik.';
idNew.propertyManagement.badge = 'Dipercaya oleh 3.500+ Manajer Properti';
idNew.propertyManagement.features.title = 'Manajemen Properti Lengkap';
idNew.propertyManagement.features.subtitle = 'Dari listing unit hingga manajemen penyewa dan perawatan — semuanya dalam satu tempat.';
idNew.propertyManagement.benefits.title = 'Mengapa Memilih Omniflow PMS';
idNew.propertyManagement.benefits.subtitle = 'Software manajemen properti modern yang menghemat waktu, meningkatkan koleksi, dan berkembang sesuai portofolio Anda.';
idNew.propertyManagement.cta.title = 'Siap Mentransformasi Operasi Properti Anda?';
idNew.propertyManagement.cta.subtitle = 'Lihat bagaimana Omniflow PMS menyederhanakan manajemen penyewa, pengumpulan sewa, dan perawatan.';
idNew.propertyManagement.testimonials.title = 'Manajer Properti Mempercayai Omniflow PMS';
idNew.propertyManagement.testimonials.subtitle = 'Dari properti residensial hingga komersial, manajer mengandalkan Omniflow untuk beroperasi secara efisien.';

idNew.simklinik.title = 'Sistem Informasi Manajemen Klinik';
idNew.simklinik.subtitle = 'Digitalisasi operasional klinik atau rumah sakit Anda dengan manajemen pasien, rekam medis, apotek, dan penagihan yang terintegrasi — dalam satu sistem.';
idNew.simklinik.badge = 'Dipercaya oleh 1.500+ Penyedia Layanan Kesehatan';
idNew.simklinik.features.title = 'Manajemen Klinik Lengkap';
idNew.simklinik.features.subtitle = 'Dari registrasi pasien hingga rekam medis dan penagihan — sistem informasi klinik yang sepenuhnya terintegrasi.';
idNew.simklinik.benefits.title = 'Mengapa Memilih Omniflow SIMKlinik';
idNew.simklinik.benefits.subtitle = 'Dibangun untuk penyedia layanan kesehatan Indonesia — klinik, rumah sakit, dan praktik spesialis.';
idNew.simklinik.cta.title = 'Siap Memodernisasi Operasional Kesehatan Anda?';
idNew.simklinik.cta.subtitle = 'Lihat bagaimana Omniflow SIMKlinik mengubah alur kerja klinis dan meningkatkan perawatan pasien.';
idNew.simklinik.testimonials.title = 'Penyedia Layanan Kesehatan Mempercayai SIMKlinik';
idNew.simklinik.testimonials.subtitle = 'Klinik dan rumah sakit di seluruh Indonesia mengandalkan Omniflow SIMKlinik untuk operasional sehari-hari.';

Object.assign(id, idNew);

id.navigation = id.navigation || {};
id.navigation.ai = 'AI';
id.navigation.bookingEngine = 'Booking Engine';
id.navigation.customers = 'Pelanggan';
id.navigation.ecf = 'ECF';
id.navigation.eventTicketing = 'Tiket Acara';
id.navigation.habitat = 'Habitat';
id.navigation.helpdesk = 'Helpdesk';
id.navigation.profilex = 'Profilex';
id.navigation.propertyManagement = 'Manajemen Properti';
id.navigation.simklinik = 'SIMKlinik';

id.modulesPage = id.modulesPage || {};
id.modulesPage.modules = id.modulesPage.modules || {};
id.modulesPage.modules.ai = 'Platform kecerdasan bisnis dan otomatisasi berbasis AI.';
id.modulesPage.modules.bookingEngine = 'Manajemen booking dan reservasi cerdas untuk bisnis apa pun.';
id.modulesPage.modules.customers = 'Sentralisasi data pelanggan dengan profil 360° dan program loyalitas.';
id.modulesPage.modules.ecf = 'Platform equity crowdfunding transparan untuk operator dan investor.';
id.modulesPage.modules.eventTicketing = 'Manajemen acara dari ujung ke ujung dengan check-in QR code.';
id.modulesPage.modules.habitat = 'Manajemen komunitas digital untuk lingkungan hunian.';
id.modulesPage.modules.helpdesk = 'Dukungan pelanggan multi-channel dengan pelacakan SLA dan basis pengetahuan.';
id.modulesPage.modules.profilex = 'Asesmen MBTI, DISC, dan kustom dengan auto-grading.';
id.modulesPage.modules.propertyManagement = 'Manajemen properti terintegrasi untuk pemilik dan manajer properti.';
id.modulesPage.modules.simklinik = 'Sistem informasi klinik dengan EMR, apotek, dan penagihan.';

fs.writeFileSync(path.join(localesDir, 'id.json'), JSON.stringify(id, null, 2));
console.log('ID done');

// ZH - Chinese translations
const zh = require(path.join(localesDir, 'zh.json'));
const zhNew = JSON.parse(JSON.stringify(newEn));

zhNew.ai.title = 'AI 驱动的商业智能平台';
zhNew.ai.subtitle = '利用人工智能的力量自动化流程、获取预测性洞察，并推动更智能的商业决策。';
zhNew.ai.badge = '受到5,000+企业信赖';
zhNew.ai.features.title = '为您的企业提供完整的AI解决方案';
zhNew.ai.features.subtitle = '从预测分析到智能自动化 — 构建更智能组织所需的一切。';
zhNew.ai.benefits.title = '为何选择 Omniflow AI';
zhNew.ai.benefits.subtitle = '以企业级AI转型您的业务，专为规模化而构建。';
zhNew.ai.cta.title = '准备好释放AI的力量了吗？';
zhNew.ai.cta.subtitle = '立即开始您的AI转型之旅，享受个性化演示。';
zhNew.ai.testimonials.title = '客户的评价';
zhNew.ai.testimonials.subtitle = '全球各地的组织信任Omniflow AI驱动他们的智能运营。';

zhNew.bookingEngine.title = '智能预订与预约管理';
zhNew.bookingEngine.subtitle = '通过为现代企业打造的强大预订引擎简化预约、管理资源并让客户满意。';
zhNew.bookingEngine.badge = '受到8,000+企业信赖';
zhNew.bookingEngine.features.title = '管理预订所需的一切';
zhNew.bookingEngine.features.subtitle = '从在线预约到资源管理 — 适合任何预订型业务的完整平台。';
zhNew.bookingEngine.benefits.title = '为何选择 Omniflow 预订引擎';
zhNew.bookingEngine.benefits.subtitle = '专为酒店、医疗、美容、联合办公等资源型业务而构建。';
zhNew.bookingEngine.cta.title = '准备好简化您的预约流程了吗？';
zhNew.bookingEngine.cta.subtitle = '了解Omniflow预订引擎如何改变您的预约管理。';
zhNew.bookingEngine.testimonials.title = '预订业务的信赖之选';
zhNew.bookingEngine.testimonials.subtitle = '从酒店到诊所，企业依靠Omniflow预订引擎顺畅运营。';

zhNew.customers.title = '客户数据管理平台';
zhNew.customers.subtitle = '集中客户数据，构建更丰富的客户档案，提供个性化体验以促进忠诚度和留存率。';
zhNew.customers.badge = '受到12,000+企业信赖';
zhNew.customers.features.title = '完整的客户管理';
zhNew.customers.features.subtitle = '了解您的客户并建立持久关系所需的一切。';
zhNew.customers.benefits.title = '为何选择 Omniflow Customers';
zhNew.customers.benefits.subtitle = '建立更强的客户关系，推动可持续的业务增长。';
zhNew.customers.cta.title = '准备好改变客户管理了吗？';
zhNew.customers.cta.subtitle = '了解Omniflow Customers如何为您提供每个客户关系的完整视图。';
zhNew.customers.testimonials.title = '以客户为中心的企业信赖之选';
zhNew.customers.testimonials.subtitle = '各行业的企业依靠Omniflow Customers了解并扩大其客户群。';

zhNew.ecf.title = '股权众筹平台';
zhNew.ecf.subtitle = '通过透明、结构化、全生命周期追踪的融资平台，将现实世界的项目运营商与投资者联系起来。';
zhNew.ecf.badge = '受到3,000+投资者和运营商信赖';
zhNew.ecf.features.title = '完整的众筹解决方案';
zhNew.ecf.features.subtitle = '从项目上架到利润分配 — 全透明的资金生命周期平台。';
zhNew.ecf.benefits.title = '为何选择 Omniflow ECF';
zhNew.ecf.benefits.subtitle = '东南亚最透明、最结构化的股权众筹平台。';
zhNew.ecf.cta.title = '准备好使商业融资民主化了吗？';
zhNew.ecf.cta.subtitle = '了解Omniflow ECF如何让结构化众筹变得简单、透明且合规。';
zhNew.ecf.testimonials.title = '运营商与投资者信赖Omniflow ECF';
zhNew.ecf.testimonials.subtitle = '通过透明众筹筹集真实资本的真实企业。';

zhNew.eventTicketing.title = '活动票务与报名系统';
zhNew.eventTicketing.subtitle = '端到端管理活动 — 从票务和报名到二维码签到和活动后分析。';
zhNew.eventTicketing.badge = '受到6,000+活动主办方信赖';
zhNew.eventTicketing.features.title = '完整的活动管理解决方案';
zhNew.eventTicketing.features.subtitle = '从报名到活动后报告，运营专业活动所需的一切。';
zhNew.eventTicketing.benefits.title = '为何选择 Omniflow 活动票务';
zhNew.eventTicketing.benefits.subtitle = '从小型工作坊到大型会议 — 专为随活动规模增长而构建。';
zhNew.eventTicketing.cta.title = '准备好改变您的活动了吗？';
zhNew.eventTicketing.cta.subtitle = '了解Omniflow活动票务如何轻松实现票务销售、参与者管理和成功衡量。';
zhNew.eventTicketing.testimonials.title = '活动主办方的信赖之选';
zhNew.eventTicketing.testimonials.subtitle = '从企业会议到音乐节，主办方信赖Omniflow。';

zhNew.habitat.title = '社区环境管理';
zhNew.habitat.subtitle = '利用数字化工具管理住宅和社区环境，包括设施、公告、账单和居民互动。';
zhNew.habitat.badge = '受到2,000+社区信赖';
zhNew.habitat.features.title = '完整的社区管理平台';
zhNew.habitat.features.subtitle = '社区管理者运营顺畅、互联互通的住宅环境所需的一切。';
zhNew.habitat.benefits.title = '为何选择 Omniflow Habitat';
zhNew.habitat.benefits.subtitle = '适用于公寓、共管公寓、住宅小区和联合生活空间的现代社区管理。';
zhNew.habitat.cta.title = '准备好数字化您的社区了吗？';
zhNew.habitat.cta.subtitle = '了解Omniflow Habitat如何将社区管理转变为无缝的数字体验。';
zhNew.habitat.testimonials.title = '社区喜爱Omniflow Habitat';
zhNew.habitat.testimonials.subtitle = '居民和管理者都享受数字化社区管理的便利。';

zhNew.helpdesk.title = '帮助台与客户支持系统';
zhNew.helpdesk.subtitle = '通过强大的帮助台平台提供卓越的客户支持 — 从工单管理到SLA跟踪和知识库。';
zhNew.helpdesk.badge = '受到7,000+支持团队信赖';
zhNew.helpdesk.features.title = '完整的支持平台';
zhNew.helpdesk.features.subtitle = '您的支持团队提供快速、一致、可衡量的客户服务所需的一切。';
zhNew.helpdesk.benefits.title = '为何选择 Omniflow Helpdesk';
zhNew.helpdesk.benefits.subtitle = '缩短响应时间、提高CSAT分数并轻松扩展您的支持运营。';
zhNew.helpdesk.cta.title = '准备好改变客户支持了吗？';
zhNew.helpdesk.cta.subtitle = '了解Omniflow Helpdesk如何帮助您的团队更快解决问题并让客户满意。';
zhNew.helpdesk.testimonials.title = '支持团队喜爱Omniflow Helpdesk';
zhNew.helpdesk.testimonials.subtitle = '从初创公司到企业，支持团队信赖Omniflow管理客户关系。';

zhNew.profilex.title = '心理测评平台';
zhNew.profilex.subtitle = '运行MBTI、DISC和自定义心理测评，配备自动评分、版本化配置和团队分析，专为HR和人才团队打造。';
zhNew.profilex.badge = '受到4,000+人力资源团队信赖';
zhNew.profilex.features.title = '完整的测评引擎';
zhNew.profilex.features.subtitle = '灵活、可扩展的平台，适用于任何心理或能力测评 — 无需每次重建引擎。';
zhNew.profilex.benefits.title = '为何选择 Omniflow Profilex';
zhNew.profilex.benefits.subtitle = '随组织成长的测评平台 — 从初创招聘到企业人才发展。';
zhNew.profilex.cta.title = '准备好建立数据驱动的HR实践了吗？';
zhNew.profilex.cta.subtitle = '了解Omniflow Profilex如何让MBTI、DISC和自定义测评变得轻松。';
zhNew.profilex.testimonials.title = '人力资源团队喜爱Omniflow Profilex';
zhNew.profilex.testimonials.subtitle = '企业使用Profilex进行更聪明的招聘、建立更好的团队并培养人才。';

zhNew.propertyManagement.title = '物业管理系统';
zhNew.propertyManagement.subtitle = '在一个为物业经理和房东设计的集成平台中管理房产、租户、租约和维护请求。';
zhNew.propertyManagement.badge = '受到3,500+物业经理信赖';
zhNew.propertyManagement.features.title = '完整的物业管理';
zhNew.propertyManagement.features.subtitle = '从房源列表到租户管理和维护 — 一站式解决方案。';
zhNew.propertyManagement.benefits.title = '为何选择 Omniflow PMS';
zhNew.propertyManagement.benefits.subtitle = '现代物业管理软件，节省时间、改善收款，并随您的投资组合扩展。';
zhNew.propertyManagement.cta.title = '准备好改变您的物业运营了吗？';
zhNew.propertyManagement.cta.subtitle = '了解Omniflow PMS如何简化租户管理、租金收取和维护。';
zhNew.propertyManagement.testimonials.title = '物业经理信赖Omniflow PMS';
zhNew.propertyManagement.testimonials.subtitle = '从住宅到商业物业，经理依靠Omniflow高效运营。';

zhNew.simklinik.title = '诊所信息管理系统';
zhNew.simklinik.subtitle = '通过集成的患者管理、病历、药房和账单数字化您的诊所或医院运营 — 全部在一个系统中。';
zhNew.simklinik.badge = '受到1,500+医疗机构信赖';
zhNew.simklinik.features.title = '完整的诊所管理';
zhNew.simklinik.features.subtitle = '从患者登记到病历和账单 — 完全集成的诊所信息系统。';
zhNew.simklinik.benefits.title = '为何选择 Omniflow SIMKlinik';
zhNew.simklinik.benefits.subtitle = '专为印度尼西亚医疗机构打造 — 诊所、医院和专科实践。';
zhNew.simklinik.cta.title = '准备好实现医疗运营现代化了吗？';
zhNew.simklinik.cta.subtitle = '了解Omniflow SIMKlinik如何改变临床工作流程并改善患者护理。';
zhNew.simklinik.testimonials.title = '医疗机构信赖SIMKlinik';
zhNew.simklinik.testimonials.subtitle = '印度尼西亚各地的诊所和医院依靠Omniflow SIMKlinik进行日常运营。';

Object.assign(zh, zhNew);

zh.navigation = zh.navigation || {};
zh.navigation.ai = 'AI';
zh.navigation.bookingEngine = '预订引擎';
zh.navigation.customers = '客户管理';
zh.navigation.ecf = 'ECF';
zh.navigation.eventTicketing = '活动票务';
zh.navigation.habitat = '社区管理';
zh.navigation.helpdesk = '帮助台';
zh.navigation.profilex = 'Profilex';
zh.navigation.propertyManagement = '物业管理';
zh.navigation.simklinik = '诊所管理';

zh.modulesPage = zh.modulesPage || {};
zh.modulesPage.modules = zh.modulesPage.modules || {};
zh.modulesPage.modules.ai = 'AI驱动的商业智能和自动化平台。';
zh.modulesPage.modules.bookingEngine = '适合任何业务的智能预订和预约管理。';
zh.modulesPage.modules.customers = '集中客户数据，提供360°档案和忠诚度计划。';
zh.modulesPage.modules.ecf = '面向运营商和投资者的透明股权众筹平台。';
zh.modulesPage.modules.eventTicketing = '端到端活动管理，支持二维码签到。';
zh.modulesPage.modules.habitat = '住宅环境的数字化社区管理。';
zh.modulesPage.modules.helpdesk = '多渠道客户支持，具有SLA跟踪和知识库。';
zh.modulesPage.modules.profilex = 'MBTI、DISC和自定义测评，配备自动评分。';
zh.modulesPage.modules.propertyManagement = '面向房东和物业经理的集成物业管理。';
zh.modulesPage.modules.simklinik = '含EMR、药房和账单的诊所信息系统。';

fs.writeFileSync(path.join(localesDir, 'zh.json'), JSON.stringify(zh, null, 2));
console.log('ZH done');

console.log('All translations merged successfully!');
