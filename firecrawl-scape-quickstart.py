# pip install firecrawl-py
from firecrawl import Firecrawl

app = Firecrawl(api_key="fc-0b38b85bfe30476999b8ab465e2ad1b0")

# Scrape a website:
print(app.scrape('firecrawl.dev'))