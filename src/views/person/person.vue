<template>
    <div>
        我是person
    </div>
</template>

<script>
export default {
  name: 'person',
  beforeRouteEnter: (to, from, next) => {
    console.log(this)
    console.log('进入之前')
    next()
  }
}
</script>
