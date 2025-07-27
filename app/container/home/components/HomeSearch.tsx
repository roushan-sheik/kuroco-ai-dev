import { Search, FileText } from "lucide-react";
import React, { useEffect, useState } from "react";
import type { SearchResult } from "../types/types";
import { mockResults } from "../constants/searchResults";
import { useTranslation } from "react-i18next";

const HomeSearch = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [isSearching, setIsSearching] = useState<boolean>(false);
  const { t } = useTranslation("home");

  useEffect(() => {
    const filtered = mockResults.filter(
      (result) =>
        result.title.toLowerCase().includes("dev") ||
        result.description.toLowerCase().includes("dev")
    );
    setSearchResults(filtered);
  }, []);

  const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchQuery(value);

    // Log the search input
    console.log("Search input:", value);

    // Simulate search with debouncing effect
    setIsSearching(true);

    setTimeout(() => {
      if (value.trim()) {
        // Filter results based on search query
        const filtered = mockResults.filter(
          (result) =>
            result.title.toLowerCase().includes(value.toLowerCase()) ||
            result.description.toLowerCase().includes(value.toLowerCase())
        );
        setSearchResults(filtered);
      } else {
        setSearchResults([]);
      }
      setIsSearching(false);
    }, 300);
  };

  const handleResultClick = (result: SearchResult) => {
    console.log("Selected result:", result);
    // Handle result selection logic here
  };

  return (
    <div className="w-full my-8 mx-auto">
      {/* Search Input */}
      <div className="mb-6 relative">
        <div className="relative">
          <input
            type="text"
            placeholder="CRM"
            value={searchQuery}
            onChange={handleSearchInput}
            className="w-full pl-4 pr-12 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-sm"
          />
          <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
        </div>
      </div>

      {/* Search Results */}
      {(searchQuery.trim() || searchResults.length > 0) && (
        <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
          <div className="p-4 border-b border-gray-100">
            <h3 className="text-sm font-medium text-gray-900">
              {t("searchResults")}
            </h3>
          </div>

          <div className="max-h-96 overflow-y-auto">
            {isSearching ? (
              <div className="p-4 text-center">
                <div className="text-sm text-gray-500">Searching...</div>
              </div>
            ) : searchResults.length > 0 ? (
              <div className="divide-y divide-gray-100">
                {searchResults.map((result) => (
                  <div
                    key={result.id}
                    onClick={() => handleResultClick(result)}
                    className="p-4 hover:bg-gray-50 cursor-pointer transition-colors duration-150"
                  >
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 mt-1">
                        <FileText className="w-4 h-4 text-blue-500" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-medium text-blue-600 hover:text-blue-800 mb-1">
                          {result.title}
                        </div>
                        <div className="text-sm text-gray-600 line-clamp-2">
                          {result.description}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : searchQuery.trim() ? (
              <div className="p-4 text-center">
                <div className="text-sm text-gray-500">
                  No results found for "{searchQuery}"
                </div>
              </div>
            ) : null}
          </div>
        </div>
      )}
    </div>
  );
};

export default HomeSearch;
