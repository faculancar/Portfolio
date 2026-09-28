"use strict";

/* =========================================
   ELEMENTOS PRINCIPALES
========================================= */

const body = document.body;
const header = document.querySelector(".header");
const menuButton = document.querySelector(".menu-button");
const mobileMenu = document.querySelector(".mobile-menu");
const mobileMenuLinks = document.querySelectorAll(".mobile-menu a");

const scrollProgressBar = document.querySelector(
    ".scroll-progress__bar"
);

const revealElements = document.querySelectorAll(
    ".reveal, .reveal-image"
);

const parallaxImages = document.querySelectorAll(
    ".parallax-image"
);

const projectFilters = document.querySelectorAll(
    ".project-filter"
);

const projectCards = document.querySelectorAll(
    ".project-card"
);

const counters = document.querySelectorAll(
    "[data-counter]"
);

const contactForm = document.querySelector(
    "#contact-form"
);

const currentYearElement = document.querySelector(
    "#current-year"
);

const qualityModal = document.querySelector(
    "#quality-modal"
);

const openQualityModalButton = document.querySelector(
    "#open-quality-modal"
);

const closeQualityModalButtons = document.querySelectorAll(
    "[data-close-quality-modal]"
);


/* =========================================
   UTILIDADES
========================================= */

const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
).matches;

function debounce(callback, delay = 150) {
    let timeoutId;

    return (...args) => {
        clearTimeout(timeoutId);

        timeoutId = setTimeout(() => {
            callback(...args);
        }, delay);
    };
}


/* =========================================
   HEADER AL HACER SCROLL
========================================= */

function updateHeader() {
    if (!header) {
        return;
    }

    const shouldAddBackground = window.scrollY > 40;

    header.classList.toggle(
        "is-scrolled",
        shouldAddBackground
    );
}


/* =========================================
   BARRA DE PROGRESO
========================================= */

function updateScrollProgress() {
    if (!scrollProgressBar) {
        return;
    }

    const documentHeight =
        document.documentElement.scrollHeight -
        window.innerHeight;

    const scrollPercentage =
        documentHeight > 0
            ? (window.scrollY / documentHeight) * 100
            : 0;

    scrollProgressBar.style.width =
        `${Math.min(scrollPercentage, 100)}%`;
}


/* =========================================
   MENÚ MÓVIL
========================================= */

function openMobileMenu() {
    if (!menuButton || !mobileMenu) {
        return;
    }

    menuButton.classList.add("is-active");
    mobileMenu.classList.add("is-open");
    body.classList.add("menu-open");

    menuButton.setAttribute(
        "aria-expanded",
        "true"
    );

    menuButton.setAttribute(
        "aria-label",
        "Cerrar menú"
    );
}

function closeMobileMenu() {
    if (!menuButton || !mobileMenu) {
        return;
    }

    menuButton.classList.remove("is-active");
    mobileMenu.classList.remove("is-open");
    body.classList.remove("menu-open");

    menuButton.setAttribute(
        "aria-expanded",
        "false"
    );

    menuButton.setAttribute(
        "aria-label",
        "Abrir menú"
    );
}

function toggleMobileMenu() {
    if (!mobileMenu) {
        return;
    }

    const isOpen =
        mobileMenu.classList.contains("is-open");

    if (isOpen) {
        closeMobileMenu();
    } else {
        openMobileMenu();
    }
}

if (menuButton) {
    menuButton.addEventListener(
        "click",
        toggleMobileMenu
    );
}

mobileMenuLinks.forEach((link) => {
    link.addEventListener(
        "click",
        closeMobileMenu
    );
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        closeMobileMenu();
    }
});

window.addEventListener(
    "resize",
    debounce(() => {
        if (window.innerWidth > 1024) {
            closeMobileMenu();
        }
    })
);


/* =========================================
   ANIMACIONES DE APARICIÓN
========================================= */

