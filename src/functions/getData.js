import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";




export const getData =(categoryId,categoryArticleId,setProds)=>{

const db = getFirestore()
const queryCollection = collection(db,'productos')      

const queryCollectionFilter = categoryId ? query(queryCollection, where('category', '==', categoryId)) : categoryArticleId ? query(queryCollection, where('categoryArticle', '==', categoryArticleId)) : queryCollection

getDocs(queryCollectionFilter)
.then(resp => setProds( resp.docs.map(product => ({id: product.id, ...product.data()}) )))
.catch(err => console.log(err))

}