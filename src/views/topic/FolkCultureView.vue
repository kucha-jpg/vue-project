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
      <h1>广东民俗文化</h1>
      <p>探索岭南文化瑰宝，领略多彩民俗风情</p>
    </div>
    <div class="topic-content">
      <div class="tab-container">
        <div class="tab-header">
          <button
            v-for="(tab, index) in tabs"
            :key="index"
            :class="{ active: activeTab === index }"
            @click="activeTab = index"
          >
            {{ tab }}
          </button>
        </div>

        <div class="tab-content">
          <!-- 潮汕文化 -->
          <div v-if="activeTab === 0" class="culture-section">
            <h2>潮汕文化</h2>
            <div class="culture-item">
              <img src="/images/hong.jpeg" alt="潮汕民俗" class="culture-image">
              <div class="culture-text">
                <h3>潮汕工夫茶</h3>
                <p>潮汕工夫茶是中国茶艺中最具代表性的一种，它讲究茶具器皿配备精良、烹煮技艺精巧娴熟。潮汕人把茶叫做"茶米"，茶与米不可分，茶在潮汕人心目中像米一样重要。</p>
              </div>
            </div>
            <div class="culture-item">
              <img src="/images/hong.jpeg" alt="潮汕民俗" class="culture-image">
              <div class="culture-text">
                <h3>潮汕英歌舞</h3>
                <p>潮汕英歌舞是广东潮汕地区的传统民俗舞蹈，融汇了戏剧、舞蹈、武术等成分，表演气势豪壮，被认为是扬正压邪、吉祥平安的象征。</p>
              </div>
            </div>
            <div class="culture-item">
              <img src="/images/hong.jpeg" alt="潮汕民俗" class="culture-image">
              <div class="culture-text">
                <h3>潮汕祠堂文化</h3>
                <p>潮汕祠堂是潮汕人崇拜祖先、缅怀先人的地方，也是商议族内大事、进行褒贬奖惩的场所。潮汕祠堂建筑规模宏大，装饰精美，具有很高的艺术价值。</p>
              </div>
            </div>
          </div>

          <!-- 广府文化 -->
          <div v-if="activeTab === 1" class="culture-section">
            <h2>广府文化</h2>
            <div class="culture-item">
              <img src="/images/hong.jpeg" alt="广府民俗" class="culture-image">
              <div class="culture-text">
                <h3>广府早茶</h3>
                <p>广府早茶是广东人日常生活的重要组成部分，一盅两件（一壶茶，两件点心）是广州人喝早茶的标配。早茶文化体现了广州人悠闲的生活态度。</p>
              </div>
            </div>
            <div class="culture-item">
              <img src="/images/hong.jpeg" alt="广府民俗" class="culture-image">
              <div class="culture-text">
                <h3>广州骑楼</h3>
                <p>广州骑楼是岭南建筑的代表，这种建筑形式将西洋建筑与岭南传统建筑结合，既可遮阳避雨，又便于商贸往来，是广州商业文化的象征。</p>
              </div>
            </div>
            <div class="culture-item">
              <img src="/images/hong.jpeg" alt="广府民俗" class="culture-image">
              <div class="culture-text">
                <h3>广府醒狮</h3>
                <p>广府醒狮是融武术、舞蹈、音乐等为一体的传统民俗文化，每逢节庆或有重大活动，必有醒狮助兴，寓意吉祥如意。</p>
              </div>
            </div>
          </div>

          <!-- 客家文化 -->
          <div v-if="activeTab === 2" class="culture-section">
            <h2>客家文化</h2>
            <div class="culture-item">
              <img src="/images/hong.jpeg" alt="客家民俗" class="culture-image">
              <div class="culture-text">
                <h3>客家围屋</h3>
                <p>客家围屋是客家民居的经典样式，具有防御性强、聚族而居的特点。围屋建筑体现了客家人团结互助、艰苦奋斗的精神。</p>
              </div>
            </div>
            <div class="culture-item">
              <img src="/images/hong.jpeg" alt="客家民俗" class="culture-image">
              <div class="culture-text">
                <h3>客家擂茶</h3>
                <p>客家擂茶是客家人的传统饮食习俗，以茶叶、芝麻、花生等原料擂制而成，具有清热解毒、生津止渴的功效，是客家人待客的上等饮品。</p>
              </div>
            </div>
            <div class="culture-item">
              <img src="/images/hong.jpeg" alt="客家民俗" class="culture-image">
              <div class="culture-text">
                <h3>客家山歌</h3>
                <p>客家山歌是客家人的口头文学，内容广泛，语言朴素生动，歌词善用比兴，韵脚齐整，是客家文化的重要载体。</p>
              </div>
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
      activeTab: 0,
      tabs: ['潮汕文化', '广府文化', '客家文化']
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

/* 标签页样式 */
.tab-container {
  width: 100%;
}

.tab-header {
  display: flex;
  border-bottom: 1px solid #e0e0e0;
  margin-bottom: 30px;
}

.tab-header button {
  padding: 12px 24px;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 18px;
  color: #666;
  position: relative;
  transition: all 0.3s;
}

.tab-header button:hover {
  color: #333;
}

.tab-header button.active {
  color: #c00;
  font-weight: bold;
}

.tab-header button.active::after {
  content: '';
  position: absolute;
  bottom: -1px;
  left: 0;
  right: 0;
  height: 3px;
  background-color: #c00;
}

/* 文化内容样式 */
.culture-section h2 {
  font-size: 32px;
  color: #333;
  margin-bottom: 30px;
  padding-bottom: 15px;
  border-bottom: 1px solid #eee;
}

.culture-item {
  display: flex;
  margin-bottom: 40px;
  align-items: flex-start;
}

.culture-item:last-child {
  margin-bottom: 0;
}

.culture-image {
  width: 300px;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
  margin-right: 30px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.culture-text {
  flex: 1;
}

.culture-text h3 {
  font-size: 24px;
  color: #c00;
  margin-bottom: 15px;
}

.culture-text p {
  font-size: 16px;
  line-height: 1.8;
  color: #555;
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

  /* 移动端标签页样式 */
  .tab-header {
    overflow-x: auto;
    white-space: nowrap;
    padding-bottom: 10px;
    margin-bottom: 20px;
  }

  .tab-header button {
    padding: 10px 15px;
    font-size: 16px;
  }

  /* 移动端文化内容样式 */
  .culture-item {
    flex-direction: column;
  }

  .culture-image {
    width: 100%;
    height: 200px;
    margin-right: 0;
    margin-bottom: 20px;
  }
}
</style>
