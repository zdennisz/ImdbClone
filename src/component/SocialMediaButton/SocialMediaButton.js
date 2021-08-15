import React, { memo } from 'react'
import "./SocialMediaButton.css"

const SocialMediaButton = (props) => {
    const { link, iconStyle } = props
    return <li ><a href={link}><i className={iconStyle + " custom_fab"}></i></a></li>

}

export default memo(SocialMediaButton)