'use client';

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Home, BookOpen, Users, Award, MapPin, Phone, Mail } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: "/", label: "Beranda", icon: Home },
    { href: "/programs", label: "Program", icon: BookOpen },
    { href: "/camp", label: "English Camp", icon: Users },
    { href: "/toefl-ielts", label: "TOEFL/IELTS", icon: Award },
    { href: "/facilities", label: "Fasilitas", icon: MapPin },
  ];

  return (
    <motion.nav 
      className="bg-white shadow-lg sticky top-0 z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <motion.div 
              className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <BookOpen className="w-6 h-6 text-white" />
            </motion.div>
            <div>
              <div className="text-xl font-bold text-gray-900">Global English</div>
              <div className="text-xs text-gray-600">Kampung Inggris Pare</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <motion.div key={item.href} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href={item.href}
                    className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors font-medium"
                  >
                    <IconComponent className="w-4 h-4" />
                    {item.label}
                  </Link>
                </motion.div>
              );
            })}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
                <Phone className="w-4 h-4 mr-2" />
                Hubungi Kami
              </Button>
            </motion.div>
          </div>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Button variant="ghost" size="icon">
                  <Menu className="w-6 h-6" />
                </Button>
              </motion.div>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <motion.div 
                className="flex flex-col gap-6 mt-8"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center gap-2 pb-4 border-b">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                    <BookOpen className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-xl font-bold text-gray-900">Global English</div>
                    <div className="text-xs text-gray-600">Kampung Inggris Pare</div>
                  </div>
                </div>
                
                {navItems.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className="flex items-center gap-3 text-gray-700 hover:text-blue-600 transition-colors font-medium p-3 rounded-lg hover:bg-blue-50"
                      >
                        <IconComponent className="w-5 h-5" />
                        {item.label}
                      </Link>
                    </motion.div>
                  );
                })}
                
                <div className="pt-4 border-t space-y-3">
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
                      <Phone className="w-4 h-4 mr-2" />
                      Hubungi Kami
                    </Button>
                  </motion.div>
                  <div className="text-center text-sm text-gray-600">
                    <div className="flex items-center justify-center gap-2 mb-1">
                      <Phone className="w-4 h-4" />
                      <span>+62 812-3456-7890</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <Mail className="w-4 h-4" />
                      <span>info@globalenglish.co.id</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;