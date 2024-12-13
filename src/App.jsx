import "./App.css";
import Card from "./components/card";
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [newsData, setNewsData] = useState([]
  //   {
  //   article_id: "ae703d1503f64ab60694659050210fbc",
  //   title: "11111111111111111 Handballerinnen brauchen Wunder für EM-Halbfinale",
  //   link: "https://www.wn.de/sport/weltsport/handball/deutsche-handballerinnen-brauchen-wunder-fuer-em-halbfinale-3205835",
  //   description: "Durch die Niederlage gegen Dänemark haben die deutschen Handballerinnen keine realistische Chance mehr auf das EM-Halbfinale. Theoretisch ist das Ziel aber noch erreichbar.",
  //   content: "Für die deutschen Handballerinnen wird sich der Traum von der ersten EM-Medaille seit 30 Jahren bei der Endrunde in Österreich mit größter Wahrscheinlichkeit nicht erfüllen...",
  //   pubDate: "2024-12-08 04:49:10",
  //   image_url: "https://asc-images.forward-publishing.io/2024/12/08/ab39f5de-5f2b-4a9c-bd69-af617ae202b1.jpeg?auto=compress%2Cformat&rect=0%2C0%2C2048%2C1365&w=1024",
  //   source_name: "Westfälische Nachrichten",
  //   source_url: "https://www.wn.de",
  //   source_icon: "https://i.bytvi.com/domain_icons/wn.png",
  //   language: "german",
  //   country: ["germany"],
  //   category: ["top"],
  //   ai_tag: ["sports"],
  //   sentiment: "neutral",
  //   sentiment_stats: {
  //     positive: 0.08,
  //     neutral: 99.81,
  //     negative: 0.11
  //   },
  //   duplicate: false
  // }
);
  const getNewsAxios = async (q ,country) => {
    const apiKey = "pub_6218550bd3e1cd69d3aa1b524f530cb81d129";
    const url = `https://newsdata.io/api/1/news`;

    try {
      const response = await axios.get(url, {
        params: {
          apikey: apiKey, // Your API Key
          q: q, // Search query for Facebook-related news
          country: country, // Fetch news for Pakistan
          language: "en", // English
        },
      });
      console.log(response.data.results);
      let res = response.data.results;



      // const results = [
      //   {
      //     article_id: "ae703d1503f64ab60694659050210fbc",
      //     title: "222222222222222222Deutsche Handballerinnen brauchen Wunder für EM-Halbfinale",
      //     link: "https://www.wn.de/sport/weltsport/handball/deutsche-handballerinnen-brauchen-wunder-fuer-em-halbfinale-3205835",
      //     description: "Durch die Niederlage gegen Dänemark haben die deutschen Handballerinnen keine realistische Chance mehr auf das EM-Halbfinale. Theoretisch ist das Ziel aber noch erreichbar.",
      //     content: "Für die deutschen Handballerinnen wird sich der Traum von der ersten EM-Medaille seit 30 Jahren bei der Endrunde in Österreich mit größter Wahrscheinlichkeit nicht erfüllen...",
      //     pubDate: "2024-12-08 04:49:10",
      //     image_url: "https://asc-images.forward-publishing.io/2024/12/08/ab39f5de-5f2b-4a9c-bd69-af617ae202b1.jpeg?auto=compress%2Cformat&rect=0%2C0%2C2048%2C1365&w=1024",
      //     source_name: "Westfälische Nachrichten",
      //     source_url: "https://www.wn.de",
      //     source_icon: "https://i.bytvi.com/domain_icons/wn.png",
      //     language: "german",
      //     country: ["germany"],
      //     category: ["top"],
      //     ai_tag: ["sports"],
      //     sentiment: "neutral",
      //     sentiment_stats: {
      //       positive: 0.08,
      //       neutral: 99.81,
      //       negative: 0.11
      //     },
      //     duplicate: false
      //   },
      //   {
      //     article_id: "ae703d1503f64ab60694659050210fbc",
      //     title: "333333333333333333Deutsche Handballerinnen brauchen Wunder für EM-Halbfinale",
      //     link: "https://www.wn.de/sport/weltsport/handball/deutsche-handballerinnen-brauchen-wunder-fuer-em-halbfinale-3205835",
      //     description: "Durch die Niederlage gegen Dänemark haben die deutschen Handballerinnen keine realistische Chance mehr auf das EM-Halbfinale. Theoretisch ist das Ziel aber noch erreichbar.",
      //     content: "Für die deutschen Handballerinnen wird sich der Traum von der ersten EM-Medaille seit 30 Jahren bei der Endrunde in Österreich mit größter Wahrscheinlichkeit nicht erfüllen...",
      //     pubDate: "2024-12-08 04:49:10",
      //     image_url: "https://asc-images.forward-publishing.io/2024/12/08/ab39f5de-5f2b-4a9c-bd69-af617ae202b1.jpeg?auto=compress%2Cformat&rect=0%2C0%2C2048%2C1365&w=1024",
      //     source_name: "Westfälische Nachrichten",
      //     source_url: "https://www.wn.de",
      //     source_icon: "https://i.bytvi.com/domain_icons/wn.png",
      //     language: "german",
      //     country: ["germany"],
      //     category: ["top"],
      //     ai_tag: ["sports"],
      //     sentiment: "neutral",
      //     sentiment_stats: {
      //       positive: 0.08,
      //       neutral: 99.81,
      //       negative: 0.11
      //     },
      //     duplicate: false
      //   },
      //   // Add more objects for additional news articles
      // ];



      setNewsData(prev => [...prev ,res]);

        console.log(newsData);
    } catch (error) {
      console.error("Error fetching the news:", error);
    }
  };

  useEffect(() => {
    getNewsAxios("Facebook","PK"); // Call the async function to fetch news when component mounts
    getNewsAxios("Facebook","AE")
    getNewsAxios("Facebook","US")
  }, []); // Empty array means this will only run once when the component mounts

  return (
    <div className="App">
      <nav>
        <div className="n1">
          <img
            src="https://static.vecteezy.com/system/resources/previews/018/930/476/non_2x/facebook-logo-facebook-icon-transparent-free-png.png"
            alt=""
          />
          <input type="text" placeholder="Search Facebook" />
        </div>
        <div className="n2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
            <path d="M575.8 255.5c0 18-15 32.1-32 32.1l-32 0 .7 160.2c0 2.7-.2 5.4-.5 8.1l0 16.2c0 22.1-17.9 40-40 40l-16 0c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1L416 512l-24 0c-22.1 0-40-17.9-40-40l0-24 0-64c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32l0 64 0 24c0 22.1-17.9 40-40 40l-24 0-31.9 0c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2l-16 0c-22.1 0-40-17.9-40-40l0-112c0-.9 0-1.9 .1-2.8l0-69.7-32 0c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
            <path d="M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304l91.4 0C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7L29.7 512C13.3 512 0 498.7 0 482.3zM609.3 512l-137.8 0c5.4-9.4 8.6-20.3 8.6-32l0-8c0-60.7-27.1-115.2-69.8-151.8c2.4-.1 4.7-.2 7.1-.2l61.4 0C567.8 320 640 392.2 640 481.3c0 17-13.8 30.7-30.7 30.7zM432 256c-31 0-59-12.6-79.3-32.9C372.4 196.5 384 163.6 384 128c0-26.8-6.6-52.1-18.3-74.3C384.3 40.1 407.2 32 432 32c61.9 0 112 50.1 112 112s-50.1 112-112 112z" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
            <path d="M192 64C86 64 0 150 0 256S86 448 192 448l256 0c106 0 192-86 192-192s-86-192-192-192L192 64zM496 168a40 40 0 1 1 0 80 40 40 0 1 1 0-80zM392 304a40 40 0 1 1 80 0 40 40 0 1 1 -80 0zM168 200c0-13.3 10.7-24 24-24s24 10.7 24 24l0 32 32 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-32 0 0 32c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-32-32 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l32 0 0-32z" />
          </svg>
        </div>
        <div className="n3">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M256.6 8C116.5 8 8 110.3 8 248.6c0 72.3 29.7 134.8 78.1 177.9 8.4 7.5 6.6 11.9 8.1 58.2A19.9 19.9 0 0 0 122 502.3c52.9-23.3 53.6-25.1 62.6-22.7C337.9 521.8 504 423.7 504 248.6 504 110.3 396.6 8 256.6 8zm149.2 185.1l-73 115.6a37.4 37.4 0 0 1 -53.9 9.9l-58.1-43.5a15 15 0 0 0 -18 0l-78.4 59.4c-10.5 7.9-24.2-4.6-17.1-15.7l73-115.6a37.4 37.4 0 0 1 53.9-9.9l58.1 43.5a15 15 0 0 0 18 0l78.4-59.4c10.4-8 24.1 4.5 17.1 15.6z" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path d="M224 0c-17.7 0-32 14.3-32 32l0 19.2C119 66 64 130.6 64 208l0 18.8c0 47-17.3 92.4-48.5 127.6l-7.4 8.3c-8.4 9.4-10.4 22.9-5.3 34.4S19.4 416 32 416l384 0c12.6 0 24-7.4 29.2-18.9s3.1-25-5.3-34.4l-7.4-8.3C401.3 319.2 384 273.9 384 226.8l0-18.8c0-77.4-55-142-128-156.8L256 32c0-17.7-14.3-32-32-32zm45.3 493.3c12-12 18.7-28.3 18.7-45.3l-64 0-64 0c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7z" />
          </svg>
          <img
            src="https://scontent.fkhi11-2.fna.fbcdn.net/v/t39.30808-1/342978364_622242483130993_9056895196736346721_n.jpg?stp=cp0_dst-jpg_s40x40&_nc_cat=104&ccb=1-7&_nc_sid=0ecb9b&_nc_eui2=AeF_8jsdLcw53dbOIA2LkytGgQHoy2Mwt6OBAejLYzC3o1wx1wQbs8T4MfYw63Z-19zx3tQQTm8nGrKOfggmglKX&_nc_ohc=NWq0bJkAxAEQ7kNvgGIsURI&_nc_zt=24&_nc_ht=scontent.fkhi11-2.fna&_nc_gid=Ak2PAshaFM4sjxwM_dpbeq9&oh=00_AYA_QGwF2V8EvNg9eRHun_xt-N_6fhCR2_Y5bvoe7yKwXg&oe=6757BCE3"
            alt=""
          />
        </div>
      </nav>
      <main>
        <section className="sec1"></section>
        <section className="sec2">
          <div className="feed">
            <div className="feed-upper">
              <img
                src="https://scontent.fkhi5-2.fna.fbcdn.net/v/t39.30808-1/342978364_622242483130993_9056895196736346721_n.jpg?stp=cp0_dst-jpg_s40x40&_nc_cat=104&ccb=1-7&_nc_sid=0ecb9b&_nc_eui2=AeF_8jsdLcw53dbOIA2LkytGgQHoy2Mwt6OBAejLYzC3o1wx1wQbs8T4MfYw63Z-19zx3tQQTm8nGrKOfggmglKX&_nc_ohc=jCvrGT5ULa4Q7kNvgE8PQJn&_nc_zt=24&_nc_ht=scontent.fkhi5-2.fna&_nc_gid=AWnsTDoOhNcvaNblGH4uSXq&oh=00_AYAgswDbg66B2M5U3Ew7ioX8KU1Jmp5Cmum9cwYuiZHDGg&oe=6757BCE3"
                alt=""
              />
              <input type="text" placeholder="What's on your mind, Hassan?" />
            </div>
            <hr />
            <div className="feed-lower">
              <div className="live">
                <img
                  src="https://static.xx.fbcdn.net/rsrc.php/v4/yr/r/c0dWho49-X3.png?_nc_eui2=AeEtHNPezWvEttOQk6EOkJIXueRic5Ym8Wm55GJzlibxaXqR8FijKym94S4wG8sxkDpplvgBUatp_KTpMyA6Za1f"
                  alt=""
                />
                <p>live video</p>
              </div>
              <div className="photo">
                <img
                  src="https://static.xx.fbcdn.net/rsrc.php/v4/y7/r/Ivw7nhRtXyo.png?_nc_eui2=AeGaa3XfuEVSlQbFO4KvZA26kBVQC4m7dx6QFVALibt3HmEyPlXI2XVMhbU-7xtLA4fsKI20FNWBQiar5bo6oREL"
                  alt=""
                />
                <p>Photo/video</p>
              </div>
              <div className="feeling">
                <img
                  src="https://static.xx.fbcdn.net/rsrc.php/v4/yd/r/Y4mYLVOhTwq.png?_nc_eui2=AeEvUwPBfckv5S4pJ4NmaE7pfPQ6N5_OUfV89Do3n85R9e8b6nX4eEXvDBP1DDqsSupXNcwJn8irsCsSSXRuucKP"
                  alt=""
                />
                <p>Feeling/activity</p>
              </div>
            </div>
          </div>
          {newsData?.map((ele, i) => {
            return (
              <Card
                key={i}
                heading={ele.source_name}
                content={ele.title}
                profileimg={ele.source_icon}
                img={ele.image_url}
                time={ele.pubDate}
              />
            );
          })}
        </section>
        <section className="sec2"></section>
      </main>
    </div>
  );
}

export default App;
