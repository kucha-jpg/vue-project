<template>
  <div class="topic-detail">
    <NavBar />
    <div class="topic-header" style="background-image: url('/yuecunwenmai1/images/kejiadiqu/yannanfeichatian/yannanfeichatian2.png')">
      <button class="back-button" @click="goBack">
        <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
          <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/>
        </svg>
        返回
      </button>
      <h1>广东信仰文化</h1>
      <p>探寻岭南多元信仰，传承文化精髓</p>
    </div>
    <div class="topic-content">
      <div class="culture-tabs">
        <button
          v-for="tab in tabs"
          :key="tab.id"
          :class="{ active: activeTab === tab.id }"
          @click="activeTab = tab.id"
        >
          {{ tab.name }}
        </button>
      </div>

      <div class="culture-content">
        <!-- 潮汕文化 -->
        <div v-if="activeTab === 'chaoshan'" class="culture-section">
          <h2>潮汕信仰文化</h2>
          <div class="culture-item">
            <img src="/yuecunwenmai1/images/信仰文化/潮汕地区/潮汕三山国王.jpg" alt="潮汕信仰文化">
            <div class="culture-text">
              <h3>三山国王信仰</h3>
              <p>三山国王是潮汕地区特有的民间信仰，起源于揭西县的三座山神。相传三位国王生前是隋朝的将军，死后显灵护国庇民。</p>
              <p>这一信仰在潮汕地区影响深远，几乎每个村落都有三山国王庙。随着潮汕人移民海外，三山国王信仰也传播到东南亚各国，成为连接海内外潮人的重要文化纽带。</p>
            </div>
          </div>
          <div class="culture-item reverse">
            <img src="/yuecunwenmai1/images/信仰文化/潮汕地区/老爷牌.webp" alt="老爷牌">
            <div class="culture-text">
              <h3>老爷牌文化</h3>
              <p>"老爷牌"是潮汕地区民间信仰中的重要祭祀用品，常见于传统节庆和宗族活动中。"老爷"在潮汕方言中指代各类神明，如三山国王、妈祖、土地公等。</p>
              <p>老爷牌通常为木质或纸质牌位，上刻神明名号及吉祥图案，用于供奉或巡游仪式。在潮汕习俗中，老爷牌承载着祈福消灾、保佑平安的寓意。</p>
              <p>每逢春节、神明诞辰等重大日子，村民会举行"营老爷"活动，抬着老爷牌巡游村落，祈求风调雨顺、阖家安康。牌位的制作讲究传统工艺，常配以潮州木雕、金漆画等装饰，体现潮汕精湛的手工技艺。</p>
            </div>
          </div>
        </div>

        <!-- 广府文化 -->
        <div v-if="activeTab === 'guangfu'" class="culture-section">
          <h2>广府信仰文化</h2>
          <div class="culture-item">
            <img src="/yuecunwenmai1/images/信仰文化/珠三角地区/珠三角北帝信仰.jpg" alt="北帝信仰">
            <div class="culture-text">
              <h3>北帝信仰</h3>
              <p>北帝(真武大帝)信仰在广府地区尤为盛行，尤其是佛山祖庙供奉的北帝最为著名。北帝被视为水神，广府地区水网密布，人们祈求北帝保佑风调雨顺、水陆平安。</p>
              <p>佛山祖庙每年都会举行盛大的北帝诞辰庆典，包括巡游、演戏、烧炮等活动，吸引众多信众参与。北帝信仰也反映了广府人崇武尚勇的精神特质。</p>
            </div>
          </div>
          <div class="culture-item reverse">
            <img src="/yuecunwenmai1/images/信仰文化/珠三角地区/珠三角龙母信仰.jpg" alt="龙母信仰">
            <div class="culture-text">
              <h3>龙母信仰</h3>
              <p>龙母信仰是珠江三角洲地区特有的水神崇拜文化，以肇庆悦城龙母祖庙为中心，距今已有两千多年历史。龙母（公元前290年-公元前210年），相传为秦代百越族女首领，因驯养五龙、造福西江流域而被尊为"水神"。</p>
              <p>该文化包含三大特征：一是地域性祭祀传统，以西江流域的"龙母诞"（农历五月初八）为核心，涵盖龙舟巡游、摸龙床等特色仪式；二是建筑艺术典范，悦城龙母祖庙集广府石雕、木雕、砖雕三绝于一体；三是多元文化融合，既保留古越族图腾崇拜，又吸收中原龙文化元素。</p>
            </div>
          </div>
          <div class="culture-item">
            <img src="/yuecunwenmai1/images/信仰文化/珠三角地区/珠三角金花娘娘.jpg" alt="金花娘娘">
            <div class="culture-text">
              <h3>金花娘娘信仰</h3>
              <p>金花娘娘是广府地区特有的生育女神，相传为明代广州一位姓金的民间女子，因救助难产妇女而升仙。金花庙遍布珠三角地区，以广州金花直街的金花古庙最为著名。</p>
              <p>每年农历四月十七金花娘娘诞辰，广州都会举行盛大的金花诞庆典，已婚妇女祈求早生贵子，孕妇祈求母子平安。这一信仰体现了广府人对生育文化的重视和对母性的崇敬。</p>
            </div>
          </div>
        </div>

        <!-- 客家文化 -->
        <div v-if="activeTab === 'hakka'" class="culture-section">
          <h2>客家信仰文化</h2>
          <div class="culture-item">
            <img src="/yuecunwenmai1/images/信仰文化/客家地区/妈祖.png" alt="妈祖文化">
            <div class="culture-text">
              <h3>妈祖文化</h3>
              <p>妈祖文化是以海上女神林默（960-987）为核心形成的民间信仰体系，发源于福建莆田湄洲岛，现已成为跨越45个国家和地区的全球性文化现象。</p>
              <p>作为中国首个信俗类世界非物质文化遗产，妈祖信仰融合了海洋文化、宗族传统与和平理念，其"立德、行善、大爱"的精神内核深刻影响着3亿信众。该文化体系包含三大维度：一是物质载体，全球1.5万座妈祖宫庙（其中台湾400余座）构成信仰网络；二是仪式传统，以春秋二祭和湄洲祖庙祭典为代表的非遗仪式；三是现代价值，作为"海上丝绸之路"文化纽带和两岸交流重要平台。</p>
            </div>
          </div>
          <div class="culture-item reverse">
            <img src="/yuecunwenmai1/images/信仰文化/客家地区/定光古佛.jpg" alt="定光古佛">
            <div class="culture-text">
              <h3>定光古佛信仰</h3>
              <p>定光古佛是客家地区特有的民间信仰，相传是唐代高僧伏虎禅师。定光古佛被视为客家人的保护神，在闽粤赣边区的客家地区广受崇拜。</p>
              <p>定光古佛信仰与客家人的迁徙历史密切相关，相传他曾帮助客家先民开疆拓土、安居乐业。每年正月，各地都会举行隆重的定光古佛庙会，成为客家地区重要的文化活动。</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'

