import Container from "../common/Container";
import { domainExpertise } from "../../constants/domainExpertise";

export default function DomainExpertise() {
    return (
        <section className="py-24">
            <Container>
                <div className="text-center">

                    <h2 className="text-5xl font-bold">
                        Our{" "}
                        <span className="text-[#2563EB]">
                            Domain Expertise
                        </span>
                    </h2>

                    <p className="mt-4 text-xl text-gray-700">
                        <span className="text-[#2563EB]">
                            Specialized Programs
                        </span>{" "}
                        Designed to Fuel Innovation
                    </p>

                </div>

                <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-3">
                    {domainExpertise.slice(0, 6).map((item) => {
                        const Icon = item.icon;

                        return (
                            <div
                                key={item.title}
                                className="flex h-36 flex-col items-center justify-center rounded-xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                            >
                                <Icon size={46} className="mb-4 text-[#2563EB]" />

                                <h3 className="text-xl font-semibold text-center">
                                    {item.title}
                                </h3>
                            </div>
                        );
                    })}

                    {/* Empty left column */}
                    <div className="hidden md:block"></div>

                    {/* Middle card */}
                    <div className="flex h-36 flex-col items-center justify-center rounded-xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                        {(() => {
                            const Icon = domainExpertise[6].icon;

                            return (
                                <>
                                    <Icon size={46} className="mb-4 text-[#2563EB]" />
                                    <h3 className="text-xl font-semibold text-center">
                                        {domainExpertise[6].title}
                                    </h3>
                                </>
                            );
                        })()}
                    </div>

                    {/* Empty right column */}
                    <div className="hidden md:block"></div>
                </div>
            </Container>
        </section>
    );
}