import type { Metadata } from "next";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { PageHero } from "@/components/ui";
import { Field, FormShell } from "@/components/forms/FormShell";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact us",
  description: "Address, phone, email and directions to Christuraja MHSS, Christurajapuram, Marthandam.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact us"
        lede="The school office is open on all working days. Walk in, call or write — we reply within a working day."
        crumbs={[{ label: "Contact" }]}
      />

      <div className="container-x grid gap-14 py-16 lg:grid-cols-[2fr_3fr] lg:py-20">
        <div className="space-y-8">
          <ul className="space-y-6">
            <li className="flex gap-4">
              <MapPin className="mt-1 h-6 w-6 shrink-0 text-brand-600" aria-hidden="true" />
              <div>
                <h2 className="font-sans font-semibold text-ink-900">Address</h2>
                <p className="mt-1 leading-relaxed text-ink-600">
                  {site.name}
                  <br />
                  {site.address.line1}
                  <br />
                  {site.address.line2}
                  <br />
                  {site.address.line3}
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <Phone className="mt-1 h-6 w-6 shrink-0 text-brand-600" aria-hidden="true" />
              <div>
                <h2 className="font-sans font-semibold text-ink-900">Phone</h2>
                <a href={site.phoneHref} className="mt-1 block text-ink-600 hover:text-brand-700">{site.phone}</a>
              </div>
            </li>
            <li className="flex gap-4">
              <Mail className="mt-1 h-6 w-6 shrink-0 text-brand-600" aria-hidden="true" />
              <div>
                <h2 className="font-sans font-semibold text-ink-900">Email</h2>
                <a href={`mailto:${site.email}`} className="mt-1 block break-all text-ink-600 hover:text-brand-700">{site.email}</a>
              </div>
            </li>
            <li className="flex gap-4">
              <Clock className="mt-1 h-6 w-6 shrink-0 text-brand-600" aria-hidden="true" />
              <div>
                <h2 className="font-sans font-semibold text-ink-900">School hours</h2>
                <p className="mt-1 text-ink-600">
                  Monday – Friday: {site.timings.weekdays}
                  <br />
                  Saturday: {site.timings.saturday}
                </p>
              </div>
            </li>
          </ul>

          <div className="overflow-hidden rounded-[var(--radius-md)] border border-line">
            <iframe
              title="Map showing Christuraja MHSS, Marthandam"
              src={site.mapEmbed}
              className="h-72 w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        <div className="rounded-[var(--radius-lg)] border border-line p-6 sm:p-8">
          <h2 className="text-2xl text-brand-900">Send a message</h2>
          <p className="mt-2 text-ink-600">For admissions, fees, transport routes or anything else.</p>
          <div className="mt-6">
            <FormShell
              formName="Website enquiry"
              mailTo={site.email}
              submitLabel="Send message"
              successTitle="Message sent"
              successText="Thank you for writing to us. The school office will reply within a working day."
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Name" name="name" required />
                <Field label="Mobile number" name="mobile" type="tel" required />
                <div className="sm:col-span-2">
                  <Field label="Email" name="email" type="email" />
                </div>
                <div className="sm:col-span-2">
                  <Field label="Subject" name="subject" required />
                </div>
                <div className="sm:col-span-2">
                  <Field label="Message" name="message" textarea required />
                </div>
              </div>
            </FormShell>
          </div>
        </div>
      </div>
    </>
  );
}
