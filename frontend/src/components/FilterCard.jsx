import React, { useState, useEffect } from "react";
import * as Popover from "@radix-ui/react-popover";
import { RadioGroup, RadioGroupItem } from "@radix-ui/react-radio-group";
import { Label } from "@radix-ui/react-label";
import { SlidersHorizontal, X } from "lucide-react";

const FilterCard = ({ jobs, onFilterChange }) => {
  const [filters, setFilters] = useState({ Location: "", Industry: "", Salary: "" });

  useEffect(() => {
    onFilterChange(filters);
  }, [filters]);

  const filterData = [
    {
      filterType: "Location",
      array: [...new Set(jobs.map((j) => j.location))],
    },
    {
      filterType: "Industry",
      array: [...new Set(jobs.map((j) => j.company.name))],
    },
    {
      filterType: "Salary",
      array: [...new Set(jobs.map((j) => j.salary))],
    },
  ];

  const clearFilters = () => {
    setFilters({ Location: "", Industry: "", Salary: "" });
  };

  return (
    <div className="relative w-full flex justify-end mb-6">
      <Popover.Root>
        <Popover.Trigger asChild>
          <button className="flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-teal-500 to-cyan-600 text-white rounded-xl hover:from-teal-600 hover:to-cyan-700 shadow-md font-semibold transition">
            <SlidersHorizontal className="w-5 h-5" />
            Filters
          </button>
        </Popover.Trigger>

        <Popover.Portal>
          <Popover.Content
            side="bottom"
            align="end"
            sideOffset={10}
            className="z-50 w-[320px] sm:w-[360px] bg-white rounded-xl shadow-xl p-6 border border-gray-200"
          >
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-lg font-bold text-gray-800">Filter Jobs</h1>
              <button
                onClick={clearFilters}
                className="flex items-center gap-1 text-sm text-gray-500 hover:text-teal-600 transition font-medium"
              >
                <X className="w-4 h-4" />
                Clear
              </button>
            </div>

            {filterData.map((filter) => (
              <div key={filter.filterType} className="mb-5">
                <h2 className="text-sm font-semibold text-gray-700 mb-2">{filter.filterType}</h2>
                <RadioGroup
                  value={filters[filter.filterType]}
                  onValueChange={(val) =>
                    setFilters((prev) => ({ ...prev, [filter.filterType]: val }))
                  }
                  className="flex flex-wrap gap-2"
                >
                  {filter.array.map((item, idx) => {
                    const id = `${filter.filterType}-${idx}`;
                    return (
                      <div key={id}>
                        <RadioGroupItem id={id} value={item} className="sr-only peer" />
                        <Label
                          htmlFor={id}
                          className="peer-checked:bg-teal-600 peer-checked:text-white text-sm cursor-pointer px-4 py-1.5 border border-gray-300 rounded-full hover:bg-teal-100 transition"
                        >
                          {item}
                        </Label>
                      </div>
                    );
                  })}
                </RadioGroup>
              </div>
            ))}

            <Popover.Close
              className="mt-3 w-full text-center bg-gray-100 hover:bg-gray-200 py-2 text-sm rounded-lg text-gray-600 transition font-medium"
              aria-label="Close"
            >
              Close
            </Popover.Close>
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>
    </div>
  );
};

export default FilterCard;
