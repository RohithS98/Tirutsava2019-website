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

function Post(props){
	return (
		<div className = "post">
			{props.value.content}
		</div>
	);
}

class NewsFeed extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
      		posts: [
        		{content: 'This is my first post!'},
        		{content: 'This is my second post!'}
      		]
    	};
	}
	
	render(){
		const posts = this.state.posts.map((post, index) =>
      	<Post key={index} value={post} />
    		);
    	return (
      		<div className="feed">
      			<span>NewsFeed</span>
        		{posts}
        		<span className = "smallLink">See More >></span>
      		</div>
		);
	}
}

class Page extends React.Component {
	render() {
		return (
		<div>
			<div className = "imageHolder">
				<SlideShow />
			</div>
			<div className = "NewsFeed">
				<NewsFeed />
			</div>
		</div>
		);
	}
}

ReactDOM.render(
  <Page />,
  document.getElementById('root')
);

