import Tweet from "./Tweet";

const TweetCommentBig = () => (
  <>
    <Tweet styles={{ isTweetHideBorder: true, drawLine: "bottom" }} />
    <Tweet
      styles={{ drawLine: "top" }}
      image="https://store.nintendo.com.pe/media/catalog/product/cache/1aff59ff6f21b2058ac5563c018426d7/j/u/jungle_dlc_artboardeshop_banner__1920x1080.jpg"
    />
  </>
);

export default TweetCommentBig;
