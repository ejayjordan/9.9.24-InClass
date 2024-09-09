//import dog from "./dog"
import Nav from "./navigation"
import tweetsDisplay from "./tweetdisplay"

export default function Home() {

  const tweets = "Something about pizza";

  return (
    <div>
      <div id="content">
      <Nav />
      <tweetsDisplay tweetData={tweets}/>
      </div>
    </div>
  );
}
