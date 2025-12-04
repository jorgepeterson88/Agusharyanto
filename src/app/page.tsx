'use client'

import { useState } from 'react'
import { ShoppingCart, Menu, X, Phone, Mail, MapPin, Star, Truck, Shield, CreditCard, ArrowRight } from 'lucide-react'
import Image from 'next/image'

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [cartItems, setCartItems] = useState(0)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
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
              </div>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-700 hover:text-slate-900 transition-colors font-medium">Beranda</a>
              <a href="/products" className="text-gray-700 hover:text-slate-900 transition-colors font-medium">Produk</a>
              <a href="#about" className="text-gray-700 hover:text-slate-900 transition-colors font-medium">Tentang</a>
              <a href="#contact" className="text-gray-700 hover:text-slate-900 transition-colors font-medium">Kontak</a>
              <button className="relative p-2 text-gray-700 hover:text-slate-900 transition-colors">
                <ShoppingCart className="h-6 w-6" />
                {cartItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {cartItems}
                  </span>
                )}
              </button>
            </div>

            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-slate-900 transition-colors"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#home" className="block px-3 py-2 text-gray-700 hover:text-slate-900 hover:bg-gray-50 rounded-md font-medium">Beranda</a>
              <a href="/products" className="block px-3 py-2 text-gray-700 hover:text-slate-900 hover:bg-gray-50 rounded-md font-medium">Produk</a>
              <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-slate-900 hover:bg-gray-50 rounded-md font-medium">Tentang</a>
              <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-slate-900 hover:bg-gray-50 rounded-md font-medium">Kontak</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Selamat Datang di
              <span className="block bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent mt-2">
                AGUS HARYANTO
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Solusi e-commerce terpercaya untuk kebutuhan bisnis Anda. Kami menyediakan produk berkualitas tinggi dengan layanan profesional dan pengalaman berbelanja yang aman.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/products" className="bg-slate-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-slate-700 transition-colors flex items-center justify-center">
                Mulai Belanja
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a href="/products" className="border-2 border-slate-800 text-slate-800 px-8 py-3 rounded-lg font-semibold hover:bg-slate-50 transition-colors">
                Lihat Katalog
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg hover:bg-gray-50 transition-colors">
              <div className="bg-slate-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Truck className="h-8 w-8 text-slate-800" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Pengiriman Cepat</h3>
              <p className="text-gray-600">Pengiriman produk ke seluruh Indonesia dengan estimasi waktu yang akurat</p>
            </div>
            <div className="text-center p-6 rounded-lg hover:bg-gray-50 transition-colors">
              <div className="bg-slate-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Shield className="h-8 w-8 text-slate-800" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Garansi Kualitas</h3>
              <p className="text-gray-600">Produk berkualitas tinggi dengan garansi kepuasan 100%</p>
            </div>
            <div className="text-center p-6 rounded-lg hover:bg-gray-50 transition-colors">
              <div className="bg-slate-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <CreditCard className="h-8 w-8 text-slate-800" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Pembayaran Aman</h3>
              <p className="text-gray-600">Sistem pembayaran yang aman dan terpercaya dengan berbagai metode</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Produk Unggulan</h2>
            <p className="text-xl text-gray-600">Produk pilihan dengan kualitas terbaik</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-48 bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center">
                  <span className="text-slate-500 text-lg">Produk {item}</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Produk Premium {item}</h3>
                  <div className="flex items-center mb-3">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                    <span className="ml-2 text-sm text-gray-600">(4.8)</span>
                  </div>
                  <p className="text-gray-600 mb-4">Deskripsi produk dengan kualitas terbaik untuk memenuhi kebutuhan Anda.</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-slate-800">Rp {(item * 250000).toLocaleString('id-ID')}</span>
                    <button 
                      onClick={() => setCartItems(cartItems + 1)}
                      className="bg-slate-800 text-white px-4 py-2 rounded-lg hover:bg-slate-700 transition-colors flex items-center"
                    >
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      Tambah
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Tentang <span className="bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">AGUS HARYANTO</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Kami adalah perusahaan e-commerce yang berkomitmen untuk menyediakan produk berkualitas tinggi dengan layanan terbaik. Dengan pengalaman bertahun-tahun dalam industri ini, kami memahami kebutuhan pelanggan dan selalu berusaha memberikan solusi terbaik.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Visi kami menjadi mitra bisnis terpercaya untuk semua kebutuhan e-commerce Anda, dengan fokus pada kualitas, keandalan, dan kepuasan pelanggan.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-slate-800 mb-2">1000+</div>
                  <div className="text-gray-600">Pelanggan Puas</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-slate-800 mb-2">500+</div>
                  <div className="text-gray-600">Produk Tersedia</div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-slate-100 to-slate-200 rounded-lg p-8">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="bg-slate-800 rounded-full p-2">
                    <Shield className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-gray-700">Produk Original Bergaransi</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-slate-800 rounded-full p-2">
                    <Truck className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-gray-700">Pengiriman Seluruh Indonesia</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-slate-800 rounded-full p-2">
                    <CreditCard className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-gray-700">Pembayaran Aman & Terpercaya</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-slate-800 rounded-full p-2">
                    <Phone className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-gray-700">Customer Service 24/7</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Hubungi Kami</h2>
            <p className="text-xl text-gray-600">Kami siap membantu kebutuhan Anda</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Informasi Kontak</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-slate-800" />
                  <span className="text-gray-700">
                    jl. M. ISWAHYUDI gg. cucok rowo, Desa/Kelurahan Rinding, Kec. Teluk Bayur, Kab. Berau, Provinsi Kalimantan Timur
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-slate-800" />
                  <span className="text-gray-700">+6282233059428</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-slate-800" />
                  <span className="text-gray-700">info@agusharyanto.com</span>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Jam Operasional</h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Senin - Jumat</span>
                    <span className="text-gray-900 font-medium">08:00 - 17:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Sabtu</span>
                    <span className="text-gray-900 font-medium">08:00 - 15:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Minggu</span>
                    <span className="text-gray-900 font-medium">Tutup</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Kirim Pesan</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Nama Lengkap</label>
                  <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-800 focus:border-transparent" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input type="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-800 focus:border-transparent" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Pesan</label>
                  <textarea rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-800 focus:border-transparent"></textarea>
                </div>
                <button type="submit" className="w-full bg-slate-800 text-white py-3 rounded-lg font-semibold hover:bg-slate-700 transition-colors">
                  Kirim Pesan
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Image
                  src="/logo.png"
                  alt="AGUS HARYANTO Logo"
                  width={32}
                  height={32}
                  className="h-8 w-8 rounded-lg"
                />
                <span className="ml-2 text-xl font-bold">AGUS HARYANTO</span>
              </div>
              <p className="text-gray-300">Solusi e-commerce terpercaya untuk kebutuhan bisnis Anda.</p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#home" className="text-gray-300 hover:text-white transition-colors">Beranda</a></li>
                <li><a href="/products" className="text-gray-300 hover:text-white transition-colors">Produk</a></li>
                <li><a href="#about" className="text-gray-300 hover:text-white transition-colors">Tentang</a></li>
                <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors">Kontak</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><a href="/privacy" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="/terms" className="text-gray-300 hover:text-white transition-colors">Terms & Conditions</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
              <p className="text-gray-300 mb-4">Dapatkan penawaran terbaik dari kami</p>
              <div className="flex">
                <input type="email" placeholder="Email Anda" className="flex-1 px-4 py-2 rounded-l-lg text-gray-900 focus:outline-none" />
                <button className="bg-slate-600 px-4 py-2 rounded-r-lg hover:bg-slate-700 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-slate-700 mt-8 pt-8 text-center">
            <p className="text-gray-300">&copy; 2024 AGUS HARYANTO. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}