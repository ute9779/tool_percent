<template>
  <div>
    <h1>{{ inputTotal }}</h1>
    <h2>入力欄追加</h2>
    <button @click="addInput()">追加</button>
    <button @click="calculateTotal()">計算</button>
    <h2>数値名</h2>
    <div v-for="input in inputList" :key="String(input)" >
      <div>
        {{ String(inputList.indexOf(input)) }}
        <input :id="String(inputList.indexOf(input))" type="number" value=0 >
        <button @click="completeTask(input)">削除</button>
      </div>
      <div>

      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const inputList = ref<number[]>([0, 1, 2]);

const inputTotal: Ref<number> = ref(0);

const addInput = async() => {
  if( inputList.value.length > 0 ){
    let index: number = inputList.value.length - 1;
    await inputList.value.push(inputList.value[index] + 1);
  } else {
    inputList.value.push(0);
  }
}
const completeTask = (completedId: number) => {
  inputList.value = inputList.value.filter((id) => completedId !== id);
}

const calculateTotal = () => {
  let _length = inputList.value.length
  let _total: number = 0
    for(let i = 0; i < _length; i++){
      let _inputElem: any | null = document.getElementById(String(i))
      if( _inputElem ){
        _total = _total + Number( _inputElem.value )
      }
    }
  inputTotal.value = _total
}

onMounted(() => {
  calculateTotal()
})
</script>