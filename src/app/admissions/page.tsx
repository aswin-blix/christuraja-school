import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/ui";
import { Field, Fieldset, FormShell } from "@/components/forms/FormShell";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Online admission",
  description: "Apply online to Christuraja Matriculation Higher Secondary School, Marthandam — Pre-KG to Class XII.",
};

const classes = ["Pre-KG", "LKG", "UKG", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII"];
const years = ["2026 – 2027", "2027 – 2028"];

const steps = [
  { title: "Submit the online application", text: "Fill in the form below. The school office receives it the same day." },
  { title: "Visit the school office", text: "Bring the originals of the documents listed on the right. The office will confirm a date and time." },
  { title: "Entrance test (Standard I and above)", text: "Admission to higher classes depends on seat availability and a short entrance test. For Standard XI, Class X marks are considered." },
  { title: "Confirm the seat", text: "Pay the fees within the dates given and collect the uniform and book list." },
];

export default function AdmissionsPage() {
  return (
    <>
      <PageHero
        title="Online application for admission"
        lede="Admissions for 2026–27 are open for Pre-KG to Standard IX and Standard XI. The academic year begins in June."
        crumbs={[{ label: "Admissions" }]}
      />

      <div className="container-x grid gap-14 py-16 lg:grid-cols-[1fr_20rem] lg:py-20">
        <div>
          <ol className="grid gap-4 sm:grid-cols-2">
            {steps.map((s, i) => (
              <li key={s.title} className="rounded-[var(--radius-md)] border border-line p-5">
                <span className="font-display text-2xl text-brand-500">{i + 1}</span>
                <h2 className="mt-2 font-sans font-semibold text-ink-900">{s.title}</h2>
                <p className="mt-1 text-[0.92rem] leading-relaxed text-ink-600">{s.text}</p>
              </li>
            ))}
          </ol>

          <h2 className="mt-14 text-[clamp(1.6rem,3vw,2.2rem)] text-brand-900">Application form</h2>
          <p className="mt-2 text-ink-600">Fields marked * are required.</p>

          <div className="mt-8">
            <FormShell
              formName="Online admission application"
              mailTo={site.email}
              submitLabel="Submit application"
              successTitle="Application received"
              successText="Thank you. The school office will contact you about the next steps. For urgent queries call +91 4651 270556."
            >
              <Fieldset legend="Admission sought">
                <Field label="Academic year" name="academicYear" options={years} required />
                <Field label="Class into which admission is sought" name="classSought" options={classes} required />
              </Fieldset>

              <Fieldset legend="Pupil">
                <Field label="Name of the pupil" name="pupilName" required />
                <Field label="Date of birth" name="dob" type="date" required />
                <Field label="Gender" name="gender" options={["Male", "Female", "Transgender"]} required />
                <Field label="Nationality" name="nationality" placeholder="Indian" required />
                <Field label="State" name="state" options={["Tamil Nadu", "Kerala", "Other"]} required />
                <Field label="Religion" name="religion" options={["Christian", "Hindu", "Muslim", "Other"]} />
                <Field label="EMIS number" name="emis" hint="If the pupil has studied in Tamil Nadu before." />
              </Fieldset>

              <Fieldset legend="Previous school">
                <Field label="Class last studied" name="classLast" options={["None (fresh admission)", ...classes]} required />
                <Field label="Name of school last attended" name="lastSchool" />
              </Fieldset>

              <Fieldset legend="Parents">
                <Field label="Name of the father / guardian" name="fatherName" required />
                <Field label="Occupation of the father" name="fatherOccupation" />
                <Field label="Name of the mother" name="motherName" required />
                <Field label="Occupation of the mother" name="motherOccupation" />
                <Field label="Phone number" name="phone" type="tel" required />
                <Field label="Email" name="email" type="email" />
              </Fieldset>

              <Fieldset legend="Address">
                <div className="sm:col-span-2">
                  <Field label="Full address" name="address" textarea required />
                </div>
              </Fieldset>

              <div className="space-y-3 text-sm text-ink-600">
                <label className="flex gap-3">
                  <input type="checkbox" name="declaration1" required className="mt-1 h-4 w-4 accent-brand-600" />
                  I declare that the statements above are correct and that the pupil has not attended any school other than those mentioned.
                </label>
                <label className="flex gap-3">
                  <input type="checkbox" name="declaration2" required className="mt-1 h-4 w-4 accent-brand-600" />
                  I declare that I will not ask for a change in the date of birth in future.
                </label>
              </div>
            </FormShell>
          </div>
        </div>

        <aside className="space-y-6 lg:sticky lg:top-32 lg:self-start">
          <div className="rounded-[var(--radius-md)] border border-line p-6">
            <h2 className="font-sans font-semibold text-brand-900">Documents to bring</h2>
            <ul className="mt-3 space-y-2 text-[0.92rem] text-ink-600">
              {[
                "Birth certificate",
                "Transfer certificate (Std I and above)",
                "Previous year's progress report",
                "Aadhaar card of the pupil",
                "EMIS number, if any",
                "Community certificate, if applicable",
                "Four passport-size photographs",
              ].map((d) => (
                <li key={d} className="flex gap-2.5">
                  <span aria-hidden="true" className="mt-[0.55em] h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
                  {d}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-[var(--radius-md)] bg-brand-900 p-6 text-white">
            <h2 className="font-sans font-semibold">Need help?</h2>
            <p className="mt-2 text-sm text-white/75">The school office is open on working days.</p>
            <a href={site.phoneHref} className="mt-3 block font-display text-xl text-brand-100">{site.phone}</a>
            <a href={`mailto:${site.email}`} className="mt-1 block break-all text-sm text-white/85 hover:text-white">{site.email}</a>
            <Link href="/academics/admission-policy" className="mt-4 inline-block text-sm font-semibold text-brand-100 hover:text-white">
              Read the admission policy
            </Link>
          </div>
        </aside>
      </div>
    </>
  );
}
