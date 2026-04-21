import { i as useSearchParams, r as reactExports, j as jsxRuntimeExports, k as Search, I as Input } from "./index-BiZc6_aw.js";
import { A as ALL_PRODUCTS, a as ProductCard } from "./products-BZ6r0uDb.js";
import "./index-CdqDEkl8.js";
function SearchPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialQuery = searchParams.get("q") ?? "";
  const [query, setQuery] = reactExports.useState(initialQuery);
  reactExports.useEffect(() => {
    setQuery(searchParams.get("q") ?? "");
  }, [searchParams]);
  const handleChange = (e) => {
    const val = e.target.value;
    setQuery(val);
    if (val.trim()) {
      setSearchParams({ q: val.trim() });
    } else {
      setSearchParams({});
    }
  };
  const results = query.trim().length > 0 ? ALL_PRODUCTS.filter(
    (p) => p.name.toLowerCase().includes(query.toLowerCase()) || p.description.toLowerCase().includes(query.toLowerCase()) || p.category.toLowerCase().includes(query.toLowerCase())
  ) : [];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 py-10 px-4 sm:px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-3xl font-bold text-foreground mb-6", children: "Search" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative max-w-xl mb-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Input,
        {
          "data-ocid": "search.input",
          type: "search",
          placeholder: "Search cakes, pastries, cookies…",
          value: query,
          onChange: handleChange,
          className: "pl-10 h-11 text-sm bg-card border-input",
          autoFocus: true,
          autoCapitalize: "none",
          autoCorrect: "off",
          spellCheck: false
        }
      )
    ] }),
    query.trim() === "" ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        "data-ocid": "search.empty_state",
        className: "flex flex-col items-center justify-center py-20 text-center",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "w-12 h-12 text-muted-foreground/30 mb-4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm", children: "Type a product name to search our bakery" })
        ]
      }
    ) : results.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        "data-ocid": "search.no_results_state",
        className: "flex flex-col items-center justify-center py-20 text-center",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-3xl mb-4", children: "🥺" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-xl font-semibold text-foreground mb-2", children: [
            'No results for "',
            query,
            '"'
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm", children: 'Try searching for "cake", "croissant", or "cookie"' })
        ]
      }
    ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "p",
        {
          "data-ocid": "search.result_count",
          className: "text-sm text-muted-foreground mb-6",
          children: [
            results.length,
            " result",
            results.length !== 1 ? "s" : "",
            ' for "',
            query,
            '"'
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          "data-ocid": "search.results_list",
          className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5",
          children: results.map((product, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(ProductCard, { product, index: i + 1 }, product.id))
        }
      )
    ] })
  ] }) });
}
export {
  SearchPage as default
};
