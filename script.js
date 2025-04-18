// Check if grid container exists before trying to use it
const gridContainer = document.getElementById("grid-container")

if (gridContainer) {
  // Array posisi objek (bisa disesuaikan berdasarkan desain pada content.png)
  const objectPositions = [
    { col: 2, row: 1, colSpan: 2, rowSpan: 2 },
    { col: 5, row: 1, colSpan: 2, rowSpan: 2 },
    { col: 8, row: 1, colSpan: 2, rowSpan: 2 },
    { col: 3, row: 4, colSpan: 3, rowSpan: 2 },
    { col: 7, row: 4, colSpan: 3, rowSpan: 2 },
    { col: 5, row: 7, colSpan: 3, rowSpan: 2 },
  ]

  // Tambahkan objek ke dalam grid
  objectPositions.forEach((pos, index) => {
    const obj = document.createElement("div")
    obj.classList.add("object")
    obj.textContent = `Objek ${index + 1}`
    obj.style.gridColumn = `${pos.col} / span ${pos.colSpan}`
    obj.style.gridRow = `${pos.row} / span ${pos.rowSpan}`
    gridContainer.appendChild(obj)
  })
}

document.addEventListener("DOMContentLoaded", () => {
    // Mobile menu toggle for animation
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    if (menuToggle && navLinks) {
        menuToggle.addEventListener("click", () => {
            navLinks.classList.toggle("active");
            const bars = document.querySelectorAll(".bar");
            bars.forEach((bar) => {
                bar.classList.toggle("change");
            });
        });
    }

    // Add smooth scrolling for all links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();

            const targetId = this.getAttribute("href");
            if (targetId === "#") return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: "smooth",
                });
            }
        });
    });
});


  // Form submission
  const form = document.getElementById("signup-form")

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault()

      const email = form.querySelector('input[type="email"]').value

      // Here you would typically send the data to a server
      console.log("Form submitted:", { email })

      // Show success message
      alert("Terima kasih telah berlangganan!")
      form.reset()
    })
  }

  // Add smooth scrolling for all links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()

      const targetId = this.getAttribute("href")
      if (targetId === "#") return

      const targetElement = document.querySelector(targetId)
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
        })
      }
    })
  })

  // Responsive adjustments for shapes
  function adjustShapesForScreenSize() {
    const windowWidth = window.innerWidth
    const heroContainer = document.querySelector(".hero-container")
    const heroContent = document.querySelector(".hero-content")
    const contentPlaceholder = document.querySelector(".content-placeholder")

    // Get all shapes
    const shapes = document.querySelectorAll(
      ".circle-outline-left, .circle-outline-right, .square-top-right, .triangle-outline-right1, " +
        ".triangle-outline-right2, .black-triangle-left, .triangle-outline-left1, " +
        ".triangle-outline-left2, .square-bottom-left, .circle-solid-top-left, .circle-solid-top-right",
    )

    // Adjust opacity based on screen size
    if (windowWidth < 576) {
      shapes.forEach((shape) => {
        shape.style.opacity = "0.7"
        // Only scale the size, not the position
        shape.style.transform = "scale(0.6)"
      })
    } else if (windowWidth < 768) {
      shapes.forEach((shape) => {
        shape.style.opacity = "0.8"
        shape.style.transform = "scale(0.7)"
      })
    } else if (windowWidth < 992) {
      shapes.forEach((shape) => {
        shape.style.opacity = "0.9"
        shape.style.transform = "scale(0.8)"
      })
    } else {
      shapes.forEach((shape) => {
        shape.style.opacity = "1"
        shape.style.transform = "scale(1)"
      })
    }

    // Adjust hero container height
    if (heroContainer) {
      if (windowWidth < 576) {
        heroContainer.style.minHeight = "400px"
      } else if (windowWidth < 768) {
        heroContainer.style.minHeight = "500px"
      } else {
        heroContainer.style.minHeight = "600px"
      }
    }

    // Ensure content is always visible by adjusting z-index
    if (heroContent) {
      heroContent.style.zIndex = "5"
    }
    if (contentPlaceholder) {
      contentPlaceholder.style.zIndex = "5"
    }
  }

  // Handle feature split section responsiveness
  function adjustFeatureSplit() {
    const featureSplit = document.querySelector(".feature-split")
    const windowWidth = window.innerWidth

    if (featureSplit) {
      if (windowWidth < 768) {
        // On small screens, add a hint about horizontal scrolling
        if (!document.getElementById("scroll-hint")) {
          const scrollHint = document.createElement("div")
          scrollHint.id = "scroll-hint"
          scrollHint.style.textAlign = "center"
          scrollHint.style.padding = "10px"
          scrollHint.style.fontSize = "0.8rem"
          scrollHint.style.color = "#666"
          scrollHint.textContent = "Scroll horizontally to view more →"
          featureSplit.parentNode.insertBefore(scrollHint, featureSplit)
        }
      } else {
        // Remove hint on larger screens
        const scrollHint = document.getElementById("scroll-hint")
        if (scrollHint) {
          scrollHint.remove()
        }
      }
    }
  }

  // Run on load and resize
  window.addEventListener("resize", adjustShapesForScreenSize)
  window.addEventListener("resize", adjustFeatureSplit)
  adjustShapesForScreenSize()
  adjustFeatureSplit()

  // Add animation for elements when they come into view
  const animateOnScroll = () => {
    const elements = document.querySelectorAll(".feature-card, .hero-content, .dark-hero-content, .cta-form")

    elements.forEach((element) => {
      const elementPosition = element.getBoundingClientRect().top
      const windowHeight = window.innerHeight

      if (elementPosition < windowHeight - 100) {
        element.classList.add("animate")
      }
    })
  }

  // Run on scroll
  window.addEventListener("scroll", animateOnScroll)

  // Run once on page load
  animateOnScroll()

  // Handle image loading errors
  const images = document.querySelectorAll("img")
  images.forEach((img) => {
    img.addEventListener("error", function () {
      this.style.display = "none"
      // Create a fallback element
      const fallback = document.createElement("div")
      fallback.className = this.className
      fallback.style.backgroundColor = "#ccc"
      fallback.style.display = "flex"
      fallback.style.alignItems = "center"
      fallback.style.justifyContent = "center"
      fallback.style.color = "#666"
      fallback.textContent = "Image not found"
      this.parentNode.insertBefore(fallback, this.nextSibling)
    })
  })

  // Declare checkShapeContentOverlap
  let checkShapeContentOverlap

  // Add this to the existing event listeners
  window.removeEventListener("resize", checkShapeContentOverlap)

  // Add this line to the existing DOMContentLoaded function
  //checkShapeContentOverlap()

  // Rest of your existing code...


window.removeEventListener("resize", checkShapeContentOverlap)

// Add CSS for the animation
const style = document.createElement("style")
style.textContent = `
    .feature-card, .hero-content, .dark-hero-content, .cta-form {
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.6s ease, transform 0.6s ease;
    }
    
    .feature-card.animate, .hero-content.animate, .dark-hero-content.animate, .cta-form.animate {
        opacity: 1;
        transform: translateY(0);
    }
    
    .bar.change:nth-child(1) {
        transform: rotate(-45deg) translate(-5px, 6px);
    }
    
    .bar.change:nth-child(2) {
        opacity: 0;
    }
    
    .bar.change:nth-child(3) {
        transform: rotate(45deg) translate(-5px, -6px);
    }
`
document.head.appendChild(style)
