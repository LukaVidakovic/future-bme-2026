'use client';

import { motion } from 'framer-motion';

const conferenceChair = {
  name: 'Prof. Andrea Ivanišević',
  affiliation: 'Faculty of Technical Sciences, University of Novi Sad, Serbia',
  image: '/future-bme-2026/images/A.Ivanisevic.jpg'
};

const programCommittee = [
  { name: 'Andrea Ivanišević', affiliation: 'University of Novi Sad, Faculty of Technical Sciences, Serbia', role: 'President' },
  { name: 'Boris Dumnić', affiliation: 'University of Novi Sad, Faculty of Technical Sciences, Serbia' },
  { name: 'Marijana Dukić Mijatović', affiliation: 'University of Novi Sad, Faculty of Technical Sciences, Serbia' },
  { name: 'Franz Haas', affiliation: 'Graz University of Technology, Austria' },
  { name: 'Darko Stefanović', affiliation: 'University of Novi Sad, Faculty of Technical Sciences, Serbia' },
  { name: 'Rudolf Gruenbichler', affiliation: 'Graz University of Technology, Austria' },
  { name: 'Bernd Markus Zunk', affiliation: 'Graz University of Technology, Austria' },
  { name: 'Omar de la Cruz Vicente', affiliation: 'University of Alcala, Spain' },
  { name: 'Ewa Glińska', affiliation: 'Bialystok University of Technology, Faculty of Engineering Management, Poland' },
  { name: 'Matevž Obrecht', affiliation: 'University of Maribor, Faculty of Logistics, Slovenia' },
  { name: 'Aleksandar Vujović', affiliation: 'University of Montenegro, Faculty of Mechanical Engineering, Montenegro' },
  { name: 'Bojan Jovanovski', affiliation: 'FH Joanneum, Austria' },
  { name: 'Christian Friedl', affiliation: 'FH Joanneum, Austria' },
  { name: 'Dávid Lóránt Dénes', affiliation: 'Hungarian University of Agriculture and Life Sciences (MATE), Hungary' },
  { name: 'Daniela Ludin', affiliation: 'Heilbronn University, Faculty of Economics, Germany' },
  { name: 'Nemanja Kašiković', affiliation: 'University of Novi Sad, Faculty of Technical Sciences, Serbia' },
  { name: 'Nenad Simeunović', affiliation: 'University of Novi Sad, Faculty of Technical Sciences, Serbia' },
  { name: 'Nemanja Tasić', affiliation: 'University of Novi Sad, Faculty of Technical Sciences, Serbia' },
  { name: 'Richard Frank', affiliation: 'School of Business, University of Ottawa, Canada' },
  { name: 'Magdalena Reksc', affiliation: 'University of Lodz, Faculty of International and Political Studies, Poland' },
  { name: 'Anna Frank', affiliation: 'University of Waterloo, SERS, Canada' },
  { name: 'Miroslav Dragić', affiliation: 'University of Banja Luka, Faculty of Technology, Bosnia and Herzegovina' },
  { name: 'Imre Lazar', affiliation: 'University of Karoli Gaspar, Institute for Society and Communicology, Hungary' },
  { name: 'Katarina Stojanović', affiliation: 'Faculty of Contemporary Arts, Belgrade, Serbia' },
  { name: 'Mustafa Cem Aldag', affiliation: 'Bandirma Onyedi Eylul University, Turkey' },
  { name: 'Bulent Eker', affiliation: 'Tekirdag Namik Kemal University, Turkey' },
  { name: 'Branislav Dudić', affiliation: 'Comenius University Bratislava, Slovakia' },
  { name: 'Nadia Netti', affiliation: 'University of Naples "Federico II", Italy' },
  { name: 'Trajce Velkovski', affiliation: 'University Ss. Cyril and Methodius, Faculty of Mechanical Engineering, Macedonia' },
  { name: 'Maja Vizjak', affiliation: 'Institute for Migration Research, Croatia' },
  { name: 'Egla Mansi', affiliation: 'Epoka University, Albania' },
  { name: 'Aida Bitri', affiliation: 'Epoka University, Albania' },
  { name: 'Elzbieta Szymanska', affiliation: 'Bialystok University of Technology, Faculty of Engineering Management, Poland' },
  { name: 'Jelena Pokimica', affiliation: 'Boise State University, Idaho, United States of America' }
];

