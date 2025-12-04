'use client'

import { ArrowLeft, FileText, ShoppingBag, CreditCard, Truck, Shield, AlertCircle } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <Image
                  src="/logo.png"
                  alt="AGUS HARYANTO Logo"
                  width={40}
                  height={40}
                  className="h-10 w-10 rounded-lg"
                />
                <span className="ml-3 text-2xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
                  AGUS HARYANTO
                </span>
              </Link>
            </div>
            
            <div className="flex items-center">
              <Link href="/" className="flex items-center text-gray-700 hover:text-slate-900 transition-colors">
                <ArrowLeft className="h-5 w-5 mr-2" />
                Kembali ke Beranda
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="text-center mb-8">
            <div className="bg-slate-100 rounded-full p-4 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
              <FileText className="h-10 w-10 text-slate-800" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Syarat dan Ketentuan
            </h1>
            <p className="text-lg text-gray-600">
              Terakhir diperbarui: {new Date().toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Pendahuluan</h2>
              <p className="text-gray-700 leading-relaxed">
                Selamat datang di AGUS HARYANTO. Syarat dan Ketentuan ini mengatur penggunaan situs web e-commerce kami dan layanan yang kami sediakan. 
                Dengan mengakses atau menggunakan situs kami, Anda setuju untuk terikat oleh syarat dan ketentuan ini.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                <ShoppingBag className="h-6 w-6 mr-2 text-slate-800" />
                Layanan Kami
              </h2>
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Produk dan Jasa</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Penjualan produk berkualitas melalui platform e-commerce</li>
                  <li>Layanan pengiriman ke seluruh Indonesia</li>
                  <li>Support pelanggan 24/7</li>
                  <li>Garansi produk sesuai ketentuan</li>
                  <li>Program loyalitas dan promosi</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                <CreditCard className="h-6 w-6 mr-2 text-slate-800" />
                Pembayaran dan Harga
              </h2>
              
              <div className="space-y-4">
                <div className="border-l-4 border-slate-800 pl-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Harga</h3>
                  <p className="text-gray-700">
                    Semua harga yang tercantum dalam mata uang Rupiah (IDR) dan sudah termasuk PPN sesuai peraturan yang berlaku. 
                    Kami berhak mengubah harga tanpa pemberitahuan sebelumnya.
                  </p>
                </div>
                
                <div className="border-l-4 border-slate-800 pl-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Metode Pembayaran</h3>
                  <p className="text-gray-700">
                    Kami menerima berbagai metode pembayaran termasuk transfer bank, kartu kredit/debit, dan e-wallet yang tersedia. 
                    Semua transaksi diproses melalui gateway pembayaran yang aman.
                  </p>
                </div>
                
                <div className="border-l-4 border-slate-800 pl-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Konfirmasi Pembayaran</h3>
                  <p className="text-gray-700">
                    Pembayaran dikonfirmasi setelah kami menerima dana. Pesanan akan diproses setelah pembayaran berhasil dikonfirmasi.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                <Truck className="h-6 w-6 mr-2 text-slate-800" />
                Pengiriman dan Pengembalian
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-slate-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Pengiriman</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 text-sm">
                    <li>Estimasi waktu pengiriman 2-7 hari kerja</li>
                    <li>Biaya pengiriman dihitung berdasarkan lokasi</li>
                    <li>Nomor resi akan dikirimkan via email</li>
                    <li>Asuransi pengiriman tersedia untuk produk tertentu</li>
                  </ul>
                </div>
                
                <div className="bg-slate-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Pengembalian</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 text-sm">
                    <li>Pengembalian dalam 7 hari setelah penerimaan</li>
                    <li>Produk harus dalam kondisi asli</li>
                    <li>Biaya pengiriman retur ditanggung pembeli</li>
                    <li>Refund diproses dalam 3-5 hari kerja</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                <Shield className="h-6 w-6 mr-2 text-slate-800" />
                Hak dan Kewajiban Pengguna
              </h2>
              
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Hak Pengguna</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Mendapatkan produk sesuai deskripsi</li>
                    <li>Menerima informasi yang akurat tentang produk</li>
                    <li>Privasi data pribadi terlindungi</li>
                    <li>Mendapatkan layanan pelanggan yang baik</li>
                    <li>Memiliki hak untuk pengembalian produk</li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Kewajiban Pengguna</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Memberikan informasi yang akurat dan lengkap</li>
                    <li>Melakukan pembayaran sesuai kesepakatan</li>
                    <li>Tidak melakukan penipuan atau kecurangan</li>
                    <li>Mematuhi syarat dan ketentuan yang berlaku</li>
                    <li>Menjaga kerahasiaan akun dan password</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                <AlertCircle className="h-6 w-6 mr-2 text-slate-800" />
                Pembatasan Tanggung Jawab
              </h2>
              <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <p className="text-gray-700 mb-4">
                  AGUS HARYANTO tidak bertanggung jawab atas:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Keterlambatan pengiriman yang disebabkan oleh pihak ketiga</li>
                  <li>Kerusakan produk selama pengiriman</li>
                  <li>Kehilangan data akun karena kelalaian pengguna</li>
                  <li>Kerusakan sistem yang disebabkan oleh force majeure</li>
                  <li>Kerugian tidak langsung atau konsekuensial</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Kebijakan Garansi</h2>
              <div className="bg-slate-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Syarat Garansi</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Garansi berlaku untuk produk tertentu sesuai ketentuan</li>
                  <li>Kerusakan akibat kesalahan pengguna tidak ditanggung</li>
                  <li>Klaim garansi harus disertai bukti pembelian</li>
                  <li>Proses klaim garansi maksimal 14 hari kerja</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Kekayaan Intelektual</h2>
              <p className="text-gray-700 mb-4">
                Semua konten di situs AGUS HARYANTO termasuk namun tidak terbatas pada logo, teks, gambar, dan desain 
                dilindungi oleh hak kekayaan intelektual. Tidak ada bagian dari situs ini boleh direproduksi tanpa izin tertulis dari kami.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Penyelesaian Sengketa</h2>
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-gray-700 mb-4">
                  Segala sengketa yang timbul dari penggunaan situs ini akan diselesaikan melalui:
                </p>
                <ol className="list-decimal list-inside text-gray-700 space-y-2">
                  <li>Musyawarah dan mufakat antara kedua belah pihak</li>
                  <li>Mediasi melalui pihak ketiga yang netral</li>
                  <li>Proses hukum di pengadilan negeri setempat</li>
                </ol>
                <p className="text-gray-700 mt-4">
                  Hukum yang berlaku adalah hukum Republik Indonesia.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Perubahan Syarat dan Ketentuan</h2>
              <p className="text-gray-700">
                Kami berhak mengubah syarat dan ketentuan ini kapan saja. Perubahan akan diberitahukan melalui situs web atau email. 
                Penggunaan lanjutan layanan kami setelah perubahan menunjukkan persetujuan Anda terhadap syarat dan ketentuan yang diperbarui.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Kontak Kami</h2>
              <div className="bg-slate-50 rounded-lg p-6">
                <p className="text-gray-700 mb-4">
                  Jika Anda memiliki pertanyaan tentang Syarat dan Ketentuan ini, silakan hubungi kami:
                </p>
                <div className="space-y-2">
                  <p className="text-gray-700"><strong>Email:</strong> legal@agusharyanto.com</p>
                  <p className="text-gray-700"><strong>Telepon:</strong> +6282233059428</p>
                  <p className="text-gray-700"><strong>Alamat:</strong> jl. M. ISWAHYUDI gg. cucok rowo, Desa/Kelurahan Rinding, Kec. Teluk Bayur, Kab. Berau, Provinsi Kalimantan Timur, 77313</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-300">&copy; 2024 AGUS HARYANTO. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}