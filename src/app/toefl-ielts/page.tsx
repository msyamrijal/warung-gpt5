'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Star, Clock, Target, BookOpen, Users, TrendingUp, CheckCircle } from "lucide-react";

const toeflPrograms = [
  {
    id: 1,
    title: "TOEFL Preparation Regular",
    originalPrice: "Rp 3.000.000",
    discountedPrice: "Rp 1.500.000",
    duration: "8 minggu",
    sessions: "48 sesi",
    description: "Program persiapan TOEFL komprehensif dengan materi lengkap dan strategi tes",
    features: [
      "Struktur Tes TOEFL",
      "Reading Comprehension",
      "Listening Comprehension", 
      "Structure & Written Expression",
      "Test Taking Strategies",
      "Practice Tests"
    ],
    popular: true
  },
  {
    id: 2,
    title: "TOEFL Intensive",
    originalPrice: "Rp 4.000.000", 
    discountedPrice: "Rp 2.000.000",
    duration: "4 minggu",
    sessions: "96 sesi",
    description: "Program intensif untuk persiapan cepat dengan fokus pada skor target",
    features: [
      "Daily Practice Tests",
      "One-on-One Coaching",
      "Weakness Analysis",
      "Score Improvement Strategy",
      "Mock Tests",
      "Personalized Study Plan"
    ],
    popular: false
  }
];

const ieltsPrograms = [
  {
    id: 1,
    title: "IELTS Preparation Regular",
    originalPrice: "Rp 3.000.000",
    discountedPrice: "Rp 1.500.000", 
    duration: "8 minggu",
    sessions: "48 sesi",
    description: "Program persiapan IELTS untuk Academic dan General Training",
    features: [
      "IELTS Test Format",
      "Reading & Writing Academic",
      "Speaking Practice",
      "Listening Skills",
      "Band Score Strategy",
      "Practice Tests"
    ],
    popular: true
  },
  {
    id: 2,
    title: "IELTS Intensive",
    originalPrice: "Rp 4.000.000",
    discountedPrice: "Rp 2.000.000",
    duration: "4 minggu", 
    sessions: "96 sesi",
    description: "Program intensif untuk mencapai band score target dalam waktu singkat",
    features: [
      "Daily Speaking Practice",
      "Writing Correction",
      "Personalized Feedback",
      "Score Analysis",
      "Mock Interviews",
      "Intensive Writing Practice"
    ],
    popular: false
  }
];

const benefits = [
  {
    icon: Target,
    title: "Target Skor Tinggi",
    description: "Program dirancang untuk membantu Anda mencapai skor TOEFL/IELTS yang diinginkan"
  },
  {
    icon: Users,
    title: "Pengajar Berpengalaman",
    description: "Diajar oleh instruktur bersertifikat dengan pengalaman mengajar TOEFL/IELTS"
  },
  {
    icon: BookOpen,
    title: "Materi Komprehensif",
    description: "Materi pembelajaran lengkap dan up-to-date dengan standar tes terbaru"
  },
  {
    icon: TrendingUp,
    title: "Progress Tracking",
    description: "Monitor kemajuan belajar Anda dengan regular assessment dan feedback"
  }
];

const schedule = [
  {
    day: "Senin - Jumat",
    time: "07:00 - 08:30",
    activity: "Morning Class (Grammar/Vocabulary)"
  },
  {
    day: "Senin - Jumat", 
    time: "10:00 - 11:30",
    activity: "TOEFL/IELTS Focus Session"
  },
  {
    day: "Senin - Jumat",
    time: "13:00 - 14:30", 
    activity: "Practice & Review"
  },
  {
    day: "Senin - Jumat",
    time: "19:00 - 20:30",
    activity: "Evening Class (Speaking/Listening)"
  },
  {
    day: "Setiap Hari",
    time: "08:45 - 09:45",
    activity: "Morning Camp (Conversation)"
  },
  {
    day: "Setiap Hari",
    time: "20:45 - 21:45", 
    activity: "Evening Camp (Games & Review)"
  }
];

