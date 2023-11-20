import "./style.css";
import Logo from "./assets/svg/logo.svg";

import Img1 from "./assets/image/1.jpg";
import Img2 from "./assets/image/2.jpg";
import Img3 from "./assets/image/3.jpg";
import Img4 from "./assets/image/4.jpg";
import Img5 from "./assets/image/5.jpg";
import Img6 from "./assets/image/6.jpg";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
<a href="https://vitejs.dev" target="_blank">
  <img src="${Logo}" class="logo" alt="Vite logo" />
</a>
<div class="media-list">
    <div class="media-item">
      <div class="media-con">
        <div class="img-con">
          <img class="img" src="${Img1}" />
        </div>

        <div class="des-con">
          <span>给我一个理由忘记</span>
        </div>
      </div>
    </div>

    <div class="media-item">
      <div class="media-con">
        <div class="img-con">
          <img class="img" src="${Img2}" />
        </div>

        <div class="des-con">
          <span>给我一个理由忘记</span>
        </div>
      </div>
    </div>

    <div class="media-item">
      <div class="media-con">
        <div class="img-con">
          <img class="img" src="${Img3}" />
        </div>

        <div class="des-con">
          <span>给我一个理由忘记</span>
        </div>
      </div>
    </div>

    <div class="media-item">
      <div class="media-con">
        <div class="img-con">
          <img class="img" src="${Img4}" />
        </div>

        <div class="des-con">
          <span>给我一个理由忘记</span>
        </div>
      </div>
    </div>

    <div class="media-item">
      <div class="media-con">
        <div class="img-con">
          <img class="img" src="${Img5}" />
        </div>

        <div class="des-con">
          <span>给我一个理由忘记</span>
        </div>
      </div>
    </div>

    <div class="media-item">
      <div class="media-con">
        <div class="img-con">
          <img class="img" src="${Img6}" />
        </div>

        <div class="des-con">
          <span>给我一个理由忘记</span>
        </div>
      </div>
    </div>
  </div>
  <div>
`;
