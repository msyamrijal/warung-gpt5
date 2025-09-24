'use client';

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Users, 
  MessageCircle, 
  Send,
  CheckCircle,
  Calendar,
  CreditCard
} from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    title: "Telepon",
    value: "+62 812-3456-7890",
    description: "Senin - Sabtu: 08:00 - 20:00 WIB"
  },
  {
    icon: Mail,
    title: "Email",
    value: "info@globalenglish.co.id",
    description: "Kami akan membalas dalam 24 jam"
  },
  {
    icon: MapPin,
    title: "Alamat",
    value: "Jl. KH. Ahmad Dahlan No. 123, Pare, Kediri",
    description: "Depan Masjid Jami' Pare"
  },
  {
    icon: Clock,
    title: "Jam Operasional",
    value: "Setiap Hari: 07:00 - 22:00 WIB",
    description: "Termasuk hari libur"
  }
];

const programs = [
  "Grammar Foundation",
  "Conversation Club", 
  "Vocabulary Builder",
  "Pronunciation Perfect",
  "Reading Comprehension",
  "Writing Mastery",
  "Listening Skills",
  "Presentation Skills",
  "TOEFL Preparation",
  "IELTS Preparation"
];

const campTypes = [
  "Standard Camp",
  "Premium Camp", 
  "VIP Camp"
];

