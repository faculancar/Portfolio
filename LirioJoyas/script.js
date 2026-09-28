// =========================
// PRODUCTOS
// =========================
//
// featured: true  -> aparece también en "Las más solicitadas"
// featured: false -> aparece únicamente en su colección
//
// Cada producto puede tener 3 imágenes.
//
// Para agregar una nueva joya, simplemente agregá otro objeto
// dentro de necklaces, bracelets o earrings.

const products = {
  necklaces: [
    {
      id: "collar-rose",
      name: "Collar Rose",
      price: "$ 2.200",
      type: "Collar",
      featured: true,
      images: [
        "imagenes/collares/corazon3.jpeg",
        "imagenes/collares/corazon2.jpeg",
        "imagenes/collares/corazon1.jpeg"
      ]
    },
    {
      id: "collar-lumi",
      name: "Collar Lumi",
      price: "$ 2.200",
      type: "Collar",
      featured: true,
      images: [
        "imagenes/collares/mariposaplata2.jpeg",
        "imagenes/collares/mariposaplata3.jpeg",
        "imagenes/collares/mariposaplata1.jpeg"
      ]
    },
    {
      id: "collar-angelito",
      name: "Collar Angelito",
      price: "$ 2.300",
      type: "Collar",
      featured: true,
      images: [
        "imagenes/collares/chapaangel1.jpeg",
        "imagenes/collares/chapaangel2.jpeg",
        "imagenes/collares/chapaangel3.jpeg"
      ]
    },
    {
      id: "collar-flora",
      name: "Collar Flora",
      price: "$ 1.800",
      type: "Collar",
      featured: true,
      images: [
        "imagenes/collares/flor3.jpeg",
        "imagenes/collares/flor2.jpeg",
        "imagenes/collares/flor1.jpeg"
      ]
    },
    {
      id: "collar-bee",
      name: "Collar Bee",
      price: "$ 1.800",
      type: "Collar",
      featured: false,
      images: [
        "imagenes/collares/abejita3.jpeg",
        "imagenes/collares/abejita2.jpeg",
        "imagenes/collares/abejita1.jpeg"
      ]
    },
    {
      id: "collar-nectar",
      name: "Collar Nectar",
      price: "$ 1.900",
      type: "Collar",
      featured: false,
      images: [
        "imagenes/collares/abejitacorazon3.jpeg",
        "imagenes/collares/abejitacorazon2.jpeg",
        "imagenes/collares/abejitacorazon1.jpeg"
      ]
    },
    {
      id: "collar-honey",
      name: "Collar Honey",
      price: "$ 2.450",
      type: "Collar",
      featured: false,
      images: [
        "imagenes/collares/chapaabejita1.jpeg",
        "imagenes/collares/chapaabejita2.jpeg",
        "imagenes/collares/chapaabejita3.jpeg"
      ]
    },
    {
      id: "collar-mar",
      name: "Collar Mar",
      price: "$ 1.800",
      type: "Collar",
      featured: false,
      images: [
        "imagenes/collares/chapaola1.jpeg",
        "imagenes/collares/chapaola2.jpeg",
        "imagenes/collares/chapaola3.jpeg"
      ]
    },
    {
      id: "collar-cruz",
      name: "Collar Cruz",
      price: "$ 2.300",
      type: "Collar",
      featured: false,
      images: [
        "imagenes/collares/cruz3.jpeg",
        "imagenes/collares/cruz2.jpeg",
        "imagenes/collares/cruz1.jpeg"
      ]
    },
    {
      id: "collar-estilista",
      name: "Collar Estilista",
      price: "$ 2.200",
      type: "Collar",
      featured: false,
      images: [
        "imagenes/collares/estilista3.jpeg",
        "imagenes/collares/estilista2.jpeg",
        "imagenes/collares/estilista1.jpeg"
      ]
    },
    {
      id: "collar-aurora",
      name: "Collar Aurora",
      price: "$ 2.100",
      type: "Collar",
      featured: false,
      images: [
        "imagenes/collares/gota3.jpeg",
        "imagenes/collares/gota2.jpeg",
        "imagenes/collares/gota1.jpeg"
      ]
    },
    {
      id: "collar-aira",
      name: "Collar Aira",
      price: "$ 2.200",
      type: "Collar",
      featured: false,
      images: [
        "imagenes/collares/libelula3.jpeg",
        "imagenes/collares/libelula2.jpeg",
        "imagenes/collares/libelula1.jpeg"
      ]
    },
    {
      id: "collar-bee-2",
      name: "Collar Bee 2.0",
      price: "$ 1.800",
      type: "Collar",
      featured: false,
      images: [
        "imagenes/collares/luciernaga3.jpeg",
        "imagenes/collares/luciernaga2.jpeg",
        "imagenes/collares/luciernaga1.jpeg"
      ]
    },
    {
      id: "collar-luma",
      name: "Collar Luma",
      price: "$ 2.000",
      type: "Collar",
      featured: false,
      images: [
        "imagenes/collares/mariposa3.jpeg",
        "imagenes/collares/mariposa2.jpeg",
        "imagenes/collares/mariposa1.jpeg"
      ]
    },
    {
      id: "collar-punto-luz-ovalado",
      name: "Collar Punto de Luz (Ovalado)",
      price: "$ 2.200",
      type: "Collar",
      featured: false,
      images: [
        "imagenes/collares/piedra3.jpeg",
        "imagenes/collares/piedra2.jpeg",
        "imagenes/collares/piedra1.jpeg"
      ]
    },
    {
      id: "collar-punto-de-luz-v2",
      name: "Collar Punto de Luz",
      price: "$ 2.000",
      type: "Collar",
      featured: false,
      images: [
        "imagenes/collares/puntodeluz1.jpeg",
        "imagenes/collares/puntodeluz2.jpeg",
        "imagenes/collares/puntodeluz3.jpeg"
      ]
    },
    {
      id: "collar-estetoscopio-blanco",
      name: "Collar Estetoscopio Blanco",
      price: "$ 2.200",
      type: "Collar",
      featured: false,
      images: [
        "imagenes/collares/cadenaestetoscopio1.jpeg",
        "imagenes/collares/cadenaestetoscopio2.jpeg",
        "imagenes/collares/cadenaestetoscopio3.jpeg"
      ]
    },
    {
      id: "collar-punto-luz-ovalado",
      name: "Collar Estetoscopio Azul",
      price: "$ 2.200",
      type: "Collar",
      featured: false,
      images: [
        "imagenes/collares/estetoscopiocadenav2-1.jpeg",
        "imagenes/collares/estetoscopiocadenav2-2.jpeg",
        "imagenes/collares/estetoscopiocadenav2-3.jpeg"
      ]
    },
    {
      id: "collar-corazon-zirconias",
      name: "Collar Corazon con Zirconias",
      price: "$ 2.200",
      type: "Collar",
      featured: false,
      images: [
        "imagenes/collares/corazonzirconias1.jpeg",
        "imagenes/collares/corazonzirconias2.jpeg",
        "imagenes/collares/corazonzirconias3.jpeg"
      ]
    },
    {
      id: "collar-trebol",
      name: "Collar Corazon Trébol",
      price: "$ 2.400",
      type: "Collar",
      featured: false,
      images: [
        "imagenes/collares/trebol1.jpeg",
        "imagenes/collares/trebol2.jpeg",
        "imagenes/collares/trebol3.jpeg"
      ]
    },
    {
      id: "collar-pearl",
      name: "Collar Pearl",
      price: "$ 2.200",
      type: "Collar",
      featured: false,
      images: [
        "imagenes/collares/corazonblanco1.jpeg",
        "imagenes/collares/corazonblanco2.jpeg",
        "imagenes/collares/corazonblanco3.jpeg"
      ]
    },
    {
      id: "collar-candado",
      name: "Collar Candado",
      price: "$ 1.950",
      type: "Collar",
      featured: false,
      images: [
        "imagenes/collares/candado1.jpeg",
        "imagenes/collares/candado2.jpeg",
        "imagenes/collares/candado3.jpeg"
      ]
    },
    {
      id: "collar-san-benito",
      name: "Collar San Benito",
      price: "$ 2.300",
      type: "Collar",
      featured: false,
      images: [
        "imagenes/collares/sanbenito1.jpeg",
        "imagenes/collares/sanbenito2.jpeg",
        "imagenes/collares/sanbenito3.jpeg"
      ]
    },
    {
      id: "collar-mini-corazon-zirconias",
      name: "Collar Mini Corazon con Zirconias",
      price: "$ 1.900",
      type: "Collar",
      featured: false,
      images: [
        "imagenes/collares/minicorazon1.jpeg",
        "imagenes/collares/minicorazon2.jpeg",
        "imagenes/collares/minicorazon3.jpeg"
      ]
    },
    {
      id: "collar-perlita",
      name: "Collar Perlita",
      price: "$ 1.900",
      type: "Collar",
      featured: false,
      images: [
        "imagenes/collares/perlita1.jpeg",
        "imagenes/collares/perlita2.jpeg",
        "imagenes/collares/perlita3.jpeg"
      ]
    },
    {
      id: "collar-alma",
      name: "Collar Alma",
      price: "$ 2.200",
      type: "Collar",
      featured: false,
      images: [
        "imagenes/collares/alma1.jpeg",
        "imagenes/collares/alma2.jpeg",
        "imagenes/collares/alma3.jpeg"
      ]
    },
    {
      id: "collar-iniciales",
      name: "Collar Iniciales",
      price: "$ 1.900",
      type: "Collar",
      featured: false,
      images: [
        "imagenes/collares/iniciales2.jpeg",
        "imagenes/collares/iniciales1.jpeg",
        "imagenes/collares/iniciales3.jpeg"
      ]
    },
    {
      id: "collar-corazon-doble",
      name: "Collar Dos Corazones",
      price: "$ 2.200",
      type: "Collar",
      featured: false,
      images: [
        "imagenes/collares/doblecorazon1.jpeg",
        "imagenes/collares/doblecorazon2.jpeg",
        "imagenes/collares/doblecorazon3.jpeg"
      ]
    }
  ],

  bracelets: [
    {
      id: "pulsera-01",
      name: "Pulsera Arbol de la Vida",
      price: "$ 1.600",
      type: "Pulsera",
      featured: false,
      images: [
        "imagenes/pulseras/arbolvida1.jpeg",
        "imagenes/pulseras/arbolvida2.jpeg",
        "imagenes/pulseras/arbolvida3.jpeg"
      ]
    },
    {
      id: "pulsera-02",
      name: "Pulsera Estetoscopio",
      price: "$ 1.900",
      type: "Pulsera",
      featured: false,
      images: [
        "imagenes/pulseras/estetoscopio1.jpeg",
        "imagenes/pulseras/estetoscopio2.jpeg",
        "imagenes/pulseras/estetoscopio3.jpeg"
      ]
    },
    {
      id: "pulsera-03",
      name: "Pulsera Infinito + mini rolo",
      price: "$ 1.600",
      type: "Pulsera",
      featured: false,
      images: [
        "imagenes/pulseras/infinito1.jpeg",
        "imagenes/pulseras/infinito2.jpeg",
        "imagenes/pulseras/infinito3.jpeg"
      ]
    },
    {
      id: "pulsera-04",
      name: "Pulsera Corazon con Pelotitas",
      price: "$ 1.600",
      type: "Pulsera",
      featured: false,
      images: [
        "imagenes/pulseras/corazonpelotitas1.jpeg",
        "imagenes/pulseras/corazonpelotitas2.jpeg",
        "imagenes/pulseras/corazonpelotitas3.jpeg"
      ]
    },
    {
      id: "pulsera-05",
      name: "Pulsera Ojo Turco",
      price: "$ 1.800",
      type: "Pulsera",
      featured: false,
      images: [
        "imagenes/pulseras/ojoturco1.jpeg",
        "imagenes/pulseras/ojoturco2.jpeg"
      ]
    },
    {
      id: "pulsera-06",
      name: "Pulsera Corazon",
      price: "$ 1.800",
      type: "Pulsera",
      featured: false,
      images: [
        "imagenes/pulseras/corazon1.jpeg",
        "imagenes/pulseras/corazon2.jpeg",
        "imagenes/pulseras/corazon3.jpeg"
      ]
    }

  ],

  earrings: [
    {
      id: "pendiente-01",
      name: "Caravana Mini Corazon Hueco",
      price: "$ 1.050",
      type: "Pendientes",
      featured: false,
      images: [
        "imagenes/pendientes/corazoncitoscaravana.jpeg"
      ]
    },
    {
      id: "pendiente-02",
      name: "Caravana Mini Abejitas",
      price: "$ 990",
      type: "Pendientes",
      featured: false,
      images: [
        "imagenes/pendientes/miniabejitascaravana.jpeg"
      ]
    },
    {
      id: "pendiente-03",
      name: "Caravana Punto de Luz",
      price: "$ 1.200",
      type: "Pendientes",
      featured: false,
      images: [
        "imagenes/pendientes/puntoluzcaravana.jpeg"
      ]
    },
    {
      id: "pendiente-04",
      name: "Caravanas Corazon Zirconia Blanco",
      price: "$ 1.300",
      type: "Pendientes",
      featured: false,
      images: [
        "imagenes/pendientes/corazoncitoscaravana2.jpeg"
      ]
    },
    {
      id: "pendiente-05",
      name: "Caravanas Corazon Zirconia Rosa",
      price: "$ 1.250",
      type: "Pendientes",
      featured: false,
      images: [
        "imagenes/pendientes/corazoncitoscaravana3.jpeg"
      ]
    },
    {
      id: "pendiente-06",
      name: "Caravana Perlitas",
      price: "$ 1.200",
      type: "Pendientes",
      featured: false,
      images: [
        "imagenes/pendientes/perlitascaravana.jpeg"
      ]
    },
    {
      id: "pendiente-07",
      name: "Caravanas Huellitas",
      price: "$ 1050",
      type: "Pendientes",
      featured: false,
      images: [
        "imagenes/pendientes/huellitascaravana.jpeg"
      ]
    }
  ]
};

