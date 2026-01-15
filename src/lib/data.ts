/**
 * Dual Portfolio Data Structure
 * Separates Dev Projects (for job applications) from Art Works (for art school applications)
 * Strictly typed for safety and easy updates
 */

// ============================================
// SOCIAL LINKS
// ============================================
export interface Social {
  platform: 'github' | 'linkedin' | 'email'
  label: string
  url: string
  icon: string
}

// ============================================
// PROFILE & MII
// ============================================
export interface Profile {
  name: string
  role: string
  bio: string
  miiImageSrc: string
  email: string
}

// ============================================
// DEV PROJECTS (For Job Applications)
// ============================================
export interface DevProject {
  id: string
  title: string
  description: string
  stack: string[]
  demoUrl?: string
  repoUrl: string
  thumbnail: string
  featured?: boolean
  date?: string
}

// ============================================
// ART WORKS (For Art School Applications)
// ============================================
export interface ArtWork {
  id: string
  title: string
  medium: 'Digital 3D' | 'Digital Painting' | 'Sketch' | 'Animation' | 'Photography' | 'Mixed Media'
  description: string
  finalImage: string
  processImages: string[] // Array of sketches, wireframes, work-in-progress
  date?: string
  featured?: boolean
}

// ============================================
// PROFILE DATA
// ============================================
export const profile: Profile = {
  name: 'Eallis',
  role: 'Creative Developer',
  bio: 'Bridging design and code. Building interactive experiences that inspire. Passionate about Wii aesthetics, generative art, and creative technology.',
  miiImageSrc: '/images/mii-eallis.png',
  email: 'hello@eallis.dev',
}

// ============================================
// SOCIAL LINKS
// ============================================
export const socials: Social[] = [
  {
    platform: 'github',
    label: 'GitHub',
    url: 'https://github.com/eallis',
    icon: 'Github',
  },
  {
    platform: 'linkedin',
    label: 'LinkedIn',
    url: 'https://linkedin.com/in/eallis',
    icon: 'Linkedin',
  },
  {
    platform: 'email',
    label: 'Email',
    url: 'mailto:hello@eallis.dev',
    icon: 'Mail',
  },
]

// ============================================
// DEVELOPMENT PROJECTS (Job Applications)
// ============================================
export const devProjects: DevProject[] = [
  {
    id: 'wii-portfolio',
    title: 'Wii-Themed Portfolio',
    description: 'Interactive portfolio with Frutiger Aero aesthetics. Dual-purpose design for tech roles and creative applications.',
    stack: ['Next.js', 'React', 'Tailwind CSS', 'Framer Motion'],
    demoUrl: 'https://eallis-portfolio.vercel.app',
    repoUrl: 'https://github.com/eallis/wii-portfolio',
    thumbnail: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=500&h=300&fit=crop',
    featured: true,
    date: 'Jan 2025',
  },
  {
    id: 'generative-art-system',
    title: 'Generative Art System',
    description: 'Real-time generative art engine using WebGL and GLSL shaders. Integrates p5.js for interactive visual experiences.',
    stack: ['p5.js', 'WebGL', 'GLSL', 'React'],
    demoUrl: 'https://generative-art-system.vercel.app',
    repoUrl: 'https://github.com/eallis/generative-art',
    thumbnail: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&h=300&fit=crop',
    featured: true,
    date: 'Nov 2024',
  },
  {
    id: 'motion-design-library',
    title: 'Motion Design Component Library',
    description: 'Reusable React components with advanced Framer Motion animations. Built for design systems and enterprise applications.',
    stack: ['React', 'Framer Motion', 'TypeScript', 'Storybook'],
    demoUrl: 'https://motion-library.vercel.app',
    repoUrl: 'https://github.com/eallis/motion-library',
    thumbnail: 'https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=500&h=300&fit=crop',
    date: 'Oct 2024',
  },
  {
    id: 'data-viz-dashboard',
    title: 'Interactive Data Visualization Dashboard',
    description: 'Beautiful data visualization dashboard using D3.js and React. Real-time updates with WebSocket integration.',
    stack: ['React', 'D3.js', 'WebSocket', 'Node.js'],
    repoUrl: 'https://github.com/eallis/data-viz-dashboard',
    thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop',
    date: 'Sep 2024',
  },
]

