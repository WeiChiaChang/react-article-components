import mq from '../../utils/media-query'
import predefinedPropTypes from '../../constants/prop-types'
import React, { PureComponent } from 'react'
import styled from 'styled-components'
import typography from '../../constants/typography'
// lodash
import get from 'lodash/get'

const _ = {
  get,
}

const Title = styled.div`
  color: ${props => props.theme.elementColors.infoboxTitle};
  line-height: 1.9;
  letter-spacing: 0.7px;
  font-weight: ${typography.font.weight.bold};
  font-size: 20px;
  ${mq.desktopOnly`
    width: 480px;
  `}
  ${mq.hdOnly`
    width: 580px;
  `}
  margin: 0 auto 21px auto;
`

const Content = styled.div`
  color: ${props => props.theme.elementColors.infoboxContent};
  line-height: 1.75;
  letter-spacing: 0.5px;
  font-weight: ${typography.font.weight.light};
  font-size: 16px;
  ${mq.desktopOnly`
    width: 480px;
  `}
  ${mq.hdOnly`
    width: 580px;
  `}
  margin: 0 auto;
`

const Container = styled.div`
  background: ${props => props.theme.elementColors.infoboxBackground};
  position: relative;
  margin: 60px auto;
  ${mq.desktopAndAbove`
    padding-top: 40px;
    padding-bottom: 40px;
  `}
  ${mq.desktopOnly`
    width: 549px;
  `}
  ${mq.hdOnly`
    width: 729px;
  `}
  &::before {
    /* sides of the triangle: 58 48 33 */
    content: "";
    display: block;
    width: 58px;
    height: 1px;
    transform: rotate(34.51deg);
    transform-origin: right center;
    position: absolute;
    right: -15px;
    top: 28px;
    background: ${props => props.theme.elementColors.line};
  }
  &::after {
    /*
      sides of the triangle: 58 48 33 (px)
      translate hori: -6, verti: 11 (px)
    */
    content: "";
    display: block;
    width: 58px;
    height: 1px;
    transform: rotate(34.51deg);
    transform-origin: left center;
    position: absolute;
    left: -6px;
    bottom: 22px;
    background: ${props => props.theme.elementColors.line};
  }
`

export default class Infobox extends PureComponent {
  static propTypes = {
    data: predefinedPropTypes.elementData.isRequired,
  }

  render() {
    const { data } = this.props
    const contentHtmlString = _.get(data, ['content', 0, 'body'], '')
    const title = _.get(data, ['content', 0, 'title'], '')
    return contentHtmlString ? (
      <Container>
        {title ? <Title>{title}</Title> : null}
        <Content dangerouslySetInnerHTML={{ __html: contentHtmlString }} />
      </Container>
    ) : null
  }
}
