const chemicals = {
  H2SO4_INTAKE: { name: "حمض الكبريتيك (مدخل)", color: "red", tanks: [25, 30] },
  FECL3: { name: "كلوريد الحديديك", color: "amber", tanks: [40, 35] },
  H2SO4_MAIN: { name: "حمض الكبريتيك (رئيسي)", color: "orange", tanks: [50, 50] },
  NAOH: { name: "هيدروكسيد الصوديوم", color: "blue", tanks: [20, 25] },
  SMBS: { name: "ميتابيسلفيت الصوديوم", color: "green", tanks: [30, 30] },
  NACLO2: { name: "كلوريت الصوديوم", color: "teal", tanks: [15, 20] },
  HCL: { name: "حمض الهيدروكلوريك", color: "purple", tanks: [10, 15] },
  CO2: { name: "ثاني أكسيد الكربون", color: "slate", tanks: [5, 8] },
};

function displayChemicalTanks(key) {
  const chem = chemicals[key];
  if (!chem) return;
  const container = document.getElementById("tankDisplayArea");
  container.innerHTML = `
    <h2 class="text-xl font-bold text-${chem.color}-700 mb-4 text-center">${chem.name}</h2>
    ${chem.tanks.map((level) => `
      <div class="tank bg-${chem.color}-500">
        <div class="tank-fill" style="height: ${level}%; background-color: rgba(0,0,0,0.1);"></div>
        <div class="tank-label">${level}%</div>
      </div>
    `).join('')}
  `;
}
