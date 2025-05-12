<template>
  <div class="home" ref="homeContainer">
    <NavBar :class="{ 'nav-scrolled': isScrolled }" />

    <div class="hero" ref="heroSection">
      <video class="hero-video" autoplay muted loop>
        <source src="/videos/0509_1.mov" type="video/mp4">
        <!-- 备用图片，当视频无法加载时显示 -->
        <img src="/images/hong.jpeg" alt="岭南文化背景" class="hero-fallback">
      </video>
      <div class="hero-content">
        <h1>探索文化瑰宝</h1>
        <p>走进广东传统村落，感受千年文脉传承</p>
      </div>
    </div>

    <div class="village-museum-title" ref="titleSection">
      <h2>村落馆</h2>
    </div>

    <!-- 搜索框部分 -->
    <div class="search-container" ref="searchSection">
      <div class="search-box-container">
        <div class="search-box" v-click-outside="closeSearch">
          <div class="search-input" @click="toggleSearch">
            <input
              v-model="searchQuery"
              placeholder="搜索村落..."
              readonly
            />
            <span class="search-icon">▼</span>
          </div>
          <div class="search-dropdown" v-show="showDropdown">
            <div class="category-tabs">
              <button
                v-for="category in categories"
                :key="category.id"
                @click="selectCategory(category)"
                :class="{ active: selectedCategory === category.id }"
              >
                {{ category.name }}
              </button>
            </div>
            <div class="search-results" v-if="showResults && selectedCategory">
              <div
                v-for="village in filteredVillages"
                :key="village.id"
                class="result-item"
                @click="goToVillageDetail(village.id)"
              >
                {{ village.name }}
                <span class="location">{{ village.location }}</span>
              </div>
              <div v-if="filteredVillages.length === 0" class="no-results">
                没有找到相关村落
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="content-container" ref="contentContainer">
      <!-- 主内容区 -->
      <div class="main-content">
        <div class="carousel-container">
          <swiper
            :modules="modules"
            :autoplay="swiperOptions.autoplay"
            :pagination="swiperOptions.pagination"
            :loop="true"
            :speed="800"
          >
            <swiper-slide v-for="(slide, index) in slides" :key="index">
              <img :src="slide.image" :alt="slide.title" class="carousel-image">
              <div class="carousel-caption">
                <h3>{{ slide.title }}</h3>
              </div>
            </swiper-slide>
          </swiper>
        </div>

        <div class="featured-section">
          <h2>精选村落</h2>
          <div class="village-list">
            <div class="village-card" v-for="village in featuredVillages" :key="village.id" @click="goToVillageDetail(village.id)">
              <img :src="village.image" :alt="village.name" class="village-image">
              <div class="village-caption">
                <h3>{{ village.name }}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 文化特色板块 -->
      <div class="culture-features">
        <h2 class="section-title">文化特色</h2>
        <div class="feature-grid">
          <div class="feature-card" v-for="feature in features" :key="feature.id">
            <div class="feature-icon">
              <img :src="feature.icon" :alt="feature.title">
            </div>
            <h3>{{ feature.title }}</h3>
            <p>{{ feature.description }}</p>
          </div>
        </div>
      </div>

      <!-- 村落分类导航 -->
      <div class="village-categories">
        <h2 class="section-title">特色分类</h2>
        <div class="category-grid">
          <div class="category-card" v-for="category in categories" :key="category.id">
            <div class="category-image-container">
              <img :src="category.image" :alt="category.name" class="wide-category-image">
            </div>
            <span>{{ category.name }}</span>
          </div>
        </div>
      </div>

      <!-- 用户评价/故事板块 -->
      <div class="testimonials">
        <h2 class="section-title">旅行者说</h2>
        <div class="testimonial-slider-container">
          <div class="testimonial-slider-wrapper">
            <div
              class="testimonial-slider-track"
              :style="sliderTrackStyle"
              @mouseenter="pauseAutoScroll"
              @mouseleave="resumeAutoScroll"
            >
              <div
                class="testimonial-card"
                v-for="(testimonial, index) in duplicatedTestimonials"
                :key="`${testimonial.id}-${index}`"
                :class="{ 'active': isActive(index) }"
              >
                <p>{{ testimonial.quote }}</p>
                <div class="author">
                  <img :src="testimonial.avatar" :alt="testimonial.author">
                  <span>{{ testimonial.author }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 新闻/活动板块 -->
      <div class="news-section">
        <h2 class="section-title">文化动态</h2>
        <div class="news-list">
          <div class="news-card" v-for="news in newsList" :key="news.id">
            <img :src="news.image" :alt="news.title">
            <div class="news-content">
              <h3>{{ news.title }}</h3>
              <p class="date">{{ news.date }}</p>
              <p class="excerpt">{{ news.excerpt }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 右侧导航按钮 -->
    <div class="right-nav" ref="rightNav">
      <button class="nav-button" @click="scrollToTop">回到顶部</button>
      <button class="nav-button" @click="scrollToSection('.village-museum-title')">村落馆</button>
      <button class="nav-button" @click="scrollToSection('.culture-features')">文化特色</button>
      <button class="nav-button" @click="scrollToSection('.village-categories')">特色分类</button>
      <button class="nav-button" @click="scrollToSection('.testimonials')">旅行者说</button>
      <button class="nav-button" @click="scrollToSection('.news-section')">文化动态</button>
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Pagination, Navigation } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

const clickOutside = {
  beforeMount(el, binding) {
    el.clickOutsideEvent = function(event) {
      if (!(el === event.target || el.contains(event.target))) {
        binding.value(event)
      }
    }
    document.body.addEventListener('click', el.clickOutsideEvent)
  },
  unmounted(el) {
    document.body.removeEventListener('click', el.clickOutsideEvent)
  }
}

export default {
  name: 'HomeView',
  components: {
    NavBar,
    Swiper,
    SwiperSlide
  },
  directives: {
    'click-outside': clickOutside
  },
  data() {
    return {
      isScrolled: false,
      showDropdown: false,
      showResults: false,
      searchQuery: '',
      selectedCategory: null,
      allVillages: [
        { id: 1, name: '潮州古城', category: 'chaoshan', location: '潮州市' },
        { id: 2, name: '龙湖古寨', category: 'chaoshan', location: '汕头市' },
        { id: 3, name: '佛山祖庙', category: 'guangfu', location: '佛山市' },
        { id: 4, name: '沙湾古镇', category: 'guangfu', location: '广州市' },
        { id: 5, name: '雁南飞茶田', category: 'hakka', location: '梅州市' },
        { id: 6, name: '桥溪古韵', category: 'hakka', location: '梅州市' },
        { id: 7, name: '程洋冈村', category: 'chaoshan', location: '汕头市澄海区' },
        { id: 8, name: '前美村', category: 'chaoshan', location: '汕头市澄海区' },
        { id: 9, name: '大岭村', category: 'guangfu', location: '广州市番禺区' },
        { id: 10, name: '松塘村', category: 'guangfu', location: '佛山市南海区' },
        { id: 11, name: '侨乡村', category: 'hakka', location: '梅州市梅县区' },
        { id: 12, name: '南华又庐', category: 'hakka', location: '梅州市梅县区' }
      ],
      categories: [
        {
          id: 'chaoshan',
          name: '潮汕村落',
          image: '/yuecunwenmai1/images/chaoshandiqu/chaozhougucheng/chaozhoushi5.png'
        },
        {
          id: 'guangfu',
          name: '广府村落',
          image: '/yuecunwenmai1/images/guangfudiqu/dalingcun/dalingcun1.png'
        },
        {
          id: 'hakka',
          name: '客家村落',
          image: '/yuecunwenmai1/images/kejiadiqu/yannanfeichatian/yannanfeichatian6.png'
        }
      ],
      featuredVillages: [
        { id: 10, name: '松塘村', image: '/yuecunwenmai1/images/guangfudiqu/songtangcun/songtangcun2.png' },
        { id: 5, name: '雁南飞茶田', image: '/yuecunwenmai1/images/kejiadiqu/yannanfeichatian/yannanfeichatian1.png' },
        { id: 7, name: '程洋冈村', image: '/yuecunwenmai1/images/chaoshandiqu/chengyanggang/chengyanggang2.png' }
      ],
      slides: [
        { title: '佛山祖庙', image: '/yuecunwenmai1/images/guangfudiqu/foshanzumiao/foshanzumiao2.png' },
        { title: '桥溪古镇', image: '/yuecunwenmai1/images/kejiadiqu/qiaoxiguyun/qiaoxiguyun3.png' },
        { title: '龙湖古寨', image: '/yuecunwenmai1/images/chaoshandiqu/longhuguzhai/longhuguzhai3.png' }
      ],
      features: [
        { id: 1, title: '建筑艺术', icon: '/yuecunwenmai1/images/jianzhu/广府（珠三角）地区/灰塑.jpg', description: '建筑融合了中西风格，骑楼、碉楼、祠堂等建筑形式独具特色。' },
        { id: 2, title: '民俗文化', icon: '/yuecunwenmai1/images/民俗文化/潮汕文化/潮剧.jpg', description: '地区保留了丰富的民俗活动，如醒狮、粤剧、龙舟赛等传统节庆。' },
        { id: 3, title: '美食文化', icon: '/yuecunwenmai1/images/美食文化/广府美食/广式早茶文化.jpg', description: '粤菜、潮州菜、客家菜三大菜系汇聚，早茶文化、凉茶文化闻名遐迩。' }
      ],
      testimonials: [
        {
          id: 1,
          quote: '古村落让我感受到了传统文化的魅力，仿佛穿越回了古代。那些精美的雕刻和古老的建筑让我惊叹不已。',
          author: '张先生',
          avatar: '/yuecunwenmai1/images/guangfudiqu/foshanzumiao/foshanzumiao2.png'
        },
        {
          id: 2,
          quote: '客家围屋的建筑智慧令人惊叹，这次旅行让我对客家文化有了更深的了解，收获颇丰。',
          author: '李小姐',
          avatar: '/yuecunwenmai1/images/guangfudiqu/foshanzumiao/foshanzumiao2.png'
        },
        {
          id: 3,
          quote: '潮汕村落的民俗活动非常丰富，我体验了当地的英歌舞表演，感受到了浓厚的文化氛围。',
          author: '王先生',
          avatar: '/yuecunwenmai1/images/guangfudiqu/foshanzumiao/foshanzumiao2.png'
        },
        {
          id: 4,
          quote: '广府村落的岭南园林设计精巧，每一处都透露出岭南人的生活智慧，非常值得一游。',
          author: '赵女士',
          avatar: '/yuecunwenmai1/images/guangfudiqu/foshanzumiao/foshanzumiao2.png'
        },
        {
          id: 5,
          quote: '这次旅行让我对传统村落的保护有了新的认识，希望这些文化遗产能得到更好的传承。',
          author: '刘先生',
          avatar: '/yuecunwenmai1/images/guangfudiqu/foshanzumiao/foshanzumiao2.png'
        }
      ],
      newsList: [
        { id: 1, title: '文化节即将开幕', date: '2023-11-15', excerpt: '一年一度的文化节将在广州举行，展示传统手工艺和民俗表演。', image: '/yuecunwenmai1/images/特色手工艺/织染绣类/香云纱2.jpg' },
        { id: 2, title: '古村落保护论坛召开', date: '2023-11-10', excerpt: '专家学者齐聚一堂，探讨传统村落保护与发展的新路径。', image: '/yuecunwenmai1/images/guangfudiqu/songtangcun/songtangcun5.png' }
      ],
      swiperOptions: {
        modules: [Autoplay, Pagination],
        autoplay: {
          delay: 5000,
          disableOnInteraction: false
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      },
      observer: null,
      sections: [],
      currentScrollPosition: 0,
      scrollInterval: null,
      isPaused: false,
      duplicatedTestimonials: [],
      activeIndex: 0
    }
  },
  computed: {
    filteredVillages() {
      if (!this.selectedCategory) return []
      return this.allVillages.filter(village =>
        village.category === this.selectedCategory
      )
    },
    sliderTrackStyle() {
      return {
        transform: `translateX(-${this.currentScrollPosition}px)`,
        transition: this.isPaused ? 'none' : 'transform 0.5s ease'
      }
    }
  },
  setup() {
    return {
      modules: [Autoplay, Pagination, Navigation]
    }
  },
  mounted() {
    this.initObserver();
    window.addEventListener('scroll', this.handleScroll);
    this.checkScrollPosition();

    // 复制评价数据以实现无限循环
    this.duplicatedTestimonials = [...this.testimonials, ...this.testimonials];

    // 初始化自动滚动
    this.startAutoScroll();
  },
  beforeUnmount() {
    if (this.observer) {
      this.observer.disconnect();
    }
    window.removeEventListener('scroll', this.handleScroll);
    if (this.scrollInterval) {
      clearInterval(this.scrollInterval);
    }
  },
  methods: {
    initObserver() {
      const options = {
        root: null,
        rootMargin: '0px',
        threshold: [0, 0.25, 0.5, 0.75, 1]
      };

      this.observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          const element = entry.target;
          if (entry.isIntersecting) {
            element.classList.add('in-view');
          }
        });
      }, options);

      this.sections = [
        this.$refs.heroSection,
        this.$refs.titleSection,
        this.$refs.searchSection,
        this.$refs.contentContainer,
        this.$refs.rightNav
      ];

      this.sections.forEach(section => {
        if (section) this.observer.observe(section);
      });
    },
    handleScroll() {
      this.checkScrollPosition();
    },
    checkScrollPosition() {
      const heroHeight = this.$refs.heroSection.offsetHeight;
      this.isScrolled = window.scrollY > heroHeight * 0.3;
      this.$refs.homeContainer.classList.toggle('scrolled', this.isScrolled);
    },
    toggleSearch() {
      this.showDropdown = !this.showDropdown
      this.showResults = this.showDropdown && this.selectedCategory
    },
    closeSearch() {
      this.showDropdown = false
      this.showResults = false
      this.selectedCategory = null
    },
    selectCategory(category) {
      this.selectedCategory = category.id
      this.showResults = true
      this.searchQuery = category.name
    },
    goToVillageDetail(id) {
      this.$router.push(`/village/${id}`)
      this.closeSearch()
    },
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    },
    scrollToSection(selector) {
      const element = document.querySelector(selector)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    },
    onTestimonialSwiper(swiper) {
      this.testimonialSwiper = swiper;
    },
    startAutoScroll() {
      const cardWidth = 300; // 根据实际卡片宽度调整
      const totalCards = this.testimonials.length;

      this.scrollInterval = setInterval(() => {
        if (!this.isPaused) {
          this.currentScrollPosition += cardWidth;

          // 当滚动到复制的部分时，重置位置
          if (this.currentScrollPosition >= cardWidth * totalCards) {
            setTimeout(() => {
              this.currentScrollPosition = 0;
            }, 500); // 等待动画完成
          }

          // 更新活动卡片索引
          this.activeIndex = Math.floor(this.currentScrollPosition / cardWidth) % totalCards;
        }
      }, 3000);
    },
    pauseAutoScroll() {
      this.isPaused = true;
    },
    resumeAutoScroll() {
      this.isPaused = false;
    },
    isActive(index) {
      const totalCards = this.testimonials.length;
      const normalizedIndex = index % totalCards;
      return normalizedIndex === this.activeIndex;
    }
  }
}
</script>

