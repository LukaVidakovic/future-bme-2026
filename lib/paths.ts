// Base path for assets - empty string for university server, '/future-bme-2026' for GitHub Pages
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || '';

// Helper function to get asset path
export function getAssetPath(path: string): string {
  return `${BASE_PATH}${path}`;
}
