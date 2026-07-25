import Image from "next/image";
import Container from "../common/Container";

<div className="mt-20 grid grid-cols-2 gap-y-14 justify-items-center md:grid-cols-4">
  {clients.map((client) => (
    <div
      key={client.name}
      className="flex h-24 items-center justify-center"
    >
      <Image
        src={client.image}
        alt={client.name}
        width={client.width}
        height={80}
        className="h-auto object-contain transition duration-300 hover:scale-105"
      />
    </div>
  ))}
</div>

export default function Clients() {
  return (
    <section
      id="clients"
      className="py-20"
    >
      <Container>
        <div className="text-center">
          <h2 className="text-5xl font-bold">
            Our{" "}
            <span className="text-[#2563EB]">
              Proven Partnerships
            </span>
          </h2>

          <p className="mt-4 text-xl text-gray-700">
            Successful Collaborations With the{" "}
            <span className="text-[#2563EB]">
              Industry's Best
            </span>
          </p>
        </div>

      <div className="mt-20 grid grid-cols-2 gap-y-14 justify-items-center md:grid-cols-4">
  {clients.map((client) => (
    <div
      key={client.name}
      className="flex h-24 items-center justify-center"
    >
      <Image
        src={client.image}
        alt={client.name}
        width={client.width}
        height={80}
        className="h-auto object-contain transition duration-300 hover:scale-105"
      />
    </div>
  ))}
</div>
      </Container>
    </section>
  );
}