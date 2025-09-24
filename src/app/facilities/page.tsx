'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Home, 
  Wifi, 
  Kitchen, 
  Car, 
  MapPin, 
  Users, 
  Heart, 
  Shield, 
  Coffee, 
  Tv, 
  Wind, 
  Droplets, 
  Lightbulb, 
  Camera,
  Dumbbell,
  BookOpen,
  Utensils,
  ShoppingCart
} from "lucide-react";

const facilityCategories = [
  {
    title: "Akomodasi",
    icon: Home,
    description: "Fasilitas penginapan yang nyaman dan aman",
    color: "blue",
    facilities: [
      {
        name: "Kamar Tidur",
        description: "Kamar bersih dengan kasur nyaman dan lemari pakaian",
        icon: Home,
        details: ["1-4 orang/kamar", "Kasur spring bed", "Lemari pakaian", "Meja belajar"]
      },
      {
        name: "Kamar Mandi",
        description: "Fasilitas kamar mandi yang bersih dan terawat",
        icon: Droplets,
        details: ["Air hangat & dingin", "Shower", "Closet duduk", "Ember gayung"]
      }
    ]
  },
  {
    title: "Area Umum",
    icon: Users,
    description: "Ruang bersama untuk aktivitas dan sosialisasi",
    color: "green",
    facilities: [
      {
        name: "Area Belajar",
        description: "Ruang khusus untuk belajar dan diskusi kelompok",
        icon: BookOpen,
        details: ["Meja & kursi", "Papan tulis", "AC", "Lampu belajar"]
      },
      {
        name: "Ruang Tamu",
        description: "Area santai untuk bersosialisasi dan istirahat",
        icon: Coffee,
        details: ["Sofa", "TV", "Karpet", "Dekorasi menarik"]
      }
    ]
  },
  {
    title: "Dapur & Makan",
    icon: Kitchen,
    description: "Fasilitas memasak dan makan yang lengkap",
    color: "orange",
    facilities: [
      {
        name: "Dapur Bersama",
        description: "Dapur lengkap untuk memasak dan menyiapkan makanan",
        icon: Kitchen,
        details: ["Kompor gas", "Kulkas", "Magic com", "Peralatan masak"]
      },
      {
        name: "Ruang Makan",
        description: "Area makan yang nyaman bersama teman-teman",
        icon: Utensils,
        details: ["Meja makan", "Kursi", "Dispenser", "Tempat cuci piring"]
      }
    ]
  },
  {
    title: "Teknologi & Komunikasi",
    icon: Wifi,
    description: "Fasilitas pendukung pembelajaran modern",
    color: "purple",
    facilities: [
      {
        name: "Internet WiFi",
        description: "Akses internet cepat untuk pembelajaran online",
        icon: Wifi,
        details: ["High speed", "24 jam", "Coverage luas", "Stabil"]
      },
      {
        name: "Hiburan",
        description: "Fasilitas hiburan untuk refreshing",
        icon: Tv,
        details: ["TV LED", "Speaker", "Playstation", "DVD Player"]
      }
    ]
  },
  {
    title: "Kenyamanan & Keamanan",
    icon: Shield,
    description: "Fasilitas penunjang kenyamanan dan keamanan",
    color: "red",
    facilities: [
      {
        name: "Keamanan 24 Jam",
        description: "Sistem keamanan terjamin dengan penjagaan 24 jam",
        icon: Shield,
        details: ["CCTV", "Penjaga malam", "Pagar", "Kunci kamar"]
      },
      {
        name: "Kenyamanan",
        description: "Fasilitas penunjang kenyamanan tinggal",
        icon: Wind,
        details: ["AC (VIP)", "Kipas angin", "Exhaust fan", "Ventilasi baik"]
      }
    ]
  },
  {
    title: "Layanan Tambahan",
    icon: Heart,
    description: "Layanan ekstra untuk kemudahan hidup",
    color: "pink",
    facilities: [
      {
        name: "Laundry",
        description: "Layanan pencucian pakaian",
        icon: Droplets,
        details: ["Cuci + setrika", "Pickup & delivery", "Cepat", "Murah"]
      },
      {
        name: "Parkir",
        description: "Area parkir yang luas dan aman",
        icon: Car,
        details: ["Motor & mobil", "Atap", "Keamanan", "Luas"]
      }
    ]
  }
];

const nearbyFacilities = [
  {
    name: "Warung Makan",
    distance: "50m",
    description: "Berbagai pilihan makanan murah dan enak",
    icon: Utensils
  },
  {
    name: "Minimarket",
    distance: "100m", 
    description: "Kebutuhan sehari-hari dan snack",
    icon: ShoppingCart
  },
  {
    name: "ATM Center",
    distance: "200m",
    description: "Berbagai bank untuk transaksi",
    icon: CreditCard
  },
  {
    name: "Puskesmas",
    distance: "500m",
    description: "Fasilitas kesehatan terdekat",
    icon: Heart
  },
  {
    name: "Tempat Fotocopy",
    distance: "150m",
    description: "Print dan fotocopy materi belajar",
    icon: Camera
  },
  {
    name: "Gym",
    distance: "300m",
    description: "Tempat fitness untuk menjaga kesehatan",
    icon: Dumbbell
  }
];

