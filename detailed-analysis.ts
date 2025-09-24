import ZAI from 'z-ai-web-dev-sdk';

async function detailedAnalysis() {
  try {
    const zai = await ZAI.create();
    
    // Search for specific program information
    const programsSearch = await zai.functions.invoke("web_search", {
      query: "globalenglish.co.id program kelas TOEFL IELTS conversation kampung inggris",
      num: 5
    });
    
    console.log('Programs Search Results:', JSON.stringify(programsSearch, null, 2));
    
    // Search for more details about their teaching methods
    const methodsSearch = await zai.functions.invoke("web_search", {
      query: "globalenglish.co.id metode belajar teaching methodology schedule",
      num: 5
    });
    
    console.log('Teaching Methods Search Results:', JSON.stringify(methodsSearch, null, 2));
    
    // Search for their facilities and features
    const facilitiesSearch = await zai.functions.invoke("web_search", {
      query: "globalenglish.co.id fasilitas facilities accommodation camp area",
      num: 5
    });
    
    console.log('Facilities Search Results:', JSON.stringify(facilitiesSearch, null, 2));
    
  } catch (error: any) {
    console.error('Error:', error.message);
  }
}

detailedAnalysis();