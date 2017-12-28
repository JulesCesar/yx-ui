
<template> 
<div>
    <demo-block>
      
      <van-tag type="danger">1</van-tag>
      <van-tag type="success">1</van-tag>
      <yx-tagmini type="primary">1</yx-tagmini>
    </demo-block>

    <demo-block>
      <van-tag plain type="danger">1</van-tag>
      <van-tag plain type="primary">1</van-tag>
      <van-tag plain type="success">1</van-tag>
    </demo-block>

    <demo-block>
      <van-tag mark type="danger">1</van-tag>
      <van-tag mark type="primary">1</van-tag>
      <van-tag mark type="success">1</van-tag>
    </demo-block> 
    </div>
</template>

<script>
export default {
  name: 'yx-tagmini',

  data(){
    
    return {
      
    }
  },
  
  
};
</script>

<style lang="postcss">
.demo-tag {
  .van-tag + .van-tag {
    margin-left: 10px;
  }

  .van-tag {
    &:first-of-type {
      margin-left: 15px;
    }
  }
}
</style>

