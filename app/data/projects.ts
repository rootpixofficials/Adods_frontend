export interface Project {
  title: string;
  category: string;
  tags: string[];
  image: string;
}

export const allProjects: Project[] = [
  { title: "Cerebro", category: "Branding", tags: ["Identity"], image: "/images/Branding/cerebro D6 (1).webp" },
  { title: "Modway", category: "Branding", tags: ["Rebranding"], image: "/images/Branding/modway branding 1.webp" },
  { title: "Neha", category: "Branding", tags: ["Design"], image: "/images/Branding/neha.d3 (1).webp" },
  { title: "Tea Story", category: "Branding", tags: ["Logo"], image: "/images/Branding/tea story branding 2 (1).webp" },
  { title: "Sky Route", category: "Branding", tags: ["Brand Guide"], image: "/images/Branding/sky route d6.webp" },
  
  { title: "Ain Mandhi", category: "Marketing", tags: ["Campaign"], image: "/images/Marketing/ain mandhi.webp" },
  { title: "AS Interior", category: "Marketing", tags: ["Social Media"], image: "/images/Marketing/as interior.webp" },
  { title: "Batter Bowl", category: "Marketing", tags: ["Ads"], image: "/images/Marketing/batter bowl 2.webp" },
  { title: "Kunafa", category: "Marketing", tags: ["Promo"], image: "/images/Marketing/kunafa eid 2.webp" },
  { title: "Urban Cave", category: "Marketing", tags: ["Strategy"], image: "/images/Marketing/urben cawe.webp" },
  
  { title: "Origon", category: "Web Design", tags: ["E-Commerce"], image: "/images/Web desing/origon.png" },
  { title: "Routex", category: "Web Design", tags: ["Showcasing"], image: "/images/Web desing/Routex.png" },
  { title: "Rootpix", category: "Web Design", tags: ["Showcasing"], image: "/images/Web desing/rootpix.png" },

  { title: "Origon", category: "Web Development", tags: ["E-Commerce"], image: "/images/Web development/origon.png" },
  { title: "Routex", category: "Web Development", tags: ["Showcasing"], image: "/images/Web development/Routex.png" },
  { title: "Rootpix", category: "Web Development", tags: ["Showcasing"], image: "/images/Web development/rootpix.png" },
];
