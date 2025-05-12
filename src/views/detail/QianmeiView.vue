<template>
  <div class="village-detail">
    <DetailNavBar />

    <div class="container">
      <div class="detail-content">
        <div class="detail-section">
          <h2>前美村简介</h2>
          <div class="text-content">
            <p>前美村，地处广东省汕头市澄海区隆都镇，始建于元朝末年，历经六百多年风雨，积攒下永宁寨和陈慈黉故居两座潮汕文化瑰宝。前美古村建筑群被不少专家学者誉为"潮汕历史文化的缩影和见证"，具有较高的观赏和文史研究价值。</p>
            <p>前美村最著名的景点是陈慈黉故居，这是著名侨胞陈黉利家族于清同治年间至民国时期在家乡兴建宅群的总称，包括通奉第、仁寿里、郎中第、寿康里、善居室、观察第和三庐书斋等大小15座院落，总面积近3.5万平方米。故居保留了大量潮汕特色民居建筑形式，如下山虎、四点金、驷马拖车等。</p>
            <p>与陈慈黉故居紧邻的是永宁寨，始建于清康熙年间，占地1.03公顷，有厅房210间，由先祖陈延光请当朝国师郭邬藩设计建造。两座建筑瑰宝紧邻，游客可以在二者间游览，感受潮汕文化的独特魅力。</p>
          </div>
        </div>

        <div class="detail-section">
          <h2>文化特色</h2>
          <div class="text-content">
            <p>前美村是潮汕文化的典型代表，村内建筑充分体现了潮汕传统民居的特色。陈慈黉故居融合了中西建筑风格，既有潮汕传统的"下山虎"、"四点金"、"驷马拖车"等建筑形式，又吸收了西洋建筑的特点，形成了独特的侨乡建筑风格。</p>
            <p>村里还保留着许多潮汕传统习俗，如春节的营老爷、端午节的赛龙舟、中秋节的拜月娘等。潮汕工夫茶、潮剧、潮州音乐等潮汕文化元素在前美村也能找到踪影。</p>
          </div>
        </div>

        <div class="detail-section">
          <h2>景区信息</h2>
          <div class="text-content">
            <p><strong>别名：</strong>前美古村侨文化旅游区</p>
            <p><strong>旅游景区级别：</strong>2014年(4A)</p>
            <p><strong>开放时间：</strong>全年 8:30-17:30开放</p>
            <p><strong>票价信息：</strong>成人票40元，儿童/老人票20元</p>
          </div>
        </div>

        <div class="detail-section">
          <h2>图片展示</h2>
          <div class="image-gallery">
            <div class="gallery-row">
              <img v-for="(img, index) in firstRowImages" :key="index" :src="img" :alt="`前美村图片${index + 1}`">
            </div>
            <div class="gallery-row">
              <img v-for="(img, index) in secondRowImages" :key="index" :src="img" :alt="`前美村图片${index + 4}`">
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
  name: 'QianmeiVillageView',
  components: {
    DetailNavBar
  },
  data() {
    return {
      village: {
        id: 2,
        name: '前美村',
        category: 'chaoshan',
        location: '广东省汕头市澄海区隆都镇',
        description: '前美古村侨文化旅游区，拥有陈慈黉故居和永宁寨两大文化瑰宝，是潮汕历史文化的缩影。',
        image: '/yuecunwenmai1/images/chaoshandiqu/qianmeicun/qianmeicun1.png'
      },
      images: [
        '/yuecunwenmai1/images/chaoshandiqu/qianmeicun/qianmeicun1.png',
        '/yuecunwenmai1/images/chaoshandiqu/qianmeicun/qianmeicun2.png',
        '/yuecunwenmai1/images/chaoshandiqu/qianmeicun/qianmeicun3.png',
        '/yuecunwenmai1/images/chaoshandiqu/qianmeicun/qianmeicun4.png',
        '/yuecunwenmai1/images/chaoshandiqu/qianmeicun/qianmeicun5.png',
        '/yuecunwenmai1/images/chaoshandiqu/qianmeicun/qianmeicun6.png'
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
