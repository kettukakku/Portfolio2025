import fs from 'fs';
import path from 'path';

export function getRoutes(dir: string = '/Users/darien/2025PortfolioSite/rkt2025portfolio/src/app'): string[] {
  const routes: string[] = [];
  
  function scan(currentDir: string, route: string = '') {
    const files = fs.readdirSync(currentDir);
    
    for (const file of files) {
      const filePath = path.join(currentDir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        // Skip if directory starts with _ or .
        if (file.startsWith('_') || file.startsWith('.')) continue;
        
        // Handle route groups
        const newRoute = file.startsWith('(') ? route : `${route}/${file}`;
        scan(filePath, newRoute);
      } else {
        // Only include page files
        if (file === 'page.tsx' || file === 'page.js') {
          routes.push(route);
        }
        // Handle dynamic routes
        if (file.startsWith('[') && file.endsWith('.tsx')) {
          const dynamicRoute = `${route}/[dynamic]`;
          routes.push(dynamicRoute);
        }
      }
    }
  }
  
  scan(dir);
  return routes;
}