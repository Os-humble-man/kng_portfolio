import { Helmet } from "react-helmet";
import "./App.css";
import Home from "./Pages/Home";

function App() {
  return (
    <>
      <Helmet>
        <title>Oscar Kanangila Portfolio</title>
        <meta
          name="description"
          content="Oscar Kanangila Web developer specialising in React,NextJs, Node.js and Tailwind CSS I am based in the democratic Republic of congo in the city of lubumbashi"
        />
        <meta
          name="keywords"
          content="React, Web developer,NextJs,Lubumbashi,DRC,RDC,Oscar Kanangila, Portfolio, Tailwind CSS, JavaScript,oscarkng"
        />
        <meta property="og:title" content="Oscar Kanangila Portfolio" />
        <meta
          property="og:description"
          content="Oscar Kanangila Web developer specialising in React,NextJs, Node.js and Tailwind CSS I am based in the democratic Republic of congo in the city of lubumbashi"
        />
        <meta property="og:image" content="../assets/pic.jpeg" />

        <meta property="og:url" content="https://oscarkng.vercel.app/" />
        <link rel="canonical" href="https://oscarkng.vercel.app/" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Oscar Kanangila",
              "jobTitle": "Développeur Web | Web developer",
              "url": "https://oscarkng.vercel.app/",
              "sameAs": [
                "https://cd.linkedin.com/in/oscar-kanangila-2a1887142",
                "https://github.com/Os-humble-man",
                "https://twitter.com/ton-profil"
              ],
            }
          `}
        </script>
      </Helmet>
      <Home />
    </>
  );
}

export default App;
