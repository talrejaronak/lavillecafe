// ============================================================
// La Ville Cafe — menu site logic
// Menu data lives in menu-data.js — edit dishes/categories there.
// ============================================================

const cart = {}; // { itemId: qty }

const placeholderIcon = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9h12v5a5 5 0 0 1-5 5h-2a5 5 0 0 1-5-5V9z"/><path d="M18 10h1.5a2.5 2.5 0 0 1 0 5H18"/><path d="M8 3c0 1-1 1-1 2s1 1 1 2"/><path d="M12 3c0 1-1 1-1 2s1 1 1 2"/></svg>`;

function formatRupee(n){
  return "₹" + n.toLocaleString("en-IN");
}

// ---------- RENDER CATEGORY NAV ----------
function renderCategoryNav(){
  const nav = document.getElementById("categoryNav");
  nav.innerHTML = CATEGORIES.map((c, i) =>
    `<button class="cat-pill${i===0 ? " active" : ""}" data-cat="${c.key}">${c.label}</button>`
  ).join("");

  nav.querySelectorAll(".cat-pill").forEach(btn => {
    btn.addEventListener("click", () => {
      const target = document.getElementById("section-" + btn.dataset.cat);
      if(target){
        target.scrollIntoView({behavior:"smooth", block:"start"});
      }
    });
  });
}

// ---------- CARD TEMPLATE ----------
function cardHTML(item){
  // Image handling: the icon fallback is ALWAYS rendered underneath.
  // If item.image is set, an <img> is layered on top; if it fails to load,
  // onerror hides the <img> and the icon fallback shows through underneath —
  // so a broken image can never appear, only the icon placeholder.
  const imgTag = item.image
    ? `<img src="${item.image}" alt="${item.name}" loading="lazy" onerror="this.style.display='none';">`
    : "";
  const qty = cart[item.id] || 0;
  return `
    <div class="menu-card" data-id="${item.id}" data-name="${item.name.toLowerCase()}">
      <div class="card-media">
        <div class="media-fallback">${placeholderIcon}</div>
        ${imgTag}
        ${item.popular ? '<span class="badge-popular">Popular</span>' : ''}
        <span class="veg-indicator${item.veg ? '' : ' non-veg'}"></span>
      </div>
      <div class="card-body">
        <div class="card-name">${item.name}</div>
        <div class="card-desc">${item.description}</div>
        <div class="card-bottom">
          <span class="card-price">${formatRupee(item.price)}</span>
          <div class="card-action">${qty > 0 ? qtyControlHTML(item.id, qty) : addBtnHTML(item.id)}</div>
        </div>
      </div>
    </div>`;
}

function addBtnHTML(id){
  return `<button class="add-btn" data-add="${id}">Add</button>`;
}
function qtyControlHTML(id, qty){
  return `<div class="qty-control">
    <button data-dec="${id}">−</button>
    <span>${qty}</span>
    <button data-inc="${id}">+</button>
  </div>`;
}

// ---------- RENDER MENU SECTIONS ----------
function renderMenu(){
  const root = document.getElementById("menuRoot");
  root.innerHTML = CATEGORIES.map(cat => {
    const items = MENU_ITEMS.filter(it => it.category === cat.key);
    return `
      <section class="menu-section" id="section-${cat.key}">
        <h2 class="section-title">${cat.label}</h2>
        <div class="menu-grid">
          ${items.map(cardHTML).join("")}
        </div>
      </section>`;
  }).join("");

  const popular = MENU_ITEMS.filter(it => it.popular);
  document.getElementById("popularGrid").innerHTML = popular.map(cardHTML).join("");
  document.getElementById("popular-section").style.display = popular.length ? "" : "none";
}

// ---------- CART ACTIONS ----------
function findItem(id){
  return MENU_ITEMS.find(it => it.id === id);
}

function updateCardAction(id){
  document.querySelectorAll(`[data-id="${id}"] .card-action`).forEach(el => {
    const qty = cart[id] || 0;
    el.innerHTML = qty > 0 ? qtyControlHTML(id, qty) : addBtnHTML(id);
  });
}

function addToCart(id){
  cart[id] = (cart[id] || 0) + 1;
  updateCardAction(id);
  renderCartDrawer();
  updateCartFab();
}
function decFromCart(id){
  if(!cart[id]) return;
  cart[id] -= 1;
  if(cart[id] <= 0) delete cart[id];
  updateCardAction(id);
  renderCartDrawer();
  updateCartFab();
}
function incInCart(id){ addToCart(id); }

function cartTotal(){
  return Object.entries(cart).reduce((sum, [id, qty]) => {
    const item = findItem(id);
    return sum + (item ? item.price * qty : 0);
  }, 0);
}
function cartCount(){
  return Object.values(cart).reduce((a,b) => a+b, 0);
}

function updateCartFab(){
  const fab = document.getElementById("cartFab");
  const count = cartCount();
  document.getElementById("cartFabCount").textContent = count;
  document.getElementById("cartFabTotal").textContent = formatRupee(cartTotal());
  if(count > 0){
    fab.hidden = false;
    requestAnimationFrame(() => fab.classList.add("visible"));
  } else {
    fab.classList.remove("visible");
  }
}

