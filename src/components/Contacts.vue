<template>
<div class="container">
  <form action="" method="POST">
    <div class="mb-3">
      <label for="name" class="form-label">Name</label>
      <input type="text" class="form-control" id="name" name="name" placeholder="Enter your name">
    </div>

    <div class="mb-3">
      <label for="email" class="form-label">Your Email</label>
      <input type="email" class="form-control" id="email" name="email" placeholder="Enter your email">
    </div>

    <div class="mb-3">
      <label for="message" class="form-label">Your Message</label>
      <textarea class="form-control" id="message" name="message" rows="5" placeholder="Enter your message"></textarea>
    </div>

    <button type="submit" class="btn btn-primary">Send</button>
  </form>
</div>



</template>
    
<script>
    export default {
      
    } 
</script>
    
<style lang="scss" scoped>
</style>