// =============================================================================
// COLOR TOKENS
// =============================================================================

export const colors = {
  // Primary accent color
  accent: {
    DEFAULT: 'emerald-500',
    hover: 'emerald-500/10',
    border: 'emerald-500/50',
  },
  // Secondary accent (for CTF filters, etc.)
  secondary: {
    DEFAULT: 'cyan-500',
    hover: 'cyan-500/10',
    border: 'cyan-500',
  },
  // Text colors (light/dark mode compatible)
  text: {
    primary: 'text-gray-900 dark:text-gray-100',
    secondary: 'text-gray-600 dark:text-gray-400',
    muted: 'text-gray-500 dark:text-gray-500',
    caption: 'text-gray-500 dark:text-gray-400',
  },
  // Background colors (light/dark mode compatible)
  bg: {
    card: 'bg-gray-100 dark:bg-[#2f2f30]/50',
    cardSolid: 'bg-gray-200 dark:bg-[#2f2f30]',
    hover: 'hover:bg-gray-100 dark:hover:bg-[#2f2f30]',
    dark: 'bg-gray-50 dark:bg-[#1a1a1a]/50',
  },
  // Border colors (light/dark mode compatible)
  border: {
    DEFAULT: 'border-gray-300 dark:border-gray-700',
    light: 'border-gray-200 dark:border-gray-700/50',
    muted: 'border-gray-300 dark:border-gray-600',
  },
} as const;

// =============================================================================
// TYPOGRAPHY STYLES
// =============================================================================

export const typography = {
  // Section headings (Skills, Education, Certifications, etc.)
  sectionHeading: 'mb-6 text-sm tracking-widest text-gray-500 dark:text-gray-400 uppercase',
  
  // Page titles
  pageTitle: 'mb-8 text-2xl font-bold tracking-tight',
  
  // Card/item titles
  cardTitle: 'font-semibold',
  
  // Subtitles and descriptions
  subtitle: 'text-sm text-gray-600 dark:text-gray-400',
  caption: 'text-xs text-gray-500 dark:text-gray-500',
  
  // Body text
  body: 'text-sm text-gray-700 dark:text-gray-300',
  bodyLarge: 'text-base text-gray-700 dark:text-gray-300',
  
  // Links
  link: 'text-blue-600 dark:text-blue-500 hover:underline',
  
  // Prose content
  prose: {
    paragraph: 'mb-4 leading-7',
    list: 'list-disc mb-4 leading-7 text-sm md:text-base',
    listItem: 'ml-4 leading-7 text-sm md:text-base',
  },
} as const;

// =============================================================================
// COMPONENT STYLES
// =============================================================================

export const components = {
  // Cards (light/dark mode compatible)
  card: `flex gap-4 p-4 rounded-lg bg-gray-100 dark:bg-[#2f2f30]/50 border border-gray-300 dark:border-gray-700 items-center`,
  cardHover: 'hover:ring-2 hover:ring-emerald-500 transition-all',
  
  // Buttons - Primary (accent colored)
  buttonPrimary: `px-3 py-1 text-xs text-emerald-600 dark:text-emerald-500 border border-emerald-500/50 rounded-full hover:bg-emerald-500/10 transition-colors`,
  
  // Filter chips/tabs - Default state (light/dark mode compatible)
  filterChip: `px-3 py-1 text-sm rounded-full border transition-colors`,
  filterChipActive: `border-emerald-500 text-emerald-600 dark:text-emerald-500`,
  filterChipInactive: `border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-400 hover:border-emerald-500 hover:text-emerald-500 hover:bg-gray-100 dark:hover:bg-[#2f2f30]`,
  
  // Secondary filter chips (e.g., competition filters)
  filterChipSecondary: `px-2.5 py-1 text-xs rounded border transition-colors`,
  filterChipSecondaryActive: `border-cyan-500 text-cyan-600 dark:text-cyan-500 bg-cyan-500/10`,
  filterChipSecondaryInactive: `border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-400 hover:border-cyan-500 hover:text-cyan-500 hover:bg-gray-100 dark:hover:bg-[#2f2f30]`,
  
  // Skill/tag badges
  badge: 'px-3 py-1 text-sm border rounded-full transition-colors',
  
  // Status badges
  statusBadge: {
    current: 'rounded bg-green-600/20 px-2 py-0.5 text-xs text-green-600 dark:text-green-400',
  },
  
  // Icon containers (light/dark mode compatible)
  iconBox: 'h-10 w-10 bg-gray-200 dark:bg-[#2f2f30] rounded-md flex items-center justify-center',
  
  // Section containers
  section: 'max-w-xl',
  sectionSpacing: 'pt-10',
} as const;

// =============================================================================
// ANIMATION PRESETS
// =============================================================================

export const animations = {
  // Default page/component entrance animation
  fadeInUp: {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.2, ease: 'easeOut' as const },
  },
  // Fade in only
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.2, ease: 'easeOut' as const },
  },
  // Scale up
  scaleIn: {
    initial: { scale: 0.95, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    transition: { duration: 0.2, ease: 'easeOut' as const },
  },
} as const;

// =============================================================================
// LAYOUT STYLES
// =============================================================================

export const layout = {
  // Main content container
  contentContainer: 'max-w-2xl mx-auto my-32 p-2',
  
  // Sidebar
  sidebar: 'md:w-1/4 h-screen overflow-hidden border-r border-gray-200 dark:border-gray-700',
  
  // Main area
  mainArea: 'w-full md:w-3/4 overflow-y-auto',
  
  // Flex layouts
  flexCenter: 'flex items-center justify-center',
  flexBetween: 'flex items-center justify-between',
  
  // Grid layouts
  gridSingle: 'grid grid-cols-1 gap-4',
} as const;

// =============================================================================
// CATEGORY COLORS (for tags, badges, etc.)
// =============================================================================

export const categoryColors = {
  // Skill categories (work well in both light/dark)
  skills: {
    Development: 'border-blue-500/50 text-blue-600 dark:text-blue-400 hover:bg-blue-500/10',
    Security: 'border-red-500/50 text-red-600 dark:text-red-400 hover:bg-red-500/10',
  },
  // Blog post categories (work well in both light/dark)
  posts: {
    notes: 'bg-blue-500/20 text-blue-600 dark:text-blue-400',
    writeups: 'bg-red-500/20 text-red-600 dark:text-red-400',
    general: 'bg-green-500/20 text-green-600 dark:text-green-400',
    research: 'bg-purple-500/20 text-purple-600 dark:text-purple-400',
  },
} as const;

// =============================================================================
// UTILITY FUNCTIONS
// =============================================================================

/**
 * Combine multiple class strings, filtering out falsy values
 */
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ');
}

/**
 * Get filter chip classes based on active state
 */
export function getFilterChipClass(isActive: boolean): string {
  return cn(
    components.filterChip,
    isActive ? components.filterChipActive : components.filterChipInactive
  );
}

/**
 * Get secondary filter chip classes based on active state
 */
export function getSecondaryFilterChipClass(isActive: boolean): string {
  return cn(
    components.filterChipSecondary,
    isActive ? components.filterChipSecondaryActive : components.filterChipSecondaryInactive
  );
}
