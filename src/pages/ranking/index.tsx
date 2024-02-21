import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { QuickSelect } from "@/components/QuickSelect";
import { Button } from "@/components/ui/button";
const Ranking = () => {
  const [name, setName] = useState("");
  const [place, setPlace] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Name:", name, "Place", place, "Email:", email);
  };

  return (
    <div className="shadow-md my-4 border-2 rounded-lg overflow-hidden ">
      <form className="flex flex-col items-center text-black justify-center p-4 shadow-md bg-gray-50">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold mb-2">SCHOOLRANK </h1>
          <h2 className="text-xl font-bold mb-3">
            RANKING FOR HIGH SCHOOL STUDENT 2024
          </h2>
        </div>
        <section className="grid grid-cols-2 gap-4 my-4 w-full">
          <div>
            <label className="font-bold">Fullname:</label>
            <Input
              type="name"
              placeholder="Fullname"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="block w-full rounded-md border border-gray-300 focus:ring-white-500 focus:border-white-500"
            />
          </div>
          <div>
            <label className="font-bold">Province/City:</label>
            <QuickSelect
              title="Province/City"
              options={["Ho Chi Minh", "Can Tho", "Tra Vinh", "An Giang"]}
            />
          </div>
          <div>
            <label className="font-bold">Email:</label>
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="block w-full rounded-md border border-gray-300 focus:ring-white-500 focus:border-white-500"
            />
          </div>
        </section>
        <div className="text-center my-6">
          <h1 className="text-3xl font-bold my-4">Grade 11 scores</h1>
          <h3 className="text-xl italic float-start">
            *If the score is decimal, use the period
          </h3>
        </div>
        <section className="grid grid-cols-3 gap-4 w-full">
          <div className="flex font-bold justify-between">
            <div className="col-span-4">
              <label>Math:</label>
            </div>
            <div className="col-span-8">
              <Input placeholder="0.0" />
            </div>
          </div>
          <div className="flex font-bold justify-between">
            <div className="col-span-4">
              <label>Literature:</label>
            </div>
            <div className="col-span-8">
              <Input placeholder="0.0" />
            </div>
          </div>
          <div className="flex font-bold justify-between">
            <div className="col-span-4">
              <label>English:</label>
            </div>
            <div className="col-span-8">
              <Input placeholder="0.0" />
            </div>
          </div>
          <div className="flex font-bold justify-between">
            <div className="col-span-4">
              <label>Physics:</label>
            </div>
            <div className="col-span-8">
              <Input placeholder="0.0" />
            </div>
          </div>
          <div className="flex font-bold justify-between">
            <div className="col-span-4">
              <label>Chemistry:</label>
            </div>
            <div className="col-span-8">
              <Input placeholder="0.0" />
            </div>
          </div>
          <div className="flex font-bold justify-between">
            <div className="col-span-4">
              <label>Biology:</label>
            </div>
            <div className="col-span-8">
              <Input placeholder="0.0" />
            </div>
          </div>
          <div className="flex font-bold justify-between">
            <div className="col-span-4">
              <label>History:</label>
            </div>
            <div className="col-span-8">
              <Input placeholder="0.0" />
            </div>
          </div>
          <div className="flex font-bold justify-between">
            <div className="col-span-4">
              <label>Geography:</label>
            </div>
            <div className="col-span-8">
              <Input placeholder="0.0" />
            </div>
          </div>
          <div className="flex font-bold justify-between">
            <div className="col-span-4">
              <label>Civic Education:</label>
            </div>
            <div className="col-span-8">
              <Input placeholder="0.0" />
            </div>
          </div>
        </section>
        <div className="text-center my-6">
          <h1 className="text-3xl font-bold mb-4">Grade 12 scores (First Semester)</h1>
        </div>
        <section className="grid grid-cols-3 gap-4 w-full">
          <div className="flex font-bold justify-between">
            <div className="col-span-4">
              <label>Math:</label>
            </div>
            <div className="col-span-8">
              <Input placeholder="0.0" />
            </div>
          </div>
          <div className="flex font-bold justify-between">
            <div className="col-span-4">
              <label>Literature:</label>
            </div>
            <div className="col-span-8">
              <Input placeholder="0.0" />
            </div>
          </div>
          <div className="flex font-bold justify-between">
            <div className="col-span-4">
              <label>English:</label>
            </div>
            <div className="col-span-8">
              <Input placeholder="0.0" />
            </div>
          </div>
          <div className="flex font-bold justify-between">
            <div className="col-span-4">
              <label>Physics:</label>
            </div>
            <div className="col-span-8">
              <Input placeholder="0.0" />
            </div>
          </div>
          <div className="flex font-bold justify-between">
            <div className="col-span-4">
              <label>Chemistry:</label>
            </div>
            <div className="col-span-8">
              <Input placeholder="0.0" />
            </div>
          </div>
          <div className="flex font-bold justify-between">
            <div className="col-span-4">
              <label>Biology:</label>
            </div>
            <div className="col-span-8">
              <Input placeholder="0.0" />
            </div>
          </div>
          <div className="flex font-bold justify-between">
            <div className="col-span-4">
              <label>History:</label>
            </div>
            <div className="col-span-8">
              <Input placeholder="0.0" />
            </div>
          </div>
          <div className="flex font-bold justify-between">
            <div className="col-span-4">
              <label>Geography:</label>
            </div>
            <div className="col-span-8">
              <Input placeholder="0.0" />
            </div>
          </div>
          <div className="flex font-bold justify-between">
            <div className="col-span-4">
              <label>Civic Education:</label>
            </div>
            <div className="col-span-8">
              <Input placeholder="0.0" />
            </div>
          </div>
        </section>
        <div className="text-center mt-8 w-1/2 ">
          <Button className="w-full text-xl p-4 focus:ring-2 focus:ring-offset-2 focus:ring-black/50">View Result</Button>
        </div>
      </form>
    </div>
  );
};

export default Ranking;
