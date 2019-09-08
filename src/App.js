import React from 'react';
import styled from 'styled-components';
import HTML5Backend from 'react-dnd-html5-backend';
import { Route } from 'react-router-dom';
import { withRouter } from 'react-router'
import { DragDropContext } from 'react-dnd';
import { ResumePrintPage, ResumePage, WebPortfolioPage, MediaPortfolioPage, HomePage, BlogPage } from './pages'
import { 
  NavBar, 
  Footer
 } from './components'
 import {connect} from 'react-redux';
import { updateLogs, createSession, sendLogs } from './redux/actions.js'
import uuidv4 from 'uuid/v4'

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      lastUpdateFetched: false,
      lastUpdate: '',
      showHeaders: true,
    }
  }

  componentDidMount(){
    if(localStorage.getItem('uuid')){
      let id = localStorage.getItem('uuid')
      this.props.createSession(id)
    } else {
      let id = uuidv4()
      console.log('id', id)
      localStorage.setItem(`uuid`, id)
      this.props.createSession(id)
    }
  }

  hideHeaders = () => {
    this.setState({
      showHeaders: false,
    })
  }
  
  showHeaders = () => {
    this.setState({
      showHeaders: true,
    })
  }

  leftApp = () => {
    const log = {
      time: Date.now(),
      action: 'exit',
      component: 'app'
    }
    this.props.updateLogs(log)
    this.props.sendLogs(this.props.state)
  }

  returnToApp = () => {
    const log = {
      time: Date.now(),
      action: 'enter',
      component: 'app'
    }
    this.props.updateLogs(log)
  }

  render() {
    return (
      <AppDiv onMouseLeave={(e) => this.leftApp(e)} onMouseEnter={(e) => this.returnToApp(e)}>
        {this.state.showHeaders ? <NavBar /> : null}
          <Route exact path="/print" render={() => {
            return <ResumePrintPage hideHeaders={this.hideHeaders} showHeaders={this.showHeaders}/>}} />
          <Route path="/resume" render={ResumePage} />
          <Route path="/web" component={WebPortfolioPage} />
          <Route path="/media" component={MediaPortfolioPage} />
          <Route path="/blog" render={(a) => <BlogPage a={a} />} />
          <Route exact path="/" render={() => <HomePage openAuth={this.openAuth} />} />
        {this.state.showHeaders ? <Footer /> : null}
      </AppDiv>
    );
  }
}

const AppDiv = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin: 0;
    padding: 0; 
`;

const mapStateToProps = state => {
  return {state};
}

export default connect(mapStateToProps, {updateLogs, createSession, sendLogs})(DragDropContext(HTML5Backend)(withRouter(App)));