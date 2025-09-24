'use client';

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Users, Clock, Award, Home, Star } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <motion.div 
          className="container mx-auto px-4 py-20 md:py-32"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.div 
                className="space-y-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                    Kampung Inggris Pare
                  </Badge>
                </motion.div>
                <motion.h1 
                  className="text-4xl md:text-6xl font-bold leading-tight"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  Global English
                  <motion.span 
                    className="block text-blue-200"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                  >
                    Better English, for Brighter Future
                  </motion.span>
                </motion.h1>
                <motion.p 
                  className="text-xl md:text-2xl text-blue-100 max-w-2xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1 }}
                >
                  Di Global English anda bisa merancang sendiri program yang anda pilih sesuai dengan kebutuhan dan kemampuan anda. Kami memiliki program paling lengkap di Kampung Inggris.
                </motion.p>
              </motion.div>
              
              <motion.div 
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 text-lg px-8 py-3">
                    Pilih Program Belajar
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-3">
                    Konsultasi Gratis
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <motion.div 
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { value: "8", label: "Program Kelas Reguler" },
                    { value: "4x", label: "Pertemuan/Hari" },
                    { value: "2x", label: "Program Camp/Hari" },
                    { value: "180", label: "Jam Total Belajar" }
                  ].map((item, index) => (
                    <motion.div 
                      key={index}
                      className="text-center"
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 1.4 + index * 0.1 }}
                      whileHover={{ scale: 1.1 }}
                    >
                      <motion.div 
                        className="text-4xl font-bold text-white"
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                      >
                        {item.value}
                      </motion.div>
                      <div className="text-blue-200">{item.label}</div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Mengapa Memilih Global English?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Pengalaman belajar terbaik dengan fasilitas lengkap dan metode pembelajaran yang efektif
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: BookOpen,
                title: "Program Lengkap",
                description: "8 program kelas reguler dengan kurikulum yang komprehensif untuk semua level kemampuan"
              },
              {
                icon: Users,
                title: "Teman Belajar Setiap Hari",
                description: "Suasana belajar yang asyik dengan teman-teman dari berbagai daerah di Indonesia"
              },
              {
                icon: Clock,
                title: "Fleksibel & Intensif",
                description: "4x pertemuan kelas dan 2x program camp setiap hari untuk hasil belajar yang maksimal"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow h-full">
                  <CardHeader>
                    <motion.div 
                      className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <feature.icon className="w-8 h-8 text-blue-600" />
                    </motion.div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Offer Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-red-500 text-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30 mb-4">
                Penawaran Spesial
              </Badge>
            </motion.div>
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-4"
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Diskon 50% Program TOEFL & IELTS
            </motion.h2>
            <p className="text-xl text-orange-100 max-w-2xl mx-auto">
              Persiapkan diri Anda untuk tes TOEFL dan IELTS dengan diskon khusus. Jangan lewatkan kesempatan ini!
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                icon: Award,
                title: "Program TOEFL",
                description: "Persiapkan diri Anda untuk tes TOEFL dengan materi komprehensif dan strategi terbaik."
              },
              {
                icon: Star,
                title: "Program IELTS",
                description: "Raih skor IELTS tinggi dengan program intensif dan pengajar berpengalaman."
              }
            ].map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <motion.div 
                        className="w-8 h-8 bg-yellow-300 rounded-full flex items-center justify-center"
                        whileHover={{ scale: 1.2, rotate: 10 }}
                      >
                        <program.icon className="w-5 h-5 text-orange-600" />
                      </motion.div>
                      <CardTitle className="text-xl text-white">{program.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-orange-100 text-base">
                      {program.description}
                    </CardDescription>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button className="w-full mt-4 bg-white text-orange-600 hover:bg-orange-50">
                        Daftar Sekarang
                      </Button>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-12 text-center text-white"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Siap Memulai Perjalanan Bahasa Inggris Anda?
            </motion.h2>
            <motion.p 
              className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Bergabunglah dengan ribuan siswa yang telah meningkatkan kemampuan bahasa Inggris mereka di Global English
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 text-lg px-8 py-3">
                  <Home className="w-5 h-5 mr-2" />
                  Mulai Sekarang
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-3">
                  Hubungi Kami
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}