import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen">
      <header className="relative">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/20 via-transparent to-primary-glow/30 opacity-30" aria-hidden="true" />
        <div className="container mx-auto px-6 py-16">
          <div className="flex flex-col items-center text-center gap-6 animate-fade-in">
            <div>
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-primary">
                Aakash TS — AI & Backend Developer Resume
              </h1>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                Passionate about Artificial Intelligence, backend development and data management. I enjoy building efficient systems and learning new technologies. Currently pursuing BCA at SRMIST.
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <a href="mailto:tsaakash04@gmail.com" aria-label="Email Aakash">
                <Button variant="default" className="transition-transform duration-200 hover:scale-105"><Mail /> Email</Button>
              </a>
              <a href="tel:+918778545934" aria-label="Call Aakash">
                <Button variant="outline" className="transition-transform duration-200 hover:scale-105"><Phone /> +91 8778545934</Button>
              </a>
              <a href="https://github.com/Crazy-Ledend" target="_blank" rel="noreferrer" aria-label="GitHub profile">
                <Button variant="secondary" className="transition-transform duration-200 hover:scale-105"><Github /> GitHub</Button>
              </a>
              <a href="https://www.linkedin.com/in/aakash-ts-1ab1221bb/" target="_blank" rel="noreferrer" aria-label="LinkedIn profile">
                <Button variant="secondary" className="transition-transform duration-200 hover:scale-105"><Linkedin /> LinkedIn</Button>
              </a>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground"><MapPin className="h-4 w-4" /> Chennai, India — 600061</div>
          </div>
        </div>
      </header>

      <main>
        <section aria-labelledby="objective" className="py-10">
          <div className="container mx-auto px-6">
            <h2 id="objective" className="text-2xl font-semibold mb-4">Career Objective</h2>
            <div className="bg-card border rounded-lg p-6">
              <p className="text-muted-foreground">
                Passionate about Artificial Intelligence, backend development, and data management. I enjoy building efficient systems and learning new technologies.
              </p>
            </div>
          </div>
        </section>

        <section aria-labelledby="skills" className="py-10">
          <div className="container mx-auto px-6">
            <h2 id="skills" className="text-2xl font-semibold mb-4">Hands-On Experience</h2>
            <div className="bg-card border rounded-lg p-6">
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">AI Integration</Badge>
                <Badge variant="secondary">Python</Badge>
                <Badge variant="secondary">Java</Badge>
                <Badge variant="secondary">PHP</Badge>
                <Badge variant="secondary">C</Badge>
                <Badge variant="secondary">C++</Badge>
                <Badge variant="secondary">Discord.py</Badge>
                <Badge variant="secondary">REST APIs</Badge>
                <Badge variant="secondary">MySQL</Badge>
                <Badge variant="secondary">SQLite</Badge>
              </div>
            </div>
          </div>
        </section>

        <section aria-labelledby="projects" className="py-10">
          <div className="container mx-auto px-6">
            <h2 id="projects" className="text-2xl font-semibold mb-6">Projects</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <article className="group bg-card border rounded-lg p-6 transition-transform duration-200 hover:-translate-y-1 hover:shadow-xl">
                <h3 className="text-lg font-semibold">Hazelnut — Discord Economy bot</h3>
                <p className="mt-2 text-sm text-muted-foreground">Economy system for Discord with robust command architecture.</p>
                <a className="mt-4 inline-flex text-primary story-link" href="https://github.com/Crazy-Ledend/Hazelnut" target="_blank" rel="noreferrer">View on GitHub</a>
              </article>
              <article className="group bg-card border rounded-lg p-6 transition-transform duration-200 hover:-translate-y-1 hover:shadow-xl">
                <h3 className="text-lg font-semibold">Muffins — Discord AI chatbot</h3>
                <p className="mt-2 text-sm text-muted-foreground">Conversational AI assistant for Discord with integrations.</p>
                <a className="mt-4 inline-flex text-primary story-link" href="https://github.com/Crazy-Ledend/MuffinsAI" target="_blank" rel="noreferrer">View on GitHub</a>
              </article>
              <article className="group bg-card border rounded-lg p-6 transition-transform duration-200 hover:-translate-y-1 hover:shadow-xl">
                <h3 className="text-lg font-semibold">HealthBar Component — Game Interface</h3>
                <p className="mt-2 text-sm text-muted-foreground">Private UI component. Appreciated and endorsed by Oyindoubra Akposeye (The CTO LLC, dev of MewBot).</p>
                <a className="mt-4 inline-flex text-primary story-link" href="https://github.com/Crazy-Ledend/HealthBar" target="_blank" rel="noreferrer">View on GitHub</a>
              </article>
              <article className="group bg-card border rounded-lg p-6 transition-transform duration-200 hover:-translate-y-1 hover:shadow-xl">
                <h3 className="text-lg font-semibold">MewAucs — Discord Auction Bot</h3>
                <p className="mt-2 text-sm text-muted-foreground">Auction system tailored for Discord communities.</p>
                <a className="mt-4 inline-flex text-primary story-link" href="https://github.com/Crazy-Ledend/MewAucs" target="_blank" rel="noreferrer">View on GitHub</a>
              </article>
            </div>
          </div>
        </section>

        <section aria-labelledby="experience" className="py-10">
          <div className="container mx-auto px-6">
            <h2 id="experience" className="text-2xl font-semibold mb-4">Experience</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <article className="bg-card border rounded-lg p-6">
                <h3 className="font-semibold">Intern — Jeysun, Chennai</h3>
                <p className="text-sm text-muted-foreground mt-2">Contributed to backend modules and API integrations.</p>
              </article>
              <article className="bg-card border rounded-lg p-6">
                <h3 className="font-semibold">Intern — SinthanAI Academy</h3>
                <p className="text-sm text-muted-foreground mt-2">Hands-on work with AI integrations and data workflows.</p>
              </article>
            </div>
          </div>
        </section>

        <section aria-labelledby="achievements" className="py-10">
          <div className="container mx-auto px-6">
            <h2 id="achievements" className="text-2xl font-semibold mb-4">Achievements</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <article className="bg-card border rounded-lg p-6">
                <h3 className="font-semibold">Winner — Debugging</h3>
                <p className="text-sm text-muted-foreground">SRM University · Mar 2025</p>
              </article>
              <article className="bg-card border rounded-lg p-6">
                <h3 className="font-semibold">Winner — Technical Hackathon</h3>
                <p className="text-sm text-muted-foreground">SRM University, SGD · Dec 2024</p>
              </article>
            </div>
          </div>
        </section>

        <section aria-labelledby="education" className="py-10">
          <div className="container mx-auto px-6">
            <h2 id="education" className="text-2xl font-semibold mb-4">Education</h2>
            <div className="bg-card border rounded-lg p-6">
              <h3 className="font-semibold">BCA — Computer Applications (Pursuing)</h3>
              <p className="text-sm text-muted-foreground mt-2">SRM Institute of Science and Technology, Kattankulathur</p>
            </div>
          </div>
        </section>

        <section aria-labelledby="languages" className="py-10">
          <div className="container mx-auto px-6">
            <h2 id="languages" className="text-2xl font-semibold mb-4">Languages</h2>
            <div className="bg-card border rounded-lg p-6">
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Thamizh (native)</Badge>
                <Badge variant="secondary">English (fluent)</Badge>
                <Badge variant="secondary">Hindi (read, write)</Badge>
              </div>
            </div>
          </div>
        </section>

        <section aria-labelledby="certs" className="py-10">
          <div className="container mx-auto px-6">
            <h2 id="certs" className="text-2xl font-semibold mb-4">Certifications</h2>
            <div className="bg-card border rounded-lg p-6">
              <h3 className="font-semibold">Database Management Systems — NPTEL Swayam</h3>
              <p className="text-sm text-muted-foreground mt-2">Aug 2024</p>
              <a className="mt-3 inline-flex text-primary hover:underline" href="https://www.linkedin.com/in/aakash-ts-1ab1221bb/" target="_blank" rel="noreferrer">View credential</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-10 border-t">
        <div className="container mx-auto px-6 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Aakash TS. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Index;
