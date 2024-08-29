## Blank Project

npx create-expo-app@latest . --template blank // JSX

## General dependencies

npm install @react-navigation/native @react-navigation/native-stack @react-navigation/bottom-tabs react-native-screens react-native-safe-area-context

## Switch to TYPESCRIPT

npm i --save-dev typescript @types/react @types/react-native

> create tsconfig.json
> {

    "compilerOptions": {

    "target": "esnext",
    "module": "esnext",
    "jsx": "react-native",
    "strict": true,
    "noEmit": true,
    "skipLibCheck": true,
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true

},
"exclude": [
"node_modules",
"babel.config.js",
"metro.config.js",
"jest.config.js"
],
"extends": "expo/tsconfig.base"
}

> Change App.js to App.tsx
