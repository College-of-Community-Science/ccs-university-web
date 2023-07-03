import axios from 'axios';

export const getBlogPosts = async () => {
    try {
        const res = await axios({
            method: "GET",
            url: "https://www.googleapis.com/blogger/v3/blogs/7389360823382759257/posts?key=AIzaSyAfIpMpLP9b9qUwhcIRfDFUbnDKlMVNZfw"
        });
        return res.data;
    } catch (e) {
        console.error("BLOG API GET ERR: ", e);
        throw e;
    }
};
