<template>
  <nav class="detail-nav">
    <div class="nav-container">
      <!-- 返回按钮放在最左边 -->
      <button @click="goBack" class="back-button">
        &larr; 返回村落列表
      </button>

      <!-- 如果有其他导航内容，确保它们不会影响返回按钮的位置 -->
      <!-- 例如： -->
      <!-- <div class="nav-right">
        其他导航内容
      </div> -->
    </div>
  </nav>
</template>

<script>
export default {
  name: 'DetailNavBar',
  methods: {
    goBack() {
      this.$router.go(-1); // 或者使用 this.$router.push('/villages')
    }
  }
}
</script>

<style scoped>
.detail-nav {
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 15px 20px;
  display: flex;
  justify-content: flex-start; /* 确保内容从左边开始 */
  align-items: center;
}

.back-button {
  background: none;
  border: none;
  color: #333;
  font-size: 16px;
  cursor: pointer;
  padding: 8px 0;
  display: flex;
  align-items: center;
  transition: color 0.3s;
}

.back-button:hover {
  color: #007bff;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .nav-container {
    padding: 10px 15px;
  }

  .back-button {
    font-size: 14px;
  }
}
</style>