// Lista general para carruseles, destacadas y lightbox.
const allProducts = [
  ...products.necklaces,
  ...products.bracelets,
  ...products.earrings
];

// =========================
// CREAR TARJETA
// =========================

function createProductCard(product) {
  return `
    <article class="product-card" data-product="${product.id}" data-index="0">
      <div class="product-gallery">
        <img
          src="${product.images[0]}"
          alt="${product.name}"
          class="product-gallery-main"
          data-open-lightbox
        >

        <button
          class="gallery-arrow gallery-arrow--prev"
          type="button"
          aria-label="Ver foto anterior de ${product.name}"
        >‹</button>

        <button
          class="gallery-arrow gallery-arrow--next"
          type="button"
          aria-label="Ver foto siguiente de ${product.name}"
        >›</button>

        <span class="gallery-count">
          1 / ${product.images.length}
        </span>
      </div>

      <div class="product-info">
        <div class="product-meta">
          <div>
            <h3>${product.name}</h3>
            <p>${product.type}</p>
          </div>

          <span class="product-price">
            ${product.price}
          </span>
        </div>
      </div>
    </article>
  `;
}

// =========================
// RENDER DE PRODUCTOS
// =========================

const featuredGrid = document.querySelector("#featured-grid");
const necklaceGrid = document.querySelector("#necklace-grid");
const braceletGrid = document.querySelector("#bracelet-grid");
const earringGrid = document.querySelector("#earring-grid");

