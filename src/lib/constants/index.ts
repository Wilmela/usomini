import { siteConfig } from "@/config";
import {
  Droplets,
  HouseIcon,
  Mail,
  MapPin,
  Phone,
  School2Icon,
  CalendarDays,
  MapIcon,
  Users,
  SettingsIcon,
  TagIcon,
  Clock,
  ToolCase,
  Contact,
} from "lucide-react";

export const categories = [
  "General",
  "Sport",
  "Events",
  "Empowerment",
  "Employment",
  "Infrastructure",
];

export const landmarks = [
  {
    imageUrl: "/images/fcet.jpeg",
    title: "Federal College of Education Technical, Omoku",
    icons: School2Icon,
    description:
      "A premier tertiary institution and major educational hub in Rivers State, offering technical and vocational training to students from across Nigeria. Established to advance skill development and technical education in the Niger Delta region.",
  },
  {
    imageUrl: "/images/sec.jpeg",
    title: "Omoku Main Market",
    icons: TagIcon,
    description:
      "The vibrant commercial heartbeat of ONELGA, where traders and customers converge daily for fresh produce, textiles, household goods, and local crafts. A bustling center of economic activity that showcases the region's entrepreneurial spirit and community commerce.",
  },
  {
    imageUrl: "/images/sec.jpeg",
    title: "Traditional Palaces",
    icons: HouseIcon,
    description:
      "Historic royal seats representing the rich cultural heritage of ONELGA's constituent kingdoms: the palace of the Oba of Ogbaland in Omoku, the Nze-Obi of Egbema Kingdom, and the Eze Egi of Egi Kingdom. These architectural landmarks serve as centers of traditional governance and cultural preservation.",
  },
  {
    imageUrl: "/images/sec.jpeg",
    title: "Oil & Gas Infrastructure",
    icons: SettingsIcon,
    description:
      "Critical industrial complexes and installations operated by major energy companies including TotalEnergies, Nigerian Agip Oil Company (NAOC), and Shell Petroleum Development Company (SPDC). These facilities represent ONELGA's strategic role in Nigeria's petroleum industry and economic development.",
  },
  {
    imageUrl: "/images/sec.jpeg",
    title: "River Niger (Ndoni Axis)",
    icons: Droplets,
    description:
      "The majestic western flank of Nigeria's greatest river flowing through Ndoni, serving as a vital transportation corridor and agricultural lifeline. This waterway facilitates trade, fishing, and connectivity to major commercial centers like Onitsha, while supporting local farming communities along its fertile banks.",
  },
  {
    imageUrl: "/images/sec.jpeg",
    title: "Cultural Sites",
    icons: MapPin,
    description:
      "Sacred grounds and community spaces that host ONELGA's most celebrated traditional festivals, including the annual Nchaka festival and the vibrant Okuroso masquerade ceremonies in Omoku. These sites preserve ancient customs and bring communities together in colorful displays of cultural heritage.",
  },
  // Uncomment if needed:
  // {
  //   imageUrl: "/images/sec.jpeg",
  //   title: "Natural Resources & Forest Reserves",
  //   icons: Droplets,
  //   description:
  //     "Expansive tropical rainforests and ecological preserves that sustain diverse wildlife while providing valuable timber resources. These natural assets characterize the region's lush geography and contribute to both local livelihoods and environmental conservation efforts.",
  // },
];

export const services = [
  {
    Icon: MapPin,
    title: "Visit ONELGA",
    color: "text-white",
    href: "/contact",
  },
  {
    Icon: ToolCase,
    title: "Services",
    color: "text-white",
    href: "/contact",
  },
  {
    Icon: Clock,
    title: "Appointment",
    color: "text-white",
    href: "/contact",
  },
  {
    Icon: Contact,
    title: "Contact Us",
    color: "text-white",
    href: `/contact`,
  },
  // {
  //   Icon: Mail,
  //   title: "Stay Updated",
  //   color: "text-app-green",
  //   href: `#news-letter`,
  // },
];

export const stats = [
  {
    Icon: MapIcon,
    value: "~1,621 km²",
    title: "Area size",
    description: "Total Land Area",
  },
  {
    Icon: Users,
    value: "407,400+",
    title: "Population",
    description: "Estimated residents",
  },
  {
    Icon: CalendarDays,
    value: "1991",
    title: "Established",
    description: "Year of Establishment",
  },
  {
    Icon: MapPin,
    value: "5.3119° N, 6.6531° E",
    title: "Coordinates",
    description: "Local Government HQ location",
  },
];

export const OTHER_CONTACT = [
  {
    title: "Call",
    description: "You can call us on:",
    contact: siteConfig.phone,
    Icon: Phone,
    bg: "bg-app-blue",
  },
  {
    title: "Mail",
    description: "send an email to:",
    contact: siteConfig.email,
    Icon: Mail,
    bg: "bg-app-green",
  },
  {
    title: "Office",
    description: "or visit us:",
    contact: siteConfig.location,
    Icon: MapPin,
    bg: "bg-app-red",
  },
];

