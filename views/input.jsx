import React from 'react';
import PropTypes from 'prop-types';

export default React.createClass({
  propTypes: {
    data: PropTypes.object,
    onClassify: PropTypes.func.isRequired,
  },

  getDefaultProps() {
    return { text: '' };
  },

  getInitialState() {
    return { text: '' };
  },

  /**
   * When pressing the Ask button
   */
  onSubmit() {
    this.props.onClassify(this.state.text);
  },

  /**
   * On sample question click
   */
  onSampleQuestionClick(e) {
    this.setState({ text: e.target.text });
    this.props.onClassify(e.target.text);
  },

  /**
   * During changes to the text input
   */
  handleInputChange(e) {
    this.setState({ text: e.target.value });
  },

  /**
   * On Input text key press
   */
  handleKeyPress(e) {
    if (e.key === 'Enter') {
      this.props.onClassify(this.state.text);
    }
  },
  render() {
    return (
      <div>
        <h2 className="base--h2">
          Ask a question about the weather
        </h2>
        <p className="base--p">
          Watch the Natural Language Classifier
          categorize your weather-related question. In this demo, the classifier is
          trained to determine whether the question is related
          to <code className="base--code">temperature</code> or &nbsp;<code className="base--code">conditions</code>.
          The output includes the top classification and a confidence score.
        </p>
        <div className="question-input">
          <div className="question-input--input-container">
            <input
              type=""
              autoFocus
              value={this.state.text}
              onChange={this.handleInputChange}
              onKeyPress={this.handleKeyPress}
              id="question"
              placeholder="Enter a weather question or Try a sample question below *"
              className="base--input question-input--input"
              required="true"
            />
          </div>
          <div className="question-input--button-container">
            <button
              disabled={this.state.text.trim().length === 0}
              onClick={this.onSubmit}
              className="base--button question-input--submit-button"
            >
              Ask
            </button>
          </div>
          <div className="disclaimer--message">
            <h6 className="base--h6">
              * This system is for demonstration purposes only and is not intended to process
              Personal Data. No Personal Data is to be entered into this system as it may not
              have the necessary controls in place to meet the requirements of the General Data
              Protection Regulation (EU) 2016/679.
            </h6>
          </div>
        </div>
        <h3 className="base--h3">
          Sample questions
        </h3>

        <div className="sample-questions">
          <div className="sample-questions--left">
            <ul className="base--ul">
              <li className="base--li">
                <a
                  className="base--a"
                  onClick={this.onSampleQuestionClick}
                >
                  Is it hot outside?
                </a>
              </li>
              <li className="base--li">
                <a
                  className="base--a"
                  onClick={this.onSampleQuestionClick}
                >
                  What is the expected high for today?
                </a>
              </li>
              <li className="base--li">
                <a
                  className="base--a"
                  onClick={this.onSampleQuestionClick}
                >
                  Will it be foggy tomorrow morning?
                </a>
              </li>
              <li className="base--li">
                <a
                  className="base--a"
                  onClick={this.onSampleQuestionClick}
                >
                  Should I prepare for sleet?
                </a>
              </li>
              <li className="base--li">
                <a
                  className="base--a"
                  onClick={this.onSampleQuestionClick}
                >
                  Will there be a storm today?
                </a>
              </li>
            </ul>
          </div>
          <div className="sample-questions--right">
            <p className="base--p">
              The classifier often scores well with terms that it hasn&apos;t
              been trained on. In the sample questions, the words &quot;sleet,&quot; or
              &quot;foggy,&quot; are not part of the&nbsp;
              <a
                className="base--a"
                href="https://github.com/watson-developer-cloud/natural-language-classifier-nodejs/blob/master/training/weather_data_train.csv"
                target="_blank"
                rel="noopener noreferrer"
              >
                training data
              </a>
              , yet the classifier correctly handles questions about them.
            </p>
          </div>
        </div>
      </div>
    );
  },
});
