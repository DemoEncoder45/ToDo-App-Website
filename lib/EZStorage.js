class EZStorage {
    constructor(storage){        
        this.storage = storage; 
    }

    addItem(item){
        const itemKey = this.getItemKey();
        const itemList = JSON.parse(this.getItemList());

        const itemInfo = {
            itemId:itemKey,
            itemTitle:item,
        };

        itemList.push(itemInfo);

        this.storage.setItem("list",JSON.stringify(itemList));
        this.incrementItemKey(itemKey);
    }

    deleteItem(id){
       const itemList = this.getAllItem();
       const itemToDelete = itemList.filter(({itemId}) => Number(itemId) === Number(id))[0];
       if(itemToDelete){
         const deletedItem = itemList.splice(itemList.indexOf(itemToDelete),1);
         this.storage.setItem('list',JSON.stringify(itemList));
         return deletedItem;
       }
       return "there's no task with this id";
    }

    getItemKey(){
        const key = this.storage.getItem("counter");
        return (key)  ? key : this.setItemKey();
    }

    setItemKey(){
        this.storage.setItem('counter','0');
        return this.storage.getItem("counter");
    }

    getItemList(){
        const list = this.storage.getItem("list");
        return (list) ? list : this.setItemList();
    }

    setItemList(){
        this.storage.setItem("list",JSON.stringify([]));
        return this.storage.getItem("list");
    }

    incrementItemKey(key){
        this.storage.setItem('counter',Number(key) + 1);
    }


    getAllItem(){
        const itemList = JSON.parse(this.getItemList());
        return itemList;
    }
 
}


export default EZStorage