import React, { Component } from 'react';
import './ImageSlider.css';
import week01Page001 from '../WeekFolders/week_01/week_01_page_001.png';
import week01Page002 from '../WeekFolders/week_01/week_01_page_002.png';
import week01Page003 from '../WeekFolders/week_01/week_01_page_003.png';
import week01Page004 from '../WeekFolders/week_01/week_01_page_004.png';
import week01Page005 from '../WeekFolders/week_01/week_01_page_005.png';
import week01Page006 from '../WeekFolders/week_01/week_01_page_006.png';
import week01Page007 from '../WeekFolders/week_01/week_01_page_007.png';
import week01Page008 from '../WeekFolders/week_01/week_01_page_008.png';
import folder from '../Images/folder_placeholder.jpeg'

class ImageSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chat: [],
      currentMessage: '',
      imgs: [
        { id: 0, value: week01Page001 },
        { id: 1, value: week01Page002 },
        { id: 2, value: week01Page003 },
        { id: 3, value: week01Page004 },
        { id: 4, value: week01Page005 },
        { id: 5, value: week01Page006 },
        { id: 6, value: week01Page007 },
        { id: 7, value: week01Page008 },
      ],
      currentImgIndex: 0, // Add this to maintain the current image index
    };
  }

  handleClick = (index) => {
    // Use this.setState to update the current image index
    this.setState({ currentImgIndex: index });
  }

  handleNext = () => {
    this.setState(prevState => ({
      currentImgIndex: prevState.currentImgIndex < prevState.imgs.length - 1
        ? prevState.currentImgIndex + 1
        : prevState.currentImgIndex
    }));
  }

  handlePrevious = (event) => {
    this.setState(prevState => ({
      currentImgIndex: prevState.currentImgIndex > 0
        ? prevState.currentImgIndex - 1
        : prevState.currentImgIndex
    }));
  }
  handleKeyPress = (event) => {
    // Check if the pressed key is "Enter" (keyCode 13)
    if (event.key === 'Enter') {
      // Trigger the click event when "Enter" is pressed
      this.handleSend();
    }
  };

  handleInputChange = (event) => {
    this.setState({ currentMessage: event.target.value });
  };

  handleSend = () => {
    const userMessage = this.state.currentMessage;
    if (userMessage.trim() !== '') {
      // Add user message to chat
      this.setState(prevState => ({
        chat: [...prevState.chat, { from: 'You', msg: userMessage }],
        currentMessage: '', // Clear the current message
      }));

      // Simulate bot response
      setTimeout(() => {
        this.setState(prevState => ({
          chat: [...prevState.chat, { from: 'Bot', msg: userMessage }],
        }));
      }, 500);
    }
  };


  render() {
    const { imgs, currentImgIndex, chat, currentMessage } = this.state;
    const wordData = imgs[currentImgIndex];

    return (
      <div className="container">
        <div className="box">
          <div className="slide">
            <img src={folder} alt="Week 1" />
            <div className="slide-name">Week1</div>
          </div>
          <div className="slide">
            <img src={folder} alt="Week 1" />
            <div className="slide-name">Week2</div>
          </div>
          <div className="slide">
            <img src={folder} alt="Week 1" />
            <div className="slide-name">Week3</div>
          </div>
          <div className="slide">
            <img src={folder} alt="Week 1" />
            <div className="slide-name">Week5</div>
          </div>
          <div className="slide">
            <img src={folder} alt="Week 1" />
            <div className="slide-name">Week6</div>
          </div>
          <div className="slide">
            <img src={folder} alt="Week 1" />
            <div className="slide-name">Week7</div>
          </div>
          <div className="slide">
            <img src={folder} alt="Week 1" />
            <div className="slide-name">Week8</div>
          </div>

        </div>
        <div className="box">
          <div className="main">
            <button className='btns' onClick={this.handlePrevious}>P</button>
            <img src={wordData.value} height="90%" width="90%" />
            <button className='btns' onClick={this.handleNext}>N</button>
            <div className='flex_row'>
              {imgs.map((data, i) =>
                <div className="thumbnail" key={i} >
                  <img className={wordData.id == i ? "clicked" : ""} src={data.value} onClick={() => this.handleClick(i)} height="70" width="100" />
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="box">
          <div className="box">
            {/* Chat box with messages */}
            <div className="chatbox">
              <div className="chat-messages">
                {chat.map((msg, index) => (
                  <div key={index} className={`chat-message ${msg.from === 'You' ? 'sender' : 'bot'}`}>
                    {msg.msg}
                  </div>
                ))}
              </div>
              <div className="chat-input-container">
                <input
                  type="text"
                  className="chat-input"
                  placeholder="Ask a question here"
                  value={this.state.currentMessage}
                  onChange={this.handleInputChange}
                  onKeyPress={event => {
                    if (event.key === 'Enter') {
                      this.handleSend();
                    }
                  }}
                />
                <button onClick={this.handleSend} className="chat-send">Send</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ImageSlider;
