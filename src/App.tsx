// @ts-nocheck
import { useState, useEffect, useMemo } from 'react';
import {
  BookOpen, Award, Users, CheckCircle, Clock, ShieldCheck, Search, Filter,
  ChevronRight, ArrowRight, Play, FileText, Download, User, LogIn,
  Settings, BarChart2, Bell, Menu, X, Globe, Star, HelpCircle, Phone,
  Mail, MapPin, Check, AlertCircle, RefreshCw, Eye, Lock, Unlock,
  Layers, DollarSign, Tag, TrendingUp, BookMarked, Sparkles, Send,
  Sliders, Database, Cpu, ExternalLink, ThumbsUp, HelpCircle as HelpIcon,
  CheckSquare, Square, CornerDownRight, Plus, Trash2, Edit3, Save, Upload,
  Briefcase, GraduationCap, Building, Compass, Activity, Zap
} from 'lucide-react';

// ==========================================
// TRANSLATIONS (EN, HI, AS)
// ==========================================
const translations = {
  en: {
    brandName: "MOCK ACADEMY",
    tagline: "Prepare. Practice. Perform.",
    home: "Home",
    allExams: "All Exams",
    mockTests: "Mock Tests",
    topicPractice: "Topic Practice",
    studyMaterials: "Study Materials",
    pyq: "PYQ",
    pricing: "Pricing",
    aboutUs: "About Us",
    contactUs: "Contact Us",
    login: "Login",
    register: "Register",
    studentDashboard: "Student Dashboard",
    adminDashboard: "Admin Dashboard",
    heroTitle: "Your Journey to Government Job Success Starts Here.",
    heroSubtitle: "India's premier competitive examination preparation platform for SSC, Railways, Banking, and State Level examinations with AI-powered analytics and expert test series.",
    searchPlaceholder: "Search exams, mock tests, topics, or PDFs...",
    exploreExams: "Explore Exams",
    startPracticing: "Start Practicing",
    featuredExams: "Featured Examination Categories",
    popularTests: "Popular Mock Tests",
    latestMaterials: "Latest Study Materials",
    whyChooseUs: "Why Choose MOCK ACADEMY",
    faqTitle: "Frequently Asked Questions",
    startTest: "Start Test",
    viewDetails: "View Details",
    downloadPdf: "Download (Demo)",
    previewPdf: "Preview PDF",
    free: "Free",
    paid: "Paid",
    premium: "Premium",
    filters: "Filters",
    applyFilters: "Apply Filters",
    submit: "Submit",
    next: "Next",
    previous: "Previous",
    markReview: "Mark for Review & Next",
    clearResponse: "Clear Response",
    timeRemaining: "Time Remaining",
    questionPalette: "Question Palette",
    answered: "Answered",
    unanswered: "Unanswered",
    marked: "Marked",
    notVisited: "Not Visited",
    resultSummary: "Test Result & Analysis",
    accuracy: "Accuracy",
    score: "Score",
    correct: "Correct",
    incorrect: "Incorrect",
    unattempted: "Unattempted",
    solutions: "Detailed Solutions",
    prototypeNotice: "Prototype & Demonstration Mode: All data shown is simulated for evaluation purposes."
  },
  hi: {
    brandName: "मॉक अकादमी",
    tagline: "तैयारी। अभ्यास। सफलता।",
    home: "होम",
    allExams: "सभी परीक्षाएं",
    mockTests: "मॉक टेस्ट",
    topicPractice: "विषय अभ्यास",
    studyMaterials: "अध्ययन सामग्री",
    pyq: "पिछले वर्ष के प्रश्न",
    pricing: "मूल्य निर्धारण",
    aboutUs: "हमारे बारे में",
    contactUs: "संपर्क करें",
    login: "लॉगिन",
    register: "रजिस्टर",
    studentDashboard: "छात्र डैशबोर्ड",
    adminDashboard: "एडमिन डैशबोर्ड",
    heroTitle: "सरकारी नौकरी की सफलता की आपकी यात्रा यहीं से शुरू होती है।",
    heroSubtitle: "SSC, रेलवे, बैंकिंग और राज्य स्तरीय परीक्षाओं के लिए भारत का प्रमुख प्रतिस्पर्धी परीक्षा तैयारी मंच।",
    searchPlaceholder: "परीक्षाएं, मॉक टेस्ट, विषय या पीडीएफ खोजें...",
    exploreExams: "परीक्षाएं देखें",
    startPracticing: "अभ्यास शुरू करें",
    featuredExams: "प्रमुख परीक्षा श्रेणियां",
    popularTests: "लोकप्रिय मॉक टेस्ट",
    latestMaterials: "नवीनतम अध्ययन सामग्री",
    whyChooseUs: "मॉक अकादमी क्यों चुनें",
    faqTitle: "अक्सर पूछे جانے वाले प्रश्न",
    startTest: "टेस्ट शुरू करें",
    viewDetails: "विवरण देखें",
    downloadPdf: "डाउनलोड (डेमो)",
    previewPdf: "पीडीएफ पूर्वावलोकन",
    free: "मुफ्त",
    paid: "सशुल्क",
    premium: "प्रीमियम",
    filters: "फ़िल्टर",
    applyFilters: "फ़िल्टर लागू करें",
    submit: "जमा करें",
    next: "अगला",
    previous: "पिछला",
    markReview: "समीक्षा के लिए चिह्नित करें",
    clearResponse: "उत्तर साफ़ करें",
    timeRemaining: "शेष समय",
    questionPalette: "प्रश्न पैलेट",
    answered: "उत्तर दिया गया",
    unanswered: "अनुत्तरित",
    marked: "चिन्हित",
    notVisited: "नहीं देखा गया",
    resultSummary: "परीक्षा परिणाम और विश्लेषण",
    accuracy: "सटीकता",
    score: "स्कोर",
    correct: "सही",
    incorrect: "गलत",
    unattempted: "अप्रयासित",
    solutions: "विस्तृत समाधान",
    prototypeNotice: "प्रोटोटाइप और प्रदर्शन मोड: दिखाया गया सभी डेटा सिमुलेटेड है।"
  },
  as: {
    brandName: "মক একাডেমী",
    tagline: "প্ৰস্তুতি। অভ্যাস। সফলত।",
    home: "মূল পৃষ্ঠা",
    allExams: "সকলো পৰীক্ষা",
    mockTests: "মক টেষ্ট",
    topicPractice: "বিষয়ভিত্তিক অভ্যাস",
    studyMaterials: "অধ্যয়ন সামগ্ৰী",
    pyq: "পূৰ্বৰ বৰ্ষৰ প্ৰশ্ন",
    pricing: "মূল্য তালিকা",
    aboutUs: "আমাৰ বিষয়ে",
    contactUs: "যোগাযোগ",
    login: "লগইন",
    register: "পঞ্জীয়ন",
    studentDashboard: "ছাত্ৰ ডেশ্ববৰ্ড",
    adminDashboard: "প্ৰশাসক ডেশ্ববৰ্ড",
    heroTitle: "চৰকাৰী চাকৰিৰ সফলতালৈ আপোনাৰ যাত্ৰা ইয়াতেই আৰম্ভ হয়।",
    heroSubtitle: "এছ.এছ.চি., ৰে'লৱে, বেংকিং আৰু অসম চৰকাৰৰ পৰীক্ষাসমূহৰ বাবে ভাৰতৰ অগ্ৰণী প্ৰতিযোগিতামূলক পৰীক্ষা প্ৰস্তুতি প্লেটফৰ্ম।",
    searchPlaceholder: "পৰীক্ষা, মক টেষ্ট, বা PDF বিচাৰক...",
    exploreExams: "পৰীক্ষাৰ তালিকা",
    startPracticing: "অভ্যাস আৰম্ভ কৰক",
    featuredExams: "প্ৰধান পৰীক্ষাৰ শ্ৰেণীসমূহ",
    popularTests: "জনপ্ৰিয় মক টেষ্ট",
    latestMaterials: "শেহতীয়া অধ্যয়ন সামগ্ৰী",
    whyChooseUs: "মক একাডেমী কিয় বাছি ল'ব",
    faqTitle: "সঘনাই সোধা প্ৰশ্নসমূহ",
    startTest: "টেষ্ট আৰম্ভ কৰক",
    viewDetails: "বিৱৰণ চাওক",
    downloadPdf: "ডাউনলোড (ডেমো)",
    previewPdf: "পি.ডি.এফ. প্ৰিভিউ",
    free: "বিনামূলীয়া",
    paid: "পেড",
    premium: "প্ৰিমিয়াম",
    filters: "ফিল্টাৰ",
    applyFilters: "ফিল্টাৰ প্ৰয়োগ কৰক",
    submit: "জমা দিয়ক",
    next: "পৰৱৰ্তী",
    previous: "আগৰ",
    markReview: "পুনৰ্বিবেচনাৰ বাবে চিহ্নিত কৰক",
    clearResponse: "উত্তৰ মচি পেলাওক",
    timeRemaining: "বাকী থকা সময়",
    questionPalette: "প্ৰশ্ন পেলেট",
    answered: "উত্তৰ দিয়া হ'ল",
    unanswered: "উত্তৰ দিয়া হোৱা নাই",
    marked: "চিহ্নিত",
    notVisited: "চৰা হোৱা নাই",
    resultSummary: "পৰীক্ষাৰ ফলাফল আৰু বিশ্লেষণ",
    accuracy: "নিখুঁততা",
    score: "স্ক'ৰ",
    correct: "শুদ্ধ",
    incorrect: "ভুল",
    unattempted: "চেষ্টা কৰা হোৱা নাই",
    solutions: "বিশদ সমাধান",
    prototypeNotice: "প্ৰ’টোটাইপ মোড: প্ৰদৰ্শিত সকলো তথ্য ডেমো উদ্দেশ্যৰ বাবে।"
  }
};

// ==========================================
// MOCK DATA STORAGE
// ==========================================
const categoriesData = [
  { id: 'ssc', name: 'SSC Examinations', icon: 'Award', count: '14 Exams', desc: 'CGL, CHSL, MTS, GD, CPO & Selection Post', color: 'bg-blue-900 text-white' },
  { id: 'railway', name: 'Railway (RRB)', icon: 'Train', count: '8 Exams', desc: 'NTPC, Group D, ALP, Technician & JE', color: 'bg-indigo-900 text-white' },
  { id: 'banking', name: 'Banking & Insurance', icon: 'Building', count: '10 Exams', desc: 'IBPS PO/Clerk, SBI PO/Clerk & RRB', color: 'bg-slate-900 text-white' },
  { id: 'assam', name: 'Assam State Exams', icon: 'Compass', count: '12 Exams', desc: 'ADRE Grade III & IV, Assam Police, APSC', color: 'bg-blue-800 text-white' },
];

const mockTestsData = [
  { id: 1, name: 'SSC CGL Tier-1 Full Length Grand Mock 2026', exam: 'SSC CGL', subject: 'Full Syllabus', duration: '60 Mins', questions: 100, marks: 200, lang: 'English / Hindi', type: 'Free', difficulty: 'Moderate', rating: 4.8 },
  { id: 2, name: 'RRB NTPC CBT-1 Advanced Practice Set', exam: 'RRB NTPC', subject: 'General Awareness & Quant', duration: '90 Mins', questions: 100, marks: 100, lang: 'Trilingual (Eng/Hi/As)', type: 'Paid', difficulty: 'Hard', rating: 4.9 },
  { id: 3, name: 'IBPS PO Prelims Speed Booster Test', exam: 'IBPS PO', subject: 'Reasoning & English', duration: '60 Mins', questions: 100, marks: 100, lang: 'English / Hindi', type: 'Free', difficulty: 'Moderate', rating: 4.7 },
  { id: 4, name: 'ADRE Grade III Comprehensive Mock Test', exam: 'ADRE Grade III', subject: 'Assam GK & General Studies', duration: '120 Mins', questions: 150, marks: 150, lang: 'Assamese / English', type: 'Free', difficulty: 'Moderate', rating: 4.9 },
  { id: 5, name: 'SBI Clerk Prelims Memory Based Paper', exam: 'SBI Clerk', subject: 'Quantitative Aptitude', duration: '60 Mins', questions: 100, marks: 100, lang: 'English / Hindi', type: 'Paid', difficulty: 'Easy', rating: 4.6 },
  { id: 6, name: 'SSC CHSL Tier-1 English Comprehension Special', exam: 'SSC CHSL', subject: 'English', duration: '30 Mins', questions: 50, marks: 100, lang: 'English', type: 'Free', difficulty: 'Moderate', rating: 4.8 },
];

const sampleQuestions = [
  {
    id: 1,
    question: "Which of the following rivers is known as the 'Sorrow of Bihar'?",
    options: ["Yamuna", "Kosi", "Brahmaputra", "Mahanadi"],
    correct: 1,
    explanation: "The Kosi River is known as the 'Sorrow of Bihar' because of its annual floods which affect thousands of people and alter its course frequently."
  },
  {
    id: 2,
    question: "What is the standard voting age in India as per the Constitution?",
    options: ["21 years", "18 years", "25 years", "19 years"],
    correct: 1,
    explanation: "By the 61st Constitutional Amendment Act of 1988, the voting age in India was reduced from 21 years to 18 years."
  },
  {
    id: 3,
    question: "In which year was the Battle of Plassey fought?",
    options: ["1757", "1764", "1857", "1799"],
    correct: 0,
    explanation: "The Battle of Plassey was fought on 23 June 1757 between the British East India Company and the Nawab of Bengal Siraj-ud-daulah."
  },
  {
    id: 4,
    question: "Which gas is most abundant in the Earth's atmosphere?",
    options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
    correct: 2,
    explanation: "Nitrogen makes up about 78% of the Earth's atmosphere, followed by Oxygen at approximately 21%."
  },
  {
    id: 5,
    question: "The Kaziranga National Park, famous for One-horned Rhinoceros, is located in which state?",
    options: ["West Bengal", "Assam", "Odisha", "Uttarakhand"],
    correct: 1,
    explanation: "Kaziranga National Park is a UNESCO World Heritage site located in the Golaghat and Nagaon districts of Assam, India."
  },
  {
    id: 6,
    question: "What is the SI unit of electric current?",
    options: ["Volt", "Ohm", "Ampere", "Watt"],
    correct: 2,
    explanation: "The Ampere (symbol: A) is the base unit of electric current in the International System of Units (SI)."
  },
  {
    id: 7,
    question: "Who appoints the Chief Justice of India?",
    options: ["Prime Minister", "President of India", "Law Minister", "Vice President"],
    correct: 1,
    explanation: "The Chief Justice of India and other judges of the Supreme Court are appointed by the President of India under Article 124(2) of the Constitution."
  },
  {
    id: 8,
    question: "Which vitamin is also known as Ascorbic Acid?",
    options: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
    correct: 2,
    explanation: "Vitamin C is a water-soluble vitamin also known scientifically as ascorbic acid, vital for tissue repair and immune function."
  },
  {
    id: 9,
    question: "Bihu is the principal folk festival of which Indian state?",
    options: ["Kerala", "Assam", "Punjab", "Tamil Nadu"],
    correct: 1,
    explanation: "Bihu is a set of three cultural festivals of Assam namely Rongali Bihu, Kongali Bihu, and Bhogali Bihu."
  },
  {
    id: 10,
    question: "The headquarters of the Reserve Bank of India (RBI) is located in:",
    options: ["New Delhi", "Kolkata", "Mumbai", "Chennai"],
    correct: 2,
    explanation: "The central office of the Reserve Bank of India was initially established in Kolkata but was permanently moved to Mumbai in 1937."
  }
];

