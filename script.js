/**
 * Cấu hình domain dẫn tới blog.
 * - Nếu bạn muốn cố định: "https://domain.com"
 * - Nếu bạn muốn tự lấy theo host hiện tại (GitHub Pages): dùng window.location.origin
 */
const BLOG_DOMAIN = "https://domain.com";

/**
 * Mỗi item = 1 section (1 Blog category)
 * slug dùng để tạo link: /blog/{slug}
 */
const BLOG_CATEGORIES = [
  {
    title: "Hawaii",
    slug: "hawaii",
    description:
      "Bài viết về trải nghiệm đảo nhiệt đới, văn hoá bản địa, biển xanh và các điểm đến biểu tượng của Hawaii.",
    image:
      "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1400&q=70"
  },
  {
    title: "New Zealand",
    slug: "new-zealand",
    description:
      "Hành trình qua thiên nhiên hùng vĩ, cung đường trekking, văn hoá Māori và các thành phố đáng sống.",
    image:
      "https://images.unsplash.com/photo-1502786129293-79981df4e689?auto=format&fit=crop&w=1400&q=70"
  },
  {
    title: "Samoa",
    slug: "samoa",
    description:
      "Khám phá nhịp sống chậm, làng truyền thống, bờ biển hoang sơ và bản sắc Polynesia đậm nét.",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=70"
  },
  {
    title: "Tahiti (French Polynesia)",
    slug: "tahiti",
    description:
      "Tổng hợp bài viết về Tahiti và các đảo lân cận: lagoon trong vắt, resort overwater và trải nghiệm biển đảo.",
    image:
      "https://images.unsplash.com/photo-1483683804023-6ccdb62f86ef?auto=format&fit=crop&w=1400&q=70"
  }
];

function buildCategoryUrl(slug) {
  // Ví dụ yêu cầu: domain.com/blog/hawaii
  // (giữ đúng format /blog/{slug})
  const clean = String(slug || "").trim().replace(/^\/+|\/+$/g, "");
  return `${BLOG_DOMAIN}/blog/${encodeURIComponent(clean)}`;
}

function iconArrow() {
  return `
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M7 17L17 7" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
      <path d="M9 7h8v8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `;
}

function render() {
  const container = document.getElementById("blogs");
  if (!container) return;

  container.innerHTML = BLOG_CATEGORIES.map((item) => {
    const url = buildCategoryUrl(item.slug);

    return `
      <article class="card" role="listitem">
        <div class="card__media">
          <img src="${item.image}" alt="Ảnh minh hoạ: ${item.title}" loading="lazy" />
          <div class="card__overlay"></div>
        </div>

        <div class="card__body">
          <h2 class="card__title">${item.title}</h2>
          <p class="card__desc">${item.description}</p>

          <div class="card__meta">
            <span class="badge" title="Đường dẫn category">
              <span>Link:</span>
              <code>${url.replace(/^https?:\/\//, "")}</code>
            </span>

            <a class="btn" href="${url}" target="_self" rel="noopener">
              Xem category ${iconArrow()}
            </a>
          </div>
        </div>
      </article>
    `;
  }).join("");
}

document.addEventListener("DOMContentLoaded", render);
