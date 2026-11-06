import type { Page } from "@/lib/content-types";

/**
 * Inner-page content. Text taken from christurajamhss.com is reproduced with
 * light copy-editing. Pages marked `draft: true` were unreachable on the old
 * site and carry draft copy to be confirmed by the school (see docs/HANDOFF.md).
 */
export const pages: Page[] = [
  /* ------------------------------------------------------------- About */
  {
    section: "about",
    slug: "principal-desk",
    title: "From the Principal's desk",
    lede: "Rev. Sr. Preema Kurian D.M., ninth Principal of Christuraja, on what the school sets out to do for every child.",
    blocks: [
      {
        type: "quote",
        text: "We strive first to make good human beings, and then professionals. That is our priority.",
        by: "Rev. Sr. Preema Kurian D.M., Principal",
      },
      {
        type: "paragraphs",
        text: [
          "It gives me immense pleasure to serve as the ninth Principal of a school whose motto is “Knowledge is to serve”. Christuraja Matriculation Higher Secondary School, Marthandam is a God-given gift to the people in and around Marthandam. Our school takes students on a voyage of discovery towards excellence.",
          "We are proud of our students, who have topped both the Class X and Class XII State Board public examinations year after year. The management, parents, teaching and non-teaching staff work together as one Christuraja family to produce ranks and excellent results.",
          "To help our students think beyond the borders of our state, we host motivational talks from speakers within and outside India. These confidence-building measures aim to make our children globally competitive. Artistic and sporting skills are encouraged on campus, alongside social concern and moral values.",
          "No institution can grow in strength without the guidance and blessings of God Almighty. The Christuraja family will continue to build the lives of coming generations for the good of mankind and for the greater glory of God.",
        ],
      },
    ],
  },
  {
    section: "about",
    slug: "vision-mission",
    title: "Vision and mission",
    lede: "Education at Christuraja is meant to form the whole person — intellect, spirit, character and body — for the good of society.",
    blocks: [
      {
        type: "cards",
        items: [
          {
            title: "Our vision",
            text: "To develop the young generation as intellectually competent, spiritually mature, morally upright, psychologically integrated, physically healthy and socially acceptable persons, for the betterment of society at large.",
          },
          {
            title: "Our mission",
            text: "Imparting quality education to all irrespective of caste and creed. Giving ample opportunities to grow in faith in God Almighty, accepting and living the principles of truth, charity and hope. Illuminating young minds with the Gospel message of love.",
          },
        ],
      },
      { type: "heading", text: "Our motto" },
      {
        type: "paragraphs",
        text: [
          "“Knowledge is to serve.” Learning at Christuraja is never an end in itself. Every lesson, laboratory session and competition is meant to prepare students to serve their families, their community and their country with competence and compassion.",
        ],
      },
      {
        type: "callout",
        title: "A school for everyone",
        text: "Admission is open to all children irrespective of caste, creed or status. Most of our students come from the rural communities around Marthandam.",
        href: "/academics/admission-policy",
        cta: "Read the admission policy",
      },
    ],
  },
  {
    section: "about",
    slug: "history",
    title: "History of the school",
    lede: "In 1971 a small kindergarten with 23 children was handed to the Daughters of Mary. Today more than 3,000 students learn across four blocks of the Christuraja campus.",
    blocks: [
      {
        type: "paragraphs",
        text: [
          "The Lions Club kindergarten school was handed over to the Daughters of Mary, Marthandam in 1971 for better management, with a strength of 23 children. From then on the institution was run by the Sisters of the D.M. Convent under the able guidance of the Director, Rev. Fr. Msgr. Joseph Kuzhinjalil, and the Manager, Rev. Mother Mary Kallarackal D.M.",
          "The management was particular about combining the best academics with general knowledge. A literary association for children was introduced as early as 1973, and the school had its own van in its second year. New buildings came up as the student strength grew. Classes always began with the morning assembly — prayer song, pledge, moral reading and news headlines.",
          "Co-curricular activities, tours and visits to the homes of the disabled were very much part of the school's agenda even in the 1980s, in keeping with its vision and mission.",
          "From June 1990 the school was upgraded to a High School. When the first batch of Class X students appeared for the Board examination in 1995, the school secured centum results with state ranks. In 1997 the first batch of girls appeared for the Class XII public examinations; boys were admitted to Class XI in 2006. Almost every year students have topped the public examinations at zonal, district and state levels, and cent percent results in Classes X and XII have become routine.",
          "Our students take part in competitions at district, state and national levels and return with prizes. They present projects and papers not only in India but abroad. Having started with new buildings for a few hundred students in 1992, the campus has grown to a capacity of 3,000+ students, with laboratories, a seminar hall, language lab, auditorium, indoor play area and libraries distributed across four buildings named after St. Francis of Assisi, Msgr. Joseph Kuzhinjalil, Mother Mary Kallarackal and St. Little Therese.",
        ],
      },
      { type: "heading", text: "Milestones" },
      {
        type: "timeline",
        items: [
          { year: "1971", title: "A new beginning", text: "Lions Club kindergarten handed over to the Daughters of Mary with 23 children. Rev. Sr. Prima D.M. becomes the first Principal." },
          { year: "1973", title: "Literary association", text: "A literary association is started for the children — the first of many clubs." },
          { year: "1990", title: "Upgraded to High School", text: "Classes extended up to Standard X." },
          { year: "1992", title: "New buildings", text: "Purpose-built blocks for hundreds of students." },
          { year: "1995", title: "First Class X batch", text: "Centum results with state ranks in the very first Board examination." },
          { year: "1997", title: "Higher Secondary", text: "First batch of girls appears for the Class XII public examination." },
          { year: "2006", title: "Co-education at +2", text: "Boys admitted to Class XI." },
          { year: "Today", title: "3,000+ students", text: "Four blocks, modern labs, auditorium and a computerised library — and the same motto." },
        ],
      },
      { type: "heading", text: "Principals of Christuraja" },
      {
        type: "people",
        items: [
          { name: "Rev. Sr. Prima D.M.", role: "1971 – 1972" },
          { name: "Rev. Sr. Francina D.M.", role: "1972 – 1974" },
          { name: "Rev. Sr. Prima D.M.", role: "1974 – 1979" },
          { name: "Rev. Sr. Lilly Thomas D.M.", role: "1979 – 1980" },
          { name: "Rev. Sr. Rita Maria D.M.", role: "1980 – 1982" },
          { name: "Rev. Sr. Tresa Joseph D.M.", role: "1982 – 1987" },
          { name: "Rev. Sr. Patsy Francis D.M.", role: "1987 – 2003" },
          { name: "Rev. Sr. Lizza Francis D.M.", role: "2003 – 2014" },
          { name: "Rev. Sr. Preema Kurian D.M.", role: "2014 – present" },
        ],
      },
    ],
  },
  {
    section: "about",
    slug: "management",
    title: "Board of management",
    lede: "Christuraja is run by the Congregation of the Daughters of Mary, St. Joseph's Province, Marthandam.",
    blocks: [
      {
        type: "people",
        items: [
          { name: "Rev. Mother Anila Christy D.M.", role: "Manager", note: "Provincial Superior, St. Joseph's Province, Congregation of the Daughters of Mary, Marthandam" },
          { name: "Rev. Sr. Angel Therese D.M.", role: "Correspondent" },
          { name: "Rev. Sr. Preema Kurian D.M.", role: "Principal" },
          { name: "Rev. Sr. Salvia D.M.", role: "Vice Principal" },
          { name: "Rev. Sr. Philamine D.M.", role: "Board member" },
          { name: "Rev. Sr. Athmaja D.M.", role: "Board member" },
          { name: "Rev. Sr. Reeja Celine D.M.", role: "Board member" },
        ],
      },
      { type: "heading", text: "Founders" },
      {
        type: "paragraphs",
        text: [
          "The school owes its foundation to Rev. Fr. Msgr. Joseph Kuzhinjalil, Director, and Rev. Mother Mary Kallarackal D.M., Manager, who took charge of the kindergarten in 1971. Two of the four campus blocks are named in their honour, and the school awards special prizes each year in memory of its founders.",
        ],
      },
    ],
  },
  {
    section: "about",
    slug: "infrastructure",
    title: "Infrastructure",
    lede: "Four blocks, well-furnished laboratories, a language lab, smart classrooms, a 2,000-book library and open grounds.",
    blocks: [
      {
        type: "paragraphs",
        text: [
          "Students have the privilege of using good and well-furnished Physics, Chemistry, Botany, Zoology and Computer laboratories. A Language Lab has been introduced to enhance communicative skills, and smart classes support learning across levels. Students of all classes use the library with its collection of over 2,000 books, journals, magazines and newspapers. The school has well-kept gardens, a park and a playground.",
        ],
      },
      {
        type: "imageGrid",
        labels: ["Language lab", "Chemistry lab", "Physics lab", "Library", "Playground", "Auditorium"],
      },
      {
        type: "cards",
        items: [
          { title: "Laboratories", items: ["Physics", "Chemistry", "Botany", "Zoology", "Computer science", "Mathematics", "Language lab"] },
          { title: "Learning spaces", items: ["Smart classrooms", "Seminar hall", "Auditorium", "Computerised library with 2,000+ books", "Indoor play area"] },
          { title: "Campus", items: ["Four blocks: St. Francis of Assisi, Msgr. Joseph Kuzhinjalil, Mother Mary Kallarackal, St. Little Therese", "Gardens and park", "Playground", "CCTV-monitored, security at the gates", "Rest rooms on every floor and block"] },
        ],
      },
    ],
  },

  /* --------------------------------------------------------- Academics */
  {
    section: "academics",
    slug: "admission-policy",
    title: "Admission policy",
    lede: "Our academic year begins in June. Admission is open to all, irrespective of caste, creed or status.",
    blocks: [
      {
        type: "paragraphs",
        text: [
          "Every student enrolled in our institution should feel that he or she is a privileged person and a special gift of God. As the word itself suggests, each of our students is expected to be:",
        ],
      },
      {
        type: "acrostic",
        word: "STUDENT",
        meanings: ["Studious", "Truthful", "Upright", "Diligent", "Enterprising", "Noble", "Trustworthy"],
      },
      {
        type: "paragraphs",
        text: [
          "Our school aims at a high academic standard and stresses co-curricular activities, with ample opportunities provided for all to develop all-round personalities. It maintains a high standard of discipline. No recommendation is entertained for any admission. The Principal reserves the right to accept or refuse any child who seeks admission to this school.",
          "A student will be asked to leave the school if they do not fit in with the regulations of the school.",
          "Admission to higher classes is based on the availability of seats and entrance tests. Admission to Class XI (+1) for students from other schools is on the basis of marks secured in Class X.",
        ],
      },
      {
        type: "cards",
        items: [
          { title: "Classes offered", items: ["Pre-KG, LKG, UKG", "Standards I – X", "Higher Secondary XI – XII"] },
          { title: "Higher Secondary groups", items: ["Maths – Computer Science", "Maths – Biology", "Pure Science"] },
          { title: "Documents usually required", items: ["Birth certificate", "Transfer certificate (Std I and above)", "Previous year's progress report", "Aadhaar and EMIS number", "Passport-size photographs", "Community certificate, if applicable"] },
        ],
      },
      {
        type: "callout",
        title: "Apply online",
        text: "Fill in the online application and the school office will get in touch about the next steps.",
        href: "/admissions",
        cta: "Start an application",
      },
    ],
  },
  {
    section: "academics",
    slug: "curriculum",
    title: "Curriculum and assessment",
    lede: "Kindergarten to Class XII is organised in five levels, with weekly, monthly and term tests and proficiency prizes at every level.",
    blocks: [
      {
        type: "table",
        caption: "Levels of schooling",
        head: ["Level", "Classes"],
        rows: [
          ["Level I", "Kindergarten (Pre-KG, LKG, UKG)"],
          ["Level II", "Standards I to V"],
          ["Level III", "Standards VI to VIII"],
          ["Level IV", "Standards IX and X"],
          ["Level V", "Standards XI and XII"],
        ],
      },
      {
        type: "paragraphs",
        text: [
          "Weekly, monthly and term tests are obligatory. Answer papers are given to parents along with the progress card. The answer scripts and progress card for the final examination are retained by the school. Proficiency prizes are awarded at every level to students on merit, based on grades.",
        ],
      },
      {
        type: "table",
        caption: "Grading scale",
        head: ["Grade", "Description", "Marks (%)"],
        rows: [
          ["O", "Outstanding", "95 – 100"],
          ["A1", "Excellent", "90 – 94"],
          ["A2", "Very good", "80 – 89"],
          ["B1", "Good", "71 – 79"],
          ["B2", "Average", "61 – 70"],
          ["C1", "Fair", "51 – 60"],
          ["C2", "Pass", "40 – 50"],
          ["D", "To be strengthened", "21 – 39"],
          ["E1", "Very poor", "0 – 20"],
        ],
      },
      {
        type: "paragraphs",
        text: [
          "A card called a “token of appreciation” is awarded on the basis of academics, communication, behaviour, sports and cultural events. The school also awards special prizes in honour of its founders. To make students competitive nationally and internationally, they are encouraged to take special examinations such as ICAS, DCL, IMSC and ASCENT, and Trinity graded examinations in English communication.",
        ],
      },
      {
        type: "cards",
        items: [
          { title: "Higher Secondary groups", items: ["Maths – Computer Science", "Maths – Biology", "Pure Science"] },
          { title: "Languages", items: ["English (medium of instruction)", "Tamil", "Language lab for spoken English"] },
          { title: "E-campus", items: ["Web-based learning system", "Access to teaching resources", "Access to learning resources"] },
        ],
      },
    ],
  },
  {
    section: "academics",
    slug: "timing-anthem",
    title: "School timing and anthem",
    lede: "Classes run from 8.50 a.m. to 3.30 p.m. on working days and 9.00 a.m. to 12.30 p.m. on Saturdays.",
    blocks: [
      {
        type: "table",
        caption: "School hours",
        head: ["Day", "Hours"],
        rows: [
          ["Monday – Friday", "8.50 a.m. – 3.30 p.m."],
          ["Saturday", "9.00 a.m. – 12.30 p.m."],
          ["Holidays", "No school business; office matters are handled in the school office only"],
        ],
      },
      { type: "heading", text: "School anthem" },
      {
        type: "paragraphs",
        text: [
          "Our school anthem reminds students that it is God who blesses us each day, and that the years passing by are precious moments of childhood.",
        ],
      },
      {
        type: "verse",
        lines: [
          "God bless our dear Christuraja School",
          "With blessings rich, peace and love",
          "Of wisdom, 'neath its kindly rule",
          "And every gift from heaven above",
          "To sisters dear and teachers kind",
          "Our thankfulness we gladly owe",
          "Sweet memories in our past we find",
          "When childhood years have quickly flown",
        ],
      },
    ],
  },
  {
    section: "academics",
    slug: "general-directives",
    title: "General directives",
    lede: "Expectations that keep 3,000 students learning safely and happily together.",
    draft: true,
    blocks: [
      {
        type: "list",
        items: [
          "Students must be in school before the first bell. Late-comers report to the office before going to class.",
          "The school diary must be brought every day and shown to parents; notes from teachers are to be signed by a parent.",
          "Leave of absence requires a written request from the parent in the diary. Absence of more than three days without notice may lead to the name being struck off the rolls.",
          "Students are responsible for their own belongings. Valuables, mobile phones and electronic gadgets are not permitted on campus.",
          "English is spoken on campus to help every student gain confidence in the language.",
          "Damage to school property is to be made good by the student concerned.",
          "Parents meet teachers on the days fixed for parent–teacher meetings or by prior appointment through the office.",
          "Fees are paid within the dates announced each term.",
          "Students must not leave the campus during school hours without written permission from the Principal.",
        ],
      },
    ],
  },
  {
    section: "academics",
    slug: "dress-code-clubs",
    title: "Dress code, uniform and clubs",
    lede: "A neat uniform and an active club life are both part of being a Christuraja student.",
    draft: true,
    blocks: [
      { type: "heading", text: "Uniform" },
      {
        type: "list",
        items: [
          "The prescribed school uniform is worn on all working days, clean and well pressed, with the school badge and identity card.",
          "Sports uniform is worn on the days of physical education periods and sports events.",
          "Black shoes and the prescribed socks; hair neatly cut (boys) or plaited and tied with black ribbons (girls).",
          "No jewellery other than small ear studs; nails trimmed; no colouring of hair.",
        ],
      },
      { type: "heading", text: "Clubs" },
      {
        type: "cards",
        items: [
          { title: "Academic clubs", items: ["Maths club", "Science club", "Language clubs", "Literary association", "Robotics club"] },
          { title: "Service & citizenship", items: ["Scouts and Guides", "Junior Red Cross (JRC)", "Green Corps", "Interact Club"] },
          { title: "Enrichment", items: ["Aptitude tests: ICAS, DCL, IMSC, ASCENT", "Trinity graded exams in English communication", "Quiz and debate"] },
        ],
      },
    ],
  },
  {
    section: "academics",
    slug: "golden-rules",
    title: "Golden rules for students",
    lede: "Simple rules, kept every day, that make the school a place where everyone can learn.",
    draft: true,
    blocks: [
      {
        type: "list",
        columns: 2,
        items: [
          "Be punctual, regular and prepared for every class.",
          "Greet teachers, elders and one another with respect.",
          "Speak the truth and own up to mistakes.",
          "Keep the classroom, campus and surroundings clean.",
          "Move quietly in corridors and on the stairs.",
          "Take care of books, furniture and school property as your own.",
          "Help a classmate who is struggling.",
          "Practise fair play in every game and competition.",
          "Use kind words; bullying in any form is never tolerated.",
          "Remember the motto: knowledge is to serve.",
        ],
      },
    ],
  },
  {
    section: "academics",
    slug: "students-group",
    title: "Student groups and houses",
    lede: "Every student belongs to a house, and every house competes, performs and serves together through the year.",
    draft: true,
    blocks: [
      {
        type: "cards",
        items: [
          { title: "Houses", text: "Students from Standard I upwards are divided into four houses for sports, cultural competitions and campus duties. House points are tallied through the year and the champion house is honoured on Annual Day." },
          { title: "Student council", text: "School Pupil Leader, assistant leaders, house captains and class leaders are elected each June and invested in a formal ceremony. The council assists with assembly, discipline and events." },
          { title: "Service groups", text: "Scouts and Guides, JRC, Green Corps and the Interact Club carry out campus greening, blood-donation drives, awareness rallies and visits to homes for the elderly and differently-abled." },
        ],
      },
    ],
  },
  {
    section: "academics",
    slug: "projects-counselling",
    title: "Projects and counselling",
    lede: "Students present projects and papers in India and abroad; a counselling programme supports their wellbeing.",
    draft: true,
    blocks: [
      { type: "heading", text: "Projects" },
      {
        type: "paragraphs",
        text: [
          "Project-based learning is part of the curriculum at every level. Science, mathematics and social science exhibitions give students a platform to present their work to parents and visitors, and the best projects go on to district, state and national competitions. Our students have presented projects and papers not only in India but outside the country as well.",
        ],
      },
      { type: "heading", text: "Counselling" },
      {
        type: "paragraphs",
        text: [
          "A trained counsellor is available on campus for students who need guidance with studies, friendships, stress or choices after Class X and XII. Sessions are confidential. Career guidance programmes and motivational talks by speakers from India and abroad are arranged for the senior classes every year.",
        ],
      },
    ],
  },
  {
    section: "academics",
    slug: "pta-staff",
    title: "PTA and staff committees",
    lede: "Parents, teachers and management work together as one Christuraja family.",
    draft: true,
    blocks: [
      {
        type: "paragraphs",
        text: [
          "The Parent–Teacher Association meets at the start of each academic year and before major events. Class-wise parent meetings are held after every term examination, when progress cards and answer papers are shared with parents.",
        ],
      },
      {
        type: "cards",
        items: [
          { title: "Academic committee", text: "Plans the academic calendar, examinations and remedial classes." },
          { title: "Discipline committee", text: "Upholds the general directives and the golden rules in a fair and caring way." },
          { title: "Cultural & sports committee", text: "Organises Annual Day, Sports Day, inter-house competitions and celebrations." },
          { title: "Health & safety committee", text: "Oversees first aid, the sick room, transport safety and campus security." },
        ],
      },
    ],
  },
  {
    section: "academics",
    slug: "faculties",
    title: "Faculty",
    lede: "An experienced team of teaching and non-teaching staff who know their students by name.",
    draft: true,
    blocks: [
      {
        type: "paragraphs",
        text: [
          "Christuraja's teachers are qualified, experienced and regularly trained in new methods of teaching. Alongside subject teaching, staff lead clubs, coach teams and mentor students through their board examinations. Department lists and staff profiles will be published here.",
        ],
      },
      {
        type: "cards",
        items: [
          { title: "Kindergarten & primary", items: ["Class teachers for Pre-KG to Standard V", "Music and dance instructors from LKG", "Physical education"] },
          { title: "Middle & high school", items: ["English, Tamil", "Mathematics", "Science", "Social science", "Computer science"] },
          { title: "Higher secondary", items: ["Physics, Chemistry", "Biology (Botany & Zoology)", "Mathematics", "Computer science", "English"] },
        ],
      },
    ],
  },

  /* -------------------------------------------------------- Facilities */
  {
    section: "facilities",
    slug: "salient-features",
    title: "Salient features",
    lede: "Education, sports, music, arts and values — imparted together, in a campus built for children.",
    blocks: [
      {
        type: "paragraphs",
        text: [
          "The school strives to impart education, sports, music, arts and values holistically. Learning by activity helps children assimilate subjects more easily. Classrooms are spacious and well ventilated, with fans and lights, keeping in mind the comfort of pupils. The school aims at promoting creativity in a very conducive teaching–learning atmosphere.",
          "The campus is eco-friendly and students are monitored with CCTV. The gates are manned by security personnel. State-of-the-art labs give effective exposure to language, science, computers and mathematics. Well-maintained rest rooms are available on every floor and in every block.",
        ],
      },
      {
        type: "cards",
        items: [
          { title: "Hi-tech infrastructure", items: ["Physics and Chemistry labs", "Botany and Zoology labs", "Computer and Language labs", "Maths lab", "Park and playground"] },
          { title: "Faculty", items: ["Experienced teaching staff", "Excellent learning experiences", "Joyful environment"] },
          { title: "E-campus", items: ["Web-based learning system", "Teaching and learning resources online"] },
          { title: "Library", items: ["Computerised library", "2,000+ books", "Journals, magazines and newspapers"] },
          { title: "Safety", items: ["CCTV across campus", "Security personnel at the gates", "Clean rest rooms on every floor"] },
          { title: "Transport", items: ["School buses covering Marthandam and surrounding villages"] },
        ],
      },
    ],
  },
  {
    section: "facilities",
    slug: "co-curricular",
    title: "Co-curricular activities",
    lede: "Clubs, competitions and service that have been part of Christuraja since the 1970s.",
    blocks: [
      {
        type: "list",
        columns: 2,
        items: [
          "Maths, Science and Language clubs",
          "Literary Association (since 1973)",
          "Scouts and Guides",
          "Green Corps, JRC and Interact Club",
          "Robotics Club",
          "Aptitude tests: ICAS, DCL, IMSC, ASCENT",
          "Trinity graded exams for English communication",
          "Quiz, story-writing and fancy-dress competitions",
          "Science exhibitions and project presentations",
          "Educational tours and visits",
        ],
      },
      {
        type: "paragraphs",
        text: [
          "Students take part in competitions at district, state and national levels and come back with prizes. Online competitions — quiz, picture-story writing and fancy dress — keep the younger classes engaged even outside the campus.",
        ],
      },
    ],
  },
  {
    section: "facilities",
    slug: "sports-music",
    title: "Sports, music and dance",
    lede: "Music and dance classes begin at LKG; sport is for every child, not only the team.",
    blocks: [
      {
        type: "cards",
        items: [
          { title: "Sports", items: ["Throwball and volleyball", "Shuttle badminton", "Basketball", "Table tennis and tennikoit", "Chess and carrom", "Athletics"] },
          { title: "Music", items: ["Vocal", "Guitar", "Keyboard", "Classes from LKG"] },
          { title: "Dance", items: ["Classical dance", "Western dance", "Cinematic dance"] },
        ],
      },
      {
        type: "paragraphs",
        text: [
          "The playground, indoor play area and auditorium host inter-house tournaments, the annual Sports Day and the cultural programmes of Annual Day. Students who show promise are coached for zonal and district meets.",
        ],
      },
      { type: "imageGrid", labels: ["Sports Day", "Basketball court", "Music class", "Dance performance"] },
    ],
  },
  {
    section: "facilities",
    slug: "medical-transport",
    title: "Medical care and transport",
    lede: "A sick room, first aid and a fleet of buses that has grown with the school since its second year.",
    draft: true,
    blocks: [
      {
        type: "cards",
        items: [
          { title: "Medical care", text: "A sick room with first-aid facilities is available on campus, and a nearby hospital is on call for emergencies. Annual health check-ups and dental and eye camps are arranged for students. Parents are informed immediately if a child falls ill." },
          { title: "Transport", text: "School buses cover Marthandam town and the surrounding villages on fixed routes with trained drivers and attendants. The school had its own van as early as 1972, its second year. Route details and fees are available from the school office." },
        ],
      },
    ],
  },
  {
    section: "facilities",
    slug: "celebrations",
    title: "Celebrations",
    lede: "A school year punctuated by festivals, national days and the two big days every student waits for.",
    draft: true,
    blocks: [
      {
        type: "cards",
        items: [
          { title: "Annual Day", text: "Cultural programmes, prize distribution and the honouring of toppers and the champion house." },
          { title: "Sports Day", text: "March past, athletics and inter-house finals on the school ground." },
          { title: "Founder's Day", text: "10 August — the school's birthday, with special prizes in honour of the founders." },
          { title: "National days", text: "Independence Day, Republic Day and Teachers' Day." },
          { title: "Festivals", text: "Christmas, Pongal, Onam and other festivals celebrated together as one family." },
          { title: "Graduation & investiture", text: "Kindergarten graduation, student-council investiture and the Class XII farewell." },
        ],
      },
    ],
  },
  {
    section: "facilities",
    slug: "relationship",
    title: "Community and relationships",
    lede: "The school, its parents, its alumni and the people of Marthandam have grown together for five decades.",
    draft: true,
    blocks: [
      {
        type: "paragraphs",
        text: [
          "Christuraja draws most of its students from the rural communities in and around Marthandam, and has produced civil servants, doctors, scientists, journalists, engineers, teachers, professors and business people spread across the globe. Above all, it has produced citizens who cherish human values.",
          "Service has been part of the school since the 1980s, when students visited the homes of the disabled. Today the Interact Club, JRC and Green Corps continue that tradition, while the Christuraja Alumni Association keeps former students connected with their school and with one another.",
        ],
      },
      {
        type: "callout",
        title: "Christuraja Alumni Association",
        text: "Former students can register as members and join the next reunion.",
        href: "/alumni",
        cta: "Visit the alumni page",
      },
    ],
  },
];

export const sectionMeta = {
  about: { label: "About the school", href: "/about/history" },
  academics: { label: "Academics", href: "/academics/curriculum" },
  facilities: { label: "Campus life", href: "/facilities/salient-features" },
} as const;

export function getPage(section: string, slug: string) {
  return pages.find((p) => p.section === section && p.slug === slug);
}

export function getSectionPages(section: Page["section"]) {
  return pages.filter((p) => p.section === section);
}
