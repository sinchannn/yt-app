import React,{useState,useEffect} from 'react';
import SearchBar from './videoshooks/SearchBar';
import useVideos from './videoshooks/useVideos';
import VideoDetail from './videoshooks/VideoDetail';
import VideoList from './videoshooks/VideoList';


const App=()=>{
    const [selectedVideo,setSelectedVideo]=useState(null);
    const [videos,search]=useVideos('buggati');
   
    useEffect(()=>{
        setSelectedVideo(videos[0]);
    },[videos]);

       return(
        <div className="ui container"  style={{marginTop:'30px'}}>
             <SearchBar onFormSubmit={search} />
            <div className="ui grid">
                <div className="ui row">
                    <div className="eleven wide column">
                        <VideoDetail video={selectedVideo} />
                    </div>
                     <div className="five wide column">
                        <VideoList videos={videos} 
                        onVideoSelect={setSelectedVideo} />
                     </div>
                </div>
            </div>
        </div>
    );
}

export default App;