export const site = {
  name: "Christuraja Matriculation Higher Secondary School",
  shortName: "Christuraja MHSS",
  abbr: "CMHSS",
  motto: "Knowledge is to serve",
  founded: "10 August 1971",
  foundedYear: 1971,
  management: "Daughters of Mary (D.M.), St. Joseph's Province, Marthandam",
  address: {
    line1: "Christurajapuram, North Street",
    line2: "Marthandam, Kanyakumari District",
    line3: "Tamil Nadu, India – 629 165",
  },
  phone: "+91 4651 270556",
  phoneHref: "tel:+914651270556",
  email: "christurajaschoolmarthandam@gmail.com",
  website: "www.christurajamhss.com",
  timings: {
    weekdays: "8.50 a.m. – 3.30 p.m.",
    saturday: "9.00 a.m. – 12.30 p.m.",
  },
  social: {
    facebook: "https://www.facebook.com",
    youtube: "https://youtube.com",
  },
  mapEmbed:
    "https://maps.google.com/maps?q=Christuraja%20Matriculation%20Higher%20Secondary%20School%20marthandam&t=&z=15&ie=UTF8&iwloc=&output=embed",
  staffLogin:
    "https://www.infomirrorscloud.com/infoSchool.christurajamhss/frm_User_Login.aspx?IP=ABVIu%2FPziELzrUCEg4lH%2Fg%3D%3D",
  stats: [
    { value: 55, suffix: "+", label: "Years of excellence" },
    { value: 3000, suffix: "+", label: "Students on campus" },
    { value: 150, suffix: "+", label: "Qualified teachers" },
    { value: 100, suffix: "%", label: "Board results, year on year" },
  ],
};

export type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string; blurb?: string }[];
};

export const nav: NavItem[] = [
  {
    label: "About",
    href: "/about/history",
    children: [
      { label: "Principal's desk", href: "/about/principal-desk", blurb: "A message from Rev. Sr. Preema Kurian D.M." },
      { label: "Vision & mission", href: "/about/vision-mission", blurb: "What we believe education is for." },
      { label: "History of the school", href: "/about/history", blurb: "From 23 students in 1971 to 3000+ today." },
      { label: "Board of management", href: "/about/management", blurb: "The Daughters of Mary who guide the school." },
      { label: "Infrastructure", href: "/about/infrastructure", blurb: "Labs, library, grounds and four blocks." },
    ],
  },
  {
    label: "Academics",
    href: "/academics/curriculum",
    children: [
      { label: "Curriculum & assessment", href: "/academics/curriculum" },
      { label: "Admission policy", href: "/academics/admission-policy" },
      { label: "School timing & anthem", href: "/academics/timing-anthem" },
      { label: "General directives", href: "/academics/general-directives" },
      { label: "Dress code, uniform & clubs", href: "/academics/dress-code-clubs" },
      { label: "Golden rules for students", href: "/academics/golden-rules" },
      { label: "Student groups & houses", href: "/academics/students-group" },
      { label: "Projects & counselling", href: "/academics/projects-counselling" },
      { label: "PTA & staff committees", href: "/academics/pta-staff" },
      { label: "Faculty", href: "/academics/faculties" },
    ],
  },
  {
    label: "Campus life",
    href: "/facilities/salient-features",
    children: [
      { label: "Salient features", href: "/facilities/salient-features" },
      { label: "Co-curricular activities", href: "/facilities/co-curricular" },
      { label: "Sports, music & dance", href: "/facilities/sports-music" },
      { label: "Medical care & transport", href: "/facilities/medical-transport" },
      { label: "Celebrations", href: "/facilities/celebrations" },
      { label: "Community & relationships", href: "/facilities/relationship" },
    ],
  },
  { label: "Admissions", href: "/admissions" },
  { label: "News & events", href: "/news" },
  { label: "Gallery", href: "/gallery" },
  { label: "Alumni", href: "/alumni" },
  { label: "Contact", href: "/contact" },
];
