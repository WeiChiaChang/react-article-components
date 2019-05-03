import Annotation from './annotation'
import Blockquote from './blockquote'
import Brief from './brief'
import CenteredQuote from './centered-quote'
import Image from './image'
import Infobox from './infobox'
import Paragraph from './paragraph'
import predefinedPropTypes from '../../constants/prop-types'
import PropTypes from 'prop-types'
import React, { PureComponent } from 'react'
import Slideshow from './slideshow'
// lodash
import map from 'lodash/map'

const _ = {
  map,
}

function getElementComponent(type) {
  switch (type) {
    case 'annotation':
      return Annotation
    case 'audio':
      return null
    case 'centered-quote':
      return CenteredQuote
    case 'blockquote':
      return Blockquote
    case 'quoteby':
      return null
    case 'header-one':
      return null
    case 'header-two':
      return null
    case 'code':
      return null
    case 'embeddedCode':
    case 'embeddedcode':
      return null
    case 'small-image':
    case 'image':
    case 'image-link':
      /*
        The `image-link` in keystone editor is using `embedded-code` component actually currently.
        If we add a `image-link` type in the future, we just have to make the data format of `image-link` and `image` the same.
      */
      return Image
    case 'imageDiff':
    case 'imagediff':
      return null
    case 'infobox':
      return Infobox
    case 'ordered-list-item':
      return null
    case 'unordered-list-item':
      return null
    case 'unstyled':
      return Paragraph
    case 'slideshow':
      return Slideshow
    case 'youtube':
      return null
    default:
      return null
  }
}

export default class Body extends PureComponent {
  static propTypes = {
    brief: PropTypes.arrayOf(predefinedPropTypes.elementData),
    content: PropTypes.arrayOf(predefinedPropTypes.elementData),
    renderBrief: PropTypes.func.isRequired,
    renderElement: PropTypes.func.isRequired,
  }

  static defaultProps = {
    brief: [],
    content: [],
  }

  _buildContentElement = data => {
    const Ele = getElementComponent(data.type)
    if (!Ele) return null
    return this.props.renderElement(Ele, data)
  }

  render() {
    const { brief, content } = this.props
    const contentJsx = Array.isArray(content)
      ? _.map(content, this._buildContentElement)
      : null
    return (
      <div>
        {this.props.renderBrief(Brief, brief)}
        {contentJsx}
      </div>
    )
  }
}
