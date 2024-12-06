import logo from "./logo.svg";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Card from './components/card'

function App() {
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
        <FontAwesomeIcon icon="fa-solid fa-barcode" />
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
          <div className="card">
            <div className="card-upper">
              <div className="left">
                <img
                  src="https://scontent.fkhi5-2.fna.fbcdn.net/v/t39.30808-1/409008321_122094513620153270_4706994950135841760_n.jpg?stp=cp0_dst-jpg_s40x40_tt6&_nc_cat=102&ccb=1-7&_nc_sid=f4b9fd&_nc_eui2=AeFKGZ8HnCdvieu5xQg20cPGWIqZJ5DbZG5YipknkNtkbut84DWBlzrtCk_zLYfeaVYFdjiHUhdtPcA9O2xOZ3Z-&_nc_ohc=GQ7Zap0crDQQ7kNvgF3eZaI&_nc_zt=24&_nc_ht=scontent.fkhi5-2.fna&_nc_gid=A5C6NdHTmin15dPHIn8TZB4&oh=00_AYAtGN6v_4z4nBRnigzUdsCPcdXFgwj7ZwQvan9QIa6p2Q&oe=67582397"
                  alt=""
                />
                <span>
                <h3>Saylani Mass I.T. Training</h3>
                <p>4 December at 12:36</p>
              </span>
              </div>
              
              <div className="right">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 512">
                  <path d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                  <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
                </svg>
              </div>
            </div>
            <img src="https://scontent.fisb5-1.fna.fbcdn.net/v/t39.30808-6/469306676_122195412188153270_6752249721252042251_n.jpg?stp=dst-jpg_p526x296_tt6&_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeExKa-nEmHcoc8UtmkUqlslqgTsHs6tpr-qBOwezq2mv5U6t3jyOcjRhmavbWEZXIXCDITXdGjVr_j0twTzMMCI&_nc_ohc=Ry0DBdff5CIQ7kNvgGgAcx_&_nc_zt=23&_nc_ht=scontent.fisb5-1.fna&_nc_gid=AEqktah-BDFPuf0yfSf8zCU&oh=00_AYCWRYmNtKAHBSyRLumBD4pOyXGap3kSOxhJpIvseDlgzw&oe=67583C6F" alt="" />
            <div className="card-lower">
              <div className="like"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M323.8 34.8c-38.2-10.9-78.1 11.2-89 49.4l-5.7 20c-3.7 13-10.4 25-19.5 35l-51.3 56.4c-8.9 9.8-8.2 25 1.6 33.9s25 8.2 33.9-1.6l51.3-56.4c14.1-15.5 24.4-34 30.1-54.1l5.7-20c3.6-12.7 16.9-20.1 29.7-16.5s20.1 16.9 16.5 29.7l-5.7 20c-5.7 19.9-14.7 38.7-26.6 55.5c-5.2 7.3-5.8 16.9-1.7 24.9s12.3 13 21.3 13L448 224c8.8 0 16 7.2 16 16c0 6.8-4.3 12.7-10.4 15c-7.4 2.8-13 9-14.9 16.7s.1 15.8 5.3 21.7c2.5 2.8 4 6.5 4 10.6c0 7.8-5.6 14.3-13 15.7c-8.2 1.6-15.1 7.3-18 15.2s-1.6 16.7 3.6 23.3c2.1 2.7 3.4 6.1 3.4 9.9c0 6.7-4.2 12.6-10.2 14.9c-11.5 4.5-17.7 16.9-14.4 28.8c.4 1.3 .6 2.8 .6 4.3c0 8.8-7.2 16-16 16l-97.5 0c-12.6 0-25-3.7-35.5-10.7l-61.7-41.1c-11-7.4-25.9-4.4-33.3 6.7s-4.4 25.9 6.7 33.3l61.7 41.1c18.4 12.3 40 18.8 62.1 18.8l97.5 0c34.7 0 62.9-27.6 64-62c14.6-11.7 24-29.7 24-50c0-4.5-.5-8.8-1.3-13c15.4-11.7 25.3-30.2 25.3-51c0-6.5-1-12.8-2.8-18.7C504.8 273.7 512 257.7 512 240c0-35.3-28.6-64-64-64l-92.3 0c4.7-10.4 8.7-21.2 11.8-32.2l5.7-20c10.9-38.2-11.2-78.1-49.4-89zM32 192c-17.7 0-32 14.3-32 32L0 448c0 17.7 14.3 32 32 32l64 0c17.7 0 32-14.3 32-32l0-224c0-17.7-14.3-32-32-32l-64 0z"/></svg><p>Like</p></div>
              <div className="comment"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M123.6 391.3c12.9-9.4 29.6-11.8 44.6-6.4c26.5 9.6 56.2 15.1 87.8 15.1c124.7 0 208-80.5 208-160s-83.3-160-208-160S48 160.5 48 240c0 32 12.4 62.8 35.7 89.2c8.6 9.7 12.8 22.5 11.8 35.5c-1.4 18.1-5.7 34.7-11.3 49.4c17-7.9 31.1-16.7 39.4-22.7zM21.2 431.9c1.8-2.7 3.5-5.4 5.1-8.1c10-16.6 19.5-38.4 21.4-62.9C17.7 326.8 0 285.1 0 240C0 125.1 114.6 32 256 32s256 93.1 256 208s-114.6 208-256 208c-37.1 0-72.3-6.4-104.1-17.9c-11.9 8.7-31.3 20.6-54.3 30.6c-15.1 6.6-32.3 12.6-50.1 16.1c-.8 .2-1.6 .3-2.4 .5c-4.4 .8-8.7 1.5-13.2 1.9c-.2 0-.5 .1-.7 .1c-5.1 .5-10.2 .8-15.3 .8c-6.5 0-12.3-3.9-14.8-9.9c-2.5-6-1.1-12.8 3.4-17.4c4.1-4.2 7.8-8.7 11.3-13.5c1.7-2.3 3.3-4.6 4.8-6.9l.3-.5z"/></svg><p>Comment</p></div>
              <div className="send"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/></svg><p>Send</p></div>
            </div>
          </div>
          <Card profileimg="https://scontent.fisb5-1.fna.fbcdn.net/v/t39.30808-1/339733955_236683938826968_6836318394336583613_n.jpg?stp=cp0_dst-jpg_s40x40&_nc_cat=1&ccb=1-7&_nc_sid=f4b9fd&_nc_eui2=AeGKSIRmY_YbjLWPFqojuAXKcs6VTrNht55yzpVOs2G3nuEfBYLWovegcpAV0QYJp_RHCaXEar9i3yfhcmZp6FBO&_nc_ohc=5BUajwizpFUQ7kNvgHbR9Ey&_nc_zt=24&_nc_ht=scontent.fisb5-1.fna&_nc_gid=A9rhVgO6WsRAvdTl2Lr2VV3&oh=00_AYDhFtsnUruYndxHNQNgvHPrxWkrrjTIIf5gjitnKQdaKw&oe=6758339A" heading="It's official! COLOR of the year! 🤎" time=">4 December at 12:36" img="https://scontent.fisb5-1.fna.fbcdn.net/v/t39.30808-6/468621694_122170871180108483_3896420752229502124_n.jpg?stp=dst-jpg_p552x414&_nc_cat=1&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeG4N6WRNkmgRVdTglpsIIZAaSfxUK8ccNppJ_FQrxxw2t0PBpiKMAJTuoDNQDqtbfpCMxvCgv5JegTRLCOxtftK&_nc_ohc=uM2X4JK9-5QQ7kNvgGcCeiq&_nc_zt=23&_nc_ht=scontent.fisb5-1.fna&_nc_gid=AbX6GLMTtMmuh_xZOT_xsjN&oh=00_AYCdoY1wLYMErpsBb0F5n0GtpPMZ0yfhZtS7ZvbDgamXlg&oe=67582D76"></Card>
        </section>
        <section className="sec2"></section>
      </main>
    </div>
  );
}

export default App;
