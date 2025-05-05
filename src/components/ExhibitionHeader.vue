<template>
  <div class="header-image" :style="{ backgroundImage: 'url(' + image + ')' }">
    <div class="header-content">
      <h1>{{ title }}</h1>
      <p>{{ description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ExhibitionHeader',
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    image: {
      type: String,
      default: '/images/1.jpg'
    }
  }
}
</script>

<style scoped>
.header-image {
  width: 100%;
  max-width: 1240px;
  height: 400px;
  margin: 0 auto;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.header-content {
  text-align: center;
  color: white;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.8);
  padding: 40px;
  border-radius: 8px;
  max-width: 800px;
  background-color: rgba(0, 0, 0, 0.3);
}

.header-content h1 {
  font-size: 48px;
  margin-bottom: 20px;
}

.header-content p {
  font-size: 24px;
}

@media (max-width: 768px) {
  .header-image {
    height: 300px;
    max-width: 100%;
    padding: 0 20px;
  }

  .header-content {
    padding: 20px;
  }

  .header-content h1 {
    font-size: 36px;
  }

  .header-content p {
    font-size: 18px;
  }
}
</style>
