import Image from "next/image";

export default function Home() {
  return (
    <div
      className="w-full flex flex-col flex-1"
      style={{
        background: "linear-gradient(to bottom, #6b4a2b, #c58f41 40%, #fdf6ec)",
      }}
    >
      <div className="flex justify-center" style={{ marginBottom: "-0.75rem" }}>
        <Image
          src="/fulllogo-transparent-trimmed-bg.png"
          alt="Roots of Knowledge Tutoring"
          width={400}
          height={400}
          style={{ objectFit: "contain", display: "block" }}
          priority
        />
      </div>

      <div className="flex flex-col items-center justify-center flex-1 gap-3 pt-3 pb-0 text-center">

        <p
          className="text-3xl font-bold"
          style={{ color: "#3b2a14", letterSpacing: "0.06em" }}
        >
          Free, culturally responsive reading instruction for children<br />
          in underserved communities across Los Angeles County.
        </p>

        <div className="flex gap-20 mt-1">
          <a
            href="/enroll"
            className="px-10 py-4 rounded-full font-bold text-lg"
            style={{ background: "#5a3d1e", color: "#fdf6ec" }}
          >
            Get Help
          </a>
          <a
            href="/donate"
            className="px-10 py-4 rounded-full font-bold text-lg"
            style={{ background: "#5a3d1e", color: "#fdf6ec" }}
          >
            Donate
          </a>
        </div>

      </div>
    </div>
  );
}
