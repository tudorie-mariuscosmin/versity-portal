export const getAllPosts = state => state.post.posts;
export const getUserPosts = state => {
    return state.post.posts ? state.post.posts.filter(post => post.user.uid === state.user.uid).sort((a, b) => b.date - a.date) : []
}