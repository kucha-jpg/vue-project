<template>
  <div class="topic-detail">
    <NavBar />
    <div class="topic-header" style="background-image: url('/images/dialect-bg.jpg')">
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
            <img src="/images/hong.jpeg" alt="潮汕信仰文化">
            <div class="culture-text">
              <h3>妈祖信仰</h3>
              <p>潮汕地区有着悠久的妈祖信仰传统，妈祖被视为海上保护神。每年农历三月二十三日妈祖诞辰，各地都会举行盛大的祭祀活动，其中以汕头妈屿岛的妈祖庙会最为著名。</p>
              <p>潮汕人将妈祖视为家乡的守护神，出海捕鱼或远航经商前都会祈求妈祖保佑平安。这种信仰不仅体现了潮汕人对海洋的敬畏，也凝聚了海外潮汕华人的乡梓情怀。</p>
            </div>
          </div>
          <div class="culture-item reverse">
            <img src="/images/hong.jpeg" alt="潮汕信仰文化">
            <div class="culture-text">
              <h3>三山国王信仰</h3>
              <p>三山国王是潮汕地区特有的民间信仰，起源于揭西县的三座山神。相传三位国王生前是隋朝的将军，死后显灵护国庇民。</p>
              <p>这一信仰在潮汕地区影响深远，几乎每个村落都有三山国王庙。随着潮汕人移民海外，三山国王信仰也传播到东南亚各国，成为连接海内外潮人的重要文化纽带。</p>
            </div>
          </div>
        </div>

        <!-- 广府文化 -->
        <div v-if="activeTab === 'guangfu'" class="culture-section">
          <h2>广府信仰文化</h2>
          <div class="culture-item">
            <img src="/images/hong.jpeg" alt="广府信仰文化">
            <div class="culture-text">
              <h3>北帝信仰</h3>
              <p>北帝(真武大帝)信仰在广府地区尤为盛行，尤其是佛山祖庙供奉的北帝最为著名。北帝被视为水神，广府地区水网密布，人们祈求北帝保佑风调雨顺、水陆平安。</p>
              <p>佛山祖庙每年都会举行盛大的北帝诞辰庆典，包括巡游、演戏、烧炮等活动，吸引众多信众参与。北帝信仰也反映了广府人崇武尚勇的精神特质。</p>
            </div>
          </div>
          <div class="culture-item reverse">
            <img src="/images/hong.jpeg" alt="广府信仰文化">
            <div class="culture-text">
              <h3>南海神庙信仰</h3>
              <p>位于广州黄埔的南海神庙是广府地区重要的海神信仰中心，始建于隋朝，是中国四大海神庙之一。</p>
              <p>南海神庙祭祀的是南海之神祝融，广府渔民和航海者出海前都会来此祭祀，祈求出海平安。每年农历二月举行的波罗诞庙会，是广府地区最盛大的民间庙会之一。</p>
            </div>
          </div>
        </div>

        <!-- 客家文化 -->
        <div v-if="activeTab === 'hakka'" class="culture-section">
          <h2>客家信仰文化</h2>
          <div class="culture-item">
            <img src="/images/hong.jpeg" alt="客家信仰文化">
            <div class="culture-text">
              <h3>定光古佛信仰</h3>
              <p>定光古佛是客家地区特有的民间信仰，相传是唐代高僧伏虎禅师。定光古佛被视为客家人的保护神，在闽粤赣边区的客家地区广受崇拜。</p>
              <p>定光古佛信仰与客家人的迁徙历史密切相关，相传他曾帮助客家先民开疆拓土、安居乐业。每年正月，各地都会举行隆重的定光古佛庙会。</p>
            </div>
          </div>
          <div class="culture-item reverse">
            <img src="/images/hong.jpeg" alt="客家信仰文化">
            <div class="culture-text">
              <h3>三山国王信仰(客家版)</h3>
              <p>三山国王信仰在客家地区同样盛行，但与潮汕地区相比，客家人的三山国王信仰更强调其作为祖先神的色彩。</p>
              <p>在粤东客家地区，许多村落的三山国王庙也是氏族宗祠，体现了客家人将祖先崇拜与民间信仰相结合的特点。这种信仰增强了客家人的族群认同感。</p>
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
