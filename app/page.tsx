import Image from "next/image";

import axios from "axios";

let VideoFullscreen = (source: any) => <video src={source} />;

{
  /* <Video
ref={video}
style={styles.video}
source={{
  uri: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
}}
useNativeControls
resizeMode={ResizeMode.CONTAIN}
isLooping
onPlaybackStatusUpdate={status => setStatus(() => status)}
/> */
}

export default function Home() {
  return (
    <div>
      <video
        src={require("https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4")}
      />
    </div>
  );
}