<style scoped>
.home {
  scroll-behavior: smooth;
  overflow-x: hidden;
}

.nav-scrolled {
  background-color: rgba(255, 255, 255, 0.95);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  transition: all 0.3s ease;
  animation: fadeInDown 0.3s ease forwards;
}

@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.hero {
  height: 100vh;
  min-height: 600px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
  overflow: hidden;
  opacity: 0;
  transform: translateY(-20px);
  animation: fadeInUp 1s ease forwards;
}

.hero-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
}

.hero-fallback {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
  display: none;
}

/* 当视频无法加载时显示备用图片 */
.hero-video:not([src]) + .hero-fallback {
  display: block;
}

.hero-content {
  position: relative;
  z-index: 1;
  padding: 20px;
  max-width: 800px;
}

.hero-content h1 {
  font-size: 48px;
  margin-bottom: 20px;
  font-weight: 600;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
}

.hero-content p {
  font-size: 24px;
  margin-bottom: 30px;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.8);
}

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.village-museum-title {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 20px;
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s;
}

.village-museum-title.in-view {
  opacity: 1;
  transform: translateY(0);
}

.village-museum-title h2 {
  font-size: 32px;
  color: #333;
  margin: 30px 0;
  padding-bottom: 15px;
  position: relative;
  font-weight: 600;
}

