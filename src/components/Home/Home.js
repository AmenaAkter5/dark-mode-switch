// import React, { useState, useEffect } from 'react';
import React from 'react';


class Car extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
        };
    }


    componentDidMount() {
        // document.title = `You clicked ${this.state.count} times`;
        const fetchPosts = async () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            const postsData = await response.json();
            this.setState({ posts: postsData });
        };
        fetchPosts();
    }


    /* 
    useEffect(() => {
        const fetchPosts = async () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            const postsData = await response.json();
            this.setState({ posts: postsData });
        };
        fetchPosts();
    }, []) 
    */


    render() {
        return (
            <div>
                {this.state.posts.map((post) => (
                    <div>
                        <span>{post.title}</span>
                        <span>{post.body}</span>
                    </div>
                ))}
            </div>
        );
    }
}

export default Car;