function renderCartDrawer(){
  const itemsEl = document.getElementById("cartItems");
  const emptyEl = document.getElementById("cartEmpty");
  const footerEl = document.getElementById("cartFooter");
  const entries = Object.entries(cart);

  if(entries.length === 0){
    itemsEl.innerHTML = "";
    emptyEl.style.display = "block";
    footerEl.hidden = true;
    return;
  }
  emptyEl.style.display = "none";
  footerEl.hidden = false;

  itemsEl.innerHTML = entries.map(([id, qty]) => {
    const item = findItem(id);
    if(!item) return "";
    return `
      <div class="cart-row">
        <div>
          <div class="cart-row-name">${item.name}</div>
          <div class="cart-row-price">${formatRupee(item.price)} × ${qty}</div>
        </div>
        <div class="qty-control">
          <button data-dec="${id}">−</button>
          <span>${qty}</span>
          <button data-inc="${id}">+</button>
        </div>
      </div>`;
  }).join("");

  document.getElementById("cartTotalAmount").textContent = formatRupee(cartTotal());
}

// ---------- CART DRAWER OPEN/CLOSE ----------
function openCart(){
  document.getElementById("cartOverlay").hidden = false;
  document.getElementById("cartDrawer").classList.add("open");
}
function closeCart(){
  document.getElementById("cartOverlay").hidden = true;
  document.getElementById("cartDrawer").classList.remove("open");
}

// ---------- WHATSAPP ORDER ----------
function buildWhatsAppMessage(){
  const lines = ["Hi La Ville Cafe, I'd like to order:"];
  Object.entries(cart).forEach(([id, qty]) => {
    const item = findItem(id);
    if(item) lines.push(`- ${item.name} x${qty} (${formatRupee(item.price * qty)})`);
  });
  lines.push(`Total: ${formatRupee(cartTotal())}`);
  return encodeURIComponent(lines.join("\n"));
}

// ---------- SEARCH ----------
function handleSearch(query){
  const q = query.trim().toLowerCase();
  const cards = document.querySelectorAll(".menu-card");
  let anyVisible = false;

  cards.forEach(card => {
    const match = !q || card.dataset.name.includes(q);
    card.style.display = match ? "" : "none";
    if(match) anyVisible = true;
  });

  document.querySelectorAll(".menu-section, .popular-section").forEach(section => {
    const visibleCards = section.querySelectorAll('.menu-card:not([style*="display: none"])');
    section.style.display = (q && visibleCards.length === 0) ? "none" : "";
  });

  document.getElementById("categoryNav").style.display = q ? "none" : "";
  document.getElementById("noResults").hidden = !q || anyVisible;
}

// ---------- SCROLL REVEAL ----------
function setupRevealObserver(){
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add("revealed");
        observer.unobserve(entry.target);
      }
    });
  }, {threshold:0.12});

  document.querySelectorAll(".menu-card").forEach(card => observer.observe(card));
}

// ---------- ACTIVE CATEGORY ON SCROLL ----------
function setupActiveCategoryTracking(){
  const sections = CATEGORIES.map(c => document.getElementById("section-" + c.key)).filter(Boolean);
  const pills = () => document.querySelectorAll(".cat-pill");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        const key = entry.target.id.replace("section-", "");
        pills().forEach(p => p.classList.toggle("active", p.dataset.cat === key));
      }
    });
  }, {rootMargin:"-30% 0px -60% 0px"});

  sections.forEach(s => observer.observe(s));
}

// ---------- BACK TO TOP ----------
function setupBackToTop(){
  const btn = document.getElementById("backToTop");
  window.addEventListener("scroll", () => {
    btn.classList.toggle("visible", window.scrollY > 500);
  });
  btn.addEventListener("click", () => window.scrollTo({top:0, behavior:"smooth"}));
}

// ---------- EVENT DELEGATION ----------
function setupDelegatedEvents(){
  document.addEventListener("click", (e) => {
    const addId = e.target.closest("[data-add]")?.dataset.add;
    const incId = e.target.closest("[data-inc]")?.dataset.inc;
    const decId = e.target.closest("[data-dec]")?.dataset.dec;

    if(addId) addToCart(addId);
    if(incId) incInCart(incId);
    if(decId) decFromCart(decId);
  });
}

// ---------- INIT ----------
document.addEventListener("DOMContentLoaded", () => {
  renderCategoryNav();
  renderMenu();
  setupRevealObserver();
  setupActiveCategoryTracking();
  setupBackToTop();
  setupDelegatedEvents();
  updateCartFab();

  document.getElementById("searchInput").addEventListener("input", (e) => handleSearch(e.target.value));

  document.getElementById("cartFab").addEventListener("click", openCart);
  document.getElementById("cartClose").addEventListener("click", closeCart);
  document.getElementById("cartOverlay").addEventListener("click", closeCart);

  document.getElementById("whatsappOrder").addEventListener("click", () => {
    const msg = buildWhatsAppMessage();
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, "_blank");
  });

  // Hide loader once everything is rendered
  setTimeout(() => {
    document.getElementById("loader").classList.add("hidden");
  }, 500);
});
