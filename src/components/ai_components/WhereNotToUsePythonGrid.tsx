import React from "react";
import Image from "next/image";

const data = [
  {
    title: "Low-level System Programming",
    image: "/images/estimation-of-cost.svg",
    alt: "Estimation of cost and revenue",
    description:
      "Python is an interpreted language, which means that it is not suitable for low-level system programming tasks, such as writing an operating system or device drivers. For these types of tasks, languages such as C or Assembly are more suitable."
  },
  {
    title: "Mobile Development",
    image: "/images/automation-increases.svg",
    alt: "automation increases productivity",
    description:
      "While Python can be used for mobile development, it is not as widely used as other mobile development languages, such as Java or Swift. Additionally, the performance of Python on mobile devices may not be as good as other languages, making it a less suitable choice for mobile development."
  },
  {
    title: "Real-time Processing",
    image: "/images/efficient-working-methods.svg",
    alt: "Efficient working methods",
    description:
      "Python is an interpreted language, which means that it is not well-suited to real-time processing tasks, where low-latency and high-performance are essential. For these types of tasks, languages such as C++ or Go may be more suitable."
  },
  {
    title: "Game Development",
    image: "/images/return-on-investment.svg",
    alt: "Increase in the Return on Investment",
    description:
      "While Python can be used for mobile development and website development, it is not as widely used as other mobile development languages, such as Java or Swift. Additionally, the performance of Python on mobile devices and in website development may not be as good as other languages, making it a less suitable choice for mobile and website development."
  }
];

export default function WhereNotToUsePythonGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {data.map((item, idx) => (
        <div
          key={item.title}
          className={`rounded-xl shadow-sm bg-white p-6 flex flex-col items-center transition-transform duration-300 hover:scale-105 ${idx % 2 === 0 ? 'bg-gray-50' : 'bg-gray-100'}`}
        >
          <h3 className="text-lg font-semibold text-center mb-3">{item.title}</h3>
          <Image
            src={item.image}
            alt={item.alt}
            width={120}
            height={120}
            className="mb-4 object-contain"
          />
          <p className="text-gray-700 text-center text-sm">{item.description}</p>
        </div>
      ))}
    </div>
  );
}