function initializeRevealAnimations() {
    if (!revealElements.length) {
        return;
    }

    if (
        prefersReducedMotion ||
        !("IntersectionObserver" in window)
    ) {
        revealElements.forEach((element) => {
            element.classList.add("is-visible");
        });

        return;
    }

    const revealObserver = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) {
                    return;
                }

                entry.target.classList.add(
                    "is-visible"
                );

                observer.unobserve(entry.target);
            });
        },
        {
            threshold: 0.14,
            rootMargin: "0px 0px -40px 0px"
        }
    );

    revealElements.forEach((element, index) => {
        const delay =
            Number(element.dataset.delay) ||
            (index % 4) * 80;

        element.style.transitionDelay =
            `${delay}ms`;

        revealObserver.observe(element);
    });
}


/* =========================================
   EFECTO PARALLAX
========================================= */

let parallaxTicking = false;

function updateParallax() {
    if (
        prefersReducedMotion ||
        !parallaxImages.length
    ) {
        return;
    }

    parallaxImages.forEach((image) => {
        const parent =
            image.parentElement;

        if (!parent) {
            return;
        }

        const rect =
            parent.getBoundingClientRect();

        const isVisible =
            rect.bottom > 0 &&
            rect.top < window.innerHeight;

        if (!isVisible) {
            return;
        }

        const elementCenter =
            rect.top + rect.height / 2;

        const viewportCenter =
            window.innerHeight / 2;

        const distanceFromCenter =
            elementCenter - viewportCenter;

        const movement =
            distanceFromCenter * -0.06;

        image.style.transform =
            `translate3d(0, ${movement}px, 0) scale(1.04)`;
    });

    parallaxTicking = false;
}

function requestParallaxUpdate() {
    if (parallaxTicking) {
        return;
    }

    parallaxTicking = true;

    window.requestAnimationFrame(
        updateParallax
    );
}


/* =========================================
   FILTROS DE PROYECTOS
========================================= */

function filterProjects(selectedFilter) {
    projectCards.forEach((card) => {
        const category =
            card.dataset.category;

        const shouldShow =
            selectedFilter === "todos" ||
            category === selectedFilter;

        if (shouldShow) {
            card.classList.remove("is-hidden");

            requestAnimationFrame(() => {
                card.style.opacity = "1";
                card.style.transform =
                    "translateY(0)";
            });
        } else {
            card.style.opacity = "0";
            card.style.transform =
                "translateY(20px)";

            window.setTimeout(() => {
                card.classList.add("is-hidden");
            }, 250);
        }
    });
}

projectFilters.forEach((button) => {
    button.addEventListener("click", () => {
        projectFilters.forEach((filter) => {
            filter.classList.remove(
                "is-active"
            );
        });

        button.classList.add("is-active");

        const selectedFilter =
            button.dataset.filter || "todos";

        filterProjects(selectedFilter);
    });
});


/* =========================================
   CONTADORES ANIMADOS
========================================= */

function animateCounter(element) {
    const target =
        Number(element.dataset.counter);

    if (
        Number.isNaN(target) ||
        target < 0
    ) {
        return;
    }

    if (
        prefersReducedMotion ||
        target === 0
    ) {
        element.textContent =
            target.toLocaleString("es-UY");

        return;
    }

    const duration = 1600;
    const startTime = performance.now();

    function updateCounter(currentTime) {
        const elapsed =
            currentTime - startTime;

        const progress =
            Math.min(elapsed / duration, 1);

        const easedProgress =
            1 - Math.pow(1 - progress, 3);

        const currentValue =
            Math.floor(target * easedProgress);

        element.textContent =
            currentValue.toLocaleString(
                "es-UY"
            );

        if (progress < 1) {
            window.requestAnimationFrame(
                updateCounter
            );
        } else {
            element.textContent =
                target.toLocaleString(
                    "es-UY"
                );
        }
    }

    window.requestAnimationFrame(
        updateCounter
    );
}

function initializeCounters() {
    if (!counters.length) {
        return;
    }

    if (!("IntersectionObserver" in window)) {
        counters.forEach(animateCounter);
        return;
    }

    const counterObserver =
        new IntersectionObserver(
            (entries, observer) => {
                entries.forEach((entry) => {
                    if (!entry.isIntersecting) {
                        return;
                    }

                    animateCounter(entry.target);

                    observer.unobserve(
                        entry.target
                    );
                });
            },
            {
                threshold: 0.55
            }
        );

    counters.forEach((counter) => {
        counterObserver.observe(counter);
    });
}