export const STATES = [
  { id: "1", value: "Abia State" },
  { id: "2", value: "Adamawa State" },
  { id: "3", value: "Akwa Ibom State" },
  { id: "4", value: "Anambra State" },
  { id: "5", value: "Bauchi State" },
  { id: "6", value: "Bayelsa State" },
  { id: "7", value: "Benue State" },
  { id: "8", value: "Borno State" },
  { id: "9", value: "Cross River State" },
  { id: "10", value: "Delta State" },
  { id: "11", value: "Ebonyi State" },
  { id: "12", value: "Edo State" },
  { id: "13", value: "Ekiti State" },
  { id: "14", value: "Enugu State" },
  { id: "15", value: "Gombe State" },
  { id: "16", value: "Imo State" },
  { id: "17", value: "Jigawa State" },
  { id: "18", value: "Kaduna State" },
  { id: "19", value: "Kano State" },
  { id: "20", value: "Katsina State" },
  { id: "21", value: "Kebbi State" },
  { id: "22", value: "Kogi State" },
  { id: "23", value: "Kwara State" },
  { id: "24", value: "Lagos State" },
  { id: "25", value: "Nasarawa State" },
  { id: "26", value: "Niger State" },
  { id: "27", value: "Ogun State" },
  { id: "28", value: "Ondo State" },
  { id: "29", value: "Osun State" },
  { id: "30", value: "Oyo State" },
  { id: "31", value: "Plateau State" },
  { id: "32", value: "Rivers State" },
  { id: "33", value: "Sokoto State" },
  { id: "34", value: "Taraba State" },
  { id: "35", value: "Yobe State" },
  { id: "36", value: "Zamfara State" },
];

export const TIME = [
  "8:00 a.m.",
  "9:00 a.m.",
  "10:00 a.m.",
  "11:00 a.m.",
  "12:00 p.m.",
  "1:00 p.m.",
  "2:00 p.m.",
  "3:00 p.m.",
  "4:00 p.m.",
  "5:00 p.m.",
];

export const blogs = [
  {
    id: 1,
    title: "The Art of Connection in Modern Times",
    subtitle:
      "Exploring how digital communication has transformed our greetings",
    slug: "hello-hi",
    featured: true,
    content: `
      <p>In today's fast-paced digital world, the way we greet each other has evolved significantly. From simple "hellos" to elaborate virtual interactions, communication has taken on new dimensions.</p>
      
      <h2>The Evolution of Greetings</h2>
      <p>Traditional greetings have been replaced by digital alternatives. Emojis, GIFs, and reactions have become the new language of connection. This shift represents more than just technological advancement—it's a cultural transformation.</p>
      
      <blockquote>
        "Connection is not just about saying hello; it's about understanding the story behind each greeting."
      </blockquote>
      
      <h2>Digital vs. Physical Greetings</h2>
      <p>While digital greetings offer convenience and speed, they often lack the personal touch of physical interactions. The warmth of a handshake, the sincerity of eye contact—these elements are challenging to replicate in virtual spaces.</p>
      
      <h3>Benefits of Modern Greetings</h3>
      <ul>
        <li>Global connectivity across time zones</li>
        <li>Instant communication</li>
        <li>Creative expression through multimedia</li>
        <li>Record-keeping and reference</li>
      </ul>
      
      <h3>Challenges to Consider</h3>
      <ul>
        <li>Loss of personal touch</li>
        <li>Cultural misunderstandings</li>
        <li>Over-reliance on technology</li>
        <li>Digital fatigue</li>
      </ul>
      
      <p>Finding balance between digital efficiency and human connection is the key to meaningful interactions in our modern era.</p>
    `,
    date: "December 21, 2025",
    time: "12:00 PM",
    readTime: "5 min read",
    imgUrl: "/assets/images/bg.jpg",
    category: "Lifestyle",
    author: "Alex Johnson",
    authorRole: "Communication Expert",
    views: 1248,
    tags: ["communication", "technology", "culture", "digital"],
  },
  {
    id: 2,
    title: "Modern Medicine: Innovative Treatments",
    subtitle: "How technology is revolutionizing healthcare approaches",
    slug: "modern-medicine",
    featured: false,
    content: `
      <p>The healthcare landscape is undergoing a dramatic transformation, driven by technological innovation and new treatment methodologies.</p>
      
      <h2>The Future of Healthcare</h2>
      <p>From AI-powered diagnostics to personalized medicine, the future of healthcare is becoming more precise and accessible.</p>
    `,
    date: "December 20, 2025",
    time: "10:30 AM",
    readTime: "4 min read",
    imgUrl: "/assets/images/bg.jpg",
    category: "Health",
    author: "Dr. Sarah Miller",
    authorRole: "Medical Researcher",
    views: 892,
    tags: ["health", "technology", "innovation"],
  },
  {
    id: 3,
    title: "The Beautiful Game: Soccer's Evolution",
    subtitle: "How modern soccer tactics and technology are changing the sport",
    slug: "soccer-match",
    featured: false,
    content: `
      <p>Soccer continues to evolve with new tactics, training methods, and technological integrations.</p>
    `,
    date: "December 19, 2025",
    time: "3:45 PM",
    readTime: "6 min read",
    imgUrl: "/assets/images/bg.jpg",
    category: "Sports",
    author: "Michael Chen",
    authorRole: "Sports Analyst",
    views: 1567,
    tags: ["sports", "soccer", "technology"],
  },
];

export const links = [
  {
    href: "/",
    title: { eng: "Home", ogba: "Ulor" },
    icon: "🏠",
  },
  {
    href: "/about",
    title: { eng: "About", ogba: "Atita" },
    icon: "📖",
  },
  {
    href: "/leaders",
    title: { eng: "Leaders", ogba: "Nde'isi" },
    icon: "👑",
  },
  {
    href: "/projects",
    title: { eng: "Projects", ogba: "Nwhe'ome" },
    icon: "🚀",
  },
  {
    href: "/blog",
    title: { eng: "Blog", ogba: "Akikor" },
    icon: "✍️",
  },
  {
    href: "/contact",
    title: { eng: "Contact", ogba: "Ru'ye" },
    icon: "📞",
  },
];

export const CATEGORIES = ["General", "Community", "Music", "Movies", "Sports"];
