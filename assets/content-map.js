// assets/content-map.js
// Site content sections, keyword tags, and a simple search filter function.

const contentMap = {
  sections: [
    {
      id: "sports",
      title: "Sports",
      tags: ["football", "basketball", "tennis", "esports"],
      url: "https://pc-portal-1xbet.com/sports",
    },
    {
      id: "live",
      title: "Live Events",
      tags: ["live", "streaming", "in-play", "1xbet"],
      url: "https://pc-portal-1xbet.com/live",
    },
    {
      id: "casino",
      title: "Casino",
      tags: ["slots", "blackjack", "roulette", "poker", "1xbet"],
      url: "https://pc-portal-1xbet.com/casino",
    },
    {
      id: "promotions",
      title: "Promotions",
      tags: ["bonus", "freebet", "cashback", "1xbet"],
      url: "https://pc-portal-1xbet.com/promotions",
    },
    {
      id: "support",
      title: "Support",
      tags: ["faq", "contact", "help", "1xbet"],
      url: "https://pc-portal-1xbet.com/support",
    },
  ],
  keywords: ["1xbet", "betting", "casino", "live", "sports", "bonus"],
};

function filterSections(query) {
  if (!query || typeof query !== "string") return [];
  const lowerQuery = query.toLowerCase().trim();
  return contentMap.sections.filter((section) => {
    const titleMatch = section.title.toLowerCase().includes(lowerQuery);
    const tagMatch = section.tags.some((tag) =>
      tag.toLowerCase().includes(lowerQuery)
    );
    const urlMatch = section.url.toLowerCase().includes(lowerQuery);
    return titleMatch || tagMatch || urlMatch;
  });
}

function findSectionById(id) {
  return contentMap.sections.find((section) => section.id === id) || null;
}

function getAllTags() {
  const tagSet = new Set();
  contentMap.sections.forEach((section) => {
    section.tags.forEach((tag) => tagSet.add(tag));
  });
  return Array.from(tagSet);
}

function getSectionsByTag(tag) {
  if (!tag || typeof tag !== "string") return [];
  const lowerTag = tag.toLowerCase();
  return contentMap.sections.filter((section) =>
    section.tags.some((t) => t.toLowerCase() === lowerTag)
  );
}

// Example usage:
// console.log(filterSections("1xbet"));
// console.log(findSectionById("casino"));
// console.log(getAllTags());
// console.log(getSectionsByTag("1xbet"));