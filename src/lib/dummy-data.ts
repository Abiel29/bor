// Data dummy untuk development
import { FirmInfo, TeamMember, Service, Testimonial } from './types';

export const firmInfo: FirmInfo = {
  id: 1,
  name: 'BPR Cakradana',
  tagline: 'Solusi Keuangan Terpercaya untuk Komunitas Anda',
  mission: 'Menyediakan layanan keuangan yang inklusif, aman, dan mudah dijangkau untuk mendukung pertumbuhan UMKM dan kesejahteraan masyarakat.',
  vision: 'Menjadi Bank Perkreditan Rakyat pilihan utama yang memberikan nilai tambah bagi nasabah dan komunitas.',
  whatsapp_number: '+62812-0000-0000',
  email: 'info@bprcakradana.co.id',
  phone: '+62-21-0000-0000',
  address: 'Jl. Raya Cakradana No. 1, Jakarta, Indonesia',
  operation_hours: 'Senin - Jumat: 08:00 - 15:00 WIB',
  seo_title: 'BPR Cakradana - Bank Perkreditan Rakyat',
  seo_description: 'Tabungan, deposito, dan kredit UMKM dengan layanan cepat, aman, dan bersahabat. Bergabung bersama BPR Cakradana hari ini.',
  created_at: '2024-01-01T00:00:00Z',
  updated_at: '2024-01-01T00:00:00Z'
};

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: 'Dr. Ahmad Wijaya, S.H., M.H.',
    position: 'Kepala Cabang',
    specialization: 'Perbankan Ritel, Pengembangan Bisnis',
    bio: 'Berpengalaman lebih dari 20 tahun di industri perbankan ritel dan pengembangan bisnis, fokus pada pertumbuhan portofolio dan layanan nasabah.',
    image_url: '/images/team/ahmad-wijaya.jpg',
    linkedin_url: 'https://linkedin.com/in/ahmad-wijaya',
    email: 'ahmad.wijaya@bprcakradana.co.id',
    order_index: 1,
    is_active: true,
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-01T00:00:00Z'
  },
  {
    id: 2,
    name: 'Sarah Putri, S.H., LL.M.',
    position: 'Manajer Operasional',
    specialization: 'Operasional Perbankan, Manajemen Risiko',
    bio: 'Berpengalaman dalam operasional perbankan dan manajemen risiko, memastikan kepatuhan dan kelancaran proses layanan.',
    image_url: '/images/team/sarah-putri.jpg',
    linkedin_url: 'https://linkedin.com/in/sarah-putri',
    email: 'sarah.putri@bprcakradana.co.id',
    order_index: 2,
    is_active: true,
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-01T00:00:00Z'
  },
  {
    id: 3,
    name: 'Budi Santoso, S.H., M.Kn.',
    position: 'Manajer Kredit',
    specialization: 'Kredit & Pembiayaan, Analisis Kelayakan',
    bio: 'Ahli dalam analisis kredit dan pembiayaan, membantu nasabah menemukan skema yang tepat dan berkelanjutan.',
    image_url: '/images/team/budi-santoso.jpg',
    linkedin_url: 'https://linkedin.com/in/budi-santoso',
    email: 'budi.santoso@bprcakradana.co.id',
    order_index: 3,
    is_active: true,
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-01T00:00:00Z'
  },
  {
    id: 4,
    name: 'Maya Sari, S.H.',
    position: 'Staf Layanan Nasabah',
    specialization: 'Layanan Nasabah, Literasi Keuangan',
    bio: 'Berpengalaman dalam layanan nasabah dan edukasi finansial, membantu meningkatkan literasi dan kenyamanan bertransaksi.',
    image_url: '/images/team/maya-sari.jpg',
    linkedin_url: 'https://linkedin.com/in/maya-sari',
    email: 'maya.sari@bprcakradana.co.id',
    order_index: 4,
    is_active: true,
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-01T00:00:00Z'
  }
];

