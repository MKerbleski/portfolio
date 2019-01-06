import React from 'react';
import styled from 'styled-components';
import HTML5Backend from 'react-dnd-html5-backend';
import { Route } from 'react-router-dom';
import { withRouter } from 'react-router'
import { DragDropContext } from 'react-dnd';
import { ResumePrintPage, ResumePage, WebPortfolioPage, MediaPortfolioPage, HomePage } from './pages'
import { 
  NavBar, 
  Footer
 } from './components'

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      lastUpdateFetched: false,
      lastUpdate: '',
      showHeaders: true,
    }
  }

  openAuth(){
    console.log('openAuth')
  };

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

  render() {
    return (
      <AppDiv>
        {this.state.showHeaders ? <NavBar /> : null}
          <Route exact path="/print" render={() => {
            return <ResumePrintPage hideHeaders={this.hideHeaders} showHeaders={this.showHeaders}/>}} />
          <Route path="/resume" render={ResumePage} />
          <Route path="/web" component={WebPortfolioPage} />
          <Route path="/media" component={MediaPortfolioPage} />
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

export default DragDropContext(HTML5Backend)(withRouter(App));