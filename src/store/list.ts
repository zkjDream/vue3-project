import { defineStore } from 'pinia';
// 每个store可看做一个hook。相互引用即调用不同hook
const getData = () => {
  return new Promise<number>((resolve) => {
   const handeltime = setTimeout(() => {
    clearTimeout(handeltime)
      resolve(Math.random() * 100);
    }, 200);
  });
};

export const useListStore = defineStore('list', {
  state: () => {
    return {
      list: [] as number[],
    };
  },
  actions: {
    async updateList() {
      try {
        const data = await getData();
        this.list.push(data);
      } catch {
        /* empty */
        console.log('updateList some error');
        
      }
    },
  },
});