.village-museum-title h2::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 80px;
  height: 3px;
  background-color: #c3a47a;
}

.search-container {
  padding: 20px 0;
  background-color: #f8f8f8;
  position: relative;
  z-index: 10;
  margin-top: 20px;
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.8s ease 0.4s, transform 0.8s ease 0.4s;
}

.search-container.in-view {
  opacity: 1;
  transform: translateY(0);
}

.search-box-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 20px;
}

.search-box {
  width: 100%;
  max-width: 400px;
  position: relative;
}

.search-input {
  display: flex;
  align-items: center;
  background: white;
  border-radius: 30px;
  padding: 10px 15px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  cursor: pointer;
}

.search-input input {
  flex: 1;
  border: none;
  outline: none;
  font-size: 15px;
  cursor: pointer;
  background: transparent;
}

.search-icon {
  margin-left: 8px;
  font-size: 12px;
  color: #666;
}

.search-dropdown {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  width: 100%;
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  margin-top: 10px;
  overflow: hidden;
}

.category-tabs {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  padding: 15px;
  border-bottom: 1px solid #eee;
}

.category-tabs button {
  padding: 8px 15px;
  background: #f5f5f5;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.3s;
}

.category-tabs button:hover,
.category-tabs button.active {
  background: #c3a47a;
  color: white;
}

