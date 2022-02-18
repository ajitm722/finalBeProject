import { collection, limit, onSnapshot, orderBy, query, QuerySnapshot } from 'firebase/firestore'
import React from 'react'
import { loadDB } from '../firebase/firebase'

class RecentNews extends React.Component {
  static async getInitialProps() {
    const storageAndFirestore = await loadDB();
    console.log("connecting to firestore");
    const collectionRef = collection(storageAndFirestore.firestore, "recentNews");
    const q = query(collectionRef, orderBy("timestamp", "desc"));
    const recentNews = [];
    const data = onSnapshot(q, (QuerySnapshot)=>{
        recentNews.push(QuerySnapshot);
    });
    return { recentNews };
  }

  render() {
    return <div>Next stars: {this.props.recentNews}</div>
  }
}

export default RecentNews
