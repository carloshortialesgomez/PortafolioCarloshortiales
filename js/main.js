/* ============================================
   LANGUAGE TOGGLE (ES / EN)
   ============================================ */
const translations = {
  es: {
    // Navbar
    nav_inicio: 'Inicio',
    nav_sobre: 'Sobre mí',
    nav_proyectos: 'Proyectos IA',
    nav_trayectoria: 'Trayectoria',
    nav_contacto: 'Contacto',
    // Hero
    hero_badge: 'Disponible para proyectos',
    hero_subtitle: 'Ingeniería · Data Analyst · eCommerce Operations · AI Integration',
    hero_desc: 'Más de 10 años automatizando operaciones, construyendo pipelines de datos e integrando inteligencia artificial en procesos de negocio reales.',
    hero_btn_projects: 'Ver Proyectos IA',
    hero_btn_career: 'Mi Trayectoria',
    stat_years: 'Años de experiencia',
    stat_countries: 'Países de operación',
    stat_projects: 'Proyectos de automatización',
    // Sobre mí
    section_sobre_label: 'Sobre mí',
    section_sobre_h2: 'Analista que conecta <span class="gradient-text">datos con decisiones</span>',
    sobre_p1: 'Con experiencia en empresas de retail y eCommerce en México y Estados Unidos, me especializo en construir soluciones que automatizan procesos operativos, desde la ingesta de datos hasta la visualización ejecutiva.',
    sobre_p2: 'Actualmente en <strong>Grupo Comercial Atlas</strong>, integro herramientas de IA (Gemini, Claude) con plataformas de datos (BigQuery, Tableau) para generar insights accionables en tiempo real. <strong>Tableau</strong> es mi herramienta principal de visualización y análisis.',
    perfil_years: '10+ años en el sector',
    // Proyectos
    section_projects_label: 'Proyectos más relevantes',
    section_projects_h2: 'Integración de <span class="gradient-text">Inteligencia Artificial</span>',
    section_projects_desc: 'Los proyectos más recientes e innovadores desarrollados en Grupo Comercial Atlas, combinando IA generativa con plataformas de datos empresariales.',
    proj_badge: 'Proyecto Destacado',
    proj1_tagline: 'Inteligencia artificial conversacional integrada directamente en los dashboards de Tableau',
    proj1_desc: 'Integración del protocolo <strong>Model Context Protocol (MCP)</strong> de Anthropic con Tableau, permitiendo que Claude acceda en tiempo real a los datos de los dashboards. Los usuarios pueden hacer preguntas en lenguaje natural sobre las visualizaciones, Fuentes de datos, Workflow y recibir análisis, interpretaciones y recomendaciones generadas por IA dentro de la app de Claude Cowork.',
    proj1_impact1: 'Consultas en lenguaje natural sobre datos de ventas',
    proj1_impact2: 'Claude interpreta KPIs y genera reportes automáticos',
    proj1_impact3: 'Reducción en tiempo de análisis ejecutivo',
    proj1_impact4: 'Conexión bidireccional MCP → Tableau Data Source',
    mock_chat_user: '¿Cuál fue el mejor mes de ventas?',
    mock_chat_ai: 'Abril registró el mayor crecimiento con +23% vs año anterior...',
    mock_code_query: '"¿Cuántos pedidos pendientes hay hoy?"',
    mock_code_top: 'Top categoría:',
    mock_code_warning: '38 pedidos con incidencia',
    proj2_tagline: 'Agente conversacional que consulta el data warehouse en tiempo real',
    proj2_desc: 'Desarrollo de un <strong>agente inteligente con Google Gemini</strong> conectado directamente a <strong>BigQuery</strong> como fuente de datos. El agente entiende preguntas de negocio en lenguaje natural, las traduce a consultas SQL optimizadas y devuelve análisis enriquecidos con contexto empresarial sobre órdenes, inventario y operaciones eCommerce.',
    proj2_impact1: 'Consultas SQL generadas automáticamente por IA',
    proj2_impact2: 'Acceso a datos históricos de millones de órdenes',
    proj2_impact3: 'Alertas inteligentes sobre anomalías en pedidos',
    proj2_impact4: 'Integración con pipeline de datos Google Cloud',
    // Trayectoria
    section_career_label: 'Historial profesional',
    section_career_h2: 'Mi <span class="gradient-text">Trayectoria</span>',
    current_tag: 'Actual',
    atlas_desc: 'Líder de análisis de datos para <strong>Atlas del Descanso</strong>, cadena de retail de colchones y muebles. Responsable de la automatización de operaciones eCommerce, construcción de pipelines de datos y la reciente integración de IA generativa en procesos analíticos.',
    atlas_proj1_title: 'Automatización KNIME: Órdenes eCommerce vs ERP',
    atlas_proj1_desc: 'Desarrollo de workflows en KNIME para el análisis automático de órdenes del canal eCommerce contra el sistema ERP. El proceso cruza datos de múltiples fuentes, detecta discrepancias y genera alertas operativas, reduciendo el tiempo de conciliación.',
    atlas_proj2_title: 'Dashboards Tableau – Ecosistema completo de visualización',
    atlas_proj2_desc: 'Desarrollo y rescate de dashboards en Tableau como herramienta principal de BI. Se construyó un ecosistema completo de reportes ejecutivos para ventas, inventario y operaciones eCommerce, incluyendo la integración con Claude via MCP para análisis en lenguaje natural.',
    atlas_proj3_title: 'App de Auditoría de Despacho',
    atlas_proj3_desc: 'Desarrollo de aplicación para auditoría en tiempo real del proceso de despacho. Garantiza que cada pedido eCommerce sea preparado y enviado correctamente, validando artículos, cantidades y destinos antes del envío.',
    target_desc: 'Auditoría de operaciones ejecutadas dentro del <strong>Warehouse Management System (WMS)</strong>. Seguimiento del calendario de mantenimiento del sistema para la detección y reporte de errores que pudieran comprometer el funcionamiento correcto del almacén.',
    target_b1: 'Revisión y validación de transacciones en el WMS conforme a protocolos de calidad',
    target_b2: 'Identificación de patrones de error recurrentes y propuesta de acciones correctivas',
    target_b3: 'Coordinación con el equipo de TI para la resolución de incidencias del sistema',
    target_b4: 'Documentación de hallazgos en reportes de auditoría periódicos',
    stack_auditoria: 'Auditoría',
    smiths_desc: 'Miembro clave del equipo encargado de implementar el sistema <strong>Instacart</strong> y el modelo de negocio <strong>Delivery & PickUp</strong>. Responsable de validar todo el flujo del usuario desde el ingreso al aplicativo hasta la entrega exitosa de la orden.',
    smiths_b1: 'Pruebas end-to-end del flujo de usuario en la app de Instacart (navegación, carrito, pago, confirmación)',
    smiths_b2: 'Validación del proceso de picking en tienda y empaque correcto de órdenes',
    smiths_b3: 'Testing del módulo de PickUp: comunicación al cliente, tiempo de respuesta y entrega',
    smiths_b4: 'Reporte de bugs y seguimiento hasta su resolución con el equipo técnico de Instacart/Kroger',
    cravioto_role: 'Coordinador eCommerce & Estrategia Digital',
    cravioto_desc: '9 años liderando la transformación digital del negocio. Coordiné la implementación completa de los proyectos <strong>B2B y B2C</strong>, desde el diseño y desarrollo hasta la puesta en operación y seguimiento de resultados.',
    cravioto_b1: 'Diseño, desarrollo e implementación del proceso operativo eCommerce B2B y B2C',
    cravioto_b2: 'Definición y seguimiento de KPIs comerciales y operativos del canal digital',
    cravioto_b3: 'Gestión y análisis de campañas mediante Google Analytics (tráfico, conversiones, embudo)',
    cravioto_b4: 'Colaboración en estrategias de marketing digital y redes sociales',
    cravioto_b5: 'Coordinación entre áreas de tecnología, logística y comercial para la operación del canal',
    stack_estrategia: 'Estrategia Digital',
    stack_redes: 'Redes Sociales',
    // Tech Stack
    section_tech_label: 'Herramientas & plataformas',
    section_tech_h2: 'Stack <span class="gradient-text">Tecnológico</span>',
    tech_ai_cat: 'Inteligencia Artificial',
    tech_data_cat: 'Datos & Cloud',
    tech_etl_cat: 'Automatización & ETL',
    tech_qa_cat: 'QA & Auditoría',
    tech_audit_ops: 'Auditoría Ops',
    tech_lang_cat: 'Lenguajes',
    tech_dev_cat: 'Desarrollo & IDEs',
    // Contacto
    contact_label: '¿Hablamos?',
    contact_h2: 'Conectemos',
    contact_desc: '¿Tienes un proyecto de datos, automatización o integración de IA? Estoy disponible para colaborar.',
    contact_linkedin_small: 'Perfil profesional',
    contact_phone: 'Teléfono',
  },
  en: {
    // Navbar
    nav_inicio: 'Home',
    nav_sobre: 'About me',
    nav_proyectos: 'AI Projects',
    nav_trayectoria: 'Career',
    nav_contacto: 'Contact',
    // Hero
    hero_badge: 'Available for projects',
    hero_subtitle: 'Engineering · Data Analyst · eCommerce Operations · AI Integration',
    hero_desc: 'Over 10 years automating operations, building data pipelines and integrating artificial intelligence into real business processes.',
    hero_btn_projects: 'View AI Projects',
    hero_btn_career: 'My Career',
    stat_years: 'Years of experience',
    stat_countries: 'Countries of operation',
    stat_projects: 'Automation projects',
    // About
    section_sobre_label: 'About me',
    section_sobre_h2: 'Analyst who connects <span class="gradient-text">data with decisions</span>',
    sobre_p1: 'With experience in retail and eCommerce companies in Mexico and the United States, I specialize in building solutions that automate operational processes, from data ingestion to executive visualization.',
    sobre_p2: 'Currently at <strong>Grupo Comercial Atlas</strong>, I integrate AI tools (Gemini, Claude) with data platforms (BigQuery, Tableau) to generate actionable insights in real time. <strong>Tableau</strong> is my primary visualization and analysis tool.',
    perfil_years: '10+ years in the industry',
    // Projects
    section_projects_label: 'Most relevant projects',
    section_projects_h2: '<span class="gradient-text">Artificial Intelligence</span> Integration',
    section_projects_desc: 'The most recent and innovative projects developed at Grupo Comercial Atlas, combining generative AI with enterprise data platforms.',
    proj_badge: 'Featured Project',
    proj1_tagline: 'Conversational artificial intelligence integrated directly into Tableau dashboards',
    proj1_desc: 'Integration of Anthropic\'s <strong>Model Context Protocol (MCP)</strong> with Tableau, allowing Claude to access dashboard data in real time. Users can ask questions in natural language about visualizations, data sources, and workflows, and receive AI-generated analyses, interpretations, and recommendations within the Claude Cowork app.',
    proj1_impact1: 'Natural language queries on sales data',
    proj1_impact2: 'Claude interprets KPIs and generates automatic reports',
    proj1_impact3: 'Reduction in executive analysis time',
    proj1_impact4: 'Bidirectional connection MCP → Tableau Data Source',
    mock_chat_user: 'Which was the best sales month?',
    mock_chat_ai: 'April recorded the highest growth with +23% vs. previous year...',
    mock_code_query: '"How many pending orders are there today?"',
    mock_code_top: 'Top category:',
    mock_code_warning: '38 orders with issues',
    proj2_tagline: 'Conversational agent that queries the data warehouse in real time',
    proj2_desc: 'Development of an <strong>intelligent agent with Google Gemini</strong> connected directly to <strong>BigQuery</strong> as a data source. The agent understands business questions in natural language, translates them into optimized SQL queries, and returns enriched analyses with business context on orders, inventory, and eCommerce operations.',
    proj2_impact1: 'SQL queries automatically generated by AI',
    proj2_impact2: 'Access to historical data from millions of orders',
    proj2_impact3: 'Smart alerts on order anomalies',
    proj2_impact4: 'Integration with Google Cloud data pipeline',
    // Career
    section_career_label: 'Professional history',
    section_career_h2: 'My <span class="gradient-text">Career</span>',
    current_tag: 'Current',
    atlas_desc: 'Data analytics lead for <strong>Atlas del Descanso</strong>, a retail chain specializing in mattresses and furniture. Responsible for eCommerce operations automation, data pipeline construction, and the recent integration of generative AI into analytical processes.',
    atlas_proj1_title: 'KNIME Automation: eCommerce Orders vs ERP',
    atlas_proj1_desc: 'Development of KNIME workflows for automatic analysis of eCommerce channel orders against the ERP system. The process cross-references data from multiple sources, detects discrepancies, and generates operational alerts, reducing reconciliation time.',
    atlas_proj2_title: 'Tableau Dashboards – Complete visualization ecosystem',
    atlas_proj2_desc: 'Development and recovery of Tableau dashboards as the primary BI tool. A complete ecosystem of executive reports was built for sales, inventory, and eCommerce operations, including Claude via MCP integration for natural language analysis.',
    atlas_proj3_title: 'Dispatch Audit App',
    atlas_proj3_desc: 'Development of an application for real-time auditing of the dispatch process. Ensures each eCommerce order is prepared and shipped correctly, validating items, quantities, and destinations before shipping.',
    target_desc: 'Audit of operations executed within the <strong>Warehouse Management System (WMS)</strong>. Monitoring of the system maintenance calendar for the detection and reporting of errors that could compromise the correct functioning of the warehouse.',
    target_b1: 'Review and validation of WMS transactions according to quality protocols',
    target_b2: 'Identification of recurring error patterns and proposal of corrective actions',
    target_b3: 'Coordination with the IT team for system incident resolution',
    target_b4: 'Documentation of findings in periodic audit reports',
    stack_auditoria: 'Auditing',
    smiths_desc: 'Key team member responsible for implementing the <strong>Instacart</strong> system and the <strong>Delivery & PickUp</strong> business model. Responsible for validating the entire user flow from app entry to successful order delivery.',
    smiths_b1: 'End-to-end testing of user flow in the Instacart app (navigation, cart, payment, confirmation)',
    smiths_b2: 'Validation of the in-store picking process and correct order packaging',
    smiths_b3: 'Testing of the PickUp module: customer communication, response time, and delivery',
    smiths_b4: 'Bug reporting and tracking to resolution with the Instacart/Kroger technical team',
    cravioto_role: 'eCommerce & Digital Strategy Coordinator',
    cravioto_desc: '9 years leading the digital transformation of the business. I coordinated the complete implementation of <strong>B2B and B2C</strong> projects, from design and development to operation launch and results tracking.',
    cravioto_b1: 'Design, development, and implementation of B2B and B2C eCommerce operational processes',
    cravioto_b2: 'Definition and monitoring of commercial and operational KPIs for the digital channel',
    cravioto_b3: 'Campaign management and analysis using Google Analytics (traffic, conversions, funnel)',
    cravioto_b4: 'Collaboration in digital marketing and social media strategies',
    cravioto_b5: 'Coordination between technology, logistics, and commercial areas for channel operations',
    stack_estrategia: 'Digital Strategy',
    stack_redes: 'Social Media',
    // Tech Stack
    section_tech_label: 'Tools & platforms',
    section_tech_h2: '<span class="gradient-text">Technology</span> Stack',
    tech_ai_cat: 'Artificial Intelligence',
    tech_data_cat: 'Data & Cloud',
    tech_etl_cat: 'Automation & ETL',
    tech_qa_cat: 'QA & Auditing',
    tech_audit_ops: 'Ops Auditing',
    tech_lang_cat: 'Languages',
    tech_dev_cat: 'Development & IDEs',
    // Contact
    contact_label: "Let's talk?",
    contact_h2: "Let's connect",
    contact_desc: 'Do you have a data, automation, or AI integration project? I\'m available to collaborate.',
    contact_linkedin_small: 'Professional profile',
    contact_phone: 'Phone',
  }
};

