'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Clock, Users, Target, Brain, MessageCircle, FileText, Award } from "lucide-react";

const programs = [
  {
    id: 1,
    title: "Grammar Foundation",
    description: "Menguasai dasar-dasar tata bahasa Inggris dengan metode yang mudah dipahami",
    icon: BookOpen,
    duration: "4 minggu",
    level: "Beginner",
    features: ["Basic Grammar", "Sentence Structure", "Tenses Mastery", "Practice Exercises"]
  },
  {
    id: 2,
    title: "Conversation Club",
    description: "Latihan percakapan sehari-hari untuk meningkatkan kepercayaan diri berbicara",
    icon: MessageCircle,
    duration: "4 minggu",
    level: "Beginner - Intermediate",
    features: ["Daily Conversation", "Pronunciation", "Vocabulary Building", "Role Playing"]
  },
  {
    id: 3,
    title: "Vocabulary Builder",
    description: "Memperluas kosakata dengan teknik memorizing yang efektif dan menyenangkan",
    icon: Brain,
    duration: "4 minggu",
    level: "All Levels",
    features: ["Word Families", "Context Learning", "Memory Techniques", "Daily Practice"]
  },
  {
    id: 4,
    title: "Pronunciation Perfect",
    description: "Mengucapkan kata-kata bahasa Inggris dengan benar dan natural",
    icon: Users,
    duration: "4 minggu",
    level: "Beginner - Intermediate",
    features: ["Sound System", "Intonation", "Stress Patterns", "Listening Practice"]
  },
  {
    id: 5,
    title: "Reading Comprehension",
    description: "Meningkatkan kemampuan membaca dan memahami teks bahasa Inggris",
    icon: FileText,
    duration: "4 minggu",
    level: "Intermediate",
    features: ["Reading Strategies", "Text Analysis", "Speed Reading", "Comprehension Tests"]
  },
  {
    id: 6,
    title: "Writing Mastery",
    description: "Mengasah kemampuan menulis dari paragraph hingga essay yang terstruktur",
    icon: Target,
    duration: "4 minggu",
    level: "Intermediate - Advanced",
    features: ["Paragraph Structure", "Essay Writing", "Creative Writing", "Academic Writing"]
  },
  {
    id: 7,
    title: "Listening Skills",
    description: "Melatih pendengaran untuk memahami berbagai aksen dan kecepatan berbicara",
    icon: Users,
    duration: "4 minggu",
    level: "All Levels",
    features: ["Active Listening", "Note Taking", "Dictation", "Comprehension Practice"]
  },
  {
    id: 8,
    title: "Presentation Skills",
    description: "Menguasai seni presentasi dalam bahasa Inggris untuk profesional dan akademis",
    icon: Award,
    duration: "4 minggu",
    level: "Intermediate - Advanced",
    features: ["Public Speaking", "Slide Design", "Body Language", "Q&A Sessions"]
  }
];

export default function ProgramsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 mb-4">
              Program Unggulan
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              8 Program Kelas Reguler
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Pilih program yang sesuai dengan kebutuhan dan kemampuan Anda. Setiap program dirancang untuk memberikan hasil belajar yang maksimal dengan 4x pertemuan setiap hari.
            </p>
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {programs.map((program) => {
              const IconComponent = program.icon;
              return (
                <Card key={program.id} className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-900">
                      {program.title}
                    </CardTitle>
                    <div className="flex justify-center gap-2 mt-2">
                      <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                        {program.duration}
                      </Badge>
                      <Badge variant="outline" className="border-indigo-200 text-indigo-700">
                        {program.level}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="flex flex-col h-full">
                    <CardDescription className="text-base text-gray-600 mb-4 flex-grow">
                      {program.description}
                    </CardDescription>
                    <div className="space-y-2 mb-6">
                      <h4 className="font-semibold text-sm text-gray-900">Fitur Program:</h4>
                      <ul className="space-y-1">
                        {program.features.map((feature, index) => (
                          <li key={index} className="text-sm text-gray-600 flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
                      Pilih Program
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Program Schedule */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Jadwal Belajar Intensif
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              4x pertemuan kelas reguler + 2x program camp setiap hari untuk hasil belajar yang optimal
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900 flex items-center gap-3">
                  <Clock className="w-6 h-6 text-blue-600" />
                  Kelas Reguler (4x pertemuan/hari)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                    <span className="font-medium">Morning Class</span>
                    <span className="text-blue-600">07:00 - 08:30</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                    <span className="font-medium">First Session</span>
                    <span className="text-green-600">10:00 - 11:30</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-yellow-50 rounded-lg">
                    <span className="font-medium">Second Session</span>
                    <span className="text-yellow-600">13:00 - 14:30</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-purple-50 rounded-lg">
                    <span className="font-medium">Evening Class</span>
                    <span className="text-purple-600">19:00 - 20:30</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900 flex items-center gap-3">
                  <Users className="w-6 h-6 text-green-600" />
                  Program Camp (2x sesi/hari)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-orange-50 rounded-lg">
                    <span className="font-medium">Morning Camp</span>
                    <span className="text-orange-600">08:45 - 09:45</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-red-50 rounded-lg">
                    <span className="font-medium">Evening Camp</span>
                    <span className="text-red-600">20:45 - 21:45</span>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Total Belajar:</h4>
                  <div className="text-2xl font-bold text-blue-600">180 Jam/Bulan</div>
                  <div className="text-sm text-gray-600">6 sesi intensif setiap hari</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Siap Memulai Perjalanan Belajar Anda?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Pilih program yang sesuai dengan kebutuhan Anda dan raih impian Anda bersama Global English
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 text-lg px-8 py-3">
                Daftar Sekarang
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-3">
                Konsultasi Gratis
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}