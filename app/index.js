// 源码https://github.com/xiaolin3303/react-music-player
// var react=require('react');

import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Root from './root';

// console.log(React.version);

render(
	<AppContainer>
		<Root/>
	</AppContainer>,
	document.getElementById('root')
);

if(module.hot){
	module.hot.accept('./root',()=>{
		const NewRoot=require('./root').default;
		render(
			<AppContainer>
				<NewRoot/>
			</AppContainer>,
			document.getElementById('root')
		);
	});
}