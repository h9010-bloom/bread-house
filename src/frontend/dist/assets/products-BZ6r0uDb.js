import { a as useCartStore, r as reactExports, j as jsxRuntimeExports, d as Badge, B as Button, l as ShoppingCart } from "./index-BiZc6_aw.js";
import { u as ue } from "./index-CdqDEkl8.js";
function ProductCard({ product, index }) {
  const addItem = useCartStore((s) => s.addItem);
  const [added, setAdded] = reactExports.useState(false);
  const discount = Math.round(
    (product.originalPrice - product.price) / product.originalPrice * 100
  );
  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      category: product.category,
      imageUrl: product.imageUrl
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
    ue.success(`${product.name} added to cart!`, {
      duration: 2500,
      position: "bottom-right"
    });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      "data-ocid": `product.item.${index}`,
      className: "bg-card border border-border rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-smooth group",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-square overflow-hidden bg-muted", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: product.imageUrl,
              alt: product.name,
              className: "w-full h-full object-cover group-hover:scale-105 transition-smooth",
              loading: "lazy"
            }
          ),
          discount > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Badge,
            {
              "data-ocid": `product.discount_badge.${index}`,
              className: "absolute top-3 left-3 bg-primary text-primary-foreground text-xs font-semibold px-2 py-0.5",
              children: [
                discount,
                "% OFF"
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 flex flex-col gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-semibold text-foreground text-base leading-snug line-clamp-1", children: product.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1 line-clamp-2 leading-relaxed", children: product.description })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-baseline gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-lg font-bold text-primary font-display", children: [
              "$",
              product.price.toFixed(2)
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm text-muted-foreground line-through", children: [
              "$",
              product.originalPrice.toFixed(2)
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              "data-ocid": `product.add_to_cart.${index}`,
              onClick: handleAddToCart,
              size: "sm",
              className: `w-full gap-2 text-sm font-medium transition-smooth ${added ? "bg-accent text-accent-foreground" : "bg-primary text-primary-foreground hover:bg-primary/90"}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingCart, { className: "w-4 h-4" }),
                added ? "Added!" : "Add to Cart"
              ]
            }
          )
        ] })
      ]
    }
  );
}
const PRODUCTS = {
  cakes: [
    {
      id: "cake-001",
      name: "Dark Chocolate Fudge Cake",
      description: "Rich three-layer chocolate cake with ganache frosting and hand-painted cocoa dust.",
      price: 15.99,
      originalPrice: 20.99,
      category: "cakes",
      imageUrl: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&auto=format&fit=crop&q=80"
    },
    {
      id: "cake-002",
      name: "Classic Vanilla Bean Cake",
      description: "Light vanilla sponge with Madagascar bean cream and fresh buttercream layers.",
      price: 14.99,
      originalPrice: 19.99,
      category: "cakes",
      imageUrl: "https://images.unsplash.com/photo-1464349095431-e9a21285b19f?w=600&auto=format&fit=crop&q=80"
    },
    {
      id: "cake-003",
      name: "Fresh Strawberry Chantilly",
      description: "Layered sponge with macerated strawberries and whipped chantilly cream.",
      price: 16.99,
      originalPrice: 21.99,
      category: "cakes",
      imageUrl: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=600&auto=format&fit=crop&q=80"
    },
    {
      id: "cake-004",
      name: "Red Velvet Dream",
      description: "Iconic crimson sponge with cream cheese frosting and decorative crumb coat.",
      price: 17.99,
      originalPrice: 22.99,
      category: "cakes",
      imageUrl: "https://images.unsplash.com/photo-1586788224331-947f68671cf1?w=600&auto=format&fit=crop&q=80"
    },
    {
      id: "cake-005",
      name: "Lemon Blueberry Layer Cake",
      description: "Zesty lemon sponge with blueberry compote and tangy lemon curd buttercream.",
      price: 15.49,
      originalPrice: 20.49,
      category: "cakes",
      imageUrl: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=600&auto=format&fit=crop&q=80"
    }
  ],
  pastries: [
    {
      id: "pastry-001",
      name: "Mango Puff Pastry",
      description: "Flaky golden puff pastry filled with alphonso mango curd and powdered sugar.",
      price: 3.99,
      originalPrice: 5.99,
      category: "pastries",
      imageUrl: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=600&auto=format&fit=crop&q=80"
    },
    {
      id: "pastry-002",
      name: "Dark Chocolate Eclair",
      description: "Classic choux pastry filled with silky chocolate custard and glossy ganache.",
      price: 4.99,
      originalPrice: 6.99,
      category: "pastries",
      imageUrl: "https://images.unsplash.com/photo-1581499083524-b2c8c5568b4e?w=600&auto=format&fit=crop&q=80"
    },
    {
      id: "pastry-003",
      name: "Strawberry Danish",
      description: "Buttery laminated dough with cream cheese center and fresh strawberry topping.",
      price: 5.99,
      originalPrice: 7.99,
      category: "pastries",
      imageUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&auto=format&fit=crop&q=80"
    },
    {
      id: "pastry-004",
      name: "Vanilla Custard Puff",
      description: "Delicate choux puff filled with Tahitian vanilla bean custard cream.",
      price: 4.49,
      originalPrice: 6.49,
      category: "pastries",
      imageUrl: "https://images.unsplash.com/photo-1571115177098-24ec42ed204d?w=600&auto=format&fit=crop&q=80"
    },
    {
      id: "pastry-005",
      name: "Blueberry Galette",
      description: "Rustic free-form pastry with wild blueberry jam and almond frangipane.",
      price: 5.49,
      originalPrice: 7.49,
      category: "pastries",
      imageUrl: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=600&auto=format&fit=crop&q=80"
    }
  ],
  cookies: [
    {
      id: "cookie-001",
      name: "Brown Butter Chocolate Chip",
      description: "Thick and chewy with browned butter, sea salt flakes, and 70% dark chips.",
      price: 2.99,
      originalPrice: 4.49,
      category: "cookies",
      imageUrl: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=600&auto=format&fit=crop&q=80"
    },
    {
      id: "cookie-002",
      name: "Classic Snickerdoodle",
      description: "Soft cinnamon-sugar rolled cookies with a pillowy center and crisp edge.",
      price: 2.49,
      originalPrice: 3.99,
      category: "cookies",
      imageUrl: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=600&auto=format&fit=crop&q=80"
    },
    {
      id: "cookie-003",
      name: "Double Espresso Brownie Cookie",
      description: "Fudgy brownie-cookie hybrid with bold espresso notes and dark chocolate chunks.",
      price: 3.49,
      originalPrice: 4.99,
      category: "cookies",
      imageUrl: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=600&auto=format&fit=crop&q=80"
    },
    {
      id: "cookie-004",
      name: "Lemon Lavender Shortbread",
      description: "Melt-in-mouth buttery shortbread infused with lemon zest and dried lavender.",
      price: 2.99,
      originalPrice: 4.49,
      category: "cookies",
      imageUrl: "https://images.unsplash.com/photo-1548365328-8c6db3220e4c?w=600&auto=format&fit=crop&q=80"
    },
    {
      id: "cookie-005",
      name: "Oat Raisin Walnut",
      description: "Hearty oatmeal cookies with plump raisins, toasted walnuts, and warm spice.",
      price: 2.49,
      originalPrice: 3.99,
      category: "cookies",
      imageUrl: "https://images.unsplash.com/photo-1590080875852-6e00217a3dd5?w=600&auto=format&fit=crop&q=80"
    }
  ],
  croissants: [
    {
      id: "croissant-001",
      name: "Classic Butter Croissant",
      description: "Perfectly laminated with French AOP butter — 81 layers of golden, flaky pastry.",
      price: 3.99,
      originalPrice: 5.49,
      category: "croissants",
      imageUrl: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=600&auto=format&fit=crop&q=80"
    },
    {
      id: "croissant-002",
      name: "Almond Cream Croissant",
      description: "Twice-baked croissant filled with almond frangipane and toasted sliced almonds.",
      price: 4.49,
      originalPrice: 6.49,
      category: "croissants",
      imageUrl: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&auto=format&fit=crop&q=80"
    },
    {
      id: "croissant-003",
      name: "Ham & Gruyère Croissant",
      description: "Savory croissant layered with honey-glazed ham and melted aged Gruyère cheese.",
      price: 5.49,
      originalPrice: 7.49,
      category: "croissants",
      imageUrl: "https://images.unsplash.com/photo-1606787503458-a9ce49e3b5fe?w=600&auto=format&fit=crop&q=80"
    },
    {
      id: "croissant-004",
      name: "Chocolate Pain Au Chocolat",
      description: "Buttery laminated pastry wrapped around two batons of 64% Valrhona dark chocolate.",
      price: 4.99,
      originalPrice: 6.99,
      category: "croissants",
      imageUrl: "https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?w=600&auto=format&fit=crop&q=80"
    },
    {
      id: "croissant-005",
      name: "Matcha White Chocolate Croissant",
      description: "Ceremonial matcha dough with creamy white chocolate filling and powdered finish.",
      price: 5.99,
      originalPrice: 7.99,
      category: "croissants",
      imageUrl: "https://images.unsplash.com/photo-1568376794508-ae52c6ab3929?w=600&auto=format&fit=crop&q=80"
    }
  ],
  cupcakes: [
    {
      id: "cupcake-001",
      name: "Salted Caramel Cupcake",
      description: "Moist brown sugar sponge with salted caramel buttercream and caramel drizzle.",
      price: 4.49,
      originalPrice: 5.99,
      category: "cupcakes",
      imageUrl: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=600&auto=format&fit=crop&q=80"
    },
    {
      id: "cupcake-002",
      name: "Raspberry Rose Cupcake",
      description: "Delicate vanilla cupcake with rose water cream and fresh raspberry coulis swirl.",
      price: 4.99,
      originalPrice: 6.49,
      category: "cupcakes",
      imageUrl: "https://images.unsplash.com/photo-1587668178277-295251f900ce?w=600&auto=format&fit=crop&q=80"
    },
    {
      id: "cupcake-003",
      name: "Triple Chocolate Cupcake",
      description: "Dark chocolate sponge, milk chocolate mousse filling, and white chocolate swirl.",
      price: 4.99,
      originalPrice: 6.49,
      category: "cupcakes",
      imageUrl: "https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?w=600&auto=format&fit=crop&q=80"
    },
    {
      id: "cupcake-004",
      name: "Lemon Meringue Cupcake",
      description: "Bright lemon curd cupcake topped with toasted Swiss meringue and candied zest.",
      price: 4.49,
      originalPrice: 5.99,
      category: "cupcakes",
      imageUrl: "https://images.unsplash.com/photo-1560008581-09826d1de69e?w=600&auto=format&fit=crop&q=80"
    },
    {
      id: "cupcake-005",
      name: "Blueberry Cream Cheese Cupcake",
      description: "Fluffy vanilla cupcake with cream cheese frosting and blueberry jam core.",
      price: 4.49,
      originalPrice: 5.99,
      category: "cupcakes",
      imageUrl: "https://images.unsplash.com/photo-1550617931-e17a7b70dce2?w=600&auto=format&fit=crop&q=80"
    }
  ]
};
const ALL_PRODUCTS = Object.values(PRODUCTS).flat();
const CATEGORY_LABELS = {
  cakes: "Cakes",
  pastries: "Pastries",
  cookies: "Cookies",
  croissants: "Croissants",
  cupcakes: "Cupcakes"
};
export {
  ALL_PRODUCTS as A,
  CATEGORY_LABELS as C,
  PRODUCTS as P,
  ProductCard as a
};