const campRules = [
  "Jam malam pukul 22:00 WIB",
  "Tidak diperbolehkan merokok di dalam kamar",
  "Menjaga kebersihan kamar dan area umum",
  "Menghormati teman satu camp",
  "Tidak membawa tamu lawan jenis ke dalam kamar",
  "Mengikuti jadwal belajar yang telah ditentukan"
];

export default function FacilitiesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 mb-4">
              Fasilitas Lengkap
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Fasilitas Kampung Inggris
            </h1>
            <p className="text-xl text-indigo-100 max-w-3xl mx-auto">
              Nikmati berbagai fasilitas lengkap dan modern yang mendukung kenyamanan dan kelancaran belajar Anda di Global English
            </p>
          </div>
        </div>
      </section>

      {/* Facility Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Fasilitas Unggulan
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Semua fasilitas dirancang untuk memberikan pengalaman belajar yang optimal dan nyaman
            </p>
          </div>
          
          <div className="space-y-16">
            {facilityCategories.map((category, categoryIndex) => {
              const IconComponent = category.icon;
              const colorClasses = {
                blue: "from-blue-500 to-blue-600",
                green: "from-green-500 to-green-600", 
                orange: "from-orange-500 to-orange-600",
                purple: "from-purple-500 to-purple-600",
                red: "from-red-500 to-red-600",
                pink: "from-pink-500 to-pink-600"
              };
              
              return (
                <div key={categoryIndex} className="space-y-8">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-br rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {category.title}
                    </h3>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                      {category.description}
                    </p>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {category.facilities.map((facility, facilityIndex) => {
                      const FacilityIcon = facility.icon;
                      return (
                        <Card key={facilityIndex} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                          <CardHeader>
                            <div className="flex items-center gap-4">
                              <div className={`w-12 h-12 bg-gradient-to-br ${colorClasses[category.color]} rounded-lg flex items-center justify-center`}>
                                <FacilityIcon className="w-6 h-6 text-white" />
                              </div>
                              <div>
                                <CardTitle className="text-lg font-bold text-gray-900">
                                  {facility.name}
                                </CardTitle>
                                <CardDescription className="text-base">
                                  {facility.description}
                                </CardDescription>
                              </div>
                            </div>
                          </CardHeader>
                          <CardContent>
                            <div className="space-y-2">
                              <h4 className="font-semibold text-sm text-gray-900">Fitur:</h4>
                              <div className="grid grid-cols-2 gap-2">
                                {facility.details.map((detail, detailIndex) => (
                                  <div key={detailIndex} className="flex items-center gap-2 text-sm text-gray-600">
                                    <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></div>
                                    {detail}
                                  </div>
                                ))}
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Nearby Facilities */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <MapPin className="w-8 h-8 text-indigo-600" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Fasilitas Sekitar
              </h2>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Lokasi strategis dengan berbagai fasilitas umum yang mudah diakses
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {nearbyFacilities.map((facility, index) => {
              const IconComponent = facility.icon;
              return (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-indigo-600" />
                    </div>
                    <CardTitle className="text-lg font-bold text-gray-900">
                      {facility.name}
                    </CardTitle>
                    <Badge variant="secondary" className="bg-indigo-100 text-indigo-700">
                      {facility.distance}
                    </Badge>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base text-gray-600 text-center">
                      {facility.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Camp Rules */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Shield className="w-8 h-8 text-indigo-600" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Peraturan Camp
              </h2>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Aturan main yang menjaga kenyamanan dan ketertiban bersama
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900">
                  Tata Tertib Global English Camp
                </CardTitle>
                <CardDescription className="text-base">
                  Untuk menciptakan lingkungan belajar yang kondusif, semua penghuni camp wajib mematuhi peraturan berikut:
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {campRules.map((rule, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 bg-indigo-50 rounded-lg">
                      <div className="w-6 h-6 bg-indigo-500 text-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-sm font-bold">{index + 1}</span>
                      </div>
                      <span className="text-gray-700">{rule}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-700 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Siap Merasakan Fasilitas Terbaik?
            </h2>
            <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
              Bergabunglah dengan Global English dan nikmati semua fasilitas premium untuk pengalaman belajar yang tak terlupakan
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-indigo-600 hover:bg-indigo-50 text-lg px-8 py-3">
                <Home className="w-5 h-5 mr-2" />
                Pesan Camp Sekarang
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-indigo-600 text-lg px-8 py-3">
                <Camera className="w-5 h-5 mr-2" />
                Virtual Tour
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}