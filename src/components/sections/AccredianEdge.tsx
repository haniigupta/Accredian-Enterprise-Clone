import Container from "../common/Container";
import {
  FaLightbulb,
  FaComments,
  FaCogs,
  FaGlobe,
  FaExpandArrowsAlt,
  FaBullseye,
  FaBoxOpen,
  FaLaptopCode,
} from "react-icons/fa";

const features = [
  {
    title: "Tailored Solutions",
    description:
      "Programs customized to your organization's goals and challenges.",
    icon: FaLightbulb,
    position: "top",
  },
  {
    title: "Expert Guidance",
    description:
      "Learn from industry leaders with real-world success.",
    icon: FaComments,
    position: "bottom",
  },
  {
    title: "Innovative Framework",
    description:
      "Proprietary methods for impactful, application-driven results.",
    icon: FaCogs,
    position: "top",
  },
  {
    title: "Advanced Technology",
    description:
      "State-of-the-art LMS for seamless learning experiences.",
    icon: FaLaptopCode,
    position: "bottom",
  },
  {
    title: "Diverse Offerings",
    description:
      "Courses across industries, skill levels and emerging fields.",
    icon: FaExpandArrowsAlt,
    position: "top",
  },
  {
    title: "Proven Impact",
    description:
      "Trusted by leading organizations for measurable ROI.",
    icon: FaBullseye,
    position: "bottom",
  },
  {
    title: "Flexible Delivery",
    description:
      "Online and offline options tailored to your needs.",
    icon: FaBoxOpen,
    position: "top",
  },
];

export default function AccredianEdge() {
  return (
    <section
      id="edge"
      className="py-24"
    >
      <Container>

        <div className="text-center">
          <h2 className="text-5xl font-bold">
            The{" "}
            <span className="text-blue-600">
              Accredian Edge
            </span>
          </h2>

          <p className="mt-4 text-xl">
            Key Aspects of{" "}
            <span className="text-blue-600">
              Our Strategic Training
            </span>
          </p>
        </div>

        <div className="mt-20 grid gap-10 lg:grid-cols-4">

          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="flex flex-col items-center text-center"
              >
                <div className="flex h-28 w-28 items-center justify-center rounded-full border-4 border-blue-600 bg-white shadow-xl">

                  <Icon
                    className="text-blue-600"
                    size={42}
                  />

                </div>

                <h3 className="mt-6 text-2xl font-bold">
                  {feature.title}
                </h3>

                <p className="mt-3 text-gray-600">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

      </Container>
    </section>
  );
}