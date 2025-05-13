<template>
  <div class="village-detail">
    <DetailNavBar />

    <div class="container">
      <div class="detail-content">
        <div class="detail-section">
          <h2>大岭村简介</h2>
          <div class="text-content">
            <p>大岭村位于广州市番禺区石楼镇，始建于南宋，距今已有近900年历史，是广州保存最完好的岭南古村落之一，被誉为"岭南第一村"。村落依山傍水，布局精巧，保留了大量明清时期的祠堂、古塔、民居和石板街巷，展现了典型的广府水乡风貌。</p>
            <p>村内现存历史建筑近百座，其中显宗祠、两塘公祠、文昌塔（文塔）等最具代表性，建筑风格融合了广府三雕（石雕、木雕、砖雕）和灰塑工艺，精美绝伦。大岭村自古文风鼎盛，明清时期共出过1名探花、34名进士和53名举人，故有"进士村"之誉。</p>
            <p>此外，大岭村水系发达，古桥纵横，龙津桥、接龙桥等至今仍在使用。村落周边田园风光秀丽，形成"山—水—村—田"的和谐景观。如今，大岭村已成为广州重要的历史文化名村，吸引众多游客前来探访岭南古韵。</p>
          </div>
        </div>

        <div class="detail-section">
          <h2>历史渊源</h2>
          <div class="text-content">
            <p>大岭村始建于宋代，有两种建村说法。据陈氏族谱记载，陈氏祖先于北宋仁宗癸亥年奉诏至广东南雄县教谕，后晋知县，至三世于南宋绍兴元年自南雄珠玑巷迁至菩山村开村繁衍；另据许氏族谱记载，大岭村开村主要是原籍浙江绍兴府许氏，因皇后回乡探亲遭太监诬陷其兄造反，于北宋宣和元年从广东南雄珠玑巷逃至菩山开村。</p>
          </div>
        </div>

        <div class="detail-section">
          <h2>建筑风貌</h2>
          <div class="text-content">
            <p><strong>整体布局：</strong>村落整体傍水而建，沿玉带河呈现半月形布局，形似鳌鱼，古街为主轴，旁生里巷，与水系相通，形成"鱼骨状"街巷格局。</p>
            <p><strong>特色建筑：</strong>有建于康熙年间的龙津桥，是番禺最古老的石拱桥，桥墩两侧有分水脊；还有大量蚝壳墙，见证古代生态建筑智慧。村内古祠堂众多，如两塘公祠、显宗祠、大岭陈氏大宗祠等，木雕、砖雕和石雕精美。</p>
          </div>
        </div>

        <div class="detail-section">
          <h2>文化传统</h2>
          <div class="text-content">
            <p><strong>民俗活动：</strong>可观看舞龙舞狮、唱山歌等民俗表演。</p>
            <p><strong>传统技艺：</strong>有核雕等传统技艺，村内有核舟记艺术馆。</p>
            <p><strong>美食文化：</strong>特色美食有酿豆腐、鱼丸、肉丸、水晶饺、状元饼、萝卜糕等。</p>
          </div>
        </div>

        <div class="detail-section">
          <h2>图片展示</h2>
          <div class="image-gallery">
            <div class="gallery-row">
              <img v-for="(img, index) in firstRowImages" :key="index" :src="img" :alt="`大岭村图片${index + 1}`">
            </div>
            <div class="gallery-row">
              <img v-for="(img, index) in secondRowImages" :key="index" :src="img" :alt="`大岭村图片${index + 5}`">
            </div>
            <div class="gallery-row">
              <img v-for="(img, index) in thirdRowImages" :key="index" :src="img" :alt="`大岭村图片${index + 9}`">
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
  name: 'DalingVillageView',
  components: {
    DetailNavBar
  },
  data() {
    return {
      village: {
        id: 2,
        name: '大岭村',
        category: 'guangzhou',
        location: '广东省广州市番禺区石楼镇',
        description: '广州保存最完好的岭南古村落之一，有"岭南第一村"之称。',
        image: '/images/guangfudiqu/dalingcun/dalingcun1.png'
      },
      images: [
        '/images/guangfudiqu/dalingcun/dalingcun1.png',
        '/images/guangfudiqu/dalingcun/dalingcun2.png',
        '/images/guangfudiqu/dalingcun/dalingcun3.png',
        '/images/guangfudiqu/dalingcun/dalingcun4.png',
        '/images/guangfudiqu/dalingcun/dalingcun5.png',
        '/images/guangfudiqu/dalingcun/dalingcun6.png',
        '/images/guangfudiqu/dalingcun/dalingcun7.png',
        '/images/guangfudiqu/dalingcun/dalingcun8.png',
        '/images/guangfudiqu/dalingcun/dalingcun9.png',
        '/images/guangfudiqu/dalingcun/dalingcun10.png',
        '/images/guangfudiqu/dalingcun/dalingcun11.png'
      ]
    }
  },
  computed: {
    firstRowImages() {
      return this.images.slice(0, 4); // 第一行显示4张图片
    },
    secondRowImages() {
      return this.images.slice(4, 8); // 第二行显示4张图片
    },
    thirdRowImages() {
      return this.images.slice(8, 11); // 第三行显示3张图片
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
  gap: 20px;
}

.gallery-row:first-child {
  grid-template-columns: repeat(4, 1fr);
}

.gallery-row:nth-child(2) {
  grid-template-columns: repeat(4, 1fr);
}

.gallery-row:last-child {
  grid-template-columns: repeat(3, 1fr);
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

  .gallery-row:first-child,
  .gallery-row:nth-child(2) {
    grid-template-columns: repeat(2, 1fr);
  }

  .gallery-row:last-child {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 480px) {
  .gallery-row {
    grid-template-columns: 1fr;
  }
}
</style>
