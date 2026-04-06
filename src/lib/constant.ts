export const CATEGORIES = ["All", "General", "Community", "Music", "Movies", "Sports"];

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