export default {
  name: 'DialectView',
  components: {
    NavBar
  },
  data() {
    return {
      activeTab: 'chaoshan',
      tabs: [
        { id: 'chaoshan', name: '潮汕文化' },
        { id: 'guangfu', name: '广府文化' },
        { id: 'hakka', name: '客家文化' }
      ]
    }
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    }
  }
}
</script>

<style scoped>
/* 保持原有样式不变 */
.topic-detail {
  font-family: "Microsoft YaHei", "PingFang SC", sans-serif;
  background-color: #f8f9fa;
}

.topic-header {
  height: 350px;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
  position: relative;
}

.topic-header::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
}

.topic-header h1 {
  font-size: 48px;
  margin-bottom: 20px;
  position: relative;
  z-index: 2;
  font-weight: 600;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
}

.topic-header p {
  font-size: 24px;
  position: relative;
  z-index: 2;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
}

.back-button {
  position: absolute;
  top: 20px;
  left: 20px;
  background: rgba(255, 255, 255, 0.2);
  border: none;
  color: white;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: all 0.3s ease;
  z-index: 3;
}

.back-button:hover {
  background: rgba(255, 255, 255, 0.3);
}

.topic-content {
  padding: 60px 50px;
  max-width: 1200px;
  margin: 0 auto;
}

.culture-tabs {
  display: flex;
  border-bottom: 1px solid #eee;
  margin-bottom: 30px;
}

.culture-tabs button {
  padding: 12px 24px;
  background: none;
  border: none;
  font-size: 18px;
  cursor: pointer;
  color: #666;
  transition: all 0.3s;
  position: relative;
}

.culture-tabs button:hover {
  color: #333;
}

.culture-tabs button.active {
  color: #1890ff;
  font-weight: 500;
}

.culture-tabs button.active::after {
  content: '';
  position: absolute;
  bottom: -1px;
  left: 0;
  right: 0;
  height: 2px;
  background-color: #1890ff;
}

.culture-section h2 {
  font-size: 32px;
  margin-bottom: 30px;
  color: #333;
  text-align: center;
}

.culture-item {
  display: flex;
  margin-bottom: 40px;
  align-items: center;
}

.culture-item.reverse {
  flex-direction: row-reverse;
}

.culture-item img {
  width: 50%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.culture-text {
  width: 50%;
  padding: 0 30px;
}

.culture-text h3 {
  font-size: 24px;
  margin-bottom: 15px;
  color: #444;
}

.culture-text p {
  font-size: 16px;
  line-height: 1.8;
  color: #666;
  margin-bottom: 15px;
}

@media (max-width: 768px) {
  .topic-content {
    padding: 40px 20px;
  }

  .topic-header {
    height: 250px;
  }

  .topic-header h1 {
    font-size: 36px;
  }

  .topic-header p {
    font-size: 18px;
  }

  .culture-tabs button {
    padding: 10px 15px;
    font-size: 16px;
  }

  .culture-item {
    flex-direction: column;
  }

  .culture-item.reverse {
    flex-direction: column;
  }

  .culture-item img,
  .culture-text {
    width: 100%;
    padding: 0;
    margin-bottom: 20px;
  }

  .culture-text {
    order: 1;
  }

  .culture-item img {
    order: 2;
  }
}
</style>
