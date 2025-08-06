
document.getElementById("cropSelector").addEventListener("change", function () {
  const crop = this.value;
  const cropInfoDiv = document.getElementById("cropInfo");

  const cropData = {
    apple: {
      name: "Apple",
      intro: "Apples are temperate fruit crops grown for their high economic value and health benefits.",
      materials: ["Grafted seedlings", "Loamy soil (pH 6.0–7.0)", "Organic compost", "Mulching sheets", "Pruning shears"],
      steps: ["Select sunny site with good air drainage", "Plant during dormancy", "Dig 2×2 ft pits, fill with compost", "Space 15–20 ft apart"],
      care: ["Water weekly", "Mulch base for moisture", "Apply NPK 10:10:10 in spring", "Prune yearly", "Control scab, aphids"],
      harvest: "Pick when fruit is firm and colored, 120–150 days after bloom"
    },
    banana: {
      name: "Banana",
      intro: "Banana is a tropical plant requiring warm, humid climate and rich, well-drained soil.",
      materials: ["Tissue-cultured saplings", "Sandy loam soil", "High K fertilizer", "Support sticks"],
      steps: ["Pit size 60×60×60 cm", "Plant with 2x2 m spacing", "Apply FYM and fertilizers", "Install drip irrigation"],
      care: ["Weekly irrigation", "Weed control monthly", "Desucker every 45 days", "Protect from weevils, leaf spot"],
      harvest: "10–12 months after planting, harvest when fruit angles round off"
    },
    rice: {
      name: "Rice",
      intro: "Rice is a staple food crop grown in flooded fields across Asia and tropical regions.",
      materials: ["High-yield seeds", "Nursery bed", "Field plough and puddling tools", "Irrigation channels"],
      steps: ["Nursery bed for 20–25 days", "Transplant in puddled field", "Maintain 5–7 cm water", "Weed using cono weeder"],
      care: ["Split N application", "Avoid stagnation post flowering", "Check blast, brown spot diseases"],
      harvest: "120–150 days after sowing, harvest when panicles turn golden"
    },
    wheat: {
      name: "Wheat",
      intro: "Wheat thrives in cool, dry climates with fertile, well-drained soil.",
      materials: ["HD2967 seeds", "Phosphatic fertilizers", "Irrigation tools", "Weedicides"],
      steps: ["Sow from mid-November", "Seed rate 100 kg/ha", "Keep 20 cm row spacing", "Use rotavator for tillage"],
      care: ["Irrigate at CRI, tillering, heading", "Protect from rust, aphids"],
      harvest: "4–5 months after sowing, when grains are hard and golden"
    },
    maize: {
      name: "Maize",
      intro: "Maize is a warm-season cereal crop grown for food, fodder, and industry.",
      materials: ["Hybrid seeds", "Loamy well-drained soil", "Rotavator", "Fertilizer"],
      steps: ["Sow with spacing 75x25 cm", "Add 10 tons FYM/ha", "Use seed drill"],
      care: ["Topdress nitrogen", "Protect from stem borer, turcicum leaf blight"],
      harvest: "When cobs dry and grains dented (90–120 days)"
    },
    cotton: {
      name: "Cotton",
      intro: "Cotton requires warm climate and black soil. Major fiber crop in tropical regions.",
      materials: ["Bt cotton seeds", "Black soil", "Fertilizers, plant growth regulators"],
      steps: ["Spacing 90x60 cm", "Direct sowing in ridges", "Use seed drill"],
      care: ["Apply 3 irrigations", "Monitor bollworms", "Use IPM"],
      harvest: "160–180 days after sowing, multiple pickings"
    },
    grapes: {
      name: "Grapes",
      intro: "Grapes require well-drained loamy soil and ample sunlight for fruiting.",
      materials: ["Hardwood cuttings", "Support trellis", "Drip irrigation", "Bordeaux mixture"],
      steps: ["Spacing 2x3 m", "Train on pandal/trellis", "Apply basal FYM"],
      care: ["Irrigate biweekly", "Apply micronutrients", "Prune post-harvest"],
      harvest: "150–180 days after pruning, when berries soft and juicy"
    },
    chickpea: {
      name: "Chickpea",
      intro: "Chickpea is a rabi pulse crop grown under residual moisture in light soils.",
      materials: ["Desi/kabuli seeds", "Rhizobium inoculant", "Seed drill"],
      steps: ["Sow Nov–Dec", "Seed rate 100 kg/ha", "Spacing 30×10 cm"],
      care: ["Irrigate at pod formation", "Protect from pod borer"],
      harvest: "110–120 days after sowing, harvest when pods turn brown"
    },
    mango: {
      name: "Mango",
      intro: "Mango is a tropical fruit requiring hot, dry climate and deep alluvial soil.",
      materials: ["Grafted saplings", "Cow dung, super phosphate", "Tree guards"],
      steps: ["Spacing 8–10 m", "Pit size 1x1x1 m", "Fill with FYM + soil"],
      care: ["Irrigate weekly", "Spray for powdery mildew", "Fertilize in June and October"],
      harvest: "3–5 years after planting, April–June"
    },
    coffee: {
      name: "Coffee",
      intro: "Coffee is a shade-loving crop grown in high rainfall areas with loamy soil.",
      materials: ["Arabica/Robusta seedlings", "Mulch", "Bordeaux paste"],
      steps: ["Spacing 2x2 m", "Train under shade trees", "Use contour trenches"],
      care: ["Irrigate in dry months", "Prune post-harvest", "Apply organic mulch"],
      harvest: "9 months after flowering, pick red berries"
    },
    pomegranate: {
      name: "Pomegranate",
      intro: "Pomegranate is a drought-resistant fruit needing warm, arid climate and sandy loam soil.",
      materials: ["Hardwood cuttings", "FYM and super phosphate", "Drip irrigation"],
      steps: ["Spacing 5x5 m", "Pit size 60 cm", "Plant in spring or monsoon"],
      care: ["Water twice a week", "Spray neem oil for aphids", "Annual pruning"],
      harvest: "4–5 years after planting, fruits mature in 5–7 months"
    },
    blackgram: {
      name: "Blackgram",
      intro: "Blackgram is a short-duration pulse crop grown in Kharif or summer.",
      materials: ["Certified seeds", "Seed drill", "Biofertilizer"],
      steps: ["Spacing 30x10 cm", "Seed rate 25 kg/ha"],
      care: ["One irrigation at pod filling", "Protect from yellow mosaic virus"],
      harvest: "70–90 days after sowing"
    },
    mungbean: {
      name: "Mungbean",
      intro: "Mungbean is a fast-growing pulse crop grown in spring and summer.",
      materials: ["MH 421 seeds", "Rhizobium culture", "Hoe"],
      steps: ["Spacing 30×10 cm", "Sow late Feb to April"],
      care: ["Irrigate at flowering", "Weed twice"],
      harvest: "60–70 days after sowing"
    },
    papaya: {
      name: "Papaya",
      intro: "Papaya is a tropical fruit with year-round bearing. Needs good drainage.",
      materials: ["Papaya seeds", "Compost", "Plant guards"],
      steps: ["Spacing 1.8x1.8 m", "Pit size 45 cm", "Plant 2 seedlings per pit"],
      care: ["Irrigate weekly", "Spray fungicide for damping off"],
      harvest: "6–9 months after transplanting"
    },
    orange: {
      name: "Orange",
      intro: "Orange is a citrus fruit grown in subtropical climate and light sandy soil.",
      materials: ["Grafted orange saplings", "Basal manure", "Drip system"],
      steps: ["Spacing 6x6 m", "Plant in July–Aug"],
      care: ["Irrigate every 10–15 days", "Zinc spray for deficiency"],
      harvest: "8–10 months after flowering"
    },
    muskmelon: {
      name: "Muskmelon",
      intro: "Muskmelon is a summer vine crop grown for juicy fruits in well-drained soils.",
      materials: ["Improved seeds", "FYM", "Drip lines"],
      steps: ["Spacing 2x0.5 m", "Sow Feb–March"],
      care: ["Pollinate manually", "Water weekly"],
      harvest: "65–75 days after sowing"
    },
    pigeonpeas: {
      name: "Pigeonpeas",
      intro: "Pigeonpea is a drought-tolerant pulse crop grown in rainfed areas.",
      materials: ["Seeds", "Tractor plough", "Inoculant"],
      steps: ["Spacing 75x30 cm", "Seed rate 15–20 kg/ha"],
      care: ["Hoeing twice", "Check pod borers"],
      harvest: "140–160 days after sowing"
    },
    lentil: {
      name: "Lentil",
      intro: "Lentil is a cool-season legume grown in rabi with low water needs.",
      materials: ["Lentil seeds", "Light soil", "Plough"],
      steps: ["Spacing 30×10 cm", "Seed rate 40 kg/ha"],
      care: ["Weed after 25 days", "Spray for rust"],
      harvest: "100–110 days after sowing"
    },
    kidneybeans: {
      name: "Kidneybeans",
      intro: "Kidney beans are grown in moderate climates and fertile soils.",
      materials: ["Rajma seeds", "Raised beds", "Compost"],
      steps: ["Sow in rows 40 cm apart", "Add vermicompost"],
      care: ["Water every 5 days", "Support vines"],
      harvest: "90–100 days after sowing"
    },
    coconut: {
      name: "Coconut",
      intro: "Coconut is a coastal crop needing sandy loam soil and high humidity.",
      materials: ["Tall/dwarf seedlings", "Irrigation pump", "Basal dose of NPK"],
      steps: ["Spacing 7.5×7.5 m", "Pit size 1x1x1 m"],
      care: ["Irrigate fortnightly", "Apply salt+urea mix"],
      harvest: "4–6 years after planting, multiple pickings"
    }
  };

  if (cropData[crop]) {
    const c = cropData[crop];
    cropInfoDiv.innerHTML = `
      <h2 class="text-2xl font-bold mb-2 text-green-800">${c.name} Cultivation Guide</h2>
      <p class="mb-4"><strong>Introduction:</strong> ${c.intro}</p>
      <p class="mb-2"><strong>Materials & Resources:</strong></p>
      <ul class="list-disc list-inside mb-4">${c.materials.map(i => `<li>${i}</li>`).join('')}</ul>
      <p class="mb-2"><strong>Preparation & Planting:</strong></p>
      <ul class="list-disc list-inside mb-4">${c.steps.map(i => `<li>${i}</li>`).join('')}</ul>
      <p class="mb-2"><strong>Growth & Care:</strong></p>
      <ul class="list-disc list-inside mb-4">${c.care.map(i => `<li>${i}</li>`).join('')}</ul>
      <p class="mb-2"><strong>Harvesting:</strong> ${c.harvest}</p>
    `;
  } else {
    cropInfoDiv.innerHTML = "<p class='text-gray-500'>Please select a crop.</p>";
  }
});
