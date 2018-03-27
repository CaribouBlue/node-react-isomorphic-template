const renderHtml = (rootContent, title='Isomorphic Template') => {
	return `
		<!doctype html>
		<html>
		<head>
			<title>${title}</title>
			<link rel="stylesheet" href="/css/main.css">
		</head>
		<body>
			<div id="root">${rootContent}</div>
		</body>
		</html>
	`
}

export default renderHtml;