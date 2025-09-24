'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Home, Users, Wifi, Kitchen, Car, Clock, Star, MapPin } from "lucide-react";

const campTypes = [
  {
    id: 1,
    name: "Standard Camp",
    price: "Rp 1.500.000/bulan",
    description: "Camp standar dengan fasilitas lengkap untuk belajar yang nyaman",
    features: ["4 orang/kamar", "Kamar mandi luar", "Dapur bersama", "Area belajar", "Free WiFi"],
    icon: Home,
    popular: false
  },
  {
    id: 2,
    name: "Premium Camp",
    price: "Rp 2.000.000/bulan",
    description: "Camp dengan fasilitas lebih lengkap dan privasi yang lebih baik",
    features: ["2 orang/kamar", "Kamar mandi dalam", "Dapur pribadi", "AC", "Free WiFi"],
    icon: Star,
    popular: true
  },
  {
    id: 3,
    name: "VIP Camp",
    price: "Rp 3.000.000/bulan",
    description: "Camp eksklusif dengan fasilitas hotel dan privasi maksimal",
    features: ["1 orang/kamar", "Kamar mandi dalam", "Dapur lengkap", "AC + TV", "Free WiFi"],
    icon: Users,
    popular: false
  }
];

const campFacilities = [
  {
    icon: Home,
    title: "English Camp Area 24 Jam",
    description: "Lingkungan yang mendukung pembelajaran bahasa Inggris sepanjang hari"
  },
  {
    icon: Clock,
    title: "Program Camp Terstruktur",
    description: "2x program camp setiap hari dengan jadwal yang teratur"
  },
  {
    icon: Wifi,
    title: "Free WiFi",
    description: "Akses internet gratis untuk mendukung pembelajaran online"
  },
  {
    icon: Kitchen,
    title: "Dapur Lengkap",
    description: "Fasilitas dapur untuk memasak dan menyiapkan makanan"
  },
  {
    icon: Car,
    title: "Area Parkir",
    description: "Lahan parkir yang luas dan aman untuk kendaraan"
  },
  {
    icon: MapPin,
    title: "Lokasi Strategis",
    description: "Dekat dengan pusat pembelajaran dan fasilitas umum"
  }
];

const campSchedule = [
  {
    time: "08:45 - 09:45",
    name: "Morning Camp",
    description: "Session percakapan dan pronunciation practice",
    type: "morning"
  },
  {
    time: "20:45 - 21:45",
    name: "Evening Camp",
    description: "Review materi dan games bahasa Inggris",
    type: "evening"
  }
];

export default function CampPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-100">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-green-600 to-blue-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 mb-4">
              English Camp Area
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Pengalaman Belajar di Camp
            </h1>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Tinggal di lingkungan yang mendukung pembelajaran bahasa Inggris 24 jam. Nikmati fasilitas lengkap dan program camp yang intensif untuk hasil belajar yang maksimal.
            </p>
          </div>
        </div>
      </section>

      {/* Camp Types */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Pilih Tipe Camp Anda
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Pilih akomodasi yang sesuai dengan kebutuhan dan budget Anda
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {campTypes.map((camp) => {
              const IconComponent = camp.icon;
              return (
                <Card key={camp.id} className={`relative border-0 shadow-lg hover:shadow-xl transition-all duration-300 ${camp.popular ? 'ring-2 ring-blue-500' : ''}`}>
                  {camp.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-blue-500 text-white px-4 py-1">
                        <Star className="w-4 h-4 mr-1" />
                        Paling Populer
                      </Badge>
                    </div>
                  )}
                  <CardHeader className="text-center pb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-900">
                      {camp.name}
                    </CardTitle>
                    <div className="text-2xl font-bold text-blue-600">
                      {camp.price}
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <CardDescription className="text-base text-gray-600 mb-4 text-center">
                      {camp.description}
                    </CardDescription>
                    <div className="space-y-2 mb-6">
                      {camp.features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                    <Button className={`w-full ${camp.popular ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700'}`}>
                      Pilih Camp Ini
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Camp Facilities */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Fasilitas Camp Lengkap
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nikmati berbagai fasilitas yang mendukung kenyamanan dan kelancaran belajar Anda
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {campFacilities.map((facility, index) => {
              const IconComponent = facility.icon;
              return (
                <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-green-600" />
                    </div>
                    <CardTitle className="text-lg font-bold text-gray-900">
                      {facility.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base text-gray-600">
                      {facility.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Camp Schedule */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Jadwal Program Camp
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              2x program camp setiap hari untuk melengkapi pembelajaran Anda
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {campSchedule.map((schedule, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-gray-900 flex items-center gap-3">
                    <Clock className="w-6 h-6 text-blue-600" />
                    {schedule.name}
                  </CardTitle>
                  <div className="text-2xl font-bold text-blue-600">
                    {schedule.time}
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-gray-600">
                    {schedule.description}
                  </CardDescription>
                  <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                    <div className="text-sm font-medium text-blue-800">
                      {schedule.type === 'morning' ? 'Session Pagi' : 'Session Malam'}
                    </div>
                    <div className="text-xs text-blue-600 mt-1">
                      {schedule.type === 'morning' ? 'Memulai hari dengan energi positif' : 'Mengulangi materi sebelum istirahat'}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 text-white max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Total Pembelajaran Camp</h3>
              <div className="text-4xl font-bold mb-2">60 Jam/Bulan</div>
              <p className="text-green-100">
                2 jam setiap hari × 30 hari = 60 jam pembelajaran tambahan di luar kelas reguler
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-700 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Siap Tinggal di English Camp?
            </h2>
            <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
              Rasakan pengalaman belajar yang intensif dan menyenangkan di lingkungan yang mendukung
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-green-600 hover:bg-green-50 text-lg px-8 py-3">
                <Home className="w-5 h-5 mr-2" />
                Pesan Camp Sekarang
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-600 text-lg px-8 py-3">
                Lihat Foto Camp
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}