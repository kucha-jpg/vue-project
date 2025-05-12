<template>
  <div class="villages">
    <NavBar />
    <div class="hero">
      <div class="hero-content">
        <h1>广东传统村落</h1>
        <p>探索千年文化传承</p>
      </div>
    </div>

    <div class="container">
      <!-- 分类筛选 -->
      <div class="filter-section">
        <h2>村落分类</h2>
        <div class="filter-buttons">
          <button
            :class="{ active: activeFilter === 'all' }"
            @click="filterVillages('all')"
          >
            <span class="button-text">全部村落</span>
            <span class="button-icon"></span>
          </button>
          <button
            :class="{ active: activeFilter === 'chaoshan' }"
            @click="filterVillages('chaoshan')"
          >
            <span class="button-text">潮汕村落</span>
            <span class="button-icon">🏯</span>
          </button>
          <button
            :class="{ active: activeFilter === 'guangfu' }"
            @click="filterVillages('guangfu')"
          >
            <span class="button-text">广府村落</span>
            <span class="button-icon">🏘️</span>
          </button>
          <button
            :class="{ active: activeFilter === 'hakka' }"
            @click="filterVillages('hakka')"
          >
            <span class="button-text">客家村落</span>
            <span class="button-icon">🏡</span>
          </button>
        </div>
      </div>

      <!-- 村落列表 -->
      <div class="village-list">
        <div v-if="filteredVillages.length === 0" class="no-results">
          <p>当前分类下暂无村落信息</p>
        </div>

        <div v-else class="village-grid">
          <div
            v-for="village in filteredVillages"
            :key="village.id"
            class="village-card"
            @click="goToVillageDetail(village.id)"
          >
            <div class="image-container">
              <img :src="village.image" :alt="village.name" class="village-image">
              <div class="image-overlay">
                <h3>{{ village.name }}</h3>
                <p class="location">{{ village.location }}</p>
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
  name: 'VillagesView',
  components: {
    NavBar
  },
  data() {
    return {
      activeFilter: 'all',
      villages: [
        // 潮汕村落
        { id: 1, name: '潮州古城', category: 'chaoshan', location: '潮州市', description: '保存完好的潮州古城，拥有众多明清建筑。', image: '/yuecunwenmai1/images/chaoshandiqu/chaozhougucheng/chaozhoushi1.png', component: 'ChaozhouGuchenView' },
        { id: 2, name: '龙湖古寨', category: 'chaoshan', location: '汕头市', description: '面向南海的古老渔村，保留传统潮汕建筑风格。', image: '/yuecunwenmai1/images/chaoshandiqu/longhuguzhai/longhuguzhai1.png', component: 'LonghuGuzhaiView' },
        { id: 7, name: '程洋冈村', category: 'chaoshan', location: '汕头市澄海区', description: '千年古村，有"粤东襟喉、潮州门户"之称', image: '/yuecunwenmai1/images/chaoshandiqu/chengyanggang/chengyanggang1.png', component: 'ChengyanggangView' },
        { id: 8, name: '前美村', category: 'chaoshan', location: '汕头市澄海区', description: '潮汕著名侨乡，拥有陈慈黉故居等名胜', image: '/yuecunwenmai1/images/chaoshandiqu/qianmeicun/qianmeicun3.png', component: 'QianmeiView' },

        // 广府村落
        { id: 3, name: '佛山祖庙', category: 'guangfu', location: '佛山市', description: '以祖庙为中心的广府文化村落，建筑精美。', image: '/yuecunwenmai1/images/guangfudiqu/foshanzumiao/foshanzumiao2.png', component: 'FoshanZumiaoView' },
        { id: 4, name: '沙湾古镇', category: 'guangfu', location: '广州市', description: '典型的广府水乡，保留完整的古建筑群。', image: '/yuecunwenmai1/images/guangfudiqu/shawanguzhen/shawanguzhen2.png', component: 'ShawanGuzhenView' },
        { id: 9, name: '大岭村', category: 'guangfu', location: '广州市番禺区', description: '千年古村，有"蛎江涌头，半月古村"之称', image: '/yuecunwenmai1/images/guangfudiqu/dalingcun/dalingcun2.png', component: 'DalingcunView' },
        { id: 10, name: '松塘村', category: 'guangfu', location: '佛山市南海区', description: '翰林村，因村中数百年来出了不少进士而得名', image: '/yuecunwenmai1/images/guangfudiqu/songtangcun/songtangcun2.png', component: 'SongtangcunView' },

        // 客家村落
        { id: 5, name: '雁南飞茶田', category: 'hakka', location: '梅州市', description: '客家围屋与茶田完美结合的生态村落。', image: '/yuecunwenmai1/images/kejiadiqu/yannanfeichatian/yannanfeichatian1.png', component: 'YannanfeichatianView' },
        { id: 6, name: '桥溪古韵', category: 'hakka', location: '梅州市', description: '隐藏在深山中的客家古村落，风景秀丽。', image: '/yuecunwenmai1/images/kejiadiqu/qiaoxiguyun/qiaoxiguyun3.png', component: 'QiaoxiguyunView' },
        { id: 11, name: '侨乡村', category: 'hakka', location: '梅州市梅县区', description: '客家围屋博物馆，有"客家围屋之乡"的美誉', image: '/yuecunwenmai1/images/kejiadiqu/qiaoxiangcun/qiaoxiangcun2.png', component: 'QiaoxiangcunView' },
        { id: 12, name: '南华又庐', category: 'hakka', location: '梅州市梅县区', description: '典型的客家方形围屋，建筑规模宏大', image: '/yuecunwenmai1/images/kejiadiqu/nanhuayoulu/nanhuayoulu1.png', component: 'NanhuayouluView' }
      ]
    }
  },
  computed: {
    filteredVillages() {
      if (this.activeFilter === 'all') {
        return this.villages
      }
      return this.villages.filter(village => village.category === this.activeFilter)
    }
  },
  methods: {
    filterVillages(category) {
      this.activeFilter = category
    },
    getCategoryName(category) {
      const categories = {
        'chaoshan': '潮汕村落',
        'guangfu': '广府村落',
        'hakka': '客家村落'
      }
      return categories[category] || category
    },
    goToVillageDetail(id) {
      this.$router.push(`/village/${id}`)
    }
  }
}
</script>

