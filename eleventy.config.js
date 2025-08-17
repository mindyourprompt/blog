export default async function(eleventyConfig) {
  // Passthrough static assets
  eleventyConfig.addPassthroughCopy({ "src/_assets": "_assets" });
  eleventyConfig.addPassthroughCopy({ "src/images": "images" });

  // Collections: all posts tagged "post"
  eleventyConfig.addCollection("posts", collection => {
    return collection.getFilteredByTag("post")
      .filter(p => !p.data.draft)
      .sort((a, b) => b.date - a.date);
  });

  // Recent posts for homepage
  eleventyConfig.addCollection("recentPosts", collection => {
    return collection.getFilteredByTag("post")
      .filter(p => !p.data.draft)
      .sort((a, b) => b.date - a.date)
      .slice(0, 3);
  });

  // Syntax highlighting plugin
  const syntaxHighlight = await import("@11ty/eleventy-plugin-syntaxhighlight").then(m => m.default);
  eleventyConfig.addPlugin(syntaxHighlight, {
    templateFormats: ["njk", "md"],
    preAttributes: {
      tabindex: 0,
      "data-language": function({language, content, options}) {
        return language;
      }
    }
  });

  // RSS plugin
  const pluginRss = await import("@11ty/eleventy-plugin-rss").then(m => m.default);
  eleventyConfig.addPlugin(pluginRss);

  // Shortcodes for components
  eleventyConfig.addShortcode("badge", (text = "", variant = "default") => {
    const classes = {
      default: "inline-block rounded px-2 py-1 text-sm bg-gray-100 text-gray-800",
      accent: "inline-block rounded px-2 py-1 text-sm text-white",
      warning: "inline-block rounded px-2 py-1 text-sm bg-yellow-100 text-yellow-800"
    };
    const style = variant === "accent" ? `style="background-color: var(--accent-fill);"` : "";
    return `<span class="${classes[variant] || classes.default}" ${style}>${text}</span>`;
  });

  eleventyConfig.addPairedShortcode("callout", (content, type = "info", title = "") => {
    const titleHtml = title ? `<div class="font-semibold mb-2">${title}</div>` : "";
    const bgColor = type === "warning" ? "bg-yellow-50 border-yellow-200" : "bg-blue-50 border-blue-200";
    return `<aside class="my-6 rounded-lg border ${bgColor} p-4">
      ${titleHtml}
      <div class="prose prose-sm">${content}</div>
    </aside>`;
  });

  // Filters
  eleventyConfig.addFilter("readTime", (content = "") => {
    const words = content.split(/\s+/).filter(Boolean).length;
    const mins = Math.max(1, Math.round(words / 225));
    return `${mins} min read`;
  });

  eleventyConfig.addFilter("dateFormat", (date, format = "PPP") => {
    return new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long", 
      day: "numeric"
    });
  });

  eleventyConfig.addFilter("excerpt", (content, length = 150) => {
    const text = content.replace(/<[^>]*>/g, "");
    return text.length > length ? text.substring(0, length) + "..." : text;
  });

  // Markdown configuration
  const markdownIt = await import("markdown-it").then(m => m.default);
  const markdownItAttrs = await import("markdown-it-attrs").then(m => m.default);
  
  const md = markdownIt({ 
    html: true, 
    linkify: true,
    typographer: true
  }).use(markdownItAttrs);
  
  eleventyConfig.setLibrary("md", md);

  // Watch CSS files
  eleventyConfig.addWatchTarget("./src/_assets/css/");

  return {
    dir: { 
      input: "src", 
      includes: "_includes", 
      data: "_data", 
      output: "_site" 
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    templateFormats: ["njk", "md", "html"]
  };
}