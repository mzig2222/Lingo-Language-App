import React, { useState, useEffect } from 'react';
import Scene from './components/js/Scene';
import HomeScreen from './components/js/HomeScreen';
import storiesData from './data/stories.json';

function App() {
  const [showHome, setShowHome] = useState(true);
  const [currentSceneId, setCurrentSceneId] = useState('scene_1');
  const [story] = useState(storiesData.stories[0]);
  const [scene, setScene] = useState(null);

  useEffect(() => {
    if (!showHome) {
      const foundScene = story.scenes.find(s => s.id === currentSceneId);
      setScene(foundScene);
    }
  }, [currentSceneId, story, showHome]);

  const handleChoice = (nextSceneId) => {
    setCurrentSceneId(nextSceneId);
  };

  const handleStart = () => {
    setShowHome(false);
  };

  if (showHome) {
    return <HomeScreen onStart={handleStart} />;
  }

  if (!scene) return <div>Loading...</div>;

  return (
    <div>
      <h1>{story.title}</h1>
      <Scene scene={scene} onChoice={handleChoice} />
    </div>
  );
}

export default App;
