import Navbar from "../components/Navbar";

export default function NowPage() {
  return (
    <div className="relative">
      <Navbar />
      <main className="min-h-screen pt-24 pb-20">
        <div className="px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-3xl">
              <h1 className="text-3xl sm:text-4xl font-mono text-primary mb-8">
                /now
              </h1>

              <div className="space-y-8 font-mono">
                <section>
                  <h2 className="text-xl text-primary mb-4">
                    What I'm doing now
                  </h2>
                  <p className="text-secondary">
                    Last updated:{" "}
                    {new Date().toLocaleDateString("en-US", {
                      month: "long",
                      year: "numeric",
                    })}
                  </p>
                </section>

                <section>
                  <h3 className="text-lg text-primary mb-2">
                    🎓 Education
                  </h3>
                  <p>
                    After graduating from SAIT with a diploma
                    in Information Technology specializing in
                    Software Development, I directly
                    transferred to Mount Royal University to
                    finish a degree in Bachelor of Computer
                    Information Systems.
                  </p>
                </section>

                <section>
                  <h3 className="text-lg text-primary mb-2">
                    💻 Work
                  </h3>
                  <p>
                    As of January 2025, my focus aside from my
                    studies has been towards side projects and
                    applying for internships for Summer 2025.
                    I've also recently joined the MRUHacks
                    volunteer committee as their marketing
                    lead, preparing for the 3rd annual
                    hackathon for Fall 2025.
                  </p>
                </section>

                <section>
                  <h3 className="text-lg text-primary mb-2">
                    🌱 Growth
                  </h3>
                  <p>
                    Outside of this, I've also been enjoying:
                  </p>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>Learning to DJ 🎧</li>
                    <li>Reading more 📖</li>
                    <li>Consistent bouldering! 🧗</li>
                  </ul>
                </section>

                {/* <section>
                  <h3 className="text-lg text-primary mb-2">
                    🎯 Current Focus
                  </h3>
                  <p></p>
                </section> */}

                <section className="text-muted">
                  <p>
                    This is a now page, inspired by{" "}
                    <a
                      href="https://nownownow.com/about"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary underline"
                    >
                      nownownow.com
                    </a>
                  </p>
                </section>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