// ============================================
// ART WORKS (Art School Applications)
// ============================================
export const artWorks: ArtWork[] = [
  {
    id: 'abstract-landscape',
    title: 'Neural Landscape',
    medium: 'Digital 3D',
    description: 'Generative 3D landscape created by training a neural network on natural imagery. Explores the intersection of AI and artistic expression.',
    finalImage: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop',
    processImages: [
      'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1551033406-611cf9a28f29?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop',
    ],
    featured: true,
    date: 'Dec 2024',
  },
  {
    id: 'digital-painting-study',
    title: 'Chromatic Study #7',
    medium: 'Digital Painting',
    description: 'A exploration of color theory and digital brushwork. 40+ hours of iterative refinement studying light, shadow, and atmospheric perspective.',
    finalImage: 'https://images.unsplash.com/photo-1578321272176-b7bbc89dcb4e?w=800&h=600&fit=crop',
    processImages: [
      'https://images.unsplash.com/photo-1533438481143-eb4c98c45dc2?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1578321272176-b7bbc89dcb4e?w=400&h=300&fit=crop',
    ],
    featured: true,
    date: 'Nov 2024',
  },
  {
    id: 'character-design-animation',
    title: 'Mii Character Animation Rig',
    medium: 'Digital 3D',
    description: 'Complete character model and animation rig inspired by Wii Mii design. Includes 20+ idle, walking, and expression animations.',
    finalImage: 'https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=800&h=600&fit=crop',
    processImages: [
      'https://images.unsplash.com/photo-1618005182384-a83a8e565055?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=400&h=300&fit=crop',
    ],
    date: 'Oct 2024',
  },
  {
    id: 'sketch-collection',
    title: 'Urban Sketches Series',
    medium: 'Sketch',
    description: 'A collection of 30+ pen and digital sketches exploring urban environments, architecture, and human form. Weekly sketching practice over 3 months.',
    finalImage: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=800&h=600&fit=crop',
    processImages: [
      'https://images.unsplash.com/photo-1543857778-c4a1a3e0b2eb?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1518234926320-c7ee46b8b3f1?w=400&h=300&fit=crop',
    ],
    featured: true,
    date: 'Sep 2024',
  },
  {
    id: 'generative-art-piece',
    title: 'Algorithmic Bloom',
    medium: 'Animation',
    description: 'Animated generative art piece using p5.js. Explores recursive patterns, Perlin noise, and organic motion to simulate natural growth systems.',
    finalImage: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop',
    processImages: [
      'https://images.unsplash.com/photo-1516321318423-f06f70d504f0?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1532012197267-da84d127e765?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop',
    ],
    date: 'Aug 2024',
  },
]

// ============================================
// PHOTO ALBUMS (Legacy - kept for compatibility)
// ============================================
export interface PhotoAlbum {
  id: string
  title: string
  description?: string
  coverImage: string
  date: string
  photoCount: number
  photos?: PhotoItem[]
}

export interface PhotoItem {
  id: string
  url: string
  caption?: string
}

export const photoAlbums: PhotoAlbum[] = [
  {
    id: 'japan-2024',
    title: 'Japan Trip 2024',
    description: 'Summer adventure through Tokyo, Kyoto, and Osaka',
    coverImage:
      'https://images.unsplash.com/photo-1540959375944-7049f642e8b5?w=500&h=400&fit=crop',
    date: 'August 2024',
    photoCount: 48,
    photos: [
      {
        id: '1',
        url: 'https://images.unsplash.com/photo-1540959375944-7049f642e8b5?w=800&h=600&fit=crop',
        caption: 'Tokyo Skyline',
      },
      {
        id: '2',
        url: 'https://images.unsplash.com/photo-1525968915348-2aa2b5b7a3d5?w=800&h=600&fit=crop',
        caption: 'Temple in Kyoto',
      },
      {
        id: '3',
        url: 'https://images.unsplash.com/photo-1522383150241-6c85da37053b?w=800&h=600&fit=crop',
        caption: 'Osaka Castle',
      },
    ],
  },
  {
    id: 'conference-2024',
    title: '2024 Tech Conference',
    description: 'React Conf and Web Development Summit',
    coverImage:
      'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=400&fit=crop',
    date: 'June 2024',
    photoCount: 32,
    photos: [
      {
        id: '1',
        url: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop',
        caption: 'Main Stage',
      },
      {
        id: '2',
        url: 'https://images.unsplash.com/photo-1540575467063-178cb50ee898?w=800&h=600&fit=crop',
        caption: 'Networking Event',
      },
    ],
  },
  {
    id: 'london-2024',
    title: 'London Adventure',
    description: 'Exploring the historic streets and modern design',
    coverImage:
      'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=500&h=400&fit=crop',
    date: 'May 2024',
    photoCount: 56,
  },
  {
    id: 'team-2024',
    title: 'Team Gatherings',
    description: 'Photos from team events and celebrations',
    coverImage:
      'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=400&fit=crop',
    date: 'Throughout 2024',
    photoCount: 28,
  },
]

// ============================================
// PAGE DATA / CONSTANTS
// ============================================
export const pages = {
  home: {
    title: 'Wii Portfolio',
    description: 'Welcome to my interactive portfolio',
  },
  projects: {
    title: 'Dev Projects',
    description: 'Explore my recent development projects',
  },
  gallery: {
    title: 'Photo Gallery',
    description: 'Travel and memory albums',
  },
  about: {
    title: 'About Me',
    description: 'Get to know me better',
  },
}
