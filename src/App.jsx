import "./App.css";
import Card from "./components/card";
import axios from 'axios';


function App() {

  const getNewsAxios = async () => {
    const apiKey = 'YOUR_API_KEY'; // Replace with your NewsData.io API key
    const url = `https://newsdata.io/api/1/news`;

    try {
      const response = await axios.get(url, {
        params: {
          country: 'PK',  // Fetch news for Pakistan
          category: 'facebook',  // Filter for Facebook-related news
          apikey: apiKey,  // Your API Key
          language: 'en',  // English news
          page: 1, // You can use pagination for fetching more pages
          // Add any other filters if needed, like 'image' if available
        },
      });
      console.log(response.data.results); // Logs the fetched news articles with images
    } catch (error) {
      console.error('Error fetching the news:', error);
    }
};

  
  getNewsAxios();
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
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M256.6 8C116.5 8 8 110.3 8 248.6c0 72.3 29.7 134.8 78.1 177.9 8.4 7.5 6.6 11.9 8.1 58.2A19.9 19.9 0 0 0 122 502.3c52.9-23.3 53.6-25.1 62.6-22.7C337.9 521.8 504 423.7 504 248.6 504 110.3 396.6 8 256.6 8zm149.2 185.1l-73 115.6a37.4 37.4 0 0 1 -53.9 9.9l-58.1-43.5a15 15 0 0 0 -18 0l-78.4 59.4c-10.5 7.9-24.2-4.6-17.1-15.7l73-115.6a37.4 37.4 0 0 1 53.9-9.9l58.1 43.5a15 15 0 0 0 18 0l78.4-59.4c10.4-8 24.1 4.5 17.1 15.6z" />
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
          <Card
            contant="🚀 Ready to elevate your HR career? 🌟 
Join us for the **Flow HCM Certified HR Professional** Entrance Exam! 🏢✨
📅 Date: Thursday, 5th December 2024  "
            profileimg="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN5XaPknTWTxdBcdC3r0_9blSi_8n3rD_2Xg&s"
            heading="Saylani Mass I.T. Training"
            time="4 December at 12:36"
            img="https://scontent.fisb5-1.fna.fbcdn.net/v/t39.30808-6/469306676_122195412188153270_6752249721252042251_n.jpg?stp=dst-jpg_p526x296_tt6&_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeExKa-nEmHcoc8UtmkUqlslqgTsHs6tpr-qBOwezq2mv5U6t3jyOcjRhmavbWEZXIXCDITXdGjVr_j0twTzMMCI&_nc_ohc=Ry0DBdff5CIQ7kNvgGgAcx_&_nc_zt=23&_nc_ht=scontent.fisb5-1.fna&_nc_gid=AEqktah-BDFPuf0yfSf8zCU&oh=00_AYCWRYmNtKAHBSyRLumBD4pOyXGap3kSOxhJpIvseDlgzw&oe=67583C6F"
          ></Card>
          <Card
            contant="Rajab's Family has emerged as the top YouTube channel in Pakistan for 2024, dominating the list of the most-watched videos and creators on the platform. 
Known for their engaging and relatable family content, Rajab's Family has captivated millions of viewers, consistently ranking at the forefront of YouTube’s trending charts. 
Their content, which combines humor, lifestyle, and everyday experiences, resonates deeply with a wide audience across Pakistan."
            profileimg="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN5XaPknTWTxdBcdC3r0_9blSi_8n3rD_2Xg&s"
            img="https://scontent.fkhi11-1.fna.fbcdn.net/v/t39.30808-6/468717116_122195119754153270_4774428333964771169_n.jpg?stp=dst-jpg_p526x296_tt6&_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHc-IduA3BjF5W_-b5xjZeJUwv1SE9Zdd1TC_VIT1l13UnkSd7-7b5CpwWFFy0sgCXqNj5fMX5vqLIJYFeE8u9E&_nc_ohc=QISodUAh5pUQ7kNvgGgbumS&_nc_zt=23&_nc_ht=scontent.fkhi11-1.fna&_nc_gid=AkJn2qv3BeKfJUkUuxTTAMP&oh=00_AYBsd62baDQ1GwhJwk7x1ZgMWiuGAYVFzfQKUcBJUGBQIA&oe=67590C2A"
            time="2 December at 12:36"
            heading="Saylani Mass I.T. Training"
          ></Card>
          <Card
            profileimg=""
            img="https://external.fkhi11-1.fna.fbcdn.net/emg1/v/t13/12329991621788300305?url=https%3A%2F%2Fichef.bbci.co.uk%2Fnews%2F1024%2Fbranded_urdu%2F2516%2Flive%2F7576d950-b183-11ef-aff0-072ce821b6ab.jpg&fb_obo=1&utld=bbci.co.uk&stp=c0.5000x0.5000f_dst-jpg_flffffff_p500x261_q75_tt6&_nc_eui2=AeHKUQ7-zTYAANaUHZaPSTp20CwK6KJD7d7QLArookPt3hWUdOrN2V9MBOpU9rScNc6TaMRySI66LRBoY_WMGYue&ccb=13-1&oh=06_Q399yLYjR5937uyOjtO3dAwk2uE0SH8BerzA1F3RKuGN2Wc&oe=6755191F&_nc_sid=c63717"
            time="7 December at 9:36"
            heading="BBC URDU"
          ></Card>
          <Card
            profileimg="https://scontent.fkhi11-1.fna.fbcdn.net/v/t39.30808-6/434465016_122111366024252649_1850078877396956802_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeEPfCJUs5yN4cnVUZaviNfzIGq6sphpfAkgarqymGl8Ce61ehxhxoyM36S9yc6tQkqR2653-PJ4wY3FQ5PiR4lJ&_nc_ohc=7TlmoFr42_4Q7kNvgEokfUK&_nc_zt=23&_nc_ht=scontent.fkhi11-1.fna&_nc_gid=AsL8RhVOV812Br9XnKO3SQS&oh=00_AYDm1yk7HlFKbur7prn_Z6_TqR5NaQteq_k886a4Faj_-w&oe=675917A1"
            img="https://scontent.fkhi11-1.fna.fbcdn.net/v/t39.30808-6/468840417_122171116640252649_560408200966631216_n.jpg?stp=dst-jpg_p526x296_tt6&_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFmRDtzFWX5smmbEL6AzD4IW4KR03G1NVBbgpHTcbU1UIvwUVNOHRn5HaxW8mygxkV3KZIP2VTYZAqm-7O07ljb&_nc_ohc=_MGHLVkDCbcQ7kNvgEodLFk&_nc_zt=23&_nc_ht=scontent.fkhi11-1.fna&_nc_gid=AHQ-JPIqbAqwO22wmdzeQRF&oh=00_AYBVHk-0B41gIpqAZYl50lCcOfAerzuTICKJZGaaUOHeJg&oe=6758F59A"
            time="17 December at 9:16"
            heading="Tribune Trends "
          ></Card>
          <Card
            profileimg="https://www.facebook.com/stories/106303924863708/UzpfSVNDOjE1MzMyMTQ4MzA5NTg1ODg=/?view_single=false&__cft__[0]=AZUjaJJQMr2amav5AcfzwsZ6o2NnJpWGx_pSE8AcyJlw1gTGSTrzQmhwpjKFdCt0JpNDU8ErA_w3XIy6Ieu2cBY5du5DRvIxHD7y2ltg4MbPC0fEnXCY20d7wDx0_2UU1GUnc0FkWR7UtNKzwHfy6a2QsRzAx-VvdDVG67HXSG7R9J6lULndWSDXJ1L2UJCU-oi6NTkmAmjMOswDREC-q6-zk4swbU3fMxn5MPGV7R1j0w&__tn__=%3C%3C%2CP-R"
            img="https://scontent.fkhi11-2.fna.fbcdn.net/v/t39.30808-6/469044586_975983314562427_5999237746474970864_n.jpg?stp=dst-jpg_p526x296_tt6&_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFaFoFNtj8p4SLg1VQC3QaQxTlt42ae0jrFOW3jZp7SOrRmjqGbWzNjHZYrFgACA366BayFSUy97ii7ehnaZGKg&_nc_ohc=4cpaIp4W3lcQ7kNvgHaK-a1&_nc_zt=23&_nc_ht=scontent.fkhi11-2.fna&_nc_gid=A8fkvkXOXfyfjrXyPPwCOzA&oh=00_AYCNnZ0a-HngTVzM7Qrq3AP1eun5OVFgtxOm90EXmbFJJA&oe=67591F7F"
            time="14h"
            heading="Saylani Welfare International Trust۔"
          ></Card>
          <Card
            profileimg="https://scontent.fkhi11-2.fna.fbcdn.net/v/t39.30808-1/269739328_1920473131461172_3504712320666921703_n.png?stp=cp0_dst-png_s40x40&_nc_cat=108&ccb=1-7&_nc_sid=f4b9fd&_nc_eui2=AeG8stlC9NBn8A6uyG1-FuFSnerLnknfvoKd6sueSd--goJyaBNjK2yjfHA6ERN7eAYhdIjFpzby0wt0cFMyBkBp&_nc_ohc=RUFc2mbXlFAQ7kNvgGedO8F&_nc_zt=24&_nc_ht=scontent.fkhi11-2.fna&_nc_gid=AvQ-5hqnLLXO1MrqbKdjKnE&oh=00_AYBCoauTt12cchr2bLp5GoA6mArTXSDj1xNSmV_02XVwvw&oe=6759264D"
            img="https://scontent.fkhi11-1.fna.fbcdn.net/v/t39.30808-6/468620485_587084497022579_8917554663031963839_n.jpg?stp=dst-jpg_p526x296&_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGo87jKDWNVyMWpirPu4WiiOrFYZYLqJ3g6sVhlguonePJDZRHfPZHultuJEqC6fL6VIWfHRHKzlWOaDHGsEn9d&_nc_ohc=SXHj_HOv-ykQ7kNvgFCMXK-&_nc_zt=23&_nc_ht=scontent.fkhi11-1.fna&_nc_gid=AvQ-5hqnLLXO1MrqbKdjKnE&oh=00_AYBaqEjc-kceH6FSinSsr4011zbZcgk9dZCk-qfUwn6OXg&oe=675909BD"
            time="4h"
            heading="Pediastan"
          ></Card>
          <Card
            profileimg="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN5XaPknTWTxdBcdC3r0_9blSi_8n3rD_2Xg&s"
            img="https://scontent.fkhi11-1.fna.fbcdn.net/v/t39.30808-6/468409836_122195045750153270_8202476998879774087_n.jpg?stp=dst-jpg_p526x296_tt6&_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGiIkglg-qS5p_K_WgDfMV9Cz1HvOUoHTELPUe85SgdMSAxZYUFlMVu4tUbqQhEYcNQ9XEdQTjlR0fWlqOnSgns&_nc_ohc=-oBFiQH7RroQ7kNvgHlwSHw&_nc_zt=23&_nc_ht=scontent.fkhi11-1.fna&_nc_gid=A6M7Cse46XbFTdHgzehNwrt&oh=00_AYD1vW1aaEa5EVRudcRc7cJrmuXwSYcl8P_mS26AR0JpJg&oe=67591DAB"
            time="7h"
            heading="Saylani Mass I.T. Training"
          ></Card>
          <Card
            contant="Gaddafi Stadium "
            profileimg="https://scontent.fisb5-1.fna.fbcdn.net/v/t39.30808-1/339733955_236683938826968_6836318394336583613_n.jpg?stp=cp0_dst-jpg_s40x40&_nc_cat=1&ccb=1-7&_nc_sid=f4b9fd&_nc_eui2=AeGKSIRmY_YbjLWPFqojuAXKcs6VTrNht55yzpVOs2G3nuEfBYLWovegcpAV0QYJp_RHCaXEar9i3yfhcmZp6FBO&_nc_ohc=5BUajwizpFUQ7kNvgHbR9Ey&_nc_zt=24&_nc_ht=scontent.fisb5-1.fna&_nc_gid=A9rhVgO6WsRAvdTl2Lr2VV3&oh=00_AYDhFtsnUruYndxHNQNgvHPrxWkrrjTIIf5gjitnKQdaKw&oe=6758339A"
            heading="It's official! COLOR of the year! 🤎"
            time="4 December at 12:36"
            img="https://scontent.fisb5-1.fna.fbcdn.net/v/t39.30808-6/468621694_122170871180108483_3896420752229502124_n.jpg?stp=dst-jpg_p552x414&_nc_cat=1&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeG4N6WRNkmgRVdTglpsIIZAaSfxUK8ccNppJ_FQrxxw2t0PBpiKMAJTuoDNQDqtbfpCMxvCgv5JegTRLCOxtftK&_nc_ohc=uM2X4JK9-5QQ7kNvgGcCeiq&_nc_zt=23&_nc_ht=scontent.fisb5-1.fna&_nc_gid=AbX6GLMTtMmuh_xZOT_xsjN&oh=00_AYCdoY1wLYMErpsBb0F5n0GtpPMZ0yfhZtS7ZvbDgamXlg&oe=67582D76"
          ></Card>
          <Card
            profileimg="https://scontent.fkhi17-2.fna.fbcdn.net/v/t39.30808-1/339742032_1215513072426771_5612620250905623586_n.jpg?stp=cp0_dst-jpg_s40x40_tt6&_nc_cat=102&ccb=1-7&_nc_sid=f4b9fd&_nc_ohc=zhMmCB583rEQ7kNvgHvYsvK&_nc_zt=24&_nc_ht=scontent.fkhi17-2.fna&_nc_gid=AXC3FHQ0VzvJcJi9rNMOyRR&oh=00_AYBFXDXx2uTDpCzRzipmQ-XikmrVS37nTvKb-EPNfFHIZA&oe=675846DC"
            heading="What's your best place for Nehari & Biryani?"
            time="Friday 6 December 2024 at 02:06"
            img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_iUTSug-aWQS9DjYOMil94th1kOpXysbpKA&s"
          ></Card>
        </section>
        <section className="sec2"></section>
      </main>
    </div>
  );
}

export default App;
