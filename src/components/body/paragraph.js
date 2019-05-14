import predefinedPropTypes from '../../constants/prop-types'
import React from 'react'
import styled from 'styled-components'
import styles from '../../constants/css'
// lodash
import get from 'lodash/get'

const _ = {
  get,
}

const P = styled.p`
  ${styles.body.width.normal}
  ${styles.paragraphText}
  ${styles.linkChildren}
  margin: 2.62em auto 2.62em auto;
`

export default function Paragraph({ data }) {
  const innerHtmlString = _.get(data, ['content', 0])
  return innerHtmlString ? (
    <P dangerouslySetInnerHTML={{ __html: innerHtmlString }} />
  ) : null
}

Paragraph.propTypes = {
  data: predefinedPropTypes.elementData,
}
