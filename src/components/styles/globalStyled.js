import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
	/* reset style */
	*,
	::after,
	::before {
	box-sizing: border-box;
	}

	html, body, div, span, applet, object, iframe,
	h1, h2, h3, h4, h5, h6, p, blockquote, pre,
	a, abbr, acronym, address, big, cite, code,
	del, dfn, em, img, ins, kbd, q, s, samp,
	small, strike, strong, sub, sup, tt, var,
	b, u, i, center,
	dl, dt, dd, ol, ul, li,
	fieldset, form, label, legend,
	table, caption, tbody, tfoot, thead, tr, th, td,
	article, aside, canvas, details, embed, 
	figure, figcaption, footer, header, hgroup, 
	menu, nav, output, ruby, section, summary,
	time, mark, audio, video {
		margin: 0;
		padding: 0;
		border: 0;
		font-size: 100%;
		font: inherit;
		vertical-align: baseline;
	}

	html, body{
		height: 100%;
	}
	
	body {
		line-height: 1;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
	}

	#root {
		height: 100%;
	}

	ol, ul {
		list-style: none;
	}

	a {
		text	
	}

	h1,h2,h3,h4,h5,h6 {
		font-weight: 700;
	  }
	  h1 {
		font-size: 6.8rem;
		line-height: 7.8rem;
	  }
	  h2 {
		font-size: 4.2rem;
		line-height: 5.2rem;
	  }
	  h3 {
		font-size: 2.6rem;
		line-height: 2.6rem;
	  }
	  h4 {
		font-size: 2.4rem;
		line-height: 2.6rem;
	  }
	  h5 {
		font-size: 1.8rem;
		line-height: 2.6rem;
	  }
	  h6 {
		font-size: 1.6rem;
		line-height: 2.6rem;
	  }

	  input {
		outline: none;
		border: none;
	  }

	  :root {
		--main-text: #fff;
		--main-background: #F6F5F5;
		--navbar-background: #1E385F;
		--footer-background: #3A6190;
	}
	
	.container {
		border: 2px solid red;
	}
`

export default GlobalStyle