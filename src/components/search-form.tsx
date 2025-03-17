"use client";

import { useQueryState } from "nuqs";
import { SSRIndicator } from "../app/ssr-indicator";
import { useState } from "react";

export default function SearchForm() {
  // Define query parameters using nuqs
  const [searchQuery, setSearchQuery] = useQueryState("q");
  const [category, setCategory] = useQueryState("category", {
    defaultValue: "all",
  });
  const [sort, setSort] = useQueryState("sort", { defaultValue: "asc" });

  // Local state for form inputs
  const [searchInput, setSearchInput] = useState(searchQuery || "");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchQuery(searchInput);
  };

  return (
    <div className="form-container">
      <h2>Update URL Parameters</h2>
      <SSRIndicator componentName="SearchForm" />

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "10px" }}>
          <label
            htmlFor="search"
            style={{ display: "block", marginBottom: "5px" }}
          >
            Search:
          </label>
          <input
            id="search"
            type="text"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            placeholder="Enter search term"
          />
          <button type="submit">Search</button>
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label
            htmlFor="category"
            style={{ display: "block", marginBottom: "5px" }}
          >
            Category:
          </label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="all">All</option>
            <option value="books">Books</option>
            <option value="electronics">Electronics</option>
            <option value="clothing">Clothing</option>
          </select>
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label
            htmlFor="sort"
            style={{ display: "block", marginBottom: "5px" }}
          >
            Sort Order:
          </label>
          <select
            id="sort"
            value={sort}
            onChange={(e) => setSort(e.target.value)}
          >
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>
      </form>

      <div className="explanation">
        <p>
          <strong>Note:</strong> This component is client-side rendered because
          it needs to handle user interactions. It updates the URL parameters
          using nuqs hooks, but it doesn't cause server components to be
          client-rendered.
        </p>
      </div>
    </div>
  );
}
