import { motion } from 'motion/react';
import { Badge } from './ui/badge';
import { Sparkles, Code, TrendingUp, User } from 'lucide-react';
import profileImage from "../pictures/IMG-20250710-WA0047(1).jpg";

interface HeaderProps {
  name: string;
  jobTitle: string;
  photoUrl?: string;
}

export function Header({ name, jobTitle, photoUrl }: HeaderProps) {
  const roles = ['Product Engineer', 'Fullstack Developer', 'Marketing & Sales'];
  const resolvedPhoto = photoUrl ?? profileImage;

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-center space-y-6"
      role="banner"
      aria-label="Profile header"
    >
      {/* Avatar with glow effect */}
      <div className="relative inline-block">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ 
            type: "spring",
            stiffness: 260,
            damping: 20,
            delay: 0.1
          }}
          className="relative"
        >
          <div className="w-32 h-32 rounded-3xl bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 p-1 shadow-2xl">
            <div className="w-full h-full rounded-[1.3rem] bg-gradient-to-br from-blue-600 to-purple-600 overflow-hidden">
              <img
                src={resolvedPhoto}
                alt={`${name} photo`}
                title={`${name}`}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
                draggable="false"
              />
            </div>
          </div>
          
          {/* Animated ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 blur-lg opacity-50"
            aria-hidden="true"
          />

          {/* Status badge */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, type: "spring" }}
            className="absolute -bottom-2 -right-2 px-3 py-1 rounded-full bg-emerald-500 text-white text-xs flex items-center gap-1 shadow-lg"
            role="status"
            aria-live="polite"
          >
            <span className="w-2 h-2 rounded-full bg-white animate-pulse" aria-hidden="true" />
            Available
          </motion.div>
        </motion.div>
      </div>

      {/* Name with gradient */}
      <div className="space-y-2">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-3xl sm:text-4xl bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 dark:from-white dark:via-blue-200 dark:to-white bg-clip-text text-transparent tracking-tight"
        >
          {name}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.25 }}
          className="text-sm sm:text-base text-slate-500 dark:text-slate-400"
        >
          {jobTitle}
        </motion.p>

        {/* Role badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-2"
        >
          {roles.map((role, index) => (
            <Badge
              key={role}
              variant="outline"
              className="px-3 py-1 bg-white/50 dark:bg-white/5 backdrop-blur-xl border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-200 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105"
            >
              {index === 0 && <Code className="w-3 h-3 mr-1" aria-hidden="true" />}
              {index === 1 && <Sparkles className="w-3 h-3 mr-1" aria-hidden="true" />}
              {index === 2 && <TrendingUp className="w-3 h-3 mr-1" aria-hidden="true" />}
              {role}
            </Badge>
          ))}
        </motion.div>
      </div>

      {/* Subtitle with animation */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="text-slate-600 dark:text-slate-300 max-w-lg mx-auto leading-relaxed"
      >
        Building digital products with modern tech stack.
        <br />
        Transforming ideas into scalable solutions.
      </motion.p>
    </motion.header>
  );
}