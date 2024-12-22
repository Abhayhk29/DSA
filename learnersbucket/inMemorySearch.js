let data = [
    {name : "Abhay", rating: 8.5, year: 2017},
    {name : "Nirbhay", rating: 8.7, year: 2022},
    {name : "Nitya", rating: 8.2, year: 2023},
    {name : "Nitu", rating: 9.1, year: 2001},
    {name : "Ajay", rating: 9.5, year: 1987},
]


class InMemorySearch {
    constructor(){
        this.dataEntities = new Map();
    }

    registerNameSpace(name){
        this.dataEntities.set(name,[]);
    }

    addDocument(nameSpace, documents){
        const checkExisting = this.dataEntities.get(nameSpace);

        if(!checkExisting){
            this.dataEntities.set(nameSpace, documents);
        }else{
            this.dataEntities.set(nameSpace, [...checkExisting, ...documents])
        }
    }

    search(nameSpace,filterD,order){
        const docs = this.dataEntities.get(nameSpace);

        // filter data

        const filtereredData = docs.filter((e) => filterD(e));


        if(order){
            const {key , asc} = order;

            return filtereredData.sort((a,b) => {
                if(asc){
                    return a[key] - b[key]
                }else{
                    return b[key] - a[key]
                }
            })
        }

        return filtereredData
    }
}

const searchEngine = new  InMemorySearch()
searchEngine.addDocument('Family', data);

console.log(searchEngine.search('Family', (e) => e.rating > 8.7, {key:'rating', asc:false}))