if (featuredGrid) {
  featuredGrid.innerHTML = allProducts
    .filter(product => product.featured)
    .slice(0, 4)
    .map(createProductCard)
    .join("");
}

if (necklaceGrid) {
  necklaceGrid.innerHTML = products.necklaces
    .map(createProductCard)
    .join("");
}

if (braceletGrid) {
  braceletGrid.innerHTML = products.bracelets
    .map(createProductCard)
    .join("");
}

if (earringGrid) {
  earringGrid.innerHTML = products.earrings
    .map(createProductCard)
    .join("");
}

// =========================
// CARRUSEL DE PRODUCTOS
// =========================

function changeCardImage(card, direction) {
  const productId = card.dataset.product;
  const product = allProducts.find(item => item.id === productId);

  if (!product) return;

  let index = Number(card.dataset.index);

  if (direction === "next") {
    index = (index + 1) % product.images.length;
  } else {
    index = (index - 1 + product.images.length) % product.images.length;
  }

  card.dataset.index = index;

  const image = card.querySelector(".product-gallery-main");
  const count = card.querySelector(".gallery-count");

  image.src = product.images[index];
  image.alt = `${product.name} - foto ${index + 1}`;
  count.textContent = `${index + 1} / ${product.images.length}`;
}

document.addEventListener("click", event => {
  const arrow = event.target.closest(".gallery-arrow");

  if (!arrow) return;

  event.preventDefault();
  event.stopPropagation();

  const card = arrow.closest(".product-card");

  if (!card) return;

  const direction = arrow.classList.contains("gallery-arrow--next")
    ? "next"
    : "prev";

  changeCardImage(card, direction);
});

