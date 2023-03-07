import { ArticlesIndex } from "./ArticlesIndex";

export function Content() {
  const articles = [
    {
      source: {
        id: null,
        name: "Yanko Design",
      },
      author: "Srishti Mitra",
      title: "Top 10 solar-powered designs all sustainability advocates need to add in their lives",
      description:
        "Top 10 solar-powered designs all sustainability advocates need to add in their livesOne resolution that we should all be striving towards collectively by now – is to start living more consciously and in an eco-friendly manner, which...",
      url: "https://www.yankodesign.com/2023/03/06/top-10-solar-powered-designs-all-sustainability-advocates-need-to-add-in-their-lives/",
      urlToImage:
        "https://www.yankodesign.com/images/design_news/2023/03/solar-powered-designs/solar_powered_top_10_design_yanko_design_hero.jpg",
      publishedAt: "2023-03-07T00:30:09Z",
      content:
        "One resolution that we should all be striving towards collectively by now is to start living more consciously and in an eco-friendly manner, which includes paying attention to, and giving considerati… [+9495 chars]",
    },
    {
      source: {
        id: null,
        name: "KRGV",
      },
      author: "",
      title: "Tesla expansion in Mexico could impact economic growth in the Valley",
      description:
        "A Rio Grande Valley business leader says Tesla's future plant in Monterrey has South Texas and the Mexico region competing with other parts of the state for commerce, and jobs as a whole.",
      url: "http://www.krgv.com/news/tesla-expansion-in-mexico-could-impact-economic-growth-in-the-valley/",
      urlToImage:
        "http://dcer237tfveol.cloudfront.net/v2/raKUd8wOHgG5HaoGSh7mMAz2JT4oH1GIPWhxbu_9xwITZa4k3Sv1Ase8UGU7PKpHxJ7Fp2ZcgPJ4qyCn51cTW9OCoJT372MAGbn7kNZLm5dLQf9XZmndxVv04gjneD9rDu2vpUM0970X_WoJgUI7MUbeJPOjBiCVYe1AxWIidCGA",
      publishedAt: "2023-03-07T00:30:00Z",
      content:
        "A Rio Grande Valley business leader says Tesla's future plant in Monterrey has South Texas and the Mexico region competing with other parts of the state for commerce, and jobs as a whole.\r\nTesla alre… [+1279 chars]",
    },
  ];

  return (
    <div>
      <ArticlesIndex articles={articles} />
    </div>
  );
}
