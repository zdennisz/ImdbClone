import React, { memo } from 'react'
import "./SocialMediaButton.css"

const SocialMediaButton = (props) => {
    const { key, link, iconStyle } = props
    return <li key={key}><a href={link}><i className={iconStyle + " custom_fab"}></i></a></li>

}

export default memo(SocialMediaButton)