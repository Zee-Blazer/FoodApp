
const breakDownSimple = (e) => {

    let data = [];

    Object.entries(e).forEach( ([key, value]) => {
        
        data.push({
            dataId: key,
            ...value
        })
    } )

    return data;
}

export {
    breakDownSimple
}
