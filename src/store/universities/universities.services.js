import firebase from 'firebase'
const db = firebase.firestore();

export const getUniversities = async () => {
    try {
        const universitiesQuerySnapshot = await db.collection('universities').get()
        const unis = []
        universitiesQuerySnapshot.forEach(doc => {
            const uni = doc.data();
            unis.push(uni.name)
        })
        return unis;
    } catch (err) {
        console.log(err)
    }
}