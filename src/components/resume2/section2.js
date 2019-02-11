import React from 'react'
import styled from 'styled-components';
import { sectionHeader, sectionTitle, sectionContainer } from './styles';

export default class Section extends React.Component {
    render(){
        return (
            <SectionContainerDiv>

                <div className="sectionTitle">
                    <h3>{this.props.section.title}</h3>
                </div>
                {this.props.section.items.map(school => {
                    if(school.key && school.key != 'example'){
                        return (
                        <div key={school.key}>
                            <strong className="sectionHeader">
                                <span className="left">{school.left}</span>
                                <a className="center" href="https://learn.lambdaschool.com/course/cs-fsw" target="_blank">{school.center}</a>
                                <span className="right">{school.right}</span>
                            </strong>
                            <div className="details">
                                <ul>
                                    {school.line1 ? <li>
                                                        <strong>{school.bold1}</strong>
                                                        {school.line1}
                                                    </li> : null}
                                    {school.line2 ? <li>
                                                        <strong>{school.bold2}</strong>
                                                        {school.line2}
                                                    </li> : null}
                                    {school.line3 ? <li>
                                                        <strong>{school.bold3}</strong>
                                                        {school.line3}
                                                    </li> : null}
                                </ul>
                            </div>
                        </div>
                        )
                    } 
                })}
            </SectionContainerDiv>
        )
    }
}

const SectionContainerDiv = styled.div`
    /* border: 1px solid red; */
    ${sectionContainer()}
    .sectionTitle {
        /* border: 1px solid blue; */
        ${sectionTitle()}
    }
    .sectionHeader {
        text-decoration: none;
       ${sectionHeader()}
    }
`