// Salone Harvest: small, dependency-free interactions for the coursework prototype.
document.addEventListener("DOMContentLoaded", () => {
  // Update the footer year automatically.
  document.querySelectorAll(".current-year").forEach((element) => {
    element.textContent = new Date().getFullYear();
  });

  // Accessible mobile navigation toggle.
  const menuButton = document.querySelector(".menu-toggle");
  const navigation = document.querySelector("#primary-navigation");

  if (menuButton && navigation) {
    menuButton.addEventListener("click", () => {
      const isExpanded = menuButton.getAttribute("aria-expanded") === "true";
      menuButton.setAttribute("aria-expanded", String(!isExpanded));
      menuButton.setAttribute("aria-label", isExpanded ? "Open navigation menu" : "Close navigation menu");
      navigation.classList.toggle("is-open", !isExpanded);
    });

    // Close the mobile menu after a navigation link is selected.
    navigation.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        menuButton.setAttribute("aria-expanded", "false");
        menuButton.setAttribute("aria-label", "Open navigation menu");
        navigation.classList.remove("is-open");
      });
    });

    // Return to the desktop navigation state when the viewport grows.
    window.addEventListener("resize", () => {
      if (window.innerWidth >= 768) {
        menuButton.setAttribute("aria-expanded", "false");
        menuButton.setAttribute("aria-label", "Open navigation menu");
        navigation.classList.remove("is-open");
      }
    });
  }

  // Marketplace search and category filtering.
  const searchInput = document.querySelector("#product-search");
  const categoryFilter = document.querySelector("#category-filter");
  const productCards = Array.from(document.querySelectorAll(".market-card"));
  const resultsCount = document.querySelector("#results-count");
  const noResults = document.querySelector("#no-results");

  function filterProducts() {
    if (!searchInput || !categoryFilter || productCards.length === 0) return;

    const searchTerm = searchInput.value.trim().toLowerCase();
    const category = categoryFilter.value;
    let visibleCount = 0;

    productCards.forEach((card) => {
      const name = card.dataset.name || "";
      const cardCategory = card.dataset.category || "";
      const matchesSearch = name.includes(searchTerm);
      const matchesCategory = category === "all" || cardCategory === category;
      const isVisible = matchesSearch && matchesCategory;

      card.hidden = !isVisible;
      if (isVisible) visibleCount += 1;
    });

    if (resultsCount) {
      resultsCount.textContent = `Showing ${visibleCount} of ${productCards.length} sample listings`;
    }
    if (noResults) noResults.hidden = visibleCount !== 0;
  }

  if (searchInput) searchInput.addEventListener("input", filterProducts);
  if (categoryFilter) categoryFilter.addEventListener("change", filterProducts);

  // Front-end-only contact form demonstration. It does not transmit or save user data.
  const contactForm = document.querySelector("#contact-form");
  const formStatus = document.querySelector("#form-status");

  if (contactForm && formStatus) {
    contactForm.addEventListener("submit", (event) => {
      event.preventDefault();

      if (!contactForm.checkValidity()) {
        contactForm.reportValidity();
        formStatus.textContent = "Please complete the required fields correctly.";
        formStatus.style.color = "#a43b2a";
        return;
      }

      formStatus.textContent = "Form check passed. This demo has not sent or stored your message.";
      formStatus.style.color = "#236b43";
      contactForm.reset();
    });
  }
});
