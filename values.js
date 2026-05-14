/* ═══════════════════════════════════════════
   VALUES.JS — Central project & experience data
   Oliver Loree Portfolio
   
   To add a new project:
   1. Add an entry to the PROJECTS array below
   2. Create the project page (e.g. p8.html)
   3. Add images to pictures/p8/
   ═══════════════════════════════════════════ */

const PROJECTS = [
  {
    id: 7,
    name: "ECVT Planetary Gearbox",
    date: "Aug 2024 – May 2025",
    link: "p7.html",
    heroImage: "https://pub-c94488256fcd4c54ba252c6fe9ad300d.r2.dev/pictures/p7/p7_hero.jpg",
    blurb: "A functional electronic continuously variable transmission using a sun-planetary gear system driven by two BLDC motors. Sand-cast aluminum housing, wire-EDM steel gears, and STM32 UART control.",
    skills: ["CNC", "Casting", "Wire EDM", "CAD Design", "Embedded Systems", "Motor Control"]
  },
  {
    id: 6,
    name: "George Washington Sculpture",
    date: "2024",
    link: "p6.html",
    heroImage: "https://pub-c94488256fcd4c54ba252c6fe9ad300d.r2.dev/pictures/p6/p6_hero.jpg",
    blurb: "A large-scale 3D printed sculpture with integrated electronics for audio playback. Soldered, bondo'd, sanded, and painted through multiple rounds of finishing.",
    skills: ["3D Printing", "Fusion 360", "Electronics", "Finishing"]
  },
  {
    id: 5,
    name: "Transforming Buzz Mascot",
    date: "Jan 2025 – May 2025",
    link: "p5.html",
    heroImage: "https://pub-c94488256fcd4c54ba252c6fe9ad300d.r2.dev/pictures/p5/p5_model.jpg",
    blurb: "A 3-foot tall Ford Model A to Buzz transformer designed for Georgia Tech's Advanced Manufacturing Research Lab. Collapsible tail, fold-out legs, and print-ready components.",
    skills: ["CAD Design", "Leadership", "DFMA", "Additive Manufacturing"]
  },
  {
    id: 4,
    name: "Tambour and Kerf Bending Cabinet",
    date: "Nov 2024 – Mar 2025",
    link: "p4.html",
    heroImage: "https://pub-c94488256fcd4c54ba252c6fe9ad300d.r2.dev/pictures/p4/p4_hero.jpg",
    blurb: "A walnut cabinet with an 80-slab tambour door and kerf-bent corners, built entirely with hand tools and a router — no CNC. Custom MDF jigs guided every cut.",
    skills: ["Prototyping", "Manufacturing", "CAD Design", "Woodworking"]
  },
  {
    id: 3,
    name: "Autonomous Multitasking Robot",
    date: "Aug 2024 – Nov 2025",
    link: "p3.html",
    heroImage: "https://pub-c94488256fcd4c54ba252c6fe9ad300d.r2.dev/pictures/p3/p3_hero.jpg",
    blurb: "A university competition robot designed to accomplish 3 of 4 tasks under $120. Managed group SolidWorks assembly and depositing subsystem. Over 50% FDM printed for rapid prototyping.",
    skills: ["Prototyping", "Manufacturing", "CAD Design", "Project Planning", "Leadership", "CNC"]
  },
  {
    id: 2,
    name: "3D Infinity Mirror",
    date: "Aug 2022 – Jun 2023",
    link: "p2.html",
    heroImage: "https://pub-c94488256fcd4c54ba252c6fe9ad300d.r2.dev/pictures/p2/p2_hero.jpg",
    blurb: "A nontraditional X-shaped infinity mirror frame with 12 vertical legs. Custom CAD frame disassembles into 20+ printable pieces with coordinated LED wiring throughout.",
    skills: ["Research", "Prototyping", "Manufacturing", "CAD Design", "Electronics"]
  },
  {
    id: 1,
    name: "Air Compressor",
    date: "May 2023 – Jul 2023",
    link: "p1.html",
    heroImage: "https://pub-c94488256fcd4c54ba252c6fe9ad300d.r2.dev/pictures/p1/p1_hero.jpg",
    blurb: "A backpack-mounted compressed air system built from salvaged fire extinguishers and a freezer compressor. Regulated to 100psi with 150psi blowoff valves.",
    skills: ["Prototyping", "Manufacturing", "CAD Design", "Project Planning"]
  }
];

const WORK_EXPERIENCE = [
  {
    company: "Plantd Materials",
    role: "Mechanical Engineering Intern",
    dates: "May 2025 – Aug 2025",
    heroImage: "https://pub-c94488256fcd4c54ba252c6fe9ad300d.r2.dev/pictures/w1/w1_hero.jpg",
    blurb: "Worked across quality engineering, manufacturing engineering, and materials testing at a carbon-negative startup. Designed modular conveyor systems, press fixtures, and chain-mounted pushing assemblies with parametric CAD.",
    highlights: [
      "Parametric conveyor belt design with adjustable overhang angles",
      "Stress testing of new belt materials",
      "Engineering presentations justifying all design decisions"
    ],
    link: "w2.html"
  },
  {
    company: "GT Propulsive Landers Club",
    role: "Structures Subteam",
    dates: "Jan 2025 – Dec 2025",
    heroImage: "",
    blurb: "Working on monoprop testing assemblies and the design of a 2500N hybrid engine for a propulsive lander challenge.",
    highlights: [
      "Monoprop testing assembly development",
      "2500N hybrid engine structural design"
    ],
    link: "w1.html"
  },
];

const SKILLS = [
  {
    title: "CAD / CAM",
    blurb: "SolidWorks, Fusion 360, CNC toolpath generation, GD&T, parametric design, and assembly management."
  },
  {
    title: "Embedded Systems",
    blurb: "STM32 HAL in bare-metal C, UART/SPI/I2C protocols, ODrive motor control, Hall effect sensors, TFT displays."
  },
  {
    title: "Fabrication",
    blurb: "CNC milling (3-axis and 4-axis), manual lathe and mill, waterjet, laser cutting, 3D printing (FDM/SLA), sand casting, welding."
  },
  {
    title: "Analysis & Programming",
    blurb: "MATLAB vibration/FRF analysis, GUM uncertainty propagation, Python scripting, signal processing, LaTeX documentation."
  }
];

/* ═══════════════════════════════════════════
   API FUNCTIONS — used by archive, experience,
   index, and project pages
   ═══════════════════════════════════════════ */

function getAllProjects() {
  return PROJECTS;
}

function getRecentProjects(n) {
  return PROJECTS.slice(0, n);
}

function getProjectById(id) {
  return PROJECTS.find(p => p.id === id) || null;
}

function getAdjacentProjects(id) {
  const idx = PROJECTS.findIndex(p => p.id === id);
  return {
    previous: idx < PROJECTS.length - 1 ? PROJECTS[idx + 1] : null,
    next: idx > 0 ? PROJECTS[idx - 1] : null
  };
}

function getWorkExperience() {
  return WORK_EXPERIENCE;
}

function getSkills() {
  return SKILLS;
}
