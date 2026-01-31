'use client';

import { motion } from 'framer-motion';

const sections = [
  {
    title: "Editorial Policy",
    content: [
      "The Proceedings - The International Conference on Business, Management, and Economics Engineering Future-BME 2026 are dedicated to publishing novel high-quality research that makes a significant contribution to the field of Business, Management and Economics Engineering.",
      "All submissions undergo a rigorous peer-review process to ensure academic integrity, innovation, and relevance to the conference themes. The proceedings publish original papers that have not been published previously (Original scientific paper, Review paper, Invited Lecture).",
      "Contributions shall be submitted in English language. The Editor is responsible for the fair and unbiased evaluation of all submitted manuscripts. Decisions to accept or reject a paper are based solely on the paper's academic merit, originality, relevance to the scope of the proceedings, and clarity."
    ]
  },
  {
    title: "Publication Ethics and Malpractice Statement",
    content: [
      "Future-BME conference adheres to the highest standards of publication ethics and expects all parties involved—authors, reviewers, and editors—to comply with ethical behavior.",
      "The Publication Ethics are based on internationally accepted guidelines for academic publishing ethics, primarily COPE Guidelines (Committee on Publication Ethics), Elsevier and Springer Nature ethical standards, and Creative Commons licensing principles (CC BY 4.0 license).",
      "In line with our publishing policy, generative AI cannot be listed as an author, and any use of generative AI must be clearly disclosed within the manuscript—either in the acknowledgments section or in the relevant part of the text."
    ]
  },
  {
    title: "Authors' Responsibilities",
    items: [
      {
        subtitle: "Originality",
        text: "Authors warrant that their manuscript is their original work, that it has not been published before and is not under consideration for publication elsewhere. Parallel submission of the same paper to another journal or proceeding constitutes misconduct."
      },
      {
        subtitle: "Reporting Standards",
        text: "Authors must present their research accurately and objectively. Underlying data should be represented clearly, and sufficient detail must be provided for replication by others."
      },
      {
        subtitle: "Authorship",
        text: "Only individuals who have made substantial contributions to the research should be listed as authors. All co-authors must have agreed to the final version and submission."
      },
      {
        subtitle: "Plagiarism",
        text: "Plagiarism, where someone assumes another's ideas, words, or other creative expressions as one's own, is a clear violation of scientific ethics. All submissions are thoroughly checked for plagiarism. Any paper which shows obvious signs of plagiarism will be automatically rejected."
      },
      {
        subtitle: "Conflicts of Interest",
        text: "Authors should disclose any financial or other substantive conflicts of interest that could affect the interpretation of their manuscript."
      }
    ]
  },
  {
    title: "Reviewers' Responsibilities",
    content: [
      "Reviewers play an important role by assisting editors in making editorial decisions and supporting authors in enhancing their papers. They evaluate manuscripts based on their alignment with the scope of the proceedings, the significance of the topic and methods used, the originality and scientific importance of the content, the clarity of presentation, and the quality of the scholarly references.",
      "Reviewers are expected to maintain confidentiality regarding manuscripts, offer objective and constructive feedback, highlight any relevant published work that has not been cited, and report any ethical concerns—such as plagiarism or duplicate publication—to the editor.",
      "Reviewers must not have any conflicts of interest related to the research, authors, or funding sources. Reviews should be impartial and free of personal criticism."
    ]
  },
  {
    title: "Peer Review Process",
    items: [
      {
        subtitle: "Double-Blind Peer Review",
        text: "Following the acceptance of a conference abstract, full papers are subjected to a double-blind peer review. In this process, neither the authors nor the reviewers are aware of each other's identities, ensuring an unbiased evaluation."
      },
      {
        subtitle: "Timeline",
        text: "The peer review process is generally completed within one month. Referees who feel unqualified to evaluate a manuscript or unable to complete a review within the requested time frame should promptly notify the Editor."
      },
      {
        subtitle: "Quality Control",
        text: "The Editorial Team ensures that reviews meet reasonable quality standards. If authors raise convincing concerns about the quality or objectivity of a review, the Editor will carefully reassess the review and, if necessary, seek evaluations from additional reviewers."
      }
    ]
  }
];

export default function EthicsPage() {
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
              Ethics & Policy
            </h1>
            <p className="text-xl md:text-2xl text-[var(--gray-light)] max-w-3xl mx-auto">
              Publication ethics and malpractice statement
            </p>
          </motion.div>
        </div>
      </section>

      {/* Downloads */}
      <section className="py-12 md:py-16">
        <div className="max-w-5xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="/future-bme-2026/files/AUTHORSSTATEMENT-FUTURE-BME2024.pdf"
              target="_blank"
              className="px-8 py-4 bg-gradient-to-r from-[var(--purple)] to-[var(--blue-light)] text-white font-bold rounded-xl hover:shadow-lg transition-all text-center"
            >
              📄 Author's Statement (Download)
            </a>
            <a
              href="/future-bme-2026/files/LicenseAgreement-FUTURE-BME2024.pdf"
              target="_blank"
              className="px-8 py-4 bg-gradient-to-r from-[var(--blue)] to-[var(--teal)] text-white font-bold rounded-xl hover:shadow-lg transition-all text-center"
            >
              📄 License Agreement (Download)
            </a>
          </motion.div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4 space-y-16">
          {sections.map((section, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 md:p-12 rounded-3xl bg-[var(--navy)]/40 backdrop-blur-xl border border-white/10"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--purple)] mb-6">
                {section.title}
              </h2>
              
              {section.content && (
                <div className="space-y-4">
                  {section.content.map((paragraph, j) => (
                    <p key={j} className="text-[var(--gray-light)] leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              )}

              {section.items && (
                <div className="space-y-6">
                  {section.items.map((item, j) => (
                    <div key={j} className="pl-4 border-l-4 border-[var(--purple)]/50">
                      <h3 className="text-xl font-bold text-white mb-2">{item.subtitle}</h3>
                      <p className="text-[var(--gray-light)] leading-relaxed">{item.text}</p>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 md:py-32">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center p-10 md:p-16 rounded-3xl bg-gradient-to-br from-[var(--purple)]/20 to-[var(--blue)]/20 backdrop-blur-xl border-2 border-[var(--purple)]/40"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Questions About Ethics?
            </h2>
            <p className="text-lg md:text-xl text-[var(--gray-light)] mb-8">
              For any questions regarding publication ethics, please contact us
            </p>
            <a
              href="mailto:future-bme@uns.ac.rs"
              className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-[var(--purple)] to-[var(--blue-light)] text-white font-bold text-xl rounded-full shadow-lg hover:shadow-[0_0_40px_rgba(105,80,222,0.6)] transition-all duration-300 hover:scale-105"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              future-bme@uns.ac.rs
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