const organizationalCommittee = [
  { name: 'Jovana Topalić', affiliation: 'University of Novi Sad, Faculty of Technical Sciences, Serbia' },
  { name: 'Tanja Todorović', affiliation: 'University of Novi Sad, Faculty of Technical Sciences, Serbia' },
  { name: 'Milica Njegovan', affiliation: 'University Union – Nikola Tesla, Faculty of Management, Sremski Karlovci, Serbia' },
  { name: 'Željko Zeljković', affiliation: 'University of Novi Sad, Faculty of Technical Sciences, Serbia' },
  { name: 'Dušanka Dakić', affiliation: 'University of Novi Sad, Faculty of Technical Sciences, Serbia' },
  { name: 'Uglješa Marjanović', affiliation: 'University of Novi Sad, Faculty of Technical Sciences, Serbia' },
  { name: 'Stefan Arambašić', affiliation: 'University of Novi Sad, Faculty of Technical Sciences, Serbia' },
  { name: 'Branislav Bogojević', affiliation: 'University of Novi Sad, Faculty of Technical Sciences, Serbia' },
  { name: 'Radosav Petrović', affiliation: 'University of Novi Sad, Faculty of Technical Sciences, Serbia' }
];

const reviewingCommittee = [
  { name: 'Dunja Sokolović', affiliation: 'University of Novi Sad, Faculty of Technical Sciences, Serbia' },
  { name: 'Bojana Jokanović', affiliation: 'University of Novi Sad, Faculty of Technical Sciences, Serbia' },
  { name: 'Sebastian Baloš', affiliation: 'University of Novi Sad, Faculty of Technical Sciences, Serbia' },
  { name: 'Dávid Lóránt Dénes', affiliation: 'Hungarian University of Agriculture and Life Sciences (MATE), Institute of Rural Development and Sustainable Economy, Department of Sustainable Tourism, Hungary' },
  { name: 'Trajce Velkovski', affiliation: 'Ss. Cyril & Methodius University in Skopje, Faculty of Mechanical Engineering, Macedonia' },
  { name: 'Milena Krklješ', affiliation: 'University of Novi Sad, Faculty of Technical Sciences, Serbia' },
  { name: 'Marko Orošnjak', affiliation: 'University of Luxembourg, Luxembourg' },
  { name: 'Jovan Filipović', affiliation: 'University of Belgrade, Faculty of Organizational Sciences, Serbia' },
  { name: 'Srđan Tegeltija', affiliation: 'University of Novi Sad, Faculty of Technical Sciences, Serbia' },
  { name: 'Miroslav Ferenčak', affiliation: 'University of Novi Sad, Faculty of Technical Sciences, Serbia' },
  { name: 'Violeta Vrhovac', affiliation: 'University of Novi Sad, Faculty of Technical Sciences, Serbia' },
  { name: 'Boško Matović', affiliation: 'University of Montenegro, Faculty of Mechanical Engineering, Montenegro' },
  { name: 'Gregor Franken', affiliation: 'University of Ljubljana, Faculty of Natural Sciences and Engineering, Slovenia' },
  { name: 'Martin Scharf', affiliation: 'Graz University of Technology, Austria' },
  { name: 'Ljubomir Kekenovski', affiliation: 'Ss Cyril and Methodius University, Faculty of Economics, Macedonia' },
  { name: 'Aleksandra Pavlović', affiliation: 'The Academy of Applied Studies Polytechnic, Beograd, Serbia' },
  { name: 'Slavko Rakić', affiliation: 'University of Novi Sad, Faculty of Technical Sciences, Serbia; Tallinn University of Technology, Estonia' },
  { name: 'Janika Leoste', affiliation: 'Tallinn University of Technology, Estonia; Tallinn University, Estonia' },
  { name: 'Yerlan Issakov', affiliation: 'Abai Kazakh National Pedagogical University, Faculty of Natural Sciences and Geography, Department of Geography and Ecology, Almaty, Kazakhstan' },
  { name: 'Alireza Ranjbaran', affiliation: 'Faculty of Management, University of Tehran, Tehran, Iran' }
];

