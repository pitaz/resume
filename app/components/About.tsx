export default function About() {
  return (
    <section
      id="about"
      className="py-24 md:py-32 bg-white dark:bg-black relative"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              About <span className="gradient-text">Me</span>
            </h2>
            <div className="space-y-4 text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              <p>
                I'm a passionate developer and designer with a love for creating
                digital experiences that are both beautiful and functional. With
                expertise in modern web technologies, I bring ideas to life
                through clean code and thoughtful design.
              </p>
              <p>
                My approach combines technical excellence with creative
                problem-solving, ensuring that every project not only looks
                great but also delivers exceptional user experiences.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies,
                contributing to open-source projects, or sharing knowledge with
                the developer community.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 p-8 flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="w-32 h-32 mx-auto rounded-full overflow-hidden">
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/portfolio-17056.appspot.com/o/TE35HHN01-U03B0MZMTRS-43204f92b3ab-512.png?alt=media&token=2bac3c56-7b76-46d6-87ac-3e169b27998d"
                    alt="Peter Odekwo"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-gray-600 dark:text-gray-400">Peter Odekwo</p>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-purple-200/50 dark:bg-purple-800/30 rounded-full blur-xl -z-10"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-pink-200/50 dark:bg-pink-800/30 rounded-full blur-xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
