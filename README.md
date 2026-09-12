# Roblox Luau Developer Portfolio

A stunning, dark-mode single-page portfolio application for a Roblox Luau programmer. Featuring an interactive showcase of game mechanics, code inspector, and cyberpunk-inspired design.

## 🎨 Design & Aesthetic

**Visual Theme**: "Roblox Studio IDE meets Cyberpunk Arcade"

### Color Palette
- **Deep Slate**: `#0B0F17` (Primary background)
- **Dark Charcoal**: `#161C24` (Panel backgrounds)
- **Neon Cyan**: `#00F0FF` (Primary accent)
- **Vivid Purple**: `#A855F7` (Secondary accent)
- **Emerald Green**: `#10B981` (Live status indicator)

### Design Elements
- Glassmorphism panels with backdrop blur
- Subtle glowing borders and shadows
- Grid overlay background patterns
- Custom scrollbars with neon accents
- Smooth hover and entrance animations

## 🏗️ Page Architecture

### 1. Navigation Bar
- Sticky glassmorphic header
- Live "Commissions Open" indicator with pulsing dot
- Social action buttons (Roblox, DevForum, Discord, GitHub)

### 2. Hero Section
- Bold headline with gradient text
- Interactive tech stack pills
- CTA buttons: "View Work Showcase" and "View Code Architecture"
- Animated background elements

### 3. Featured Mechanics Showcase
Responsive 2-column grid with 5 showcase cards:

#### Card 1: Melee Combat & Combo System
- **Video**: https://www.youtube.com/shorts/DH-vLFZFmb8
- **Tech**: Raycast Hitboxing, OOP, Animation Tracks, Physics Knockback
- **Features**: Hit detection, directional knockback, combo resets, server validation

#### Card 2: Custom FPS Framework & Camera Engine
- **Video**: https://www.youtube.com/watch?v=s4APgfEzl5s
- **Tech**: Viewmodel Math, Procedural Recoil, Spring Physics, Camera Manipulation
- **Features**: Viewmodel positioning, sway, recoil springs, reload logic

#### Card 3: Interactive Fishing Minigame Engine
- **Video**: https://www.youtube.com/watch?v=gTdXWZpJXHE
- **Tech**: TweenService, UI Math, UserGameSettings, State Machine
- **Features**: Cursor-tracking UI, tension physics, fluid animations

#### Card 4: Interactive Bowling & Physics System
- **Video**: https://www.youtube.com/watch?v=OiBMGmxAtiU
- **Tech**: Custom Physics, ProximityPrompts, Scoreboard Logic, Collision Detection
- **Features**: Ball trajectory math, pin collision, multiplayer scoring

#### Card 5: Branching NPC Dialogue & Interaction Bot
- **Video**: https://www.youtube.com/watch?v=fTwRG6QbdxQ
- **Tech**: Branching Trees, Custom Chat GUI, Proximity Interactions, State Engines
- **Features**: Dynamic dialogue trees, typewriter effects, customizable responses

### 4. Code Inspector Modal
- IDE-style tabbed code preview window
- Three tabs: "Client Handler", "Server Framework", "Network Replicator"
- Monospaced font with Luau syntax
- Copy-to-clipboard functionality

### 5. Contact Card Section
- Click-to-copy Discord username
- Email contact with copy button
- DevForum link
- Live status indicator

### 6. Footer
- Dynamic year rendering
- Copyright notice
- Technology attribution

## 🚀 Tech Stack

- **React 18**: Modern component architecture
- **Tailwind CSS 3**: Utility-first styling
- **Framer Motion 10**: Smooth entrance and interactive animations
- **Vite**: Fast build tool and dev server
- **Lucide React**: Beautiful icon library

## 📦 Getting Started

### Prerequisites
- Node.js 16+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/coolbeans34451-wq/roblox-luau-portfolio.git
cd roblox-luau-portfolio

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📝 Customization

### Update Contact Information
Edit `/src/components/ContactCard.jsx`:
```javascript
const discordHandle = 'YourHandle#1234'
const email = 'your.email@example.com'
const devForumUrl = 'https://devforum.roblox.com/u/yourusername'
```

### Modify Showcase Videos
Edit `/src/components/ShowcaseGrid.jsx` in the `showcaseData` array:
```javascript
{
  id: 1,
  title: 'Your Project Title',
  videoUrl: 'https://www.youtube.com/embed/VIDEO_ID',
  originalUrl: 'https://www.youtube.com/watch?v=VIDEO_ID',
  badges: ['Tech1', 'Tech2'],
  details: ['Feature 1', 'Feature 2'],
}
```

### Customize Colors
Edit `/tailwind.config.js` to modify the neon color palette:
```javascript
colors: {
  neon: {
    cyan: '#00F0FF',
    purple: '#A855F7',
    emerald: '#10B981',
  },
}
```

## 🎬 Features

✅ Fully responsive design (mobile, tablet, desktop)  
✅ Dark mode with cyberpunk aesthetic  
✅ Smooth entrance animations on scroll  
✅ Interactive video showcase with modal player  
✅ IDE-style code inspector with syntax highlighting  
✅ Copy-to-clipboard contact information  
✅ Live commission status indicator  
✅ Glassmorphism UI with glowing borders  
✅ Custom scrollbar styling  
✅ Network-optimized and performant  

## 📄 License

This project is open source and available under the MIT License.

## 🙌 Credits

Built with passion for the Roblox development community. Special thanks to all the incredible game developers and creators who inspire innovation on the platform.

---

**Let's build something amazing together!** 🚀