export default function CommitteesPage() {
  return (
    <main className="min-h-screen pt-20">
      {/* Hero */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--purple)]/10 via-transparent to-[var(--blue)]/10" />
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Committees
            </h1>
            <p className="text-xl md:text-2xl text-[var(--gray-light)] max-w-3xl mx-auto">
              Meet the distinguished experts guiding Future-BME 2026
            </p>
          </motion.div>
        </div>
      </section>

      {/* Conference Chair */}
      <section className="py-16 md:py-32 bg-gradient-to-br from-[var(--purple)]/10 to-[var(--blue)]/10">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Conference Chair</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <div className="relative mb-8">
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--purple)] to-[var(--blue-light)] rounded-full blur-2xl opacity-30 animate-pulse"></div>
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-[var(--purple)] shadow-[0_0_60px_rgba(105,80,222,0.4)]">
                <img src={conferenceChair.image} alt={conferenceChair.name} className="w-full h-full object-cover" />
              </div>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-[var(--purple)] mb-3">{conferenceChair.name}</h3>
            <p className="text-lg md:text-xl text-[var(--gray-light)] text-center max-w-2xl">{conferenceChair.affiliation}</p>
          </motion.div>
        </div>
      </section>

      {/* Program Committee */}
      <section className="py-16 md:py-24 bg-[var(--navy)]/40">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">International Program Committee</h2>
          </motion.div>

          {/* Chair Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto mb-12"
          >
            <div className="relative p-8 rounded-2xl bg-gradient-to-br from-[var(--purple)]/20 via-[var(--blue)]/10 to-transparent backdrop-blur-xl border border-[var(--purple)]/30 shadow-lg">
              <div className="absolute top-4 right-4 px-3 py-1 bg-[var(--purple)] rounded-full text-xs font-bold text-white">
                CHAIR
              </div>
              <div className="flex items-center gap-6">
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-[var(--purple)] to-[var(--blue-light)] flex items-center justify-center shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2">Andrea Ivanišević</h3>
                  <p className="text-[var(--gray-light)]">University of Novi Sad, Faculty of Technical Sciences, Serbia</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Members Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {programCommittee.filter(m => !m.role).map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.01 }}
                className="flex items-start gap-3 p-4 rounded-xl bg-[var(--blue)]/10 backdrop-blur-xl border border-white/5 hover:border-[var(--purple)]/30 transition-all"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-[var(--purple)]/50 to-[var(--blue-light)]/50 flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-bold text-white mb-1">{member.name}</h3>
                  <p className="text-xs text-[var(--gray-light)] leading-relaxed">{member.affiliation}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Organizational Committee */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Organizational Committee</h2>
          </motion.div>

          {/* Chair Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto mb-12"
          >
            <div className="relative p-8 rounded-2xl bg-gradient-to-br from-[var(--blue)]/20 via-[var(--teal)]/10 to-transparent backdrop-blur-xl border border-[var(--blue)]/30 shadow-lg">
              <div className="absolute top-4 right-4 px-3 py-1 bg-[var(--blue-light)] rounded-full text-xs font-bold text-white">
                CHAIR
              </div>
              <div className="flex items-center gap-6">
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-[var(--blue)] to-[var(--teal)] flex items-center justify-center shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2">Darko Stefanović</h3>
                  <p className="text-[var(--gray-light)]">University of Novi Sad, Faculty of Technical Sciences, Serbia</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Members Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {organizationalCommittee.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.02 }}
                className="flex items-start gap-3 p-4 rounded-xl bg-[var(--blue)]/10 backdrop-blur-xl border border-white/5 hover:border-[var(--blue)]/30 transition-all"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-[var(--blue)]/50 to-[var(--teal)]/50 flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-bold text-white mb-1">{member.name}</h3>
                  <p className="text-xs text-[var(--gray-light)] leading-relaxed">{member.affiliation}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviewing Committee */}
      <section className="py-16 md:py-24 bg-[var(--navy)]/40">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Reviewing Committee</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {reviewingCommittee.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.01 }}
                className="flex items-start gap-3 p-4 rounded-xl bg-[var(--blue)]/10 backdrop-blur-xl border border-white/5 hover:border-[var(--purple)]/30 transition-all"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-[var(--blue-light)] to-[var(--blue)] flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-bold text-white mb-1">{member.name}</h3>
                  <p className="text-xs text-[var(--gray-light)] leading-relaxed">{member.affiliation}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