const studyMaterialsData = [
  { id: 1, title: 'Complete Indian History & National Movement Handbooks', exam: 'SSC CGL', subject: 'History', topic: 'Modern India', lang: 'English', type: 'Free', pages: 184, date: 'May 2026' },
  { id: 2, title: 'Quantitative Aptitude Formula & Shortcut Compendium', exam: 'Banking PO', subject: 'Quant', topic: 'Arithmetic & DI', lang: 'English / Hindi', type: 'Free', pages: 120, date: 'April 2026' },
  { id: 3, title: 'Assam State GK & Current Affairs Yearbook 2026', exam: 'ADRE Grade III', subject: 'Assam GK', topic: 'State Geography & Polity', lang: 'Assamese / English', type: 'Premium', pages: 210, date: 'May 2026' },
  { id: 4, title: 'RRB NTPC General Science One-Liner Digest', exam: 'RRB NTPC', subject: 'Science', topic: 'Physics, Chemistry, Biology', lang: 'Trilingual', type: 'Free', pages: 95, date: 'March 2026' },
  { id: 5, title: 'Reasoning Puzzles & Seating Arrangement Masterclass', exam: 'SBI Clerk', subject: 'Reasoning', topic: 'Logical Reasoning', lang: 'English', type: 'Premium', pages: 160, date: 'May 2026' },
];

const pyqData = [
  { id: 1, title: 'SSC CGL 2025 Tier-1 Official Memory Based Paper with Solutions', exam: 'SSC CGL', year: '2025', shift: 'Shift 1 (12 Aug)', questions: 100, type: 'Free' },
  { id: 2, title: 'IBPS PO Prelims 2025 Shift-Wise Solved Question Papers', exam: 'IBPS PO', year: '2025', shift: 'All Shifts', questions: 100, type: 'Free' },
  { id: 3, title: 'ADRE Grade III 2024 Question Paper with Detailed Explanations', exam: 'ADRE Grade III', year: '2024', shift: 'Paper 1 (HSSLC Level)', questions: 150, type: 'Free' },
  { id: 4, title: 'RRB NTPC CBT-1 2024 Memory Based Solved Set', exam: 'RRB NTPC', year: '2024', shift: 'Shift 3', questions: 100, type: 'Free' },
];

const pricingData = [
  {
    id: 'test_pass',
    name: 'MOCK TEST PASS',
    price: '₹399',
    validity: '6 Months Validity',
    desc: 'Ideal for aspirants focused on practicing full-length tests & sectional quizzes.',
    features: ['500+ Full Length Mock Tests', 'SSC, Banking & Railway Tests Included', 'All-India Rank & Percentile Analysis', 'Detailed Solutions & Explanations', 'Mobile App Access'],
    popular: false,
    color: 'border-slate-200'
  },
  {
    id: 'mega_pass',
    name: 'MEGA PASS (RECOMMENDED)',
    price: '₹799',
    validity: '12 Months Validity',
    desc: 'Complete access to all mock tests, previous year papers, and chapter tests.',
    features: ['1,500+ Mock Tests Across All Exams', 'Complete Assam State Exams (ADRE, Police, APSC)', '10 Years Previous Year Papers Solved', 'Advanced AI Weak-Area Identification', 'Bilingual Support (Eng/Hin/Assamese)', 'Priority Support'],
    popular: true,
    color: 'border-blue-600 ring-2 ring-blue-600 shadow-xl'
  },
  {
    id: 'super_elite',
    name: 'SUPER ELITE PASS',
    price: '₹1,499',
    validity: '24 Months Lifetime Access',
    desc: 'Ultimate all-inclusive preparation suite with study notes and live webinar access.',
    features: ['Unlimited Mock Tests & Topic Tests', 'All E-Books & PDF Study Material Library', 'Live Doubt Clearing Sessions', 'Expert Faculty Mentorship', '100% Refund Guarantee on Selection', 'Dedicated Telegram Community Access'],
    popular: false,
    color: 'border-indigo-200'
  },
];

// ==========================================
// SARJIS EDUCATION HUB - OFFICIAL CONTACTS & NEW STUDENT FEATURES DATA
// ==========================================
const officialContacts = {
  hubName: "SARJIS EDUCATION HUB",
  hubTagline: "Premier National Competitive Examination & EdTech Initiative",
  founderEmails: [
    "sarjissalman3@gmail.com",
    "joonsalman31@gmail.com"
  ],
  businessEmails: [
    "admin@mockadmin.inc.in",
    "support@mockadmin.inc.in"
  ],
  corporateDomain: "mockadmin.inc.in",
  helpline: "+91 98765 43210"
};

const upcomingExamsCountdown = [
  { id: 'cgl', exam: 'SSC CGL 2026 Tier-I', daysLeft: 42, status: 'Notification Out', color: 'bg-blue-600', posts: '17,727+ Posts' },
  { id: 'adre', exam: 'ADRE Grade III & IV', daysLeft: 28, status: 'Admit Card Soon', color: 'bg-emerald-600', posts: '12,600+ Posts' },
  { id: 'ntpc', exam: 'RRB NTPC CBT-1', daysLeft: 64, status: 'Registration Active', color: 'bg-indigo-600', posts: '11,558+ Posts' },
  { id: 'ibps', exam: 'IBPS PO Prelims 2026', daysLeft: 51, status: 'Syllabus Updated', color: 'bg-amber-600', posts: '4,455+ Posts' }
];

const dailyCurrentAffairsData = [
  {
    id: 1,
    tag: 'Assam Special',
    title: 'Assam Cabinet approves new Industrial & Green Energy Corridor across 5 districts',
    summary: 'Key point for ADRE & APSC Prelims: Project aims to generate 25,000+ direct youth employment opportunities by 2027.',
    time: 'Today, 7:30 AM'
  },
  {
    id: 2,
    tag: 'Economy & Banking',
    title: 'RBI launches next-gen UPI Interoperable Digital Rupee facility for rural cooperative banks',
    summary: 'Important for IBPS PO/Clerk & SBI Exams: Focuses on financial inclusion and zero-latency offline transactions.',
    time: 'Today, 8:15 AM'
  },
  {
    id: 3,
    tag: 'National & SSC',
    title: 'ISRO successfully tests indigenous reusable launch vehicle landing experiment (RLV-LEX3)',
    summary: 'High-probability question for SSC CGL & RRB NTPC General Science & Technology section.',
    time: 'Today, 9:00 AM'
  }
];

const dailyBoosterQuiz = {
  question: "Which Constitutional Amendment Act added Fundamental Duties (Article 51A) to the Indian Constitution?",
  options: [
    "42nd Amendment Act, 1976",
    "44th Amendment Act, 1978",
    "86th Amendment Act, 2002",
    "73rd Amendment Act, 1992"
  ],
  correctIndex: 0,
  explanation: "The 42nd Amendment Act of 1976 added 10 Fundamental Duties to Part IV-A (Article 51A) on the recommendation of the Swaran Singh Committee."
};

const toppersLeaderboard = [
  { rank: 1, name: 'Ankita Bora', city: 'Guwahati, Assam', exam: 'ADRE Grade III', score: '146.5 / 150', accuracy: '98.2%', streak: '45 Days' },
  { rank: 2, name: 'Sauravjyoti Kalita', city: 'Jorhat, Assam', exam: 'SSC CGL Tier-1', score: '188.0 / 200', accuracy: '96.5%', streak: '39 Days' },
  { rank: 3, name: 'Rohit Verma', city: 'New Delhi', exam: 'RRB NTPC', score: '94.5 / 100', accuracy: '95.8%', streak: '33 Days' },
  { rank: 4, name: 'Priyanka Das', city: 'Silchar, Assam', exam: 'IBPS PO', score: '89.0 / 100', accuracy: '94.1%', streak: '29 Days' },
];