.search-results {
  max-height: 300px;
  overflow-y: auto;
  padding: 10px 0;
}

.result-item {
  padding: 12px 20px;
  cursor: pointer;
  transition: all 0.2s;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.result-item:hover {
  background: #f8f8f8;
}

.result-item .location {
  font-size: 14px;
  color: #999;
}

.no-results {
  padding: 15px 20px;
  color: #999;
  text-align: center;
}

.content-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 20px;
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.8s ease 0.6s, transform 0.8s ease 0.6s;
}

.content-container.in-view {
  opacity: 1;
  transform: translateY(0);
}

.main-content {
  display: flex;
  padding: 30px 0 60px;
  gap: 40px;
  position: relative;
  align-items: flex-start;
}

.carousel-container {
  flex: 1;
  min-width: 0;
}

.carousel-image {
  width: 100%;
  height: 650px;
  object-fit: cover;
  border-radius: 8px;
  position: relative;
}

.carousel-caption {
  position: absolute;
  bottom: 30px;
  right: 30px;
  background: rgba(0, 0, 0, 0.6);
  color: white;
  padding: 15px 25px;
  border-radius: 6px;
  max-width: 70%;
  text-align: right;
}

.carousel-caption h3 {
  font-size: 24px;
  margin: 0;
}

.featured-section {
  flex: 0 0 300px;
  display: flex;
  flex-direction: column;
  margin-top: -20px;
}

