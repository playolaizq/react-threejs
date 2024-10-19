import { useEffect } from 'react';
import { useAnimations, useGLTF } from '@react-three/drei';

function Model({ modelUrl }) {
  const gltf = useGLTF(modelUrl);
  const { ref, actions } = useAnimations(gltf.animations)

  useEffect(() => {
    if (actions) {
      // Loop through all actions and play them
      Object.values(actions).forEach((action) => {
        action.play();
      });
    }
  }, [actions]);

  return <primitive ref={ref} object={gltf.scene} />;
}

export default Model;
