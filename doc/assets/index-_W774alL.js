(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))d(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const e of i.addedNodes)e.tagName==="LINK"&&e.rel==="modulepreload"&&d(e)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function d(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();const a="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20aria-hidden='true'%20role='img'%20class='iconify%20iconify--logos'%20width='32'%20height='32'%20preserveAspectRatio='xMidYMid%20meet'%20viewBox='0%200%20256%20256'%3e%3cpath%20fill='%23007ACC'%20d='M0%20128v128h256V0H0z'%3e%3c/path%3e%3cpath%20fill='%23FFF'%20d='m56.612%20128.85l-.081%2010.483h33.32v94.68h23.568v-94.68h33.321v-10.28c0-5.69-.122-10.444-.284-10.566c-.122-.162-20.4-.244-44.983-.203l-44.74.122l-.121%2010.443Zm149.955-10.742c6.501%201.625%2011.459%204.51%2016.01%209.224c2.357%202.52%205.851%207.111%206.136%208.208c.08.325-11.053%207.802-17.798%2011.988c-.244.162-1.22-.894-2.317-2.52c-3.291-4.795-6.745-6.867-12.028-7.233c-7.76-.528-12.759%203.535-12.718%2010.321c0%201.992.284%203.17%201.097%204.795c1.707%203.536%204.876%205.649%2014.832%209.956c18.326%207.883%2026.168%2013.084%2031.045%2020.48c5.445%208.249%206.664%2021.415%202.966%2031.208c-4.063%2010.646-14.14%2017.879-28.323%2020.276c-4.388.772-14.79.65-19.504-.203c-10.28-1.828-20.033-6.908-26.047-13.572c-2.357-2.6-6.949-9.387-6.664-9.874c.122-.163%201.178-.813%202.356-1.504c1.138-.65%205.446-3.129%209.509-5.485l7.355-4.267l1.544%202.276c2.154%203.29%206.867%207.801%209.712%209.305c8.167%204.307%2019.383%203.698%2024.909-1.26c2.357-2.153%203.332-4.388%203.332-7.68c0-2.966-.366-4.266-1.91-6.501c-1.99-2.845-6.054-5.242-17.595-10.24c-13.206-5.69-18.895-9.224-24.096-14.832c-3.007-3.25-5.852-8.452-7.03-12.8c-.975-3.617-1.22-12.678-.447-16.335c2.723-12.76%2012.353-21.659%2026.25-24.3c4.51-.853%2014.994-.528%2019.424.569Z'%3e%3c/path%3e%3c/svg%3e",o="/assets/1-sQGU-jdw.jpg",l="/assets/2-tzlz22vV.jpg",n="/assets/3-duh3064P.jpg",r="/assets/4-3I6O7dGb.jpg",m="/assets/5-rmCdjtzz.jpg",v="/assets/6-Yh7Z-yt1.jpg";document.querySelector("#app").innerHTML=`
<a href="https://vitejs.dev" target="_blank">
  <img src="${a}" class="logo" alt="Vite logo" />
</a>
<div class="media-list">
    <div class="media-item">
      <div class="media-con">
        <div class="img-con">
          <img class="img" src="${o}" />
        </div>

        <div class="des-con">
          <span>给我一个理由忘记</span>
        </div>
      </div>
    </div>

    <div class="media-item">
      <div class="media-con">
        <div class="img-con">
          <img class="img" src="${l}" />
        </div>

        <div class="des-con">
          <span>给我一个理由忘记</span>
        </div>
      </div>
    </div>

    <div class="media-item">
      <div class="media-con">
        <div class="img-con">
          <img class="img" src="${n}" />
        </div>

        <div class="des-con">
          <span>给我一个理由忘记</span>
        </div>
      </div>
    </div>

    <div class="media-item">
      <div class="media-con">
        <div class="img-con">
          <img class="img" src="${r}" />
        </div>

        <div class="des-con">
          <span>给我一个理由忘记</span>
        </div>
      </div>
    </div>

    <div class="media-item">
      <div class="media-con">
        <div class="img-con">
          <img class="img" src="${m}" />
        </div>

        <div class="des-con">
          <span>给我一个理由忘记</span>
        </div>
      </div>
    </div>

    <div class="media-item">
      <div class="media-con">
        <div class="img-con">
          <img class="img" src="${v}" />
        </div>

        <div class="des-con">
          <span>给我一个理由忘记</span>
        </div>
      </div>
    </div>
  </div>
  <div>
`;