export default function ToeflIeltsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-100">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-orange-500 to-red-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 mb-4">
              Penawaran Spesial
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Diskon 50% Program TOEFL & IELTS
            </h1>
            <p className="text-xl text-orange-100 max-w-3xl mx-auto mb-8">
              Persiapkan diri Anda untuk tes TOEFL dan IELTS dengan diskon khusus. Jangan lewatkan kesempatan terbatas ini!
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 max-w-2xl mx-auto">
              <div className="text-3xl font-bold mb-2">Harga Spesial</div>
              <div className="text-5xl font-bold text-yellow-300">50% OFF</div>
              <div className="text-lg text-orange-100 mt-2">
                Untuk semua program TOEFL dan IELTS
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TOEFL Programs */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Award className="w-8 h-8 text-orange-600" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Program TOEFL
              </h2>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Persiapkan diri Anda untuk tes TOEFL dengan program yang terbukti efektif
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {toeflPrograms.map((program) => (
              <Card key={program.id} className="relative border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                {program.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                    <Badge className="bg-orange-500 text-white px-4 py-1">
                      <Star className="w-4 h-4 mr-1" />
                      Paling Populer
                    </Badge>
                  </div>
                )}
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-xl font-bold text-gray-900">
                    {program.title}
                  </CardTitle>
                  <div className="space-y-2">
                    <div className="flex justify-center items-center gap-2">
                      <span className="text-lg text-gray-400 line-through">
                        {program.originalPrice}
                      </span>
                      <Badge className="bg-red-500 text-white">
                        50% OFF
                      </Badge>
                    </div>
                    <div className="text-2xl font-bold text-orange-600">
                      {program.discountedPrice}
                    </div>
                    <div className="flex justify-center gap-4 text-sm text-gray-600">
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {program.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <BookOpen className="w-4 h-4" />
                        {program.sessions}
                      </span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-gray-600 mb-4 text-center">
                    {program.description}
                  </CardDescription>
                  <div className="space-y-2 mb-6">
                    {program.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  <Button className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600">
                    Daftar Sekarang
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* IELTS Programs */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Star className="w-8 h-8 text-blue-600" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Program IELTS
              </h2>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Raih band score IELTS tinggi dengan program intensif dan terstruktur
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {ieltsPrograms.map((program) => (
              <Card key={program.id} className="relative border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                {program.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                    <Badge className="bg-blue-500 text-white px-4 py-1">
                      <Star className="w-4 h-4 mr-1" />
                      Paling Populer
                    </Badge>
                  </div>
                )}
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-xl font-bold text-gray-900">
                    {program.title}
                  </CardTitle>
                  <div className="space-y-2">
                    <div className="flex justify-center items-center gap-2">
                      <span className="text-lg text-gray-400 line-through">
                        {program.originalPrice}
                      </span>
                      <Badge className="bg-red-500 text-white">
                        50% OFF
                      </Badge>
                    </div>
                    <div className="text-2xl font-bold text-blue-600">
                      {program.discountedPrice}
                    </div>
                    <div className="flex justify-center gap-4 text-sm text-gray-600">
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {program.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <BookOpen className="w-4 h-4" />
                        {program.sessions}
                      </span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-gray-600 mb-4 text-center">
                    {program.description}
                  </CardDescription>
                  <div className="space-y-2 mb-6">
                    {program.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  <Button className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700">
                    Daftar Sekarang
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Keuntungan Belajar di Global English
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Dapatkan pengalaman belajar terbaik dengan berbagai keuntungan eksklusif
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-orange-600" />
                    </div>
                    <CardTitle className="text-lg font-bold text-gray-900">
                      {benefit.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base text-gray-600">
                      {benefit.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Schedule */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Jadwal Belajar Intensif
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              6 sesi belajar setiap hari untuk hasil maksimal
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900 flex items-center gap-3">
                  <Clock className="w-6 h-6 text-orange-600" />
                  Jadwal Harian
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {schedule.map((item, index) => (
                    <div key={index} className="flex justify-between items-center p-3 bg-orange-50 rounded-lg">
                      <div>
                        <div className="font-medium text-gray-900">{item.activity}</div>
                        <div className="text-sm text-gray-600">{item.day}</div>
                      </div>
                      <div className="text-orange-600 font-medium">
                        {item.time}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg text-white text-center">
                  <div className="text-2xl font-bold mb-2">Total: 180 Jam/Bulan</div>
                  <div className="text-orange-100">
                    6 sesi × 2 jam × 30 hari = 360 jam/bulan (termasuk camp)
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-red-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Jangan Lewatkan Kesempatan Ini!
            </h2>
            <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
              Diskon 50% terbatas hanya untuk pendaftar bulan ini. Daftar sekarang dan raih skor TOEFL/IELTS impian Anda!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-orange-600 hover:bg-orange-50 text-lg px-8 py-3">
                <Award className="w-5 h-5 mr-2" />
                Daftar TOEFL Sekarang
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-orange-600 text-lg px-8 py-3">
                <Star className="w-5 h-5 mr-2" />
                Daftar IELTS Sekarang
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}