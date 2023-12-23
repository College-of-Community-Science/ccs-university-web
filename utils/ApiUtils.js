import axios from 'axios';

export const getBlogPosts = async () => {
    try {
        const res = await axios({
            method: "GET",
            url: "https://www.googleapis.com/blogger/v3/blogs/7389360823382759257/posts?key=AIzaSyAfIpMpLP9b9qUwhcIRfDFUbnDKlMVNZfw"
        });
        return res.data;
    } catch (e) {
        console.error("NEWS API GET ERROR: ", e);
        throw e;
    }
};


export const getRibbonLinks = async () => {
    try {
        const res = await axios({
            method: "GET",
            url: "https://www.googleapis.com/blogger/v3/blogs/7389360823382759257/pages/1803382778305227363?key=AIzaSyAfIpMpLP9b9qUwhcIRfDFUbnDKlMVNZfw"
        });
        return res.data;
    } catch (e) {
        console.log("RIBBON API GET ERROR: ", e);
        throw e;
    }
}