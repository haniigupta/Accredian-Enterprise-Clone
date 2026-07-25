import Container from "../common/Container";
import { Lightbulb, Cog, Wrench } from "lucide-react";

const steps = [
    {
        title: "Concept",
        description:
            "Foundational knowledge for deep subject understanding.",
        icon: Lightbulb,
    },
    {
        title: "Application",
        description:
            "Practical implementation through real-world scenarios.",
        icon: Cog,
    },
    {
        title: "Tools",
        description:
            "Resources and techniques for effective skill mastery.",
        icon: Wrench,
    },
];

export default function CAT() {
    return (
        <section
            id="cat"
            className="bg-[#F8FBFF] py-24"
        >
            <Container>
                <div className="text-center">
                    <h2 className="text-5xl font-bold">
                        The{" "}
                        <span className="text-[#2563EB]">
                            CAT Framework
                        </span>
                    </h2>

                    <p className="mt-4 text-xl">
                        Our Proven Approach to{" "}
                        <span className="text-[#2563EB]">
                            Learning Excellence
                        </span>
                    </p>
                </div>

                <div className="relative mt-20">

                    {/* Connecting Line */}
                    <div className="absolute left-0 top-28 hidden h-1 w-full bg-blue-200 lg:block" />

                    <div className="grid gap-20 lg:grid-cols-3">
                        {steps.map((step) => {
                            const Icon = step.icon;

                            return (
                                <div
                                    key={step.title}
                                    className="relative flex flex-col items-center text-center"
                                >
                                    <div className="z-10 flex h-[320px] w-[320px] items-center justify-center rounded-full border-[6px] border-[#2B7FD3] bg-white shadow-lg">

                                        <div className="flex flex-col items-center px-10 text-center">

                                            <Icon
                                                size={46}
                                                className="mb-5 text-[#2563EB]"
                                            />

                                            <h3 className="text-[32px] font-bold leading-tight">
                                                {step.title}
                                            </h3>

                                            <p className="mt-5 text-[20px] leading-8 text-gray-700">
                                                {step.description}
                                            </p>

                                        </div>

                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

            </Container>
        </section>
    );
}