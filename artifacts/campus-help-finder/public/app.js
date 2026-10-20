const searchInput = document.querySelector("#resource-search");
const cards = Array.from(document.querySelectorAll(".resource-card"));
const emptyState = document.querySelector("#empty-state");
const resultCount = document.querySelector("#result-count");

function updateResults() {
  const query = searchInput.value.trim().toLocaleLowerCase();
  let visibleCount = 0;

  cards.forEach((card) => {
    const searchableText = `${card.dataset.search} ${card.textContent}`.toLocaleLowerCase();
    const matches = !query || searchableText.includes(query);
    card.hidden = !matches;
    if (matches) visibleCount += 1;
  });

  resultCount.textContent = String(visibleCount);
  emptyState.hidden = visibleCount !== 0;
}

searchInput.addEventListener("input", updateResults);

document.querySelectorAll('a[href="#"]').forEach((link) => {
  link.addEventListener("click", (event) => event.preventDefault());
});
