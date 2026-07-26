import Image from "next/image";
import Container from "../common/Container";
import { courseSegmentation } from "../../constants/courseSegmentation";

export default function CourseSegmentation() {
  return (
    <section className="pb-24">
      <Container>

        <div className="text-center">

          <h2 className="text-5xl font-bold">
            Tailored{" "}
            <span className="text-[#2563EB]">
              Course Segmentation
            </span>
          </h2>

          <p className="mt-4 text-lg text-gray-700">
            Explore{" "}
            <span className="text-[#2563EB]">
              Custom-fit Courses
            </span>{" "}
            Designed to Address Every Professional Focus
          </p>

        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-4">

          {courseSegmentation.map((course) => (
            <div
              key={course.title}
              className="overflow-hidden rounded-xl border bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <Image
                src={course.image}
                alt={course.title}
                width={500}
                height={280}
                className="h-48 w-full object-cover"
              />

              <div className="p-5 text-center">

                <h3 className="text-2xl font-semibold text-[#2563EB]">
                  {course.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-600">
                  {course.subtitle}
                </p>

              </div>
            </div>
          ))}

        </div>

      </Container>
    </section>
  );
}