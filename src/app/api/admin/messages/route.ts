import { NextRequest, NextResponse } from 'next/server';
import { requireAuth } from '@/lib/auth';
import { ApiResponse, ContactMessage } from '@/lib/types';

// Mock data for contact messages
const contactMessages: ContactMessage[] = [
  {
    id: 1,
    name: 'Andi Kurniawan',
    email: 'andi@teknologimaju.com',
    subject: 'Pertanyaan Produk Deposito',
    message: 'Selamat pagi, saya ingin bertanya mengenai suku bunga deposito dan pilihan tenor yang tersedia. Mohon informasinya.',
    is_read: false,
    created_at: new Date(Date.now() - 1000 * 60 * 30).toISOString() // 30 minutes ago
  },
  {
    id: 2,
    name: 'Sarah Wijaya',
    email: 'sarah.wijaya@email.com',
    subject: 'Pengajuan Kredit UMKM',
    message: 'Saya ingin mengajukan Kredit UMKM. Mohon informasi syarat, tenor, dan estimasi angsuran.',
    is_read: true,
    created_at: new Date(Date.now() - 1000 * 60 * 60 * 2).toISOString() // 2 hours ago
  },
  {
    id: 3,
    name: 'PT Teknologi Maju',
    email: 'finance@teknologimaju.com',
    subject: 'Informasi Rekening & Setoran',
    message: 'Kami memerlukan informasi terkait pembukaan rekening perusahaan dan ketentuan setoran/penarikan.',
    is_read: false,
    created_at: new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString() // 1 day ago
  },
  {
    id: 4,
    name: 'Budi Santoso',
    email: 'budi.santoso@email.com',
    subject: 'Pertanyaan Suku Bunga Kredit',
    message: 'Saya ingin bertanya mengenai suku bunga kredit konsumtif dan simulasi angsuran bulanan.',
    is_read: true,
    created_at: new Date(Date.now() - 1000 * 60 * 60 * 24 * 2).toISOString() // 2 days ago
  },
  {
    id: 5,
    name: 'Lisa Permata',
    email: 'lisa.permata@email.com',
    subject: 'Konsultasi Hukum Keluarga',
    message: 'Saya membutuhkan bantuan untuk proses perceraian dan pembagian harta gono-gini. Apakah bisa dibantu?',
    is_read: false,
    created_at: new Date(Date.now() - 1000 * 60 * 60 * 24 * 3).toISOString() // 3 days ago
  }
];

// Mock database functions - replace with actual database calls
async function getAllMessages(): Promise<ContactMessage[]> {
  return contactMessages.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
}

async function markMessageAsRead(id: number): Promise<ContactMessage | null> {
  const index = contactMessages.findIndex(message => message.id === id);
  if (index === -1) return null;
  
  contactMessages[index].is_read = true;
  return contactMessages[index];
}

async function deleteMessage(id: number): Promise<boolean> {
  const index = contactMessages.findIndex(message => message.id === id);
  if (index === -1) return false;
  
  contactMessages.splice(index, 1);
  return true;
}

// GET - Retrieve all contact messages
export const GET = requireAuth(async (request: NextRequest) => {
  try {
    const { searchParams } = new URL(request.url);
    const unreadOnly = searchParams.get('unread') === 'true';
    
    let messages = await getAllMessages();
    
    if (unreadOnly) {
      messages = messages.filter(message => !message.is_read);
    }
    
    return NextResponse.json<ApiResponse<ContactMessage[]>>({
      success: true,
      data: messages
    });
  } catch (error) {
    console.error('Get messages error:', error);
    return NextResponse.json<ApiResponse<null>>({
      success: false,
      error: 'Gagal mengambil data pesan'
    }, { status: 500 });
  }
});

// PUT - Mark message as read
export const PUT = requireAuth(async (request: NextRequest) => {
  try {
    const body = await request.json();
    const { id, action } = body;
    
    if (!id || action !== 'mark_read') {
      return NextResponse.json<ApiResponse<null>>({
        success: false,
        error: 'Parameter tidak valid'
      }, { status: 400 });
    }

    const updatedMessage = await markMessageAsRead(id);
    
    if (!updatedMessage) {
      return NextResponse.json<ApiResponse<null>>({
        success: false,
        error: 'Pesan tidak ditemukan'
      }, { status: 404 });
    }
    
    return NextResponse.json<ApiResponse<ContactMessage>>({
      success: true,
      data: updatedMessage,
      message: 'Pesan berhasil ditandai sebagai dibaca'
    });
  } catch (error) {
    console.error('Update message error:', error);
    return NextResponse.json<ApiResponse<null>>({
      success: false,
      error: 'Gagal memperbarui pesan'
    }, { status: 500 });
  }
});

// DELETE - Delete message
export const DELETE = requireAuth(async (request: NextRequest) => {
  try {
    const { searchParams } = new URL(request.url);
    const id = parseInt(searchParams.get('id') || '');
    
    if (!id) {
      return NextResponse.json<ApiResponse<null>>({
        success: false,
        error: 'ID pesan harus disertakan'
      }, { status: 400 });
    }

    const deleted = await deleteMessage(id);
    
    if (!deleted) {
      return NextResponse.json<ApiResponse<null>>({
        success: false,
        error: 'Pesan tidak ditemukan'
      }, { status: 404 });
    }
    
    return NextResponse.json<ApiResponse<null>>({
      success: true,
      message: 'Pesan berhasil dihapus'
    });
  } catch (error) {
    console.error('Delete message error:', error);
    return NextResponse.json<ApiResponse<null>>({
      success: false,
      error: 'Gagal menghapus pesan'
    }, { status: 500 });
  }
});
