import React, { memo } from 'react'
import SocialMediaButton from '../SocialMediaButton/SocialMediaButton'
import "./SocialMediaBar.css"

const SocialMediaBar = (props) => {
    const { data } = props
    let listOfSocials = data.map((item, index) => {
        return <SocialMediaButton key={index.toString()} link={item.link} iconStyle={item.iconStyle} />
    })

    return <ul className="social_list">{listOfSocials}</ul>
}

export default memo(SocialMediaBar)