// =========================
// LIGHTBOX
// =========================

const lightbox = document.querySelector("#lightbox");
const lightboxImage = lightbox?.querySelector(".lightbox-image");
const lightboxCount = lightbox?.querySelector(".lightbox-count");

let lightboxProduct = null;
let lightboxIndex = 0;

function updateLightbox() {
  if (!lightboxProduct || !lightboxImage || !lightboxCount) return;

  lightboxImage.src = lightboxProduct.images[lightboxIndex];
  lightboxImage.alt = `${lightboxProduct.name} - foto ${lightboxIndex + 1}`;
  lightboxCount.textContent = `${lightboxIndex + 1} / ${lightboxProduct.images.length}`;
}

function openLightbox(product, index = 0) {
  if (!lightbox) return;

  lightboxProduct = product;
  lightboxIndex = index;

  updateLightbox();

  lightbox.classList.add("is-open");
  lightbox.setAttribute("aria-hidden", "false");
  document.body.classList.add("lightbox-open");
}

function closeLightbox() {
  if (!lightbox) return;

  lightbox.classList.remove("is-open");
  lightbox.setAttribute("aria-hidden", "true");
  document.body.classList.remove("lightbox-open");

  lightboxProduct = null;
  lightboxIndex = 0;
}

function nextLightboxImage() {
  if (!lightboxProduct) return;

  lightboxIndex =
    (lightboxIndex + 1) % lightboxProduct.images.length;

  updateLightbox();
}

