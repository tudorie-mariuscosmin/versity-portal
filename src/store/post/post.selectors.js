export const getAllPosts = state => state.post.posts;
export const getUserPosts = state => {
    //return state.post.posts ? state.post.posts.filter(post => post.user.uid === state.user.uid).sort((a, b) => b.date - a.date) : []
    return decorateLikedPosts(state).filter(post => post.user.uid === state.user.uid).sort((a, b) => b.date - a.date);
}

const decorateLikedPosts = state => {
    return state.post.posts.map(post => {
        const postData = { ...post }
        postData.liked = false
        if (state.user.liked.some(likedPost => likedPost === post.id)) {
            postData.liked = true
        }
        return postData
    })
}