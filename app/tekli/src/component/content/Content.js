import React from 'react';
import Description from '../description/Description';
import Resume from '../resume/Resume';
import Footer from '../footer/Footer';
import './Content.css';


class Content extends React.Component {
  render() {
    return (
      <div className="contentView">
        <Description />
        <Resume />
        <Footer />
      </div>
    );
  }
}

export default Content;