<style scoped>
.villages {
  font-family: "Microsoft YaHei", sans-serif;
  background-color: #f8f9fa;
}

.hero {
  height: 400px;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
  url('/yuecunwenmai1/images/guangfudiqu/foshanzumiao/foshanzumiao5.png') center/cover;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
  margin-bottom: 40px;
}

.hero-content h1 {
  font-size: 42px;
  margin-bottom: 15px;
  font-weight: 600;
}

.hero-content p {
  font-size: 20px;
  font-weight: 300;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.filter-section {
  margin-bottom: 40px;
  text-align: center;
}

.filter-section h2 {
  font-size: 28px;
  margin-bottom: 25px;
  color: #333;
  font-weight: 500;
  position: relative;
  display: inline-block;
}

.filter-section h2::after {
  content: '';
  position: absolute;
  bottom: -8px;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 3px;
  background: linear-gradient(90deg, #ff7e5f, #feb47b);
  border-radius: 3px;
}

.filter-buttons {
  display: flex;
  justify-content: center;
  gap: 15px;
  flex-wrap: wrap;
}

.filter-buttons button {
  padding: 12px 25px;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  border: none;
  border-radius: 30px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  color: #555;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}

.filter-buttons button:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  background: linear-gradient(135deg, #e6eef7 0%, #b3c4d8 100%);
}

.filter-buttons button.active {
  background: linear-gradient(135deg, #ff7e5f 0%, #feb47b 100%);
  color: white;
  box-shadow: 0 6px 15px rgba(254, 180, 123, 0.4);
}

.filter-buttons button.active:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(254, 180, 123, 0.5);
}

.button-text {
  margin-right: 8px;
}

.button-icon {
  font-size: 18px;
}

.village-list {
  min-height: 500px;
  padding: 20px 0;
}

.no-results {
  text-align: center;
  padding: 80px 0;
  color: #666;
  font-size: 18px;
}

.village-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 25px;
}

.village-card {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s, box-shadow 0.3s;
  cursor: pointer;
  position: relative;
}

.village-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.12);
}

.village-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 5px;
  background: linear-gradient(90deg, #ff7e5f, #feb47b);
  transition: all 0.3s ease;
}

.village-card:hover::before {
  height: 8px;
}

.image-container {
  position: relative;
  height: 220px;
  overflow: hidden;
}

.village-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.village-card:hover .village-image {
  transform: scale(1.05);
}

.image-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.7));
  color: white;
  padding: 20px 15px 10px;
  transform: translateY(0);
  transition: all 0.3s ease;
}

.village-card:hover .image-overlay {
  transform: translateY(-5px);
}

.image-overlay h3 {
  margin: 0 0 5px 0;
  font-size: 20px;
  font-weight: 600;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
}

.image-overlay .location {
  font-size: 15px;
  margin: 0;
  font-weight: 300;
  opacity: 0.9;
}

@media (max-width: 768px) {
  .hero {
    height: 300px;
  }

  .hero-content h1 {
    font-size: 32px;
  }

  .hero-content p {
    font-size: 16px;
  }

  .filter-section h2 {
    font-size: 24px;
  }

  .filter-buttons button {
    padding: 10px 20px;
    font-size: 15px;
  }

  .village-grid {
    grid-template-columns: 1fr;
  }

  .image-container {
    height: 180px;
  }
}

@media (max-width: 480px) {
  .filter-buttons {
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }

  .filter-buttons button {
    width: 80%;
  }
}
</style>