function previousLightboxImage() {
  if (!lightboxProduct) return;

  lightboxIndex =
    (lightboxIndex - 1 + lightboxProduct.images.length)
    % lightboxProduct.images.length;

  updateLightbox();
}

// Abrir lightbox al tocar cualquier producto.

document.addEventListener("click", event => {
  const image = event.target.closest("[data-open-lightbox]");

  if (!image) return;

  const card = image.closest(".product-card");

  if (!card) return;

  const productId = card.dataset.product;
  const product = allProducts.find(item => item.id === productId);

  if (!product) return;

  const index = Number(card.dataset.index);

  openLightbox(product, index);
});

// Cerrar lightbox.

lightbox
  ?.querySelector(".lightbox-close")
  ?.addEventListener("click", closeLightbox);

// Foto siguiente.

lightbox
  ?.querySelector(".lightbox-arrow--next")
  ?.addEventListener("click", event => {
    event.stopPropagation();
    nextLightboxImage();
  });

// Foto anterior.

lightbox
  ?.querySelector(".lightbox-arrow--prev")
  ?.addEventListener("click", event => {
    event.stopPropagation();
    previousLightboxImage();
  });

// Cerrar tocando el fondo.

lightbox?.addEventListener("click", event => {
  if (event.target === lightbox) {
    closeLightbox();
  }
});

// =========================
// MENÚ MOBILE
// =========================

const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector("#main-nav");

function closeMenu() {
  if (!menuButton || !nav) return;

  menuButton.setAttribute("aria-expanded", "false");

  const text = menuButton.querySelector(".sr-only");

  if (text) {
    text.textContent = "Abrir menú";
  }

  nav.classList.remove("is-open");
  document.body.classList.remove("menu-open");
}

if (menuButton && nav) {
  menuButton.addEventListener("click", () => {
    const opening =
      menuButton.getAttribute("aria-expanded") === "false";

    menuButton.setAttribute(
      "aria-expanded",
      String(opening)
    );

    const text = menuButton.querySelector(".sr-only");

    if (text) {
      text.textContent =
        opening ? "Cerrar menú" : "Abrir menú";
    }

    nav.classList.toggle("is-open", opening);
    document.body.classList.toggle("menu-open", opening);
  });

  nav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", closeMenu);
  });
}

// =========================
// TECLADO
// =========================

document.addEventListener("keydown", event => {
  if (event.key === "Escape") {
    closeMenu();
    closeLightbox();
  }

  if (!lightbox?.classList.contains("is-open")) return;

  if (event.key === "ArrowRight") {
    nextLightboxImage();
  }

  if (event.key === "ArrowLeft") {
    previousLightboxImage();
  }
});

// =========================
// AÑO FOOTER
// =========================

const currentYear = document.querySelector("#current-year");

if (currentYear) {
  currentYear.textContent = new Date().getFullYear();
}