/* =========================================
   NAVEGACIÓN ACTIVA
========================================= */

function initializeActiveNavigation() {
    const sections =
        document.querySelectorAll(
            "main section[id]"
        );

    const navigationLinks =
        document.querySelectorAll(
            ".navigation__link"
        );

    if (
        !sections.length ||
        !navigationLinks.length ||
        !("IntersectionObserver" in window)
    ) {
        return;
    }

    const sectionObserver =
        new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (!entry.isIntersecting) {
                        return;
                    }

                    const currentSectionId =
                        entry.target.id;

                    navigationLinks.forEach(
                        (link) => {
                            const href =
                                link.getAttribute(
                                    "href"
                                );

                            link.classList.toggle(
                                "is-active",
                                href ===
                                    `#${currentSectionId}`
                            );
                        }
                    );
                });
            },
            {
                rootMargin:
                    "-40% 0px -50% 0px",
                threshold: 0
            }
        );

    sections.forEach((section) => {
        sectionObserver.observe(section);
    });
}


/* =========================================
   FORMULARIO
========================================= */

function showFieldError(field, message) {
    field.classList.add("is-invalid");

    const formGroup =
        field.closest(".form-group");

    const errorElement =
        formGroup?.querySelector(
            ".form-error"
        );

    if (errorElement) {
        errorElement.textContent = message;
    }
}

function clearFieldError(field) {
    field.classList.remove("is-invalid");

    const formGroup =
        field.closest(".form-group");

    const errorElement =
        formGroup?.querySelector(
            ".form-error"
        );

    if (errorElement) {
        errorElement.textContent = "";
    }
}

function validateEmail(email) {
    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return emailPattern.test(email);
}

function validatePhone(phone) {
    const normalizedPhone =
        phone.replace(/\D/g, "");

    return normalizedPhone.length >= 8;
}

function validateForm(form) {
    const nameField =
        form.elements.name;

    const emailField =
        form.elements.email;

    const phoneField =
        form.elements.phone;

    const projectTypeField =
        form.elements.projectType;

    const messageField =
        form.elements.message;

    let isValid = true;

    [
        nameField,
        emailField,
        phoneField,
        projectTypeField,
        messageField
    ].forEach((field) => {
        if (field) {
            clearFieldError(field);
        }
    });

    if (
        !nameField.value.trim() ||
        nameField.value.trim().length < 2
    ) {
        showFieldError(
            nameField,
            "Ingresá tu nombre completo."
        );

        isValid = false;
    }

    if (!validateEmail(emailField.value.trim())) {
        showFieldError(
            emailField,
            "Ingresá un correo válido."
        );

        isValid = false;
    }

    if (!validatePhone(phoneField.value.trim())) {
        showFieldError(
            phoneField,
            "Ingresá un teléfono válido."
        );

        isValid = false;
    }

    if (!projectTypeField.value) {
        showFieldError(
            projectTypeField,
            "Seleccioná un tipo de proyecto."
        );

        isValid = false;
    }

    if (
        !messageField.value.trim() ||
        messageField.value.trim().length < 15
    ) {
        showFieldError(
            messageField,
            "Contanos un poco más sobre el proyecto."
        );

        isValid = false;
    }

    return isValid;
}

function buildWhatsAppMessage(form) {
    const formData = new FormData(form);

    const name =
        formData.get("name")?.trim() || "";

    const email =
        formData.get("email")?.trim() || "";

    const phone =
        formData.get("phone")?.trim() || "";

    const projectType =
        formData.get("projectType") || "";

    const message =
        formData.get("message")?.trim() || "";

    const projectTypeSelect =
        form.querySelector(
            "#project-type"
        );

    const projectTypeText =
        projectTypeSelect?.selectedOptions[0]
            ?.textContent.trim() ||
        projectType;

    return [
        "Hola NivelGroup, quisiera realizar una consulta.",
        "",
        `Nombre: ${name}`,
        `Correo: ${email}`,
        `Teléfono: ${phone}`,
        `Tipo de proyecto: ${projectTypeText}`,
        "",
        "Descripción:",
        message
    ].join("\n");
}

