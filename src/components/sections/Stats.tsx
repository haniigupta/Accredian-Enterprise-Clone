import Container from "../common/Container";

const stats = [
  {
    value: "10K+",
    title: "Professionals Trained For Exceptional Career Success",
  },
  {
    value: "200+",
    title: "Sessions Delivered With Unmatched Learning Excellence",
  },
  {
    value: "5K+",
    title: "Active Learners Engaged In Dynamic Courses",
  },
];

export default function Stats() {
  return (
    <section id="stats" className="py-20">
      <Container>
        <div className="text-center">
          <h2 className="text-5xl font-bold">
            Our{" "}
            <span className="text-blue-600">
              Track Record
            </span>
          </h2>

          <p className="mt-3 text-xl text-gray-700">
            The Numbers Behind{" "}
            <span className="text-blue-600">
              Our Success
            </span>
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {stats.map((item, index) => (
            <div
              key={item.value}
              className={`text-center ${
                index !== 2 ? "md:border-r" : ""
              }`}
            >
              <div className="mx-auto inline-flex rounded-full bg-blue-100 px-8 py-3">
                <span className="text-4xl font-bold text-blue-600">
                  {item.value}
                </span>
              </div>

              <p className="mx-auto mt-6 max-w-xs text-xl leading-relaxed">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}