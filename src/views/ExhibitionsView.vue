<template>
  <div class="exhibitions">
    <NavBar />
    <!-- 头部图片作为背景，包含标题和描述 -->
    <ExhibitionHeader
      title="广东传统村落特展"
      description="探索传统村落的历史与文化魅力"
      image="/images/1.jpg"
    />

    <div class="content">
      <section class="exhibition-list">
        <div class="exhibition-vertical">
          <router-link
            v-for="exhibition in exhibitions"
            :key="exhibition.id"
            :to="`/exhibitions/${exhibition.id}`"
            class="exhibition-card-link"
          >
            <div class="exhibition-card" :style="{ backgroundImage: 'url(' + exhibition.image + ')' }">
              <div class="exhibition-info">
                <h3>{{ exhibition.title }}</h3>
                <p class="description">{{ exhibition.description }}</p>
                <span class="view-more">查看详情 →</span>
              </div>
            </div>
          </router-link>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import ExhibitionHeader from '@/components/ExhibitionHeader.vue'

export default {
  name: 'ExhibitionsView',
  components: {
    NavBar,
    ExhibitionHeader
  },
  data() {
    return {
      exhibitions: [
        {
          id: 1,
          title: '村落形态格局展',
          description: '展示广东传统村落的空间布局、风水理念和规划特点，揭示人地和谐的居住智慧。',
          date: '2023-11-01 至 2023-12-31',
          location: '广州博物馆',
          image: '/images/1.jpg'
        },
        {
          id: 2,
          title: '建筑营造技艺展',
          description: '探索广东传统建筑的独特技艺，包括骑楼、镬耳屋、蚝壳墙等特色建筑形式与施工方法。',
          date: '2023-10-15 至 2023-11-15',
          location: '广东省博物馆',
          image: '/images/2.jpg'
        },
        {
          id: 3,
          title: '村落生产环境展',
          description: '呈现广东传统村落的农业生产方式、水利设施和商贸活动，展现人民的勤劳智慧。',
          date: '2024-01-10 至 2024-03-10',
          location: '广州艺术博物院',
          image: '/images/3.jpg'
        },
        {
          id: 4,
          title: '特色手工艺展',
          description: '展示广东村落的传统手工艺瑰宝，如广彩、广绣、石湾陶塑等精湛技艺的传承与发展。',
          date: '2024-02-01 至 2024-04-30',
          location: '广东美术馆',
          image: '/images/4.jpg'
        },
        {
          id: 5,
          title: '村落自然环境展',
          description: '揭示广东传统村落与自然环境的和谐共生关系，展示水乡、山地村落的独特风貌。',
          date: '2023-12-01 至 2024-01-31',
          location: '广州饮食文化博物馆',
          image: '/images/5.jpg'
        }
      ]
    }
  }
}
</script>

<style scoped>
.exhibitions {
  font-family: "Microsoft YaHei", sans-serif;
  background: url('/images/3.jpg') no-repeat center center fixed;
  background-size: cover;
  min-height: 100vh;
  padding-top: 0;
}

.content {
  padding: 40px 20px;
  max-width: 1200px;
  margin: 0 auto;
  background-color: rgba(255, 255, 255, 0.9);
}

.exhibition-vertical {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 30px;
}

.exhibition-card-link {
  text-decoration: none;
}

.exhibition-card {
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  background-size: cover;
  background-position: center;
  min-height: 300px;
  height: 400px;
  width: 100%;
  cursor: pointer;
}

.exhibition-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
}

.exhibition-info {
  position: absolute;
  top: 0;
  right: -100%;
  width: 350px;
  height: 100%;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  z-index: 2;
  transition: all 0.3s ease;
}

.exhibition-card:hover .exhibition-info {
  right: 0;
}

.exhibition-info h3 {
  font-size: 24px;
  margin-bottom: 15px;
  color: #ffffff;
}

.exhibition-info .description {
  font-size: 16px;
  line-height: 1.6;
  color: #e0e0e0;
  margin-bottom: 20px;
}

.view-more {
  margin-top: auto;
  align-self: flex-end;
  font-size: 14px;
  color: #ffcc00;
  font-weight: bold;
}

@media (max-width: 768px) {
  .exhibition-card {
    height: 300px;
  }

  .exhibition-info {
    width: 100%;
    right: -100%;
    padding: 20px;
  }

  .exhibition-info h3 {
    font-size: 20px;
  }

  .exhibition-info .description {
    font-size: 14px;
  }

  .content {
    padding: 20px 10px;
  }
}
</style>