let currentLang = 'es';

function setLanguage(lang) {
  currentLang = lang;

  // Reemplazar textContent
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang][key] !== undefined) {
      el.textContent = translations[lang][key];
    }
  });

  // Reemplazar innerHTML (para textos con etiquetas HTML)
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    if (translations[lang][key] !== undefined) {
      el.innerHTML = translations[lang][key];
    }
  });

  // Actualizar botón
  const label = document.getElementById('langLabel');
  if (label) label.textContent = lang === 'es' ? 'EN' : 'ES';

  // Actualizar atributo lang del HTML
  document.documentElement.lang = lang;
}

function toggleLanguage() {
  setLanguage(currentLang === 'es' ? 'en' : 'es');
}

// Navbar scroll effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 30);
});

// Mobile menu toggle
const menuToggle = document.getElementById('menuToggle');
const navUl = document.querySelector('nav ul');
menuToggle.addEventListener('click', () => {
  navUl.classList.toggle('open');
  menuToggle.innerHTML = navUl.classList.contains('open')
    ? '<i class="fas fa-times"></i>'
    : '<i class="fas fa-bars"></i>';
});

// Close mobile menu on link click
navUl.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    navUl.classList.remove('open');
    menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
  });
});

// Smooth scroll for all anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const offset = 64;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});

