// npm install firecrawl
import { Firecrawl } from 'firecrawl';

const app = new Firecrawl({ apiKey: "fc-0b38b85bfe30476999b8ab465e2ad1b0"  });

// Scrape a website:
app.scrape('firecrawl.dev')