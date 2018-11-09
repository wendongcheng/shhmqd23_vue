

const KEY = "GOODS"



// 获取本地商品数量
const getLocalGoods = () =>{
    return JSON.parse(localStorage.getItem(KEY) || '{}')
}

// 获取总数量

const getTotalCount = () =>{
    const localGoods = getLocalGoods()

    let totalCount = 0

    for(var key in localGoods){
        totalCount+=localGoods[key]
    }

    return totalCount
}

// 把商品信息存储到本地

const addLocalGoods = goods =>{
    const localGoods = getLocalGoods()


    if(localGoods[goods.goodsId]){
        localGoods[goods.goodsId]+=goods.count
    }else{
        localGoods[goods.goodsId] = goods.count
    }


    // 把对象作为字符串覆盖回去原来的东西
    localStorage.setItem(KEY,JSON.stringify(localGoods))

    return getTotalCount()
}


const updateLocalGoods = goods =>{

    const localGoods = getLocalGoods()

    localGoods[goods.goodsId] = goods.count

    // 把对象作为字符串覆盖回去原来的东西
    localStorage.setItem(KEY,JSON.stringify(localGoods))

    return getTotalCount()
}


const deleteLocalGoods = goodsId =>{
    const localGoods = getLocalGoods()

    delete localGoods[goodsId]

    // 把对象作为字符串覆盖回去原来的东西
    localStorage.setItem(KEY,JSON.stringify(localGoods))

    return getTotalCount()
}

export{
    addLocalGoods,
    getTotalCount,
    getLocalGoods,
    updateLocalGoods,
    deleteLocalGoods
}


