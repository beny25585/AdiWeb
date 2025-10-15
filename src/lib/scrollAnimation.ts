export function initScrollAnimation() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const items = entry.target.querySelectorAll(".imageWrapper");
          if (items.length > 0) {
            items.forEach((item, i) => {
              setTimeout(() => {
                item.classList.add("visible");
              }, i * 150);
            });
          } else {
            entry.target.classList.add("visible");
          }

          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  document.querySelectorAll(".gallery").forEach((el) => observer.observe(el));
}
