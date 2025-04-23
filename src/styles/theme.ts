export const tradingTheme = {
  colors: {
    background: '#f4f7fb',
    surface: '#ffffff',
    primary: '#1976d2',         // bluish
    primaryLight: '#63a4ff',
    primaryDark: '#004ba0',
    secondary: '#00bcd4',       // accent teal
    textPrimary: '#0d1b2a',
    textSecondary: '#5c6b7c',
    divider: '#e0e0e0',
    error: '#e53935',
  },
  font: {
    family: `'Inter', 'Roboto', 'Segoe UI', sans-serif`,
    size: '16px',
  },
  layout: {
    topnavHeight: '64px',
    mobileNavHeight: '56px',
    desktopNavWidth: '240px',
    contentPadding: '24px'
  }
};

// Generate CSS variables object
export const cssVariables = {
  '--background-default': tradingTheme.colors.background,
  '--background-paper': tradingTheme.colors.surface,
  '--primary-main': tradingTheme.colors.primary,
  '--primary-light': tradingTheme.colors.primaryLight,
  '--primary-dark': tradingTheme.colors.primaryDark,
  '--secondary-main': tradingTheme.colors.secondary,
  '--text-primary': tradingTheme.colors.textPrimary,
  '--text-secondary': tradingTheme.colors.textSecondary,
  '--divider': tradingTheme.colors.divider,
  '--error': tradingTheme.colors.error,
  '--font-family': tradingTheme.font.family,
  '--font-size': tradingTheme.font.size,
};
export const themeAsCssVariables = `
  --background-default: ${tradingTheme.colors.background};
  --background-paper: ${tradingTheme.colors.surface};
  --primary-main: ${tradingTheme.colors.primary};
  --primary-light: ${tradingTheme.colors.primaryLight};
  --primary-dark: ${tradingTheme.colors.primaryDark};
  --secondary-main: ${tradingTheme.colors.secondary};
  --text-primary: ${tradingTheme.colors.textPrimary};
  --text-secondary: ${tradingTheme.colors.textSecondary};
  --divider: ${tradingTheme.colors.divider};
  --error: ${tradingTheme.colors.error};
  --font-family: ${tradingTheme.font.family};
  --font-size: ${tradingTheme.font.size};
  --topnav-height: ${tradingTheme.layout.topnavHeight};
  --mobile-nav-height: ${tradingTheme.layout.mobileNavHeight};
  --desktop-nav-width: ${tradingTheme.layout.desktopNavWidth};
  --content-padding: ${tradingTheme.layout.contentPadding};
`;