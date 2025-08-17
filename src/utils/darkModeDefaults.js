// Utility classes for consistent dark mode styling across the application

export const darkModeClasses = {
  // Backgrounds
  bgPrimary: 'bg-white dark:bg-gray-900',
  bgSecondary: 'bg-divine-light dark:bg-gray-800',
  bgTertiary: 'bg-gray-50 dark:bg-gray-850',
  bgCard: 'bg-white dark:bg-gray-800',
  bgHover: 'hover:bg-gray-50 dark:hover:bg-gray-700',
  
  // Text colors
  textPrimary: 'text-divine-dark dark:text-white',
  textSecondary: 'text-divine-gray dark:text-gray-300',
  textMuted: 'text-gray-500 dark:text-gray-400',
  
  // Borders
  border: 'border-gray-200 dark:border-gray-700',
  borderHover: 'hover:border-divine-gold dark:hover:border-divine-gold',
  
  // Shadows
  shadow: 'shadow-lg dark:shadow-2xl dark:shadow-black/50',
  shadowHover: 'hover:shadow-xl dark:hover:shadow-2xl dark:hover:shadow-black/60',
  
  // Transitions
  transition: 'transition-all duration-300',
};

// Apply dark mode to all necessary elements
export const applyDarkMode = () => {
  const root = document.documentElement;
  
  // Check if dark mode is enabled
  const isDarkMode = root.classList.contains('dark');
  
  if (isDarkMode) {
    // Additional dark mode specific adjustments
    document.body.style.backgroundColor = '#111827';
  } else {
    document.body.style.backgroundColor = '#ffffff';
  }
};