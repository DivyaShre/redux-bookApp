import React, {Component} from 'react';
import {connect} from 'react-redux';

class BookDetail extends Component{
	render(){

		if(!this.props.book){
			return <div>Click on a book to get started! </div>
		}

		return(
			<div>
				<h5>Book Details: </h5>
				<div>Title : {this.props.book.title}</div>
				<div>Pages : {this.props.book.pages}</div>
				<div>Genre : {this.props.book.genre}</div>
			</div>
		);
	}
}

function mapStateToProps(state){
	return{
		book: state.activeBook
	};
}

export default connect(mapStateToProps)(BookDetail);