export default function ContactPage() {
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const [registrationForm, setRegistrationForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    birthDate: "",
    address: "",
    education: "",
    program: "",
    campType: "",
    startDate: "",
    duration: "",
    emergencyContact: "",
    emergencyPhone: "",
    notes: ""
  });

  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [registrationSubmitted, setRegistrationSubmitted] = useState(false);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact form submitted:", contactForm);
    setContactSubmitted(true);
    setTimeout(() => setContactSubmitted(false), 3000);
  };

  const handleRegistrationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Registration form submitted:", registrationForm);
    setRegistrationSubmitted(true);
    setTimeout(() => setRegistrationSubmitted(false), 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 mb-4">
              Hubungi Kami
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Kontak & Pendaftaran
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Siap memulai perjalanan bahasa Inggris Anda? Hubungi kami untuk konsultasi gratis atau daftar langsung online.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Informasi Kontak
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hubungi kami melalui berbagai cara. Kami siap membantu Anda 24/7.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-lg font-bold text-gray-900">
                      {info.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-blue-600 font-medium mb-2">
                      {info.value}
                    </div>
                    <CardDescription className="text-sm">
                      {info.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Contact Form */}
          <div className="max-w-2xl mx-auto">
            <Card className="border-0 shadow-lg">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900">
                  Kirim Pesan
                </CardTitle>
                <CardDescription className="text-base">
                  Ada pertanyaan? Kirimkan pesan kepada kami dan kami akan segera merespons.
                </CardDescription>
              </CardHeader>
              <CardContent>
                {contactSubmitted ? (
                  <div className="text-center py-8">
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Pesan Terkirim!</h3>
                    <p className="text-gray-600">Terima kasih telah menghubungi kami. Kami akan membalas pesan Anda segera.</p>
                  </div>
                ) : (
                  <form onSubmit={handleContactSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Nama Lengkap</Label>
                        <Input
                          id="name"
                          value={contactForm.name}
                          onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
                          placeholder="John Doe"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          value={contactForm.email}
                          onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                          placeholder="john@example.com"
                          required
                        />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="phone">No. Telepon</Label>
                      <Input
                        id="phone"
                        value={contactForm.phone}
                        onChange={(e) => setContactForm({...contactForm, phone: e.target.value})}
                        placeholder="+62 812-3456-7890"
                        required
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="subject">Subjek</Label>
                      <Input
                        id="subject"
                        value={contactForm.subject}
                        onChange={(e) => setContactForm({...contactForm, subject: e.target.value})}
                        placeholder="Informasi Program"
                        required
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="message">Pesan</Label>
                      <Textarea
                        id="message"
                        value={contactForm.message}
                        onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                        placeholder="Tuliskan pesan Anda di sini..."
                        rows={5}
                        required
                      />
                    </div>
                    
                    <Button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
                      <Send className="w-4 h-4 mr-2" />
                      Kirim Pesan
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Formulir Pendaftaran
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Daftar sekarang dan dapatkan pengalaman belajar terbaik di Global English
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900 text-center">
                  Daftar Online
                </CardTitle>
                <CardDescription className="text-center text-base">
                  Isi formulir berikut untuk mendaftar program Global English
                </CardDescription>
              </CardHeader>
              <CardContent>
                {registrationSubmitted ? (
                  <div className="text-center py-12">
                    <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Pendaftaran Berhasil!</h3>
                    <p className="text-lg text-gray-600 mb-6">
                      Terima kasih telah mendaftar di Global English. Tim kami akan menghubungi Anda dalam 24 jam untuk konfirmasi dan informasi selanjutnya.
                    </p>
                    <div className="bg-blue-50 rounded-lg p-6 max-w-md mx-auto">
                      <h4 className="font-semibold text-blue-900 mb-2">Langkah Selanjutnya:</h4>
                      <ul className="text-sm text-blue-800 space-y-1 text-left">
                        <li>• Konfirmasi pendaftaran via telepon</li>
                        <li>• Pembayaran down payment</li>
                        <li>• Penentuan jadwal belajar</li>
                        <li>• Check-in ke camp (jika dipilih)</li>
                      </ul>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleRegistrationSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="fullName">Nama Lengkap</Label>
                        <Input
                          id="fullName"
                          value={registrationForm.fullName}
                          onChange={(e) => setRegistrationForm({...registrationForm, fullName: e.target.value})}
                          placeholder="John Doe"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          value={registrationForm.email}
                          onChange={(e) => setRegistrationForm({...registrationForm, email: e.target.value})}
                          placeholder="john@example.com"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="phone">No. Telepon</Label>
                        <Input
                          id="phone"
                          value={registrationForm.phone}
                          onChange={(e) => setRegistrationForm({...registrationForm, phone: e.target.value})}
                          placeholder="+62 812-3456-7890"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="birthDate">Tanggal Lahir</Label>
                        <Input
                          id="birthDate"
                          type="date"
                          value={registrationForm.birthDate}
                          onChange={(e) => setRegistrationForm({...registrationForm, birthDate: e.target.value})}
                          required
                        />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="address">Alamat Lengkap</Label>
                      <Textarea
                        id="address"
                        value={registrationForm.address}
                        onChange={(e) => setRegistrationForm({...registrationForm, address: e.target.value})}
                        placeholder="Jl. Contoh No. 123, Kota, Provinsi"
                        rows={3}
                        required
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="education">Pendidikan Terakhir</Label>
                      <Input
                        id="education"
                        value={registrationForm.education}
                        onChange={(e) => setRegistrationForm({...registrationForm, education: e.target.value})}
                        placeholder="SMA/SMK, D3, S1, dll"
                        required
                      />
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="program">Program Pilihan</Label>
                        <select
                          id="program"
                          value={registrationForm.program}
                          onChange={(e) => setRegistrationForm({...registrationForm, program: e.target.value})}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          required
                        >
                          <option value="">Pilih Program</option>
                          {programs.map((program) => (
                            <option key={program} value={program}>{program}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <Label htmlFor="campType">Tipe Camp (Opsional)</Label>
                        <select
                          id="campType"
                          value={registrationForm.campType}
                          onChange={(e) => setRegistrationForm({...registrationForm, campType: e.target.value})}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                          <option value="">Pilih Camp (Opsional)</option>
                          {campTypes.map((camp) => (
                            <option key={camp} value={camp}>{camp}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="startDate">Tanggal Mulai</Label>
                        <Input
                          id="startDate"
                          type="date"
                          value={registrationForm.startDate}
                          onChange={(e) => setRegistrationForm({...registrationForm, startDate: e.target.value})}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="duration">Durasi Program</Label>
                        <select
                          id="duration"
                          value={registrationForm.duration}
                          onChange={(e) => setRegistrationForm({...registrationForm, duration: e.target.value})}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          required
                        >
                          <option value="">Pilih Durasi</option>
                          <option value="1 bulan">1 Bulan</option>
                          <option value="2 bulan">2 Bulan</option>
                          <option value="3 bulan">3 Bulan</option>
                          <option value="6 bulan">6 Bulan</option>
                          <option value="12 bulan">12 Bulan</option>
                        </select>
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="emergencyContact">Kontak Darurat</Label>
                        <Input
                          id="emergencyContact"
                          value={registrationForm.emergencyContact}
                          onChange={(e) => setRegistrationForm({...registrationForm, emergencyContact: e.target.value})}
                          placeholder="Nama kontak darurat"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="emergencyPhone">No. Telepon Darurat</Label>
                        <Input
                          id="emergencyPhone"
                          value={registrationForm.emergencyPhone}
                          onChange={(e) => setRegistrationForm({...registrationForm, emergencyPhone: e.target.value})}
                          placeholder="+62 812-3456-7890"
                          required
                        />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="notes">Catatan Tambahan</Label>
                      <Textarea
                        id="notes"
                        value={registrationForm.notes}
                        onChange={(e) => setRegistrationForm({...registrationForm, notes: e.target.value})}
                        placeholder="Informasi tambahan yang ingin Anda sampaikan..."
                        rows={3}
                      />
                    </div>
                    
                    <div className="bg-blue-50 rounded-lg p-4">
                      <h4 className="font-semibold text-blue-900 mb-2">Informasi Penting:</h4>
                      <ul className="text-sm text-blue-800 space-y-1">
                        <li>• Down payment 30% dari total biaya program</li>
                        <li>• Pelunasan dilakukan saat check-in</li>
                        <li>• Pembayaran dapat dilakukan via transfer atau cash</li>
                        <li>• Biaya sudah termasuk materi dan sertifikat</li>
                      </ul>
                    </div>
                    
                    <Button type="submit" className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-lg py-3">
                      <Calendar className="w-5 h-5 mr-2" />
                      Daftar Sekarang
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Quick Contact */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Butuh Bantuan Cepat?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Hubungi kami langsung melalui WhatsApp atau telepon untuk respons lebih cepat
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white text-lg px-8 py-3">
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp
              </Button>
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 text-lg px-8 py-3">
                <Phone className="w-5 h-5 mr-2" />
                Telepon Langsung
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}