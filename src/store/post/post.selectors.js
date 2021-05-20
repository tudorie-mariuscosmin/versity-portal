export const getAllPosts = state => state.post.posts;

export const getUserPosts = state => {
    return decorateLikedPosts(state).filter(post => post.user.uid === state.user.uid).sort(sortByDate)
}

export const getUniPosts = state => {
    return decorateLikedPosts(state).filter(post => post.university === state.user.uni).sort(sortByDate)
}

export const getSelectedUniPosts = (state, uni) => {
    return decorateLikedPosts(state).filter(post => post.university === uni).sort(sortByDate);
}

const sortByDate = (a, b) => b.date - a.date;


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