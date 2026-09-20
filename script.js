document.querySelector(".avatar").addEventListener("click", () => {
  document.querySelector(".burst-menu").classList.toggle("open");
});

const overlay = document.querySelector(".modal-overlay");

document.querySelectorAll(".dock-item").forEach((btn) => {
  btn.addEventListener("click", () => {
    const section = btn.dataset.modal;
    const isOpen = overlay.classList.contains("open");
    const isSame = overlay.dataset.current === section;
    isOpen && isSame ? closeModal() : openModal(section);
  });
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") overlay.classList.remove("open");
});

overlay.addEventListener("click", (e) => {
  if (e.target === overlay) overlay.classList.remove("open");
});

const modalContents = {
  projects: {
    label: "Projects",
    sections: [
      {
        title: "my awesome projects",
        items: [
          {
            name: "scriblinlife",
            desc: "A website where you scribble on the foil to reveal hidden messages, super cool project...",
            tag: "stardance, react.js",
            url: "www.scriblinlife.somebodyouknow.com",
            img: "images/scriblin.png",
          },
          {
            name: "diaper-baby",
            desc: "my first game built for jame gam, actually kinda stupid. you are a diaper baby and you have to get as much as score as possible in a short time.",
            tag: "jame gam, godot, asesprite",
            url: "https://somebodyouknow.itch.io/diaper-baby",
            story: "https://somebodyouknow.notion.site/jame-gam",
            img: "images/scriblin.png",
          },
        ],
      },
    ],
  },
  experience: {
    label: "Experience",
    sections: [
      {
        title: "eh, somewhat experience",
        items: [
          {
            name: "Nova Vibe Solutions",
            desc: "Project Manager · 2023 – 2024",
            tag: "could have been something",
          },
          {
            name: "Hack Club",
            desc: "Hack Clubber · 2023 – 2024",
            tag: "not a job, m just a participant",
          },
        ],
      },
    ],
  },
  notes: {
    label: "Notes",
    sections: [
      {
        title: "Recent",
        items: [
          {
            name: "you know what",
            desc: "idk... what to write here so whatever",
            tag: "my bio",
          },
          {
            name: "thanks to everyone",
            desc: "thanks to everyone who have made me who i am, i have changed so much across the years. This has been the greatest year of my life!! - 2026",
            tag: "something",
          },
        ],
      },
    ],
  },
  about: {
    label: "About me",
    sections: [
      {
        title: "Bio",
        items: [
          {
            name: "somebodyouknow",
            desc: "i am somebodyouknow, a programmer, creator, pixel artist, graphic designer and my name is Sakhi.",
            tag: "bio",
          },
        ],
      },
    ],
  },
};

function renderContent(section) {
  const data = modalContents[section];
  document.querySelector(".modal-title-text").textContent = data.label;
  document.querySelectorAll(".modal-nav-item").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.section === section);
  });

  document.getElementById("modal-content").innerHTML = data.sections
    .map(
      (sec) => `
            <div class="modal-section">
            <h3 class="modal-section-title">${sec.title}</h3>
            ${sec.items
              .map((item) => {
                if (section === "projects") {
                  return `
                    <div class="modal-card">
                    <img class="modal-card-img" src="${item.img}">
                    <div class="modal-card-header">
                    <span class="modal-card-name">${item.name}</span>
                    ${item.tag ? `<span class="modal-tag">${item.tag}</span>` : ""}
                    </div>
                    <p class="modal-card-desc">${item.desc}</p>
                    <a href="${item.url}" target="_blank" class="modal-card-link"> + view project</a>
                    <a href="${item.story}" target="_blank" class="modal-card-link"> + view story</a>
                    </div>
               
                    `;
                } else {
                  return `
                    <div class="modal-card">
                    <div class="modal-card-header">
                    <span class="modal-card-name">${item.name}</span>
                    ${item.tag ? `<span class="modal-tag">${item.tag}</span>` : ""}
                    </div>
                    <p class="modal-card-desc">${item.desc}</p>
                    </div>
            
                    `;
                }
              })
              .join("")}
            </div>
            `,
    )
    .join("");
}

function openModal(section) {
  renderContent(section);
  overlay.dataset.current = section;
  console.log("content");
  overlay.classList.add("open");
  document
    .querySelectorAll(".dock-item")
    .forEach((b) => b.classList.remove("active"));
}

function closeModal() {
  overlay.classList.remove("open");
  document
    .querySelectorAll(".dock-item")
    .forEach((b) => b.classList.remove("active"));
}

document.querySelector(".modal-close").addEventListener("click", closeModal);
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeModal();
  }
});

overlay.addEventListener("click", (e) => {
  if (e.target === overlay) {
    closeModal();
  }
});

document.querySelectorAll(".modal-nav-item").forEach((btn) => {
  btn.addEventListener("click", () => renderContent(btn.dataset.section));
});
