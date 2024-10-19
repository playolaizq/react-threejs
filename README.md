# React + Three.js

React + Three.js example using Littlest Tokyo by Glen Fox

## Getting Started

```bash
git clone https://github.com/playolaizq/react-threejs.git

cd react-threejs

npm install

npm run dev
```

See http://127.0.0.1:5173/

## Documentation

### Ambient Light

This light globally illuminates all objects in the scene equally.

This light cannot be used to cast shadows as it does not have a direction.

```jsx
<ambientLight />
```

### Directional Light

A light that gets emitted in a specific direction. This light will behave as though it is infinitely far away and the rays produced from it are all parallel. The common use case for this is to simulate daylight; the sun is far enough away that its position can be considered to be infinite, and all light rays coming from it are parallel.

```jsx
<directionalLight />
```

### Hemisphere Light

A light source positioned directly above the scene, with color fading from the sky color to the ground color.

This light cannot be used to cast shadows.

```jsx
<hemisphereLight />
```

## References

- [Perspective Camera I](https://threejs.org/docs/#api/en/cameras/PerspectiveCamera)
- [Perspective Camera II](https://drei.docs.pmnd.rs/cameras/perspective-camera)
- [Orbit Controls](https://threejs.org/docs/#examples/en/controls/OrbitControls)
- [Ambient Light](https://threejs.org/docs/#api/en/lights/AmbientLight)
- [Directional Light](https://threejs.org/docs/#api/en/lights/DirectionalLight)
- [Hemisphere Light](https://threejs.org/docs/#api/en/lights/HemisphereLight)
- [useGLTF hook](https://drei.docs.pmnd.rs/loaders/gltf-use-gltf#usegltf-hook)
- [useAnimations hook](https://drei.docs.pmnd.rs/abstractions/use-animations#useanimations)
