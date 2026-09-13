/*
  =====================================================================
  HOW TO ADD A NEW PROJECT
  =====================================================================
  1. Add your new photo(s) into the /images folder.
  2. Copy one whole object below (from the opening { to the closing },)
     and paste it into the `projects` array, in the position you want
     it to appear.
  3. Edit the text fields to match your new project.
  4. Save the file and refresh index.html in your browser to check it.

  Field notes:
  - tag:      short label shown on the photo, e.g. "Hospitality"
  - image:    filename of the main photo, inside the /images folder
  - imageAlt: describes the photo, for accessibility and SEO
  - meta:     a list of short lines — location, client, category
  - badge:    optional. Leave out entirely (delete the line) if a
              project has no special achievement to highlight.
  - badgeStyle: "oxide" (bold/red, for major milestones) or "teal"
              (quieter, for smaller wins like a repeat client)
  - inset:    optional second photo shown inside the project card.
              Leave out entirely if you only have one photo.
  =====================================================================
*/

const projects = [
  {
    number: "01",
    tag: "Hospitality",
    image: "images/vela-villas.jpg",
    imageAlt: "Vela Luxury Villas beachfront construction site, Zanzibar",
    title: "Vela Luxury Villas",
    meta: [
      "Location: Beachfront villa development, Zanzibar",
      "Client: Private hospitality developer",
      "Category: Waterproofing / Construction Chemicals"
    ],
    problem: "Roofs exposed to direct coastal sun and seasonal rain needed protection against water ingress and heat gain, and wall plaster needed better water resistance.",
    solution: "Specified Synroof HI-Build reflective roof waterproofing, which reflects up to 80% of direct solar heat, and Alcolin Permobond as a bonding admixture in the wall putty to improve adhesion and water permeability.",
    result: "Roofs are now protected against both water ingress and heat. The client was satisfied enough to bring a second request for the wall putty admixture solution.",
    badge: "Repeat client engagement",
    badgeStyle: "teal"
  },
  {
    number: "02",
    tag: "Government infrastructure",
    image: "images/kizimkazi-tank.jpg",
    imageAlt: "Kizimkazi water tank, 1,000,000 litre capacity, Zanzibar",
    title: "Kizimkazi Water Tank",
    meta: [
      "Location: Kizimkazi Ward, Zanzibar",
      "Client: GFG Investments Ltd (Contractor)",
      "Category: Waterproofing — Public Water Infrastructure"
    ],
    problem: "A new elevated concrete water tank with 1,000,000-litre capacity for public water supply needed reliable, long-term protection against water ingress under constant water pressure.",
    solution: "Specified Xypex Concentrate, a crystalline waterproofing technology that becomes integral to the concrete itself rather than sitting on it as a surface membrane.",
    result: "The tank holds water with no issues and is now fully operational, supplying the Kizimkazi community.",
    badge: "Launched by H.E. the President of Tanzania",
    badgeStyle: "oxide",
    inset: {
      image: "images/kizimkazi-team.jpg",
      caption: "Commissioning day, with the site and project team"
    }
  },
  {
    number: "03",
    tag: "Public infrastructure",
    image: "images/mombasa-market.jpg",
    imageAlt: "Mombasa Market public building, Zanzibar",
    title: "Mombasa Market",
    meta: [
      "Location: Mombasa Market, Zanzibar",
      "Client: RANS Company (Contractor)",
      "Category: Waterproofing &amp; Joint Sealing — Public Infrastructure"
    ],
    problem: "The public market building required expansion joint sealing across the structure, plus waterproofing of an underground water tank.",
    solution: "Supplied material and labour for expansion joint sealing, and specified Xypex Concentrate together with Fitbond SBR for the underground water tank waterproofing.",
    result: "The market is now fully operational and open to the public.",
    badge: "Launched by H.E. Dr. Hussein Ali Mwinyi, President of Zanzibar",
    badgeStyle: "oxide",
    inset: {
      image: "images/mombasa-market-detail.jpg",
      caption: "Expansion joint detail during sealing works"
    }
  }
];

const badgeIcon = `<svg viewBox="0 0 24 24" fill="none" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2l2.2 6.6H21l-5.4 4 2 6.6L12 15.8 6.4 19.2l2-6.6L3 8.6h6.8L12 2z"/></svg>`;

function renderProject(p, index) {
  const flipClass = index % 2 === 1 ? " flip" : "";

  const metaHtml = p.meta.map(line => `<span>${line}</span>`).join("");

  const badgeHtml = p.badge
    ? `<div class="project-badge${p.badgeStyle === "teal" ? " badge-teal" : ""}">${badgeIcon}${p.badge}</div>`
    : "";

  const insetHtml = p.inset
    ? `<div class="project-inset">
         <img src="${p.inset.image}" alt="${p.inset.caption}">
         <div class="cap">${p.inset.caption}</div>
       </div>`
    : "";

  return `
    <article class="project${flipClass}">
      <div class="project-media">
        <img src="${p.image}" alt="${p.imageAlt}">
        <span class="project-tag">${p.tag}</span>
      </div>
      <div class="project-body">
        <div class="project-num">${p.number}</div>
        <h3>${p.title}</h3>
        <div class="project-meta">${metaHtml}</div>
        <div class="project-block">
          <div class="label">Problem on site</div>
          <p>${p.problem}</p>
        </div>
        <div class="project-block">
          <div class="label">Solution specified</div>
          <p>${p.solution}</p>
        </div>
        <div class="project-result">${p.result}</div>
        ${insetHtml}
        ${badgeHtml}
      </div>
    </article>`;
}

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("projects-list");
  container.innerHTML = projects.map(renderProject).join("\n");
});
