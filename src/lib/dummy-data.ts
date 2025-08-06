// Data dummy untuk development
import { FirmInfo, TeamMember, Service, Testimonial } from './types';

export const firmInfo: FirmInfo = {
  id: 1,
  name: 'Hukum Prima & Associates',
  tagline: 'Solusi Hukum Terpercaya untuk Kebutuhan Anda',
  mission: 'Memberikan layanan hukum berkualitas tinggi dengan pendekatan personal dan profesional untuk melindungi hak dan kepentingan klien.',
  vision: 'Menjadi firma hukum terdepan yang dipercaya dalam memberikan solusi hukum inovatif dan komprehensif.',
  whatsapp_number: '+62812-3456-7890',
  email: 'info@hukumprima.com',
  phone: '+62-21-1234-5678',
  address: 'Jl. Sudirman No. 123, Jakarta Pusat 10220, Indonesia',
  operation_hours: 'Senin - Jumat: 09:00 - 18:00 WIB, Sabtu: 09:00 - 14:00 WIB',
  seo_title: 'Hukum Prima & Associates - Firma Hukum Terpercaya Jakarta',
  seo_description: 'Firma hukum terpercaya di Jakarta dengan pengalaman lebih dari 20 tahun. Spesialis hukum korporasi, litigasi, properti, dan hukum keluarga.',
  created_at: '2024-01-01T00:00:00Z',
  updated_at: '2024-01-01T00:00:00Z'
};

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: 'Dr. Ahmad Wijaya, S.H., M.H.',
    position: 'Managing Partner',
    specialization: 'Hukum Korporasi, Merger & Akuisisi',
    bio: 'Dengan pengalaman lebih dari 25 tahun di bidang hukum korporasi, Dr. Ahmad telah menangani berbagai transaksi besar dan memberikan konsultasi strategis kepada perusahaan multinasional.',
    image_url: '/images/team/ahmad-wijaya.jpg',
    linkedin_url: 'https://linkedin.com/in/ahmad-wijaya',
    email: 'ahmad.wijaya@hukumprima.com',
    order_index: 1,
    is_active: true,
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-01T00:00:00Z'
  },
  {
    id: 2,
    name: 'Sarah Putri, S.H., LL.M.',
    position: 'Senior Partner',
    specialization: 'Litigasi, Arbitrase Komersial',
    bio: 'Spesialis litigasi dengan track record menangani kasus-kasus kompleks di pengadilan tinggi dan arbitrase internasional. Lulusan Harvard Law School.',
    image_url: '/images/team/sarah-putri.jpg',
    linkedin_url: 'https://linkedin.com/in/sarah-putri',
    email: 'sarah.putri@hukumprima.com',
    order_index: 2,
    is_active: true,
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-01T00:00:00Z'
  },
  {
    id: 3,
    name: 'Budi Santoso, S.H., M.Kn.',
    position: 'Partner',
    specialization: 'Hukum Properti, Real Estate',
    bio: 'Ahli dalam transaksi properti dan pengembangan real estate. Telah membantu berbagai developer dalam proyek-proyek besar di Indonesia.',
    image_url: '/images/team/budi-santoso.jpg',
    linkedin_url: 'https://linkedin.com/in/budi-santoso',
    email: 'budi.santoso@hukumprima.com',
    order_index: 3,
    is_active: true,
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-01T00:00:00Z'
  },
  {
    id: 4,
    name: 'Maya Sari, S.H.',
    position: 'Associate',
    specialization: 'Hukum Keluarga, Waris',
    bio: 'Berpengalaman dalam menangani kasus-kasus hukum keluarga dengan pendekatan yang sensitif dan profesional.',
    image_url: '/images/team/maya-sari.jpg',
    linkedin_url: 'https://linkedin.com/in/maya-sari',
    email: 'maya.sari@hukumprima.com',
    order_index: 4,
    is_active: true,
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-01T00:00:00Z'
  }
];

