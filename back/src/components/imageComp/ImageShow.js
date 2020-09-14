import React from 'react';
import { Image } from 'antd';

function ImageShow(props) {
  return (
    <Image
      width={props.width || 40}
      style={props.style}
      src="logo.jpg"
    />
  );
}

export default ImageShow;