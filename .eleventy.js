const markdownIt = require("markdown-it");
const markdownItAttrs = require("markdown-it-link-attributes");

module.exports = function(eleventyConfig) {

    // Markdown with external link handling
    const md = markdownIt({ html: true }).use(markdownItAttrs, {
        matcher: (href) => href.startsWith("http"),
        attrs: {
            target: "_blank",
            rel: "noopener noreferrer"
        }
    });

    // Markdown filter
    eleventyConfig.addFilter("markdown", (content) => {
        return md.render(content || "");
    });

    // Blog collection — all files tagged "blogs", sorted newest first
    eleventyConfig.addCollection("blogs", function(collectionApi) {
        return collectionApi.getFilteredByTag("blogs")
            .sort((a, b) => b.date - a.date);
    });

    // Returns { prev, next } neighbors for a post in the blogs collection.
    // Collection is newest-first, so prev = older (higher index), next = newer (lower index).
    eleventyConfig.addFilter("blogNeighbors", function(collection, currentUrl) {
        const index = collection.findIndex(post => post.url === currentUrl);
        return {
            prev: index < collection.length - 1 ? collection[index + 1] : null,
            next: index > 0 ? collection[index - 1] : null
        };
    });

    // Date formatting filter for blog posts
    eleventyConfig.addFilter("formatDate", function(date) {
        return new Date(date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
            timeZone: "UTC"
        });
    });

    eleventyConfig.addPassthroughCopy("css");
    eleventyConfig.addPassthroughCopy("assets");
    eleventyConfig.addPassthroughCopy("js");

    // ✅ ADD THIS
    eleventyConfig.addGlobalData("build", Date.now());

    return {
        pathPrefix: "/gliding-stars/",
        dir: {
            input: "content",
            includes: "_includes",
            layouts: "_layouts",
            output: "_site"
        }
    };
};