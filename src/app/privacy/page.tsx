'use client'

import { ArrowLeft, Shield, Eye, Database, User, Lock } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function PrivacyPolicy() {
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
              <Shield className="h-10 w-10 text-slate-800" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Kebijakan Privasi
            </h1>
            <p className="text-lg text-gray-600">
              Terakhir diperbarui: {new Date().toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                <Eye className="h-6 w-6 mr-2 text-slate-800" />
                Pendahuluan
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Selamat datang di AGUS HARYANTO. Kami sangat menghargai privasi Anda dan berkomitmen untuk melindungi data pribadi Anda. 
                Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, dan melindungi informasi pribadi Anda saat Anda 
                menggunakan situs web dan layanan e-commerce kami.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                <Database className="h-6 w-6 mr-2 text-slate-800" />
                Informasi yang Kami Kumpulkan
              </h2>
              
              <div className="bg-gray-50 rounded-lg p-6 mb-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Informasi Pribadi</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Nama lengkap dan alamat email</li>
                  <li>Nomor telepon dan alamat pengiriman</li>
                  <li>Informasi pembayaran (diproses melalui pihak ketiga yang aman)</li>
                  <li>Informasi akun pengguna</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Informasi Teknis</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Alamat IP dan jenis browser</li>
                  <li>Informasi perangkat dan sistem operasi</li>
                  <li>Cookie dan data pelacakan</li>
                  <li>Riwayat browsing dan interaksi dengan situs</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                <User className="h-6 w-6 mr-2 text-slate-800" />
                Penggunaan Informasi
              </h2>
              
              <div className="space-y-4">
                <div className="border-l-4 border-slate-800 pl-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Untuk Layanan Pelanggan</h3>
                  <p className="text-gray-700">
                    Kami menggunakan informasi Anda untuk memproses pesanan, mengelola akun, dan menyediakan layanan pelanggan yang berkualitas.
                  </p>
                </div>
                
                <div className="border-l-4 border-slate-800 pl-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Untuk Peningkatan Layanan</h3>
                  <p className="text-gray-700">
                    Data anonim digunakan untuk menganalisis tren, mengoptimalka pengalaman pengguna, dan meningkatkan kualitas produk dan layanan kami.
                  </p>
                </div>
                
                <div className="border-l-4 border-slate-800 pl-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Untuk Komunikasi</h3>
                  <p className="text-gray-700">
                    Kami mengirimkan informasi penting tentang pesanan, pembaruan produk, dan penawaran khusus yang mungkin menarik bagi Anda.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                <Lock className="h-6 w-6 mr-2 text-slate-800" />
                Keamanan Data
              </h2>
              <p className="text-gray-700 mb-4">
                AGUS HARYANTO berkomitmen untuk melindungi keamanan data pribadi Anda dengan:
              </p>
              <div className="bg-slate-50 rounded-lg p-6">
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Enkripsi data end-to-end untuk semua transaksi</li>
                  <li>Server yang aman dengan firewall yang canggih</li>
                  <li>Akses terbatas untuk data pribadi</li>
                  <li>Pembaruan keamanan rutin</li>
                  <li>Kepatuhan terhadap standar keamanan industri</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Hak Anda sebagai Pengguna</h2>
              <div className="space-y-3">
                <div className="flex items-start">
                  <div className="bg-slate-800 rounded-full p-1 mt-1 mr-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Akses Data</h3>
                    <p className="text-gray-700">Anda berhak mengakses data pribadi yang kami simpan tentang Anda.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-slate-800 rounded-full p-1 mt-1 mr-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Koreksi Data</h3>
                    <p className="text-gray-700">Anda dapat memperbarui atau mengoreksi informasi pribadi Anda kapan saja.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-slate-800 rounded-full p-1 mt-1 mr-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Hapus Data</h3>
                    <p className="text-gray-700">Anda dapat meminta penghapusan data pribadi Anda dari sistem kami.</p>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Cookie dan Pelacakan</h2>
              <p className="text-gray-700 mb-4">
                Kami menggunakan cookie untuk meningkatkan pengalaman browsing Anda. Cookie membantu kami:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 bg-gray-50 rounded-lg p-6">
                <li>Mengingat preferensi Anda</li>
                <li>Menyimpan item di keranjang belanja</li>
                <li>Menganalisis traffic situs web</li>
                <li>Menyediakan iklan yang relevan</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Pihak Ketiga</h2>
              <p className="text-gray-700 mb-4">
                Kami dapat berbagi informasi dengan pihak ketiga tepercaya untuk:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-slate-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Pemrosesan Pembayaran</h3>
                  <p className="text-gray-700 text-sm">Gateway pembayaran yang aman untuk memproses transaksi</p>
                </div>
                <div className="bg-slate-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Pengiriman</h3>
                  <p className="text-gray-700 text-sm">Layanan pengiriman untuk mengantarkan produk Anda</p>
                </div>
                <div className="bg-slate-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Analytics</h3>
                  <p className="text-gray-700 text-sm">Layanan analisis untuk memahami penggunaan situs</p>
                </div>
                <div className="bg-slate-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Marketing</h3>
                  <p className="text-gray-700 text-sm">Platform email marketing untuk komunikasi</p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Perubahan Kebijakan</h2>
              <p className="text-gray-700">
                Kami dapat memperbarui Kebijakan Privasi ini dari waktu ke waktu. Perubahan akan diberitahukan melalui situs web atau email. 
                Penggunaan lanjutan dari layanan kami setelah perubahan menunjukkan penerimaan Anda terhadap kebijakan yang diperbarui.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Kontak Kami</h2>
              <div className="bg-slate-50 rounded-lg p-6">
                <p className="text-gray-700 mb-4">
                  Jika Anda memiliki pertanyaan tentang Kebijakan Privasi ini atau perlindungan data pribadi Anda, 
                  silakan hubungi kami:
                </p>
                <div className="space-y-2">
                  <p className="text-gray-700"><strong>Email:</strong> privacy@agusharyanto.com</p>
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