// ==========================================
// MAIN APP COMPONENT
// ==========================================
export default function App() {
  // Navigation & State Management
  const [activePage, setActivePage] = useState('home');
  const [currentLang, setCurrentLang] = useState('en');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  
  // Test Demo State
  const [activeTest, setActiveTest] = useState(null);
  const [testStarted, setTestStarted] = useState(false);
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [markedForReview, setMarkedForReview] = useState({});
  const [testSubmitted, setTestSubmitted] = useState(false);
  const [testTimer, setTestTimer] = useState(600); // 10 minutes demo

  // PDF Preview Modal State
  const [previewPdf, setPreviewPdf] = useState(null);
  const [selectedPlan, setSelectedPlan] = useState<{
  name: string;
  price: string;
  validity: string;
  desc: string;
  features: string[];
} | null>(null);

const [demoOrderComplete, setDemoOrderComplete] = useState(false);
  
  // Notification banner state
  const [notification, setNotification] = useState({ show: false, message: '' });

  // New Interactive Student Engagement States
  const [dailyPollAnswer, setDailyPollAnswer] = useState(null);
  const [studyStreak, setStudyStreak] = useState(14);
  const [savedNotesCount, setSavedNotesCount] = useState(3);
  const [hubConfig, setHubConfig] = useState({
    bannerTitle: "SARJIS EDUCATION HUB",
    primaryEmail1: "sarjissalman3@gmail.com",
    primaryEmail2: "joonsalman31@gmail.com",
    businessEmail1: "admin@mockadmin.inc.in",
    businessEmail2: "support@mockadmin.inc.in"
  });

  const t = translations[currentLang];

  // Trigger Notification helper
  const showToast = (msg) => {
    setNotification({ show: true, message: msg });
    setTimeout(() => setNotification({ show: false, message: '' }), 3500);
  };

  // Copy email helper
  const copyToClipboard = (text, label = "Email") => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text);
    }
    showToast(`${label} copied: ${text}`);
  };

  // Timer effect for active test
  useEffect(() => {
    let timer;
    if (testStarted && !testSubmitted && testTimer > 0) {
      timer = setInterval(() => setTestTimer(prev => prev - 1), 1000);
    } else if (testTimer === 0 && testStarted && !testSubmitted) {
      setTestSubmitted(true);
      showToast("Time's up! Test submitted automatically.");
    }
    return () => clearInterval(timer);
  }, [testStarted, testSubmitted, testTimer]);

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activePage]);

  // Calculate Test Results
  const testResults = useMemo(() => {
    if (!testSubmitted) return null;
    let correctCount = 0;
    let incorrectCount = 0;
    let unattemptedCount = 0;

    sampleQuestions.forEach((q, idx) => {
      const userAns = userAnswers[idx];
      if (userAns === undefined) {
        unattemptedCount++;
      } else if (userAns === q.correct) {
        correctCount++;
      } else {
        incorrectCount++;
      }
    });

    const score = correctCount * 2 - incorrectCount * 0.5;
    const accuracy = (correctCount / (correctCount + incorrectCount || 1)) * 100;
    
    return {
      correct: correctCount,
      incorrect: incorrectCount,
      unattempted: unattemptedCount,
      score: Math.max(0, score),
      accuracy: accuracy.toFixed(1)
    };
  }, [testSubmitted, userAnswers]);

  // ==========================================
  // RENDER ICON HELPER
  // ==========================================
  const renderIcon = (name, className = "w-6 h-6") => {
    switch(name) {
      case 'Award': return <Award className={className} />;
      case 'Train': return <FileText className={className} />;
      case 'Building': return <Building className={className} />;
      case 'Compass': return <Compass className={className} />;
      default: return <BookOpen className={className} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#F5F7FB] text-[#0B1730] font-sans selection:bg-blue-600 selection:text-white flex flex-col">
      
      {/* Toast Notification */}
      {notification.show && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#0B1730] text-white px-5 py-3 rounded-xl shadow-2xl flex items-center space-x-3 border border-blue-500 animate-bounce">
          <Sparkles className="w-5 h-5 text-blue-400" />
          <span className="text-sm font-medium">{notification.message}</span>
        </div>
      )}

      {/* ================= GRAND MASTER TOP BANNER: SARJIS EDUCATION HUB ================= */}
      <div className="bg-gradient-to-r from-[#060d1d] via-[#1D4ED8] to-[#060d1d] text-white py-2.5 px-4 border-b border-blue-400/30 shadow-md">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
          <div className="flex items-center space-x-3">
            <span className="bg-amber-400 text-[#0B1730] text-[10px] font-black px-2.5 py-0.5 rounded-md uppercase tracking-widest shadow-sm flex items-center space-x-1">
              <GraduationCap className="w-3.5 h-3.5 mr-1" />
              <span>Official Initiative</span>
            </span>
            <span className="text-sm sm:text-base font-black tracking-wider uppercase text-white drop-shadow">
              {hubConfig.bannerTitle}
            </span>
            <span className="hidden lg:inline-block text-xs text-blue-200 font-medium border-l border-blue-400/40 pl-3">
              Premier National Competitive Examination Ecosystem
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 text-[11px] font-semibold text-blue-100">
            <button
              onClick={() => copyToClipboard(hubConfig.primaryEmail1, "Founder Email")}
              className="hover:text-amber-300 transition flex items-center space-x-1 bg-white/10 px-2.5 py-1 rounded-md border border-white/15"
              title="Click to copy email"
            >
              <Mail className="w-3 h-3 text-amber-400" />
              <span>{hubConfig.primaryEmail1}</span>
            </button>
            <button
              onClick={() => copyToClipboard(hubConfig.businessEmail1, "Business Email")}
              className="hover:text-amber-300 transition flex items-center space-x-1 bg-white/10 px-2.5 py-1 rounded-md border border-white/15"
              title="Click to copy business email"
            >
              <Briefcase className="w-3 h-3 text-blue-300" />
              <span>{hubConfig.businessEmail1}</span>
            </button>
          </div>
        </div>
      </div>

      {/* ================= TOP ANNOUNCEMENT BAR ================= */}
      <div className="bg-[#0B1730] text-blue-200 text-xs py-2 px-4 text-center font-medium border-b border-blue-900/50 flex flex-wrap items-center justify-center gap-2">
        <span className="bg-blue-600 text-white text-[10px] px-2 py-0.5 rounded-full uppercase tracking-wider font-bold">Live 2026</span>
        <span>SARJIS EDUCATION HUB Special: ADRE Grade III & IV, SSC CGL & Railway Test Series Live Now!</span>
        <button onClick={() => setActivePage('mock-tests')} className="underline text-amber-400 font-bold hover:text-amber-300 ml-1">Attempt Free Mock →</button>
      </div>

      {/* ================= NAVIGATION BAR ================= */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between min-h-[72px] py-2.5 gap-3">
            
            {/* Brand Logo - Protected with shrink-0 and whitespace-nowrap so it never wraps or overlaps */}
            <div className="flex items-center gap-3 cursor-pointer shrink-0" onClick={() => setActivePage('home')}>
              <div className="w-11 h-11 shrink-0 bg-gradient-to-br from-[#0B1730] to-[#1D4ED8] rounded-xl flex items-center justify-center text-white font-black text-xl shadow-md border border-blue-500/30">
                S
              </div>
              <div className="flex flex-col justify-center">
                <div className="text-[10px] font-extrabold tracking-widest text-blue-700 uppercase whitespace-nowrap leading-none mb-0.5">
                  {hubConfig.bannerTitle}
                </div>
                <div className="text-lg xl:text-xl font-black tracking-tight text-[#0B1730] whitespace-nowrap leading-none">
                  MOCK <span className="text-[#1D4ED8]">ACADEMY</span>
                </div>
                <div className="text-[10px] font-semibold text-slate-500 whitespace-nowrap leading-none mt-1">
                  Topper's Adda • Prepare. Practice. Perform.
                </div>
              </div>
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden 2xl:flex items-center gap-1 xl:gap-1.5 text-xs xl:text-sm font-semibold text-slate-700 shrink-0">
              <button onClick={() => setActivePage('home')} className={`px-2 py-1.5 rounded-lg whitespace-nowrap transition hover:text-blue-600 hover:bg-slate-50 ${activePage === 'home' ? 'text-blue-600 font-bold bg-blue-50/60' : ''}`}>{t.home}</button>
              <button onClick={() => setActivePage('all-exams')} className={`px-2 py-1.5 rounded-lg whitespace-nowrap transition hover:text-blue-600 hover:bg-slate-50 ${activePage === 'all-exams' ? 'text-blue-600 font-bold bg-blue-50/60' : ''}`}>{t.allExams}</button>
              <button onClick={() => setActivePage('mock-tests')} className={`px-2 py-1.5 rounded-lg whitespace-nowrap transition hover:text-blue-600 hover:bg-slate-50 ${activePage === 'mock-tests' ? 'text-blue-600 font-bold bg-blue-50/60' : ''}`}>{t.mockTests}</button>
              <button onClick={() => setActivePage('topic-practice')} className={`px-2 py-1.5 rounded-lg whitespace-nowrap transition hover:text-blue-600 hover:bg-slate-50 ${activePage === 'topic-practice' ? 'text-blue-600 font-bold bg-blue-50/60' : ''}`}>{t.topicPractice}</button>
              <button onClick={() => setActivePage('study-materials')} className={`px-2 py-1.5 rounded-lg whitespace-nowrap transition hover:text-blue-600 hover:bg-slate-50 ${activePage === 'study-materials' ? 'text-blue-600 font-bold bg-blue-50/60' : ''}`}>{t.studyMaterials}</button>
              <button onClick={() => setActivePage('pyq')} className={`px-2 py-1.5 rounded-lg whitespace-nowrap transition hover:text-blue-600 hover:bg-slate-50 ${activePage === 'pyq' ? 'text-blue-600 font-bold bg-blue-50/60' : ''}`}>{t.pyq}</button>
              <button onClick={() => setActivePage('pricing')} className={`px-2 py-1.5 rounded-lg whitespace-nowrap transition hover:text-blue-600 hover:bg-slate-50 ${activePage === 'pricing' ? 'text-blue-600 font-bold bg-blue-50/60' : ''}`}>{t.pricing}</button>
              <button onClick={() => setActivePage('about-us')} className={`px-2 py-1.5 rounded-lg whitespace-nowrap transition hover:text-blue-600 hover:bg-slate-50 ${activePage === 'about-us' ? 'text-blue-600 font-bold bg-blue-50/60' : ''}`}>{t.aboutUs}</button>
              <button onClick={() => setActivePage('contact-us')} className={`px-2 py-1.5 rounded-lg whitespace-nowrap transition hover:text-blue-600 hover:bg-slate-50 ${activePage === 'contact-us' ? 'text-blue-600 font-bold bg-blue-50/60' : ''}`}>{t.contactUs}</button>
            </nav>

            {/* Compact Desktop Navigation Links for Laptop/Large Screens (lg to 2xl) */}
            <nav className="hidden lg:flex 2xl:hidden items-center gap-1 text-xs font-semibold text-slate-700 shrink-0">
              <button onClick={() => setActivePage('home')} className={`px-2 py-1.5 rounded-lg whitespace-nowrap transition hover:text-blue-600 ${activePage === 'home' ? 'text-blue-600 font-bold bg-blue-50/60' : ''}`}>{t.home}</button>
              <button onClick={() => setActivePage('all-exams')} className={`px-2 py-1.5 rounded-lg whitespace-nowrap transition hover:text-blue-600 ${activePage === 'all-exams' ? 'text-blue-600 font-bold bg-blue-50/60' : ''}`}>{t.allExams}</button>
              <button onClick={() => setActivePage('mock-tests')} className={`px-2 py-1.5 rounded-lg whitespace-nowrap transition hover:text-blue-600 ${activePage === 'mock-tests' ? 'text-blue-600 font-bold bg-blue-50/60' : ''}`}>{t.mockTests}</button>
              <button onClick={() => setActivePage('study-materials')} className={`px-2 py-1.5 rounded-lg whitespace-nowrap transition hover:text-blue-600 ${activePage === 'study-materials' ? 'text-blue-600 font-bold bg-blue-50/60' : ''}`}>{t.studyMaterials}</button>
              <button onClick={() => setActivePage('pricing')} className={`px-2 py-1.5 rounded-lg whitespace-nowrap transition hover:text-blue-600 ${activePage === 'pricing' ? 'text-blue-600 font-bold bg-blue-50/60' : ''}`}>{t.pricing}</button>
              <button onClick={() => setActivePage('contact-us')} className={`px-2 py-1.5 rounded-lg whitespace-nowrap transition hover:text-blue-600 ${activePage === 'contact-us' ? 'text-blue-600 font-bold bg-blue-50/60' : ''}`}>{t.contactUs}</button>
            </nav>

            {/* Right Actions: Streak, Language Selector, Dashboard & Auth */}
            <div className="hidden lg:flex items-center gap-2 shrink-0">
              
              {/* Gamified Study Streak Counter */}
              <div 
                onClick={() => showToast(`Awesome! You are on a ${studyStreak}-Day Study Streak on SARJIS EDUCATION HUB!`)}
                className="cursor-pointer flex items-center space-x-1 bg-amber-50 border border-amber-200 text-amber-800 px-2.5 py-1.5 rounded-lg text-xs font-black shadow-sm hover:bg-amber-100 transition whitespace-nowrap"
                title="Daily Practice Streak"
              >
                <Zap className="w-3.5 h-3.5 text-amber-500 fill-current shrink-0" />
                <span>{studyStreak}d</span>
              </div>

              {/* Language Selector */}
              <div className="relative flex items-center bg-slate-100 border border-slate-200 rounded-lg px-2 py-1.5 shrink-0">
                <Globe className="w-3.5 h-3.5 text-slate-500 mr-1 shrink-0" />
                <select 
                  value={currentLang} 
                  onChange={(e) => {
                    setCurrentLang(e.target.value);
                    showToast(`Language switched to ${e.target.value.toUpperCase()}`);
                  }}
                  className="bg-transparent text-xs font-semibold text-slate-700 outline-none cursor-pointer"
                >
                  <option value="en">EN</option>
                  <option value="hi">हिंदी</option>
                  <option value="as">অসমীয়া</option>
                </select>
              </div>

              {/* Dashboard Buttons */}
              <button 
                onClick={() => setActivePage('student-dashboard')}
                className="text-xs font-bold px-2.5 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-[#0B1730] transition flex items-center space-x-1 border border-slate-200 whitespace-nowrap"
              >
                <User className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                <span>Student</span>
              </button>

              <button 
                onClick={() => setActivePage('admin-dashboard')}
                className="text-xs font-bold px-2.5 py-1.5 rounded-lg bg-indigo-50 hover:bg-indigo-100 text-indigo-900 transition flex items-center space-x-1 border border-indigo-200 whitespace-nowrap"
              >
                <Sliders className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
                <span>Admin</span>
              </button>

              {/* Auth Buttons */}
              <button 
                onClick={() => setActivePage('login')}
                className="text-xs font-bold px-3 py-1.5 rounded-lg text-blue-600 hover:bg-blue-50 transition border border-blue-200 whitespace-nowrap"
              >
                {t.login}
              </button>
              <button 
                onClick={() => setActivePage('register')}
                className="text-xs font-bold px-3 py-1.5 rounded-lg bg-[#1D4ED8] hover:bg-blue-700 text-white transition shadow-sm whitespace-nowrap"
              >
                {t.register}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center space-x-2 2xl:hidden">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-lg bg-slate-100 text-slate-700 hover:bg-slate-200"
                title="Open Navigation Menu"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className="2xl:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-3 shadow-xl">
            <div className="grid grid-cols-2 gap-2 pt-2 pb-3 border-b border-slate-100">
              <button onClick={() => { setActivePage('student-dashboard'); setIsMobileMenuOpen(false); }} className="text-left text-xs font-bold p-2.5 rounded-lg bg-slate-100 text-slate-800 flex items-center space-x-2">
                <User className="w-4 h-4 text-blue-600" />
                <span>Student Dashboard</span>
              </button>
              <button onClick={() => { setActivePage('admin-dashboard'); setIsMobileMenuOpen(false); }} className="text-left text-xs font-bold p-2.5 rounded-lg bg-indigo-50 text-indigo-900 flex items-center space-x-2">
                <Sliders className="w-4 h-4 text-indigo-600" />
                <span>Admin Dashboard</span>
              </button>
            </div>

            <div className="flex flex-col space-y-2 text-sm font-semibold text-slate-700">
              <button onClick={() => { setActivePage('home'); setIsMobileMenuOpen(false); }} className="text-left py-2 hover:text-blue-600">{t.home}</button>
              <button onClick={() => { setActivePage('all-exams'); setIsMobileMenuOpen(false); }} className="text-left py-2 hover:text-blue-600">{t.allExams}</button>
              <button onClick={() => { setActivePage('mock-tests'); setIsMobileMenuOpen(false); }} className="text-left py-2 hover:text-blue-600">{t.mockTests}</button>
              <button onClick={() => { setActivePage('topic-practice'); setIsMobileMenuOpen(false); }} className="text-left py-2 hover:text-blue-600">{t.topicPractice}</button>
              <button onClick={() => { setActivePage('study-materials'); setIsMobileMenuOpen(false); }} className="text-left py-2 hover:text-blue-600">{t.studyMaterials}</button>
              <button onClick={() => { setActivePage('pyq'); setIsMobileMenuOpen(false); }} className="text-left py-2 hover:text-blue-600">{t.pyq}</button>
              <button onClick={() => { setActivePage('pricing'); setIsMobileMenuOpen(false); }} className="text-left py-2 hover:text-blue-600">{t.pricing}</button>
              <button onClick={() => { setActivePage('about-us'); setIsMobileMenuOpen(false); }} className="text-left py-2 hover:text-blue-600">{t.aboutUs}</button>
              <button onClick={() => { setActivePage('contact-us'); setIsMobileMenuOpen(false); }} className="text-left py-2 hover:text-blue-600">{t.contactUs}</button>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Globe className="w-4 h-4 text-slate-500" />
                <select 
                  value={currentLang} 
                  onChange={(e) => setCurrentLang(e.target.value)}
                  className="bg-slate-100 text-xs font-semibold p-1.5 rounded-lg outline-none"
                >
                  <option value="en">English</option>
                  <option value="hi">हिंदी</option>
                  <option value="as">অসমীয়া</option>
                </select>
              </div>

              <div className="flex space-x-2">
                <button onClick={() => { setActivePage('login'); setIsMobileMenuOpen(false); }} className="text-xs font-bold px-3 py-2 text-blue-600 border border-blue-200 rounded-lg">{t.login}</button>
                <button onClick={() => { setActivePage('register'); setIsMobileMenuOpen(false); }} className="text-xs font-bold px-3 py-2 bg-blue-600 text-white rounded-lg">{t.register}</button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* ================= MAIN CONTENT RENDERER ================= */}
      <main className="flex-grow">
        
        {/* 1. HOME PAGE */}
        {activePage === 'home' && (
          <div>
            {/* Hero Section */}
            <section className="relative bg-gradient-to-b from-[#0B1730] via-[#0f224a] to-[#0B1730] text-white py-20 px-4 overflow-hidden">
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#60A5FA_1px,transparent_1px)] [background-size:16px_16px]"></div>
              
              <div className="max-w-7xl mx-auto relative z-10 text-center max-w-4xl">
                {/* Prominent SARJIS EDUCATION HUB Hero Banner */}
                <div className="inline-flex flex-wrap items-center justify-center gap-2 bg-gradient-to-r from-amber-500/20 via-blue-500/30 to-amber-500/20 border border-amber-400/50 text-amber-300 px-5 py-2 rounded-full text-xs sm:text-sm font-black mb-6 shadow-lg tracking-wide uppercase">
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  <span>{hubConfig.bannerTitle} • Topper's Adda (MOCK ACADEMY)</span>
                </div>
                
                <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-tight mb-6">
                  Your Journey to Government Job Success <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-amber-300">Starts Here.</span>
                </h1>
                
                <p className="text-base sm:text-lg text-slate-300 mb-10 leading-relaxed font-normal max-w-3xl mx-auto">
                  {t.heroSubtitle}
                </p>

                {/* Search Bar Widget */}
                <div className="bg-white p-2 rounded-2xl shadow-2xl max-w-2xl mx-auto flex items-center space-x-2 border border-slate-200">
                  <div className="flex items-center pl-3 text-slate-400">
                    <Search className="w-5 h-5" />
                  </div>
                  <input 
                    type="text" 
                    placeholder={t.searchPlaceholder}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full py-3 px-2 text-slate-800 text-sm outline-none bg-transparent font-medium"
                  />
                  <button 
                    onClick={() => setActivePage('mock-tests')}
                    className="bg-[#1D4ED8] hover:bg-blue-700 text-white font-bold px-6 py-3 rounded-xl transition text-sm whitespace-nowrap shadow-md"
                  >
                    Search
                  </button>
                </div>

                {/* Quick Action Buttons */}
                <div className="mt-8 flex flex-wrap justify-center gap-4">
                  <button 
                    onClick={() => setActivePage('all-exams')}
                    className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold px-6 py-3 rounded-xl transition text-sm flex items-center space-x-2 backdrop-blur-sm"
                  >
                    <span>{t.exploreExams}</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                  <button 
                    onClick={() => setActivePage('mock-tests')}
                    className="bg-blue-600 hover:bg-blue-500 text-white font-bold px-6 py-3 rounded-xl transition text-sm flex items-center space-x-2 shadow-lg"
                  >
                    <span>{t.startPracticing}</span>
                    <Play className="w-4 h-4 fill-current" />
                  </button>
                </div>

                {/* Trust Metrics */}
                <div className="mt-16 pt-12 border-t border-slate-800 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-black text-blue-400">12.5 Lakh+</div>
                    <div className="text-xs text-slate-400 mt-1 uppercase font-semibold">Active Aspirants</div>
                  </div>
                  <div>
                    <div className="text-3xl font-black text-blue-400">1,500+</div>
                    <div className="text-xs text-slate-400 mt-1 uppercase font-semibold">Comprehensive Mocks</div>
                  </div>
                  <div>
                    <div className="text-3xl font-black text-blue-400">45,000+</div>
                    <div className="text-xs text-slate-400 mt-1 uppercase font-semibold">Selections Recorded</div>
                  </div>
                  <div>
                    <div className="text-3xl font-black text-blue-400">99.4%</div>
                    <div className="text-xs text-slate-400 mt-1 uppercase font-semibold">Accuracy Rating</div>
                  </div>
                </div>

              </div>
            </section>

            {/* NEW FEATURE 1: LIVE EXAM COUNTDOWN & VACANCY TRACKER */}
            <section className="py-10 px-4 bg-white border-b border-slate-200 shadow-sm">
              <div className="max-w-7xl mx-auto">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-2">
                  <div className="flex items-center space-x-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500 animate-ping"></span>
                    <h2 className="text-lg font-black text-[#0B1730] uppercase tracking-wide">Live Exam Countdown & Vacancy Radar 2026</h2>
                  </div>
                  <span className="text-xs font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">Updated Daily by SARJIS EDUCATION HUB</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {upcomingExamsCountdown.map((item) => (
                    <div key={item.id} className="bg-[#F5F7FB] rounded-2xl p-5 border border-slate-200 hover:border-blue-500 transition flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-800">{item.status}</span>
                          <span className="text-xs font-extrabold text-emerald-700">{item.posts}</span>
                        </div>
                        <h3 className="font-black text-[#0B1730] text-base">{item.exam}</h3>
                      </div>

                      <div className="mt-4 pt-3 border-t border-slate-200/80 flex items-center justify-between">
                        <div className="flex items-center space-x-1.5">
                          <Clock className="w-4 h-4 text-rose-600" />
                          <span className="text-sm font-black text-rose-600">{item.daysLeft} Days Left</span>
                        </div>
                        <button 
                          onClick={() => setActivePage('mock-tests')}
                          className="text-xs font-bold text-blue-600 hover:underline flex items-center"
                        >
                          <span>Practice</span>
                          <ChevronRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Featured Examination Categories */}
            <section className="py-20 px-4 max-w-7xl mx-auto">
              <div className="text-center max-w-2xl mx-auto mb-14">
                <h2 className="text-3xl font-black text-[#0B1730] mb-3">{t.featuredExams}</h2>
                <p className="text-slate-600 text-sm">Choose your target examination category to access specialized test series, PYQs, and notes.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {categoriesData.map((cat) => (
                  <div 
                    key={cat.id} 
                    onClick={() => setActivePage('all-exams')}
                    className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer group hover:-translate-y-1"
                  >
                    <div className={`w-14 h-14 rounded-2xl ${cat.color} flex items-center justify-center mb-5 shadow-md group-hover:scale-110 transition`}>
                      {renderIcon(cat.icon, "w-7 h-7")}
                    </div>
                    <h3 className="text-lg font-black text-[#0B1730] mb-1 group-hover:text-blue-600 transition">{cat.name}</h3>
                    <div className="text-xs font-bold text-blue-600 bg-blue-50 inline-block px-2.5 py-1 rounded-md mb-3">{cat.count}</div>
                    <p className="text-xs text-slate-500 leading-relaxed">{cat.desc}</p>
                    <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-700 group-hover:text-blue-600">
                      <span>Explore Series</span>
                      <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition" />
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* NEW FEATURE 2: DAILY CURRENT AFFAIRS CAPSULE & 1-MINUTE RAPID BOOSTER POLL */}
            <section className="py-16 px-4 bg-white border-y border-slate-200">
              <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Left 7 Cols: Daily Current Affairs Express */}
                <div className="lg:col-span-7 space-y-4">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <span className="text-[11px] font-black uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full">Daily Preparation Dose</span>
                      <h2 className="text-2xl font-black text-[#0B1730] mt-2">Today's Exam Current Affairs Express</h2>
                    </div>
                    <button 
                      onClick={() => setActivePage('study-materials')}
                      className="text-xs font-bold text-blue-600 hover:underline"
                    >
                      Download Monthly PDF →
                    </button>
                  </div>

                  <div className="space-y-4">
                    {dailyCurrentAffairsData.map((ca) => (
                      <div key={ca.id} className="bg-[#F5F7FB] p-5 rounded-2xl border border-slate-200 hover:shadow-md transition">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-[10px] font-black uppercase px-2.5 py-0.5 rounded-md bg-[#0B1730] text-white">{ca.tag}</span>
                          <span className="text-[11px] text-slate-400 font-semibold">{ca.time}</span>
                        </div>
                        <h3 className="font-bold text-[#0B1730] text-sm sm:text-base mb-1.5">{ca.title}</h3>
                        <p className="text-xs text-slate-600 leading-relaxed mb-3">{ca.summary}</p>
                        <button
                          onClick={() => {
                            setSavedNotesCount(prev => prev + 1);
                            showToast("Saved to your Student Dashboard Revision Notes!");
                          }}
                          className="text-[11px] font-bold text-blue-600 hover:text-blue-800 flex items-center space-x-1"
                        >
                          <BookMarked className="w-3.5 h-3.5" />
                          <span>Bookmark for Revision ({savedNotesCount})</span>
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right 5 Cols: Interactive Question of the Day Live Poll */}
                <div className="lg:col-span-5 bg-gradient-to-br from-[#0B1730] to-[#162a56] text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-blue-800">
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-amber-400 text-[#0B1730] text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-wider">
                      1-Min Daily Booster Poll
                    </span>
                    <span className="text-xs text-blue-200 font-semibold flex items-center space-x-1">
                      <Zap className="w-3.5 h-3.5 text-amber-400 fill-current" />
                      <span>+1 Streak Point</span>
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-white mb-5 leading-snug">
                    Q. {dailyBoosterQuiz.question}
                  </h3>

                  <div className="space-y-2.5 mb-6">
                    {dailyBoosterQuiz.options.map((opt, idx) => {
                      const isAnswered = dailyPollAnswer !== null;
                      const isSelected = dailyPollAnswer === idx;
                      const isCorrect = idx === dailyBoosterQuiz.correctIndex;

                      let optionStyle = "bg-white/10 border-white/15 text-slate-100 hover:bg-white/20";
                      if (isAnswered) {
                        if (isCorrect) optionStyle = "bg-emerald-600/30 border-emerald-400 text-emerald-200 font-bold";
                        else if (isSelected) optionStyle = "bg-rose-600/30 border-rose-400 text-rose-200";
                      }

                      return (
                        <button
                          key={idx}
                          disabled={isAnswered}
                          onClick={() => {
                            setDailyPollAnswer(idx);
                            if (idx === dailyBoosterQuiz.correctIndex) {
                              setStudyStreak(prev => prev + 1);
                              showToast("Correct Answer! +1 Day Study Streak Added!");
                            } else {
                              showToast("Attempt recorded! Check the explanation below.");
                            }
                          }}
                          className={`w-full text-left p-3.5 rounded-xl border text-xs transition flex items-center justify-between ${optionStyle}`}
                        >
                          <span>{String.fromCharCode(65 + idx)}. {opt}</span>
                          {isAnswered && isCorrect && <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />}
                        </button>
                      );
                    })}
                  </div>

                  {dailyPollAnswer !== null && (
                    <div className="bg-blue-950/80 border border-blue-700/60 rounded-2xl p-4 text-xs text-blue-100 leading-relaxed mb-4">
                      <span className="font-black text-amber-400 block mb-1">
                        {dailyPollAnswer === dailyBoosterQuiz.correctIndex ? "🎉 Spot On! Correct Answer:" : "💡 Key Solution Note:"}
                      </span>
                      {dailyBoosterQuiz.explanation}
                    </div>
                  )}

                  <div className="pt-4 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-300">
                    <span>14,820 students attempted today</span>
                    {dailyPollAnswer !== null && (
                      <button onClick={() => setDailyPollAnswer(null)} className="text-amber-400 font-bold underline">
                        Reset Poll
                      </button>
                    )}
                  </div>
                </div>

              </div>
            </section>

            {/* Popular Mock Tests */}
            <section className="py-16 px-4 bg-slate-100 border-b border-slate-200">
              <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
                  <div>
                    <h2 className="text-3xl font-black text-[#0B1730] mb-2">{t.popularTests}</h2>
                    <p className="text-slate-600 text-sm">Attempt expert-curated test series designed on latest exam patterns.</p>
                  </div>
                  <button onClick={() => setActivePage('mock-tests')} className="mt-4 md:mt-0 text-sm font-bold text-blue-600 hover:text-blue-700 flex items-center space-x-1">
                    <span>View All Mock Tests</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {mockTestsData.slice(0, 3).map((test) => (
                    <div key={test.id} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between hover:shadow-lg transition">
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-[11px] font-bold px-2.5 py-1 rounded-md bg-blue-50 text-blue-700">{test.exam}</span>
                          <span className={`text-[11px] font-bold px-2.5 py-1 rounded-md ${test.type === 'Free' ? 'bg-emerald-50 text-emerald-700' : 'bg-amber-50 text-amber-700'}`}>
                            {test.type}
                          </span>
                        </div>
                        <h3 className="font-bold text-[#0B1730] text-base mb-3 leading-snug">{test.name}</h3>
                        
                        <div className="grid grid-cols-2 gap-2 py-3 border-y border-slate-100 text-xs text-slate-600 mb-4">
                          <div className="flex items-center space-x-1.5">
                            <Clock className="w-3.5 h-3.5 text-blue-600" />
                            <span>{test.duration}</span>
                          </div>
                          <div className="flex items-center space-x-1.5">
                            <FileText className="w-3.5 h-3.5 text-blue-600" />
                            <span>{test.questions} Questions</span>
                          </div>
                          <div className="flex items-center space-x-1.5">
                            <Award className="w-3.5 h-3.5 text-blue-600" />
                            <span>{test.marks} Marks</span>
                          </div>
                          <div className="flex items-center space-x-1.5">
                            <Globe className="w-3.5 h-3.5 text-blue-600" />
                            <span>{test.lang}</span>
                          </div>
                        </div>
                      </div>

                      <button 
                        onClick={() => {
                          setActiveTest(test);
                          setTestStarted(false);
                          setTestSubmitted(false);
                          setCurrentQIndex(0);
                          setUserAnswers({});
                          setActivePage('mock-tests');
                        }}
                        className="w-full bg-[#1D4ED8] hover:bg-blue-700 text-white font-bold py-2.5 rounded-xl text-xs transition shadow-sm flex items-center justify-center space-x-2"
                      >
                        <Play className="w-3.5 h-3.5 fill-current" />
                        <span>{t.startTest}</span>
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* NEW FEATURE 3: ALL-INDIA & ASSAM TOPPERS LEADERBOARD (HALL OF FAME) */}
            <section className="py-16 px-4 max-w-7xl mx-auto">
              <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-sm">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
                  <div>
                    <span className="bg-amber-100 text-amber-800 text-xs font-black px-3 py-1 rounded-full uppercase">Weekly Hall of Fame</span>
                    <h2 className="text-2xl sm:text-3xl font-black text-[#0B1730] mt-2">SARJIS EDUCATION HUB — Top Scorers Leaderboard</h2>
                    <p className="text-xs text-slate-500 mt-1">Compete with India's sharpest minds and see your name on our national leaderboard.</p>
                  </div>
                  <button
                    onClick={() => setActivePage('mock-tests')}
                    className="bg-[#0B1730] hover:bg-blue-900 text-white font-bold px-5 py-3 rounded-xl text-xs transition self-start md:self-auto"
                  >
                    Take a Test to Rank Up →
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                  {toppersLeaderboard.map((student) => (
                    <div key={student.rank} className="bg-[#F5F7FB] rounded-2xl p-5 border border-slate-200 relative overflow-hidden">
                      <div className="flex items-center justify-between mb-3">
                        <span className={`w-8 h-8 rounded-xl font-black text-xs flex items-center justify-center ${student.rank === 1 ? 'bg-amber-400 text-[#0B1730]' : 'bg-[#0B1730] text-white'}`}>
                          #{student.rank}
                        </span>
                        <span className="text-[11px] font-bold bg-blue-50 text-blue-700 px-2.5 py-1 rounded-md border border-blue-200">
                          {student.exam}
                        </span>
                      </div>
                      <h3 className="font-black text-[#0B1730] text-base">{student.name}</h3>
                      <p className="text-[11px] text-slate-500 mb-4">{student.city}</p>
                      <div className="pt-3 border-t border-slate-200 flex items-center justify-between text-xs">
                        <div>
                          <div className="text-[10px] text-slate-400 uppercase font-bold">Score</div>
                          <div className="font-black text-blue-600">{student.score}</div>
                        </div>
                        <div className="text-right">
                          <div className="text-[10px] text-slate-400 uppercase font-bold">Accuracy</div>
                          <div className="font-black text-emerald-600">{student.accuracy}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Why Choose Mock Academy */}
            <section className="py-16 px-4 max-w-7xl mx-auto">
              <div className="text-center max-w-2xl mx-auto mb-16">
                <h2 className="text-3xl font-black text-[#0B1730] mb-3">{t.whyChooseUs}</h2>
                <p className="text-slate-600 text-sm">Engineered by SARJIS EDUCATION HUB educators and technical architects to guarantee your exam readiness.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm text-center">
                  <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <ShieldCheck className="w-7 h-7" />
                  </div>
                  <h3 className="text-lg font-black text-[#0B1730] mb-2">Latest Exam Pattern 2026</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">All tests are updated according to the latest TCS / NTA exam guidelines, negative marking rules, and sectional weightage.</p>
                </div>

                <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm text-center">
                  <div className="w-14 h-14 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <BarChart2 className="w-7 h-7" />
                  </div>
                  <h3 className="text-lg font-black text-[#0B1730] mb-2">All-India Rank & Analytics</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">Compare your scores with thousands of aspirants across India with deep speed, accuracy, and topic-wise weakness analysis.</p>
                </div>

                <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm text-center">
                  <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Globe className="w-7 h-7" />
                  </div>
                  <h3 className="text-lg font-black text-[#0B1730] mb-2">Trilingual Support</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">Practice in English, Hindi, and regional languages like Assamese with native expert-translated solutions.</p>
                </div>
              </div>
            </section>

            {/* Special Offer Banner */}
            <section className="py-12 px-4 max-w-7xl mx-auto">
              <div className="bg-gradient-to-r from-[#0B1730] via-[#1D4ED8] to-[#0B1730] rounded-3xl p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between">
                <div className="absolute right-0 top-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl pointer-events-none"></div>
                <div className="max-w-2xl mb-8 md:mb-0 relative z-10">
                  <span className="bg-amber-400 text-[#0B1730] text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider">SARJIS EDUCATION HUB • Scholarship Offer</span>
                  <h3 className="text-3xl font-black mt-4 mb-3">Get Mega Pass at 60% OFF Today!</h3>
                  <p className="text-blue-100 text-sm leading-relaxed">Unlock 1,500+ tests, ADRE special series, banking mocks & 10 years solved PYQs with a single pass.</p>
                </div>
                <div className="relative z-10">
                  <button 
                    onClick={() => setActivePage('pricing')}
                    className="bg-white text-[#0B1730] hover:bg-slate-100 font-black px-8 py-4 rounded-2xl shadow-xl text-sm transition transform hover:scale-105"
                  >
                    Claim Offer Now →
                  </button>
                </div>
              </div>
            </section>

            {/* Frequently Asked Questions */}
            <section className="py-20 px-4 max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-black text-[#0B1730] mb-3">{t.faqTitle}</h2>
                <p className="text-slate-600 text-sm">Got questions about our mock test series or exam preparation? Find answers here.</p>
              </div>

              <div className="space-y-4">
                {[
                  { q: "Are MOCK ACADEMY tests based on the latest 2026 TCS / NTA pattern?", a: "Yes, all our test series under SARJIS EDUCATION HUB are meticulously curated by senior faculty adhering strictly to the latest syllabus changes and negative marking norms." },
                  { q: "Can I attempt mock tests in Assamese and Hindi?", a: "Absolutely! We offer complete trilingual support in English, Hindi, and Assamese for regional and national competitive exams." },
                  { q: "How can I contact the official team for batch or pass queries?", a: "You can reach us directly at sarjissalman3@gmail.com, joonsalman31@gmail.com, or our official corporate desk at admin@mockadmin.inc.in." },
                  { q: "Is there any free mock test available before purchasing a pass?", a: "Yes, we provide multiple free full-length mock tests, daily current affairs quizzes, and chapter tests across all exam categories." },
                ].map((faq, idx) => (
                  <div key={idx} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
                    <h3 className="font-bold text-[#0B1730] text-base mb-2 flex items-center justify-between">
                      <span>{faq.q}</span>
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}

        {/* 2. ALL EXAMS PAGE */}
        {activePage === 'all-exams' && (
          <div className="py-12 px-4 max-w-7xl mx-auto">
            <div className="mb-10 text-center max-w-2xl mx-auto">
              <h1 className="text-3xl font-black text-[#0B1730] mb-3">All Examination Catalogues</h1>
              <p className="text-slate-600 text-sm">Browse through national and state-level competitive examinations supported on MOCK ACADEMY.</p>
            </div>

            {/* Exam Categories Grid */}
            <div className="space-y-12">
              {[
                { catName: "SSC Examinations", exams: ["SSC CGL", "SSC CHSL", "SSC MTS", "SSC GD", "SSC CPO", "SSC Selection Post"] },
                { catName: "Railway Examinations (RRB)", exams: ["RRB NTPC", "RRB Group D", "RRB ALP", "RRB Technician", "RRB Junior Engineer (JE)", "RRB Paramedical"] },
                { catName: "Banking & Insurance Exams", exams: ["IBPS PO", "IBPS Clerk", "SBI PO", "SBI Clerk", "IBPS RRB Officer", "RBI Assistant", "LIC AAO"] },
                { catName: "Assam State Examinations", exams: ["ADRE Grade III", "ADRE Grade IV", "Assam Police Constable & SI", "Assam Public Service Commission (APSC)", "Assam TET", "Assam Secretariat Junior Assistant"] },
              ].map((section, idx) => (
                <div key={idx} className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm">
                  <h2 className="text-xl font-black text-[#0B1730] mb-6 pb-3 border-b border-slate-100 flex items-center justify-between">
                    <span>{section.catName}</span>
                    <span className="text-xs font-bold bg-blue-50 text-blue-700 px-3 py-1 rounded-full">{section.exams.length} Active Exams</span>
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {section.exams.map((examName, i) => (
                      <div key={i} className="bg-slate-50 hover:bg-blue-50/50 p-6 rounded-2xl border border-slate-200 transition flex items-center justify-between group">
                        <div>
                          <h3 className="font-bold text-[#0B1730] text-base group-hover:text-blue-600 transition">{examName}</h3>
                          <p className="text-xs text-slate-500 mt-1">Mock tests, PYQs & notes available</p>
                        </div>
                        <button 
                          onClick={() => setActivePage('mock-tests')}
                          className="w-10 h-10 rounded-xl bg-white text-[#1D4ED8] flex items-center justify-center shadow-sm group-hover:bg-[#1D4ED8] group-hover:text-white transition"
                        >
                          <ChevronRight className="w-5 h-5" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 3. EXAM DETAILS PAGE */}
        {activePage === 'exam-details' && (
          <div className="py-12 px-4 max-w-7xl mx-auto">
            <div className="bg-gradient-to-r from-[#0B1730] to-blue-900 text-white rounded-3xl p-8 sm:p-12 mb-8 shadow-xl">
              <span className="bg-blue-500/30 text-blue-200 text-xs font-bold px-3 py-1 rounded-full">Staff Selection Commission</span>
              <h1 className="text-3xl sm:text-4xl font-black mt-3 mb-4">SSC CGL (Combined Graduate Level) Examination 2026</h1>
              <p className="text-slate-300 text-sm max-w-3xl leading-relaxed">
                The premier national examination for recruitment to Group B and Group C posts in various ministries, departments, and organizations of the Government of India.
              </p>
              
              <div className="mt-8 flex flex-wrap gap-4">
                <button onClick={() => setActivePage('mock-tests')} className="bg-[#1D4ED8] hover:bg-blue-600 text-white font-bold px-6 py-3 rounded-xl text-xs shadow-lg transition">
                  Attempt SSC CGL Mock Test
                </button>
                <button onClick={() => setActivePage('study-materials')} className="bg-white/10 hover:bg-white/20 text-white font-bold px-6 py-3 rounded-xl text-xs transition border border-white/20">
                  Download Syllabus PDF
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-8">
                <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm">
                  <h2 className="text-xl font-black text-[#0B1730] mb-4">Exam Pattern & Structure</h2>
                  <p className="text-xs text-slate-600 leading-relaxed mb-6">
                    SSC CGL Tier-1 is conducted online with 100 Multiple Choice Questions carrying 200 total marks. Negative marking of 0.50 marks applies for each incorrect response.
                  </p>
                  
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 text-center">
                      <div className="text-xs text-slate-500">Duration</div>
                      <div className="font-black text-[#0B1730] text-base mt-1">60 Minutes</div>
                    </div>
                    <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 text-center">
                      <div className="text-xs text-slate-500">Total Questions</div>
                      <div className="font-black text-[#0B1730] text-base mt-1">100 MCQs</div>
                    </div>
                    <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 text-center">
                      <div className="text-xs text-slate-500">Total Marks</div>
                      <div className="font-black text-[#0B1730] text-base mt-1">200 Marks</div>
                    </div>
                    <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 text-center">
                      <div className="text-xs text-slate-500">Negative Marking</div>
                      <div className="font-black text-rose-600 text-base mt-1">0.50 Marks</div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm">
                  <h2 className="text-xl font-black text-[#0B1730] mb-4">Tier-1 Syllabus Breakdown</h2>
                  <div className="space-y-4">
                    {[
                      { subject: "General Intelligence & Reasoning", q: "25 Questions", m: "50 Marks", desc: "Verbal and non-verbal reasoning, analogies, similarities, space visualization, coding-decoding." },
                      { subject: "General Awareness", q: "25 Questions", m: "50 Marks", desc: "History, culture, geography, general polity, Indian Constitution, scientific research, current affairs." },
                      { subject: "Quantitative Aptitude", q: "25 Questions", m: "50 Marks", desc: "Computation of whole numbers, decimals, fractions, percentages, ratio & proportion, algebra, geometry, trigonometry." },
                      { subject: "English Comprehension", q: "25 Questions", m: "50 Marks", desc: "Spot the error, fill in the blanks, synonyms, antonyms, spelling test, idioms & phrases, reading comprehension." },
                    ].map((s, idx) => (
                      <div key={idx} className="bg-slate-50 p-5 rounded-2xl border border-slate-200">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-bold text-[#0B1730] text-sm">{s.subject}</h3>
                          <span className="text-xs font-bold text-blue-600">{s.q} ({s.m})</span>
                        </div>
                        <p className="text-xs text-slate-500">{s.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar Quick Links */}
              <div className="space-y-6">
                <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm">
                  <h3 className="font-black text-[#0B1730] text-base mb-4">Quick Links</h3>
                  <div className="space-y-2 text-xs font-bold text-slate-700">
                    <button onClick={() => setActivePage('mock-tests')} className="w-full text-left p-3 rounded-xl bg-slate-50 hover:bg-blue-50 hover:text-blue-600 transition flex items-center justify-between">
                      <span>SSC CGL Mock Test Series</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                    <button onClick={() => setActivePage('pyq')} className="w-full text-left p-3 rounded-xl bg-slate-50 hover:bg-blue-50 hover:text-blue-600 transition flex items-center justify-between">
                      <span>Previous Year Papers (2020-2025)</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                    <button onClick={() => setActivePage('study-materials')} className="w-full text-left p-3 rounded-xl bg-slate-50 hover:bg-blue-50 hover:text-blue-600 transition flex items-center justify-between">
                      <span>Formula E-Books & Notes</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 4. MOCK TESTS PAGE & FUNCTIONAL DEMO TEST */}
        {activePage === 'mock-tests' && (
          <div>
            {/* If activeTest is selected and test is NOT started yet (Show Instructions) */}
            {activeTest && !testStarted && !testSubmitted && (
              <div className="py-12 px-4 max-w-4xl mx-auto">
                <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-xl">
                  <div className="flex items-center justify-between mb-6">
                    <span className="bg-blue-50 text-blue-700 text-xs font-bold px-3 py-1 rounded-full">{activeTest.exam}</span>
                    <button onClick={() => setActiveTest(null)} className="text-xs font-bold text-slate-400 hover:text-slate-700">← Back to Tests</button>
                  </div>
                  
                  <h1 className="text-2xl sm:text-3xl font-black text-[#0B1730] mb-4">{activeTest.name}</h1>
                  <p className="text-xs text-slate-600 leading-relaxed mb-8">
                    Read the instructions carefully before starting the demonstration test. This test contains 10 objective MCQs with negative marking simulation.
                  </p>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8 bg-slate-50 p-6 rounded-2xl border border-slate-200 text-center">
                    <div>
                      <div className="text-xs text-slate-500">Duration</div>
                      <div className="font-bold text-[#0B1730] text-sm mt-1">{activeTest.duration}</div>
                    </div>
                    <div>
                      <div className="text-xs text-slate-500">Total Questions</div>
                      <div className="font-bold text-[#0B1730] text-sm mt-1">10 Demo MCQs</div>
                    </div>
                    <div>
                      <div className="text-xs text-slate-500">Total Marks</div>
                      <div className="font-bold text-[#0B1730] text-sm mt-1">20 Marks</div>
                    </div>
                    <div>
                      <div className="text-xs text-slate-500">Language</div>
                      <div className="font-bold text-[#0B1730] text-sm mt-1">{activeTest.lang}</div>
                    </div>
                  </div>

                  <div className="border-t border-slate-200 pt-6 flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-xs text-amber-700 bg-amber-50 px-4 py-2 rounded-xl border border-amber-200">
                      <AlertCircle className="w-4 h-4 flex-shrink-0" />
                      <span>Do not refresh the page during the test.</span>
                    </div>

                    <button 
                      onClick={() => setTestStarted(true)}
                      className="bg-[#1D4ED8] hover:bg-blue-700 text-white font-black px-8 py-4 rounded-2xl shadow-lg text-sm transition"
                    >
                      I am ready to begin →
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Test Interface Running */}
            {activeTest && testStarted && !testSubmitted && (
              <div className="min-h-screen bg-slate-900 text-white flex flex-col">
                {/* Test Top Navigation Header */}
                <div className="bg-[#0B1730] border-b border-slate-800 px-6 py-4 flex items-center justify-between">
                  <div>
                    <h2 className="text-sm font-black text-white">{activeTest.name}</h2>
                    <div className="text-[11px] text-slate-400">MOCK ACADEMY Secure Examination Terminal</div>
                  </div>

                  <div className="flex items-center space-x-6">
                    <div className="flex items-center space-x-2 bg-slate-800 px-4 py-2 rounded-xl border border-slate-700">
                      <Clock className="w-4 h-4 text-amber-400 animate-pulse" />
                      <span className="text-sm font-mono font-bold text-amber-400">
                        {Math.floor(testTimer / 60)}:{(testTimer % 60).toString().padStart(2, '0')}
                      </span>
                    </div>

                    <button 
                      onClick={() => {
                        if(window.confirm("Are you sure you want to submit the test?")) {
                          setTestSubmitted(true);
                        }
                      }}
                      className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-5 py-2 rounded-xl text-xs transition shadow-md"
                    >
                      Submit Test
                    </button>
                  </div>
                </div>

                {/* Main Question & Palette Layout */}
                <div className="flex-grow grid grid-cols-1 lg:grid-cols-4 max-w-7xl mx-auto w-full p-4 sm:p-6 gap-6">
                  
                  {/* Left: Question Area */}
                  <div className="lg:col-span-3 bg-slate-800 rounded-3xl p-6 sm:p-8 border border-slate-700 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-700">
                        <span className="text-xs font-bold px-3 py-1 rounded-lg bg-blue-600/20 text-blue-400 border border-blue-500/30">
                          Question {currentQIndex + 1} of {sampleQuestions.length}
                        </span>
                        <button 
                          onClick={() => {
                            const updated = {...markedForReview};
                            updated[currentQIndex] = !updated[currentQIndex];
                            setMarkedForReview(updated);
                          }}
                          className={`text-xs font-bold px-3 py-1.5 rounded-lg border transition ${markedForReview[currentQIndex] ? 'bg-amber-500 text-slate-900 border-amber-400' : 'bg-slate-700 text-slate-300 border-slate-600'}`}
                        >
                          {markedForReview[currentQIndex] ? 'Marked for Review' : 'Mark for Review'}
                        </button>
                      </div>

                      <h3 className="text-lg sm:text-xl font-bold text-white mb-6 leading-relaxed">
                        {sampleQuestions[currentQIndex].question}
                      </h3>

                      {/* Options */}
                      <div className="space-y-3">
                        {sampleQuestions[currentQIndex].options.map((opt, oIdx) => {
                          const isSelected = userAnswers[currentQIndex] === oIdx;
                          return (
                            <div 
                              key={oIdx}
                              onClick={() => {
                                const updated = {...userAnswers};
                                updated[currentQIndex] = oIdx;
                                setUserAnswers(updated);
                              }}
                              className={`p-4 rounded-xl border cursor-pointer transition flex items-center space-x-3 ${isSelected ? 'bg-blue-600/20 border-blue-500 text-white' : 'bg-slate-700/50 border-slate-600 text-slate-200 hover:bg-slate-700'}`}
                            >
                              <div className={`w-5 h-5 rounded-full border flex items-center justify-center text-xs font-bold ${isSelected ? 'bg-blue-600 border-blue-400 text-white' : 'border-slate-500 text-slate-400'}`}>
                                {String.fromCharCode(65 + oIdx)}
                              </div>
                              <span className="text-sm font-medium">{opt}</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {/* Navigation Buttons */}
                    <div className="mt-8 pt-6 border-t border-slate-700 flex items-center justify-between">
                      <button 
                        onClick={() => {
                          const updated = {...userAnswers};
                          delete updated[currentQIndex];
                          setUserAnswers(updated);
                        }}
                        className="text-xs font-bold text-slate-400 hover:text-white underline"
                      >
                        Clear Response
                      </button>

                      <div className="flex space-x-3">
                        <button 
                          disabled={currentQIndex === 0}
                          onClick={() => setCurrentQIndex(prev => prev - 1)}
                          className="px-5 py-2.5 rounded-xl bg-slate-700 text-white text-xs font-bold disabled:opacity-50 hover:bg-slate-600 transition"
                        >
                          Previous
                        </button>
                        <button 
                          onClick={() => {
                            if(currentQIndex < sampleQuestions.length - 1) {
                              setCurrentQIndex(prev => prev + 1);
                            } else {
                              setTestSubmitted(true);
                            }
                          }}
                          className="px-6 py-2.5 rounded-xl bg-blue-600 text-white text-xs font-bold hover:bg-blue-500 transition shadow-md"
                        >
                          {currentQIndex === sampleQuestions.length - 1 ? 'Submit & Review' : 'Save & Next'}
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Right: Question Palette */}
                  <div className="bg-slate-800 rounded-3xl p-6 border border-slate-700 flex flex-col justify-between">
                    <div>
                      <h4 className="font-bold text-white text-sm mb-4 pb-2 border-b border-slate-700">Question Palette</h4>
                      
                      <div className="grid grid-cols-5 gap-2 mb-6">
                        {sampleQuestions.map((_, qIdx) => {
                          const answered = userAnswers[qIdx] !== undefined;
                          const marked = markedForReview[qIdx];
                          const current = currentQIndex === qIdx;
                          
                          let btnBg = 'bg-slate-700 text-slate-300 border-slate-600';
                          if (answered && marked) btnBg = 'bg-purple-600 text-white border-purple-400';
                          else if (answered) btnBg = 'bg-emerald-600 text-white border-emerald-400';
                          else if (marked) btnBg = 'bg-amber-500 text-slate-900 border-amber-400';

                          return (
                            <button
                              key={qIdx}
                              onClick={() => setCurrentQIndex(qIdx)}
                              className={`w-10 h-10 rounded-xl border text-xs font-black transition flex items-center justify-center ${btnBg} ${current ? 'ring-2 ring-white' : ''}`}
                            >
                              {qIdx + 1}
                            </button>
                          );
                        })}
                      </div>

                      {/* Legend */}
                      <div className="space-y-2 text-[11px] text-slate-300 bg-slate-900/60 p-4 rounded-2xl border border-slate-700">
                        <div className="flex items-center space-x-2">
                          <div className="w-3 h-3 rounded bg-emerald-600"></div>
                          <span>Answered ({Object.keys(userAnswers).length})</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-3 h-3 rounded bg-amber-500"></div>
                          <span>Marked for Review</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-3 h-3 rounded bg-slate-700"></div>
                          <span>Unanswered</span>
                        </div>
                      </div>
                    </div>

                    <button 
                      onClick={() => setTestSubmitted(true)}
                      className="w-full mt-6 bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3 rounded-xl text-xs transition shadow-md"
                    >
                      Final Submit
                    </button>
                  </div>

                </div>
              </div>
            )}

            {/* Test Results & Detailed Solutions View */}
            {activeTest && testSubmitted && (
              <div className="py-12 px-4 max-w-4xl mx-auto">
                <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-2xl">
                  <div className="text-center max-w-xl mx-auto mb-10">
                    <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-3xl flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8" />
                    </div>
                    <h1 className="text-2xl sm:text-3xl font-black text-[#0B1730]">Test Submitted Successfully!</h1>
                    <p className="text-xs text-slate-500 mt-1">Here is your comprehensive performance analysis and detailed solutions.</p>
                  </div>

                  {/* Score Cards */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10 bg-slate-50 p-6 rounded-2xl border border-slate-200 text-center">
                    <div>
                      <div className="text-xs text-slate-500">Total Score</div>
                      <div className="font-black text-blue-600 text-2xl mt-1">{testResults.score} / 20</div>
                    </div>
                    <div>
                      <div className="text-xs text-slate-500">Accuracy</div>
                      <div className="font-black text-emerald-600 text-2xl mt-1">{testResults.accuracy}%</div>
                    </div>
                    <div>
                      <div className="text-xs text-slate-500">Correct / Incorrect</div>
                      <div className="font-black text-[#0B1730] text-xl mt-1">{testResults.correct} / {testResults.incorrect}</div>
                    </div>
                    <div>
                      <div className="text-xs text-slate-500">Unattempted</div>
                      <div className="font-black text-slate-500 text-xl mt-1">{testResults.unattempted}</div>
                    </div>
                  </div>

                  {/* Detailed Solutions Accordion */}
                  <h3 className="text-lg font-black text-[#0B1730] mb-4">Detailed Question Solutions</h3>
                  <div className="space-y-4 mb-8">
                    {sampleQuestions.map((q, qIdx) => {
                      const userAns = userAnswers[qIdx];
                      const isCorrect = userAns === q.correct;
                      return (
                        <div key={qIdx} className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-xs font-bold text-slate-500">Question {qIdx + 1}</span>
                            <span className={`text-xs font-bold px-2.5 py-1 rounded-md ${userAns === undefined ? 'bg-slate-200 text-slate-700' : isCorrect ? 'bg-emerald-100 text-emerald-700' : 'bg-rose-100 text-rose-700'}`}>
                              {userAns === undefined ? 'Unattempted' : isCorrect ? 'Correct (+2)' : 'Incorrect (-0.5)'}
                            </span>
                          </div>
                          
                          <p className="font-bold text-[#0B1730] text-sm mb-3">{q.question}</p>
                          
                          <div className="space-y-1.5 mb-4 text-xs">
                            {q.options.map((opt, oIdx) => (
                              <div key={oIdx} className={`p-2 rounded-lg ${oIdx === q.correct ? 'bg-emerald-50 text-emerald-900 font-bold border border-emerald-300' : oIdx === userAns ? 'bg-rose-50 text-rose-900 font-bold border border-rose-300' : 'text-slate-600'}`}>
                                {String.fromCharCode(65 + oIdx)}. {opt} {oIdx === q.correct && '✓ (Correct Answer)'}
                              </div>
                            ))}
                          </div>

                          <div className="bg-blue-50 p-4 rounded-xl border border-blue-200 text-xs text-blue-900">
                            <span className="font-bold">Explanation:</span> {q.explanation}
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <div className="flex justify-center">
                    <button 
                      onClick={() => {
                        setActiveTest(null);
                        setTestStarted(false);
                        setTestSubmitted(false);
                      }}
                      className="bg-[#1D4ED8] hover:bg-blue-700 text-white font-bold px-8 py-3 rounded-2xl text-xs shadow-lg transition"
                    >
                      Back to Mock Tests Catalogue
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Standard Mock Test Catalogue View */}
            {!activeTest && (
              <div className="py-12 px-4 max-w-7xl mx-auto">
                <div className="mb-10 text-center max-w-2xl mx-auto">
                  <h1 className="text-3xl font-black text-[#0B1730] mb-3">Mock Test Series Catalogue</h1>
                  <p className="text-slate-600 text-sm">Attempt expert-designed full length tests and subject quizzes with All-India ranking.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {mockTestsData.map((test) => (
                    <div key={test.id} className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between hover:shadow-xl transition">
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-blue-50 text-blue-700">{test.exam}</span>
                          <span className={`text-[11px] font-bold px-3 py-1 rounded-full ${test.type === 'Free' ? 'bg-emerald-50 text-emerald-700' : 'bg-amber-50 text-amber-700'}`}>
                            {test.type}
                          </span>
                        </div>
                        <h3 className="font-black text-[#0B1730] text-base mb-3 leading-snug">{test.name}</h3>
                        
                        <div className="grid grid-cols-2 gap-2 py-3 border-y border-slate-100 text-xs text-slate-600 mb-4">
                          <div className="flex items-center space-x-1.5">
                            <Clock className="w-3.5 h-3.5 text-blue-600" />
                            <span>{test.duration}</span>
                          </div>
                          <div className="flex items-center space-x-1.5">
                            <FileText className="w-3.5 h-3.5 text-blue-600" />
                            <span>{test.questions} Questions</span>
                          </div>
                          <div className="flex items-center space-x-1.5">
                            <Award className="w-3.5 h-3.5 text-blue-600" />
                            <span>{test.marks} Marks</span>
                          </div>
                          <div className="flex items-center space-x-1.5">
                            <Globe className="w-3.5 h-3.5 text-blue-600" />
                            <span>{test.lang}</span>
                          </div>
                        </div>
                      </div>

                      <button 
                        onClick={() => {
                          setActiveTest(test);
                          setTestStarted(false);
                          setTestSubmitted(false);
                          setCurrentQIndex(0);
                          setUserAnswers({});
                        }}
                        className="w-full bg-[#1D4ED8] hover:bg-blue-700 text-white font-bold py-3 rounded-xl text-xs transition shadow-md flex items-center justify-center space-x-2"
                      >
                        <Play className="w-4 h-4 fill-current" />
                        <span>{t.startTest}</span>
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* 5. TOPIC-WISE PRACTICE PAGE */}
        {activePage === 'topic-practice' && (
          <div className="py-12 px-4 max-w-7xl mx-auto">
            <div className="mb-10 text-center max-w-2xl mx-auto">
              <h1 className="text-3xl font-black text-[#0B1730] mb-3">Topic-Wise Practice Quizzes</h1>
              <p className="text-slate-600 text-sm">Strengthen weak areas by practicing chapter-wise questions with instant explanations.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { topic: "Percentage & Profit/Loss", subject: "Quantitative Aptitude", count: "450 Questions", level: "Easy to Hard" },
                { topic: "Seating Arrangement & Puzzles", subject: "Logical Reasoning", count: "600 Questions", level: "Advanced" },
                { topic: "Indian Polity & Constitutional Articles", subject: "General Awareness", count: "800 Questions", level: "Moderate" },
                { topic: "Error Spotting & Sentence Improvement", subject: "English Language", count: "500 Questions", level: "Moderate" },
                { topic: "Assam Geography & History", subject: "Assam State GK", count: "350 Questions", level: "Easy to Moderate" },
                { topic: "Algebra & Trigonometry Shortcuts", subject: "Quantitative Aptitude", count: "400 Questions", level: "Advanced" },
              ].map((tp, idx) => (
                <div key={idx} className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between hover:shadow-xl transition">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-indigo-50 text-indigo-700">{tp.subject}</span>
                      <span className="text-[11px] font-bold text-slate-500">{tp.level}</span>
                    </div>
                    <h3 className="font-black text-[#0B1730] text-base mb-2">{tp.topic}</h3>
                    <p className="text-xs text-slate-500 mb-6">{tp.count} available with step-by-step solutions.</p>
                  </div>

                  <button 
                    onClick={() => showToast(`Opening ${tp.topic} practice session...`)}
                    className="w-full bg-slate-100 hover:bg-blue-600 hover:text-white text-[#0B1730] font-bold py-3 rounded-xl text-xs transition border border-slate-200 flex items-center justify-center space-x-2"
                  >
                    <span>Start Practice Quiz</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 6. STUDY MATERIALS PAGE */}
        {activePage === 'study-materials' && (
          <div className="py-12 px-4 max-w-7xl mx-auto">
            <div className="mb-10 text-center max-w-2xl mx-auto">
              <h1 className="text-3xl font-black text-[#0B1730] mb-3">Study Material Library</h1>
              <p className="text-slate-600 text-sm">Download comprehensive PDF handbooks, formula sheets, and current affairs digests.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {studyMaterialsData.map((mat) => (
                <div key={mat.id} className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between hover:shadow-xl transition">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-blue-50 text-blue-700">{mat.exam}</span>
                      <span className={`text-[11px] font-bold px-3 py-1 rounded-full ${mat.type === 'Free' ? 'bg-emerald-50 text-emerald-700' : 'bg-amber-50 text-amber-700'}`}>
                        {mat.type}
                      </span>
                    </div>

                    <h3 className="font-black text-[#0B1730] text-base mb-2 leading-snug">{mat.title}</h3>
                    <p className="text-xs text-slate-500 mb-4">Subject: <span className="font-semibold text-slate-700">{mat.subject}</span> • {mat.pages} Pages • Updated {mat.date}</p>
                  </div>

                  <div className="flex space-x-3 pt-4 border-t border-slate-100">
                    <button 
                      onClick={() => setPreviewPdf(mat)}
                      className="flex-1 bg-slate-100 hover:bg-slate-200 text-[#0B1730] font-bold py-2.5 rounded-xl text-xs transition flex items-center justify-center space-x-1.5"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>{t.previewPdf}</span>
                    </button>

                    <button 
                      onClick={() => showToast(`Demonstration Download: "${mat.title}" (PDF files are simulated in this preview)`)}
                      className="flex-1 bg-[#1D4ED8] hover:bg-blue-700 text-white font-bold py-2.5 rounded-xl text-xs transition flex items-center justify-center space-x-1.5 shadow-sm"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>{t.downloadPdf}</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* PDF Preview Modal */}
            {previewPdf && (
              <div className="fixed inset-0 z-50 bg-slate-900/80 backdrop-blur-sm flex items-center justify-center p-4">
                <div className="bg-white rounded-3xl max-w-2xl w-full p-8 shadow-2xl border border-slate-200">
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100">
                    <div>
                      <span className="text-xs font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">{previewPdf.exam}</span>
                      <h3 className="text-xl font-black text-[#0B1730] mt-2">{previewPdf.title}</h3>
                    </div>
                    <button onClick={() => setPreviewPdf(null)} className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200">
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  <div className="bg-slate-100 p-8 rounded-2xl text-center mb-6 border border-slate-200">
                    <FileText className="w-16 h-16 text-blue-600 mx-auto mb-3" />
                    <div className="font-bold text-[#0B1730] text-sm">Demonstration PDF Reader</div>
                    <p className="text-xs text-slate-500 mt-1">Showing sample preview of {previewPdf.pages} pages. Click download below to simulate file acquisition.</p>
                  </div>

                  <div className="flex justify-end space-x-3">
                    <button onClick={() => setPreviewPdf(null)} className="px-5 py-2.5 rounded-xl bg-slate-100 text-slate-700 text-xs font-bold">Close</button>
                    <button onClick={() => { showToast(`Downloaded ${previewPdf.title}`); setPreviewPdf(null); }} className="px-6 py-2.5 rounded-xl bg-blue-600 text-white text-xs font-bold shadow-md">Download PDF</button>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* 7. PREVIOUS YEAR QUESTIONS (PYQ) PAGE */}
        {activePage === 'pyq' && (
          <div className="py-12 px-4 max-w-7xl mx-auto">
            <div className="mb-10 text-center max-w-2xl mx-auto">
              <h1 className="text-3xl font-black text-[#0B1730] mb-3">Previous Year Question Repository</h1>
              <p className="text-slate-600 text-sm">Practice official memory-based shift papers with detailed step-by-step solutions.</p>
            </div>

            <div className="space-y-4 max-w-4xl mx-auto">
              {pyqData.map((pyq) => (
                <div key={pyq.id} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-md bg-blue-50 text-blue-700">{pyq.exam}</span>
                      <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-md bg-slate-100 text-slate-700">{pyq.year}</span>
                      <span className="text-[11px] font-bold text-slate-500">{pyq.shift}</span>
                    </div>
                    <h3 className="font-bold text-[#0B1730] text-base">{pyq.title}</h3>
                  </div>

                  <button 
                    onClick={() => showToast(`Opening PYQ Solved Paper: ${pyq.title}`)}
                    className="bg-[#1D4ED8] hover:bg-blue-700 text-white font-bold px-6 py-2.5 rounded-xl text-xs transition shadow-sm whitespace-nowrap"
                  >
                    Solve Paper Online
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 8. PRICING & TEST PACKAGES PAGE */}
        {activePage === 'pricing' && (
          <div className="py-12 px-4 max-w-7xl mx-auto">
            <div className="mb-16 text-center max-w-2xl mx-auto">
              <span className="bg-blue-50 text-blue-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Passes & Subscriptions</span>
              <h1 className="text-3xl sm:text-4xl font-black text-[#0B1730] mt-3 mb-3">Invest in Your Government Career</h1>
              <p className="text-slate-600 text-sm">Transparent, affordable test packages designed to guarantee maximum selection rates.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingData.map((plan) => (
                <div key={plan.id} className={`bg-white rounded-3xl p-8 border ${plan.color} flex flex-col justify-between relative`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#1D4ED8] text-white text-[11px] font-black px-4 py-1.5 rounded-full uppercase tracking-wider shadow-lg">
                      Most Popular Choice
                    </div>
                  )}

                  <div>
                    <h3 className="text-lg font-black text-[#0B1730] mb-2">{plan.name}</h3>
                    <p className="text-xs text-slate-500 mb-6">{plan.desc}</p>

                    <div className="mb-6 pb-6 border-b border-slate-100">
                      <div className="text-4xl font-black text-[#0B1730]">{plan.price}</div>
                      <div className="text-xs font-bold text-blue-600 mt-1">{plan.validity}</div>
                    </div>

                    <div className="space-y-3 mb-8">
                      {plan.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start space-x-2 text-xs text-slate-700">
                          <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button 
                    onClick={() => {
  setSelectedPlan(plan);
  setDemoOrderComplete(false);
  setActivePage('checkout');
}}
                    className={`w-full py-3.5 rounded-2xl text-xs font-black transition shadow-md ${plan.popular ? 'bg-[#1D4ED8] hover:bg-blue-700 text-white' : 'bg-[#0B1730] hover:bg-slate-800 text-white'}`}
                  >
                    Buy {plan.name} Now
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
        {/* 9. CHECKOUT PAGE */}
{activePage === 'checkout' && selectedPlan && (
  <div className="min-h-[75vh] bg-slate-50 py-12 px-4">
    <div className="max-w-4xl mx-auto">

      <button
        onClick={() => setActivePage('pricing')}
        className="text-blue-600 font-bold text-sm mb-6"
      >
        ← Back to Pricing
      </button>

      {!demoOrderComplete ? (
        <div className="grid md:grid-cols-2 gap-8">

          <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm">
            <span className="text-xs font-black uppercase tracking-wider text-blue-600">
              Secure Checkout Preview
            </span>

            <h1 className="text-3xl font-black text-[#0B1730] mt-3 mb-2">
              Complete Your Order
            </h1>

            <p className="text-sm text-slate-500 mb-8">
              Review your selected subscription.
            </p>

            <div className="bg-blue-50 rounded-2xl p-5 border border-blue-100">
              <h2 className="font-black text-lg text-[#0B1730]">
                {selectedPlan.name}
              </h2>

              <p className="text-sm text-slate-500 mt-1">
                {selectedPlan.desc}
              </p>

              <div className="text-3xl font-black text-blue-700 mt-5">
                {selectedPlan.price}
              </div>

              <p className="text-xs font-bold text-blue-600 mt-1">
                {selectedPlan.validity}
              </p>
            </div>

            <h3 className="font-bold text-[#0B1730] mt-7 mb-3">
              Included Benefits
            </h3>

            <div className="space-y-3">
              {selectedPlan.features.map((feature, index) => (
                <div key={index} className="flex gap-2 text-sm text-slate-600">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  {feature}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm">
            <h2 className="text-xl font-black text-[#0B1730] mb-6">
              Order Summary
            </h2>

            <div className="flex justify-between text-sm mb-4">
              <span className="text-slate-500">Selected Pass</span>
              <span className="font-bold text-right">
                {selectedPlan.name}
              </span>
            </div>

            <div className="flex justify-between text-sm mb-4">
              <span className="text-slate-500">Validity</span>
              <span className="font-bold">{selectedPlan.validity}</span>
            </div>

            <div className="border-t border-slate-200 pt-5 mt-5">
              <div className="flex justify-between items-center">
                <span className="font-bold">Total Amount</span>
                <span className="text-2xl font-black text-blue-700">
                  {selectedPlan.price}
                </span>
              </div>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mt-7">
              <p className="text-xs font-bold text-amber-800">
                DEMO MODE
              </p>
              <p className="text-xs text-amber-700 mt-1">
                No real payment will be collected. This is a checkout preview.
              </p>
            </div>

            <button
              onClick={() => setDemoOrderComplete(true)}
              className="w-full mt-7 py-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-black text-sm shadow-lg transition"
            >
              Confirm Demo Order
            </button>

            <p className="text-center text-xs text-slate-400 mt-4">
              Real payment gateway is not connected.
            </p>
          </div>
        </div>
      ) : (
        <div className="max-w-xl mx-auto bg-white rounded-3xl p-10 text-center border border-slate-200 shadow-lg">
          <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check className="w-10 h-10 text-emerald-600" />
          </div>

          <h1 className="text-3xl font-black text-[#0B1730]">
            Demo Order Successful!
          </h1>

          <p className="text-slate-500 text-sm mt-3">
            Your checkout demonstration is complete.
          </p>

          <p className="font-bold text-blue-700 mt-5">
            {selectedPlan.name}
          </p>

          <p className="text-xs text-slate-400 mt-2">
            No payment was collected and no subscription was activated.
          </p>

          <button
            onClick={() => setActivePage('pricing')}
            className="mt-8 bg-blue-600 text-white font-bold px-7 py-3 rounded-xl"
          >
            Back to Passes
          </button>
        </div>
      )}
    </div>
  </div>
)}

        {/* 9. ABOUT US PAGE */}
        {activePage === 'about-us' && (
          <div className="py-12 px-4 max-w-5xl mx-auto">
            <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm space-y-8">
              <div className="text-center max-w-2xl mx-auto">
                <span className="bg-blue-50 text-blue-700 text-xs font-black px-3.5 py-1 rounded-full uppercase">SARJIS EDUCATION HUB • Official Flagship</span>
                <h1 className="text-3xl font-black text-[#0B1730] mt-3 mb-3">Empowering Aspirants Across India</h1>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Spearheaded by <strong>SARJIS EDUCATION HUB</strong>, Topper's Adda (MOCK ACADEMY) is India's premier EdTech platform dedicated to SSC, Banking, Railways, and Assam State-level competitive examinations.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-slate-100">
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 text-center">
                  <div className="text-3xl font-black text-blue-600 mb-1">12.5L+</div>
                  <div className="text-xs text-slate-500 font-semibold uppercase">Students Enrolled</div>
                </div>
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 text-center">
                  <div className="text-3xl font-black text-blue-600 mb-1">1,500+</div>
                  <div className="text-xs text-slate-500 font-semibold uppercase">Exam Mock Series</div>
                </div>
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 text-center">
                  <div className="text-3xl font-black text-blue-600 mb-1">45,000+</div>
                  <div className="text-xs text-slate-500 font-semibold uppercase">Final Selections</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 10. CONTACT US PAGE (UPDATED WITH OFFICIAL & BUSINESS EMAILS) */}
        {activePage === 'contact-us' && (
          <div className="py-12 px-4 max-w-7xl mx-auto">
            <div className="mb-10 text-center max-w-3xl mx-auto">
              <span className="bg-blue-50 text-blue-700 text-xs font-black px-3.5 py-1 rounded-full uppercase tracking-wider">
                {hubConfig.bannerTitle} • 24/7 Official Helpdesk
              </span>
              <h1 className="text-3xl sm:text-4xl font-black text-[#0B1730] mt-3 mb-3">Get in Touch with Our Team</h1>
              <p className="text-slate-600 text-sm">
                For direct student mentorship, test series support, or institutional partnerships, reach out via our verified email channels below.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl mx-auto">
              
              {/* Left 5 Cols: Contact Form */}
              <div className="lg:col-span-5 bg-white rounded-3xl p-8 border border-slate-200 shadow-sm space-y-4">
                <h3 className="text-lg font-black text-[#0B1730] mb-2">Send Direct Inquiry</h3>
                <p className="text-xs text-slate-500 mb-4">Your message will be routed directly to our support desk at <strong>{hubConfig.businessEmail1}</strong>.</p>
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Your Full Name</label>
                  <input type="text" placeholder="Enter your full name" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs outline-none focus:border-blue-600" />
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Email Address / WhatsApp Number</label>
                  <input type="text" placeholder="student@example.com" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs outline-none focus:border-blue-600" />
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Target Examination</label>
                  <select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs outline-none focus:border-blue-600">
                    <option>SSC CGL / CHSL / GD</option>
                    <option>Assam ADRE Grade III & IV / Police</option>
                    <option>Railway RRB NTPC / Group D</option>
                    <option>Banking IBPS / SBI PO & Clerk</option>
                    <option>Business / Institutional Partnership</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Your Message / Query</label>
                  <textarea rows={4} placeholder="Write your query here..." className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs outline-none focus:border-blue-600"></textarea>
                </div>
                <button 
                  onClick={() => showToast(`Message sent to ${hubConfig.primaryEmail1} & ${hubConfig.businessEmail1}!`)} 
                  className="w-full bg-[#1D4ED8] hover:bg-blue-700 text-white font-bold py-3.5 rounded-xl text-xs transition shadow-md flex items-center justify-center space-x-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Official Inquiry</span>
                </button>
              </div>

              {/* Right 7 Cols: Direct Emails, Business Emails & Offices */}
              <div className="lg:col-span-7 space-y-6">
                
                {/* Executive Direct Emails Card */}
                <div className="bg-gradient-to-br from-[#0B1730] to-[#162a56] text-white rounded-3xl p-8 shadow-xl border border-blue-800">
                  <div className="flex items-center space-x-2 mb-4">
                    <Sparkles className="w-5 h-5 text-amber-400" />
                    <h3 className="text-lg font-black tracking-wide uppercase">{hubConfig.bannerTitle} — Direct Desk</h3>
                  </div>
                  <p className="text-xs text-blue-200 mb-6 leading-relaxed">
                    Connect directly with the founders, academic directors, and official corporate desk for urgent support or collaborations:
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Primary Email 1 */}
                    <div className="bg-white/10 border border-white/15 rounded-2xl p-4 flex flex-col justify-between">
                      <div>
                        <span className="text-[10px] font-black uppercase tracking-wider text-amber-400 block mb-1">Founder & Academic Head</span>
                        <a href={`mailto:${hubConfig.primaryEmail1}`} className="text-xs sm:text-sm font-bold text-white hover:text-amber-300 break-all">
                          {hubConfig.primaryEmail1}
                        </a>
                      </div>
                      <div className="mt-3 pt-3 border-t border-white/10 flex items-center justify-between">
                        <a href={`mailto:${hubConfig.primaryEmail1}`} className="text-[11px] text-blue-300 hover:underline flex items-center space-x-1">
                          <Mail className="w-3 h-3" />
                          <span>Send Mail</span>
                        </a>
                        <button onClick={() => copyToClipboard(hubConfig.primaryEmail1, "Primary Email")} className="text-[11px] font-bold text-amber-300 hover:underline">
                          Copy Email
                        </button>
                      </div>
                    </div>

                    {/* Primary Email 2 */}
                    <div className="bg-white/10 border border-white/15 rounded-2xl p-4 flex flex-col justify-between">
                      <div>
                        <span className="text-[10px] font-black uppercase tracking-wider text-amber-400 block mb-1">Co-Founder & Student Welfare</span>
                        <a href={`mailto:${hubConfig.primaryEmail2}`} className="text-xs sm:text-sm font-bold text-white hover:text-amber-300 break-all">
                          {hubConfig.primaryEmail2}
                        </a>
                      </div>
                      <div className="mt-3 pt-3 border-t border-white/10 flex items-center justify-between">
                        <a href={`mailto:${hubConfig.primaryEmail2}`} className="text-[11px] text-blue-300 hover:underline flex items-center space-x-1">
                          <Mail className="w-3 h-3" />
                          <span>Send Mail</span>
                        </a>
                        <button onClick={() => copyToClipboard(hubConfig.primaryEmail2, "Direct Email")} className="text-[11px] font-bold text-amber-300 hover:underline">
                          Copy Email
                        </button>
                      </div>
                    </div>

                    {/* Business Email 1 */}
                    <div className="bg-blue-600/20 border border-blue-400/40 rounded-2xl p-4 flex flex-col justify-between">
                      <div>
                        <span className="text-[10px] font-black uppercase tracking-wider text-blue-300 block mb-1">Official Corporate & Admin Mail</span>
                        <a href={`mailto:${hubConfig.businessEmail1}`} className="text-xs sm:text-sm font-bold text-white hover:text-blue-200 break-all">
                          {hubConfig.businessEmail1}
                        </a>
                      </div>
                      <div className="mt-3 pt-3 border-t border-white/10 flex items-center justify-between">
                        <span className="text-[10px] text-slate-300">Domain: {officialContacts.corporateDomain}</span>
                        <button onClick={() => copyToClipboard(hubConfig.businessEmail1, "Corporate Email")} className="text-[11px] font-bold text-amber-300 hover:underline">
                          Copy Email
                        </button>
                      </div>
                    </div>

                    {/* Business Email 2 */}
                    <div className="bg-blue-600/20 border border-blue-400/40 rounded-2xl p-4 flex flex-col justify-between">
                      <div>
                        <span className="text-[10px] font-black uppercase tracking-wider text-blue-300 block mb-1">24/7 Student Helpdesk Mail</span>
                        <a href={`mailto:${hubConfig.businessEmail2}`} className="text-xs sm:text-sm font-bold text-white hover:text-blue-200 break-all">
                          {hubConfig.businessEmail2}
                        </a>
                      </div>
                      <div className="mt-3 pt-3 border-t border-white/10 flex items-center justify-between">
                        <span className="text-[10px] text-slate-300">Instant Ticket System</span>
                        <button onClick={() => copyToClipboard(hubConfig.businessEmail2, "Support Email")} className="text-[11px] font-bold text-amber-300 hover:underline">
                          Copy Email
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Regional Campuses */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm">
                    <h3 className="text-base font-black text-[#0B1730] mb-1">Guwahati Headquarters</h3>
                    <p className="text-xs text-slate-600 leading-relaxed mb-3">SARJIS EDUCATION HUB, GS Road, Christian Basti, Guwahati, Assam - 781005</p>
                    <div className="text-xs font-bold text-blue-600">Helpline: +91 98765 43210</div>
                  </div>

                  <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm">
                    <h3 className="text-base font-black text-[#0B1730] mb-1">New Delhi Academic Center</h3>
                    <p className="text-xs text-slate-600 leading-relaxed mb-3">Old Rajinder Nagar, Near Karol Bagh Metro Station, New Delhi - 110060</p>
                    <div className="text-xs font-bold text-blue-600">Portal: www.mockadmin.inc.in</div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        )}

        {/* 11. LOGIN PAGE */}
        {activePage === 'login' && (
          <div className="py-16 px-4 max-w-md mx-auto">
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-xl space-y-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-2xl flex items-center justify-center font-black text-xl mx-auto mb-3 shadow-md">M</div>
                <h2 className="text-2xl font-black text-[#0B1730]">Welcome Back</h2>
                <p className="text-xs text-slate-500 mt-1">Sign in to your MOCK ACADEMY account</p>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Email or Mobile Number</label>
                  <input type="text" placeholder="aspirant@example.com" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs outline-none focus:border-blue-600" />
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Password</label>
                  <input type="password" placeholder="••••••••" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs outline-none focus:border-blue-600" />
                </div>

                <button onClick={() => { showToast("Login successful! Redirecting to Student Dashboard."); setActivePage('student-dashboard'); }} className="w-full bg-[#1D4ED8] hover:bg-blue-700 text-white font-bold py-3.5 rounded-xl text-xs transition shadow-md">
                  Sign In to Dashboard
                </button>
              </div>

              <div className="text-center text-xs text-slate-500 pt-4 border-t border-slate-100">
                Don't have an account? <button onClick={() => setActivePage('register')} className="text-blue-600 font-bold underline ml-1">Register here</button>
              </div>
            </div>
          </div>
        )}

        {/* 12. REGISTRATION PAGE */}
        {activePage === 'register' && (
          <div className="py-16 px-4 max-w-md mx-auto">
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-xl space-y-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-2xl flex items-center justify-center font-black text-xl mx-auto mb-3 shadow-md">M</div>
                <h2 className="text-2xl font-black text-[#0B1730]">Create Account</h2>
                <p className="text-xs text-slate-500 mt-1">Start your competitive exam preparation today</p>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Full Name</label>
                  <input type="text" placeholder="Rahul Sharma" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs outline-none focus:border-blue-600" />
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Email Address</label>
                  <input type="email" placeholder="rahul@example.com" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs outline-none focus:border-blue-600" />
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Preferred Language</label>
                  <select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs outline-none focus:border-blue-600">
                    <option value="en">English</option>
                    <option value="hi">हिंदी (Hindi)</option>
                    <option value="as">অসমীয়া (Assamese)</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Password</label>
                  <input type="password" placeholder="••••••••" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs outline-none focus:border-blue-600" />
                </div>

                <button onClick={() => { showToast("Registration successful! Welcome to MOCK ACADEMY."); setActivePage('student-dashboard'); }} className="w-full bg-[#1D4ED8] hover:bg-blue-700 text-white font-bold py-3.5 rounded-xl text-xs transition shadow-md">
                  Complete Registration
                </button>
              </div>

              <div className="text-center text-xs text-slate-500 pt-4 border-t border-slate-100">
                Already registered? <button onClick={() => setActivePage('login')} className="text-blue-600 font-bold underline ml-1">Sign In</button>
              </div>
            </div>
          </div>
        )}

        {/* 13. STUDENT DASHBOARD */}
        {activePage === 'student-dashboard' && (
          <div className="py-12 px-4 max-w-7xl mx-auto space-y-8">
            {/* Welcome Banner */}
            <div className="bg-gradient-to-r from-[#0B1730] to-blue-900 rounded-3xl p-8 text-white flex flex-col md:flex-row items-start md:items-center justify-between shadow-xl">
              <div>
                <span className="bg-amber-400 text-[#0B1730] text-xs font-black px-3 py-1 rounded-full uppercase">
                  {hubConfig.bannerTitle} • Student Portal
                </span>
                <h1 className="text-2xl sm:text-3xl font-black mt-3 mb-1">Welcome back, Rahul Sharma!</h1>
                <p className="text-xs text-slate-300">Target Exam: SSC CGL 2026 & ADRE Grade III • Streak: 🔥 {studyStreak} Days</p>
              </div>
              <div className="mt-6 md:mt-0 flex space-x-3">
                <button onClick={() => setActivePage('mock-tests')} className="bg-[#1D4ED8] hover:bg-blue-600 text-white font-bold px-6 py-3 rounded-xl text-xs shadow-md transition">
                  Resume Practice
                </button>
              </div>
            </div>

            {/* Performance Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
                <div className="text-xs text-slate-500 mb-1">Tests Attempted</div>
                <div className="text-3xl font-black text-[#0B1730]">48</div>
              </div>
              <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
                <div className="text-xs text-slate-500 mb-1">Average Accuracy</div>
                <div className="text-3xl font-black text-emerald-600">88.4%</div>
              </div>
              <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
                <div className="text-xs text-slate-500 mb-1">Daily Study Streak</div>
                <div className="text-3xl font-black text-amber-500">{studyStreak} Days 🔥</div>
              </div>
              <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
                <div className="text-xs text-slate-500 mb-1">Saved Notes / Capsules</div>
                <div className="text-3xl font-black text-blue-600">{savedNotesCount} Saved</div>
              </div>
            </div>

            {/* Recent Test Attempts Table */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm">
              <h2 className="text-xl font-black text-[#0B1730] mb-6">Recent Test Attempts</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead>
                    <tr className="border-b border-slate-100 text-slate-400">
                      <th className="pb-3 font-bold">Test Name</th>
                      <th className="pb-3 font-bold">Date</th>
                      <th className="pb-3 font-bold">Score</th>
                      <th className="pb-3 font-bold">Accuracy</th>
                      <th className="pb-3 font-bold">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-slate-700">
                    <tr>
                      <td className="py-4 font-bold text-[#0B1730]">SSC CGL Tier-1 Full Length Grand Mock</td>
                      <td className="py-4">05 May 2026</td>
                      <td className="py-4 font-bold text-blue-600">142 / 200</td>
                      <td className="py-4 text-emerald-600 font-bold">91.2%</td>
                      <td className="py-4"><button onClick={() => setActivePage('mock-tests')} className="text-blue-600 font-bold underline">View Solutions</button></td>
                    </tr>
                    <tr>
                      <td className="py-4 font-bold text-[#0B1730]">ADRE Grade III Comprehensive Mock</td>
                      <td className="py-4">02 May 2026</td>
                      <td className="py-4 font-bold text-blue-600">118 / 150</td>
                      <td className="py-4 text-emerald-600 font-bold">86.5%</td>
                      <td className="py-4"><button onClick={() => setActivePage('mock-tests')} className="text-blue-600 font-bold underline">View Solutions</button></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* 14. ADMIN DASHBOARD (WITH BRAND & OFFICIAL EMAIL MANAGEMENT) */}
        {activePage === 'admin-dashboard' && (
          <div className="py-12 px-4 max-w-7xl mx-auto space-y-8">
            <div className="bg-indigo-900 text-white rounded-3xl p-8 shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between">
              <div>
                <span className="bg-indigo-700 text-amber-300 text-xs font-black px-3 py-1 rounded-full uppercase">
                  {hubConfig.bannerTitle} • Admin Terminal
                </span>
                <h1 className="text-2xl sm:text-3xl font-black mt-2 mb-1">MOCK ACADEMY Control Center</h1>
                <p className="text-xs text-indigo-200">Manage examinations, question banks, official emails ({officialContacts.corporateDomain}) & announcements.</p>
              </div>
              <div className="mt-4 md:mt-0">
                <button onClick={() => showToast("Prototype Action: New Examination modal opened")} className="bg-white text-indigo-900 font-bold px-5 py-2.5 rounded-xl text-xs shadow-md">
                  + Add New Exam
                </button>
              </div>
            </div>

            {/* Admin Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
                <div className="text-xs text-slate-500 mb-1">Total Students</div>
                <div className="text-3xl font-black text-[#0B1730]">1,25,480</div>
              </div>
              <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
                <div className="text-xs text-slate-500 mb-1">Published Mock Tests</div>
                <div className="text-3xl font-black text-indigo-600">1,540</div>
              </div>
              <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
                <div className="text-xs text-slate-500 mb-1">Study PDFs Uploaded</div>
                <div className="text-3xl font-black text-blue-600">420</div>
              </div>
              <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
                <div className="text-xs text-slate-500 mb-1">Monthly Revenue (Demo)</div>
                <div className="text-3xl font-black text-emerald-600">₹14.8 Lakh</div>
              </div>
            </div>

            {/* Brand & Official Contact Management Panel */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm">
              <h2 className="text-xl font-black text-[#0B1730] mb-2">Brand Banner & Contact Management (Live Edit)</h2>
              <p className="text-xs text-slate-500 mb-6">Update the top executive banner and official emails across the platform in real time.</p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Top Executive Banner Title</label>
                  <input
                    type="text"
                    value={hubConfig.bannerTitle}
                    onChange={(e) => setHubConfig({...hubConfig, bannerTitle: e.target.value})}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs font-bold text-[#0B1730]"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Primary Founder Email 1</label>
                  <input
                    type="text"
                    value={hubConfig.primaryEmail1}
                    onChange={(e) => setHubConfig({...hubConfig, primaryEmail1: e.target.value})}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Primary Co-Founder Email 2</label>
                  <input
                    type="text"
                    value={hubConfig.primaryEmail2}
                    onChange={(e) => setHubConfig({...hubConfig, primaryEmail2: e.target.value})}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Corporate Admin Email</label>
                  <input
                    type="text"
                    value={hubConfig.businessEmail1}
                    onChange={(e) => setHubConfig({...hubConfig, businessEmail1: e.target.value})}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Support Desk Email</label>
                  <input
                    type="text"
                    value={hubConfig.businessEmail2}
                    onChange={(e) => setHubConfig({...hubConfig, businessEmail2: e.target.value})}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs"
                  />
                </div>
                <div className="flex items-end">
                  <button
                    onClick={() => showToast("Brand & Contact Settings Updated Live Across Website!")}
                    className="w-full bg-[#1D4ED8] hover:bg-blue-700 text-white font-bold py-2.5 rounded-xl text-xs transition shadow-sm flex items-center justify-center space-x-1.5"
                  >
                    <Save className="w-4 h-4" />
                    <span>Save Live Changes</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Admin Management Sections */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm space-y-6">
              <h2 className="text-xl font-black text-[#0B1730] mb-4">Exam Catalogue Management</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead>
                    <tr className="border-b border-slate-100 text-slate-400">
                      <th className="pb-3 font-bold">Exam ID</th>
                      <th className="pb-3 font-bold">Examination Name</th>
                      <th className="pb-3 font-bold">Category</th>
                      <th className="pb-3 font-bold">Active Mocks</th>
                      <th className="pb-3 font-bold">Status</th>
                      <th className="pb-3 font-bold">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-slate-700">
                    <tr>
                      <td className="py-4 font-mono font-bold">EXAM-01</td>
                      <td className="py-4 font-bold text-[#0B1730]">SSC CGL 2026 Tier-1</td>
                      <td className="py-4">SSC</td>
                      <td className="py-4">420 Tests</td>
                      <td className="py-4"><span className="bg-emerald-50 text-emerald-700 font-bold px-2.5 py-1 rounded-md">Published</span></td>
                      <td className="py-4 flex space-x-2">
                        <button onClick={() => showToast("Editing EXAM-01")} className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200"><Edit3 className="w-3.5 h-3.5 text-slate-600" /></button>
                        <button onClick={() => showToast("Deleting exam")} className="p-2 rounded-lg bg-rose-50 hover:bg-rose-100"><Trash2 className="w-3.5 h-3.5 text-rose-600" /></button>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-4 font-mono font-bold">EXAM-02</td>
                      <td className="py-4 font-bold text-[#0B1730]">ADRE Grade III 2026</td>
                      <td className="py-4">Assam Exams</td>
                      <td className="py-4">180 Tests</td>
                      <td className="py-4"><span className="bg-emerald-50 text-emerald-700 font-bold px-2.5 py-1 rounded-md">Published</span></td>
                      <td className="py-4 flex space-x-2">
                        <button onClick={() => showToast("Editing EXAM-02")} className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200"><Edit3 className="w-3.5 h-3.5 text-slate-600" /></button>
                        <button onClick={() => showToast("Deleting exam")} className="p-2 rounded-lg bg-rose-50 hover:bg-rose-100"><Trash2 className="w-3.5 h-3.5 text-rose-600" /></button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

      </main>

      {/* ================= PROFESSIONAL FOOTER ================= */}
      <footer className="bg-[#0B1730] text-slate-300 pt-16 pb-12 px-4 border-t border-slate-800">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="text-[11px] font-black uppercase tracking-widest text-amber-400">
              {hubConfig.bannerTitle}
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-[#1D4ED8] rounded-xl flex items-center justify-center text-white font-black text-xl shadow-md">
                S
              </div>
              <div className="text-lg font-black text-white tracking-tight">MOCK <span className="text-blue-400">ACADEMY</span></div>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              {t.tagline} • An official flagship EdTech platform by <strong>{hubConfig.bannerTitle}</strong> for competitive examinations across India.
            </p>
            <div className="text-xs text-slate-500">
              © 2026 {hubConfig.bannerTitle} (mockadmin.inc.in). All rights reserved.
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white text-sm font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2.5 text-xs">
              <li><button onClick={() => setActivePage('home')} className="hover:text-white transition">{t.home}</button></li>
              <li><button onClick={() => setActivePage('all-exams')} className="hover:text-white transition">{t.allExams}</button></li>
              <li><button onClick={() => setActivePage('mock-tests')} className="hover:text-white transition">{t.mockTests}</button></li>
              <li><button onClick={() => setActivePage('study-materials')} className="hover:text-white transition">{t.studyMaterials}</button></li>
              <li><button onClick={() => setActivePage('pricing')} className="hover:text-white transition">{t.pricing}</button></li>
            </ul>
          </div>

          {/* Popular Exams */}
          <div>
            <h4 className="text-white text-sm font-bold mb-4">Exam Categories</h4>
            <ul className="space-y-2.5 text-xs">
              <li><button onClick={() => setActivePage('all-exams')} className="hover:text-white transition">SSC CGL & CHSL</button></li>
              <li><button onClick={() => setActivePage('all-exams')} className="hover:text-white transition">Railway RRB NTPC & Group D</button></li>
              <li><button onClick={() => setActivePage('all-exams')} className="hover:text-white transition">IBPS & SBI Banking Exams</button></li>
              <li><button onClick={() => setActivePage('all-exams')} className="hover:text-white transition">Assam ADRE & Police Exams</button></li>
            </ul>
          </div>

          {/* Official Contact & Emails */}
          <div>
            <h4 className="text-white text-sm font-bold mb-4">Official Communication</h4>
            <div className="space-y-2 text-xs text-slate-300 mb-4">
              <div className="flex items-center space-x-2">
                <Mail className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                <a href={`mailto:${hubConfig.primaryEmail1}`} className="hover:text-white break-all">{hubConfig.primaryEmail1}</a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                <a href={`mailto:${hubConfig.primaryEmail2}`} className="hover:text-white break-all">{hubConfig.primaryEmail2}</a>
              </div>
              <div className="flex items-center space-x-2">
                <Briefcase className="w-3.5 h-3.5 text-blue-400 flex-shrink-0" />
                <a href={`mailto:${hubConfig.businessEmail1}`} className="hover:text-white break-all">{hubConfig.businessEmail1}</a>
              </div>
              <div className="flex items-center space-x-2">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                <a href={`mailto:${hubConfig.businessEmail2}`} className="hover:text-white break-all">{hubConfig.businessEmail2}</a>
              </div>
            </div>
            <button onClick={() => setActivePage('contact-us')} className="bg-[#1D4ED8] hover:bg-blue-600 text-white font-bold px-4 py-2 rounded-xl text-xs transition">
              Open Helpdesk →
            </button>
          </div>

        </div>

        <div className="max-w-7xl mx-auto pt-6 border-t border-slate-800 text-center text-[11px] text-slate-500">
          {t.prototypeNotice}
        </div>
      </footer>

    </div>
  );
}