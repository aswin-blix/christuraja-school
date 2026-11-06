import type { Metadata } from "next";
import { PageHero, Placeholder } from "@/components/ui";
import { Field, Fieldset, FormShell } from "@/components/forms/FormShell";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Alumni association",
  description: "Christuraja Alumni Association — register as a member and stay connected with your school.",
};

/** Batches from the first (1971) to the next passing-out year. Bump LAST_BATCH each year. */
const LAST_BATCH = 2027;
const years = Array.from({ length: LAST_BATCH - 1971 + 1 }, (_, i) => String(1971 + i)).reverse();

export default function AlumniPage() {
  return (
    <>
      <PageHero
        title="Christuraja Alumni Association"
        lede="Fifty-five batches of Christurajans — civil servants, doctors, scientists, journalists, engineers, teachers and business people across the globe."
        crumbs={[{ label: "Alumni" }]}
      />

      <section className="container-x grid items-center gap-12 py-16 lg:grid-cols-2 lg:py-20">
        <div>
          <span className="motto-rule" aria-hidden="true" />
          <h2 className="mt-4 text-[clamp(1.6rem,3vw,2.2rem)] text-brand">Highlights from the first reunion</h2>
          <div className="prose-school mt-5">
            <p>
              The association brought former students back to the campus at Christurajapuram for its first reunion —
              a day of meeting old teachers and classmates, walking through the new blocks and remembering the school
              anthem sung in the assembly years ago.
            </p>
            <p>
              Members support the school through scholarships, career talks for senior students and mentoring. Register
              below to hear about the next reunion and batch meet-ups.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <Placeholder label="First reunion" ratio="aspect-[4/5]" className="rounded-[var(--radius-md)]" />
          <Placeholder label="Batch of 1995" ratio="aspect-[4/5]" className="mt-8 rounded-[var(--radius-md)]" />
        </div>
      </section>

      <section className="bg-paper-tint py-16 lg:py-20">
        <div className="container-x max-w-4xl">
          <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] text-brand">New member registration</h2>
          <p className="mt-2 text-ink-600">Open to all former students who completed Class X, XI or XII at Christuraja.</p>
          <div className="mt-8">
            <FormShell
              formName="Alumni registration"
              mailTo={site.email}
              submitLabel="Register"
              successTitle="Welcome back"
              successText="Your registration has been received. The association will be in touch before the next reunion."
            >
              <Fieldset legend="About you">
                <Field label="Full name" name="name" required />
                <Field label="Gender" name="gender" options={["Male", "Female", "Transgender"]} />
                <Field label="Year of passing out" name="passingYear" options={years} required />
                <Field label="Class" name="classCompleted" options={["10th", "11th", "12th"]} required />
                <Field label="Mobile number" name="mobile" type="tel" required />
                <Field label="Email" name="email" type="email" required />
              </Fieldset>
              <Fieldset legend="Present status">
                <Field label="Employment type" name="employmentType" options={["Salaried", "Entrepreneur", "Home maker", "Business", "Student", "Yet to be placed"]} />
                <Field label="Employer / institution" name="employer" />
                <Field label="Designation" name="designation" />
                <Field label="Work location (city, country)" name="workLocation" />
              </Fieldset>
              <Fieldset legend="Residence">
                <Field label="City / district" name="city" required />
                <Field label="State" name="state" required />
                <Field label="Country" name="country" placeholder="India" required />
              </Fieldset>
            </FormShell>
          </div>
        </div>
      </section>
    </>
  );
}
