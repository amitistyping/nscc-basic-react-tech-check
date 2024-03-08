import React from 'react';

function MapImage({ src, alt }) {
	return (
		<div>
			<h2>Featured Map: Dust II</h2>
			<img src={src} alt={alt} style={{ maxWidth: '100%', height: 'auto' }} />
		</div>
	);
}

export default MapImage;