.featured-section h2 {
  font-size: 24px;
  margin-bottom: 20px;
  color: #333;
  text-align: center;
  flex-shrink: 0;
}

.village-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
  flex-grow: 1;
}

.village-card {
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  background: white;
  cursor: pointer;
}

.village-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
}

.village-image {
  width: 100%;
  height: 180px;
  object-fit: cover;
}

.village-caption {
  position: absolute;
  bottom: 10px;
  right: 10px;
  background: rgba(0, 0, 0, 0.6);
  color: white;
  padding: 8px 12px;
  border-radius: 4px;
  max-width: 80%;
  text-align: right;
}

.village-caption h3 {
  font-size: 16px;
  margin: 0;
}

.section-title {
  font-size: 32px;
  color: #333;
  text-align: center;
  margin: 60px 0 40px;
  position: relative;
  padding-bottom: 15px;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 3px;
  background-color: #c3a47a;
}

.culture-features {
  background-color: white;
  padding: 40px 0;
  border-radius: 8px;
  margin-bottom: 40px;
}

.feature-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
}

.feature-card {
  background: white;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  text-align: center;
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
}

.feature-icon {
  width: 80px;
  height: 80px;
  margin: 0 auto 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5f5f5;
  border-radius: 50%; /* 添加这行使图标容器变成圆形 */
  overflow: hidden; /* 确保图片不会超出圆形边界 */
}

.feature-icon img {
  width: 50px;
  height: 50px;
  border-radius: 50%; /* 可选：如果你想让图片本身也是圆形 */
  object-fit: cover; /* 确保图片按比例填充 */
}

.feature-card h3 {
  font-size: 20px;
  margin-bottom: 15px;
  color: #333;
}

.feature-card p {
  font-size: 16px;
  color: #666;
  line-height: 1.6;
}

.village-categories {
  margin-bottom: 60px;
}

.category-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
}

.category-card {
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  background: white;
}

.category-card:hover {
  transform: translateY(-5px);
}

.category-image-container {
  width: 100%;
  height: 250px;
  overflow: hidden;
}

.wide-category-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.category-card:hover .wide-category-image {
  transform: scale(1.05);
}

.category-card span {
  position: absolute;
  bottom: 15px;
  right: 15px;
  background: rgba(0, 0, 0, 0.6);
  color: white;
  padding: 8px 12px;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 500;
  text-align: center;
  width: auto;
  display: inline-block;
  /* 移除之前的位置设置 */
  left: auto;
  transform: none;
  /* 添加以下样式使标签更紧凑 */
  white-space: nowrap;
  max-width: 70%;
  overflow: hidden;
  text-overflow: ellipsis;
}

