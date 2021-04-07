# Gatsby-template
My own gastby template with Typescript and styled-components
With some sugar
# Usage
Simply copy code or use:
```shell
	gatsby new 'project_name' https://github.com/Untlsn/gatsby-template
```
# Used technology 
- [gatsby](https://github.com/gatsbyjs/gatsby)
- [typescript](https://github.com/microsoft/TypeScript)
- [styled-components](https://github.com/styled-components/styled-components)
- [jest](https://github.com/facebook/jest) + [Enzyme](https://github.com/enzymejs/enzyme)
- [react-helmet](https://github.com/nfl/react-helmet)
- [eslint](https://github.com/eslint/eslint)

# Own addons
- **all.ts files**
Simple file that exports all files default as it's  names
```js
	export { default as fileName } from './fileName.ts'; 
```
- **Provider with style**
It's provide theme and global style from assets and requier array of used fonts (as props)
```jsx
	<StyleProvider fonts={arrayWithFonts}>
		<div>rest</div>
	</StyleProvider>
```
- **useBoolState**
Useful hook to treat with boolean state
```js
	const [boolVal, changeBool] = useBoolState(initialValue);
```
- **own method of adding aliases**
Aliases are added by special function createAlias
```js
	...createAlias('src', [
		'pages', // src/pages
		'components', // src/components etc.
		'hooks',
		'helpers',
		'assets',
		'providers',
	]),
```

# Default code style
- [Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/)
- Files in component directory named by role
	- style.ts for styled components
	- types.ts for types
	- test.tsx for tests
	- helpers.ts for helpers (functions)
	- data.ts for data
	- etc...
- Minimal main component file (move to special files like above)
- Yarn as main package manager



