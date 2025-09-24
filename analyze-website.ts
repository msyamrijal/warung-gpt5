import ZAI from 'z-ai-web-dev-sdk';

async function analyzeWebsite() {
  try {
    const zai = await ZAI.create();
    
    // Search for information about the website
    const searchResult = await zai.functions.invoke("web_search", {
      query: "globalenglish.co.id site analysis structure content",
      num: 5
    });
    
    console.log('Search Results:', JSON.stringify(searchResult, null, 2));
    
    // Try to get more specific information about the site
    const detailedSearch = await zai.functions.invoke("web_search", {
      query: "globalenglish.co.id English course Indonesia programs services",
      num: 5
    });
    
    console.log('Detailed Search Results:', JSON.stringify(detailedSearch, null, 2));
    
  } catch (error: any) {
    console.error('Error:', error.message);
  }
}

analyzeWebsite();