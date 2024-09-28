import { Helmet } from "react-helmet";
import "./App.css";
import Home from "./Pages/Home";
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <>
      <Helmet>
        <title>Oscar Kanangila Portfolio</title>
        <meta
          name="description"
          content="Oscar Kanangila, Web developer specializing in React, Next.js, Node.js, and Tailwind CSS, based in Lubumbashi, Democratic Republic of Congo."
        />
        <meta
          name="keywords"
          content="React, Web developer, Next.js, Lubumbashi, DRC, RDC, Oscar Kanangila, Portfolio, Tailwind CSS, JavaScript, oscarkng"
        />
        <meta property="og:title" content="Oscar Kanangila Portfolio" />
        <meta
          property="og:description"
          content="Oscar Kanangila, Web developer specializing in React, Next.js, Node.js, and Tailwind CSS, based in Lubumbashi, DRC."
        />
        <meta
          property="og:image"
          content="https://oscarkng.vercel.app/assets/pic.jpeg"
        />
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
              ]
            }
          `}
        </script>
      </Helmet>
      <Analytics />
      <Home />
    </>
  );
}

export default App;
