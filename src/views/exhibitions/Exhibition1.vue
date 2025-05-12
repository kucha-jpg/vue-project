<template>
  <div class="exhibition-detail">
    <NavBar />
    <ExhibitionHeader
      title="广东村落形态格局展"
      description="探索广府、客家、潮汕三大民系村落的独特空间布局与文化内涵"
      image="/images/village-banner.jpg"
    />

    <div class="content">
      <div class="exhibition-content">
        <div class="exhibition-main">
          <div class="exhibition-text">
            <h1>广东村落形态格局展</h1>
            <p class="intro-text">
              广东省内村落众多，每个村落都有自己独特的形态，但总体上可以划分为三个主要地域：
              珠江三角洲地域（广府地域）、客家地域和韩江冲积平原地域（潮汕地域）。
              这些不同地域的村落布局反映了各自独特的文化传统、地理环境和建筑智慧。
            </p>

            <!-- 广府特色布局 -->
            <div class="section" id="guangfu">
              <h2>广府特色村落布局</h2>
              <p class="section-intro">
                广府村落多依河或夹河修建，建筑沿水陆运输线延伸，河道及道路走向是村镇展开的依据和边界。
                主要布局形式包括线形延伸、梳式布局和网状水乡等。
              </p>

              <div class="layout-types">
                <div class="layout-type">
                  <h3>线形延伸布局</h3>
                  <p>
                    村落从南至北以沿河涌街道作为骨架呈线形扩展，
                    民居沿着溪水有序排列，形成"玉带绕门前"的空间格局。
                    如广州番禺石楼镇大岭村。
                  </p>
                </div>

                <div class="layout-type">
                  <h3>梳式布局</h3>
                  <p>
                    村落位于河涌一侧，周边为各类基塘。
                    临河一侧是公共活动中心，布置祠堂、书院及庙宇，
                    各宗族民居以此为中心层层展开。如佛山南海九江镇烟桥村、广州增城瓜岭村。
                  </p>
                </div>

                <div class="layout-type">
                  <h3>网状水乡布局</h3>
                  <p>
                    水网分汊把聚落建筑划分为若干部分，
                    村落空间被水系分割成多个小块，建筑布局相对分散，
                    但各部分之间通过桥梁等交通设施相互连接。
                  </p>
                </div>
              </div>

              <div class="image-gallery">
                <h3>广府村落典型代表</h3>
                <div class="gallery-grid">
                  <div class="gallery-item" v-for="(img, index) in guangfuImages" :key="index">
                    <img :src="img.src" :alt="img.alt">
                    <p>{{ img.caption }}</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- 客家特色布局 -->
            <div class="section" id="hakka">
              <h2>客家特色村落布局</h2>
              <p class="section-intro">
                客家村落以防御性建筑群居多，受宗族观念、防御需求、地理环境及传统风水文化影响，
                形成了以围合式建筑为核心、强调聚族而居的独特格局。
              </p>

              <div class="layout-types">
                <div class="layout-type">
                  <h3>围龙屋布局</h3>
                  <p>
                    半圆形围屋与方形堂屋结合，形成"前方后圆"的布局，
                    以祠堂为中心，两侧横屋延伸，后方围龙屋层层扩展，
                    整体形似"太师椅"，契合风水理念。
                  </p>
                </div>

                <div class="layout-type">
                  <h3>四角楼布局</h3>
                  <p>
                    方形或长方形封闭式围合结构，四角设碉楼，
                    外墙高厚（1米以上），内部以祠堂为中轴线，住房对称分布。
                  </p>
                </div>

                <div class="layout-type">
                  <h3>围村布局</h3>
                  <p>
                    多栋围屋或横屋紧密相连，形成街巷纵横的密集聚落，
                    外围以围墙或建筑封闭，内部共用巷道、水井等公共设施。
                  </p>
                </div>

                <div class="layout-type">
                  <h3>梯田村落</h3>
                  <p>
                    村落与梯田系统紧密结合，房屋沿等高线分布，
                    形成"田居一体"的生态格局，利用山泉灌溉，体现山地农业智慧。
                  </p>
                </div>
              </div>

              <div class="image-gallery">
                <h3>客家村落典型代表</h3>
                <div class="gallery-grid">
                  <div class="gallery-item" v-for="(img, index) in hakkaImages" :key="index">
                    <img :src="img.src" :alt="img.alt">
                    <p>{{ img.caption }}</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- 潮汕特色布局 -->
            <div class="section" id="chaoshan">
              <h2>潮汕特色村落布局</h2>
              <p class="section-intro">
                潮汕村落宗族意识强势，以祠堂为中轴线，
                主体建筑为"四点金"或扩展为"驷马拖车"，
                两侧排列"护厝"，形成严整的对称格局。
              </p>

              <div class="layout-types">
                <div class="layout-type">
                  <h3>祠堂中轴布局</h3>
                  <p>
                    以祠堂为中轴线，主体建筑为"四点金"（四合院式）
                    或扩展为"驷马拖车"（多进院落），两侧排列"护厝"（厢房），
                    形成严整的对称格局。
                  </p>
                </div>

                <div class="layout-type">
                  <h3>寨堡式布局</h3>
                  <p>
                    外围筑高墙或利用天然河道环绕，四角设更楼（碉楼），
                    巷道狭窄曲折以利防御，如潮安象埔寨"三街六巷"布局。
                  </p>
                </div>

                <div class="layout-type">
                  <h3>水乡布局</h3>
                  <p>
                    沿韩江、榕江等水系或人工沟渠分布，
                    建筑临水设埠头，巷道与水道平行，形成"水陆双街"格局。
                  </p>
                </div>
              </div>

              <div class="image-gallery">
                <h3>潮汕村落典型代表</h3>
                <div class="gallery-grid">
                  <div class="gallery-item" v-for="(img, index) in chaoshanImages" :key="index">
                    <img :src="img.src" :alt="img.alt">
                    <p>{{ img.caption }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 返回按钮 -->
    <button class="back-button" @click="$router.go(-1)">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M19 12H6M12 5l-7 7 7 7"></path>
      </svg>
    </button>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import ExhibitionHeader from '@/components/ExhibitionHeader.vue'

export default {
  name: 'GuangdongVillages',
  components: {
    NavBar,
    ExhibitionHeader
  },
  data() {
    return {
      guangfuImages: [
        { src: '/yuecunwenmai1/images/buju/guangfu/塱头古村——新浪新闻.jpg', alt: '塱头古村', caption: '塱头古村' },
        { src: '/yuecunwenmai1/images/buju/guangfu/麻村（棋盘式）.jpg', alt: '麻村', caption: '麻村（棋盘式）' },
        { src: '/yuecunwenmai1/images/buju/guangfu/麻村图1.jpg', alt: '麻村', caption: '麻村图1' },
        { src: '/yuecunwenmai1/images/buju/guangfu/麻村图2.jpg', alt: '上流村', caption: '麻村图2' },
        { src: '/yuecunwenmai1/images/buju/guangfu/上流村梳式布局图.png', alt: '蚬岗村', caption: '上流村梳式布局图' },
        { src: '/yuecunwenmai1/images/buju/guangfu/蚬岗村放射式.png', alt: '大岭村', caption: '蚬岗村放射式' }
      ],
      hakkaImages: [
        { src: '/yuecunwenmai1/images/buju/kejia/河源四角楼.jpg', alt: '河源四角楼', caption: '河源四角楼' },
        { src: '/yuecunwenmai1/images/buju/kejia/客家围楼（向心式）.jpg', alt: '客家围楼', caption: '客家围楼（向心式）' },
        { src: '/yuecunwenmai1/images/buju/kejia/韶关客家大围.jpeg', alt: '韶关客家大围', caption: '韶关客家大围' }
      ],
      chaoshanImages: [
        { src: '/yuecunwenmai1/images/buju/chaoshan/九龙吐珠.webp', alt: '百鸟朝凤', caption: '九龙吐珠1' },
        { src: '/yuecunwenmai1/images/buju/chaoshan/九龙吐珠.png', alt: '陈慈黉故居', caption: '九龙吐珠2' },
        { src: '/yuecunwenmai1/images/buju/chaoshan/百鸟朝凤.png', alt: '陈慈黉故居', caption: '百鸟朝凤' },
        { src: '/yuecunwenmai1/images/buju/chaoshan/四点金.png', alt: '九龙吐珠', caption: '四点金' },
        { src: '/yuecunwenmai1/images/buju/chaoshan/陈慈黉（驷马拖车）.jpg', alt: '九龙吐珠', caption: '陈慈黉（驷马拖车）' },
        { src: '/yuecunwenmai1/images/buju/chaoshan/澄海陈慈黉.jpg', alt: '四点金', caption: '澄海陈慈黉' },
        { src: '/yuecunwenmai1/images/buju/chaoshan/汕头澄海陈慈黉故居.jpg', alt: '象埔寨', caption: '汕头澄海陈慈黉故居' }
      ]
    }
  }
}
</script>

<style scoped>
.exhibition-detail {
  font-family: "Microsoft YaHei", "PingFang SC", sans-serif;
  background: url('/yuecunwenmai1/images/buju/kejia/河源四角楼.jpg') no-repeat center center fixed;
  background-size: cover;
  min-height: 100vh;
  padding-top: 0;
  position: relative;
  color: #333;
}

.content {
  padding: 40px 20px;
  max-width: 1200px;
  margin: 0 auto;
  background-color: rgba(255, 255, 255, 0.9);
}

.exhibition-main {
  display: flex;
  flex-direction: column;
}

.exhibition-text {
  width: 100%;
}

h1 {
  color: #8b4513;
  text-align: center;
  margin-bottom: 30px;
  font-size: 2.5rem;
}

h2 {
  color: #8b4513;
  border-bottom: 2px solid #8b4513;
  padding-bottom: 10px;
  margin: 40px 0 20px;
  font-size: 2rem;
}

h3 {
  color: #a0522d;
  margin: 25px 0 15px;
  font-size: 1.5rem;
}

.intro-text {
  font-size: 1.1rem;
  line-height: 1.8;
  text-align: justify;
  margin-bottom: 30px;
  color: #555;
}

.section-intro {
  font-size: 1rem;
  line-height: 1.7;
  text-align: justify;
  margin-bottom: 20px;
  color: #666;
}

.layout-types {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  margin-bottom: 30px;
}

.layout-type {
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;
}

.layout-type:hover {
  transform: translateY(-5px);
}

.image-gallery {
  margin-top: 40px;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  margin-top: 20px;
}

.gallery-item {
  background: white;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;
}

.gallery-item:hover {
  transform: translateY(-5px);
}

.gallery-item img {
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 4px;
  margin-bottom: 10px;
}

.gallery-item p {
  font-size: 0.9rem;
  text-align: center;
  color: #555;
  margin: 0;
}

/* 返回按钮样式 */
.back-button {
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #8b4513;
  color: white;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
  z-index: 1000;
}

.back-button:hover {
  background-color: #a0522d;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

.back-button svg {
  width: 24px;
  height: 24px;
}

@media (max-width: 768px) {
  .content {
    padding: 20px 15px;
  }

  h1 {
    font-size: 2rem;
  }

  h2 {
    font-size: 1.5rem;
  }

  .layout-types {
    grid-template-columns: 1fr;
  }

  .gallery-grid {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  }

  .gallery-item img {
    height: 150px;
  }

  .back-button {
    bottom: 20px;
    right: 20px;
    width: 40px;
    height: 40px;
  }

  .back-button svg {
    width: 20px;
    height: 20px;
  }
}
</style>