export const services: Service[] = [
  {
    id: 1,
    title: 'Tabungan',
    slug: 'tabungan',
    short_description: 'Pilihan tabungan aman dan fleksibel untuk perorangan, pelajar, dan bisnis.',
    full_description: 'Nikmati berbagai produk tabungan dengan setoran awal ringan, biaya administrasi rendah, dan fasilitas e-channel. Cocok untuk kebutuhan harian, perencanaan pendidikan, maupun dana darurat.',
    icon_url: '/icons/savings.svg',
    image_url: '/images/services/savings.jpg',
    order_index: 1,
    is_active: true,
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-01T00:00:00Z'
  },
  {
    id: 2,
    title: 'Deposito',
    slug: 'deposito',
    short_description: 'Bunga kompetitif dengan tenor fleksibel untuk memaksimalkan dana Anda.',
    full_description: 'Produk simpanan berjangka dengan tingkat bunga menarik dan pilihan tenor variatif. Dilengkapi bukti deposito resmi dan perpanjangan otomatis.',
    icon_url: '/icons/deposit.svg',
    image_url: '/images/services/deposit.jpg',
    order_index: 2,
    is_active: true,
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-01T00:00:00Z'
  },
  {
    id: 3,
    title: 'Kredit UMKM',
    slug: 'kredit-umkm',
    short_description: 'Pembiayaan modal kerja dan investasi untuk pelaku usaha mikro, kecil, dan menengah.',
    full_description: 'Skema kredit dengan proses cepat, persyaratan mudah, dan angsuran ringan untuk membantu pengembangan bisnis UMKM Anda.',
    icon_url: '/icons/msme-loan.svg',
    image_url: '/images/services/msme-loan.jpg',
    order_index: 3,
    is_active: true,
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-01T00:00:00Z'
  },
  {
    id: 4,
    title: 'Kredit Konsumtif',
    slug: 'kredit-konsumtif',
    short_description: 'Kredit multiguna untuk berbagai kebutuhan pribadi dengan tenor fleksibel.',
    full_description: 'Pembiayaan kebutuhan konsumsi seperti renovasi rumah, pendidikan, kesehatan, atau kebutuhan lainnya dengan proses mudah dan bunga kompetitif.',
    icon_url: '/icons/consumer-loan.svg',
    image_url: '/images/services/consumer-loan.jpg',
    order_index: 4,
    is_active: true,
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-01T00:00:00Z'
  },
  {
    id: 5,
    title: 'Kredit Mikro',
    slug: 'kredit-mikro',
    short_description: 'Kredit cepat dengan plafon terjangkau dan pencairan cepat untuk pelaku mikro.',
    full_description: 'Solusi pembiayaan usaha mikro dengan persyaratan sederhana, survei cepat, dan skema angsuran yang menyesuaikan arus kas usaha.',
    icon_url: '/icons/micro-loan.svg',
    image_url: '/images/services/micro-loan.jpg',
    order_index: 5,
    is_active: true,
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-01T00:00:00Z'
  },
  {
    id: 6,
    title: 'Layanan Digital',
    slug: 'layanan-digital',
    short_description: 'Kemudahan transaksi melalui e-channel untuk kenyamanan Anda.',
    full_description: 'Fasilitas layanan digital seperti info saldo via WhatsApp, reminder angsuran, transfer antar rekening, dan jaringan kantor yang siap membantu.',
    icon_url: '/icons/digital.svg',
    image_url: '/images/services/digital.jpg',
    order_index: 6,
    is_active: true,
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-01T00:00:00Z'
  }
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    client_name: 'Andi Kurniawan',
    client_title: 'CEO, PT Teknologi Maju',
    testimonial_text: 'BPR Cakradana membantu pengelolaan kas dan pembiayaan usaha kami dengan layanan yang responsif dan profesional.',
    rating: 5,
    image_url: '/images/testimonials/andi-kurniawan.jpg',
    is_featured: true,
    is_active: true,
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-01T00:00:00Z'
  },
  {
    id: 2,
    client_name: 'Siti Nurhaliza',
    client_title: 'Direktur, CV Berkah Jaya',
    testimonial_text: 'Pelayanan yang sangat memuaskan dalam penanganan sengketa kontrak. Tim yang responsif dan solusi yang tepat sasaran.',
    rating: 5,
    image_url: '/images/testimonials/siti-nurhaliza.jpg',
    is_featured: true,
    is_active: true,
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-01T00:00:00Z'
  },
  {
    id: 3,
    client_name: 'Robert Tanoto',
    client_title: 'Owner, Tanoto Property Group',
    testimonial_text: 'Sudah 5 tahun menggunakan jasa BPR Cakradana untuk semua transaksi properti kami. Tidak pernah mengecewakan!',
    rating: 5,
    image_url: '/images/testimonials/robert-tanoto.jpg',
    is_featured: false,
    is_active: true,
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-01T00:00:00Z'
  },
  {
    id: 4,
    client_name: 'Dr. Lisa Wijaya',
    client_title: 'Praktisi Medis',
    testimonial_text: 'Penanganan yang sangat profesional dan empati.',
    rating: 5,
    image_url: '/images/testimonials/lisa-wijaya.jpg',
    is_featured: true,
    is_active: true,
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-01T00:00:00Z'
  },
  {
    id: 5,
    client_name: 'Bambang Sutrisno',
    client_title: 'Direktur, PT Industri Kreatif',
    testimonial_text: 'Bantuan dalam pendaftaran merek dan paten sangat membantu bisnis kami. Tim yang kompeten dan berpengalaman.',
    rating: 4,
    image_url: '/images/testimonials/bambang-sutrisno.jpg',
    is_featured: false,
    is_active: true,
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-01T00:00:00Z'
  }
];
