import React from 'react';
import { SquareCheckBig, BadgePoundSterling } from "lucide-react";
import WGS_logo from "../img/wonford_green_surgery-logo.webp";
import WGS_case from "../img/case-study-wonford-green.jpg";

/**
 * CaseStudyReview
 * - Two-column layout on desktop, stacked on mobile
 * - Quote + attribution + description text
 * - Image with metric callouts
 *
 * Replace placeholder copy + image src with your real content.
 */

export default function CaseStudyReview({
    title = "Case study",
    orgName = "Wonford Green Surgery",
    quote = "\"3 reasons for choosing Solar Service from Green Earth Solutions: Trust, positive environmental impact, and guaranteed positive financial impact\"",
    quoteAuthor = "Julia Knott",
    quoteRole = "Practice Manager",
    description = [
        "Wonford Green Surgery in Exeter, Devon, has taken a significant step towards reducing energy costs and carbon emissions by installing solar panels and battery storage.The project demonstrates how public sector and community healthcare buildings can benefit from clean energy without taking on additional financial or operational risk.",
       "The innovative Solar Service model was key to the project, funding the installation, removing performance risk and eliminating the burden of maintenance. This allows the surgery to enjoy years of guaranteed, hassle-free solar benefits, while staff remain focused on what matters most – patient care. As the surgery’s Practice Manager said, \"big positive is the peace of mind from not having to worry about ongoing maintenance - it's like having a caretaker manage everything about the installation.\"",
    ],
    imageSrc = WGS_case,
    imageAlt = "Solar panels installed on the roof of Wonford Green Surgery in Exeter, Devon.",
    metrics = [
        { label: "System size", value: "14kW panels + 20kWh battery storage", icon: <SquareCheckBig /> },
        { label: "Impact", value: ">£100,000 savings in electricity costs", icon: <BadgePoundSterling /> },
    ],
    className = "case-study-review",
}) {
    return (
        <section className={`w-full py-12 ${className}`}>
          <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="section-title flex items-center gap-4 justify-center text-center">
              <h2>
                {title}: <span className="font-light">{orgName}</span>
              </h2>
              <img
                src={WGS_logo}
                alt="Wonford Green Surgery Logo"
                className="object-contain"
                style={{ height: "2.5em" }}
              />

            </div>
    
            {/* Content */}
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
              {/* Left column */}
              <div className="lg:col-span-7">
                {/* Quote card */}
                <figure className="rounded-2xl bg-gray-100 p-6">
                  <blockquote className="text-xl italic leading-snug text-gray-900">
                    {quote}
                  </blockquote>
    
                  <figcaption className="mt-4 text-sm text-gray-700">
                    <div className="font-semibold text-gray-900">{quoteAuthor}</div>
                    <div>
                      {quoteRole}
                      {quoteRole && " • "}
                      {orgName}
                    </div>
                  </figcaption>
                </figure>
    
                {/* Body text */}
                <div className="mt-6 space-y-4 text-base leading-relaxed text-gray-800">
                  {Array.isArray(description)
                    ? description.map((p, idx) => <p key={idx}>{p}</p>)
                    : <p>{description}</p>}
                </div>
              </div>
    
              {/* Right column */}
              <div className="lg:col-span-5">
                <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
                {/* Metrics */}
                <div className="border-b border-gray-200 p-4">
                  <ul className="space-y-3">
                    {metrics.map((m, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-100 text-xl">
                          {m.icon} {/* Render the icon directly as a React component */}
                        </div>
                        <div className="min-w-0">
                          <div className="text-large font-semibold text-gray-900">
                            {m.label}:
                          </div>
                          <div className="text-large text-gray-700">{m.value}</div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
    
                  {/* Image */}
                  <div className="relative">
                    <img
                      src={imageSrc}
                      alt={imageAlt}
                      className="h-auto w-full object-cover"
                      loading="lazy"
                    />
                    {/* Optional subtle overlay for readability if you later add text on image */}
                    {/* <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" /> */}
                  </div>
                </div>
    
                {/* Optional footnote / CTA area */}
                {/* <div className="mt-4 text-sm text-gray-600">
                  Optional line like: “Want similar results? Get a quote.”
                </div> */}
              </div>
            </div>
          </div>
        </section>
      );
}
