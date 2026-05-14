import type { APIRoute } from "astro";

const SITE = "https://golfcartrentalthevillagesfl.com";

const routes: { path: string; priority: string; changefreq: string }[] = [
  { path: "/", priority: "1.0", changefreq: "weekly" },
  { path: "/about-us", priority: "0.7", changefreq: "monthly" },
  { path: "/services", priority: "0.8", changefreq: "monthly" },
  { path: "/pricing", priority: "0.8", changefreq: "monthly" },
  { path: "/gallery", priority: "0.6", changefreq: "monthly" },
  { path: "/faq", priority: "0.6", changefreq: "monthly" },
  { path: "/contact", priority: "0.8", changefreq: "monthly" },
  { path: "/weekly-golf-cart-rental-villages", priority: "0.9", changefreq: "monthly" },
  { path: "/monthly-golf-cart-rental-villages", priority: "0.9", changefreq: "monthly" },
  { path: "/2-passenger-deluxe-golf-cart", priority: "0.9", changefreq: "monthly" },
  { path: "/4-passenger-deluxe-golf-cart", priority: "0.9", changefreq: "monthly" },
  { path: "/6-passenger-golf-cart", priority: "0.9", changefreq: "monthly" },
  { path: "/spanish-springs-golf-cart-rentals", priority: "0.8", changefreq: "monthly" },
  { path: "/lake-sumter-golf-cart-rentals", priority: "0.8", changefreq: "monthly" },
  { path: "/brownwood-golf-cart-rentals", priority: "0.8", changefreq: "monthly" },
  { path: "/sawgrass-grove-golf-cart-rentals", priority: "0.8", changefreq: "monthly" },
  { path: "/fenney-golf-cart-rentals", priority: "0.8", changefreq: "monthly" },
  { path: "/rohan-golf-cart-rentals", priority: "0.8", changefreq: "monthly" },
  { path: "/water-lily-golf-cart-rentals", priority: "0.8", changefreq: "monthly" },
  { path: "/eastport-golf-cart-rentals", priority: "0.8", changefreq: "monthly" },
  { path: "/fruitland-park-golf-cart-rentals", priority: "0.7", changefreq: "monthly" },
  { path: "/lady-lake-golf-cart-rentals", priority: "0.7", changefreq: "monthly" },
  { path: "/leesburg-golf-cart-rentals", priority: "0.7", changefreq: "monthly" },
  { path: "/wildwood-golf-cart-rentals", priority: "0.7", changefreq: "monthly" },
  { path: "/long-term-golf-cart-rental", priority: "0.8", changefreq: "monthly" },
  { path: "/snowbird-golf-cart-rental", priority: "0.8", changefreq: "monthly" },
  { path: "/wedding-golf-cart-rental-villages", priority: "0.8", changefreq: "monthly" },
  { path: "/things-to-do-the-villages", priority: "0.6", changefreq: "monthly" },
  { path: "/golf-cart-rules-the-villages", priority: "0.6", changefreq: "monthly" },
  { path: "/reviews", priority: "0.7", changefreq: "monthly" },
  { path: "/privacy-policy", priority: "0.3", changefreq: "yearly" },
  { path: "/terms", priority: "0.3", changefreq: "yearly" },
];

export const GET: APIRoute = () => {
  const lastmod = new Date().toISOString().split("T")[0];
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (r) =>
      `  <url>\n    <loc>${SITE}${r.path}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>${r.changefreq}</changefreq>\n    <priority>${r.priority}</priority>\n  </url>`
  )
  .join("\n")}
</urlset>`;
  return new Response(body, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
};
