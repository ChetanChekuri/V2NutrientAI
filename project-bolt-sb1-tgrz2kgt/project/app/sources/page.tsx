export default function Sources() {
  const sources = [
    {
      title: "Journal of the Academy of Nutrition and Dietetics",
      url: "https://jandonline.org/",
      description: "Official publication of the Academy of Nutrition and Dietetics, providing evidence-based nutrition research."
    },
    {
      title: "American Journal of Clinical Nutrition",
      url: "https://academic.oup.com/ajcn",
      description: "Leading peer-reviewed journal for clinical nutrition research."
    },
    {
      title: "National Institutes of Health - Office of Dietary Supplements",
      url: "https://ods.od.nih.gov/",
      description: "Authoritative source for supplement and nutrition information."
    },
    {
      title: "World Health Organization - Nutrition",
      url: "https://www.who.int/health-topics/nutrition",
      description: "Global nutrition guidelines and recommendations."
    },
    {
      title: "Harvard School of Public Health Nutrition Source",
      url: "https://www.hsph.harvard.edu/nutritionsource/",
      description: "Evidence-based nutrition information and research."
    },
    {
      title: "United States Department of Agriculture",
      url: "https://www.usda.gov/topics/food-and-nutrition",
      description: "Federal nutrition guidelines and food composition databases."
    },
    {
      title: "European Food Safety Authority",
      url: "https://www.efsa.europa.eu/en/topics/topic/nutrition",
      description: "European Union's food safety and nutrition guidelines."
    },
    {
      title: "British Journal of Nutrition",
      url: "https://www.cambridge.org/core/journals/british-journal-of-nutrition",
      description: "International peer-reviewed journal covering nutrition research."
    },
    {
      title: "Food and Agriculture Organization",
      url: "https://www.fao.org/nutrition/en/",
      description: "UN agency focusing on global nutrition and food security."
    },
    {
      title: "Centers for Disease Control and Prevention - Nutrition",
      url: "https://www.cdc.gov/nutrition/",
      description: "Public health nutrition resources and guidelines."
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Our Sources</h1>
      
      <p className="text-gray-600 mb-8">
        NutriAI relies on reputable scientific sources and established institutions for its nutritional information. Below are our primary sources:
      </p>

      <div className="space-y-6">
        {sources.map((source, index) => (
          <div key={index} className="border rounded-lg p-6 hover:shadow-md transition-shadow">
            <h2 className="text-xl font-semibold mb-2">
              <a 
                href={source.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                {source.title}
              </a>
            </h2>
            <p className="text-gray-600">{source.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}