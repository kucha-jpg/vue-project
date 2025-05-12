<template>
  <div class="village-detail">
    <DetailNavBar />

    <div class="container">
      <div class="detail-content">
        <div class="detail-section">
          <h2>古城简介</h2>
          <div class="text-content">
            <p>潮州古城，地处广东省潮州市湘桥区，有记录的历史为1600多年。被誉为"海滨邹鲁""岭海名邦"，是中国历史文化名城之一。</p>
            <p>潮州的历史可以追溯到秦朝。秦始皇三十三年（公元前214年），秦军平定岭南后，设立南海郡，潮州地区属于南海郡揭阳县。此后，潮州地区逐渐发展。唐代是潮州发展的重要时期。唐玄宗开元年间，潮州正式设州，成为岭南地区的重要行政中心之一。宋代，潮州经济、文化进一步繁荣，成为海上丝绸之路的重要港口之一。明清时期，潮州的经济、文化达到了鼎盛。潮州成为粤东地区政治、经济和文化中心，城墙、府衙、学宫等建筑相继建成，城市规模不断扩大。</p>
            <p>古城呈不规则的长方形，东西长约1.6公里，南北宽约1.2公里，总面积约1.94平方公里。古城以太平路为中轴线，东西两侧分布着众多街巷，形成了"三街六巷"的格局。古城墙始建于唐代，后经多次修缮和扩建，现存城墙全长约5.3公里，是中国东南沿海保存最完整的古城墙之一。古城原有七门，现存五门，分别是东门（义安门）、南门（昌黎门）、西门（广济门）、北门（拱北门）和竹木门。现存古建筑有广济桥、潮州府衙、己略黄公祠、许驸马府、海阳县儒学宫。</p>
          </div>
        </div>

        <div class="detail-section">
          <h2>潮州文化</h2>
          <div class="text-content">
            <p>潮州文化是岭南文化的重要组成部分，具有独特的地域特色。潮州方言、潮州音乐、潮州戏曲、潮州工艺等都是潮州文化的重要载体。其中工艺是建筑运用最精妙的，以木雕、石雕、嵌瓷、刺绣等为代表，工艺精湛，风格独特。其中，潮州木雕被誉为"中国四大木雕"之一。</p>
            <p>风俗方面，春节的舞龙舞狮、元宵节的花灯会、端午节的赛龙舟、中秋节的赏月都是潮汕共有的民间习俗。</p>
          </div>
        </div>

        <div class="detail-section">
          <h2>开放时间与票价</h2>
          <div class="text-content">
            <p><strong>开放时间：</strong>全年 9:00-17:00开放</p>
            <p><strong>票价信息：</strong>免费</p>
          </div>
        </div>

        <div class="detail-section">
          <h2>图片展示</h2>
          <div class="image-gallery">
            <div class="gallery-row">
              <img v-for="(img, index) in firstRowImages" :key="index" :src="img" :alt="`潮州古城图片${index + 1}`">
            </div>
            <div class="gallery-row">
              <img v-for="(img, index) in secondRowImages" :key="index" :src="img" :alt="`潮州古城图片${index + 4}`">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DetailNavBar from '@/components/DetailNavBar.vue'

export default {
  name: 'ChaozhouGuchenView',
  components: {
    DetailNavBar
  },
  data() {
    return {
      village: {
        id: 1,
        name: '潮州古城',
        category: 'chaoshan',
        location: '广东省潮州市湘桥区',
        description: '保存完好的潮州古城，拥有众多明清建筑。古城墙、牌坊街、开元寺等都是著名景点。',
        image: '/yuecunwenmai1/images/chaoshandiqu/chaozhougucheng/chaozhoushi2.png'
      },
      images: [
        '/yuecunwenmai1/images/chaoshandiqu/chaozhougucheng/chaozhoushi1.png',
        '/yuecunwenmai1/images/chaoshandiqu/chaozhougucheng/chaozhoushi2.png',
        '/yuecunwenmai1/images/chaoshandiqu/chaozhougucheng/chaozhoushi5.png',
        '/yuecunwenmai1/images/chaoshandiqu/chaozhougucheng/chaozhoushi3.png',
        '/yuecunwenmai1/images/chaoshandiqu/chaozhougucheng/chaozhoushi6.png',
        '/yuecunwenmai1/images/chaoshandiqu/chaozhougucheng/chaozhoushi7.png'
      ]
    }
  },
  computed: {
    firstRowImages() {
      return this.images.slice(0, 3); // 第一行显示前3张图片
    },
    secondRowImages() {
      return this.images.slice(3, 6); // 第二行显示后3张图片
    }
  }
}
</script>

<style scoped>
/* 重置默认边距 */
body {
  margin: 0;
  padding: 0;
}

.village-detail {
  font-family: "Microsoft YaHei", sans-serif;
  max-width: 100vw;
  overflow-x: hidden;
}

.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
}

.detail-content {
  background: white;
  padding: 30px;
  width: 100%;
  margin: 0 auto;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.detail-section {
  margin-bottom: 40px;
  padding: 0 20px;
}

.detail-section h2 {
  font-size: 24px;
  margin-bottom: 20px;
  color: #333;
  padding-bottom: 10px;
  border-bottom: 1px solid #eee;
}

.text-content {
  margin-bottom: 20px;
}

.text-content p {
  line-height: 1.8;
  color: #666;
  margin-bottom: 15px;
}

.image-gallery {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 20px;
}

.gallery-row {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.image-gallery img {
  width: 100%;
  height: auto;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  object-fit: cover;
  aspect-ratio: 16/9;
}

.image-gallery img:hover {
  transform: translateY(-5px);
}

@media (max-width: 768px) {
  .container {
    padding: 20px 15px;
  }

  .detail-content {
    padding: 20px;
  }

  .detail-section {
    padding: 0 10px;
  }

  .gallery-row {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  .gallery-row {
    grid-template-columns: 1fr;
  }
}
</style>