export const services: Service[] = [
  {
    id: 1,
    title: 'Hukum Korporasi',
    slug: 'hukum-korporasi',
    short_description: 'Konsultasi dan pendampingan hukum untuk perusahaan dalam berbagai aspek bisnis.',
    full_description: 'Layanan komprehensif meliputi pendirian perusahaan, merger & akuisisi, corporate governance, compliance, kontrak bisnis, dan restrukturisasi perusahaan. Tim ahli kami membantu perusahaan dari startup hingga multinasional.',
    icon_url: '/icons/corporate.svg',
    image_url: '/images/services/corporate-law.jpg',
    order_index: 1,
    is_active: true,
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-01T00:00:00Z'
  },
  {
    id: 2,
    title: 'Litigasi & Arbitrase',
    slug: 'litigasi-arbitrase',
    short_description: 'Representasi hukum dalam sengketa perdata, pidana, dan arbitrase komersial.',
    full_description: 'Penanganan sengketa di berbagai tingkat pengadilan, mediasi, dan arbitrase. Pengalaman dalam kasus-kasus kompleks termasuk sengketa komersial, perbankan, konstruksi, dan intellectual property.',
    icon_url: '/icons/litigation.svg',
    image_url: '/images/services/litigation.jpg',
    order_index: 2,
    is_active: true,
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-01T00:00:00Z'
  },
  {
    id: 3,
    title: 'Hukum Properti',
    slug: 'hukum-properti',
    short_description: 'Layanan hukum untuk transaksi dan sengketa properti serta real estate.',
    full_description: 'Due diligence properti, penyusunan kontrak jual beli, sewa menyewa, pengembangan real estate, pengurusan sertifikat, dan penyelesaian sengketa tanah.',
    icon_url: '/icons/property.svg',
    image_url: '/images/services/property-law.jpg',
    order_index: 3,
    is_active: true,
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-01T00:00:00Z'
  },
  {
    id: 4,
    title: 'Hukum Keluarga',
    slug: 'hukum-keluarga',
    short_description: 'Pendampingan hukum untuk masalah keluarga dengan pendekatan yang sensitif.',
    full_description: 'Penanganan kasus perceraian, hak asuh anak, pembagian harta gono-gini, adopsi, dan perencanaan waris. Kami mengutamakan solusi damai dan mediasi.',
    icon_url: '/icons/family.svg',
    image_url: '/images/services/family-law.jpg',
    order_index: 4,
    is_active: true,
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-01T00:00:00Z'
  },
  {
    id: 5,
    title: 'Hak Kekayaan Intelektual',
    slug: 'hak-kekayaan-intelektual',
    short_description: 'Perlindungan dan pengelolaan aset kekayaan intelektual perusahaan.',
    full_description: 'Pendaftaran merek, paten, hak cipta, desain industri, serta penanganan pelanggaran HKI. Strategi perlindungan IP untuk startup dan perusahaan teknologi.',
    icon_url: '/icons/ip.svg',
    image_url: '/images/services/intellectual-property.jpg',
    order_index: 5,
    is_active: true,
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-01T00:00:00Z'
  },
  {
    id: 6,
    title: 'Hukum Ketenagakerjaan',
    slug: 'hukum-ketenagakerjaan',
    short_description: 'Konsultasi hukum ketenagakerjaan untuk perusahaan dan karyawan.',
    full_description: 'Penyusunan kontrak kerja, peraturan perusahaan, penanganan PHK, sengketa industrial, dan compliance ketenagakerjaan sesuai regulasi terbaru.',
    icon_url: '/icons/employment.svg',
    image_url: '/images/services/employment-law.jpg',
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
    testimonial_text: 'Hukum Prima & Associates telah membantu perusahaan kami dalam proses merger yang kompleks. Highly recommended!',
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
    testimonial_text: 'Sudah 5 tahun menggunakan jasa Hukum Prima untuk semua transaksi properti kami. Tidak pernah mengecewakan!',
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
    testimonial_text: 'Terima kasih atas bantuan dalam kasus hukum keluarga saya. Penanganan yang sangat profesional dan empati.',
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