if (contactForm) {
    const formFields =
        contactForm.querySelectorAll(
            "input, select, textarea"
        );

    formFields.forEach((field) => {
        field.addEventListener("input", () => {
            clearFieldError(field);
        });

        field.addEventListener("change", () => {
            clearFieldError(field);
        });
    });

    contactForm.addEventListener(
        "submit",
        (event) => {
            event.preventDefault();

            const formStatus =
                contactForm.querySelector(
                    ".form-status"
                );

            if (formStatus) {
                formStatus.textContent = "";
            }

            const isValid =
                validateForm(contactForm);

            if (!isValid) {
                const firstInvalidField =
                    contactForm.querySelector(
                        ".is-invalid"
                    );

                firstInvalidField?.focus();

                if (formStatus) {
                    formStatus.textContent =
                        "Revisá los campos marcados.";
                }

                return;
            }

            const whatsappMessage =
                buildWhatsAppMessage(
                    contactForm
                );

            const whatsappNumber =
                "59891490012";

            const whatsappUrl =
                `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                    whatsappMessage
                )}`;

            if (formStatus) {
                formStatus.textContent =
                    "Abriendo WhatsApp para enviar tu consulta.";
            }

            window.open(
                whatsappUrl,
                "_blank",
                "noopener,noreferrer"
            );
        }
    );
}

/* =========================================
   POLÍTICA DE CALIDAD
========================================= */

let lastFocusedElement = null;

function openQualityModal() {
    if (!qualityModal) {
        return;
    }

    lastFocusedElement = document.activeElement;

    qualityModal.classList.add("is-open");
    body.classList.add("quality-modal-open");

    qualityModal.setAttribute(
        "aria-hidden",
        "false"
    );

    const closeButton = qualityModal.querySelector(
        ".quality-modal__close"
    );

    window.setTimeout(() => {
        closeButton?.focus();
    }, 100);
}

function closeQualityModal() {
    if (!qualityModal) {
        return;
    }

    qualityModal.classList.remove("is-open");
    body.classList.remove("quality-modal-open");

    qualityModal.setAttribute(
        "aria-hidden",
        "true"
    );

    lastFocusedElement?.focus();
}

if (openQualityModalButton) {
    openQualityModalButton.addEventListener(
        "click",
        openQualityModal
    );
}

closeQualityModalButtons.forEach((button) => {
    button.addEventListener(
        "click",
        closeQualityModal
    );
});

document.addEventListener("keydown", (event) => {
    if (
        event.key === "Escape" &&
        qualityModal?.classList.contains("is-open")
    ) {
        closeQualityModal();
    }
});


/* =========================================
   AÑO AUTOMÁTICO
========================================= */

if (currentYearElement) {
    currentYearElement.textContent =
        new Date().getFullYear();
}


/* =========================================
   SCROLL SUAVE CON COMPENSACIÓN DEL HEADER
========================================= */

document.querySelectorAll(
    'a[href^="#"]'
).forEach((link) => {
    link.addEventListener("click", (event) => {
        const targetId =
            link.getAttribute("href");

        if (
            !targetId ||
            targetId === "#"
        ) {
            return;
        }

        const targetElement =
            document.querySelector(targetId);

        if (!targetElement) {
            return;
        }

        event.preventDefault();

        const headerHeight =
            header?.offsetHeight || 0;

        const targetPosition =
            targetElement.getBoundingClientRect()
                .top +
            window.scrollY -
            headerHeight;

        window.scrollTo({
            top: targetPosition,
            behavior: prefersReducedMotion
                ? "auto"
                : "smooth"
        });
    });
});


/* =========================================
   EVENTOS DE SCROLL
========================================= */

function handleScroll() {
    updateHeader();
    updateScrollProgress();
    requestParallaxUpdate();
}

window.addEventListener(
    "scroll",
    handleScroll,
    {
        passive: true
    }
);


/* =========================================
   INICIALIZACIÓN
========================================= */

function initializePage() {
    updateHeader();
    updateScrollProgress();

    initializeRevealAnimations();
    initializeCounters();
    initializeActiveNavigation();

    requestParallaxUpdate();

    window.setTimeout(() => {
    openQualityModal();
    }, 600);
}

if (document.readyState === "loading") {
    document.addEventListener(
        "DOMContentLoaded",
        initializePage
    );
} else {
    initializePage();
}