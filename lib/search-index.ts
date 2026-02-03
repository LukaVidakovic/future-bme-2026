// Search index for all pages
export const searchIndex = [
  // Pages
  { type: 'page', title: 'Home', url: '/', keywords: 'conference business management economics engineering sustainability digital transformation' },
  { type: 'page', title: 'Topics', url: '/topics', keywords: 'business management sustainability digital transformation innovation entrepreneurship engineering technology' },
  { type: 'page', title: 'Event Info', url: '/event-info', keywords: 'venue fruške terme accommodation gala dinner dates september 2026' },
  { type: 'page', title: 'Submissions', url: '/submissions', keywords: 'abstract full paper submission guidelines template easychair deadline' },
  { type: 'page', title: 'Registration', url: '/registration', keywords: 'fees early bird payment registration virtual participation' },
  { type: 'page', title: 'Committees', url: '/committees', keywords: 'program committee chair members international' },
  { type: 'page', title: 'Sponsors', url: '/sponsors', keywords: 'sponsorship platinum gold silver bronze partnership benefits' },
  { type: 'page', title: 'Ethics & Policy', url: '/ethics', keywords: 'authorship plagiarism data integrity peer review AI ethics policy' },
  { type: 'page', title: 'Past Conference 2024', url: '/past-conferences/2024', keywords: 'papers proceedings 2024 past conference publications' },
  { type: 'page', title: 'Gallery 2024', url: '/past-conferences/2024/gallery', keywords: 'photos gallery images 2024 conference pictures' },
];

export interface SearchResult {
  type: 'page' | 'paper';
  title: string;
  url: string;
  subtitle?: string;
  match?: string;
}

export function searchContent(query: string, papers: any[]): SearchResult[] {
  if (!query || query.length < 2) return [];
  
  const lowerQuery = query.toLowerCase();
  const results: SearchResult[] = [];
  
  // Search pages
  searchIndex.forEach(item => {
    const titleMatch = item.title.toLowerCase().includes(lowerQuery);
    const keywordMatch = item.keywords.toLowerCase().includes(lowerQuery);
    
    if (titleMatch || keywordMatch) {
      results.push({
        type: 'page',
        title: item.title,
        url: item.url,
        subtitle: 'Page'
      });
    }
  });
  
  // Search papers
  papers.forEach(paper => {
    const titleMatch = paper.title.toLowerCase().includes(lowerQuery);
    const authorMatch = paper.authors.toLowerCase().includes(lowerQuery);
    
    if (titleMatch || authorMatch) {
      results.push({
        type: 'paper',
        title: paper.title,
        url: `/past-conferences/2024#paper-${paper.id}`,
        subtitle: paper.authors,
        match: titleMatch ? 'title' : 'author'
      });
    }
  });
  
  // Limit results
  return results.slice(0, 10);
}
