# GeoJSON Web App

This web app is designed to retrieve "GeoJSON features" of a location specified by coordinates, serving as a geolocation box. The frontend is implemented using the React JS framework, and it interacts with the OpenStreetMap API to gather information in "osm" format, converting it to "GeoJSON" for proper display of the dataset.

## Technologies Used
- React +TypeScript + Vite 
- OpenStreetMap API (https://www.openstreetmap.org/api/0.6/map)
- `osmtogeojson` for data type conversion

## Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/geojson-web-app.git

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
