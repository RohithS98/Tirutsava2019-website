import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Image(props){
	return (
		<img className = 'center'
			src = {props.image}
			alt = {props.image}>
		</img>
	);
}

class SlideShow extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			current : 0,
			max1 : 4,
			images : ['images.jpeg','img1.png',
					  'img3.jpg','Random-turtle.gif'],
		};
	}

	handleClick(i){
		let next = (this.state.current+i)%this.state.max1;
		if(next<0){
			next = next + 4;
		}
		this.setState({current : next,
					   max1 : this.state.max1,
					   images : this.state.images,});
	}

	renderImage(){
		return (
      	<Image
        image={this.state.images[this.state.current]}
      />
    );
	}

	render(){
		return (
			<div className = "SlideShow">
				<div className = "imageBox">
					{this.renderImage()}
				</div>
				<div>
					<button className = "PicButtonLeft" onClick = {()=>this.handleClick(-1)}>Prev</button>
					<button className = "PicButtonRight" onClick = {()=>this.handleClick(1)}>Next</button>
				</div>
			</div>
		);
	}
}

class Page extends React.Component {
	render() {
		return (
			<div className = "imageHolder">
				<SlideShow />
			</div>
		);
	}
}

ReactDOM.render(
  <Page />,
  document.getElementById('root')
);

