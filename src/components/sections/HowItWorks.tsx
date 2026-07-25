import Container from "../common/Container";
import {
  BarChart3,
  Monitor,
  Presentation,
} from "lucide-react";

const steps = [
  {
    number: "1",
    title: "Skill Gap Analysis",
    description:
      "Assess team skill gaps and developmental needs.",
    icon: BarChart3,
  },
  {
    number: "2",
    title: "Customized Training Plan",
    description:
      "Create a tailored roadmap addressing organizational goals.",
    icon: Monitor,
  },
  {
    number: "3",
    title: "Flexible Program Delivery",
    description:
      "Deliver adaptable programs aligned with industry and organizational needs.",
    icon: Presentation,
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="py-24 bg-white"
    >
      <Container>
        {/* Heading */}

        <div className="text-center">
          <h2 className="text-5xl font-bold">
            How We{" "}
            <span className="text-[#2563EB]">
              Deliver Results
            </span>{" "}
            That Matter?
          </h2>

          <p className="mt-4 text-xl text-gray-700">
            A Structured Three-Step Approach to{" "}
            <span className="text-[#2563EB]">
              Skill Development
            </span>
          </p>
        </div>

        {/* Cards */}

        <div className="mt-20 grid gap-8 lg:grid-cols-3">
          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <div
                key={step.number}
                className="relative rounded-2xl border border-blue-200 bg-[#EEF5FF] p-8 shadow-sm transition hover:shadow-lg"
              >
                {/* Number */}

                <div className="absolute left-4 top-4 flex h-8 w-8 items-center justify-center rounded-full border-2 border-blue-500 bg-white text-sm font-bold text-blue-600">
                  {step.number}
                </div>

                {/* Icon */}

                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#2563EB] shadow-lg">
                  <Icon
                    size={36}
                    className="text-white"
                  />
                </div>

                {/* Title */}

                <h3 className="mt-8 text-center text-3xl font-bold">
                  {step.title}
                </h3>

                {/* Description */}

                <p className="mt-4 text-center text-lg leading-8 text-gray-600">
                  {step.description}
                </p>

                {/* Side Blue Lines */}

                <div className="absolute left-0 top-10 h-32 w-2 rounded-r bg-[#2563EB]" />

                <div className="absolute right-0 top-10 h-32 w-2 rounded-l bg-[#2563EB]" />
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}