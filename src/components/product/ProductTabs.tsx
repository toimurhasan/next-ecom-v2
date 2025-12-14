"use client";
import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

type QA = {
  id: string;
  question: string;
  answer?: string;
  asker?: string;
  date?: string;
};
type Review = {
  id: string;
  author: string;
  date: string;
  text: string;
  rating: number;
};

export default function ProductTabs({
  description = "",
  sizeChart,
  qas = [],
  reviews = [],
}: {
  description?: string;
  sizeChart?: { size: string; chest: string; length: string; sleeve: string }[];
  qas?: QA[];
  reviews?: Review[];
}) {
  return (
    <div className="mt-6">
      <Tabs>
        <TabList className="flex gap-4 border-b pb-2">
          <Tab
            className="px-4 py-2 text-sm text-gray-600 cursor-pointer"
            selectedClassName="bg-green-500 text-white rounded-md px-4 py-2"
          >
            DESCRIPTION
          </Tab>
          <Tab
            className="px-4 py-2 text-sm text-gray-600 cursor-pointer"
            selectedClassName="bg-green-500 text-white rounded-md px-4 py-2"
          >
            SIZE CHART
          </Tab>
          <Tab
            className="px-4 py-2 text-sm text-gray-600 cursor-pointer"
            selectedClassName="bg-green-500 text-white rounded-md px-4 py-2"
          >
            Q&A
          </Tab>
          <Tab
            className="px-4 py-2 text-sm text-gray-600 cursor-pointer"
            selectedClassName="bg-green-500 text-white rounded-md px-4 py-2"
          >
            REVIEWS
          </Tab>
        </TabList>

        <div className="pt-4">
          <TabPanel>
            <div className="bg-white border rounded-md p-4 text-sm text-gray-700">
              <p className="mb-3">{description}</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Regular Fit</li>
                <li>
                  Made from soft fleece fabric with an ultra-smooth interior for
                  warmth and comfort.
                </li>
                <li>
                  Designed with a modern dual-tone finish in Laurel Oak and
                  Navy.
                </li>
                <li>
                  Flexible, breathable, and durable, perfect for day-long wear.
                </li>
                <li>
                  Features adjustable hood, metal lock details, and cord elastic
                  system for an elevated look.
                </li>
                <li>
                  Ideal for cool-weather wear, workouts, or casual layering.
                </li>
              </ul>

              <div className="mt-4">
                <h4 className="font-semibold">FABRIC DETAILS:</h4>
                <ul className="list-disc pl-5 mt-2 text-sm">
                  <li>Shell Fabric: Fleece (Laurel Oak + Navy)</li>
                  <li>Contrast Fabric: S/J (Laurel Oak + Navy)</li>
                  <li>Hood Inner: S/J (Navy)</li>
                  <li>Fabric Composition: 70% Cotton + 30% Polyester</li>
                  <li>GSM: 285</li>
                </ul>
              </div>
            </div>
          </TabPanel>

          <TabPanel>
            <div className="bg-white border rounded-md p-4 text-sm text-gray-700">
              <h4 className="font-semibold mb-3">
                Size chart – inches (Expected Deviation)
              </h4>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-gray-100 text-left">
                      <th className="p-2 border">Size</th>
                      <th className="p-2 border">Chest Round</th>
                      <th className="p-2 border">Length</th>
                      <th className="p-2 border">Sleeve</th>
                    </tr>
                  </thead>
                  <tbody>
                    {(
                      sizeChart || [
                        {
                          size: "M",
                          chest: "39",
                          length: "27.5",
                          sleeve: "24.25",
                        },
                        {
                          size: "L",
                          chest: "40.75",
                          length: "28.25",
                          sleeve: "24.75",
                        },
                        { size: "XL", chest: "43", length: "29", sleeve: "25" },
                        {
                          size: "2XL",
                          chest: "45.5",
                          length: "30",
                          sleeve: "25.5",
                        },
                      ]
                    ).map((row) => (
                      <tr
                        key={row.size}
                        className="odd:bg-white even:bg-gray-50"
                      >
                        <td className="p-2 border">{row.size}</td>
                        <td className="p-2 border">{row.chest}</td>
                        <td className="p-2 border">{row.length}</td>
                        <td className="p-2 border">{row.sleeve}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </TabPanel>

          <TabPanel>
            <div className="bg-white border rounded-md p-4 text-sm text-gray-700">
              <h4 className="font-semibold mb-3">
                Customer Questions & answers :
              </h4>
              <div className="space-y-3">
                {(qas.length
                  ? qas
                  : [
                      {
                        id: "1",
                        question: "Eta ki original product",
                        answer: "হ্যাঁ, یہ اصل مصنوعات ہے۔",
                        asker: "Eshita paul chowdhuri",
                        date: "12 November, 2025",
                      },
                    ]
                ).map((q) => (
                  <div key={q.id} className="bg-gray-50 p-3 rounded">
                    <div className="text-sm font-medium">{q.question}</div>
                    <div className="mt-1 text-xs text-gray-500">
                      {q.asker} – {q.date}
                    </div>
                    {q.answer && (
                      <div className="mt-2 text-sm text-gray-700">
                        {q.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </TabPanel>

          <TabPanel>
            <div className="bg-white border rounded-md p-4 text-sm text-gray-700">
              <h4 className="font-semibold mb-3">Customer Reviews</h4>
              <div className="space-y-4">
                {(reviews.length
                  ? reviews
                  : [
                      {
                        id: "r1",
                        author: "Eshita paul chowdhuri",
                        date: "12 November, 2025",
                        text: "Eta ki original product",
                        rating: 4,
                      },
                    ]
                ).map((r) => (
                  <div key={r.id} className="bg-gray-50 p-3 rounded">
                    <div className="flex justify-between">
                      <div>
                        <div className="font-medium">{r.author}</div>
                        <div className="text-xs text-gray-500">{r.date}</div>
                      </div>
                      <div className="text-yellow-400">
                        {Array.from({ length: r.rating })
                          .map((_, i) => "★")
                          .join("")}
                      </div>
                    </div>
                    <div className="mt-2 text-sm text-gray-700">{r.text}</div>
                  </div>
                ))}
              </div>

              <div className="mt-4">
                <h5 className="font-medium mb-2">+ Add Review</h5>
                <form className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <input placeholder="Name" className="border p-2 rounded" />
                  <input
                    placeholder="Email Address"
                    className="border p-2 rounded"
                  />
                  <textarea
                    placeholder="Review"
                    className="col-span-1 md:col-span-2 border p-2 rounded h-28"
                  />
                  <div className="flex items-center gap-2">
                    <div className="text-sm">Your Rating</div>
                    <div className="text-yellow-400">★ ★ ★ ★ ☆</div>
                  </div>
                  <button
                    type="button"
                    className="bg-green-500 text-white px-4 py-2 rounded"
                  >
                    SUBMIT REVIEW
                  </button>
                </form>
              </div>
            </div>
          </TabPanel>
        </div>
      </Tabs>
    </div>
  );
}
