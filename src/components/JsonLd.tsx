export default function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Akshay Bhawar",
    jobTitle: "Full-Stack Developer",
    url: (typeof window !== "undefined" ? window.location.origin : "https://example.com"),
    image: "/logo/Portfolio.png",
    sameAs: [
      "https://github.com/akshaybhawar03",
      "https://www.linkedin.com/in/akshay-bhawar-5a7848291"
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Daund",
      addressRegion: "Maharashtra",
      addressCountry: "IN"
    },
    worksFor: { "@type": "Organization", name: "Freelance" },
    knowsAbout: [
      "Next.js",
      "TypeScript",
      "React",
      "Tailwind CSS",
      "Node.js",
      "MongoDB"
    ]
  };

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
