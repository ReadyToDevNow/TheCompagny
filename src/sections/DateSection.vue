<template>
  <!-- Date section start -->
  <section id="date-section" class="px-12 lg:px-32 py-16 border-t border-stone-500 relative">
    <div class="uppercase text-5xl mb-4 font-semibold">Nos dates</div>
    <div>Test</div>
    <img
      @click="instagramLink"
      src="@/assets/instagram-logo.png"
      alt="icon-instagram"
      class="size-16"
    />
  </section>
  <!-- Date section end-->
</template>

<script setup>
function instagramLink() {
  window.open(
    'https://www.instagram.com/toifemininessentielle.nanette?igsh=MXQ1cnZmYzBkeDdyOQ==',
    '_blank',
  )
}
</script>

<style></style>
