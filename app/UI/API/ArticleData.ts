

interface Article {
  image: string;
  tag: string;
  title: string;
  duration: string;
  date: string;
}

const today = new Date();
const lastYear = new Date(today);
lastYear.setFullYear(today.getFullYear() - 1);

// function getRandomDate(): Date {
//   const randomTime =
//     Math.random() * (today.getTime() - lastYear.getTime()) + lastYear.getTime();
//   return new Date(randomTime);
// }



const ArticleData: Article[] = [
  {
    image: "ArticleData/lake.png",
    tag: "ArticleData/tags.png",
    title: "چگونه از راه دوره هم میتونیم کسب و کار خودمون رو مدیریت کنیم",
    duration: "2",
    date: "1401 اردیبهشت 12",
  },
  {
    image: "ArticleData/flower.png",
    tag: "ArticleData/tags.png",
    title: "چگونه از راه دوره هم میتونیم کسب و کار خودمون رو مدیریت کنیم",
    duration: "2",
    date: "1401 اردیبهشت 12",
  },
  {
    image: "ArticleData/studing.png",
    tag: "ArticleData/tags.png",
    title: "چگونه از راه دوره هم میتونیم کسب و کار خودمون رو مدیریت کنیم",
    duration: "2",
    date: "1401 اردیبهشت 12",
  },
  {
    image: "ArticleData/lake.png",
    tag: "ArticleData/tags.png",
    title: "چگونه از راه دوره هم میتونیم کسب و کار خودمون رو مدیریت کنیم",
    duration: "2",
    date: "1401 اردیبهشت 12",
  },
  {
    image: "ArticleData/flower.png",
    tag: "ArticleData/tags.png",
    title: "چگونه از راه دوره هم میتونیم کسب و کار خودمون رو مدیریت کنیم",
    duration: "2",
    date: "1401 اردیبهشت 12",
  },
  {
    image: "ArticleData/studing.png",
    tag: "ArticleData/tags.png",
    title: "چگونه از راه دوره هم میتونیم کسب و کار خودمون رو مدیریت کنیم",
    duration: "2",
    date: "1401 اردیبهشت 12",
  },
];

export default ArticleData;
