import React, { Component } from 'react';
export const Book = ({title="No Title", author="Auth", pages=0, freeBookmark}) => {
    return(
      <section>
        <h2>Title : {title}</h2>
        <p> by : {author}</p>
        <p> pages : {pages}</p>
        <p> Free Bookmark : {freeBookmark? 'yes' : 'no'}</p>
      </section>
    )
  }