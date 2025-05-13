<template>
  <div class="topics">
    <NavBar />
    <div class="page-header">
      <h1>广东村落文化专题</h1>
      <p>探索村落的多彩文化瑰宝</p>
    </div>
    <div class="content">
      <section class="topic-list">
        <h2>特色文化专题</h2>
        <div class="topic-grid">
          <!-- 专题卡片将在这里动态生成 -->
          <div
            class="topic-card"
            v-for="topic in topics"
            :key="topic.id"
            @click="goToTopic(topic.path)"
          >
            <div class="image-container">
              <img :src="topic.image" :alt="topic.title" class="topic-image">
              <div class="overlay"></div>
            </div>
            <div class="topic-info">
              <h3>{{ topic.title }}</h3>
              <p>{{ topic.description }}</p>
              <div class="hover-indicator">
                <svg viewBox="0 0 24 24" width="24" height="24">
                  <path d="M5 13h11.17l-4.88 4.88c-.39.39-.39 1.03 0 1.42.39.39 1.02.39 1.41 0l6.59-6.59a.996.996 0 0 0 0-1.41l-6.58-6.6a.996.996 0 1 0-1.41 1.41L16.17 11H5c-.55 0-1 .45-1 1s.45 1 1 1z" fill="currentColor"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'

export default {
  name: 'TopicsView',
  components: {
    NavBar
  },
  data() {
    return {
      topics: [
        {
          id: 1,
          title: '方言音律',
          description: '聆听各地的方言歌谣，感受独特的语音魅力',
          image: '/images/chaoshandiqu/longhuguzhai/longhuguzhai2.png',
          path: '/dialect'
        },
        {
          id: 2,
          title: '红色文化',
          description: '追寻广东革命足迹，传承红色基因',
          image: '/images/chaoshandiqu/qianmeicun/qianmeicun3.png',
          path: '/red-culture'
        },
        {
          id: 3,
          title: '节日文化',
          description: '体验传统节庆，感受民俗风情',
          image: '/images/guangfudiqu/shawanguzhen/shawanguzhen3.png',
          path: '/festival'
        },
        {
          id: 4,
          title: '美食文化',
          description: '品味特色美食，探索饮食文化根源',
          image: '/images/美食文化/客家美食/酿豆腐.png',
          path: '/food-culture'
        },
        {
          id: 5,
          title: '民俗文化',
          description: '了解传统民俗，感受乡土风情',
          image: '/images/guangfudiqu/dalingcun/dalingcun6.png',
          path: '/folk-culture'
        },
        {
          id: 6,
          title: '信仰文化',
          description: '探秘宗教信仰，理解多元文化融合',
          image: '/images/kejiadiqu/yannanfeichatian/yannanfeichatian2.png',
          path: '/belief-culture'
        }
      ]
    }
  },
  methods: {
    goToTopic(path) {
      this.$router.push(path);
    }
  }
}
</script>

<style scoped>
.topics {
  font-family: "Microsoft YaHei", "PingFang SC", sans-serif;
  background-color: #f8f9fa;
}

.page-header {
  height: 350px;
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
  url('/images/guangfudiqu/shawanguzhen/shawanguzhen1.png') center/cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.page-header::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: 1;
}

.page-header h1 {
  font-size: 48px;
  margin-bottom: 20px;
  position: relative;
  z-index: 2;
  font-weight: 600;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
}

.page-header p {
  font-size: 24px;
  position: relative;
  z-index: 2;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
}

.content {
  padding: 60px 50px;
  max-width: 1200px;
  margin: 0 auto;
}

.topic-list h2 {
  font-size: 32px;
  margin-bottom: 50px;
  text-align: center;
  color: #333;
  font-weight: 600;
  position: relative;
  display: inline-block;
}

.topic-list h2::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 4px;
  background: linear-gradient(90deg, #1890ff, #36cf99);
  border-radius: 2px;
}

.topic-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 30px;
}

.topic-card {
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  background-color: white;
  cursor: pointer;
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.topic-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
}

.image-container {
  position: relative;
  height: 250px; /* 增加图片高度 */
  overflow: hidden;
  flex: 0 0 auto; /* 固定图片区域高度 */
}

.topic-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.topic-card:hover .topic-image {
  transform: scale(1.05);
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.5));
  z-index: 1;
}

.topic-info {
  padding: 20px; /* 减少内边距 */
  position: relative;
  z-index: 2;
  flex: 1; /* 让文字区域填充剩余空间 */
  display: flex;
  flex-direction: column;
}

.topic-info h3 {
  font-size: 20px; /* 稍微减小标题字体 */
  margin-bottom: 10px;
  color: #333;
  font-weight: 600;
  transition: color 0.3s ease;
}

.topic-card:hover .topic-info h3 {
  color: #1890ff;
}

.topic-info p {
  font-size: 14px; /* 减小正文字体 */
  color: #666;
  line-height: 1.5;
  margin-bottom: 15px;
  flex: 1; /* 让描述文字填充可用空间 */
}

.hover-indicator {
  display: flex;
  justify-content: flex-end;
  opacity: 0;
  transition: opacity 0.3s ease;
  color: #1890ff;
  margin-top: 10px; /* 增加与文字的距离 */
}

.topic-card:hover .hover-indicator {
  opacity: 1;
}

@media (max-width: 768px) {
  .content {
    padding: 40px 20px;
  }

  .topic-grid {
    grid-template-columns: 1fr;
  }

  .image-container {
    height: 200px; /* 移动端图片高度适当减小 */
  }

  .page-header {
    height: 250px;
  }

  .page-header h1 {
    font-size: 36px;
  }

  .page-header p {
    font-size: 18px;
  }
}
</style>