.testimonials {
  background-color: #f9f9f9;
  padding: 60px 0;
  margin-bottom: 60px;
}

.testimonial-slider-container {
  position: relative;
  max-width: 1000px;
  margin: 0 auto;
  overflow: hidden;
}

.testimonial-slider-wrapper {
  width: 100%;
  overflow: hidden;
}

.testimonial-slider-track {
  display: flex;
  width: max-content;
  will-change: transform;
}

.testimonial-card {
  background: white;
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  position: relative;
  min-height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 300px;
  margin-right: 30px;
  flex-shrink: 0;
  opacity: 0.5;
  transition: opacity 0.5s ease;
}

.testimonial-card.active {
  opacity: 1;
}

.testimonial-card p {
  font-size: 18px;
  line-height: 1.6;
  color: #333;
  margin-bottom: 25px;
  font-style: italic;
}

.testimonial-card::before {
  content: '"';
  font-size: 80px;
  color: #c3a47a;
  position: absolute;
  top: 15px;
  left: 15px;
  opacity: 0.2;
}

.author {
  display: flex;
  align-items: center;
}

.author img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 15px;
}

.author span {
  font-size: 16px;
  font-weight: 500;
  color: #333;
}

/* Swiper导航按钮样式 */
.swiper-button-next,
.swiper-button-prev {
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 50%;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  color: #c3a47a;
  transition: all 0.3s ease;
}

.swiper-button-next:hover,
.swiper-button-prev:hover {
  background: white;
  transform: scale(1.1);
}

.swiper-button-next::after,
.swiper-button-prev::after {
  font-size: 20px;
  font-weight: bold;
}

.news-section {
  margin-bottom: 60px;
}

.news-list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
}

.news-card {
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
}

.news-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
}

.news-card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.news-content {
  padding: 25px;
}

.news-content h3 {
  font-size: 20px;
  margin-bottom: 10px;
  color: #333;
}

.date {
  font-size: 14px;
  color: #999;
  margin-bottom: 15px;
}

.excerpt {
  font-size: 16px;
  color: #666;
  line-height: 1.6;
}

.right-nav {
  position: fixed;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  gap: 10px;
  z-index: 1000;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
}

.right-nav.in-view {
  opacity: 1;
  visibility: visible;
}

.nav-button {
  background-color: #c3a47a;
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
  transition: all 0.3s ease;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  white-space: nowrap;
}

.nav-button:hover {
  background-color: #a68562;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
}

@media (max-width: 1200px) {
  .main-content {
    flex-direction: column;
  }

  .carousel-image {
    height: 400px;
  }

  .featured-section {
    margin-top: 0;
    height: auto;
  }

  .category-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 992px) {
  .hero {
    height: 400px;
  }

  .hero-content h1 {
    font-size: 36px;
  }

  .hero-content p {
    font-size: 18px;
  }

  .section-title {
    font-size: 28px;
    margin: 40px 0;
  }

  .testimonial-slider {
    grid-template-columns: 1fr;
  }

  .news-list {
    grid-template-columns: 1fr;
  }

  .search-box {
    max-width: 350px;
  }

  .category-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .hero {
    height: 350px;
  }

  .hero-content h1 {
    font-size: 30px;
  }

  .hero-content p {
    font-size: 16px;
  }

  .search-container {
    padding: 20px 0;
  }

  .search-box {
    max-width: 100%;
  }

  .search-input {
    padding: 8px 12px;
  }

  .carousel-image {
    height: 400px;
  }

  .featured-section {
    margin-top: 0;
  }

  .village-image {
    height: 150px;
  }

  .feature-grid {
    grid-template-columns: 1fr;
  }

  .category-grid {
    grid-template-columns: 1fr;
  }

  .right-nav {
    display: none;
  }
}

@media (max-width: 576px) {
  .hero {
    height: 300px;
  }

  .hero-content h1 {
    font-size: 24px;
  }

  .hero-content p {
    font-size: 16px;
  }

  .carousel-image {
    height: 300px;
  }

  .carousel-caption {
    bottom: 15px;
    right: 15px;
    padding: 10px 15px;
  }

  .carousel-caption h3 {
    font-size: 18px;
  }
}
</style>