// Animate skill bars on scroll
const animateBars = () => {
  document.querySelectorAll('.bar-fill').forEach(bar => {
    const rect = bar.getBoundingClientRect();
    if (rect.top < window.innerHeight - 50) {
      bar.style.width = bar.style.width || bar.getAttribute('style').match(/width:([^;]+)/)?.[1] || '0%';
    }
  });
};

// Intersection Observer for fade-in animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      if (entry.target.classList.contains('skill-bar-item')) {
        const bar = entry.target.querySelector('.bar-fill');
        if (bar) {
          const target = bar.getAttribute('data-width') || bar.style.width;
          bar.style.width = target;
        }
      }
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

// Observe timeline cards
document.querySelectorAll('.timeline-card, .featured-card, .tech-category, .contact-card').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(el);
});

// Add visible class logic
const visibilityObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      visibilityObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.timeline-card, .featured-card, .tech-category, .contact-card').forEach(el => {
  visibilityObserver.observe(el);
});

// Active nav link on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('nav ul li a');

const highlightNav = () => {
  const scrollY = window.scrollY + 100;
  sections.forEach(section => {
    const top = section.offsetTop;
    const height = section.offsetHeight;
    const id = section.getAttribute('id');
    if (scrollY >= top && scrollY < top + height) {
      navLinks.forEach(link => {
        link.style.color = '';
        if (link.getAttribute('href') === `#${id}`) {
          link.style.color = 'var(--text-primary)';
        }
      });
    }
  });
};

window.addEventListener('scroll', highlightNav);
window.addEventListener('scroll', animateBars);
