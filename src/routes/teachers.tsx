import { createFileRoute } from "@tanstack/react-router";
import { Award, Briefcase } from "lucide-react";
import { PageHeader, PlaceholderNote, SectionHeading } from "@/components/site/Section";
import { CtaBand } from "@/components/site/CtaBand";
import { TEACHERS } from "@/content/teachers";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/teachers")({
  head: () =>
    pageHead({
      title: "Our Teachers — English Camp Pacet, Mojokerto",
      description:
        "Meet the friendly English teachers at English Camp Pacet who help learners speak English with confidence.",
      path: "/teachers",
    }),
  component: TeachersPage,
});

function TeachersPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our teachers"
        title={
          <>
            The people behind <span className="marker">every lesson</span>
          </>
        }
        description="Patient, encouraging teachers who guide each learner step by step — and make English something to enjoy."
      >
        <PlaceholderNote>Teacher profiles are placeholders until verified</PlaceholderNote>
      </PageHeader>

      <section className="container-page section-y">
        <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {TEACHERS.map((t, i) => (
            <li key={i} className="reveal">
              <article className="group flex h-full flex-col overflow-hidden rounded-4xl border border-border bg-card shadow-soft">
                <div className="relative overflow-hidden bg-sky">
                  <img
                    src={t.image}
                    alt={`Portrait of ${t.name}, ${t.role}`}
                    loading="lazy"
                    width={800}
                    height={960}
                    className="aspect-[5/6] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute bottom-4 left-4 rounded-full bg-accent px-3 py-1 text-xs font-bold text-accent-foreground">
                    {t.role}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <h2 className="text-2xl font-medium text-primary">{t.name}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{t.intro}</p>
                  <dl className="mt-6 space-y-3 border-t border-border pt-5 text-sm">
                    <div className="flex gap-3">
                      <Award className="mt-0.5 size-4 shrink-0 text-primary" />
                      <div>
                        <dt className="font-semibold text-primary">Qualifications</dt>
                        <dd className="text-muted-foreground">{t.qualifications}</dd>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <Briefcase className="mt-0.5 size-4 shrink-0 text-primary" />
                      <div>
                        <dt className="font-semibold text-primary">Experience</dt>
                        <dd className="text-muted-foreground">{t.experience}</dd>
                      </div>
                    </div>
                  </dl>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-sky">
        <div className="container-page section-y">
          <SectionHeading
            eyebrow="How our teachers work"
            title="Encouraging, patient and focused on speaking"
            description="Our teachers create friendly classrooms where students feel safe to try, make mistakes and improve. Lessons balance speaking, listening, reading and writing — always with plenty of chances to talk."
            align="center"
          />
        </div>
      </section>

      <CtaBand title="Want to meet our team?" body="Contact us to visit English Camp or ask about our classes." />
    </>
  );
}
